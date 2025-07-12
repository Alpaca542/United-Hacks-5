(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var om={exports:{}},hu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var GE;function S1(){if(GE)return hu;GE=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:i,type:s,key:c,ref:a!==void 0?a:null,props:l}}return hu.Fragment=e,hu.jsx=t,hu.jsxs=t,hu}var KE;function A1(){return KE||(KE=1,om.exports=S1()),om.exports}var ue=A1(),lm={exports:{}},Re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var YE;function w1(){if(YE)return Re;YE=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),T=Symbol.iterator;function w(D){return D===null||typeof D!="object"?null:(D=T&&D[T]||D["@@iterator"],typeof D=="function"?D:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,$={};function H(D,Z,ie){this.props=D,this.context=Z,this.refs=$,this.updater=ie||x}H.prototype.isReactComponent={},H.prototype.setState=function(D,Z){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,Z,"setState")},H.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function ae(){}ae.prototype=H.prototype;function le(D,Z,ie){this.props=D,this.context=Z,this.refs=$,this.updater=ie||x}var te=le.prototype=new ae;te.constructor=le,F(te,H.prototype),te.isPureReactComponent=!0;var ye=Array.isArray,se={H:null,A:null,T:null,S:null,V:null},he=Object.prototype.hasOwnProperty;function N(D,Z,ie,J,me,Ne){return ie=Ne.ref,{$$typeof:i,type:D,key:Z,ref:ie!==void 0?ie:null,props:Ne}}function b(D,Z){return N(D.type,Z,void 0,void 0,void 0,D.props)}function C(D){return typeof D=="object"&&D!==null&&D.$$typeof===i}function M(D){var Z={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(ie){return Z[ie]})}var k=/\/+/g;function V(D,Z){return typeof D=="object"&&D!==null&&D.key!=null?M(""+D.key):Z.toString(36)}function I(){}function Yt(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(I,I):(D.status="pending",D.then(function(Z){D.status==="pending"&&(D.status="fulfilled",D.value=Z)},function(Z){D.status==="pending"&&(D.status="rejected",D.reason=Z)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function mt(D,Z,ie,J,me){var Ne=typeof D;(Ne==="undefined"||Ne==="boolean")&&(D=null);var Ae=!1;if(D===null)Ae=!0;else switch(Ne){case"bigint":case"string":case"number":Ae=!0;break;case"object":switch(D.$$typeof){case i:case e:Ae=!0;break;case E:return Ae=D._init,mt(Ae(D._payload),Z,ie,J,me)}}if(Ae)return me=me(D),Ae=J===""?"."+V(D,0):J,ye(me)?(ie="",Ae!=null&&(ie=Ae.replace(k,"$&/")+"/"),mt(me,Z,ie,"",function(hi){return hi})):me!=null&&(C(me)&&(me=b(me,ie+(me.key==null||D&&D.key===me.key?"":(""+me.key).replace(k,"$&/")+"/")+Ae)),Z.push(me)),1;Ae=0;var Ut=J===""?".":J+":";if(ye(D))for(var st=0;st<D.length;st++)J=D[st],Ne=Ut+V(J,st),Ae+=mt(J,Z,ie,Ne,me);else if(st=w(D),typeof st=="function")for(D=st.call(D),st=0;!(J=D.next()).done;)J=J.value,Ne=Ut+V(J,st++),Ae+=mt(J,Z,ie,Ne,me);else if(Ne==="object"){if(typeof D.then=="function")return mt(Yt(D),Z,ie,J,me);throw Z=String(D),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return Ae}function G(D,Z,ie){if(D==null)return D;var J=[],me=0;return mt(D,J,"","",function(Ne){return Z.call(ie,Ne,me++)}),J}function ne(D){if(D._status===-1){var Z=D._result;Z=Z(),Z.then(function(ie){(D._status===0||D._status===-1)&&(D._status=1,D._result=ie)},function(ie){(D._status===0||D._status===-1)&&(D._status=2,D._result=ie)}),D._status===-1&&(D._status=0,D._result=Z)}if(D._status===1)return D._result.default;throw D._result}var pe=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function je(){}return Re.Children={map:G,forEach:function(D,Z,ie){G(D,function(){Z.apply(this,arguments)},ie)},count:function(D){var Z=0;return G(D,function(){Z++}),Z},toArray:function(D){return G(D,function(Z){return Z})||[]},only:function(D){if(!C(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Re.Component=H,Re.Fragment=t,Re.Profiler=a,Re.PureComponent=le,Re.StrictMode=s,Re.Suspense=m,Re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=se,Re.__COMPILER_RUNTIME={__proto__:null,c:function(D){return se.H.useMemoCache(D)}},Re.cache=function(D){return function(){return D.apply(null,arguments)}},Re.cloneElement=function(D,Z,ie){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var J=F({},D.props),me=D.key,Ne=void 0;if(Z!=null)for(Ae in Z.ref!==void 0&&(Ne=void 0),Z.key!==void 0&&(me=""+Z.key),Z)!he.call(Z,Ae)||Ae==="key"||Ae==="__self"||Ae==="__source"||Ae==="ref"&&Z.ref===void 0||(J[Ae]=Z[Ae]);var Ae=arguments.length-2;if(Ae===1)J.children=ie;else if(1<Ae){for(var Ut=Array(Ae),st=0;st<Ae;st++)Ut[st]=arguments[st+2];J.children=Ut}return N(D.type,me,void 0,void 0,Ne,J)},Re.createContext=function(D){return D={$$typeof:c,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:l,_context:D},D},Re.createElement=function(D,Z,ie){var J,me={},Ne=null;if(Z!=null)for(J in Z.key!==void 0&&(Ne=""+Z.key),Z)he.call(Z,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(me[J]=Z[J]);var Ae=arguments.length-2;if(Ae===1)me.children=ie;else if(1<Ae){for(var Ut=Array(Ae),st=0;st<Ae;st++)Ut[st]=arguments[st+2];me.children=Ut}if(D&&D.defaultProps)for(J in Ae=D.defaultProps,Ae)me[J]===void 0&&(me[J]=Ae[J]);return N(D,Ne,void 0,void 0,null,me)},Re.createRef=function(){return{current:null}},Re.forwardRef=function(D){return{$$typeof:d,render:D}},Re.isValidElement=C,Re.lazy=function(D){return{$$typeof:E,_payload:{_status:-1,_result:D},_init:ne}},Re.memo=function(D,Z){return{$$typeof:g,type:D,compare:Z===void 0?null:Z}},Re.startTransition=function(D){var Z=se.T,ie={};se.T=ie;try{var J=D(),me=se.S;me!==null&&me(ie,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(je,pe)}catch(Ne){pe(Ne)}finally{se.T=Z}},Re.unstable_useCacheRefresh=function(){return se.H.useCacheRefresh()},Re.use=function(D){return se.H.use(D)},Re.useActionState=function(D,Z,ie){return se.H.useActionState(D,Z,ie)},Re.useCallback=function(D,Z){return se.H.useCallback(D,Z)},Re.useContext=function(D){return se.H.useContext(D)},Re.useDebugValue=function(){},Re.useDeferredValue=function(D,Z){return se.H.useDeferredValue(D,Z)},Re.useEffect=function(D,Z,ie){var J=se.H;if(typeof ie=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return J.useEffect(D,Z)},Re.useId=function(){return se.H.useId()},Re.useImperativeHandle=function(D,Z,ie){return se.H.useImperativeHandle(D,Z,ie)},Re.useInsertionEffect=function(D,Z){return se.H.useInsertionEffect(D,Z)},Re.useLayoutEffect=function(D,Z){return se.H.useLayoutEffect(D,Z)},Re.useMemo=function(D,Z){return se.H.useMemo(D,Z)},Re.useOptimistic=function(D,Z){return se.H.useOptimistic(D,Z)},Re.useReducer=function(D,Z,ie){return se.H.useReducer(D,Z,ie)},Re.useRef=function(D){return se.H.useRef(D)},Re.useState=function(D){return se.H.useState(D)},Re.useSyncExternalStore=function(D,Z,ie){return se.H.useSyncExternalStore(D,Z,ie)},Re.useTransition=function(){return se.H.useTransition()},Re.version="19.1.0",Re}var QE;function yg(){return QE||(QE=1,lm.exports=w1()),lm.exports}var $e=yg(),um={exports:{}},fu={},cm={exports:{}},hm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WE;function b1(){return WE||(WE=1,function(i){function e(G,ne){var pe=G.length;G.push(ne);e:for(;0<pe;){var je=pe-1>>>1,D=G[je];if(0<a(D,ne))G[je]=ne,G[pe]=D,pe=je;else break e}}function t(G){return G.length===0?null:G[0]}function s(G){if(G.length===0)return null;var ne=G[0],pe=G.pop();if(pe!==ne){G[0]=pe;e:for(var je=0,D=G.length,Z=D>>>1;je<Z;){var ie=2*(je+1)-1,J=G[ie],me=ie+1,Ne=G[me];if(0>a(J,pe))me<D&&0>a(Ne,J)?(G[je]=Ne,G[me]=pe,je=me):(G[je]=J,G[ie]=pe,je=ie);else if(me<D&&0>a(Ne,pe))G[je]=Ne,G[me]=pe,je=me;else break e}}return ne}function a(G,ne){var pe=G.sortIndex-ne.sortIndex;return pe!==0?pe:G.id-ne.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();i.unstable_now=function(){return c.now()-d}}var m=[],g=[],E=1,T=null,w=3,x=!1,F=!1,$=!1,H=!1,ae=typeof setTimeout=="function"?setTimeout:null,le=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;function ye(G){for(var ne=t(g);ne!==null;){if(ne.callback===null)s(g);else if(ne.startTime<=G)s(g),ne.sortIndex=ne.expirationTime,e(m,ne);else break;ne=t(g)}}function se(G){if($=!1,ye(G),!F)if(t(m)!==null)F=!0,he||(he=!0,V());else{var ne=t(g);ne!==null&&mt(se,ne.startTime-G)}}var he=!1,N=-1,b=5,C=-1;function M(){return H?!0:!(i.unstable_now()-C<b)}function k(){if(H=!1,he){var G=i.unstable_now();C=G;var ne=!0;try{e:{F=!1,$&&($=!1,le(N),N=-1),x=!0;var pe=w;try{t:{for(ye(G),T=t(m);T!==null&&!(T.expirationTime>G&&M());){var je=T.callback;if(typeof je=="function"){T.callback=null,w=T.priorityLevel;var D=je(T.expirationTime<=G);if(G=i.unstable_now(),typeof D=="function"){T.callback=D,ye(G),ne=!0;break t}T===t(m)&&s(m),ye(G)}else s(m);T=t(m)}if(T!==null)ne=!0;else{var Z=t(g);Z!==null&&mt(se,Z.startTime-G),ne=!1}}break e}finally{T=null,w=pe,x=!1}ne=void 0}}finally{ne?V():he=!1}}}var V;if(typeof te=="function")V=function(){te(k)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,Yt=I.port2;I.port1.onmessage=k,V=function(){Yt.postMessage(null)}}else V=function(){ae(k,0)};function mt(G,ne){N=ae(function(){G(i.unstable_now())},ne)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(G){G.callback=null},i.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<G?Math.floor(1e3/G):5},i.unstable_getCurrentPriorityLevel=function(){return w},i.unstable_next=function(G){switch(w){case 1:case 2:case 3:var ne=3;break;default:ne=w}var pe=w;w=ne;try{return G()}finally{w=pe}},i.unstable_requestPaint=function(){H=!0},i.unstable_runWithPriority=function(G,ne){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var pe=w;w=G;try{return ne()}finally{w=pe}},i.unstable_scheduleCallback=function(G,ne,pe){var je=i.unstable_now();switch(typeof pe=="object"&&pe!==null?(pe=pe.delay,pe=typeof pe=="number"&&0<pe?je+pe:je):pe=je,G){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=pe+D,G={id:E++,callback:ne,priorityLevel:G,startTime:pe,expirationTime:D,sortIndex:-1},pe>je?(G.sortIndex=pe,e(g,G),t(m)===null&&G===t(g)&&($?(le(N),N=-1):$=!0,mt(se,pe-je))):(G.sortIndex=D,e(m,G),F||x||(F=!0,he||(he=!0,V()))),G},i.unstable_shouldYield=M,i.unstable_wrapCallback=function(G){var ne=w;return function(){var pe=w;w=ne;try{return G.apply(this,arguments)}finally{w=pe}}}}(hm)),hm}var XE;function R1(){return XE||(XE=1,cm.exports=b1()),cm.exports}var fm={exports:{}},an={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $E;function C1(){if($E)return an;$E=1;var i=yg();function e(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)g+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(m,g,E){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:T==null?null:""+T,children:m,containerInfo:g,implementation:E}}var c=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return an.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,an.createPortal=function(m,g){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(m,g,null,E)},an.flushSync=function(m){var g=c.T,E=s.p;try{if(c.T=null,s.p=2,m)return m()}finally{c.T=g,s.p=E,s.d.f()}},an.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(m,g))},an.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},an.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var E=g.as,T=d(E,g.crossOrigin),w=typeof g.integrity=="string"?g.integrity:void 0,x=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;E==="style"?s.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:T,integrity:w,fetchPriority:x}):E==="script"&&s.d.X(m,{crossOrigin:T,integrity:w,fetchPriority:x,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},an.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var E=d(g.as,g.crossOrigin);s.d.M(m,{crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(m)},an.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var E=g.as,T=d(E,g.crossOrigin);s.d.L(m,E,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},an.preloadModule=function(m,g){if(typeof m=="string")if(g){var E=d(g.as,g.crossOrigin);s.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:E,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(m)},an.requestFormReset=function(m){s.d.r(m)},an.unstable_batchedUpdates=function(m,g){return m(g)},an.useFormState=function(m,g,E){return c.H.useFormState(m,g,E)},an.useFormStatus=function(){return c.H.useHostTransitionStatus()},an.version="19.1.0",an}var ZE;function I1(){if(ZE)return fm.exports;ZE=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),fm.exports=C1(),fm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var JE;function N1(){if(JE)return fu;JE=1;var i=R1(),e=yg(),t=I1();function s(n){var r="https://react.dev/errors/"+n;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var r=n,o=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(o=r.return),n=r.return;while(n)}return r.tag===3?o:null}function c(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function d(n){if(l(n)!==n)throw Error(s(188))}function m(n){var r=n.alternate;if(!r){if(r=l(n),r===null)throw Error(s(188));return r!==n?null:n}for(var o=n,u=r;;){var f=o.return;if(f===null)break;var p=f.alternate;if(p===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===o)return d(f),n;if(p===u)return d(f),r;p=p.sibling}throw Error(s(188))}if(o.return!==u.return)o=f,u=p;else{for(var v=!1,S=f.child;S;){if(S===o){v=!0,o=f,u=p;break}if(S===u){v=!0,u=f,o=p;break}S=S.sibling}if(!v){for(S=p.child;S;){if(S===o){v=!0,o=p,u=f;break}if(S===u){v=!0,u=p,o=f;break}S=S.sibling}if(!v)throw Error(s(189))}}if(o.alternate!==u)throw Error(s(190))}if(o.tag!==3)throw Error(s(188));return o.stateNode.current===o?n:r}function g(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n;for(n=n.child;n!==null;){if(r=g(n),r!==null)return r;n=n.sibling}return null}var E=Object.assign,T=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),ae=Symbol.for("react.provider"),le=Symbol.for("react.consumer"),te=Symbol.for("react.context"),ye=Symbol.for("react.forward_ref"),se=Symbol.for("react.suspense"),he=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),M=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function V(n){return n===null||typeof n!="object"?null:(n=k&&n[k]||n["@@iterator"],typeof n=="function"?n:null)}var I=Symbol.for("react.client.reference");function Yt(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===I?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case H:return"Profiler";case $:return"StrictMode";case se:return"Suspense";case he:return"SuspenseList";case C:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case x:return"Portal";case te:return(n.displayName||"Context")+".Provider";case le:return(n._context.displayName||"Context")+".Consumer";case ye:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case N:return r=n.displayName||null,r!==null?r:Yt(n.type)||"Memo";case b:r=n._payload,n=n._init;try{return Yt(n(r))}catch{}}return null}var mt=Array.isArray,G=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pe={pending:!1,data:null,method:null,action:null},je=[],D=-1;function Z(n){return{current:n}}function ie(n){0>D||(n.current=je[D],je[D]=null,D--)}function J(n,r){D++,je[D]=n.current,n.current=r}var me=Z(null),Ne=Z(null),Ae=Z(null),Ut=Z(null);function st(n,r){switch(J(Ae,r),J(Ne,n),J(me,null),r.nodeType){case 9:case 11:n=(n=r.documentElement)&&(n=n.namespaceURI)?vE(n):0;break;default:if(n=r.tagName,r=r.namespaceURI)r=vE(r),n=EE(r,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}ie(me),J(me,n)}function hi(){ie(me),ie(Ne),ie(Ae)}function ws(n){n.memoizedState!==null&&J(Ut,n);var r=me.current,o=EE(r,n.type);r!==o&&(J(Ne,n),J(me,o))}function Bi(n){Ne.current===n&&(ie(me),ie(Ne)),Ut.current===n&&(ie(Ut),au._currentValue=pe)}var Rr=Object.prototype.hasOwnProperty,Cr=i.unstable_scheduleCallback,Ir=i.unstable_cancelCallback,il=i.unstable_shouldYield,uc=i.unstable_requestPaint,xn=i.unstable_now,od=i.unstable_getCurrentPriorityLevel,sl=i.unstable_ImmediatePriority,Na=i.unstable_UserBlockingPriority,Nr=i.unstable_NormalPriority,ld=i.unstable_LowPriority,Da=i.unstable_IdlePriority,rl=i.log,cc=i.unstable_setDisableYieldValue,gt=null,Qe=null;function An(n){if(typeof rl=="function"&&cc(n),Qe&&typeof Qe.setStrictMode=="function")try{Qe.setStrictMode(gt,n)}catch{}}var sn=Math.clz32?Math.clz32:Dr,hc=Math.log,ud=Math.LN2;function Dr(n){return n>>>=0,n===0?32:31-(hc(n)/ud|0)|0}var Or=256,Mr=4194304;function Zn(n){var r=n&42;if(r!==0)return r;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function Oa(n,r,o){var u=n.pendingLanes;if(u===0)return 0;var f=0,p=n.suspendedLanes,v=n.pingedLanes;n=n.warmLanes;var S=u&134217727;return S!==0?(u=S&~p,u!==0?f=Zn(u):(v&=S,v!==0?f=Zn(v):o||(o=S&~n,o!==0&&(f=Zn(o))))):(S=u&~p,S!==0?f=Zn(S):v!==0?f=Zn(v):o||(o=u&~n,o!==0&&(f=Zn(o)))),f===0?0:r!==0&&r!==f&&(r&p)===0&&(p=f&-f,o=r&-r,p>=o||p===32&&(o&4194048)!==0)?r:f}function kr(n,r){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&r)===0}function al(n,r){switch(n){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ol(){var n=Or;return Or<<=1,(Or&4194048)===0&&(Or=256),n}function ll(){var n=Mr;return Mr<<=1,(Mr&62914560)===0&&(Mr=4194304),n}function Fi(n){for(var r=[],o=0;31>o;o++)r.push(n);return r}function qi(n,r){n.pendingLanes|=r,r!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function ul(n,r,o,u,f,p){var v=n.pendingLanes;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=o,n.entangledLanes&=o,n.errorRecoveryDisabledLanes&=o,n.shellSuspendCounter=0;var S=n.entanglements,R=n.expirationTimes,z=n.hiddenUpdates;for(o=v&~o;0<o;){var K=31-sn(o),Q=1<<K;S[K]=0,R[K]=-1;var B=z[K];if(B!==null)for(z[K]=null,K=0;K<B.length;K++){var q=B[K];q!==null&&(q.lane&=-536870913)}o&=~Q}u!==0&&fi(n,u,0),p!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=p&~(v&~r))}function fi(n,r,o){n.pendingLanes|=r,n.suspendedLanes&=~r;var u=31-sn(r);n.entangledLanes|=r,n.entanglements[u]=n.entanglements[u]|1073741824|o&4194090}function cl(n,r){var o=n.entangledLanes|=r;for(n=n.entanglements;o;){var u=31-sn(o),f=1<<u;f&r|n[u]&r&&(n[u]|=r),o&=~f}}function bs(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Ma(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Rs(){var n=ne.p;return n!==0?n:(n=window.event,n===void 0?32:zE(n.type))}function fc(n,r){var o=ne.p;try{return ne.p=n,r()}finally{ne.p=o}}var ht=Math.random().toString(36).slice(2),Dt="__reactFiber$"+ht,wt="__reactProps$"+ht,Ln="__reactContainer$"+ht,hl="__reactEvents$"+ht,cd="__reactListeners$"+ht,Cs="__reactHandles$"+ht,dc="__reactResources$"+ht,Pr="__reactMarker$"+ht;function Is(n){delete n[Dt],delete n[wt],delete n[hl],delete n[cd],delete n[Cs]}function ji(n){var r=n[Dt];if(r)return r;for(var o=n.parentNode;o;){if(r=o[Ln]||o[Dt]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(n=wE(n);n!==null;){if(o=n[Dt])return o;n=wE(n)}return r}n=o,o=n.parentNode}return null}function di(n){if(n=n[Dt]||n[Ln]){var r=n.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return n}return null}function pi(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n.stateNode;throw Error(s(33))}function pn(n){var r=n[dc];return r||(r=n[dc]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function vt(n){n[Pr]=!0}var fl=new Set,ka={};function Jn(n,r){Hi(n,r),Hi(n+"Capture",r)}function Hi(n,r){for(ka[n]=r,n=0;n<r.length;n++)fl.add(r[n])}var pc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),mc={},Vr={};function gc(n){return Rr.call(Vr,n)?!0:Rr.call(mc,n)?!1:pc.test(n)?Vr[n]=!0:(mc[n]=!0,!1)}function Ns(n,r,o){if(gc(r))if(o===null)n.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":n.removeAttribute(r);return;case"boolean":var u=r.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){n.removeAttribute(r);return}}n.setAttribute(r,""+o)}}function mi(n,r,o){if(o===null)n.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttribute(r,""+o)}}function Qt(n,r,o,u){if(u===null)n.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(o);return}n.setAttributeNS(r,o,""+u)}}var xr,_c;function Gi(n){if(xr===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);xr=r&&r[1]||"",_c=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+xr+n+_c}var Pa=!1;function Va(n,r){if(!n||Pa)return"";Pa=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(r){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(q){var B=q}Reflect.construct(n,[],Q)}else{try{Q.call()}catch(q){B=q}n.call(Q.prototype)}}else{try{throw Error()}catch(q){B=q}(Q=n())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(q){if(q&&B&&typeof q.stack=="string")return[q.stack,B.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=u.DetermineComponentFrameRoot(),v=p[0],S=p[1];if(v&&S){var R=v.split(`
`),z=S.split(`
`);for(f=u=0;u<R.length&&!R[u].includes("DetermineComponentFrameRoot");)u++;for(;f<z.length&&!z[f].includes("DetermineComponentFrameRoot");)f++;if(u===R.length||f===z.length)for(u=R.length-1,f=z.length-1;1<=u&&0<=f&&R[u]!==z[f];)f--;for(;1<=u&&0<=f;u--,f--)if(R[u]!==z[f]){if(u!==1||f!==1)do if(u--,f--,0>f||R[u]!==z[f]){var K=`
`+R[u].replace(" at new "," at ");return n.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",n.displayName)),K}while(1<=u&&0<=f);break}}}finally{Pa=!1,Error.prepareStackTrace=o}return(o=n?n.displayName||n.name:"")?Gi(o):""}function dl(n){switch(n.tag){case 26:case 27:case 5:return Gi(n.type);case 16:return Gi("Lazy");case 13:return Gi("Suspense");case 19:return Gi("SuspenseList");case 0:case 15:return Va(n.type,!1);case 11:return Va(n.type.render,!1);case 1:return Va(n.type,!0);case 31:return Gi("Activity");default:return""}}function xa(n){try{var r="";do r+=dl(n),n=n.return;while(n);return r}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function mn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function pl(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function hd(n){var r=pl(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,p=o.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return f.call(this)},set:function(v){u=""+v,p.call(this,v)}}),Object.defineProperty(n,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(v){u=""+v},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function La(n){n._valueTracker||(n._valueTracker=hd(n))}function ml(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return n&&(u=pl(n)?n.checked?"true":"false":n.value),n=u,n!==o?(r.setValue(n),!0):!1}function Lr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var fd=/[\n"\\]/g;function bt(n){return n.replace(fd,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function wn(n,r,o,u,f,p,v,S){n.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?n.type=v:n.removeAttribute("type"),r!=null?v==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+mn(r)):n.value!==""+mn(r)&&(n.value=""+mn(r)):v!=="submit"&&v!=="reset"||n.removeAttribute("value"),r!=null?Ds(n,v,mn(r)):o!=null?Ds(n,v,mn(o)):u!=null&&n.removeAttribute("value"),f==null&&p!=null&&(n.defaultChecked=!!p),f!=null&&(n.checked=f&&typeof f!="function"&&typeof f!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?n.name=""+mn(S):n.removeAttribute("name")}function Ur(n,r,o,u,f,p,v,S){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(n.type=p),r!=null||o!=null){if(!(p!=="submit"&&p!=="reset"||r!=null))return;o=o!=null?""+mn(o):"",r=r!=null?""+mn(r):o,S||r===n.value||(n.value=r),n.defaultValue=r}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,n.checked=S?n.checked:!!u,n.defaultChecked=!!u,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(n.name=v)}function Ds(n,r,o){r==="number"&&Lr(n.ownerDocument)===n||n.defaultValue===""+o||(n.defaultValue=""+o)}function Ki(n,r,o,u){if(n=n.options,r){r={};for(var f=0;f<o.length;f++)r["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=r.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&u&&(n[o].defaultSelected=!0)}else{for(o=""+mn(o),r=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,u&&(n[f].defaultSelected=!0);return}r!==null||n[f].disabled||(r=n[f])}r!==null&&(r.selected=!0)}}function Ze(n,r,o){if(r!=null&&(r=""+mn(r),r!==n.value&&(n.value=r),o==null)){n.defaultValue!==r&&(n.defaultValue=r);return}n.defaultValue=o!=null?""+mn(o):""}function zr(n,r,o,u){if(r==null){if(u!=null){if(o!=null)throw Error(s(92));if(mt(u)){if(1<u.length)throw Error(s(93));u=u[0]}o=u}o==null&&(o=""),r=o}o=mn(r),n.defaultValue=o,u=n.textContent,u===o&&u!==""&&u!==null&&(n.value=u)}function Un(n,r){if(r){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=r;return}}n.textContent=r}var Br=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function yc(n,r,o){var u=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="":u?n.setProperty(r,o):typeof o!="number"||o===0||Br.has(r)?r==="float"?n.cssFloat=o:n[r]=(""+o).trim():n[r]=o+"px"}function gl(n,r,o){if(r!=null&&typeof r!="object")throw Error(s(62));if(n=n.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||r!=null&&r.hasOwnProperty(u)||(u.indexOf("--")===0?n.setProperty(u,""):u==="float"?n.cssFloat="":n[u]="");for(var f in r)u=r[f],r.hasOwnProperty(f)&&o[f]!==u&&yc(n,f,u)}else for(var p in r)r.hasOwnProperty(p)&&yc(n,p,r[p])}function _l(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),pd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ua(n){return pd.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Yi=null;function zn(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Qi=null,Wi=null;function yl(n){var r=di(n);if(r&&(n=r.stateNode)){var o=n[wt]||null;e:switch(n=r.stateNode,r.type){case"input":if(wn(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+bt(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==n&&u.form===n.form){var f=u[wt]||null;if(!f)throw Error(s(90));wn(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(r=0;r<o.length;r++)u=o[r],u.form===n.form&&ml(u)}break e;case"textarea":Ze(n,o.value,o.defaultValue);break e;case"select":r=o.value,r!=null&&Ki(n,!!o.multiple,r,!1)}}}var gi=!1;function vc(n,r,o){if(gi)return n(r,o);gi=!0;try{var u=n(r);return u}finally{if(gi=!1,(Qi!==null||Wi!==null)&&(fh(),Qi&&(r=Qi,n=Wi,Wi=Qi=null,yl(r),n)))for(r=0;r<n.length;r++)yl(n[r])}}function Fr(n,r){var o=n.stateNode;if(o===null)return null;var u=o[wt]||null;if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(s(231,r,typeof o));return o}var ei=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bn=!1;if(ei)try{var qr={};Object.defineProperty(qr,"passive",{get:function(){Bn=!0}}),window.addEventListener("test",qr,qr),window.removeEventListener("test",qr,qr)}catch{Bn=!1}var _i=null,Os=null,Xi=null;function vl(){if(Xi)return Xi;var n,r=Os,o=r.length,u,f="value"in _i?_i.value:_i.textContent,p=f.length;for(n=0;n<o&&r[n]===f[n];n++);var v=o-n;for(u=1;u<=v&&r[o-u]===f[p-u];u++);return Xi=f.slice(n,1<u?1-u:void 0)}function yi(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function vi(){return!0}function El(){return!1}function zt(n){function r(o,u,f,p,v){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var S in n)n.hasOwnProperty(S)&&(o=n[S],this[S]=o?o(p):p[S]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?vi:El,this.isPropagationStopped=El,this}return E(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=vi)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=vi)},persist:function(){},isPersistent:vi}),r}var Ge={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},za=zt(Ge),jr=E({},Ge,{view:0,detail:0}),Ec=zt(jr),Ba,Fa,Ei,Hr=E({},jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yr,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ei&&(Ei&&n.type==="mousemove"?(Ba=n.screenX-Ei.screenX,Fa=n.screenY-Ei.screenY):Fa=Ba=0,Ei=n),Ba)},movementY:function(n){return"movementY"in n?n.movementY:Fa}}),Fn=zt(Hr),Tc=E({},Hr,{dataTransfer:0}),md=zt(Tc),Gr=E({},jr,{relatedTarget:0}),qa=zt(Gr),Tl=E({},Ge,{animationName:0,elapsedTime:0,pseudoElement:0}),ja=zt(Tl),Sc=E({},Ge,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Ha=zt(Sc),gd=E({},Ge,{data:0}),Sl=zt(gd),Kr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ac={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Al(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=wc[n])?!!r[n]:!1}function Yr(){return Al}var bc=E({},jr,{key:function(n){if(n.key){var r=Kr[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=yi(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ac[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yr,charCode:function(n){return n.type==="keypress"?yi(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?yi(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Ga=zt(bc),Rc=E({},Hr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wl=zt(Rc),$i=E({},jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yr}),Cc=zt($i),Ic=E({},Ge,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nc=zt(Ic),Dc=E({},Hr,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ka=zt(Dc),gn=E({},Ge,{newState:0,oldState:0}),Oc=zt(gn),Mc=[9,13,27,32],Ti=ei&&"CompositionEvent"in window,h=null;ei&&"documentMode"in document&&(h=document.documentMode);var _=ei&&"TextEvent"in window&&!h,y=ei&&(!Ti||h&&8<h&&11>=h),A=" ",L=!1;function j(n,r){switch(n){case"keyup":return Mc.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ee(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var xe=!1;function Ot(n,r){switch(n){case"compositionend":return ee(r);case"keypress":return r.which!==32?null:(L=!0,A);case"textInput":return n=r.data,n===A&&L?null:n;default:return null}}function Le(n,r){if(xe)return n==="compositionend"||!Ti&&j(n,r)?(n=vl(),Xi=Os=_i=null,xe=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return y&&r.locale!=="ko"?null:r.data;default:return null}}var Bt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mt(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Bt[n.type]:r==="textarea"}function Zi(n,r,o,u){Qi?Wi?Wi.push(u):Wi=[u]:Qi=u,r=yh(r,"onChange"),0<r.length&&(o=new za("onChange","change",null,o,u),n.push({event:o,listeners:r}))}var Wt=null,Si=null;function bl(n){pE(n,0)}function kc(n){var r=pi(n);if(ml(r))return n}function V_(n,r){if(n==="change")return r}var x_=!1;if(ei){var _d;if(ei){var yd="oninput"in document;if(!yd){var L_=document.createElement("div");L_.setAttribute("oninput","return;"),yd=typeof L_.oninput=="function"}_d=yd}else _d=!1;x_=_d&&(!document.documentMode||9<document.documentMode)}function U_(){Wt&&(Wt.detachEvent("onpropertychange",z_),Si=Wt=null)}function z_(n){if(n.propertyName==="value"&&kc(Si)){var r=[];Zi(r,Si,n,zn(n)),vc(bl,r)}}function Zb(n,r,o){n==="focusin"?(U_(),Wt=r,Si=o,Wt.attachEvent("onpropertychange",z_)):n==="focusout"&&U_()}function Jb(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return kc(Si)}function eR(n,r){if(n==="click")return kc(r)}function tR(n,r){if(n==="input"||n==="change")return kc(r)}function nR(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var bn=typeof Object.is=="function"?Object.is:nR;function Rl(n,r){if(bn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var o=Object.keys(n),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!Rr.call(r,f)||!bn(n[f],r[f]))return!1}return!0}function B_(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function F_(n,r){var o=B_(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=r&&u>=r)return{node:o,offset:r-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=B_(o)}}function q_(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?q_(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function j_(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var r=Lr(n.document);r instanceof n.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)n=r.contentWindow;else break;r=Lr(n.document)}return r}function vd(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}var iR=ei&&"documentMode"in document&&11>=document.documentMode,Ya=null,Ed=null,Cl=null,Td=!1;function H_(n,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Td||Ya==null||Ya!==Lr(u)||(u=Ya,"selectionStart"in u&&vd(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Cl&&Rl(Cl,u)||(Cl=u,u=yh(Ed,"onSelect"),0<u.length&&(r=new za("onSelect","select",null,r,o),n.push({event:r,listeners:u}),r.target=Ya)))}function Qr(n,r){var o={};return o[n.toLowerCase()]=r.toLowerCase(),o["Webkit"+n]="webkit"+r,o["Moz"+n]="moz"+r,o}var Qa={animationend:Qr("Animation","AnimationEnd"),animationiteration:Qr("Animation","AnimationIteration"),animationstart:Qr("Animation","AnimationStart"),transitionrun:Qr("Transition","TransitionRun"),transitionstart:Qr("Transition","TransitionStart"),transitioncancel:Qr("Transition","TransitionCancel"),transitionend:Qr("Transition","TransitionEnd")},Sd={},G_={};ei&&(G_=document.createElement("div").style,"AnimationEvent"in window||(delete Qa.animationend.animation,delete Qa.animationiteration.animation,delete Qa.animationstart.animation),"TransitionEvent"in window||delete Qa.transitionend.transition);function Wr(n){if(Sd[n])return Sd[n];if(!Qa[n])return n;var r=Qa[n],o;for(o in r)if(r.hasOwnProperty(o)&&o in G_)return Sd[n]=r[o];return n}var K_=Wr("animationend"),Y_=Wr("animationiteration"),Q_=Wr("animationstart"),sR=Wr("transitionrun"),rR=Wr("transitionstart"),aR=Wr("transitioncancel"),W_=Wr("transitionend"),X_=new Map,Ad="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ad.push("scrollEnd");function ti(n,r){X_.set(n,r),Jn(r,[n])}var $_=new WeakMap;function qn(n,r){if(typeof n=="object"&&n!==null){var o=$_.get(n);return o!==void 0?o:(r={value:n,source:r,stack:xa(r)},$_.set(n,r),r)}return{value:n,source:r,stack:xa(r)}}var jn=[],Wa=0,wd=0;function Pc(){for(var n=Wa,r=wd=Wa=0;r<n;){var o=jn[r];jn[r++]=null;var u=jn[r];jn[r++]=null;var f=jn[r];jn[r++]=null;var p=jn[r];if(jn[r++]=null,u!==null&&f!==null){var v=u.pending;v===null?f.next=f:(f.next=v.next,v.next=f),u.pending=f}p!==0&&Z_(o,f,p)}}function Vc(n,r,o,u){jn[Wa++]=n,jn[Wa++]=r,jn[Wa++]=o,jn[Wa++]=u,wd|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function bd(n,r,o,u){return Vc(n,r,o,u),xc(n)}function Xa(n,r){return Vc(n,null,null,r),xc(n)}function Z_(n,r,o){n.lanes|=o;var u=n.alternate;u!==null&&(u.lanes|=o);for(var f=!1,p=n.return;p!==null;)p.childLanes|=o,u=p.alternate,u!==null&&(u.childLanes|=o),p.tag===22&&(n=p.stateNode,n===null||n._visibility&1||(f=!0)),n=p,p=p.return;return n.tag===3?(p=n.stateNode,f&&r!==null&&(f=31-sn(o),n=p.hiddenUpdates,u=n[f],u===null?n[f]=[r]:u.push(r),r.lane=o|536870912),p):null}function xc(n){if(50<Zl)throw Zl=0,Op=null,Error(s(185));for(var r=n.return;r!==null;)n=r,r=n.return;return n.tag===3?n.stateNode:null}var $a={};function oR(n,r,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rn(n,r,o,u){return new oR(n,r,o,u)}function Rd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ji(n,r){var o=n.alternate;return o===null?(o=Rn(n.tag,r,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=r,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&65011712,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,r=n.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o.refCleanup=n.refCleanup,o}function J_(n,r){n.flags&=65011714;var o=n.alternate;return o===null?(n.childLanes=0,n.lanes=r,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=o.childLanes,n.lanes=o.lanes,n.child=o.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=o.memoizedProps,n.memoizedState=o.memoizedState,n.updateQueue=o.updateQueue,n.type=o.type,r=o.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n}function Lc(n,r,o,u,f,p){var v=0;if(u=n,typeof n=="function")Rd(n)&&(v=1);else if(typeof n=="string")v=u1(n,o,me.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case C:return n=Rn(31,o,r,f),n.elementType=C,n.lanes=p,n;case F:return Xr(o.children,f,p,r);case $:v=8,f|=24;break;case H:return n=Rn(12,o,r,f|2),n.elementType=H,n.lanes=p,n;case se:return n=Rn(13,o,r,f),n.elementType=se,n.lanes=p,n;case he:return n=Rn(19,o,r,f),n.elementType=he,n.lanes=p,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case ae:case te:v=10;break e;case le:v=9;break e;case ye:v=11;break e;case N:v=14;break e;case b:v=16,u=null;break e}v=29,o=Error(s(130,n===null?"null":typeof n,"")),u=null}return r=Rn(v,o,r,f),r.elementType=n,r.type=u,r.lanes=p,r}function Xr(n,r,o,u){return n=Rn(7,n,u,r),n.lanes=o,n}function Cd(n,r,o){return n=Rn(6,n,null,r),n.lanes=o,n}function Id(n,r,o){return r=Rn(4,n.children!==null?n.children:[],n.key,r),r.lanes=o,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}var Za=[],Ja=0,Uc=null,zc=0,Hn=[],Gn=0,$r=null,es=1,ts="";function Zr(n,r){Za[Ja++]=zc,Za[Ja++]=Uc,Uc=n,zc=r}function ey(n,r,o){Hn[Gn++]=es,Hn[Gn++]=ts,Hn[Gn++]=$r,$r=n;var u=es;n=ts;var f=32-sn(u)-1;u&=~(1<<f),o+=1;var p=32-sn(r)+f;if(30<p){var v=f-f%5;p=(u&(1<<v)-1).toString(32),u>>=v,f-=v,es=1<<32-sn(r)+f|o<<f|u,ts=p+n}else es=1<<p|o<<f|u,ts=n}function Nd(n){n.return!==null&&(Zr(n,1),ey(n,1,0))}function Dd(n){for(;n===Uc;)Uc=Za[--Ja],Za[Ja]=null,zc=Za[--Ja],Za[Ja]=null;for(;n===$r;)$r=Hn[--Gn],Hn[Gn]=null,ts=Hn[--Gn],Hn[Gn]=null,es=Hn[--Gn],Hn[Gn]=null}var _n=null,_t=null,He=!1,Jr=null,Ai=!1,Od=Error(s(519));function ea(n){var r=Error(s(418,""));throw Dl(qn(r,n)),Od}function ty(n){var r=n.stateNode,o=n.type,u=n.memoizedProps;switch(r[Dt]=n,r[wt]=u,o){case"dialog":Me("cancel",r),Me("close",r);break;case"iframe":case"object":case"embed":Me("load",r);break;case"video":case"audio":for(o=0;o<eu.length;o++)Me(eu[o],r);break;case"source":Me("error",r);break;case"img":case"image":case"link":Me("error",r),Me("load",r);break;case"details":Me("toggle",r);break;case"input":Me("invalid",r),Ur(r,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),La(r);break;case"select":Me("invalid",r);break;case"textarea":Me("invalid",r),zr(r,u.value,u.defaultValue,u.children),La(r)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||u.suppressHydrationWarning===!0||yE(r.textContent,o)?(u.popover!=null&&(Me("beforetoggle",r),Me("toggle",r)),u.onScroll!=null&&Me("scroll",r),u.onScrollEnd!=null&&Me("scrollend",r),u.onClick!=null&&(r.onclick=vh),r=!0):r=!1,r||ea(n)}function ny(n){for(_n=n.return;_n;)switch(_n.tag){case 5:case 13:Ai=!1;return;case 27:case 3:Ai=!0;return;default:_n=_n.return}}function Il(n){if(n!==_n)return!1;if(!He)return ny(n),He=!0,!1;var r=n.tag,o;if((o=r!==3&&r!==27)&&((o=r===5)&&(o=n.type,o=!(o!=="form"&&o!=="button")||Yp(n.type,n.memoizedProps)),o=!o),o&&_t&&ea(n),ny(n),r===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8)if(o=n.data,o==="/$"){if(r===0){_t=ii(n.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++;n=n.nextSibling}_t=null}}else r===27?(r=_t,Ys(n.type)?(n=$p,$p=null,_t=n):_t=r):_t=_n?ii(n.stateNode.nextSibling):null;return!0}function Nl(){_t=_n=null,He=!1}function iy(){var n=Jr;return n!==null&&(En===null?En=n:En.push.apply(En,n),Jr=null),n}function Dl(n){Jr===null?Jr=[n]:Jr.push(n)}var Md=Z(null),ta=null,ns=null;function Ms(n,r,o){J(Md,r._currentValue),r._currentValue=o}function is(n){n._currentValue=Md.current,ie(Md)}function kd(n,r,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===o)break;n=n.return}}function Pd(n,r,o,u){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var p=f.dependencies;if(p!==null){var v=f.child;p=p.firstContext;e:for(;p!==null;){var S=p;p=f;for(var R=0;R<r.length;R++)if(S.context===r[R]){p.lanes|=o,S=p.alternate,S!==null&&(S.lanes|=o),kd(p.return,o,n),u||(v=null);break e}p=S.next}}else if(f.tag===18){if(v=f.return,v===null)throw Error(s(341));v.lanes|=o,p=v.alternate,p!==null&&(p.lanes|=o),kd(v,o,n),v=null}else v=f.child;if(v!==null)v.return=f;else for(v=f;v!==null;){if(v===n){v=null;break}if(f=v.sibling,f!==null){f.return=v.return,v=f;break}v=v.return}f=v}}function Ol(n,r,o,u){n=null;for(var f=r,p=!1;f!==null;){if(!p){if((f.flags&524288)!==0)p=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var v=f.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var S=f.type;bn(f.pendingProps.value,v.value)||(n!==null?n.push(S):n=[S])}}else if(f===Ut.current){if(v=f.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(au):n=[au])}f=f.return}n!==null&&Pd(r,n,o,u),r.flags|=262144}function Bc(n){for(n=n.firstContext;n!==null;){if(!bn(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function na(n){ta=n,ns=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function rn(n){return sy(ta,n)}function Fc(n,r){return ta===null&&na(n),sy(n,r)}function sy(n,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},ns===null){if(n===null)throw Error(s(308));ns=r,n.dependencies={lanes:0,firstContext:r},n.flags|=524288}else ns=ns.next=r;return o}var lR=typeof AbortController<"u"?AbortController:function(){var n=[],r=this.signal={aborted:!1,addEventListener:function(o,u){n.push(u)}};this.abort=function(){r.aborted=!0,n.forEach(function(o){return o()})}},uR=i.unstable_scheduleCallback,cR=i.unstable_NormalPriority,kt={$$typeof:te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Vd(){return{controller:new lR,data:new Map,refCount:0}}function Ml(n){n.refCount--,n.refCount===0&&uR(cR,function(){n.controller.abort()})}var kl=null,xd=0,eo=0,to=null;function hR(n,r){if(kl===null){var o=kl=[];xd=0,eo=Up(),to={status:"pending",value:void 0,then:function(u){o.push(u)}}}return xd++,r.then(ry,ry),r}function ry(){if(--xd===0&&kl!==null){to!==null&&(to.status="fulfilled");var n=kl;kl=null,eo=0,to=null;for(var r=0;r<n.length;r++)(0,n[r])()}}function fR(n,r){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return n.then(function(){u.status="fulfilled",u.value=r;for(var f=0;f<o.length;f++)(0,o[f])(r)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var ay=G.S;G.S=function(n,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&hR(n,r),ay!==null&&ay(n,r)};var ia=Z(null);function Ld(){var n=ia.current;return n!==null?n:rt.pooledCache}function qc(n,r){r===null?J(ia,ia.current):J(ia,r.pool)}function oy(){var n=Ld();return n===null?null:{parent:kt._currentValue,pool:n}}var Pl=Error(s(460)),ly=Error(s(474)),jc=Error(s(542)),Ud={then:function(){}};function uy(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Hc(){}function cy(n,r,o){switch(o=n[o],o===void 0?n.push(r):o!==r&&(r.then(Hc,Hc),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,fy(n),n;default:if(typeof r.status=="string")r.then(Hc,Hc);else{if(n=rt,n!==null&&100<n.shellSuspendCounter)throw Error(s(482));n=r,n.status="pending",n.then(function(u){if(r.status==="pending"){var f=r;f.status="fulfilled",f.value=u}},function(u){if(r.status==="pending"){var f=r;f.status="rejected",f.reason=u}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,fy(n),n}throw Vl=r,Pl}}var Vl=null;function hy(){if(Vl===null)throw Error(s(459));var n=Vl;return Vl=null,n}function fy(n){if(n===Pl||n===jc)throw Error(s(483))}var ks=!1;function zd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bd(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Ps(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Vs(n,r,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(We&2)!==0){var f=u.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),u.pending=r,r=xc(n),Z_(n,null,o),r}return Vc(n,u,r,o),xc(n)}function xl(n,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194048)!==0)){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,cl(n,o)}}function Fd(n,r){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var v={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};p===null?f=p=v:p=p.next=v,o=o.next}while(o!==null);p===null?f=p=r:p=p.next=r}else f=p=r;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:u.shared,callbacks:u.callbacks},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=r:n.next=r,o.lastBaseUpdate=r}var qd=!1;function Ll(){if(qd){var n=to;if(n!==null)throw n}}function Ul(n,r,o,u){qd=!1;var f=n.updateQueue;ks=!1;var p=f.firstBaseUpdate,v=f.lastBaseUpdate,S=f.shared.pending;if(S!==null){f.shared.pending=null;var R=S,z=R.next;R.next=null,v===null?p=z:v.next=z,v=R;var K=n.alternate;K!==null&&(K=K.updateQueue,S=K.lastBaseUpdate,S!==v&&(S===null?K.firstBaseUpdate=z:S.next=z,K.lastBaseUpdate=R))}if(p!==null){var Q=f.baseState;v=0,K=z=R=null,S=p;do{var B=S.lane&-536870913,q=B!==S.lane;if(q?(Ue&B)===B:(u&B)===B){B!==0&&B===eo&&(qd=!0),K!==null&&(K=K.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var Se=n,_e=S;B=r;var tt=o;switch(_e.tag){case 1:if(Se=_e.payload,typeof Se=="function"){Q=Se.call(tt,Q,B);break e}Q=Se;break e;case 3:Se.flags=Se.flags&-65537|128;case 0:if(Se=_e.payload,B=typeof Se=="function"?Se.call(tt,Q,B):Se,B==null)break e;Q=E({},Q,B);break e;case 2:ks=!0}}B=S.callback,B!==null&&(n.flags|=64,q&&(n.flags|=8192),q=f.callbacks,q===null?f.callbacks=[B]:q.push(B))}else q={lane:B,tag:S.tag,payload:S.payload,callback:S.callback,next:null},K===null?(z=K=q,R=Q):K=K.next=q,v|=B;if(S=S.next,S===null){if(S=f.shared.pending,S===null)break;q=S,S=q.next,q.next=null,f.lastBaseUpdate=q,f.shared.pending=null}}while(!0);K===null&&(R=Q),f.baseState=R,f.firstBaseUpdate=z,f.lastBaseUpdate=K,p===null&&(f.shared.lanes=0),js|=v,n.lanes=v,n.memoizedState=Q}}function dy(n,r){if(typeof n!="function")throw Error(s(191,n));n.call(r)}function py(n,r){var o=n.callbacks;if(o!==null)for(n.callbacks=null,n=0;n<o.length;n++)dy(o[n],r)}var no=Z(null),Gc=Z(0);function my(n,r){n=cs,J(Gc,n),J(no,r),cs=n|r.baseLanes}function jd(){J(Gc,cs),J(no,no.current)}function Hd(){cs=Gc.current,ie(no),ie(Gc)}var xs=0,Ce=null,Je=null,Rt=null,Kc=!1,io=!1,sa=!1,Yc=0,zl=0,so=null,dR=0;function Et(){throw Error(s(321))}function Gd(n,r){if(r===null)return!1;for(var o=0;o<r.length&&o<n.length;o++)if(!bn(n[o],r[o]))return!1;return!0}function Kd(n,r,o,u,f,p){return xs=p,Ce=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,G.H=n===null||n.memoizedState===null?Zy:Jy,sa=!1,p=o(u,f),sa=!1,io&&(p=_y(r,o,u,f)),gy(n),p}function gy(n){G.H=Jc;var r=Je!==null&&Je.next!==null;if(xs=0,Rt=Je=Ce=null,Kc=!1,zl=0,so=null,r)throw Error(s(300));n===null||Ft||(n=n.dependencies,n!==null&&Bc(n)&&(Ft=!0))}function _y(n,r,o,u){Ce=n;var f=0;do{if(io&&(so=null),zl=0,io=!1,25<=f)throw Error(s(301));if(f+=1,Rt=Je=null,n.updateQueue!=null){var p=n.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}G.H=ER,p=r(o,u)}while(io);return p}function pR(){var n=G.H,r=n.useState()[0];return r=typeof r.then=="function"?Bl(r):r,n=n.useState()[0],(Je!==null?Je.memoizedState:null)!==n&&(Ce.flags|=1024),r}function Yd(){var n=Yc!==0;return Yc=0,n}function Qd(n,r,o){r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~o}function Wd(n){if(Kc){for(n=n.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}Kc=!1}xs=0,Rt=Je=Ce=null,io=!1,zl=Yc=0,so=null}function yn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?Ce.memoizedState=Rt=n:Rt=Rt.next=n,Rt}function Ct(){if(Je===null){var n=Ce.alternate;n=n!==null?n.memoizedState:null}else n=Je.next;var r=Rt===null?Ce.memoizedState:Rt.next;if(r!==null)Rt=r,Je=n;else{if(n===null)throw Ce.alternate===null?Error(s(467)):Error(s(310));Je=n,n={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},Rt===null?Ce.memoizedState=Rt=n:Rt=Rt.next=n}return Rt}function Xd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Bl(n){var r=zl;return zl+=1,so===null&&(so=[]),n=cy(so,n,r),r=Ce,(Rt===null?r.memoizedState:Rt.next)===null&&(r=r.alternate,G.H=r===null||r.memoizedState===null?Zy:Jy),n}function Qc(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Bl(n);if(n.$$typeof===te)return rn(n)}throw Error(s(438,String(n)))}function $d(n){var r=null,o=Ce.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var u=Ce.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(r={data:u.data.map(function(f){return f.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=Xd(),Ce.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(n),u=0;u<n;u++)o[u]=M;return r.index++,o}function ss(n,r){return typeof r=="function"?r(n):r}function Wc(n){var r=Ct();return Zd(r,Je,n)}function Zd(n,r,o){var u=n.queue;if(u===null)throw Error(s(311));u.lastRenderedReducer=o;var f=n.baseQueue,p=u.pending;if(p!==null){if(f!==null){var v=f.next;f.next=p.next,p.next=v}r.baseQueue=f=p,u.pending=null}if(p=n.baseState,f===null)n.memoizedState=p;else{r=f.next;var S=v=null,R=null,z=r,K=!1;do{var Q=z.lane&-536870913;if(Q!==z.lane?(Ue&Q)===Q:(xs&Q)===Q){var B=z.revertLane;if(B===0)R!==null&&(R=R.next={lane:0,revertLane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),Q===eo&&(K=!0);else if((xs&B)===B){z=z.next,B===eo&&(K=!0);continue}else Q={lane:0,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},R===null?(S=R=Q,v=p):R=R.next=Q,Ce.lanes|=B,js|=B;Q=z.action,sa&&o(p,Q),p=z.hasEagerState?z.eagerState:o(p,Q)}else B={lane:Q,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},R===null?(S=R=B,v=p):R=R.next=B,Ce.lanes|=Q,js|=Q;z=z.next}while(z!==null&&z!==r);if(R===null?v=p:R.next=S,!bn(p,n.memoizedState)&&(Ft=!0,K&&(o=to,o!==null)))throw o;n.memoizedState=p,n.baseState=v,n.baseQueue=R,u.lastRenderedState=p}return f===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function Jd(n){var r=Ct(),o=r.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=n;var u=o.dispatch,f=o.pending,p=r.memoizedState;if(f!==null){o.pending=null;var v=f=f.next;do p=n(p,v.action),v=v.next;while(v!==f);bn(p,r.memoizedState)||(Ft=!0),r.memoizedState=p,r.baseQueue===null&&(r.baseState=p),o.lastRenderedState=p}return[p,u]}function yy(n,r,o){var u=Ce,f=Ct(),p=He;if(p){if(o===void 0)throw Error(s(407));o=o()}else o=r();var v=!bn((Je||f).memoizedState,o);v&&(f.memoizedState=o,Ft=!0),f=f.queue;var S=Ty.bind(null,u,f,n);if(Fl(2048,8,S,[n]),f.getSnapshot!==r||v||Rt!==null&&Rt.memoizedState.tag&1){if(u.flags|=2048,ro(9,Xc(),Ey.bind(null,u,f,o,r),null),rt===null)throw Error(s(349));p||(xs&124)!==0||vy(u,r,o)}return o}function vy(n,r,o){n.flags|=16384,n={getSnapshot:r,value:o},r=Ce.updateQueue,r===null?(r=Xd(),Ce.updateQueue=r,r.stores=[n]):(o=r.stores,o===null?r.stores=[n]:o.push(n))}function Ey(n,r,o,u){r.value=o,r.getSnapshot=u,Sy(r)&&Ay(n)}function Ty(n,r,o){return o(function(){Sy(r)&&Ay(n)})}function Sy(n){var r=n.getSnapshot;n=n.value;try{var o=r();return!bn(n,o)}catch{return!0}}function Ay(n){var r=Xa(n,2);r!==null&&On(r,n,2)}function ep(n){var r=yn();if(typeof n=="function"){var o=n;if(n=o(),sa){An(!0);try{o()}finally{An(!1)}}}return r.memoizedState=r.baseState=n,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ss,lastRenderedState:n},r}function wy(n,r,o,u){return n.baseState=o,Zd(n,Je,typeof u=="function"?u:ss)}function mR(n,r,o,u,f){if(Zc(n))throw Error(s(485));if(n=r.action,n!==null){var p={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){p.listeners.push(v)}};G.T!==null?o(!0):p.isTransition=!1,u(p),o=r.pending,o===null?(p.next=r.pending=p,by(r,p)):(p.next=o.next,r.pending=o.next=p)}}function by(n,r){var o=r.action,u=r.payload,f=n.state;if(r.isTransition){var p=G.T,v={};G.T=v;try{var S=o(f,u),R=G.S;R!==null&&R(v,S),Ry(n,r,S)}catch(z){tp(n,r,z)}finally{G.T=p}}else try{p=o(f,u),Ry(n,r,p)}catch(z){tp(n,r,z)}}function Ry(n,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){Cy(n,r,u)},function(u){return tp(n,r,u)}):Cy(n,r,o)}function Cy(n,r,o){r.status="fulfilled",r.value=o,Iy(r),n.state=o,r=n.pending,r!==null&&(o=r.next,o===r?n.pending=null:(o=o.next,r.next=o,by(n,o)))}function tp(n,r,o){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do r.status="rejected",r.reason=o,Iy(r),r=r.next;while(r!==u)}n.action=null}function Iy(n){n=n.listeners;for(var r=0;r<n.length;r++)(0,n[r])()}function Ny(n,r){return r}function Dy(n,r){if(He){var o=rt.formState;if(o!==null){e:{var u=Ce;if(He){if(_t){t:{for(var f=_t,p=Ai;f.nodeType!==8;){if(!p){f=null;break t}if(f=ii(f.nextSibling),f===null){f=null;break t}}p=f.data,f=p==="F!"||p==="F"?f:null}if(f){_t=ii(f.nextSibling),u=f.data==="F!";break e}}ea(u)}u=!1}u&&(r=o[0])}}return o=yn(),o.memoizedState=o.baseState=r,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ny,lastRenderedState:r},o.queue=u,o=Wy.bind(null,Ce,u),u.dispatch=o,u=ep(!1),p=ap.bind(null,Ce,!1,u.queue),u=yn(),f={state:r,dispatch:null,action:n,pending:null},u.queue=f,o=mR.bind(null,Ce,f,p,o),f.dispatch=o,u.memoizedState=n,[r,o,!1]}function Oy(n){var r=Ct();return My(r,Je,n)}function My(n,r,o){if(r=Zd(n,r,Ny)[0],n=Wc(ss)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var u=Bl(r)}catch(v){throw v===Pl?jc:v}else u=r;r=Ct();var f=r.queue,p=f.dispatch;return o!==r.memoizedState&&(Ce.flags|=2048,ro(9,Xc(),gR.bind(null,f,o),null)),[u,p,n]}function gR(n,r){n.action=r}function ky(n){var r=Ct(),o=Je;if(o!==null)return My(r,o,n);Ct(),r=r.memoizedState,o=Ct();var u=o.queue.dispatch;return o.memoizedState=n,[r,u,!1]}function ro(n,r,o,u){return n={tag:n,create:o,deps:u,inst:r,next:null},r=Ce.updateQueue,r===null&&(r=Xd(),Ce.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,r.lastEffect=n),n}function Xc(){return{destroy:void 0,resource:void 0}}function Py(){return Ct().memoizedState}function $c(n,r,o,u){var f=yn();u=u===void 0?null:u,Ce.flags|=n,f.memoizedState=ro(1|r,Xc(),o,u)}function Fl(n,r,o,u){var f=Ct();u=u===void 0?null:u;var p=f.memoizedState.inst;Je!==null&&u!==null&&Gd(u,Je.memoizedState.deps)?f.memoizedState=ro(r,p,o,u):(Ce.flags|=n,f.memoizedState=ro(1|r,p,o,u))}function Vy(n,r){$c(8390656,8,n,r)}function xy(n,r){Fl(2048,8,n,r)}function Ly(n,r){return Fl(4,2,n,r)}function Uy(n,r){return Fl(4,4,n,r)}function zy(n,r){if(typeof r=="function"){n=n();var o=r(n);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function By(n,r,o){o=o!=null?o.concat([n]):null,Fl(4,4,zy.bind(null,r,n),o)}function np(){}function Fy(n,r){var o=Ct();r=r===void 0?null:r;var u=o.memoizedState;return r!==null&&Gd(r,u[1])?u[0]:(o.memoizedState=[n,r],n)}function qy(n,r){var o=Ct();r=r===void 0?null:r;var u=o.memoizedState;if(r!==null&&Gd(r,u[1]))return u[0];if(u=n(),sa){An(!0);try{n()}finally{An(!1)}}return o.memoizedState=[u,r],u}function ip(n,r,o){return o===void 0||(xs&1073741824)!==0?n.memoizedState=r:(n.memoizedState=o,n=Gv(),Ce.lanes|=n,js|=n,o)}function jy(n,r,o,u){return bn(o,r)?o:no.current!==null?(n=ip(n,o,u),bn(n,r)||(Ft=!0),n):(xs&42)===0?(Ft=!0,n.memoizedState=o):(n=Gv(),Ce.lanes|=n,js|=n,r)}function Hy(n,r,o,u,f){var p=ne.p;ne.p=p!==0&&8>p?p:8;var v=G.T,S={};G.T=S,ap(n,!1,r,o);try{var R=f(),z=G.S;if(z!==null&&z(S,R),R!==null&&typeof R=="object"&&typeof R.then=="function"){var K=fR(R,u);ql(n,r,K,Dn(n))}else ql(n,r,u,Dn(n))}catch(Q){ql(n,r,{then:function(){},status:"rejected",reason:Q},Dn())}finally{ne.p=p,G.T=v}}function _R(){}function sp(n,r,o,u){if(n.tag!==5)throw Error(s(476));var f=Gy(n).queue;Hy(n,f,r,pe,o===null?_R:function(){return Ky(n),o(u)})}function Gy(n){var r=n.memoizedState;if(r!==null)return r;r={memoizedState:pe,baseState:pe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ss,lastRenderedState:pe},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ss,lastRenderedState:o},next:null},n.memoizedState=r,n=n.alternate,n!==null&&(n.memoizedState=r),r}function Ky(n){var r=Gy(n).next.queue;ql(n,r,{},Dn())}function rp(){return rn(au)}function Yy(){return Ct().memoizedState}function Qy(){return Ct().memoizedState}function yR(n){for(var r=n.return;r!==null;){switch(r.tag){case 24:case 3:var o=Dn();n=Ps(o);var u=Vs(r,n,o);u!==null&&(On(u,r,o),xl(u,r,o)),r={cache:Vd()},n.payload=r;return}r=r.return}}function vR(n,r,o){var u=Dn();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},Zc(n)?Xy(r,o):(o=bd(n,r,o,u),o!==null&&(On(o,n,u),$y(o,r,u)))}function Wy(n,r,o){var u=Dn();ql(n,r,o,u)}function ql(n,r,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(Zc(n))Xy(r,f);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=r.lastRenderedReducer,p!==null))try{var v=r.lastRenderedState,S=p(v,o);if(f.hasEagerState=!0,f.eagerState=S,bn(S,v))return Vc(n,r,f,0),rt===null&&Pc(),!1}catch{}finally{}if(o=bd(n,r,f,u),o!==null)return On(o,n,u),$y(o,r,u),!0}return!1}function ap(n,r,o,u){if(u={lane:2,revertLane:Up(),action:u,hasEagerState:!1,eagerState:null,next:null},Zc(n)){if(r)throw Error(s(479))}else r=bd(n,o,u,2),r!==null&&On(r,n,2)}function Zc(n){var r=n.alternate;return n===Ce||r!==null&&r===Ce}function Xy(n,r){io=Kc=!0;var o=n.pending;o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r}function $y(n,r,o){if((o&4194048)!==0){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,cl(n,o)}}var Jc={readContext:rn,use:Qc,useCallback:Et,useContext:Et,useEffect:Et,useImperativeHandle:Et,useLayoutEffect:Et,useInsertionEffect:Et,useMemo:Et,useReducer:Et,useRef:Et,useState:Et,useDebugValue:Et,useDeferredValue:Et,useTransition:Et,useSyncExternalStore:Et,useId:Et,useHostTransitionStatus:Et,useFormState:Et,useActionState:Et,useOptimistic:Et,useMemoCache:Et,useCacheRefresh:Et},Zy={readContext:rn,use:Qc,useCallback:function(n,r){return yn().memoizedState=[n,r===void 0?null:r],n},useContext:rn,useEffect:Vy,useImperativeHandle:function(n,r,o){o=o!=null?o.concat([n]):null,$c(4194308,4,zy.bind(null,r,n),o)},useLayoutEffect:function(n,r){return $c(4194308,4,n,r)},useInsertionEffect:function(n,r){$c(4,2,n,r)},useMemo:function(n,r){var o=yn();r=r===void 0?null:r;var u=n();if(sa){An(!0);try{n()}finally{An(!1)}}return o.memoizedState=[u,r],u},useReducer:function(n,r,o){var u=yn();if(o!==void 0){var f=o(r);if(sa){An(!0);try{o(r)}finally{An(!1)}}}else f=r;return u.memoizedState=u.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},u.queue=n,n=n.dispatch=vR.bind(null,Ce,n),[u.memoizedState,n]},useRef:function(n){var r=yn();return n={current:n},r.memoizedState=n},useState:function(n){n=ep(n);var r=n.queue,o=Wy.bind(null,Ce,r);return r.dispatch=o,[n.memoizedState,o]},useDebugValue:np,useDeferredValue:function(n,r){var o=yn();return ip(o,n,r)},useTransition:function(){var n=ep(!1);return n=Hy.bind(null,Ce,n.queue,!0,!1),yn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,r,o){var u=Ce,f=yn();if(He){if(o===void 0)throw Error(s(407));o=o()}else{if(o=r(),rt===null)throw Error(s(349));(Ue&124)!==0||vy(u,r,o)}f.memoizedState=o;var p={value:o,getSnapshot:r};return f.queue=p,Vy(Ty.bind(null,u,p,n),[n]),u.flags|=2048,ro(9,Xc(),Ey.bind(null,u,p,o,r),null),o},useId:function(){var n=yn(),r=rt.identifierPrefix;if(He){var o=ts,u=es;o=(u&~(1<<32-sn(u)-1)).toString(32)+o,r="«"+r+"R"+o,o=Yc++,0<o&&(r+="H"+o.toString(32)),r+="»"}else o=dR++,r="«"+r+"r"+o.toString(32)+"»";return n.memoizedState=r},useHostTransitionStatus:rp,useFormState:Dy,useActionState:Dy,useOptimistic:function(n){var r=yn();r.memoizedState=r.baseState=n;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=ap.bind(null,Ce,!0,o),o.dispatch=r,[n,r]},useMemoCache:$d,useCacheRefresh:function(){return yn().memoizedState=yR.bind(null,Ce)}},Jy={readContext:rn,use:Qc,useCallback:Fy,useContext:rn,useEffect:xy,useImperativeHandle:By,useInsertionEffect:Ly,useLayoutEffect:Uy,useMemo:qy,useReducer:Wc,useRef:Py,useState:function(){return Wc(ss)},useDebugValue:np,useDeferredValue:function(n,r){var o=Ct();return jy(o,Je.memoizedState,n,r)},useTransition:function(){var n=Wc(ss)[0],r=Ct().memoizedState;return[typeof n=="boolean"?n:Bl(n),r]},useSyncExternalStore:yy,useId:Yy,useHostTransitionStatus:rp,useFormState:Oy,useActionState:Oy,useOptimistic:function(n,r){var o=Ct();return wy(o,Je,n,r)},useMemoCache:$d,useCacheRefresh:Qy},ER={readContext:rn,use:Qc,useCallback:Fy,useContext:rn,useEffect:xy,useImperativeHandle:By,useInsertionEffect:Ly,useLayoutEffect:Uy,useMemo:qy,useReducer:Jd,useRef:Py,useState:function(){return Jd(ss)},useDebugValue:np,useDeferredValue:function(n,r){var o=Ct();return Je===null?ip(o,n,r):jy(o,Je.memoizedState,n,r)},useTransition:function(){var n=Jd(ss)[0],r=Ct().memoizedState;return[typeof n=="boolean"?n:Bl(n),r]},useSyncExternalStore:yy,useId:Yy,useHostTransitionStatus:rp,useFormState:ky,useActionState:ky,useOptimistic:function(n,r){var o=Ct();return Je!==null?wy(o,Je,n,r):(o.baseState=n,[n,o.queue.dispatch])},useMemoCache:$d,useCacheRefresh:Qy},ao=null,jl=0;function eh(n){var r=jl;return jl+=1,ao===null&&(ao=[]),cy(ao,n,r)}function Hl(n,r){r=r.props.ref,n.ref=r!==void 0?r:null}function th(n,r){throw r.$$typeof===T?Error(s(525)):(n=Object.prototype.toString.call(r),Error(s(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)))}function ev(n){var r=n._init;return r(n._payload)}function tv(n){function r(P,O){if(n){var U=P.deletions;U===null?(P.deletions=[O],P.flags|=16):U.push(O)}}function o(P,O){if(!n)return null;for(;O!==null;)r(P,O),O=O.sibling;return null}function u(P){for(var O=new Map;P!==null;)P.key!==null?O.set(P.key,P):O.set(P.index,P),P=P.sibling;return O}function f(P,O){return P=Ji(P,O),P.index=0,P.sibling=null,P}function p(P,O,U){return P.index=U,n?(U=P.alternate,U!==null?(U=U.index,U<O?(P.flags|=67108866,O):U):(P.flags|=67108866,O)):(P.flags|=1048576,O)}function v(P){return n&&P.alternate===null&&(P.flags|=67108866),P}function S(P,O,U,Y){return O===null||O.tag!==6?(O=Cd(U,P.mode,Y),O.return=P,O):(O=f(O,U),O.return=P,O)}function R(P,O,U,Y){var ce=U.type;return ce===F?K(P,O,U.props.children,Y,U.key):O!==null&&(O.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===b&&ev(ce)===O.type)?(O=f(O,U.props),Hl(O,U),O.return=P,O):(O=Lc(U.type,U.key,U.props,null,P.mode,Y),Hl(O,U),O.return=P,O)}function z(P,O,U,Y){return O===null||O.tag!==4||O.stateNode.containerInfo!==U.containerInfo||O.stateNode.implementation!==U.implementation?(O=Id(U,P.mode,Y),O.return=P,O):(O=f(O,U.children||[]),O.return=P,O)}function K(P,O,U,Y,ce){return O===null||O.tag!==7?(O=Xr(U,P.mode,Y,ce),O.return=P,O):(O=f(O,U),O.return=P,O)}function Q(P,O,U){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=Cd(""+O,P.mode,U),O.return=P,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case w:return U=Lc(O.type,O.key,O.props,null,P.mode,U),Hl(U,O),U.return=P,U;case x:return O=Id(O,P.mode,U),O.return=P,O;case b:var Y=O._init;return O=Y(O._payload),Q(P,O,U)}if(mt(O)||V(O))return O=Xr(O,P.mode,U,null),O.return=P,O;if(typeof O.then=="function")return Q(P,eh(O),U);if(O.$$typeof===te)return Q(P,Fc(P,O),U);th(P,O)}return null}function B(P,O,U,Y){var ce=O!==null?O.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return ce!==null?null:S(P,O,""+U,Y);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case w:return U.key===ce?R(P,O,U,Y):null;case x:return U.key===ce?z(P,O,U,Y):null;case b:return ce=U._init,U=ce(U._payload),B(P,O,U,Y)}if(mt(U)||V(U))return ce!==null?null:K(P,O,U,Y,null);if(typeof U.then=="function")return B(P,O,eh(U),Y);if(U.$$typeof===te)return B(P,O,Fc(P,U),Y);th(P,U)}return null}function q(P,O,U,Y,ce){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return P=P.get(U)||null,S(O,P,""+Y,ce);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case w:return P=P.get(Y.key===null?U:Y.key)||null,R(O,P,Y,ce);case x:return P=P.get(Y.key===null?U:Y.key)||null,z(O,P,Y,ce);case b:var De=Y._init;return Y=De(Y._payload),q(P,O,U,Y,ce)}if(mt(Y)||V(Y))return P=P.get(U)||null,K(O,P,Y,ce,null);if(typeof Y.then=="function")return q(P,O,U,eh(Y),ce);if(Y.$$typeof===te)return q(P,O,U,Fc(O,Y),ce);th(O,Y)}return null}function Se(P,O,U,Y){for(var ce=null,De=null,de=O,ve=O=0,jt=null;de!==null&&ve<U.length;ve++){de.index>ve?(jt=de,de=null):jt=de.sibling;var qe=B(P,de,U[ve],Y);if(qe===null){de===null&&(de=jt);break}n&&de&&qe.alternate===null&&r(P,de),O=p(qe,O,ve),De===null?ce=qe:De.sibling=qe,De=qe,de=jt}if(ve===U.length)return o(P,de),He&&Zr(P,ve),ce;if(de===null){for(;ve<U.length;ve++)de=Q(P,U[ve],Y),de!==null&&(O=p(de,O,ve),De===null?ce=de:De.sibling=de,De=de);return He&&Zr(P,ve),ce}for(de=u(de);ve<U.length;ve++)jt=q(de,P,ve,U[ve],Y),jt!==null&&(n&&jt.alternate!==null&&de.delete(jt.key===null?ve:jt.key),O=p(jt,O,ve),De===null?ce=jt:De.sibling=jt,De=jt);return n&&de.forEach(function(Zs){return r(P,Zs)}),He&&Zr(P,ve),ce}function _e(P,O,U,Y){if(U==null)throw Error(s(151));for(var ce=null,De=null,de=O,ve=O=0,jt=null,qe=U.next();de!==null&&!qe.done;ve++,qe=U.next()){de.index>ve?(jt=de,de=null):jt=de.sibling;var Zs=B(P,de,qe.value,Y);if(Zs===null){de===null&&(de=jt);break}n&&de&&Zs.alternate===null&&r(P,de),O=p(Zs,O,ve),De===null?ce=Zs:De.sibling=Zs,De=Zs,de=jt}if(qe.done)return o(P,de),He&&Zr(P,ve),ce;if(de===null){for(;!qe.done;ve++,qe=U.next())qe=Q(P,qe.value,Y),qe!==null&&(O=p(qe,O,ve),De===null?ce=qe:De.sibling=qe,De=qe);return He&&Zr(P,ve),ce}for(de=u(de);!qe.done;ve++,qe=U.next())qe=q(de,P,ve,qe.value,Y),qe!==null&&(n&&qe.alternate!==null&&de.delete(qe.key===null?ve:qe.key),O=p(qe,O,ve),De===null?ce=qe:De.sibling=qe,De=qe);return n&&de.forEach(function(T1){return r(P,T1)}),He&&Zr(P,ve),ce}function tt(P,O,U,Y){if(typeof U=="object"&&U!==null&&U.type===F&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case w:e:{for(var ce=U.key;O!==null;){if(O.key===ce){if(ce=U.type,ce===F){if(O.tag===7){o(P,O.sibling),Y=f(O,U.props.children),Y.return=P,P=Y;break e}}else if(O.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===b&&ev(ce)===O.type){o(P,O.sibling),Y=f(O,U.props),Hl(Y,U),Y.return=P,P=Y;break e}o(P,O);break}else r(P,O);O=O.sibling}U.type===F?(Y=Xr(U.props.children,P.mode,Y,U.key),Y.return=P,P=Y):(Y=Lc(U.type,U.key,U.props,null,P.mode,Y),Hl(Y,U),Y.return=P,P=Y)}return v(P);case x:e:{for(ce=U.key;O!==null;){if(O.key===ce)if(O.tag===4&&O.stateNode.containerInfo===U.containerInfo&&O.stateNode.implementation===U.implementation){o(P,O.sibling),Y=f(O,U.children||[]),Y.return=P,P=Y;break e}else{o(P,O);break}else r(P,O);O=O.sibling}Y=Id(U,P.mode,Y),Y.return=P,P=Y}return v(P);case b:return ce=U._init,U=ce(U._payload),tt(P,O,U,Y)}if(mt(U))return Se(P,O,U,Y);if(V(U)){if(ce=V(U),typeof ce!="function")throw Error(s(150));return U=ce.call(U),_e(P,O,U,Y)}if(typeof U.then=="function")return tt(P,O,eh(U),Y);if(U.$$typeof===te)return tt(P,O,Fc(P,U),Y);th(P,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,O!==null&&O.tag===6?(o(P,O.sibling),Y=f(O,U),Y.return=P,P=Y):(o(P,O),Y=Cd(U,P.mode,Y),Y.return=P,P=Y),v(P)):o(P,O)}return function(P,O,U,Y){try{jl=0;var ce=tt(P,O,U,Y);return ao=null,ce}catch(de){if(de===Pl||de===jc)throw de;var De=Rn(29,de,null,P.mode);return De.lanes=Y,De.return=P,De}finally{}}}var oo=tv(!0),nv=tv(!1),Kn=Z(null),wi=null;function Ls(n){var r=n.alternate;J(Pt,Pt.current&1),J(Kn,n),wi===null&&(r===null||no.current!==null||r.memoizedState!==null)&&(wi=n)}function iv(n){if(n.tag===22){if(J(Pt,Pt.current),J(Kn,n),wi===null){var r=n.alternate;r!==null&&r.memoizedState!==null&&(wi=n)}}else Us()}function Us(){J(Pt,Pt.current),J(Kn,Kn.current)}function rs(n){ie(Kn),wi===n&&(wi=null),ie(Pt)}var Pt=Z(0);function nh(n){for(var r=n;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||Xp(o)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function op(n,r,o,u){r=n.memoizedState,o=o(u,r),o=o==null?r:E({},r,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var lp={enqueueSetState:function(n,r,o){n=n._reactInternals;var u=Dn(),f=Ps(u);f.payload=r,o!=null&&(f.callback=o),r=Vs(n,f,u),r!==null&&(On(r,n,u),xl(r,n,u))},enqueueReplaceState:function(n,r,o){n=n._reactInternals;var u=Dn(),f=Ps(u);f.tag=1,f.payload=r,o!=null&&(f.callback=o),r=Vs(n,f,u),r!==null&&(On(r,n,u),xl(r,n,u))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var o=Dn(),u=Ps(o);u.tag=2,r!=null&&(u.callback=r),r=Vs(n,u,o),r!==null&&(On(r,n,o),xl(r,n,o))}};function sv(n,r,o,u,f,p,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,p,v):r.prototype&&r.prototype.isPureReactComponent?!Rl(o,u)||!Rl(f,p):!0}function rv(n,r,o,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==n&&lp.enqueueReplaceState(r,r.state,null)}function ra(n,r){var o=r;if("ref"in r){o={};for(var u in r)u!=="ref"&&(o[u]=r[u])}if(n=n.defaultProps){o===r&&(o=E({},o));for(var f in n)o[f]===void 0&&(o[f]=n[f])}return o}var ih=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function av(n){ih(n)}function ov(n){console.error(n)}function lv(n){ih(n)}function sh(n,r){try{var o=n.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(u){setTimeout(function(){throw u})}}function uv(n,r,o){try{var u=n.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function up(n,r,o){return o=Ps(o),o.tag=3,o.payload={element:null},o.callback=function(){sh(n,r)},o}function cv(n){return n=Ps(n),n.tag=3,n}function hv(n,r,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var p=u.value;n.payload=function(){return f(p)},n.callback=function(){uv(r,o,u)}}var v=o.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(n.callback=function(){uv(r,o,u),typeof f!="function"&&(Hs===null?Hs=new Set([this]):Hs.add(this));var S=u.stack;this.componentDidCatch(u.value,{componentStack:S!==null?S:""})})}function TR(n,r,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(r=o.alternate,r!==null&&Ol(r,o,f,!0),o=Kn.current,o!==null){switch(o.tag){case 13:return wi===null?kp():o.alternate===null&&yt===0&&(yt=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===Ud?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([u]):r.add(u),Vp(n,u,f)),!1;case 22:return o.flags|=65536,u===Ud?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([u]):o.add(u)),Vp(n,u,f)),!1}throw Error(s(435,o.tag))}return Vp(n,u,f),kp(),!1}if(He)return r=Kn.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=f,u!==Od&&(n=Error(s(422),{cause:u}),Dl(qn(n,o)))):(u!==Od&&(r=Error(s(423),{cause:u}),Dl(qn(r,o))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,u=qn(u,o),f=up(n.stateNode,u,f),Fd(n,f),yt!==4&&(yt=2)),!1;var p=Error(s(520),{cause:u});if(p=qn(p,o),$l===null?$l=[p]:$l.push(p),yt!==4&&(yt=2),r===null)return!0;u=qn(u,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,n=f&-f,o.lanes|=n,n=up(o.stateNode,u,n),Fd(o,n),!1;case 1:if(r=o.type,p=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Hs===null||!Hs.has(p))))return o.flags|=65536,f&=-f,o.lanes|=f,f=cv(f),hv(f,n,o,u),Fd(o,f),!1}o=o.return}while(o!==null);return!1}var fv=Error(s(461)),Ft=!1;function Xt(n,r,o,u){r.child=n===null?nv(r,null,o,u):oo(r,n.child,o,u)}function dv(n,r,o,u,f){o=o.render;var p=r.ref;if("ref"in u){var v={};for(var S in u)S!=="ref"&&(v[S]=u[S])}else v=u;return na(r),u=Kd(n,r,o,v,p,f),S=Yd(),n!==null&&!Ft?(Qd(n,r,f),as(n,r,f)):(He&&S&&Nd(r),r.flags|=1,Xt(n,r,u,f),r.child)}function pv(n,r,o,u,f){if(n===null){var p=o.type;return typeof p=="function"&&!Rd(p)&&p.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=p,mv(n,r,p,u,f)):(n=Lc(o.type,null,u,r,r.mode,f),n.ref=r.ref,n.return=r,r.child=n)}if(p=n.child,!_p(n,f)){var v=p.memoizedProps;if(o=o.compare,o=o!==null?o:Rl,o(v,u)&&n.ref===r.ref)return as(n,r,f)}return r.flags|=1,n=Ji(p,u),n.ref=r.ref,n.return=r,r.child=n}function mv(n,r,o,u,f){if(n!==null){var p=n.memoizedProps;if(Rl(p,u)&&n.ref===r.ref)if(Ft=!1,r.pendingProps=u=p,_p(n,f))(n.flags&131072)!==0&&(Ft=!0);else return r.lanes=n.lanes,as(n,r,f)}return cp(n,r,o,u,f)}function gv(n,r,o){var u=r.pendingProps,f=u.children,p=n!==null?n.memoizedState:null;if(u.mode==="hidden"){if((r.flags&128)!==0){if(u=p!==null?p.baseLanes|o:o,n!==null){for(f=r.child=n.child,p=0;f!==null;)p=p|f.lanes|f.childLanes,f=f.sibling;r.childLanes=p&~u}else r.childLanes=0,r.child=null;return _v(n,r,u,o)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},n!==null&&qc(r,p!==null?p.cachePool:null),p!==null?my(r,p):jd(),iv(r);else return r.lanes=r.childLanes=536870912,_v(n,r,p!==null?p.baseLanes|o:o,o)}else p!==null?(qc(r,p.cachePool),my(r,p),Us(),r.memoizedState=null):(n!==null&&qc(r,null),jd(),Us());return Xt(n,r,f,o),r.child}function _v(n,r,o,u){var f=Ld();return f=f===null?null:{parent:kt._currentValue,pool:f},r.memoizedState={baseLanes:o,cachePool:f},n!==null&&qc(r,null),jd(),iv(r),n!==null&&Ol(n,r,u,!0),null}function rh(n,r){var o=r.ref;if(o===null)n!==null&&n.ref!==null&&(r.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(s(284));(n===null||n.ref!==o)&&(r.flags|=4194816)}}function cp(n,r,o,u,f){return na(r),o=Kd(n,r,o,u,void 0,f),u=Yd(),n!==null&&!Ft?(Qd(n,r,f),as(n,r,f)):(He&&u&&Nd(r),r.flags|=1,Xt(n,r,o,f),r.child)}function yv(n,r,o,u,f,p){return na(r),r.updateQueue=null,o=_y(r,u,o,f),gy(n),u=Yd(),n!==null&&!Ft?(Qd(n,r,p),as(n,r,p)):(He&&u&&Nd(r),r.flags|=1,Xt(n,r,o,p),r.child)}function vv(n,r,o,u,f){if(na(r),r.stateNode===null){var p=$a,v=o.contextType;typeof v=="object"&&v!==null&&(p=rn(v)),p=new o(u,p),r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=lp,r.stateNode=p,p._reactInternals=r,p=r.stateNode,p.props=u,p.state=r.memoizedState,p.refs={},zd(r),v=o.contextType,p.context=typeof v=="object"&&v!==null?rn(v):$a,p.state=r.memoizedState,v=o.getDerivedStateFromProps,typeof v=="function"&&(op(r,o,v,u),p.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(v=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),v!==p.state&&lp.enqueueReplaceState(p,p.state,null),Ul(r,u,p,f),Ll(),p.state=r.memoizedState),typeof p.componentDidMount=="function"&&(r.flags|=4194308),u=!0}else if(n===null){p=r.stateNode;var S=r.memoizedProps,R=ra(o,S);p.props=R;var z=p.context,K=o.contextType;v=$a,typeof K=="object"&&K!==null&&(v=rn(K));var Q=o.getDerivedStateFromProps;K=typeof Q=="function"||typeof p.getSnapshotBeforeUpdate=="function",S=r.pendingProps!==S,K||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(S||z!==v)&&rv(r,p,u,v),ks=!1;var B=r.memoizedState;p.state=B,Ul(r,u,p,f),Ll(),z=r.memoizedState,S||B!==z||ks?(typeof Q=="function"&&(op(r,o,Q,u),z=r.memoizedState),(R=ks||sv(r,o,R,u,B,z,v))?(K||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(r.flags|=4194308)):(typeof p.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=z),p.props=u,p.state=z,p.context=v,u=R):(typeof p.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{p=r.stateNode,Bd(n,r),v=r.memoizedProps,K=ra(o,v),p.props=K,Q=r.pendingProps,B=p.context,z=o.contextType,R=$a,typeof z=="object"&&z!==null&&(R=rn(z)),S=o.getDerivedStateFromProps,(z=typeof S=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(v!==Q||B!==R)&&rv(r,p,u,R),ks=!1,B=r.memoizedState,p.state=B,Ul(r,u,p,f),Ll();var q=r.memoizedState;v!==Q||B!==q||ks||n!==null&&n.dependencies!==null&&Bc(n.dependencies)?(typeof S=="function"&&(op(r,o,S,u),q=r.memoizedState),(K=ks||sv(r,o,K,u,B,q,R)||n!==null&&n.dependencies!==null&&Bc(n.dependencies))?(z||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(u,q,R),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(u,q,R)),typeof p.componentDidUpdate=="function"&&(r.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof p.componentDidUpdate!="function"||v===n.memoizedProps&&B===n.memoizedState||(r.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||v===n.memoizedProps&&B===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=q),p.props=u,p.state=q,p.context=R,u=K):(typeof p.componentDidUpdate!="function"||v===n.memoizedProps&&B===n.memoizedState||(r.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||v===n.memoizedProps&&B===n.memoizedState||(r.flags|=1024),u=!1)}return p=u,rh(n,r),u=(r.flags&128)!==0,p||u?(p=r.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:p.render(),r.flags|=1,n!==null&&u?(r.child=oo(r,n.child,null,f),r.child=oo(r,null,o,f)):Xt(n,r,o,f),r.memoizedState=p.state,n=r.child):n=as(n,r,f),n}function Ev(n,r,o,u){return Nl(),r.flags|=256,Xt(n,r,o,u),r.child}var hp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function fp(n){return{baseLanes:n,cachePool:oy()}}function dp(n,r,o){return n=n!==null?n.childLanes&~o:0,r&&(n|=Yn),n}function Tv(n,r,o){var u=r.pendingProps,f=!1,p=(r.flags&128)!==0,v;if((v=p)||(v=n!==null&&n.memoizedState===null?!1:(Pt.current&2)!==0),v&&(f=!0,r.flags&=-129),v=(r.flags&32)!==0,r.flags&=-33,n===null){if(He){if(f?Ls(r):Us(),He){var S=_t,R;if(R=S){e:{for(R=S,S=Ai;R.nodeType!==8;){if(!S){S=null;break e}if(R=ii(R.nextSibling),R===null){S=null;break e}}S=R}S!==null?(r.memoizedState={dehydrated:S,treeContext:$r!==null?{id:es,overflow:ts}:null,retryLane:536870912,hydrationErrors:null},R=Rn(18,null,null,0),R.stateNode=S,R.return=r,r.child=R,_n=r,_t=null,R=!0):R=!1}R||ea(r)}if(S=r.memoizedState,S!==null&&(S=S.dehydrated,S!==null))return Xp(S)?r.lanes=32:r.lanes=536870912,null;rs(r)}return S=u.children,u=u.fallback,f?(Us(),f=r.mode,S=ah({mode:"hidden",children:S},f),u=Xr(u,f,o,null),S.return=r,u.return=r,S.sibling=u,r.child=S,f=r.child,f.memoizedState=fp(o),f.childLanes=dp(n,v,o),r.memoizedState=hp,u):(Ls(r),pp(r,S))}if(R=n.memoizedState,R!==null&&(S=R.dehydrated,S!==null)){if(p)r.flags&256?(Ls(r),r.flags&=-257,r=mp(n,r,o)):r.memoizedState!==null?(Us(),r.child=n.child,r.flags|=128,r=null):(Us(),f=u.fallback,S=r.mode,u=ah({mode:"visible",children:u.children},S),f=Xr(f,S,o,null),f.flags|=2,u.return=r,f.return=r,u.sibling=f,r.child=u,oo(r,n.child,null,o),u=r.child,u.memoizedState=fp(o),u.childLanes=dp(n,v,o),r.memoizedState=hp,r=f);else if(Ls(r),Xp(S)){if(v=S.nextSibling&&S.nextSibling.dataset,v)var z=v.dgst;v=z,u=Error(s(419)),u.stack="",u.digest=v,Dl({value:u,source:null,stack:null}),r=mp(n,r,o)}else if(Ft||Ol(n,r,o,!1),v=(o&n.childLanes)!==0,Ft||v){if(v=rt,v!==null&&(u=o&-o,u=(u&42)!==0?1:bs(u),u=(u&(v.suspendedLanes|o))!==0?0:u,u!==0&&u!==R.retryLane))throw R.retryLane=u,Xa(n,u),On(v,n,u),fv;S.data==="$?"||kp(),r=mp(n,r,o)}else S.data==="$?"?(r.flags|=192,r.child=n.child,r=null):(n=R.treeContext,_t=ii(S.nextSibling),_n=r,He=!0,Jr=null,Ai=!1,n!==null&&(Hn[Gn++]=es,Hn[Gn++]=ts,Hn[Gn++]=$r,es=n.id,ts=n.overflow,$r=r),r=pp(r,u.children),r.flags|=4096);return r}return f?(Us(),f=u.fallback,S=r.mode,R=n.child,z=R.sibling,u=Ji(R,{mode:"hidden",children:u.children}),u.subtreeFlags=R.subtreeFlags&65011712,z!==null?f=Ji(z,f):(f=Xr(f,S,o,null),f.flags|=2),f.return=r,u.return=r,u.sibling=f,r.child=u,u=f,f=r.child,S=n.child.memoizedState,S===null?S=fp(o):(R=S.cachePool,R!==null?(z=kt._currentValue,R=R.parent!==z?{parent:z,pool:z}:R):R=oy(),S={baseLanes:S.baseLanes|o,cachePool:R}),f.memoizedState=S,f.childLanes=dp(n,v,o),r.memoizedState=hp,u):(Ls(r),o=n.child,n=o.sibling,o=Ji(o,{mode:"visible",children:u.children}),o.return=r,o.sibling=null,n!==null&&(v=r.deletions,v===null?(r.deletions=[n],r.flags|=16):v.push(n)),r.child=o,r.memoizedState=null,o)}function pp(n,r){return r=ah({mode:"visible",children:r},n.mode),r.return=n,n.child=r}function ah(n,r){return n=Rn(22,n,null,r),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function mp(n,r,o){return oo(r,n.child,null,o),n=pp(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Sv(n,r,o){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),kd(n.return,r,o)}function gp(n,r,o,u,f){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(p.isBackwards=r,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=o,p.tailMode=f)}function Av(n,r,o){var u=r.pendingProps,f=u.revealOrder,p=u.tail;if(Xt(n,r,u.children,o),u=Pt.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Sv(n,o,r);else if(n.tag===19)Sv(n,o,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}switch(J(Pt,u),f){case"forwards":for(o=r.child,f=null;o!==null;)n=o.alternate,n!==null&&nh(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=r.child,r.child=null):(f=o.sibling,o.sibling=null),gp(r,!1,f,o,p);break;case"backwards":for(o=null,f=r.child,r.child=null;f!==null;){if(n=f.alternate,n!==null&&nh(n)===null){r.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}gp(r,!0,o,null,p);break;case"together":gp(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function as(n,r,o){if(n!==null&&(r.dependencies=n.dependencies),js|=r.lanes,(o&r.childLanes)===0)if(n!==null){if(Ol(n,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(n!==null&&r.child!==n.child)throw Error(s(153));if(r.child!==null){for(n=r.child,o=Ji(n,n.pendingProps),r.child=o,o.return=r;n.sibling!==null;)n=n.sibling,o=o.sibling=Ji(n,n.pendingProps),o.return=r;o.sibling=null}return r.child}function _p(n,r){return(n.lanes&r)!==0?!0:(n=n.dependencies,!!(n!==null&&Bc(n)))}function SR(n,r,o){switch(r.tag){case 3:st(r,r.stateNode.containerInfo),Ms(r,kt,n.memoizedState.cache),Nl();break;case 27:case 5:ws(r);break;case 4:st(r,r.stateNode.containerInfo);break;case 10:Ms(r,r.type,r.memoizedProps.value);break;case 13:var u=r.memoizedState;if(u!==null)return u.dehydrated!==null?(Ls(r),r.flags|=128,null):(o&r.child.childLanes)!==0?Tv(n,r,o):(Ls(r),n=as(n,r,o),n!==null?n.sibling:null);Ls(r);break;case 19:var f=(n.flags&128)!==0;if(u=(o&r.childLanes)!==0,u||(Ol(n,r,o,!1),u=(o&r.childLanes)!==0),f){if(u)return Av(n,r,o);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),J(Pt,Pt.current),u)break;return null;case 22:case 23:return r.lanes=0,gv(n,r,o);case 24:Ms(r,kt,n.memoizedState.cache)}return as(n,r,o)}function wv(n,r,o){if(n!==null)if(n.memoizedProps!==r.pendingProps)Ft=!0;else{if(!_p(n,o)&&(r.flags&128)===0)return Ft=!1,SR(n,r,o);Ft=(n.flags&131072)!==0}else Ft=!1,He&&(r.flags&1048576)!==0&&ey(r,zc,r.index);switch(r.lanes=0,r.tag){case 16:e:{n=r.pendingProps;var u=r.elementType,f=u._init;if(u=f(u._payload),r.type=u,typeof u=="function")Rd(u)?(n=ra(u,n),r.tag=1,r=vv(null,r,u,n,o)):(r.tag=0,r=cp(null,r,u,n,o));else{if(u!=null){if(f=u.$$typeof,f===ye){r.tag=11,r=dv(null,r,u,n,o);break e}else if(f===N){r.tag=14,r=pv(null,r,u,n,o);break e}}throw r=Yt(u)||u,Error(s(306,r,""))}}return r;case 0:return cp(n,r,r.type,r.pendingProps,o);case 1:return u=r.type,f=ra(u,r.pendingProps),vv(n,r,u,f,o);case 3:e:{if(st(r,r.stateNode.containerInfo),n===null)throw Error(s(387));u=r.pendingProps;var p=r.memoizedState;f=p.element,Bd(n,r),Ul(r,u,null,o);var v=r.memoizedState;if(u=v.cache,Ms(r,kt,u),u!==p.cache&&Pd(r,[kt],o,!0),Ll(),u=v.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:v.cache},r.updateQueue.baseState=p,r.memoizedState=p,r.flags&256){r=Ev(n,r,u,o);break e}else if(u!==f){f=qn(Error(s(424)),r),Dl(f),r=Ev(n,r,u,o);break e}else{switch(n=r.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(_t=ii(n.firstChild),_n=r,He=!0,Jr=null,Ai=!0,o=nv(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(Nl(),u===f){r=as(n,r,o);break e}Xt(n,r,u,o)}r=r.child}return r;case 26:return rh(n,r),n===null?(o=IE(r.type,null,r.pendingProps,null))?r.memoizedState=o:He||(o=r.type,n=r.pendingProps,u=Eh(Ae.current).createElement(o),u[Dt]=r,u[wt]=n,Zt(u,o,n),vt(u),r.stateNode=u):r.memoizedState=IE(r.type,n.memoizedProps,r.pendingProps,n.memoizedState),null;case 27:return ws(r),n===null&&He&&(u=r.stateNode=bE(r.type,r.pendingProps,Ae.current),_n=r,Ai=!0,f=_t,Ys(r.type)?($p=f,_t=ii(u.firstChild)):_t=f),Xt(n,r,r.pendingProps.children,o),rh(n,r),n===null&&(r.flags|=4194304),r.child;case 5:return n===null&&He&&((f=u=_t)&&(u=XR(u,r.type,r.pendingProps,Ai),u!==null?(r.stateNode=u,_n=r,_t=ii(u.firstChild),Ai=!1,f=!0):f=!1),f||ea(r)),ws(r),f=r.type,p=r.pendingProps,v=n!==null?n.memoizedProps:null,u=p.children,Yp(f,p)?u=null:v!==null&&Yp(f,v)&&(r.flags|=32),r.memoizedState!==null&&(f=Kd(n,r,pR,null,null,o),au._currentValue=f),rh(n,r),Xt(n,r,u,o),r.child;case 6:return n===null&&He&&((n=o=_t)&&(o=$R(o,r.pendingProps,Ai),o!==null?(r.stateNode=o,_n=r,_t=null,n=!0):n=!1),n||ea(r)),null;case 13:return Tv(n,r,o);case 4:return st(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=oo(r,null,u,o):Xt(n,r,u,o),r.child;case 11:return dv(n,r,r.type,r.pendingProps,o);case 7:return Xt(n,r,r.pendingProps,o),r.child;case 8:return Xt(n,r,r.pendingProps.children,o),r.child;case 12:return Xt(n,r,r.pendingProps.children,o),r.child;case 10:return u=r.pendingProps,Ms(r,r.type,u.value),Xt(n,r,u.children,o),r.child;case 9:return f=r.type._context,u=r.pendingProps.children,na(r),f=rn(f),u=u(f),r.flags|=1,Xt(n,r,u,o),r.child;case 14:return pv(n,r,r.type,r.pendingProps,o);case 15:return mv(n,r,r.type,r.pendingProps,o);case 19:return Av(n,r,o);case 31:return u=r.pendingProps,o=r.mode,u={mode:u.mode,children:u.children},n===null?(o=ah(u,o),o.ref=r.ref,r.child=o,o.return=r,r=o):(o=Ji(n.child,u),o.ref=r.ref,r.child=o,o.return=r,r=o),r;case 22:return gv(n,r,o);case 24:return na(r),u=rn(kt),n===null?(f=Ld(),f===null&&(f=rt,p=Vd(),f.pooledCache=p,p.refCount++,p!==null&&(f.pooledCacheLanes|=o),f=p),r.memoizedState={parent:u,cache:f},zd(r),Ms(r,kt,f)):((n.lanes&o)!==0&&(Bd(n,r),Ul(r,null,null,o),Ll()),f=n.memoizedState,p=r.memoizedState,f.parent!==u?(f={parent:u,cache:u},r.memoizedState=f,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=f),Ms(r,kt,u)):(u=p.cache,Ms(r,kt,u),u!==f.cache&&Pd(r,[kt],o,!0))),Xt(n,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function os(n){n.flags|=4}function bv(n,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!kE(r)){if(r=Kn.current,r!==null&&((Ue&4194048)===Ue?wi!==null:(Ue&62914560)!==Ue&&(Ue&536870912)===0||r!==wi))throw Vl=Ud,ly;n.flags|=8192}}function oh(n,r){r!==null&&(n.flags|=4),n.flags&16384&&(r=n.tag!==22?ll():536870912,n.lanes|=r,ho|=r)}function Gl(n,r){if(!He)switch(n.tailMode){case"hidden":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function dt(n){var r=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(r)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&65011712,u|=f.flags&65011712,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=u,n.childLanes=o,r}function AR(n,r,o){var u=r.pendingProps;switch(Dd(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dt(r),null;case 1:return dt(r),null;case 3:return o=r.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),r.memoizedState.cache!==u&&(r.flags|=2048),is(kt),hi(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(Il(r)?os(r):n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,iy())),dt(r),null;case 26:return o=r.memoizedState,n===null?(os(r),o!==null?(dt(r),bv(r,o)):(dt(r),r.flags&=-16777217)):o?o!==n.memoizedState?(os(r),dt(r),bv(r,o)):(dt(r),r.flags&=-16777217):(n.memoizedProps!==u&&os(r),dt(r),r.flags&=-16777217),null;case 27:Bi(r),o=Ae.current;var f=r.type;if(n!==null&&r.stateNode!=null)n.memoizedProps!==u&&os(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return dt(r),null}n=me.current,Il(r)?ty(r):(n=bE(f,u,o),r.stateNode=n,os(r))}return dt(r),null;case 5:if(Bi(r),o=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==u&&os(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return dt(r),null}if(n=me.current,Il(r))ty(r);else{switch(f=Eh(Ae.current),n){case 1:n=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:n=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":n=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":n=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":n=f.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?n.multiple=!0:u.size&&(n.size=u.size);break;default:n=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}n[Dt]=r,n[wt]=u;e:for(f=r.child;f!==null;){if(f.tag===5||f.tag===6)n.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===r)break e;for(;f.sibling===null;){if(f.return===null||f.return===r)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}r.stateNode=n;e:switch(Zt(n,o,u),o){case"button":case"input":case"select":case"textarea":n=!!u.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&os(r)}}return dt(r),r.flags&=-16777217,null;case 6:if(n&&r.stateNode!=null)n.memoizedProps!==u&&os(r);else{if(typeof u!="string"&&r.stateNode===null)throw Error(s(166));if(n=Ae.current,Il(r)){if(n=r.stateNode,o=r.memoizedProps,u=null,f=_n,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}n[Dt]=r,n=!!(n.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||yE(n.nodeValue,o)),n||ea(r)}else n=Eh(n).createTextNode(u),n[Dt]=r,r.stateNode=n}return dt(r),null;case 13:if(u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=Il(r),u!==null&&u.dehydrated!==null){if(n===null){if(!f)throw Error(s(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[Dt]=r}else Nl(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;dt(r),f=!1}else f=iy(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=f),f=!0;if(!f)return r.flags&256?(rs(r),r):(rs(r),null)}if(rs(r),(r.flags&128)!==0)return r.lanes=o,r;if(o=u!==null,n=n!==null&&n.memoizedState!==null,o){u=r.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var p=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(p=u.memoizedState.cachePool.pool),p!==f&&(u.flags|=2048)}return o!==n&&o&&(r.child.flags|=8192),oh(r,r.updateQueue),dt(r),null;case 4:return hi(),n===null&&qp(r.stateNode.containerInfo),dt(r),null;case 10:return is(r.type),dt(r),null;case 19:if(ie(Pt),f=r.memoizedState,f===null)return dt(r),null;if(u=(r.flags&128)!==0,p=f.rendering,p===null)if(u)Gl(f,!1);else{if(yt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(p=nh(n),p!==null){for(r.flags|=128,Gl(f,!1),n=p.updateQueue,r.updateQueue=n,oh(r,n),r.subtreeFlags=0,n=o,o=r.child;o!==null;)J_(o,n),o=o.sibling;return J(Pt,Pt.current&1|2),r.child}n=n.sibling}f.tail!==null&&xn()>ch&&(r.flags|=128,u=!0,Gl(f,!1),r.lanes=4194304)}else{if(!u)if(n=nh(p),n!==null){if(r.flags|=128,u=!0,n=n.updateQueue,r.updateQueue=n,oh(r,n),Gl(f,!0),f.tail===null&&f.tailMode==="hidden"&&!p.alternate&&!He)return dt(r),null}else 2*xn()-f.renderingStartTime>ch&&o!==536870912&&(r.flags|=128,u=!0,Gl(f,!1),r.lanes=4194304);f.isBackwards?(p.sibling=r.child,r.child=p):(n=f.last,n!==null?n.sibling=p:r.child=p,f.last=p)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=xn(),r.sibling=null,n=Pt.current,J(Pt,u?n&1|2:n&1),r):(dt(r),null);case 22:case 23:return rs(r),Hd(),u=r.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(r.flags|=8192):u&&(r.flags|=8192),u?(o&536870912)!==0&&(r.flags&128)===0&&(dt(r),r.subtreeFlags&6&&(r.flags|=8192)):dt(r),o=r.updateQueue,o!==null&&oh(r,o.retryQueue),o=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==o&&(r.flags|=2048),n!==null&&ie(ia),null;case 24:return o=null,n!==null&&(o=n.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),is(kt),dt(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function wR(n,r){switch(Dd(r),r.tag){case 1:return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return is(kt),hi(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 26:case 27:case 5:return Bi(r),null;case 13:if(rs(r),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(s(340));Nl()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return ie(Pt),null;case 4:return hi(),null;case 10:return is(r.type),null;case 22:case 23:return rs(r),Hd(),n!==null&&ie(ia),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 24:return is(kt),null;case 25:return null;default:return null}}function Rv(n,r){switch(Dd(r),r.tag){case 3:is(kt),hi();break;case 26:case 27:case 5:Bi(r);break;case 4:hi();break;case 13:rs(r);break;case 19:ie(Pt);break;case 10:is(r.type);break;case 22:case 23:rs(r),Hd(),n!==null&&ie(ia);break;case 24:is(kt)}}function Kl(n,r){try{var o=r.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&n)===n){u=void 0;var p=o.create,v=o.inst;u=p(),v.destroy=u}o=o.next}while(o!==f)}}catch(S){it(r,r.return,S)}}function zs(n,r,o){try{var u=r.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var p=f.next;u=p;do{if((u.tag&n)===n){var v=u.inst,S=v.destroy;if(S!==void 0){v.destroy=void 0,f=r;var R=o,z=S;try{z()}catch(K){it(f,R,K)}}}u=u.next}while(u!==p)}}catch(K){it(r,r.return,K)}}function Cv(n){var r=n.updateQueue;if(r!==null){var o=n.stateNode;try{py(r,o)}catch(u){it(n,n.return,u)}}}function Iv(n,r,o){o.props=ra(n.type,n.memoizedProps),o.state=n.memoizedState;try{o.componentWillUnmount()}catch(u){it(n,r,u)}}function Yl(n,r){try{var o=n.ref;if(o!==null){switch(n.tag){case 26:case 27:case 5:var u=n.stateNode;break;case 30:u=n.stateNode;break;default:u=n.stateNode}typeof o=="function"?n.refCleanup=o(u):o.current=u}}catch(f){it(n,r,f)}}function bi(n,r){var o=n.ref,u=n.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){it(n,r,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){it(n,r,f)}else o.current=null}function Nv(n){var r=n.type,o=n.memoizedProps,u=n.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){it(n,n.return,f)}}function yp(n,r,o){try{var u=n.stateNode;GR(u,n.type,o,r),u[wt]=r}catch(f){it(n,n.return,f)}}function Dv(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Ys(n.type)||n.tag===4}function vp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Dv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Ys(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ep(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(n,r):(r=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,r.appendChild(n),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=vh));else if(u!==4&&(u===27&&Ys(n.type)&&(o=n.stateNode,r=null),n=n.child,n!==null))for(Ep(n,r,o),n=n.sibling;n!==null;)Ep(n,r,o),n=n.sibling}function lh(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.insertBefore(n,r):o.appendChild(n);else if(u!==4&&(u===27&&Ys(n.type)&&(o=n.stateNode),n=n.child,n!==null))for(lh(n,r,o),n=n.sibling;n!==null;)lh(n,r,o),n=n.sibling}function Ov(n){var r=n.stateNode,o=n.memoizedProps;try{for(var u=n.type,f=r.attributes;f.length;)r.removeAttributeNode(f[0]);Zt(r,u,o),r[Dt]=n,r[wt]=o}catch(p){it(n,n.return,p)}}var ls=!1,Tt=!1,Tp=!1,Mv=typeof WeakSet=="function"?WeakSet:Set,qt=null;function bR(n,r){if(n=n.containerInfo,Gp=Rh,n=j_(n),vd(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var v=0,S=-1,R=-1,z=0,K=0,Q=n,B=null;t:for(;;){for(var q;Q!==o||f!==0&&Q.nodeType!==3||(S=v+f),Q!==p||u!==0&&Q.nodeType!==3||(R=v+u),Q.nodeType===3&&(v+=Q.nodeValue.length),(q=Q.firstChild)!==null;)B=Q,Q=q;for(;;){if(Q===n)break t;if(B===o&&++z===f&&(S=v),B===p&&++K===u&&(R=v),(q=Q.nextSibling)!==null)break;Q=B,B=Q.parentNode}Q=q}o=S===-1||R===-1?null:{start:S,end:R}}else o=null}o=o||{start:0,end:0}}else o=null;for(Kp={focusedElem:n,selectionRange:o},Rh=!1,qt=r;qt!==null;)if(r=qt,n=r.child,(r.subtreeFlags&1024)!==0&&n!==null)n.return=r,qt=n;else for(;qt!==null;){switch(r=qt,p=r.alternate,n=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&p!==null){n=void 0,o=r,f=p.memoizedProps,p=p.memoizedState,u=o.stateNode;try{var Se=ra(o.type,f,o.elementType===o.type);n=u.getSnapshotBeforeUpdate(Se,p),u.__reactInternalSnapshotBeforeUpdate=n}catch(_e){it(o,o.return,_e)}}break;case 3:if((n&1024)!==0){if(n=r.stateNode.containerInfo,o=n.nodeType,o===9)Wp(n);else if(o===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Wp(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(s(163))}if(n=r.sibling,n!==null){n.return=r.return,qt=n;break}qt=r.return}}function kv(n,r,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:Bs(n,o),u&4&&Kl(5,o);break;case 1:if(Bs(n,o),u&4)if(n=o.stateNode,r===null)try{n.componentDidMount()}catch(v){it(o,o.return,v)}else{var f=ra(o.type,r.memoizedProps);r=r.memoizedState;try{n.componentDidUpdate(f,r,n.__reactInternalSnapshotBeforeUpdate)}catch(v){it(o,o.return,v)}}u&64&&Cv(o),u&512&&Yl(o,o.return);break;case 3:if(Bs(n,o),u&64&&(n=o.updateQueue,n!==null)){if(r=null,o.child!==null)switch(o.child.tag){case 27:case 5:r=o.child.stateNode;break;case 1:r=o.child.stateNode}try{py(n,r)}catch(v){it(o,o.return,v)}}break;case 27:r===null&&u&4&&Ov(o);case 26:case 5:Bs(n,o),r===null&&u&4&&Nv(o),u&512&&Yl(o,o.return);break;case 12:Bs(n,o);break;case 13:Bs(n,o),u&4&&xv(n,o),u&64&&(n=o.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(o=PR.bind(null,o),ZR(n,o))));break;case 22:if(u=o.memoizedState!==null||ls,!u){r=r!==null&&r.memoizedState!==null||Tt,f=ls;var p=Tt;ls=u,(Tt=r)&&!p?Fs(n,o,(o.subtreeFlags&8772)!==0):Bs(n,o),ls=f,Tt=p}break;case 30:break;default:Bs(n,o)}}function Pv(n){var r=n.alternate;r!==null&&(n.alternate=null,Pv(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&Is(r)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var ft=null,vn=!1;function us(n,r,o){for(o=o.child;o!==null;)Vv(n,r,o),o=o.sibling}function Vv(n,r,o){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(gt,o)}catch{}switch(o.tag){case 26:Tt||bi(o,r),us(n,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Tt||bi(o,r);var u=ft,f=vn;Ys(o.type)&&(ft=o.stateNode,vn=!1),us(n,r,o),nu(o.stateNode),ft=u,vn=f;break;case 5:Tt||bi(o,r);case 6:if(u=ft,f=vn,ft=null,us(n,r,o),ft=u,vn=f,ft!==null)if(vn)try{(ft.nodeType===9?ft.body:ft.nodeName==="HTML"?ft.ownerDocument.body:ft).removeChild(o.stateNode)}catch(p){it(o,r,p)}else try{ft.removeChild(o.stateNode)}catch(p){it(o,r,p)}break;case 18:ft!==null&&(vn?(n=ft,AE(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,o.stateNode),cu(n)):AE(ft,o.stateNode));break;case 4:u=ft,f=vn,ft=o.stateNode.containerInfo,vn=!0,us(n,r,o),ft=u,vn=f;break;case 0:case 11:case 14:case 15:Tt||zs(2,o,r),Tt||zs(4,o,r),us(n,r,o);break;case 1:Tt||(bi(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"&&Iv(o,r,u)),us(n,r,o);break;case 21:us(n,r,o);break;case 22:Tt=(u=Tt)||o.memoizedState!==null,us(n,r,o),Tt=u;break;default:us(n,r,o)}}function xv(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{cu(n)}catch(o){it(r,r.return,o)}}function RR(n){switch(n.tag){case 13:case 19:var r=n.stateNode;return r===null&&(r=n.stateNode=new Mv),r;case 22:return n=n.stateNode,r=n._retryCache,r===null&&(r=n._retryCache=new Mv),r;default:throw Error(s(435,n.tag))}}function Sp(n,r){var o=RR(n);r.forEach(function(u){var f=VR.bind(null,n,u);o.has(u)||(o.add(u),u.then(f,f))})}function Cn(n,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],p=n,v=r,S=v;e:for(;S!==null;){switch(S.tag){case 27:if(Ys(S.type)){ft=S.stateNode,vn=!1;break e}break;case 5:ft=S.stateNode,vn=!1;break e;case 3:case 4:ft=S.stateNode.containerInfo,vn=!0;break e}S=S.return}if(ft===null)throw Error(s(160));Vv(p,v,f),ft=null,vn=!1,p=f.alternate,p!==null&&(p.return=null),f.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)Lv(r,n),r=r.sibling}var ni=null;function Lv(n,r){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Cn(r,n),In(n),u&4&&(zs(3,n,n.return),Kl(3,n),zs(5,n,n.return));break;case 1:Cn(r,n),In(n),u&512&&(Tt||o===null||bi(o,o.return)),u&64&&ls&&(n=n.updateQueue,n!==null&&(u=n.callbacks,u!==null&&(o=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=ni;if(Cn(r,n),In(n),u&512&&(Tt||o===null||bi(o,o.return)),u&4){var p=o!==null?o.memoizedState:null;if(u=n.memoizedState,o===null)if(u===null)if(n.stateNode===null){e:{u=n.type,o=n.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":p=f.getElementsByTagName("title")[0],(!p||p[Pr]||p[Dt]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=f.createElement(u),f.head.insertBefore(p,f.querySelector("head > title"))),Zt(p,u,o),p[Dt]=n,vt(p),u=p;break e;case"link":var v=OE("link","href",f).get(u+(o.href||""));if(v){for(var S=0;S<v.length;S++)if(p=v[S],p.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&p.getAttribute("rel")===(o.rel==null?null:o.rel)&&p.getAttribute("title")===(o.title==null?null:o.title)&&p.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){v.splice(S,1);break t}}p=f.createElement(u),Zt(p,u,o),f.head.appendChild(p);break;case"meta":if(v=OE("meta","content",f).get(u+(o.content||""))){for(S=0;S<v.length;S++)if(p=v[S],p.getAttribute("content")===(o.content==null?null:""+o.content)&&p.getAttribute("name")===(o.name==null?null:o.name)&&p.getAttribute("property")===(o.property==null?null:o.property)&&p.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&p.getAttribute("charset")===(o.charSet==null?null:o.charSet)){v.splice(S,1);break t}}p=f.createElement(u),Zt(p,u,o),f.head.appendChild(p);break;default:throw Error(s(468,u))}p[Dt]=n,vt(p),u=p}n.stateNode=u}else ME(f,n.type,n.stateNode);else n.stateNode=DE(f,u,n.memoizedProps);else p!==u?(p===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):p.count--,u===null?ME(f,n.type,n.stateNode):DE(f,u,n.memoizedProps)):u===null&&n.stateNode!==null&&yp(n,n.memoizedProps,o.memoizedProps)}break;case 27:Cn(r,n),In(n),u&512&&(Tt||o===null||bi(o,o.return)),o!==null&&u&4&&yp(n,n.memoizedProps,o.memoizedProps);break;case 5:if(Cn(r,n),In(n),u&512&&(Tt||o===null||bi(o,o.return)),n.flags&32){f=n.stateNode;try{Un(f,"")}catch(q){it(n,n.return,q)}}u&4&&n.stateNode!=null&&(f=n.memoizedProps,yp(n,f,o!==null?o.memoizedProps:f)),u&1024&&(Tp=!0);break;case 6:if(Cn(r,n),In(n),u&4){if(n.stateNode===null)throw Error(s(162));u=n.memoizedProps,o=n.stateNode;try{o.nodeValue=u}catch(q){it(n,n.return,q)}}break;case 3:if(Ah=null,f=ni,ni=Th(r.containerInfo),Cn(r,n),ni=f,In(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{cu(r.containerInfo)}catch(q){it(n,n.return,q)}Tp&&(Tp=!1,Uv(n));break;case 4:u=ni,ni=Th(n.stateNode.containerInfo),Cn(r,n),In(n),ni=u;break;case 12:Cn(r,n),In(n);break;case 13:Cn(r,n),In(n),n.child.flags&8192&&n.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Ip=xn()),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Sp(n,u)));break;case 22:f=n.memoizedState!==null;var R=o!==null&&o.memoizedState!==null,z=ls,K=Tt;if(ls=z||f,Tt=K||R,Cn(r,n),Tt=K,ls=z,In(n),u&8192)e:for(r=n.stateNode,r._visibility=f?r._visibility&-2:r._visibility|1,f&&(o===null||R||ls||Tt||aa(n)),o=null,r=n;;){if(r.tag===5||r.tag===26){if(o===null){R=o=r;try{if(p=R.stateNode,f)v=p.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{S=R.stateNode;var Q=R.memoizedProps.style,B=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;S.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(q){it(R,R.return,q)}}}else if(r.tag===6){if(o===null){R=r;try{R.stateNode.nodeValue=f?"":R.memoizedProps}catch(q){it(R,R.return,q)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===n)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break e;for(;r.sibling===null;){if(r.return===null||r.return===n)break e;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}u&4&&(u=n.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,Sp(n,o))));break;case 19:Cn(r,n),In(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Sp(n,u)));break;case 30:break;case 21:break;default:Cn(r,n),In(n)}}function In(n){var r=n.flags;if(r&2){try{for(var o,u=n.return;u!==null;){if(Dv(u)){o=u;break}u=u.return}if(o==null)throw Error(s(160));switch(o.tag){case 27:var f=o.stateNode,p=vp(n);lh(n,p,f);break;case 5:var v=o.stateNode;o.flags&32&&(Un(v,""),o.flags&=-33);var S=vp(n);lh(n,S,v);break;case 3:case 4:var R=o.stateNode.containerInfo,z=vp(n);Ep(n,z,R);break;default:throw Error(s(161))}}catch(K){it(n,n.return,K)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Uv(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var r=n;Uv(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),n=n.sibling}}function Bs(n,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)kv(n,r.alternate,r),r=r.sibling}function aa(n){for(n=n.child;n!==null;){var r=n;switch(r.tag){case 0:case 11:case 14:case 15:zs(4,r,r.return),aa(r);break;case 1:bi(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&Iv(r,r.return,o),aa(r);break;case 27:nu(r.stateNode);case 26:case 5:bi(r,r.return),aa(r);break;case 22:r.memoizedState===null&&aa(r);break;case 30:aa(r);break;default:aa(r)}n=n.sibling}}function Fs(n,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var u=r.alternate,f=n,p=r,v=p.flags;switch(p.tag){case 0:case 11:case 15:Fs(f,p,o),Kl(4,p);break;case 1:if(Fs(f,p,o),u=p,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(z){it(u,u.return,z)}if(u=p,f=u.updateQueue,f!==null){var S=u.stateNode;try{var R=f.shared.hiddenCallbacks;if(R!==null)for(f.shared.hiddenCallbacks=null,f=0;f<R.length;f++)dy(R[f],S)}catch(z){it(u,u.return,z)}}o&&v&64&&Cv(p),Yl(p,p.return);break;case 27:Ov(p);case 26:case 5:Fs(f,p,o),o&&u===null&&v&4&&Nv(p),Yl(p,p.return);break;case 12:Fs(f,p,o);break;case 13:Fs(f,p,o),o&&v&4&&xv(f,p);break;case 22:p.memoizedState===null&&Fs(f,p,o),Yl(p,p.return);break;case 30:break;default:Fs(f,p,o)}r=r.sibling}}function Ap(n,r){var o=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),n=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(n=r.memoizedState.cachePool.pool),n!==o&&(n!=null&&n.refCount++,o!=null&&Ml(o))}function wp(n,r){n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Ml(n))}function Ri(n,r,o,u){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)zv(n,r,o,u),r=r.sibling}function zv(n,r,o,u){var f=r.flags;switch(r.tag){case 0:case 11:case 15:Ri(n,r,o,u),f&2048&&Kl(9,r);break;case 1:Ri(n,r,o,u);break;case 3:Ri(n,r,o,u),f&2048&&(n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Ml(n)));break;case 12:if(f&2048){Ri(n,r,o,u),n=r.stateNode;try{var p=r.memoizedProps,v=p.id,S=p.onPostCommit;typeof S=="function"&&S(v,r.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(R){it(r,r.return,R)}}else Ri(n,r,o,u);break;case 13:Ri(n,r,o,u);break;case 23:break;case 22:p=r.stateNode,v=r.alternate,r.memoizedState!==null?p._visibility&2?Ri(n,r,o,u):Ql(n,r):p._visibility&2?Ri(n,r,o,u):(p._visibility|=2,lo(n,r,o,u,(r.subtreeFlags&10256)!==0)),f&2048&&Ap(v,r);break;case 24:Ri(n,r,o,u),f&2048&&wp(r.alternate,r);break;default:Ri(n,r,o,u)}}function lo(n,r,o,u,f){for(f=f&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var p=n,v=r,S=o,R=u,z=v.flags;switch(v.tag){case 0:case 11:case 15:lo(p,v,S,R,f),Kl(8,v);break;case 23:break;case 22:var K=v.stateNode;v.memoizedState!==null?K._visibility&2?lo(p,v,S,R,f):Ql(p,v):(K._visibility|=2,lo(p,v,S,R,f)),f&&z&2048&&Ap(v.alternate,v);break;case 24:lo(p,v,S,R,f),f&&z&2048&&wp(v.alternate,v);break;default:lo(p,v,S,R,f)}r=r.sibling}}function Ql(n,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=n,u=r,f=u.flags;switch(u.tag){case 22:Ql(o,u),f&2048&&Ap(u.alternate,u);break;case 24:Ql(o,u),f&2048&&wp(u.alternate,u);break;default:Ql(o,u)}r=r.sibling}}var Wl=8192;function uo(n){if(n.subtreeFlags&Wl)for(n=n.child;n!==null;)Bv(n),n=n.sibling}function Bv(n){switch(n.tag){case 26:uo(n),n.flags&Wl&&n.memoizedState!==null&&h1(ni,n.memoizedState,n.memoizedProps);break;case 5:uo(n);break;case 3:case 4:var r=ni;ni=Th(n.stateNode.containerInfo),uo(n),ni=r;break;case 22:n.memoizedState===null&&(r=n.alternate,r!==null&&r.memoizedState!==null?(r=Wl,Wl=16777216,uo(n),Wl=r):uo(n));break;default:uo(n)}}function Fv(n){var r=n.alternate;if(r!==null&&(n=r.child,n!==null)){r.child=null;do r=n.sibling,n.sibling=null,n=r;while(n!==null)}}function Xl(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];qt=u,jv(u,n)}Fv(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)qv(n),n=n.sibling}function qv(n){switch(n.tag){case 0:case 11:case 15:Xl(n),n.flags&2048&&zs(9,n,n.return);break;case 3:Xl(n);break;case 12:Xl(n);break;case 22:var r=n.stateNode;n.memoizedState!==null&&r._visibility&2&&(n.return===null||n.return.tag!==13)?(r._visibility&=-3,uh(n)):Xl(n);break;default:Xl(n)}}function uh(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];qt=u,jv(u,n)}Fv(n)}for(n=n.child;n!==null;){switch(r=n,r.tag){case 0:case 11:case 15:zs(8,r,r.return),uh(r);break;case 22:o=r.stateNode,o._visibility&2&&(o._visibility&=-3,uh(r));break;default:uh(r)}n=n.sibling}}function jv(n,r){for(;qt!==null;){var o=qt;switch(o.tag){case 0:case 11:case 15:zs(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Ml(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,qt=u;else e:for(o=n;qt!==null;){u=qt;var f=u.sibling,p=u.return;if(Pv(u),u===o){qt=null;break e}if(f!==null){f.return=p,qt=f;break e}qt=p}}}var CR={getCacheForType:function(n){var r=rn(kt),o=r.data.get(n);return o===void 0&&(o=n(),r.data.set(n,o)),o}},IR=typeof WeakMap=="function"?WeakMap:Map,We=0,rt=null,Oe=null,Ue=0,Xe=0,Nn=null,qs=!1,co=!1,bp=!1,cs=0,yt=0,js=0,oa=0,Rp=0,Yn=0,ho=0,$l=null,En=null,Cp=!1,Ip=0,ch=1/0,hh=null,Hs=null,$t=0,Gs=null,fo=null,po=0,Np=0,Dp=null,Hv=null,Zl=0,Op=null;function Dn(){if((We&2)!==0&&Ue!==0)return Ue&-Ue;if(G.T!==null){var n=eo;return n!==0?n:Up()}return Rs()}function Gv(){Yn===0&&(Yn=(Ue&536870912)===0||He?ol():536870912);var n=Kn.current;return n!==null&&(n.flags|=32),Yn}function On(n,r,o){(n===rt&&(Xe===2||Xe===9)||n.cancelPendingCommit!==null)&&(mo(n,0),Ks(n,Ue,Yn,!1)),qi(n,o),((We&2)===0||n!==rt)&&(n===rt&&((We&2)===0&&(oa|=o),yt===4&&Ks(n,Ue,Yn,!1)),Ci(n))}function Kv(n,r,o){if((We&6)!==0)throw Error(s(327));var u=!o&&(r&124)===0&&(r&n.expiredLanes)===0||kr(n,r),f=u?OR(n,r):Pp(n,r,!0),p=u;do{if(f===0){co&&!u&&Ks(n,r,0,!1);break}else{if(o=n.current.alternate,p&&!NR(o)){f=Pp(n,r,!1),p=!1;continue}if(f===2){if(p=r,n.errorRecoveryDisabledLanes&p)var v=0;else v=n.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){r=v;e:{var S=n;f=$l;var R=S.current.memoizedState.isDehydrated;if(R&&(mo(S,v).flags|=256),v=Pp(S,v,!1),v!==2){if(bp&&!R){S.errorRecoveryDisabledLanes|=p,oa|=p,f=4;break e}p=En,En=f,p!==null&&(En===null?En=p:En.push.apply(En,p))}f=v}if(p=!1,f!==2)continue}}if(f===1){mo(n,0),Ks(n,r,0,!0);break}e:{switch(u=n,p=f,p){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:Ks(u,r,Yn,!qs);break e;case 2:En=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(f=Ip+300-xn(),10<f)){if(Ks(u,r,Yn,!qs),Oa(u,0,!0)!==0)break e;u.timeoutHandle=TE(Yv.bind(null,u,o,En,hh,Cp,r,Yn,oa,ho,qs,p,2,-0,0),f);break e}Yv(u,o,En,hh,Cp,r,Yn,oa,ho,qs,p,0,-0,0)}}break}while(!0);Ci(n)}function Yv(n,r,o,u,f,p,v,S,R,z,K,Q,B,q){if(n.timeoutHandle=-1,Q=r.subtreeFlags,(Q&8192||(Q&16785408)===16785408)&&(ru={stylesheets:null,count:0,unsuspend:c1},Bv(r),Q=f1(),Q!==null)){n.cancelPendingCommit=Q(eE.bind(null,n,r,p,o,u,f,v,S,R,K,1,B,q)),Ks(n,p,v,!z);return}eE(n,r,p,o,u,f,v,S,R)}function NR(n){for(var r=n;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],p=f.getSnapshot;f=f.value;try{if(!bn(p(),f))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Ks(n,r,o,u){r&=~Rp,r&=~oa,n.suspendedLanes|=r,n.pingedLanes&=~r,u&&(n.warmLanes|=r),u=n.expirationTimes;for(var f=r;0<f;){var p=31-sn(f),v=1<<p;u[p]=-1,f&=~v}o!==0&&fi(n,o,r)}function fh(){return(We&6)===0?(Jl(0),!1):!0}function Mp(){if(Oe!==null){if(Xe===0)var n=Oe.return;else n=Oe,ns=ta=null,Wd(n),ao=null,jl=0,n=Oe;for(;n!==null;)Rv(n.alternate,n),n=n.return;Oe=null}}function mo(n,r){var o=n.timeoutHandle;o!==-1&&(n.timeoutHandle=-1,YR(o)),o=n.cancelPendingCommit,o!==null&&(n.cancelPendingCommit=null,o()),Mp(),rt=n,Oe=o=Ji(n.current,null),Ue=r,Xe=0,Nn=null,qs=!1,co=kr(n,r),bp=!1,ho=Yn=Rp=oa=js=yt=0,En=$l=null,Cp=!1,(r&8)!==0&&(r|=r&32);var u=n.entangledLanes;if(u!==0)for(n=n.entanglements,u&=r;0<u;){var f=31-sn(u),p=1<<f;r|=n[f],u&=~p}return cs=r,Pc(),o}function Qv(n,r){Ce=null,G.H=Jc,r===Pl||r===jc?(r=hy(),Xe=3):r===ly?(r=hy(),Xe=4):Xe=r===fv?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,Nn=r,Oe===null&&(yt=1,sh(n,qn(r,n.current)))}function Wv(){var n=G.H;return G.H=Jc,n===null?Jc:n}function Xv(){var n=G.A;return G.A=CR,n}function kp(){yt=4,qs||(Ue&4194048)!==Ue&&Kn.current!==null||(co=!0),(js&134217727)===0&&(oa&134217727)===0||rt===null||Ks(rt,Ue,Yn,!1)}function Pp(n,r,o){var u=We;We|=2;var f=Wv(),p=Xv();(rt!==n||Ue!==r)&&(hh=null,mo(n,r)),r=!1;var v=yt;e:do try{if(Xe!==0&&Oe!==null){var S=Oe,R=Nn;switch(Xe){case 8:Mp(),v=6;break e;case 3:case 2:case 9:case 6:Kn.current===null&&(r=!0);var z=Xe;if(Xe=0,Nn=null,go(n,S,R,z),o&&co){v=0;break e}break;default:z=Xe,Xe=0,Nn=null,go(n,S,R,z)}}DR(),v=yt;break}catch(K){Qv(n,K)}while(!0);return r&&n.shellSuspendCounter++,ns=ta=null,We=u,G.H=f,G.A=p,Oe===null&&(rt=null,Ue=0,Pc()),v}function DR(){for(;Oe!==null;)$v(Oe)}function OR(n,r){var o=We;We|=2;var u=Wv(),f=Xv();rt!==n||Ue!==r?(hh=null,ch=xn()+500,mo(n,r)):co=kr(n,r);e:do try{if(Xe!==0&&Oe!==null){r=Oe;var p=Nn;t:switch(Xe){case 1:Xe=0,Nn=null,go(n,r,p,1);break;case 2:case 9:if(uy(p)){Xe=0,Nn=null,Zv(r);break}r=function(){Xe!==2&&Xe!==9||rt!==n||(Xe=7),Ci(n)},p.then(r,r);break e;case 3:Xe=7;break e;case 4:Xe=5;break e;case 7:uy(p)?(Xe=0,Nn=null,Zv(r)):(Xe=0,Nn=null,go(n,r,p,7));break;case 5:var v=null;switch(Oe.tag){case 26:v=Oe.memoizedState;case 5:case 27:var S=Oe;if(!v||kE(v)){Xe=0,Nn=null;var R=S.sibling;if(R!==null)Oe=R;else{var z=S.return;z!==null?(Oe=z,dh(z)):Oe=null}break t}}Xe=0,Nn=null,go(n,r,p,5);break;case 6:Xe=0,Nn=null,go(n,r,p,6);break;case 8:Mp(),yt=6;break e;default:throw Error(s(462))}}MR();break}catch(K){Qv(n,K)}while(!0);return ns=ta=null,G.H=u,G.A=f,We=o,Oe!==null?0:(rt=null,Ue=0,Pc(),yt)}function MR(){for(;Oe!==null&&!il();)$v(Oe)}function $v(n){var r=wv(n.alternate,n,cs);n.memoizedProps=n.pendingProps,r===null?dh(n):Oe=r}function Zv(n){var r=n,o=r.alternate;switch(r.tag){case 15:case 0:r=yv(o,r,r.pendingProps,r.type,void 0,Ue);break;case 11:r=yv(o,r,r.pendingProps,r.type.render,r.ref,Ue);break;case 5:Wd(r);default:Rv(o,r),r=Oe=J_(r,cs),r=wv(o,r,cs)}n.memoizedProps=n.pendingProps,r===null?dh(n):Oe=r}function go(n,r,o,u){ns=ta=null,Wd(r),ao=null,jl=0;var f=r.return;try{if(TR(n,f,r,o,Ue)){yt=1,sh(n,qn(o,n.current)),Oe=null;return}}catch(p){if(f!==null)throw Oe=f,p;yt=1,sh(n,qn(o,n.current)),Oe=null;return}r.flags&32768?(He||u===1?n=!0:co||(Ue&536870912)!==0?n=!1:(qs=n=!0,(u===2||u===9||u===3||u===6)&&(u=Kn.current,u!==null&&u.tag===13&&(u.flags|=16384))),Jv(r,n)):dh(r)}function dh(n){var r=n;do{if((r.flags&32768)!==0){Jv(r,qs);return}n=r.return;var o=AR(r.alternate,r,cs);if(o!==null){Oe=o;return}if(r=r.sibling,r!==null){Oe=r;return}Oe=r=n}while(r!==null);yt===0&&(yt=5)}function Jv(n,r){do{var o=wR(n.alternate,n);if(o!==null){o.flags&=32767,Oe=o;return}if(o=n.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(n=n.sibling,n!==null)){Oe=n;return}Oe=n=o}while(n!==null);yt=6,Oe=null}function eE(n,r,o,u,f,p,v,S,R){n.cancelPendingCommit=null;do ph();while($t!==0);if((We&6)!==0)throw Error(s(327));if(r!==null){if(r===n.current)throw Error(s(177));if(p=r.lanes|r.childLanes,p|=wd,ul(n,o,p,v,S,R),n===rt&&(Oe=rt=null,Ue=0),fo=r,Gs=n,po=o,Np=p,Dp=f,Hv=u,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,xR(Nr,function(){return rE(),null})):(n.callbackNode=null,n.callbackPriority=0),u=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||u){u=G.T,G.T=null,f=ne.p,ne.p=2,v=We,We|=4;try{bR(n,r,o)}finally{We=v,ne.p=f,G.T=u}}$t=1,tE(),nE(),iE()}}function tE(){if($t===1){$t=0;var n=Gs,r=fo,o=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||o){o=G.T,G.T=null;var u=ne.p;ne.p=2;var f=We;We|=4;try{Lv(r,n);var p=Kp,v=j_(n.containerInfo),S=p.focusedElem,R=p.selectionRange;if(v!==S&&S&&S.ownerDocument&&q_(S.ownerDocument.documentElement,S)){if(R!==null&&vd(S)){var z=R.start,K=R.end;if(K===void 0&&(K=z),"selectionStart"in S)S.selectionStart=z,S.selectionEnd=Math.min(K,S.value.length);else{var Q=S.ownerDocument||document,B=Q&&Q.defaultView||window;if(B.getSelection){var q=B.getSelection(),Se=S.textContent.length,_e=Math.min(R.start,Se),tt=R.end===void 0?_e:Math.min(R.end,Se);!q.extend&&_e>tt&&(v=tt,tt=_e,_e=v);var P=F_(S,_e),O=F_(S,tt);if(P&&O&&(q.rangeCount!==1||q.anchorNode!==P.node||q.anchorOffset!==P.offset||q.focusNode!==O.node||q.focusOffset!==O.offset)){var U=Q.createRange();U.setStart(P.node,P.offset),q.removeAllRanges(),_e>tt?(q.addRange(U),q.extend(O.node,O.offset)):(U.setEnd(O.node,O.offset),q.addRange(U))}}}}for(Q=[],q=S;q=q.parentNode;)q.nodeType===1&&Q.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<Q.length;S++){var Y=Q[S];Y.element.scrollLeft=Y.left,Y.element.scrollTop=Y.top}}Rh=!!Gp,Kp=Gp=null}finally{We=f,ne.p=u,G.T=o}}n.current=r,$t=2}}function nE(){if($t===2){$t=0;var n=Gs,r=fo,o=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||o){o=G.T,G.T=null;var u=ne.p;ne.p=2;var f=We;We|=4;try{kv(n,r.alternate,r)}finally{We=f,ne.p=u,G.T=o}}$t=3}}function iE(){if($t===4||$t===3){$t=0,uc();var n=Gs,r=fo,o=po,u=Hv;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?$t=5:($t=0,fo=Gs=null,sE(n,n.pendingLanes));var f=n.pendingLanes;if(f===0&&(Hs=null),Ma(o),r=r.stateNode,Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(gt,r,void 0,(r.current.flags&128)===128)}catch{}if(u!==null){r=G.T,f=ne.p,ne.p=2,G.T=null;try{for(var p=n.onRecoverableError,v=0;v<u.length;v++){var S=u[v];p(S.value,{componentStack:S.stack})}}finally{G.T=r,ne.p=f}}(po&3)!==0&&ph(),Ci(n),f=n.pendingLanes,(o&4194090)!==0&&(f&42)!==0?n===Op?Zl++:(Zl=0,Op=n):Zl=0,Jl(0)}}function sE(n,r){(n.pooledCacheLanes&=r)===0&&(r=n.pooledCache,r!=null&&(n.pooledCache=null,Ml(r)))}function ph(n){return tE(),nE(),iE(),rE()}function rE(){if($t!==5)return!1;var n=Gs,r=Np;Np=0;var o=Ma(po),u=G.T,f=ne.p;try{ne.p=32>o?32:o,G.T=null,o=Dp,Dp=null;var p=Gs,v=po;if($t=0,fo=Gs=null,po=0,(We&6)!==0)throw Error(s(331));var S=We;if(We|=4,qv(p.current),zv(p,p.current,v,o),We=S,Jl(0,!1),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(gt,p)}catch{}return!0}finally{ne.p=f,G.T=u,sE(n,r)}}function aE(n,r,o){r=qn(o,r),r=up(n.stateNode,r,2),n=Vs(n,r,2),n!==null&&(qi(n,2),Ci(n))}function it(n,r,o){if(n.tag===3)aE(n,n,o);else for(;r!==null;){if(r.tag===3){aE(r,n,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Hs===null||!Hs.has(u))){n=qn(o,n),o=cv(2),u=Vs(r,o,2),u!==null&&(hv(o,u,r,n),qi(u,2),Ci(u));break}}r=r.return}}function Vp(n,r,o){var u=n.pingCache;if(u===null){u=n.pingCache=new IR;var f=new Set;u.set(r,f)}else f=u.get(r),f===void 0&&(f=new Set,u.set(r,f));f.has(o)||(bp=!0,f.add(o),n=kR.bind(null,n,r,o),r.then(n,n))}function kR(n,r,o){var u=n.pingCache;u!==null&&u.delete(r),n.pingedLanes|=n.suspendedLanes&o,n.warmLanes&=~o,rt===n&&(Ue&o)===o&&(yt===4||yt===3&&(Ue&62914560)===Ue&&300>xn()-Ip?(We&2)===0&&mo(n,0):Rp|=o,ho===Ue&&(ho=0)),Ci(n)}function oE(n,r){r===0&&(r=ll()),n=Xa(n,r),n!==null&&(qi(n,r),Ci(n))}function PR(n){var r=n.memoizedState,o=0;r!==null&&(o=r.retryLane),oE(n,o)}function VR(n,r){var o=0;switch(n.tag){case 13:var u=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(s(314))}u!==null&&u.delete(r),oE(n,o)}function xR(n,r){return Cr(n,r)}var mh=null,_o=null,xp=!1,gh=!1,Lp=!1,la=0;function Ci(n){n!==_o&&n.next===null&&(_o===null?mh=_o=n:_o=_o.next=n),gh=!0,xp||(xp=!0,UR())}function Jl(n,r){if(!Lp&&gh){Lp=!0;do for(var o=!1,u=mh;u!==null;){if(n!==0){var f=u.pendingLanes;if(f===0)var p=0;else{var v=u.suspendedLanes,S=u.pingedLanes;p=(1<<31-sn(42|n)+1)-1,p&=f&~(v&~S),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(o=!0,hE(u,p))}else p=Ue,p=Oa(u,u===rt?p:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(p&3)===0||kr(u,p)||(o=!0,hE(u,p));u=u.next}while(o);Lp=!1}}function LR(){lE()}function lE(){gh=xp=!1;var n=0;la!==0&&(KR()&&(n=la),la=0);for(var r=xn(),o=null,u=mh;u!==null;){var f=u.next,p=uE(u,r);p===0?(u.next=null,o===null?mh=f:o.next=f,f===null&&(_o=o)):(o=u,(n!==0||(p&3)!==0)&&(gh=!0)),u=f}Jl(n)}function uE(n,r){for(var o=n.suspendedLanes,u=n.pingedLanes,f=n.expirationTimes,p=n.pendingLanes&-62914561;0<p;){var v=31-sn(p),S=1<<v,R=f[v];R===-1?((S&o)===0||(S&u)!==0)&&(f[v]=al(S,r)):R<=r&&(n.expiredLanes|=S),p&=~S}if(r=rt,o=Ue,o=Oa(n,n===r?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u=n.callbackNode,o===0||n===r&&(Xe===2||Xe===9)||n.cancelPendingCommit!==null)return u!==null&&u!==null&&Ir(u),n.callbackNode=null,n.callbackPriority=0;if((o&3)===0||kr(n,o)){if(r=o&-o,r===n.callbackPriority)return r;switch(u!==null&&Ir(u),Ma(o)){case 2:case 8:o=Na;break;case 32:o=Nr;break;case 268435456:o=Da;break;default:o=Nr}return u=cE.bind(null,n),o=Cr(o,u),n.callbackPriority=r,n.callbackNode=o,r}return u!==null&&u!==null&&Ir(u),n.callbackPriority=2,n.callbackNode=null,2}function cE(n,r){if($t!==0&&$t!==5)return n.callbackNode=null,n.callbackPriority=0,null;var o=n.callbackNode;if(ph()&&n.callbackNode!==o)return null;var u=Ue;return u=Oa(n,n===rt?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u===0?null:(Kv(n,u,r),uE(n,xn()),n.callbackNode!=null&&n.callbackNode===o?cE.bind(null,n):null)}function hE(n,r){if(ph())return null;Kv(n,r,!0)}function UR(){QR(function(){(We&6)!==0?Cr(sl,LR):lE()})}function Up(){return la===0&&(la=ol()),la}function fE(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Ua(""+n)}function dE(n,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,n.id&&o.setAttribute("form",n.id),r.parentNode.insertBefore(o,r),n=new FormData(n),o.parentNode.removeChild(o),n}function zR(n,r,o,u,f){if(r==="submit"&&o&&o.stateNode===f){var p=fE((f[wt]||null).action),v=u.submitter;v&&(r=(r=v[wt]||null)?fE(r.formAction):v.getAttribute("formAction"),r!==null&&(p=r,v=null));var S=new za("action","action",null,u,f);n.push({event:S,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(la!==0){var R=v?dE(f,v):new FormData(f);sp(o,{pending:!0,data:R,method:f.method,action:p},null,R)}}else typeof p=="function"&&(S.preventDefault(),R=v?dE(f,v):new FormData(f),sp(o,{pending:!0,data:R,method:f.method,action:p},p,R))},currentTarget:f}]})}}for(var zp=0;zp<Ad.length;zp++){var Bp=Ad[zp],BR=Bp.toLowerCase(),FR=Bp[0].toUpperCase()+Bp.slice(1);ti(BR,"on"+FR)}ti(K_,"onAnimationEnd"),ti(Y_,"onAnimationIteration"),ti(Q_,"onAnimationStart"),ti("dblclick","onDoubleClick"),ti("focusin","onFocus"),ti("focusout","onBlur"),ti(sR,"onTransitionRun"),ti(rR,"onTransitionStart"),ti(aR,"onTransitionCancel"),ti(W_,"onTransitionEnd"),Hi("onMouseEnter",["mouseout","mouseover"]),Hi("onMouseLeave",["mouseout","mouseover"]),Hi("onPointerEnter",["pointerout","pointerover"]),Hi("onPointerLeave",["pointerout","pointerover"]),Jn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Jn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Jn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Jn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Jn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Jn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var eu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qR=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(eu));function pE(n,r){r=(r&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],f=u.event;u=u.listeners;e:{var p=void 0;if(r)for(var v=u.length-1;0<=v;v--){var S=u[v],R=S.instance,z=S.currentTarget;if(S=S.listener,R!==p&&f.isPropagationStopped())break e;p=S,f.currentTarget=z;try{p(f)}catch(K){ih(K)}f.currentTarget=null,p=R}else for(v=0;v<u.length;v++){if(S=u[v],R=S.instance,z=S.currentTarget,S=S.listener,R!==p&&f.isPropagationStopped())break e;p=S,f.currentTarget=z;try{p(f)}catch(K){ih(K)}f.currentTarget=null,p=R}}}}function Me(n,r){var o=r[hl];o===void 0&&(o=r[hl]=new Set);var u=n+"__bubble";o.has(u)||(mE(r,n,2,!1),o.add(u))}function Fp(n,r,o){var u=0;r&&(u|=4),mE(o,n,u,r)}var _h="_reactListening"+Math.random().toString(36).slice(2);function qp(n){if(!n[_h]){n[_h]=!0,fl.forEach(function(o){o!=="selectionchange"&&(qR.has(o)||Fp(o,!1,n),Fp(o,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[_h]||(r[_h]=!0,Fp("selectionchange",!1,r))}}function mE(n,r,o,u){switch(zE(r)){case 2:var f=m1;break;case 8:f=g1;break;default:f=nm}o=f.bind(null,r,o,n),f=void 0,!Bn||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),u?f!==void 0?n.addEventListener(r,o,{capture:!0,passive:f}):n.addEventListener(r,o,!0):f!==void 0?n.addEventListener(r,o,{passive:f}):n.addEventListener(r,o,!1)}function jp(n,r,o,u,f){var p=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var v=u.tag;if(v===3||v===4){var S=u.stateNode.containerInfo;if(S===f)break;if(v===4)for(v=u.return;v!==null;){var R=v.tag;if((R===3||R===4)&&v.stateNode.containerInfo===f)return;v=v.return}for(;S!==null;){if(v=ji(S),v===null)return;if(R=v.tag,R===5||R===6||R===26||R===27){u=p=v;continue e}S=S.parentNode}}u=u.return}vc(function(){var z=p,K=zn(o),Q=[];e:{var B=X_.get(n);if(B!==void 0){var q=za,Se=n;switch(n){case"keypress":if(yi(o)===0)break e;case"keydown":case"keyup":q=Ga;break;case"focusin":Se="focus",q=qa;break;case"focusout":Se="blur",q=qa;break;case"beforeblur":case"afterblur":q=qa;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=Fn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=md;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=Cc;break;case K_:case Y_:case Q_:q=ja;break;case W_:q=Nc;break;case"scroll":case"scrollend":q=Ec;break;case"wheel":q=Ka;break;case"copy":case"cut":case"paste":q=Ha;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=wl;break;case"toggle":case"beforetoggle":q=Oc}var _e=(r&4)!==0,tt=!_e&&(n==="scroll"||n==="scrollend"),P=_e?B!==null?B+"Capture":null:B;_e=[];for(var O=z,U;O!==null;){var Y=O;if(U=Y.stateNode,Y=Y.tag,Y!==5&&Y!==26&&Y!==27||U===null||P===null||(Y=Fr(O,P),Y!=null&&_e.push(tu(O,Y,U))),tt)break;O=O.return}0<_e.length&&(B=new q(B,Se,null,o,K),Q.push({event:B,listeners:_e}))}}if((r&7)===0){e:{if(B=n==="mouseover"||n==="pointerover",q=n==="mouseout"||n==="pointerout",B&&o!==Yi&&(Se=o.relatedTarget||o.fromElement)&&(ji(Se)||Se[Ln]))break e;if((q||B)&&(B=K.window===K?K:(B=K.ownerDocument)?B.defaultView||B.parentWindow:window,q?(Se=o.relatedTarget||o.toElement,q=z,Se=Se?ji(Se):null,Se!==null&&(tt=l(Se),_e=Se.tag,Se!==tt||_e!==5&&_e!==27&&_e!==6)&&(Se=null)):(q=null,Se=z),q!==Se)){if(_e=Fn,Y="onMouseLeave",P="onMouseEnter",O="mouse",(n==="pointerout"||n==="pointerover")&&(_e=wl,Y="onPointerLeave",P="onPointerEnter",O="pointer"),tt=q==null?B:pi(q),U=Se==null?B:pi(Se),B=new _e(Y,O+"leave",q,o,K),B.target=tt,B.relatedTarget=U,Y=null,ji(K)===z&&(_e=new _e(P,O+"enter",Se,o,K),_e.target=U,_e.relatedTarget=tt,Y=_e),tt=Y,q&&Se)t:{for(_e=q,P=Se,O=0,U=_e;U;U=yo(U))O++;for(U=0,Y=P;Y;Y=yo(Y))U++;for(;0<O-U;)_e=yo(_e),O--;for(;0<U-O;)P=yo(P),U--;for(;O--;){if(_e===P||P!==null&&_e===P.alternate)break t;_e=yo(_e),P=yo(P)}_e=null}else _e=null;q!==null&&gE(Q,B,q,_e,!1),Se!==null&&tt!==null&&gE(Q,tt,Se,_e,!0)}}e:{if(B=z?pi(z):window,q=B.nodeName&&B.nodeName.toLowerCase(),q==="select"||q==="input"&&B.type==="file")var ce=V_;else if(Mt(B))if(x_)ce=tR;else{ce=Jb;var De=Zb}else q=B.nodeName,!q||q.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?z&&_l(z.elementType)&&(ce=V_):ce=eR;if(ce&&(ce=ce(n,z))){Zi(Q,ce,o,K);break e}De&&De(n,B,z),n==="focusout"&&z&&B.type==="number"&&z.memoizedProps.value!=null&&Ds(B,"number",B.value)}switch(De=z?pi(z):window,n){case"focusin":(Mt(De)||De.contentEditable==="true")&&(Ya=De,Ed=z,Cl=null);break;case"focusout":Cl=Ed=Ya=null;break;case"mousedown":Td=!0;break;case"contextmenu":case"mouseup":case"dragend":Td=!1,H_(Q,o,K);break;case"selectionchange":if(iR)break;case"keydown":case"keyup":H_(Q,o,K)}var de;if(Ti)e:{switch(n){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else xe?j(n,o)&&(ve="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(ve="onCompositionStart");ve&&(y&&o.locale!=="ko"&&(xe||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&xe&&(de=vl()):(_i=K,Os="value"in _i?_i.value:_i.textContent,xe=!0)),De=yh(z,ve),0<De.length&&(ve=new Sl(ve,n,null,o,K),Q.push({event:ve,listeners:De}),de?ve.data=de:(de=ee(o),de!==null&&(ve.data=de)))),(de=_?Ot(n,o):Le(n,o))&&(ve=yh(z,"onBeforeInput"),0<ve.length&&(De=new Sl("onBeforeInput","beforeinput",null,o,K),Q.push({event:De,listeners:ve}),De.data=de)),zR(Q,n,z,o,K)}pE(Q,r)})}function tu(n,r,o){return{instance:n,listener:r,currentTarget:o}}function yh(n,r){for(var o=r+"Capture",u=[];n!==null;){var f=n,p=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||p===null||(f=Fr(n,o),f!=null&&u.unshift(tu(n,f,p)),f=Fr(n,r),f!=null&&u.push(tu(n,f,p))),n.tag===3)return u;n=n.return}return[]}function yo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function gE(n,r,o,u,f){for(var p=r._reactName,v=[];o!==null&&o!==u;){var S=o,R=S.alternate,z=S.stateNode;if(S=S.tag,R!==null&&R===u)break;S!==5&&S!==26&&S!==27||z===null||(R=z,f?(z=Fr(o,p),z!=null&&v.unshift(tu(o,z,R))):f||(z=Fr(o,p),z!=null&&v.push(tu(o,z,R)))),o=o.return}v.length!==0&&n.push({event:r,listeners:v})}var jR=/\r\n?/g,HR=/\u0000|\uFFFD/g;function _E(n){return(typeof n=="string"?n:""+n).replace(jR,`
`).replace(HR,"")}function yE(n,r){return r=_E(r),_E(n)===r}function vh(){}function et(n,r,o,u,f,p){switch(o){case"children":typeof u=="string"?r==="body"||r==="textarea"&&u===""||Un(n,u):(typeof u=="number"||typeof u=="bigint")&&r!=="body"&&Un(n,""+u);break;case"className":mi(n,"class",u);break;case"tabIndex":mi(n,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":mi(n,o,u);break;case"style":gl(n,u,p);break;case"data":if(r!=="object"){mi(n,"data",u);break}case"src":case"href":if(u===""&&(r!=="a"||o!=="href")){n.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=Ua(""+u),n.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){n.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(o==="formAction"?(r!=="input"&&et(n,r,"name",f.name,f,null),et(n,r,"formEncType",f.formEncType,f,null),et(n,r,"formMethod",f.formMethod,f,null),et(n,r,"formTarget",f.formTarget,f,null)):(et(n,r,"encType",f.encType,f,null),et(n,r,"method",f.method,f,null),et(n,r,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=Ua(""+u),n.setAttribute(o,u);break;case"onClick":u!=null&&(n.onclick=vh);break;case"onScroll":u!=null&&Me("scroll",n);break;case"onScrollEnd":u!=null&&Me("scrollend",n);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=o}}break;case"multiple":n.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":n.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){n.removeAttribute("xlink:href");break}o=Ua(""+u),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""+u):n.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""):n.removeAttribute(o);break;case"capture":case"download":u===!0?n.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,u):n.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?n.setAttribute(o,u):n.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?n.removeAttribute(o):n.setAttribute(o,u);break;case"popover":Me("beforetoggle",n),Me("toggle",n),Ns(n,"popover",u);break;case"xlinkActuate":Qt(n,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Qt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Qt(n,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Qt(n,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Qt(n,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Qt(n,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Qt(n,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Qt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Qt(n,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Ns(n,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=dd.get(o)||o,Ns(n,o,u))}}function Hp(n,r,o,u,f,p){switch(o){case"style":gl(n,u,p);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=o}}break;case"children":typeof u=="string"?Un(n,u):(typeof u=="number"||typeof u=="bigint")&&Un(n,""+u);break;case"onScroll":u!=null&&Me("scroll",n);break;case"onScrollEnd":u!=null&&Me("scrollend",n);break;case"onClick":u!=null&&(n.onclick=vh);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ka.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),r=o.slice(2,f?o.length-7:void 0),p=n[wt]||null,p=p!=null?p[o]:null,typeof p=="function"&&n.removeEventListener(r,p,f),typeof u=="function")){typeof p!="function"&&p!==null&&(o in n?n[o]=null:n.hasAttribute(o)&&n.removeAttribute(o)),n.addEventListener(r,u,f);break e}o in n?n[o]=u:u===!0?n.setAttribute(o,""):Ns(n,o,u)}}}function Zt(n,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",n),Me("load",n);var u=!1,f=!1,p;for(p in o)if(o.hasOwnProperty(p)){var v=o[p];if(v!=null)switch(p){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:et(n,r,p,v,o,null)}}f&&et(n,r,"srcSet",o.srcSet,o,null),u&&et(n,r,"src",o.src,o,null);return;case"input":Me("invalid",n);var S=p=v=f=null,R=null,z=null;for(u in o)if(o.hasOwnProperty(u)){var K=o[u];if(K!=null)switch(u){case"name":f=K;break;case"type":v=K;break;case"checked":R=K;break;case"defaultChecked":z=K;break;case"value":p=K;break;case"defaultValue":S=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(s(137,r));break;default:et(n,r,u,K,o,null)}}Ur(n,p,S,R,z,v,f,!1),La(n);return;case"select":Me("invalid",n),u=v=p=null;for(f in o)if(o.hasOwnProperty(f)&&(S=o[f],S!=null))switch(f){case"value":p=S;break;case"defaultValue":v=S;break;case"multiple":u=S;default:et(n,r,f,S,o,null)}r=p,o=v,n.multiple=!!u,r!=null?Ki(n,!!u,r,!1):o!=null&&Ki(n,!!u,o,!0);return;case"textarea":Me("invalid",n),p=f=u=null;for(v in o)if(o.hasOwnProperty(v)&&(S=o[v],S!=null))switch(v){case"value":u=S;break;case"defaultValue":f=S;break;case"children":p=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(s(91));break;default:et(n,r,v,S,o,null)}zr(n,u,f,p),La(n);return;case"option":for(R in o)if(o.hasOwnProperty(R)&&(u=o[R],u!=null))switch(R){case"selected":n.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:et(n,r,R,u,o,null)}return;case"dialog":Me("beforetoggle",n),Me("toggle",n),Me("cancel",n),Me("close",n);break;case"iframe":case"object":Me("load",n);break;case"video":case"audio":for(u=0;u<eu.length;u++)Me(eu[u],n);break;case"image":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"embed":case"source":case"link":Me("error",n),Me("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in o)if(o.hasOwnProperty(z)&&(u=o[z],u!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:et(n,r,z,u,o,null)}return;default:if(_l(r)){for(K in o)o.hasOwnProperty(K)&&(u=o[K],u!==void 0&&Hp(n,r,K,u,o,void 0));return}}for(S in o)o.hasOwnProperty(S)&&(u=o[S],u!=null&&et(n,r,S,u,o,null))}function GR(n,r,o,u){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,p=null,v=null,S=null,R=null,z=null,K=null;for(q in o){var Q=o[q];if(o.hasOwnProperty(q)&&Q!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":R=Q;default:u.hasOwnProperty(q)||et(n,r,q,null,u,Q)}}for(var B in u){var q=u[B];if(Q=o[B],u.hasOwnProperty(B)&&(q!=null||Q!=null))switch(B){case"type":p=q;break;case"name":f=q;break;case"checked":z=q;break;case"defaultChecked":K=q;break;case"value":v=q;break;case"defaultValue":S=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,r));break;default:q!==Q&&et(n,r,B,q,u,Q)}}wn(n,v,S,R,z,K,p,f);return;case"select":q=v=S=B=null;for(p in o)if(R=o[p],o.hasOwnProperty(p)&&R!=null)switch(p){case"value":break;case"multiple":q=R;default:u.hasOwnProperty(p)||et(n,r,p,null,u,R)}for(f in u)if(p=u[f],R=o[f],u.hasOwnProperty(f)&&(p!=null||R!=null))switch(f){case"value":B=p;break;case"defaultValue":S=p;break;case"multiple":v=p;default:p!==R&&et(n,r,f,p,u,R)}r=S,o=v,u=q,B!=null?Ki(n,!!o,B,!1):!!u!=!!o&&(r!=null?Ki(n,!!o,r,!0):Ki(n,!!o,o?[]:"",!1));return;case"textarea":q=B=null;for(S in o)if(f=o[S],o.hasOwnProperty(S)&&f!=null&&!u.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:et(n,r,S,null,u,f)}for(v in u)if(f=u[v],p=o[v],u.hasOwnProperty(v)&&(f!=null||p!=null))switch(v){case"value":B=f;break;case"defaultValue":q=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==p&&et(n,r,v,f,u,p)}Ze(n,B,q);return;case"option":for(var Se in o)if(B=o[Se],o.hasOwnProperty(Se)&&B!=null&&!u.hasOwnProperty(Se))switch(Se){case"selected":n.selected=!1;break;default:et(n,r,Se,null,u,B)}for(R in u)if(B=u[R],q=o[R],u.hasOwnProperty(R)&&B!==q&&(B!=null||q!=null))switch(R){case"selected":n.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:et(n,r,R,B,u,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _e in o)B=o[_e],o.hasOwnProperty(_e)&&B!=null&&!u.hasOwnProperty(_e)&&et(n,r,_e,null,u,B);for(z in u)if(B=u[z],q=o[z],u.hasOwnProperty(z)&&B!==q&&(B!=null||q!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,r));break;default:et(n,r,z,B,u,q)}return;default:if(_l(r)){for(var tt in o)B=o[tt],o.hasOwnProperty(tt)&&B!==void 0&&!u.hasOwnProperty(tt)&&Hp(n,r,tt,void 0,u,B);for(K in u)B=u[K],q=o[K],!u.hasOwnProperty(K)||B===q||B===void 0&&q===void 0||Hp(n,r,K,B,u,q);return}}for(var P in o)B=o[P],o.hasOwnProperty(P)&&B!=null&&!u.hasOwnProperty(P)&&et(n,r,P,null,u,B);for(Q in u)B=u[Q],q=o[Q],!u.hasOwnProperty(Q)||B===q||B==null&&q==null||et(n,r,Q,B,u,q)}var Gp=null,Kp=null;function Eh(n){return n.nodeType===9?n:n.ownerDocument}function vE(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function EE(n,r){if(n===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&r==="foreignObject"?0:n}function Yp(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Qp=null;function KR(){var n=window.event;return n&&n.type==="popstate"?n===Qp?!1:(Qp=n,!0):(Qp=null,!1)}var TE=typeof setTimeout=="function"?setTimeout:void 0,YR=typeof clearTimeout=="function"?clearTimeout:void 0,SE=typeof Promise=="function"?Promise:void 0,QR=typeof queueMicrotask=="function"?queueMicrotask:typeof SE<"u"?function(n){return SE.resolve(null).then(n).catch(WR)}:TE;function WR(n){setTimeout(function(){throw n})}function Ys(n){return n==="head"}function AE(n,r){var o=r,u=0,f=0;do{var p=o.nextSibling;if(n.removeChild(o),p&&p.nodeType===8)if(o=p.data,o==="/$"){if(0<u&&8>u){o=u;var v=n.ownerDocument;if(o&1&&nu(v.documentElement),o&2&&nu(v.body),o&4)for(o=v.head,nu(o),v=o.firstChild;v;){var S=v.nextSibling,R=v.nodeName;v[Pr]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&v.rel.toLowerCase()==="stylesheet"||o.removeChild(v),v=S}}if(f===0){n.removeChild(p),cu(r);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:u=o.charCodeAt(0)-48;else u=0;o=p}while(o);cu(r)}function Wp(n){var r=n.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Wp(o),Is(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}n.removeChild(o)}}function XR(n,r,o,u){for(;n.nodeType===1;){var f=o;if(n.nodeName.toLowerCase()!==r.toLowerCase()){if(!u&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(u){if(!n[Pr])switch(r){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(p=n.getAttribute("rel"),p==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(p!==f.rel||n.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||n.getAttribute("title")!==(f.title==null?null:f.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(p=n.getAttribute("src"),(p!==(f.src==null?null:f.src)||n.getAttribute("type")!==(f.type==null?null:f.type)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&p&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(r==="input"&&n.type==="hidden"){var p=f.name==null?null:""+f.name;if(f.type==="hidden"&&n.getAttribute("name")===p)return n}else return n;if(n=ii(n.nextSibling),n===null)break}return null}function $R(n,r,o){if(r==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!o||(n=ii(n.nextSibling),n===null))return null;return n}function Xp(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function ZR(n,r){var o=n.ownerDocument;if(n.data!=="$?"||o.readyState==="complete")r();else{var u=function(){r(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),n._reactRetry=u}}function ii(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return n}var $p=null;function wE(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return n;r--}else o==="/$"&&r++}n=n.previousSibling}return null}function bE(n,r,o){switch(r=Eh(o),n){case"html":if(n=r.documentElement,!n)throw Error(s(452));return n;case"head":if(n=r.head,!n)throw Error(s(453));return n;case"body":if(n=r.body,!n)throw Error(s(454));return n;default:throw Error(s(451))}}function nu(n){for(var r=n.attributes;r.length;)n.removeAttributeNode(r[0]);Is(n)}var Qn=new Map,RE=new Set;function Th(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var hs=ne.d;ne.d={f:JR,r:e1,D:t1,C:n1,L:i1,m:s1,X:a1,S:r1,M:o1};function JR(){var n=hs.f(),r=fh();return n||r}function e1(n){var r=di(n);r!==null&&r.tag===5&&r.type==="form"?Ky(r):hs.r(n)}var vo=typeof document>"u"?null:document;function CE(n,r,o){var u=vo;if(u&&typeof r=="string"&&r){var f=bt(r);f='link[rel="'+n+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),RE.has(f)||(RE.add(f),n={rel:n,crossOrigin:o,href:r},u.querySelector(f)===null&&(r=u.createElement("link"),Zt(r,"link",n),vt(r),u.head.appendChild(r)))}}function t1(n){hs.D(n),CE("dns-prefetch",n,null)}function n1(n,r){hs.C(n,r),CE("preconnect",n,r)}function i1(n,r,o){hs.L(n,r,o);var u=vo;if(u&&n&&r){var f='link[rel="preload"][as="'+bt(r)+'"]';r==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+bt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+bt(o.imageSizes)+'"]')):f+='[href="'+bt(n)+'"]';var p=f;switch(r){case"style":p=Eo(n);break;case"script":p=To(n)}Qn.has(p)||(n=E({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:n,as:r},o),Qn.set(p,n),u.querySelector(f)!==null||r==="style"&&u.querySelector(iu(p))||r==="script"&&u.querySelector(su(p))||(r=u.createElement("link"),Zt(r,"link",n),vt(r),u.head.appendChild(r)))}}function s1(n,r){hs.m(n,r);var o=vo;if(o&&n){var u=r&&typeof r.as=="string"?r.as:"script",f='link[rel="modulepreload"][as="'+bt(u)+'"][href="'+bt(n)+'"]',p=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=To(n)}if(!Qn.has(p)&&(n=E({rel:"modulepreload",href:n},r),Qn.set(p,n),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(su(p)))return}u=o.createElement("link"),Zt(u,"link",n),vt(u),o.head.appendChild(u)}}}function r1(n,r,o){hs.S(n,r,o);var u=vo;if(u&&n){var f=pn(u).hoistableStyles,p=Eo(n);r=r||"default";var v=f.get(p);if(!v){var S={loading:0,preload:null};if(v=u.querySelector(iu(p)))S.loading=5;else{n=E({rel:"stylesheet",href:n,"data-precedence":r},o),(o=Qn.get(p))&&Zp(n,o);var R=v=u.createElement("link");vt(R),Zt(R,"link",n),R._p=new Promise(function(z,K){R.onload=z,R.onerror=K}),R.addEventListener("load",function(){S.loading|=1}),R.addEventListener("error",function(){S.loading|=2}),S.loading|=4,Sh(v,r,u)}v={type:"stylesheet",instance:v,count:1,state:S},f.set(p,v)}}}function a1(n,r){hs.X(n,r);var o=vo;if(o&&n){var u=pn(o).hoistableScripts,f=To(n),p=u.get(f);p||(p=o.querySelector(su(f)),p||(n=E({src:n,async:!0},r),(r=Qn.get(f))&&Jp(n,r),p=o.createElement("script"),vt(p),Zt(p,"link",n),o.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},u.set(f,p))}}function o1(n,r){hs.M(n,r);var o=vo;if(o&&n){var u=pn(o).hoistableScripts,f=To(n),p=u.get(f);p||(p=o.querySelector(su(f)),p||(n=E({src:n,async:!0,type:"module"},r),(r=Qn.get(f))&&Jp(n,r),p=o.createElement("script"),vt(p),Zt(p,"link",n),o.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},u.set(f,p))}}function IE(n,r,o,u){var f=(f=Ae.current)?Th(f):null;if(!f)throw Error(s(446));switch(n){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=Eo(o.href),o=pn(f).hoistableStyles,u=o.get(r),u||(u={type:"style",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){n=Eo(o.href);var p=pn(f).hoistableStyles,v=p.get(n);if(v||(f=f.ownerDocument||f,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(n,v),(p=f.querySelector(iu(n)))&&!p._p&&(v.instance=p,v.state.loading=5),Qn.has(n)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Qn.set(n,o),p||l1(f,n,o,v.state))),r&&u===null)throw Error(s(528,""));return v}if(r&&u!==null)throw Error(s(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=To(o),o=pn(f).hoistableScripts,u=o.get(r),u||(u={type:"script",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,n))}}function Eo(n){return'href="'+bt(n)+'"'}function iu(n){return'link[rel="stylesheet"]['+n+"]"}function NE(n){return E({},n,{"data-precedence":n.precedence,precedence:null})}function l1(n,r,o,u){n.querySelector('link[rel="preload"][as="style"]['+r+"]")?u.loading=1:(r=n.createElement("link"),u.preload=r,r.addEventListener("load",function(){return u.loading|=1}),r.addEventListener("error",function(){return u.loading|=2}),Zt(r,"link",o),vt(r),n.head.appendChild(r))}function To(n){return'[src="'+bt(n)+'"]'}function su(n){return"script[async]"+n}function DE(n,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var u=n.querySelector('style[data-href~="'+bt(o.href)+'"]');if(u)return r.instance=u,vt(u),u;var f=E({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(n.ownerDocument||n).createElement("style"),vt(u),Zt(u,"style",f),Sh(u,o.precedence,n),r.instance=u;case"stylesheet":f=Eo(o.href);var p=n.querySelector(iu(f));if(p)return r.state.loading|=4,r.instance=p,vt(p),p;u=NE(o),(f=Qn.get(f))&&Zp(u,f),p=(n.ownerDocument||n).createElement("link"),vt(p);var v=p;return v._p=new Promise(function(S,R){v.onload=S,v.onerror=R}),Zt(p,"link",u),r.state.loading|=4,Sh(p,o.precedence,n),r.instance=p;case"script":return p=To(o.src),(f=n.querySelector(su(p)))?(r.instance=f,vt(f),f):(u=o,(f=Qn.get(p))&&(u=E({},o),Jp(u,f)),n=n.ownerDocument||n,f=n.createElement("script"),vt(f),Zt(f,"link",u),n.head.appendChild(f),r.instance=f);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(u=r.instance,r.state.loading|=4,Sh(u,o.precedence,n));return r.instance}function Sh(n,r,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,p=f,v=0;v<u.length;v++){var S=u[v];if(S.dataset.precedence===r)p=S;else if(p!==f)break}p?p.parentNode.insertBefore(n,p.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(n,r.firstChild))}function Zp(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.title==null&&(n.title=r.title)}function Jp(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.integrity==null&&(n.integrity=r.integrity)}var Ah=null;function OE(n,r,o){if(Ah===null){var u=new Map,f=Ah=new Map;f.set(o,u)}else f=Ah,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(n))return u;for(u.set(n,null),o=o.getElementsByTagName(n),f=0;f<o.length;f++){var p=o[f];if(!(p[Pr]||p[Dt]||n==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var v=p.getAttribute(r)||"";v=n+v;var S=u.get(v);S?S.push(p):u.set(v,[p])}}return u}function ME(n,r,o){n=n.ownerDocument||n,n.head.insertBefore(o,r==="title"?n.querySelector("head > title"):null)}function u1(n,r,o){if(o===1||r.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return n=r.disabled,typeof r.precedence=="string"&&n==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function kE(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var ru=null;function c1(){}function h1(n,r,o){if(ru===null)throw Error(s(475));var u=ru;if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=Eo(o.href),p=n.querySelector(iu(f));if(p){n=p._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(u.count++,u=wh.bind(u),n.then(u,u)),r.state.loading|=4,r.instance=p,vt(p);return}p=n.ownerDocument||n,o=NE(o),(f=Qn.get(f))&&Zp(o,f),p=p.createElement("link"),vt(p);var v=p;v._p=new Promise(function(S,R){v.onload=S,v.onerror=R}),Zt(p,"link",o),r.instance=p}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(u.count++,r=wh.bind(u),n.addEventListener("load",r),n.addEventListener("error",r))}}function f1(){if(ru===null)throw Error(s(475));var n=ru;return n.stylesheets&&n.count===0&&em(n,n.stylesheets),0<n.count?function(r){var o=setTimeout(function(){if(n.stylesheets&&em(n,n.stylesheets),n.unsuspend){var u=n.unsuspend;n.unsuspend=null,u()}},6e4);return n.unsuspend=r,function(){n.unsuspend=null,clearTimeout(o)}}:null}function wh(){if(this.count--,this.count===0){if(this.stylesheets)em(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var bh=null;function em(n,r){n.stylesheets=null,n.unsuspend!==null&&(n.count++,bh=new Map,r.forEach(d1,n),bh=null,wh.call(n))}function d1(n,r){if(!(r.state.loading&4)){var o=bh.get(n);if(o)var u=o.get(null);else{o=new Map,bh.set(n,o);for(var f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<f.length;p++){var v=f[p];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(o.set(v.dataset.precedence,v),u=v)}u&&o.set(null,u)}f=r.instance,v=f.getAttribute("data-precedence"),p=o.get(v)||u,p===u&&o.set(null,f),o.set(v,f),this.count++,u=wh.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),p?p.parentNode.insertBefore(f,p.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(f,n.firstChild)),r.state.loading|=4}}var au={$$typeof:te,Provider:null,Consumer:null,_currentValue:pe,_currentValue2:pe,_threadCount:0};function p1(n,r,o,u,f,p,v,S){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Fi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fi(0),this.hiddenUpdates=Fi(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=p,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function PE(n,r,o,u,f,p,v,S,R,z,K,Q){return n=new p1(n,r,o,v,S,R,z,Q),r=1,p===!0&&(r|=24),p=Rn(3,null,null,r),n.current=p,p.stateNode=n,r=Vd(),r.refCount++,n.pooledCache=r,r.refCount++,p.memoizedState={element:u,isDehydrated:o,cache:r},zd(p),n}function VE(n){return n?(n=$a,n):$a}function xE(n,r,o,u,f,p){f=VE(f),u.context===null?u.context=f:u.pendingContext=f,u=Ps(r),u.payload={element:o},p=p===void 0?null:p,p!==null&&(u.callback=p),o=Vs(n,u,r),o!==null&&(On(o,n,r),xl(o,n,r))}function LE(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<r?o:r}}function tm(n,r){LE(n,r),(n=n.alternate)&&LE(n,r)}function UE(n){if(n.tag===13){var r=Xa(n,67108864);r!==null&&On(r,n,67108864),tm(n,67108864)}}var Rh=!0;function m1(n,r,o,u){var f=G.T;G.T=null;var p=ne.p;try{ne.p=2,nm(n,r,o,u)}finally{ne.p=p,G.T=f}}function g1(n,r,o,u){var f=G.T;G.T=null;var p=ne.p;try{ne.p=8,nm(n,r,o,u)}finally{ne.p=p,G.T=f}}function nm(n,r,o,u){if(Rh){var f=im(u);if(f===null)jp(n,r,u,Ch,o),BE(n,u);else if(y1(f,n,r,o,u))u.stopPropagation();else if(BE(n,u),r&4&&-1<_1.indexOf(n)){for(;f!==null;){var p=di(f);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var v=Zn(p.pendingLanes);if(v!==0){var S=p;for(S.pendingLanes|=2,S.entangledLanes|=2;v;){var R=1<<31-sn(v);S.entanglements[1]|=R,v&=~R}Ci(p),(We&6)===0&&(ch=xn()+500,Jl(0))}}break;case 13:S=Xa(p,2),S!==null&&On(S,p,2),fh(),tm(p,2)}if(p=im(u),p===null&&jp(n,r,u,Ch,o),p===f)break;f=p}f!==null&&u.stopPropagation()}else jp(n,r,u,null,o)}}function im(n){return n=zn(n),sm(n)}var Ch=null;function sm(n){if(Ch=null,n=ji(n),n!==null){var r=l(n);if(r===null)n=null;else{var o=r.tag;if(o===13){if(n=c(r),n!==null)return n;n=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null)}}return Ch=n,null}function zE(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(od()){case sl:return 2;case Na:return 8;case Nr:case ld:return 32;case Da:return 268435456;default:return 32}default:return 32}}var rm=!1,Qs=null,Ws=null,Xs=null,ou=new Map,lu=new Map,$s=[],_1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function BE(n,r){switch(n){case"focusin":case"focusout":Qs=null;break;case"dragenter":case"dragleave":Ws=null;break;case"mouseover":case"mouseout":Xs=null;break;case"pointerover":case"pointerout":ou.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":lu.delete(r.pointerId)}}function uu(n,r,o,u,f,p){return n===null||n.nativeEvent!==p?(n={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:p,targetContainers:[f]},r!==null&&(r=di(r),r!==null&&UE(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),n)}function y1(n,r,o,u,f){switch(r){case"focusin":return Qs=uu(Qs,n,r,o,u,f),!0;case"dragenter":return Ws=uu(Ws,n,r,o,u,f),!0;case"mouseover":return Xs=uu(Xs,n,r,o,u,f),!0;case"pointerover":var p=f.pointerId;return ou.set(p,uu(ou.get(p)||null,n,r,o,u,f)),!0;case"gotpointercapture":return p=f.pointerId,lu.set(p,uu(lu.get(p)||null,n,r,o,u,f)),!0}return!1}function FE(n){var r=ji(n.target);if(r!==null){var o=l(r);if(o!==null){if(r=o.tag,r===13){if(r=c(o),r!==null){n.blockedOn=r,fc(n.priority,function(){if(o.tag===13){var u=Dn();u=bs(u);var f=Xa(o,u);f!==null&&On(f,o,u),tm(o,u)}});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ih(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var o=im(n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Yi=u,o.target.dispatchEvent(u),Yi=null}else return r=di(o),r!==null&&UE(r),n.blockedOn=o,!1;r.shift()}return!0}function qE(n,r,o){Ih(n)&&o.delete(r)}function v1(){rm=!1,Qs!==null&&Ih(Qs)&&(Qs=null),Ws!==null&&Ih(Ws)&&(Ws=null),Xs!==null&&Ih(Xs)&&(Xs=null),ou.forEach(qE),lu.forEach(qE)}function Nh(n,r){n.blockedOn===r&&(n.blockedOn=null,rm||(rm=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,v1)))}var Dh=null;function jE(n){Dh!==n&&(Dh=n,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Dh===n&&(Dh=null);for(var r=0;r<n.length;r+=3){var o=n[r],u=n[r+1],f=n[r+2];if(typeof u!="function"){if(sm(u||o)===null)continue;break}var p=di(o);p!==null&&(n.splice(r,3),r-=3,sp(p,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function cu(n){function r(R){return Nh(R,n)}Qs!==null&&Nh(Qs,n),Ws!==null&&Nh(Ws,n),Xs!==null&&Nh(Xs,n),ou.forEach(r),lu.forEach(r);for(var o=0;o<$s.length;o++){var u=$s[o];u.blockedOn===n&&(u.blockedOn=null)}for(;0<$s.length&&(o=$s[0],o.blockedOn===null);)FE(o),o.blockedOn===null&&$s.shift();if(o=(n.ownerDocument||n).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],p=o[u+1],v=f[wt]||null;if(typeof p=="function")v||jE(o);else if(v){var S=null;if(p&&p.hasAttribute("formAction")){if(f=p,v=p[wt]||null)S=v.formAction;else if(sm(f)!==null)continue}else S=v.action;typeof S=="function"?o[u+1]=S:(o.splice(u,3),u-=3),jE(o)}}}function am(n){this._internalRoot=n}Oh.prototype.render=am.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(s(409));var o=r.current,u=Dn();xE(o,u,n,r,null,null)},Oh.prototype.unmount=am.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;xE(n.current,2,null,n,null,null),fh(),r[Ln]=null}};function Oh(n){this._internalRoot=n}Oh.prototype.unstable_scheduleHydration=function(n){if(n){var r=Rs();n={blockedOn:null,target:n,priority:r};for(var o=0;o<$s.length&&r!==0&&r<$s[o].priority;o++);$s.splice(o,0,n),o===0&&FE(n)}};var HE=e.version;if(HE!=="19.1.0")throw Error(s(527,HE,"19.1.0"));ne.findDOMNode=function(n){var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(s(188)):(n=Object.keys(n).join(","),Error(s(268,n)));return n=m(r),n=n!==null?g(n):null,n=n===null?null:n.stateNode,n};var E1={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:G,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mh.isDisabled&&Mh.supportsFiber)try{gt=Mh.inject(E1),Qe=Mh}catch{}}return fu.createRoot=function(n,r){if(!a(n))throw Error(s(299));var o=!1,u="",f=av,p=ov,v=lv,S=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(p=r.onCaughtError),r.onRecoverableError!==void 0&&(v=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(S=r.unstable_transitionCallbacks)),r=PE(n,1,!1,null,null,o,u,f,p,v,S,null),n[Ln]=r.current,qp(n),new am(r)},fu.hydrateRoot=function(n,r,o){if(!a(n))throw Error(s(299));var u=!1,f="",p=av,v=ov,S=lv,R=null,z=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(p=o.onUncaughtError),o.onCaughtError!==void 0&&(v=o.onCaughtError),o.onRecoverableError!==void 0&&(S=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(R=o.unstable_transitionCallbacks),o.formState!==void 0&&(z=o.formState)),r=PE(n,1,!0,r,o??null,u,f,p,v,S,R,z),r.context=VE(null),o=r.current,u=Dn(),u=bs(u),f=Ps(u),f.callback=null,Vs(o,f,u),o=u,r.current.lanes=o,qi(r,o),Ci(r),n[Ln]=r.current,qp(n),new Oh(r)},fu.version="19.1.0",fu}var eT;function D1(){if(eT)return um.exports;eT=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),um.exports=N1(),um.exports}var O1=D1();const M1=()=>{};var tT={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re=function(i,e){if(!i)throw Yo(e)},Yo=function(i){return new Error("Firebase Database ("+cS.SDK_VERSION+") INTERNAL ASSERT FAILED: "+i)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},k1=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const a=i[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const l=i[t++];e[s++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=i[t++],c=i[t++],d=i[t++],m=((a&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[s++]=String.fromCharCode(55296+(m>>10)),e[s++]=String.fromCharCode(56320+(m&1023))}else{const l=i[t++],c=i[t++];e[s++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},vg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<i.length;a+=3){const l=i[a],c=a+1<i.length,d=c?i[a+1]:0,m=a+2<i.length,g=m?i[a+2]:0,E=l>>2,T=(l&3)<<4|d>>4;let w=(d&15)<<2|g>>6,x=g&63;m||(x=64,c||(w=64)),s.push(t[E],t[T],t[w],t[x])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(hS(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):k1(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<i.length;){const l=t[i.charAt(a++)],d=a<i.length?t[i.charAt(a)]:0;++a;const g=a<i.length?t[i.charAt(a)]:64;++a;const T=a<i.length?t[i.charAt(a)]:64;if(++a,l==null||d==null||g==null||T==null)throw new P1;const w=l<<2|d>>4;if(s.push(w),g!==64){const x=d<<4&240|g>>2;if(s.push(x),T!==64){const F=g<<6&192|T;s.push(F)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class P1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fS=function(i){const e=hS(i);return vg.encodeByteArray(e,!0)},Jh=function(i){return fS(i).replace(/\./g,"")},ef=function(i){try{return vg.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V1(i){return dS(void 0,i)}function dS(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!x1(t)||(i[t]=dS(i[t],e[t]));return i}function x1(i){return i!=="__proto__"}/**
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
 */function L1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const U1=()=>L1().__FIREBASE_DEFAULTS__,z1=()=>{if(typeof process>"u"||typeof tT>"u")return;const i=tT.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},B1=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&ef(i[1]);return e&&JSON.parse(e)},Df=()=>{try{return M1()||U1()||z1()||B1()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},pS=i=>{var e,t;return(t=(e=Df())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},mS=i=>{const e=pS(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},gS=()=>{var i;return(i=Df())===null||i===void 0?void 0:i.config},_S=i=>{var e;return(e=Df())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Tr(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Tg(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function yS(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=i.iat||0,l=i.sub||i.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Jh(JSON.stringify(t)),Jh(JSON.stringify(c)),""].join(".")}const wu={};function F1(){const i={prod:[],emulator:[]};for(const e of Object.keys(wu))wu[e]?i.emulator.push(e):i.prod.push(e);return i}function q1(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let nT=!1;function Sg(i,e){if(typeof window>"u"||typeof document>"u"||!Tr(window.location.host)||wu[i]===e||wu[i]||nT)return;wu[i]=e;function t(w){return`__firebase__banner__${w}`}const s="__firebase__banner",l=F1().prod.length>0;function c(){const w=document.getElementById(s);w&&w.remove()}function d(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function m(w,x){w.setAttribute("width","24"),w.setAttribute("id",x),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function g(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{nT=!0,c()},w}function E(w,x){w.setAttribute("id",x),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function T(){const w=q1(s),x=t("text"),F=document.getElementById(x)||document.createElement("span"),$=t("learnmore"),H=document.getElementById($)||document.createElement("a"),ae=t("preprendIcon"),le=document.getElementById(ae)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const te=w.element;d(te),E(H,$);const ye=g();m(le,ae),te.append(le,F,H,ye),document.body.appendChild(te)}l?(F.innerText="Preview backend disconnected.",le.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(le.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,F.innerText="Preview backend running in this workspace."),F.setAttribute("id",x)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ag(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dn())}function j1(){var i;const e=(i=Df())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function H1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function G1(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function vS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function K1(){const i=dn();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function Y1(){return cS.NODE_ADMIN===!0}function Q1(){return!j1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function W1(){try{return typeof indexedDB=="object"}catch{return!1}}function X1(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var l;e(((l=a.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1="FirebaseError";class Ss extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=$1,Object.setPrototypeOf(this,Ss.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qu.prototype.create)}}class Qu{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?Z1(l,s):"Error",d=`${this.serviceName}: ${c} (${a}).`;return new Ss(a,d,s)}}function Z1(i,e){return i.replace(J1,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const J1=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(i){return JSON.parse(i)}function en(i){return JSON.stringify(i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES=function(i){let e={},t={},s={},a="";try{const l=i.split(".");e=Pu(ef(l[0])||""),t=Pu(ef(l[1])||""),a=l[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:a}},eC=function(i){const e=ES(i),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},tC=function(i){const e=ES(i).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function zo(i,e){if(Object.prototype.hasOwnProperty.call(i,e))return i[e]}function Mm(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function tf(i,e,t){const s={};for(const a in i)Object.prototype.hasOwnProperty.call(i,a)&&(s[a]=e.call(t,i[a],a,i));return s}function hr(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const l=i[a],c=e[a];if(iT(l)&&iT(c)){if(!hr(l,c))return!1}else if(l!==c)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function iT(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qo(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function _u(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[a,l]=s.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function yu(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let T=0;T<16;T++)s[T]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let T=0;T<16;T++)s[T]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let T=16;T<80;T++){const w=s[T-3]^s[T-8]^s[T-14]^s[T-16];s[T]=(w<<1|w>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],c=this.chain_[2],d=this.chain_[3],m=this.chain_[4],g,E;for(let T=0;T<80;T++){T<40?T<20?(g=d^l&(c^d),E=1518500249):(g=l^c^d,E=1859775393):T<60?(g=l&c|d&(l|c),E=2400959708):(g=l^c^d,E=3395469782);const w=(a<<5|a>>>27)+g+m+E+s[T]&4294967295;m=d,d=c,c=(l<<30|l>>>2)&4294967295,l=a,a=w}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+m&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let a=0;const l=this.buf_;let c=this.inbuf_;for(;a<t;){if(c===0)for(;a<=s;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<t;)if(l[c]=e.charCodeAt(a),++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}else for(;a<t;)if(l[c]=e[a],++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[a]>>l&255,++s;return e}}function iC(i,e){const t=new sC(i,e);return t.subscribe.bind(t)}class sC{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");rC(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=dm),a.error===void 0&&(a.error=dm),a.complete===void 0&&(a.complete=dm);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rC(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function dm(){}function aC(i,e){return`${i} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);if(a>=55296&&a<=56319){const l=a-55296;s++,re(s<i.length,"Surrogate pair missing trail surrogate.");const c=i.charCodeAt(s)-56320;a=65536+(l<<10)+c}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},Of=function(i){let e=0;for(let t=0;t<i.length;t++){const s=i.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Lt(i){return i&&i._delegate?i._delegate:i}class fr{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ua="[DEFAULT]";/**
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
 */class lC{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Eg;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e?.identifier),a=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cC(e))try{this.getOrInitializeService({instanceIdentifier:ua})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});s.resolve(l)}catch{}}}}clearInstance(e=ua){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ua){return this.instances.has(e)}getOptions(e=ua){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);s===d&&c.resolve(a)}return a}onInit(e,t){var s;const a=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(a))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(a,l);const c=this.instances.get(a);return c&&e(c,a),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:uC(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ua){return this.component?this.component.multipleInstances?e:ua:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function uC(i){return i===ua?void 0:i}function cC(i){return i.instantiationMode==="EAGER"}/**
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
 */class hC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new lC(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ke||(ke={}));const fC={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},dC=ke.INFO,pC={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},mC=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),a=pC[e];if(a)console[a](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mf{constructor(e){this.name=e,this._logLevel=dC,this._logHandler=mC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const gC=(i,e)=>e.some(t=>i instanceof t);let sT,rT;function _C(){return sT||(sT=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yC(){return rT||(rT=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const TS=new WeakMap,km=new WeakMap,SS=new WeakMap,pm=new WeakMap,wg=new WeakMap;function vC(i){const e=new Promise((t,s)=>{const a=()=>{i.removeEventListener("success",l),i.removeEventListener("error",c)},l=()=>{t(rr(i.result)),a()},c=()=>{s(i.error),a()};i.addEventListener("success",l),i.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&TS.set(t,i)}).catch(()=>{}),wg.set(e,i),e}function EC(i){if(km.has(i))return;const e=new Promise((t,s)=>{const a=()=>{i.removeEventListener("complete",l),i.removeEventListener("error",c),i.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{s(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",l),i.addEventListener("error",c),i.addEventListener("abort",c)});km.set(i,e)}let Pm={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return km.get(i);if(e==="objectStoreNames")return i.objectStoreNames||SS.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return rr(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function TC(i){Pm=i(Pm)}function SC(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(mm(this),e,...t);return SS.set(s,e.sort?e.sort():[e]),rr(s)}:yC().includes(i)?function(...e){return i.apply(mm(this),e),rr(TS.get(this))}:function(...e){return rr(i.apply(mm(this),e))}}function AC(i){return typeof i=="function"?SC(i):(i instanceof IDBTransaction&&EC(i),gC(i,_C())?new Proxy(i,Pm):i)}function rr(i){if(i instanceof IDBRequest)return vC(i);if(pm.has(i))return pm.get(i);const e=AC(i);return e!==i&&(pm.set(i,e),wg.set(e,i)),e}const mm=i=>wg.get(i);function wC(i,e,{blocked:t,upgrade:s,blocking:a,terminated:l}={}){const c=indexedDB.open(i,e),d=rr(c);return s&&c.addEventListener("upgradeneeded",m=>{s(rr(c.result),m.oldVersion,m.newVersion,rr(c.transaction),m)}),t&&c.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),d.then(m=>{l&&m.addEventListener("close",()=>l()),a&&m.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const bC=["get","getKey","getAll","getAllKeys","count"],RC=["put","add","delete","clear"],gm=new Map;function aT(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(gm.get(e))return gm.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=RC.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||bC.includes(t)))return;const l=async function(c,...d){const m=this.transaction(c,a?"readwrite":"readonly");let g=m.store;return s&&(g=g.index(d.shift())),(await Promise.all([g[t](...d),a&&m.done]))[0]};return gm.set(e,l),l}TC(i=>({...i,get:(e,t,s)=>aT(e,t)||i.get(e,t,s),has:(e,t)=>!!aT(e,t)||i.has(e,t)}));/**
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
 */class CC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(IC(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function IC(i){const e=i.getComponent();return e?.type==="VERSION"}const Vm="@firebase/app",oT="0.13.2";/**
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
 */const _s=new Mf("@firebase/app"),NC="@firebase/app-compat",DC="@firebase/analytics-compat",OC="@firebase/analytics",MC="@firebase/app-check-compat",kC="@firebase/app-check",PC="@firebase/auth",VC="@firebase/auth-compat",xC="@firebase/database",LC="@firebase/data-connect",UC="@firebase/database-compat",zC="@firebase/functions",BC="@firebase/functions-compat",FC="@firebase/installations",qC="@firebase/installations-compat",jC="@firebase/messaging",HC="@firebase/messaging-compat",GC="@firebase/performance",KC="@firebase/performance-compat",YC="@firebase/remote-config",QC="@firebase/remote-config-compat",WC="@firebase/storage",XC="@firebase/storage-compat",$C="@firebase/firestore",ZC="@firebase/ai",JC="@firebase/firestore-compat",eI="firebase",tI="11.10.0";/**
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
 */const xm="[DEFAULT]",nI={[Vm]:"fire-core",[NC]:"fire-core-compat",[OC]:"fire-analytics",[DC]:"fire-analytics-compat",[kC]:"fire-app-check",[MC]:"fire-app-check-compat",[PC]:"fire-auth",[VC]:"fire-auth-compat",[xC]:"fire-rtdb",[LC]:"fire-data-connect",[UC]:"fire-rtdb-compat",[zC]:"fire-fn",[BC]:"fire-fn-compat",[FC]:"fire-iid",[qC]:"fire-iid-compat",[jC]:"fire-fcm",[HC]:"fire-fcm-compat",[GC]:"fire-perf",[KC]:"fire-perf-compat",[YC]:"fire-rc",[QC]:"fire-rc-compat",[WC]:"fire-gcs",[XC]:"fire-gcs-compat",[$C]:"fire-fst",[JC]:"fire-fst-compat",[ZC]:"fire-vertex","fire-js":"fire-js",[eI]:"fire-js-all"};/**
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
 */const nf=new Map,iI=new Map,Lm=new Map;function lT(i,e){try{i.container.addComponent(e)}catch(t){_s.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function pa(i){const e=i.name;if(Lm.has(e))return _s.debug(`There were multiple attempts to register component ${e}.`),!1;Lm.set(e,i);for(const t of nf.values())lT(t,i);for(const t of iI.values())lT(t,i);return!0}function kf(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function kn(i){return i==null?!1:i.settings!==void 0}/**
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
 */const sI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ar=new Qu("app","Firebase",sI);/**
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
 */class rI{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new fr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ar.create("app-deleted",{appName:this._name})}}/**
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
 */const Aa=tI;function AS(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:xm,automaticDataCollectionEnabled:!0},e),a=s.name;if(typeof a!="string"||!a)throw ar.create("bad-app-name",{appName:String(a)});if(t||(t=gS()),!t)throw ar.create("no-options");const l=nf.get(a);if(l){if(hr(t,l.options)&&hr(s,l.config))return l;throw ar.create("duplicate-app",{appName:a})}const c=new hC(a);for(const m of Lm.values())c.addComponent(m);const d=new rI(t,s,c);return nf.set(a,d),d}function bg(i=xm){const e=nf.get(i);if(!e&&i===xm&&gS())return AS();if(!e)throw ar.create("no-app",{appName:i});return e}function Oi(i,e,t){var s;let a=(s=nI[i])!==null&&s!==void 0?s:i;t&&(a+=`-${t}`);const l=a.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const d=[`Unable to register library "${a}" with version "${e}":`];l&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_s.warn(d.join(" "));return}pa(new fr(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
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
 */const aI="firebase-heartbeat-database",oI=1,Vu="firebase-heartbeat-store";let _m=null;function wS(){return _m||(_m=wC(aI,oI,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Vu)}catch(t){console.warn(t)}}}}).catch(i=>{throw ar.create("idb-open",{originalErrorMessage:i.message})})),_m}async function lI(i){try{const t=(await wS()).transaction(Vu),s=await t.objectStore(Vu).get(bS(i));return await t.done,s}catch(e){if(e instanceof Ss)_s.warn(e.message);else{const t=ar.create("idb-get",{originalErrorMessage:e?.message});_s.warn(t.message)}}}async function uT(i,e){try{const s=(await wS()).transaction(Vu,"readwrite");await s.objectStore(Vu).put(e,bS(i)),await s.done}catch(t){if(t instanceof Ss)_s.warn(t.message);else{const s=ar.create("idb-set",{originalErrorMessage:t?.message});_s.warn(s.message)}}}function bS(i){return`${i.name}!${i.options.appId}`}/**
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
 */const uI=1024,cI=30;class hI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new dI(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=cT();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>cI){const c=pI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){_s.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=cT(),{heartbeatsToSend:s,unsentEntries:a}=fI(this._heartbeatsCache.heartbeats),l=Jh(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return _s.warn(t),""}}}function cT(){return new Date().toISOString().substring(0,10)}function fI(i,e=uI){const t=[];let s=i.slice();for(const a of i){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),hT(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),hT(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class dI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return W1()?X1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await lI(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return uT(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return uT(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function hT(i){return Jh(JSON.stringify({version:2,heartbeats:i})).length}function pI(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
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
 */function mI(i){pa(new fr("platform-logger",e=>new CC(e),"PRIVATE")),pa(new fr("heartbeat",e=>new hI(e),"PRIVATE")),Oi(Vm,oT,i),Oi(Vm,oT,"esm2017"),Oi("fire-js","")}mI("");var gI="firebase",_I="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Oi(gI,_I,"app");var fT={};const dT="@firebase/database",pT="1.0.20";/**
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
 */let RS="";function yI(i){RS=i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),en(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Pu(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return As(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS=function(i){try{if(typeof window<"u"&&typeof window[i]<"u"){const e=window[i];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new vI(e)}}catch{}return new EI},ha=CS("localStorage"),TI=CS("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo=new Mf("@firebase/database"),SI=function(){let i=1;return function(){return i++}}(),IS=function(i){const e=oC(i),t=new nC;t.update(e);const s=t.digest();return vg.encodeByteArray(s)},Wu=function(...i){let e="";for(let t=0;t<i.length;t++){const s=i[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Wu.apply(null,s):typeof s=="object"?e+=en(s):e+=s,e+=" "}return e};let bu=null,mT=!0;const AI=function(i,e){re(!0,"Can't turn on custom loggers persistently."),Oo.logLevel=ke.VERBOSE,bu=Oo.log.bind(Oo)},un=function(...i){if(mT===!0&&(mT=!1,bu===null&&TI.get("logging_enabled")===!0&&AI()),bu){const e=Wu.apply(null,i);bu(e)}},Xu=function(i){return function(...e){un(i,...e)}},Um=function(...i){const e="FIREBASE INTERNAL ERROR: "+Wu(...i);Oo.error(e)},ys=function(...i){const e=`FIREBASE FATAL ERROR: ${Wu(...i)}`;throw Oo.error(e),new Error(e)},Vn=function(...i){const e="FIREBASE WARNING: "+Wu(...i);Oo.warn(e)},wI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Vn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},NS=function(i){return typeof i=="number"&&(i!==i||i===Number.POSITIVE_INFINITY||i===Number.NEGATIVE_INFINITY)},bI=function(i){if(document.readyState==="complete")i();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,i())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Bo="[MIN_NAME]",ma="[MAX_NAME]",Wo=function(i,e){if(i===e)return 0;if(i===Bo||e===ma)return-1;if(e===Bo||i===ma)return 1;{const t=gT(i),s=gT(e);return t!==null?s!==null?t-s===0?i.length-e.length:t-s:-1:s!==null?1:i<e?-1:1}},RI=function(i,e){return i===e?0:i<e?-1:1},du=function(i,e){if(e&&i in e)return e[i];throw new Error("Missing required key ("+i+") in object: "+en(e))},Rg=function(i){if(typeof i!="object"||i===null)return en(i);const e=[];for(const s in i)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=en(e[s]),t+=":",t+=Rg(i[e[s]]);return t+="}",t},DS=function(i,e){const t=i.length;if(t<=e)return[i];const s=[];for(let a=0;a<t;a+=e)a+e>t?s.push(i.substring(a,t)):s.push(i.substring(a,a+e));return s};function $n(i,e){for(const t in i)i.hasOwnProperty(t)&&e(t,i[t])}const OS=function(i){re(!NS(i),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let a,l,c,d,m;i===0?(l=0,c=0,a=1/i===-1/0?1:0):(a=i<0,i=Math.abs(i),i>=Math.pow(2,1-s)?(d=Math.min(Math.floor(Math.log(i)/Math.LN2),s),l=d+s,c=Math.round(i*Math.pow(2,t-d)-Math.pow(2,t))):(l=0,c=Math.round(i/Math.pow(2,1-s-t))));const g=[];for(m=t;m;m-=1)g.push(c%2?1:0),c=Math.floor(c/2);for(m=e;m;m-=1)g.push(l%2?1:0),l=Math.floor(l/2);g.push(a?1:0),g.reverse();const E=g.join("");let T="";for(m=0;m<64;m+=8){let w=parseInt(E.substr(m,8),2).toString(16);w.length===1&&(w="0"+w),T=T+w}return T.toLowerCase()},CI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},II=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},NI=new RegExp("^-?(0*)\\d{1,10}$"),DI=-2147483648,OI=2147483647,gT=function(i){if(NI.test(i)){const e=Number(i);if(e>=DI&&e<=OI)return e}return null},$u=function(i){try{i()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Vn("Exception was thrown by user callback.",t),e},Math.floor(0))}},MI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ru=function(i,e){const t=setTimeout(i,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class kI{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,kn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Vn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(un("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Vn(e)}}class Fh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Fh.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg="5",MS="v",kS="s",PS="r",VS="f",xS=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,LS="ls",US="p",zm="ac",zS="websocket",BS="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e,t,s,a,l=!1,c="",d=!1,m=!1,g=null){this.secure=t,this.namespace=s,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=c,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=m,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ha.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ha.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function VI(i){return i.host!==i.internalHost||i.isCustomHost()||i.includeNamespaceInQueryParams}function qS(i,e,t){re(typeof e=="string","typeof type must == string"),re(typeof t=="object","typeof params must == object");let s;if(e===zS)s=(i.secure?"wss://":"ws://")+i.internalHost+"/.ws?";else if(e===BS)s=(i.secure?"https://":"http://")+i.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);VI(i)&&(t.ns=i.namespace);const a=[];return $n(t,(l,c)=>{a.push(l+"="+c)}),s+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(){this.counters_={}}incrementCounter(e,t=1){As(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return V1(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym={},vm={};function Ig(i){const e=i.toString();return ym[e]||(ym[e]=new xI),ym[e]}function LI(i,e){const t=i.toString();return vm[t]||(vm[t]=e()),vm[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<s.length;++a)s[a]&&$u(()=>{this.onMessage_(s[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T="start",zI="close",BI="pLPCommand",FI="pRTLPCB",jS="id",HS="pw",GS="ser",qI="cb",jI="seg",HI="ts",GI="d",KI="dframe",KS=1870,YS=30,YI=KS-YS,QI=25e3,WI=3e4;class Co{constructor(e,t,s,a,l,c,d){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.transportSessionId=c,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Xu(e),this.stats_=Ig(t),this.urlFn=m=>(this.appCheckToken&&(m[zm]=this.appCheckToken),qS(t,BS,m))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new UI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(WI)),bI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ng((...l)=>{const[c,d,m,g,E]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===_T)this.id=d,this.password=m;else if(c===zI)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...l)=>{const[c,d]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(c,d)},()=>{this.onClosed_()},this.urlFn);const s={};s[_T]="t",s[GS]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[qI]=this.scriptTagHolder.uniqueCallbackIdentifier),s[MS]=Cg,this.transportSessionId&&(s[kS]=this.transportSessionId),this.lastSessionId&&(s[LS]=this.lastSessionId),this.applicationId&&(s[US]=this.applicationId),this.appCheckToken&&(s[zm]=this.appCheckToken),typeof location<"u"&&location.hostname&&xS.test(location.hostname)&&(s[PS]=VS);const a=this.urlFn(s);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Co.forceAllow_=!0}static forceDisallow(){Co.forceDisallow_=!0}static isAvailable(){return Co.forceAllow_?!0:!Co.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!CI()&&!II()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=en(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=fS(t),a=DS(s,YI);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[KI]="t",s[jS]=e,s[HS]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=en(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Ng{constructor(e,t,s,a){this.onDisconnect=s,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=SI(),window[BI+this.uniqueCallbackIdentifier]=e,window[FI+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ng.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(d){un("frame writing exception"),d.stack&&un(d.stack),un(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||un("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[jS]=this.myID,e[HS]=this.myPW,e[GS]=this.currentSerial;let t=this.urlFn(e),s="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+YS+s.length<=KS;){const c=this.pendingSegs.shift();s=s+"&"+jI+a+"="+c.seg+"&"+HI+a+"="+c.ts+"&"+GI+a+"="+c.d,a++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},a=setTimeout(s,Math.floor(QI)),l=()=>{clearTimeout(a),s()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const a=s.readyState;(!a||a==="loaded"||a==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{un("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI=16384,$I=45e3;let sf=null;typeof MozWebSocket<"u"?sf=MozWebSocket:typeof WebSocket<"u"&&(sf=WebSocket);class si{constructor(e,t,s,a,l,c,d){this.connId=e,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Xu(this.connId),this.stats_=Ig(t),this.connURL=si.connectionURL_(t,c,d,a,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,a,l){const c={};return c[MS]=Cg,typeof location<"u"&&location.hostname&&xS.test(location.hostname)&&(c[PS]=VS),t&&(c[kS]=t),s&&(c[LS]=s),a&&(c[zm]=a),l&&(c[US]=l),qS(e,zS,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ha.set("previous_websocket_failure",!0);try{let s;Y1(),this.mySock=new sf(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){si.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&sf!==null&&!si.forceDisallow_}static previouslyFailed(){return ha.isInMemoryStorage||ha.get("previous_websocket_failure")===!0}markConnectionHealthy(){ha.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Pu(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(re(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=en(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=DS(t,XI);s.length>1&&this.sendString_(String(s.length));for(let a=0;a<s.length;a++)this.sendString_(s[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor($I))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}si.responsesRequiredToBeHealthy=2;si.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{static get ALL_TRANSPORTS(){return[Co,si]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=si&&si.isAvailable();let s=t&&!si.previouslyFailed();if(e.webSocketOnly&&(t||Vn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[si];else{const a=this.transports_=[];for(const l of xu.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);xu.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}xu.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI=6e4,JI=5e3,eN=10*1024,tN=100*1024,Em="t",yT="d",nN="s",vT="r",iN="e",ET="o",TT="a",ST="n",AT="p",sN="h";class rN{constructor(e,t,s,a,l,c,d,m,g,E){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=c,this.onReady_=d,this.onDisconnect_=m,this.onKill_=g,this.lastSessionId=E,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Xu("c:"+this.id+":"),this.transportManager_=new xu(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=Ru(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>tN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>eN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Em in e){const t=e[Em];t===TT?this.upgradeIfSecondaryHealthy_():t===vT?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===ET&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=du("t",e),s=du("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:AT,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:TT,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ST,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=du("t",e),s=du("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=du(Em,e);if(yT in e){const s=e[yT];if(t===sN){const a=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(t===ST){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===nN?this.onConnectionShutdown_(s):t===vT?this.onReset_(s):t===iN?Um("Server Error: "+s):t===ET?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Um("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Cg!==s&&Vn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Ru(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ZI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ru(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(JI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:AT,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ha.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{put(e,t,s,a){}merge(e,t,s,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e){this.allowedEvents_=e,this.listeners_={},re(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let a=0;a<s.length;a++)s[a].callback.apply(s[a].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const a=this.getInitialEvent(e);a&&t.apply(s,a)}off(e,t,s){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let l=0;l<a.length;l++)if(a[l].callback===t&&(!s||s===a[l].context)){a.splice(l,1);return}}validateEventType_(e){re(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf extends WS{static getInstance(){return new rf}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ag()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return re(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wT=32,bT=768;class ct{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[s]=this.pieces_[a],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function nt(){return new ct("")}function Be(i){return i.pieceNum_>=i.pieces_.length?null:i.pieces_[i.pieceNum_]}function dr(i){return i.pieces_.length-i.pieceNum_}function ot(i){let e=i.pieceNum_;return e<i.pieces_.length&&e++,new ct(i.pieces_,e)}function XS(i){return i.pieceNum_<i.pieces_.length?i.pieces_[i.pieces_.length-1]:null}function aN(i){let e="";for(let t=i.pieceNum_;t<i.pieces_.length;t++)i.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(i.pieces_[t])));return e||"/"}function $S(i,e=0){return i.pieces_.slice(i.pieceNum_+e)}function ZS(i){if(i.pieceNum_>=i.pieces_.length)return null;const e=[];for(let t=i.pieceNum_;t<i.pieces_.length-1;t++)e.push(i.pieces_[t]);return new ct(e,0)}function Kt(i,e){const t=[];for(let s=i.pieceNum_;s<i.pieces_.length;s++)t.push(i.pieces_[s]);if(e instanceof ct)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let a=0;a<s.length;a++)s[a].length>0&&t.push(s[a])}return new ct(t,0)}function Ve(i){return i.pieceNum_>=i.pieces_.length}function Xn(i,e){const t=Be(i),s=Be(e);if(t===null)return e;if(t===s)return Xn(ot(i),ot(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+i+")")}function JS(i,e){if(dr(i)!==dr(e))return!1;for(let t=i.pieceNum_,s=e.pieceNum_;t<=i.pieces_.length;t++,s++)if(i.pieces_[t]!==e.pieces_[s])return!1;return!0}function ri(i,e){let t=i.pieceNum_,s=e.pieceNum_;if(dr(i)>dr(e))return!1;for(;t<i.pieces_.length;){if(i.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class oN{constructor(e,t){this.errorPrefix_=t,this.parts_=$S(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Of(this.parts_[s]);eA(this)}}function lN(i,e){i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(e),i.byteLength_+=Of(e),eA(i)}function uN(i){const e=i.parts_.pop();i.byteLength_-=Of(e),i.parts_.length>0&&(i.byteLength_-=1)}function eA(i){if(i.byteLength_>bT)throw new Error(i.errorPrefix_+"has a key path longer than "+bT+" bytes ("+i.byteLength_+").");if(i.parts_.length>wT)throw new Error(i.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+wT+") or object contains a cycle "+ca(i))}function ca(i){return i.parts_.length===0?"":"in property '"+i.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg extends WS{static getInstance(){return new Dg}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return re(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu=1e3,cN=60*5*1e3,RT=30*1e3,hN=1.3,fN=3e4,dN="server_kill",CT=3;class ms extends QS{constructor(e,t,s,a,l,c,d,m){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=c,this.appCheckTokenProvider_=d,this.authOverride_=m,this.id=ms.nextPersistentConnectionId_++,this.log_=Xu("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=pu,this.maxReconnectDelay_=cN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,m)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Dg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&rf.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const a=++this.requestNumber_,l={r:a,a:e,b:t};this.log_(en(l)),re(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[a]=s)}get(e){this.initConnection_();const t=new Eg,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const d=c.d;c.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,s,a){this.initConnection_();const l=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+l),this.listens.has(c)||this.listens.set(c,new Map),re(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),re(!this.listens.get(c).has(l),"listen() called twice for same path/queryId.");const d={onComplete:a,hashFn:t,query:e,tag:s};this.listens.get(c).set(l,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),a=t._queryIdentifier;this.log_("Listen on "+s+" for "+a);const l={p:s},c="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(c,l,d=>{const m=d.d,g=d.s;ms.warnOnListenWarnings_(m,t),(this.listens.get(s)&&this.listens.get(s).get(a))===e&&(this.log_("listen response",d),g!=="ok"&&this.removeListen_(s,a),e.onComplete&&e.onComplete(g,m))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&As(e,"w")){const s=zo(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const a='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();Vn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||tC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=RT)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=eC(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,a=>{const l=a.s,c=a.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+a),re(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,a)&&this.connected_&&this.sendUnlisten_(s,a,e._queryObject,t)}sendUnlisten_(e,t,s,a){this.log_("Unlisten on "+e+" for "+t);const l={p:e},c="n";a&&(l.q=s,l.t=a),this.sendRequest(c,l)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,a){const l={p:t,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,c=>{a&&setTimeout(()=>{a(c.s,c.d)},Math.floor(0))})}put(e,t,s,a){this.putInternal("p",e,t,s,a)}merge(e,t,s,a){this.putInternal("m",e,t,s,a)}putInternal(e,t,s,a,l){this.initConnection_();const c={p:t,d:s};l!==void 0&&(c.h=l),this.outstandingPuts_.push({action:e,request:c,onComplete:a}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+en(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Um("Unrecognized action received from server: "+en(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){re(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=pu,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=pu,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>fN&&(this.reconnectDelay_=pu),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*hN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+ms.nextConnectionId_++,l=this.lastSessionId;let c=!1,d=null;const m=function(){d?d.close():(c=!0,s())},g=function(T){re(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(T)};this.realtime_={close:m,sendRequest:g};const E=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[T,w]=await Promise.all([this.authTokenProvider_.getToken(E),this.appCheckTokenProvider_.getToken(E)]);c?un("getToken() completed but was canceled"):(un("getToken() completed. Creating connection."),this.authToken_=T&&T.accessToken,this.appCheckToken_=w&&w.token,d=new rN(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,x=>{Vn(x+" ("+this.repoInfo_.toString()+")"),this.interrupt(dN)},l))}catch(T){this.log_("Failed to get token: "+T),c||(this.repoInfo_.nodeAdmin&&Vn(T),m())}}}interrupt(e){un("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){un("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Mm(this.interruptReasons_)&&(this.reconnectDelay_=pu,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(l=>Rg(l)).join("$"):s="default";const a=this.removeListen_(e,s);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,t){const s=new ct(e).toString();let a;if(this.listens.has(s)){const l=this.listens.get(s);a=l.get(t),l.delete(t),l.size===0&&this.listens.delete(s)}else a=void 0;return a}onAuthRevoked_(e,t){un("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=CT&&(this.reconnectDelay_=RT,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){un("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=CT&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+RS.replace(/\./g,"-")]=1,Ag()?e["framework.cordova"]=1:vS()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=rf.getInstance().currentlyOnline();return Mm(this.interruptReasons_)&&e}}ms.nextPersistentConnectionId_=0;ms.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Fe(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new Fe(Bo,e),a=new Fe(Bo,t);return this.compare(s,a)!==0}minPost(){return Fe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kh;class tA extends Pf{static get __EMPTY_NODE(){return kh}static set __EMPTY_NODE(e){kh=e}compare(e,t){return Wo(e.name,t.name)}isDefinedOn(e){throw Yo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Fe.MIN}maxPost(){return new Fe(ma,kh)}makePost(e,t){return re(typeof e=="string","KeyIndex indexValue must always be a string."),new Fe(e,kh)}toString(){return".key"}}const Mo=new tA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ph=class{constructor(e,t,s,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?s(e.key,t):1,a&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Mn=class vu{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??vu.RED,this.left=a??Ni.EMPTY_NODE,this.right=l??Ni.EMPTY_NODE}copy(e,t,s,a,l){return new vu(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a=a.copy(null,t,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ni.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,a;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Ni.EMPTY_NODE;a=s.right.min_(),s=s.copy(a.key,a.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,vu.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,vu.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Mn.RED=!0;Mn.BLACK=!1;class pN{copy(e,t,s,a,l){return this}insert(e,t,s){return new Mn(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Ni=class qh{constructor(e,t=qh.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new qh(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Mn.BLACK,null,null))}remove(e){return new qh(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Mn.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,a=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return a?a.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(a=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ph(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ph(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ph(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ph(this.root_,null,this.comparator_,!0,e)}};Ni.EMPTY_NODE=new pN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mN(i,e){return Wo(i.name,e.name)}function Og(i,e){return Wo(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bm;function gN(i){Bm=i}const nA=function(i){return typeof i=="number"?"number:"+OS(i):"string:"+i},iA=function(i){if(i.isLeafNode()){const e=i.val();re(typeof e=="string"||typeof e=="number"||typeof e=="object"&&As(e,".sv"),"Priority must be a string or number.")}else re(i===Bm||i.isEmpty(),"priority of unexpected type.");re(i===Bm||i.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let IT;class Ht{static set __childrenNodeConstructor(e){IT=e}static get __childrenNodeConstructor(){return IT}constructor(e,t=Ht.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,re(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),iA(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ht(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ht.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ve(e)?this:Be(e)===".priority"?this.priorityNode_:Ht.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Ht.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=Be(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(re(s!==".priority"||dr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ht.__childrenNodeConstructor.EMPTY_NODE.updateChild(ot(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+nA(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=OS(this.value_):e+=this.value_,this.lazyHash_=IS(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ht.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ht.__childrenNodeConstructor?-1:(re(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,a=Ht.VALUE_TYPE_ORDER.indexOf(t),l=Ht.VALUE_TYPE_ORDER.indexOf(s);return re(a>=0,"Unknown leaf type: "+t),re(l>=0,"Unknown leaf type: "+s),a===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Ht.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sA,rA;function _N(i){sA=i}function yN(i){rA=i}class vN extends Pf{compare(e,t){const s=e.node.getPriority(),a=t.node.getPriority(),l=s.compareTo(a);return l===0?Wo(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Fe.MIN}maxPost(){return new Fe(ma,new Ht("[PRIORITY-POST]",rA))}makePost(e,t){const s=sA(e);return new Fe(t,new Ht("[PRIORITY-POST]",s))}toString(){return".priority"}}const fn=new vN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EN=Math.log(2);class TN{constructor(e){const t=l=>parseInt(Math.log(l)/EN,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const a=s(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const af=function(i,e,t,s){i.sort(e);const a=function(m,g){const E=g-m;let T,w;if(E===0)return null;if(E===1)return T=i[m],w=t?t(T):T,new Mn(w,T.node,Mn.BLACK,null,null);{const x=parseInt(E/2,10)+m,F=a(m,x),$=a(x+1,g);return T=i[x],w=t?t(T):T,new Mn(w,T.node,Mn.BLACK,F,$)}},l=function(m){let g=null,E=null,T=i.length;const w=function(F,$){const H=T-F,ae=T;T-=F;const le=a(H+1,ae),te=i[H],ye=t?t(te):te;x(new Mn(ye,te.node,$,null,le))},x=function(F){g?(g.left=F,g=F):(E=F,g=F)};for(let F=0;F<m.count;++F){const $=m.nextBitIsOne(),H=Math.pow(2,m.count-(F+1));$?w(H,Mn.BLACK):(w(H,Mn.BLACK),w(H,Mn.RED))}return E},c=new TN(i.length),d=l(c);return new Ni(s||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tm;const So={};class fs{static get Default(){return re(So&&fn,"ChildrenNode.ts has not been loaded"),Tm=Tm||new fs({".priority":So},{".priority":fn}),Tm}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=zo(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Ni?t:null}hasIndex(e){return As(this.indexSet_,e.toString())}addIndex(e,t){re(e!==Mo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let a=!1;const l=t.getIterator(Fe.Wrap);let c=l.getNext();for(;c;)a=a||e.isDefinedOn(c.node),s.push(c),c=l.getNext();let d;a?d=af(s,e.getCompare()):d=So;const m=e.toString(),g=Object.assign({},this.indexSet_);g[m]=e;const E=Object.assign({},this.indexes_);return E[m]=d,new fs(E,g)}addToIndexes(e,t){const s=tf(this.indexes_,(a,l)=>{const c=zo(this.indexSet_,l);if(re(c,"Missing index implementation for "+l),a===So)if(c.isDefinedOn(e.node)){const d=[],m=t.getIterator(Fe.Wrap);let g=m.getNext();for(;g;)g.name!==e.name&&d.push(g),g=m.getNext();return d.push(e),af(d,c.getCompare())}else return So;else{const d=t.get(e.name);let m=a;return d&&(m=m.remove(new Fe(e.name,d))),m.insert(e,e.node)}});return new fs(s,this.indexSet_)}removeFromIndexes(e,t){const s=tf(this.indexes_,a=>{if(a===So)return a;{const l=t.get(e.name);return l?a.remove(new Fe(e.name,l)):a}});return new fs(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mu;class Ke{static get EMPTY_NODE(){return mu||(mu=new Ke(new Ni(Og),null,fs.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&iA(this.priorityNode_),this.children_.isEmpty()&&re(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||mu}updatePriority(e){return this.children_.isEmpty()?this:new Ke(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?mu:t}}getChild(e){const t=Be(e);return t===null?this:this.getImmediateChild(t).getChild(ot(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(re(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new Fe(e,t);let a,l;t.isEmpty()?(a=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(a=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(s,this.children_));const c=a.isEmpty()?mu:this.priorityNode_;return new Ke(a,c,l)}}updateChild(e,t){const s=Be(e);if(s===null)return t;{re(Be(e)!==".priority"||dr(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(s).updateChild(ot(e),t);return this.updateImmediateChild(s,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,a=0,l=!0;if(this.forEachChild(fn,(c,d)=>{t[c]=d.val(e),s++,l&&Ke.INTEGER_REGEXP_.test(c)?a=Math.max(a,Number(c)):l=!1}),!e&&l&&a<2*s){const c=[];for(const d in t)c[d]=t[d];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+nA(this.getPriority().val())+":"),this.forEachChild(fn,(t,s)=>{const a=s.hash();a!==""&&(e+=":"+t+":"+a)}),this.lazyHash_=e===""?"":IS(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const a=this.resolveIndex_(s);if(a){const l=a.getPredecessorKey(new Fe(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Fe(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Fe(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(a=>t(a.name,a.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,Fe.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,Fe.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)>0;)a.getNext(),l=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Zu?-1:0}withIndex(e){if(e===Mo||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Ke(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Mo||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(fn),a=t.getIterator(fn);let l=s.getNext(),c=a.getNext();for(;l&&c;){if(l.name!==c.name||!l.node.equals(c.node))return!1;l=s.getNext(),c=a.getNext()}return l===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===Mo?null:this.indexMap_.get(e.toString())}}Ke.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class SN extends Ke{constructor(){super(new Ni(Og),Ke.EMPTY_NODE,fs.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ke.EMPTY_NODE}isEmpty(){return!1}}const Zu=new SN;Object.defineProperties(Fe,{MIN:{value:new Fe(Bo,Ke.EMPTY_NODE)},MAX:{value:new Fe(ma,Zu)}});tA.__EMPTY_NODE=Ke.EMPTY_NODE;Ht.__childrenNodeConstructor=Ke;gN(Zu);yN(Zu);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AN=!0;function cn(i,e=null){if(i===null)return Ke.EMPTY_NODE;if(typeof i=="object"&&".priority"in i&&(e=i[".priority"]),re(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof i=="object"&&".value"in i&&i[".value"]!==null&&(i=i[".value"]),typeof i!="object"||".sv"in i){const t=i;return new Ht(t,cn(e))}if(!(i instanceof Array)&&AN){const t=[];let s=!1;if($n(i,(c,d)=>{if(c.substring(0,1)!=="."){const m=cn(d);m.isEmpty()||(s=s||!m.getPriority().isEmpty(),t.push(new Fe(c,m)))}}),t.length===0)return Ke.EMPTY_NODE;const l=af(t,mN,c=>c.name,Og);if(s){const c=af(t,fn.getCompare());return new Ke(l,cn(e),new fs({".priority":c},{".priority":fn}))}else return new Ke(l,cn(e),fs.Default)}else{let t=Ke.EMPTY_NODE;return $n(i,(s,a)=>{if(As(i,s)&&s.substring(0,1)!=="."){const l=cn(a);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(s,l))}}),t.updatePriority(cn(e))}}_N(cn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wN extends Pf{constructor(e){super(),this.indexPath_=e,re(!Ve(e)&&Be(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),a=this.extractChild(t.node),l=s.compareTo(a);return l===0?Wo(e.name,t.name):l}makePost(e,t){const s=cn(e),a=Ke.EMPTY_NODE.updateChild(this.indexPath_,s);return new Fe(t,a)}maxPost(){const e=Ke.EMPTY_NODE.updateChild(this.indexPath_,Zu);return new Fe(ma,e)}toString(){return $S(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN extends Pf{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Wo(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Fe.MIN}maxPost(){return Fe.MAX}makePost(e,t){const s=cn(e);return new Fe(t,s)}toString(){return".value"}}const RN=new bN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CN(i){return{type:"value",snapshotNode:i}}function IN(i,e){return{type:"child_added",snapshotNode:e,childName:i}}function NN(i,e){return{type:"child_removed",snapshotNode:e,childName:i}}function NT(i,e,t){return{type:"child_changed",snapshotNode:e,childName:i,oldSnap:t}}function DN(i,e){return{type:"child_moved",snapshotNode:e,childName:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=fn}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return re(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return re(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Bo}hasEnd(){return this.endSet_}getIndexEndValue(){return re(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return re(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ma}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return re(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===fn}copy(){const e=new Mg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function DT(i){const e={};if(i.isDefault())return e;let t;if(i.index_===fn?t="$priority":i.index_===RN?t="$value":i.index_===Mo?t="$key":(re(i.index_ instanceof wN,"Unrecognized index type!"),t=i.index_.toString()),e.orderBy=en(t),i.startSet_){const s=i.startAfterSet_?"startAfter":"startAt";e[s]=en(i.indexStartValue_),i.startNameSet_&&(e[s]+=","+en(i.indexStartName_))}if(i.endSet_){const s=i.endBeforeSet_?"endBefore":"endAt";e[s]=en(i.indexEndValue_),i.endNameSet_&&(e[s]+=","+en(i.indexEndName_))}return i.limitSet_&&(i.isViewFromLeft()?e.limitToFirst=i.limit_:e.limitToLast=i.limit_),e}function OT(i){const e={};if(i.startSet_&&(e.sp=i.indexStartValue_,i.startNameSet_&&(e.sn=i.indexStartName_),e.sin=!i.startAfterSet_),i.endSet_&&(e.ep=i.indexEndValue_,i.endNameSet_&&(e.en=i.indexEndName_),e.ein=!i.endBeforeSet_),i.limitSet_){e.l=i.limit_;let t=i.viewFrom_;t===""&&(i.isViewFromLeft()?t="l":t="r"),e.vf=t}return i.index_!==fn&&(e.i=i.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of extends QS{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(re(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,a){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.log_=Xu("p:rest:"),this.listens_={}}listen(e,t,s,a){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const c=of.getListenId_(e,s),d={};this.listens_[c]=d;const m=DT(e._queryParams);this.restRequest_(l+".json",m,(g,E)=>{let T=E;if(g===404&&(T=null,g=null),g===null&&this.onDataUpdate_(l,T,!1,s),zo(this.listens_,c)===d){let w;g?g===401?w="permission_denied":w="rest_error:"+g:w="ok",a(w,null)}})}unlisten(e,t){const s=of.getListenId_(e,t);delete this.listens_[s]}get(e){const t=DT(e._queryParams),s=e._path.toString(),a=new Eg;return this.restRequest_(s+".json",t,(l,c)=>{let d=c;l===404&&(d=null,l=null),l===null?(this.onDataUpdate_(s,d,!1,null),a.resolve(d)):a.reject(new Error(d))}),a.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(t.auth=a.accessToken),l&&l.token&&(t.ac=l.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Qo(t);this.log_("Sending REST request for "+c);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(s&&d.readyState===4){this.log_("REST Response for "+c+" received. status:",d.status,"response:",d.responseText);let m=null;if(d.status>=200&&d.status<300){try{m=Pu(d.responseText)}catch{Vn("Failed to parse JSON response for "+c+": "+d.responseText)}s(null,m)}else d.status!==401&&d.status!==404&&Vn("Got unsuccessful REST response for "+c+" Status: "+d.status),s(d.status);s=null}},d.open("GET",c,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(){this.rootNode_=Ke.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(){return{value:null,children:new Map}}function aA(i,e,t){if(Ve(e))i.value=t,i.children.clear();else if(i.value!==null)i.value=i.value.updateChild(e,t);else{const s=Be(e);i.children.has(s)||i.children.set(s,lf());const a=i.children.get(s);e=ot(e),aA(a,e,t)}}function Fm(i,e,t){i.value!==null?t(e,i.value):MN(i,(s,a)=>{const l=new ct(e.toString()+"/"+s);Fm(a,l,t)})}function MN(i,e){i.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&$n(this.last_,(s,a)=>{t[s]=t[s]-a}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT=10*1e3,PN=30*1e3,VN=5*60*1e3;class xN{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new kN(e);const s=MT+(PN-MT)*Math.random();Ru(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;$n(e,(a,l)=>{l>0&&As(this.statsToReport_,a)&&(t[a]=l,s=!0)}),s&&this.server_.reportStats(t),Ru(this.reportStats_.bind(this),Math.floor(Math.random()*2*VN))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Di;(function(i){i[i.OVERWRITE=0]="OVERWRITE",i[i.MERGE=1]="MERGE",i[i.ACK_USER_WRITE=2]="ACK_USER_WRITE",i[i.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Di||(Di={}));function oA(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function lA(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function uA(i){return{fromUser:!1,fromServer:!0,queryId:i,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Di.ACK_USER_WRITE,this.source=oA()}operationForChild(e){if(Ve(this.path)){if(this.affectedTree.value!=null)return re(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ct(e));return new uf(nt(),t,this.revert)}}else return re(Be(this.path)===e,"operationForChild called for unrelated child."),new uf(ot(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Di.OVERWRITE}operationForChild(e){return Ve(this.path)?new ga(this.source,nt(),this.snap.getImmediateChild(e)):new ga(this.source,ot(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Di.MERGE}operationForChild(e){if(Ve(this.path)){const t=this.children.subtree(new ct(e));return t.isEmpty()?null:t.value?new ga(this.source,nt(),t.value):new Lu(this.source,nt(),t)}else return re(Be(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Lu(this.source,ot(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ve(e))return this.isFullyInitialized()&&!this.filtered_;const t=Be(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function LN(i,e,t,s){const a=[],l=[];return e.forEach(c=>{c.type==="child_changed"&&i.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&l.push(DN(c.childName,c.snapshotNode))}),gu(i,a,"child_removed",e,s,t),gu(i,a,"child_added",e,s,t),gu(i,a,"child_moved",l,s,t),gu(i,a,"child_changed",e,s,t),gu(i,a,"value",e,s,t),a}function gu(i,e,t,s,a,l){const c=s.filter(d=>d.type===t);c.sort((d,m)=>zN(i,d,m)),c.forEach(d=>{const m=UN(i,d,l);a.forEach(g=>{g.respondsTo(d.type)&&e.push(g.createEvent(m,i.query_))})})}function UN(i,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,i.index_)),e}function zN(i,e,t){if(e.childName==null||t.childName==null)throw Yo("Should only compare child_ events.");const s=new Fe(e.childName,e.snapshotNode),a=new Fe(t.childName,t.snapshotNode);return i.index_.compare(s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cA(i,e){return{eventCache:i,serverCache:e}}function Cu(i,e,t,s){return cA(new kg(e,t,s),i.serverCache)}function hA(i,e,t,s){return cA(i.eventCache,new kg(e,t,s))}function qm(i){return i.eventCache.isFullyInitialized()?i.eventCache.getNode():null}function _a(i){return i.serverCache.isFullyInitialized()?i.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sm;const BN=()=>(Sm||(Sm=new Ni(RI)),Sm);class at{static fromObject(e){let t=new at(null);return $n(e,(s,a)=>{t=t.set(new ct(s),a)}),t}constructor(e,t=BN()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:nt(),value:this.value};if(Ve(e))return null;{const s=Be(e),a=this.children.get(s);if(a!==null){const l=a.findRootMostMatchingPathAndValue(ot(e),t);return l!=null?{path:Kt(new ct(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ve(e))return this;{const t=Be(e),s=this.children.get(t);return s!==null?s.subtree(ot(e)):new at(null)}}set(e,t){if(Ve(e))return new at(t,this.children);{const s=Be(e),l=(this.children.get(s)||new at(null)).set(ot(e),t),c=this.children.insert(s,l);return new at(this.value,c)}}remove(e){if(Ve(e))return this.children.isEmpty()?new at(null):new at(null,this.children);{const t=Be(e),s=this.children.get(t);if(s){const a=s.remove(ot(e));let l;return a.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,a),this.value===null&&l.isEmpty()?new at(null):new at(this.value,l)}else return this}}get(e){if(Ve(e))return this.value;{const t=Be(e),s=this.children.get(t);return s?s.get(ot(e)):null}}setTree(e,t){if(Ve(e))return t;{const s=Be(e),l=(this.children.get(s)||new at(null)).setTree(ot(e),t);let c;return l.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,l),new at(this.value,c)}}fold(e){return this.fold_(nt(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((a,l)=>{s[a]=l.fold_(Kt(e,a),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,nt(),t)}findOnPath_(e,t,s){const a=this.value?s(t,this.value):!1;if(a)return a;if(Ve(e))return null;{const l=Be(e),c=this.children.get(l);return c?c.findOnPath_(ot(e),Kt(t,l),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,nt(),t)}foreachOnPath_(e,t,s){if(Ve(e))return this;{this.value&&s(t,this.value);const a=Be(e),l=this.children.get(a);return l?l.foreachOnPath_(ot(e),Kt(t,a),s):new at(null)}}foreach(e){this.foreach_(nt(),e)}foreach_(e,t){this.children.inorderTraversal((s,a)=>{a.foreach_(Kt(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e){this.writeTree_=e}static empty(){return new oi(new at(null))}}function Iu(i,e,t){if(Ve(e))return new oi(new at(t));{const s=i.writeTree_.findRootMostValueAndPath(e);if(s!=null){const a=s.path;let l=s.value;const c=Xn(a,e);return l=l.updateChild(c,t),new oi(i.writeTree_.set(a,l))}else{const a=new at(t),l=i.writeTree_.setTree(e,a);return new oi(l)}}}function kT(i,e,t){let s=i;return $n(t,(a,l)=>{s=Iu(s,Kt(e,a),l)}),s}function PT(i,e){if(Ve(e))return oi.empty();{const t=i.writeTree_.setTree(e,new at(null));return new oi(t)}}function jm(i,e){return wa(i,e)!=null}function wa(i,e){const t=i.writeTree_.findRootMostValueAndPath(e);return t!=null?i.writeTree_.get(t.path).getChild(Xn(t.path,e)):null}function VT(i){const e=[],t=i.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(fn,(s,a)=>{e.push(new Fe(s,a))}):i.writeTree_.children.inorderTraversal((s,a)=>{a.value!=null&&e.push(new Fe(s,a.value))}),e}function or(i,e){if(Ve(e))return i;{const t=wa(i,e);return t!=null?new oi(new at(t)):new oi(i.writeTree_.subtree(e))}}function Hm(i){return i.writeTree_.isEmpty()}function Fo(i,e){return fA(nt(),i.writeTree_,e)}function fA(i,e,t){if(e.value!=null)return t.updateChild(i,e.value);{let s=null;return e.children.inorderTraversal((a,l)=>{a===".priority"?(re(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):t=fA(Kt(i,a),l,t)}),!t.getChild(i).isEmpty()&&s!==null&&(t=t.updateChild(Kt(i,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dA(i,e){return yA(e,i)}function FN(i,e,t,s,a){re(s>i.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),i.allWrites.push({path:e,snap:t,writeId:s,visible:a}),a&&(i.visibleWrites=Iu(i.visibleWrites,e,t)),i.lastWriteId=s}function qN(i,e){for(let t=0;t<i.allWrites.length;t++){const s=i.allWrites[t];if(s.writeId===e)return s}return null}function jN(i,e){const t=i.allWrites.findIndex(d=>d.writeId===e);re(t>=0,"removeWrite called with nonexistent writeId.");const s=i.allWrites[t];i.allWrites.splice(t,1);let a=s.visible,l=!1,c=i.allWrites.length-1;for(;a&&c>=0;){const d=i.allWrites[c];d.visible&&(c>=t&&HN(d,s.path)?a=!1:ri(s.path,d.path)&&(l=!0)),c--}if(a){if(l)return GN(i),!0;if(s.snap)i.visibleWrites=PT(i.visibleWrites,s.path);else{const d=s.children;$n(d,m=>{i.visibleWrites=PT(i.visibleWrites,Kt(s.path,m))})}return!0}else return!1}function HN(i,e){if(i.snap)return ri(i.path,e);for(const t in i.children)if(i.children.hasOwnProperty(t)&&ri(Kt(i.path,t),e))return!0;return!1}function GN(i){i.visibleWrites=pA(i.allWrites,KN,nt()),i.allWrites.length>0?i.lastWriteId=i.allWrites[i.allWrites.length-1].writeId:i.lastWriteId=-1}function KN(i){return i.visible}function pA(i,e,t){let s=oi.empty();for(let a=0;a<i.length;++a){const l=i[a];if(e(l)){const c=l.path;let d;if(l.snap)ri(t,c)?(d=Xn(t,c),s=Iu(s,d,l.snap)):ri(c,t)&&(d=Xn(c,t),s=Iu(s,nt(),l.snap.getChild(d)));else if(l.children){if(ri(t,c))d=Xn(t,c),s=kT(s,d,l.children);else if(ri(c,t))if(d=Xn(c,t),Ve(d))s=kT(s,nt(),l.children);else{const m=zo(l.children,Be(d));if(m){const g=m.getChild(ot(d));s=Iu(s,nt(),g)}}}else throw Yo("WriteRecord should have .snap or .children")}}return s}function mA(i,e,t,s,a){if(!s&&!a){const l=wa(i.visibleWrites,e);if(l!=null)return l;{const c=or(i.visibleWrites,e);if(Hm(c))return t;if(t==null&&!jm(c,nt()))return null;{const d=t||Ke.EMPTY_NODE;return Fo(c,d)}}}else{const l=or(i.visibleWrites,e);if(!a&&Hm(l))return t;if(!a&&t==null&&!jm(l,nt()))return null;{const c=function(g){return(g.visible||a)&&(!s||!~s.indexOf(g.writeId))&&(ri(g.path,e)||ri(e,g.path))},d=pA(i.allWrites,c,e),m=t||Ke.EMPTY_NODE;return Fo(d,m)}}}function YN(i,e,t){let s=Ke.EMPTY_NODE;const a=wa(i.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(fn,(l,c)=>{s=s.updateImmediateChild(l,c)}),s;if(t){const l=or(i.visibleWrites,e);return t.forEachChild(fn,(c,d)=>{const m=Fo(or(l,new ct(c)),d);s=s.updateImmediateChild(c,m)}),VT(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const l=or(i.visibleWrites,e);return VT(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function QN(i,e,t,s,a){re(s||a,"Either existingEventSnap or existingServerSnap must exist");const l=Kt(e,t);if(jm(i.visibleWrites,l))return null;{const c=or(i.visibleWrites,l);return Hm(c)?a.getChild(t):Fo(c,a.getChild(t))}}function WN(i,e,t,s){const a=Kt(e,t),l=wa(i.visibleWrites,a);if(l!=null)return l;if(s.isCompleteForChild(t)){const c=or(i.visibleWrites,a);return Fo(c,s.getNode().getImmediateChild(t))}else return null}function XN(i,e){return wa(i.visibleWrites,e)}function $N(i,e,t,s,a,l,c){let d;const m=or(i.visibleWrites,e),g=wa(m,nt());if(g!=null)d=g;else if(t!=null)d=Fo(m,t);else return[];if(d=d.withIndex(c),!d.isEmpty()&&!d.isLeafNode()){const E=[],T=c.getCompare(),w=l?d.getReverseIteratorFrom(s,c):d.getIteratorFrom(s,c);let x=w.getNext();for(;x&&E.length<a;)T(x,s)!==0&&E.push(x),x=w.getNext();return E}else return[]}function ZN(){return{visibleWrites:oi.empty(),allWrites:[],lastWriteId:-1}}function Gm(i,e,t,s){return mA(i.writeTree,i.treePath,e,t,s)}function gA(i,e){return YN(i.writeTree,i.treePath,e)}function xT(i,e,t,s){return QN(i.writeTree,i.treePath,e,t,s)}function cf(i,e){return XN(i.writeTree,Kt(i.treePath,e))}function JN(i,e,t,s,a,l){return $N(i.writeTree,i.treePath,e,t,s,a,l)}function Pg(i,e,t){return WN(i.writeTree,i.treePath,e,t)}function _A(i,e){return yA(Kt(i.treePath,e),i.writeTree)}function yA(i,e){return{treePath:i,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;re(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),re(s!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(s);if(a){const l=a.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(s,NT(s,e.snapshotNode,a.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(s,NN(s,a.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(s,IN(s,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(s,NT(s,e.snapshotNode,a.oldSnap));else throw Yo("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const vA=new tD;class Vg{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new kg(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Pg(this.writes_,e,s)}}getChildAfterChild(e,t,s){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:_a(this.viewCache_),l=JN(this.writes_,a,t,1,s,e);return l.length===0?null:l[0]}}function nD(i,e){re(e.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),re(e.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed")}function iD(i,e,t,s,a){const l=new eD;let c,d;if(t.type===Di.OVERWRITE){const g=t;g.source.fromUser?c=Km(i,e,g.path,g.snap,s,a,l):(re(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered()&&!Ve(g.path),c=hf(i,e,g.path,g.snap,s,a,d,l))}else if(t.type===Di.MERGE){const g=t;g.source.fromUser?c=rD(i,e,g.path,g.children,s,a,l):(re(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered(),c=Ym(i,e,g.path,g.children,s,a,d,l))}else if(t.type===Di.ACK_USER_WRITE){const g=t;g.revert?c=lD(i,e,g.path,s,a,l):c=aD(i,e,g.path,g.affectedTree,s,a,l)}else if(t.type===Di.LISTEN_COMPLETE)c=oD(i,e,t.path,s,l);else throw Yo("Unknown operation type: "+t.type);const m=l.getChanges();return sD(e,c,m),{viewCache:c,changes:m}}function sD(i,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const a=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=qm(i);(t.length>0||!i.eventCache.isFullyInitialized()||a&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&t.push(CN(qm(e)))}}function EA(i,e,t,s,a,l){const c=e.eventCache;if(cf(s,t)!=null)return e;{let d,m;if(Ve(t))if(re(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=_a(e),E=g instanceof Ke?g:Ke.EMPTY_NODE,T=gA(s,E);d=i.filter.updateFullNode(e.eventCache.getNode(),T,l)}else{const g=Gm(s,_a(e));d=i.filter.updateFullNode(e.eventCache.getNode(),g,l)}else{const g=Be(t);if(g===".priority"){re(dr(t)===1,"Can't have a priority with additional path components");const E=c.getNode();m=e.serverCache.getNode();const T=xT(s,t,E,m);T!=null?d=i.filter.updatePriority(E,T):d=c.getNode()}else{const E=ot(t);let T;if(c.isCompleteForChild(g)){m=e.serverCache.getNode();const w=xT(s,t,c.getNode(),m);w!=null?T=c.getNode().getImmediateChild(g).updateChild(E,w):T=c.getNode().getImmediateChild(g)}else T=Pg(s,g,e.serverCache);T!=null?d=i.filter.updateChild(c.getNode(),g,T,E,a,l):d=c.getNode()}}return Cu(e,d,c.isFullyInitialized()||Ve(t),i.filter.filtersNodes())}}function hf(i,e,t,s,a,l,c,d){const m=e.serverCache;let g;const E=c?i.filter:i.filter.getIndexedFilter();if(Ve(t))g=E.updateFullNode(m.getNode(),s,null);else if(E.filtersNodes()&&!m.isFiltered()){const x=m.getNode().updateChild(t,s);g=E.updateFullNode(m.getNode(),x,null)}else{const x=Be(t);if(!m.isCompleteForPath(t)&&dr(t)>1)return e;const F=ot(t),H=m.getNode().getImmediateChild(x).updateChild(F,s);x===".priority"?g=E.updatePriority(m.getNode(),H):g=E.updateChild(m.getNode(),x,H,F,vA,null)}const T=hA(e,g,m.isFullyInitialized()||Ve(t),E.filtersNodes()),w=new Vg(a,T,l);return EA(i,T,t,a,w,d)}function Km(i,e,t,s,a,l,c){const d=e.eventCache;let m,g;const E=new Vg(a,e,l);if(Ve(t))g=i.filter.updateFullNode(e.eventCache.getNode(),s,c),m=Cu(e,g,!0,i.filter.filtersNodes());else{const T=Be(t);if(T===".priority")g=i.filter.updatePriority(e.eventCache.getNode(),s),m=Cu(e,g,d.isFullyInitialized(),d.isFiltered());else{const w=ot(t),x=d.getNode().getImmediateChild(T);let F;if(Ve(w))F=s;else{const $=E.getCompleteChild(T);$!=null?XS(w)===".priority"&&$.getChild(ZS(w)).isEmpty()?F=$:F=$.updateChild(w,s):F=Ke.EMPTY_NODE}if(x.equals(F))m=e;else{const $=i.filter.updateChild(d.getNode(),T,F,w,E,c);m=Cu(e,$,d.isFullyInitialized(),i.filter.filtersNodes())}}}return m}function LT(i,e){return i.eventCache.isCompleteForChild(e)}function rD(i,e,t,s,a,l,c){let d=e;return s.foreach((m,g)=>{const E=Kt(t,m);LT(e,Be(E))&&(d=Km(i,d,E,g,a,l,c))}),s.foreach((m,g)=>{const E=Kt(t,m);LT(e,Be(E))||(d=Km(i,d,E,g,a,l,c))}),d}function UT(i,e,t){return t.foreach((s,a)=>{e=e.updateChild(s,a)}),e}function Ym(i,e,t,s,a,l,c,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let m=e,g;Ve(t)?g=s:g=new at(null).setTree(t,s);const E=e.serverCache.getNode();return g.children.inorderTraversal((T,w)=>{if(E.hasChild(T)){const x=e.serverCache.getNode().getImmediateChild(T),F=UT(i,x,w);m=hf(i,m,new ct(T),F,a,l,c,d)}}),g.children.inorderTraversal((T,w)=>{const x=!e.serverCache.isCompleteForChild(T)&&w.value===null;if(!E.hasChild(T)&&!x){const F=e.serverCache.getNode().getImmediateChild(T),$=UT(i,F,w);m=hf(i,m,new ct(T),$,a,l,c,d)}}),m}function aD(i,e,t,s,a,l,c){if(cf(a,t)!=null)return e;const d=e.serverCache.isFiltered(),m=e.serverCache;if(s.value!=null){if(Ve(t)&&m.isFullyInitialized()||m.isCompleteForPath(t))return hf(i,e,t,m.getNode().getChild(t),a,l,d,c);if(Ve(t)){let g=new at(null);return m.getNode().forEachChild(Mo,(E,T)=>{g=g.set(new ct(E),T)}),Ym(i,e,t,g,a,l,d,c)}else return e}else{let g=new at(null);return s.foreach((E,T)=>{const w=Kt(t,E);m.isCompleteForPath(w)&&(g=g.set(E,m.getNode().getChild(w)))}),Ym(i,e,t,g,a,l,d,c)}}function oD(i,e,t,s,a){const l=e.serverCache,c=hA(e,l.getNode(),l.isFullyInitialized()||Ve(t),l.isFiltered());return EA(i,c,t,s,vA,a)}function lD(i,e,t,s,a,l){let c;if(cf(s,t)!=null)return e;{const d=new Vg(s,e,a),m=e.eventCache.getNode();let g;if(Ve(t)||Be(t)===".priority"){let E;if(e.serverCache.isFullyInitialized())E=Gm(s,_a(e));else{const T=e.serverCache.getNode();re(T instanceof Ke,"serverChildren would be complete if leaf node"),E=gA(s,T)}E=E,g=i.filter.updateFullNode(m,E,l)}else{const E=Be(t);let T=Pg(s,E,e.serverCache);T==null&&e.serverCache.isCompleteForChild(E)&&(T=m.getImmediateChild(E)),T!=null?g=i.filter.updateChild(m,E,T,ot(t),d,l):e.eventCache.getNode().hasChild(E)?g=i.filter.updateChild(m,E,Ke.EMPTY_NODE,ot(t),d,l):g=m,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=Gm(s,_a(e)),c.isLeafNode()&&(g=i.filter.updateFullNode(g,c,l)))}return c=e.serverCache.isFullyInitialized()||cf(s,nt())!=null,Cu(e,g,c,i.filter.filtersNodes())}}function uD(i,e){const t=_a(i.viewCache_);return t&&(i.query._queryParams.loadsAllData()||!Ve(e)&&!t.getImmediateChild(Be(e)).isEmpty())?t.getChild(e):null}function zT(i,e,t,s){e.type===Di.MERGE&&e.source.queryId!==null&&(re(_a(i.viewCache_),"We should always have a full cache before handling merges"),re(qm(i.viewCache_),"Missing event cache, even though we have a server cache"));const a=i.viewCache_,l=iD(i.processor_,a,e,t,s);return nD(i.processor_,l.viewCache),re(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),i.viewCache_=l.viewCache,cD(i,l.changes,l.viewCache.eventCache.getNode())}function cD(i,e,t,s){const a=i.eventRegistrations_;return LN(i.eventGenerator_,e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let BT;function hD(i){re(!BT,"__referenceConstructor has already been defined"),BT=i}function xg(i,e,t,s){const a=e.source.queryId;if(a!==null){const l=i.views.get(a);return re(l!=null,"SyncTree gave us an op for an invalid query."),zT(l,e,t,s)}else{let l=[];for(const c of i.views.values())l=l.concat(zT(c,e,t,s));return l}}function Lg(i,e){let t=null;for(const s of i.views.values())t=t||uD(s,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FT;function fD(i){re(!FT,"__referenceConstructor has already been defined"),FT=i}class qT{constructor(e){this.listenProvider_=e,this.syncPointTree_=new at(null),this.pendingWriteTree_=ZN(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function dD(i,e,t,s,a){return FN(i.pendingWriteTree_,e,t,s,a),a?xf(i,new ga(oA(),e,t)):[]}function Io(i,e,t=!1){const s=qN(i.pendingWriteTree_,e);if(jN(i.pendingWriteTree_,e)){let l=new at(null);return s.snap!=null?l=l.set(nt(),!0):$n(s.children,c=>{l=l.set(new ct(c),!0)}),xf(i,new uf(s.path,l,t))}else return[]}function Vf(i,e,t){return xf(i,new ga(lA(),e,t))}function pD(i,e,t){const s=at.fromObject(t);return xf(i,new Lu(lA(),e,s))}function mD(i,e,t,s){const a=wA(i,s);if(a!=null){const l=bA(a),c=l.path,d=l.queryId,m=Xn(c,e),g=new ga(uA(d),m,t);return RA(i,c,g)}else return[]}function gD(i,e,t,s){const a=wA(i,s);if(a){const l=bA(a),c=l.path,d=l.queryId,m=Xn(c,e),g=at.fromObject(t),E=new Lu(uA(d),m,g);return RA(i,c,E)}else return[]}function TA(i,e,t){const a=i.pendingWriteTree_,l=i.syncPointTree_.findOnPath(e,(c,d)=>{const m=Xn(c,e),g=Lg(d,m);if(g)return g});return mA(a,e,l,t,!0)}function xf(i,e){return SA(e,i.syncPointTree_,null,dA(i.pendingWriteTree_,nt()))}function SA(i,e,t,s){if(Ve(i.path))return AA(i,e,t,s);{const a=e.get(nt());t==null&&a!=null&&(t=Lg(a,nt()));let l=[];const c=Be(i.path),d=i.operationForChild(c),m=e.children.get(c);if(m&&d){const g=t?t.getImmediateChild(c):null,E=_A(s,c);l=l.concat(SA(d,m,g,E))}return a&&(l=l.concat(xg(a,i,s,t))),l}}function AA(i,e,t,s){const a=e.get(nt());t==null&&a!=null&&(t=Lg(a,nt()));let l=[];return e.children.inorderTraversal((c,d)=>{const m=t?t.getImmediateChild(c):null,g=_A(s,c),E=i.operationForChild(c);E&&(l=l.concat(AA(E,d,m,g)))}),a&&(l=l.concat(xg(a,i,s,t))),l}function wA(i,e){return i.tagToQueryMap.get(e)}function bA(i){const e=i.indexOf("$");return re(e!==-1&&e<i.length-1,"Bad queryKey."),{queryId:i.substr(e+1),path:new ct(i.substr(0,e))}}function RA(i,e,t){const s=i.syncPointTree_.get(e);re(s,"Missing sync point for query tag that we're tracking");const a=dA(i.pendingWriteTree_,e);return xg(s,t,a,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ug(t)}node(){return this.node_}}class zg{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Kt(this.path_,e);return new zg(this.syncTree_,t)}node(){return TA(this.syncTree_,this.path_)}}const _D=function(i){return i=i||{},i.timestamp=i.timestamp||new Date().getTime(),i},jT=function(i,e,t){if(!i||typeof i!="object")return i;if(re(".sv"in i,"Unexpected leaf node or priority contents"),typeof i[".sv"]=="string")return yD(i[".sv"],e,t);if(typeof i[".sv"]=="object")return vD(i[".sv"],e);re(!1,"Unexpected server value: "+JSON.stringify(i,null,2))},yD=function(i,e,t){switch(i){case"timestamp":return t.timestamp;default:re(!1,"Unexpected server value: "+i)}},vD=function(i,e,t){i.hasOwnProperty("increment")||re(!1,"Unexpected server value: "+JSON.stringify(i,null,2));const s=i.increment;typeof s!="number"&&re(!1,"Unexpected increment value: "+s);const a=e.node();if(re(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return s;const c=a.getValue();return typeof c!="number"?s:c+s},ED=function(i,e,t,s){return Bg(e,new zg(t,i),s)},TD=function(i,e,t){return Bg(i,new Ug(e),t)};function Bg(i,e,t){const s=i.getPriority().val(),a=jT(s,e.getImmediateChild(".priority"),t);let l;if(i.isLeafNode()){const c=i,d=jT(c.getValue(),e,t);return d!==c.getValue()||a!==c.getPriority().val()?new Ht(d,cn(a)):i}else{const c=i;return l=c,a!==c.getPriority().val()&&(l=l.updatePriority(new Ht(a))),c.forEachChild(fn,(d,m)=>{const g=Bg(m,e.getImmediateChild(d),t);g!==m&&(l=l.updateImmediateChild(d,g))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function qg(i,e){let t=e instanceof ct?e:new ct(e),s=i,a=Be(t);for(;a!==null;){const l=zo(s.node.children,a)||{children:{},childCount:0};s=new Fg(a,s,l),t=ot(t),a=Be(t)}return s}function Xo(i){return i.node.value}function CA(i,e){i.node.value=e,Qm(i)}function IA(i){return i.node.childCount>0}function SD(i){return Xo(i)===void 0&&!IA(i)}function Lf(i,e){$n(i.node.children,(t,s)=>{e(new Fg(t,i,s))})}function NA(i,e,t,s){t&&e(i),Lf(i,a=>{NA(a,e,!0)})}function AD(i,e,t){let s=i.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ju(i){return new ct(i.parent===null?i.name:Ju(i.parent)+"/"+i.name)}function Qm(i){i.parent!==null&&wD(i.parent,i.name,i)}function wD(i,e,t){const s=SD(t),a=As(i.node.children,e);s&&a?(delete i.node.children[e],i.node.childCount--,Qm(i)):!s&&!a&&(i.node.children[e]=t.node,i.node.childCount++,Qm(i))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bD=/[\[\].#$\/\u0000-\u001F\u007F]/,RD=/[\[\].#$\u0000-\u001F\u007F]/,Am=10*1024*1024,DA=function(i){return typeof i=="string"&&i.length!==0&&!bD.test(i)},CD=function(i){return typeof i=="string"&&i.length!==0&&!RD.test(i)},ID=function(i){return i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),CD(i)},OA=function(i,e,t){const s=t instanceof ct?new oN(t,i):t;if(e===void 0)throw new Error(i+"contains undefined "+ca(s));if(typeof e=="function")throw new Error(i+"contains a function "+ca(s)+" with contents = "+e.toString());if(NS(e))throw new Error(i+"contains "+e.toString()+" "+ca(s));if(typeof e=="string"&&e.length>Am/3&&Of(e)>Am)throw new Error(i+"contains a string greater than "+Am+" utf8 bytes "+ca(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,l=!1;if($n(e,(c,d)=>{if(c===".value")a=!0;else if(c!==".priority"&&c!==".sv"&&(l=!0,!DA(c)))throw new Error(i+" contains an invalid key ("+c+") "+ca(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);lN(s,c),OA(i,d,s),uN(s)}),a&&l)throw new Error(i+' contains ".value" child '+ca(s)+" in addition to actual children.")}},ND=function(i,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!DA(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!ID(t))throw new Error(aC(i,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function OD(i,e){let t=null;for(let s=0;s<e.length;s++){const a=e[s],l=a.getPath();t!==null&&!JS(l,t.path)&&(i.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(a)}t&&i.eventLists_.push(t)}function ba(i,e,t){OD(i,t),MD(i,s=>ri(s,e)||ri(e,s))}function MD(i,e){i.recursionDepth_++;let t=!0;for(let s=0;s<i.eventLists_.length;s++){const a=i.eventLists_[s];if(a){const l=a.path;e(l)?(kD(i.eventLists_[s]),i.eventLists_[s]=null):t=!1}}t&&(i.eventLists_=[]),i.recursionDepth_--}function kD(i){for(let e=0;e<i.events.length;e++){const t=i.events[e];if(t!==null){i.events[e]=null;const s=t.getEventRunner();bu&&un("event: "+t.toString()),$u(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PD="repo_interrupt",VD=25;class xD{constructor(e,t,s,a){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new DD,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=lf(),this.transactionQueueTree_=new Fg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function LD(i,e,t){if(i.stats_=Ig(i.repoInfo_),i.forceRestClient_||MI())i.server_=new of(i.repoInfo_,(s,a,l,c)=>{HT(i,s,a,l,c)},i.authTokenProvider_,i.appCheckProvider_),setTimeout(()=>GT(i,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{en(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}i.persistentConnection_=new ms(i.repoInfo_,e,(s,a,l,c)=>{HT(i,s,a,l,c)},s=>{GT(i,s)},s=>{zD(i,s)},i.authTokenProvider_,i.appCheckProvider_,t),i.server_=i.persistentConnection_}i.authTokenProvider_.addTokenChangeListener(s=>{i.server_.refreshAuthToken(s)}),i.appCheckProvider_.addTokenChangeListener(s=>{i.server_.refreshAppCheckToken(s.token)}),i.statsReporter_=LI(i.repoInfo_,()=>new xN(i.stats_,i.server_)),i.infoData_=new ON,i.infoSyncTree_=new qT({startListening:(s,a,l,c)=>{let d=[];const m=i.infoData_.getNode(s._path);return m.isEmpty()||(d=Vf(i.infoSyncTree_,s._path,m),setTimeout(()=>{c("ok")},0)),d},stopListening:()=>{}}),jg(i,"connected",!1),i.serverSyncTree_=new qT({startListening:(s,a,l,c)=>(i.server_.listen(s,l,a,(d,m)=>{const g=c(d,m);ba(i.eventQueue_,s._path,g)}),[]),stopListening:(s,a)=>{i.server_.unlisten(s,a)}})}function UD(i){const t=i.infoData_.getNode(new ct(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function MA(i){return _D({timestamp:UD(i)})}function HT(i,e,t,s,a){i.dataUpdateCount++;const l=new ct(e);t=i.interceptServerDataCallback_?i.interceptServerDataCallback_(e,t):t;let c=[];if(a)if(s){const m=tf(t,g=>cn(g));c=gD(i.serverSyncTree_,l,m,a)}else{const m=cn(t);c=mD(i.serverSyncTree_,l,m,a)}else if(s){const m=tf(t,g=>cn(g));c=pD(i.serverSyncTree_,l,m)}else{const m=cn(t);c=Vf(i.serverSyncTree_,l,m)}let d=l;c.length>0&&(d=Gg(i,l)),ba(i.eventQueue_,d,c)}function GT(i,e){jg(i,"connected",e),e===!1&&FD(i)}function zD(i,e){$n(e,(t,s)=>{jg(i,t,s)})}function jg(i,e,t){const s=new ct("/.info/"+e),a=cn(t);i.infoData_.updateSnapshot(s,a);const l=Vf(i.infoSyncTree_,s,a);ba(i.eventQueue_,s,l)}function BD(i){return i.nextWriteId_++}function FD(i){kA(i,"onDisconnectEvents");const e=MA(i),t=lf();Fm(i.onDisconnect_,nt(),(a,l)=>{const c=ED(a,l,i.serverSyncTree_,e);aA(t,a,c)});let s=[];Fm(t,nt(),(a,l)=>{s=s.concat(Vf(i.serverSyncTree_,a,l));const c=GD(i,a);Gg(i,c)}),i.onDisconnect_=lf(),ba(i.eventQueue_,nt(),s)}function qD(i){i.persistentConnection_&&i.persistentConnection_.interrupt(PD)}function kA(i,...e){let t="";i.persistentConnection_&&(t=i.persistentConnection_.id+":"),un(t,...e)}function PA(i,e,t){return TA(i.serverSyncTree_,e,t)||Ke.EMPTY_NODE}function Hg(i,e=i.transactionQueueTree_){if(e||Uf(i,e),Xo(e)){const t=xA(i,e);re(t.length>0,"Sending zero length transaction queue"),t.every(a=>a.status===0)&&jD(i,Ju(e),t)}else IA(e)&&Lf(e,t=>{Hg(i,t)})}function jD(i,e,t){const s=t.map(g=>g.currentWriteId),a=PA(i,e,s);let l=a;const c=a.hash();for(let g=0;g<t.length;g++){const E=t[g];re(E.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),E.status=1,E.retryCount++;const T=Xn(e,E.path);l=l.updateChild(T,E.currentOutputSnapshotRaw)}const d=l.val(!0),m=e;i.server_.put(m.toString(),d,g=>{kA(i,"transaction put response",{path:m.toString(),status:g});let E=[];if(g==="ok"){const T=[];for(let w=0;w<t.length;w++)t[w].status=2,E=E.concat(Io(i.serverSyncTree_,t[w].currentWriteId)),t[w].onComplete&&T.push(()=>t[w].onComplete(null,!0,t[w].currentOutputSnapshotResolved)),t[w].unwatcher();Uf(i,qg(i.transactionQueueTree_,e)),Hg(i,i.transactionQueueTree_),ba(i.eventQueue_,e,E);for(let w=0;w<T.length;w++)$u(T[w])}else{if(g==="datastale")for(let T=0;T<t.length;T++)t[T].status===3?t[T].status=4:t[T].status=0;else{Vn("transaction at "+m.toString()+" failed: "+g);for(let T=0;T<t.length;T++)t[T].status=4,t[T].abortReason=g}Gg(i,e)}},c)}function Gg(i,e){const t=VA(i,e),s=Ju(t),a=xA(i,t);return HD(i,a,s),s}function HD(i,e,t){if(e.length===0)return;const s=[];let a=[];const c=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const m=e[d],g=Xn(t,m.path);let E=!1,T;if(re(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),m.status===4)E=!0,T=m.abortReason,a=a.concat(Io(i.serverSyncTree_,m.currentWriteId,!0));else if(m.status===0)if(m.retryCount>=VD)E=!0,T="maxretry",a=a.concat(Io(i.serverSyncTree_,m.currentWriteId,!0));else{const w=PA(i,m.path,c);m.currentInputSnapshot=w;const x=e[d].update(w.val());if(x!==void 0){OA("transaction failed: Data returned ",x,m.path);let F=cn(x);typeof x=="object"&&x!=null&&As(x,".priority")||(F=F.updatePriority(w.getPriority()));const H=m.currentWriteId,ae=MA(i),le=TD(F,w,ae);m.currentOutputSnapshotRaw=F,m.currentOutputSnapshotResolved=le,m.currentWriteId=BD(i),c.splice(c.indexOf(H),1),a=a.concat(dD(i.serverSyncTree_,m.path,le,m.currentWriteId,m.applyLocally)),a=a.concat(Io(i.serverSyncTree_,H,!0))}else E=!0,T="nodata",a=a.concat(Io(i.serverSyncTree_,m.currentWriteId,!0))}ba(i.eventQueue_,t,a),a=[],E&&(e[d].status=2,function(w){setTimeout(w,Math.floor(0))}(e[d].unwatcher),e[d].onComplete&&(T==="nodata"?s.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):s.push(()=>e[d].onComplete(new Error(T),!1,null))))}Uf(i,i.transactionQueueTree_);for(let d=0;d<s.length;d++)$u(s[d]);Hg(i,i.transactionQueueTree_)}function VA(i,e){let t,s=i.transactionQueueTree_;for(t=Be(e);t!==null&&Xo(s)===void 0;)s=qg(s,t),e=ot(e),t=Be(e);return s}function xA(i,e){const t=[];return LA(i,e,t),t.sort((s,a)=>s.order-a.order),t}function LA(i,e,t){const s=Xo(e);if(s)for(let a=0;a<s.length;a++)t.push(s[a]);Lf(e,a=>{LA(i,a,t)})}function Uf(i,e){const t=Xo(e);if(t){let s=0;for(let a=0;a<t.length;a++)t[a].status!==2&&(t[s]=t[a],s++);t.length=s,CA(e,t.length>0?t:void 0)}Lf(e,s=>{Uf(i,s)})}function GD(i,e){const t=Ju(VA(i,e)),s=qg(i.transactionQueueTree_,e);return AD(s,a=>{wm(i,a)}),wm(i,s),NA(s,a=>{wm(i,a)}),t}function wm(i,e){const t=Xo(e);if(t){const s=[];let a=[],l=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(re(l===c-1,"All SENT items should be at beginning of queue."),l=c,t[c].status=3,t[c].abortReason="set"):(re(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),a=a.concat(Io(i.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&s.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));l===-1?CA(e,void 0):t.length=l+1,ba(i.eventQueue_,Ju(e),a);for(let c=0;c<s.length;c++)$u(s[c])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KD(i){let e="";const t=i.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let a=t[s];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function YD(i){const e={};i.charAt(0)==="?"&&(i=i.substring(1));for(const t of i.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Vn(`Invalid query segment '${t}' in query '${i}'`)}return e}const KT=function(i,e){const t=QD(i),s=t.namespace;t.domain==="firebase.com"&&ys(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&ys("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||wI();const a=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new FS(t.host,t.secure,s,a,e,"",s!==t.subdomain),path:new ct(t.pathString)}},QD=function(i){let e="",t="",s="",a="",l="",c=!0,d="https",m=443;if(typeof i=="string"){let g=i.indexOf("//");g>=0&&(d=i.substring(0,g-1),i=i.substring(g+2));let E=i.indexOf("/");E===-1&&(E=i.length);let T=i.indexOf("?");T===-1&&(T=i.length),e=i.substring(0,Math.min(E,T)),E<T&&(a=KD(i.substring(E,T)));const w=YD(i.substring(Math.min(i.length,T)));g=e.indexOf(":"),g>=0?(c=d==="https"||d==="wss",m=parseInt(e.substring(g+1),10)):g=e.length;const x=e.slice(0,g);if(x.toLowerCase()==="localhost")t="localhost";else if(x.split(".").length<=2)t=x;else{const F=e.indexOf(".");s=e.substring(0,F).toLowerCase(),t=e.substring(F+1),l=s}"ns"in w&&(l=w.ns)}return{host:e,port:m,domain:t,subdomain:s,secure:c,scheme:d,pathString:a,namespace:l}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e,t,s,a){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=a}get key(){return Ve(this._path)?null:XS(this._path)}get ref(){return new $o(this._repo,this._path)}get _queryIdentifier(){const e=OT(this._queryParams),t=Rg(e);return t==="{}"?"default":t}get _queryObject(){return OT(this._queryParams)}isEqual(e){if(e=Lt(e),!(e instanceof Kg))return!1;const t=this._repo===e._repo,s=JS(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return t&&s&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+aN(this._path)}}class $o extends Kg{constructor(e,t){super(e,t,new Mg,!1)}get parent(){const e=ZS(this._path);return e===null?null:new $o(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}hD($o);fD($o);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WD="FIREBASE_DATABASE_EMULATOR_HOST",Wm={};let XD=!1;function $D(i,e,t,s){const a=e.lastIndexOf(":"),l=e.substring(0,a),c=Tr(l);i.repoInfo_=new FS(e,c,i.repoInfo_.namespace,i.repoInfo_.webSocketOnly,i.repoInfo_.nodeAdmin,i.repoInfo_.persistenceKey,i.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(i.authTokenProvider_=s)}function ZD(i,e,t,s,a){let l=s||i.options.databaseURL;l===void 0&&(i.options.projectId||ys("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),un("Using default host for project ",i.options.projectId),l=`${i.options.projectId}-default-rtdb.firebaseio.com`);let c=KT(l,a),d=c.repoInfo,m;typeof process<"u"&&fT&&(m=fT[WD]),m?(l=`http://${m}?ns=${d.namespace}`,c=KT(l,a),d=c.repoInfo):c.repoInfo.secure;const g=new PI(i.name,i.options,e);ND("Invalid Firebase Database URL",c),Ve(c.path)||ys("Database URL must point to the root of a Firebase Database (not including a child path).");const E=eO(d,i,g,new kI(i,t));return new tO(E,i)}function JD(i,e){const t=Wm[e];(!t||t[i.key]!==i)&&ys(`Database ${e}(${i.repoInfo_}) has already been deleted.`),qD(i),delete t[i.key]}function eO(i,e,t,s){let a=Wm[e.name];a||(a={},Wm[e.name]=a);let l=a[i.toURLString()];return l&&ys("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new xD(i,XD,t,s),a[i.toURLString()]=l,l}class tO{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(LD(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new $o(this._repo,nt())),this._rootInternal}_delete(){return this._rootInternal!==null&&(JD(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ys("Cannot call "+e+" on a deleted database.")}}function nO(i=bg(),e){const t=kf(i,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=mS("database");s&&iO(t,...s)}return t}function iO(i,e,t,s={}){i=Lt(i),i._checkNotDeleted("useEmulator");const a=`${e}:${t}`,l=i._repoInternal;if(i._instanceStarted){if(a===i._repoInternal.repoInfo_.host&&hr(s,l.repoInfo_.emulatorOptions))return;ys("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let c;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&ys('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),c=new Fh(Fh.OWNER);else if(s.mockUserToken){const d=typeof s.mockUserToken=="string"?s.mockUserToken:yS(s.mockUserToken,i.app.options.projectId);c=new Fh(d)}Tr(e)&&(Tg(e),Sg("Database",!0)),$D(l,a,s,c)}/**
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
 */function sO(i){yI(Aa),pa(new fr("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return ZD(s,a,l,t)},"PUBLIC").setMultipleInstances(!0)),Oi(dT,pT,i),Oi(dT,pT,"esm2017")}ms.prototype.simpleListen=function(i,e){this.sendRequest("q",{p:i},e)};ms.prototype.echo=function(i,e){this.sendRequest("echo",{d:i},e)};sO();var YT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var lr,UA;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,b){function C(){}C.prototype=b.prototype,N.D=b.prototype,N.prototype=new C,N.prototype.constructor=N,N.C=function(M,k,V){for(var I=Array(arguments.length-2),Yt=2;Yt<arguments.length;Yt++)I[Yt-2]=arguments[Yt];return b.prototype[k].apply(M,I)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(N,b,C){C||(C=0);var M=Array(16);if(typeof b=="string")for(var k=0;16>k;++k)M[k]=b.charCodeAt(C++)|b.charCodeAt(C++)<<8|b.charCodeAt(C++)<<16|b.charCodeAt(C++)<<24;else for(k=0;16>k;++k)M[k]=b[C++]|b[C++]<<8|b[C++]<<16|b[C++]<<24;b=N.g[0],C=N.g[1],k=N.g[2];var V=N.g[3],I=b+(V^C&(k^V))+M[0]+3614090360&4294967295;b=C+(I<<7&4294967295|I>>>25),I=V+(k^b&(C^k))+M[1]+3905402710&4294967295,V=b+(I<<12&4294967295|I>>>20),I=k+(C^V&(b^C))+M[2]+606105819&4294967295,k=V+(I<<17&4294967295|I>>>15),I=C+(b^k&(V^b))+M[3]+3250441966&4294967295,C=k+(I<<22&4294967295|I>>>10),I=b+(V^C&(k^V))+M[4]+4118548399&4294967295,b=C+(I<<7&4294967295|I>>>25),I=V+(k^b&(C^k))+M[5]+1200080426&4294967295,V=b+(I<<12&4294967295|I>>>20),I=k+(C^V&(b^C))+M[6]+2821735955&4294967295,k=V+(I<<17&4294967295|I>>>15),I=C+(b^k&(V^b))+M[7]+4249261313&4294967295,C=k+(I<<22&4294967295|I>>>10),I=b+(V^C&(k^V))+M[8]+1770035416&4294967295,b=C+(I<<7&4294967295|I>>>25),I=V+(k^b&(C^k))+M[9]+2336552879&4294967295,V=b+(I<<12&4294967295|I>>>20),I=k+(C^V&(b^C))+M[10]+4294925233&4294967295,k=V+(I<<17&4294967295|I>>>15),I=C+(b^k&(V^b))+M[11]+2304563134&4294967295,C=k+(I<<22&4294967295|I>>>10),I=b+(V^C&(k^V))+M[12]+1804603682&4294967295,b=C+(I<<7&4294967295|I>>>25),I=V+(k^b&(C^k))+M[13]+4254626195&4294967295,V=b+(I<<12&4294967295|I>>>20),I=k+(C^V&(b^C))+M[14]+2792965006&4294967295,k=V+(I<<17&4294967295|I>>>15),I=C+(b^k&(V^b))+M[15]+1236535329&4294967295,C=k+(I<<22&4294967295|I>>>10),I=b+(k^V&(C^k))+M[1]+4129170786&4294967295,b=C+(I<<5&4294967295|I>>>27),I=V+(C^k&(b^C))+M[6]+3225465664&4294967295,V=b+(I<<9&4294967295|I>>>23),I=k+(b^C&(V^b))+M[11]+643717713&4294967295,k=V+(I<<14&4294967295|I>>>18),I=C+(V^b&(k^V))+M[0]+3921069994&4294967295,C=k+(I<<20&4294967295|I>>>12),I=b+(k^V&(C^k))+M[5]+3593408605&4294967295,b=C+(I<<5&4294967295|I>>>27),I=V+(C^k&(b^C))+M[10]+38016083&4294967295,V=b+(I<<9&4294967295|I>>>23),I=k+(b^C&(V^b))+M[15]+3634488961&4294967295,k=V+(I<<14&4294967295|I>>>18),I=C+(V^b&(k^V))+M[4]+3889429448&4294967295,C=k+(I<<20&4294967295|I>>>12),I=b+(k^V&(C^k))+M[9]+568446438&4294967295,b=C+(I<<5&4294967295|I>>>27),I=V+(C^k&(b^C))+M[14]+3275163606&4294967295,V=b+(I<<9&4294967295|I>>>23),I=k+(b^C&(V^b))+M[3]+4107603335&4294967295,k=V+(I<<14&4294967295|I>>>18),I=C+(V^b&(k^V))+M[8]+1163531501&4294967295,C=k+(I<<20&4294967295|I>>>12),I=b+(k^V&(C^k))+M[13]+2850285829&4294967295,b=C+(I<<5&4294967295|I>>>27),I=V+(C^k&(b^C))+M[2]+4243563512&4294967295,V=b+(I<<9&4294967295|I>>>23),I=k+(b^C&(V^b))+M[7]+1735328473&4294967295,k=V+(I<<14&4294967295|I>>>18),I=C+(V^b&(k^V))+M[12]+2368359562&4294967295,C=k+(I<<20&4294967295|I>>>12),I=b+(C^k^V)+M[5]+4294588738&4294967295,b=C+(I<<4&4294967295|I>>>28),I=V+(b^C^k)+M[8]+2272392833&4294967295,V=b+(I<<11&4294967295|I>>>21),I=k+(V^b^C)+M[11]+1839030562&4294967295,k=V+(I<<16&4294967295|I>>>16),I=C+(k^V^b)+M[14]+4259657740&4294967295,C=k+(I<<23&4294967295|I>>>9),I=b+(C^k^V)+M[1]+2763975236&4294967295,b=C+(I<<4&4294967295|I>>>28),I=V+(b^C^k)+M[4]+1272893353&4294967295,V=b+(I<<11&4294967295|I>>>21),I=k+(V^b^C)+M[7]+4139469664&4294967295,k=V+(I<<16&4294967295|I>>>16),I=C+(k^V^b)+M[10]+3200236656&4294967295,C=k+(I<<23&4294967295|I>>>9),I=b+(C^k^V)+M[13]+681279174&4294967295,b=C+(I<<4&4294967295|I>>>28),I=V+(b^C^k)+M[0]+3936430074&4294967295,V=b+(I<<11&4294967295|I>>>21),I=k+(V^b^C)+M[3]+3572445317&4294967295,k=V+(I<<16&4294967295|I>>>16),I=C+(k^V^b)+M[6]+76029189&4294967295,C=k+(I<<23&4294967295|I>>>9),I=b+(C^k^V)+M[9]+3654602809&4294967295,b=C+(I<<4&4294967295|I>>>28),I=V+(b^C^k)+M[12]+3873151461&4294967295,V=b+(I<<11&4294967295|I>>>21),I=k+(V^b^C)+M[15]+530742520&4294967295,k=V+(I<<16&4294967295|I>>>16),I=C+(k^V^b)+M[2]+3299628645&4294967295,C=k+(I<<23&4294967295|I>>>9),I=b+(k^(C|~V))+M[0]+4096336452&4294967295,b=C+(I<<6&4294967295|I>>>26),I=V+(C^(b|~k))+M[7]+1126891415&4294967295,V=b+(I<<10&4294967295|I>>>22),I=k+(b^(V|~C))+M[14]+2878612391&4294967295,k=V+(I<<15&4294967295|I>>>17),I=C+(V^(k|~b))+M[5]+4237533241&4294967295,C=k+(I<<21&4294967295|I>>>11),I=b+(k^(C|~V))+M[12]+1700485571&4294967295,b=C+(I<<6&4294967295|I>>>26),I=V+(C^(b|~k))+M[3]+2399980690&4294967295,V=b+(I<<10&4294967295|I>>>22),I=k+(b^(V|~C))+M[10]+4293915773&4294967295,k=V+(I<<15&4294967295|I>>>17),I=C+(V^(k|~b))+M[1]+2240044497&4294967295,C=k+(I<<21&4294967295|I>>>11),I=b+(k^(C|~V))+M[8]+1873313359&4294967295,b=C+(I<<6&4294967295|I>>>26),I=V+(C^(b|~k))+M[15]+4264355552&4294967295,V=b+(I<<10&4294967295|I>>>22),I=k+(b^(V|~C))+M[6]+2734768916&4294967295,k=V+(I<<15&4294967295|I>>>17),I=C+(V^(k|~b))+M[13]+1309151649&4294967295,C=k+(I<<21&4294967295|I>>>11),I=b+(k^(C|~V))+M[4]+4149444226&4294967295,b=C+(I<<6&4294967295|I>>>26),I=V+(C^(b|~k))+M[11]+3174756917&4294967295,V=b+(I<<10&4294967295|I>>>22),I=k+(b^(V|~C))+M[2]+718787259&4294967295,k=V+(I<<15&4294967295|I>>>17),I=C+(V^(k|~b))+M[9]+3951481745&4294967295,N.g[0]=N.g[0]+b&4294967295,N.g[1]=N.g[1]+(k+(I<<21&4294967295|I>>>11))&4294967295,N.g[2]=N.g[2]+k&4294967295,N.g[3]=N.g[3]+V&4294967295}s.prototype.u=function(N,b){b===void 0&&(b=N.length);for(var C=b-this.blockSize,M=this.B,k=this.h,V=0;V<b;){if(k==0)for(;V<=C;)a(this,N,V),V+=this.blockSize;if(typeof N=="string"){for(;V<b;)if(M[k++]=N.charCodeAt(V++),k==this.blockSize){a(this,M),k=0;break}}else for(;V<b;)if(M[k++]=N[V++],k==this.blockSize){a(this,M),k=0;break}}this.h=k,this.o+=b},s.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var b=1;b<N.length-8;++b)N[b]=0;var C=8*this.o;for(b=N.length-8;b<N.length;++b)N[b]=C&255,C/=256;for(this.u(N),N=Array(16),b=C=0;4>b;++b)for(var M=0;32>M;M+=8)N[C++]=this.g[b]>>>M&255;return N};function l(N,b){var C=d;return Object.prototype.hasOwnProperty.call(C,N)?C[N]:C[N]=b(N)}function c(N,b){this.h=b;for(var C=[],M=!0,k=N.length-1;0<=k;k--){var V=N[k]|0;M&&V==b||(C[k]=V,M=!1)}this.g=C}var d={};function m(N){return-128<=N&&128>N?l(N,function(b){return new c([b|0],0>b?-1:0)}):new c([N|0],0>N?-1:0)}function g(N){if(isNaN(N)||!isFinite(N))return T;if(0>N)return H(g(-N));for(var b=[],C=1,M=0;N>=C;M++)b[M]=N/C|0,C*=4294967296;return new c(b,0)}function E(N,b){if(N.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(N.charAt(0)=="-")return H(E(N.substring(1),b));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=g(Math.pow(b,8)),M=T,k=0;k<N.length;k+=8){var V=Math.min(8,N.length-k),I=parseInt(N.substring(k,k+V),b);8>V?(V=g(Math.pow(b,V)),M=M.j(V).add(g(I))):(M=M.j(C),M=M.add(g(I)))}return M}var T=m(0),w=m(1),x=m(16777216);i=c.prototype,i.m=function(){if($(this))return-H(this).m();for(var N=0,b=1,C=0;C<this.g.length;C++){var M=this.i(C);N+=(0<=M?M:4294967296+M)*b,b*=4294967296}return N},i.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(F(this))return"0";if($(this))return"-"+H(this).toString(N);for(var b=g(Math.pow(N,6)),C=this,M="";;){var k=ye(C,b).g;C=ae(C,k.j(b));var V=((0<C.g.length?C.g[0]:C.h)>>>0).toString(N);if(C=k,F(C))return V+M;for(;6>V.length;)V="0"+V;M=V+M}},i.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function F(N){if(N.h!=0)return!1;for(var b=0;b<N.g.length;b++)if(N.g[b]!=0)return!1;return!0}function $(N){return N.h==-1}i.l=function(N){return N=ae(this,N),$(N)?-1:F(N)?0:1};function H(N){for(var b=N.g.length,C=[],M=0;M<b;M++)C[M]=~N.g[M];return new c(C,~N.h).add(w)}i.abs=function(){return $(this)?H(this):this},i.add=function(N){for(var b=Math.max(this.g.length,N.g.length),C=[],M=0,k=0;k<=b;k++){var V=M+(this.i(k)&65535)+(N.i(k)&65535),I=(V>>>16)+(this.i(k)>>>16)+(N.i(k)>>>16);M=I>>>16,V&=65535,I&=65535,C[k]=I<<16|V}return new c(C,C[C.length-1]&-2147483648?-1:0)};function ae(N,b){return N.add(H(b))}i.j=function(N){if(F(this)||F(N))return T;if($(this))return $(N)?H(this).j(H(N)):H(H(this).j(N));if($(N))return H(this.j(H(N)));if(0>this.l(x)&&0>N.l(x))return g(this.m()*N.m());for(var b=this.g.length+N.g.length,C=[],M=0;M<2*b;M++)C[M]=0;for(M=0;M<this.g.length;M++)for(var k=0;k<N.g.length;k++){var V=this.i(M)>>>16,I=this.i(M)&65535,Yt=N.i(k)>>>16,mt=N.i(k)&65535;C[2*M+2*k]+=I*mt,le(C,2*M+2*k),C[2*M+2*k+1]+=V*mt,le(C,2*M+2*k+1),C[2*M+2*k+1]+=I*Yt,le(C,2*M+2*k+1),C[2*M+2*k+2]+=V*Yt,le(C,2*M+2*k+2)}for(M=0;M<b;M++)C[M]=C[2*M+1]<<16|C[2*M];for(M=b;M<2*b;M++)C[M]=0;return new c(C,0)};function le(N,b){for(;(N[b]&65535)!=N[b];)N[b+1]+=N[b]>>>16,N[b]&=65535,b++}function te(N,b){this.g=N,this.h=b}function ye(N,b){if(F(b))throw Error("division by zero");if(F(N))return new te(T,T);if($(N))return b=ye(H(N),b),new te(H(b.g),H(b.h));if($(b))return b=ye(N,H(b)),new te(H(b.g),b.h);if(30<N.g.length){if($(N)||$(b))throw Error("slowDivide_ only works with positive integers.");for(var C=w,M=b;0>=M.l(N);)C=se(C),M=se(M);var k=he(C,1),V=he(M,1);for(M=he(M,2),C=he(C,2);!F(M);){var I=V.add(M);0>=I.l(N)&&(k=k.add(C),V=I),M=he(M,1),C=he(C,1)}return b=ae(N,k.j(b)),new te(k,b)}for(k=T;0<=N.l(b);){for(C=Math.max(1,Math.floor(N.m()/b.m())),M=Math.ceil(Math.log(C)/Math.LN2),M=48>=M?1:Math.pow(2,M-48),V=g(C),I=V.j(b);$(I)||0<I.l(N);)C-=M,V=g(C),I=V.j(b);F(V)&&(V=w),k=k.add(V),N=ae(N,I)}return new te(k,N)}i.A=function(N){return ye(this,N).h},i.and=function(N){for(var b=Math.max(this.g.length,N.g.length),C=[],M=0;M<b;M++)C[M]=this.i(M)&N.i(M);return new c(C,this.h&N.h)},i.or=function(N){for(var b=Math.max(this.g.length,N.g.length),C=[],M=0;M<b;M++)C[M]=this.i(M)|N.i(M);return new c(C,this.h|N.h)},i.xor=function(N){for(var b=Math.max(this.g.length,N.g.length),C=[],M=0;M<b;M++)C[M]=this.i(M)^N.i(M);return new c(C,this.h^N.h)};function se(N){for(var b=N.g.length+1,C=[],M=0;M<b;M++)C[M]=N.i(M)<<1|N.i(M-1)>>>31;return new c(C,N.h)}function he(N,b){var C=b>>5;b%=32;for(var M=N.g.length-C,k=[],V=0;V<M;V++)k[V]=0<b?N.i(V+C)>>>b|N.i(V+C+1)<<32-b:N.i(V+C);return new c(k,N.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,UA=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=E,lr=c}).apply(typeof YT<"u"?YT:typeof self<"u"?self:typeof window<"u"?window:{});var Vh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zA,Eu,BA,jh,Xm,FA,qA,jA;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,y){return h==Array.prototype||h==Object.prototype||(h[_]=y.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vh=="object"&&Vh];for(var _=0;_<h.length;++_){var y=h[_];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function a(h,_){if(_)e:{var y=s;h=h.split(".");for(var A=0;A<h.length-1;A++){var L=h[A];if(!(L in y))break e;y=y[L]}h=h[h.length-1],A=y[h],_=_(A),_!=A&&_!=null&&e(y,h,{configurable:!0,writable:!0,value:_})}}function l(h,_){h instanceof String&&(h+="");var y=0,A=!1,L={next:function(){if(!A&&y<h.length){var j=y++;return{value:_(j,h[j]),done:!1}}return A=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}a("Array.prototype.values",function(h){return h||function(){return l(this,function(_,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function m(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function g(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function E(h,_,y){return h.call.apply(h.bind,arguments)}function T(h,_,y){if(!h)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,A),h.apply(_,L)}}return function(){return h.apply(_,arguments)}}function w(h,_,y){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:T,w.apply(null,arguments)}function x(h,_){var y=Array.prototype.slice.call(arguments,1);return function(){var A=y.slice();return A.push.apply(A,arguments),h.apply(this,A)}}function F(h,_){function y(){}y.prototype=_.prototype,h.aa=_.prototype,h.prototype=new y,h.prototype.constructor=h,h.Qb=function(A,L,j){for(var ee=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)ee[xe-2]=arguments[xe];return _.prototype[L].apply(A,ee)}}function $(h){const _=h.length;if(0<_){const y=Array(_);for(let A=0;A<_;A++)y[A]=h[A];return y}return[]}function H(h,_){for(let y=1;y<arguments.length;y++){const A=arguments[y];if(m(A)){const L=h.length||0,j=A.length||0;h.length=L+j;for(let ee=0;ee<j;ee++)h[L+ee]=A[ee]}else h.push(A)}}class ae{constructor(_,y){this.i=_,this.j=y,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function le(h){return/^[\s\xa0]*$/.test(h)}function te(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function ye(h){return ye[" "](h),h}ye[" "]=function(){};var se=te().indexOf("Gecko")!=-1&&!(te().toLowerCase().indexOf("webkit")!=-1&&te().indexOf("Edge")==-1)&&!(te().indexOf("Trident")!=-1||te().indexOf("MSIE")!=-1)&&te().indexOf("Edge")==-1;function he(h,_,y){for(const A in h)_.call(y,h[A],A,h)}function N(h,_){for(const y in h)_.call(void 0,h[y],y,h)}function b(h){const _={};for(const y in h)_[y]=h[y];return _}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function M(h,_){let y,A;for(let L=1;L<arguments.length;L++){A=arguments[L];for(y in A)h[y]=A[y];for(let j=0;j<C.length;j++)y=C[j],Object.prototype.hasOwnProperty.call(A,y)&&(h[y]=A[y])}}function k(h){var _=1;h=h.split(":");const y=[];for(;0<_&&h.length;)y.push(h.shift()),_--;return h.length&&y.push(h.join(":")),y}function V(h){d.setTimeout(()=>{throw h},0)}function I(){var h=je;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class Yt{constructor(){this.h=this.g=null}add(_,y){const A=mt.get();A.set(_,y),this.h?this.h.next=A:this.g=A,this.h=A}}var mt=new ae(()=>new G,h=>h.reset());class G{constructor(){this.next=this.g=this.h=null}set(_,y){this.h=_,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let ne,pe=!1,je=new Yt,D=()=>{const h=d.Promise.resolve(void 0);ne=()=>{h.then(Z)}};var Z=()=>{for(var h;h=I();){try{h.h.call(h.g)}catch(y){V(y)}var _=mt;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}pe=!1};function ie(){this.s=this.s,this.C=this.C}ie.prototype.s=!1,ie.prototype.ma=function(){this.s||(this.s=!0,this.N())},ie.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function J(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}J.prototype.h=function(){this.defaultPrevented=!0};var me=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const y=()=>{};d.addEventListener("test",y,_),d.removeEventListener("test",y,_)}catch{}return h}();function Ne(h,_){if(J.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var y=this.type=h.type,A=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(se){e:{try{ye(_.nodeName);var L=!0;break e}catch{}L=!1}L||(_=null)}}else y=="mouseover"?_=h.fromElement:y=="mouseout"&&(_=h.toElement);this.relatedTarget=_,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:Ae[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&Ne.aa.h.call(this)}}F(Ne,J);var Ae={2:"touch",3:"pen",4:"mouse"};Ne.prototype.h=function(){Ne.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var Ut="closure_listenable_"+(1e6*Math.random()|0),st=0;function hi(h,_,y,A,L){this.listener=h,this.proxy=null,this.src=_,this.type=y,this.capture=!!A,this.ha=L,this.key=++st,this.da=this.fa=!1}function ws(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function Bi(h){this.src=h,this.g={},this.h=0}Bi.prototype.add=function(h,_,y,A,L){var j=h.toString();h=this.g[j],h||(h=this.g[j]=[],this.h++);var ee=Cr(h,_,A,L);return-1<ee?(_=h[ee],y||(_.fa=!1)):(_=new hi(_,this.src,j,!!A,L),_.fa=y,h.push(_)),_};function Rr(h,_){var y=_.type;if(y in h.g){var A=h.g[y],L=Array.prototype.indexOf.call(A,_,void 0),j;(j=0<=L)&&Array.prototype.splice.call(A,L,1),j&&(ws(_),h.g[y].length==0&&(delete h.g[y],h.h--))}}function Cr(h,_,y,A){for(var L=0;L<h.length;++L){var j=h[L];if(!j.da&&j.listener==_&&j.capture==!!y&&j.ha==A)return L}return-1}var Ir="closure_lm_"+(1e6*Math.random()|0),il={};function uc(h,_,y,A,L){if(Array.isArray(_)){for(var j=0;j<_.length;j++)uc(h,_[j],y,A,L);return null}return y=cc(y),h&&h[Ut]?h.K(_,y,g(A)?!!A.capture:!1,L):xn(h,_,y,!1,A,L)}function xn(h,_,y,A,L,j){if(!_)throw Error("Invalid event type");var ee=g(L)?!!L.capture:!!L,xe=Da(h);if(xe||(h[Ir]=xe=new Bi(h)),y=xe.add(_,y,A,ee,j),y.proxy)return y;if(A=od(),y.proxy=A,A.src=h,A.listener=y,h.addEventListener)me||(L=ee),L===void 0&&(L=!1),h.addEventListener(_.toString(),A,L);else if(h.attachEvent)h.attachEvent(Nr(_.toString()),A);else if(h.addListener&&h.removeListener)h.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return y}function od(){function h(y){return _.call(h.src,h.listener,y)}const _=ld;return h}function sl(h,_,y,A,L){if(Array.isArray(_))for(var j=0;j<_.length;j++)sl(h,_[j],y,A,L);else A=g(A)?!!A.capture:!!A,y=cc(y),h&&h[Ut]?(h=h.i,_=String(_).toString(),_ in h.g&&(j=h.g[_],y=Cr(j,y,A,L),-1<y&&(ws(j[y]),Array.prototype.splice.call(j,y,1),j.length==0&&(delete h.g[_],h.h--)))):h&&(h=Da(h))&&(_=h.g[_.toString()],h=-1,_&&(h=Cr(_,y,A,L)),(y=-1<h?_[h]:null)&&Na(y))}function Na(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[Ut])Rr(_.i,h);else{var y=h.type,A=h.proxy;_.removeEventListener?_.removeEventListener(y,A,h.capture):_.detachEvent?_.detachEvent(Nr(y),A):_.addListener&&_.removeListener&&_.removeListener(A),(y=Da(_))?(Rr(y,h),y.h==0&&(y.src=null,_[Ir]=null)):ws(h)}}}function Nr(h){return h in il?il[h]:il[h]="on"+h}function ld(h,_){if(h.da)h=!0;else{_=new Ne(_,this);var y=h.listener,A=h.ha||h.src;h.fa&&Na(h),h=y.call(A,_)}return h}function Da(h){return h=h[Ir],h instanceof Bi?h:null}var rl="__closure_events_fn_"+(1e9*Math.random()>>>0);function cc(h){return typeof h=="function"?h:(h[rl]||(h[rl]=function(_){return h.handleEvent(_)}),h[rl])}function gt(){ie.call(this),this.i=new Bi(this),this.M=this,this.F=null}F(gt,ie),gt.prototype[Ut]=!0,gt.prototype.removeEventListener=function(h,_,y,A){sl(this,h,_,y,A)};function Qe(h,_){var y,A=h.F;if(A)for(y=[];A;A=A.F)y.push(A);if(h=h.M,A=_.type||_,typeof _=="string")_=new J(_,h);else if(_ instanceof J)_.target=_.target||h;else{var L=_;_=new J(A,h),M(_,L)}if(L=!0,y)for(var j=y.length-1;0<=j;j--){var ee=_.g=y[j];L=An(ee,A,!0,_)&&L}if(ee=_.g=h,L=An(ee,A,!0,_)&&L,L=An(ee,A,!1,_)&&L,y)for(j=0;j<y.length;j++)ee=_.g=y[j],L=An(ee,A,!1,_)&&L}gt.prototype.N=function(){if(gt.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var y=h.g[_],A=0;A<y.length;A++)ws(y[A]);delete h.g[_],h.h--}}this.F=null},gt.prototype.K=function(h,_,y,A){return this.i.add(String(h),_,!1,y,A)},gt.prototype.L=function(h,_,y,A){return this.i.add(String(h),_,!0,y,A)};function An(h,_,y,A){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var L=!0,j=0;j<_.length;++j){var ee=_[j];if(ee&&!ee.da&&ee.capture==y){var xe=ee.listener,Ot=ee.ha||ee.src;ee.fa&&Rr(h.i,ee),L=xe.call(Ot,A)!==!1&&L}}return L&&!A.defaultPrevented}function sn(h,_,y){if(typeof h=="function")y&&(h=w(h,y));else if(h&&typeof h.handleEvent=="function")h=w(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:d.setTimeout(h,_||0)}function hc(h){h.g=sn(()=>{h.g=null,h.i&&(h.i=!1,hc(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class ud extends ie{constructor(_,y){super(),this.m=_,this.l=y,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:hc(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Dr(h){ie.call(this),this.h=h,this.g={}}F(Dr,ie);var Or=[];function Mr(h){he(h.g,function(_,y){this.g.hasOwnProperty(y)&&Na(_)},h),h.g={}}Dr.prototype.N=function(){Dr.aa.N.call(this),Mr(this)},Dr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Zn=d.JSON.stringify,Oa=d.JSON.parse,kr=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function al(){}al.prototype.h=null;function ol(h){return h.h||(h.h=h.i())}function ll(){}var Fi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function qi(){J.call(this,"d")}F(qi,J);function ul(){J.call(this,"c")}F(ul,J);var fi={},cl=null;function bs(){return cl=cl||new gt}fi.La="serverreachability";function Ma(h){J.call(this,fi.La,h)}F(Ma,J);function Rs(h){const _=bs();Qe(_,new Ma(_))}fi.STAT_EVENT="statevent";function fc(h,_){J.call(this,fi.STAT_EVENT,h),this.stat=_}F(fc,J);function ht(h){const _=bs();Qe(_,new fc(_,h))}fi.Ma="timingevent";function Dt(h,_){J.call(this,fi.Ma,h),this.size=_}F(Dt,J);function wt(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},_)}function Ln(){this.g=!0}Ln.prototype.xa=function(){this.g=!1};function hl(h,_,y,A,L,j){h.info(function(){if(h.g)if(j)for(var ee="",xe=j.split("&"),Ot=0;Ot<xe.length;Ot++){var Le=xe[Ot].split("=");if(1<Le.length){var Bt=Le[0];Le=Le[1];var Mt=Bt.split("_");ee=2<=Mt.length&&Mt[1]=="type"?ee+(Bt+"="+Le+"&"):ee+(Bt+"=redacted&")}}else ee=null;else ee=j;return"XMLHTTP REQ ("+A+") [attempt "+L+"]: "+_+`
`+y+`
`+ee})}function cd(h,_,y,A,L,j,ee){h.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+L+"]: "+_+`
`+y+`
`+j+" "+ee})}function Cs(h,_,y,A){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+Pr(h,y)+(A?" "+A:"")})}function dc(h,_){h.info(function(){return"TIMEOUT: "+_})}Ln.prototype.info=function(){};function Pr(h,_){if(!h.g)return _;if(!_)return null;try{var y=JSON.parse(_);if(y){for(h=0;h<y.length;h++)if(Array.isArray(y[h])){var A=y[h];if(!(2>A.length)){var L=A[1];if(Array.isArray(L)&&!(1>L.length)){var j=L[0];if(j!="noop"&&j!="stop"&&j!="close")for(var ee=1;ee<L.length;ee++)L[ee]=""}}}}return Zn(y)}catch{return _}}var Is={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ji={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},di;function pi(){}F(pi,al),pi.prototype.g=function(){return new XMLHttpRequest},pi.prototype.i=function(){return{}},di=new pi;function pn(h,_,y,A){this.j=h,this.i=_,this.l=y,this.R=A||1,this.U=new Dr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new vt}function vt(){this.i=null,this.g="",this.h=!1}var fl={},ka={};function Jn(h,_,y){h.L=1,h.v=zr(wn(_)),h.m=y,h.P=!0,Hi(h,null)}function Hi(h,_){h.F=Date.now(),Vr(h),h.A=wn(h.v);var y=h.A,A=h.R;Array.isArray(A)||(A=[String(A)]),yl(y.i,"t",A),h.C=0,y=h.j.J,h.h=new vt,h.g=Nc(h.j,y?_:null,!h.m),0<h.O&&(h.M=new ud(w(h.Y,h,h.g),h.O)),_=h.U,y=h.g,A=h.ca;var L="readystatechange";Array.isArray(L)||(L&&(Or[0]=L.toString()),L=Or);for(var j=0;j<L.length;j++){var ee=uc(y,L[j],A||_.handleEvent,!1,_.h||_);if(!ee)break;_.g[ee.key]=ee}_=h.H?b(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),Rs(),hl(h.i,h.u,h.A,h.l,h.R,h.m)}pn.prototype.ca=function(h){h=h.target;const _=this.M;_&&Fn(h)==3?_.j():this.Y(h)},pn.prototype.Y=function(h){try{if(h==this.g)e:{const Mt=Fn(this.g);var _=this.g.Ba();const Zi=this.g.Z();if(!(3>Mt)&&(Mt!=3||this.g&&(this.h.h||this.g.oa()||Tc(this.g)))){this.J||Mt!=4||_==7||(_==8||0>=Zi?Rs(3):Rs(2)),Ns(this);var y=this.g.Z();this.X=y;t:if(pc(this)){var A=Tc(this.g);h="";var L=A.length,j=Fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qt(this),mi(this);var ee="";break t}this.h.i=new d.TextDecoder}for(_=0;_<L;_++)this.h.h=!0,h+=this.h.i.decode(A[_],{stream:!(j&&_==L-1)});A.length=0,this.h.g+=h,this.C=0,ee=this.h.g}else ee=this.g.oa();if(this.o=y==200,cd(this.i,this.u,this.A,this.l,this.R,Mt,y),this.o){if(this.T&&!this.K){t:{if(this.g){var xe,Ot=this.g;if((xe=Ot.g?Ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!le(xe)){var Le=xe;break t}}Le=null}if(y=Le)Cs(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xr(this,y);else{this.o=!1,this.s=3,ht(12),Qt(this),mi(this);break e}}if(this.P){y=!0;let Wt;for(;!this.J&&this.C<ee.length;)if(Wt=mc(this,ee),Wt==ka){Mt==4&&(this.s=4,ht(14),y=!1),Cs(this.i,this.l,null,"[Incomplete Response]");break}else if(Wt==fl){this.s=4,ht(15),Cs(this.i,this.l,ee,"[Invalid Chunk]"),y=!1;break}else Cs(this.i,this.l,Wt,null),xr(this,Wt);if(pc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Mt!=4||ee.length!=0||this.h.h||(this.s=1,ht(16),y=!1),this.o=this.o&&y,!y)Cs(this.i,this.l,ee,"[Invalid Chunked Response]"),Qt(this),mi(this);else if(0<ee.length&&!this.W){this.W=!0;var Bt=this.j;Bt.g==this&&Bt.ba&&!Bt.M&&(Bt.j.info("Great, no buffering proxy detected. Bytes received: "+ee.length),Yr(Bt),Bt.M=!0,ht(11))}}else Cs(this.i,this.l,ee,null),xr(this,ee);Mt==4&&Qt(this),this.o&&!this.J&&(Mt==4?Rc(this.j,this):(this.o=!1,Vr(this)))}else md(this.g),y==400&&0<ee.indexOf("Unknown SID")?(this.s=3,ht(12)):(this.s=0,ht(13)),Qt(this),mi(this)}}}catch{}finally{}};function pc(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function mc(h,_){var y=h.C,A=_.indexOf(`
`,y);return A==-1?ka:(y=Number(_.substring(y,A)),isNaN(y)?fl:(A+=1,A+y>_.length?ka:(_=_.slice(A,A+y),h.C=A+y,_)))}pn.prototype.cancel=function(){this.J=!0,Qt(this)};function Vr(h){h.S=Date.now()+h.I,gc(h,h.I)}function gc(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=wt(w(h.ba,h),_)}function Ns(h){h.B&&(d.clearTimeout(h.B),h.B=null)}pn.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(dc(this.i,this.A),this.L!=2&&(Rs(),ht(17)),Qt(this),this.s=2,mi(this)):gc(this,this.S-h)};function mi(h){h.j.G==0||h.J||Rc(h.j,h)}function Qt(h){Ns(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,Mr(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function xr(h,_){try{var y=h.j;if(y.G!=0&&(y.g==h||dl(y.h,h))){if(!h.K&&dl(y.h,h)&&y.G==3){try{var A=y.Da.g.parse(_)}catch{A=null}if(Array.isArray(A)&&A.length==3){var L=A;if(L[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<h.F)Ga(y),ja(y);else break e;Al(y),ht(18)}}else y.za=L[1],0<y.za-y.T&&37500>L[2]&&y.F&&y.v==0&&!y.C&&(y.C=wt(w(y.Za,y),6e3));if(1>=Va(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else $i(y,11)}else if((h.K||y.g==h)&&Ga(y),!le(_))for(L=y.Da.g.parse(_),_=0;_<L.length;_++){let Le=L[_];if(y.T=Le[0],Le=Le[1],y.G==2)if(Le[0]=="c"){y.K=Le[1],y.ia=Le[2];const Bt=Le[3];Bt!=null&&(y.la=Bt,y.j.info("VER="+y.la));const Mt=Le[4];Mt!=null&&(y.Aa=Mt,y.j.info("SVER="+y.Aa));const Zi=Le[5];Zi!=null&&typeof Zi=="number"&&0<Zi&&(A=1.5*Zi,y.L=A,y.j.info("backChannelRequestTimeoutMs_="+A)),A=y;const Wt=h.g;if(Wt){const Si=Wt.g?Wt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Si){var j=A.h;j.g||Si.indexOf("spdy")==-1&&Si.indexOf("quic")==-1&&Si.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(xa(j,j.h),j.h=null))}if(A.D){const bl=Wt.g?Wt.g.getResponseHeader("X-HTTP-Session-Id"):null;bl&&(A.ya=bl,Ze(A.I,A.D,bl))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-h.F,y.j.info("Handshake RTT: "+y.R+"ms")),A=y;var ee=h;if(A.qa=Ic(A,A.J?A.ia:null,A.W),ee.K){mn(A.h,ee);var xe=ee,Ot=A.L;Ot&&(xe.I=Ot),xe.B&&(Ns(xe),Vr(xe)),A.g=ee}else wc(A);0<y.i.length&&Ha(y)}else Le[0]!="stop"&&Le[0]!="close"||$i(y,7);else y.G==3&&(Le[0]=="stop"||Le[0]=="close"?Le[0]=="stop"?$i(y,7):Tl(y):Le[0]!="noop"&&y.l&&y.l.ta(Le),y.v=0)}}Rs(4)}catch{}}var _c=class{constructor(h,_){this.g=h,this.map=_}};function Gi(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Pa(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function Va(h){return h.h?1:h.g?h.g.size:0}function dl(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function xa(h,_){h.g?h.g.add(_):h.h=_}function mn(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}Gi.prototype.cancel=function(){if(this.i=pl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function pl(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const y of h.g.values())_=_.concat(y.D);return _}return $(h.i)}function hd(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(m(h)){for(var _=[],y=h.length,A=0;A<y;A++)_.push(h[A]);return _}_=[],y=0;for(A in h)_[y++]=h[A];return _}function La(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(m(h)||typeof h=="string"){var _=[];h=h.length;for(var y=0;y<h;y++)_.push(y);return _}_=[],y=0;for(const A in h)_[y++]=A;return _}}}function ml(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(m(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var y=La(h),A=hd(h),L=A.length,j=0;j<L;j++)_.call(void 0,A[j],y&&y[j],h)}var Lr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fd(h,_){if(h){h=h.split("&");for(var y=0;y<h.length;y++){var A=h[y].indexOf("="),L=null;if(0<=A){var j=h[y].substring(0,A);L=h[y].substring(A+1)}else j=h[y];_(j,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function bt(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof bt){this.h=h.h,Ur(this,h.j),this.o=h.o,this.g=h.g,Ds(this,h.s),this.l=h.l;var _=h.i,y=new Yi;y.i=_.i,_.g&&(y.g=new Map(_.g),y.h=_.h),Ki(this,y),this.m=h.m}else h&&(_=String(h).match(Lr))?(this.h=!1,Ur(this,_[1]||"",!0),this.o=Un(_[2]||""),this.g=Un(_[3]||"",!0),Ds(this,_[4]),this.l=Un(_[5]||"",!0),Ki(this,_[6]||"",!0),this.m=Un(_[7]||"")):(this.h=!1,this.i=new Yi(null,this.h))}bt.prototype.toString=function(){var h=[],_=this.j;_&&h.push(Br(_,gl,!0),":");var y=this.g;return(y||_=="file")&&(h.push("//"),(_=this.o)&&h.push(Br(_,gl,!0),"@"),h.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&h.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&h.push("/"),h.push(Br(y,y.charAt(0)=="/"?dd:_l,!0))),(y=this.i.toString())&&h.push("?",y),(y=this.m)&&h.push("#",Br(y,Ua)),h.join("")};function wn(h){return new bt(h)}function Ur(h,_,y){h.j=y?Un(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function Ds(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function Ki(h,_,y){_ instanceof Yi?(h.i=_,vc(h.i,h.h)):(y||(_=Br(_,pd)),h.i=new Yi(_,h.h))}function Ze(h,_,y){h.i.set(_,y)}function zr(h){return Ze(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function Un(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function Br(h,_,y){return typeof h=="string"?(h=encodeURI(h).replace(_,yc),y&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function yc(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var gl=/[#\/\?@]/g,_l=/[#\?:]/g,dd=/[#\?]/g,pd=/[#\?@]/g,Ua=/#/g;function Yi(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function zn(h){h.g||(h.g=new Map,h.h=0,h.i&&fd(h.i,function(_,y){h.add(decodeURIComponent(_.replace(/\+/g," ")),y)}))}i=Yi.prototype,i.add=function(h,_){zn(this),this.i=null,h=gi(this,h);var y=this.g.get(h);return y||this.g.set(h,y=[]),y.push(_),this.h+=1,this};function Qi(h,_){zn(h),_=gi(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function Wi(h,_){return zn(h),_=gi(h,_),h.g.has(_)}i.forEach=function(h,_){zn(this),this.g.forEach(function(y,A){y.forEach(function(L){h.call(_,L,A,this)},this)},this)},i.na=function(){zn(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),y=[];for(let A=0;A<_.length;A++){const L=h[A];for(let j=0;j<L.length;j++)y.push(_[A])}return y},i.V=function(h){zn(this);let _=[];if(typeof h=="string")Wi(this,h)&&(_=_.concat(this.g.get(gi(this,h))));else{h=Array.from(this.g.values());for(let y=0;y<h.length;y++)_=_.concat(h[y])}return _},i.set=function(h,_){return zn(this),this.i=null,h=gi(this,h),Wi(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},i.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function yl(h,_,y){Qi(h,_),0<y.length&&(h.i=null,h.g.set(gi(h,_),$(y)),h.h+=y.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var y=0;y<_.length;y++){var A=_[y];const j=encodeURIComponent(String(A)),ee=this.V(A);for(A=0;A<ee.length;A++){var L=j;ee[A]!==""&&(L+="="+encodeURIComponent(String(ee[A]))),h.push(L)}}return this.i=h.join("&")};function gi(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function vc(h,_){_&&!h.j&&(zn(h),h.i=null,h.g.forEach(function(y,A){var L=A.toLowerCase();A!=L&&(Qi(this,A),yl(this,L,y))},h)),h.j=_}function Fr(h,_){const y=new Ln;if(d.Image){const A=new Image;A.onload=x(Bn,y,"TestLoadImage: loaded",!0,_,A),A.onerror=x(Bn,y,"TestLoadImage: error",!1,_,A),A.onabort=x(Bn,y,"TestLoadImage: abort",!1,_,A),A.ontimeout=x(Bn,y,"TestLoadImage: timeout",!1,_,A),d.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=h}else _(!1)}function ei(h,_){const y=new Ln,A=new AbortController,L=setTimeout(()=>{A.abort(),Bn(y,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:A.signal}).then(j=>{clearTimeout(L),j.ok?Bn(y,"TestPingServer: ok",!0,_):Bn(y,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(L),Bn(y,"TestPingServer: error",!1,_)})}function Bn(h,_,y,A,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),A(y)}catch{}}function qr(){this.g=new kr}function _i(h,_,y){const A=y||"";try{ml(h,function(L,j){let ee=L;g(L)&&(ee=Zn(L)),_.push(A+j+"="+encodeURIComponent(ee))})}catch(L){throw _.push(A+"type="+encodeURIComponent("_badmap")),L}}function Os(h){this.l=h.Ub||null,this.j=h.eb||!1}F(Os,al),Os.prototype.g=function(){return new Xi(this.l,this.j)},Os.prototype.i=function(h){return function(){return h}}({});function Xi(h,_){gt.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}F(Xi,gt),i=Xi.prototype,i.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,vi(this)},i.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||d).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,yi(this)),this.readyState=0},i.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,vi(this)),this.g&&(this.readyState=3,vi(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;vl(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function vl(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}i.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?yi(this):vi(this),this.readyState==3&&vl(this)}},i.Ra=function(h){this.g&&(this.response=this.responseText=h,yi(this))},i.Qa=function(h){this.g&&(this.response=h,yi(this))},i.ga=function(){this.g&&yi(this)};function yi(h){h.readyState=4,h.l=null,h.j=null,h.v=null,vi(h)}i.setRequestHeader=function(h,_){this.u.append(h,_)},i.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var y=_.next();!y.done;)y=y.value,h.push(y[0]+": "+y[1]),y=_.next();return h.join(`\r
`)};function vi(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(Xi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function El(h){let _="";return he(h,function(y,A){_+=A,_+=":",_+=y,_+=`\r
`}),_}function zt(h,_,y){e:{for(A in y){var A=!1;break e}A=!0}A||(y=El(y),typeof h=="string"?y!=null&&encodeURIComponent(String(y)):Ze(h,_,y))}function Ge(h){gt.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}F(Ge,gt);var za=/^https?$/i,jr=["POST","PUT"];i=Ge.prototype,i.Ha=function(h){this.J=h},i.ea=function(h,_,y,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():di.g(),this.v=this.o?ol(this.o):ol(di),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(j){Ec(this,j);return}if(h=y||"",y=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var L in A)y.set(L,A[L]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const j of A.keys())y.set(j,A.get(j));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(y.keys()).find(j=>j.toLowerCase()=="content-type"),L=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(jr,_,void 0))||A||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,ee]of y)this.g.setRequestHeader(j,ee);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Hr(this),this.u=!0,this.g.send(h),this.u=!1}catch(j){Ec(this,j)}};function Ec(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,Ba(h),Ei(h)}function Ba(h){h.A||(h.A=!0,Qe(h,"complete"),Qe(h,"error"))}i.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,Qe(this,"complete"),Qe(this,"abort"),Ei(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ei(this,!0)),Ge.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Fa(this):this.bb())},i.bb=function(){Fa(this)};function Fa(h){if(h.h&&typeof c<"u"&&(!h.v[1]||Fn(h)!=4||h.Z()!=2)){if(h.u&&Fn(h)==4)sn(h.Ea,0,h);else if(Qe(h,"readystatechange"),Fn(h)==4){h.h=!1;try{const ee=h.Z();e:switch(ee){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var y;if(!(y=_)){var A;if(A=ee===0){var L=String(h.D).match(Lr)[1]||null;!L&&d.self&&d.self.location&&(L=d.self.location.protocol.slice(0,-1)),A=!za.test(L?L.toLowerCase():"")}y=A}if(y)Qe(h,"complete"),Qe(h,"success");else{h.m=6;try{var j=2<Fn(h)?h.g.statusText:""}catch{j=""}h.l=j+" ["+h.Z()+"]",Ba(h)}}finally{Ei(h)}}}}function Ei(h,_){if(h.g){Hr(h);const y=h.g,A=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||Qe(h,"ready");try{y.onreadystatechange=A}catch{}}}function Hr(h){h.I&&(d.clearTimeout(h.I),h.I=null)}i.isActive=function(){return!!this.g};function Fn(h){return h.g?h.g.readyState:0}i.Z=function(){try{return 2<Fn(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),Oa(_)}};function Tc(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function md(h){const _={};h=(h.g&&2<=Fn(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<h.length;A++){if(le(h[A]))continue;var y=k(h[A]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const j=_[L]||[];_[L]=j,j.push(y)}N(_,function(A){return A.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Gr(h,_,y){return y&&y.internalChannelParams&&y.internalChannelParams[h]||_}function qa(h){this.Aa=0,this.i=[],this.j=new Ln,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Gr("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Gr("baseRetryDelayMs",5e3,h),this.cb=Gr("retryDelaySeedMs",1e4,h),this.Wa=Gr("forwardChannelMaxRetries",2,h),this.wa=Gr("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new Gi(h&&h.concurrentRequestLimit),this.Da=new qr,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=qa.prototype,i.la=8,i.G=1,i.connect=function(h,_,y,A){ht(0),this.W=h,this.H=_||{},y&&A!==void 0&&(this.H.OSID=y,this.H.OAID=A),this.F=this.X,this.I=Ic(this,null,this.W),Ha(this)};function Tl(h){if(Sc(h),h.G==3){var _=h.U++,y=wn(h.I);if(Ze(y,"SID",h.K),Ze(y,"RID",_),Ze(y,"TYPE","terminate"),Kr(h,y),_=new pn(h,h.j,_),_.L=2,_.v=zr(wn(y)),y=!1,d.navigator&&d.navigator.sendBeacon)try{y=d.navigator.sendBeacon(_.v.toString(),"")}catch{}!y&&d.Image&&(new Image().src=_.v,y=!0),y||(_.g=Nc(_.j,null),_.g.ea(_.v)),_.F=Date.now(),Vr(_)}Cc(h)}function ja(h){h.g&&(Yr(h),h.g.cancel(),h.g=null)}function Sc(h){ja(h),h.u&&(d.clearTimeout(h.u),h.u=null),Ga(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function Ha(h){if(!Pa(h.h)&&!h.s){h.s=!0;var _=h.Ga;ne||D(),pe||(ne(),pe=!0),je.add(_,h),h.B=0}}function gd(h,_){return Va(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=wt(w(h.Ga,h,_),wl(h,h.B)),h.B++,!0)}i.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const L=new pn(this,this.j,h);let j=this.o;if(this.S&&(j?(j=b(j),M(j,this.S)):j=this.S),this.m!==null||this.O||(L.H=j,j=null),this.P)e:{for(var _=0,y=0;y<this.i.length;y++){t:{var A=this.i[y];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(_+=A,4096<_){_=y;break e}if(_===4096||y===this.i.length-1){_=y+1;break e}}_=1e3}else _=1e3;_=Ac(this,L,_),y=wn(this.I),Ze(y,"RID",h),Ze(y,"CVER",22),this.D&&Ze(y,"X-HTTP-Session-Id",this.D),Kr(this,y),j&&(this.O?_="headers="+encodeURIComponent(String(El(j)))+"&"+_:this.m&&zt(y,this.m,j)),xa(this.h,L),this.Ua&&Ze(y,"TYPE","init"),this.P?(Ze(y,"$req",_),Ze(y,"SID","null"),L.T=!0,Jn(L,y,null)):Jn(L,y,_),this.G=2}}else this.G==3&&(h?Sl(this,h):this.i.length==0||Pa(this.h)||Sl(this))};function Sl(h,_){var y;_?y=_.l:y=h.U++;const A=wn(h.I);Ze(A,"SID",h.K),Ze(A,"RID",y),Ze(A,"AID",h.T),Kr(h,A),h.m&&h.o&&zt(A,h.m,h.o),y=new pn(h,h.j,y,h.B+1),h.m===null&&(y.H=h.o),_&&(h.i=_.D.concat(h.i)),_=Ac(h,y,1e3),y.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),xa(h.h,y),Jn(y,A,_)}function Kr(h,_){h.H&&he(h.H,function(y,A){Ze(_,A,y)}),h.l&&ml({},function(y,A){Ze(_,A,y)})}function Ac(h,_,y){y=Math.min(h.i.length,y);var A=h.l?w(h.l.Na,h.l,h):null;e:{var L=h.i;let j=-1;for(;;){const ee=["count="+y];j==-1?0<y?(j=L[0].g,ee.push("ofs="+j)):j=0:ee.push("ofs="+j);let xe=!0;for(let Ot=0;Ot<y;Ot++){let Le=L[Ot].g;const Bt=L[Ot].map;if(Le-=j,0>Le)j=Math.max(0,L[Ot].g-100),xe=!1;else try{_i(Bt,ee,"req"+Le+"_")}catch{A&&A(Bt)}}if(xe){A=ee.join("&");break e}}}return h=h.i.splice(0,y),_.D=h,A}function wc(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;ne||D(),pe||(ne(),pe=!0),je.add(_,h),h.v=0}}function Al(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=wt(w(h.Fa,h),wl(h,h.v)),h.v++,!0)}i.Fa=function(){if(this.u=null,bc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=wt(w(this.ab,this),h)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ht(10),ja(this),bc(this))};function Yr(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function bc(h){h.g=new pn(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=wn(h.qa);Ze(_,"RID","rpc"),Ze(_,"SID",h.K),Ze(_,"AID",h.T),Ze(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&Ze(_,"TO",h.ja),Ze(_,"TYPE","xmlhttp"),Kr(h,_),h.m&&h.o&&zt(_,h.m,h.o),h.L&&(h.g.I=h.L);var y=h.g;h=h.ia,y.L=1,y.v=zr(wn(_)),y.m=null,y.P=!0,Hi(y,h)}i.Za=function(){this.C!=null&&(this.C=null,ja(this),Al(this),ht(19))};function Ga(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function Rc(h,_){var y=null;if(h.g==_){Ga(h),Yr(h),h.g=null;var A=2}else if(dl(h.h,_))y=_.D,mn(h.h,_),A=1;else return;if(h.G!=0){if(_.o)if(A==1){y=_.m?_.m.length:0,_=Date.now()-_.F;var L=h.B;A=bs(),Qe(A,new Dt(A,y)),Ha(h)}else wc(h);else if(L=_.s,L==3||L==0&&0<_.X||!(A==1&&gd(h,_)||A==2&&Al(h)))switch(y&&0<y.length&&(_=h.h,_.i=_.i.concat(y)),L){case 1:$i(h,5);break;case 4:$i(h,10);break;case 3:$i(h,6);break;default:$i(h,2)}}}function wl(h,_){let y=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(y*=2),y*_}function $i(h,_){if(h.j.info("Error code "+_),_==2){var y=w(h.fb,h),A=h.Xa;const L=!A;A=new bt(A||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Ur(A,"https"),zr(A),L?Fr(A.toString(),y):ei(A.toString(),y)}else ht(2);h.G=0,h.l&&h.l.sa(_),Cc(h),Sc(h)}i.fb=function(h){h?(this.j.info("Successfully pinged google.com"),ht(2)):(this.j.info("Failed to ping google.com"),ht(1))};function Cc(h){if(h.G=0,h.ka=[],h.l){const _=pl(h.h);(_.length!=0||h.i.length!=0)&&(H(h.ka,_),H(h.ka,h.i),h.h.i.length=0,$(h.i),h.i.length=0),h.l.ra()}}function Ic(h,_,y){var A=y instanceof bt?wn(y):new bt(y);if(A.g!="")_&&(A.g=_+"."+A.g),Ds(A,A.s);else{var L=d.location;A=L.protocol,_=_?_+"."+L.hostname:L.hostname,L=+L.port;var j=new bt(null);A&&Ur(j,A),_&&(j.g=_),L&&Ds(j,L),y&&(j.l=y),A=j}return y=h.D,_=h.ya,y&&_&&Ze(A,y,_),Ze(A,"VER",h.la),Kr(h,A),A}function Nc(h,_,y){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new Ge(new Os({eb:y})):new Ge(h.pa),_.Ha(h.J),_}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Dc(){}i=Dc.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Ka(){}Ka.prototype.g=function(h,_){return new gn(h,_)};function gn(h,_){gt.call(this),this.g=new qa(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!le(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!le(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new Ti(this)}F(gn,gt),gn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},gn.prototype.close=function(){Tl(this.g)},gn.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var y={};y.__data__=h,h=y}else this.u&&(y={},y.__data__=Zn(h),h=y);_.i.push(new _c(_.Ya++,h)),_.G==3&&Ha(_)},gn.prototype.N=function(){this.g.l=null,delete this.j,Tl(this.g),delete this.g,gn.aa.N.call(this)};function Oc(h){qi.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const y in _){h=y;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}F(Oc,qi);function Mc(){ul.call(this),this.status=1}F(Mc,ul);function Ti(h){this.g=h}F(Ti,Dc),Ti.prototype.ua=function(){Qe(this.g,"a")},Ti.prototype.ta=function(h){Qe(this.g,new Oc(h))},Ti.prototype.sa=function(h){Qe(this.g,new Mc)},Ti.prototype.ra=function(){Qe(this.g,"b")},Ka.prototype.createWebChannel=Ka.prototype.g,gn.prototype.send=gn.prototype.o,gn.prototype.open=gn.prototype.m,gn.prototype.close=gn.prototype.close,jA=function(){return new Ka},qA=function(){return bs()},FA=fi,Xm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Is.NO_ERROR=0,Is.TIMEOUT=8,Is.HTTP_ERROR=6,jh=Is,ji.COMPLETE="complete",BA=ji,ll.EventType=Fi,Fi.OPEN="a",Fi.CLOSE="b",Fi.ERROR="c",Fi.MESSAGE="d",gt.prototype.listen=gt.prototype.K,Eu=ll,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,zA=Ge}).apply(typeof Vh<"u"?Vh:typeof self<"u"?self:typeof window<"u"?window:{});const QT="@firebase/firestore",WT="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Zo="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya=new Mf("@firebase/firestore");function Ao(){return ya.logLevel}function oe(i,...e){if(ya.logLevel<=ke.DEBUG){const t=e.map(Yg);ya.debug(`Firestore (${Zo}): ${i}`,...t)}}function vs(i,...e){if(ya.logLevel<=ke.ERROR){const t=e.map(Yg);ya.error(`Firestore (${Zo}): ${i}`,...t)}}function pr(i,...e){if(ya.logLevel<=ke.WARN){const t=e.map(Yg);ya.warn(`Firestore (${Zo}): ${i}`,...t)}}function Yg(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Te(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,HA(i,s,t)}function HA(i,e,t){let s=`FIRESTORE (${Zo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw vs(s),new Error(s)}function Ye(i,e,t,s){let a="Unexpected state";typeof t=="string"?a=t:s=t,i||HA(e,a,s)}function be(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class fe extends Ss{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class rO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ln.UNAUTHENTICATED))}shutdown(){}}class aO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class oO{constructor(e){this.t=e,this.currentUser=ln.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ye(this.o===void 0,42304);let s=this.i;const a=m=>this.i!==s?(s=this.i,t(m)):Promise.resolve();let l=new ur;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new ur,e.enqueueRetryable(()=>a(this.currentUser))};const c=()=>{const m=l;e.enqueueRetryable(async()=>{await m.promise,await a(this.currentUser)})},d=m=>{oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(m=>d(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?d(m):(oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new ur)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ye(typeof s.accessToken=="string",31837,{l:s}),new GA(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ye(e===null||typeof e=="string",2055,{h:e}),new ln(e)}}class lO{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=ln.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class uO{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new lO(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(ln.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class XT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cO{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,kn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ye(this.o===void 0,3512);const s=l=>{l.error!=null&&oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,oe("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>s(l))};const a=l=>{oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>a(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new XT(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ye(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new XT(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hO(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<i;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */function KA(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=hO(40);for(let l=0;l<a.length;++l)s.length<20&&a[l]<t&&(s+=e.charAt(a[l]%62))}return s}}function Ie(i,e){return i<e?-1:i>e?1:0}function $m(i,e){let t=0;for(;t<i.length&&t<e.length;){const s=i.codePointAt(t),a=e.codePointAt(t);if(s!==a){if(s<128&&a<128)return Ie(s,a);{const l=KA(),c=fO(l.encode($T(i,t)),l.encode($T(e,t)));return c!==0?c:Ie(s,a)}}t+=s>65535?2:1}return Ie(i.length,e.length)}function $T(i,e){return i.codePointAt(e)>65535?i.substring(e,e+2):i.substring(e,e+1)}function fO(i,e){for(let t=0;t<i.length&&t<e.length;++t)if(i[t]!==e[t])return Ie(i[t],e[t]);return Ie(i.length,e.length)}function qo(i,e,t){return i.length===e.length&&i.every((s,a)=>t(s,e[a]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT="__name__";class Ii{constructor(e,t,s){t===void 0?t=0:t>e.length&&Te(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Te(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Ii.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ii?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const l=Ii.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Ie(e.length,t.length)}static compareSegments(e,t){const s=Ii.isNumericId(e),a=Ii.isNumericId(t);return s&&!a?-1:!s&&a?1:s&&a?Ii.extractNumericId(e).compare(Ii.extractNumericId(t)):$m(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return lr.fromString(e.substring(4,e.length-2))}}class lt extends Ii{construct(e,t,s){return new lt(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new fe(X.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(a=>a.length>0))}return new lt(t)}static emptyPath(){return new lt([])}}const dO=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tn extends Ii{construct(e,t,s){return new tn(e,t,s)}static isValidIdentifier(e){return dO.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ZT}static keyField(){return new tn([ZT])}static fromServerFormat(e){const t=[];let s="",a=0;const l=()=>{if(s.length===0)throw new fe(X.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let c=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new fe(X.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[a+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new fe(X.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=m,a+=2}else d==="`"?(c=!c,a++):d!=="."||c?(s+=d,a++):(l(),a++)}if(l(),c)throw new fe(X.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tn(t)}static emptyPath(){return new tn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.path=e}static fromPath(e){return new ge(lt.fromString(e))}static fromName(e){return new ge(lt.fromString(e).popFirst(5))}static empty(){return new ge(lt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&lt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return lt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ge(new lt(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YA(i,e,t){if(!t)throw new fe(X.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function pO(i,e,t,s){if(e===!0&&s===!0)throw new fe(X.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function JT(i){if(!ge.isDocumentKey(i))throw new fe(X.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function e0(i){if(ge.isDocumentKey(i))throw new fe(X.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function QA(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function Wg(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":Te(12329,{type:typeof i})}function li(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new fe(X.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Wg(i);throw new fe(X.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
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
 */function Nt(i,e){const t={typeString:i};return e&&(t.value=e),t}function ec(i,e){if(!QA(i))throw new fe(X.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const a=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const c=i[s];if(a&&typeof c!==a){t=`JSON field '${s}' must be a ${a}.`;break}if(l!==void 0&&c!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new fe(X.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0=-62135596800,n0=1e6;class ut{static now(){return ut.fromMillis(Date.now())}static fromDate(e){return ut.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*n0);return new ut(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new fe(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new fe(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<t0)throw new fe(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new fe(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/n0}_compareTo(e){return this.seconds===e.seconds?Ie(this.nanoseconds,e.nanoseconds):Ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ut._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ec(e,ut._jsonSchema))return new ut(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-t0;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ut._jsonSchemaVersion="firestore/timestamp/1.0",ut._jsonSchema={type:Nt("string",ut._jsonSchemaVersion),seconds:Nt("number"),nanoseconds:Nt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{static fromTimestamp(e){return new we(e)}static min(){return new we(new ut(0,0))}static max(){return new we(new ut(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Uu=-1;function mO(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,a=we.fromTimestamp(s===1e9?new ut(t+1,0):new ut(t,s));return new mr(a,ge.empty(),e)}function gO(i){return new mr(i.readTime,i.key,Uu)}class mr{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new mr(we.min(),ge.empty(),Uu)}static max(){return new mr(we.max(),ge.empty(),Uu)}}function _O(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=ge.comparator(i.documentKey,e.documentKey),t!==0?t:Ie(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yO="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vO{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jo(i){if(i.code!==X.FAILED_PRECONDITION||i.message!==yO)throw i;oe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Te(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new W((s,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof W?t:W.resolve(t)}catch(t){return W.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):W.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):W.reject(t)}static resolve(e){return new W((t,s)=>{t(e)})}static reject(e){return new W((t,s)=>{s(e)})}static waitFor(e){return new W((t,s)=>{let a=0,l=0,c=!1;e.forEach(d=>{++a,d.next(()=>{++l,c&&l===a&&t()},m=>s(m))}),c=!0,l===a&&t()})}static or(e){let t=W.resolve(!1);for(const s of e)t=t.next(a=>a?W.resolve(a):s());return t}static forEach(e,t){const s=[];return e.forEach((a,l)=>{s.push(t.call(this,a,l))}),this.waitFor(s)}static mapArray(e,t){return new W((s,a)=>{const l=e.length,c=new Array(l);let d=0;for(let m=0;m<l;m++){const g=m;t(e[g]).next(E=>{c[g]=E,++d,d===l&&s(c)},E=>a(E))}})}static doWhile(e,t){return new W((s,a)=>{const l=()=>{e()===!0?t().next(()=>{l()},a):s()};l()})}}function EO(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function el(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class zf{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this._e(s),this.ae=s=>t.writeSequenceNumber(s))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}zf.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg=-1;function Bf(i){return i==null}function ff(i){return i===0&&1/i==-1/0}function TO(i){return typeof i=="number"&&Number.isInteger(i)&&!ff(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA="";function SO(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=i0(e)),e=AO(i.get(t),e);return i0(e)}function AO(i,e){let t=e;const s=i.length;for(let a=0;a<s;a++){const l=i.charAt(a);switch(l){case"\0":t+="";break;case WA:t+="";break;default:t+=l}}return t}function i0(i){return i+WA+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s0(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function Sr(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function XA(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,t){this.comparator=e,this.root=t||Jt.EMPTY}insert(e,t){return new pt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Jt.BLACK,null,null))}remove(e){return new pt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Jt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xh(this.root,e,this.comparator,!1)}getReverseIterator(){return new xh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xh(this.root,e,this.comparator,!0)}}class xh{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Jt{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??Jt.RED,this.left=a??Jt.EMPTY,this.right=l??Jt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,l){return new Jt(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return Jt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return Jt.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Jt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Jt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Te(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Te(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Te(27949);return e+(this.isRed()?0:1)}}Jt.EMPTY=null,Jt.RED=!0,Jt.BLACK=!1;Jt.EMPTY=new class{constructor(){this.size=0}get key(){throw Te(57766)}get value(){throw Te(16141)}get color(){throw Te(16727)}get left(){throw Te(29726)}get right(){throw Te(36894)}copy(e,t,s,a,l){return this}insert(e,t,s){return new Jt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.comparator=e,this.data=new pt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new r0(this.data.getIterator())}getIteratorFrom(e){return new r0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof xt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new xt(this.comparator);return t.data=e,t}}class r0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.fields=e,e.sort(tn.comparator)}static empty(){return new Pn([])}unionWith(e){let t=new xt(tn.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Pn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return qo(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class $A extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new $A("Invalid base64 string: "+l):l}}(e);return new nn(t)}static fromUint8Array(e){const t=function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l}(e);return new nn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nn.EMPTY_BYTE_STRING=new nn("");const wO=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gr(i){if(Ye(!!i,39018),typeof i=="string"){let e=0;const t=wO.exec(i);if(Ye(!!t,46558,{timestamp:i}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:St(i.seconds),nanos:St(i.nanos)}}function St(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function _r(i){return typeof i=="string"?nn.fromBase64String(i):nn.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZA="server_timestamp",JA="__type__",ew="__previous_value__",tw="__local_write_time__";function $g(i){var e,t;return((t=(((e=i?.mapValue)===null||e===void 0?void 0:e.fields)||{})[JA])===null||t===void 0?void 0:t.stringValue)===ZA}function Ff(i){const e=i.mapValue.fields[ew];return $g(e)?Ff(e):e}function zu(i){const e=gr(i.mapValue.fields[tw].timestampValue);return new ut(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(e,t,s,a,l,c,d,m,g,E){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=m,this.useFetchStreams=g,this.isUsingEmulator=E}}const df="(default)";class Bu{constructor(e,t){this.projectId=e,this.database=t||df}static empty(){return new Bu("","")}get isDefaultDatabase(){return this.database===df}isEqual(e){return e instanceof Bu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw="__type__",RO="__max__",Lh={mapValue:{}},iw="__vector__",pf="value";function yr(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?$g(i)?4:IO(i)?9007199254740991:CO(i)?10:11:Te(28295,{value:i})}function Ui(i,e){if(i===e)return!0;const t=yr(i);if(t!==yr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return zu(i).isEqual(zu(e));case 3:return function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=gr(a.timestampValue),d=gr(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(a,l){return _r(a.bytesValue).isEqual(_r(l.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(a,l){return St(a.geoPointValue.latitude)===St(l.geoPointValue.latitude)&&St(a.geoPointValue.longitude)===St(l.geoPointValue.longitude)}(i,e);case 2:return function(a,l){if("integerValue"in a&&"integerValue"in l)return St(a.integerValue)===St(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=St(a.doubleValue),d=St(l.doubleValue);return c===d?ff(c)===ff(d):isNaN(c)&&isNaN(d)}return!1}(i,e);case 9:return qo(i.arrayValue.values||[],e.arrayValue.values||[],Ui);case 10:case 11:return function(a,l){const c=a.mapValue.fields||{},d=l.mapValue.fields||{};if(s0(c)!==s0(d))return!1;for(const m in c)if(c.hasOwnProperty(m)&&(d[m]===void 0||!Ui(c[m],d[m])))return!1;return!0}(i,e);default:return Te(52216,{left:i})}}function Fu(i,e){return(i.values||[]).find(t=>Ui(t,e))!==void 0}function jo(i,e){if(i===e)return 0;const t=yr(i),s=yr(e);if(t!==s)return Ie(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ie(i.booleanValue,e.booleanValue);case 2:return function(l,c){const d=St(l.integerValue||l.doubleValue),m=St(c.integerValue||c.doubleValue);return d<m?-1:d>m?1:d===m?0:isNaN(d)?isNaN(m)?0:-1:1}(i,e);case 3:return a0(i.timestampValue,e.timestampValue);case 4:return a0(zu(i),zu(e));case 5:return $m(i.stringValue,e.stringValue);case 6:return function(l,c){const d=_r(l),m=_r(c);return d.compareTo(m)}(i.bytesValue,e.bytesValue);case 7:return function(l,c){const d=l.split("/"),m=c.split("/");for(let g=0;g<d.length&&g<m.length;g++){const E=Ie(d[g],m[g]);if(E!==0)return E}return Ie(d.length,m.length)}(i.referenceValue,e.referenceValue);case 8:return function(l,c){const d=Ie(St(l.latitude),St(c.latitude));return d!==0?d:Ie(St(l.longitude),St(c.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return o0(i.arrayValue,e.arrayValue);case 10:return function(l,c){var d,m,g,E;const T=l.fields||{},w=c.fields||{},x=(d=T[pf])===null||d===void 0?void 0:d.arrayValue,F=(m=w[pf])===null||m===void 0?void 0:m.arrayValue,$=Ie(((g=x?.values)===null||g===void 0?void 0:g.length)||0,((E=F?.values)===null||E===void 0?void 0:E.length)||0);return $!==0?$:o0(x,F)}(i.mapValue,e.mapValue);case 11:return function(l,c){if(l===Lh.mapValue&&c===Lh.mapValue)return 0;if(l===Lh.mapValue)return 1;if(c===Lh.mapValue)return-1;const d=l.fields||{},m=Object.keys(d),g=c.fields||{},E=Object.keys(g);m.sort(),E.sort();for(let T=0;T<m.length&&T<E.length;++T){const w=$m(m[T],E[T]);if(w!==0)return w;const x=jo(d[m[T]],g[E[T]]);if(x!==0)return x}return Ie(m.length,E.length)}(i.mapValue,e.mapValue);default:throw Te(23264,{le:t})}}function a0(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Ie(i,e);const t=gr(i),s=gr(e),a=Ie(t.seconds,s.seconds);return a!==0?a:Ie(t.nanos,s.nanos)}function o0(i,e){const t=i.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const l=jo(t[a],s[a]);if(l)return l}return Ie(t.length,s.length)}function Ho(i){return Zm(i)}function Zm(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const s=gr(t);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return _r(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return ge.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let s="[",a=!0;for(const l of t.values||[])a?a=!1:s+=",",s+=Zm(l);return s+"]"}(i.arrayValue):"mapValue"in i?function(t){const s=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of s)l?l=!1:a+=",",a+=`${c}:${Zm(t.fields[c])}`;return a+"}"}(i.mapValue):Te(61005,{value:i})}function Hh(i){switch(yr(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ff(i);return e?16+Hh(e):16;case 5:return 2*i.stringValue.length;case 6:return _r(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((a,l)=>a+Hh(l),0)}(i.arrayValue);case 10:case 11:return function(s){let a=0;return Sr(s.fields,(l,c)=>{a+=l.length+Hh(c)}),a}(i.mapValue);default:throw Te(13486,{value:i})}}function Jm(i){return!!i&&"integerValue"in i}function Zg(i){return!!i&&"arrayValue"in i}function l0(i){return!!i&&"nullValue"in i}function u0(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Gh(i){return!!i&&"mapValue"in i}function CO(i){var e,t;return((t=(((e=i?.mapValue)===null||e===void 0?void 0:e.fields)||{})[nw])===null||t===void 0?void 0:t.stringValue)===iw}function Nu(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return Sr(i.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Nu(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Nu(i.arrayValue.values[t]);return e}return Object.assign({},i)}function IO(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===RO}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this.value=e}static empty(){return new Sn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Gh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Nu(t)}setAll(e){let t=tn.emptyPath(),s={},a=[];e.forEach((c,d)=>{if(!t.isImmediateParentOf(d)){const m=this.getFieldsMap(t);this.applyChanges(m,s,a),s={},a=[],t=d.popLast()}c?s[d.lastSegment()]=Nu(c):a.push(d.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,s,a)}delete(e){const t=this.field(e.popLast());Gh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ui(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];Gh(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){Sr(t,(a,l)=>e[a]=l);for(const a of s)delete e[a]}clone(){return new Sn(Nu(this.value))}}function sw(i){const e=[];return Sr(i.fields,(t,s)=>{const a=new tn([t]);if(Gh(s)){const l=sw(s.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)}),new Pn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,t,s,a,l,c,d){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new hn(e,0,we.min(),we.min(),we.min(),Sn.empty(),0)}static newFoundDocument(e,t,s,a){return new hn(e,1,t,we.min(),s,a,0)}static newNoDocument(e,t){return new hn(e,2,t,we.min(),we.min(),Sn.empty(),0)}static newUnknownDocument(e,t){return new hn(e,3,t,we.min(),we.min(),Sn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Sn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Sn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof hn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new hn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class mf{constructor(e,t){this.position=e,this.inclusive=t}}function c0(i,e,t){let s=0;for(let a=0;a<i.position.length;a++){const l=e[a],c=i.position[a];if(l.field.isKeyField()?s=ge.comparator(ge.fromName(c.referenceValue),t.key):s=jo(c,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function h0(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!Ui(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class gf{constructor(e,t="asc"){this.field=e,this.dir=t}}function NO(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class rw{}class Vt extends rw{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new OO(e,t,s):t==="array-contains"?new PO(e,s):t==="in"?new VO(e,s):t==="not-in"?new xO(e,s):t==="array-contains-any"?new LO(e,s):new Vt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new MO(e,s):new kO(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(jo(t,this.value)):t!==null&&yr(this.value)===yr(t)&&this.matchesComparison(jo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Te(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zi extends rw{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new zi(e,t)}matches(e){return aw(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function aw(i){return i.op==="and"}function ow(i){return DO(i)&&aw(i)}function DO(i){for(const e of i.filters)if(e instanceof zi)return!1;return!0}function eg(i){if(i instanceof Vt)return i.field.canonicalString()+i.op.toString()+Ho(i.value);if(ow(i))return i.filters.map(e=>eg(e)).join(",");{const e=i.filters.map(t=>eg(t)).join(",");return`${i.op}(${e})`}}function lw(i,e){return i instanceof Vt?function(s,a){return a instanceof Vt&&s.op===a.op&&s.field.isEqual(a.field)&&Ui(s.value,a.value)}(i,e):i instanceof zi?function(s,a){return a instanceof zi&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce((l,c,d)=>l&&lw(c,a.filters[d]),!0):!1}(i,e):void Te(19439)}function uw(i){return i instanceof Vt?function(t){return`${t.field.canonicalString()} ${t.op} ${Ho(t.value)}`}(i):i instanceof zi?function(t){return t.op.toString()+" {"+t.getFilters().map(uw).join(" ,")+"}"}(i):"Filter"}class OO extends Vt{constructor(e,t,s){super(e,t,s),this.key=ge.fromName(s.referenceValue)}matches(e){const t=ge.comparator(e.key,this.key);return this.matchesComparison(t)}}class MO extends Vt{constructor(e,t){super(e,"in",t),this.keys=cw("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class kO extends Vt{constructor(e,t){super(e,"not-in",t),this.keys=cw("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function cw(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>ge.fromName(s.referenceValue))}class PO extends Vt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Zg(t)&&Fu(t.arrayValue,this.value)}}class VO extends Vt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Fu(this.value.arrayValue,t)}}class xO extends Vt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Fu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Fu(this.value.arrayValue,t)}}class LO extends Vt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Zg(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Fu(this.value.arrayValue,s))}}/**
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
 */class UO{constructor(e,t=null,s=[],a=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=l,this.startAt=c,this.endAt=d,this.Pe=null}}function f0(i,e=null,t=[],s=[],a=null,l=null,c=null){return new UO(i,e,t,s,a,l,c)}function Jg(i){const e=be(i);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>eg(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(l){return l.field.canonicalString()+l.dir}(s)).join(","),Bf(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Ho(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Ho(s)).join(",")),e.Pe=t}return e.Pe}function e_(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!NO(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!lw(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!h0(i.startAt,e.startAt)&&h0(i.endAt,e.endAt)}function tg(i){return ge.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e,t=null,s=[],a=[],l=null,c="F",d=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=m,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function zO(i,e,t,s,a,l,c,d){return new qf(i,e,t,s,a,l,c,d)}function jf(i){return new qf(i)}function d0(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function BO(i){return i.collectionGroup!==null}function Du(i){const e=be(i);if(e.Te===null){e.Te=[];const t=new Set;for(const l of e.explicitOrderBy)e.Te.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new xt(tn.comparator);return c.filters.forEach(m=>{m.getFlattenedFilters().forEach(g=>{g.isInequality()&&(d=d.add(g.field))})}),d})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.Te.push(new gf(l,s))}),t.has(tn.keyField().canonicalString())||e.Te.push(new gf(tn.keyField(),s))}return e.Te}function Mi(i){const e=be(i);return e.Ie||(e.Ie=FO(e,Du(i))),e.Ie}function FO(i,e){if(i.limitType==="F")return f0(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(a=>{const l=a.dir==="desc"?"asc":"desc";return new gf(a.field,l)});const t=i.endAt?new mf(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new mf(i.startAt.position,i.startAt.inclusive):null;return f0(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function ng(i,e,t){return new qf(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function Hf(i,e){return e_(Mi(i),Mi(e))&&i.limitType===e.limitType}function hw(i){return`${Jg(Mi(i))}|lt:${i.limitType}`}function wo(i){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(a=>uw(a)).join(", ")}]`),Bf(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(a=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(a)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(a=>Ho(a)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(a=>Ho(a)).join(",")),`Target(${s})`}(Mi(i))}; limitType=${i.limitType})`}function Gf(i,e){return e.isFoundDocument()&&function(s,a){const l=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):ge.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)}(i,e)&&function(s,a){for(const l of Du(s))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0}(i,e)&&function(s,a){for(const l of s.filters)if(!l.matches(a))return!1;return!0}(i,e)&&function(s,a){return!(s.startAt&&!function(c,d,m){const g=c0(c,d,m);return c.inclusive?g<=0:g<0}(s.startAt,Du(s),a)||s.endAt&&!function(c,d,m){const g=c0(c,d,m);return c.inclusive?g>=0:g>0}(s.endAt,Du(s),a))}(i,e)}function qO(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function fw(i){return(e,t)=>{let s=!1;for(const a of Du(i)){const l=jO(a,e,t);if(l!==0)return l;s=s||a.field.isKeyField()}return 0}}function jO(i,e,t){const s=i.field.isKeyField()?ge.comparator(e.key,t.key):function(l,c,d){const m=c.data.field(l),g=d.data.field(l);return m!==null&&g!==null?jo(m,g):Te(42886)}(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return Te(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,l]of s)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){Sr(this.inner,(t,s)=>{for(const[a,l]of s)e(a,l)})}isEmpty(){return XA(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HO=new pt(ge.comparator);function Es(){return HO}const dw=new pt(ge.comparator);function Tu(...i){let e=dw;for(const t of i)e=e.insert(t.key,t);return e}function pw(i){let e=dw;return i.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function fa(){return Ou()}function mw(){return Ou()}function Ou(){return new Ra(i=>i.toString(),(i,e)=>i.isEqual(e))}const GO=new pt(ge.comparator),KO=new xt(ge.comparator);function Pe(...i){let e=KO;for(const t of i)e=e.add(t);return e}const YO=new xt(Ie);function QO(){return YO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ff(e)?"-0":e}}function gw(i){return{integerValue:""+i}}function WO(i,e){return TO(e)?gw(e):t_(i,e)}/**
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
 */class Kf{constructor(){this._=void 0}}function XO(i,e,t){return i instanceof qu?function(a,l){const c={fields:{[JA]:{stringValue:ZA},[tw]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&$g(l)&&(l=Ff(l)),l&&(c.fields[ew]=l),{mapValue:c}}(t,e):i instanceof ju?yw(i,e):i instanceof Hu?vw(i,e):function(a,l){const c=_w(a,l),d=p0(c)+p0(a.Ee);return Jm(c)&&Jm(a.Ee)?gw(d):t_(a.serializer,d)}(i,e)}function $O(i,e,t){return i instanceof ju?yw(i,e):i instanceof Hu?vw(i,e):t}function _w(i,e){return i instanceof _f?function(s){return Jm(s)||function(l){return!!l&&"doubleValue"in l}(s)}(e)?e:{integerValue:0}:null}class qu extends Kf{}class ju extends Kf{constructor(e){super(),this.elements=e}}function yw(i,e){const t=Ew(e);for(const s of i.elements)t.some(a=>Ui(a,s))||t.push(s);return{arrayValue:{values:t}}}class Hu extends Kf{constructor(e){super(),this.elements=e}}function vw(i,e){let t=Ew(e);for(const s of i.elements)t=t.filter(a=>!Ui(a,s));return{arrayValue:{values:t}}}class _f extends Kf{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function p0(i){return St(i.integerValue||i.doubleValue)}function Ew(i){return Zg(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZO{constructor(e,t){this.field=e,this.transform=t}}function JO(i,e){return i.field.isEqual(e.field)&&function(s,a){return s instanceof ju&&a instanceof ju||s instanceof Hu&&a instanceof Hu?qo(s.elements,a.elements,Ui):s instanceof _f&&a instanceof _f?Ui(s.Ee,a.Ee):s instanceof qu&&a instanceof qu}(i.transform,e.transform)}class e2{constructor(e,t){this.version=e,this.transformResults=t}}class ui{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ui}static exists(e){return new ui(void 0,e)}static updateTime(e){return new ui(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Kh(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class Yf{}function Tw(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new Aw(i.key,ui.none()):new tc(i.key,i.data,ui.none());{const t=i.data,s=Sn.empty();let a=new xt(tn.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?s.delete(l):s.set(l,c),a=a.add(l)}return new Ar(i.key,s,new Pn(a.toArray()),ui.none())}}function t2(i,e,t){i instanceof tc?function(a,l,c){const d=a.value.clone(),m=g0(a.fieldTransforms,l,c.transformResults);d.setAll(m),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(i,e,t):i instanceof Ar?function(a,l,c){if(!Kh(a.precondition,l))return void l.convertToUnknownDocument(c.version);const d=g0(a.fieldTransforms,l,c.transformResults),m=l.data;m.setAll(Sw(a)),m.setAll(d),l.convertToFoundDocument(c.version,m).setHasCommittedMutations()}(i,e,t):function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function Mu(i,e,t,s){return i instanceof tc?function(l,c,d,m){if(!Kh(l.precondition,c))return d;const g=l.value.clone(),E=_0(l.fieldTransforms,m,c);return g.setAll(E),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null}(i,e,t,s):i instanceof Ar?function(l,c,d,m){if(!Kh(l.precondition,c))return d;const g=_0(l.fieldTransforms,m,c),E=c.data;return E.setAll(Sw(l)),E.setAll(g),c.convertToFoundDocument(c.version,E).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(i,e,t,s):function(l,c,d){return Kh(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(i,e,t)}function n2(i,e){let t=null;for(const s of i.fieldTransforms){const a=e.data.field(s.field),l=_w(s.transform,a||null);l!=null&&(t===null&&(t=Sn.empty()),t.set(s.field,l))}return t||null}function m0(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&qo(s,a,(l,c)=>JO(l,c))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class tc extends Yf{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Ar extends Yf{constructor(e,t,s,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function Sw(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}}),e}function g0(i,e,t){const s=new Map;Ye(i.length===t.length,32656,{Ae:t.length,Re:i.length});for(let a=0;a<t.length;a++){const l=i[a],c=l.transform,d=e.data.field(l.field);s.set(l.field,$O(c,d,t[a]))}return s}function _0(i,e,t){const s=new Map;for(const a of i){const l=a.transform,c=t.data.field(a.field);s.set(a.field,XO(l,c,e))}return s}class Aw extends Yf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class i2 extends Yf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&t2(l,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Mu(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Mu(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=mw();return this.mutations.forEach(a=>{const l=e.get(a.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=t.has(a.key)?null:d;const m=Tw(c,d);m!==null&&s.set(a.key,m),c.isValidDocument()||c.convertToNoDocument(we.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Pe())}isEqual(e){return this.batchId===e.batchId&&qo(this.mutations,e.mutations,(t,s)=>m0(t,s))&&qo(this.baseMutations,e.baseMutations,(t,s)=>m0(t,s))}}class n_{constructor(e,t,s,a){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=a}static from(e,t,s){Ye(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let a=function(){return GO}();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,s[c].version);return new n_(e,t,s,a)}}/**
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
 */class r2{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class a2{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var It,ze;function o2(i){switch(i){case X.OK:return Te(64938);case X.CANCELLED:case X.UNKNOWN:case X.DEADLINE_EXCEEDED:case X.RESOURCE_EXHAUSTED:case X.INTERNAL:case X.UNAVAILABLE:case X.UNAUTHENTICATED:return!1;case X.INVALID_ARGUMENT:case X.NOT_FOUND:case X.ALREADY_EXISTS:case X.PERMISSION_DENIED:case X.FAILED_PRECONDITION:case X.ABORTED:case X.OUT_OF_RANGE:case X.UNIMPLEMENTED:case X.DATA_LOSS:return!0;default:return Te(15467,{code:i})}}function ww(i){if(i===void 0)return vs("GRPC error has no .code"),X.UNKNOWN;switch(i){case It.OK:return X.OK;case It.CANCELLED:return X.CANCELLED;case It.UNKNOWN:return X.UNKNOWN;case It.DEADLINE_EXCEEDED:return X.DEADLINE_EXCEEDED;case It.RESOURCE_EXHAUSTED:return X.RESOURCE_EXHAUSTED;case It.INTERNAL:return X.INTERNAL;case It.UNAVAILABLE:return X.UNAVAILABLE;case It.UNAUTHENTICATED:return X.UNAUTHENTICATED;case It.INVALID_ARGUMENT:return X.INVALID_ARGUMENT;case It.NOT_FOUND:return X.NOT_FOUND;case It.ALREADY_EXISTS:return X.ALREADY_EXISTS;case It.PERMISSION_DENIED:return X.PERMISSION_DENIED;case It.FAILED_PRECONDITION:return X.FAILED_PRECONDITION;case It.ABORTED:return X.ABORTED;case It.OUT_OF_RANGE:return X.OUT_OF_RANGE;case It.UNIMPLEMENTED:return X.UNIMPLEMENTED;case It.DATA_LOSS:return X.DATA_LOSS;default:return Te(39323,{code:i})}}(ze=It||(It={}))[ze.OK=0]="OK",ze[ze.CANCELLED=1]="CANCELLED",ze[ze.UNKNOWN=2]="UNKNOWN",ze[ze.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ze[ze.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ze[ze.NOT_FOUND=5]="NOT_FOUND",ze[ze.ALREADY_EXISTS=6]="ALREADY_EXISTS",ze[ze.PERMISSION_DENIED=7]="PERMISSION_DENIED",ze[ze.UNAUTHENTICATED=16]="UNAUTHENTICATED",ze[ze.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ze[ze.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ze[ze.ABORTED=10]="ABORTED",ze[ze.OUT_OF_RANGE=11]="OUT_OF_RANGE",ze[ze.UNIMPLEMENTED=12]="UNIMPLEMENTED",ze[ze.INTERNAL=13]="INTERNAL",ze[ze.UNAVAILABLE=14]="UNAVAILABLE",ze[ze.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const l2=new lr([4294967295,4294967295],0);function y0(i){const e=KA().encode(i),t=new UA;return t.update(e),new Uint8Array(t.digest())}function v0(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new lr([t,s],0),new lr([a,l],0)]}class i_{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Su(`Invalid padding: ${t}`);if(s<0)throw new Su(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Su(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Su(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=lr.fromNumber(this.fe)}pe(e,t,s){let a=e.add(t.multiply(lr.fromNumber(s)));return a.compare(l2)===1&&(a=new lr([a.getBits(0),a.getBits(1)],0)),a.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=y0(e),[s,a]=v0(t);for(let l=0;l<this.hashCount;l++){const c=this.pe(s,a,l);if(!this.ye(c))return!1}return!0}static create(e,t,s){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new i_(l,a,t);return s.forEach(d=>c.insert(d)),c}insert(e){if(this.fe===0)return;const t=y0(e),[s,a]=v0(t);for(let l=0;l<this.hashCount;l++){const c=this.pe(s,a,l);this.we(c)}}we(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Su extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e,t,s,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const a=new Map;return a.set(e,nc.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Qf(we.min(),a,new pt(Ie),Es(),Pe())}}class nc{constructor(e,t,s,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new nc(s,t,Pe(),Pe(),Pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e,t,s,a){this.Se=e,this.removedTargetIds=t,this.key=s,this.be=a}}class bw{constructor(e,t){this.targetId=e,this.De=t}}class Rw{constructor(e,t,s=nn.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=a}}class E0{constructor(){this.ve=0,this.Ce=T0(),this.Fe=nn.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Pe(),t=Pe(),s=Pe();return this.Ce.forEach((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:s=s.add(a);break;default:Te(38017,{changeType:l})}}),new nc(this.Fe,this.Me,e,t,s)}ke(){this.xe=!1,this.Ce=T0()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Ye(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class u2{constructor(e){this.We=e,this.Ge=new Map,this.ze=Es(),this.je=Uh(),this.Je=Uh(),this.He=new pt(Ie)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{const s=this.tt(t);switch(e.state){case 0:this.nt(t)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),s.Be(e.resumeToken));break;default:Te(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((s,a)=>{this.nt(a)&&t(a)})}it(e){const t=e.targetId,s=e.De.count,a=this.st(t);if(a){const l=a.target;if(tg(l))if(s===0){const c=new ge(l.path);this.Xe(t,c,hn.newNoDocument(c,we.min()))}else Ye(s===1,20013,{expectedCount:s});else{const c=this.ot(t);if(c!==s){const d=this._t(e),m=d?this.ut(d,e,c):1;if(m!==0){this.rt(t);const g=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,g)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:l=0}=t;let c,d;try{c=_r(s).toUint8Array()}catch(m){if(m instanceof $A)return pr("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{d=new i_(c,a,l)}catch(m){return pr(m instanceof Su?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return d.fe===0?null:d}ut(e,t,s){return t.De.count===s-this.ht(e,t.targetId)?0:2}ht(e,t){const s=this.We.getRemoteKeysForTarget(t);let a=0;return s.forEach(l=>{const c=this.We.lt(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.Xe(t,l,null),a++)}),a}Pt(e){const t=new Map;this.Ge.forEach((l,c)=>{const d=this.st(c);if(d){if(l.current&&tg(d.target)){const m=new ge(d.target.path);this.Tt(m).has(c)||this.It(c,m)||this.Xe(c,m,hn.newNoDocument(m,e))}l.Ne&&(t.set(c,l.Le()),l.ke())}});let s=Pe();this.Je.forEach((l,c)=>{let d=!0;c.forEachWhile(m=>{const g=this.st(m);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(s=s.add(l))}),this.ze.forEach((l,c)=>c.setReadTime(e));const a=new Qf(e,t,this.He,this.ze,s);return this.ze=Es(),this.je=Uh(),this.Je=Uh(),this.He=new pt(Ie),a}Ze(e,t){if(!this.nt(e))return;const s=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,s),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,s){if(!this.nt(e))return;const a=this.tt(e);this.It(e,t)?a.qe(t,1):a.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),s&&(this.ze=this.ze.insert(t,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new E0,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new xt(Ie),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new xt(Ie),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||oe("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new E0),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Uh(){return new pt(ge.comparator)}function T0(){return new pt(ge.comparator)}const c2={asc:"ASCENDING",desc:"DESCENDING"},h2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},f2={and:"AND",or:"OR"};class d2{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ig(i,e){return i.useProto3Json||Bf(e)?e:{value:e}}function yf(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Cw(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function p2(i,e){return yf(i,e.toTimestamp())}function ki(i){return Ye(!!i,49232),we.fromTimestamp(function(t){const s=gr(t);return new ut(s.seconds,s.nanos)}(i))}function s_(i,e){return sg(i,e).canonicalString()}function sg(i,e){const t=function(a){return new lt(["projects",a.projectId,"databases",a.database])}(i).child("documents");return e===void 0?t:t.child(e)}function Iw(i){const e=lt.fromString(i);return Ye(kw(e),10190,{key:e.toString()}),e}function rg(i,e){return s_(i.databaseId,e.path)}function bm(i,e){const t=Iw(e);if(t.get(1)!==i.databaseId.projectId)throw new fe(X.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new fe(X.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new ge(Dw(t))}function Nw(i,e){return s_(i.databaseId,e)}function m2(i){const e=Iw(i);return e.length===4?lt.emptyPath():Dw(e)}function ag(i){return new lt(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function Dw(i){return Ye(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function S0(i,e,t){return{name:rg(i,e),fields:t.value.mapValue.fields}}function g2(i,e){let t;if("targetChange"in e){e.targetChange;const s=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Te(39313,{state:g})}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=function(g,E){return g.useProto3Json?(Ye(E===void 0||typeof E=="string",58123),nn.fromBase64String(E||"")):(Ye(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),nn.fromUint8Array(E||new Uint8Array))}(i,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&function(g){const E=g.code===void 0?X.UNKNOWN:ww(g.code);return new fe(E,g.message||"")}(c);t=new Rw(s,a,l,d||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=bm(i,s.document.name),l=ki(s.document.updateTime),c=s.document.createTime?ki(s.document.createTime):we.min(),d=new Sn({mapValue:{fields:s.document.fields}}),m=hn.newFoundDocument(a,l,c,d),g=s.targetIds||[],E=s.removedTargetIds||[];t=new Yh(g,E,m.key,m)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=bm(i,s.document),l=s.readTime?ki(s.readTime):we.min(),c=hn.newNoDocument(a,l),d=s.removedTargetIds||[];t=new Yh([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=bm(i,s.document),l=s.removedTargetIds||[];t=new Yh([],l,a,null)}else{if(!("filter"in e))return Te(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:l}=s,c=new a2(a,l),d=s.targetId;t=new bw(d,c)}}return t}function _2(i,e){let t;if(e instanceof tc)t={update:S0(i,e.key,e.value)};else if(e instanceof Aw)t={delete:rg(i,e.key)};else if(e instanceof Ar)t={update:S0(i,e.key,e.data),updateMask:R2(e.fieldMask)};else{if(!(e instanceof i2))return Te(16599,{Rt:e.type});t={verify:rg(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(l,c){const d=c.transform;if(d instanceof qu)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof ju)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Hu)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof _f)return{fieldPath:c.field.canonicalString(),increment:d.Ee};throw Te(20930,{transform:c.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(a,l){return l.updateTime!==void 0?{updateTime:p2(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Te(27497)}(i,e.precondition)),t}function y2(i,e){return i&&i.length>0?(Ye(e!==void 0,14353),i.map(t=>function(a,l){let c=a.updateTime?ki(a.updateTime):ki(l);return c.isEqual(we.min())&&(c=ki(l)),new e2(c,a.transformResults||[])}(t,e))):[]}function v2(i,e){return{documents:[Nw(i,e.path)]}}function E2(i,e){const t={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Nw(i,a);const l=function(g){if(g.length!==0)return Mw(zi.create(g,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const c=function(g){if(g.length!==0)return g.map(E=>function(w){return{field:bo(w.field),direction:A2(w.dir)}}(E))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=ig(i,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{Vt:t,parent:a}}function T2(i){let e=m2(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){Ye(s===1,65062);const E=t.from[0];E.allDescendants?a=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=function(T){const w=Ow(T);return w instanceof zi&&ow(w)?w.getFilters():[w]}(t.where));let c=[];t.orderBy&&(c=function(T){return T.map(w=>function(F){return new gf(Ro(F.field),function(H){switch(H){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(F.direction))}(w))}(t.orderBy));let d=null;t.limit&&(d=function(T){let w;return w=typeof T=="object"?T.value:T,Bf(w)?null:w}(t.limit));let m=null;t.startAt&&(m=function(T){const w=!!T.before,x=T.values||[];return new mf(x,w)}(t.startAt));let g=null;return t.endAt&&(g=function(T){const w=!T.before,x=T.values||[];return new mf(x,w)}(t.endAt)),zO(e,a,c,l,d,"F",m,g)}function S2(i,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Te(28987,{purpose:a})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Ow(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Ro(t.unaryFilter.field);return Vt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=Ro(t.unaryFilter.field);return Vt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Ro(t.unaryFilter.field);return Vt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Ro(t.unaryFilter.field);return Vt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Te(61313);default:return Te(60726)}}(i):i.fieldFilter!==void 0?function(t){return Vt.create(Ro(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Te(58110);default:return Te(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return zi.create(t.compositeFilter.filters.map(s=>Ow(s)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return Te(1026)}}(t.compositeFilter.op))}(i):Te(30097,{filter:i})}function A2(i){return c2[i]}function w2(i){return h2[i]}function b2(i){return f2[i]}function bo(i){return{fieldPath:i.canonicalString()}}function Ro(i){return tn.fromServerFormat(i.fieldPath)}function Mw(i){return i instanceof Vt?function(t){if(t.op==="=="){if(u0(t.value))return{unaryFilter:{field:bo(t.field),op:"IS_NAN"}};if(l0(t.value))return{unaryFilter:{field:bo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(u0(t.value))return{unaryFilter:{field:bo(t.field),op:"IS_NOT_NAN"}};if(l0(t.value))return{unaryFilter:{field:bo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:bo(t.field),op:w2(t.op),value:t.value}}}(i):i instanceof zi?function(t){const s=t.getFilters().map(a=>Mw(a));return s.length===1?s[0]:{compositeFilter:{op:b2(t.op),filters:s}}}(i):Te(54877,{filter:i})}function R2(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function kw(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,t,s,a,l=we.min(),c=we.min(),d=nn.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=m}withSequenceNumber(e){return new sr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C2{constructor(e){this.gt=e}}function I2(i){const e=T2({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?ng(e,e.limit,"L"):e}/**
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
 */class N2{constructor(){this.Dn=new D2}addToCollectionParentIndex(e,t){return this.Dn.add(t),W.resolve()}getCollectionParents(e,t){return W.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return W.resolve()}deleteFieldIndex(e,t){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,t){return W.resolve()}getDocumentsMatchingTarget(e,t){return W.resolve(null)}getIndexType(e,t){return W.resolve(0)}getFieldIndexes(e,t){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,t){return W.resolve(mr.min())}getMinOffsetFromCollectionGroup(e,t){return W.resolve(mr.min())}updateCollectionGroup(e,t,s){return W.resolve()}updateIndexEntries(e,t){return W.resolve()}}class D2{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new xt(lt.comparator),l=!a.has(s);return this.index[t]=a.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new xt(lt.comparator)).toArray()}}/**
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
 */const A0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Pw=41943040;class Tn{static withCacheSize(e){return new Tn(e,Tn.DEFAULT_COLLECTION_PERCENTILE,Tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tn.DEFAULT_COLLECTION_PERCENTILE=10,Tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tn.DEFAULT=new Tn(Pw,Tn.DEFAULT_COLLECTION_PERCENTILE,Tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tn.DISABLED=new Tn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Go(0)}static ur(){return new Go(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0="LruGarbageCollector",O2=1048576;function b0([i,e],[t,s]){const a=Ie(i,t);return a===0?Ie(e,s):a}class M2{constructor(e){this.Tr=e,this.buffer=new xt(b0),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();b0(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class k2{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){oe(w0,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){el(t)?oe(w0,"Ignoring IndexedDB error during garbage collection: ",t):await Jo(t)}await this.Rr(3e5)})}}class P2{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return W.resolve(zf.ue);const s=new M2(t);return this.Vr.forEachTarget(e,a=>s.Er(a.sequenceNumber)).next(()=>this.Vr.gr(e,a=>s.Er(a))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(oe("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve(A0)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(oe("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),A0):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let s,a,l,c,d,m,g;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(oe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),a=this.params.maximumSequenceNumbersToCollect):a=T,c=Date.now(),this.nthSequenceNumber(e,a))).next(T=>(s=T,d=Date.now(),this.removeTargets(e,s,t))).next(T=>(l=T,m=Date.now(),this.removeOrphanedDocuments(e,s))).next(T=>(g=Date.now(),Ao()<=ke.DEBUG&&oe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-E}ms
	Determined least recently used ${a} in `+(d-c)+`ms
	Removed ${l} targets in `+(m-d)+`ms
	Removed ${T} documents in `+(g-m)+`ms
Total Duration: ${g-E}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:T})))}}function V2(i,e){return new P2(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x2{constructor(){this.changes=new Ra(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,hn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?W.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class L2{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U2{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(s=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(s!==null&&Mu(s.mutation,a,Pn.empty(),ut.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Pe()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Pe()){const a=fa();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,s).next(l=>{let c=Tu();return l.forEach((d,m)=>{c=c.insert(d,m.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const s=fa();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Pe()))}populateOverlays(e,t,s){const a=[];return s.forEach(l=>{t.has(l)||a.push(l)}),this.documentOverlayCache.getOverlays(e,a).next(l=>{l.forEach((c,d)=>{t.set(c,d)})})}computeViews(e,t,s,a){let l=Es();const c=Ou(),d=function(){return Ou()}();return t.forEach((m,g)=>{const E=s.get(g.key);a.has(g.key)&&(E===void 0||E.mutation instanceof Ar)?l=l.insert(g.key,g):E!==void 0?(c.set(g.key,E.mutation.getFieldMask()),Mu(E.mutation,g,E.mutation.getFieldMask(),ut.now())):c.set(g.key,Pn.empty())}),this.recalculateAndSaveOverlays(e,l).next(m=>(m.forEach((g,E)=>c.set(g,E)),t.forEach((g,E)=>{var T;return d.set(g,new L2(E,(T=c.get(g))!==null&&T!==void 0?T:null))}),d))}recalculateAndSaveOverlays(e,t){const s=Ou();let a=new pt((c,d)=>c-d),l=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const d of c)d.keys().forEach(m=>{const g=t.get(m);if(g===null)return;let E=s.get(m)||Pn.empty();E=d.applyToLocalView(g,E),s.set(m,E);const T=(a.get(d.batchId)||Pe()).add(m);a=a.insert(d.batchId,T)})}).next(()=>{const c=[],d=a.getReverseIterator();for(;d.hasNext();){const m=d.getNext(),g=m.key,E=m.value,T=mw();E.forEach(w=>{if(!l.has(w)){const x=Tw(t.get(w),s.get(w));x!==null&&T.set(w,x),l=l.add(w)}}),c.push(this.documentOverlayCache.saveOverlays(e,g,T))}return W.waitFor(c)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,a){return function(c){return ge.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):BO(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next(l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-l.size):W.resolve(fa());let d=Uu,m=l;return c.next(g=>W.forEach(g,(E,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),l.get(E)?W.resolve():this.remoteDocumentCache.getEntry(e,E).next(w=>{m=m.insert(E,w)}))).next(()=>this.populateOverlays(e,g,l)).next(()=>this.computeViews(e,m,g,Pe())).next(E=>({batchId:d,changes:pw(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ge(t)).next(s=>{let a=Tu();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const l=t.collectionGroup;let c=Tu();return this.indexManager.getCollectionParents(e,l).next(d=>W.forEach(d,m=>{const g=function(T,w){return new qf(w,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,m.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,s,a).next(E=>{E.forEach((T,w)=>{c=c.insert(T,w)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,s,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,a))).next(c=>{l.forEach((m,g)=>{const E=g.getKey();c.get(E)===null&&(c=c.insert(E,hn.newInvalidDocument(E)))});let d=Tu();return c.forEach((m,g)=>{const E=l.get(m);E!==void 0&&Mu(E.mutation,g,Pn.empty(),ut.now()),Gf(t,g)&&(d=d.insert(m,g))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return W.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(a){return{id:a.id,version:a.version,createTime:ki(a.createTime)}}(t)),W.resolve()}getNamedQuery(e,t){return W.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(a){return{name:a.name,query:I2(a.bundledQuery),readTime:ki(a.readTime)}}(t)),W.resolve()}}/**
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
 */class B2{constructor(){this.overlays=new pt(ge.comparator),this.kr=new Map}getOverlay(e,t){return W.resolve(this.overlays.get(t))}getOverlays(e,t){const s=fa();return W.forEach(t,a=>this.getOverlay(e,a).next(l=>{l!==null&&s.set(a,l)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((a,l)=>{this.wt(e,t,l)}),W.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.kr.get(s);return a!==void 0&&(a.forEach(l=>this.overlays=this.overlays.remove(l)),this.kr.delete(s)),W.resolve()}getOverlaysForCollection(e,t,s){const a=fa(),l=t.length+1,c=new ge(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const m=d.getNext().value,g=m.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&m.largestBatchId>s&&a.set(m.getKey(),m)}return W.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let l=new pt((g,E)=>g-E);const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>s){let E=l.get(g.largestBatchId);E===null&&(E=fa(),l=l.insert(g.largestBatchId,E)),E.set(g.getKey(),g)}}const d=fa(),m=l.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach((g,E)=>d.set(g,E)),!(d.size()>=a)););return W.resolve(d)}wt(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const c=this.kr.get(a.largestBatchId).delete(s.key);this.kr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(s.key,new r2(t,s));let l=this.kr.get(t);l===void 0&&(l=Pe(),this.kr.set(t,l)),this.kr.set(t,l.add(s.key))}}/**
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
 */class F2{constructor(){this.sessionToken=nn.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,W.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(){this.qr=new xt(Gt.Qr),this.$r=new xt(Gt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const s=new Gt(e,t);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Wr(new Gt(e,t))}Gr(e,t){e.forEach(s=>this.removeReference(s,t))}zr(e){const t=new ge(new lt([])),s=new Gt(t,e),a=new Gt(t,e+1),l=[];return this.$r.forEachInRange([s,a],c=>{this.Wr(c),l.push(c.key)}),l}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new ge(new lt([])),s=new Gt(t,e),a=new Gt(t,e+1);let l=Pe();return this.$r.forEachInRange([s,a],c=>{l=l.add(c.key)}),l}containsKey(e){const t=new Gt(e,0),s=this.qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Gt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return ge.comparator(e.key,t.key)||Ie(e.Hr,t.Hr)}static Ur(e,t){return Ie(e.Hr,t.Hr)||ge.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new xt(Gt.Qr)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const l=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new s2(l,t,s,a);this.mutationQueue.push(c);for(const d of a)this.Yr=this.Yr.add(new Gt(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return W.resolve(c)}lookupMutationBatch(e,t){return W.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.Xr(s),l=a<0?0:a;return W.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?Xg:this.er-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Gt(t,0),a=new Gt(t,Number.POSITIVE_INFINITY),l=[];return this.Yr.forEachInRange([s,a],c=>{const d=this.Zr(c.Hr);l.push(d)}),W.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new xt(Ie);return t.forEach(a=>{const l=new Gt(a,0),c=new Gt(a,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([l,c],d=>{s=s.add(d.Hr)})}),W.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let l=s;ge.isDocumentKey(l)||(l=l.child(""));const c=new Gt(new ge(l),0);let d=new xt(Ie);return this.Yr.forEachWhile(m=>{const g=m.key.path;return!!s.isPrefixOf(g)&&(g.length===a&&(d=d.add(m.Hr)),!0)},c),W.resolve(this.ei(d))}ei(e){const t=[];return e.forEach(s=>{const a=this.Zr(s);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){Ye(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return W.forEach(t.mutations,a=>{const l=new Gt(a.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Yr=s})}rr(e){}containsKey(e,t){const s=new Gt(t,0),a=this.Yr.firstAfterOrEqual(s);return W.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(e){this.ni=e,this.docs=function(){return new pt(ge.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),l=a?a.size:0,c=this.ni(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return W.resolve(s?s.document.mutableCopy():hn.newInvalidDocument(t))}getEntries(e,t){let s=Es();return t.forEach(a=>{const l=this.docs.get(a);s=s.insert(a,l?l.document.mutableCopy():hn.newInvalidDocument(a))}),W.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let l=Es();const c=t.path,d=new ge(c.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(d);for(;m.hasNext();){const{key:g,value:{document:E}}=m.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||_O(gO(E),s)<=0||(a.has(E.key)||Gf(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return W.resolve(l)}getAllFromCollectionGroup(e,t,s,a){Te(9500)}ri(e,t){return W.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new H2(this)}getSize(e){return W.resolve(this.size)}}class H2 extends x2{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach((s,a)=>{a.isValidDocument()?t.push(this.Or.addEntry(e,a)):this.Or.removeEntry(s)}),W.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G2{constructor(e){this.persistence=e,this.ii=new Ra(t=>Jg(t),e_),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.si=0,this.oi=new r_,this.targetCount=0,this._i=Go.ar()}forEachTarget(e,t){return this.ii.forEach((s,a)=>t(a)),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.si&&(this.si=t),W.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Go(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,W.resolve()}updateTargetData(e,t){return this.hr(t),W.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,t,s){let a=0;const l=[];return this.ii.forEach((c,d)=>{d.sequenceNumber<=t&&s.get(d.targetId)===null&&(this.ii.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)}),W.waitFor(l).next(()=>a)}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,t){const s=this.ii.get(t)||null;return W.resolve(s)}addMatchingKeys(e,t,s){return this.oi.Kr(t,s),W.resolve()}removeMatchingKeys(e,t,s){this.oi.Gr(t,s);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach(c=>{l.push(a.markPotentiallyOrphaned(e,c))}),W.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),W.resolve()}getMatchingKeysForTargetId(e,t){const s=this.oi.Jr(t);return W.resolve(s)}containsKey(e,t){return W.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(e,t){this.ai={},this.overlays={},this.ui=new zf(0),this.ci=!1,this.ci=!0,this.li=new F2,this.referenceDelegate=e(this),this.hi=new G2(this),this.indexManager=new N2,this.remoteDocumentCache=function(a){return new j2(a)}(s=>this.referenceDelegate.Pi(s)),this.serializer=new C2(t),this.Ti=new z2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new B2,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ai[e.toKey()];return s||(s=new q2(t,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,s){oe("MemoryPersistence","Starting transaction:",e);const a=new K2(this.ui.next());return this.referenceDelegate.Ii(),s(a).next(l=>this.referenceDelegate.di(a).next(()=>l)).toPromise().then(l=>(a.raiseOnCommittedEvent(),l))}Ei(e,t){return W.or(Object.values(this.ai).map(s=>()=>s.containsKey(e,t)))}}class K2 extends vO{constructor(e){super(),this.currentSequenceNumber=e}}class a_{constructor(e){this.persistence=e,this.Ai=new r_,this.Ri=null}static Vi(e){return new a_(e)}get mi(){if(this.Ri)return this.Ri;throw Te(60996)}addReference(e,t,s){return this.Ai.addReference(s,t),this.mi.delete(s.toString()),W.resolve()}removeReference(e,t,s){return this.Ai.removeReference(s,t),this.mi.add(s.toString()),W.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),W.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(a=>this.mi.add(a.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(l=>this.mi.add(l.toString()))}).next(()=>s.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.mi,s=>{const a=ge.fromPath(s);return this.fi(e,a).next(l=>{l||t.removeEntry(a,we.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(s=>{s?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return W.or([()=>W.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class vf{constructor(e,t){this.persistence=e,this.gi=new Ra(s=>SO(s.path),(s,a)=>s.isEqual(a)),this.garbageCollector=V2(this,t)}static Vi(e,t){return new vf(e,t)}Ii(){}di(e){return W.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(a=>s+a))}yr(e){let t=0;return this.gr(e,s=>{t++}).next(()=>t)}gr(e,t){return W.forEach(this.gi,(s,a)=>this.Sr(e,s,a).next(l=>l?W.resolve():t(a)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.ri(e,c=>this.Sr(e,c,t).next(d=>{d||(s++,l.removeEntry(c,we.min()))})).next(()=>l.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),W.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),W.resolve()}removeReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),W.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),W.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Hh(e.data.value)),t}Sr(e,t,s){return W.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.gi.get(t);return W.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.Is=s,this.ds=a}static Es(e,t){let s=Pe(),a=Pe();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new o_(e,t.fromCache,s,a)}}/**
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
 */class Y2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Q2{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return Q1()?8:EO(dn())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,s,a){const l={result:null};return this.ps(e,t).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.ys(e,t,a,s).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new Y2;return this.ws(e,t,c).next(d=>{if(l.result=d,this.Rs)return this.Ss(e,t,c,d.size)})}).next(()=>l.result)}Ss(e,t,s,a){return s.documentReadCount<this.Vs?(Ao()<=ke.DEBUG&&oe("QueryEngine","SDK will not create cache indexes for query:",wo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),W.resolve()):(Ao()<=ke.DEBUG&&oe("QueryEngine","Query:",wo(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.fs*a?(Ao()<=ke.DEBUG&&oe("QueryEngine","The SDK decides to create cache indexes for query:",wo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Mi(t))):W.resolve())}ps(e,t){if(d0(t))return W.resolve(null);let s=Mi(t);return this.indexManager.getIndexType(e,s).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=ng(t,null,"F"),s=Mi(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(l=>{const c=Pe(...l);return this.gs.getDocuments(e,c).next(d=>this.indexManager.getMinOffset(e,s).next(m=>{const g=this.bs(t,d);return this.Ds(t,g,c,m.readTime)?this.ps(e,ng(t,null,"F")):this.vs(e,g,t,m)}))})))}ys(e,t,s,a){return d0(t)||a.isEqual(we.min())?W.resolve(null):this.gs.getDocuments(e,s).next(l=>{const c=this.bs(t,l);return this.Ds(t,c,s,a)?W.resolve(null):(Ao()<=ke.DEBUG&&oe("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),wo(t)),this.vs(e,c,t,mO(a,Uu)).next(d=>d))})}bs(e,t){let s=new xt(fw(e));return t.forEach((a,l)=>{Gf(e,l)&&(s=s.add(l))}),s}Ds(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}ws(e,t,s){return Ao()<=ke.DEBUG&&oe("QueryEngine","Using full collection scan to execute query:",wo(t)),this.gs.getDocumentsMatchingQuery(e,t,mr.min(),s)}vs(e,t,s,a){return this.gs.getDocumentsMatchingQuery(e,s,a).next(l=>(t.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_="LocalStore",W2=3e8;class X2{constructor(e,t,s,a){this.persistence=e,this.Cs=t,this.serializer=a,this.Fs=new pt(Ie),this.Ms=new Ra(l=>Jg(l),e_),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new U2(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}}function $2(i,e,t,s){return new X2(i,e,t,s)}async function xw(i,e){const t=be(i);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next(l=>(a=l,t.Ns(e),t.mutationQueue.getAllMutationBatches(s))).next(l=>{const c=[],d=[];let m=Pe();for(const g of a){c.push(g.batchId);for(const E of g.mutations)m=m.add(E.key)}for(const g of l){d.push(g.batchId);for(const E of g.mutations)m=m.add(E.key)}return t.localDocuments.getDocuments(s,m).next(g=>({Bs:g,removedBatchIds:c,addedBatchIds:d}))})})}function Z2(i,e){const t=be(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const a=e.batch.keys(),l=t.Os.newChangeBuffer({trackRemovals:!0});return function(d,m,g,E){const T=g.batch,w=T.keys();let x=W.resolve();return w.forEach(F=>{x=x.next(()=>E.getEntry(m,F)).next($=>{const H=g.docVersions.get(F);Ye(H!==null,48541),$.version.compareTo(H)<0&&(T.applyToRemoteDocument($,g),$.isValidDocument()&&($.setReadTime(g.commitVersion),E.addEntry($)))})}),x.next(()=>d.mutationQueue.removeMutationBatch(m,T))}(t,s,e,l).next(()=>l.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(d){let m=Pe();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(m=m.add(d.batch.mutations[g].key));return m}(e))).next(()=>t.localDocuments.getDocuments(s,a))})}function Lw(i){const e=be(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function J2(i,e){const t=be(i),s=e.snapshotVersion;let a=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=t.Os.newChangeBuffer({trackRemovals:!0});a=t.Fs;const d=[];e.targetChanges.forEach((E,T)=>{const w=a.get(T);if(!w)return;d.push(t.hi.removeMatchingKeys(l,E.removedDocuments,T).next(()=>t.hi.addMatchingKeys(l,E.addedDocuments,T)));let x=w.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?x=x.withResumeToken(nn.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):E.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(E.resumeToken,s)),a=a.insert(T,x),function($,H,ae){return $.resumeToken.approximateByteSize()===0||H.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=W2?!0:ae.addedDocuments.size+ae.modifiedDocuments.size+ae.removedDocuments.size>0}(w,x,E)&&d.push(t.hi.updateTargetData(l,x))});let m=Es(),g=Pe();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))}),d.push(eM(l,c,e.documentUpdates).next(E=>{m=E.Ls,g=E.ks})),!s.isEqual(we.min())){const E=t.hi.getLastRemoteSnapshotVersion(l).next(T=>t.hi.setTargetsMetadata(l,l.currentSequenceNumber,s));d.push(E)}return W.waitFor(d).next(()=>c.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,m,g)).next(()=>m)}).then(l=>(t.Fs=a,l))}function eM(i,e,t){let s=Pe(),a=Pe();return t.forEach(l=>s=s.add(l)),e.getEntries(i,s).next(l=>{let c=Es();return t.forEach((d,m)=>{const g=l.get(d);m.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(d)),m.isNoDocument()&&m.version.isEqual(we.min())?(e.removeEntry(d,m.readTime),c=c.insert(d,m)):!g.isValidDocument()||m.version.compareTo(g.version)>0||m.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(m),c=c.insert(d,m)):oe(l_,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",m.version)}),{Ls:c,ks:a}})}function tM(i,e){const t=be(i);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=Xg),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function nM(i,e){const t=be(i);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let a;return t.hi.getTargetData(s,e).next(l=>l?(a=l,W.resolve(a)):t.hi.allocateTargetId(s).next(c=>(a=new sr(e,c,"TargetPurposeListen",s.currentSequenceNumber),t.hi.addTargetData(s,a).next(()=>a))))}).then(s=>{const a=t.Fs.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(s.targetId,s),t.Ms.set(e,s.targetId)),s})}async function og(i,e,t){const s=be(i),a=s.Fs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,c=>s.persistence.referenceDelegate.removeTarget(c,a))}catch(c){if(!el(c))throw c;oe(l_,`Failed to update sequence numbers for target ${e}: ${c}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(a.target)}function R0(i,e,t){const s=be(i);let a=we.min(),l=Pe();return s.persistence.runTransaction("Execute query","readwrite",c=>function(m,g,E){const T=be(m),w=T.Ms.get(E);return w!==void 0?W.resolve(T.Fs.get(w)):T.hi.getTargetData(g,E)}(s,c,Mi(e)).next(d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(c,d.targetId).next(m=>{l=m})}).next(()=>s.Cs.getDocumentsMatchingQuery(c,e,t?a:we.min(),t?l:Pe())).next(d=>(iM(s,qO(e),d),{documents:d,qs:l})))}function iM(i,e,t){let s=i.xs.get(e)||we.min();t.forEach((a,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)}),i.xs.set(e,s)}class C0{constructor(){this.activeTargetIds=QO()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sM{constructor(){this.Fo=new C0,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,s){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new C0,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class rM{xo(e){}shutdown(){}}/**
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
 */const I0="ConnectivityMonitor";class N0{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){oe(I0,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){oe(I0,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let zh=null;function lg(){return zh===null?zh=function(){return 268435456+Math.round(2147483648*Math.random())}():zh++,"0x"+zh.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm="RestConnection",aM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class oM{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${s}/databases/${a}`,this.Ko=this.databaseId.database===df?`project_id=${s}`:`project_id=${s}&database_id=${a}`}Wo(e,t,s,a,l){const c=lg(),d=this.Go(e,t.toUriEncodedString());oe(Rm,`Sending RPC '${e}' ${c}:`,d,s);const m={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(m,a,l);const{host:g}=new URL(d),E=Tr(g);return this.jo(e,d,m,s,E).then(T=>(oe(Rm,`Received RPC '${e}' ${c}: `,T),T),T=>{throw pr(Rm,`RPC '${e}' ${c} failed with error: `,T,"url: ",d,"request:",s),T})}Jo(e,t,s,a,l,c){return this.Wo(e,t,s,a,l)}zo(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Zo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((a,l)=>e[l]=a),s&&s.headers.forEach((a,l)=>e[l]=a)}Go(e,t){const s=aM[e];return`${this.$o}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lM{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on="WebChannelConnection";class uM extends oM{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,s,a,l){const c=lg();return new Promise((d,m)=>{const g=new zA;g.setWithCredentials(!0),g.listenOnce(BA.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case jh.NO_ERROR:const T=g.getResponseJson();oe(on,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(T)),d(T);break;case jh.TIMEOUT:oe(on,`RPC '${e}' ${c} timed out`),m(new fe(X.DEADLINE_EXCEEDED,"Request time out"));break;case jh.HTTP_ERROR:const w=g.getStatus();if(oe(on,`RPC '${e}' ${c} failed with status:`,w,"response text:",g.getResponseText()),w>0){let x=g.getResponseJson();Array.isArray(x)&&(x=x[0]);const F=x?.error;if(F&&F.status&&F.message){const $=function(ae){const le=ae.toLowerCase().replace(/_/g,"-");return Object.values(X).indexOf(le)>=0?le:X.UNKNOWN}(F.status);m(new fe($,F.message))}else m(new fe(X.UNKNOWN,"Server responded with status "+g.getStatus()))}else m(new fe(X.UNAVAILABLE,"Connection failed."));break;default:Te(9055,{c_:e,streamId:c,l_:g.getLastErrorCode(),h_:g.getLastError()})}}finally{oe(on,`RPC '${e}' ${c} completed.`)}});const E=JSON.stringify(a);oe(on,`RPC '${e}' ${c} sending request:`,a),g.send(t,"POST",E,s,15)})}P_(e,t,s){const a=lg(),l=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=jA(),d=qA(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(m.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(m.useFetchStreams=!0),this.zo(m.initMessageHeaders,t,s),m.encodeInitMessageHeaders=!0;const E=l.join("");oe(on,`Creating RPC '${e}' stream ${a}: ${E}`,m);const T=c.createWebChannel(E,m);this.T_(T);let w=!1,x=!1;const F=new lM({Ho:H=>{x?oe(on,`Not sending because RPC '${e}' stream ${a} is closed:`,H):(w||(oe(on,`Opening RPC '${e}' stream ${a} transport.`),T.open(),w=!0),oe(on,`RPC '${e}' stream ${a} sending:`,H),T.send(H))},Yo:()=>T.close()}),$=(H,ae,le)=>{H.listen(ae,te=>{try{le(te)}catch(ye){setTimeout(()=>{throw ye},0)}})};return $(T,Eu.EventType.OPEN,()=>{x||(oe(on,`RPC '${e}' stream ${a} transport opened.`),F.s_())}),$(T,Eu.EventType.CLOSE,()=>{x||(x=!0,oe(on,`RPC '${e}' stream ${a} transport closed`),F.__(),this.I_(T))}),$(T,Eu.EventType.ERROR,H=>{x||(x=!0,pr(on,`RPC '${e}' stream ${a} transport errored. Name:`,H.name,"Message:",H.message),F.__(new fe(X.UNAVAILABLE,"The operation could not be completed")))}),$(T,Eu.EventType.MESSAGE,H=>{var ae;if(!x){const le=H.data[0];Ye(!!le,16349);const te=le,ye=te?.error||((ae=te[0])===null||ae===void 0?void 0:ae.error);if(ye){oe(on,`RPC '${e}' stream ${a} received error:`,ye);const se=ye.status;let he=function(C){const M=It[C];if(M!==void 0)return ww(M)}(se),N=ye.message;he===void 0&&(he=X.INTERNAL,N="Unknown error status: "+se+" with message "+ye.message),x=!0,F.__(new fe(he,N)),T.close()}else oe(on,`RPC '${e}' stream ${a} received:`,le),F.a_(le)}}),$(d,FA.STAT_EVENT,H=>{H.stat===Xm.PROXY?oe(on,`RPC '${e}' stream ${a} detected buffering proxy`):H.stat===Xm.NOPROXY&&oe(on,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{F.o_()},0),F}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}}function Cm(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(i){return new d2(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(e,t,s=1e3,a=1.5,l=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=a,this.A_=l,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),a=Math.max(0,t-s);a>0&&oe("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,a,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D0="PersistentStream";class zw{constructor(e,t,s,a,l,c,d,m){this.Fi=e,this.w_=s,this.S_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=m,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Uw(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===X.RESOURCE_EXHAUSTED?(vs(t.toString()),vs("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===X.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,a])=>{this.b_===t&&this.W_(s,a)},s=>{e(()=>{const a=new fe(X.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(a)})})}W_(e,t){const s=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{s(()=>this.listener.Zo())}),this.stream.e_(()=>{s(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(a=>{s(()=>this.G_(a))}),this.stream.onMessage(a=>{s(()=>++this.C_==1?this.j_(a):this.onNext(a))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return oe(D0,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(oe(D0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cM extends zw{constructor(e,t,s,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=g2(this.serializer,e),s=function(l){if(!("targetChange"in l))return we.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?we.min():c.readTime?ki(c.readTime):we.min()}(e);return this.listener.J_(t,s)}H_(e){const t={};t.database=ag(this.serializer),t.addTarget=function(l,c){let d;const m=c.target;if(d=tg(m)?{documents:v2(l,m)}:{query:E2(l,m).Vt},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=Cw(l,c.resumeToken);const g=ig(l,c.expectedCount);g!==null&&(d.expectedCount=g)}else if(c.snapshotVersion.compareTo(we.min())>0){d.readTime=yf(l,c.snapshotVersion.toTimestamp());const g=ig(l,c.expectedCount);g!==null&&(d.expectedCount=g)}return d}(this.serializer,e);const s=S2(this.serializer,e);s&&(t.labels=s),this.k_(t)}Y_(e){const t={};t.database=ag(this.serializer),t.removeTarget=e,this.k_(t)}}class hM extends zw{constructor(e,t,s,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Ye(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ye(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Ye(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=y2(e.writeResults,e.commitTime),s=ki(e.commitTime);return this.listener.ta(s,t)}na(){const e={};e.database=ag(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>_2(this.serializer,s))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fM{}class dM extends fM{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.ra=!1}ia(){if(this.ra)throw new fe(X.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,a){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.Wo(e,sg(t,s),a,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new fe(X.UNKNOWN,l.toString())})}Jo(e,t,s,a,l){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.Jo(e,sg(t,s),a,c,d,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new fe(X.UNKNOWN,c.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class pM{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(vs(t),this._a=!1):oe("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va="RemoteStore";class mM{constructor(e,t,s,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=l,this.Ea.xo(c=>{s.enqueueAndForget(async()=>{Ca(this)&&(oe(va,"Restarting streams for network reachability change."),await async function(m){const g=be(m);g.Ia.add(4),await ic(g),g.Aa.set("Unknown"),g.Ia.delete(4),await Xf(g)}(this))})}),this.Aa=new pM(s,a)}}async function Xf(i){if(Ca(i))for(const e of i.da)await e(!0)}async function ic(i){for(const e of i.da)await e(!1)}function Bw(i,e){const t=be(i);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),f_(t)?h_(t):tl(t).x_()&&c_(t,e))}function u_(i,e){const t=be(i),s=tl(t);t.Ta.delete(e),s.x_()&&Fw(t,e),t.Ta.size===0&&(s.x_()?s.B_():Ca(t)&&t.Aa.set("Unknown"))}function c_(i,e){if(i.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}tl(i).H_(e)}function Fw(i,e){i.Ra.$e(e),tl(i).Y_(e)}function h_(i){i.Ra=new u2({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>i.Ta.get(e)||null,lt:()=>i.datastore.serializer.databaseId}),tl(i).start(),i.Aa.aa()}function f_(i){return Ca(i)&&!tl(i).M_()&&i.Ta.size>0}function Ca(i){return be(i).Ia.size===0}function qw(i){i.Ra=void 0}async function gM(i){i.Aa.set("Online")}async function _M(i){i.Ta.forEach((e,t)=>{c_(i,e)})}async function yM(i,e){qw(i),f_(i)?(i.Aa.la(e),h_(i)):i.Aa.set("Unknown")}async function vM(i,e,t){if(i.Aa.set("Online"),e instanceof Rw&&e.state===2&&e.cause)try{await async function(a,l){const c=l.cause;for(const d of l.targetIds)a.Ta.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a.Ta.delete(d),a.Ra.removeTarget(d))}(i,e)}catch(s){oe(va,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Ef(i,s)}else if(e instanceof Yh?i.Ra.Ye(e):e instanceof bw?i.Ra.it(e):i.Ra.et(e),!t.isEqual(we.min()))try{const s=await Lw(i.localStore);t.compareTo(s)>=0&&await function(l,c){const d=l.Ra.Pt(c);return d.targetChanges.forEach((m,g)=>{if(m.resumeToken.approximateByteSize()>0){const E=l.Ta.get(g);E&&l.Ta.set(g,E.withResumeToken(m.resumeToken,c))}}),d.targetMismatches.forEach((m,g)=>{const E=l.Ta.get(m);if(!E)return;l.Ta.set(m,E.withResumeToken(nn.EMPTY_BYTE_STRING,E.snapshotVersion)),Fw(l,m);const T=new sr(E.target,m,g,E.sequenceNumber);c_(l,T)}),l.remoteSyncer.applyRemoteEvent(d)}(i,t)}catch(s){oe(va,"Failed to raise snapshot:",s),await Ef(i,s)}}async function Ef(i,e,t){if(!el(e))throw e;i.Ia.add(1),await ic(i),i.Aa.set("Offline"),t||(t=()=>Lw(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{oe(va,"Retrying IndexedDB access"),await t(),i.Ia.delete(1),await Xf(i)})}function jw(i,e){return e().catch(t=>Ef(i,t,e))}async function $f(i){const e=be(i),t=vr(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Xg;for(;EM(e);)try{const a=await tM(e.localStore,s);if(a===null){e.Pa.length===0&&t.B_();break}s=a.batchId,TM(e,a)}catch(a){await Ef(e,a)}Hw(e)&&Gw(e)}function EM(i){return Ca(i)&&i.Pa.length<10}function TM(i,e){i.Pa.push(e);const t=vr(i);t.x_()&&t.Z_&&t.X_(e.mutations)}function Hw(i){return Ca(i)&&!vr(i).M_()&&i.Pa.length>0}function Gw(i){vr(i).start()}async function SM(i){vr(i).na()}async function AM(i){const e=vr(i);for(const t of i.Pa)e.X_(t.mutations)}async function wM(i,e,t){const s=i.Pa.shift(),a=n_.from(s,e,t);await jw(i,()=>i.remoteSyncer.applySuccessfulWrite(a)),await $f(i)}async function bM(i,e){e&&vr(i).Z_&&await async function(s,a){if(function(c){return o2(c)&&c!==X.ABORTED}(a.code)){const l=s.Pa.shift();vr(s).N_(),await jw(s,()=>s.remoteSyncer.rejectFailedWrite(l.batchId,a)),await $f(s)}}(i,e),Hw(i)&&Gw(i)}async function O0(i,e){const t=be(i);t.asyncQueue.verifyOperationInProgress(),oe(va,"RemoteStore received new credentials");const s=Ca(t);t.Ia.add(3),await ic(t),s&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Xf(t)}async function RM(i,e){const t=be(i);e?(t.Ia.delete(2),await Xf(t)):e||(t.Ia.add(2),await ic(t),t.Aa.set("Unknown"))}function tl(i){return i.Va||(i.Va=function(t,s,a){const l=be(t);return l.ia(),new cM(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(i.datastore,i.asyncQueue,{Zo:gM.bind(null,i),e_:_M.bind(null,i),n_:yM.bind(null,i),J_:vM.bind(null,i)}),i.da.push(async e=>{e?(i.Va.N_(),f_(i)?h_(i):i.Aa.set("Unknown")):(await i.Va.stop(),qw(i))})),i.Va}function vr(i){return i.ma||(i.ma=function(t,s,a){const l=be(t);return l.ia(),new hM(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(i.datastore,i.asyncQueue,{Zo:()=>Promise.resolve(),e_:SM.bind(null,i),n_:bM.bind(null,i),ea:AM.bind(null,i),ta:wM.bind(null,i)}),i.da.push(async e=>{e?(i.ma.N_(),await $f(i)):(await i.ma.stop(),i.Pa.length>0&&(oe(va,`Stopping write stream with ${i.Pa.length} pending writes`),i.Pa=[]))})),i.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e,t,s,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=l,this.deferred=new ur,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,l){const c=Date.now()+s,d=new d_(e,t,c,a,l);return d.start(s),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new fe(X.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function p_(i,e){if(vs("AsyncQueue",`${e}: ${i}`),el(i))return new fe(X.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{static emptySet(e){return new ko(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ge.comparator(t.key,s.key):(t,s)=>ge.comparator(t.key,s.key),this.keyedMap=Tu(),this.sortedSet=new pt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ko)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new ko;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(){this.fa=new pt(ge.comparator)}track(e){const t=e.doc.key,s=this.fa.get(t);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(t,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(t):e.type===1&&s.type===2?this.fa=this.fa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):Te(63341,{At:e,ga:s}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal((t,s)=>{e.push(s)}),e}}class Ko{constructor(e,t,s,a,l,c,d,m,g){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=m,this.hasCachedResults=g}static fromInitialDocuments(e,t,s,a,l){const c=[];return t.forEach(d=>{c.push({type:0,doc:d})}),new Ko(e,t,ko.emptySet(t),c,s,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Hf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==s[a].type||!t[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CM{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class IM{constructor(){this.queries=k0(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,s){const a=be(t),l=a.queries;a.queries=k0(),l.forEach((c,d)=>{for(const m of d.wa)m.onError(s)})})(this,new fe(X.ABORTED,"Firestore shutting down"))}}function k0(){return new Ra(i=>hw(i),Hf)}async function Kw(i,e){const t=be(i);let s=3;const a=e.query;let l=t.queries.get(a);l?!l.Sa()&&e.ba()&&(s=2):(l=new CM,s=e.ba()?0:1);try{switch(s){case 0:l.ya=await t.onListen(a,!0);break;case 1:l.ya=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const d=p_(c,`Initialization of query '${wo(e.query)}' failed`);return void e.onError(d)}t.queries.set(a,l),l.wa.push(e),e.va(t.onlineState),l.ya&&e.Ca(l.ya)&&m_(t)}async function Yw(i,e){const t=be(i),s=e.query;let a=3;const l=t.queries.get(s);if(l){const c=l.wa.indexOf(e);c>=0&&(l.wa.splice(c,1),l.wa.length===0?a=e.ba()?0:1:!l.Sa()&&e.ba()&&(a=2))}switch(a){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function NM(i,e){const t=be(i);let s=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const d of c.wa)d.Ca(a)&&(s=!0);c.ya=a}}s&&m_(t)}function DM(i,e,t){const s=be(i),a=s.queries.get(e);if(a)for(const l of a.wa)l.onError(t);s.queries.delete(e)}function m_(i){i.Da.forEach(e=>{e.next()})}var ug,P0;(P0=ug||(ug={})).Fa="default",P0.Cache="cache";class Qw{constructor(e,t,s){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new Ko(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const s=t!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Ko.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==ug.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e){this.key=e}}class Xw{constructor(e){this.key=e}}class OM{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Pe(),this.mutatedKeys=Pe(),this.Xa=fw(e),this.eu=new ko(this.Xa)}get tu(){return this.Ha}nu(e,t){const s=t?t.ru:new M0,a=t?t.eu:this.eu;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,d=!1;const m=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((E,T)=>{const w=a.get(E),x=Gf(this.query,T)?T:null,F=!!w&&this.mutatedKeys.has(w.key),$=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let H=!1;w&&x?w.data.isEqual(x.data)?F!==$&&(s.track({type:3,doc:x}),H=!0):this.iu(w,x)||(s.track({type:2,doc:x}),H=!0,(m&&this.Xa(x,m)>0||g&&this.Xa(x,g)<0)&&(d=!0)):!w&&x?(s.track({type:0,doc:x}),H=!0):w&&!x&&(s.track({type:1,doc:w}),H=!0,(m||g)&&(d=!0)),H&&(x?(c=c.add(x),l=$?l.add(E):l.delete(E)):(c=c.delete(E),l=l.delete(E)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const E=this.query.limitType==="F"?c.last():c.first();c=c.delete(E.key),l=l.delete(E.key),s.track({type:1,doc:E})}return{eu:c,ru:s,Ds:d,mutatedKeys:l}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,a){const l=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const c=e.ru.pa();c.sort((E,T)=>function(x,F){const $=H=>{switch(H){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Te(20277,{At:H})}};return $(x)-$(F)}(E.type,T.type)||this.Xa(E.doc,T.doc)),this.su(s),a=a!=null&&a;const d=t&&!a?this.ou():[],m=this.Za.size===0&&this.current&&!a?1:0,g=m!==this.Ya;return this.Ya=m,c.length!==0||g?{snapshot:new Ko(this.query,e.eu,l,c,e.mutatedKeys,m===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:d}:{_u:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new M0,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Pe(),this.eu.forEach(s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))});const t=[];return e.forEach(s=>{this.Za.has(s)||t.push(new Xw(s))}),this.Za.forEach(s=>{e.has(s)||t.push(new Ww(s))}),t}uu(e){this.Ha=e.qs,this.Za=Pe();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Ko.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const g_="SyncEngine";class MM{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class kM{constructor(e){this.key=e,this.lu=!1}}class PM{constructor(e,t,s,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.hu={},this.Pu=new Ra(d=>hw(d),Hf),this.Tu=new Map,this.Iu=new Set,this.du=new pt(ge.comparator),this.Eu=new Map,this.Au=new r_,this.Ru={},this.Vu=new Map,this.mu=Go.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function VM(i,e,t=!0){const s=nb(i);let a;const l=s.Pu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.cu()):a=await $w(s,e,t,!0),a}async function xM(i,e){const t=nb(i);await $w(t,e,!0,!1)}async function $w(i,e,t,s){const a=await nM(i.localStore,Mi(e)),l=a.targetId,c=i.sharedClientState.addLocalQueryTarget(l,t);let d;return s&&(d=await LM(i,e,l,c==="current",a.resumeToken)),i.isPrimaryClient&&t&&Bw(i.remoteStore,a),d}async function LM(i,e,t,s,a){i.gu=(T,w,x)=>async function($,H,ae,le){let te=H.view.nu(ae);te.Ds&&(te=await R0($.localStore,H.query,!1).then(({documents:N})=>H.view.nu(N,te)));const ye=le&&le.targetChanges.get(H.targetId),se=le&&le.targetMismatches.get(H.targetId)!=null,he=H.view.applyChanges(te,$.isPrimaryClient,ye,se);return x0($,H.targetId,he._u),he.snapshot}(i,T,w,x);const l=await R0(i.localStore,e,!0),c=new OM(e,l.qs),d=c.nu(l.documents),m=nc.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",a),g=c.applyChanges(d,i.isPrimaryClient,m);x0(i,t,g._u);const E=new MM(e,t,c);return i.Pu.set(e,E),i.Tu.has(t)?i.Tu.get(t).push(e):i.Tu.set(t,[e]),g.snapshot}async function UM(i,e,t){const s=be(i),a=s.Pu.get(e),l=s.Tu.get(a.targetId);if(l.length>1)return s.Tu.set(a.targetId,l.filter(c=>!Hf(c,e))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await og(s.localStore,a.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(a.targetId),t&&u_(s.remoteStore,a.targetId),cg(s,a.targetId)}).catch(Jo)):(cg(s,a.targetId),await og(s.localStore,a.targetId,!0))}async function zM(i,e){const t=be(i),s=t.Pu.get(e),a=t.Tu.get(s.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),u_(t.remoteStore,s.targetId))}async function BM(i,e,t){const s=YM(i);try{const a=await function(c,d){const m=be(c),g=ut.now(),E=d.reduce((x,F)=>x.add(F.key),Pe());let T,w;return m.persistence.runTransaction("Locally write mutations","readwrite",x=>{let F=Es(),$=Pe();return m.Os.getEntries(x,E).next(H=>{F=H,F.forEach((ae,le)=>{le.isValidDocument()||($=$.add(ae))})}).next(()=>m.localDocuments.getOverlayedDocuments(x,F)).next(H=>{T=H;const ae=[];for(const le of d){const te=n2(le,T.get(le.key).overlayedDocument);te!=null&&ae.push(new Ar(le.key,te,sw(te.value.mapValue),ui.exists(!0)))}return m.mutationQueue.addMutationBatch(x,g,ae,d)}).next(H=>{w=H;const ae=H.applyToLocalDocumentSet(T,$);return m.documentOverlayCache.saveOverlays(x,H.batchId,ae)})}).then(()=>({batchId:w.batchId,changes:pw(T)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),function(c,d,m){let g=c.Ru[c.currentUser.toKey()];g||(g=new pt(Ie)),g=g.insert(d,m),c.Ru[c.currentUser.toKey()]=g}(s,a.batchId,t),await sc(s,a.changes),await $f(s.remoteStore)}catch(a){const l=p_(a,"Failed to persist write");t.reject(l)}}async function Zw(i,e){const t=be(i);try{const s=await J2(t.localStore,e);e.targetChanges.forEach((a,l)=>{const c=t.Eu.get(l);c&&(Ye(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?c.lu=!0:a.modifiedDocuments.size>0?Ye(c.lu,14607):a.removedDocuments.size>0&&(Ye(c.lu,42227),c.lu=!1))}),await sc(t,s,e)}catch(s){await Jo(s)}}function V0(i,e,t){const s=be(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.Pu.forEach((l,c)=>{const d=c.view.va(e);d.snapshot&&a.push(d.snapshot)}),function(c,d){const m=be(c);m.onlineState=d;let g=!1;m.queries.forEach((E,T)=>{for(const w of T.wa)w.va(d)&&(g=!0)}),g&&m_(m)}(s.eventManager,e),a.length&&s.hu.J_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function FM(i,e,t){const s=be(i);s.sharedClientState.updateQueryState(e,"rejected",t);const a=s.Eu.get(e),l=a&&a.key;if(l){let c=new pt(ge.comparator);c=c.insert(l,hn.newNoDocument(l,we.min()));const d=Pe().add(l),m=new Qf(we.min(),new Map,new pt(Ie),c,d);await Zw(s,m),s.du=s.du.remove(l),s.Eu.delete(e),__(s)}else await og(s.localStore,e,!1).then(()=>cg(s,e,t)).catch(Jo)}async function qM(i,e){const t=be(i),s=e.batch.batchId;try{const a=await Z2(t.localStore,e);eb(t,s,null),Jw(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await sc(t,a)}catch(a){await Jo(a)}}async function jM(i,e,t){const s=be(i);try{const a=await function(c,d){const m=be(c);return m.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let E;return m.mutationQueue.lookupMutationBatch(g,d).next(T=>(Ye(T!==null,37113),E=T.keys(),m.mutationQueue.removeMutationBatch(g,T))).next(()=>m.mutationQueue.performConsistencyCheck(g)).next(()=>m.documentOverlayCache.removeOverlaysForBatchId(g,E,d)).next(()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,E)).next(()=>m.localDocuments.getDocuments(g,E))})}(s.localStore,e);eb(s,e,t),Jw(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await sc(s,a)}catch(a){await Jo(a)}}function Jw(i,e){(i.Vu.get(e)||[]).forEach(t=>{t.resolve()}),i.Vu.delete(e)}function eb(i,e,t){const s=be(i);let a=s.Ru[s.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),s.Ru[s.currentUser.toKey()]=a}}function cg(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Tu.get(e))i.Pu.delete(s),t&&i.hu.pu(s,t);i.Tu.delete(e),i.isPrimaryClient&&i.Au.zr(e).forEach(s=>{i.Au.containsKey(s)||tb(i,s)})}function tb(i,e){i.Iu.delete(e.path.canonicalString());const t=i.du.get(e);t!==null&&(u_(i.remoteStore,t),i.du=i.du.remove(e),i.Eu.delete(t),__(i))}function x0(i,e,t){for(const s of t)s instanceof Ww?(i.Au.addReference(s.key,e),HM(i,s)):s instanceof Xw?(oe(g_,"Document no longer in limbo: "+s.key),i.Au.removeReference(s.key,e),i.Au.containsKey(s.key)||tb(i,s.key)):Te(19791,{yu:s})}function HM(i,e){const t=e.key,s=t.path.canonicalString();i.du.get(t)||i.Iu.has(s)||(oe(g_,"New document in limbo: "+t),i.Iu.add(s),__(i))}function __(i){for(;i.Iu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const e=i.Iu.values().next().value;i.Iu.delete(e);const t=new ge(lt.fromString(e)),s=i.mu.next();i.Eu.set(s,new kM(t)),i.du=i.du.insert(t,s),Bw(i.remoteStore,new sr(Mi(jf(t.path)),s,"TargetPurposeLimboResolution",zf.ue))}}async function sc(i,e,t){const s=be(i),a=[],l=[],c=[];s.Pu.isEmpty()||(s.Pu.forEach((d,m)=>{c.push(s.gu(m,e,t).then(g=>{var E;if((g||t)&&s.isPrimaryClient){const T=g?!g.fromCache:(E=t?.targetChanges.get(m.targetId))===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(m.targetId,T?"current":"not-current")}if(g){a.push(g);const T=o_.Es(m.targetId,g);l.push(T)}}))}),await Promise.all(c),s.hu.J_(a),await async function(m,g){const E=be(m);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>W.forEach(g,w=>W.forEach(w.Is,x=>E.persistence.referenceDelegate.addReference(T,w.targetId,x)).next(()=>W.forEach(w.ds,x=>E.persistence.referenceDelegate.removeReference(T,w.targetId,x)))))}catch(T){if(!el(T))throw T;oe(l_,"Failed to update sequence numbers: "+T)}for(const T of g){const w=T.targetId;if(!T.fromCache){const x=E.Fs.get(w),F=x.snapshotVersion,$=x.withLastLimboFreeSnapshotVersion(F);E.Fs=E.Fs.insert(w,$)}}}(s.localStore,l))}async function GM(i,e){const t=be(i);if(!t.currentUser.isEqual(e)){oe(g_,"User change. New user:",e.toKey());const s=await xw(t.localStore,e);t.currentUser=e,function(l,c){l.Vu.forEach(d=>{d.forEach(m=>{m.reject(new fe(X.CANCELLED,c))})}),l.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await sc(t,s.Bs)}}function KM(i,e){const t=be(i),s=t.Eu.get(e);if(s&&s.lu)return Pe().add(s.key);{let a=Pe();const l=t.Tu.get(e);if(!l)return a;for(const c of l){const d=t.Pu.get(c);a=a.unionWith(d.view.tu)}return a}}function nb(i){const e=be(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=Zw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=KM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=FM.bind(null,e),e.hu.J_=NM.bind(null,e.eventManager),e.hu.pu=DM.bind(null,e.eventManager),e}function YM(i){const e=be(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=jM.bind(null,e),e}class Tf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Wf(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return $2(this.persistence,new Q2,e.initialUser,this.serializer)}Du(e){return new Vw(a_.Vi,this.serializer)}bu(e){return new sM}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Tf.provider={build:()=>new Tf};class QM extends Tf{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Ye(this.persistence.referenceDelegate instanceof vf,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new k2(s,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Tn.withCacheSize(this.cacheSizeBytes):Tn.DEFAULT;return new Vw(s=>vf.Vi(s,t),this.serializer)}}class hg{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>V0(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=GM.bind(null,this.syncEngine),await RM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new IM}()}createDatastore(e){const t=Wf(e.databaseInfo.databaseId),s=function(l){return new uM(l)}(e.databaseInfo);return function(l,c,d,m){return new dM(l,c,d,m)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,a,l,c,d){return new mM(s,a,l,c,d)}(this.localStore,this.datastore,e.asyncQueue,t=>V0(this.syncEngine,t,0),function(){return N0.C()?new N0:new rM}())}createSyncEngine(e,t){return function(a,l,c,d,m,g,E){const T=new PM(a,l,c,d,m,g);return E&&(T.fu=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const l=be(a);oe(va,"RemoteStore shutting down."),l.Ia.add(5),await ic(l),l.Ea.shutdown(),l.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}hg.provider={build:()=>new hg};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ib{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):vs("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er="FirestoreClient";class WM{constructor(e,t,s,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=a,this.user=ln.UNAUTHENTICATED,this.clientId=Qg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,async c=>{oe(Er,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(s,c=>(oe(Er,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ur;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=p_(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Im(i,e){i.asyncQueue.verifyOperationInProgress(),oe(Er,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener(async a=>{s.isEqual(a)||(await xw(e.localStore,a),s=a)}),e.persistence.setDatabaseDeletedListener(()=>{pr("Terminating Firestore due to IndexedDb database deletion"),i.terminate().then(()=>{oe("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(a=>{pr("Terminating Firestore due to IndexedDb database deletion failed",a)})}),i._offlineComponents=e}async function L0(i,e){i.asyncQueue.verifyOperationInProgress();const t=await XM(i);oe(Er,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(s=>O0(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,a)=>O0(e.remoteStore,a)),i._onlineComponents=e}async function XM(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){oe(Er,"Using user provided OfflineComponentProvider");try{await Im(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===X.FAILED_PRECONDITION||a.code===X.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;pr("Error using user provided cache. Falling back to memory cache: "+t),await Im(i,new Tf)}}else oe(Er,"Using default OfflineComponentProvider"),await Im(i,new QM(void 0));return i._offlineComponents}async function sb(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(oe(Er,"Using user provided OnlineComponentProvider"),await L0(i,i._uninitializedComponentsProvider._online)):(oe(Er,"Using default OnlineComponentProvider"),await L0(i,new hg))),i._onlineComponents}function $M(i){return sb(i).then(e=>e.syncEngine)}async function fg(i){const e=await sb(i),t=e.eventManager;return t.onListen=VM.bind(null,e.syncEngine),t.onUnlisten=UM.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=xM.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=zM.bind(null,e.syncEngine),t}function ZM(i,e,t={}){const s=new ur;return i.asyncQueue.enqueueAndForget(async()=>function(l,c,d,m,g){const E=new ib({next:w=>{E.Ou(),c.enqueueAndForget(()=>Yw(l,T));const x=w.docs.has(d);!x&&w.fromCache?g.reject(new fe(X.UNAVAILABLE,"Failed to get document because the client is offline.")):x&&w.fromCache&&m&&m.source==="server"?g.reject(new fe(X.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(w)},error:w=>g.reject(w)}),T=new Qw(jf(d.path),E,{includeMetadataChanges:!0,ka:!0});return Kw(l,T)}(await fg(i),i.asyncQueue,e,t,s)),s.promise}/**
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
 */function rb(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab="firestore.googleapis.com",z0=!0;class B0{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new fe(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ab,this.ssl=z0}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:z0;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Pw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<O2)throw new fe(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}pO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rb((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new fe(X.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new fe(X.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new fe(X.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,a){return s.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Zf{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new B0({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new fe(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new fe(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new B0(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new rO;switch(s.type){case"firstParty":return new uO(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new fe(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=U0.get(t);s&&(oe("ComponentProvider","Removing Datastore"),U0.delete(t),s.terminate())}(this),Promise.resolve()}}function JM(i,e,t,s={}){var a;i=li(i,Zf);const l=Tr(e),c=i._getSettings(),d=Object.assign(Object.assign({},c),{emulatorOptions:i._getEmulatorOptions()}),m=`${e}:${t}`;l&&(Tg(`https://${m}`),Sg("Firestore",!0)),c.host!==ab&&c.host!==m&&pr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g=Object.assign(Object.assign({},c),{host:m,ssl:l,emulatorOptions:s});if(!hr(g,d)&&(i._setSettings(g),s.mockUserToken)){let E,T;if(typeof s.mockUserToken=="string")E=s.mockUserToken,T=ln.MOCK_USER;else{E=yS(s.mockUserToken,(a=i._app)===null||a===void 0?void 0:a.options.projectId);const w=s.mockUserToken.sub||s.mockUserToken.user_id;if(!w)throw new fe(X.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new ln(w)}i._authCredentials=new aO(new GA(E,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Jf(this.firestore,e,this._query)}}class At{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new cr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new At(this.firestore,e,this._key)}toJSON(){return{type:At._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(ec(t,At._jsonSchema))return new At(e,s||null,new ge(lt.fromString(t.referencePath)))}}At._jsonSchemaVersion="firestore/documentReference/1.0",At._jsonSchema={type:Nt("string",At._jsonSchemaVersion),referencePath:Nt("string")};class cr extends Jf{constructor(e,t,s){super(e,t,jf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new At(this.firestore,null,new ge(e))}withConverter(e){return new cr(this.firestore,e,this._path)}}function ek(i,e,...t){if(i=Lt(i),YA("collection","path",e),i instanceof Zf){const s=lt.fromString(e,...t);return e0(s),new cr(i,null,s)}{if(!(i instanceof At||i instanceof cr))throw new fe(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(lt.fromString(e,...t));return e0(s),new cr(i.firestore,null,s)}}function Po(i,e,...t){if(i=Lt(i),arguments.length===1&&(e=Qg.newId()),YA("doc","path",e),i instanceof Zf){const s=lt.fromString(e,...t);return JT(s),new At(i,null,new ge(s))}{if(!(i instanceof At||i instanceof cr))throw new fe(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(lt.fromString(e,...t));return JT(s),new At(i.firestore,i instanceof cr?i.converter:null,new ge(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0="AsyncQueue";class q0{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Uw(this,"async_queue_retry"),this.oc=()=>{const s=Cm();s&&oe(F0,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=Cm();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Cm();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new ur;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!el(e))throw e;oe(F0,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(s=>{throw this.tc=s,this.nc=!1,vs("INTERNAL UNHANDLED ERROR: ",j0(s)),s}).then(s=>(this.nc=!1,s))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const a=d_.createAndSchedule(this,e,t,s,l=>this.lc(l));return this.ec.push(a),a}ac(){this.tc&&Te(47125,{hc:j0(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function j0(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
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
 */function H0(i){return function(t,s){if(typeof t!="object"||t===null)return!1;const a=t;for(const l of s)if(l in a&&typeof a[l]=="function")return!0;return!1}(i,["next","error","complete"])}class Ea extends Zf{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new q0,this._persistenceKey=a?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new q0(e),this._firestoreClient=void 0,await e}}}function tk(i,e){const t=typeof i=="object"?i:bg(),s=typeof i=="string"?i:df,a=kf(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const l=mS("firestore");l&&JM(a,...l)}return a}function y_(i){if(i._terminated)throw new fe(X.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||nk(i),i._firestoreClient}function nk(i){var e,t,s;const a=i._freezeSettings(),l=function(d,m,g,E){return new bO(d,m,g,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,rb(E.experimentalLongPollingOptions),E.useFetchStreams,E.isUsingEmulator)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,a);i._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=a.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),i._firestoreClient=new WM(i._authCredentials,i._appCheckCredentials,i._queue,l,i._componentsProvider&&function(d){const m=d?._online.build();return{_offline:d?._offline.build(m),_online:m}}(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Wn(nn.fromBase64String(e))}catch(t){throw new fe(X.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Wn(nn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Wn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ec(e,Wn._jsonSchema))return Wn.fromBase64String(e.bytes)}}Wn._jsonSchemaVersion="firestore/bytes/1.0",Wn._jsonSchema={type:Nt("string",Wn._jsonSchemaVersion),bytes:Nt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new fe(X.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new fe(X.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new fe(X.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ie(this._lat,e._lat)||Ie(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Pi._jsonSchemaVersion}}static fromJSON(e){if(ec(e,Pi._jsonSchema))return new Pi(e.latitude,e.longitude)}}Pi._jsonSchemaVersion="firestore/geoPoint/1.0",Pi._jsonSchema={type:Nt("string",Pi._jsonSchemaVersion),latitude:Nt("number"),longitude:Nt("number")};/**
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
 */class Vi{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,a){if(s.length!==a.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==a[l])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Vi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ec(e,Vi._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Vi(e.vectorValues);throw new fe(X.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Vi._jsonSchemaVersion="firestore/vectorValue/1.0",Vi._jsonSchema={type:Nt("string",Vi._jsonSchemaVersion),vectorValues:Nt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik=/^__.*__$/;class sk{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Ar(e,this.data,this.fieldMask,t,this.fieldTransforms):new tc(e,this.data,t,this.fieldTransforms)}}class ob{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Ar(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function lb(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Te(40011,{Ec:i})}}class v_{constructor(e,t,s,a,l,c){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=a,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new v_(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.Rc({path:s,mc:!1});return a.fc(e),a}gc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.Rc({path:s,mc:!1});return a.Ac(),a}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Sf(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(lb(this.Ec)&&ik.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class rk{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Wf(e)}Dc(e,t,s,a=!1){return new v_({Ec:e,methodName:t,bc:s,path:tn.emptyPath(),mc:!1,Sc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function E_(i){const e=i._freezeSettings(),t=Wf(i._databaseId);return new rk(i._databaseId,!!e.ignoreUndefinedProperties,t)}function ub(i,e,t,s,a,l={}){const c=i.Dc(l.merge||l.mergeFields?2:0,e,t,a);S_("Data must be an object, but it was:",c,s);const d=cb(s,c);let m,g;if(l.merge)m=new Pn(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const E=[];for(const T of l.mergeFields){const w=dg(e,T,t);if(!c.contains(w))throw new fe(X.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);fb(E,w)||E.push(w)}m=new Pn(E),g=c.fieldTransforms.filter(T=>m.covers(T.field))}else m=null,g=c.fieldTransforms;return new sk(new Sn(d),m,g)}class nd extends td{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof nd}}class T_ extends td{_toFieldTransform(e){return new ZO(e.path,new qu)}isEqual(e){return e instanceof T_}}function ak(i,e,t,s){const a=i.Dc(1,e,t);S_("Data must be an object, but it was:",a,s);const l=[],c=Sn.empty();Sr(s,(m,g)=>{const E=A_(e,m,t);g=Lt(g);const T=a.gc(E);if(g instanceof nd)l.push(E);else{const w=id(g,T);w!=null&&(l.push(E),c.set(E,w))}});const d=new Pn(l);return new ob(c,d,a.fieldTransforms)}function ok(i,e,t,s,a,l){const c=i.Dc(1,e,t),d=[dg(e,s,t)],m=[a];if(l.length%2!=0)throw new fe(X.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<l.length;w+=2)d.push(dg(e,l[w])),m.push(l[w+1]);const g=[],E=Sn.empty();for(let w=d.length-1;w>=0;--w)if(!fb(g,d[w])){const x=d[w];let F=m[w];F=Lt(F);const $=c.gc(x);if(F instanceof nd)g.push(x);else{const H=id(F,$);H!=null&&(g.push(x),E.set(x,H))}}const T=new Pn(g);return new ob(E,T,c.fieldTransforms)}function id(i,e){if(hb(i=Lt(i)))return S_("Unsupported field value:",e,i),cb(i,e);if(i instanceof td)return function(s,a){if(!lb(a.Ec))throw a.wc(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.wc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(a);l&&a.fieldTransforms.push(l)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(s,a){const l=[];let c=0;for(const d of s){let m=id(d,a.yc(c));m==null&&(m={nullValue:"NULL_VALUE"}),l.push(m),c++}return{arrayValue:{values:l}}}(i,e)}return function(s,a){if((s=Lt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return WO(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=ut.fromDate(s);return{timestampValue:yf(a.serializer,l)}}if(s instanceof ut){const l=new ut(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:yf(a.serializer,l)}}if(s instanceof Pi)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Wn)return{bytesValue:Cw(a.serializer,s._byteString)};if(s instanceof At){const l=a.databaseId,c=s.firestore._databaseId;if(!c.isEqual(l))throw a.wc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:s_(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof Vi)return function(c,d){return{mapValue:{fields:{[nw]:{stringValue:iw},[pf]:{arrayValue:{values:c.toArray().map(g=>{if(typeof g!="number")throw d.wc("VectorValues must only contain numeric values.");return t_(d.serializer,g)})}}}}}}(s,a);throw a.wc(`Unsupported field value: ${Wg(s)}`)}(i,e)}function cb(i,e){const t={};return XA(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Sr(i,(s,a)=>{const l=id(a,e.Vc(s));l!=null&&(t[s]=l)}),{mapValue:{fields:t}}}function hb(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof ut||i instanceof Pi||i instanceof Wn||i instanceof At||i instanceof td||i instanceof Vi)}function S_(i,e,t){if(!hb(t)||!QA(t)){const s=Wg(t);throw s==="an object"?e.wc(i+" a custom object"):e.wc(i+" "+s)}}function dg(i,e,t){if((e=Lt(e))instanceof ed)return e._internalPath;if(typeof e=="string")return A_(i,e);throw Sf("Field path arguments must be of type string or ",i,!1,void 0,t)}const lk=new RegExp("[~\\*/\\[\\]]");function A_(i,e,t){if(e.search(lk)>=0)throw Sf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new ed(...e.split("."))._internalPath}catch{throw Sf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Sf(i,e,t,s,a){const l=s&&!s.isEmpty(),c=a!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let m="";return(l||c)&&(m+=" (found",l&&(m+=` in field ${s}`),c&&(m+=` in document ${a}`),m+=")"),new fe(X.INVALID_ARGUMENT,d+i+m)}function fb(i,e){return i.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e,t,s,a,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new At(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new uk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(pb("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class uk extends db{data(){return super.data()}}function pb(i,e){return typeof e=="string"?A_(i,e):e instanceof ed?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ck(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new fe(X.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hk{convertValue(e,t="none"){switch(yr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return St(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(_r(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Te(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Sr(e,(a,l)=>{s[a]=this.convertValue(l,t)}),s}convertVectorValue(e){var t,s,a;const l=(a=(s=(t=e.fields)===null||t===void 0?void 0:t[pf].arrayValue)===null||s===void 0?void 0:s.values)===null||a===void 0?void 0:a.map(c=>St(c.doubleValue));return new Vi(l)}convertGeoPoint(e){return new Pi(St(e.latitude),St(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Ff(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(zu(e));default:return null}}convertTimestamp(e){const t=gr(e);return new ut(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=lt.fromString(e);Ye(kw(s),9688,{name:e});const a=new Bu(s.get(1),s.get(3)),l=new ge(s.popFirst(5));return a.isEqual(t)||vs(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mb(i,e,t){let s;return s=i?i.toFirestore(e):e,s}class Au{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class da extends db{constructor(e,t,s,a,l,c){super(e,t,s,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Qh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(pb("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new fe(X.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=da._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}da._jsonSchemaVersion="firestore/documentSnapshot/1.0",da._jsonSchema={type:Nt("string",da._jsonSchemaVersion),bundleSource:Nt("string","DocumentSnapshot"),bundleName:Nt("string"),bundle:Nt("string")};class Qh extends da{data(e={}){return super.data(e)}}class Vo{constructor(e,t,s,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new Au(a.hasPendingWrites,a.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Qh(this._firestore,this._userDataWriter,s.key,s,new Au(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new fe(X.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(a,l){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map(d=>{const m=new Qh(a._firestore,a._userDataWriter,d.doc.key,d.doc,new Au(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);return d.doc,{type:"added",doc:m,oldIndex:-1,newIndex:c++}})}{let c=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(d=>l||d.type!==3).map(d=>{const m=new Qh(a._firestore,a._userDataWriter,d.doc.key,d.doc,new Au(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,E=-1;return d.type!==0&&(g=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),E=c.indexOf(d.doc.key)),{type:fk(d.type),doc:m,oldIndex:g,newIndex:E}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new fe(X.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Vo._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Qg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],a=[];return this.docs.forEach(l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),a.push(l.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function fk(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Te(61501,{type:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dk(i){i=li(i,At);const e=li(i.firestore,Ea);return ZM(y_(e),i._key).then(t=>_b(e,i,t))}Vo._jsonSchemaVersion="firestore/querySnapshot/1.0",Vo._jsonSchema={type:Nt("string",Vo._jsonSchemaVersion),bundleSource:Nt("string","QuerySnapshot"),bundleName:Nt("string"),bundle:Nt("string")};class gb extends hk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Wn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new At(this.firestore,null,t)}}function pk(i,e,t){i=li(i,At);const s=li(i.firestore,Ea),a=mb(i.converter,e);return w_(s,[ub(E_(s),"setDoc",i._key,a,i.converter!==null,t).toMutation(i._key,ui.none())])}function Nm(i,e,t,...s){i=li(i,At);const a=li(i.firestore,Ea),l=E_(a);let c;return c=typeof(e=Lt(e))=="string"||e instanceof ed?ok(l,"updateDoc",i._key,e,t,s):ak(l,"updateDoc",i._key,e),w_(a,[c.toMutation(i._key,ui.exists(!0))])}function mk(i,e){const t=li(i.firestore,Ea),s=Po(i),a=mb(i.converter,e);return w_(t,[ub(E_(i.firestore),"addDoc",s._key,a,i.converter!==null,{}).toMutation(s._key,ui.exists(!1))]).then(()=>s)}function gk(i,...e){var t,s,a;i=Lt(i);let l={includeMetadataChanges:!1,source:"default"},c=0;typeof e[c]!="object"||H0(e[c])||(l=e[c++]);const d={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(H0(e[c])){const T=e[c];e[c]=(t=T.next)===null||t===void 0?void 0:t.bind(T),e[c+1]=(s=T.error)===null||s===void 0?void 0:s.bind(T),e[c+2]=(a=T.complete)===null||a===void 0?void 0:a.bind(T)}let m,g,E;if(i instanceof At)g=li(i.firestore,Ea),E=jf(i._key.path),m={next:T=>{e[c]&&e[c](_b(g,i,T))},error:e[c+1],complete:e[c+2]};else{const T=li(i,Jf);g=li(T.firestore,Ea),E=T._query;const w=new gb(g);m={next:x=>{e[c]&&e[c](new Vo(g,w,T,x))},error:e[c+1],complete:e[c+2]},ck(i._query)}return function(w,x,F,$){const H=new ib($),ae=new Qw(x,H,F);return w.asyncQueue.enqueueAndForget(async()=>Kw(await fg(w),ae)),()=>{H.Ou(),w.asyncQueue.enqueueAndForget(async()=>Yw(await fg(w),ae))}}(y_(g),E,d,m)}function w_(i,e){return function(s,a){const l=new ur;return s.asyncQueue.enqueueAndForget(async()=>BM(await $M(s),a,l)),l.promise}(y_(i),e)}function _b(i,e,t){const s=t.docs.get(e._key),a=new gb(i);return new da(i,a,e._key,s,new Au(t.hasPendingWrites,t.fromCache),e.converter)}function _k(){return new T_("serverTimestamp")}(function(e,t=!0){(function(a){Zo=a})(Aa),pa(new fr("firestore",(s,{instanceIdentifier:a,options:l})=>{const c=s.getProvider("app").getImmediate(),d=new Ea(new oO(s.getProvider("auth-internal")),new cO(c,s.getProvider("app-check-internal")),function(g,E){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new fe(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bu(g.options.projectId,E)}(c,a),c);return l=Object.assign({useFetchStreams:t},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),Oi(QT,WT,e),Oi(QT,WT,"esm2017")})();function b_(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(i);a<s.length;a++)e.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(i,s[a])&&(t[s[a]]=i[s[a]]);return t}function yb(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yk=yb,vb=new Qu("auth","Firebase",yb());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af=new Mf("@firebase/auth");function vk(i,...e){Af.logLevel<=ke.WARN&&Af.warn(`Auth (${Aa}): ${i}`,...e)}function Wh(i,...e){Af.logLevel<=ke.ERROR&&Af.error(`Auth (${Aa}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(i,...e){throw R_(i,...e)}function xi(i,...e){return R_(i,...e)}function Eb(i,e,t){const s=Object.assign(Object.assign({},yk()),{[e]:t});return new Qu("auth","Firebase",s).create(e,{appName:i.name})}function gs(i){return Eb(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function R_(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return vb.create(i,...e)}function Ee(i,e,...t){if(!i)throw R_(e,...t)}function ds(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Wh(e),new Error(e)}function Ts(i,e){i||ds(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function Ek(){return G0()==="http:"||G0()==="https:"}function G0(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ek()||G1()||"connection"in navigator)?navigator.onLine:!0}function Sk(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ts(t>e,"Short delay should be less than long delay!"),this.isMobile=Ag()||vS()}get(){return Tk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_(i,e){Ts(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ds("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ds("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ds("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wk=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],bk=new rc(3e4,6e4);function wr(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function br(i,e,t,s,a={}){return Sb(i,a,async()=>{let l={},c={};s&&(e==="GET"?c=s:l={body:JSON.stringify(s)});const d=Qo(Object.assign({key:i.config.apiKey},c)).slice(1),m=await i._getAdditionalHeaders();m["Content-Type"]="application/json",i.languageCode&&(m["X-Firebase-Locale"]=i.languageCode);const g=Object.assign({method:e,headers:m},l);return H1()||(g.referrerPolicy="no-referrer"),i.emulatorConfig&&Tr(i.emulatorConfig.host)&&(g.credentials="include"),Tb.fetch()(await Ab(i,i.config.apiHost,t,d),g)})}async function Sb(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},Ak),e);try{const a=new Ck(i),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Bh(i,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[m,g]=d.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw Bh(i,"credential-already-in-use",c);if(m==="EMAIL_EXISTS")throw Bh(i,"email-already-in-use",c);if(m==="USER_DISABLED")throw Bh(i,"user-disabled",c);const E=s[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Eb(i,E,g);ci(i,E)}}catch(a){if(a instanceof Ss)throw a;ci(i,"network-request-failed",{message:String(a)})}}async function ac(i,e,t,s,a={}){const l=await br(i,e,t,s,a);return"mfaPendingCredential"in l&&ci(i,"multi-factor-auth-required",{_serverResponse:l}),l}async function Ab(i,e,t,s){const a=`${e}${t}?${s}`,l=i,c=l.config.emulator?C_(i.config,a):`${i.config.apiScheme}://${a}`;return wk.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function Rk(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ck{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(xi(this.auth,"network-request-failed")),bk.get())})}}function Bh(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=xi(i,e,s);return a.customData._tokenResponse=t,a}function K0(i){return i!==void 0&&i.enterprise!==void 0}class Ik{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Rk(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Nk(i,e){return br(i,"GET","/v2/recaptchaConfig",wr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dk(i,e){return br(i,"POST","/v1/accounts:delete",e)}async function wf(i,e){return br(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ok(i,e=!1){const t=Lt(i),s=await t.getIdToken(e),a=I_(s);Ee(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l?.sign_in_provider;return{claims:a,token:s,authTime:ku(Dm(a.auth_time)),issuedAtTime:ku(Dm(a.iat)),expirationTime:ku(Dm(a.exp)),signInProvider:c||null,signInSecondFactor:l?.sign_in_second_factor||null}}function Dm(i){return Number(i)*1e3}function I_(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return Wh("JWT malformed, contained fewer than 3 sections"),null;try{const a=ef(t);return a?JSON.parse(a):(Wh("Failed to decode base64 JWT payload"),null)}catch(a){return Wh("Caught error parsing JWT payload as JSON",a?.toString()),null}}function Y0(i){const e=I_(i);return Ee(e,"internal-error"),Ee(typeof e.exp<"u","internal-error"),Ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gu(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Ss&&Mk(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function Mk({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ku(this.lastLoginAt),this.creationTime=ku(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function bf(i){var e;const t=i.auth,s=await i.getIdToken(),a=await Gu(i,wf(t,{idToken:s}));Ee(a?.users.length,t,"internal-error");const l=a.users[0];i._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?wb(l.providerUserInfo):[],d=Vk(i.providerData,c),m=i.isAnonymous,g=!(i.email&&l.passwordHash)&&!d?.length,E=m?g:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new mg(l.createdAt,l.lastLoginAt),isAnonymous:E};Object.assign(i,T)}async function Pk(i){const e=Lt(i);await bf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Vk(i,e){return[...i.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function wb(i){return i.map(e=>{var{providerId:t}=e,s=b_(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xk(i,e){const t=await Sb(i,{},async()=>{const s=Qo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=i.config,c=await Ab(i,a,"/v1/token",`key=${l}`),d=await i._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:d,body:s};return i.emulatorConfig&&Tr(i.emulatorConfig.host)&&(m.credentials="include"),Tb.fetch()(c,m)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Lk(i,e){return br(i,"POST","/v2/accounts:revokeToken",wr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ee(e.idToken,"internal-error"),Ee(typeof e.idToken<"u","internal-error"),Ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Y0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ee(e.length!==0,"internal-error");const t=Y0(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:l}=await xk(e,t);this.updateTokensAndExpiration(s,a,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:l}=t,c=new xo;return s&&(Ee(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),a&&(Ee(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(Ee(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xo,this.toJSON())}_performRefresh(){return ds("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(i,e){Ee(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class ai{constructor(e){var{uid:t,auth:s,stsTokenManager:a}=e,l=b_(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new mg(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Gu(this,this.stsTokenManager.getToken(this.auth,e));return Ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ok(this,e)}reload(){return Pk(this)}_assign(e){this!==e&&(Ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ai(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await bf(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(kn(this.auth.app))return Promise.reject(gs(this.auth));const e=await this.getIdToken();return await Gu(this,Dk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,a,l,c,d,m,g,E;const T=(s=t.displayName)!==null&&s!==void 0?s:void 0,w=(a=t.email)!==null&&a!==void 0?a:void 0,x=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,F=(c=t.photoURL)!==null&&c!==void 0?c:void 0,$=(d=t.tenantId)!==null&&d!==void 0?d:void 0,H=(m=t._redirectEventId)!==null&&m!==void 0?m:void 0,ae=(g=t.createdAt)!==null&&g!==void 0?g:void 0,le=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:te,emailVerified:ye,isAnonymous:se,providerData:he,stsTokenManager:N}=t;Ee(te&&N,e,"internal-error");const b=xo.fromJSON(this.name,N);Ee(typeof te=="string",e,"internal-error"),Js(T,e.name),Js(w,e.name),Ee(typeof ye=="boolean",e,"internal-error"),Ee(typeof se=="boolean",e,"internal-error"),Js(x,e.name),Js(F,e.name),Js($,e.name),Js(H,e.name),Js(ae,e.name),Js(le,e.name);const C=new ai({uid:te,auth:e,email:w,emailVerified:ye,displayName:T,isAnonymous:se,photoURL:F,phoneNumber:x,tenantId:$,stsTokenManager:b,createdAt:ae,lastLoginAt:le});return he&&Array.isArray(he)&&(C.providerData=he.map(M=>Object.assign({},M))),H&&(C._redirectEventId=H),C}static async _fromIdTokenResponse(e,t,s=!1){const a=new xo;a.updateFromServerResponse(t);const l=new ai({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await bf(l),l}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];Ee(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?wb(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!l?.length,d=new xo;d.updateFromIdToken(s);const m=new ai({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new mg(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!l?.length};return Object.assign(m,g),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0=new Map;function ps(i){Ts(i instanceof Function,"Expected a class definition");let e=Q0.get(i);return e?(Ts(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Q0.set(i,e),e)}/**
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
 */class bb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}bb.type="NONE";const W0=bb;/**
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
 */function Xh(i,e,t){return`firebase:${i}:${e}:${t}`}class Lo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:l}=this.auth;this.fullUserKey=Xh(this.userKey,a.apiKey,l),this.fullPersistenceKey=Xh("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await wf(this.auth,{idToken:e}).catch(()=>{});return t?ai._fromGetAccountInfoResponse(this.auth,t,e):null}return ai._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Lo(ps(W0),e,s);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||ps(W0);const c=Xh(s,e.config.apiKey,e.name);let d=null;for(const g of t)try{const E=await g._get(c);if(E){let T;if(typeof E=="string"){const w=await wf(e,{idToken:E}).catch(()=>{});if(!w)break;T=await ai._fromGetAccountInfoResponse(e,w,E)}else T=ai._fromJSON(e,E);g!==l&&(d=T),l=g;break}}catch{}const m=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!m.length?new Lo(l,e,s):(l=m[0],d&&await l._set(c,d.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new Lo(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X0(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Nb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rb(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ob(e))return"Blackberry";if(Mb(e))return"Webos";if(Cb(e))return"Safari";if((e.includes("chrome/")||Ib(e))&&!e.includes("edge/"))return"Chrome";if(Db(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if(s?.length===2)return s[1]}return"Other"}function Rb(i=dn()){return/firefox\//i.test(i)}function Cb(i=dn()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ib(i=dn()){return/crios\//i.test(i)}function Nb(i=dn()){return/iemobile/i.test(i)}function Db(i=dn()){return/android/i.test(i)}function Ob(i=dn()){return/blackberry/i.test(i)}function Mb(i=dn()){return/webos/i.test(i)}function N_(i=dn()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function Uk(i=dn()){var e;return N_(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zk(){return K1()&&document.documentMode===10}function kb(i=dn()){return N_(i)||Db(i)||Mb(i)||Ob(i)||/windows phone/i.test(i)||Nb(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pb(i,e=[]){let t;switch(i){case"Browser":t=X0(dn());break;case"Worker":t=`${X0(dn())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Aa}/${s}`}/**
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
 */class Bk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((c,d)=>{try{const m=e(l);c(m)}catch(m){d(m)}});s.onAbort=t,this.queue.push(s);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
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
 */async function Fk(i,e={}){return br(i,"GET","/v2/passwordPolicy",wr(i,e))}/**
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
 */const qk=6;class jk{constructor(e){var t,s,a,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:qk,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,a,l,c,d;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,m),this.validatePasswordCharacterOptions(e,m),m.isValid&&(m.isValid=(t=m.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),m.isValid&&(m.isValid=(s=m.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),m.isValid&&(m.isValid=(a=m.containsLowercaseLetter)!==null&&a!==void 0?a:!0),m.isValid&&(m.isValid=(l=m.containsUppercaseLetter)!==null&&l!==void 0?l:!0),m.isValid&&(m.isValid=(c=m.containsNumericCharacter)!==null&&c!==void 0?c:!0),m.isValid&&(m.isValid=(d=m.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),m}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let a=0;a<e.length;a++)s=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $0(this),this.idTokenSubscription=new $0(this),this.beforeStateQueue=new Bk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vb,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ps(t)),this._initializationPromise=this.queue(async()=>{var s,a,l;if(!this._deleted&&(this.persistenceManager=await Lo.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await wf(this,{idToken:e}),s=await ai._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(kn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let a=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=a?._redirectEventId,m=await this.tryRedirectSignIn(e);(!c||c===d)&&m?.user&&(a=m.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(c){a=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return Ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await bf(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Sk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(kn(this.app))return Promise.reject(gs(this));const t=e?Lt(e):null;return t&&Ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return kn(this.app)?Promise.reject(gs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return kn(this.app)?Promise.reject(gs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ps(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Fk(this),t=new jk(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Qu("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await Lk(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ps(e)||this._popupRedirectResolver;Ee(t,this,"argument-error"),this.redirectPersistenceManager=await Lo.create(this,[ps(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ee(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,s,a);return()=>{c=!0,m()}}else{const m=e.addObserver(t);return()=>{c=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Pb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(kn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&vk(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Ia(i){return Lt(i)}class $0{constructor(e){this.auth=e,this.observer=null,this.addObserver=iC(t=>this.observer=t)}get next(){return Ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Gk(i){sd=i}function Vb(i){return sd.loadJS(i)}function Kk(){return sd.recaptchaEnterpriseScript}function Yk(){return sd.gapiScript}function Qk(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class Wk{constructor(){this.enterprise=new Xk}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Xk{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const $k="recaptcha-enterprise",xb="NO_RECAPTCHA";class Zk{constructor(e){this.type=$k,this.auth=Ia(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,d)=>{Nk(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const g=new Ik(m);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,c(g.siteKey)}}).catch(m=>{d(m)})})}function a(l,c,d){const m=window.grecaptcha;K0(m)?m.enterprise.ready(()=>{m.enterprise.execute(l,{action:e}).then(g=>{c(g)}).catch(()=>{c(xb)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Wk().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{s(this.auth).then(d=>{if(!t&&K0(window.grecaptcha))a(d,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let m=Kk();m.length!==0&&(m+=d),Vb(m).then(()=>{a(d,l,c)}).catch(g=>{c(g)})}}).catch(d=>{c(d)})})}}async function Z0(i,e,t,s=!1,a=!1){const l=new Zk(i);let c;if(a)c=xb;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const m=d.phoneEnrollmentInfo.phoneNumber,g=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:g,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const m=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return s?Object.assign(d,{captchaResp:c}):Object.assign(d,{captchaResponse:c}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function gg(i,e,t,s,a){var l;if(!((l=i._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Z0(i,e,t,t==="getOobCode");return s(i,c)}else return s(i,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await Z0(i,e,t,t==="getOobCode");return s(i,d)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jk(i,e){const t=kf(i,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(hr(l,e??{}))return a;ci(a,"already-initialized")}return t.initialize({options:e})}function eP(i,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(ps);e?.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e?.popupRedirectResolver)}function tP(i,e,t){const s=Ia(i);Ee(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,l=Lb(e),{host:c,port:d}=nP(e),m=d===null?"":`:${d}`,g={url:`${l}//${c}${m}/`},E=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){Ee(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Ee(hr(g,s.config.emulator)&&hr(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,Tr(c)?(Tg(`${l}//${c}${m}`),Sg("Auth",!0)):iP()}function Lb(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function nP(i){const e=Lb(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const l=a[1];return{host:l,port:J0(s.substr(l.length+1))}}else{const[l,c]=s.split(":");return{host:l,port:J0(c)}}}function J0(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function iP(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ds("not implemented")}_getIdTokenResponse(e){return ds("not implemented")}_linkToIdToken(e,t){return ds("not implemented")}_getReauthenticationResolver(e){return ds("not implemented")}}async function sP(i,e){return br(i,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rP(i,e){return ac(i,"POST","/v1/accounts:signInWithPassword",wr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aP(i,e){return ac(i,"POST","/v1/accounts:signInWithEmailLink",wr(i,e))}async function oP(i,e){return ac(i,"POST","/v1/accounts:signInWithEmailLink",wr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku extends D_{constructor(e,t,s,a=null){super("password",s),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new Ku(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Ku(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gg(e,t,"signInWithPassword",rP);case"emailLink":return aP(e,{email:this._email,oobCode:this._password});default:ci(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gg(e,s,"signUpPassword",sP);case"emailLink":return oP(e,{idToken:t,email:this._email,oobCode:this._password});default:ci(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uo(i,e){return ac(i,"POST","/v1/accounts:signInWithIdp",wr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lP="http://localhost";class Ta extends D_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ta(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ci("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a}=t,l=b_(t,["providerId","signInMethod"]);if(!s||!a)return null;const c=new Ta(s,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Uo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Uo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Uo(e,t)}buildRequest(){const e={requestUri:lP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Qo(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uP(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function cP(i){const e=_u(yu(i)).link,t=e?_u(yu(e)).deep_link_id:null,s=_u(yu(i)).deep_link_id;return(s?_u(yu(s)).link:null)||s||t||e||i}class O_{constructor(e){var t,s,a,l,c,d;const m=_u(yu(e)),g=(t=m.apiKey)!==null&&t!==void 0?t:null,E=(s=m.oobCode)!==null&&s!==void 0?s:null,T=uP((a=m.mode)!==null&&a!==void 0?a:null);Ee(g&&E&&T,"argument-error"),this.apiKey=g,this.operation=T,this.code=E,this.continueUrl=(l=m.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=m.lang)!==null&&c!==void 0?c:null,this.tenantId=(d=m.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=cP(e);try{return new O_(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(){this.providerId=nl.PROVIDER_ID}static credential(e,t){return Ku._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=O_.parseLink(t);return Ee(s,"argument-error"),Ku._fromEmailAndCode(e,s.code,s.tenantId)}}nl.PROVIDER_ID="password";nl.EMAIL_PASSWORD_SIGN_IN_METHOD="password";nl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class oc extends Ub{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends oc{constructor(){super("facebook.com")}static credential(e){return Ta._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return er.credential(e.oauthAccessToken)}catch{return null}}}er.FACEBOOK_SIGN_IN_METHOD="facebook.com";er.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends oc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ta._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return tr.credential(t,s)}catch{return null}}}tr.GOOGLE_SIGN_IN_METHOD="google.com";tr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends oc{constructor(){super("github.com")}static credential(e){return Ta._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.GITHUB_SIGN_IN_METHOD="github.com";nr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends oc{constructor(){super("twitter.com")}static credential(e,t){return Ta._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ir.credential(t,s)}catch{return null}}}ir.TWITTER_SIGN_IN_METHOD="twitter.com";ir.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hP(i,e){return ac(i,"POST","/v1/accounts:signUp",wr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const l=await ai._fromIdTokenResponse(e,s,a),c=eS(s);return new Sa({user:l,providerId:c,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=eS(s);return new Sa({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function eS(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf extends Ss{constructor(e,t,s,a){var l;super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,Rf.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new Rf(e,t,s,a)}}function zb(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Rf._fromErrorAndOperation(i,l,e,s):l})}async function fP(i,e,t=!1){const s=await Gu(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return Sa._forOperation(i,"link",s)}/**
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
 */async function dP(i,e,t=!1){const{auth:s}=i;if(kn(s.app))return Promise.reject(gs(s));const a="reauthenticate";try{const l=await Gu(i,zb(s,a,e,i),t);Ee(l.idToken,s,"internal-error");const c=I_(l.idToken);Ee(c,s,"internal-error");const{sub:d}=c;return Ee(i.uid===d,s,"user-mismatch"),Sa._forOperation(i,a,l)}catch(l){throw l?.code==="auth/user-not-found"&&ci(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bb(i,e,t=!1){if(kn(i.app))return Promise.reject(gs(i));const s="signIn",a=await zb(i,s,e),l=await Sa._fromIdTokenResponse(i,s,a);return t||await i._updateCurrentUser(l.user),l}async function pP(i,e){return Bb(Ia(i),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fb(i){const e=Ia(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function mP(i,e,t){if(kn(i.app))return Promise.reject(gs(i));const s=Ia(i),c=await gg(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",hP).catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&Fb(i),m}),d=await Sa._fromIdTokenResponse(s,"signIn",c);return await s._updateCurrentUser(d.user),d}function gP(i,e,t){return kn(i.app)?Promise.reject(gs(i)):pP(Lt(i),nl.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Fb(i),s})}function _P(i,e,t,s){return Lt(i).onIdTokenChanged(e,t,s)}function yP(i,e,t){return Lt(i).beforeAuthStateChanged(e,t)}function vP(i,e,t,s){return Lt(i).onAuthStateChanged(e,t,s)}const Cf="__sak";/**
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
 */class qb{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Cf,"1"),this.storage.removeItem(Cf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EP=1e3,TP=10;class jb extends qb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=kb(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,m)=>{this.notifyListeners(c,m)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(s);!t&&this.localCache[s]===c||this.notifyListeners(s,c)},l=this.storage.getItem(s);zk()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,TP):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},EP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}jb.type="LOCAL";const SP=jb;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb extends qb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Hb.type="SESSION";const Gb=Hb;/**
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
 */function AP(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class rd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new rd(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!c?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const d=Array.from(c).map(async g=>g(t.origin,l)),m=await AP(d);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M_(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class wP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((d,m)=>{const g=M_("",20);a.port1.start();const E=setTimeout(()=>{m(new Error("unsupported_event"))},s);c={messageChannel:a,onMessage(T){const w=T;if(w.data.eventId===g)switch(w.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(w.data.response);break;default:clearTimeout(E),clearTimeout(l),m(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(){return window}function bP(i){Li().location.href=i}/**
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
 */function Kb(){return typeof Li().WorkerGlobalScope<"u"&&typeof Li().importScripts=="function"}async function RP(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function CP(){var i;return((i=navigator?.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function IP(){return Kb()?self:null}/**
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
 */const Yb="firebaseLocalStorageDb",NP=1,If="firebaseLocalStorage",Qb="fbase_key";class lc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ad(i,e){return i.transaction([If],e?"readwrite":"readonly").objectStore(If)}function DP(){const i=indexedDB.deleteDatabase(Yb);return new lc(i).toPromise()}function _g(){const i=indexedDB.open(Yb,NP);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(If,{keyPath:Qb})}catch(a){t(a)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(If)?e(s):(s.close(),await DP(),e(await _g()))})})}async function tS(i,e,t){const s=ad(i,!0).put({[Qb]:e,value:t});return new lc(s).toPromise()}async function OP(i,e){const t=ad(i,!1).get(e),s=await new lc(t).toPromise();return s===void 0?null:s.value}function nS(i,e){const t=ad(i,!0).delete(e);return new lc(t).toPromise()}const MP=800,kP=3;class Wb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _g(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>kP)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Kb()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rd._getInstance(IP()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await RP(),!this.activeServiceWorker)return;this.sender=new wP(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||CP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _g();return await tS(e,Cf,"1"),await nS(e,Cf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>tS(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>OP(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>nS(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=ad(a,!1).getAll();return new lc(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),MP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Wb.type="LOCAL";const PP=Wb;new rc(3e4,6e4);/**
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
 */function VP(i,e){return e?ps(e):(Ee(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class k_ extends D_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Uo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Uo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Uo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function xP(i){return Bb(i.auth,new k_(i),i.bypassAuthState)}function LP(i){const{auth:e,user:t}=i;return Ee(t,e,"internal-error"),dP(t,new k_(i),i.bypassAuthState)}async function UP(i){const{auth:e,user:t}=i;return Ee(t,e,"internal-error"),fP(t,new k_(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e,t,s,a,l=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const m={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(m))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xP;case"linkViaPopup":case"linkViaRedirect":return UP;case"reauthViaPopup":case"reauthViaRedirect":return LP;default:ci(this.auth,"internal-error")}}resolve(e){Ts(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ts(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP=new rc(2e3,1e4);class No extends Xb{constructor(e,t,s,a,l){super(e,t,a,l),this.provider=s,this.authWindow=null,this.pollId=null,No.currentPopupAction&&No.currentPopupAction.cancel(),No.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ee(e,this.auth,"internal-error"),e}async onExecution(){Ts(this.filter.length===1,"Popup operations only handle one event");const e=M_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(xi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,No.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zP.get())};e()}}No.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BP="pendingRedirect",$h=new Map;class FP extends Xb{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=$h.get(this.auth._key());if(!e){try{const s=await qP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}$h.set(this.auth._key(),e)}return this.bypassAuthState||$h.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qP(i,e){const t=GP(e),s=HP(i);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function jP(i,e){$h.set(i._key(),e)}function HP(i){return ps(i._redirectPersistence)}function GP(i){return Xh(BP,i.config.apiKey,i.name)}async function KP(i,e,t=!1){if(kn(i.app))return Promise.reject(gs(i));const s=Ia(i),a=VP(s,e),c=await new FP(s,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YP=10*60*1e3;class QP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!WP(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!$b(e)){const a=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(xi(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=YP&&this.cachedEventUids.clear(),this.cachedEventUids.has(iS(e))}saveEventToCache(e){this.cachedEventUids.add(iS(e)),this.lastProcessedEventTime=Date.now()}}function iS(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function $b({type:i,error:e}){return i==="unknown"&&e?.code==="auth/no-auth-event"}function WP(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $b(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XP(i,e={}){return br(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $P=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ZP=/^https?/;async function JP(i){if(i.config.emulator)return;const{authorizedDomains:e}=await XP(i);for(const t of e)try{if(eV(t))return}catch{}ci(i,"unauthorized-domain")}function eV(i){const e=pg(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const c=new URL(i);return c.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===s}if(!ZP.test(t))return!1;if($P.test(i))return s===i;const a=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(s)}/**
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
 */const tV=new rc(3e4,6e4);function sS(){const i=Li().___jsl;if(i?.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function nV(i){return new Promise((e,t)=>{var s,a,l;function c(){sS(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sS(),t(xi(i,"network-request-failed"))},timeout:tV.get()})}if(!((a=(s=Li().gapi)===null||s===void 0?void 0:s.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((l=Li().gapi)===null||l===void 0)&&l.load)c();else{const d=Qk("iframefcb");return Li()[d]=()=>{gapi.load?c():t(xi(i,"network-request-failed"))},Vb(`${Yk()}?onload=${d}`).catch(m=>t(m))}}).catch(e=>{throw Zh=null,e})}let Zh=null;function iV(i){return Zh=Zh||nV(i),Zh}/**
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
 */const sV=new rc(5e3,15e3),rV="__/auth/iframe",aV="emulator/auth/iframe",oV={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lV=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uV(i){const e=i.config;Ee(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?C_(e,aV):`https://${i.config.authDomain}/${rV}`,s={apiKey:e.apiKey,appName:i.name,v:Aa},a=lV.get(i.config.apiHost);a&&(s.eid=a);const l=i._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${Qo(s).slice(1)}`}async function cV(i){const e=await iV(i),t=Li().gapi;return Ee(t,i,"internal-error"),e.open({where:document.body,url:uV(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:oV,dontclear:!0},s=>new Promise(async(a,l)=>{await s.restyle({setHideOnLeave:!1});const c=xi(i,"network-request-failed"),d=Li().setTimeout(()=>{l(c)},sV.get());function m(){Li().clearTimeout(d),a(s)}s.ping(m).then(m,()=>{l(c)})}))}/**
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
 */const hV={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fV=500,dV=600,pV="_blank",mV="http://localhost";class rS{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gV(i,e,t,s=fV,a=dV){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let d="";const m=Object.assign(Object.assign({},hV),{width:s.toString(),height:a.toString(),top:l,left:c}),g=dn().toLowerCase();t&&(d=Ib(g)?pV:t),Rb(g)&&(e=e||mV,m.scrollbars="yes");const E=Object.entries(m).reduce((w,[x,F])=>`${w}${x}=${F},`,"");if(Uk(g)&&d!=="_self")return _V(e||"",d),new rS(null);const T=window.open(e||"",d,E);Ee(T,i,"popup-blocked");try{T.focus()}catch{}return new rS(T)}function _V(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const yV="__/auth/handler",vV="emulator/auth/handler",EV=encodeURIComponent("fac");async function aS(i,e,t,s,a,l){Ee(i.config.authDomain,i,"auth-domain-config-required"),Ee(i.config.apiKey,i,"invalid-api-key");const c={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:Aa,eventId:a};if(e instanceof Ub){e.setDefaultLanguage(i.languageCode),c.providerId=e.providerId||"",Mm(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,T]of Object.entries({}))c[E]=T}if(e instanceof oc){const E=e.getScopes().filter(T=>T!=="");E.length>0&&(c.scopes=E.join(","))}i.tenantId&&(c.tid=i.tenantId);const d=c;for(const E of Object.keys(d))d[E]===void 0&&delete d[E];const m=await i._getAppCheckToken(),g=m?`#${EV}=${encodeURIComponent(m)}`:"";return`${TV(i)}?${Qo(d).slice(1)}${g}`}function TV({config:i}){return i.emulator?C_(i,vV):`https://${i.authDomain}/${yV}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om="webStorageSupport";class SV{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gb,this._completeRedirectFn=KP,this._overrideRedirectResult=jP}async _openPopup(e,t,s,a){var l;Ts((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await aS(e,t,s,pg(),a);return gV(e,c,M_())}async _openRedirect(e,t,s,a){await this._originValidation(e);const l=await aS(e,t,s,pg(),a);return bP(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(Ts(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await cV(e),s=new QP(e);return t.register("authEvent",a=>(Ee(a?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Om,{type:Om},a=>{var l;const c=(l=a?.[0])===null||l===void 0?void 0:l[Om];c!==void 0&&t(!!c),ci(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=JP(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return kb()||Cb()||N_()}}const AV=SV;var oS="@firebase/auth",lS="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bV(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function RV(i){pa(new fr("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=s.options;Ee(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const m={apiKey:c,authDomain:d,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pb(i)},g=new Hk(s,a,l,m);return eP(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),pa(new fr("auth-internal",e=>{const t=Ia(e.getProvider("auth").getImmediate());return(s=>new wV(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Oi(oS,lS,bV(i)),Oi(oS,lS,"esm2017")}/**
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
 */const CV=5*60,IV=_S("authIdTokenMaxAge")||CV;let uS=null;const NV=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>IV)return;const a=t?.token;uS!==a&&(uS=a,await fetch(i,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function DV(i=bg()){const e=kf(i,"auth");if(e.isInitialized())return e.getImmediate();const t=Jk(i,{popupRedirectResolver:AV,persistence:[PP,SP,Gb]}),s=_S("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const c=NV(l.toString());yP(t,c,()=>c(t.currentUser)),_P(t,d=>c(d))}}const a=pS("auth");return a&&tP(t,`http://${a}`),t}function OV(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}Gk({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=a=>{const l=xi("internal-error");l.customData=a,t(l)},s.type="text/javascript",s.charset="UTF-8",OV().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});RV("Browser");const MV={apiKey:"AIzaSyD-EnuWkZgnjb6hnaP4LhUIZvxSCf5tiIo",authDomain:"game-of-trust-675c9.firebaseapp.com",projectId:"game-of-trust-675c9",storageBucket:"game-of-trust-675c9.firebasestorage.app",messagingSenderId:"72708199445",appId:"1:72708199445:web:ce23ac49a6c15fe7f02a1c",measurementId:"G-K3GSYXR89X"},P_=AS(MV);nO(P_);const Do=tk(P_),Yu=DV(P_),kV=({onAuthSuccess:i})=>{const[e,t]=$e.useState(!0),[s,a]=$e.useState(""),[l,c]=$e.useState(""),[d,m]=$e.useState(""),[g,E]=$e.useState(!1),[T,w]=$e.useState(""),x=async F=>{F.preventDefault(),E(!0),w("");try{if(e){const $=await gP(Yu,s,l);i($.user.uid)}else{if(!d.trim()){w("Username is required for registration");return}const $=await mP(Yu,s,l);await pk(Po(Do,"usernames",$.user.uid),{username:d.trim(),createdAt:new Date().toISOString()}),i($.user.uid)}}catch($){w($.message||"An error occurred")}finally{E(!1)}};return ue.jsxs("div",{children:[ue.jsx("h2",{children:e?"Login":"Sign Up"}),ue.jsxs("form",{onSubmit:x,children:[ue.jsxs("div",{children:[ue.jsx("label",{children:"Email:"}),ue.jsx("input",{type:"email",value:s,onChange:F=>a(F.target.value),required:!0})]}),ue.jsxs("div",{children:[ue.jsx("label",{children:"Password:"}),ue.jsx("input",{type:"password",value:l,onChange:F=>c(F.target.value),required:!0})]}),!e&&ue.jsxs("div",{children:[ue.jsx("label",{children:"Username:"}),ue.jsx("input",{type:"text",value:d,onChange:F=>m(F.target.value),required:!0})]}),T&&ue.jsx("div",{style:{color:"red"},children:T}),ue.jsx("button",{type:"submit",disabled:g,children:g?"Loading...":e?"Login":"Sign Up"})]}),ue.jsxs("button",{onClick:()=>t(!e),children:["Switch to ",e?"Sign Up":"Login"]})]})},Nf=async i=>{try{const e=await dk(Po(Do,"usernames",i));return e.exists()?e.data().username:null}catch(e){return console.error("Error fetching username:",e),null}},PV=({width:i=800,height:e=600,cellSize:t=10})=>{const s=$e.useRef(null),[a,l]=$e.useState(!1),[c,d]=$e.useState(0),m=Math.floor(i/t),g=Math.floor(e/t),E=$e.useCallback(()=>{const te=Array(g).fill(null).map(()=>Array(m).fill(!1));return[[1,0],[2,1],[0,2],[1,2],[2,2]].forEach(([N,b])=>{N<g&&b<m&&(te[N+5][b+5]=!0)}),[[0,1],[1,1],[2,1]].forEach(([N,b])=>{N+10<g&&b+20<m&&(te[N+10][b+20]=!0)}),[[0,0],[0,1],[0,2],[1,0],[1,2],[2,0],[2,1],[2,2],[0,4],[0,5],[0,6],[1,4],[1,6],[2,4],[2,5],[2,6]].forEach(([N,b])=>{N+15<g&&b+35<m&&(te[N+15][b+35]=!0)}),te},[g,m]),[T,w]=$e.useState(E),x=(te,ye,se)=>{let he=0;for(let N=-1;N<=1;N++)for(let b=-1;b<=1;b++){if(N===0&&b===0)continue;const C=ye+N,M=se+b;C>=0&&C<g&&M>=0&&M<m&&te[C][M]&&he++}return he},F=$e.useCallback(te=>{const ye=Array(g).fill(null).map(()=>Array(m).fill(!1));for(let se=0;se<g;se++)for(let he=0;he<m;he++){const N=x(te,se,he);te[se][he]?ye[se][he]=N===2||N===3:ye[se][he]=N===3}return ye},[g,m]),$=$e.useCallback(te=>{const ye=s.current;if(!ye)return;const se=ye.getContext("2d");if(se){se.fillStyle="#f0f0f0",se.fillRect(0,0,i,e),se.fillStyle="#333";for(let he=0;he<g;he++)for(let N=0;N<m;N++)te[he][N]&&se.fillRect(N*t,he*t,t-1,t-1);se.strokeStyle="#ddd",se.lineWidth=1;for(let he=0;he<=m;he++)se.beginPath(),se.moveTo(he*t,0),se.lineTo(he*t,e),se.stroke();for(let he=0;he<=g;he++)se.beginPath(),se.moveTo(0,he*t),se.lineTo(i,he*t),se.stroke()}},[i,e,t,g,m]),H=$e.useCallback(()=>{w(te=>{const ye=F(te);return d(se=>se+1),ye})},[F]),ae=()=>{l(!a)},le=()=>{l(!1),d(0),w(E())};return $e.useEffect(()=>{if(a){const te=setInterval(H,20);return()=>clearInterval(te)}},[a,H]),$e.useEffect(()=>{$(T)},[T,$]),ue.jsxs("div",{style:{textAlign:"center",padding:"20px"},children:[ue.jsx("h2",{children:"Conway's Game of Life"}),ue.jsxs("div",{style:{marginBottom:"20px"},children:[ue.jsx("button",{onClick:ae,style:{padding:"10px 20px",fontSize:"16px",marginRight:"10px",backgroundColor:a?"#ff4444":"#44ff44",color:"white",border:"none",borderRadius:"5px",cursor:"pointer"},children:a?"Stop":"Start"}),ue.jsx("button",{onClick:le,style:{padding:"10px 20px",fontSize:"16px",backgroundColor:"#4444ff",color:"white",border:"none",borderRadius:"5px",cursor:"pointer"},children:"Reset"})]}),ue.jsx("div",{style:{marginBottom:"10px"},children:ue.jsxs("strong",{children:["Generation: ",c]})}),ue.jsx("canvas",{ref:s,width:i,height:e,style:{border:"2px solid #333",backgroundColor:"#f0f0f0"}})]})},VV=()=>{const[i,e]=$e.useState(null),[t,s]=$e.useState(""),[a,l]=$e.useState(!1),[c,d]=$e.useState(null),[m,g]=$e.useState(!1),[E,T]=$e.useState(!1),w=()=>{const H={};for(let ae=0;ae<50;ae++)H[`row${ae}`]=Array(50).fill(!1);return H};$e.useEffect(()=>Yu.onAuthStateChanged(ae=>{d(ae)}),[]);const x=async()=>{if(c){l(!0);try{const H=await Nf(c.uid);if(!H){alert("Username not found. Please set up your username first."),l(!1);return}const ae={state:"waiting",user1:{uid:c.uid,username:H,ready:!1},user2:null,grid:w(),createdAt:_k()},le=await mk(ek(Do,"games"),ae);s(le.id),T(!0)}catch(H){console.error("Error creating game:",H),alert("Failed to create game. Please try again.")}finally{l(!1)}}},F=async H=>{if(c)try{const ae=await Nf(c.uid);if(!ae){alert("Username not found. Please set up your username first.");return}const le=Po(Do,"games",H);await Nm(le,{user2:{uid:c.uid,username:ae,ready:!1}}),s(H)}catch(ae){console.error("Error joining game:",ae),alert("Failed to join game. Please check the game ID and try again.")}},$=async()=>{if(!t||!c||!i)return;const H=Po(Do,"games",t),le=i.user1?.uid===c.uid?"user1.ready":"user2.ready";try{await Nm(H,{[le]:!m})}catch(te){console.error("Error updating ready state:",te)}};return $e.useEffect(()=>{if(!t)return;const H=Po(Do,"games",t);return gk(H,le=>{if(le.exists()){const te={id:le.id,...le.data()};if(e(te),c){const se=te.user1?.uid===c.uid?te.user1?.ready:te.user2?.ready;g(se||!1)}te.user1?.ready&&te.user2?.ready&&te.state==="waiting"&&Nm(H,{state:"started"})}})},[t,c]),i?.state==="started"?ue.jsxs("div",{className:"game-started",children:[ue.jsx("h2",{children:"Game Started!"}),ue.jsx("div",{className:"game-info",children:ue.jsxs("p",{children:["Players: ",i.user1?.username," vs"," ",i.user2?.username]})}),ue.jsx(PV,{width:800,height:600,cellSize:10})]}):ue.jsxs("div",{className:"creating-game",children:[ue.jsx("h2",{children:"Create or Join Game"}),t?ue.jsxs("div",{className:"game-lobby",children:[ue.jsx("h3",{children:"Game Lobby"}),ue.jsxs("p",{children:[ue.jsx("strong",{children:"Game ID:"})," ",t]}),ue.jsxs("div",{className:"players-section",children:[ue.jsx("h4",{children:"Players:"}),ue.jsxs("div",{className:"player-list",children:[ue.jsxs("div",{className:"player",children:[ue.jsx("span",{children:i?.user1?.username||"Player 1"}),ue.jsx("span",{className:`ready-status ${i?.user1?.ready?"ready":"not-ready"}`,children:i?.user1?.ready?"✓ Ready":"○ Not Ready"})]}),ue.jsxs("div",{className:"player",children:[ue.jsx("span",{children:i?.user2?.username||"Waiting for Player 2..."}),i?.user2&&ue.jsx("span",{className:`ready-status ${i?.user2?.ready?"ready":"not-ready"}`,children:i?.user2?.ready?"✓ Ready":"○ Not Ready"})]})]})]}),i?.user2&&ue.jsxs("div",{className:"ready-section",children:[ue.jsx("button",{onClick:$,className:`ready-button ${m?"ready":"not-ready"}`,children:m?"Cancel Ready":"Ready to Start"}),i?.user1?.ready&&i?.user2?.ready&&ue.jsx("p",{className:"starting-message",children:"Starting game..."})]}),E&&!i?.user2&&ue.jsx("div",{className:"waiting-section",children:ue.jsx("p",{children:"Waiting for another player to join..."})})]}):ue.jsxs("div",{className:"game-setup",children:[ue.jsxs("div",{className:"create-game-section",children:[ue.jsx("h3",{children:"Create New Game"}),ue.jsx("button",{onClick:x,disabled:a||!c,className:"create-button",children:a?"Creating...":"Create Game"})]}),ue.jsxs("div",{className:"join-game-section",children:[ue.jsx("h3",{children:"Join Existing Game"}),ue.jsx("input",{type:"text",placeholder:"Enter Game ID",className:"game-id-input",onKeyDown:H=>{if(H.key==="Enter"){const ae=H.target.value.trim();ae&&F(ae)}}}),ue.jsx("button",{onClick:()=>{const ae=document.querySelector(".game-id-input")?.value.trim();ae&&F(ae)},disabled:!c,className:"join-button",children:"Join Game"})]})]})]})};function xV(){const[i,e]=$e.useState(null),[t,s]=$e.useState(null),[a,l]=$e.useState(!0);$e.useEffect(()=>{const d=vP(Yu,async m=>{if(e(m),m){const g=await Nf(m.uid);s(g)}else s(null);l(!1)});return()=>d()},[]);const c=async d=>{const m=await Nf(d);s(m)};return a?ue.jsx("div",{children:"Loading..."}):ue.jsx("div",{children:i?ue.jsxs("div",{children:[ue.jsxs("div",{children:["Welcome, ",t||i.email,"!"]}),ue.jsx("button",{onClick:()=>Yu.signOut(),children:"Logout"}),ue.jsx(VV,{})]}):ue.jsx(kV,{onAuthSuccess:c})})}O1.createRoot(document.getElementById("root")).render(ue.jsx($e.StrictMode,{children:ue.jsx(xV,{})}));
