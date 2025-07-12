(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var Ap={exports:{}},gu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cE;function Q1(){if(cE)return gu;cE=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(s,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:i,type:s,key:c,ref:a!==void 0?a:null,props:l}}return gu.Fragment=e,gu.jsx=t,gu.jsxs=t,gu}var hE;function W1(){return hE||(hE=1,Ap.exports=Q1()),Ap.exports}var G=W1(),wp={exports:{}},Ne={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fE;function X1(){if(fE)return Ne;fE=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),T=Symbol.iterator;function w(N){return N===null||typeof N!="object"?null:(N=T&&N[T]||N["@@iterator"],typeof N=="function"?N:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B=Object.assign,J={};function $(N,W,ne){this.props=N,this.context=W,this.refs=J,this.updater=ne||P}$.prototype.isReactComponent={},$.prototype.setState=function(N,W){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,W,"setState")},$.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function _e(){}_e.prototype=$.prototype;function de(N,W,ne){this.props=N,this.context=W,this.refs=J,this.updater=ne||P}var he=de.prototype=new _e;he.constructor=de,B(he,$.prototype),he.isPureReactComponent=!0;var Ce=Array.isArray,me={H:null,A:null,T:null,S:null,V:null},Ie=Object.prototype.hasOwnProperty;function M(N,W,ne,te,ye,xe){return ne=xe.ref,{$$typeof:i,type:N,key:W,ref:ne!==void 0?ne:null,props:xe}}function R(N,W){return M(N.type,W,void 0,void 0,void 0,N.props)}function C(N){return typeof N=="object"&&N!==null&&N.$$typeof===i}function x(N){var W={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(ne){return W[ne]})}var k=/\/+/g;function D(N,W){return typeof N=="object"&&N!==null&&N.key!=null?x(""+N.key):W.toString(36)}function b(){}function re(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(b,b):(N.status="pending",N.then(function(W){N.status==="pending"&&(N.status="fulfilled",N.value=W)},function(W){N.status==="pending"&&(N.status="rejected",N.reason=W)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function ae(N,W,ne,te,ye){var xe=typeof N;(xe==="undefined"||xe==="boolean")&&(N=null);var we=!1;if(N===null)we=!0;else switch(xe){case"bigint":case"string":case"number":we=!0;break;case"object":switch(N.$$typeof){case i:case e:we=!0;break;case y:return we=N._init,ae(we(N._payload),W,ne,te,ye)}}if(we)return ye=ye(N),we=te===""?"."+D(N,0):te,Ce(ye)?(ne="",we!=null&&(ne=we.replace(k,"$&/")+"/"),ae(ye,W,ne,"",function(di){return di})):ye!=null&&(C(ye)&&(ye=R(ye,ne+(ye.key==null||N&&N.key===ye.key?"":(""+ye.key).replace(k,"$&/")+"/")+we)),W.push(ye)),1;we=0;var zt=te===""?".":te+":";if(Ce(N))for(var at=0;at<N.length;at++)te=N[at],xe=zt+D(te,at),we+=ae(te,W,ne,xe,ye);else if(at=w(N),typeof at=="function")for(N=at.call(N),at=0;!(te=N.next()).done;)te=te.value,xe=zt+D(te,at++),we+=ae(te,W,ne,xe,ye);else if(xe==="object"){if(typeof N.then=="function")return ae(re(N),W,ne,te,ye);throw W=String(N),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.")}return we}function V(N,W,ne){if(N==null)return N;var te=[],ye=0;return ae(N,te,"","",function(xe){return W.call(ne,xe,ye++)}),te}function Y(N){if(N._status===-1){var W=N._result;W=W(),W.then(function(ne){(N._status===0||N._status===-1)&&(N._status=1,N._result=ne)},function(ne){(N._status===0||N._status===-1)&&(N._status=2,N._result=ne)}),N._status===-1&&(N._status=0,N._result=W)}if(N._status===1)return N._result.default;throw N._result}var ie=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var W=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(W))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function fe(){}return Ne.Children={map:V,forEach:function(N,W,ne){V(N,function(){W.apply(this,arguments)},ne)},count:function(N){var W=0;return V(N,function(){W++}),W},toArray:function(N){return V(N,function(W){return W})||[]},only:function(N){if(!C(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},Ne.Component=$,Ne.Fragment=t,Ne.Profiler=a,Ne.PureComponent=de,Ne.StrictMode=s,Ne.Suspense=p,Ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=me,Ne.__COMPILER_RUNTIME={__proto__:null,c:function(N){return me.H.useMemoCache(N)}},Ne.cache=function(N){return function(){return N.apply(null,arguments)}},Ne.cloneElement=function(N,W,ne){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var te=B({},N.props),ye=N.key,xe=void 0;if(W!=null)for(we in W.ref!==void 0&&(xe=void 0),W.key!==void 0&&(ye=""+W.key),W)!Ie.call(W,we)||we==="key"||we==="__self"||we==="__source"||we==="ref"&&W.ref===void 0||(te[we]=W[we]);var we=arguments.length-2;if(we===1)te.children=ne;else if(1<we){for(var zt=Array(we),at=0;at<we;at++)zt[at]=arguments[at+2];te.children=zt}return M(N.type,ye,void 0,void 0,xe,te)},Ne.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:l,_context:N},N},Ne.createElement=function(N,W,ne){var te,ye={},xe=null;if(W!=null)for(te in W.key!==void 0&&(xe=""+W.key),W)Ie.call(W,te)&&te!=="key"&&te!=="__self"&&te!=="__source"&&(ye[te]=W[te]);var we=arguments.length-2;if(we===1)ye.children=ne;else if(1<we){for(var zt=Array(we),at=0;at<we;at++)zt[at]=arguments[at+2];ye.children=zt}if(N&&N.defaultProps)for(te in we=N.defaultProps,we)ye[te]===void 0&&(ye[te]=we[te]);return M(N,xe,void 0,void 0,null,ye)},Ne.createRef=function(){return{current:null}},Ne.forwardRef=function(N){return{$$typeof:d,render:N}},Ne.isValidElement=C,Ne.lazy=function(N){return{$$typeof:y,_payload:{_status:-1,_result:N},_init:Y}},Ne.memo=function(N,W){return{$$typeof:g,type:N,compare:W===void 0?null:W}},Ne.startTransition=function(N){var W=me.T,ne={};me.T=ne;try{var te=N(),ye=me.S;ye!==null&&ye(ne,te),typeof te=="object"&&te!==null&&typeof te.then=="function"&&te.then(fe,ie)}catch(xe){ie(xe)}finally{me.T=W}},Ne.unstable_useCacheRefresh=function(){return me.H.useCacheRefresh()},Ne.use=function(N){return me.H.use(N)},Ne.useActionState=function(N,W,ne){return me.H.useActionState(N,W,ne)},Ne.useCallback=function(N,W){return me.H.useCallback(N,W)},Ne.useContext=function(N){return me.H.useContext(N)},Ne.useDebugValue=function(){},Ne.useDeferredValue=function(N,W){return me.H.useDeferredValue(N,W)},Ne.useEffect=function(N,W,ne){var te=me.H;if(typeof ne=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return te.useEffect(N,W)},Ne.useId=function(){return me.H.useId()},Ne.useImperativeHandle=function(N,W,ne){return me.H.useImperativeHandle(N,W,ne)},Ne.useInsertionEffect=function(N,W){return me.H.useInsertionEffect(N,W)},Ne.useLayoutEffect=function(N,W){return me.H.useLayoutEffect(N,W)},Ne.useMemo=function(N,W){return me.H.useMemo(N,W)},Ne.useOptimistic=function(N,W){return me.H.useOptimistic(N,W)},Ne.useReducer=function(N,W,ne){return me.H.useReducer(N,W,ne)},Ne.useRef=function(N){return me.H.useRef(N)},Ne.useState=function(N){return me.H.useState(N)},Ne.useSyncExternalStore=function(N,W,ne){return me.H.useSyncExternalStore(N,W,ne)},Ne.useTransition=function(){return me.H.useTransition()},Ne.version="19.1.0",Ne}var dE;function kg(){return dE||(dE=1,wp.exports=X1()),wp.exports}var Ye=kg(),bp={exports:{}},_u={},Rp={exports:{}},Ip={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mE;function $1(){return mE||(mE=1,function(i){function e(V,Y){var ie=V.length;V.push(Y);e:for(;0<ie;){var fe=ie-1>>>1,N=V[fe];if(0<a(N,Y))V[fe]=Y,V[ie]=N,ie=fe;else break e}}function t(V){return V.length===0?null:V[0]}function s(V){if(V.length===0)return null;var Y=V[0],ie=V.pop();if(ie!==Y){V[0]=ie;e:for(var fe=0,N=V.length,W=N>>>1;fe<W;){var ne=2*(fe+1)-1,te=V[ne],ye=ne+1,xe=V[ye];if(0>a(te,ie))ye<N&&0>a(xe,te)?(V[fe]=xe,V[ye]=ie,fe=ye):(V[fe]=te,V[ne]=ie,fe=ne);else if(ye<N&&0>a(xe,ie))V[fe]=xe,V[ye]=ie,fe=ye;else break e}}return Y}function a(V,Y){var ie=V.sortIndex-Y.sortIndex;return ie!==0?ie:V.id-Y.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();i.unstable_now=function(){return c.now()-d}}var p=[],g=[],y=1,T=null,w=3,P=!1,B=!1,J=!1,$=!1,_e=typeof setTimeout=="function"?setTimeout:null,de=typeof clearTimeout=="function"?clearTimeout:null,he=typeof setImmediate<"u"?setImmediate:null;function Ce(V){for(var Y=t(g);Y!==null;){if(Y.callback===null)s(g);else if(Y.startTime<=V)s(g),Y.sortIndex=Y.expirationTime,e(p,Y);else break;Y=t(g)}}function me(V){if(J=!1,Ce(V),!B)if(t(p)!==null)B=!0,Ie||(Ie=!0,D());else{var Y=t(g);Y!==null&&ae(me,Y.startTime-V)}}var Ie=!1,M=-1,R=5,C=-1;function x(){return $?!0:!(i.unstable_now()-C<R)}function k(){if($=!1,Ie){var V=i.unstable_now();C=V;var Y=!0;try{e:{B=!1,J&&(J=!1,de(M),M=-1),P=!0;var ie=w;try{t:{for(Ce(V),T=t(p);T!==null&&!(T.expirationTime>V&&x());){var fe=T.callback;if(typeof fe=="function"){T.callback=null,w=T.priorityLevel;var N=fe(T.expirationTime<=V);if(V=i.unstable_now(),typeof N=="function"){T.callback=N,Ce(V),Y=!0;break t}T===t(p)&&s(p),Ce(V)}else s(p);T=t(p)}if(T!==null)Y=!0;else{var W=t(g);W!==null&&ae(me,W.startTime-V),Y=!1}}break e}finally{T=null,w=ie,P=!1}Y=void 0}}finally{Y?D():Ie=!1}}}var D;if(typeof he=="function")D=function(){he(k)};else if(typeof MessageChannel<"u"){var b=new MessageChannel,re=b.port2;b.port1.onmessage=k,D=function(){re.postMessage(null)}}else D=function(){_e(k,0)};function ae(V,Y){M=_e(function(){V(i.unstable_now())},Y)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(V){V.callback=null},i.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<V?Math.floor(1e3/V):5},i.unstable_getCurrentPriorityLevel=function(){return w},i.unstable_next=function(V){switch(w){case 1:case 2:case 3:var Y=3;break;default:Y=w}var ie=w;w=Y;try{return V()}finally{w=ie}},i.unstable_requestPaint=function(){$=!0},i.unstable_runWithPriority=function(V,Y){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var ie=w;w=V;try{return Y()}finally{w=ie}},i.unstable_scheduleCallback=function(V,Y,ie){var fe=i.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?fe+ie:fe):ie=fe,V){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=ie+N,V={id:y++,callback:Y,priorityLevel:V,startTime:ie,expirationTime:N,sortIndex:-1},ie>fe?(V.sortIndex=ie,e(g,V),t(p)===null&&V===t(g)&&(J?(de(M),M=-1):J=!0,ae(me,ie-fe))):(V.sortIndex=N,e(p,V),B||P||(B=!0,Ie||(Ie=!0,D()))),V},i.unstable_shouldYield=x,i.unstable_wrapCallback=function(V){var Y=w;return function(){var ie=w;w=Y;try{return V.apply(this,arguments)}finally{w=ie}}}}(Ip)),Ip}var pE;function Z1(){return pE||(pE=1,Rp.exports=$1()),Rp.exports}var Cp={exports:{}},an={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gE;function J1(){if(gE)return an;gE=1;var i=kg();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var s={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,g,y){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:T==null?null:""+T,children:p,containerInfo:g,implementation:y}}var c=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return an.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,an.createPortal=function(p,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(p,g,null,y)},an.flushSync=function(p){var g=c.T,y=s.p;try{if(c.T=null,s.p=2,p)return p()}finally{c.T=g,s.p=y,s.d.f()}},an.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(p,g))},an.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},an.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var y=g.as,T=d(y,g.crossOrigin),w=typeof g.integrity=="string"?g.integrity:void 0,P=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?s.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:T,integrity:w,fetchPriority:P}):y==="script"&&s.d.X(p,{crossOrigin:T,integrity:w,fetchPriority:P,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},an.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=d(g.as,g.crossOrigin);s.d.M(p,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(p)},an.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,T=d(y,g.crossOrigin);s.d.L(p,y,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},an.preloadModule=function(p,g){if(typeof p=="string")if(g){var y=d(g.as,g.crossOrigin);s.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(p)},an.requestFormReset=function(p){s.d.r(p)},an.unstable_batchedUpdates=function(p,g){return p(g)},an.useFormState=function(p,g,y){return c.H.useFormState(p,g,y)},an.useFormStatus=function(){return c.H.useHostTransitionStatus()},an.version="19.1.0",an}var _E;function eI(){if(_E)return Cp.exports;_E=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Cp.exports=J1(),Cp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yE;function tI(){if(yE)return _u;yE=1;var i=Z1(),e=kg(),t=eI();function s(n){var r="https://react.dev/errors/"+n;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var r=n,o=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(o=r.return),n=r.return;while(n)}return r.tag===3?o:null}function c(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function d(n){if(l(n)!==n)throw Error(s(188))}function p(n){var r=n.alternate;if(!r){if(r=l(n),r===null)throw Error(s(188));return r!==n?null:n}for(var o=n,u=r;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return d(f),n;if(m===u)return d(f),r;m=m.sibling}throw Error(s(188))}if(o.return!==u.return)o=f,u=m;else{for(var E=!1,S=f.child;S;){if(S===o){E=!0,o=f,u=m;break}if(S===u){E=!0,u=f,o=m;break}S=S.sibling}if(!E){for(S=m.child;S;){if(S===o){E=!0,o=m,u=f;break}if(S===u){E=!0,u=m,o=f;break}S=S.sibling}if(!E)throw Error(s(189))}}if(o.alternate!==u)throw Error(s(190))}if(o.tag!==3)throw Error(s(188));return o.stateNode.current===o?n:r}function g(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n;for(n=n.child;n!==null;){if(r=g(n),r!==null)return r;n=n.sibling}return null}var y=Object.assign,T=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),P=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),$=Symbol.for("react.profiler"),_e=Symbol.for("react.provider"),de=Symbol.for("react.consumer"),he=Symbol.for("react.context"),Ce=Symbol.for("react.forward_ref"),me=Symbol.for("react.suspense"),Ie=Symbol.for("react.suspense_list"),M=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),x=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function D(n){return n===null||typeof n!="object"?null:(n=k&&n[k]||n["@@iterator"],typeof n=="function"?n:null)}var b=Symbol.for("react.client.reference");function re(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===b?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case B:return"Fragment";case $:return"Profiler";case J:return"StrictMode";case me:return"Suspense";case Ie:return"SuspenseList";case C:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case P:return"Portal";case he:return(n.displayName||"Context")+".Provider";case de:return(n._context.displayName||"Context")+".Consumer";case Ce:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case M:return r=n.displayName||null,r!==null?r:re(n.type)||"Memo";case R:r=n._payload,n=n._init;try{return re(n(r))}catch{}}return null}var ae=Array.isArray,V=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},fe=[],N=-1;function W(n){return{current:n}}function ne(n){0>N||(n.current=fe[N],fe[N]=null,N--)}function te(n,r){N++,fe[N]=n.current,n.current=r}var ye=W(null),xe=W(null),we=W(null),zt=W(null);function at(n,r){switch(te(we,r),te(xe,n),te(ye,null),r.nodeType){case 9:case 11:n=(n=r.documentElement)&&(n=n.namespaceURI)?U0(n):0;break;default:if(n=r.tagName,r=r.namespaceURI)r=U0(r),n=z0(r,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}ne(ye),te(ye,n)}function di(){ne(ye),ne(xe),ne(we)}function Ns(n){n.memoizedState!==null&&te(zt,n);var r=ye.current,o=z0(r,n.type);r!==o&&(te(xe,n),te(ye,o))}function Fi(n){xe.current===n&&(ne(ye),ne(xe)),zt.current===n&&(ne(zt),hu._currentValue=ie)}var Or=Object.prototype.hasOwnProperty,xr=i.unstable_scheduleCallback,Mr=i.unstable_cancelCallback,ll=i.unstable_shouldYield,_c=i.unstable_requestPaint,Ln=i.unstable_now,Ad=i.unstable_getCurrentPriorityLevel,ul=i.unstable_ImmediatePriority,Pa=i.unstable_UserBlockingPriority,kr=i.unstable_NormalPriority,wd=i.unstable_LowPriority,Va=i.unstable_IdlePriority,cl=i.log,yc=i.unstable_setDisableYieldValue,yt=null,$e=null;function bn(n){if(typeof cl=="function"&&yc(n),$e&&typeof $e.setStrictMode=="function")try{$e.setStrictMode(yt,n)}catch{}}var sn=Math.clz32?Math.clz32:Pr,vc=Math.log,bd=Math.LN2;function Pr(n){return n>>>=0,n===0?32:31-(vc(n)/bd|0)|0}var Vr=256,Lr=4194304;function ti(n){var r=n&42;if(r!==0)return r;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function La(n,r,o){var u=n.pendingLanes;if(u===0)return 0;var f=0,m=n.suspendedLanes,E=n.pingedLanes;n=n.warmLanes;var S=u&134217727;return S!==0?(u=S&~m,u!==0?f=ti(u):(E&=S,E!==0?f=ti(E):o||(o=S&~n,o!==0&&(f=ti(o))))):(S=u&~m,S!==0?f=ti(S):E!==0?f=ti(E):o||(o=u&~n,o!==0&&(f=ti(o)))),f===0?0:r!==0&&r!==f&&(r&m)===0&&(m=f&-f,o=r&-r,m>=o||m===32&&(o&4194048)!==0)?r:f}function Ur(n,r){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&r)===0}function hl(n,r){switch(n){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fl(){var n=Vr;return Vr<<=1,(Vr&4194048)===0&&(Vr=256),n}function dl(){var n=Lr;return Lr<<=1,(Lr&62914560)===0&&(Lr=4194304),n}function qi(n){for(var r=[],o=0;31>o;o++)r.push(n);return r}function Hi(n,r){n.pendingLanes|=r,r!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function ml(n,r,o,u,f,m){var E=n.pendingLanes;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=o,n.entangledLanes&=o,n.errorRecoveryDisabledLanes&=o,n.shellSuspendCounter=0;var S=n.entanglements,I=n.expirationTimes,j=n.hiddenUpdates;for(o=E&~o;0<o;){var K=31-sn(o),Z=1<<K;S[K]=0,I[K]=-1;var F=j[K];if(F!==null)for(j[K]=null,K=0;K<F.length;K++){var q=F[K];q!==null&&(q.lane&=-536870913)}o&=~Z}u!==0&&mi(n,u,0),m!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=m&~(E&~r))}function mi(n,r,o){n.pendingLanes|=r,n.suspendedLanes&=~r;var u=31-sn(r);n.entangledLanes|=r,n.entanglements[u]=n.entanglements[u]|1073741824|o&4194090}function pl(n,r){var o=n.entangledLanes|=r;for(n=n.entanglements;o;){var u=31-sn(o),f=1<<u;f&r|n[u]&r&&(n[u]|=r),o&=~f}}function Ds(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Ua(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Os(){var n=Y.p;return n!==0?n:(n=window.event,n===void 0?32:sE(n.type))}function Ec(n,r){var o=Y.p;try{return Y.p=n,r()}finally{Y.p=o}}var dt=Math.random().toString(36).slice(2),Mt="__reactFiber$"+dt,Rt="__reactProps$"+dt,Un="__reactContainer$"+dt,gl="__reactEvents$"+dt,Rd="__reactListeners$"+dt,xs="__reactHandles$"+dt,Tc="__reactResources$"+dt,zr="__reactMarker$"+dt;function Ms(n){delete n[Mt],delete n[Rt],delete n[gl],delete n[Rd],delete n[xs]}function Gi(n){var r=n[Mt];if(r)return r;for(var o=n.parentNode;o;){if(r=o[Un]||o[Mt]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(n=q0(n);n!==null;){if(o=n[Mt])return o;n=q0(n)}return r}n=o,o=n.parentNode}return null}function pi(n){if(n=n[Mt]||n[Un]){var r=n.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return n}return null}function gi(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n.stateNode;throw Error(s(33))}function mn(n){var r=n[Tc];return r||(r=n[Tc]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function St(n){n[zr]=!0}var _l=new Set,za={};function ni(n,r){Ki(n,r),Ki(n+"Capture",r)}function Ki(n,r){for(za[n]=r,n=0;n<r.length;n++)_l.add(r[n])}var Sc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ac={},jr={};function wc(n){return Or.call(jr,n)?!0:Or.call(Ac,n)?!1:Sc.test(n)?jr[n]=!0:(Ac[n]=!0,!1)}function ks(n,r,o){if(wc(r))if(o===null)n.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":n.removeAttribute(r);return;case"boolean":var u=r.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){n.removeAttribute(r);return}}n.setAttribute(r,""+o)}}function _i(n,r,o){if(o===null)n.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttribute(r,""+o)}}function Qt(n,r,o,u){if(u===null)n.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(o);return}n.setAttributeNS(r,o,""+u)}}var Br,bc;function Yi(n){if(Br===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);Br=r&&r[1]||"",bc=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Br+n+bc}var ja=!1;function Ba(n,r){if(!n||ja)return"";ja=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(r){var Z=function(){throw Error()};if(Object.defineProperty(Z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Z,[])}catch(q){var F=q}Reflect.construct(n,[],Z)}else{try{Z.call()}catch(q){F=q}n.call(Z.prototype)}}else{try{throw Error()}catch(q){F=q}(Z=n())&&typeof Z.catch=="function"&&Z.catch(function(){})}}catch(q){if(q&&F&&typeof q.stack=="string")return[q.stack,F.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),E=m[0],S=m[1];if(E&&S){var I=E.split(`
`),j=S.split(`
`);for(f=u=0;u<I.length&&!I[u].includes("DetermineComponentFrameRoot");)u++;for(;f<j.length&&!j[f].includes("DetermineComponentFrameRoot");)f++;if(u===I.length||f===j.length)for(u=I.length-1,f=j.length-1;1<=u&&0<=f&&I[u]!==j[f];)f--;for(;1<=u&&0<=f;u--,f--)if(I[u]!==j[f]){if(u!==1||f!==1)do if(u--,f--,0>f||I[u]!==j[f]){var K=`
`+I[u].replace(" at new "," at ");return n.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",n.displayName)),K}while(1<=u&&0<=f);break}}}finally{ja=!1,Error.prepareStackTrace=o}return(o=n?n.displayName||n.name:"")?Yi(o):""}function yl(n){switch(n.tag){case 26:case 27:case 5:return Yi(n.type);case 16:return Yi("Lazy");case 13:return Yi("Suspense");case 19:return Yi("SuspenseList");case 0:case 15:return Ba(n.type,!1);case 11:return Ba(n.type.render,!1);case 1:return Ba(n.type,!0);case 31:return Yi("Activity");default:return""}}function Fa(n){try{var r="";do r+=yl(n),n=n.return;while(n);return r}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function pn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function vl(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Id(n){var r=vl(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return f.call(this)},set:function(E){u=""+E,m.call(this,E)}}),Object.defineProperty(n,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function qa(n){n._valueTracker||(n._valueTracker=Id(n))}function El(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return n&&(u=vl(n)?n.checked?"true":"false":n.value),n=u,n!==o?(r.setValue(n),!0):!1}function Fr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Cd=/[\n"\\]/g;function It(n){return n.replace(Cd,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Rn(n,r,o,u,f,m,E,S){n.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?n.type=E:n.removeAttribute("type"),r!=null?E==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+pn(r)):n.value!==""+pn(r)&&(n.value=""+pn(r)):E!=="submit"&&E!=="reset"||n.removeAttribute("value"),r!=null?Ps(n,E,pn(r)):o!=null?Ps(n,E,pn(o)):u!=null&&n.removeAttribute("value"),f==null&&m!=null&&(n.defaultChecked=!!m),f!=null&&(n.checked=f&&typeof f!="function"&&typeof f!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?n.name=""+pn(S):n.removeAttribute("name")}function qr(n,r,o,u,f,m,E,S){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(n.type=m),r!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||r!=null))return;o=o!=null?""+pn(o):"",r=r!=null?""+pn(r):o,S||r===n.value||(n.value=r),n.defaultValue=r}u=u??f,u=typeof u!="function"&&typeof u!="symbol"&&!!u,n.checked=S?n.checked:!!u,n.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(n.name=E)}function Ps(n,r,o){r==="number"&&Fr(n.ownerDocument)===n||n.defaultValue===""+o||(n.defaultValue=""+o)}function Qi(n,r,o,u){if(n=n.options,r){r={};for(var f=0;f<o.length;f++)r["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=r.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&u&&(n[o].defaultSelected=!0)}else{for(o=""+pn(o),r=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,u&&(n[f].defaultSelected=!0);return}r!==null||n[f].disabled||(r=n[f])}r!==null&&(r.selected=!0)}}function et(n,r,o){if(r!=null&&(r=""+pn(r),r!==n.value&&(n.value=r),o==null)){n.defaultValue!==r&&(n.defaultValue=r);return}n.defaultValue=o!=null?""+pn(o):""}function Hr(n,r,o,u){if(r==null){if(u!=null){if(o!=null)throw Error(s(92));if(ae(u)){if(1<u.length)throw Error(s(93));u=u[0]}o=u}o==null&&(o=""),r=o}o=pn(r),n.defaultValue=o,u=n.textContent,u===o&&u!==""&&u!==null&&(n.value=u)}function zn(n,r){if(r){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=r;return}}n.textContent=r}var Gr=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rc(n,r,o){var u=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="":u?n.setProperty(r,o):typeof o!="number"||o===0||Gr.has(r)?r==="float"?n.cssFloat=o:n[r]=(""+o).trim():n[r]=o+"px"}function Tl(n,r,o){if(r!=null&&typeof r!="object")throw Error(s(62));if(n=n.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||r!=null&&r.hasOwnProperty(u)||(u.indexOf("--")===0?n.setProperty(u,""):u==="float"?n.cssFloat="":n[u]="");for(var f in r)u=r[f],r.hasOwnProperty(f)&&o[f]!==u&&Rc(n,f,u)}else for(var m in r)r.hasOwnProperty(m)&&Rc(n,m,r[m])}function Sl(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Dd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ha(n){return Dd.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}var Wi=null;function jn(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Xi=null,$i=null;function Al(n){var r=pi(n);if(r&&(n=r.stateNode)){var o=n[Rt]||null;e:switch(n=r.stateNode,r.type){case"input":if(Rn(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+It(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==n&&u.form===n.form){var f=u[Rt]||null;if(!f)throw Error(s(90));Rn(u,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(r=0;r<o.length;r++)u=o[r],u.form===n.form&&El(u)}break e;case"textarea":et(n,o.value,o.defaultValue);break e;case"select":r=o.value,r!=null&&Qi(n,!!o.multiple,r,!1)}}}var yi=!1;function Ic(n,r,o){if(yi)return n(r,o);yi=!0;try{var u=n(r);return u}finally{if(yi=!1,(Xi!==null||$i!==null)&&(Eh(),Xi&&(r=Xi,n=$i,$i=Xi=null,Al(r),n)))for(r=0;r<n.length;r++)Al(n[r])}}function Kr(n,r){var o=n.stateNode;if(o===null)return null;var u=o[Rt]||null;if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(s(231,r,typeof o));return o}var ii=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bn=!1;if(ii)try{var Yr={};Object.defineProperty(Yr,"passive",{get:function(){Bn=!0}}),window.addEventListener("test",Yr,Yr),window.removeEventListener("test",Yr,Yr)}catch{Bn=!1}var vi=null,Vs=null,Zi=null;function wl(){if(Zi)return Zi;var n,r=Vs,o=r.length,u,f="value"in vi?vi.value:vi.textContent,m=f.length;for(n=0;n<o&&r[n]===f[n];n++);var E=o-n;for(u=1;u<=E&&r[o-u]===f[m-u];u++);return Zi=f.slice(n,1<u?1-u:void 0)}function Ei(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Ti(){return!0}function bl(){return!1}function jt(n){function r(o,u,f,m,E){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var S in n)n.hasOwnProperty(S)&&(o=n[S],this[S]=o?o(m):m[S]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Ti:bl,this.isPropagationStopped=bl,this}return y(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ti)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ti)},persist:function(){},isPersistent:Ti}),r}var Qe={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ga=jt(Qe),Qr=y({},Qe,{view:0,detail:0}),Cc=jt(Qr),Ka,Ya,Si,Wr=y({},Qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zr,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Si&&(Si&&n.type==="mousemove"?(Ka=n.screenX-Si.screenX,Ya=n.screenY-Si.screenY):Ya=Ka=0,Si=n),Ka)},movementY:function(n){return"movementY"in n?n.movementY:Ya}}),Fn=jt(Wr),Nc=y({},Wr,{dataTransfer:0}),Od=jt(Nc),Xr=y({},Qr,{relatedTarget:0}),Qa=jt(Xr),Rl=y({},Qe,{animationName:0,elapsedTime:0,pseudoElement:0}),Wa=jt(Rl),Dc=y({},Qe,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Xa=jt(Dc),xd=y({},Qe,{data:0}),Il=jt(xd),$r={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Oc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cl(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=xc[n])?!!r[n]:!1}function Zr(){return Cl}var Mc=y({},Qr,{key:function(n){if(n.key){var r=$r[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Ei(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Oc[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zr,charCode:function(n){return n.type==="keypress"?Ei(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ei(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),$a=jt(Mc),kc=y({},Wr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nl=jt(kc),Ji=y({},Qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zr}),Pc=jt(Ji),Vc=y({},Qe,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lc=jt(Vc),Uc=y({},Wr,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Za=jt(Uc),gn=y({},Qe,{newState:0,oldState:0}),zc=jt(gn),jc=[9,13,27,32],Ai=ii&&"CompositionEvent"in window,h=null;ii&&"documentMode"in document&&(h=document.documentMode);var _=ii&&"TextEvent"in window&&!h,v=ii&&(!Ai||h&&8<h&&11>=h),A=" ",U=!1;function H(n,r){switch(n){case"keyup":return jc.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function se(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ze=!1;function kt(n,r){switch(n){case"compositionend":return se(r);case"keypress":return r.which!==32?null:(U=!0,A);case"textInput":return n=r.data,n===A&&U?null:n;default:return null}}function je(n,r){if(ze)return n==="compositionend"||!Ai&&H(n,r)?(n=wl(),Zi=Vs=vi=null,ze=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return v&&r.locale!=="ko"?null:r.data;default:return null}}var Bt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pt(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Bt[n.type]:r==="textarea"}function es(n,r,o,u){Xi?$i?$i.push(u):$i=[u]:Xi=u,r=Rh(r,"onChange"),0<r.length&&(o=new Ga("onChange","change",null,o,u),n.push({event:o,listeners:r}))}var Wt=null,wi=null;function Dl(n){M0(n,0)}function Bc(n){var r=gi(n);if(El(r))return n}function ey(n,r){if(n==="change")return r}var ty=!1;if(ii){var Md;if(ii){var kd="oninput"in document;if(!kd){var ny=document.createElement("div");ny.setAttribute("oninput","return;"),kd=typeof ny.oninput=="function"}Md=kd}else Md=!1;ty=Md&&(!document.documentMode||9<document.documentMode)}function iy(){Wt&&(Wt.detachEvent("onpropertychange",sy),wi=Wt=null)}function sy(n){if(n.propertyName==="value"&&Bc(wi)){var r=[];es(r,wi,n,jn(n)),Ic(Dl,r)}}function wR(n,r,o){n==="focusin"?(iy(),Wt=r,wi=o,Wt.attachEvent("onpropertychange",sy)):n==="focusout"&&iy()}function bR(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Bc(wi)}function RR(n,r){if(n==="click")return Bc(r)}function IR(n,r){if(n==="input"||n==="change")return Bc(r)}function CR(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var In=typeof Object.is=="function"?Object.is:CR;function Ol(n,r){if(In(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var o=Object.keys(n),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!Or.call(r,f)||!In(n[f],r[f]))return!1}return!0}function ry(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ay(n,r){var o=ry(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=r&&u>=r)return{node:o,offset:r-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=ry(o)}}function oy(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?oy(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function ly(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var r=Fr(n.document);r instanceof n.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)n=r.contentWindow;else break;r=Fr(n.document)}return r}function Pd(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}var NR=ii&&"documentMode"in document&&11>=document.documentMode,Ja=null,Vd=null,xl=null,Ld=!1;function uy(n,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Ld||Ja==null||Ja!==Fr(u)||(u=Ja,"selectionStart"in u&&Pd(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),xl&&Ol(xl,u)||(xl=u,u=Rh(Vd,"onSelect"),0<u.length&&(r=new Ga("onSelect","select",null,r,o),n.push({event:r,listeners:u}),r.target=Ja)))}function Jr(n,r){var o={};return o[n.toLowerCase()]=r.toLowerCase(),o["Webkit"+n]="webkit"+r,o["Moz"+n]="moz"+r,o}var eo={animationend:Jr("Animation","AnimationEnd"),animationiteration:Jr("Animation","AnimationIteration"),animationstart:Jr("Animation","AnimationStart"),transitionrun:Jr("Transition","TransitionRun"),transitionstart:Jr("Transition","TransitionStart"),transitioncancel:Jr("Transition","TransitionCancel"),transitionend:Jr("Transition","TransitionEnd")},Ud={},cy={};ii&&(cy=document.createElement("div").style,"AnimationEvent"in window||(delete eo.animationend.animation,delete eo.animationiteration.animation,delete eo.animationstart.animation),"TransitionEvent"in window||delete eo.transitionend.transition);function ea(n){if(Ud[n])return Ud[n];if(!eo[n])return n;var r=eo[n],o;for(o in r)if(r.hasOwnProperty(o)&&o in cy)return Ud[n]=r[o];return n}var hy=ea("animationend"),fy=ea("animationiteration"),dy=ea("animationstart"),DR=ea("transitionrun"),OR=ea("transitionstart"),xR=ea("transitioncancel"),my=ea("transitionend"),py=new Map,zd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");zd.push("scrollEnd");function si(n,r){py.set(n,r),ni(r,[n])}var gy=new WeakMap;function qn(n,r){if(typeof n=="object"&&n!==null){var o=gy.get(n);return o!==void 0?o:(r={value:n,source:r,stack:Fa(r)},gy.set(n,r),r)}return{value:n,source:r,stack:Fa(r)}}var Hn=[],to=0,jd=0;function Fc(){for(var n=to,r=jd=to=0;r<n;){var o=Hn[r];Hn[r++]=null;var u=Hn[r];Hn[r++]=null;var f=Hn[r];Hn[r++]=null;var m=Hn[r];if(Hn[r++]=null,u!==null&&f!==null){var E=u.pending;E===null?f.next=f:(f.next=E.next,E.next=f),u.pending=f}m!==0&&_y(o,f,m)}}function qc(n,r,o,u){Hn[to++]=n,Hn[to++]=r,Hn[to++]=o,Hn[to++]=u,jd|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function Bd(n,r,o,u){return qc(n,r,o,u),Hc(n)}function no(n,r){return qc(n,null,null,r),Hc(n)}function _y(n,r,o){n.lanes|=o;var u=n.alternate;u!==null&&(u.lanes|=o);for(var f=!1,m=n.return;m!==null;)m.childLanes|=o,u=m.alternate,u!==null&&(u.childLanes|=o),m.tag===22&&(n=m.stateNode,n===null||n._visibility&1||(f=!0)),n=m,m=m.return;return n.tag===3?(m=n.stateNode,f&&r!==null&&(f=31-sn(o),n=m.hiddenUpdates,u=n[f],u===null?n[f]=[r]:u.push(r),r.lane=o|536870912),m):null}function Hc(n){if(50<iu)throw iu=0,Ym=null,Error(s(185));for(var r=n.return;r!==null;)n=r,r=n.return;return n.tag===3?n.stateNode:null}var io={};function MR(n,r,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(n,r,o,u){return new MR(n,r,o,u)}function Fd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ts(n,r){var o=n.alternate;return o===null?(o=Cn(n.tag,r,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=r,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&65011712,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,r=n.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o.refCleanup=n.refCleanup,o}function yy(n,r){n.flags&=65011714;var o=n.alternate;return o===null?(n.childLanes=0,n.lanes=r,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=o.childLanes,n.lanes=o.lanes,n.child=o.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=o.memoizedProps,n.memoizedState=o.memoizedState,n.updateQueue=o.updateQueue,n.type=o.type,r=o.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n}function Gc(n,r,o,u,f,m){var E=0;if(u=n,typeof n=="function")Fd(n)&&(E=1);else if(typeof n=="string")E=P1(n,o,ye.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case C:return n=Cn(31,o,r,f),n.elementType=C,n.lanes=m,n;case B:return ta(o.children,f,m,r);case J:E=8,f|=24;break;case $:return n=Cn(12,o,r,f|2),n.elementType=$,n.lanes=m,n;case me:return n=Cn(13,o,r,f),n.elementType=me,n.lanes=m,n;case Ie:return n=Cn(19,o,r,f),n.elementType=Ie,n.lanes=m,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case _e:case he:E=10;break e;case de:E=9;break e;case Ce:E=11;break e;case M:E=14;break e;case R:E=16,u=null;break e}E=29,o=Error(s(130,n===null?"null":typeof n,"")),u=null}return r=Cn(E,o,r,f),r.elementType=n,r.type=u,r.lanes=m,r}function ta(n,r,o,u){return n=Cn(7,n,u,r),n.lanes=o,n}function qd(n,r,o){return n=Cn(6,n,null,r),n.lanes=o,n}function Hd(n,r,o){return r=Cn(4,n.children!==null?n.children:[],n.key,r),r.lanes=o,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}var so=[],ro=0,Kc=null,Yc=0,Gn=[],Kn=0,na=null,ns=1,is="";function ia(n,r){so[ro++]=Yc,so[ro++]=Kc,Kc=n,Yc=r}function vy(n,r,o){Gn[Kn++]=ns,Gn[Kn++]=is,Gn[Kn++]=na,na=n;var u=ns;n=is;var f=32-sn(u)-1;u&=~(1<<f),o+=1;var m=32-sn(r)+f;if(30<m){var E=f-f%5;m=(u&(1<<E)-1).toString(32),u>>=E,f-=E,ns=1<<32-sn(r)+f|o<<f|u,is=m+n}else ns=1<<m|o<<f|u,is=n}function Gd(n){n.return!==null&&(ia(n,1),vy(n,1,0))}function Kd(n){for(;n===Kc;)Kc=so[--ro],so[ro]=null,Yc=so[--ro],so[ro]=null;for(;n===na;)na=Gn[--Kn],Gn[Kn]=null,is=Gn[--Kn],Gn[Kn]=null,ns=Gn[--Kn],Gn[Kn]=null}var _n=null,vt=null,Ke=!1,sa=null,bi=!1,Yd=Error(s(519));function ra(n){var r=Error(s(418,""));throw Pl(qn(r,n)),Yd}function Ey(n){var r=n.stateNode,o=n.type,u=n.memoizedProps;switch(r[Mt]=n,r[Rt]=u,o){case"dialog":Pe("cancel",r),Pe("close",r);break;case"iframe":case"object":case"embed":Pe("load",r);break;case"video":case"audio":for(o=0;o<ru.length;o++)Pe(ru[o],r);break;case"source":Pe("error",r);break;case"img":case"image":case"link":Pe("error",r),Pe("load",r);break;case"details":Pe("toggle",r);break;case"input":Pe("invalid",r),qr(r,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),qa(r);break;case"select":Pe("invalid",r);break;case"textarea":Pe("invalid",r),Hr(r,u.value,u.defaultValue,u.children),qa(r)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||u.suppressHydrationWarning===!0||L0(r.textContent,o)?(u.popover!=null&&(Pe("beforetoggle",r),Pe("toggle",r)),u.onScroll!=null&&Pe("scroll",r),u.onScrollEnd!=null&&Pe("scrollend",r),u.onClick!=null&&(r.onclick=Ih),r=!0):r=!1,r||ra(n)}function Ty(n){for(_n=n.return;_n;)switch(_n.tag){case 5:case 13:bi=!1;return;case 27:case 3:bi=!0;return;default:_n=_n.return}}function Ml(n){if(n!==_n)return!1;if(!Ke)return Ty(n),Ke=!0,!1;var r=n.tag,o;if((o=r!==3&&r!==27)&&((o=r===5)&&(o=n.type,o=!(o!=="form"&&o!=="button")||up(n.type,n.memoizedProps)),o=!o),o&&vt&&ra(n),Ty(n),r===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8)if(o=n.data,o==="/$"){if(r===0){vt=ai(n.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++;n=n.nextSibling}vt=null}}else r===27?(r=vt,Zs(n.type)?(n=dp,dp=null,vt=n):vt=r):vt=_n?ai(n.stateNode.nextSibling):null;return!0}function kl(){vt=_n=null,Ke=!1}function Sy(){var n=sa;return n!==null&&(En===null?En=n:En.push.apply(En,n),sa=null),n}function Pl(n){sa===null?sa=[n]:sa.push(n)}var Qd=W(null),aa=null,ss=null;function Ls(n,r,o){te(Qd,r._currentValue),r._currentValue=o}function rs(n){n._currentValue=Qd.current,ne(Qd)}function Wd(n,r,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===o)break;n=n.return}}function Xd(n,r,o,u){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var m=f.dependencies;if(m!==null){var E=f.child;m=m.firstContext;e:for(;m!==null;){var S=m;m=f;for(var I=0;I<r.length;I++)if(S.context===r[I]){m.lanes|=o,S=m.alternate,S!==null&&(S.lanes|=o),Wd(m.return,o,n),u||(E=null);break e}m=S.next}}else if(f.tag===18){if(E=f.return,E===null)throw Error(s(341));E.lanes|=o,m=E.alternate,m!==null&&(m.lanes|=o),Wd(E,o,n),E=null}else E=f.child;if(E!==null)E.return=f;else for(E=f;E!==null;){if(E===n){E=null;break}if(f=E.sibling,f!==null){f.return=E.return,E=f;break}E=E.return}f=E}}function Vl(n,r,o,u){n=null;for(var f=r,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var E=f.alternate;if(E===null)throw Error(s(387));if(E=E.memoizedProps,E!==null){var S=f.type;In(f.pendingProps.value,E.value)||(n!==null?n.push(S):n=[S])}}else if(f===zt.current){if(E=f.alternate,E===null)throw Error(s(387));E.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(hu):n=[hu])}f=f.return}n!==null&&Xd(r,n,o,u),r.flags|=262144}function Qc(n){for(n=n.firstContext;n!==null;){if(!In(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function oa(n){aa=n,ss=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function rn(n){return Ay(aa,n)}function Wc(n,r){return aa===null&&oa(n),Ay(n,r)}function Ay(n,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},ss===null){if(n===null)throw Error(s(308));ss=r,n.dependencies={lanes:0,firstContext:r},n.flags|=524288}else ss=ss.next=r;return o}var kR=typeof AbortController<"u"?AbortController:function(){var n=[],r=this.signal={aborted:!1,addEventListener:function(o,u){n.push(u)}};this.abort=function(){r.aborted=!0,n.forEach(function(o){return o()})}},PR=i.unstable_scheduleCallback,VR=i.unstable_NormalPriority,Vt={$$typeof:he,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $d(){return{controller:new kR,data:new Map,refCount:0}}function Ll(n){n.refCount--,n.refCount===0&&PR(VR,function(){n.controller.abort()})}var Ul=null,Zd=0,ao=0,oo=null;function LR(n,r){if(Ul===null){var o=Ul=[];Zd=0,ao=ep(),oo={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Zd++,r.then(wy,wy),r}function wy(){if(--Zd===0&&Ul!==null){oo!==null&&(oo.status="fulfilled");var n=Ul;Ul=null,ao=0,oo=null;for(var r=0;r<n.length;r++)(0,n[r])()}}function UR(n,r){var o=[],u={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return n.then(function(){u.status="fulfilled",u.value=r;for(var f=0;f<o.length;f++)(0,o[f])(r)},function(f){for(u.status="rejected",u.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),u}var by=V.S;V.S=function(n,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&LR(n,r),by!==null&&by(n,r)};var la=W(null);function Jd(){var n=la.current;return n!==null?n:ot.pooledCache}function Xc(n,r){r===null?te(la,la.current):te(la,r.pool)}function Ry(){var n=Jd();return n===null?null:{parent:Vt._currentValue,pool:n}}var zl=Error(s(460)),Iy=Error(s(474)),$c=Error(s(542)),em={then:function(){}};function Cy(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Zc(){}function Ny(n,r,o){switch(o=n[o],o===void 0?n.push(r):o!==r&&(r.then(Zc,Zc),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,Oy(n),n;default:if(typeof r.status=="string")r.then(Zc,Zc);else{if(n=ot,n!==null&&100<n.shellSuspendCounter)throw Error(s(482));n=r,n.status="pending",n.then(function(u){if(r.status==="pending"){var f=r;f.status="fulfilled",f.value=u}},function(u){if(r.status==="pending"){var f=r;f.status="rejected",f.reason=u}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,Oy(n),n}throw jl=r,zl}}var jl=null;function Dy(){if(jl===null)throw Error(s(459));var n=jl;return jl=null,n}function Oy(n){if(n===zl||n===$c)throw Error(s(483))}var Us=!1;function tm(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function nm(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function zs(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function js(n,r,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Ze&2)!==0){var f=u.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),u.pending=r,r=Hc(n),_y(n,null,o),r}return qc(n,u,r,o),Hc(n)}function Bl(n,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194048)!==0)){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,pl(n,o)}}function im(n,r){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var E={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?f=m=E:m=m.next=E,o=o.next}while(o!==null);m===null?f=m=r:m=m.next=r}else f=m=r;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=r:n.next=r,o.lastBaseUpdate=r}var sm=!1;function Fl(){if(sm){var n=oo;if(n!==null)throw n}}function ql(n,r,o,u){sm=!1;var f=n.updateQueue;Us=!1;var m=f.firstBaseUpdate,E=f.lastBaseUpdate,S=f.shared.pending;if(S!==null){f.shared.pending=null;var I=S,j=I.next;I.next=null,E===null?m=j:E.next=j,E=I;var K=n.alternate;K!==null&&(K=K.updateQueue,S=K.lastBaseUpdate,S!==E&&(S===null?K.firstBaseUpdate=j:S.next=j,K.lastBaseUpdate=I))}if(m!==null){var Z=f.baseState;E=0,K=j=I=null,S=m;do{var F=S.lane&-536870913,q=F!==S.lane;if(q?(Be&F)===F:(u&F)===F){F!==0&&F===ao&&(sm=!0),K!==null&&(K=K.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var Ae=n,ve=S;F=r;var it=o;switch(ve.tag){case 1:if(Ae=ve.payload,typeof Ae=="function"){Z=Ae.call(it,Z,F);break e}Z=Ae;break e;case 3:Ae.flags=Ae.flags&-65537|128;case 0:if(Ae=ve.payload,F=typeof Ae=="function"?Ae.call(it,Z,F):Ae,F==null)break e;Z=y({},Z,F);break e;case 2:Us=!0}}F=S.callback,F!==null&&(n.flags|=64,q&&(n.flags|=8192),q=f.callbacks,q===null?f.callbacks=[F]:q.push(F))}else q={lane:F,tag:S.tag,payload:S.payload,callback:S.callback,next:null},K===null?(j=K=q,I=Z):K=K.next=q,E|=F;if(S=S.next,S===null){if(S=f.shared.pending,S===null)break;q=S,S=q.next,q.next=null,f.lastBaseUpdate=q,f.shared.pending=null}}while(!0);K===null&&(I=Z),f.baseState=I,f.firstBaseUpdate=j,f.lastBaseUpdate=K,m===null&&(f.shared.lanes=0),Qs|=E,n.lanes=E,n.memoizedState=Z}}function xy(n,r){if(typeof n!="function")throw Error(s(191,n));n.call(r)}function My(n,r){var o=n.callbacks;if(o!==null)for(n.callbacks=null,n=0;n<o.length;n++)xy(o[n],r)}var lo=W(null),Jc=W(0);function ky(n,r){n=fs,te(Jc,n),te(lo,r),fs=n|r.baseLanes}function rm(){te(Jc,fs),te(lo,lo.current)}function am(){fs=Jc.current,ne(lo),ne(Jc)}var Bs=0,De=null,tt=null,Ct=null,eh=!1,uo=!1,ua=!1,th=0,Hl=0,co=null,zR=0;function At(){throw Error(s(321))}function om(n,r){if(r===null)return!1;for(var o=0;o<r.length&&o<n.length;o++)if(!In(n[o],r[o]))return!1;return!0}function lm(n,r,o,u,f,m){return Bs=m,De=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,V.H=n===null||n.memoizedState===null?_v:yv,ua=!1,m=o(u,f),ua=!1,uo&&(m=Vy(r,o,u,f)),Py(n),m}function Py(n){V.H=oh;var r=tt!==null&&tt.next!==null;if(Bs=0,Ct=tt=De=null,eh=!1,Hl=0,co=null,r)throw Error(s(300));n===null||Ft||(n=n.dependencies,n!==null&&Qc(n)&&(Ft=!0))}function Vy(n,r,o,u){De=n;var f=0;do{if(uo&&(co=null),Hl=0,uo=!1,25<=f)throw Error(s(301));if(f+=1,Ct=tt=null,n.updateQueue!=null){var m=n.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}V.H=KR,m=r(o,u)}while(uo);return m}function jR(){var n=V.H,r=n.useState()[0];return r=typeof r.then=="function"?Gl(r):r,n=n.useState()[0],(tt!==null?tt.memoizedState:null)!==n&&(De.flags|=1024),r}function um(){var n=th!==0;return th=0,n}function cm(n,r,o){r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~o}function hm(n){if(eh){for(n=n.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}eh=!1}Bs=0,Ct=tt=De=null,uo=!1,Hl=th=0,co=null}function yn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?De.memoizedState=Ct=n:Ct=Ct.next=n,Ct}function Nt(){if(tt===null){var n=De.alternate;n=n!==null?n.memoizedState:null}else n=tt.next;var r=Ct===null?De.memoizedState:Ct.next;if(r!==null)Ct=r,tt=n;else{if(n===null)throw De.alternate===null?Error(s(467)):Error(s(310));tt=n,n={memoizedState:tt.memoizedState,baseState:tt.baseState,baseQueue:tt.baseQueue,queue:tt.queue,next:null},Ct===null?De.memoizedState=Ct=n:Ct=Ct.next=n}return Ct}function fm(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Gl(n){var r=Hl;return Hl+=1,co===null&&(co=[]),n=Ny(co,n,r),r=De,(Ct===null?r.memoizedState:Ct.next)===null&&(r=r.alternate,V.H=r===null||r.memoizedState===null?_v:yv),n}function nh(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Gl(n);if(n.$$typeof===he)return rn(n)}throw Error(s(438,String(n)))}function dm(n){var r=null,o=De.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var u=De.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(r={data:u.data.map(function(f){return f.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=fm(),De.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(n),u=0;u<n;u++)o[u]=x;return r.index++,o}function as(n,r){return typeof r=="function"?r(n):r}function ih(n){var r=Nt();return mm(r,tt,n)}function mm(n,r,o){var u=n.queue;if(u===null)throw Error(s(311));u.lastRenderedReducer=o;var f=n.baseQueue,m=u.pending;if(m!==null){if(f!==null){var E=f.next;f.next=m.next,m.next=E}r.baseQueue=f=m,u.pending=null}if(m=n.baseState,f===null)n.memoizedState=m;else{r=f.next;var S=E=null,I=null,j=r,K=!1;do{var Z=j.lane&-536870913;if(Z!==j.lane?(Be&Z)===Z:(Bs&Z)===Z){var F=j.revertLane;if(F===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),Z===ao&&(K=!0);else if((Bs&F)===F){j=j.next,F===ao&&(K=!0);continue}else Z={lane:0,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},I===null?(S=I=Z,E=m):I=I.next=Z,De.lanes|=F,Qs|=F;Z=j.action,ua&&o(m,Z),m=j.hasEagerState?j.eagerState:o(m,Z)}else F={lane:Z,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},I===null?(S=I=F,E=m):I=I.next=F,De.lanes|=Z,Qs|=Z;j=j.next}while(j!==null&&j!==r);if(I===null?E=m:I.next=S,!In(m,n.memoizedState)&&(Ft=!0,K&&(o=oo,o!==null)))throw o;n.memoizedState=m,n.baseState=E,n.baseQueue=I,u.lastRenderedState=m}return f===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function pm(n){var r=Nt(),o=r.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=n;var u=o.dispatch,f=o.pending,m=r.memoizedState;if(f!==null){o.pending=null;var E=f=f.next;do m=n(m,E.action),E=E.next;while(E!==f);In(m,r.memoizedState)||(Ft=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),o.lastRenderedState=m}return[m,u]}function Ly(n,r,o){var u=De,f=Nt(),m=Ke;if(m){if(o===void 0)throw Error(s(407));o=o()}else o=r();var E=!In((tt||f).memoizedState,o);E&&(f.memoizedState=o,Ft=!0),f=f.queue;var S=jy.bind(null,u,f,n);if(Kl(2048,8,S,[n]),f.getSnapshot!==r||E||Ct!==null&&Ct.memoizedState.tag&1){if(u.flags|=2048,ho(9,sh(),zy.bind(null,u,f,o,r),null),ot===null)throw Error(s(349));m||(Bs&124)!==0||Uy(u,r,o)}return o}function Uy(n,r,o){n.flags|=16384,n={getSnapshot:r,value:o},r=De.updateQueue,r===null?(r=fm(),De.updateQueue=r,r.stores=[n]):(o=r.stores,o===null?r.stores=[n]:o.push(n))}function zy(n,r,o,u){r.value=o,r.getSnapshot=u,By(r)&&Fy(n)}function jy(n,r,o){return o(function(){By(r)&&Fy(n)})}function By(n){var r=n.getSnapshot;n=n.value;try{var o=r();return!In(n,o)}catch{return!0}}function Fy(n){var r=no(n,2);r!==null&&Mn(r,n,2)}function gm(n){var r=yn();if(typeof n=="function"){var o=n;if(n=o(),ua){bn(!0);try{o()}finally{bn(!1)}}}return r.memoizedState=r.baseState=n,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:as,lastRenderedState:n},r}function qy(n,r,o,u){return n.baseState=o,mm(n,tt,typeof u=="function"?u:as)}function BR(n,r,o,u,f){if(ah(n))throw Error(s(485));if(n=r.action,n!==null){var m={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};V.T!==null?o(!0):m.isTransition=!1,u(m),o=r.pending,o===null?(m.next=r.pending=m,Hy(r,m)):(m.next=o.next,r.pending=o.next=m)}}function Hy(n,r){var o=r.action,u=r.payload,f=n.state;if(r.isTransition){var m=V.T,E={};V.T=E;try{var S=o(f,u),I=V.S;I!==null&&I(E,S),Gy(n,r,S)}catch(j){_m(n,r,j)}finally{V.T=m}}else try{m=o(f,u),Gy(n,r,m)}catch(j){_m(n,r,j)}}function Gy(n,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){Ky(n,r,u)},function(u){return _m(n,r,u)}):Ky(n,r,o)}function Ky(n,r,o){r.status="fulfilled",r.value=o,Yy(r),n.state=o,r=n.pending,r!==null&&(o=r.next,o===r?n.pending=null:(o=o.next,r.next=o,Hy(n,o)))}function _m(n,r,o){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do r.status="rejected",r.reason=o,Yy(r),r=r.next;while(r!==u)}n.action=null}function Yy(n){n=n.listeners;for(var r=0;r<n.length;r++)(0,n[r])()}function Qy(n,r){return r}function Wy(n,r){if(Ke){var o=ot.formState;if(o!==null){e:{var u=De;if(Ke){if(vt){t:{for(var f=vt,m=bi;f.nodeType!==8;){if(!m){f=null;break t}if(f=ai(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){vt=ai(f.nextSibling),u=f.data==="F!";break e}}ra(u)}u=!1}u&&(r=o[0])}}return o=yn(),o.memoizedState=o.baseState=r,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qy,lastRenderedState:r},o.queue=u,o=mv.bind(null,De,u),u.dispatch=o,u=gm(!1),m=Sm.bind(null,De,!1,u.queue),u=yn(),f={state:r,dispatch:null,action:n,pending:null},u.queue=f,o=BR.bind(null,De,f,m,o),f.dispatch=o,u.memoizedState=n,[r,o,!1]}function Xy(n){var r=Nt();return $y(r,tt,n)}function $y(n,r,o){if(r=mm(n,r,Qy)[0],n=ih(as)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var u=Gl(r)}catch(E){throw E===zl?$c:E}else u=r;r=Nt();var f=r.queue,m=f.dispatch;return o!==r.memoizedState&&(De.flags|=2048,ho(9,sh(),FR.bind(null,f,o),null)),[u,m,n]}function FR(n,r){n.action=r}function Zy(n){var r=Nt(),o=tt;if(o!==null)return $y(r,o,n);Nt(),r=r.memoizedState,o=Nt();var u=o.queue.dispatch;return o.memoizedState=n,[r,u,!1]}function ho(n,r,o,u){return n={tag:n,create:o,deps:u,inst:r,next:null},r=De.updateQueue,r===null&&(r=fm(),De.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,r.lastEffect=n),n}function sh(){return{destroy:void 0,resource:void 0}}function Jy(){return Nt().memoizedState}function rh(n,r,o,u){var f=yn();u=u===void 0?null:u,De.flags|=n,f.memoizedState=ho(1|r,sh(),o,u)}function Kl(n,r,o,u){var f=Nt();u=u===void 0?null:u;var m=f.memoizedState.inst;tt!==null&&u!==null&&om(u,tt.memoizedState.deps)?f.memoizedState=ho(r,m,o,u):(De.flags|=n,f.memoizedState=ho(1|r,m,o,u))}function ev(n,r){rh(8390656,8,n,r)}function tv(n,r){Kl(2048,8,n,r)}function nv(n,r){return Kl(4,2,n,r)}function iv(n,r){return Kl(4,4,n,r)}function sv(n,r){if(typeof r=="function"){n=n();var o=r(n);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function rv(n,r,o){o=o!=null?o.concat([n]):null,Kl(4,4,sv.bind(null,r,n),o)}function ym(){}function av(n,r){var o=Nt();r=r===void 0?null:r;var u=o.memoizedState;return r!==null&&om(r,u[1])?u[0]:(o.memoizedState=[n,r],n)}function ov(n,r){var o=Nt();r=r===void 0?null:r;var u=o.memoizedState;if(r!==null&&om(r,u[1]))return u[0];if(u=n(),ua){bn(!0);try{n()}finally{bn(!1)}}return o.memoizedState=[u,r],u}function vm(n,r,o){return o===void 0||(Bs&1073741824)!==0?n.memoizedState=r:(n.memoizedState=o,n=c0(),De.lanes|=n,Qs|=n,o)}function lv(n,r,o,u){return In(o,r)?o:lo.current!==null?(n=vm(n,o,u),In(n,r)||(Ft=!0),n):(Bs&42)===0?(Ft=!0,n.memoizedState=o):(n=c0(),De.lanes|=n,Qs|=n,r)}function uv(n,r,o,u,f){var m=Y.p;Y.p=m!==0&&8>m?m:8;var E=V.T,S={};V.T=S,Sm(n,!1,r,o);try{var I=f(),j=V.S;if(j!==null&&j(S,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var K=UR(I,u);Yl(n,r,K,xn(n))}else Yl(n,r,u,xn(n))}catch(Z){Yl(n,r,{then:function(){},status:"rejected",reason:Z},xn())}finally{Y.p=m,V.T=E}}function qR(){}function Em(n,r,o,u){if(n.tag!==5)throw Error(s(476));var f=cv(n).queue;uv(n,f,r,ie,o===null?qR:function(){return hv(n),o(u)})}function cv(n){var r=n.memoizedState;if(r!==null)return r;r={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:as,lastRenderedState:ie},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:as,lastRenderedState:o},next:null},n.memoizedState=r,n=n.alternate,n!==null&&(n.memoizedState=r),r}function hv(n){var r=cv(n).next.queue;Yl(n,r,{},xn())}function Tm(){return rn(hu)}function fv(){return Nt().memoizedState}function dv(){return Nt().memoizedState}function HR(n){for(var r=n.return;r!==null;){switch(r.tag){case 24:case 3:var o=xn();n=zs(o);var u=js(r,n,o);u!==null&&(Mn(u,r,o),Bl(u,r,o)),r={cache:$d()},n.payload=r;return}r=r.return}}function GR(n,r,o){var u=xn();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},ah(n)?pv(r,o):(o=Bd(n,r,o,u),o!==null&&(Mn(o,n,u),gv(o,r,u)))}function mv(n,r,o){var u=xn();Yl(n,r,o,u)}function Yl(n,r,o,u){var f={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(ah(n))pv(r,f);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var E=r.lastRenderedState,S=m(E,o);if(f.hasEagerState=!0,f.eagerState=S,In(S,E))return qc(n,r,f,0),ot===null&&Fc(),!1}catch{}finally{}if(o=Bd(n,r,f,u),o!==null)return Mn(o,n,u),gv(o,r,u),!0}return!1}function Sm(n,r,o,u){if(u={lane:2,revertLane:ep(),action:u,hasEagerState:!1,eagerState:null,next:null},ah(n)){if(r)throw Error(s(479))}else r=Bd(n,o,u,2),r!==null&&Mn(r,n,2)}function ah(n){var r=n.alternate;return n===De||r!==null&&r===De}function pv(n,r){uo=eh=!0;var o=n.pending;o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r}function gv(n,r,o){if((o&4194048)!==0){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,pl(n,o)}}var oh={readContext:rn,use:nh,useCallback:At,useContext:At,useEffect:At,useImperativeHandle:At,useLayoutEffect:At,useInsertionEffect:At,useMemo:At,useReducer:At,useRef:At,useState:At,useDebugValue:At,useDeferredValue:At,useTransition:At,useSyncExternalStore:At,useId:At,useHostTransitionStatus:At,useFormState:At,useActionState:At,useOptimistic:At,useMemoCache:At,useCacheRefresh:At},_v={readContext:rn,use:nh,useCallback:function(n,r){return yn().memoizedState=[n,r===void 0?null:r],n},useContext:rn,useEffect:ev,useImperativeHandle:function(n,r,o){o=o!=null?o.concat([n]):null,rh(4194308,4,sv.bind(null,r,n),o)},useLayoutEffect:function(n,r){return rh(4194308,4,n,r)},useInsertionEffect:function(n,r){rh(4,2,n,r)},useMemo:function(n,r){var o=yn();r=r===void 0?null:r;var u=n();if(ua){bn(!0);try{n()}finally{bn(!1)}}return o.memoizedState=[u,r],u},useReducer:function(n,r,o){var u=yn();if(o!==void 0){var f=o(r);if(ua){bn(!0);try{o(r)}finally{bn(!1)}}}else f=r;return u.memoizedState=u.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},u.queue=n,n=n.dispatch=GR.bind(null,De,n),[u.memoizedState,n]},useRef:function(n){var r=yn();return n={current:n},r.memoizedState=n},useState:function(n){n=gm(n);var r=n.queue,o=mv.bind(null,De,r);return r.dispatch=o,[n.memoizedState,o]},useDebugValue:ym,useDeferredValue:function(n,r){var o=yn();return vm(o,n,r)},useTransition:function(){var n=gm(!1);return n=uv.bind(null,De,n.queue,!0,!1),yn().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,r,o){var u=De,f=yn();if(Ke){if(o===void 0)throw Error(s(407));o=o()}else{if(o=r(),ot===null)throw Error(s(349));(Be&124)!==0||Uy(u,r,o)}f.memoizedState=o;var m={value:o,getSnapshot:r};return f.queue=m,ev(jy.bind(null,u,m,n),[n]),u.flags|=2048,ho(9,sh(),zy.bind(null,u,m,o,r),null),o},useId:function(){var n=yn(),r=ot.identifierPrefix;if(Ke){var o=is,u=ns;o=(u&~(1<<32-sn(u)-1)).toString(32)+o,r="«"+r+"R"+o,o=th++,0<o&&(r+="H"+o.toString(32)),r+="»"}else o=zR++,r="«"+r+"r"+o.toString(32)+"»";return n.memoizedState=r},useHostTransitionStatus:Tm,useFormState:Wy,useActionState:Wy,useOptimistic:function(n){var r=yn();r.memoizedState=r.baseState=n;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=Sm.bind(null,De,!0,o),o.dispatch=r,[n,r]},useMemoCache:dm,useCacheRefresh:function(){return yn().memoizedState=HR.bind(null,De)}},yv={readContext:rn,use:nh,useCallback:av,useContext:rn,useEffect:tv,useImperativeHandle:rv,useInsertionEffect:nv,useLayoutEffect:iv,useMemo:ov,useReducer:ih,useRef:Jy,useState:function(){return ih(as)},useDebugValue:ym,useDeferredValue:function(n,r){var o=Nt();return lv(o,tt.memoizedState,n,r)},useTransition:function(){var n=ih(as)[0],r=Nt().memoizedState;return[typeof n=="boolean"?n:Gl(n),r]},useSyncExternalStore:Ly,useId:fv,useHostTransitionStatus:Tm,useFormState:Xy,useActionState:Xy,useOptimistic:function(n,r){var o=Nt();return qy(o,tt,n,r)},useMemoCache:dm,useCacheRefresh:dv},KR={readContext:rn,use:nh,useCallback:av,useContext:rn,useEffect:tv,useImperativeHandle:rv,useInsertionEffect:nv,useLayoutEffect:iv,useMemo:ov,useReducer:pm,useRef:Jy,useState:function(){return pm(as)},useDebugValue:ym,useDeferredValue:function(n,r){var o=Nt();return tt===null?vm(o,n,r):lv(o,tt.memoizedState,n,r)},useTransition:function(){var n=pm(as)[0],r=Nt().memoizedState;return[typeof n=="boolean"?n:Gl(n),r]},useSyncExternalStore:Ly,useId:fv,useHostTransitionStatus:Tm,useFormState:Zy,useActionState:Zy,useOptimistic:function(n,r){var o=Nt();return tt!==null?qy(o,tt,n,r):(o.baseState=n,[n,o.queue.dispatch])},useMemoCache:dm,useCacheRefresh:dv},fo=null,Ql=0;function lh(n){var r=Ql;return Ql+=1,fo===null&&(fo=[]),Ny(fo,n,r)}function Wl(n,r){r=r.props.ref,n.ref=r!==void 0?r:null}function uh(n,r){throw r.$$typeof===T?Error(s(525)):(n=Object.prototype.toString.call(r),Error(s(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)))}function vv(n){var r=n._init;return r(n._payload)}function Ev(n){function r(L,O){if(n){var z=L.deletions;z===null?(L.deletions=[O],L.flags|=16):z.push(O)}}function o(L,O){if(!n)return null;for(;O!==null;)r(L,O),O=O.sibling;return null}function u(L){for(var O=new Map;L!==null;)L.key!==null?O.set(L.key,L):O.set(L.index,L),L=L.sibling;return O}function f(L,O){return L=ts(L,O),L.index=0,L.sibling=null,L}function m(L,O,z){return L.index=z,n?(z=L.alternate,z!==null?(z=z.index,z<O?(L.flags|=67108866,O):z):(L.flags|=67108866,O)):(L.flags|=1048576,O)}function E(L){return n&&L.alternate===null&&(L.flags|=67108866),L}function S(L,O,z,Q){return O===null||O.tag!==6?(O=qd(z,L.mode,Q),O.return=L,O):(O=f(O,z),O.return=L,O)}function I(L,O,z,Q){var ce=z.type;return ce===B?K(L,O,z.props.children,Q,z.key):O!==null&&(O.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===R&&vv(ce)===O.type)?(O=f(O,z.props),Wl(O,z),O.return=L,O):(O=Gc(z.type,z.key,z.props,null,L.mode,Q),Wl(O,z),O.return=L,O)}function j(L,O,z,Q){return O===null||O.tag!==4||O.stateNode.containerInfo!==z.containerInfo||O.stateNode.implementation!==z.implementation?(O=Hd(z,L.mode,Q),O.return=L,O):(O=f(O,z.children||[]),O.return=L,O)}function K(L,O,z,Q,ce){return O===null||O.tag!==7?(O=ta(z,L.mode,Q,ce),O.return=L,O):(O=f(O,z),O.return=L,O)}function Z(L,O,z){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=qd(""+O,L.mode,z),O.return=L,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case w:return z=Gc(O.type,O.key,O.props,null,L.mode,z),Wl(z,O),z.return=L,z;case P:return O=Hd(O,L.mode,z),O.return=L,O;case R:var Q=O._init;return O=Q(O._payload),Z(L,O,z)}if(ae(O)||D(O))return O=ta(O,L.mode,z,null),O.return=L,O;if(typeof O.then=="function")return Z(L,lh(O),z);if(O.$$typeof===he)return Z(L,Wc(L,O),z);uh(L,O)}return null}function F(L,O,z,Q){var ce=O!==null?O.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return ce!==null?null:S(L,O,""+z,Q);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case w:return z.key===ce?I(L,O,z,Q):null;case P:return z.key===ce?j(L,O,z,Q):null;case R:return ce=z._init,z=ce(z._payload),F(L,O,z,Q)}if(ae(z)||D(z))return ce!==null?null:K(L,O,z,Q,null);if(typeof z.then=="function")return F(L,O,lh(z),Q);if(z.$$typeof===he)return F(L,O,Wc(L,z),Q);uh(L,z)}return null}function q(L,O,z,Q,ce){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return L=L.get(z)||null,S(O,L,""+Q,ce);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case w:return L=L.get(Q.key===null?z:Q.key)||null,I(O,L,Q,ce);case P:return L=L.get(Q.key===null?z:Q.key)||null,j(O,L,Q,ce);case R:var Me=Q._init;return Q=Me(Q._payload),q(L,O,z,Q,ce)}if(ae(Q)||D(Q))return L=L.get(z)||null,K(O,L,Q,ce,null);if(typeof Q.then=="function")return q(L,O,z,lh(Q),ce);if(Q.$$typeof===he)return q(L,O,z,Wc(O,Q),ce);uh(O,Q)}return null}function Ae(L,O,z,Q){for(var ce=null,Me=null,pe=O,Ee=O=0,Ht=null;pe!==null&&Ee<z.length;Ee++){pe.index>Ee?(Ht=pe,pe=null):Ht=pe.sibling;var Ge=F(L,pe,z[Ee],Q);if(Ge===null){pe===null&&(pe=Ht);break}n&&pe&&Ge.alternate===null&&r(L,pe),O=m(Ge,O,Ee),Me===null?ce=Ge:Me.sibling=Ge,Me=Ge,pe=Ht}if(Ee===z.length)return o(L,pe),Ke&&ia(L,Ee),ce;if(pe===null){for(;Ee<z.length;Ee++)pe=Z(L,z[Ee],Q),pe!==null&&(O=m(pe,O,Ee),Me===null?ce=pe:Me.sibling=pe,Me=pe);return Ke&&ia(L,Ee),ce}for(pe=u(pe);Ee<z.length;Ee++)Ht=q(pe,L,Ee,z[Ee],Q),Ht!==null&&(n&&Ht.alternate!==null&&pe.delete(Ht.key===null?Ee:Ht.key),O=m(Ht,O,Ee),Me===null?ce=Ht:Me.sibling=Ht,Me=Ht);return n&&pe.forEach(function(ir){return r(L,ir)}),Ke&&ia(L,Ee),ce}function ve(L,O,z,Q){if(z==null)throw Error(s(151));for(var ce=null,Me=null,pe=O,Ee=O=0,Ht=null,Ge=z.next();pe!==null&&!Ge.done;Ee++,Ge=z.next()){pe.index>Ee?(Ht=pe,pe=null):Ht=pe.sibling;var ir=F(L,pe,Ge.value,Q);if(ir===null){pe===null&&(pe=Ht);break}n&&pe&&ir.alternate===null&&r(L,pe),O=m(ir,O,Ee),Me===null?ce=ir:Me.sibling=ir,Me=ir,pe=Ht}if(Ge.done)return o(L,pe),Ke&&ia(L,Ee),ce;if(pe===null){for(;!Ge.done;Ee++,Ge=z.next())Ge=Z(L,Ge.value,Q),Ge!==null&&(O=m(Ge,O,Ee),Me===null?ce=Ge:Me.sibling=Ge,Me=Ge);return Ke&&ia(L,Ee),ce}for(pe=u(pe);!Ge.done;Ee++,Ge=z.next())Ge=q(pe,L,Ee,Ge.value,Q),Ge!==null&&(n&&Ge.alternate!==null&&pe.delete(Ge.key===null?Ee:Ge.key),O=m(Ge,O,Ee),Me===null?ce=Ge:Me.sibling=Ge,Me=Ge);return n&&pe.forEach(function(Y1){return r(L,Y1)}),Ke&&ia(L,Ee),ce}function it(L,O,z,Q){if(typeof z=="object"&&z!==null&&z.type===B&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case w:e:{for(var ce=z.key;O!==null;){if(O.key===ce){if(ce=z.type,ce===B){if(O.tag===7){o(L,O.sibling),Q=f(O,z.props.children),Q.return=L,L=Q;break e}}else if(O.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===R&&vv(ce)===O.type){o(L,O.sibling),Q=f(O,z.props),Wl(Q,z),Q.return=L,L=Q;break e}o(L,O);break}else r(L,O);O=O.sibling}z.type===B?(Q=ta(z.props.children,L.mode,Q,z.key),Q.return=L,L=Q):(Q=Gc(z.type,z.key,z.props,null,L.mode,Q),Wl(Q,z),Q.return=L,L=Q)}return E(L);case P:e:{for(ce=z.key;O!==null;){if(O.key===ce)if(O.tag===4&&O.stateNode.containerInfo===z.containerInfo&&O.stateNode.implementation===z.implementation){o(L,O.sibling),Q=f(O,z.children||[]),Q.return=L,L=Q;break e}else{o(L,O);break}else r(L,O);O=O.sibling}Q=Hd(z,L.mode,Q),Q.return=L,L=Q}return E(L);case R:return ce=z._init,z=ce(z._payload),it(L,O,z,Q)}if(ae(z))return Ae(L,O,z,Q);if(D(z)){if(ce=D(z),typeof ce!="function")throw Error(s(150));return z=ce.call(z),ve(L,O,z,Q)}if(typeof z.then=="function")return it(L,O,lh(z),Q);if(z.$$typeof===he)return it(L,O,Wc(L,z),Q);uh(L,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,O!==null&&O.tag===6?(o(L,O.sibling),Q=f(O,z),Q.return=L,L=Q):(o(L,O),Q=qd(z,L.mode,Q),Q.return=L,L=Q),E(L)):o(L,O)}return function(L,O,z,Q){try{Ql=0;var ce=it(L,O,z,Q);return fo=null,ce}catch(pe){if(pe===zl||pe===$c)throw pe;var Me=Cn(29,pe,null,L.mode);return Me.lanes=Q,Me.return=L,Me}finally{}}}var mo=Ev(!0),Tv=Ev(!1),Yn=W(null),Ri=null;function Fs(n){var r=n.alternate;te(Lt,Lt.current&1),te(Yn,n),Ri===null&&(r===null||lo.current!==null||r.memoizedState!==null)&&(Ri=n)}function Sv(n){if(n.tag===22){if(te(Lt,Lt.current),te(Yn,n),Ri===null){var r=n.alternate;r!==null&&r.memoizedState!==null&&(Ri=n)}}else qs()}function qs(){te(Lt,Lt.current),te(Yn,Yn.current)}function os(n){ne(Yn),Ri===n&&(Ri=null),ne(Lt)}var Lt=W(0);function ch(n){for(var r=n;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||fp(o)))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}function Am(n,r,o,u){r=n.memoizedState,o=o(u,r),o=o==null?r:y({},r,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var wm={enqueueSetState:function(n,r,o){n=n._reactInternals;var u=xn(),f=zs(u);f.payload=r,o!=null&&(f.callback=o),r=js(n,f,u),r!==null&&(Mn(r,n,u),Bl(r,n,u))},enqueueReplaceState:function(n,r,o){n=n._reactInternals;var u=xn(),f=zs(u);f.tag=1,f.payload=r,o!=null&&(f.callback=o),r=js(n,f,u),r!==null&&(Mn(r,n,u),Bl(r,n,u))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var o=xn(),u=zs(o);u.tag=2,r!=null&&(u.callback=r),r=js(n,u,o),r!==null&&(Mn(r,n,o),Bl(r,n,o))}};function Av(n,r,o,u,f,m,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,E):r.prototype&&r.prototype.isPureReactComponent?!Ol(o,u)||!Ol(f,m):!0}function wv(n,r,o,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==n&&wm.enqueueReplaceState(r,r.state,null)}function ca(n,r){var o=r;if("ref"in r){o={};for(var u in r)u!=="ref"&&(o[u]=r[u])}if(n=n.defaultProps){o===r&&(o=y({},o));for(var f in n)o[f]===void 0&&(o[f]=n[f])}return o}var hh=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)};function bv(n){hh(n)}function Rv(n){console.error(n)}function Iv(n){hh(n)}function fh(n,r){try{var o=n.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(u){setTimeout(function(){throw u})}}function Cv(n,r,o){try{var u=n.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function bm(n,r,o){return o=zs(o),o.tag=3,o.payload={element:null},o.callback=function(){fh(n,r)},o}function Nv(n){return n=zs(n),n.tag=3,n}function Dv(n,r,o,u){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var m=u.value;n.payload=function(){return f(m)},n.callback=function(){Cv(r,o,u)}}var E=o.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(n.callback=function(){Cv(r,o,u),typeof f!="function"&&(Ws===null?Ws=new Set([this]):Ws.add(this));var S=u.stack;this.componentDidCatch(u.value,{componentStack:S!==null?S:""})})}function YR(n,r,o,u,f){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(r=o.alternate,r!==null&&Vl(r,o,f,!0),o=Yn.current,o!==null){switch(o.tag){case 13:return Ri===null?Wm():o.alternate===null&&Et===0&&(Et=3),o.flags&=-257,o.flags|=65536,o.lanes=f,u===em?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([u]):r.add(u),$m(n,u,f)),!1;case 22:return o.flags|=65536,u===em?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([u]):o.add(u)),$m(n,u,f)),!1}throw Error(s(435,o.tag))}return $m(n,u,f),Wm(),!1}if(Ke)return r=Yn.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=f,u!==Yd&&(n=Error(s(422),{cause:u}),Pl(qn(n,o)))):(u!==Yd&&(r=Error(s(423),{cause:u}),Pl(qn(r,o))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,u=qn(u,o),f=bm(n.stateNode,u,f),im(n,f),Et!==4&&(Et=2)),!1;var m=Error(s(520),{cause:u});if(m=qn(m,o),nu===null?nu=[m]:nu.push(m),Et!==4&&(Et=2),r===null)return!0;u=qn(u,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,n=f&-f,o.lanes|=n,n=bm(o.stateNode,u,n),im(o,n),!1;case 1:if(r=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ws===null||!Ws.has(m))))return o.flags|=65536,f&=-f,o.lanes|=f,f=Nv(f),Dv(f,n,o,u),im(o,f),!1}o=o.return}while(o!==null);return!1}var Ov=Error(s(461)),Ft=!1;function Xt(n,r,o,u){r.child=n===null?Tv(r,null,o,u):mo(r,n.child,o,u)}function xv(n,r,o,u,f){o=o.render;var m=r.ref;if("ref"in u){var E={};for(var S in u)S!=="ref"&&(E[S]=u[S])}else E=u;return oa(r),u=lm(n,r,o,E,m,f),S=um(),n!==null&&!Ft?(cm(n,r,f),ls(n,r,f)):(Ke&&S&&Gd(r),r.flags|=1,Xt(n,r,u,f),r.child)}function Mv(n,r,o,u,f){if(n===null){var m=o.type;return typeof m=="function"&&!Fd(m)&&m.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=m,kv(n,r,m,u,f)):(n=Gc(o.type,null,u,r,r.mode,f),n.ref=r.ref,n.return=r,r.child=n)}if(m=n.child,!Mm(n,f)){var E=m.memoizedProps;if(o=o.compare,o=o!==null?o:Ol,o(E,u)&&n.ref===r.ref)return ls(n,r,f)}return r.flags|=1,n=ts(m,u),n.ref=r.ref,n.return=r,r.child=n}function kv(n,r,o,u,f){if(n!==null){var m=n.memoizedProps;if(Ol(m,u)&&n.ref===r.ref)if(Ft=!1,r.pendingProps=u=m,Mm(n,f))(n.flags&131072)!==0&&(Ft=!0);else return r.lanes=n.lanes,ls(n,r,f)}return Rm(n,r,o,u,f)}function Pv(n,r,o){var u=r.pendingProps,f=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden"){if((r.flags&128)!==0){if(u=m!==null?m.baseLanes|o:o,n!==null){for(f=r.child=n.child,m=0;f!==null;)m=m|f.lanes|f.childLanes,f=f.sibling;r.childLanes=m&~u}else r.childLanes=0,r.child=null;return Vv(n,r,u,o)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},n!==null&&Xc(r,m!==null?m.cachePool:null),m!==null?ky(r,m):rm(),Sv(r);else return r.lanes=r.childLanes=536870912,Vv(n,r,m!==null?m.baseLanes|o:o,o)}else m!==null?(Xc(r,m.cachePool),ky(r,m),qs(),r.memoizedState=null):(n!==null&&Xc(r,null),rm(),qs());return Xt(n,r,f,o),r.child}function Vv(n,r,o,u){var f=Jd();return f=f===null?null:{parent:Vt._currentValue,pool:f},r.memoizedState={baseLanes:o,cachePool:f},n!==null&&Xc(r,null),rm(),Sv(r),n!==null&&Vl(n,r,u,!0),null}function dh(n,r){var o=r.ref;if(o===null)n!==null&&n.ref!==null&&(r.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(s(284));(n===null||n.ref!==o)&&(r.flags|=4194816)}}function Rm(n,r,o,u,f){return oa(r),o=lm(n,r,o,u,void 0,f),u=um(),n!==null&&!Ft?(cm(n,r,f),ls(n,r,f)):(Ke&&u&&Gd(r),r.flags|=1,Xt(n,r,o,f),r.child)}function Lv(n,r,o,u,f,m){return oa(r),r.updateQueue=null,o=Vy(r,u,o,f),Py(n),u=um(),n!==null&&!Ft?(cm(n,r,m),ls(n,r,m)):(Ke&&u&&Gd(r),r.flags|=1,Xt(n,r,o,m),r.child)}function Uv(n,r,o,u,f){if(oa(r),r.stateNode===null){var m=io,E=o.contextType;typeof E=="object"&&E!==null&&(m=rn(E)),m=new o(u,m),r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=wm,r.stateNode=m,m._reactInternals=r,m=r.stateNode,m.props=u,m.state=r.memoizedState,m.refs={},tm(r),E=o.contextType,m.context=typeof E=="object"&&E!==null?rn(E):io,m.state=r.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(Am(r,o,E,u),m.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&wm.enqueueReplaceState(m,m.state,null),ql(r,u,m,f),Fl(),m.state=r.memoizedState),typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!0}else if(n===null){m=r.stateNode;var S=r.memoizedProps,I=ca(o,S);m.props=I;var j=m.context,K=o.contextType;E=io,typeof K=="object"&&K!==null&&(E=rn(K));var Z=o.getDerivedStateFromProps;K=typeof Z=="function"||typeof m.getSnapshotBeforeUpdate=="function",S=r.pendingProps!==S,K||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(S||j!==E)&&wv(r,m,u,E),Us=!1;var F=r.memoizedState;m.state=F,ql(r,u,m,f),Fl(),j=r.memoizedState,S||F!==j||Us?(typeof Z=="function"&&(Am(r,o,Z,u),j=r.memoizedState),(I=Us||Av(r,o,I,u,F,j,E))?(K||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(r.flags|=4194308)):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=j),m.props=u,m.state=j,m.context=E,u=I):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{m=r.stateNode,nm(n,r),E=r.memoizedProps,K=ca(o,E),m.props=K,Z=r.pendingProps,F=m.context,j=o.contextType,I=io,typeof j=="object"&&j!==null&&(I=rn(j)),S=o.getDerivedStateFromProps,(j=typeof S=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==Z||F!==I)&&wv(r,m,u,I),Us=!1,F=r.memoizedState,m.state=F,ql(r,u,m,f),Fl();var q=r.memoizedState;E!==Z||F!==q||Us||n!==null&&n.dependencies!==null&&Qc(n.dependencies)?(typeof S=="function"&&(Am(r,o,S,u),q=r.memoizedState),(K=Us||Av(r,o,K,u,F,q,I)||n!==null&&n.dependencies!==null&&Qc(n.dependencies))?(j||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,q,I),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,q,I)),typeof m.componentDidUpdate=="function"&&(r.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===n.memoizedProps&&F===n.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&F===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=q),m.props=u,m.state=q,m.context=I,u=K):(typeof m.componentDidUpdate!="function"||E===n.memoizedProps&&F===n.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&F===n.memoizedState||(r.flags|=1024),u=!1)}return m=u,dh(n,r),u=(r.flags&128)!==0,m||u?(m=r.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:m.render(),r.flags|=1,n!==null&&u?(r.child=mo(r,n.child,null,f),r.child=mo(r,null,o,f)):Xt(n,r,o,f),r.memoizedState=m.state,n=r.child):n=ls(n,r,f),n}function zv(n,r,o,u){return kl(),r.flags|=256,Xt(n,r,o,u),r.child}var Im={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cm(n){return{baseLanes:n,cachePool:Ry()}}function Nm(n,r,o){return n=n!==null?n.childLanes&~o:0,r&&(n|=Qn),n}function jv(n,r,o){var u=r.pendingProps,f=!1,m=(r.flags&128)!==0,E;if((E=m)||(E=n!==null&&n.memoizedState===null?!1:(Lt.current&2)!==0),E&&(f=!0,r.flags&=-129),E=(r.flags&32)!==0,r.flags&=-33,n===null){if(Ke){if(f?Fs(r):qs(),Ke){var S=vt,I;if(I=S){e:{for(I=S,S=bi;I.nodeType!==8;){if(!S){S=null;break e}if(I=ai(I.nextSibling),I===null){S=null;break e}}S=I}S!==null?(r.memoizedState={dehydrated:S,treeContext:na!==null?{id:ns,overflow:is}:null,retryLane:536870912,hydrationErrors:null},I=Cn(18,null,null,0),I.stateNode=S,I.return=r,r.child=I,_n=r,vt=null,I=!0):I=!1}I||ra(r)}if(S=r.memoizedState,S!==null&&(S=S.dehydrated,S!==null))return fp(S)?r.lanes=32:r.lanes=536870912,null;os(r)}return S=u.children,u=u.fallback,f?(qs(),f=r.mode,S=mh({mode:"hidden",children:S},f),u=ta(u,f,o,null),S.return=r,u.return=r,S.sibling=u,r.child=S,f=r.child,f.memoizedState=Cm(o),f.childLanes=Nm(n,E,o),r.memoizedState=Im,u):(Fs(r),Dm(r,S))}if(I=n.memoizedState,I!==null&&(S=I.dehydrated,S!==null)){if(m)r.flags&256?(Fs(r),r.flags&=-257,r=Om(n,r,o)):r.memoizedState!==null?(qs(),r.child=n.child,r.flags|=128,r=null):(qs(),f=u.fallback,S=r.mode,u=mh({mode:"visible",children:u.children},S),f=ta(f,S,o,null),f.flags|=2,u.return=r,f.return=r,u.sibling=f,r.child=u,mo(r,n.child,null,o),u=r.child,u.memoizedState=Cm(o),u.childLanes=Nm(n,E,o),r.memoizedState=Im,r=f);else if(Fs(r),fp(S)){if(E=S.nextSibling&&S.nextSibling.dataset,E)var j=E.dgst;E=j,u=Error(s(419)),u.stack="",u.digest=E,Pl({value:u,source:null,stack:null}),r=Om(n,r,o)}else if(Ft||Vl(n,r,o,!1),E=(o&n.childLanes)!==0,Ft||E){if(E=ot,E!==null&&(u=o&-o,u=(u&42)!==0?1:Ds(u),u=(u&(E.suspendedLanes|o))!==0?0:u,u!==0&&u!==I.retryLane))throw I.retryLane=u,no(n,u),Mn(E,n,u),Ov;S.data==="$?"||Wm(),r=Om(n,r,o)}else S.data==="$?"?(r.flags|=192,r.child=n.child,r=null):(n=I.treeContext,vt=ai(S.nextSibling),_n=r,Ke=!0,sa=null,bi=!1,n!==null&&(Gn[Kn++]=ns,Gn[Kn++]=is,Gn[Kn++]=na,ns=n.id,is=n.overflow,na=r),r=Dm(r,u.children),r.flags|=4096);return r}return f?(qs(),f=u.fallback,S=r.mode,I=n.child,j=I.sibling,u=ts(I,{mode:"hidden",children:u.children}),u.subtreeFlags=I.subtreeFlags&65011712,j!==null?f=ts(j,f):(f=ta(f,S,o,null),f.flags|=2),f.return=r,u.return=r,u.sibling=f,r.child=u,u=f,f=r.child,S=n.child.memoizedState,S===null?S=Cm(o):(I=S.cachePool,I!==null?(j=Vt._currentValue,I=I.parent!==j?{parent:j,pool:j}:I):I=Ry(),S={baseLanes:S.baseLanes|o,cachePool:I}),f.memoizedState=S,f.childLanes=Nm(n,E,o),r.memoizedState=Im,u):(Fs(r),o=n.child,n=o.sibling,o=ts(o,{mode:"visible",children:u.children}),o.return=r,o.sibling=null,n!==null&&(E=r.deletions,E===null?(r.deletions=[n],r.flags|=16):E.push(n)),r.child=o,r.memoizedState=null,o)}function Dm(n,r){return r=mh({mode:"visible",children:r},n.mode),r.return=n,n.child=r}function mh(n,r){return n=Cn(22,n,null,r),n.lanes=0,n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},n}function Om(n,r,o){return mo(r,n.child,null,o),n=Dm(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Bv(n,r,o){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),Wd(n.return,r,o)}function xm(n,r,o,u,f){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(m.isBackwards=r,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=f)}function Fv(n,r,o){var u=r.pendingProps,f=u.revealOrder,m=u.tail;if(Xt(n,r,u.children,o),u=Lt.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Bv(n,o,r);else if(n.tag===19)Bv(n,o,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}switch(te(Lt,u),f){case"forwards":for(o=r.child,f=null;o!==null;)n=o.alternate,n!==null&&ch(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=r.child,r.child=null):(f=o.sibling,o.sibling=null),xm(r,!1,f,o,m);break;case"backwards":for(o=null,f=r.child,r.child=null;f!==null;){if(n=f.alternate,n!==null&&ch(n)===null){r.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}xm(r,!0,o,null,m);break;case"together":xm(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function ls(n,r,o){if(n!==null&&(r.dependencies=n.dependencies),Qs|=r.lanes,(o&r.childLanes)===0)if(n!==null){if(Vl(n,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(n!==null&&r.child!==n.child)throw Error(s(153));if(r.child!==null){for(n=r.child,o=ts(n,n.pendingProps),r.child=o,o.return=r;n.sibling!==null;)n=n.sibling,o=o.sibling=ts(n,n.pendingProps),o.return=r;o.sibling=null}return r.child}function Mm(n,r){return(n.lanes&r)!==0?!0:(n=n.dependencies,!!(n!==null&&Qc(n)))}function QR(n,r,o){switch(r.tag){case 3:at(r,r.stateNode.containerInfo),Ls(r,Vt,n.memoizedState.cache),kl();break;case 27:case 5:Ns(r);break;case 4:at(r,r.stateNode.containerInfo);break;case 10:Ls(r,r.type,r.memoizedProps.value);break;case 13:var u=r.memoizedState;if(u!==null)return u.dehydrated!==null?(Fs(r),r.flags|=128,null):(o&r.child.childLanes)!==0?jv(n,r,o):(Fs(r),n=ls(n,r,o),n!==null?n.sibling:null);Fs(r);break;case 19:var f=(n.flags&128)!==0;if(u=(o&r.childLanes)!==0,u||(Vl(n,r,o,!1),u=(o&r.childLanes)!==0),f){if(u)return Fv(n,r,o);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),te(Lt,Lt.current),u)break;return null;case 22:case 23:return r.lanes=0,Pv(n,r,o);case 24:Ls(r,Vt,n.memoizedState.cache)}return ls(n,r,o)}function qv(n,r,o){if(n!==null)if(n.memoizedProps!==r.pendingProps)Ft=!0;else{if(!Mm(n,o)&&(r.flags&128)===0)return Ft=!1,QR(n,r,o);Ft=(n.flags&131072)!==0}else Ft=!1,Ke&&(r.flags&1048576)!==0&&vy(r,Yc,r.index);switch(r.lanes=0,r.tag){case 16:e:{n=r.pendingProps;var u=r.elementType,f=u._init;if(u=f(u._payload),r.type=u,typeof u=="function")Fd(u)?(n=ca(u,n),r.tag=1,r=Uv(null,r,u,n,o)):(r.tag=0,r=Rm(null,r,u,n,o));else{if(u!=null){if(f=u.$$typeof,f===Ce){r.tag=11,r=xv(null,r,u,n,o);break e}else if(f===M){r.tag=14,r=Mv(null,r,u,n,o);break e}}throw r=re(u)||u,Error(s(306,r,""))}}return r;case 0:return Rm(n,r,r.type,r.pendingProps,o);case 1:return u=r.type,f=ca(u,r.pendingProps),Uv(n,r,u,f,o);case 3:e:{if(at(r,r.stateNode.containerInfo),n===null)throw Error(s(387));u=r.pendingProps;var m=r.memoizedState;f=m.element,nm(n,r),ql(r,u,null,o);var E=r.memoizedState;if(u=E.cache,Ls(r,Vt,u),u!==m.cache&&Xd(r,[Vt],o,!0),Fl(),u=E.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:E.cache},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){r=zv(n,r,u,o);break e}else if(u!==f){f=qn(Error(s(424)),r),Pl(f),r=zv(n,r,u,o);break e}else{switch(n=r.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(vt=ai(n.firstChild),_n=r,Ke=!0,sa=null,bi=!0,o=Tv(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(kl(),u===f){r=ls(n,r,o);break e}Xt(n,r,u,o)}r=r.child}return r;case 26:return dh(n,r),n===null?(o=Y0(r.type,null,r.pendingProps,null))?r.memoizedState=o:Ke||(o=r.type,n=r.pendingProps,u=Ch(we.current).createElement(o),u[Mt]=r,u[Rt]=n,Zt(u,o,n),St(u),r.stateNode=u):r.memoizedState=Y0(r.type,n.memoizedProps,r.pendingProps,n.memoizedState),null;case 27:return Ns(r),n===null&&Ke&&(u=r.stateNode=H0(r.type,r.pendingProps,we.current),_n=r,bi=!0,f=vt,Zs(r.type)?(dp=f,vt=ai(u.firstChild)):vt=f),Xt(n,r,r.pendingProps.children,o),dh(n,r),n===null&&(r.flags|=4194304),r.child;case 5:return n===null&&Ke&&((f=u=vt)&&(u=S1(u,r.type,r.pendingProps,bi),u!==null?(r.stateNode=u,_n=r,vt=ai(u.firstChild),bi=!1,f=!0):f=!1),f||ra(r)),Ns(r),f=r.type,m=r.pendingProps,E=n!==null?n.memoizedProps:null,u=m.children,up(f,m)?u=null:E!==null&&up(f,E)&&(r.flags|=32),r.memoizedState!==null&&(f=lm(n,r,jR,null,null,o),hu._currentValue=f),dh(n,r),Xt(n,r,u,o),r.child;case 6:return n===null&&Ke&&((n=o=vt)&&(o=A1(o,r.pendingProps,bi),o!==null?(r.stateNode=o,_n=r,vt=null,n=!0):n=!1),n||ra(r)),null;case 13:return jv(n,r,o);case 4:return at(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=mo(r,null,u,o):Xt(n,r,u,o),r.child;case 11:return xv(n,r,r.type,r.pendingProps,o);case 7:return Xt(n,r,r.pendingProps,o),r.child;case 8:return Xt(n,r,r.pendingProps.children,o),r.child;case 12:return Xt(n,r,r.pendingProps.children,o),r.child;case 10:return u=r.pendingProps,Ls(r,r.type,u.value),Xt(n,r,u.children,o),r.child;case 9:return f=r.type._context,u=r.pendingProps.children,oa(r),f=rn(f),u=u(f),r.flags|=1,Xt(n,r,u,o),r.child;case 14:return Mv(n,r,r.type,r.pendingProps,o);case 15:return kv(n,r,r.type,r.pendingProps,o);case 19:return Fv(n,r,o);case 31:return u=r.pendingProps,o=r.mode,u={mode:u.mode,children:u.children},n===null?(o=mh(u,o),o.ref=r.ref,r.child=o,o.return=r,r=o):(o=ts(n.child,u),o.ref=r.ref,r.child=o,o.return=r,r=o),r;case 22:return Pv(n,r,o);case 24:return oa(r),u=rn(Vt),n===null?(f=Jd(),f===null&&(f=ot,m=$d(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=o),f=m),r.memoizedState={parent:u,cache:f},tm(r),Ls(r,Vt,f)):((n.lanes&o)!==0&&(nm(n,r),ql(r,null,null,o),Fl()),f=n.memoizedState,m=r.memoizedState,f.parent!==u?(f={parent:u,cache:u},r.memoizedState=f,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=f),Ls(r,Vt,u)):(u=m.cache,Ls(r,Vt,u),u!==f.cache&&Xd(r,[Vt],o,!0))),Xt(n,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(s(156,r.tag))}function us(n){n.flags|=4}function Hv(n,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!Z0(r)){if(r=Yn.current,r!==null&&((Be&4194048)===Be?Ri!==null:(Be&62914560)!==Be&&(Be&536870912)===0||r!==Ri))throw jl=em,Iy;n.flags|=8192}}function ph(n,r){r!==null&&(n.flags|=4),n.flags&16384&&(r=n.tag!==22?dl():536870912,n.lanes|=r,yo|=r)}function Xl(n,r){if(!Ke)switch(n.tailMode){case"hidden":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function pt(n){var r=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(r)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&65011712,u|=f.flags&65011712,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=u,n.childLanes=o,r}function WR(n,r,o){var u=r.pendingProps;switch(Kd(r),r.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pt(r),null;case 1:return pt(r),null;case 3:return o=r.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),r.memoizedState.cache!==u&&(r.flags|=2048),rs(Vt),di(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(Ml(r)?us(r):n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Sy())),pt(r),null;case 26:return o=r.memoizedState,n===null?(us(r),o!==null?(pt(r),Hv(r,o)):(pt(r),r.flags&=-16777217)):o?o!==n.memoizedState?(us(r),pt(r),Hv(r,o)):(pt(r),r.flags&=-16777217):(n.memoizedProps!==u&&us(r),pt(r),r.flags&=-16777217),null;case 27:Fi(r),o=we.current;var f=r.type;if(n!==null&&r.stateNode!=null)n.memoizedProps!==u&&us(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return pt(r),null}n=ye.current,Ml(r)?Ey(r):(n=H0(f,u,o),r.stateNode=n,us(r))}return pt(r),null;case 5:if(Fi(r),o=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==u&&us(r);else{if(!u){if(r.stateNode===null)throw Error(s(166));return pt(r),null}if(n=ye.current,Ml(r))Ey(r);else{switch(f=Ch(we.current),n){case 1:n=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:n=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":n=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":n=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":n=f.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof u.is=="string"?f.createElement("select",{is:u.is}):f.createElement("select"),u.multiple?n.multiple=!0:u.size&&(n.size=u.size);break;default:n=typeof u.is=="string"?f.createElement(o,{is:u.is}):f.createElement(o)}}n[Mt]=r,n[Rt]=u;e:for(f=r.child;f!==null;){if(f.tag===5||f.tag===6)n.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===r)break e;for(;f.sibling===null;){if(f.return===null||f.return===r)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}r.stateNode=n;e:switch(Zt(n,o,u),o){case"button":case"input":case"select":case"textarea":n=!!u.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&us(r)}}return pt(r),r.flags&=-16777217,null;case 6:if(n&&r.stateNode!=null)n.memoizedProps!==u&&us(r);else{if(typeof u!="string"&&r.stateNode===null)throw Error(s(166));if(n=we.current,Ml(r)){if(n=r.stateNode,o=r.memoizedProps,u=null,f=_n,f!==null)switch(f.tag){case 27:case 5:u=f.memoizedProps}n[Mt]=r,n=!!(n.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||L0(n.nodeValue,o)),n||ra(r)}else n=Ch(n).createTextNode(u),n[Mt]=r,r.stateNode=n}return pt(r),null;case 13:if(u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=Ml(r),u!==null&&u.dehydrated!==null){if(n===null){if(!f)throw Error(s(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[Mt]=r}else kl(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;pt(r),f=!1}else f=Sy(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=f),f=!0;if(!f)return r.flags&256?(os(r),r):(os(r),null)}if(os(r),(r.flags&128)!==0)return r.lanes=o,r;if(o=u!==null,n=n!==null&&n.memoizedState!==null,o){u=r.child,f=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(f=u.alternate.memoizedState.cachePool.pool);var m=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==f&&(u.flags|=2048)}return o!==n&&o&&(r.child.flags|=8192),ph(r,r.updateQueue),pt(r),null;case 4:return di(),n===null&&sp(r.stateNode.containerInfo),pt(r),null;case 10:return rs(r.type),pt(r),null;case 19:if(ne(Lt),f=r.memoizedState,f===null)return pt(r),null;if(u=(r.flags&128)!==0,m=f.rendering,m===null)if(u)Xl(f,!1);else{if(Et!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(m=ch(n),m!==null){for(r.flags|=128,Xl(f,!1),n=m.updateQueue,r.updateQueue=n,ph(r,n),r.subtreeFlags=0,n=o,o=r.child;o!==null;)yy(o,n),o=o.sibling;return te(Lt,Lt.current&1|2),r.child}n=n.sibling}f.tail!==null&&Ln()>yh&&(r.flags|=128,u=!0,Xl(f,!1),r.lanes=4194304)}else{if(!u)if(n=ch(m),n!==null){if(r.flags|=128,u=!0,n=n.updateQueue,r.updateQueue=n,ph(r,n),Xl(f,!0),f.tail===null&&f.tailMode==="hidden"&&!m.alternate&&!Ke)return pt(r),null}else 2*Ln()-f.renderingStartTime>yh&&o!==536870912&&(r.flags|=128,u=!0,Xl(f,!1),r.lanes=4194304);f.isBackwards?(m.sibling=r.child,r.child=m):(n=f.last,n!==null?n.sibling=m:r.child=m,f.last=m)}return f.tail!==null?(r=f.tail,f.rendering=r,f.tail=r.sibling,f.renderingStartTime=Ln(),r.sibling=null,n=Lt.current,te(Lt,u?n&1|2:n&1),r):(pt(r),null);case 22:case 23:return os(r),am(),u=r.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(r.flags|=8192):u&&(r.flags|=8192),u?(o&536870912)!==0&&(r.flags&128)===0&&(pt(r),r.subtreeFlags&6&&(r.flags|=8192)):pt(r),o=r.updateQueue,o!==null&&ph(r,o.retryQueue),o=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==o&&(r.flags|=2048),n!==null&&ne(la),null;case 24:return o=null,n!==null&&(o=n.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),rs(Vt),pt(r),null;case 25:return null;case 30:return null}throw Error(s(156,r.tag))}function XR(n,r){switch(Kd(r),r.tag){case 1:return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return rs(Vt),di(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 26:case 27:case 5:return Fi(r),null;case 13:if(os(r),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(s(340));kl()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return ne(Lt),null;case 4:return di(),null;case 10:return rs(r.type),null;case 22:case 23:return os(r),am(),n!==null&&ne(la),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 24:return rs(Vt),null;case 25:return null;default:return null}}function Gv(n,r){switch(Kd(r),r.tag){case 3:rs(Vt),di();break;case 26:case 27:case 5:Fi(r);break;case 4:di();break;case 13:os(r);break;case 19:ne(Lt);break;case 10:rs(r.type);break;case 22:case 23:os(r),am(),n!==null&&ne(la);break;case 24:rs(Vt)}}function $l(n,r){try{var o=r.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&n)===n){u=void 0;var m=o.create,E=o.inst;u=m(),E.destroy=u}o=o.next}while(o!==f)}}catch(S){rt(r,r.return,S)}}function Hs(n,r,o){try{var u=r.updateQueue,f=u!==null?u.lastEffect:null;if(f!==null){var m=f.next;u=m;do{if((u.tag&n)===n){var E=u.inst,S=E.destroy;if(S!==void 0){E.destroy=void 0,f=r;var I=o,j=S;try{j()}catch(K){rt(f,I,K)}}}u=u.next}while(u!==m)}}catch(K){rt(r,r.return,K)}}function Kv(n){var r=n.updateQueue;if(r!==null){var o=n.stateNode;try{My(r,o)}catch(u){rt(n,n.return,u)}}}function Yv(n,r,o){o.props=ca(n.type,n.memoizedProps),o.state=n.memoizedState;try{o.componentWillUnmount()}catch(u){rt(n,r,u)}}function Zl(n,r){try{var o=n.ref;if(o!==null){switch(n.tag){case 26:case 27:case 5:var u=n.stateNode;break;case 30:u=n.stateNode;break;default:u=n.stateNode}typeof o=="function"?n.refCleanup=o(u):o.current=u}}catch(f){rt(n,r,f)}}function Ii(n,r){var o=n.ref,u=n.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(f){rt(n,r,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){rt(n,r,f)}else o.current=null}function Qv(n){var r=n.type,o=n.memoizedProps,u=n.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(f){rt(n,n.return,f)}}function km(n,r,o){try{var u=n.stateNode;_1(u,n.type,o,r),u[Rt]=r}catch(f){rt(n,n.return,f)}}function Wv(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Zs(n.type)||n.tag===4}function Pm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Wv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Zs(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Vm(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(n,r):(r=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,r.appendChild(n),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Ih));else if(u!==4&&(u===27&&Zs(n.type)&&(o=n.stateNode,r=null),n=n.child,n!==null))for(Vm(n,r,o),n=n.sibling;n!==null;)Vm(n,r,o),n=n.sibling}function gh(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.insertBefore(n,r):o.appendChild(n);else if(u!==4&&(u===27&&Zs(n.type)&&(o=n.stateNode),n=n.child,n!==null))for(gh(n,r,o),n=n.sibling;n!==null;)gh(n,r,o),n=n.sibling}function Xv(n){var r=n.stateNode,o=n.memoizedProps;try{for(var u=n.type,f=r.attributes;f.length;)r.removeAttributeNode(f[0]);Zt(r,u,o),r[Mt]=n,r[Rt]=o}catch(m){rt(n,n.return,m)}}var cs=!1,wt=!1,Lm=!1,$v=typeof WeakSet=="function"?WeakSet:Set,qt=null;function $R(n,r){if(n=n.containerInfo,op=kh,n=ly(n),Pd(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var E=0,S=-1,I=-1,j=0,K=0,Z=n,F=null;t:for(;;){for(var q;Z!==o||f!==0&&Z.nodeType!==3||(S=E+f),Z!==m||u!==0&&Z.nodeType!==3||(I=E+u),Z.nodeType===3&&(E+=Z.nodeValue.length),(q=Z.firstChild)!==null;)F=Z,Z=q;for(;;){if(Z===n)break t;if(F===o&&++j===f&&(S=E),F===m&&++K===u&&(I=E),(q=Z.nextSibling)!==null)break;Z=F,F=Z.parentNode}Z=q}o=S===-1||I===-1?null:{start:S,end:I}}else o=null}o=o||{start:0,end:0}}else o=null;for(lp={focusedElem:n,selectionRange:o},kh=!1,qt=r;qt!==null;)if(r=qt,n=r.child,(r.subtreeFlags&1024)!==0&&n!==null)n.return=r,qt=n;else for(;qt!==null;){switch(r=qt,m=r.alternate,n=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if((n&1024)!==0&&m!==null){n=void 0,o=r,f=m.memoizedProps,m=m.memoizedState,u=o.stateNode;try{var Ae=ca(o.type,f,o.elementType===o.type);n=u.getSnapshotBeforeUpdate(Ae,m),u.__reactInternalSnapshotBeforeUpdate=n}catch(ve){rt(o,o.return,ve)}}break;case 3:if((n&1024)!==0){if(n=r.stateNode.containerInfo,o=n.nodeType,o===9)hp(n);else if(o===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":hp(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(s(163))}if(n=r.sibling,n!==null){n.return=r.return,qt=n;break}qt=r.return}}function Zv(n,r,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:Gs(n,o),u&4&&$l(5,o);break;case 1:if(Gs(n,o),u&4)if(n=o.stateNode,r===null)try{n.componentDidMount()}catch(E){rt(o,o.return,E)}else{var f=ca(o.type,r.memoizedProps);r=r.memoizedState;try{n.componentDidUpdate(f,r,n.__reactInternalSnapshotBeforeUpdate)}catch(E){rt(o,o.return,E)}}u&64&&Kv(o),u&512&&Zl(o,o.return);break;case 3:if(Gs(n,o),u&64&&(n=o.updateQueue,n!==null)){if(r=null,o.child!==null)switch(o.child.tag){case 27:case 5:r=o.child.stateNode;break;case 1:r=o.child.stateNode}try{My(n,r)}catch(E){rt(o,o.return,E)}}break;case 27:r===null&&u&4&&Xv(o);case 26:case 5:Gs(n,o),r===null&&u&4&&Qv(o),u&512&&Zl(o,o.return);break;case 12:Gs(n,o);break;case 13:Gs(n,o),u&4&&t0(n,o),u&64&&(n=o.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(o=a1.bind(null,o),w1(n,o))));break;case 22:if(u=o.memoizedState!==null||cs,!u){r=r!==null&&r.memoizedState!==null||wt,f=cs;var m=wt;cs=u,(wt=r)&&!m?Ks(n,o,(o.subtreeFlags&8772)!==0):Gs(n,o),cs=f,wt=m}break;case 30:break;default:Gs(n,o)}}function Jv(n){var r=n.alternate;r!==null&&(n.alternate=null,Jv(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&Ms(r)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var mt=null,vn=!1;function hs(n,r,o){for(o=o.child;o!==null;)e0(n,r,o),o=o.sibling}function e0(n,r,o){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(yt,o)}catch{}switch(o.tag){case 26:wt||Ii(o,r),hs(n,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:wt||Ii(o,r);var u=mt,f=vn;Zs(o.type)&&(mt=o.stateNode,vn=!1),hs(n,r,o),ou(o.stateNode),mt=u,vn=f;break;case 5:wt||Ii(o,r);case 6:if(u=mt,f=vn,mt=null,hs(n,r,o),mt=u,vn=f,mt!==null)if(vn)try{(mt.nodeType===9?mt.body:mt.nodeName==="HTML"?mt.ownerDocument.body:mt).removeChild(o.stateNode)}catch(m){rt(o,r,m)}else try{mt.removeChild(o.stateNode)}catch(m){rt(o,r,m)}break;case 18:mt!==null&&(vn?(n=mt,F0(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,o.stateNode),pu(n)):F0(mt,o.stateNode));break;case 4:u=mt,f=vn,mt=o.stateNode.containerInfo,vn=!0,hs(n,r,o),mt=u,vn=f;break;case 0:case 11:case 14:case 15:wt||Hs(2,o,r),wt||Hs(4,o,r),hs(n,r,o);break;case 1:wt||(Ii(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"&&Yv(o,r,u)),hs(n,r,o);break;case 21:hs(n,r,o);break;case 22:wt=(u=wt)||o.memoizedState!==null,hs(n,r,o),wt=u;break;default:hs(n,r,o)}}function t0(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{pu(n)}catch(o){rt(r,r.return,o)}}function ZR(n){switch(n.tag){case 13:case 19:var r=n.stateNode;return r===null&&(r=n.stateNode=new $v),r;case 22:return n=n.stateNode,r=n._retryCache,r===null&&(r=n._retryCache=new $v),r;default:throw Error(s(435,n.tag))}}function Um(n,r){var o=ZR(n);r.forEach(function(u){var f=o1.bind(null,n,u);o.has(u)||(o.add(u),u.then(f,f))})}function Nn(n,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u],m=n,E=r,S=E;e:for(;S!==null;){switch(S.tag){case 27:if(Zs(S.type)){mt=S.stateNode,vn=!1;break e}break;case 5:mt=S.stateNode,vn=!1;break e;case 3:case 4:mt=S.stateNode.containerInfo,vn=!0;break e}S=S.return}if(mt===null)throw Error(s(160));e0(m,E,f),mt=null,vn=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)n0(r,n),r=r.sibling}var ri=null;function n0(n,r){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Nn(r,n),Dn(n),u&4&&(Hs(3,n,n.return),$l(3,n),Hs(5,n,n.return));break;case 1:Nn(r,n),Dn(n),u&512&&(wt||o===null||Ii(o,o.return)),u&64&&cs&&(n=n.updateQueue,n!==null&&(u=n.callbacks,u!==null&&(o=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var f=ri;if(Nn(r,n),Dn(n),u&512&&(wt||o===null||Ii(o,o.return)),u&4){var m=o!==null?o.memoizedState:null;if(u=n.memoizedState,o===null)if(u===null)if(n.stateNode===null){e:{u=n.type,o=n.memoizedProps,f=f.ownerDocument||f;t:switch(u){case"title":m=f.getElementsByTagName("title")[0],(!m||m[zr]||m[Mt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(u),f.head.insertBefore(m,f.querySelector("head > title"))),Zt(m,u,o),m[Mt]=n,St(m),u=m;break e;case"link":var E=X0("link","href",f).get(u+(o.href||""));if(E){for(var S=0;S<E.length;S++)if(m=E[S],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){E.splice(S,1);break t}}m=f.createElement(u),Zt(m,u,o),f.head.appendChild(m);break;case"meta":if(E=X0("meta","content",f).get(u+(o.content||""))){for(S=0;S<E.length;S++)if(m=E[S],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){E.splice(S,1);break t}}m=f.createElement(u),Zt(m,u,o),f.head.appendChild(m);break;default:throw Error(s(468,u))}m[Mt]=n,St(m),u=m}n.stateNode=u}else $0(f,n.type,n.stateNode);else n.stateNode=W0(f,u,n.memoizedProps);else m!==u?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,u===null?$0(f,n.type,n.stateNode):W0(f,u,n.memoizedProps)):u===null&&n.stateNode!==null&&km(n,n.memoizedProps,o.memoizedProps)}break;case 27:Nn(r,n),Dn(n),u&512&&(wt||o===null||Ii(o,o.return)),o!==null&&u&4&&km(n,n.memoizedProps,o.memoizedProps);break;case 5:if(Nn(r,n),Dn(n),u&512&&(wt||o===null||Ii(o,o.return)),n.flags&32){f=n.stateNode;try{zn(f,"")}catch(q){rt(n,n.return,q)}}u&4&&n.stateNode!=null&&(f=n.memoizedProps,km(n,f,o!==null?o.memoizedProps:f)),u&1024&&(Lm=!0);break;case 6:if(Nn(r,n),Dn(n),u&4){if(n.stateNode===null)throw Error(s(162));u=n.memoizedProps,o=n.stateNode;try{o.nodeValue=u}catch(q){rt(n,n.return,q)}}break;case 3:if(Oh=null,f=ri,ri=Nh(r.containerInfo),Nn(r,n),ri=f,Dn(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{pu(r.containerInfo)}catch(q){rt(n,n.return,q)}Lm&&(Lm=!1,i0(n));break;case 4:u=ri,ri=Nh(n.stateNode.containerInfo),Nn(r,n),Dn(n),ri=u;break;case 12:Nn(r,n),Dn(n);break;case 13:Nn(r,n),Dn(n),n.child.flags&8192&&n.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Hm=Ln()),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Um(n,u)));break;case 22:f=n.memoizedState!==null;var I=o!==null&&o.memoizedState!==null,j=cs,K=wt;if(cs=j||f,wt=K||I,Nn(r,n),wt=K,cs=j,Dn(n),u&8192)e:for(r=n.stateNode,r._visibility=f?r._visibility&-2:r._visibility|1,f&&(o===null||I||cs||wt||ha(n)),o=null,r=n;;){if(r.tag===5||r.tag===26){if(o===null){I=o=r;try{if(m=I.stateNode,f)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{S=I.stateNode;var Z=I.memoizedProps.style,F=Z!=null&&Z.hasOwnProperty("display")?Z.display:null;S.style.display=F==null||typeof F=="boolean"?"":(""+F).trim()}}catch(q){rt(I,I.return,q)}}}else if(r.tag===6){if(o===null){I=r;try{I.stateNode.nodeValue=f?"":I.memoizedProps}catch(q){rt(I,I.return,q)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===n)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break e;for(;r.sibling===null;){if(r.return===null||r.return===n)break e;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}u&4&&(u=n.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,Um(n,o))));break;case 19:Nn(r,n),Dn(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Um(n,u)));break;case 30:break;case 21:break;default:Nn(r,n),Dn(n)}}function Dn(n){var r=n.flags;if(r&2){try{for(var o,u=n.return;u!==null;){if(Wv(u)){o=u;break}u=u.return}if(o==null)throw Error(s(160));switch(o.tag){case 27:var f=o.stateNode,m=Pm(n);gh(n,m,f);break;case 5:var E=o.stateNode;o.flags&32&&(zn(E,""),o.flags&=-33);var S=Pm(n);gh(n,S,E);break;case 3:case 4:var I=o.stateNode.containerInfo,j=Pm(n);Vm(n,j,I);break;default:throw Error(s(161))}}catch(K){rt(n,n.return,K)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function i0(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var r=n;i0(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),n=n.sibling}}function Gs(n,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)Zv(n,r.alternate,r),r=r.sibling}function ha(n){for(n=n.child;n!==null;){var r=n;switch(r.tag){case 0:case 11:case 14:case 15:Hs(4,r,r.return),ha(r);break;case 1:Ii(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&Yv(r,r.return,o),ha(r);break;case 27:ou(r.stateNode);case 26:case 5:Ii(r,r.return),ha(r);break;case 22:r.memoizedState===null&&ha(r);break;case 30:ha(r);break;default:ha(r)}n=n.sibling}}function Ks(n,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var u=r.alternate,f=n,m=r,E=m.flags;switch(m.tag){case 0:case 11:case 15:Ks(f,m,o),$l(4,m);break;case 1:if(Ks(f,m,o),u=m,f=u.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(j){rt(u,u.return,j)}if(u=m,f=u.updateQueue,f!==null){var S=u.stateNode;try{var I=f.shared.hiddenCallbacks;if(I!==null)for(f.shared.hiddenCallbacks=null,f=0;f<I.length;f++)xy(I[f],S)}catch(j){rt(u,u.return,j)}}o&&E&64&&Kv(m),Zl(m,m.return);break;case 27:Xv(m);case 26:case 5:Ks(f,m,o),o&&u===null&&E&4&&Qv(m),Zl(m,m.return);break;case 12:Ks(f,m,o);break;case 13:Ks(f,m,o),o&&E&4&&t0(f,m);break;case 22:m.memoizedState===null&&Ks(f,m,o),Zl(m,m.return);break;case 30:break;default:Ks(f,m,o)}r=r.sibling}}function zm(n,r){var o=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),n=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(n=r.memoizedState.cachePool.pool),n!==o&&(n!=null&&n.refCount++,o!=null&&Ll(o))}function jm(n,r){n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Ll(n))}function Ci(n,r,o,u){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)s0(n,r,o,u),r=r.sibling}function s0(n,r,o,u){var f=r.flags;switch(r.tag){case 0:case 11:case 15:Ci(n,r,o,u),f&2048&&$l(9,r);break;case 1:Ci(n,r,o,u);break;case 3:Ci(n,r,o,u),f&2048&&(n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Ll(n)));break;case 12:if(f&2048){Ci(n,r,o,u),n=r.stateNode;try{var m=r.memoizedProps,E=m.id,S=m.onPostCommit;typeof S=="function"&&S(E,r.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(I){rt(r,r.return,I)}}else Ci(n,r,o,u);break;case 13:Ci(n,r,o,u);break;case 23:break;case 22:m=r.stateNode,E=r.alternate,r.memoizedState!==null?m._visibility&2?Ci(n,r,o,u):Jl(n,r):m._visibility&2?Ci(n,r,o,u):(m._visibility|=2,po(n,r,o,u,(r.subtreeFlags&10256)!==0)),f&2048&&zm(E,r);break;case 24:Ci(n,r,o,u),f&2048&&jm(r.alternate,r);break;default:Ci(n,r,o,u)}}function po(n,r,o,u,f){for(f=f&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var m=n,E=r,S=o,I=u,j=E.flags;switch(E.tag){case 0:case 11:case 15:po(m,E,S,I,f),$l(8,E);break;case 23:break;case 22:var K=E.stateNode;E.memoizedState!==null?K._visibility&2?po(m,E,S,I,f):Jl(m,E):(K._visibility|=2,po(m,E,S,I,f)),f&&j&2048&&zm(E.alternate,E);break;case 24:po(m,E,S,I,f),f&&j&2048&&jm(E.alternate,E);break;default:po(m,E,S,I,f)}r=r.sibling}}function Jl(n,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=n,u=r,f=u.flags;switch(u.tag){case 22:Jl(o,u),f&2048&&zm(u.alternate,u);break;case 24:Jl(o,u),f&2048&&jm(u.alternate,u);break;default:Jl(o,u)}r=r.sibling}}var eu=8192;function go(n){if(n.subtreeFlags&eu)for(n=n.child;n!==null;)r0(n),n=n.sibling}function r0(n){switch(n.tag){case 26:go(n),n.flags&eu&&n.memoizedState!==null&&L1(ri,n.memoizedState,n.memoizedProps);break;case 5:go(n);break;case 3:case 4:var r=ri;ri=Nh(n.stateNode.containerInfo),go(n),ri=r;break;case 22:n.memoizedState===null&&(r=n.alternate,r!==null&&r.memoizedState!==null?(r=eu,eu=16777216,go(n),eu=r):go(n));break;default:go(n)}}function a0(n){var r=n.alternate;if(r!==null&&(n=r.child,n!==null)){r.child=null;do r=n.sibling,n.sibling=null,n=r;while(n!==null)}}function tu(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];qt=u,l0(u,n)}a0(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)o0(n),n=n.sibling}function o0(n){switch(n.tag){case 0:case 11:case 15:tu(n),n.flags&2048&&Hs(9,n,n.return);break;case 3:tu(n);break;case 12:tu(n);break;case 22:var r=n.stateNode;n.memoizedState!==null&&r._visibility&2&&(n.return===null||n.return.tag!==13)?(r._visibility&=-3,_h(n)):tu(n);break;default:tu(n)}}function _h(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];qt=u,l0(u,n)}a0(n)}for(n=n.child;n!==null;){switch(r=n,r.tag){case 0:case 11:case 15:Hs(8,r,r.return),_h(r);break;case 22:o=r.stateNode,o._visibility&2&&(o._visibility&=-3,_h(r));break;default:_h(r)}n=n.sibling}}function l0(n,r){for(;qt!==null;){var o=qt;switch(o.tag){case 0:case 11:case 15:Hs(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Ll(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,qt=u;else e:for(o=n;qt!==null;){u=qt;var f=u.sibling,m=u.return;if(Jv(u),u===o){qt=null;break e}if(f!==null){f.return=m,qt=f;break e}qt=m}}}var JR={getCacheForType:function(n){var r=rn(Vt),o=r.data.get(n);return o===void 0&&(o=n(),r.data.set(n,o)),o}},e1=typeof WeakMap=="function"?WeakMap:Map,Ze=0,ot=null,ke=null,Be=0,Je=0,On=null,Ys=!1,_o=!1,Bm=!1,fs=0,Et=0,Qs=0,fa=0,Fm=0,Qn=0,yo=0,nu=null,En=null,qm=!1,Hm=0,yh=1/0,vh=null,Ws=null,$t=0,Xs=null,vo=null,Eo=0,Gm=0,Km=null,u0=null,iu=0,Ym=null;function xn(){if((Ze&2)!==0&&Be!==0)return Be&-Be;if(V.T!==null){var n=ao;return n!==0?n:ep()}return Os()}function c0(){Qn===0&&(Qn=(Be&536870912)===0||Ke?fl():536870912);var n=Yn.current;return n!==null&&(n.flags|=32),Qn}function Mn(n,r,o){(n===ot&&(Je===2||Je===9)||n.cancelPendingCommit!==null)&&(To(n,0),$s(n,Be,Qn,!1)),Hi(n,o),((Ze&2)===0||n!==ot)&&(n===ot&&((Ze&2)===0&&(fa|=o),Et===4&&$s(n,Be,Qn,!1)),Ni(n))}function h0(n,r,o){if((Ze&6)!==0)throw Error(s(327));var u=!o&&(r&124)===0&&(r&n.expiredLanes)===0||Ur(n,r),f=u?i1(n,r):Xm(n,r,!0),m=u;do{if(f===0){_o&&!u&&$s(n,r,0,!1);break}else{if(o=n.current.alternate,m&&!t1(o)){f=Xm(n,r,!1),m=!1;continue}if(f===2){if(m=r,n.errorRecoveryDisabledLanes&m)var E=0;else E=n.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){r=E;e:{var S=n;f=nu;var I=S.current.memoizedState.isDehydrated;if(I&&(To(S,E).flags|=256),E=Xm(S,E,!1),E!==2){if(Bm&&!I){S.errorRecoveryDisabledLanes|=m,fa|=m,f=4;break e}m=En,En=f,m!==null&&(En===null?En=m:En.push.apply(En,m))}f=E}if(m=!1,f!==2)continue}}if(f===1){To(n,0),$s(n,r,0,!0);break}e:{switch(u=n,m=f,m){case 0:case 1:throw Error(s(345));case 4:if((r&4194048)!==r)break;case 6:$s(u,r,Qn,!Ys);break e;case 2:En=null;break;case 3:case 5:break;default:throw Error(s(329))}if((r&62914560)===r&&(f=Hm+300-Ln(),10<f)){if($s(u,r,Qn,!Ys),La(u,0,!0)!==0)break e;u.timeoutHandle=j0(f0.bind(null,u,o,En,vh,qm,r,Qn,fa,yo,Ys,m,2,-0,0),f);break e}f0(u,o,En,vh,qm,r,Qn,fa,yo,Ys,m,0,-0,0)}}break}while(!0);Ni(n)}function f0(n,r,o,u,f,m,E,S,I,j,K,Z,F,q){if(n.timeoutHandle=-1,Z=r.subtreeFlags,(Z&8192||(Z&16785408)===16785408)&&(cu={stylesheets:null,count:0,unsuspend:V1},r0(r),Z=U1(),Z!==null)){n.cancelPendingCommit=Z(v0.bind(null,n,r,m,o,u,f,E,S,I,K,1,F,q)),$s(n,m,E,!j);return}v0(n,r,m,o,u,f,E,S,I)}function t1(n){for(var r=n;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var f=o[u],m=f.getSnapshot;f=f.value;try{if(!In(m(),f))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function $s(n,r,o,u){r&=~Fm,r&=~fa,n.suspendedLanes|=r,n.pingedLanes&=~r,u&&(n.warmLanes|=r),u=n.expirationTimes;for(var f=r;0<f;){var m=31-sn(f),E=1<<m;u[m]=-1,f&=~E}o!==0&&mi(n,o,r)}function Eh(){return(Ze&6)===0?(su(0),!1):!0}function Qm(){if(ke!==null){if(Je===0)var n=ke.return;else n=ke,ss=aa=null,hm(n),fo=null,Ql=0,n=ke;for(;n!==null;)Gv(n.alternate,n),n=n.return;ke=null}}function To(n,r){var o=n.timeoutHandle;o!==-1&&(n.timeoutHandle=-1,v1(o)),o=n.cancelPendingCommit,o!==null&&(n.cancelPendingCommit=null,o()),Qm(),ot=n,ke=o=ts(n.current,null),Be=r,Je=0,On=null,Ys=!1,_o=Ur(n,r),Bm=!1,yo=Qn=Fm=fa=Qs=Et=0,En=nu=null,qm=!1,(r&8)!==0&&(r|=r&32);var u=n.entangledLanes;if(u!==0)for(n=n.entanglements,u&=r;0<u;){var f=31-sn(u),m=1<<f;r|=n[f],u&=~m}return fs=r,Fc(),o}function d0(n,r){De=null,V.H=oh,r===zl||r===$c?(r=Dy(),Je=3):r===Iy?(r=Dy(),Je=4):Je=r===Ov?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,On=r,ke===null&&(Et=1,fh(n,qn(r,n.current)))}function m0(){var n=V.H;return V.H=oh,n===null?oh:n}function p0(){var n=V.A;return V.A=JR,n}function Wm(){Et=4,Ys||(Be&4194048)!==Be&&Yn.current!==null||(_o=!0),(Qs&134217727)===0&&(fa&134217727)===0||ot===null||$s(ot,Be,Qn,!1)}function Xm(n,r,o){var u=Ze;Ze|=2;var f=m0(),m=p0();(ot!==n||Be!==r)&&(vh=null,To(n,r)),r=!1;var E=Et;e:do try{if(Je!==0&&ke!==null){var S=ke,I=On;switch(Je){case 8:Qm(),E=6;break e;case 3:case 2:case 9:case 6:Yn.current===null&&(r=!0);var j=Je;if(Je=0,On=null,So(n,S,I,j),o&&_o){E=0;break e}break;default:j=Je,Je=0,On=null,So(n,S,I,j)}}n1(),E=Et;break}catch(K){d0(n,K)}while(!0);return r&&n.shellSuspendCounter++,ss=aa=null,Ze=u,V.H=f,V.A=m,ke===null&&(ot=null,Be=0,Fc()),E}function n1(){for(;ke!==null;)g0(ke)}function i1(n,r){var o=Ze;Ze|=2;var u=m0(),f=p0();ot!==n||Be!==r?(vh=null,yh=Ln()+500,To(n,r)):_o=Ur(n,r);e:do try{if(Je!==0&&ke!==null){r=ke;var m=On;t:switch(Je){case 1:Je=0,On=null,So(n,r,m,1);break;case 2:case 9:if(Cy(m)){Je=0,On=null,_0(r);break}r=function(){Je!==2&&Je!==9||ot!==n||(Je=7),Ni(n)},m.then(r,r);break e;case 3:Je=7;break e;case 4:Je=5;break e;case 7:Cy(m)?(Je=0,On=null,_0(r)):(Je=0,On=null,So(n,r,m,7));break;case 5:var E=null;switch(ke.tag){case 26:E=ke.memoizedState;case 5:case 27:var S=ke;if(!E||Z0(E)){Je=0,On=null;var I=S.sibling;if(I!==null)ke=I;else{var j=S.return;j!==null?(ke=j,Th(j)):ke=null}break t}}Je=0,On=null,So(n,r,m,5);break;case 6:Je=0,On=null,So(n,r,m,6);break;case 8:Qm(),Et=6;break e;default:throw Error(s(462))}}s1();break}catch(K){d0(n,K)}while(!0);return ss=aa=null,V.H=u,V.A=f,Ze=o,ke!==null?0:(ot=null,Be=0,Fc(),Et)}function s1(){for(;ke!==null&&!ll();)g0(ke)}function g0(n){var r=qv(n.alternate,n,fs);n.memoizedProps=n.pendingProps,r===null?Th(n):ke=r}function _0(n){var r=n,o=r.alternate;switch(r.tag){case 15:case 0:r=Lv(o,r,r.pendingProps,r.type,void 0,Be);break;case 11:r=Lv(o,r,r.pendingProps,r.type.render,r.ref,Be);break;case 5:hm(r);default:Gv(o,r),r=ke=yy(r,fs),r=qv(o,r,fs)}n.memoizedProps=n.pendingProps,r===null?Th(n):ke=r}function So(n,r,o,u){ss=aa=null,hm(r),fo=null,Ql=0;var f=r.return;try{if(YR(n,f,r,o,Be)){Et=1,fh(n,qn(o,n.current)),ke=null;return}}catch(m){if(f!==null)throw ke=f,m;Et=1,fh(n,qn(o,n.current)),ke=null;return}r.flags&32768?(Ke||u===1?n=!0:_o||(Be&536870912)!==0?n=!1:(Ys=n=!0,(u===2||u===9||u===3||u===6)&&(u=Yn.current,u!==null&&u.tag===13&&(u.flags|=16384))),y0(r,n)):Th(r)}function Th(n){var r=n;do{if((r.flags&32768)!==0){y0(r,Ys);return}n=r.return;var o=WR(r.alternate,r,fs);if(o!==null){ke=o;return}if(r=r.sibling,r!==null){ke=r;return}ke=r=n}while(r!==null);Et===0&&(Et=5)}function y0(n,r){do{var o=XR(n.alternate,n);if(o!==null){o.flags&=32767,ke=o;return}if(o=n.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(n=n.sibling,n!==null)){ke=n;return}ke=n=o}while(n!==null);Et=6,ke=null}function v0(n,r,o,u,f,m,E,S,I){n.cancelPendingCommit=null;do Sh();while($t!==0);if((Ze&6)!==0)throw Error(s(327));if(r!==null){if(r===n.current)throw Error(s(177));if(m=r.lanes|r.childLanes,m|=jd,ml(n,o,m,E,S,I),n===ot&&(ke=ot=null,Be=0),vo=r,Xs=n,Eo=o,Gm=m,Km=f,u0=u,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,l1(kr,function(){return w0(),null})):(n.callbackNode=null,n.callbackPriority=0),u=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||u){u=V.T,V.T=null,f=Y.p,Y.p=2,E=Ze,Ze|=4;try{$R(n,r,o)}finally{Ze=E,Y.p=f,V.T=u}}$t=1,E0(),T0(),S0()}}function E0(){if($t===1){$t=0;var n=Xs,r=vo,o=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||o){o=V.T,V.T=null;var u=Y.p;Y.p=2;var f=Ze;Ze|=4;try{n0(r,n);var m=lp,E=ly(n.containerInfo),S=m.focusedElem,I=m.selectionRange;if(E!==S&&S&&S.ownerDocument&&oy(S.ownerDocument.documentElement,S)){if(I!==null&&Pd(S)){var j=I.start,K=I.end;if(K===void 0&&(K=j),"selectionStart"in S)S.selectionStart=j,S.selectionEnd=Math.min(K,S.value.length);else{var Z=S.ownerDocument||document,F=Z&&Z.defaultView||window;if(F.getSelection){var q=F.getSelection(),Ae=S.textContent.length,ve=Math.min(I.start,Ae),it=I.end===void 0?ve:Math.min(I.end,Ae);!q.extend&&ve>it&&(E=it,it=ve,ve=E);var L=ay(S,ve),O=ay(S,it);if(L&&O&&(q.rangeCount!==1||q.anchorNode!==L.node||q.anchorOffset!==L.offset||q.focusNode!==O.node||q.focusOffset!==O.offset)){var z=Z.createRange();z.setStart(L.node,L.offset),q.removeAllRanges(),ve>it?(q.addRange(z),q.extend(O.node,O.offset)):(z.setEnd(O.node,O.offset),q.addRange(z))}}}}for(Z=[],q=S;q=q.parentNode;)q.nodeType===1&&Z.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<Z.length;S++){var Q=Z[S];Q.element.scrollLeft=Q.left,Q.element.scrollTop=Q.top}}kh=!!op,lp=op=null}finally{Ze=f,Y.p=u,V.T=o}}n.current=r,$t=2}}function T0(){if($t===2){$t=0;var n=Xs,r=vo,o=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||o){o=V.T,V.T=null;var u=Y.p;Y.p=2;var f=Ze;Ze|=4;try{Zv(n,r.alternate,r)}finally{Ze=f,Y.p=u,V.T=o}}$t=3}}function S0(){if($t===4||$t===3){$t=0,_c();var n=Xs,r=vo,o=Eo,u=u0;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?$t=5:($t=0,vo=Xs=null,A0(n,n.pendingLanes));var f=n.pendingLanes;if(f===0&&(Ws=null),Ua(o),r=r.stateNode,$e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(yt,r,void 0,(r.current.flags&128)===128)}catch{}if(u!==null){r=V.T,f=Y.p,Y.p=2,V.T=null;try{for(var m=n.onRecoverableError,E=0;E<u.length;E++){var S=u[E];m(S.value,{componentStack:S.stack})}}finally{V.T=r,Y.p=f}}(Eo&3)!==0&&Sh(),Ni(n),f=n.pendingLanes,(o&4194090)!==0&&(f&42)!==0?n===Ym?iu++:(iu=0,Ym=n):iu=0,su(0)}}function A0(n,r){(n.pooledCacheLanes&=r)===0&&(r=n.pooledCache,r!=null&&(n.pooledCache=null,Ll(r)))}function Sh(n){return E0(),T0(),S0(),w0()}function w0(){if($t!==5)return!1;var n=Xs,r=Gm;Gm=0;var o=Ua(Eo),u=V.T,f=Y.p;try{Y.p=32>o?32:o,V.T=null,o=Km,Km=null;var m=Xs,E=Eo;if($t=0,vo=Xs=null,Eo=0,(Ze&6)!==0)throw Error(s(331));var S=Ze;if(Ze|=4,o0(m.current),s0(m,m.current,E,o),Ze=S,su(0,!1),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(yt,m)}catch{}return!0}finally{Y.p=f,V.T=u,A0(n,r)}}function b0(n,r,o){r=qn(o,r),r=bm(n.stateNode,r,2),n=js(n,r,2),n!==null&&(Hi(n,2),Ni(n))}function rt(n,r,o){if(n.tag===3)b0(n,n,o);else for(;r!==null;){if(r.tag===3){b0(r,n,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Ws===null||!Ws.has(u))){n=qn(o,n),o=Nv(2),u=js(r,o,2),u!==null&&(Dv(o,u,r,n),Hi(u,2),Ni(u));break}}r=r.return}}function $m(n,r,o){var u=n.pingCache;if(u===null){u=n.pingCache=new e1;var f=new Set;u.set(r,f)}else f=u.get(r),f===void 0&&(f=new Set,u.set(r,f));f.has(o)||(Bm=!0,f.add(o),n=r1.bind(null,n,r,o),r.then(n,n))}function r1(n,r,o){var u=n.pingCache;u!==null&&u.delete(r),n.pingedLanes|=n.suspendedLanes&o,n.warmLanes&=~o,ot===n&&(Be&o)===o&&(Et===4||Et===3&&(Be&62914560)===Be&&300>Ln()-Hm?(Ze&2)===0&&To(n,0):Fm|=o,yo===Be&&(yo=0)),Ni(n)}function R0(n,r){r===0&&(r=dl()),n=no(n,r),n!==null&&(Hi(n,r),Ni(n))}function a1(n){var r=n.memoizedState,o=0;r!==null&&(o=r.retryLane),R0(n,o)}function o1(n,r){var o=0;switch(n.tag){case 13:var u=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(s(314))}u!==null&&u.delete(r),R0(n,o)}function l1(n,r){return xr(n,r)}var Ah=null,Ao=null,Zm=!1,wh=!1,Jm=!1,da=0;function Ni(n){n!==Ao&&n.next===null&&(Ao===null?Ah=Ao=n:Ao=Ao.next=n),wh=!0,Zm||(Zm=!0,c1())}function su(n,r){if(!Jm&&wh){Jm=!0;do for(var o=!1,u=Ah;u!==null;){if(n!==0){var f=u.pendingLanes;if(f===0)var m=0;else{var E=u.suspendedLanes,S=u.pingedLanes;m=(1<<31-sn(42|n)+1)-1,m&=f&~(E&~S),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,D0(u,m))}else m=Be,m=La(u,u===ot?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||Ur(u,m)||(o=!0,D0(u,m));u=u.next}while(o);Jm=!1}}function u1(){I0()}function I0(){wh=Zm=!1;var n=0;da!==0&&(y1()&&(n=da),da=0);for(var r=Ln(),o=null,u=Ah;u!==null;){var f=u.next,m=C0(u,r);m===0?(u.next=null,o===null?Ah=f:o.next=f,f===null&&(Ao=o)):(o=u,(n!==0||(m&3)!==0)&&(wh=!0)),u=f}su(n)}function C0(n,r){for(var o=n.suspendedLanes,u=n.pingedLanes,f=n.expirationTimes,m=n.pendingLanes&-62914561;0<m;){var E=31-sn(m),S=1<<E,I=f[E];I===-1?((S&o)===0||(S&u)!==0)&&(f[E]=hl(S,r)):I<=r&&(n.expiredLanes|=S),m&=~S}if(r=ot,o=Be,o=La(n,n===r?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u=n.callbackNode,o===0||n===r&&(Je===2||Je===9)||n.cancelPendingCommit!==null)return u!==null&&u!==null&&Mr(u),n.callbackNode=null,n.callbackPriority=0;if((o&3)===0||Ur(n,o)){if(r=o&-o,r===n.callbackPriority)return r;switch(u!==null&&Mr(u),Ua(o)){case 2:case 8:o=Pa;break;case 32:o=kr;break;case 268435456:o=Va;break;default:o=kr}return u=N0.bind(null,n),o=xr(o,u),n.callbackPriority=r,n.callbackNode=o,r}return u!==null&&u!==null&&Mr(u),n.callbackPriority=2,n.callbackNode=null,2}function N0(n,r){if($t!==0&&$t!==5)return n.callbackNode=null,n.callbackPriority=0,null;var o=n.callbackNode;if(Sh()&&n.callbackNode!==o)return null;var u=Be;return u=La(n,n===ot?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u===0?null:(h0(n,u,r),C0(n,Ln()),n.callbackNode!=null&&n.callbackNode===o?N0.bind(null,n):null)}function D0(n,r){if(Sh())return null;h0(n,r,!0)}function c1(){E1(function(){(Ze&6)!==0?xr(ul,u1):I0()})}function ep(){return da===0&&(da=fl()),da}function O0(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Ha(""+n)}function x0(n,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,n.id&&o.setAttribute("form",n.id),r.parentNode.insertBefore(o,r),n=new FormData(n),o.parentNode.removeChild(o),n}function h1(n,r,o,u,f){if(r==="submit"&&o&&o.stateNode===f){var m=O0((f[Rt]||null).action),E=u.submitter;E&&(r=(r=E[Rt]||null)?O0(r.formAction):E.getAttribute("formAction"),r!==null&&(m=r,E=null));var S=new Ga("action","action",null,u,f);n.push({event:S,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(da!==0){var I=E?x0(f,E):new FormData(f);Em(o,{pending:!0,data:I,method:f.method,action:m},null,I)}}else typeof m=="function"&&(S.preventDefault(),I=E?x0(f,E):new FormData(f),Em(o,{pending:!0,data:I,method:f.method,action:m},m,I))},currentTarget:f}]})}}for(var tp=0;tp<zd.length;tp++){var np=zd[tp],f1=np.toLowerCase(),d1=np[0].toUpperCase()+np.slice(1);si(f1,"on"+d1)}si(hy,"onAnimationEnd"),si(fy,"onAnimationIteration"),si(dy,"onAnimationStart"),si("dblclick","onDoubleClick"),si("focusin","onFocus"),si("focusout","onBlur"),si(DR,"onTransitionRun"),si(OR,"onTransitionStart"),si(xR,"onTransitionCancel"),si(my,"onTransitionEnd"),Ki("onMouseEnter",["mouseout","mouseover"]),Ki("onMouseLeave",["mouseout","mouseover"]),Ki("onPointerEnter",["pointerout","pointerover"]),Ki("onPointerLeave",["pointerout","pointerover"]),ni("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ni("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ni("onBeforeInput",["compositionend","keypress","textInput","paste"]),ni("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ni("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ni("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ru="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),m1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ru));function M0(n,r){r=(r&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],f=u.event;u=u.listeners;e:{var m=void 0;if(r)for(var E=u.length-1;0<=E;E--){var S=u[E],I=S.instance,j=S.currentTarget;if(S=S.listener,I!==m&&f.isPropagationStopped())break e;m=S,f.currentTarget=j;try{m(f)}catch(K){hh(K)}f.currentTarget=null,m=I}else for(E=0;E<u.length;E++){if(S=u[E],I=S.instance,j=S.currentTarget,S=S.listener,I!==m&&f.isPropagationStopped())break e;m=S,f.currentTarget=j;try{m(f)}catch(K){hh(K)}f.currentTarget=null,m=I}}}}function Pe(n,r){var o=r[gl];o===void 0&&(o=r[gl]=new Set);var u=n+"__bubble";o.has(u)||(k0(r,n,2,!1),o.add(u))}function ip(n,r,o){var u=0;r&&(u|=4),k0(o,n,u,r)}var bh="_reactListening"+Math.random().toString(36).slice(2);function sp(n){if(!n[bh]){n[bh]=!0,_l.forEach(function(o){o!=="selectionchange"&&(m1.has(o)||ip(o,!1,n),ip(o,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[bh]||(r[bh]=!0,ip("selectionchange",!1,r))}}function k0(n,r,o,u){switch(sE(r)){case 2:var f=B1;break;case 8:f=F1;break;default:f=yp}o=f.bind(null,r,o,n),f=void 0,!Bn||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),u?f!==void 0?n.addEventListener(r,o,{capture:!0,passive:f}):n.addEventListener(r,o,!0):f!==void 0?n.addEventListener(r,o,{passive:f}):n.addEventListener(r,o,!1)}function rp(n,r,o,u,f){var m=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var S=u.stateNode.containerInfo;if(S===f)break;if(E===4)for(E=u.return;E!==null;){var I=E.tag;if((I===3||I===4)&&E.stateNode.containerInfo===f)return;E=E.return}for(;S!==null;){if(E=Gi(S),E===null)return;if(I=E.tag,I===5||I===6||I===26||I===27){u=m=E;continue e}S=S.parentNode}}u=u.return}Ic(function(){var j=m,K=jn(o),Z=[];e:{var F=py.get(n);if(F!==void 0){var q=Ga,Ae=n;switch(n){case"keypress":if(Ei(o)===0)break e;case"keydown":case"keyup":q=$a;break;case"focusin":Ae="focus",q=Qa;break;case"focusout":Ae="blur",q=Qa;break;case"beforeblur":case"afterblur":q=Qa;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=Fn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=Od;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=Pc;break;case hy:case fy:case dy:q=Wa;break;case my:q=Lc;break;case"scroll":case"scrollend":q=Cc;break;case"wheel":q=Za;break;case"copy":case"cut":case"paste":q=Xa;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=Nl;break;case"toggle":case"beforetoggle":q=zc}var ve=(r&4)!==0,it=!ve&&(n==="scroll"||n==="scrollend"),L=ve?F!==null?F+"Capture":null:F;ve=[];for(var O=j,z;O!==null;){var Q=O;if(z=Q.stateNode,Q=Q.tag,Q!==5&&Q!==26&&Q!==27||z===null||L===null||(Q=Kr(O,L),Q!=null&&ve.push(au(O,Q,z))),it)break;O=O.return}0<ve.length&&(F=new q(F,Ae,null,o,K),Z.push({event:F,listeners:ve}))}}if((r&7)===0){e:{if(F=n==="mouseover"||n==="pointerover",q=n==="mouseout"||n==="pointerout",F&&o!==Wi&&(Ae=o.relatedTarget||o.fromElement)&&(Gi(Ae)||Ae[Un]))break e;if((q||F)&&(F=K.window===K?K:(F=K.ownerDocument)?F.defaultView||F.parentWindow:window,q?(Ae=o.relatedTarget||o.toElement,q=j,Ae=Ae?Gi(Ae):null,Ae!==null&&(it=l(Ae),ve=Ae.tag,Ae!==it||ve!==5&&ve!==27&&ve!==6)&&(Ae=null)):(q=null,Ae=j),q!==Ae)){if(ve=Fn,Q="onMouseLeave",L="onMouseEnter",O="mouse",(n==="pointerout"||n==="pointerover")&&(ve=Nl,Q="onPointerLeave",L="onPointerEnter",O="pointer"),it=q==null?F:gi(q),z=Ae==null?F:gi(Ae),F=new ve(Q,O+"leave",q,o,K),F.target=it,F.relatedTarget=z,Q=null,Gi(K)===j&&(ve=new ve(L,O+"enter",Ae,o,K),ve.target=z,ve.relatedTarget=it,Q=ve),it=Q,q&&Ae)t:{for(ve=q,L=Ae,O=0,z=ve;z;z=wo(z))O++;for(z=0,Q=L;Q;Q=wo(Q))z++;for(;0<O-z;)ve=wo(ve),O--;for(;0<z-O;)L=wo(L),z--;for(;O--;){if(ve===L||L!==null&&ve===L.alternate)break t;ve=wo(ve),L=wo(L)}ve=null}else ve=null;q!==null&&P0(Z,F,q,ve,!1),Ae!==null&&it!==null&&P0(Z,it,Ae,ve,!0)}}e:{if(F=j?gi(j):window,q=F.nodeName&&F.nodeName.toLowerCase(),q==="select"||q==="input"&&F.type==="file")var ce=ey;else if(Pt(F))if(ty)ce=IR;else{ce=bR;var Me=wR}else q=F.nodeName,!q||q.toLowerCase()!=="input"||F.type!=="checkbox"&&F.type!=="radio"?j&&Sl(j.elementType)&&(ce=ey):ce=RR;if(ce&&(ce=ce(n,j))){es(Z,ce,o,K);break e}Me&&Me(n,F,j),n==="focusout"&&j&&F.type==="number"&&j.memoizedProps.value!=null&&Ps(F,"number",F.value)}switch(Me=j?gi(j):window,n){case"focusin":(Pt(Me)||Me.contentEditable==="true")&&(Ja=Me,Vd=j,xl=null);break;case"focusout":xl=Vd=Ja=null;break;case"mousedown":Ld=!0;break;case"contextmenu":case"mouseup":case"dragend":Ld=!1,uy(Z,o,K);break;case"selectionchange":if(NR)break;case"keydown":case"keyup":uy(Z,o,K)}var pe;if(Ai)e:{switch(n){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else ze?H(n,o)&&(Ee="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(Ee="onCompositionStart");Ee&&(v&&o.locale!=="ko"&&(ze||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&ze&&(pe=wl()):(vi=K,Vs="value"in vi?vi.value:vi.textContent,ze=!0)),Me=Rh(j,Ee),0<Me.length&&(Ee=new Il(Ee,n,null,o,K),Z.push({event:Ee,listeners:Me}),pe?Ee.data=pe:(pe=se(o),pe!==null&&(Ee.data=pe)))),(pe=_?kt(n,o):je(n,o))&&(Ee=Rh(j,"onBeforeInput"),0<Ee.length&&(Me=new Il("onBeforeInput","beforeinput",null,o,K),Z.push({event:Me,listeners:Ee}),Me.data=pe)),h1(Z,n,j,o,K)}M0(Z,r)})}function au(n,r,o){return{instance:n,listener:r,currentTarget:o}}function Rh(n,r){for(var o=r+"Capture",u=[];n!==null;){var f=n,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=Kr(n,o),f!=null&&u.unshift(au(n,f,m)),f=Kr(n,r),f!=null&&u.push(au(n,f,m))),n.tag===3)return u;n=n.return}return[]}function wo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function P0(n,r,o,u,f){for(var m=r._reactName,E=[];o!==null&&o!==u;){var S=o,I=S.alternate,j=S.stateNode;if(S=S.tag,I!==null&&I===u)break;S!==5&&S!==26&&S!==27||j===null||(I=j,f?(j=Kr(o,m),j!=null&&E.unshift(au(o,j,I))):f||(j=Kr(o,m),j!=null&&E.push(au(o,j,I)))),o=o.return}E.length!==0&&n.push({event:r,listeners:E})}var p1=/\r\n?/g,g1=/\u0000|\uFFFD/g;function V0(n){return(typeof n=="string"?n:""+n).replace(p1,`
`).replace(g1,"")}function L0(n,r){return r=V0(r),V0(n)===r}function Ih(){}function nt(n,r,o,u,f,m){switch(o){case"children":typeof u=="string"?r==="body"||r==="textarea"&&u===""||zn(n,u):(typeof u=="number"||typeof u=="bigint")&&r!=="body"&&zn(n,""+u);break;case"className":_i(n,"class",u);break;case"tabIndex":_i(n,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":_i(n,o,u);break;case"style":Tl(n,u,m);break;case"data":if(r!=="object"){_i(n,"data",u);break}case"src":case"href":if(u===""&&(r!=="a"||o!=="href")){n.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=Ha(""+u),n.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){n.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(r!=="input"&&nt(n,r,"name",f.name,f,null),nt(n,r,"formEncType",f.formEncType,f,null),nt(n,r,"formMethod",f.formMethod,f,null),nt(n,r,"formTarget",f.formTarget,f,null)):(nt(n,r,"encType",f.encType,f,null),nt(n,r,"method",f.method,f,null),nt(n,r,"target",f.target,f,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=Ha(""+u),n.setAttribute(o,u);break;case"onClick":u!=null&&(n.onclick=Ih);break;case"onScroll":u!=null&&Pe("scroll",n);break;case"onScrollEnd":u!=null&&Pe("scrollend",n);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=o}}break;case"multiple":n.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":n.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){n.removeAttribute("xlink:href");break}o=Ha(""+u),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""+u):n.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""):n.removeAttribute(o);break;case"capture":case"download":u===!0?n.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,u):n.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?n.setAttribute(o,u):n.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?n.removeAttribute(o):n.setAttribute(o,u);break;case"popover":Pe("beforetoggle",n),Pe("toggle",n),ks(n,"popover",u);break;case"xlinkActuate":Qt(n,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Qt(n,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Qt(n,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Qt(n,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Qt(n,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Qt(n,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Qt(n,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Qt(n,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Qt(n,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":ks(n,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Nd.get(o)||o,ks(n,o,u))}}function ap(n,r,o,u,f,m){switch(o){case"style":Tl(n,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(s(61));if(o=u.__html,o!=null){if(f.children!=null)throw Error(s(60));n.innerHTML=o}}break;case"children":typeof u=="string"?zn(n,u):(typeof u=="number"||typeof u=="bigint")&&zn(n,""+u);break;case"onScroll":u!=null&&Pe("scroll",n);break;case"onScrollEnd":u!=null&&Pe("scrollend",n);break;case"onClick":u!=null&&(n.onclick=Ih);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!za.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),r=o.slice(2,f?o.length-7:void 0),m=n[Rt]||null,m=m!=null?m[o]:null,typeof m=="function"&&n.removeEventListener(r,m,f),typeof u=="function")){typeof m!="function"&&m!==null&&(o in n?n[o]=null:n.hasAttribute(o)&&n.removeAttribute(o)),n.addEventListener(r,u,f);break e}o in n?n[o]=u:u===!0?n.setAttribute(o,""):ks(n,o,u)}}}function Zt(n,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Pe("error",n),Pe("load",n);var u=!1,f=!1,m;for(m in o)if(o.hasOwnProperty(m)){var E=o[m];if(E!=null)switch(m){case"src":u=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:nt(n,r,m,E,o,null)}}f&&nt(n,r,"srcSet",o.srcSet,o,null),u&&nt(n,r,"src",o.src,o,null);return;case"input":Pe("invalid",n);var S=m=E=f=null,I=null,j=null;for(u in o)if(o.hasOwnProperty(u)){var K=o[u];if(K!=null)switch(u){case"name":f=K;break;case"type":E=K;break;case"checked":I=K;break;case"defaultChecked":j=K;break;case"value":m=K;break;case"defaultValue":S=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(s(137,r));break;default:nt(n,r,u,K,o,null)}}qr(n,m,S,I,j,E,f,!1),qa(n);return;case"select":Pe("invalid",n),u=E=m=null;for(f in o)if(o.hasOwnProperty(f)&&(S=o[f],S!=null))switch(f){case"value":m=S;break;case"defaultValue":E=S;break;case"multiple":u=S;default:nt(n,r,f,S,o,null)}r=m,o=E,n.multiple=!!u,r!=null?Qi(n,!!u,r,!1):o!=null&&Qi(n,!!u,o,!0);return;case"textarea":Pe("invalid",n),m=f=u=null;for(E in o)if(o.hasOwnProperty(E)&&(S=o[E],S!=null))switch(E){case"value":u=S;break;case"defaultValue":f=S;break;case"children":m=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(s(91));break;default:nt(n,r,E,S,o,null)}Hr(n,u,f,m),qa(n);return;case"option":for(I in o)if(o.hasOwnProperty(I)&&(u=o[I],u!=null))switch(I){case"selected":n.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:nt(n,r,I,u,o,null)}return;case"dialog":Pe("beforetoggle",n),Pe("toggle",n),Pe("cancel",n),Pe("close",n);break;case"iframe":case"object":Pe("load",n);break;case"video":case"audio":for(u=0;u<ru.length;u++)Pe(ru[u],n);break;case"image":Pe("error",n),Pe("load",n);break;case"details":Pe("toggle",n);break;case"embed":case"source":case"link":Pe("error",n),Pe("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in o)if(o.hasOwnProperty(j)&&(u=o[j],u!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,r));default:nt(n,r,j,u,o,null)}return;default:if(Sl(r)){for(K in o)o.hasOwnProperty(K)&&(u=o[K],u!==void 0&&ap(n,r,K,u,o,void 0));return}}for(S in o)o.hasOwnProperty(S)&&(u=o[S],u!=null&&nt(n,r,S,u,o,null))}function _1(n,r,o,u){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,E=null,S=null,I=null,j=null,K=null;for(q in o){var Z=o[q];if(o.hasOwnProperty(q)&&Z!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":I=Z;default:u.hasOwnProperty(q)||nt(n,r,q,null,u,Z)}}for(var F in u){var q=u[F];if(Z=o[F],u.hasOwnProperty(F)&&(q!=null||Z!=null))switch(F){case"type":m=q;break;case"name":f=q;break;case"checked":j=q;break;case"defaultChecked":K=q;break;case"value":E=q;break;case"defaultValue":S=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,r));break;default:q!==Z&&nt(n,r,F,q,u,Z)}}Rn(n,E,S,I,j,K,m,f);return;case"select":q=E=S=F=null;for(m in o)if(I=o[m],o.hasOwnProperty(m)&&I!=null)switch(m){case"value":break;case"multiple":q=I;default:u.hasOwnProperty(m)||nt(n,r,m,null,u,I)}for(f in u)if(m=u[f],I=o[f],u.hasOwnProperty(f)&&(m!=null||I!=null))switch(f){case"value":F=m;break;case"defaultValue":S=m;break;case"multiple":E=m;default:m!==I&&nt(n,r,f,m,u,I)}r=S,o=E,u=q,F!=null?Qi(n,!!o,F,!1):!!u!=!!o&&(r!=null?Qi(n,!!o,r,!0):Qi(n,!!o,o?[]:"",!1));return;case"textarea":q=F=null;for(S in o)if(f=o[S],o.hasOwnProperty(S)&&f!=null&&!u.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:nt(n,r,S,null,u,f)}for(E in u)if(f=u[E],m=o[E],u.hasOwnProperty(E)&&(f!=null||m!=null))switch(E){case"value":F=f;break;case"defaultValue":q=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==m&&nt(n,r,E,f,u,m)}et(n,F,q);return;case"option":for(var Ae in o)if(F=o[Ae],o.hasOwnProperty(Ae)&&F!=null&&!u.hasOwnProperty(Ae))switch(Ae){case"selected":n.selected=!1;break;default:nt(n,r,Ae,null,u,F)}for(I in u)if(F=u[I],q=o[I],u.hasOwnProperty(I)&&F!==q&&(F!=null||q!=null))switch(I){case"selected":n.selected=F&&typeof F!="function"&&typeof F!="symbol";break;default:nt(n,r,I,F,u,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ve in o)F=o[ve],o.hasOwnProperty(ve)&&F!=null&&!u.hasOwnProperty(ve)&&nt(n,r,ve,null,u,F);for(j in u)if(F=u[j],q=o[j],u.hasOwnProperty(j)&&F!==q&&(F!=null||q!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(137,r));break;default:nt(n,r,j,F,u,q)}return;default:if(Sl(r)){for(var it in o)F=o[it],o.hasOwnProperty(it)&&F!==void 0&&!u.hasOwnProperty(it)&&ap(n,r,it,void 0,u,F);for(K in u)F=u[K],q=o[K],!u.hasOwnProperty(K)||F===q||F===void 0&&q===void 0||ap(n,r,K,F,u,q);return}}for(var L in o)F=o[L],o.hasOwnProperty(L)&&F!=null&&!u.hasOwnProperty(L)&&nt(n,r,L,null,u,F);for(Z in u)F=u[Z],q=o[Z],!u.hasOwnProperty(Z)||F===q||F==null&&q==null||nt(n,r,Z,F,u,q)}var op=null,lp=null;function Ch(n){return n.nodeType===9?n:n.ownerDocument}function U0(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function z0(n,r){if(n===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&r==="foreignObject"?0:n}function up(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var cp=null;function y1(){var n=window.event;return n&&n.type==="popstate"?n===cp?!1:(cp=n,!0):(cp=null,!1)}var j0=typeof setTimeout=="function"?setTimeout:void 0,v1=typeof clearTimeout=="function"?clearTimeout:void 0,B0=typeof Promise=="function"?Promise:void 0,E1=typeof queueMicrotask=="function"?queueMicrotask:typeof B0<"u"?function(n){return B0.resolve(null).then(n).catch(T1)}:j0;function T1(n){setTimeout(function(){throw n})}function Zs(n){return n==="head"}function F0(n,r){var o=r,u=0,f=0;do{var m=o.nextSibling;if(n.removeChild(o),m&&m.nodeType===8)if(o=m.data,o==="/$"){if(0<u&&8>u){o=u;var E=n.ownerDocument;if(o&1&&ou(E.documentElement),o&2&&ou(E.body),o&4)for(o=E.head,ou(o),E=o.firstChild;E;){var S=E.nextSibling,I=E.nodeName;E[zr]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&E.rel.toLowerCase()==="stylesheet"||o.removeChild(E),E=S}}if(f===0){n.removeChild(m),pu(r);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:u=o.charCodeAt(0)-48;else u=0;o=m}while(o);pu(r)}function hp(n){var r=n.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":hp(o),Ms(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}n.removeChild(o)}}function S1(n,r,o,u){for(;n.nodeType===1;){var f=o;if(n.nodeName.toLowerCase()!==r.toLowerCase()){if(!u&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(u){if(!n[zr])switch(r){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(m=n.getAttribute("rel"),m==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(m!==f.rel||n.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||n.getAttribute("title")!==(f.title==null?null:f.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(m=n.getAttribute("src"),(m!==(f.src==null?null:f.src)||n.getAttribute("type")!==(f.type==null?null:f.type)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(r==="input"&&n.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&n.getAttribute("name")===m)return n}else return n;if(n=ai(n.nextSibling),n===null)break}return null}function A1(n,r,o){if(r==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!o||(n=ai(n.nextSibling),n===null))return null;return n}function fp(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState==="complete"}function w1(n,r){var o=n.ownerDocument;if(n.data!=="$?"||o.readyState==="complete")r();else{var u=function(){r(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),n._reactRetry=u}}function ai(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return n}var dp=null;function q0(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return n;r--}else o==="/$"&&r++}n=n.previousSibling}return null}function H0(n,r,o){switch(r=Ch(o),n){case"html":if(n=r.documentElement,!n)throw Error(s(452));return n;case"head":if(n=r.head,!n)throw Error(s(453));return n;case"body":if(n=r.body,!n)throw Error(s(454));return n;default:throw Error(s(451))}}function ou(n){for(var r=n.attributes;r.length;)n.removeAttributeNode(r[0]);Ms(n)}var Wn=new Map,G0=new Set;function Nh(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var ds=Y.d;Y.d={f:b1,r:R1,D:I1,C:C1,L:N1,m:D1,X:x1,S:O1,M:M1};function b1(){var n=ds.f(),r=Eh();return n||r}function R1(n){var r=pi(n);r!==null&&r.tag===5&&r.type==="form"?hv(r):ds.r(n)}var bo=typeof document>"u"?null:document;function K0(n,r,o){var u=bo;if(u&&typeof r=="string"&&r){var f=It(r);f='link[rel="'+n+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),G0.has(f)||(G0.add(f),n={rel:n,crossOrigin:o,href:r},u.querySelector(f)===null&&(r=u.createElement("link"),Zt(r,"link",n),St(r),u.head.appendChild(r)))}}function I1(n){ds.D(n),K0("dns-prefetch",n,null)}function C1(n,r){ds.C(n,r),K0("preconnect",n,r)}function N1(n,r,o){ds.L(n,r,o);var u=bo;if(u&&n&&r){var f='link[rel="preload"][as="'+It(r)+'"]';r==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+It(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+It(o.imageSizes)+'"]')):f+='[href="'+It(n)+'"]';var m=f;switch(r){case"style":m=Ro(n);break;case"script":m=Io(n)}Wn.has(m)||(n=y({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:n,as:r},o),Wn.set(m,n),u.querySelector(f)!==null||r==="style"&&u.querySelector(lu(m))||r==="script"&&u.querySelector(uu(m))||(r=u.createElement("link"),Zt(r,"link",n),St(r),u.head.appendChild(r)))}}function D1(n,r){ds.m(n,r);var o=bo;if(o&&n){var u=r&&typeof r.as=="string"?r.as:"script",f='link[rel="modulepreload"][as="'+It(u)+'"][href="'+It(n)+'"]',m=f;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Io(n)}if(!Wn.has(m)&&(n=y({rel:"modulepreload",href:n},r),Wn.set(m,n),o.querySelector(f)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(uu(m)))return}u=o.createElement("link"),Zt(u,"link",n),St(u),o.head.appendChild(u)}}}function O1(n,r,o){ds.S(n,r,o);var u=bo;if(u&&n){var f=mn(u).hoistableStyles,m=Ro(n);r=r||"default";var E=f.get(m);if(!E){var S={loading:0,preload:null};if(E=u.querySelector(lu(m)))S.loading=5;else{n=y({rel:"stylesheet",href:n,"data-precedence":r},o),(o=Wn.get(m))&&mp(n,o);var I=E=u.createElement("link");St(I),Zt(I,"link",n),I._p=new Promise(function(j,K){I.onload=j,I.onerror=K}),I.addEventListener("load",function(){S.loading|=1}),I.addEventListener("error",function(){S.loading|=2}),S.loading|=4,Dh(E,r,u)}E={type:"stylesheet",instance:E,count:1,state:S},f.set(m,E)}}}function x1(n,r){ds.X(n,r);var o=bo;if(o&&n){var u=mn(o).hoistableScripts,f=Io(n),m=u.get(f);m||(m=o.querySelector(uu(f)),m||(n=y({src:n,async:!0},r),(r=Wn.get(f))&&pp(n,r),m=o.createElement("script"),St(m),Zt(m,"link",n),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function M1(n,r){ds.M(n,r);var o=bo;if(o&&n){var u=mn(o).hoistableScripts,f=Io(n),m=u.get(f);m||(m=o.querySelector(uu(f)),m||(n=y({src:n,async:!0,type:"module"},r),(r=Wn.get(f))&&pp(n,r),m=o.createElement("script"),St(m),Zt(m,"link",n),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(f,m))}}function Y0(n,r,o,u){var f=(f=we.current)?Nh(f):null;if(!f)throw Error(s(446));switch(n){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=Ro(o.href),o=mn(f).hoistableStyles,u=o.get(r),u||(u={type:"style",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){n=Ro(o.href);var m=mn(f).hoistableStyles,E=m.get(n);if(E||(f=f.ownerDocument||f,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(n,E),(m=f.querySelector(lu(n)))&&!m._p&&(E.instance=m,E.state.loading=5),Wn.has(n)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Wn.set(n,o),m||k1(f,n,o,E.state))),r&&u===null)throw Error(s(528,""));return E}if(r&&u!==null)throw Error(s(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Io(o),o=mn(f).hoistableScripts,u=o.get(r),u||(u={type:"script",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,n))}}function Ro(n){return'href="'+It(n)+'"'}function lu(n){return'link[rel="stylesheet"]['+n+"]"}function Q0(n){return y({},n,{"data-precedence":n.precedence,precedence:null})}function k1(n,r,o,u){n.querySelector('link[rel="preload"][as="style"]['+r+"]")?u.loading=1:(r=n.createElement("link"),u.preload=r,r.addEventListener("load",function(){return u.loading|=1}),r.addEventListener("error",function(){return u.loading|=2}),Zt(r,"link",o),St(r),n.head.appendChild(r))}function Io(n){return'[src="'+It(n)+'"]'}function uu(n){return"script[async]"+n}function W0(n,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var u=n.querySelector('style[data-href~="'+It(o.href)+'"]');if(u)return r.instance=u,St(u),u;var f=y({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(n.ownerDocument||n).createElement("style"),St(u),Zt(u,"style",f),Dh(u,o.precedence,n),r.instance=u;case"stylesheet":f=Ro(o.href);var m=n.querySelector(lu(f));if(m)return r.state.loading|=4,r.instance=m,St(m),m;u=Q0(o),(f=Wn.get(f))&&mp(u,f),m=(n.ownerDocument||n).createElement("link"),St(m);var E=m;return E._p=new Promise(function(S,I){E.onload=S,E.onerror=I}),Zt(m,"link",u),r.state.loading|=4,Dh(m,o.precedence,n),r.instance=m;case"script":return m=Io(o.src),(f=n.querySelector(uu(m)))?(r.instance=f,St(f),f):(u=o,(f=Wn.get(m))&&(u=y({},o),pp(u,f)),n=n.ownerDocument||n,f=n.createElement("script"),St(f),Zt(f,"link",u),n.head.appendChild(f),r.instance=f);case"void":return null;default:throw Error(s(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(u=r.instance,r.state.loading|=4,Dh(u,o.precedence,n));return r.instance}function Dh(n,r,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=u.length?u[u.length-1]:null,m=f,E=0;E<u.length;E++){var S=u[E];if(S.dataset.precedence===r)m=S;else if(m!==f)break}m?m.parentNode.insertBefore(n,m.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(n,r.firstChild))}function mp(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.title==null&&(n.title=r.title)}function pp(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.integrity==null&&(n.integrity=r.integrity)}var Oh=null;function X0(n,r,o){if(Oh===null){var u=new Map,f=Oh=new Map;f.set(o,u)}else f=Oh,u=f.get(o),u||(u=new Map,f.set(o,u));if(u.has(n))return u;for(u.set(n,null),o=o.getElementsByTagName(n),f=0;f<o.length;f++){var m=o[f];if(!(m[zr]||m[Mt]||n==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(r)||"";E=n+E;var S=u.get(E);S?S.push(m):u.set(E,[m])}}return u}function $0(n,r,o){n=n.ownerDocument||n,n.head.insertBefore(o,r==="title"?n.querySelector("head > title"):null)}function P1(n,r,o){if(o===1||r.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return n=r.disabled,typeof r.precedence=="string"&&n==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function Z0(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}var cu=null;function V1(){}function L1(n,r,o){if(cu===null)throw Error(s(475));var u=cu;if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var f=Ro(o.href),m=n.querySelector(lu(f));if(m){n=m._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(u.count++,u=xh.bind(u),n.then(u,u)),r.state.loading|=4,r.instance=m,St(m);return}m=n.ownerDocument||n,o=Q0(o),(f=Wn.get(f))&&mp(o,f),m=m.createElement("link"),St(m);var E=m;E._p=new Promise(function(S,I){E.onload=S,E.onerror=I}),Zt(m,"link",o),r.instance=m}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(u.count++,r=xh.bind(u),n.addEventListener("load",r),n.addEventListener("error",r))}}function U1(){if(cu===null)throw Error(s(475));var n=cu;return n.stylesheets&&n.count===0&&gp(n,n.stylesheets),0<n.count?function(r){var o=setTimeout(function(){if(n.stylesheets&&gp(n,n.stylesheets),n.unsuspend){var u=n.unsuspend;n.unsuspend=null,u()}},6e4);return n.unsuspend=r,function(){n.unsuspend=null,clearTimeout(o)}}:null}function xh(){if(this.count--,this.count===0){if(this.stylesheets)gp(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Mh=null;function gp(n,r){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Mh=new Map,r.forEach(z1,n),Mh=null,xh.call(n))}function z1(n,r){if(!(r.state.loading&4)){var o=Mh.get(n);if(o)var u=o.get(null);else{o=new Map,Mh.set(n,o);for(var f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var E=f[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(o.set(E.dataset.precedence,E),u=E)}u&&o.set(null,u)}f=r.instance,E=f.getAttribute("data-precedence"),m=o.get(E)||u,m===u&&o.set(null,f),o.set(E,f),this.count++,u=xh.bind(this),f.addEventListener("load",u),f.addEventListener("error",u),m?m.parentNode.insertBefore(f,m.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(f,n.firstChild)),r.state.loading|=4}}var hu={$$typeof:he,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function j1(n,r,o,u,f,m,E,S){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qi(0),this.hiddenUpdates=qi(null),this.identifierPrefix=u,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function J0(n,r,o,u,f,m,E,S,I,j,K,Z){return n=new j1(n,r,o,E,S,I,j,Z),r=1,m===!0&&(r|=24),m=Cn(3,null,null,r),n.current=m,m.stateNode=n,r=$d(),r.refCount++,n.pooledCache=r,r.refCount++,m.memoizedState={element:u,isDehydrated:o,cache:r},tm(m),n}function eE(n){return n?(n=io,n):io}function tE(n,r,o,u,f,m){f=eE(f),u.context===null?u.context=f:u.pendingContext=f,u=zs(r),u.payload={element:o},m=m===void 0?null:m,m!==null&&(u.callback=m),o=js(n,u,r),o!==null&&(Mn(o,n,r),Bl(o,n,r))}function nE(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<r?o:r}}function _p(n,r){nE(n,r),(n=n.alternate)&&nE(n,r)}function iE(n){if(n.tag===13){var r=no(n,67108864);r!==null&&Mn(r,n,67108864),_p(n,67108864)}}var kh=!0;function B1(n,r,o,u){var f=V.T;V.T=null;var m=Y.p;try{Y.p=2,yp(n,r,o,u)}finally{Y.p=m,V.T=f}}function F1(n,r,o,u){var f=V.T;V.T=null;var m=Y.p;try{Y.p=8,yp(n,r,o,u)}finally{Y.p=m,V.T=f}}function yp(n,r,o,u){if(kh){var f=vp(u);if(f===null)rp(n,r,u,Ph,o),rE(n,u);else if(H1(f,n,r,o,u))u.stopPropagation();else if(rE(n,u),r&4&&-1<q1.indexOf(n)){for(;f!==null;){var m=pi(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=ti(m.pendingLanes);if(E!==0){var S=m;for(S.pendingLanes|=2,S.entangledLanes|=2;E;){var I=1<<31-sn(E);S.entanglements[1]|=I,E&=~I}Ni(m),(Ze&6)===0&&(yh=Ln()+500,su(0))}}break;case 13:S=no(m,2),S!==null&&Mn(S,m,2),Eh(),_p(m,2)}if(m=vp(u),m===null&&rp(n,r,u,Ph,o),m===f)break;f=m}f!==null&&u.stopPropagation()}else rp(n,r,u,null,o)}}function vp(n){return n=jn(n),Ep(n)}var Ph=null;function Ep(n){if(Ph=null,n=Gi(n),n!==null){var r=l(n);if(r===null)n=null;else{var o=r.tag;if(o===13){if(n=c(r),n!==null)return n;n=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null)}}return Ph=n,null}function sE(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ad()){case ul:return 2;case Pa:return 8;case kr:case wd:return 32;case Va:return 268435456;default:return 32}default:return 32}}var Tp=!1,Js=null,er=null,tr=null,fu=new Map,du=new Map,nr=[],q1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function rE(n,r){switch(n){case"focusin":case"focusout":Js=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":fu.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":du.delete(r.pointerId)}}function mu(n,r,o,u,f,m){return n===null||n.nativeEvent!==m?(n={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[f]},r!==null&&(r=pi(r),r!==null&&iE(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),n)}function H1(n,r,o,u,f){switch(r){case"focusin":return Js=mu(Js,n,r,o,u,f),!0;case"dragenter":return er=mu(er,n,r,o,u,f),!0;case"mouseover":return tr=mu(tr,n,r,o,u,f),!0;case"pointerover":var m=f.pointerId;return fu.set(m,mu(fu.get(m)||null,n,r,o,u,f)),!0;case"gotpointercapture":return m=f.pointerId,du.set(m,mu(du.get(m)||null,n,r,o,u,f)),!0}return!1}function aE(n){var r=Gi(n.target);if(r!==null){var o=l(r);if(o!==null){if(r=o.tag,r===13){if(r=c(o),r!==null){n.blockedOn=r,Ec(n.priority,function(){if(o.tag===13){var u=xn();u=Ds(u);var f=no(o,u);f!==null&&Mn(f,o,u),_p(o,u)}});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Vh(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var o=vp(n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Wi=u,o.target.dispatchEvent(u),Wi=null}else return r=pi(o),r!==null&&iE(r),n.blockedOn=o,!1;r.shift()}return!0}function oE(n,r,o){Vh(n)&&o.delete(r)}function G1(){Tp=!1,Js!==null&&Vh(Js)&&(Js=null),er!==null&&Vh(er)&&(er=null),tr!==null&&Vh(tr)&&(tr=null),fu.forEach(oE),du.forEach(oE)}function Lh(n,r){n.blockedOn===r&&(n.blockedOn=null,Tp||(Tp=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,G1)))}var Uh=null;function lE(n){Uh!==n&&(Uh=n,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Uh===n&&(Uh=null);for(var r=0;r<n.length;r+=3){var o=n[r],u=n[r+1],f=n[r+2];if(typeof u!="function"){if(Ep(u||o)===null)continue;break}var m=pi(o);m!==null&&(n.splice(r,3),r-=3,Em(m,{pending:!0,data:f,method:o.method,action:u},u,f))}}))}function pu(n){function r(I){return Lh(I,n)}Js!==null&&Lh(Js,n),er!==null&&Lh(er,n),tr!==null&&Lh(tr,n),fu.forEach(r),du.forEach(r);for(var o=0;o<nr.length;o++){var u=nr[o];u.blockedOn===n&&(u.blockedOn=null)}for(;0<nr.length&&(o=nr[0],o.blockedOn===null);)aE(o),o.blockedOn===null&&nr.shift();if(o=(n.ownerDocument||n).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var f=o[u],m=o[u+1],E=f[Rt]||null;if(typeof m=="function")E||lE(o);else if(E){var S=null;if(m&&m.hasAttribute("formAction")){if(f=m,E=m[Rt]||null)S=E.formAction;else if(Ep(f)!==null)continue}else S=E.action;typeof S=="function"?o[u+1]=S:(o.splice(u,3),u-=3),lE(o)}}}function Sp(n){this._internalRoot=n}zh.prototype.render=Sp.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(s(409));var o=r.current,u=xn();tE(o,u,n,r,null,null)},zh.prototype.unmount=Sp.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;tE(n.current,2,null,n,null,null),Eh(),r[Un]=null}};function zh(n){this._internalRoot=n}zh.prototype.unstable_scheduleHydration=function(n){if(n){var r=Os();n={blockedOn:null,target:n,priority:r};for(var o=0;o<nr.length&&r!==0&&r<nr[o].priority;o++);nr.splice(o,0,n),o===0&&aE(n)}};var uE=e.version;if(uE!=="19.1.0")throw Error(s(527,uE,"19.1.0"));Y.findDOMNode=function(n){var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(s(188)):(n=Object.keys(n).join(","),Error(s(268,n)));return n=p(r),n=n!==null?g(n):null,n=n===null?null:n.stateNode,n};var K1={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:V,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jh.isDisabled&&jh.supportsFiber)try{yt=jh.inject(K1),$e=jh}catch{}}return _u.createRoot=function(n,r){if(!a(n))throw Error(s(299));var o=!1,u="",f=bv,m=Rv,E=Iv,S=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(m=r.onCaughtError),r.onRecoverableError!==void 0&&(E=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(S=r.unstable_transitionCallbacks)),r=J0(n,1,!1,null,null,o,u,f,m,E,S,null),n[Un]=r.current,sp(n),new Sp(r)},_u.hydrateRoot=function(n,r,o){if(!a(n))throw Error(s(299));var u=!1,f="",m=bv,E=Rv,S=Iv,I=null,j=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(E=o.onCaughtError),o.onRecoverableError!==void 0&&(S=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(I=o.unstable_transitionCallbacks),o.formState!==void 0&&(j=o.formState)),r=J0(n,1,!0,r,o??null,u,f,m,E,S,I,j),r.context=eE(null),o=r.current,u=xn(),u=Ds(u),f=zs(u),f.callback=null,js(o,f,u),o=u,r.current.lanes=o,Hi(r,o),Ni(r),n[Un]=r.current,sp(n),new zh(r)},_u.version="19.1.0",_u}var vE;function nI(){if(vE)return bp.exports;vE=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),bp.exports=tI(),bp.exports}var iI=nI();const sI=()=>{};var EE={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const oe=function(i,e){if(!i)throw Zo(e)},Zo=function(i){return new Error("Firebase Database ("+LS.SDK_VERSION+") INTERNAL ASSERT FAILED: "+i)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++s)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},rI=function(i){const e=[];let t=0,s=0;for(;t<i.length;){const a=i[t++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const l=i[t++];e[s++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=i[t++],c=i[t++],d=i[t++],p=((a&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const l=i[t++],c=i[t++];e[s++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},Pg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<i.length;a+=3){const l=i[a],c=a+1<i.length,d=c?i[a+1]:0,p=a+2<i.length,g=p?i[a+2]:0,y=l>>2,T=(l&3)<<4|d>>4;let w=(d&15)<<2|g>>6,P=g&63;p||(P=64,c||(w=64)),s.push(t[y],t[T],t[w],t[P])}return s.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(US(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):rI(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<i.length;){const l=t[i.charAt(a++)],d=a<i.length?t[i.charAt(a)]:0;++a;const g=a<i.length?t[i.charAt(a)]:64;++a;const T=a<i.length?t[i.charAt(a)]:64;if(++a,l==null||d==null||g==null||T==null)throw new aI;const w=l<<2|d>>4;if(s.push(w),g!==64){const P=d<<4&240|g>>2;if(s.push(P),T!==64){const B=g<<6&192|T;s.push(B)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class aI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zS=function(i){const e=US(i);return Pg.encodeByteArray(e,!0)},uf=function(i){return zS(i).replace(/\./g,"")},cf=function(i){try{return Pg.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oI(i){return jS(void 0,i)}function jS(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!lI(t)||(i[t]=jS(i[t],e[t]));return i}function lI(i){return i!=="__proto__"}/**
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
 */const cI=()=>uI().__FIREBASE_DEFAULTS__,hI=()=>{if(typeof process>"u"||typeof EE>"u")return;const i=EE.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},fI=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&cf(i[1]);return e&&JSON.parse(e)},qf=()=>{try{return sI()||cI()||hI()||fI()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},BS=i=>{var e,t;return(t=(e=qf())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[i]},Vg=i=>{const e=BS(i);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},FS=()=>{var i;return(i=qf())===null||i===void 0?void 0:i.config},qS=i=>{var e;return(e=qf())===null||e===void 0?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Is(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Hf(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function HS(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",a=i.iat||0,l=i.sub||i.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},i);return[uf(JSON.stringify(t)),uf(JSON.stringify(c)),""].join(".")}const Nu={};function dI(){const i={prod:[],emulator:[]};for(const e of Object.keys(Nu))Nu[e]?i.emulator.push(e):i.prod.push(e);return i}function mI(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let TE=!1;function Gf(i,e){if(typeof window>"u"||typeof document>"u"||!Is(window.location.host)||Nu[i]===e||Nu[i]||TE)return;Nu[i]=e;function t(w){return`__firebase__banner__${w}`}const s="__firebase__banner",l=dI().prod.length>0;function c(){const w=document.getElementById(s);w&&w.remove()}function d(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function p(w,P){w.setAttribute("width","24"),w.setAttribute("id",P),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function g(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{TE=!0,c()},w}function y(w,P){w.setAttribute("id",P),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function T(){const w=mI(s),P=t("text"),B=document.getElementById(P)||document.createElement("span"),J=t("learnmore"),$=document.getElementById(J)||document.createElement("a"),_e=t("preprendIcon"),de=document.getElementById(_e)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const he=w.element;d(he),y($,J);const Ce=g();p(de,_e),he.append(de,B,$,Ce),document.body.appendChild(he)}l?(B.innerText="Preview backend disconnected.",de.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(de.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
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
 */function dn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ug(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dn())}function pI(){var i;const e=(i=qf())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _I(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function GS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yI(){const i=dn();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function vI(){return LS.NODE_ADMIN===!0}function EI(){return!pI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function TI(){try{return typeof indexedDB=="object"}catch{return!1}}function SI(){return new Promise((i,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(s),i(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var l;e(((l=a.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI="FirebaseError";class Bi extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=AI,Object.setPrototypeOf(this,Bi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zu.prototype.create)}}class Zu{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?wI(l,s):"Error",d=`${this.serviceName}: ${c} (${a}).`;return new Bi(a,d,s)}}function wI(i,e){return i.replace(bI,(t,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const bI=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const KS=function(i){let e={},t={},s={},a="";try{const l=i.split(".");e=zu(cf(l[0])||""),t=zu(cf(l[1])||""),a=l[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:a}},RI=function(i){const e=KS(i),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},II=function(i){const e=KS(i).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function qo(i,e){if(Object.prototype.hasOwnProperty.call(i,e))return i[e]}function Yp(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function hf(i,e,t){const s={};for(const a in i)Object.prototype.hasOwnProperty.call(i,a)&&(s[a]=e.call(t,i[a],a,i));return s}function _r(i,e){if(i===e)return!0;const t=Object.keys(i),s=Object.keys(e);for(const a of t){if(!s.includes(a))return!1;const l=i[a],c=e[a];if(SE(l)&&SE(c)){if(!_r(l,c))return!1}else if(l!==c)return!1}for(const a of s)if(!t.includes(a))return!1;return!0}function SE(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(i){const e=[];for(const[t,s]of Object.entries(i))Array.isArray(s)?s.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Su(i){const e={};return i.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[a,l]=s.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function Au(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let T=0;T<16;T++)s[T]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let T=0;T<16;T++)s[T]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let T=16;T<80;T++){const w=s[T-3]^s[T-8]^s[T-14]^s[T-16];s[T]=(w<<1|w>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],c=this.chain_[2],d=this.chain_[3],p=this.chain_[4],g,y;for(let T=0;T<80;T++){T<40?T<20?(g=d^l&(c^d),y=1518500249):(g=l^c^d,y=1859775393):T<60?(g=l&c|d&(l|c),y=2400959708):(g=l^c^d,y=3395469782);const w=(a<<5|a>>>27)+g+p+y+s[T]&4294967295;p=d,d=c,c=(l<<30|l>>>2)&4294967295,l=a,a=w}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let a=0;const l=this.buf_;let c=this.inbuf_;for(;a<t;){if(c===0)for(;a<=s;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<t;)if(l[c]=e.charCodeAt(a),++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}else for(;a<t;)if(l[c]=e[a],++c,++a,c===this.blockSize){this.compress_(l),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)e[s]=this.chain_[a]>>l&255,++s;return e}}function NI(i,e){const t=new DI(i,e);return t.subscribe.bind(t)}class DI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let a;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");OI(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:s},a.next===void 0&&(a.next=Np),a.error===void 0&&(a.error=Np),a.complete===void 0&&(a.complete=Np);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function OI(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function Np(){}function xI(i,e){return`${i} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI=function(i){const e=[];let t=0;for(let s=0;s<i.length;s++){let a=i.charCodeAt(s);if(a>=55296&&a<=56319){const l=a-55296;s++,oe(s<i.length,"Surrogate pair missing trail surrogate.");const c=i.charCodeAt(s)-56320;a=65536+(l<<10)+c}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},Kf=function(i){let e=0;for(let t=0;t<i.length;t++){const s=i.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function gt(i){return i&&i._delegate?i._delegate:i}class Ts{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ma="[DEFAULT]";/**
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
 */class kI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Lg;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e?.identifier),a=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(VI(e))try{this.getOrInitializeService({instanceIdentifier:ma})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});s.resolve(l)}catch{}}}}clearInstance(e=ma){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ma){return this.instances.has(e)}getOptions(e=ma){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);s===d&&c.resolve(a)}return a}onInit(e,t){var s;const a=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(a))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(a,l);const c=this.instances.get(a);return c&&e(c,a),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const a of s)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:PI(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ma){return this.component?this.component.multipleInstances?e:ma:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function PI(i){return i===ma?void 0:i}function VI(i){return i.instantiationMode==="EAGER"}/**
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
 */var Ve;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Ve||(Ve={}));const UI={debug:Ve.DEBUG,verbose:Ve.VERBOSE,info:Ve.INFO,warn:Ve.WARN,error:Ve.ERROR,silent:Ve.SILENT},zI=Ve.INFO,jI={[Ve.DEBUG]:"log",[Ve.VERBOSE]:"log",[Ve.INFO]:"info",[Ve.WARN]:"warn",[Ve.ERROR]:"error"},BI=(i,e,...t)=>{if(e<i.logLevel)return;const s=new Date().toISOString(),a=jI[e];if(a)console[a](`[${s}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yf{constructor(e){this.name=e,this._logLevel=zI,this._logHandler=BI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?UI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ve.DEBUG,...e),this._logHandler(this,Ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ve.VERBOSE,...e),this._logHandler(this,Ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ve.INFO,...e),this._logHandler(this,Ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ve.WARN,...e),this._logHandler(this,Ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ve.ERROR,...e),this._logHandler(this,Ve.ERROR,...e)}}const FI=(i,e)=>e.some(t=>i instanceof t);let AE,wE;function qI(){return AE||(AE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function HI(){return wE||(wE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const YS=new WeakMap,Qp=new WeakMap,QS=new WeakMap,Dp=new WeakMap,zg=new WeakMap;function GI(i){const e=new Promise((t,s)=>{const a=()=>{i.removeEventListener("success",l),i.removeEventListener("error",c)},l=()=>{t(fr(i.result)),a()},c=()=>{s(i.error),a()};i.addEventListener("success",l),i.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&YS.set(t,i)}).catch(()=>{}),zg.set(e,i),e}function KI(i){if(Qp.has(i))return;const e=new Promise((t,s)=>{const a=()=>{i.removeEventListener("complete",l),i.removeEventListener("error",c),i.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{s(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",l),i.addEventListener("error",c),i.addEventListener("abort",c)});Qp.set(i,e)}let Wp={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return Qp.get(i);if(e==="objectStoreNames")return i.objectStoreNames||QS.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return fr(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function YI(i){Wp=i(Wp)}function QI(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=i.call(Op(this),e,...t);return QS.set(s,e.sort?e.sort():[e]),fr(s)}:HI().includes(i)?function(...e){return i.apply(Op(this),e),fr(YS.get(this))}:function(...e){return fr(i.apply(Op(this),e))}}function WI(i){return typeof i=="function"?QI(i):(i instanceof IDBTransaction&&KI(i),FI(i,qI())?new Proxy(i,Wp):i)}function fr(i){if(i instanceof IDBRequest)return GI(i);if(Dp.has(i))return Dp.get(i);const e=WI(i);return e!==i&&(Dp.set(i,e),zg.set(e,i)),e}const Op=i=>zg.get(i);function XI(i,e,{blocked:t,upgrade:s,blocking:a,terminated:l}={}){const c=indexedDB.open(i,e),d=fr(c);return s&&c.addEventListener("upgradeneeded",p=>{s(fr(c.result),p.oldVersion,p.newVersion,fr(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const $I=["get","getKey","getAll","getAllKeys","count"],ZI=["put","add","delete","clear"],xp=new Map;function bE(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(xp.get(e))return xp.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,a=ZI.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(a||$I.includes(t)))return;const l=async function(c,...d){const p=this.transaction(c,a?"readwrite":"readonly");let g=p.store;return s&&(g=g.index(d.shift())),(await Promise.all([g[t](...d),a&&p.done]))[0]};return xp.set(e,l),l}YI(i=>({...i,get:(e,t,s)=>bE(e,t)||i.get(e,t,s),has:(e,t)=>!!bE(e,t)||i.has(e,t)}));/**
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
 */class JI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(eC(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function eC(i){const e=i.getComponent();return e?.type==="VERSION"}const Xp="@firebase/app",RE="0.13.2";/**
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
 */const Ss=new Yf("@firebase/app"),tC="@firebase/app-compat",nC="@firebase/analytics-compat",iC="@firebase/analytics",sC="@firebase/app-check-compat",rC="@firebase/app-check",aC="@firebase/auth",oC="@firebase/auth-compat",lC="@firebase/database",uC="@firebase/data-connect",cC="@firebase/database-compat",hC="@firebase/functions",fC="@firebase/functions-compat",dC="@firebase/installations",mC="@firebase/installations-compat",pC="@firebase/messaging",gC="@firebase/messaging-compat",_C="@firebase/performance",yC="@firebase/performance-compat",vC="@firebase/remote-config",EC="@firebase/remote-config-compat",TC="@firebase/storage",SC="@firebase/storage-compat",AC="@firebase/firestore",wC="@firebase/ai",bC="@firebase/firestore-compat",RC="firebase",IC="11.10.0";/**
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
 */const $p="[DEFAULT]",CC={[Xp]:"fire-core",[tC]:"fire-core-compat",[iC]:"fire-analytics",[nC]:"fire-analytics-compat",[rC]:"fire-app-check",[sC]:"fire-app-check-compat",[aC]:"fire-auth",[oC]:"fire-auth-compat",[lC]:"fire-rtdb",[uC]:"fire-data-connect",[cC]:"fire-rtdb-compat",[hC]:"fire-fn",[fC]:"fire-fn-compat",[dC]:"fire-iid",[mC]:"fire-iid-compat",[pC]:"fire-fcm",[gC]:"fire-fcm-compat",[_C]:"fire-perf",[yC]:"fire-perf-compat",[vC]:"fire-rc",[EC]:"fire-rc-compat",[TC]:"fire-gcs",[SC]:"fire-gcs-compat",[AC]:"fire-fst",[bC]:"fire-fst-compat",[wC]:"fire-vertex","fire-js":"fire-js",[RC]:"fire-js-all"};/**
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
 */const ff=new Map,NC=new Map,Zp=new Map;function IE(i,e){try{i.container.addComponent(e)}catch(t){Ss.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function yr(i){const e=i.name;if(Zp.has(e))return Ss.debug(`There were multiple attempts to register component ${e}.`),!1;Zp.set(e,i);for(const t of ff.values())IE(t,i);for(const t of NC.values())IE(t,i);return!0}function Ju(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function Sn(i){return i==null?!1:i.settings!==void 0}/**
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
 */const DC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dr=new Zu("app","Firebase",DC);/**
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
 */class OC{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ts("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ca=IC;function WS(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const s=Object.assign({name:$p,automaticDataCollectionEnabled:!0},e),a=s.name;if(typeof a!="string"||!a)throw dr.create("bad-app-name",{appName:String(a)});if(t||(t=FS()),!t)throw dr.create("no-options");const l=ff.get(a);if(l){if(_r(t,l.options)&&_r(s,l.config))return l;throw dr.create("duplicate-app",{appName:a})}const c=new LI(a);for(const p of Zp.values())c.addComponent(p);const d=new OC(t,s,c);return ff.set(a,d),d}function Qf(i=$p){const e=ff.get(i);if(!e&&i===$p&&FS())return WS();if(!e)throw dr.create("no-app",{appName:i});return e}function Zn(i,e,t){var s;let a=(s=CC[i])!==null&&s!==void 0?s:i;t&&(a+=`-${t}`);const l=a.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const d=[`Unable to register library "${a}" with version "${e}":`];l&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ss.warn(d.join(" "));return}yr(new Ts(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
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
 */const xC="firebase-heartbeat-database",MC=1,ju="firebase-heartbeat-store";let Mp=null;function XS(){return Mp||(Mp=XI(xC,MC,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(ju)}catch(t){console.warn(t)}}}}).catch(i=>{throw dr.create("idb-open",{originalErrorMessage:i.message})})),Mp}async function kC(i){try{const t=(await XS()).transaction(ju),s=await t.objectStore(ju).get($S(i));return await t.done,s}catch(e){if(e instanceof Bi)Ss.warn(e.message);else{const t=dr.create("idb-get",{originalErrorMessage:e?.message});Ss.warn(t.message)}}}async function CE(i,e){try{const s=(await XS()).transaction(ju,"readwrite");await s.objectStore(ju).put(e,$S(i)),await s.done}catch(t){if(t instanceof Bi)Ss.warn(t.message);else{const s=dr.create("idb-set",{originalErrorMessage:t?.message});Ss.warn(s.message)}}}function $S(i){return`${i.name}!${i.options.appId}`}/**
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
 */const PC=1024,VC=30;class LC{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new zC(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=NE();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>VC){const c=jC(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Ss.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=NE(),{heartbeatsToSend:s,unsentEntries:a}=UC(this._heartbeatsCache.heartbeats),l=uf(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Ss.warn(t),""}}}function NE(){return new Date().toISOString().substring(0,10)}function UC(i,e=PC){const t=[];let s=i.slice();for(const a of i){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),DE(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),DE(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class zC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return TI()?SI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await kC(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return CE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return CE(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function DE(i){return uf(JSON.stringify({version:2,heartbeats:i})).length}function jC(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let s=1;s<i.length;s++)i[s].date<t&&(t=i[s].date,e=s);return e}/**
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
 */function BC(i){yr(new Ts("platform-logger",e=>new JI(e),"PRIVATE")),yr(new Ts("heartbeat",e=>new LC(e),"PRIVATE")),Zn(Xp,RE,i),Zn(Xp,RE,"esm2017"),Zn("fire-js","")}BC("");var FC="firebase",qC="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zn(FC,qC,"app");var OE={};const xE="@firebase/database",ME="1.0.20";/**
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
 */let ZS="";function HC(i){ZS=i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class KC{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Cs(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS=function(i){try{if(typeof window<"u"&&typeof window[i]<"u"){const e=window[i];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new GC(e)}}catch{}return new KC},ga=JS("localStorage"),YC=JS("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo=new Yf("@firebase/database"),QC=function(){let i=1;return function(){return i++}}(),eA=function(i){const e=MI(i),t=new CI;t.update(e);const s=t.digest();return Pg.encodeByteArray(s)},ec=function(...i){let e="";for(let t=0;t<i.length;t++){const s=i[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ec.apply(null,s):typeof s=="object"?e+=en(s):e+=s,e+=" "}return e};let Du=null,kE=!0;const WC=function(i,e){oe(!0,"Can't turn on custom loggers persistently."),Lo.logLevel=Ve.VERBOSE,Du=Lo.log.bind(Lo)},un=function(...i){if(kE===!0&&(kE=!1,Du===null&&YC.get("logging_enabled")===!0&&WC()),Du){const e=ec.apply(null,i);Du(e)}},tc=function(i){return function(...e){un(i,...e)}},Jp=function(...i){const e="FIREBASE INTERNAL ERROR: "+ec(...i);Lo.error(e)},As=function(...i){const e=`FIREBASE FATAL ERROR: ${ec(...i)}`;throw Lo.error(e),new Error(e)},Vn=function(...i){const e="FIREBASE WARNING: "+ec(...i);Lo.warn(e)},XC=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Vn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},tA=function(i){return typeof i=="number"&&(i!==i||i===Number.POSITIVE_INFINITY||i===Number.NEGATIVE_INFINITY)},$C=function(i){if(document.readyState==="complete")i();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,i())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Ho="[MIN_NAME]",Ea="[MAX_NAME]",el=function(i,e){if(i===e)return 0;if(i===Ho||e===Ea)return-1;if(e===Ho||i===Ea)return 1;{const t=PE(i),s=PE(e);return t!==null?s!==null?t-s===0?i.length-e.length:t-s:-1:s!==null?1:i<e?-1:1}},ZC=function(i,e){return i===e?0:i<e?-1:1},yu=function(i,e){if(e&&i in e)return e[i];throw new Error("Missing required key ("+i+") in object: "+en(e))},jg=function(i){if(typeof i!="object"||i===null)return en(i);const e=[];for(const s in i)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=en(e[s]),t+=":",t+=jg(i[e[s]]);return t+="}",t},nA=function(i,e){const t=i.length;if(t<=e)return[i];const s=[];for(let a=0;a<t;a+=e)a+e>t?s.push(i.substring(a,t)):s.push(i.substring(a,a+e));return s};function ei(i,e){for(const t in i)i.hasOwnProperty(t)&&e(t,i[t])}const iA=function(i){oe(!tA(i),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let a,l,c,d,p;i===0?(l=0,c=0,a=1/i===-1/0?1:0):(a=i<0,i=Math.abs(i),i>=Math.pow(2,1-s)?(d=Math.min(Math.floor(Math.log(i)/Math.LN2),s),l=d+s,c=Math.round(i*Math.pow(2,t-d)-Math.pow(2,t))):(l=0,c=Math.round(i/Math.pow(2,1-s-t))));const g=[];for(p=t;p;p-=1)g.push(c%2?1:0),c=Math.floor(c/2);for(p=e;p;p-=1)g.push(l%2?1:0),l=Math.floor(l/2);g.push(a?1:0),g.reverse();const y=g.join("");let T="";for(p=0;p<64;p+=8){let w=parseInt(y.substr(p,8),2).toString(16);w.length===1&&(w="0"+w),T=T+w}return T.toLowerCase()},JC=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},eN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},tN=new RegExp("^-?(0*)\\d{1,10}$"),nN=-2147483648,iN=2147483647,PE=function(i){if(tN.test(i)){const e=Number(i);if(e>=nN&&e<=iN)return e}return null},nc=function(i){try{i()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Vn("Exception was thrown by user callback.",t),e},Math.floor(0))}},sN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ou=function(i,e){const t=setTimeout(i,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */const Bg="5",sA="v",rA="s",aA="r",oA="f",lA=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,uA="ls",cA="p",eg="ac",hA="websocket",fA="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e,t,s,a,l=!1,c="",d=!1,p=!1,g=null){this.secure=t,this.namespace=s,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=c,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=p,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ga.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ga.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function oN(i){return i.host!==i.internalHost||i.isCustomHost()||i.includeNamespaceInQueryParams}function mA(i,e,t){oe(typeof e=="string","typeof type must == string"),oe(typeof t=="object","typeof params must == object");let s;if(e===hA)s=(i.secure?"wss://":"ws://")+i.internalHost+"/.ws?";else if(e===fA)s=(i.secure?"https://":"http://")+i.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);oN(i)&&(t.ns=i.namespace);const a=[];return ei(t,(l,c)=>{a.push(l+"="+c)}),s+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(){this.counters_={}}incrementCounter(e,t=1){Cs(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return oI(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const VE="start",hN="close",fN="pLPCommand",dN="pRTLPCB",pA="id",gA="pw",_A="ser",mN="cb",pN="seg",gN="ts",_N="d",yN="dframe",yA=1870,vA=30,vN=yA-vA,EN=25e3,TN=3e4;class ko{constructor(e,t,s,a,l,c,d){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.transportSessionId=c,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=tc(e),this.stats_=Fg(t),this.urlFn=p=>(this.appCheckToken&&(p[eg]=this.appCheckToken),mA(t,fA,p))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new cN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(TN)),$C(()=>{if(this.isClosed_)return;this.scriptTagHolder=new qg((...l)=>{const[c,d,p,g,y]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===VE)this.id=d,this.password=p;else if(c===hN)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...l)=>{const[c,d]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(c,d)},()=>{this.onClosed_()},this.urlFn);const s={};s[VE]="t",s[_A]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[mN]=this.scriptTagHolder.uniqueCallbackIdentifier),s[sA]=Bg,this.transportSessionId&&(s[rA]=this.transportSessionId),this.lastSessionId&&(s[uA]=this.lastSessionId),this.applicationId&&(s[cA]=this.applicationId),this.appCheckToken&&(s[eg]=this.appCheckToken),typeof location<"u"&&location.hostname&&lA.test(location.hostname)&&(s[aA]=oA);const a=this.urlFn(s);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ko.forceAllow_=!0}static forceDisallow(){ko.forceDisallow_=!0}static isAvailable(){return ko.forceAllow_?!0:!ko.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!JC()&&!eN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=en(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=zS(t),a=nA(s,vN);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[yN]="t",s[pA]=e,s[gA]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=en(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class qg{constructor(e,t,s,a){this.onDisconnect=s,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=QC(),window[fN+this.uniqueCallbackIdentifier]=e,window[dN+this.uniqueCallbackIdentifier]=t,this.myIFrame=qg.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(d){un("frame writing exception"),d.stack&&un(d.stack),un(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||un("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[pA]=this.myID,e[gA]=this.myPW,e[_A]=this.currentSerial;let t=this.urlFn(e),s="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+vA+s.length<=yA;){const c=this.pendingSegs.shift();s=s+"&"+pN+a+"="+c.seg+"&"+gN+a+"="+c.ts+"&"+_N+a+"="+c.d,a++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},a=setTimeout(s,Math.floor(EN)),l=()=>{clearTimeout(a),s()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const a=s.readyState;(!a||a==="loaded"||a==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{un("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN=16384,AN=45e3;let df=null;typeof MozWebSocket<"u"?df=MozWebSocket:typeof WebSocket<"u"&&(df=WebSocket);class oi{constructor(e,t,s,a,l,c,d){this.connId=e,this.applicationId=s,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=tc(this.connId),this.stats_=Fg(t),this.connURL=oi.connectionURL_(t,c,d,a,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,a,l){const c={};return c[sA]=Bg,typeof location<"u"&&location.hostname&&lA.test(location.hostname)&&(c[aA]=oA),t&&(c[rA]=t),s&&(c[uA]=s),a&&(c[eg]=a),l&&(c[cA]=l),mA(e,hA,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ga.set("previous_websocket_failure",!0);try{let s;vI(),this.mySock=new df(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const a=s.message||s.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){oi.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&df!==null&&!oi.forceDisallow_}static previouslyFailed(){return ga.isInMemoryStorage||ga.get("previous_websocket_failure")===!0}markConnectionHealthy(){ga.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=zu(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(oe(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=en(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=nA(t,SN);s.length>1&&this.sendString_(String(s.length));for(let a=0;a<s.length;a++)this.sendString_(s[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(AN))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}oi.responsesRequiredToBeHealthy=2;oi.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{static get ALL_TRANSPORTS(){return[ko,oi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=oi&&oi.isAvailable();let s=t&&!oi.previouslyFailed();if(e.webSocketOnly&&(t||Vn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[oi];else{const a=this.transports_=[];for(const l of Bu.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);Bu.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Bu.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wN=6e4,bN=5e3,RN=10*1024,IN=100*1024,Vp="t",LE="d",CN="s",UE="r",NN="e",zE="o",jE="a",BE="n",FE="p",DN="h";class ON{constructor(e,t,s,a,l,c,d,p,g,y){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=c,this.onReady_=d,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=tc("c:"+this.id+":"),this.transportManager_=new Bu(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=Ou(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>IN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>RN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Vp in e){const t=e[Vp];t===jE?this.upgradeIfSecondaryHealthy_():t===UE?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===zE&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=yu("t",e),s=yu("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:FE,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:jE,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:BE,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=yu("t",e),s=yu("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=yu(Vp,e);if(LE in e){const s=e[LE];if(t===DN){const a=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(t===BE){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===CN?this.onConnectionShutdown_(s):t===UE?this.onReset_(s):t===NN?Jp("Server Error: "+s):t===zE?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Jp("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Bg!==s&&Vn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Ou(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(wN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ou(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(bN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:FE,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ga.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{put(e,t,s,a){}merge(e,t,s,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(e){this.allowedEvents_=e,this.listeners_={},oe(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let a=0;a<s.length;a++)s[a].callback.apply(s[a].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const a=this.getInitialEvent(e);a&&t.apply(s,a)}off(e,t,s){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let l=0;l<a.length;l++)if(a[l].callback===t&&(!s||s===a[l].context)){a.splice(l,1);return}}validateEventType_(e){oe(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf extends TA{static getInstance(){return new mf}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ug()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return oe(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE=32,HE=768;class ft{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[s]=this.pieces_[a],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function st(){return new ft("")}function qe(i){return i.pieceNum_>=i.pieces_.length?null:i.pieces_[i.pieceNum_]}function vr(i){return i.pieces_.length-i.pieceNum_}function ct(i){let e=i.pieceNum_;return e<i.pieces_.length&&e++,new ft(i.pieces_,e)}function SA(i){return i.pieceNum_<i.pieces_.length?i.pieces_[i.pieces_.length-1]:null}function xN(i){let e="";for(let t=i.pieceNum_;t<i.pieces_.length;t++)i.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(i.pieces_[t])));return e||"/"}function AA(i,e=0){return i.pieces_.slice(i.pieceNum_+e)}function wA(i){if(i.pieceNum_>=i.pieces_.length)return null;const e=[];for(let t=i.pieceNum_;t<i.pieces_.length-1;t++)e.push(i.pieces_[t]);return new ft(e,0)}function Yt(i,e){const t=[];for(let s=i.pieceNum_;s<i.pieces_.length;s++)t.push(i.pieces_[s]);if(e instanceof ft)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let a=0;a<s.length;a++)s[a].length>0&&t.push(s[a])}return new ft(t,0)}function Ue(i){return i.pieceNum_>=i.pieces_.length}function $n(i,e){const t=qe(i),s=qe(e);if(t===null)return e;if(t===s)return $n(ct(i),ct(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+i+")")}function bA(i,e){if(vr(i)!==vr(e))return!1;for(let t=i.pieceNum_,s=e.pieceNum_;t<=i.pieces_.length;t++,s++)if(i.pieces_[t]!==e.pieces_[s])return!1;return!0}function li(i,e){let t=i.pieceNum_,s=e.pieceNum_;if(vr(i)>vr(e))return!1;for(;t<i.pieces_.length;){if(i.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class MN{constructor(e,t){this.errorPrefix_=t,this.parts_=AA(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Kf(this.parts_[s]);RA(this)}}function kN(i,e){i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(e),i.byteLength_+=Kf(e),RA(i)}function PN(i){const e=i.parts_.pop();i.byteLength_-=Kf(e),i.parts_.length>0&&(i.byteLength_-=1)}function RA(i){if(i.byteLength_>HE)throw new Error(i.errorPrefix_+"has a key path longer than "+HE+" bytes ("+i.byteLength_+").");if(i.parts_.length>qE)throw new Error(i.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+qE+") or object contains a cycle "+pa(i))}function pa(i){return i.parts_.length===0?"":"in property '"+i.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg extends TA{static getInstance(){return new Hg}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return oe(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu=1e3,VN=60*5*1e3,GE=30*1e3,LN=1.3,UN=3e4,zN="server_kill",KE=3;class ys extends EA{constructor(e,t,s,a,l,c,d,p){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=c,this.appCheckTokenProvider_=d,this.authOverride_=p,this.id=ys.nextPersistentConnectionId_++,this.log_=tc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=vu,this.maxReconnectDelay_=VN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Hg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&mf.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const a=++this.requestNumber_,l={r:a,a:e,b:t};this.log_(en(l)),oe(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),s&&(this.requestCBHash_[a]=s)}get(e){this.initConnection_();const t=new Lg,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const d=c.d;c.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,s,a){this.initConnection_();const l=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+l),this.listens.has(c)||this.listens.set(c,new Map),oe(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),oe(!this.listens.get(c).has(l),"listen() called twice for same path/queryId.");const d={onComplete:a,hashFn:t,query:e,tag:s};this.listens.get(c).set(l,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),a=t._queryIdentifier;this.log_("Listen on "+s+" for "+a);const l={p:s},c="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(c,l,d=>{const p=d.d,g=d.s;ys.warnOnListenWarnings_(p,t),(this.listens.get(s)&&this.listens.get(s).get(a))===e&&(this.log_("listen response",d),g!=="ok"&&this.removeListen_(s,a),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Cs(e,"w")){const s=qo(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const a='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();Vn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||II(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=GE)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=RI(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,a=>{const l=a.s,c=a.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+a),oe(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,a)&&this.connected_&&this.sendUnlisten_(s,a,e._queryObject,t)}sendUnlisten_(e,t,s,a){this.log_("Unlisten on "+e+" for "+t);const l={p:e},c="n";a&&(l.q=s,l.t=a),this.sendRequest(c,l)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,a){const l={p:t,d:s};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,c=>{a&&setTimeout(()=>{a(c.s,c.d)},Math.floor(0))})}put(e,t,s,a){this.putInternal("p",e,t,s,a)}merge(e,t,s,a){this.putInternal("m",e,t,s,a)}putInternal(e,t,s,a,l){this.initConnection_();const c={p:t,d:s};l!==void 0&&(c.h=l),this.outstandingPuts_.push({action:e,request:c,onComplete:a}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const l=s.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+en(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Jp("Unrecognized action received from server: "+en(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){oe(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=vu,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=vu,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>UN&&(this.reconnectDelay_=vu),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*LN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+ys.nextConnectionId_++,l=this.lastSessionId;let c=!1,d=null;const p=function(){d?d.close():(c=!0,s())},g=function(T){oe(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(T)};this.realtime_={close:p,sendRequest:g};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[T,w]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);c?un("getToken() completed but was canceled"):(un("getToken() completed. Creating connection."),this.authToken_=T&&T.accessToken,this.appCheckToken_=w&&w.token,d=new ON(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,P=>{Vn(P+" ("+this.repoInfo_.toString()+")"),this.interrupt(zN)},l))}catch(T){this.log_("Failed to get token: "+T),c||(this.repoInfo_.nodeAdmin&&Vn(T),p())}}}interrupt(e){un("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){un("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Yp(this.interruptReasons_)&&(this.reconnectDelay_=vu,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(l=>jg(l)).join("$"):s="default";const a=this.removeListen_(e,s);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,t){const s=new ft(e).toString();let a;if(this.listens.has(s)){const l=this.listens.get(s);a=l.get(t),l.delete(t),l.size===0&&this.listens.delete(s)}else a=void 0;return a}onAuthRevoked_(e,t){un("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=KE&&(this.reconnectDelay_=GE,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){un("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=KE&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+ZS.replace(/\./g,"-")]=1,Ug()?e["framework.cordova"]=1:GS()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=mf.getInstance().currentlyOnline();return Yp(this.interruptReasons_)&&e}}ys.nextPersistentConnectionId_=0;ys.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new He(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new He(Ho,e),a=new He(Ho,t);return this.compare(s,a)!==0}minPost(){return He.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bh;class IA extends Wf{static get __EMPTY_NODE(){return Bh}static set __EMPTY_NODE(e){Bh=e}compare(e,t){return el(e.name,t.name)}isDefinedOn(e){throw Zo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return He.MIN}maxPost(){return new He(Ea,Bh)}makePost(e,t){return oe(typeof e=="string","KeyIndex indexValue must always be a string."),new He(e,Bh)}toString(){return".key"}}const Uo=new IA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fh=class{constructor(e,t,s,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?s(e.key,t):1,a&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},kn=class wu{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??wu.RED,this.left=a??Oi.EMPTY_NODE,this.right=l??Oi.EMPTY_NODE}copy(e,t,s,a,l){return new wu(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a=a.copy(null,t,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return Oi.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,a;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Oi.EMPTY_NODE;a=s.right.min_(),s=s.copy(a.key,a.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,wu.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,wu.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};kn.RED=!0;kn.BLACK=!1;class jN{copy(e,t,s,a,l){return this}insert(e,t,s){return new kn(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Oi=class $h{constructor(e,t=$h.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new $h(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,kn.BLACK,null,null))}remove(e){return new $h(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,kn.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,a=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return a?a.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(a=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Fh(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Fh(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Fh(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Fh(this.root_,null,this.comparator_,!0,e)}};Oi.EMPTY_NODE=new jN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BN(i,e){return el(i.name,e.name)}function Gg(i,e){return el(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tg;function FN(i){tg=i}const CA=function(i){return typeof i=="number"?"number:"+iA(i):"string:"+i},NA=function(i){if(i.isLeafNode()){const e=i.val();oe(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Cs(e,".sv"),"Priority must be a string or number.")}else oe(i===tg||i.isEmpty(),"priority of unexpected type.");oe(i===tg||i.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let YE;class Gt{static set __childrenNodeConstructor(e){YE=e}static get __childrenNodeConstructor(){return YE}constructor(e,t=Gt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,oe(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),NA(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Gt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Gt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ue(e)?this:qe(e)===".priority"?this.priorityNode_:Gt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Gt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=qe(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(oe(s!==".priority"||vr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Gt.__childrenNodeConstructor.EMPTY_NODE.updateChild(ct(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+CA(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=iA(this.value_):e+=this.value_,this.lazyHash_=eA(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Gt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Gt.__childrenNodeConstructor?-1:(oe(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,a=Gt.VALUE_TYPE_ORDER.indexOf(t),l=Gt.VALUE_TYPE_ORDER.indexOf(s);return oe(a>=0,"Unknown leaf type: "+t),oe(l>=0,"Unknown leaf type: "+s),a===l?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Gt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let DA,OA;function qN(i){DA=i}function HN(i){OA=i}class GN extends Wf{compare(e,t){const s=e.node.getPriority(),a=t.node.getPriority(),l=s.compareTo(a);return l===0?el(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return He.MIN}maxPost(){return new He(Ea,new Gt("[PRIORITY-POST]",OA))}makePost(e,t){const s=DA(e);return new He(t,new Gt("[PRIORITY-POST]",s))}toString(){return".priority"}}const fn=new GN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KN=Math.log(2);class YN{constructor(e){const t=l=>parseInt(Math.log(l)/KN,10),s=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const a=s(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const pf=function(i,e,t,s){i.sort(e);const a=function(p,g){const y=g-p;let T,w;if(y===0)return null;if(y===1)return T=i[p],w=t?t(T):T,new kn(w,T.node,kn.BLACK,null,null);{const P=parseInt(y/2,10)+p,B=a(p,P),J=a(P+1,g);return T=i[P],w=t?t(T):T,new kn(w,T.node,kn.BLACK,B,J)}},l=function(p){let g=null,y=null,T=i.length;const w=function(B,J){const $=T-B,_e=T;T-=B;const de=a($+1,_e),he=i[$],Ce=t?t(he):he;P(new kn(Ce,he.node,J,null,de))},P=function(B){g?(g.left=B,g=B):(y=B,g=B)};for(let B=0;B<p.count;++B){const J=p.nextBitIsOne(),$=Math.pow(2,p.count-(B+1));J?w($,kn.BLACK):(w($,kn.BLACK),w($,kn.RED))}return y},c=new YN(i.length),d=l(c);return new Oi(s||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lp;const Co={};class ps{static get Default(){return oe(Co&&fn,"ChildrenNode.ts has not been loaded"),Lp=Lp||new ps({".priority":Co},{".priority":fn}),Lp}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=qo(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Oi?t:null}hasIndex(e){return Cs(this.indexSet_,e.toString())}addIndex(e,t){oe(e!==Uo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let a=!1;const l=t.getIterator(He.Wrap);let c=l.getNext();for(;c;)a=a||e.isDefinedOn(c.node),s.push(c),c=l.getNext();let d;a?d=pf(s,e.getCompare()):d=Co;const p=e.toString(),g=Object.assign({},this.indexSet_);g[p]=e;const y=Object.assign({},this.indexes_);return y[p]=d,new ps(y,g)}addToIndexes(e,t){const s=hf(this.indexes_,(a,l)=>{const c=qo(this.indexSet_,l);if(oe(c,"Missing index implementation for "+l),a===Co)if(c.isDefinedOn(e.node)){const d=[],p=t.getIterator(He.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&d.push(g),g=p.getNext();return d.push(e),pf(d,c.getCompare())}else return Co;else{const d=t.get(e.name);let p=a;return d&&(p=p.remove(new He(e.name,d))),p.insert(e,e.node)}});return new ps(s,this.indexSet_)}removeFromIndexes(e,t){const s=hf(this.indexes_,a=>{if(a===Co)return a;{const l=t.get(e.name);return l?a.remove(new He(e.name,l)):a}});return new ps(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eu;class We{static get EMPTY_NODE(){return Eu||(Eu=new We(new Oi(Gg),null,ps.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&NA(this.priorityNode_),this.children_.isEmpty()&&oe(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Eu}updatePriority(e){return this.children_.isEmpty()?this:new We(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Eu:t}}getChild(e){const t=qe(e);return t===null?this:this.getImmediateChild(t).getChild(ct(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(oe(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new He(e,t);let a,l;t.isEmpty()?(a=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(s,this.children_)):(a=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(s,this.children_));const c=a.isEmpty()?Eu:this.priorityNode_;return new We(a,c,l)}}updateChild(e,t){const s=qe(e);if(s===null)return t;{oe(qe(e)!==".priority"||vr(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(s).updateChild(ct(e),t);return this.updateImmediateChild(s,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,a=0,l=!0;if(this.forEachChild(fn,(c,d)=>{t[c]=d.val(e),s++,l&&We.INTEGER_REGEXP_.test(c)?a=Math.max(a,Number(c)):l=!1}),!e&&l&&a<2*s){const c=[];for(const d in t)c[d]=t[d];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+CA(this.getPriority().val())+":"),this.forEachChild(fn,(t,s)=>{const a=s.hash();a!==""&&(e+=":"+t+":"+a)}),this.lazyHash_=e===""?"":eA(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const a=this.resolveIndex_(s);if(a){const l=a.getPredecessorKey(new He(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new He(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new He(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(a=>t(a.name,a.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,He.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,He.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)>0;)a.getNext(),l=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ic?-1:0}withIndex(e){if(e===Uo||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new We(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Uo||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(fn),a=t.getIterator(fn);let l=s.getNext(),c=a.getNext();for(;l&&c;){if(l.name!==c.name||!l.node.equals(c.node))return!1;l=s.getNext(),c=a.getNext()}return l===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===Uo?null:this.indexMap_.get(e.toString())}}We.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class QN extends We{constructor(){super(new Oi(Gg),We.EMPTY_NODE,ps.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return We.EMPTY_NODE}isEmpty(){return!1}}const ic=new QN;Object.defineProperties(He,{MIN:{value:new He(Ho,We.EMPTY_NODE)},MAX:{value:new He(Ea,ic)}});IA.__EMPTY_NODE=We.EMPTY_NODE;Gt.__childrenNodeConstructor=We;FN(ic);HN(ic);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WN=!0;function cn(i,e=null){if(i===null)return We.EMPTY_NODE;if(typeof i=="object"&&".priority"in i&&(e=i[".priority"]),oe(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof i=="object"&&".value"in i&&i[".value"]!==null&&(i=i[".value"]),typeof i!="object"||".sv"in i){const t=i;return new Gt(t,cn(e))}if(!(i instanceof Array)&&WN){const t=[];let s=!1;if(ei(i,(c,d)=>{if(c.substring(0,1)!=="."){const p=cn(d);p.isEmpty()||(s=s||!p.getPriority().isEmpty(),t.push(new He(c,p)))}}),t.length===0)return We.EMPTY_NODE;const l=pf(t,BN,c=>c.name,Gg);if(s){const c=pf(t,fn.getCompare());return new We(l,cn(e),new ps({".priority":c},{".priority":fn}))}else return new We(l,cn(e),ps.Default)}else{let t=We.EMPTY_NODE;return ei(i,(s,a)=>{if(Cs(i,s)&&s.substring(0,1)!=="."){const l=cn(a);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(s,l))}}),t.updatePriority(cn(e))}}qN(cn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN extends Wf{constructor(e){super(),this.indexPath_=e,oe(!Ue(e)&&qe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),a=this.extractChild(t.node),l=s.compareTo(a);return l===0?el(e.name,t.name):l}makePost(e,t){const s=cn(e),a=We.EMPTY_NODE.updateChild(this.indexPath_,s);return new He(t,a)}maxPost(){const e=We.EMPTY_NODE.updateChild(this.indexPath_,ic);return new He(Ea,e)}toString(){return AA(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N extends Wf{compare(e,t){const s=e.node.compareTo(t.node);return s===0?el(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return He.MIN}maxPost(){return He.MAX}makePost(e,t){const s=cn(e);return new He(t,s)}toString(){return".value"}}const ZN=new $N;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JN(i){return{type:"value",snapshotNode:i}}function eD(i,e){return{type:"child_added",snapshotNode:e,childName:i}}function tD(i,e){return{type:"child_removed",snapshotNode:e,childName:i}}function QE(i,e,t){return{type:"child_changed",snapshotNode:e,childName:i,oldSnap:t}}function nD(i,e){return{type:"child_moved",snapshotNode:e,childName:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=fn}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return oe(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return oe(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ho}hasEnd(){return this.endSet_}getIndexEndValue(){return oe(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return oe(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ea}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return oe(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===fn}copy(){const e=new Kg;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function WE(i){const e={};if(i.isDefault())return e;let t;if(i.index_===fn?t="$priority":i.index_===ZN?t="$value":i.index_===Uo?t="$key":(oe(i.index_ instanceof XN,"Unrecognized index type!"),t=i.index_.toString()),e.orderBy=en(t),i.startSet_){const s=i.startAfterSet_?"startAfter":"startAt";e[s]=en(i.indexStartValue_),i.startNameSet_&&(e[s]+=","+en(i.indexStartName_))}if(i.endSet_){const s=i.endBeforeSet_?"endBefore":"endAt";e[s]=en(i.indexEndValue_),i.endNameSet_&&(e[s]+=","+en(i.indexEndName_))}return i.limitSet_&&(i.isViewFromLeft()?e.limitToFirst=i.limit_:e.limitToLast=i.limit_),e}function XE(i){const e={};if(i.startSet_&&(e.sp=i.indexStartValue_,i.startNameSet_&&(e.sn=i.indexStartName_),e.sin=!i.startAfterSet_),i.endSet_&&(e.ep=i.indexEndValue_,i.endNameSet_&&(e.en=i.indexEndName_),e.ein=!i.endBeforeSet_),i.limitSet_){e.l=i.limit_;let t=i.viewFrom_;t===""&&(i.isViewFromLeft()?t="l":t="r"),e.vf=t}return i.index_!==fn&&(e.i=i.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf extends EA{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(oe(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,a){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.log_=tc("p:rest:"),this.listens_={}}listen(e,t,s,a){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const c=gf.getListenId_(e,s),d={};this.listens_[c]=d;const p=WE(e._queryParams);this.restRequest_(l+".json",p,(g,y)=>{let T=y;if(g===404&&(T=null,g=null),g===null&&this.onDataUpdate_(l,T,!1,s),qo(this.listens_,c)===d){let w;g?g===401?w="permission_denied":w="rest_error:"+g:w="ok",a(w,null)}})}unlisten(e,t){const s=gf.getListenId_(e,t);delete this.listens_[s]}get(e){const t=WE(e._queryParams),s=e._path.toString(),a=new Lg;return this.restRequest_(s+".json",t,(l,c)=>{let d=c;l===404&&(d=null,l=null),l===null?(this.onDataUpdate_(s,d,!1,null),a.resolve(d)):a.reject(new Error(d))}),a.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(t.auth=a.accessToken),l&&l.token&&(t.ac=l.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Jo(t);this.log_("Sending REST request for "+c);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(s&&d.readyState===4){this.log_("REST Response for "+c+" received. status:",d.status,"response:",d.responseText);let p=null;if(d.status>=200&&d.status<300){try{p=zu(d.responseText)}catch{Vn("Failed to parse JSON response for "+c+": "+d.responseText)}s(null,p)}else d.status!==401&&d.status!==404&&Vn("Got unsuccessful REST response for "+c+" Status: "+d.status),s(d.status);s=null}},d.open("GET",c,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{constructor(){this.rootNode_=We.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _f(){return{value:null,children:new Map}}function xA(i,e,t){if(Ue(e))i.value=t,i.children.clear();else if(i.value!==null)i.value=i.value.updateChild(e,t);else{const s=qe(e);i.children.has(s)||i.children.set(s,_f());const a=i.children.get(s);e=ct(e),xA(a,e,t)}}function ng(i,e,t){i.value!==null?t(e,i.value):sD(i,(s,a)=>{const l=new ft(e.toString()+"/"+s);ng(a,l,t)})}function sD(i,e){i.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const $E=10*1e3,aD=30*1e3,oD=5*60*1e3;class lD{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new rD(e);const s=$E+(aD-$E)*Math.random();Ou(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;ei(e,(a,l)=>{l>0&&Cs(this.statsToReport_,a)&&(t[a]=l,s=!0)}),s&&this.server_.reportStats(t),Ou(this.reportStats_.bind(this),Math.floor(Math.random()*2*oD))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xi;(function(i){i[i.OVERWRITE=0]="OVERWRITE",i[i.MERGE=1]="MERGE",i[i.ACK_USER_WRITE=2]="ACK_USER_WRITE",i[i.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(xi||(xi={}));function MA(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function kA(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function PA(i){return{fromUser:!1,fromServer:!0,queryId:i,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=xi.ACK_USER_WRITE,this.source=MA()}operationForChild(e){if(Ue(this.path)){if(this.affectedTree.value!=null)return oe(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ft(e));return new yf(st(),t,this.revert)}}else return oe(qe(this.path)===e,"operationForChild called for unrelated child."),new yf(ct(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=xi.OVERWRITE}operationForChild(e){return Ue(this.path)?new Ta(this.source,st(),this.snap.getImmediateChild(e)):new Ta(this.source,ct(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=xi.MERGE}operationForChild(e){if(Ue(this.path)){const t=this.children.subtree(new ft(e));return t.isEmpty()?null:t.value?new Ta(this.source,st(),t.value):new Fu(this.source,st(),t)}else return oe(qe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Fu(this.source,ct(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ue(e))return this.isFullyInitialized()&&!this.filtered_;const t=qe(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function uD(i,e,t,s){const a=[],l=[];return e.forEach(c=>{c.type==="child_changed"&&i.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&l.push(nD(c.childName,c.snapshotNode))}),Tu(i,a,"child_removed",e,s,t),Tu(i,a,"child_added",e,s,t),Tu(i,a,"child_moved",l,s,t),Tu(i,a,"child_changed",e,s,t),Tu(i,a,"value",e,s,t),a}function Tu(i,e,t,s,a,l){const c=s.filter(d=>d.type===t);c.sort((d,p)=>hD(i,d,p)),c.forEach(d=>{const p=cD(i,d,l);a.forEach(g=>{g.respondsTo(d.type)&&e.push(g.createEvent(p,i.query_))})})}function cD(i,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,i.index_)),e}function hD(i,e,t){if(e.childName==null||t.childName==null)throw Zo("Should only compare child_ events.");const s=new He(e.childName,e.snapshotNode),a=new He(t.childName,t.snapshotNode);return i.index_.compare(s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VA(i,e){return{eventCache:i,serverCache:e}}function xu(i,e,t,s){return VA(new Yg(e,t,s),i.serverCache)}function LA(i,e,t,s){return VA(i.eventCache,new Yg(e,t,s))}function ig(i){return i.eventCache.isFullyInitialized()?i.eventCache.getNode():null}function Sa(i){return i.serverCache.isFullyInitialized()?i.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Up;const fD=()=>(Up||(Up=new Oi(ZC)),Up);class ut{static fromObject(e){let t=new ut(null);return ei(e,(s,a)=>{t=t.set(new ft(s),a)}),t}constructor(e,t=fD()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:st(),value:this.value};if(Ue(e))return null;{const s=qe(e),a=this.children.get(s);if(a!==null){const l=a.findRootMostMatchingPathAndValue(ct(e),t);return l!=null?{path:Yt(new ft(s),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ue(e))return this;{const t=qe(e),s=this.children.get(t);return s!==null?s.subtree(ct(e)):new ut(null)}}set(e,t){if(Ue(e))return new ut(t,this.children);{const s=qe(e),l=(this.children.get(s)||new ut(null)).set(ct(e),t),c=this.children.insert(s,l);return new ut(this.value,c)}}remove(e){if(Ue(e))return this.children.isEmpty()?new ut(null):new ut(null,this.children);{const t=qe(e),s=this.children.get(t);if(s){const a=s.remove(ct(e));let l;return a.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,a),this.value===null&&l.isEmpty()?new ut(null):new ut(this.value,l)}else return this}}get(e){if(Ue(e))return this.value;{const t=qe(e),s=this.children.get(t);return s?s.get(ct(e)):null}}setTree(e,t){if(Ue(e))return t;{const s=qe(e),l=(this.children.get(s)||new ut(null)).setTree(ct(e),t);let c;return l.isEmpty()?c=this.children.remove(s):c=this.children.insert(s,l),new ut(this.value,c)}}fold(e){return this.fold_(st(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((a,l)=>{s[a]=l.fold_(Yt(e,a),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,st(),t)}findOnPath_(e,t,s){const a=this.value?s(t,this.value):!1;if(a)return a;if(Ue(e))return null;{const l=qe(e),c=this.children.get(l);return c?c.findOnPath_(ct(e),Yt(t,l),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,st(),t)}foreachOnPath_(e,t,s){if(Ue(e))return this;{this.value&&s(t,this.value);const a=qe(e),l=this.children.get(a);return l?l.foreachOnPath_(ct(e),Yt(t,a),s):new ut(null)}}foreach(e){this.foreach_(st(),e)}foreach_(e,t){this.children.inorderTraversal((s,a)=>{a.foreach_(Yt(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e){this.writeTree_=e}static empty(){return new ci(new ut(null))}}function Mu(i,e,t){if(Ue(e))return new ci(new ut(t));{const s=i.writeTree_.findRootMostValueAndPath(e);if(s!=null){const a=s.path;let l=s.value;const c=$n(a,e);return l=l.updateChild(c,t),new ci(i.writeTree_.set(a,l))}else{const a=new ut(t),l=i.writeTree_.setTree(e,a);return new ci(l)}}}function ZE(i,e,t){let s=i;return ei(t,(a,l)=>{s=Mu(s,Yt(e,a),l)}),s}function JE(i,e){if(Ue(e))return ci.empty();{const t=i.writeTree_.setTree(e,new ut(null));return new ci(t)}}function sg(i,e){return Na(i,e)!=null}function Na(i,e){const t=i.writeTree_.findRootMostValueAndPath(e);return t!=null?i.writeTree_.get(t.path).getChild($n(t.path,e)):null}function eT(i){const e=[],t=i.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(fn,(s,a)=>{e.push(new He(s,a))}):i.writeTree_.children.inorderTraversal((s,a)=>{a.value!=null&&e.push(new He(s,a.value))}),e}function mr(i,e){if(Ue(e))return i;{const t=Na(i,e);return t!=null?new ci(new ut(t)):new ci(i.writeTree_.subtree(e))}}function rg(i){return i.writeTree_.isEmpty()}function Go(i,e){return UA(st(),i.writeTree_,e)}function UA(i,e,t){if(e.value!=null)return t.updateChild(i,e.value);{let s=null;return e.children.inorderTraversal((a,l)=>{a===".priority"?(oe(l.value!==null,"Priority writes must always be leaf nodes"),s=l.value):t=UA(Yt(i,a),l,t)}),!t.getChild(i).isEmpty()&&s!==null&&(t=t.updateChild(Yt(i,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zA(i,e){return HA(e,i)}function dD(i,e,t,s,a){oe(s>i.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),i.allWrites.push({path:e,snap:t,writeId:s,visible:a}),a&&(i.visibleWrites=Mu(i.visibleWrites,e,t)),i.lastWriteId=s}function mD(i,e){for(let t=0;t<i.allWrites.length;t++){const s=i.allWrites[t];if(s.writeId===e)return s}return null}function pD(i,e){const t=i.allWrites.findIndex(d=>d.writeId===e);oe(t>=0,"removeWrite called with nonexistent writeId.");const s=i.allWrites[t];i.allWrites.splice(t,1);let a=s.visible,l=!1,c=i.allWrites.length-1;for(;a&&c>=0;){const d=i.allWrites[c];d.visible&&(c>=t&&gD(d,s.path)?a=!1:li(s.path,d.path)&&(l=!0)),c--}if(a){if(l)return _D(i),!0;if(s.snap)i.visibleWrites=JE(i.visibleWrites,s.path);else{const d=s.children;ei(d,p=>{i.visibleWrites=JE(i.visibleWrites,Yt(s.path,p))})}return!0}else return!1}function gD(i,e){if(i.snap)return li(i.path,e);for(const t in i.children)if(i.children.hasOwnProperty(t)&&li(Yt(i.path,t),e))return!0;return!1}function _D(i){i.visibleWrites=jA(i.allWrites,yD,st()),i.allWrites.length>0?i.lastWriteId=i.allWrites[i.allWrites.length-1].writeId:i.lastWriteId=-1}function yD(i){return i.visible}function jA(i,e,t){let s=ci.empty();for(let a=0;a<i.length;++a){const l=i[a];if(e(l)){const c=l.path;let d;if(l.snap)li(t,c)?(d=$n(t,c),s=Mu(s,d,l.snap)):li(c,t)&&(d=$n(c,t),s=Mu(s,st(),l.snap.getChild(d)));else if(l.children){if(li(t,c))d=$n(t,c),s=ZE(s,d,l.children);else if(li(c,t))if(d=$n(c,t),Ue(d))s=ZE(s,st(),l.children);else{const p=qo(l.children,qe(d));if(p){const g=p.getChild(ct(d));s=Mu(s,st(),g)}}}else throw Zo("WriteRecord should have .snap or .children")}}return s}function BA(i,e,t,s,a){if(!s&&!a){const l=Na(i.visibleWrites,e);if(l!=null)return l;{const c=mr(i.visibleWrites,e);if(rg(c))return t;if(t==null&&!sg(c,st()))return null;{const d=t||We.EMPTY_NODE;return Go(c,d)}}}else{const l=mr(i.visibleWrites,e);if(!a&&rg(l))return t;if(!a&&t==null&&!sg(l,st()))return null;{const c=function(g){return(g.visible||a)&&(!s||!~s.indexOf(g.writeId))&&(li(g.path,e)||li(e,g.path))},d=jA(i.allWrites,c,e),p=t||We.EMPTY_NODE;return Go(d,p)}}}function vD(i,e,t){let s=We.EMPTY_NODE;const a=Na(i.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(fn,(l,c)=>{s=s.updateImmediateChild(l,c)}),s;if(t){const l=mr(i.visibleWrites,e);return t.forEachChild(fn,(c,d)=>{const p=Go(mr(l,new ft(c)),d);s=s.updateImmediateChild(c,p)}),eT(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}else{const l=mr(i.visibleWrites,e);return eT(l).forEach(c=>{s=s.updateImmediateChild(c.name,c.node)}),s}}function ED(i,e,t,s,a){oe(s||a,"Either existingEventSnap or existingServerSnap must exist");const l=Yt(e,t);if(sg(i.visibleWrites,l))return null;{const c=mr(i.visibleWrites,l);return rg(c)?a.getChild(t):Go(c,a.getChild(t))}}function TD(i,e,t,s){const a=Yt(e,t),l=Na(i.visibleWrites,a);if(l!=null)return l;if(s.isCompleteForChild(t)){const c=mr(i.visibleWrites,a);return Go(c,s.getNode().getImmediateChild(t))}else return null}function SD(i,e){return Na(i.visibleWrites,e)}function AD(i,e,t,s,a,l,c){let d;const p=mr(i.visibleWrites,e),g=Na(p,st());if(g!=null)d=g;else if(t!=null)d=Go(p,t);else return[];if(d=d.withIndex(c),!d.isEmpty()&&!d.isLeafNode()){const y=[],T=c.getCompare(),w=l?d.getReverseIteratorFrom(s,c):d.getIteratorFrom(s,c);let P=w.getNext();for(;P&&y.length<a;)T(P,s)!==0&&y.push(P),P=w.getNext();return y}else return[]}function wD(){return{visibleWrites:ci.empty(),allWrites:[],lastWriteId:-1}}function ag(i,e,t,s){return BA(i.writeTree,i.treePath,e,t,s)}function FA(i,e){return vD(i.writeTree,i.treePath,e)}function tT(i,e,t,s){return ED(i.writeTree,i.treePath,e,t,s)}function vf(i,e){return SD(i.writeTree,Yt(i.treePath,e))}function bD(i,e,t,s,a,l){return AD(i.writeTree,i.treePath,e,t,s,a,l)}function Qg(i,e,t){return TD(i.writeTree,i.treePath,e,t)}function qA(i,e){return HA(Yt(i.treePath,e),i.writeTree)}function HA(i,e){return{treePath:i,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;oe(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),oe(s!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(s);if(a){const l=a.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(s,QE(s,e.snapshotNode,a.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(s,tD(s,a.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(s,eD(s,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(s,QE(s,e.snapshotNode,a.oldSnap));else throw Zo("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const GA=new ID;class Wg{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Yg(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Qg(this.writes_,e,s)}}getChildAfterChild(e,t,s){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Sa(this.viewCache_),l=bD(this.writes_,a,t,1,s,e);return l.length===0?null:l[0]}}function CD(i,e){oe(e.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),oe(e.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed")}function ND(i,e,t,s,a){const l=new RD;let c,d;if(t.type===xi.OVERWRITE){const g=t;g.source.fromUser?c=og(i,e,g.path,g.snap,s,a,l):(oe(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered()&&!Ue(g.path),c=Ef(i,e,g.path,g.snap,s,a,d,l))}else if(t.type===xi.MERGE){const g=t;g.source.fromUser?c=OD(i,e,g.path,g.children,s,a,l):(oe(g.source.fromServer,"Unknown source."),d=g.source.tagged||e.serverCache.isFiltered(),c=lg(i,e,g.path,g.children,s,a,d,l))}else if(t.type===xi.ACK_USER_WRITE){const g=t;g.revert?c=kD(i,e,g.path,s,a,l):c=xD(i,e,g.path,g.affectedTree,s,a,l)}else if(t.type===xi.LISTEN_COMPLETE)c=MD(i,e,t.path,s,l);else throw Zo("Unknown operation type: "+t.type);const p=l.getChanges();return DD(e,c,p),{viewCache:c,changes:p}}function DD(i,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const a=s.getNode().isLeafNode()||s.getNode().isEmpty(),l=ig(i);(t.length>0||!i.eventCache.isFullyInitialized()||a&&!s.getNode().equals(l)||!s.getNode().getPriority().equals(l.getPriority()))&&t.push(JN(ig(e)))}}function KA(i,e,t,s,a,l){const c=e.eventCache;if(vf(s,t)!=null)return e;{let d,p;if(Ue(t))if(oe(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=Sa(e),y=g instanceof We?g:We.EMPTY_NODE,T=FA(s,y);d=i.filter.updateFullNode(e.eventCache.getNode(),T,l)}else{const g=ag(s,Sa(e));d=i.filter.updateFullNode(e.eventCache.getNode(),g,l)}else{const g=qe(t);if(g===".priority"){oe(vr(t)===1,"Can't have a priority with additional path components");const y=c.getNode();p=e.serverCache.getNode();const T=tT(s,t,y,p);T!=null?d=i.filter.updatePriority(y,T):d=c.getNode()}else{const y=ct(t);let T;if(c.isCompleteForChild(g)){p=e.serverCache.getNode();const w=tT(s,t,c.getNode(),p);w!=null?T=c.getNode().getImmediateChild(g).updateChild(y,w):T=c.getNode().getImmediateChild(g)}else T=Qg(s,g,e.serverCache);T!=null?d=i.filter.updateChild(c.getNode(),g,T,y,a,l):d=c.getNode()}}return xu(e,d,c.isFullyInitialized()||Ue(t),i.filter.filtersNodes())}}function Ef(i,e,t,s,a,l,c,d){const p=e.serverCache;let g;const y=c?i.filter:i.filter.getIndexedFilter();if(Ue(t))g=y.updateFullNode(p.getNode(),s,null);else if(y.filtersNodes()&&!p.isFiltered()){const P=p.getNode().updateChild(t,s);g=y.updateFullNode(p.getNode(),P,null)}else{const P=qe(t);if(!p.isCompleteForPath(t)&&vr(t)>1)return e;const B=ct(t),$=p.getNode().getImmediateChild(P).updateChild(B,s);P===".priority"?g=y.updatePriority(p.getNode(),$):g=y.updateChild(p.getNode(),P,$,B,GA,null)}const T=LA(e,g,p.isFullyInitialized()||Ue(t),y.filtersNodes()),w=new Wg(a,T,l);return KA(i,T,t,a,w,d)}function og(i,e,t,s,a,l,c){const d=e.eventCache;let p,g;const y=new Wg(a,e,l);if(Ue(t))g=i.filter.updateFullNode(e.eventCache.getNode(),s,c),p=xu(e,g,!0,i.filter.filtersNodes());else{const T=qe(t);if(T===".priority")g=i.filter.updatePriority(e.eventCache.getNode(),s),p=xu(e,g,d.isFullyInitialized(),d.isFiltered());else{const w=ct(t),P=d.getNode().getImmediateChild(T);let B;if(Ue(w))B=s;else{const J=y.getCompleteChild(T);J!=null?SA(w)===".priority"&&J.getChild(wA(w)).isEmpty()?B=J:B=J.updateChild(w,s):B=We.EMPTY_NODE}if(P.equals(B))p=e;else{const J=i.filter.updateChild(d.getNode(),T,B,w,y,c);p=xu(e,J,d.isFullyInitialized(),i.filter.filtersNodes())}}}return p}function nT(i,e){return i.eventCache.isCompleteForChild(e)}function OD(i,e,t,s,a,l,c){let d=e;return s.foreach((p,g)=>{const y=Yt(t,p);nT(e,qe(y))&&(d=og(i,d,y,g,a,l,c))}),s.foreach((p,g)=>{const y=Yt(t,p);nT(e,qe(y))||(d=og(i,d,y,g,a,l,c))}),d}function iT(i,e,t){return t.foreach((s,a)=>{e=e.updateChild(s,a)}),e}function lg(i,e,t,s,a,l,c,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;Ue(t)?g=s:g=new ut(null).setTree(t,s);const y=e.serverCache.getNode();return g.children.inorderTraversal((T,w)=>{if(y.hasChild(T)){const P=e.serverCache.getNode().getImmediateChild(T),B=iT(i,P,w);p=Ef(i,p,new ft(T),B,a,l,c,d)}}),g.children.inorderTraversal((T,w)=>{const P=!e.serverCache.isCompleteForChild(T)&&w.value===null;if(!y.hasChild(T)&&!P){const B=e.serverCache.getNode().getImmediateChild(T),J=iT(i,B,w);p=Ef(i,p,new ft(T),J,a,l,c,d)}}),p}function xD(i,e,t,s,a,l,c){if(vf(a,t)!=null)return e;const d=e.serverCache.isFiltered(),p=e.serverCache;if(s.value!=null){if(Ue(t)&&p.isFullyInitialized()||p.isCompleteForPath(t))return Ef(i,e,t,p.getNode().getChild(t),a,l,d,c);if(Ue(t)){let g=new ut(null);return p.getNode().forEachChild(Uo,(y,T)=>{g=g.set(new ft(y),T)}),lg(i,e,t,g,a,l,d,c)}else return e}else{let g=new ut(null);return s.foreach((y,T)=>{const w=Yt(t,y);p.isCompleteForPath(w)&&(g=g.set(y,p.getNode().getChild(w)))}),lg(i,e,t,g,a,l,d,c)}}function MD(i,e,t,s,a){const l=e.serverCache,c=LA(e,l.getNode(),l.isFullyInitialized()||Ue(t),l.isFiltered());return KA(i,c,t,s,GA,a)}function kD(i,e,t,s,a,l){let c;if(vf(s,t)!=null)return e;{const d=new Wg(s,e,a),p=e.eventCache.getNode();let g;if(Ue(t)||qe(t)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=ag(s,Sa(e));else{const T=e.serverCache.getNode();oe(T instanceof We,"serverChildren would be complete if leaf node"),y=FA(s,T)}y=y,g=i.filter.updateFullNode(p,y,l)}else{const y=qe(t);let T=Qg(s,y,e.serverCache);T==null&&e.serverCache.isCompleteForChild(y)&&(T=p.getImmediateChild(y)),T!=null?g=i.filter.updateChild(p,y,T,ct(t),d,l):e.eventCache.getNode().hasChild(y)?g=i.filter.updateChild(p,y,We.EMPTY_NODE,ct(t),d,l):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=ag(s,Sa(e)),c.isLeafNode()&&(g=i.filter.updateFullNode(g,c,l)))}return c=e.serverCache.isFullyInitialized()||vf(s,st())!=null,xu(e,g,c,i.filter.filtersNodes())}}function PD(i,e){const t=Sa(i.viewCache_);return t&&(i.query._queryParams.loadsAllData()||!Ue(e)&&!t.getImmediateChild(qe(e)).isEmpty())?t.getChild(e):null}function sT(i,e,t,s){e.type===xi.MERGE&&e.source.queryId!==null&&(oe(Sa(i.viewCache_),"We should always have a full cache before handling merges"),oe(ig(i.viewCache_),"Missing event cache, even though we have a server cache"));const a=i.viewCache_,l=ND(i.processor_,a,e,t,s);return CD(i.processor_,l.viewCache),oe(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),i.viewCache_=l.viewCache,VD(i,l.changes,l.viewCache.eventCache.getNode())}function VD(i,e,t,s){const a=i.eventRegistrations_;return uD(i.eventGenerator_,e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rT;function LD(i){oe(!rT,"__referenceConstructor has already been defined"),rT=i}function Xg(i,e,t,s){const a=e.source.queryId;if(a!==null){const l=i.views.get(a);return oe(l!=null,"SyncTree gave us an op for an invalid query."),sT(l,e,t,s)}else{let l=[];for(const c of i.views.values())l=l.concat(sT(c,e,t,s));return l}}function $g(i,e){let t=null;for(const s of i.views.values())t=t||PD(s,e);return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aT;function UD(i){oe(!aT,"__referenceConstructor has already been defined"),aT=i}class oT{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ut(null),this.pendingWriteTree_=wD(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function zD(i,e,t,s,a){return dD(i.pendingWriteTree_,e,t,s,a),a?$f(i,new Ta(MA(),e,t)):[]}function Po(i,e,t=!1){const s=mD(i.pendingWriteTree_,e);if(pD(i.pendingWriteTree_,e)){let l=new ut(null);return s.snap!=null?l=l.set(st(),!0):ei(s.children,c=>{l=l.set(new ft(c),!0)}),$f(i,new yf(s.path,l,t))}else return[]}function Xf(i,e,t){return $f(i,new Ta(kA(),e,t))}function jD(i,e,t){const s=ut.fromObject(t);return $f(i,new Fu(kA(),e,s))}function BD(i,e,t,s){const a=XA(i,s);if(a!=null){const l=$A(a),c=l.path,d=l.queryId,p=$n(c,e),g=new Ta(PA(d),p,t);return ZA(i,c,g)}else return[]}function FD(i,e,t,s){const a=XA(i,s);if(a){const l=$A(a),c=l.path,d=l.queryId,p=$n(c,e),g=ut.fromObject(t),y=new Fu(PA(d),p,g);return ZA(i,c,y)}else return[]}function YA(i,e,t){const a=i.pendingWriteTree_,l=i.syncPointTree_.findOnPath(e,(c,d)=>{const p=$n(c,e),g=$g(d,p);if(g)return g});return BA(a,e,l,t,!0)}function $f(i,e){return QA(e,i.syncPointTree_,null,zA(i.pendingWriteTree_,st()))}function QA(i,e,t,s){if(Ue(i.path))return WA(i,e,t,s);{const a=e.get(st());t==null&&a!=null&&(t=$g(a,st()));let l=[];const c=qe(i.path),d=i.operationForChild(c),p=e.children.get(c);if(p&&d){const g=t?t.getImmediateChild(c):null,y=qA(s,c);l=l.concat(QA(d,p,g,y))}return a&&(l=l.concat(Xg(a,i,s,t))),l}}function WA(i,e,t,s){const a=e.get(st());t==null&&a!=null&&(t=$g(a,st()));let l=[];return e.children.inorderTraversal((c,d)=>{const p=t?t.getImmediateChild(c):null,g=qA(s,c),y=i.operationForChild(c);y&&(l=l.concat(WA(y,d,p,g)))}),a&&(l=l.concat(Xg(a,i,s,t))),l}function XA(i,e){return i.tagToQueryMap.get(e)}function $A(i){const e=i.indexOf("$");return oe(e!==-1&&e<i.length-1,"Bad queryKey."),{queryId:i.substr(e+1),path:new ft(i.substr(0,e))}}function ZA(i,e,t){const s=i.syncPointTree_.get(e);oe(s,"Missing sync point for query tag that we're tracking");const a=zA(i.pendingWriteTree_,e);return Xg(s,t,a,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Zg(t)}node(){return this.node_}}class Jg{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Yt(this.path_,e);return new Jg(this.syncTree_,t)}node(){return YA(this.syncTree_,this.path_)}}const qD=function(i){return i=i||{},i.timestamp=i.timestamp||new Date().getTime(),i},lT=function(i,e,t){if(!i||typeof i!="object")return i;if(oe(".sv"in i,"Unexpected leaf node or priority contents"),typeof i[".sv"]=="string")return HD(i[".sv"],e,t);if(typeof i[".sv"]=="object")return GD(i[".sv"],e);oe(!1,"Unexpected server value: "+JSON.stringify(i,null,2))},HD=function(i,e,t){switch(i){case"timestamp":return t.timestamp;default:oe(!1,"Unexpected server value: "+i)}},GD=function(i,e,t){i.hasOwnProperty("increment")||oe(!1,"Unexpected server value: "+JSON.stringify(i,null,2));const s=i.increment;typeof s!="number"&&oe(!1,"Unexpected increment value: "+s);const a=e.node();if(oe(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return s;const c=a.getValue();return typeof c!="number"?s:c+s},KD=function(i,e,t,s){return e_(e,new Jg(t,i),s)},YD=function(i,e,t){return e_(i,new Zg(e),t)};function e_(i,e,t){const s=i.getPriority().val(),a=lT(s,e.getImmediateChild(".priority"),t);let l;if(i.isLeafNode()){const c=i,d=lT(c.getValue(),e,t);return d!==c.getValue()||a!==c.getPriority().val()?new Gt(d,cn(a)):i}else{const c=i;return l=c,a!==c.getPriority().val()&&(l=l.updatePriority(new Gt(a))),c.forEachChild(fn,(d,p)=>{const g=e_(p,e.getImmediateChild(d),t);g!==p&&(l=l.updateImmediateChild(d,g))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function n_(i,e){let t=e instanceof ft?e:new ft(e),s=i,a=qe(t);for(;a!==null;){const l=qo(s.node.children,a)||{children:{},childCount:0};s=new t_(a,s,l),t=ct(t),a=qe(t)}return s}function tl(i){return i.node.value}function JA(i,e){i.node.value=e,ug(i)}function ew(i){return i.node.childCount>0}function QD(i){return tl(i)===void 0&&!ew(i)}function Zf(i,e){ei(i.node.children,(t,s)=>{e(new t_(t,i,s))})}function tw(i,e,t,s){t&&e(i),Zf(i,a=>{tw(a,e,!0)})}function WD(i,e,t){let s=i.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function sc(i){return new ft(i.parent===null?i.name:sc(i.parent)+"/"+i.name)}function ug(i){i.parent!==null&&XD(i.parent,i.name,i)}function XD(i,e,t){const s=QD(t),a=Cs(i.node.children,e);s&&a?(delete i.node.children[e],i.node.childCount--,ug(i)):!s&&!a&&(i.node.children[e]=t.node,i.node.childCount++,ug(i))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $D=/[\[\].#$\/\u0000-\u001F\u007F]/,ZD=/[\[\].#$\u0000-\u001F\u007F]/,zp=10*1024*1024,nw=function(i){return typeof i=="string"&&i.length!==0&&!$D.test(i)},JD=function(i){return typeof i=="string"&&i.length!==0&&!ZD.test(i)},e2=function(i){return i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),JD(i)},iw=function(i,e,t){const s=t instanceof ft?new MN(t,i):t;if(e===void 0)throw new Error(i+"contains undefined "+pa(s));if(typeof e=="function")throw new Error(i+"contains a function "+pa(s)+" with contents = "+e.toString());if(tA(e))throw new Error(i+"contains "+e.toString()+" "+pa(s));if(typeof e=="string"&&e.length>zp/3&&Kf(e)>zp)throw new Error(i+"contains a string greater than "+zp+" utf8 bytes "+pa(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,l=!1;if(ei(e,(c,d)=>{if(c===".value")a=!0;else if(c!==".priority"&&c!==".sv"&&(l=!0,!nw(c)))throw new Error(i+" contains an invalid key ("+c+") "+pa(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);kN(s,c),iw(i,d,s),PN(s)}),a&&l)throw new Error(i+' contains ".value" child '+pa(s)+" in addition to actual children.")}},t2=function(i,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!nw(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!e2(t))throw new Error(xI(i,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function i2(i,e){let t=null;for(let s=0;s<e.length;s++){const a=e[s],l=a.getPath();t!==null&&!bA(l,t.path)&&(i.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(a)}t&&i.eventLists_.push(t)}function Da(i,e,t){i2(i,t),s2(i,s=>li(s,e)||li(e,s))}function s2(i,e){i.recursionDepth_++;let t=!0;for(let s=0;s<i.eventLists_.length;s++){const a=i.eventLists_[s];if(a){const l=a.path;e(l)?(r2(i.eventLists_[s]),i.eventLists_[s]=null):t=!1}}t&&(i.eventLists_=[]),i.recursionDepth_--}function r2(i){for(let e=0;e<i.events.length;e++){const t=i.events[e];if(t!==null){i.events[e]=null;const s=t.getEventRunner();Du&&un("event: "+t.toString()),nc(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a2="repo_interrupt",o2=25;class l2{constructor(e,t,s,a){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new n2,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=_f(),this.transactionQueueTree_=new t_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function u2(i,e,t){if(i.stats_=Fg(i.repoInfo_),i.forceRestClient_||sN())i.server_=new gf(i.repoInfo_,(s,a,l,c)=>{uT(i,s,a,l,c)},i.authTokenProvider_,i.appCheckProvider_),setTimeout(()=>cT(i,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{en(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}i.persistentConnection_=new ys(i.repoInfo_,e,(s,a,l,c)=>{uT(i,s,a,l,c)},s=>{cT(i,s)},s=>{h2(i,s)},i.authTokenProvider_,i.appCheckProvider_,t),i.server_=i.persistentConnection_}i.authTokenProvider_.addTokenChangeListener(s=>{i.server_.refreshAuthToken(s)}),i.appCheckProvider_.addTokenChangeListener(s=>{i.server_.refreshAppCheckToken(s.token)}),i.statsReporter_=uN(i.repoInfo_,()=>new lD(i.stats_,i.server_)),i.infoData_=new iD,i.infoSyncTree_=new oT({startListening:(s,a,l,c)=>{let d=[];const p=i.infoData_.getNode(s._path);return p.isEmpty()||(d=Xf(i.infoSyncTree_,s._path,p),setTimeout(()=>{c("ok")},0)),d},stopListening:()=>{}}),i_(i,"connected",!1),i.serverSyncTree_=new oT({startListening:(s,a,l,c)=>(i.server_.listen(s,l,a,(d,p)=>{const g=c(d,p);Da(i.eventQueue_,s._path,g)}),[]),stopListening:(s,a)=>{i.server_.unlisten(s,a)}})}function c2(i){const t=i.infoData_.getNode(new ft(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function sw(i){return qD({timestamp:c2(i)})}function uT(i,e,t,s,a){i.dataUpdateCount++;const l=new ft(e);t=i.interceptServerDataCallback_?i.interceptServerDataCallback_(e,t):t;let c=[];if(a)if(s){const p=hf(t,g=>cn(g));c=FD(i.serverSyncTree_,l,p,a)}else{const p=cn(t);c=BD(i.serverSyncTree_,l,p,a)}else if(s){const p=hf(t,g=>cn(g));c=jD(i.serverSyncTree_,l,p)}else{const p=cn(t);c=Xf(i.serverSyncTree_,l,p)}let d=l;c.length>0&&(d=r_(i,l)),Da(i.eventQueue_,d,c)}function cT(i,e){i_(i,"connected",e),e===!1&&d2(i)}function h2(i,e){ei(e,(t,s)=>{i_(i,t,s)})}function i_(i,e,t){const s=new ft("/.info/"+e),a=cn(t);i.infoData_.updateSnapshot(s,a);const l=Xf(i.infoSyncTree_,s,a);Da(i.eventQueue_,s,l)}function f2(i){return i.nextWriteId_++}function d2(i){rw(i,"onDisconnectEvents");const e=sw(i),t=_f();ng(i.onDisconnect_,st(),(a,l)=>{const c=KD(a,l,i.serverSyncTree_,e);xA(t,a,c)});let s=[];ng(t,st(),(a,l)=>{s=s.concat(Xf(i.serverSyncTree_,a,l));const c=_2(i,a);r_(i,c)}),i.onDisconnect_=_f(),Da(i.eventQueue_,st(),s)}function m2(i){i.persistentConnection_&&i.persistentConnection_.interrupt(a2)}function rw(i,...e){let t="";i.persistentConnection_&&(t=i.persistentConnection_.id+":"),un(t,...e)}function aw(i,e,t){return YA(i.serverSyncTree_,e,t)||We.EMPTY_NODE}function s_(i,e=i.transactionQueueTree_){if(e||Jf(i,e),tl(e)){const t=lw(i,e);oe(t.length>0,"Sending zero length transaction queue"),t.every(a=>a.status===0)&&p2(i,sc(e),t)}else ew(e)&&Zf(e,t=>{s_(i,t)})}function p2(i,e,t){const s=t.map(g=>g.currentWriteId),a=aw(i,e,s);let l=a;const c=a.hash();for(let g=0;g<t.length;g++){const y=t[g];oe(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const T=$n(e,y.path);l=l.updateChild(T,y.currentOutputSnapshotRaw)}const d=l.val(!0),p=e;i.server_.put(p.toString(),d,g=>{rw(i,"transaction put response",{path:p.toString(),status:g});let y=[];if(g==="ok"){const T=[];for(let w=0;w<t.length;w++)t[w].status=2,y=y.concat(Po(i.serverSyncTree_,t[w].currentWriteId)),t[w].onComplete&&T.push(()=>t[w].onComplete(null,!0,t[w].currentOutputSnapshotResolved)),t[w].unwatcher();Jf(i,n_(i.transactionQueueTree_,e)),s_(i,i.transactionQueueTree_),Da(i.eventQueue_,e,y);for(let w=0;w<T.length;w++)nc(T[w])}else{if(g==="datastale")for(let T=0;T<t.length;T++)t[T].status===3?t[T].status=4:t[T].status=0;else{Vn("transaction at "+p.toString()+" failed: "+g);for(let T=0;T<t.length;T++)t[T].status=4,t[T].abortReason=g}r_(i,e)}},c)}function r_(i,e){const t=ow(i,e),s=sc(t),a=lw(i,t);return g2(i,a,s),s}function g2(i,e,t){if(e.length===0)return;const s=[];let a=[];const c=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const p=e[d],g=$n(t,p.path);let y=!1,T;if(oe(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)y=!0,T=p.abortReason,a=a.concat(Po(i.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=o2)y=!0,T="maxretry",a=a.concat(Po(i.serverSyncTree_,p.currentWriteId,!0));else{const w=aw(i,p.path,c);p.currentInputSnapshot=w;const P=e[d].update(w.val());if(P!==void 0){iw("transaction failed: Data returned ",P,p.path);let B=cn(P);typeof P=="object"&&P!=null&&Cs(P,".priority")||(B=B.updatePriority(w.getPriority()));const $=p.currentWriteId,_e=sw(i),de=YD(B,w,_e);p.currentOutputSnapshotRaw=B,p.currentOutputSnapshotResolved=de,p.currentWriteId=f2(i),c.splice(c.indexOf($),1),a=a.concat(zD(i.serverSyncTree_,p.path,de,p.currentWriteId,p.applyLocally)),a=a.concat(Po(i.serverSyncTree_,$,!0))}else y=!0,T="nodata",a=a.concat(Po(i.serverSyncTree_,p.currentWriteId,!0))}Da(i.eventQueue_,t,a),a=[],y&&(e[d].status=2,function(w){setTimeout(w,Math.floor(0))}(e[d].unwatcher),e[d].onComplete&&(T==="nodata"?s.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):s.push(()=>e[d].onComplete(new Error(T),!1,null))))}Jf(i,i.transactionQueueTree_);for(let d=0;d<s.length;d++)nc(s[d]);s_(i,i.transactionQueueTree_)}function ow(i,e){let t,s=i.transactionQueueTree_;for(t=qe(e);t!==null&&tl(s)===void 0;)s=n_(s,t),e=ct(e),t=qe(e);return s}function lw(i,e){const t=[];return uw(i,e,t),t.sort((s,a)=>s.order-a.order),t}function uw(i,e,t){const s=tl(e);if(s)for(let a=0;a<s.length;a++)t.push(s[a]);Zf(e,a=>{uw(i,a,t)})}function Jf(i,e){const t=tl(e);if(t){let s=0;for(let a=0;a<t.length;a++)t[a].status!==2&&(t[s]=t[a],s++);t.length=s,JA(e,t.length>0?t:void 0)}Zf(e,s=>{Jf(i,s)})}function _2(i,e){const t=sc(ow(i,e)),s=n_(i.transactionQueueTree_,e);return WD(s,a=>{jp(i,a)}),jp(i,s),tw(s,a=>{jp(i,a)}),t}function jp(i,e){const t=tl(e);if(t){const s=[];let a=[],l=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(oe(l===c-1,"All SENT items should be at beginning of queue."),l=c,t[c].status=3,t[c].abortReason="set"):(oe(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),a=a.concat(Po(i.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&s.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));l===-1?JA(e,void 0):t.length=l+1,Da(i.eventQueue_,sc(e),a);for(let c=0;c<s.length;c++)nc(s[c])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y2(i){let e="";const t=i.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let a=t[s];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function v2(i){const e={};i.charAt(0)==="?"&&(i=i.substring(1));for(const t of i.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Vn(`Invalid query segment '${t}' in query '${i}'`)}return e}const hT=function(i,e){const t=E2(i),s=t.namespace;t.domain==="firebase.com"&&As(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&As("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||XC();const a=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new dA(t.host,t.secure,s,a,e,"",s!==t.subdomain),path:new ft(t.pathString)}},E2=function(i){let e="",t="",s="",a="",l="",c=!0,d="https",p=443;if(typeof i=="string"){let g=i.indexOf("//");g>=0&&(d=i.substring(0,g-1),i=i.substring(g+2));let y=i.indexOf("/");y===-1&&(y=i.length);let T=i.indexOf("?");T===-1&&(T=i.length),e=i.substring(0,Math.min(y,T)),y<T&&(a=y2(i.substring(y,T)));const w=v2(i.substring(Math.min(i.length,T)));g=e.indexOf(":"),g>=0?(c=d==="https"||d==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const P=e.slice(0,g);if(P.toLowerCase()==="localhost")t="localhost";else if(P.split(".").length<=2)t=P;else{const B=e.indexOf(".");s=e.substring(0,B).toLowerCase(),t=e.substring(B+1),l=s}"ns"in w&&(l=w.ns)}return{host:e,port:p,domain:t,subdomain:s,secure:c,scheme:d,pathString:a,namespace:l}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e,t,s,a){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=a}get key(){return Ue(this._path)?null:SA(this._path)}get ref(){return new nl(this._repo,this._path)}get _queryIdentifier(){const e=XE(this._queryParams),t=jg(e);return t==="{}"?"default":t}get _queryObject(){return XE(this._queryParams)}isEqual(e){if(e=gt(e),!(e instanceof a_))return!1;const t=this._repo===e._repo,s=bA(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return t&&s&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+xN(this._path)}}class nl extends a_{constructor(e,t){super(e,t,new Kg,!1)}get parent(){const e=wA(this._path);return e===null?null:new nl(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}LD(nl);UD(nl);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T2="FIREBASE_DATABASE_EMULATOR_HOST",cg={};let S2=!1;function A2(i,e,t,s){const a=e.lastIndexOf(":"),l=e.substring(0,a),c=Is(l);i.repoInfo_=new dA(e,c,i.repoInfo_.namespace,i.repoInfo_.webSocketOnly,i.repoInfo_.nodeAdmin,i.repoInfo_.persistenceKey,i.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(i.authTokenProvider_=s)}function w2(i,e,t,s,a){let l=s||i.options.databaseURL;l===void 0&&(i.options.projectId||As("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),un("Using default host for project ",i.options.projectId),l=`${i.options.projectId}-default-rtdb.firebaseio.com`);let c=hT(l,a),d=c.repoInfo,p;typeof process<"u"&&OE&&(p=OE[T2]),p?(l=`http://${p}?ns=${d.namespace}`,c=hT(l,a),d=c.repoInfo):c.repoInfo.secure;const g=new aN(i.name,i.options,e);t2("Invalid Firebase Database URL",c),Ue(c.path)||As("Database URL must point to the root of a Firebase Database (not including a child path).");const y=R2(d,i,g,new rN(i,t));return new I2(y,i)}function b2(i,e){const t=cg[e];(!t||t[i.key]!==i)&&As(`Database ${e}(${i.repoInfo_}) has already been deleted.`),m2(i),delete t[i.key]}function R2(i,e,t,s){let a=cg[e.name];a||(a={},cg[e.name]=a);let l=a[i.toURLString()];return l&&As("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new l2(i,S2,t,s),a[i.toURLString()]=l,l}class I2{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(u2(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new nl(this._repo,st())),this._rootInternal}_delete(){return this._rootInternal!==null&&(b2(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&As("Cannot call "+e+" on a deleted database.")}}function C2(i=Qf(),e){const t=Ju(i,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Vg("database");s&&N2(t,...s)}return t}function N2(i,e,t,s={}){i=gt(i),i._checkNotDeleted("useEmulator");const a=`${e}:${t}`,l=i._repoInternal;if(i._instanceStarted){if(a===i._repoInternal.repoInfo_.host&&_r(s,l.repoInfo_.emulatorOptions))return;As("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let c;if(l.repoInfo_.nodeAdmin)s.mockUserToken&&As('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),c=new Xh(Xh.OWNER);else if(s.mockUserToken){const d=typeof s.mockUserToken=="string"?s.mockUserToken:HS(s.mockUserToken,i.app.options.projectId);c=new Xh(d)}Is(e)&&(Hf(e),Gf("Database",!0)),A2(l,a,s,c)}/**
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
 */function D2(i){HC(Ca),yr(new Ts("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return w2(s,a,l,t)},"PUBLIC").setMultipleInstances(!0)),Zn(xE,ME,i),Zn(xE,ME,"esm2017")}ys.prototype.simpleListen=function(i,e){this.sendRequest("q",{p:i},e)};ys.prototype.echo=function(i,e){this.sendRequest("echo",{d:i},e)};D2();var fT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pr,cw;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(M,R){function C(){}C.prototype=R.prototype,M.D=R.prototype,M.prototype=new C,M.prototype.constructor=M,M.C=function(x,k,D){for(var b=Array(arguments.length-2),re=2;re<arguments.length;re++)b[re-2]=arguments[re];return R.prototype[k].apply(x,b)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(M,R,C){C||(C=0);var x=Array(16);if(typeof R=="string")for(var k=0;16>k;++k)x[k]=R.charCodeAt(C++)|R.charCodeAt(C++)<<8|R.charCodeAt(C++)<<16|R.charCodeAt(C++)<<24;else for(k=0;16>k;++k)x[k]=R[C++]|R[C++]<<8|R[C++]<<16|R[C++]<<24;R=M.g[0],C=M.g[1],k=M.g[2];var D=M.g[3],b=R+(D^C&(k^D))+x[0]+3614090360&4294967295;R=C+(b<<7&4294967295|b>>>25),b=D+(k^R&(C^k))+x[1]+3905402710&4294967295,D=R+(b<<12&4294967295|b>>>20),b=k+(C^D&(R^C))+x[2]+606105819&4294967295,k=D+(b<<17&4294967295|b>>>15),b=C+(R^k&(D^R))+x[3]+3250441966&4294967295,C=k+(b<<22&4294967295|b>>>10),b=R+(D^C&(k^D))+x[4]+4118548399&4294967295,R=C+(b<<7&4294967295|b>>>25),b=D+(k^R&(C^k))+x[5]+1200080426&4294967295,D=R+(b<<12&4294967295|b>>>20),b=k+(C^D&(R^C))+x[6]+2821735955&4294967295,k=D+(b<<17&4294967295|b>>>15),b=C+(R^k&(D^R))+x[7]+4249261313&4294967295,C=k+(b<<22&4294967295|b>>>10),b=R+(D^C&(k^D))+x[8]+1770035416&4294967295,R=C+(b<<7&4294967295|b>>>25),b=D+(k^R&(C^k))+x[9]+2336552879&4294967295,D=R+(b<<12&4294967295|b>>>20),b=k+(C^D&(R^C))+x[10]+4294925233&4294967295,k=D+(b<<17&4294967295|b>>>15),b=C+(R^k&(D^R))+x[11]+2304563134&4294967295,C=k+(b<<22&4294967295|b>>>10),b=R+(D^C&(k^D))+x[12]+1804603682&4294967295,R=C+(b<<7&4294967295|b>>>25),b=D+(k^R&(C^k))+x[13]+4254626195&4294967295,D=R+(b<<12&4294967295|b>>>20),b=k+(C^D&(R^C))+x[14]+2792965006&4294967295,k=D+(b<<17&4294967295|b>>>15),b=C+(R^k&(D^R))+x[15]+1236535329&4294967295,C=k+(b<<22&4294967295|b>>>10),b=R+(k^D&(C^k))+x[1]+4129170786&4294967295,R=C+(b<<5&4294967295|b>>>27),b=D+(C^k&(R^C))+x[6]+3225465664&4294967295,D=R+(b<<9&4294967295|b>>>23),b=k+(R^C&(D^R))+x[11]+643717713&4294967295,k=D+(b<<14&4294967295|b>>>18),b=C+(D^R&(k^D))+x[0]+3921069994&4294967295,C=k+(b<<20&4294967295|b>>>12),b=R+(k^D&(C^k))+x[5]+3593408605&4294967295,R=C+(b<<5&4294967295|b>>>27),b=D+(C^k&(R^C))+x[10]+38016083&4294967295,D=R+(b<<9&4294967295|b>>>23),b=k+(R^C&(D^R))+x[15]+3634488961&4294967295,k=D+(b<<14&4294967295|b>>>18),b=C+(D^R&(k^D))+x[4]+3889429448&4294967295,C=k+(b<<20&4294967295|b>>>12),b=R+(k^D&(C^k))+x[9]+568446438&4294967295,R=C+(b<<5&4294967295|b>>>27),b=D+(C^k&(R^C))+x[14]+3275163606&4294967295,D=R+(b<<9&4294967295|b>>>23),b=k+(R^C&(D^R))+x[3]+4107603335&4294967295,k=D+(b<<14&4294967295|b>>>18),b=C+(D^R&(k^D))+x[8]+1163531501&4294967295,C=k+(b<<20&4294967295|b>>>12),b=R+(k^D&(C^k))+x[13]+2850285829&4294967295,R=C+(b<<5&4294967295|b>>>27),b=D+(C^k&(R^C))+x[2]+4243563512&4294967295,D=R+(b<<9&4294967295|b>>>23),b=k+(R^C&(D^R))+x[7]+1735328473&4294967295,k=D+(b<<14&4294967295|b>>>18),b=C+(D^R&(k^D))+x[12]+2368359562&4294967295,C=k+(b<<20&4294967295|b>>>12),b=R+(C^k^D)+x[5]+4294588738&4294967295,R=C+(b<<4&4294967295|b>>>28),b=D+(R^C^k)+x[8]+2272392833&4294967295,D=R+(b<<11&4294967295|b>>>21),b=k+(D^R^C)+x[11]+1839030562&4294967295,k=D+(b<<16&4294967295|b>>>16),b=C+(k^D^R)+x[14]+4259657740&4294967295,C=k+(b<<23&4294967295|b>>>9),b=R+(C^k^D)+x[1]+2763975236&4294967295,R=C+(b<<4&4294967295|b>>>28),b=D+(R^C^k)+x[4]+1272893353&4294967295,D=R+(b<<11&4294967295|b>>>21),b=k+(D^R^C)+x[7]+4139469664&4294967295,k=D+(b<<16&4294967295|b>>>16),b=C+(k^D^R)+x[10]+3200236656&4294967295,C=k+(b<<23&4294967295|b>>>9),b=R+(C^k^D)+x[13]+681279174&4294967295,R=C+(b<<4&4294967295|b>>>28),b=D+(R^C^k)+x[0]+3936430074&4294967295,D=R+(b<<11&4294967295|b>>>21),b=k+(D^R^C)+x[3]+3572445317&4294967295,k=D+(b<<16&4294967295|b>>>16),b=C+(k^D^R)+x[6]+76029189&4294967295,C=k+(b<<23&4294967295|b>>>9),b=R+(C^k^D)+x[9]+3654602809&4294967295,R=C+(b<<4&4294967295|b>>>28),b=D+(R^C^k)+x[12]+3873151461&4294967295,D=R+(b<<11&4294967295|b>>>21),b=k+(D^R^C)+x[15]+530742520&4294967295,k=D+(b<<16&4294967295|b>>>16),b=C+(k^D^R)+x[2]+3299628645&4294967295,C=k+(b<<23&4294967295|b>>>9),b=R+(k^(C|~D))+x[0]+4096336452&4294967295,R=C+(b<<6&4294967295|b>>>26),b=D+(C^(R|~k))+x[7]+1126891415&4294967295,D=R+(b<<10&4294967295|b>>>22),b=k+(R^(D|~C))+x[14]+2878612391&4294967295,k=D+(b<<15&4294967295|b>>>17),b=C+(D^(k|~R))+x[5]+4237533241&4294967295,C=k+(b<<21&4294967295|b>>>11),b=R+(k^(C|~D))+x[12]+1700485571&4294967295,R=C+(b<<6&4294967295|b>>>26),b=D+(C^(R|~k))+x[3]+2399980690&4294967295,D=R+(b<<10&4294967295|b>>>22),b=k+(R^(D|~C))+x[10]+4293915773&4294967295,k=D+(b<<15&4294967295|b>>>17),b=C+(D^(k|~R))+x[1]+2240044497&4294967295,C=k+(b<<21&4294967295|b>>>11),b=R+(k^(C|~D))+x[8]+1873313359&4294967295,R=C+(b<<6&4294967295|b>>>26),b=D+(C^(R|~k))+x[15]+4264355552&4294967295,D=R+(b<<10&4294967295|b>>>22),b=k+(R^(D|~C))+x[6]+2734768916&4294967295,k=D+(b<<15&4294967295|b>>>17),b=C+(D^(k|~R))+x[13]+1309151649&4294967295,C=k+(b<<21&4294967295|b>>>11),b=R+(k^(C|~D))+x[4]+4149444226&4294967295,R=C+(b<<6&4294967295|b>>>26),b=D+(C^(R|~k))+x[11]+3174756917&4294967295,D=R+(b<<10&4294967295|b>>>22),b=k+(R^(D|~C))+x[2]+718787259&4294967295,k=D+(b<<15&4294967295|b>>>17),b=C+(D^(k|~R))+x[9]+3951481745&4294967295,M.g[0]=M.g[0]+R&4294967295,M.g[1]=M.g[1]+(k+(b<<21&4294967295|b>>>11))&4294967295,M.g[2]=M.g[2]+k&4294967295,M.g[3]=M.g[3]+D&4294967295}s.prototype.u=function(M,R){R===void 0&&(R=M.length);for(var C=R-this.blockSize,x=this.B,k=this.h,D=0;D<R;){if(k==0)for(;D<=C;)a(this,M,D),D+=this.blockSize;if(typeof M=="string"){for(;D<R;)if(x[k++]=M.charCodeAt(D++),k==this.blockSize){a(this,x),k=0;break}}else for(;D<R;)if(x[k++]=M[D++],k==this.blockSize){a(this,x),k=0;break}}this.h=k,this.o+=R},s.prototype.v=function(){var M=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);M[0]=128;for(var R=1;R<M.length-8;++R)M[R]=0;var C=8*this.o;for(R=M.length-8;R<M.length;++R)M[R]=C&255,C/=256;for(this.u(M),M=Array(16),R=C=0;4>R;++R)for(var x=0;32>x;x+=8)M[C++]=this.g[R]>>>x&255;return M};function l(M,R){var C=d;return Object.prototype.hasOwnProperty.call(C,M)?C[M]:C[M]=R(M)}function c(M,R){this.h=R;for(var C=[],x=!0,k=M.length-1;0<=k;k--){var D=M[k]|0;x&&D==R||(C[k]=D,x=!1)}this.g=C}var d={};function p(M){return-128<=M&&128>M?l(M,function(R){return new c([R|0],0>R?-1:0)}):new c([M|0],0>M?-1:0)}function g(M){if(isNaN(M)||!isFinite(M))return T;if(0>M)return $(g(-M));for(var R=[],C=1,x=0;M>=C;x++)R[x]=M/C|0,C*=4294967296;return new c(R,0)}function y(M,R){if(M.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(M.charAt(0)=="-")return $(y(M.substring(1),R));if(0<=M.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=g(Math.pow(R,8)),x=T,k=0;k<M.length;k+=8){var D=Math.min(8,M.length-k),b=parseInt(M.substring(k,k+D),R);8>D?(D=g(Math.pow(R,D)),x=x.j(D).add(g(b))):(x=x.j(C),x=x.add(g(b)))}return x}var T=p(0),w=p(1),P=p(16777216);i=c.prototype,i.m=function(){if(J(this))return-$(this).m();for(var M=0,R=1,C=0;C<this.g.length;C++){var x=this.i(C);M+=(0<=x?x:4294967296+x)*R,R*=4294967296}return M},i.toString=function(M){if(M=M||10,2>M||36<M)throw Error("radix out of range: "+M);if(B(this))return"0";if(J(this))return"-"+$(this).toString(M);for(var R=g(Math.pow(M,6)),C=this,x="";;){var k=Ce(C,R).g;C=_e(C,k.j(R));var D=((0<C.g.length?C.g[0]:C.h)>>>0).toString(M);if(C=k,B(C))return D+x;for(;6>D.length;)D="0"+D;x=D+x}},i.i=function(M){return 0>M?0:M<this.g.length?this.g[M]:this.h};function B(M){if(M.h!=0)return!1;for(var R=0;R<M.g.length;R++)if(M.g[R]!=0)return!1;return!0}function J(M){return M.h==-1}i.l=function(M){return M=_e(this,M),J(M)?-1:B(M)?0:1};function $(M){for(var R=M.g.length,C=[],x=0;x<R;x++)C[x]=~M.g[x];return new c(C,~M.h).add(w)}i.abs=function(){return J(this)?$(this):this},i.add=function(M){for(var R=Math.max(this.g.length,M.g.length),C=[],x=0,k=0;k<=R;k++){var D=x+(this.i(k)&65535)+(M.i(k)&65535),b=(D>>>16)+(this.i(k)>>>16)+(M.i(k)>>>16);x=b>>>16,D&=65535,b&=65535,C[k]=b<<16|D}return new c(C,C[C.length-1]&-2147483648?-1:0)};function _e(M,R){return M.add($(R))}i.j=function(M){if(B(this)||B(M))return T;if(J(this))return J(M)?$(this).j($(M)):$($(this).j(M));if(J(M))return $(this.j($(M)));if(0>this.l(P)&&0>M.l(P))return g(this.m()*M.m());for(var R=this.g.length+M.g.length,C=[],x=0;x<2*R;x++)C[x]=0;for(x=0;x<this.g.length;x++)for(var k=0;k<M.g.length;k++){var D=this.i(x)>>>16,b=this.i(x)&65535,re=M.i(k)>>>16,ae=M.i(k)&65535;C[2*x+2*k]+=b*ae,de(C,2*x+2*k),C[2*x+2*k+1]+=D*ae,de(C,2*x+2*k+1),C[2*x+2*k+1]+=b*re,de(C,2*x+2*k+1),C[2*x+2*k+2]+=D*re,de(C,2*x+2*k+2)}for(x=0;x<R;x++)C[x]=C[2*x+1]<<16|C[2*x];for(x=R;x<2*R;x++)C[x]=0;return new c(C,0)};function de(M,R){for(;(M[R]&65535)!=M[R];)M[R+1]+=M[R]>>>16,M[R]&=65535,R++}function he(M,R){this.g=M,this.h=R}function Ce(M,R){if(B(R))throw Error("division by zero");if(B(M))return new he(T,T);if(J(M))return R=Ce($(M),R),new he($(R.g),$(R.h));if(J(R))return R=Ce(M,$(R)),new he($(R.g),R.h);if(30<M.g.length){if(J(M)||J(R))throw Error("slowDivide_ only works with positive integers.");for(var C=w,x=R;0>=x.l(M);)C=me(C),x=me(x);var k=Ie(C,1),D=Ie(x,1);for(x=Ie(x,2),C=Ie(C,2);!B(x);){var b=D.add(x);0>=b.l(M)&&(k=k.add(C),D=b),x=Ie(x,1),C=Ie(C,1)}return R=_e(M,k.j(R)),new he(k,R)}for(k=T;0<=M.l(R);){for(C=Math.max(1,Math.floor(M.m()/R.m())),x=Math.ceil(Math.log(C)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),D=g(C),b=D.j(R);J(b)||0<b.l(M);)C-=x,D=g(C),b=D.j(R);B(D)&&(D=w),k=k.add(D),M=_e(M,b)}return new he(k,M)}i.A=function(M){return Ce(this,M).h},i.and=function(M){for(var R=Math.max(this.g.length,M.g.length),C=[],x=0;x<R;x++)C[x]=this.i(x)&M.i(x);return new c(C,this.h&M.h)},i.or=function(M){for(var R=Math.max(this.g.length,M.g.length),C=[],x=0;x<R;x++)C[x]=this.i(x)|M.i(x);return new c(C,this.h|M.h)},i.xor=function(M){for(var R=Math.max(this.g.length,M.g.length),C=[],x=0;x<R;x++)C[x]=this.i(x)^M.i(x);return new c(C,this.h^M.h)};function me(M){for(var R=M.g.length+1,C=[],x=0;x<R;x++)C[x]=M.i(x)<<1|M.i(x-1)>>>31;return new c(C,M.h)}function Ie(M,R){var C=R>>5;R%=32;for(var x=M.g.length-C,k=[],D=0;D<x;D++)k[D]=0<R?M.i(D+C)>>>R|M.i(D+C+1)<<32-R:M.i(D+C);return new c(k,M.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,cw=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=y,pr=c}).apply(typeof fT<"u"?fT:typeof self<"u"?self:typeof window<"u"?window:{});var qh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hw,bu,fw,Zh,hg,dw,mw,pw;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,v){return h==Array.prototype||h==Object.prototype||(h[_]=v.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof qh=="object"&&qh];for(var _=0;_<h.length;++_){var v=h[_];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=t(this);function a(h,_){if(_)e:{var v=s;h=h.split(".");for(var A=0;A<h.length-1;A++){var U=h[A];if(!(U in v))break e;v=v[U]}h=h[h.length-1],A=v[h],_=_(A),_!=A&&_!=null&&e(v,h,{configurable:!0,writable:!0,value:_})}}function l(h,_){h instanceof String&&(h+="");var v=0,A=!1,U={next:function(){if(!A&&v<h.length){var H=v++;return{value:_(H,h[H]),done:!1}}return A=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}a("Array.prototype.values",function(h){return h||function(){return l(this,function(_,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function g(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function y(h,_,v){return h.call.apply(h.bind,arguments)}function T(h,_,v){if(!h)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,A),h.apply(_,U)}}return function(){return h.apply(_,arguments)}}function w(h,_,v){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:T,w.apply(null,arguments)}function P(h,_){var v=Array.prototype.slice.call(arguments,1);return function(){var A=v.slice();return A.push.apply(A,arguments),h.apply(this,A)}}function B(h,_){function v(){}v.prototype=_.prototype,h.aa=_.prototype,h.prototype=new v,h.prototype.constructor=h,h.Qb=function(A,U,H){for(var se=Array(arguments.length-2),ze=2;ze<arguments.length;ze++)se[ze-2]=arguments[ze];return _.prototype[U].apply(A,se)}}function J(h){const _=h.length;if(0<_){const v=Array(_);for(let A=0;A<_;A++)v[A]=h[A];return v}return[]}function $(h,_){for(let v=1;v<arguments.length;v++){const A=arguments[v];if(p(A)){const U=h.length||0,H=A.length||0;h.length=U+H;for(let se=0;se<H;se++)h[U+se]=A[se]}else h.push(A)}}class _e{constructor(_,v){this.i=_,this.j=v,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function de(h){return/^[\s\xa0]*$/.test(h)}function he(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function Ce(h){return Ce[" "](h),h}Ce[" "]=function(){};var me=he().indexOf("Gecko")!=-1&&!(he().toLowerCase().indexOf("webkit")!=-1&&he().indexOf("Edge")==-1)&&!(he().indexOf("Trident")!=-1||he().indexOf("MSIE")!=-1)&&he().indexOf("Edge")==-1;function Ie(h,_,v){for(const A in h)_.call(v,h[A],A,h)}function M(h,_){for(const v in h)_.call(void 0,h[v],v,h)}function R(h){const _={};for(const v in h)_[v]=h[v];return _}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(h,_){let v,A;for(let U=1;U<arguments.length;U++){A=arguments[U];for(v in A)h[v]=A[v];for(let H=0;H<C.length;H++)v=C[H],Object.prototype.hasOwnProperty.call(A,v)&&(h[v]=A[v])}}function k(h){var _=1;h=h.split(":");const v=[];for(;0<_&&h.length;)v.push(h.shift()),_--;return h.length&&v.push(h.join(":")),v}function D(h){d.setTimeout(()=>{throw h},0)}function b(){var h=fe;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class re{constructor(){this.h=this.g=null}add(_,v){const A=ae.get();A.set(_,v),this.h?this.h.next=A:this.g=A,this.h=A}}var ae=new _e(()=>new V,h=>h.reset());class V{constructor(){this.next=this.g=this.h=null}set(_,v){this.h=_,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let Y,ie=!1,fe=new re,N=()=>{const h=d.Promise.resolve(void 0);Y=()=>{h.then(W)}};var W=()=>{for(var h;h=b();){try{h.h.call(h.g)}catch(v){D(v)}var _=ae;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}ie=!1};function ne(){this.s=this.s,this.C=this.C}ne.prototype.s=!1,ne.prototype.ma=function(){this.s||(this.s=!0,this.N())},ne.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function te(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}te.prototype.h=function(){this.defaultPrevented=!0};var ye=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const v=()=>{};d.addEventListener("test",v,_),d.removeEventListener("test",v,_)}catch{}return h}();function xe(h,_){if(te.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var v=this.type=h.type,A=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(me){e:{try{Ce(_.nodeName);var U=!0;break e}catch{}U=!1}U||(_=null)}}else v=="mouseover"?_=h.fromElement:v=="mouseout"&&(_=h.toElement);this.relatedTarget=_,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:we[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&xe.aa.h.call(this)}}B(xe,te);var we={2:"touch",3:"pen",4:"mouse"};xe.prototype.h=function(){xe.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var zt="closure_listenable_"+(1e6*Math.random()|0),at=0;function di(h,_,v,A,U){this.listener=h,this.proxy=null,this.src=_,this.type=v,this.capture=!!A,this.ha=U,this.key=++at,this.da=this.fa=!1}function Ns(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function Fi(h){this.src=h,this.g={},this.h=0}Fi.prototype.add=function(h,_,v,A,U){var H=h.toString();h=this.g[H],h||(h=this.g[H]=[],this.h++);var se=xr(h,_,A,U);return-1<se?(_=h[se],v||(_.fa=!1)):(_=new di(_,this.src,H,!!A,U),_.fa=v,h.push(_)),_};function Or(h,_){var v=_.type;if(v in h.g){var A=h.g[v],U=Array.prototype.indexOf.call(A,_,void 0),H;(H=0<=U)&&Array.prototype.splice.call(A,U,1),H&&(Ns(_),h.g[v].length==0&&(delete h.g[v],h.h--))}}function xr(h,_,v,A){for(var U=0;U<h.length;++U){var H=h[U];if(!H.da&&H.listener==_&&H.capture==!!v&&H.ha==A)return U}return-1}var Mr="closure_lm_"+(1e6*Math.random()|0),ll={};function _c(h,_,v,A,U){if(Array.isArray(_)){for(var H=0;H<_.length;H++)_c(h,_[H],v,A,U);return null}return v=yc(v),h&&h[zt]?h.K(_,v,g(A)?!!A.capture:!1,U):Ln(h,_,v,!1,A,U)}function Ln(h,_,v,A,U,H){if(!_)throw Error("Invalid event type");var se=g(U)?!!U.capture:!!U,ze=Va(h);if(ze||(h[Mr]=ze=new Fi(h)),v=ze.add(_,v,A,se,H),v.proxy)return v;if(A=Ad(),v.proxy=A,A.src=h,A.listener=v,h.addEventListener)ye||(U=se),U===void 0&&(U=!1),h.addEventListener(_.toString(),A,U);else if(h.attachEvent)h.attachEvent(kr(_.toString()),A);else if(h.addListener&&h.removeListener)h.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Ad(){function h(v){return _.call(h.src,h.listener,v)}const _=wd;return h}function ul(h,_,v,A,U){if(Array.isArray(_))for(var H=0;H<_.length;H++)ul(h,_[H],v,A,U);else A=g(A)?!!A.capture:!!A,v=yc(v),h&&h[zt]?(h=h.i,_=String(_).toString(),_ in h.g&&(H=h.g[_],v=xr(H,v,A,U),-1<v&&(Ns(H[v]),Array.prototype.splice.call(H,v,1),H.length==0&&(delete h.g[_],h.h--)))):h&&(h=Va(h))&&(_=h.g[_.toString()],h=-1,_&&(h=xr(_,v,A,U)),(v=-1<h?_[h]:null)&&Pa(v))}function Pa(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[zt])Or(_.i,h);else{var v=h.type,A=h.proxy;_.removeEventListener?_.removeEventListener(v,A,h.capture):_.detachEvent?_.detachEvent(kr(v),A):_.addListener&&_.removeListener&&_.removeListener(A),(v=Va(_))?(Or(v,h),v.h==0&&(v.src=null,_[Mr]=null)):Ns(h)}}}function kr(h){return h in ll?ll[h]:ll[h]="on"+h}function wd(h,_){if(h.da)h=!0;else{_=new xe(_,this);var v=h.listener,A=h.ha||h.src;h.fa&&Pa(h),h=v.call(A,_)}return h}function Va(h){return h=h[Mr],h instanceof Fi?h:null}var cl="__closure_events_fn_"+(1e9*Math.random()>>>0);function yc(h){return typeof h=="function"?h:(h[cl]||(h[cl]=function(_){return h.handleEvent(_)}),h[cl])}function yt(){ne.call(this),this.i=new Fi(this),this.M=this,this.F=null}B(yt,ne),yt.prototype[zt]=!0,yt.prototype.removeEventListener=function(h,_,v,A){ul(this,h,_,v,A)};function $e(h,_){var v,A=h.F;if(A)for(v=[];A;A=A.F)v.push(A);if(h=h.M,A=_.type||_,typeof _=="string")_=new te(_,h);else if(_ instanceof te)_.target=_.target||h;else{var U=_;_=new te(A,h),x(_,U)}if(U=!0,v)for(var H=v.length-1;0<=H;H--){var se=_.g=v[H];U=bn(se,A,!0,_)&&U}if(se=_.g=h,U=bn(se,A,!0,_)&&U,U=bn(se,A,!1,_)&&U,v)for(H=0;H<v.length;H++)se=_.g=v[H],U=bn(se,A,!1,_)&&U}yt.prototype.N=function(){if(yt.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var v=h.g[_],A=0;A<v.length;A++)Ns(v[A]);delete h.g[_],h.h--}}this.F=null},yt.prototype.K=function(h,_,v,A){return this.i.add(String(h),_,!1,v,A)},yt.prototype.L=function(h,_,v,A){return this.i.add(String(h),_,!0,v,A)};function bn(h,_,v,A){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var U=!0,H=0;H<_.length;++H){var se=_[H];if(se&&!se.da&&se.capture==v){var ze=se.listener,kt=se.ha||se.src;se.fa&&Or(h.i,se),U=ze.call(kt,A)!==!1&&U}}return U&&!A.defaultPrevented}function sn(h,_,v){if(typeof h=="function")v&&(h=w(h,v));else if(h&&typeof h.handleEvent=="function")h=w(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:d.setTimeout(h,_||0)}function vc(h){h.g=sn(()=>{h.g=null,h.i&&(h.i=!1,vc(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class bd extends ne{constructor(_,v){super(),this.m=_,this.l=v,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:vc(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pr(h){ne.call(this),this.h=h,this.g={}}B(Pr,ne);var Vr=[];function Lr(h){Ie(h.g,function(_,v){this.g.hasOwnProperty(v)&&Pa(_)},h),h.g={}}Pr.prototype.N=function(){Pr.aa.N.call(this),Lr(this)},Pr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ti=d.JSON.stringify,La=d.JSON.parse,Ur=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function hl(){}hl.prototype.h=null;function fl(h){return h.h||(h.h=h.i())}function dl(){}var qi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Hi(){te.call(this,"d")}B(Hi,te);function ml(){te.call(this,"c")}B(ml,te);var mi={},pl=null;function Ds(){return pl=pl||new yt}mi.La="serverreachability";function Ua(h){te.call(this,mi.La,h)}B(Ua,te);function Os(h){const _=Ds();$e(_,new Ua(_))}mi.STAT_EVENT="statevent";function Ec(h,_){te.call(this,mi.STAT_EVENT,h),this.stat=_}B(Ec,te);function dt(h){const _=Ds();$e(_,new Ec(_,h))}mi.Ma="timingevent";function Mt(h,_){te.call(this,mi.Ma,h),this.size=_}B(Mt,te);function Rt(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},_)}function Un(){this.g=!0}Un.prototype.xa=function(){this.g=!1};function gl(h,_,v,A,U,H){h.info(function(){if(h.g)if(H)for(var se="",ze=H.split("&"),kt=0;kt<ze.length;kt++){var je=ze[kt].split("=");if(1<je.length){var Bt=je[0];je=je[1];var Pt=Bt.split("_");se=2<=Pt.length&&Pt[1]=="type"?se+(Bt+"="+je+"&"):se+(Bt+"=redacted&")}}else se=null;else se=H;return"XMLHTTP REQ ("+A+") [attempt "+U+"]: "+_+`
`+v+`
`+se})}function Rd(h,_,v,A,U,H,se){h.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+U+"]: "+_+`
`+v+`
`+H+" "+se})}function xs(h,_,v,A){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+zr(h,v)+(A?" "+A:"")})}function Tc(h,_){h.info(function(){return"TIMEOUT: "+_})}Un.prototype.info=function(){};function zr(h,_){if(!h.g)return _;if(!_)return null;try{var v=JSON.parse(_);if(v){for(h=0;h<v.length;h++)if(Array.isArray(v[h])){var A=v[h];if(!(2>A.length)){var U=A[1];if(Array.isArray(U)&&!(1>U.length)){var H=U[0];if(H!="noop"&&H!="stop"&&H!="close")for(var se=1;se<U.length;se++)U[se]=""}}}}return ti(v)}catch{return _}}var Ms={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Gi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},pi;function gi(){}B(gi,hl),gi.prototype.g=function(){return new XMLHttpRequest},gi.prototype.i=function(){return{}},pi=new gi;function mn(h,_,v,A){this.j=h,this.i=_,this.l=v,this.R=A||1,this.U=new Pr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new St}function St(){this.i=null,this.g="",this.h=!1}var _l={},za={};function ni(h,_,v){h.L=1,h.v=Hr(Rn(_)),h.m=v,h.P=!0,Ki(h,null)}function Ki(h,_){h.F=Date.now(),jr(h),h.A=Rn(h.v);var v=h.A,A=h.R;Array.isArray(A)||(A=[String(A)]),Al(v.i,"t",A),h.C=0,v=h.j.J,h.h=new St,h.g=Lc(h.j,v?_:null,!h.m),0<h.O&&(h.M=new bd(w(h.Y,h,h.g),h.O)),_=h.U,v=h.g,A=h.ca;var U="readystatechange";Array.isArray(U)||(U&&(Vr[0]=U.toString()),U=Vr);for(var H=0;H<U.length;H++){var se=_c(v,U[H],A||_.handleEvent,!1,_.h||_);if(!se)break;_.g[se.key]=se}_=h.H?R(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),Os(),gl(h.i,h.u,h.A,h.l,h.R,h.m)}mn.prototype.ca=function(h){h=h.target;const _=this.M;_&&Fn(h)==3?_.j():this.Y(h)},mn.prototype.Y=function(h){try{if(h==this.g)e:{const Pt=Fn(this.g);var _=this.g.Ba();const es=this.g.Z();if(!(3>Pt)&&(Pt!=3||this.g&&(this.h.h||this.g.oa()||Nc(this.g)))){this.J||Pt!=4||_==7||(_==8||0>=es?Os(3):Os(2)),ks(this);var v=this.g.Z();this.X=v;t:if(Sc(this)){var A=Nc(this.g);h="";var U=A.length,H=Fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qt(this),_i(this);var se="";break t}this.h.i=new d.TextDecoder}for(_=0;_<U;_++)this.h.h=!0,h+=this.h.i.decode(A[_],{stream:!(H&&_==U-1)});A.length=0,this.h.g+=h,this.C=0,se=this.h.g}else se=this.g.oa();if(this.o=v==200,Rd(this.i,this.u,this.A,this.l,this.R,Pt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var ze,kt=this.g;if((ze=kt.g?kt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!de(ze)){var je=ze;break t}}je=null}if(v=je)xs(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Br(this,v);else{this.o=!1,this.s=3,dt(12),Qt(this),_i(this);break e}}if(this.P){v=!0;let Wt;for(;!this.J&&this.C<se.length;)if(Wt=Ac(this,se),Wt==za){Pt==4&&(this.s=4,dt(14),v=!1),xs(this.i,this.l,null,"[Incomplete Response]");break}else if(Wt==_l){this.s=4,dt(15),xs(this.i,this.l,se,"[Invalid Chunk]"),v=!1;break}else xs(this.i,this.l,Wt,null),Br(this,Wt);if(Sc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Pt!=4||se.length!=0||this.h.h||(this.s=1,dt(16),v=!1),this.o=this.o&&v,!v)xs(this.i,this.l,se,"[Invalid Chunked Response]"),Qt(this),_i(this);else if(0<se.length&&!this.W){this.W=!0;var Bt=this.j;Bt.g==this&&Bt.ba&&!Bt.M&&(Bt.j.info("Great, no buffering proxy detected. Bytes received: "+se.length),Zr(Bt),Bt.M=!0,dt(11))}}else xs(this.i,this.l,se,null),Br(this,se);Pt==4&&Qt(this),this.o&&!this.J&&(Pt==4?kc(this.j,this):(this.o=!1,jr(this)))}else Od(this.g),v==400&&0<se.indexOf("Unknown SID")?(this.s=3,dt(12)):(this.s=0,dt(13)),Qt(this),_i(this)}}}catch{}finally{}};function Sc(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function Ac(h,_){var v=h.C,A=_.indexOf(`
`,v);return A==-1?za:(v=Number(_.substring(v,A)),isNaN(v)?_l:(A+=1,A+v>_.length?za:(_=_.slice(A,A+v),h.C=A+v,_)))}mn.prototype.cancel=function(){this.J=!0,Qt(this)};function jr(h){h.S=Date.now()+h.I,wc(h,h.I)}function wc(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Rt(w(h.ba,h),_)}function ks(h){h.B&&(d.clearTimeout(h.B),h.B=null)}mn.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Tc(this.i,this.A),this.L!=2&&(Os(),dt(17)),Qt(this),this.s=2,_i(this)):wc(this,this.S-h)};function _i(h){h.j.G==0||h.J||kc(h.j,h)}function Qt(h){ks(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,Lr(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function Br(h,_){try{var v=h.j;if(v.G!=0&&(v.g==h||yl(v.h,h))){if(!h.K&&yl(v.h,h)&&v.G==3){try{var A=v.Da.g.parse(_)}catch{A=null}if(Array.isArray(A)&&A.length==3){var U=A;if(U[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<h.F)$a(v),Wa(v);else break e;Cl(v),dt(18)}}else v.za=U[1],0<v.za-v.T&&37500>U[2]&&v.F&&v.v==0&&!v.C&&(v.C=Rt(w(v.Za,v),6e3));if(1>=Ba(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Ji(v,11)}else if((h.K||v.g==h)&&$a(v),!de(_))for(U=v.Da.g.parse(_),_=0;_<U.length;_++){let je=U[_];if(v.T=je[0],je=je[1],v.G==2)if(je[0]=="c"){v.K=je[1],v.ia=je[2];const Bt=je[3];Bt!=null&&(v.la=Bt,v.j.info("VER="+v.la));const Pt=je[4];Pt!=null&&(v.Aa=Pt,v.j.info("SVER="+v.Aa));const es=je[5];es!=null&&typeof es=="number"&&0<es&&(A=1.5*es,v.L=A,v.j.info("backChannelRequestTimeoutMs_="+A)),A=v;const Wt=h.g;if(Wt){const wi=Wt.g?Wt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(wi){var H=A.h;H.g||wi.indexOf("spdy")==-1&&wi.indexOf("quic")==-1&&wi.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(Fa(H,H.h),H.h=null))}if(A.D){const Dl=Wt.g?Wt.g.getResponseHeader("X-HTTP-Session-Id"):null;Dl&&(A.ya=Dl,et(A.I,A.D,Dl))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-h.F,v.j.info("Handshake RTT: "+v.R+"ms")),A=v;var se=h;if(A.qa=Vc(A,A.J?A.ia:null,A.W),se.K){pn(A.h,se);var ze=se,kt=A.L;kt&&(ze.I=kt),ze.B&&(ks(ze),jr(ze)),A.g=se}else xc(A);0<v.i.length&&Xa(v)}else je[0]!="stop"&&je[0]!="close"||Ji(v,7);else v.G==3&&(je[0]=="stop"||je[0]=="close"?je[0]=="stop"?Ji(v,7):Rl(v):je[0]!="noop"&&v.l&&v.l.ta(je),v.v=0)}}Os(4)}catch{}}var bc=class{constructor(h,_){this.g=h,this.map=_}};function Yi(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ja(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function Ba(h){return h.h?1:h.g?h.g.size:0}function yl(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function Fa(h,_){h.g?h.g.add(_):h.h=_}function pn(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}Yi.prototype.cancel=function(){if(this.i=vl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function vl(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const v of h.g.values())_=_.concat(v.D);return _}return J(h.i)}function Id(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var _=[],v=h.length,A=0;A<v;A++)_.push(h[A]);return _}_=[],v=0;for(A in h)_[v++]=h[A];return _}function qa(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var _=[];h=h.length;for(var v=0;v<h;v++)_.push(v);return _}_=[],v=0;for(const A in h)_[v++]=A;return _}}}function El(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var v=qa(h),A=Id(h),U=A.length,H=0;H<U;H++)_.call(void 0,A[H],v&&v[H],h)}var Fr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Cd(h,_){if(h){h=h.split("&");for(var v=0;v<h.length;v++){var A=h[v].indexOf("="),U=null;if(0<=A){var H=h[v].substring(0,A);U=h[v].substring(A+1)}else H=h[v];_(H,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function It(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof It){this.h=h.h,qr(this,h.j),this.o=h.o,this.g=h.g,Ps(this,h.s),this.l=h.l;var _=h.i,v=new Wi;v.i=_.i,_.g&&(v.g=new Map(_.g),v.h=_.h),Qi(this,v),this.m=h.m}else h&&(_=String(h).match(Fr))?(this.h=!1,qr(this,_[1]||"",!0),this.o=zn(_[2]||""),this.g=zn(_[3]||"",!0),Ps(this,_[4]),this.l=zn(_[5]||"",!0),Qi(this,_[6]||"",!0),this.m=zn(_[7]||"")):(this.h=!1,this.i=new Wi(null,this.h))}It.prototype.toString=function(){var h=[],_=this.j;_&&h.push(Gr(_,Tl,!0),":");var v=this.g;return(v||_=="file")&&(h.push("//"),(_=this.o)&&h.push(Gr(_,Tl,!0),"@"),h.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&h.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&h.push("/"),h.push(Gr(v,v.charAt(0)=="/"?Nd:Sl,!0))),(v=this.i.toString())&&h.push("?",v),(v=this.m)&&h.push("#",Gr(v,Ha)),h.join("")};function Rn(h){return new It(h)}function qr(h,_,v){h.j=v?zn(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function Ps(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function Qi(h,_,v){_ instanceof Wi?(h.i=_,Ic(h.i,h.h)):(v||(_=Gr(_,Dd)),h.i=new Wi(_,h.h))}function et(h,_,v){h.i.set(_,v)}function Hr(h){return et(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function zn(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function Gr(h,_,v){return typeof h=="string"?(h=encodeURI(h).replace(_,Rc),v&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function Rc(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Tl=/[#\/\?@]/g,Sl=/[#\?:]/g,Nd=/[#\?]/g,Dd=/[#\?@]/g,Ha=/#/g;function Wi(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function jn(h){h.g||(h.g=new Map,h.h=0,h.i&&Cd(h.i,function(_,v){h.add(decodeURIComponent(_.replace(/\+/g," ")),v)}))}i=Wi.prototype,i.add=function(h,_){jn(this),this.i=null,h=yi(this,h);var v=this.g.get(h);return v||this.g.set(h,v=[]),v.push(_),this.h+=1,this};function Xi(h,_){jn(h),_=yi(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function $i(h,_){return jn(h),_=yi(h,_),h.g.has(_)}i.forEach=function(h,_){jn(this),this.g.forEach(function(v,A){v.forEach(function(U){h.call(_,U,A,this)},this)},this)},i.na=function(){jn(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),v=[];for(let A=0;A<_.length;A++){const U=h[A];for(let H=0;H<U.length;H++)v.push(_[A])}return v},i.V=function(h){jn(this);let _=[];if(typeof h=="string")$i(this,h)&&(_=_.concat(this.g.get(yi(this,h))));else{h=Array.from(this.g.values());for(let v=0;v<h.length;v++)_=_.concat(h[v])}return _},i.set=function(h,_){return jn(this),this.i=null,h=yi(this,h),$i(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},i.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function Al(h,_,v){Xi(h,_),0<v.length&&(h.i=null,h.g.set(yi(h,_),J(v)),h.h+=v.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var v=0;v<_.length;v++){var A=_[v];const H=encodeURIComponent(String(A)),se=this.V(A);for(A=0;A<se.length;A++){var U=H;se[A]!==""&&(U+="="+encodeURIComponent(String(se[A]))),h.push(U)}}return this.i=h.join("&")};function yi(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function Ic(h,_){_&&!h.j&&(jn(h),h.i=null,h.g.forEach(function(v,A){var U=A.toLowerCase();A!=U&&(Xi(this,A),Al(this,U,v))},h)),h.j=_}function Kr(h,_){const v=new Un;if(d.Image){const A=new Image;A.onload=P(Bn,v,"TestLoadImage: loaded",!0,_,A),A.onerror=P(Bn,v,"TestLoadImage: error",!1,_,A),A.onabort=P(Bn,v,"TestLoadImage: abort",!1,_,A),A.ontimeout=P(Bn,v,"TestLoadImage: timeout",!1,_,A),d.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=h}else _(!1)}function ii(h,_){const v=new Un,A=new AbortController,U=setTimeout(()=>{A.abort(),Bn(v,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:A.signal}).then(H=>{clearTimeout(U),H.ok?Bn(v,"TestPingServer: ok",!0,_):Bn(v,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(U),Bn(v,"TestPingServer: error",!1,_)})}function Bn(h,_,v,A,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),A(v)}catch{}}function Yr(){this.g=new Ur}function vi(h,_,v){const A=v||"";try{El(h,function(U,H){let se=U;g(U)&&(se=ti(U)),_.push(A+H+"="+encodeURIComponent(se))})}catch(U){throw _.push(A+"type="+encodeURIComponent("_badmap")),U}}function Vs(h){this.l=h.Ub||null,this.j=h.eb||!1}B(Vs,hl),Vs.prototype.g=function(){return new Zi(this.l,this.j)},Vs.prototype.i=function(h){return function(){return h}}({});function Zi(h,_){yt.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}B(Zi,yt),i=Zi.prototype,i.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,Ti(this)},i.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||d).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ei(this)),this.readyState=0},i.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Ti(this)),this.g&&(this.readyState=3,Ti(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;wl(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function wl(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}i.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?Ei(this):Ti(this),this.readyState==3&&wl(this)}},i.Ra=function(h){this.g&&(this.response=this.responseText=h,Ei(this))},i.Qa=function(h){this.g&&(this.response=h,Ei(this))},i.ga=function(){this.g&&Ei(this)};function Ei(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Ti(h)}i.setRequestHeader=function(h,_){this.u.append(h,_)},i.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var v=_.next();!v.done;)v=v.value,h.push(v[0]+": "+v[1]),v=_.next();return h.join(`\r
`)};function Ti(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(Zi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function bl(h){let _="";return Ie(h,function(v,A){_+=A,_+=":",_+=v,_+=`\r
`}),_}function jt(h,_,v){e:{for(A in v){var A=!1;break e}A=!0}A||(v=bl(v),typeof h=="string"?v!=null&&encodeURIComponent(String(v)):et(h,_,v))}function Qe(h){yt.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}B(Qe,yt);var Ga=/^https?$/i,Qr=["POST","PUT"];i=Qe.prototype,i.Ha=function(h){this.J=h},i.ea=function(h,_,v,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():pi.g(),this.v=this.o?fl(this.o):fl(pi),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(H){Cc(this,H);return}if(h=v||"",v=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var U in A)v.set(U,A[U]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const H of A.keys())v.set(H,A.get(H));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(v.keys()).find(H=>H.toLowerCase()=="content-type"),U=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Qr,_,void 0))||A||U||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,se]of v)this.g.setRequestHeader(H,se);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Wr(this),this.u=!0,this.g.send(h),this.u=!1}catch(H){Cc(this,H)}};function Cc(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,Ka(h),Si(h)}function Ka(h){h.A||(h.A=!0,$e(h,"complete"),$e(h,"error"))}i.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,$e(this,"complete"),$e(this,"abort"),Si(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Si(this,!0)),Qe.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Ya(this):this.bb())},i.bb=function(){Ya(this)};function Ya(h){if(h.h&&typeof c<"u"&&(!h.v[1]||Fn(h)!=4||h.Z()!=2)){if(h.u&&Fn(h)==4)sn(h.Ea,0,h);else if($e(h,"readystatechange"),Fn(h)==4){h.h=!1;try{const se=h.Z();e:switch(se){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var v;if(!(v=_)){var A;if(A=se===0){var U=String(h.D).match(Fr)[1]||null;!U&&d.self&&d.self.location&&(U=d.self.location.protocol.slice(0,-1)),A=!Ga.test(U?U.toLowerCase():"")}v=A}if(v)$e(h,"complete"),$e(h,"success");else{h.m=6;try{var H=2<Fn(h)?h.g.statusText:""}catch{H=""}h.l=H+" ["+h.Z()+"]",Ka(h)}}finally{Si(h)}}}}function Si(h,_){if(h.g){Wr(h);const v=h.g,A=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||$e(h,"ready");try{v.onreadystatechange=A}catch{}}}function Wr(h){h.I&&(d.clearTimeout(h.I),h.I=null)}i.isActive=function(){return!!this.g};function Fn(h){return h.g?h.g.readyState:0}i.Z=function(){try{return 2<Fn(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),La(_)}};function Nc(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function Od(h){const _={};h=(h.g&&2<=Fn(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<h.length;A++){if(de(h[A]))continue;var v=k(h[A]);const U=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const H=_[U]||[];_[U]=H,H.push(v)}M(_,function(A){return A.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xr(h,_,v){return v&&v.internalChannelParams&&v.internalChannelParams[h]||_}function Qa(h){this.Aa=0,this.i=[],this.j=new Un,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xr("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xr("baseRetryDelayMs",5e3,h),this.cb=Xr("retryDelaySeedMs",1e4,h),this.Wa=Xr("forwardChannelMaxRetries",2,h),this.wa=Xr("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new Yi(h&&h.concurrentRequestLimit),this.Da=new Yr,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Qa.prototype,i.la=8,i.G=1,i.connect=function(h,_,v,A){dt(0),this.W=h,this.H=_||{},v&&A!==void 0&&(this.H.OSID=v,this.H.OAID=A),this.F=this.X,this.I=Vc(this,null,this.W),Xa(this)};function Rl(h){if(Dc(h),h.G==3){var _=h.U++,v=Rn(h.I);if(et(v,"SID",h.K),et(v,"RID",_),et(v,"TYPE","terminate"),$r(h,v),_=new mn(h,h.j,_),_.L=2,_.v=Hr(Rn(v)),v=!1,d.navigator&&d.navigator.sendBeacon)try{v=d.navigator.sendBeacon(_.v.toString(),"")}catch{}!v&&d.Image&&(new Image().src=_.v,v=!0),v||(_.g=Lc(_.j,null),_.g.ea(_.v)),_.F=Date.now(),jr(_)}Pc(h)}function Wa(h){h.g&&(Zr(h),h.g.cancel(),h.g=null)}function Dc(h){Wa(h),h.u&&(d.clearTimeout(h.u),h.u=null),$a(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function Xa(h){if(!ja(h.h)&&!h.s){h.s=!0;var _=h.Ga;Y||N(),ie||(Y(),ie=!0),fe.add(_,h),h.B=0}}function xd(h,_){return Ba(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Rt(w(h.Ga,h,_),Nl(h,h.B)),h.B++,!0)}i.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const U=new mn(this,this.j,h);let H=this.o;if(this.S&&(H?(H=R(H),x(H,this.S)):H=this.S),this.m!==null||this.O||(U.H=H,H=null),this.P)e:{for(var _=0,v=0;v<this.i.length;v++){t:{var A=this.i[v];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(_+=A,4096<_){_=v;break e}if(_===4096||v===this.i.length-1){_=v+1;break e}}_=1e3}else _=1e3;_=Oc(this,U,_),v=Rn(this.I),et(v,"RID",h),et(v,"CVER",22),this.D&&et(v,"X-HTTP-Session-Id",this.D),$r(this,v),H&&(this.O?_="headers="+encodeURIComponent(String(bl(H)))+"&"+_:this.m&&jt(v,this.m,H)),Fa(this.h,U),this.Ua&&et(v,"TYPE","init"),this.P?(et(v,"$req",_),et(v,"SID","null"),U.T=!0,ni(U,v,null)):ni(U,v,_),this.G=2}}else this.G==3&&(h?Il(this,h):this.i.length==0||ja(this.h)||Il(this))};function Il(h,_){var v;_?v=_.l:v=h.U++;const A=Rn(h.I);et(A,"SID",h.K),et(A,"RID",v),et(A,"AID",h.T),$r(h,A),h.m&&h.o&&jt(A,h.m,h.o),v=new mn(h,h.j,v,h.B+1),h.m===null&&(v.H=h.o),_&&(h.i=_.D.concat(h.i)),_=Oc(h,v,1e3),v.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),Fa(h.h,v),ni(v,A,_)}function $r(h,_){h.H&&Ie(h.H,function(v,A){et(_,A,v)}),h.l&&El({},function(v,A){et(_,A,v)})}function Oc(h,_,v){v=Math.min(h.i.length,v);var A=h.l?w(h.l.Na,h.l,h):null;e:{var U=h.i;let H=-1;for(;;){const se=["count="+v];H==-1?0<v?(H=U[0].g,se.push("ofs="+H)):H=0:se.push("ofs="+H);let ze=!0;for(let kt=0;kt<v;kt++){let je=U[kt].g;const Bt=U[kt].map;if(je-=H,0>je)H=Math.max(0,U[kt].g-100),ze=!1;else try{vi(Bt,se,"req"+je+"_")}catch{A&&A(Bt)}}if(ze){A=se.join("&");break e}}}return h=h.i.splice(0,v),_.D=h,A}function xc(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;Y||N(),ie||(Y(),ie=!0),fe.add(_,h),h.v=0}}function Cl(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Rt(w(h.Fa,h),Nl(h,h.v)),h.v++,!0)}i.Fa=function(){if(this.u=null,Mc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Rt(w(this.ab,this),h)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,dt(10),Wa(this),Mc(this))};function Zr(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function Mc(h){h.g=new mn(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=Rn(h.qa);et(_,"RID","rpc"),et(_,"SID",h.K),et(_,"AID",h.T),et(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&et(_,"TO",h.ja),et(_,"TYPE","xmlhttp"),$r(h,_),h.m&&h.o&&jt(_,h.m,h.o),h.L&&(h.g.I=h.L);var v=h.g;h=h.ia,v.L=1,v.v=Hr(Rn(_)),v.m=null,v.P=!0,Ki(v,h)}i.Za=function(){this.C!=null&&(this.C=null,Wa(this),Cl(this),dt(19))};function $a(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function kc(h,_){var v=null;if(h.g==_){$a(h),Zr(h),h.g=null;var A=2}else if(yl(h.h,_))v=_.D,pn(h.h,_),A=1;else return;if(h.G!=0){if(_.o)if(A==1){v=_.m?_.m.length:0,_=Date.now()-_.F;var U=h.B;A=Ds(),$e(A,new Mt(A,v)),Xa(h)}else xc(h);else if(U=_.s,U==3||U==0&&0<_.X||!(A==1&&xd(h,_)||A==2&&Cl(h)))switch(v&&0<v.length&&(_=h.h,_.i=_.i.concat(v)),U){case 1:Ji(h,5);break;case 4:Ji(h,10);break;case 3:Ji(h,6);break;default:Ji(h,2)}}}function Nl(h,_){let v=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(v*=2),v*_}function Ji(h,_){if(h.j.info("Error code "+_),_==2){var v=w(h.fb,h),A=h.Xa;const U=!A;A=new It(A||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||qr(A,"https"),Hr(A),U?Kr(A.toString(),v):ii(A.toString(),v)}else dt(2);h.G=0,h.l&&h.l.sa(_),Pc(h),Dc(h)}i.fb=function(h){h?(this.j.info("Successfully pinged google.com"),dt(2)):(this.j.info("Failed to ping google.com"),dt(1))};function Pc(h){if(h.G=0,h.ka=[],h.l){const _=vl(h.h);(_.length!=0||h.i.length!=0)&&($(h.ka,_),$(h.ka,h.i),h.h.i.length=0,J(h.i),h.i.length=0),h.l.ra()}}function Vc(h,_,v){var A=v instanceof It?Rn(v):new It(v);if(A.g!="")_&&(A.g=_+"."+A.g),Ps(A,A.s);else{var U=d.location;A=U.protocol,_=_?_+"."+U.hostname:U.hostname,U=+U.port;var H=new It(null);A&&qr(H,A),_&&(H.g=_),U&&Ps(H,U),v&&(H.l=v),A=H}return v=h.D,_=h.ya,v&&_&&et(A,v,_),et(A,"VER",h.la),$r(h,A),A}function Lc(h,_,v){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new Qe(new Vs({eb:v})):new Qe(h.pa),_.Ha(h.J),_}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Uc(){}i=Uc.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Za(){}Za.prototype.g=function(h,_){return new gn(h,_)};function gn(h,_){yt.call(this),this.g=new Qa(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!de(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!de(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new Ai(this)}B(gn,yt),gn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},gn.prototype.close=function(){Rl(this.g)},gn.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var v={};v.__data__=h,h=v}else this.u&&(v={},v.__data__=ti(h),h=v);_.i.push(new bc(_.Ya++,h)),_.G==3&&Xa(_)},gn.prototype.N=function(){this.g.l=null,delete this.j,Rl(this.g),delete this.g,gn.aa.N.call(this)};function zc(h){Hi.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const v in _){h=v;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}B(zc,Hi);function jc(){ml.call(this),this.status=1}B(jc,ml);function Ai(h){this.g=h}B(Ai,Uc),Ai.prototype.ua=function(){$e(this.g,"a")},Ai.prototype.ta=function(h){$e(this.g,new zc(h))},Ai.prototype.sa=function(h){$e(this.g,new jc)},Ai.prototype.ra=function(){$e(this.g,"b")},Za.prototype.createWebChannel=Za.prototype.g,gn.prototype.send=gn.prototype.o,gn.prototype.open=gn.prototype.m,gn.prototype.close=gn.prototype.close,pw=function(){return new Za},mw=function(){return Ds()},dw=mi,hg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ms.NO_ERROR=0,Ms.TIMEOUT=8,Ms.HTTP_ERROR=6,Zh=Ms,Gi.COMPLETE="complete",fw=Gi,dl.EventType=qi,qi.OPEN="a",qi.CLOSE="b",qi.ERROR="c",qi.MESSAGE="d",yt.prototype.listen=yt.prototype.K,bu=dl,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,hw=Qe}).apply(typeof qh<"u"?qh:typeof self<"u"?self:typeof window<"u"?window:{});const dT="@firebase/firestore",mT="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let il="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aa=new Yf("@firebase/firestore");function Do(){return Aa.logLevel}function ue(i,...e){if(Aa.logLevel<=Ve.DEBUG){const t=e.map(o_);Aa.debug(`Firestore (${il}): ${i}`,...t)}}function ws(i,...e){if(Aa.logLevel<=Ve.ERROR){const t=e.map(o_);Aa.error(`Firestore (${il}): ${i}`,...t)}}function Er(i,...e){if(Aa.logLevel<=Ve.WARN){const t=e.map(o_);Aa.warn(`Firestore (${il}): ${i}`,...t)}}function o_(i){if(typeof i=="string")return i;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Se(i,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,gw(i,s,t)}function gw(i,e,t){let s=`FIRESTORE (${il}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw ws(s),new Error(s)}function Xe(i,e,t,s){let a="Unexpected state";typeof t=="string"?a=t:s=t,i||gw(e,a,s)}function Re(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class le extends Bi{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class O2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ln.UNAUTHENTICATED))}shutdown(){}}class x2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class M2{constructor(e){this.t=e,this.currentUser=ln.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Xe(this.o===void 0,42304);let s=this.i;const a=p=>this.i!==s?(s=this.i,t(p)):Promise.resolve();let l=new vs;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new vs,e.enqueueRetryable(()=>a(this.currentUser))};const c=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await a(this.currentUser)})},d=p=>{ue("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(ue("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new vs)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(ue("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Xe(typeof s.accessToken=="string",31837,{l:s}),new _w(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Xe(e===null||typeof e=="string",2055,{h:e}),new ln(e)}}class k2{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=ln.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class P2{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new k2(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(ln.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class pT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class V2{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Sn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Xe(this.o===void 0,3512);const s=l=>{l.error!=null&&ue("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,ue("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>s(l))};const a=l=>{ue("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>a(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):ue("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new pT(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Xe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new pT(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class l_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=L2(40);for(let l=0;l<a.length;++l)s.length<20&&a[l]<t&&(s+=e.charAt(a[l]%62))}return s}}function Oe(i,e){return i<e?-1:i>e?1:0}function fg(i,e){let t=0;for(;t<i.length&&t<e.length;){const s=i.codePointAt(t),a=e.codePointAt(t);if(s!==a){if(s<128&&a<128)return Oe(s,a);{const l=yw(),c=U2(l.encode(gT(i,t)),l.encode(gT(e,t)));return c!==0?c:Oe(s,a)}}t+=s>65535?2:1}return Oe(i.length,e.length)}function gT(i,e){return i.codePointAt(e)>65535?i.substring(e,e+2):i.substring(e,e+1)}function U2(i,e){for(let t=0;t<i.length&&t<e.length;++t)if(i[t]!==e[t])return Oe(i[t],e[t]);return Oe(i.length,e.length)}function Ko(i,e,t){return i.length===e.length&&i.every((s,a)=>t(s,e[a]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T="__name__";class Di{constructor(e,t,s){t===void 0?t=0:t>e.length&&Se(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Se(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Di.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Di?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let a=0;a<s;a++){const l=Di.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Oe(e.length,t.length)}static compareSegments(e,t){const s=Di.isNumericId(e),a=Di.isNumericId(t);return s&&!a?-1:!s&&a?1:s&&a?Di.extractNumericId(e).compare(Di.extractNumericId(t)):fg(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return pr.fromString(e.substring(4,e.length-2))}}class lt extends Di{construct(e,t,s){return new lt(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new le(X.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(a=>a.length>0))}return new lt(t)}static emptyPath(){return new lt([])}}const z2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tn extends Di{construct(e,t,s){return new tn(e,t,s)}static isValidIdentifier(e){return z2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===_T}static keyField(){return new tn([_T])}static fromServerFormat(e){const t=[];let s="",a=0;const l=()=>{if(s.length===0)throw new le(X.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let c=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new le(X.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new le(X.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,a+=2}else d==="`"?(c=!c,a++):d!=="."||c?(s+=d,a++):(l(),a++)}if(l(),c)throw new le(X.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tn(t)}static emptyPath(){return new tn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function vw(i,e,t){if(!t)throw new le(X.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function j2(i,e,t,s){if(e===!0&&s===!0)throw new le(X.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function yT(i){if(!ge.isDocumentKey(i))throw new le(X.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function vT(i){if(ge.isDocumentKey(i))throw new le(X.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function Ew(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function ed(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":Se(12329,{type:typeof i})}function Jn(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new le(X.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ed(i);throw new le(X.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
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
 */function xt(i,e){const t={typeString:i};return e&&(t.value=e),t}function rc(i,e){if(!Ew(i))throw new le(X.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const a=e[s].typeString,l="value"in e[s]?{value:e[s].value}:void 0;if(!(s in i)){t=`JSON missing required field: '${s}'`;break}const c=i[s];if(a&&typeof c!==a){t=`JSON field '${s}' must be a ${a}.`;break}if(l!==void 0&&c!==l.value){t=`Expected '${s}' field to equal '${l.value}'`;break}}if(t)throw new le(X.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET=-62135596800,TT=1e6;class ht{static now(){return ht.fromMillis(Date.now())}static fromDate(e){return ht.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*TT);return new ht(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new le(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new le(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ET)throw new le(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new le(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/TT}_compareTo(e){return this.seconds===e.seconds?Oe(this.nanoseconds,e.nanoseconds):Oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ht._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(rc(e,ht._jsonSchema))return new ht(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ET;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ht._jsonSchemaVersion="firestore/timestamp/1.0",ht._jsonSchema={type:xt("string",ht._jsonSchemaVersion),seconds:xt("number"),nanoseconds:xt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{static fromTimestamp(e){return new be(e)}static min(){return new be(new ht(0,0))}static max(){return new be(new ht(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const qu=-1;function B2(i,e){const t=i.toTimestamp().seconds,s=i.toTimestamp().nanoseconds+1,a=be.fromTimestamp(s===1e9?new ht(t+1,0):new ht(t,s));return new Tr(a,ge.empty(),e)}function F2(i){return new Tr(i.readTime,i.key,qu)}class Tr{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Tr(be.min(),ge.empty(),qu)}static max(){return new Tr(be.max(),ge.empty(),qu)}}function q2(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=ge.comparator(i.documentKey,e.documentKey),t!==0?t:Oe(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function sl(i){if(i.code!==X.FAILED_PRECONDITION||i.message!==H2)throw i;ue("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Se(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ee((s,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof ee?t:ee.resolve(t)}catch(t){return ee.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):ee.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):ee.reject(t)}static resolve(e){return new ee((t,s)=>{t(e)})}static reject(e){return new ee((t,s)=>{s(e)})}static waitFor(e){return new ee((t,s)=>{let a=0,l=0,c=!1;e.forEach(d=>{++a,d.next(()=>{++l,c&&l===a&&t()},p=>s(p))}),c=!0,l===a&&t()})}static or(e){let t=ee.resolve(!1);for(const s of e)t=t.next(a=>a?ee.resolve(a):s());return t}static forEach(e,t){const s=[];return e.forEach((a,l)=>{s.push(t.call(this,a,l))}),this.waitFor(s)}static mapArray(e,t){return new ee((s,a)=>{const l=e.length,c=new Array(l);let d=0;for(let p=0;p<l;p++){const g=p;t(e[g]).next(y=>{c[g]=y,++d,d===l&&s(c)},y=>a(y))}})}static doWhile(e,t){return new ee((s,a)=>{const l=()=>{e()===!0?t().next(()=>{l()},a):s()};l()})}}function K2(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function rl(i){return i.name==="IndexedDbTransactionError"}/**
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
 */const u_=-1;function nd(i){return i==null}function Tf(i){return i===0&&1/i==-1/0}function Y2(i){return typeof i=="number"&&Number.isInteger(i)&&!Tf(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw="";function Q2(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=ST(e)),e=W2(i.get(t),e);return ST(e)}function W2(i,e){let t=e;const s=i.length;for(let a=0;a<s;a++){const l=i.charAt(a);switch(l){case"\0":t+="";break;case Tw:t+="";break;default:t+=l}}return t}function ST(i){return i+Tw+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AT(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function Ir(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function Sw(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,t){this.comparator=e,this.root=t||Jt.EMPTY}insert(e,t){return new _t(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Jt.BLACK,null,null))}remove(e){return new _t(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Jt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return t+s.left.size;a<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Hh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Hh(this.root,e,this.comparator,!1)}getReverseIterator(){return new Hh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Hh(this.root,e,this.comparator,!0)}}class Hh{constructor(e,t,s,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Jt{constructor(e,t,s,a,l){this.key=e,this.value=t,this.color=s??Jt.RED,this.left=a??Jt.EMPTY,this.right=l??Jt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,a,l){return new Jt(e??this.key,t??this.value,s??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let a=this;const l=s(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,s),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return Jt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return Jt.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Jt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Jt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Se(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Se(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Se(27949);return e+(this.isRed()?0:1)}}Jt.EMPTY=null,Jt.RED=!0,Jt.BLACK=!1;Jt.EMPTY=new class{constructor(){this.size=0}get key(){throw Se(57766)}get value(){throw Se(16141)}get color(){throw Se(16727)}get left(){throw Se(29726)}get right(){throw Se(36894)}copy(e,t,s,a,l){return this}insert(e,t,s){return new Jt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.comparator=e,this.data=new _t(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new wT(this.data.getIterator())}getIteratorFrom(e){return new wT(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Ut)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ut(this.comparator);return t.data=e,t}}class wT{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.fields=e,e.sort(tn.comparator)}static empty(){return new Pn([])}unionWith(e){let t=new Ut(tn.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Pn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ko(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class Aw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Aw("Invalid base64 string: "+l):l}}(e);return new nn(t)}static fromUint8Array(e){const t=function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l}(e);return new nn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let a=0;a<t.length;a++)s[a]=t.charCodeAt(a);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nn.EMPTY_BYTE_STRING=new nn("");const X2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Sr(i){if(Xe(!!i,39018),typeof i=="string"){let e=0;const t=X2.exec(i);if(Xe(!!t,46558,{timestamp:i}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(i);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:bt(i.seconds),nanos:bt(i.nanos)}}function bt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Ar(i){return typeof i=="string"?nn.fromBase64String(i):nn.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ww="server_timestamp",bw="__type__",Rw="__previous_value__",Iw="__local_write_time__";function c_(i){var e,t;return((t=(((e=i?.mapValue)===null||e===void 0?void 0:e.fields)||{})[bw])===null||t===void 0?void 0:t.stringValue)===ww}function id(i){const e=i.mapValue.fields[Rw];return c_(e)?id(e):e}function Hu(i){const e=Sr(i.mapValue.fields[Iw].timestampValue);return new ht(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(e,t,s,a,l,c,d,p,g,y){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=y}}const Sf="(default)";class Gu{constructor(e,t){this.projectId=e,this.database=t||Sf}static empty(){return new Gu("","")}get isDefaultDatabase(){return this.database===Sf}isEqual(e){return e instanceof Gu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw="__type__",Z2="__max__",Gh={mapValue:{}},Nw="__vector__",Af="value";function wr(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?c_(i)?4:eO(i)?9007199254740991:J2(i)?10:11:Se(28295,{value:i})}function ji(i,e){if(i===e)return!0;const t=wr(i);if(t!==wr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Hu(i).isEqual(Hu(e));case 3:return function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=Sr(a.timestampValue),d=Sr(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(a,l){return Ar(a.bytesValue).isEqual(Ar(l.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(a,l){return bt(a.geoPointValue.latitude)===bt(l.geoPointValue.latitude)&&bt(a.geoPointValue.longitude)===bt(l.geoPointValue.longitude)}(i,e);case 2:return function(a,l){if("integerValue"in a&&"integerValue"in l)return bt(a.integerValue)===bt(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=bt(a.doubleValue),d=bt(l.doubleValue);return c===d?Tf(c)===Tf(d):isNaN(c)&&isNaN(d)}return!1}(i,e);case 9:return Ko(i.arrayValue.values||[],e.arrayValue.values||[],ji);case 10:case 11:return function(a,l){const c=a.mapValue.fields||{},d=l.mapValue.fields||{};if(AT(c)!==AT(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!ji(c[p],d[p])))return!1;return!0}(i,e);default:return Se(52216,{left:i})}}function Ku(i,e){return(i.values||[]).find(t=>ji(t,e))!==void 0}function Yo(i,e){if(i===e)return 0;const t=wr(i),s=wr(e);if(t!==s)return Oe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Oe(i.booleanValue,e.booleanValue);case 2:return function(l,c){const d=bt(l.integerValue||l.doubleValue),p=bt(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(i,e);case 3:return bT(i.timestampValue,e.timestampValue);case 4:return bT(Hu(i),Hu(e));case 5:return fg(i.stringValue,e.stringValue);case 6:return function(l,c){const d=Ar(l),p=Ar(c);return d.compareTo(p)}(i.bytesValue,e.bytesValue);case 7:return function(l,c){const d=l.split("/"),p=c.split("/");for(let g=0;g<d.length&&g<p.length;g++){const y=Oe(d[g],p[g]);if(y!==0)return y}return Oe(d.length,p.length)}(i.referenceValue,e.referenceValue);case 8:return function(l,c){const d=Oe(bt(l.latitude),bt(c.latitude));return d!==0?d:Oe(bt(l.longitude),bt(c.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return RT(i.arrayValue,e.arrayValue);case 10:return function(l,c){var d,p,g,y;const T=l.fields||{},w=c.fields||{},P=(d=T[Af])===null||d===void 0?void 0:d.arrayValue,B=(p=w[Af])===null||p===void 0?void 0:p.arrayValue,J=Oe(((g=P?.values)===null||g===void 0?void 0:g.length)||0,((y=B?.values)===null||y===void 0?void 0:y.length)||0);return J!==0?J:RT(P,B)}(i.mapValue,e.mapValue);case 11:return function(l,c){if(l===Gh.mapValue&&c===Gh.mapValue)return 0;if(l===Gh.mapValue)return 1;if(c===Gh.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),g=c.fields||{},y=Object.keys(g);p.sort(),y.sort();for(let T=0;T<p.length&&T<y.length;++T){const w=fg(p[T],y[T]);if(w!==0)return w;const P=Yo(d[p[T]],g[y[T]]);if(P!==0)return P}return Oe(p.length,y.length)}(i.mapValue,e.mapValue);default:throw Se(23264,{le:t})}}function bT(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Oe(i,e);const t=Sr(i),s=Sr(e),a=Oe(t.seconds,s.seconds);return a!==0?a:Oe(t.nanos,s.nanos)}function RT(i,e){const t=i.values||[],s=e.values||[];for(let a=0;a<t.length&&a<s.length;++a){const l=Yo(t[a],s[a]);if(l)return l}return Oe(t.length,s.length)}function Qo(i){return dg(i)}function dg(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const s=Sr(t);return`time(${s.seconds},${s.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return Ar(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return ge.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let s="[",a=!0;for(const l of t.values||[])a?a=!1:s+=",",s+=dg(l);return s+"]"}(i.arrayValue):"mapValue"in i?function(t){const s=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of s)l?l=!1:a+=",",a+=`${c}:${dg(t.fields[c])}`;return a+"}"}(i.mapValue):Se(61005,{value:i})}function Jh(i){switch(wr(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=id(i);return e?16+Jh(e):16;case 5:return 2*i.stringValue.length;case 6:return Ar(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((a,l)=>a+Jh(l),0)}(i.arrayValue);case 10:case 11:return function(s){let a=0;return Ir(s.fields,(l,c)=>{a+=l.length+Jh(c)}),a}(i.mapValue);default:throw Se(13486,{value:i})}}function IT(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function mg(i){return!!i&&"integerValue"in i}function h_(i){return!!i&&"arrayValue"in i}function CT(i){return!!i&&"nullValue"in i}function NT(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function ef(i){return!!i&&"mapValue"in i}function J2(i){var e,t;return((t=(((e=i?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Cw])===null||t===void 0?void 0:t.stringValue)===Nw}function ku(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return Ir(i.mapValue.fields,(t,s)=>e.mapValue.fields[t]=ku(s)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ku(i.arrayValue.values[t]);return e}return Object.assign({},i)}function eO(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===Z2}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.value=e}static empty(){return new An({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!ef(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ku(t)}setAll(e){let t=tn.emptyPath(),s={},a=[];e.forEach((c,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,s,a),s={},a=[],t=d.popLast()}c?s[d.lastSegment()]=ku(c):a.push(d.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,s,a)}delete(e){const t=this.field(e.popLast());ef(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ji(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=t.mapValue.fields[e.get(s)];ef(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,s){Ir(t,(a,l)=>e[a]=l);for(const a of s)delete e[a]}clone(){return new An(ku(this.value))}}function Dw(i){const e=[];return Ir(i.fields,(t,s)=>{const a=new tn([t]);if(ef(s)){const l=Dw(s.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)}),new Pn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,t,s,a,l,c,d){this.key=e,this.documentType=t,this.version=s,this.readTime=a,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new hn(e,0,be.min(),be.min(),be.min(),An.empty(),0)}static newFoundDocument(e,t,s,a){return new hn(e,1,t,be.min(),s,a,0)}static newNoDocument(e,t){return new hn(e,2,t,be.min(),be.min(),An.empty(),0)}static newUnknownDocument(e,t){return new hn(e,3,t,be.min(),be.min(),An.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(be.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=An.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=An.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=be.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof hn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new hn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class wf{constructor(e,t){this.position=e,this.inclusive=t}}function DT(i,e,t){let s=0;for(let a=0;a<i.position.length;a++){const l=e[a],c=i.position[a];if(l.field.isKeyField()?s=ge.comparator(ge.fromName(c.referenceValue),t.key):s=Yo(c,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function OT(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!ji(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class bf{constructor(e,t="asc"){this.field=e,this.dir=t}}function tO(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class Ow{}class Ot extends Ow{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new iO(e,t,s):t==="array-contains"?new aO(e,s):t==="in"?new oO(e,s):t==="not-in"?new lO(e,s):t==="array-contains-any"?new uO(e,s):new Ot(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new sO(e,s):new rO(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Yo(t,this.value)):t!==null&&wr(this.value)===wr(t)&&this.matchesComparison(Yo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Se(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class hi extends Ow{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new hi(e,t)}matches(e){return xw(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function xw(i){return i.op==="and"}function Mw(i){return nO(i)&&xw(i)}function nO(i){for(const e of i.filters)if(e instanceof hi)return!1;return!0}function pg(i){if(i instanceof Ot)return i.field.canonicalString()+i.op.toString()+Qo(i.value);if(Mw(i))return i.filters.map(e=>pg(e)).join(",");{const e=i.filters.map(t=>pg(t)).join(",");return`${i.op}(${e})`}}function kw(i,e){return i instanceof Ot?function(s,a){return a instanceof Ot&&s.op===a.op&&s.field.isEqual(a.field)&&ji(s.value,a.value)}(i,e):i instanceof hi?function(s,a){return a instanceof hi&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce((l,c,d)=>l&&kw(c,a.filters[d]),!0):!1}(i,e):void Se(19439)}function Pw(i){return i instanceof Ot?function(t){return`${t.field.canonicalString()} ${t.op} ${Qo(t.value)}`}(i):i instanceof hi?function(t){return t.op.toString()+" {"+t.getFilters().map(Pw).join(" ,")+"}"}(i):"Filter"}class iO extends Ot{constructor(e,t,s){super(e,t,s),this.key=ge.fromName(s.referenceValue)}matches(e){const t=ge.comparator(e.key,this.key);return this.matchesComparison(t)}}class sO extends Ot{constructor(e,t){super(e,"in",t),this.keys=Vw("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class rO extends Ot{constructor(e,t){super(e,"not-in",t),this.keys=Vw("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Vw(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>ge.fromName(s.referenceValue))}class aO extends Ot{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return h_(t)&&Ku(t.arrayValue,this.value)}}class oO extends Ot{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ku(this.value.arrayValue,t)}}class lO extends Ot{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ku(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ku(this.value.arrayValue,t)}}class uO extends Ot{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!h_(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Ku(this.value.arrayValue,s))}}/**
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
 */class cO{constructor(e,t=null,s=[],a=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=a,this.limit=l,this.startAt=c,this.endAt=d,this.Pe=null}}function xT(i,e=null,t=[],s=[],a=null,l=null,c=null){return new cO(i,e,t,s,a,l,c)}function f_(i){const e=Re(i);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>pg(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(l){return l.field.canonicalString()+l.dir}(s)).join(","),nd(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Qo(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Qo(s)).join(",")),e.Pe=t}return e.Pe}function d_(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!tO(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!kw(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!OT(i.startAt,e.startAt)&&OT(i.endAt,e.endAt)}function gg(i){return ge.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,t=null,s=[],a=[],l=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=a,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function hO(i,e,t,s,a,l,c,d){return new ac(i,e,t,s,a,l,c,d)}function sd(i){return new ac(i)}function MT(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function Lw(i){return i.collectionGroup!==null}function Pu(i){const e=Re(i);if(e.Te===null){e.Te=[];const t=new Set;for(const l of e.explicitOrderBy)e.Te.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new Ut(tn.comparator);return c.filters.forEach(p=>{p.getFlattenedFilters().forEach(g=>{g.isInequality()&&(d=d.add(g.field))})}),d})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.Te.push(new bf(l,s))}),t.has(tn.keyField().canonicalString())||e.Te.push(new bf(tn.keyField(),s))}return e.Te}function Mi(i){const e=Re(i);return e.Ie||(e.Ie=fO(e,Pu(i))),e.Ie}function fO(i,e){if(i.limitType==="F")return xT(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(a=>{const l=a.dir==="desc"?"asc":"desc";return new bf(a.field,l)});const t=i.endAt?new wf(i.endAt.position,i.endAt.inclusive):null,s=i.startAt?new wf(i.startAt.position,i.startAt.inclusive):null;return xT(i.path,i.collectionGroup,e,i.filters,i.limit,t,s)}}function _g(i,e){const t=i.filters.concat([e]);return new ac(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function yg(i,e,t){return new ac(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function rd(i,e){return d_(Mi(i),Mi(e))&&i.limitType===e.limitType}function Uw(i){return`${f_(Mi(i))}|lt:${i.limitType}`}function Oo(i){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(a=>Pw(a)).join(", ")}]`),nd(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(a=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(a)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(a=>Qo(a)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(a=>Qo(a)).join(",")),`Target(${s})`}(Mi(i))}; limitType=${i.limitType})`}function ad(i,e){return e.isFoundDocument()&&function(s,a){const l=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):ge.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)}(i,e)&&function(s,a){for(const l of Pu(s))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0}(i,e)&&function(s,a){for(const l of s.filters)if(!l.matches(a))return!1;return!0}(i,e)&&function(s,a){return!(s.startAt&&!function(c,d,p){const g=DT(c,d,p);return c.inclusive?g<=0:g<0}(s.startAt,Pu(s),a)||s.endAt&&!function(c,d,p){const g=DT(c,d,p);return c.inclusive?g>=0:g>0}(s.endAt,Pu(s),a))}(i,e)}function dO(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function zw(i){return(e,t)=>{let s=!1;for(const a of Pu(i)){const l=mO(a,e,t);if(l!==0)return l;s=s||a.field.isKeyField()}return 0}}function mO(i,e,t){const s=i.field.isKeyField()?ge.comparator(e.key,t.key):function(l,c,d){const p=c.data.field(l),g=d.data.field(l);return p!==null&&g!==null?Yo(p,g):Se(42886)}(i.field,e,t);switch(i.dir){case"asc":return s;case"desc":return-1*s;default:return Se(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[a,l]of s)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[t]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){Ir(this.inner,(t,s)=>{for(const[a,l]of s)e(a,l)})}isEmpty(){return Sw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pO=new _t(ge.comparator);function bs(){return pO}const jw=new _t(ge.comparator);function Ru(...i){let e=jw;for(const t of i)e=e.insert(t.key,t);return e}function Bw(i){let e=jw;return i.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function _a(){return Vu()}function Fw(){return Vu()}function Vu(){return new Oa(i=>i.toString(),(i,e)=>i.isEqual(e))}const gO=new _t(ge.comparator),_O=new Ut(ge.comparator);function Le(...i){let e=_O;for(const t of i)e=e.add(t);return e}const yO=new Ut(Oe);function vO(){return yO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Tf(e)?"-0":e}}function qw(i){return{integerValue:""+i}}function EO(i,e){return Y2(e)?qw(e):m_(i,e)}/**
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
 */class od{constructor(){this._=void 0}}function TO(i,e,t){return i instanceof Rf?function(a,l){const c={fields:{[bw]:{stringValue:ww},[Iw]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&c_(l)&&(l=id(l)),l&&(c.fields[Rw]=l),{mapValue:c}}(t,e):i instanceof Yu?Gw(i,e):i instanceof Qu?Kw(i,e):function(a,l){const c=Hw(a,l),d=kT(c)+kT(a.Ee);return mg(c)&&mg(a.Ee)?qw(d):m_(a.serializer,d)}(i,e)}function SO(i,e,t){return i instanceof Yu?Gw(i,e):i instanceof Qu?Kw(i,e):t}function Hw(i,e){return i instanceof If?function(s){return mg(s)||function(l){return!!l&&"doubleValue"in l}(s)}(e)?e:{integerValue:0}:null}class Rf extends od{}class Yu extends od{constructor(e){super(),this.elements=e}}function Gw(i,e){const t=Yw(e);for(const s of i.elements)t.some(a=>ji(a,s))||t.push(s);return{arrayValue:{values:t}}}class Qu extends od{constructor(e){super(),this.elements=e}}function Kw(i,e){let t=Yw(e);for(const s of i.elements)t=t.filter(a=>!ji(a,s));return{arrayValue:{values:t}}}class If extends od{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function kT(i){return bt(i.integerValue||i.doubleValue)}function Yw(i){return h_(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function AO(i,e){return i.field.isEqual(e.field)&&function(s,a){return s instanceof Yu&&a instanceof Yu||s instanceof Qu&&a instanceof Qu?Ko(s.elements,a.elements,ji):s instanceof If&&a instanceof If?ji(s.Ee,a.Ee):s instanceof Rf&&a instanceof Rf}(i.transform,e.transform)}class wO{constructor(e,t){this.version=e,this.transformResults=t}}class ki{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ki}static exists(e){return new ki(void 0,e)}static updateTime(e){return new ki(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tf(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class ld{}function Qw(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new Xw(i.key,ki.none()):new oc(i.key,i.data,ki.none());{const t=i.data,s=An.empty();let a=new Ut(tn.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?s.delete(l):s.set(l,c),a=a.add(l)}return new Cr(i.key,s,new Pn(a.toArray()),ki.none())}}function bO(i,e,t){i instanceof oc?function(a,l,c){const d=a.value.clone(),p=VT(a.fieldTransforms,l,c.transformResults);d.setAll(p),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(i,e,t):i instanceof Cr?function(a,l,c){if(!tf(a.precondition,l))return void l.convertToUnknownDocument(c.version);const d=VT(a.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(Ww(a)),p.setAll(d),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()}(i,e,t):function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function Lu(i,e,t,s){return i instanceof oc?function(l,c,d,p){if(!tf(l.precondition,c))return d;const g=l.value.clone(),y=LT(l.fieldTransforms,p,c);return g.setAll(y),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null}(i,e,t,s):i instanceof Cr?function(l,c,d,p){if(!tf(l.precondition,c))return d;const g=LT(l.fieldTransforms,p,c),y=c.data;return y.setAll(Ww(l)),y.setAll(g),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(i,e,t,s):function(l,c,d){return tf(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(i,e,t)}function RO(i,e){let t=null;for(const s of i.fieldTransforms){const a=e.data.field(s.field),l=Hw(s.transform,a||null);l!=null&&(t===null&&(t=An.empty()),t.set(s.field,l))}return t||null}function PT(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&Ko(s,a,(l,c)=>AO(l,c))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class oc extends ld{constructor(e,t,s,a=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Cr extends ld{constructor(e,t,s,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function Ww(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=i.data.field(t);e.set(t,s)}}),e}function VT(i,e,t){const s=new Map;Xe(i.length===t.length,32656,{Ae:t.length,Re:i.length});for(let a=0;a<t.length;a++){const l=i[a],c=l.transform,d=e.data.field(l.field);s.set(l.field,SO(c,d,t[a]))}return s}function LT(i,e,t){const s=new Map;for(const a of i){const l=a.transform,c=t.data.field(a.field);s.set(a.field,TO(l,c,e))}return s}class Xw extends ld{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class IO extends ld{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CO{constructor(e,t,s,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&bO(l,e,s[a])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Lu(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Lu(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Fw();return this.mutations.forEach(a=>{const l=e.get(a.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=t.has(a.key)?null:d;const p=Qw(c,d);p!==null&&s.set(a.key,p),c.isValidDocument()||c.convertToNoDocument(be.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Le())}isEqual(e){return this.batchId===e.batchId&&Ko(this.mutations,e.mutations,(t,s)=>PT(t,s))&&Ko(this.baseMutations,e.baseMutations,(t,s)=>PT(t,s))}}class p_{constructor(e,t,s,a){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=a}static from(e,t,s){Xe(e.mutations.length===s.length,58842,{Ve:e.mutations.length,me:s.length});let a=function(){return gO}();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,s[c].version);return new p_(e,t,s,a)}}/**
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
 */var Dt,Fe;function OO(i){switch(i){case X.OK:return Se(64938);case X.CANCELLED:case X.UNKNOWN:case X.DEADLINE_EXCEEDED:case X.RESOURCE_EXHAUSTED:case X.INTERNAL:case X.UNAVAILABLE:case X.UNAUTHENTICATED:return!1;case X.INVALID_ARGUMENT:case X.NOT_FOUND:case X.ALREADY_EXISTS:case X.PERMISSION_DENIED:case X.FAILED_PRECONDITION:case X.ABORTED:case X.OUT_OF_RANGE:case X.UNIMPLEMENTED:case X.DATA_LOSS:return!0;default:return Se(15467,{code:i})}}function $w(i){if(i===void 0)return ws("GRPC error has no .code"),X.UNKNOWN;switch(i){case Dt.OK:return X.OK;case Dt.CANCELLED:return X.CANCELLED;case Dt.UNKNOWN:return X.UNKNOWN;case Dt.DEADLINE_EXCEEDED:return X.DEADLINE_EXCEEDED;case Dt.RESOURCE_EXHAUSTED:return X.RESOURCE_EXHAUSTED;case Dt.INTERNAL:return X.INTERNAL;case Dt.UNAVAILABLE:return X.UNAVAILABLE;case Dt.UNAUTHENTICATED:return X.UNAUTHENTICATED;case Dt.INVALID_ARGUMENT:return X.INVALID_ARGUMENT;case Dt.NOT_FOUND:return X.NOT_FOUND;case Dt.ALREADY_EXISTS:return X.ALREADY_EXISTS;case Dt.PERMISSION_DENIED:return X.PERMISSION_DENIED;case Dt.FAILED_PRECONDITION:return X.FAILED_PRECONDITION;case Dt.ABORTED:return X.ABORTED;case Dt.OUT_OF_RANGE:return X.OUT_OF_RANGE;case Dt.UNIMPLEMENTED:return X.UNIMPLEMENTED;case Dt.DATA_LOSS:return X.DATA_LOSS;default:return Se(39323,{code:i})}}(Fe=Dt||(Dt={}))[Fe.OK=0]="OK",Fe[Fe.CANCELLED=1]="CANCELLED",Fe[Fe.UNKNOWN=2]="UNKNOWN",Fe[Fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Fe[Fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Fe[Fe.NOT_FOUND=5]="NOT_FOUND",Fe[Fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Fe[Fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Fe[Fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Fe[Fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Fe[Fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Fe[Fe.ABORTED=10]="ABORTED",Fe[Fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Fe[Fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Fe[Fe.INTERNAL=13]="INTERNAL",Fe[Fe.UNAVAILABLE=14]="UNAVAILABLE",Fe[Fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const xO=new pr([4294967295,4294967295],0);function UT(i){const e=yw().encode(i),t=new cw;return t.update(e),new Uint8Array(t.digest())}function zT(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new pr([t,s],0),new pr([a,l],0)]}class g_{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Iu(`Invalid padding: ${t}`);if(s<0)throw new Iu(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Iu(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Iu(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=pr.fromNumber(this.fe)}pe(e,t,s){let a=e.add(t.multiply(pr.fromNumber(s)));return a.compare(xO)===1&&(a=new pr([a.getBits(0),a.getBits(1)],0)),a.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=UT(e),[s,a]=zT(t);for(let l=0;l<this.hashCount;l++){const c=this.pe(s,a,l);if(!this.ye(c))return!1}return!0}static create(e,t,s){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new g_(l,a,t);return s.forEach(d=>c.insert(d)),c}insert(e){if(this.fe===0)return;const t=UT(e),[s,a]=zT(t);for(let l=0;l<this.hashCount;l++){const c=this.pe(s,a,l);this.we(c)}}we(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Iu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e,t,s,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const a=new Map;return a.set(e,lc.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new ud(be.min(),a,new _t(Oe),bs(),Le())}}class lc{constructor(e,t,s,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new lc(s,t,Le(),Le(),Le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e,t,s,a){this.Se=e,this.removedTargetIds=t,this.key=s,this.be=a}}class Zw{constructor(e,t){this.targetId=e,this.De=t}}class Jw{constructor(e,t,s=nn.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=a}}class jT{constructor(){this.ve=0,this.Ce=BT(),this.Fe=nn.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Le(),t=Le(),s=Le();return this.Ce.forEach((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:s=s.add(a);break;default:Se(38017,{changeType:l})}}),new lc(this.Fe,this.Me,e,t,s)}ke(){this.xe=!1,this.Ce=BT()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Xe(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class MO{constructor(e){this.We=e,this.Ge=new Map,this.ze=bs(),this.je=Kh(),this.Je=Kh(),this.He=new _t(Oe)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{const s=this.tt(t);switch(e.state){case 0:this.nt(t)&&s.Be(e.resumeToken);break;case 1:s.Ue(),s.Oe||s.ke(),s.Be(e.resumeToken);break;case 2:s.Ue(),s.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(s.Ke(),s.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),s.Be(e.resumeToken));break;default:Se(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((s,a)=>{this.nt(a)&&t(a)})}it(e){const t=e.targetId,s=e.De.count,a=this.st(t);if(a){const l=a.target;if(gg(l))if(s===0){const c=new ge(l.path);this.Xe(t,c,hn.newNoDocument(c,be.min()))}else Xe(s===1,20013,{expectedCount:s});else{const c=this.ot(t);if(c!==s){const d=this._t(e),p=d?this.ut(d,e,c):1;if(p!==0){this.rt(t);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,g)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:l=0}=t;let c,d;try{c=Ar(s).toUint8Array()}catch(p){if(p instanceof Aw)return Er("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new g_(c,a,l)}catch(p){return Er(p instanceof Iu?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.fe===0?null:d}ut(e,t,s){return t.De.count===s-this.ht(e,t.targetId)?0:2}ht(e,t){const s=this.We.getRemoteKeysForTarget(t);let a=0;return s.forEach(l=>{const c=this.We.lt(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.Xe(t,l,null),a++)}),a}Pt(e){const t=new Map;this.Ge.forEach((l,c)=>{const d=this.st(c);if(d){if(l.current&&gg(d.target)){const p=new ge(d.target.path);this.Tt(p).has(c)||this.It(c,p)||this.Xe(c,p,hn.newNoDocument(p,e))}l.Ne&&(t.set(c,l.Le()),l.ke())}});let s=Le();this.Je.forEach((l,c)=>{let d=!0;c.forEachWhile(p=>{const g=this.st(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(s=s.add(l))}),this.ze.forEach((l,c)=>c.setReadTime(e));const a=new ud(e,t,this.He,this.ze,s);return this.ze=bs(),this.je=Kh(),this.Je=Kh(),this.He=new _t(Oe),a}Ze(e,t){if(!this.nt(e))return;const s=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,s),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,s){if(!this.nt(e))return;const a=this.tt(e);this.It(e,t)?a.qe(t,1):a.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),s&&(this.ze=this.ze.insert(t,s))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new jT,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Ut(Oe),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Ut(Oe),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||ue("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new jT),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Kh(){return new _t(ge.comparator)}function BT(){return new _t(ge.comparator)}const kO={asc:"ASCENDING",desc:"DESCENDING"},PO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},VO={and:"AND",or:"OR"};class LO{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function vg(i,e){return i.useProto3Json||nd(e)?e:{value:e}}function Cf(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function eb(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function UO(i,e){return Cf(i,e.toTimestamp())}function Pi(i){return Xe(!!i,49232),be.fromTimestamp(function(t){const s=Sr(t);return new ht(s.seconds,s.nanos)}(i))}function __(i,e){return Eg(i,e).canonicalString()}function Eg(i,e){const t=function(a){return new lt(["projects",a.projectId,"databases",a.database])}(i).child("documents");return e===void 0?t:t.child(e)}function tb(i){const e=lt.fromString(i);return Xe(ab(e),10190,{key:e.toString()}),e}function Tg(i,e){return __(i.databaseId,e.path)}function Bp(i,e){const t=tb(e);if(t.get(1)!==i.databaseId.projectId)throw new le(X.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new le(X.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new ge(ib(t))}function nb(i,e){return __(i.databaseId,e)}function zO(i){const e=tb(i);return e.length===4?lt.emptyPath():ib(e)}function Sg(i){return new lt(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function ib(i){return Xe(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function FT(i,e,t){return{name:Tg(i,e),fields:t.value.mapValue.fields}}function jO(i,e){let t;if("targetChange"in e){e.targetChange;const s=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Se(39313,{state:g})}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=function(g,y){return g.useProto3Json?(Xe(y===void 0||typeof y=="string",58123),nn.fromBase64String(y||"")):(Xe(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),nn.fromUint8Array(y||new Uint8Array))}(i,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&function(g){const y=g.code===void 0?X.UNKNOWN:$w(g.code);return new le(y,g.message||"")}(c);t=new Jw(s,a,l,d||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=Bp(i,s.document.name),l=Pi(s.document.updateTime),c=s.document.createTime?Pi(s.document.createTime):be.min(),d=new An({mapValue:{fields:s.document.fields}}),p=hn.newFoundDocument(a,l,c,d),g=s.targetIds||[],y=s.removedTargetIds||[];t=new nf(g,y,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=Bp(i,s.document),l=s.readTime?Pi(s.readTime):be.min(),c=hn.newNoDocument(a,l),d=s.removedTargetIds||[];t=new nf([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=Bp(i,s.document),l=s.removedTargetIds||[];t=new nf([],l,a,null)}else{if(!("filter"in e))return Se(11601,{At:e});{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:l}=s,c=new DO(a,l),d=s.targetId;t=new Zw(d,c)}}return t}function BO(i,e){let t;if(e instanceof oc)t={update:FT(i,e.key,e.value)};else if(e instanceof Xw)t={delete:Tg(i,e.key)};else if(e instanceof Cr)t={update:FT(i,e.key,e.data),updateMask:XO(e.fieldMask)};else{if(!(e instanceof IO))return Se(16599,{Rt:e.type});t={verify:Tg(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(l,c){const d=c.transform;if(d instanceof Rf)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Yu)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Qu)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof If)return{fieldPath:c.field.canonicalString(),increment:d.Ee};throw Se(20930,{transform:c.transform})}(0,s))),e.precondition.isNone||(t.currentDocument=function(a,l){return l.updateTime!==void 0?{updateTime:UO(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Se(27497)}(i,e.precondition)),t}function FO(i,e){return i&&i.length>0?(Xe(e!==void 0,14353),i.map(t=>function(a,l){let c=a.updateTime?Pi(a.updateTime):Pi(l);return c.isEqual(be.min())&&(c=Pi(l)),new wO(c,a.transformResults||[])}(t,e))):[]}function qO(i,e){return{documents:[nb(i,e.path)]}}function HO(i,e){const t={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=nb(i,a);const l=function(g){if(g.length!==0)return rb(hi.create(g,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const c=function(g){if(g.length!==0)return g.map(y=>function(w){return{field:xo(w.field),direction:YO(w.dir)}}(y))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=vg(i,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{Vt:t,parent:a}}function GO(i){let e=zO(i.parent);const t=i.structuredQuery,s=t.from?t.from.length:0;let a=null;if(s>0){Xe(s===1,65062);const y=t.from[0];y.allDescendants?a=y.collectionId:e=e.child(y.collectionId)}let l=[];t.where&&(l=function(T){const w=sb(T);return w instanceof hi&&Mw(w)?w.getFilters():[w]}(t.where));let c=[];t.orderBy&&(c=function(T){return T.map(w=>function(B){return new bf(Mo(B.field),function($){switch($){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(B.direction))}(w))}(t.orderBy));let d=null;t.limit&&(d=function(T){let w;return w=typeof T=="object"?T.value:T,nd(w)?null:w}(t.limit));let p=null;t.startAt&&(p=function(T){const w=!!T.before,P=T.values||[];return new wf(P,w)}(t.startAt));let g=null;return t.endAt&&(g=function(T){const w=!T.before,P=T.values||[];return new wf(P,w)}(t.endAt)),hO(e,a,c,l,d,"F",p,g)}function KO(i,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Se(28987,{purpose:a})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function sb(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Mo(t.unaryFilter.field);return Ot.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=Mo(t.unaryFilter.field);return Ot.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Mo(t.unaryFilter.field);return Ot.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Mo(t.unaryFilter.field);return Ot.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Se(61313);default:return Se(60726)}}(i):i.fieldFilter!==void 0?function(t){return Ot.create(Mo(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Se(58110);default:return Se(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return hi.create(t.compositeFilter.filters.map(s=>sb(s)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return Se(1026)}}(t.compositeFilter.op))}(i):Se(30097,{filter:i})}function YO(i){return kO[i]}function QO(i){return PO[i]}function WO(i){return VO[i]}function xo(i){return{fieldPath:i.canonicalString()}}function Mo(i){return tn.fromServerFormat(i.fieldPath)}function rb(i){return i instanceof Ot?function(t){if(t.op==="=="){if(NT(t.value))return{unaryFilter:{field:xo(t.field),op:"IS_NAN"}};if(CT(t.value))return{unaryFilter:{field:xo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(NT(t.value))return{unaryFilter:{field:xo(t.field),op:"IS_NOT_NAN"}};if(CT(t.value))return{unaryFilter:{field:xo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xo(t.field),op:QO(t.op),value:t.value}}}(i):i instanceof hi?function(t){const s=t.getFilters().map(a=>rb(a));return s.length===1?s[0]:{compositeFilter:{op:WO(t.op),filters:s}}}(i):Se(54877,{filter:i})}function XO(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function ab(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,t,s,a,l=be.min(),c=be.min(),d=nn.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new hr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new hr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(e){this.gt=e}}function ZO(i){const e=GO({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?yg(e,e.limit,"L"):e}/**
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
 */class JO{constructor(){this.Dn=new ex}addToCollectionParentIndex(e,t){return this.Dn.add(t),ee.resolve()}getCollectionParents(e,t){return ee.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return ee.resolve()}deleteFieldIndex(e,t){return ee.resolve()}deleteAllFieldIndexes(e){return ee.resolve()}createTargetIndexes(e,t){return ee.resolve()}getDocumentsMatchingTarget(e,t){return ee.resolve(null)}getIndexType(e,t){return ee.resolve(0)}getFieldIndexes(e,t){return ee.resolve([])}getNextCollectionGroupToUpdate(e){return ee.resolve(null)}getMinOffset(e,t){return ee.resolve(Tr.min())}getMinOffsetFromCollectionGroup(e,t){return ee.resolve(Tr.min())}updateCollectionGroup(e,t,s){return ee.resolve()}updateIndexEntries(e,t){return ee.resolve()}}class ex{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t]||new Ut(lt.comparator),l=!a.has(s);return this.index[t]=a.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),a=this.index[t];return a&&a.has(s)}getEntries(e){return(this.index[e]||new Ut(lt.comparator)).toArray()}}/**
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
 */const qT={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ob=41943040;class Tn{static withCacheSize(e){return new Tn(e,Tn.DEFAULT_COLLECTION_PERCENTILE,Tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tn.DEFAULT_COLLECTION_PERCENTILE=10,Tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tn.DEFAULT=new Tn(ob,Tn.DEFAULT_COLLECTION_PERCENTILE,Tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tn.DISABLED=new Tn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Wo(0)}static ur(){return new Wo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT="LruGarbageCollector",tx=1048576;function GT([i,e],[t,s]){const a=Oe(i,t);return a===0?Oe(e,s):a}class nx{constructor(e){this.Tr=e,this.buffer=new Ut(GT),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();GT(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ix{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ue(HT,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){rl(t)?ue(HT,"Ignoring IndexedDB error during garbage collection: ",t):await sl(t)}await this.Rr(3e5)})}}class sx{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return ee.resolve(td.ue);const s=new nx(t);return this.Vr.forEachTarget(e,a=>s.Er(a.sequenceNumber)).next(()=>this.Vr.gr(e,a=>s.Er(a))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ue("LruGarbageCollector","Garbage collection skipped; disabled"),ee.resolve(qT)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(ue("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),qT):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let s,a,l,c,d,p,g;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(ue("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),a=this.params.maximumSequenceNumbersToCollect):a=T,c=Date.now(),this.nthSequenceNumber(e,a))).next(T=>(s=T,d=Date.now(),this.removeTargets(e,s,t))).next(T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,s))).next(T=>(g=Date.now(),Do()<=Ve.DEBUG&&ue("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-y}ms
	Determined least recently used ${a} in `+(d-c)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${T} documents in `+(g-p)+`ms
Total Duration: ${g-y}ms`),ee.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:T})))}}function rx(i,e){return new sx(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(){this.changes=new Oa(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,hn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?ee.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class lx{constructor(e,t,s,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(s=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(s!==null&&Lu(s.mutation,a,Pn.empty(),ht.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Le()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Le()){const a=_a();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,s).next(l=>{let c=Ru();return l.forEach((d,p)=>{c=c.insert(d,p.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const s=_a();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Le()))}populateOverlays(e,t,s){const a=[];return s.forEach(l=>{t.has(l)||a.push(l)}),this.documentOverlayCache.getOverlays(e,a).next(l=>{l.forEach((c,d)=>{t.set(c,d)})})}computeViews(e,t,s,a){let l=bs();const c=Vu(),d=function(){return Vu()}();return t.forEach((p,g)=>{const y=s.get(g.key);a.has(g.key)&&(y===void 0||y.mutation instanceof Cr)?l=l.insert(g.key,g):y!==void 0?(c.set(g.key,y.mutation.getFieldMask()),Lu(y.mutation,g,y.mutation.getFieldMask(),ht.now())):c.set(g.key,Pn.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((g,y)=>c.set(g,y)),t.forEach((g,y)=>{var T;return d.set(g,new ox(y,(T=c.get(g))!==null&&T!==void 0?T:null))}),d))}recalculateAndSaveOverlays(e,t){const s=Vu();let a=new _t((c,d)=>c-d),l=Le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const d of c)d.keys().forEach(p=>{const g=t.get(p);if(g===null)return;let y=s.get(p)||Pn.empty();y=d.applyToLocalView(g,y),s.set(p,y);const T=(a.get(d.batchId)||Le()).add(p);a=a.insert(d.batchId,T)})}).next(()=>{const c=[],d=a.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),g=p.key,y=p.value,T=Fw();y.forEach(w=>{if(!l.has(w)){const P=Qw(t.get(w),s.get(w));P!==null&&T.set(w,P),l=l.add(w)}}),c.push(this.documentOverlayCache.saveOverlays(e,g,T))}return ee.waitFor(c)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,a){return function(c){return ge.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Lw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,a):this.getDocumentsMatchingCollectionQuery(e,t,s,a)}getNextDocuments(e,t,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,a).next(l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,a-l.size):ee.resolve(_a());let d=qu,p=l;return c.next(g=>ee.forEach(g,(y,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),l.get(y)?ee.resolve():this.remoteDocumentCache.getEntry(e,y).next(w=>{p=p.insert(y,w)}))).next(()=>this.populateOverlays(e,g,l)).next(()=>this.computeViews(e,p,g,Le())).next(y=>({batchId:d,changes:Bw(y)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ge(t)).next(s=>{let a=Ru();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,s,a){const l=t.collectionGroup;let c=Ru();return this.indexManager.getCollectionParents(e,l).next(d=>ee.forEach(d,p=>{const g=function(T,w){return new ac(w,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,s,a).next(y=>{y.forEach((T,w)=>{c=c.insert(T,w)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,s,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,a))).next(c=>{l.forEach((p,g)=>{const y=g.getKey();c.get(y)===null&&(c=c.insert(y,hn.newInvalidDocument(y)))});let d=Ru();return c.forEach((p,g)=>{const y=l.get(p);y!==void 0&&Lu(y.mutation,g,Pn.empty(),ht.now()),ad(t,g)&&(d=d.insert(p,g))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return ee.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(a){return{id:a.id,version:a.version,createTime:Pi(a.createTime)}}(t)),ee.resolve()}getNamedQuery(e,t){return ee.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(a){return{name:a.name,query:ZO(a.bundledQuery),readTime:Pi(a.readTime)}}(t)),ee.resolve()}}/**
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
 */class cx{constructor(){this.overlays=new _t(ge.comparator),this.kr=new Map}getOverlay(e,t){return ee.resolve(this.overlays.get(t))}getOverlays(e,t){const s=_a();return ee.forEach(t,a=>this.getOverlay(e,a).next(l=>{l!==null&&s.set(a,l)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((a,l)=>{this.wt(e,t,l)}),ee.resolve()}removeOverlaysForBatchId(e,t,s){const a=this.kr.get(s);return a!==void 0&&(a.forEach(l=>this.overlays=this.overlays.remove(l)),this.kr.delete(s)),ee.resolve()}getOverlaysForCollection(e,t,s){const a=_a(),l=t.length+1,c=new ge(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,g=p.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>s&&a.set(p.getKey(),p)}return ee.resolve(a)}getOverlaysForCollectionGroup(e,t,s,a){let l=new _t((g,y)=>g-y);const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>s){let y=l.get(g.largestBatchId);y===null&&(y=_a(),l=l.insert(g.largestBatchId,y)),y.set(g.getKey(),g)}}const d=_a(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((g,y)=>d.set(g,y)),!(d.size()>=a)););return ee.resolve(d)}wt(e,t,s){const a=this.overlays.get(s.key);if(a!==null){const c=this.kr.get(a.largestBatchId).delete(s.key);this.kr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(s.key,new NO(t,s));let l=this.kr.get(t);l===void 0&&(l=Le(),this.kr.set(t,l)),this.kr.set(t,l.add(s.key))}}/**
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
 */class hx{constructor(){this.sessionToken=nn.EMPTY_BYTE_STRING}getSessionToken(e){return ee.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,ee.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(){this.qr=new Ut(Kt.Qr),this.$r=new Ut(Kt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const s=new Kt(e,t);this.qr=this.qr.add(s),this.$r=this.$r.add(s)}Kr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.Wr(new Kt(e,t))}Gr(e,t){e.forEach(s=>this.removeReference(s,t))}zr(e){const t=new ge(new lt([])),s=new Kt(t,e),a=new Kt(t,e+1),l=[];return this.$r.forEachInRange([s,a],c=>{this.Wr(c),l.push(c.key)}),l}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new ge(new lt([])),s=new Kt(t,e),a=new Kt(t,e+1);let l=Le();return this.$r.forEachInRange([s,a],c=>{l=l.add(c.key)}),l}containsKey(e){const t=new Kt(e,0),s=this.qr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Kt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return ge.comparator(e.key,t.key)||Oe(e.Hr,t.Hr)}static Ur(e,t){return Oe(e.Hr,t.Hr)||ge.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Ut(Kt.Qr)}checkEmpty(e){return ee.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,a){const l=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new CO(l,t,s,a);this.mutationQueue.push(c);for(const d of a)this.Yr=this.Yr.add(new Kt(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return ee.resolve(c)}lookupMutationBatch(e,t){return ee.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,a=this.Xr(s),l=a<0?0:a;return ee.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return ee.resolve(this.mutationQueue.length===0?u_:this.er-1)}getAllMutationBatches(e){return ee.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Kt(t,0),a=new Kt(t,Number.POSITIVE_INFINITY),l=[];return this.Yr.forEachInRange([s,a],c=>{const d=this.Zr(c.Hr);l.push(d)}),ee.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Ut(Oe);return t.forEach(a=>{const l=new Kt(a,0),c=new Kt(a,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([l,c],d=>{s=s.add(d.Hr)})}),ee.resolve(this.ei(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,a=s.length+1;let l=s;ge.isDocumentKey(l)||(l=l.child(""));const c=new Kt(new ge(l),0);let d=new Ut(Oe);return this.Yr.forEachWhile(p=>{const g=p.key.path;return!!s.isPrefixOf(g)&&(g.length===a&&(d=d.add(p.Hr)),!0)},c),ee.resolve(this.ei(d))}ei(e){const t=[];return e.forEach(s=>{const a=this.Zr(s);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){Xe(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Yr;return ee.forEach(t.mutations,a=>{const l=new Kt(a.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Yr=s})}rr(e){}containsKey(e,t){const s=new Kt(t,0),a=this.Yr.firstAfterOrEqual(s);return ee.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,ee.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(e){this.ni=e,this.docs=function(){return new _t(ge.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,a=this.docs.get(s),l=a?a.size:0,c=this.ni(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return ee.resolve(s?s.document.mutableCopy():hn.newInvalidDocument(t))}getEntries(e,t){let s=bs();return t.forEach(a=>{const l=this.docs.get(a);s=s.insert(a,l?l.document.mutableCopy():hn.newInvalidDocument(a))}),ee.resolve(s)}getDocumentsMatchingQuery(e,t,s,a){let l=bs();const c=t.path,d=new ge(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:g,value:{document:y}}=p.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||q2(F2(y),s)<=0||(a.has(y.key)||ad(t,y))&&(l=l.insert(y.key,y.mutableCopy()))}return ee.resolve(l)}getAllFromCollectionGroup(e,t,s,a){Se(9500)}ri(e,t){return ee.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new mx(this)}getSize(e){return ee.resolve(this.size)}}class mx extends ax{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach((s,a)=>{a.isValidDocument()?t.push(this.Or.addEntry(e,a)):this.Or.removeEntry(s)}),ee.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(e){this.persistence=e,this.ii=new Oa(t=>f_(t),d_),this.lastRemoteSnapshotVersion=be.min(),this.highestTargetId=0,this.si=0,this.oi=new y_,this.targetCount=0,this._i=Wo.ar()}forEachTarget(e,t){return this.ii.forEach((s,a)=>t(a)),ee.resolve()}getLastRemoteSnapshotVersion(e){return ee.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ee.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),ee.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.si&&(this.si=t),ee.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Wo(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,ee.resolve()}updateTargetData(e,t){return this.hr(t),ee.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,ee.resolve()}removeTargets(e,t,s){let a=0;const l=[];return this.ii.forEach((c,d)=>{d.sequenceNumber<=t&&s.get(d.targetId)===null&&(this.ii.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)}),ee.waitFor(l).next(()=>a)}getTargetCount(e){return ee.resolve(this.targetCount)}getTargetData(e,t){const s=this.ii.get(t)||null;return ee.resolve(s)}addMatchingKeys(e,t,s){return this.oi.Kr(t,s),ee.resolve()}removeMatchingKeys(e,t,s){this.oi.Gr(t,s);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach(c=>{l.push(a.markPotentiallyOrphaned(e,c))}),ee.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),ee.resolve()}getMatchingKeysForTargetId(e,t){const s=this.oi.Jr(t);return ee.resolve(s)}containsKey(e,t){return ee.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e,t){this.ai={},this.overlays={},this.ui=new td(0),this.ci=!1,this.ci=!0,this.li=new hx,this.referenceDelegate=e(this),this.hi=new px(this),this.indexManager=new JO,this.remoteDocumentCache=function(a){return new dx(a)}(s=>this.referenceDelegate.Pi(s)),this.serializer=new $O(t),this.Ti=new ux(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new cx,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.ai[e.toKey()];return s||(s=new fx(t,this.referenceDelegate),this.ai[e.toKey()]=s),s}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,s){ue("MemoryPersistence","Starting transaction:",e);const a=new gx(this.ui.next());return this.referenceDelegate.Ii(),s(a).next(l=>this.referenceDelegate.di(a).next(()=>l)).toPromise().then(l=>(a.raiseOnCommittedEvent(),l))}Ei(e,t){return ee.or(Object.values(this.ai).map(s=>()=>s.containsKey(e,t)))}}class gx extends G2{constructor(e){super(),this.currentSequenceNumber=e}}class v_{constructor(e){this.persistence=e,this.Ai=new y_,this.Ri=null}static Vi(e){return new v_(e)}get mi(){if(this.Ri)return this.Ri;throw Se(60996)}addReference(e,t,s){return this.Ai.addReference(s,t),this.mi.delete(s.toString()),ee.resolve()}removeReference(e,t,s){return this.Ai.removeReference(s,t),this.mi.add(s.toString()),ee.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),ee.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(a=>this.mi.add(a.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(l=>this.mi.add(l.toString()))}).next(()=>s.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ee.forEach(this.mi,s=>{const a=ge.fromPath(s);return this.fi(e,a).next(l=>{l||t.removeEntry(a,be.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(s=>{s?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return ee.or([()=>ee.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Nf{constructor(e,t){this.persistence=e,this.gi=new Oa(s=>Q2(s.path),(s,a)=>s.isEqual(a)),this.garbageCollector=rx(this,t)}static Vi(e,t){return new Nf(e,t)}Ii(){}di(e){return ee.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(a=>s+a))}yr(e){let t=0;return this.gr(e,s=>{t++}).next(()=>t)}gr(e,t){return ee.forEach(this.gi,(s,a)=>this.Sr(e,s,a).next(l=>l?ee.resolve():t(a)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.ri(e,c=>this.Sr(e,c,t).next(d=>{d||(s++,l.removeEntry(c,be.min()))})).next(()=>l.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),ee.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),ee.resolve()}removeReference(e,t,s){return this.gi.set(s,e.currentSequenceNumber),ee.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),ee.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Jh(e.data.value)),t}Sr(e,t,s){return ee.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.gi.get(t);return ee.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e,t,s,a){this.targetId=e,this.fromCache=t,this.Is=s,this.ds=a}static Es(e,t){let s=Le(),a=Le();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new E_(e,t.fromCache,s,a)}}/**
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
 */class yx{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return EI()?8:K2(dn())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,s,a){const l={result:null};return this.ps(e,t).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.ys(e,t,a,s).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new _x;return this.ws(e,t,c).next(d=>{if(l.result=d,this.Rs)return this.Ss(e,t,c,d.size)})}).next(()=>l.result)}Ss(e,t,s,a){return s.documentReadCount<this.Vs?(Do()<=Ve.DEBUG&&ue("QueryEngine","SDK will not create cache indexes for query:",Oo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),ee.resolve()):(Do()<=Ve.DEBUG&&ue("QueryEngine","Query:",Oo(t),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.fs*a?(Do()<=Ve.DEBUG&&ue("QueryEngine","The SDK decides to create cache indexes for query:",Oo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Mi(t))):ee.resolve())}ps(e,t){if(MT(t))return ee.resolve(null);let s=Mi(t);return this.indexManager.getIndexType(e,s).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=yg(t,null,"F"),s=Mi(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(l=>{const c=Le(...l);return this.gs.getDocuments(e,c).next(d=>this.indexManager.getMinOffset(e,s).next(p=>{const g=this.bs(t,d);return this.Ds(t,g,c,p.readTime)?this.ps(e,yg(t,null,"F")):this.vs(e,g,t,p)}))})))}ys(e,t,s,a){return MT(t)||a.isEqual(be.min())?ee.resolve(null):this.gs.getDocuments(e,s).next(l=>{const c=this.bs(t,l);return this.Ds(t,c,s,a)?ee.resolve(null):(Do()<=Ve.DEBUG&&ue("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),Oo(t)),this.vs(e,c,t,B2(a,qu)).next(d=>d))})}bs(e,t){let s=new Ut(zw(e));return t.forEach((a,l)=>{ad(e,l)&&(s=s.add(l))}),s}Ds(e,t,s,a){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}ws(e,t,s){return Do()<=Ve.DEBUG&&ue("QueryEngine","Using full collection scan to execute query:",Oo(t)),this.gs.getDocumentsMatchingQuery(e,t,Tr.min(),s)}vs(e,t,s,a){return this.gs.getDocumentsMatchingQuery(e,s,a).next(l=>(t.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_="LocalStore",vx=3e8;class Ex{constructor(e,t,s,a){this.persistence=e,this.Cs=t,this.serializer=a,this.Fs=new _t(Oe),this.Ms=new Oa(l=>f_(l),d_),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(s)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lx(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}}function Tx(i,e,t,s){return new Ex(i,e,t,s)}async function ub(i,e){const t=Re(i);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let a;return t.mutationQueue.getAllMutationBatches(s).next(l=>(a=l,t.Ns(e),t.mutationQueue.getAllMutationBatches(s))).next(l=>{const c=[],d=[];let p=Le();for(const g of a){c.push(g.batchId);for(const y of g.mutations)p=p.add(y.key)}for(const g of l){d.push(g.batchId);for(const y of g.mutations)p=p.add(y.key)}return t.localDocuments.getDocuments(s,p).next(g=>({Bs:g,removedBatchIds:c,addedBatchIds:d}))})})}function Sx(i,e){const t=Re(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const a=e.batch.keys(),l=t.Os.newChangeBuffer({trackRemovals:!0});return function(d,p,g,y){const T=g.batch,w=T.keys();let P=ee.resolve();return w.forEach(B=>{P=P.next(()=>y.getEntry(p,B)).next(J=>{const $=g.docVersions.get(B);Xe($!==null,48541),J.version.compareTo($)<0&&(T.applyToRemoteDocument(J,g),J.isValidDocument()&&(J.setReadTime(g.commitVersion),y.addEntry(J)))})}),P.next(()=>d.mutationQueue.removeMutationBatch(p,T))}(t,s,e,l).next(()=>l.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(d){let p=Le();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(p=p.add(d.batch.mutations[g].key));return p}(e))).next(()=>t.localDocuments.getDocuments(s,a))})}function cb(i){const e=Re(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function Ax(i,e){const t=Re(i),s=e.snapshotVersion;let a=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=t.Os.newChangeBuffer({trackRemovals:!0});a=t.Fs;const d=[];e.targetChanges.forEach((y,T)=>{const w=a.get(T);if(!w)return;d.push(t.hi.removeMatchingKeys(l,y.removedDocuments,T).next(()=>t.hi.addMatchingKeys(l,y.addedDocuments,T)));let P=w.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?P=P.withResumeToken(nn.EMPTY_BYTE_STRING,be.min()).withLastLimboFreeSnapshotVersion(be.min()):y.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(y.resumeToken,s)),a=a.insert(T,P),function(J,$,_e){return J.resumeToken.approximateByteSize()===0||$.snapshotVersion.toMicroseconds()-J.snapshotVersion.toMicroseconds()>=vx?!0:_e.addedDocuments.size+_e.modifiedDocuments.size+_e.removedDocuments.size>0}(w,P,y)&&d.push(t.hi.updateTargetData(l,P))});let p=bs(),g=Le();if(e.documentUpdates.forEach(y=>{e.resolvedLimboDocuments.has(y)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,y))}),d.push(wx(l,c,e.documentUpdates).next(y=>{p=y.Ls,g=y.ks})),!s.isEqual(be.min())){const y=t.hi.getLastRemoteSnapshotVersion(l).next(T=>t.hi.setTargetsMetadata(l,l.currentSequenceNumber,s));d.push(y)}return ee.waitFor(d).next(()=>c.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,g)).next(()=>p)}).then(l=>(t.Fs=a,l))}function wx(i,e,t){let s=Le(),a=Le();return t.forEach(l=>s=s.add(l)),e.getEntries(i,s).next(l=>{let c=bs();return t.forEach((d,p)=>{const g=l.get(d);p.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(d)),p.isNoDocument()&&p.version.isEqual(be.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):ue(T_,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",p.version)}),{Ls:c,ks:a}})}function bx(i,e){const t=Re(i);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=u_),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Rx(i,e){const t=Re(i);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let a;return t.hi.getTargetData(s,e).next(l=>l?(a=l,ee.resolve(a)):t.hi.allocateTargetId(s).next(c=>(a=new hr(e,c,"TargetPurposeListen",s.currentSequenceNumber),t.hi.addTargetData(s,a).next(()=>a))))}).then(s=>{const a=t.Fs.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(s.targetId,s),t.Ms.set(e,s.targetId)),s})}async function Ag(i,e,t){const s=Re(i),a=s.Fs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,c=>s.persistence.referenceDelegate.removeTarget(c,a))}catch(c){if(!rl(c))throw c;ue(T_,`Failed to update sequence numbers for target ${e}: ${c}`)}s.Fs=s.Fs.remove(e),s.Ms.delete(a.target)}function KT(i,e,t){const s=Re(i);let a=be.min(),l=Le();return s.persistence.runTransaction("Execute query","readwrite",c=>function(p,g,y){const T=Re(p),w=T.Ms.get(y);return w!==void 0?ee.resolve(T.Fs.get(w)):T.hi.getTargetData(g,y)}(s,c,Mi(e)).next(d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,s.hi.getMatchingKeysForTargetId(c,d.targetId).next(p=>{l=p})}).next(()=>s.Cs.getDocumentsMatchingQuery(c,e,t?a:be.min(),t?l:Le())).next(d=>(Ix(s,dO(e),d),{documents:d,qs:l})))}function Ix(i,e,t){let s=i.xs.get(e)||be.min();t.forEach((a,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)}),i.xs.set(e,s)}class YT{constructor(){this.activeTargetIds=vO()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Cx{constructor(){this.Fo=new YT,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,s){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new YT,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */const QT="ConnectivityMonitor";class WT{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ue(QT,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ue(QT,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const Fp="RestConnection",Dx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Ox{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${s}/databases/${a}`,this.Ko=this.databaseId.database===Sf?`project_id=${s}`:`project_id=${s}&database_id=${a}`}Wo(e,t,s,a,l){const c=wg(),d=this.Go(e,t.toUriEncodedString());ue(Fp,`Sending RPC '${e}' ${c}:`,d,s);const p={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(p,a,l);const{host:g}=new URL(d),y=Is(g);return this.jo(e,d,p,s,y).then(T=>(ue(Fp,`Received RPC '${e}' ${c}: `,T),T),T=>{throw Er(Fp,`RPC '${e}' ${c} failed with error: `,T,"url: ",d,"request:",s),T})}Jo(e,t,s,a,l,c){return this.Wo(e,t,s,a,l)}zo(e,t,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+il}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((a,l)=>e[l]=a),s&&s.headers.forEach((a,l)=>e[l]=a)}Go(e,t){const s=Dx[e];return`${this.$o}/v1/${t}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const on="WebChannelConnection";class Mx extends Ox{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,s,a,l){const c=wg();return new Promise((d,p)=>{const g=new hw;g.setWithCredentials(!0),g.listenOnce(fw.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case Zh.NO_ERROR:const T=g.getResponseJson();ue(on,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(T)),d(T);break;case Zh.TIMEOUT:ue(on,`RPC '${e}' ${c} timed out`),p(new le(X.DEADLINE_EXCEEDED,"Request time out"));break;case Zh.HTTP_ERROR:const w=g.getStatus();if(ue(on,`RPC '${e}' ${c} failed with status:`,w,"response text:",g.getResponseText()),w>0){let P=g.getResponseJson();Array.isArray(P)&&(P=P[0]);const B=P?.error;if(B&&B.status&&B.message){const J=function(_e){const de=_e.toLowerCase().replace(/_/g,"-");return Object.values(X).indexOf(de)>=0?de:X.UNKNOWN}(B.status);p(new le(J,B.message))}else p(new le(X.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new le(X.UNAVAILABLE,"Connection failed."));break;default:Se(9055,{c_:e,streamId:c,l_:g.getLastErrorCode(),h_:g.getLastError()})}}finally{ue(on,`RPC '${e}' ${c} completed.`)}});const y=JSON.stringify(a);ue(on,`RPC '${e}' ${c} sending request:`,a),g.send(t,"POST",y,s,15)})}P_(e,t,s){const a=wg(),l=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=pw(),d=mw(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.zo(p.initMessageHeaders,t,s),p.encodeInitMessageHeaders=!0;const y=l.join("");ue(on,`Creating RPC '${e}' stream ${a}: ${y}`,p);const T=c.createWebChannel(y,p);this.T_(T);let w=!1,P=!1;const B=new xx({Ho:$=>{P?ue(on,`Not sending because RPC '${e}' stream ${a} is closed:`,$):(w||(ue(on,`Opening RPC '${e}' stream ${a} transport.`),T.open(),w=!0),ue(on,`RPC '${e}' stream ${a} sending:`,$),T.send($))},Yo:()=>T.close()}),J=($,_e,de)=>{$.listen(_e,he=>{try{de(he)}catch(Ce){setTimeout(()=>{throw Ce},0)}})};return J(T,bu.EventType.OPEN,()=>{P||(ue(on,`RPC '${e}' stream ${a} transport opened.`),B.s_())}),J(T,bu.EventType.CLOSE,()=>{P||(P=!0,ue(on,`RPC '${e}' stream ${a} transport closed`),B.__(),this.I_(T))}),J(T,bu.EventType.ERROR,$=>{P||(P=!0,Er(on,`RPC '${e}' stream ${a} transport errored. Name:`,$.name,"Message:",$.message),B.__(new le(X.UNAVAILABLE,"The operation could not be completed")))}),J(T,bu.EventType.MESSAGE,$=>{var _e;if(!P){const de=$.data[0];Xe(!!de,16349);const he=de,Ce=he?.error||((_e=he[0])===null||_e===void 0?void 0:_e.error);if(Ce){ue(on,`RPC '${e}' stream ${a} received error:`,Ce);const me=Ce.status;let Ie=function(C){const x=Dt[C];if(x!==void 0)return $w(x)}(me),M=Ce.message;Ie===void 0&&(Ie=X.INTERNAL,M="Unknown error status: "+me+" with message "+Ce.message),P=!0,B.__(new le(Ie,M)),T.close()}else ue(on,`RPC '${e}' stream ${a} received:`,de),B.a_(de)}}),J(d,dw.STAT_EVENT,$=>{$.stat===hg.PROXY?ue(on,`RPC '${e}' stream ${a} detected buffering proxy`):$.stat===hg.NOPROXY&&ue(on,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{B.o_()},0),B}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}}function qp(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cd(i){return new LO(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e,t,s=1e3,a=1.5,l=6e4){this.Fi=e,this.timerId=t,this.d_=s,this.E_=a,this.A_=l,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),s=Math.max(0,Date.now()-this.m_),a=Math.max(0,t-s);a>0&&ue("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,a,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT="PersistentStream";class fb{constructor(e,t,s,a,l,c,d,p){this.Fi=e,this.w_=s,this.S_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new hb(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===X.RESOURCE_EXHAUSTED?(ws(t.toString()),ws("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===X.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,a])=>{this.b_===t&&this.W_(s,a)},s=>{e(()=>{const a=new le(X.UNKNOWN,"Fetching auth token failed: "+s.message);return this.G_(a)})})}W_(e,t){const s=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{s(()=>this.listener.Zo())}),this.stream.e_(()=>{s(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(a=>{s(()=>this.G_(a))}),this.stream.onMessage(a=>{s(()=>++this.C_==1?this.j_(a):this.onNext(a))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return ue(XT,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(ue(XT,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class kx extends fb{constructor(e,t,s,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=jO(this.serializer,e),s=function(l){if(!("targetChange"in l))return be.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?be.min():c.readTime?Pi(c.readTime):be.min()}(e);return this.listener.J_(t,s)}H_(e){const t={};t.database=Sg(this.serializer),t.addTarget=function(l,c){let d;const p=c.target;if(d=gg(p)?{documents:qO(l,p)}:{query:HO(l,p).Vt},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=eb(l,c.resumeToken);const g=vg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}else if(c.snapshotVersion.compareTo(be.min())>0){d.readTime=Cf(l,c.snapshotVersion.toTimestamp());const g=vg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}return d}(this.serializer,e);const s=KO(this.serializer,e);s&&(t.labels=s),this.k_(t)}Y_(e){const t={};t.database=Sg(this.serializer),t.removeTarget=e,this.k_(t)}}class Px extends fb{constructor(e,t,s,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,a,c),this.serializer=l}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Xe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Xe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Xe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=FO(e.writeResults,e.commitTime),s=Pi(e.commitTime);return this.listener.ta(s,t)}na(){const e={};e.database=Sg(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>BO(this.serializer,s))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vx{}class Lx extends Vx{constructor(e,t,s,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=a,this.ra=!1}ia(){if(this.ra)throw new le(X.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,a){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.Wo(e,Eg(t,s),a,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new le(X.UNKNOWN,l.toString())})}Jo(e,t,s,a,l){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.Jo(e,Eg(t,s),a,c,d,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new le(X.UNKNOWN,c.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class Ux{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(ws(t),this._a=!1):ue("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa="RemoteStore";class zx{constructor(e,t,s,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=l,this.Ea.xo(c=>{s.enqueueAndForget(async()=>{xa(this)&&(ue(wa,"Restarting streams for network reachability change."),await async function(p){const g=Re(p);g.Ia.add(4),await uc(g),g.Aa.set("Unknown"),g.Ia.delete(4),await hd(g)}(this))})}),this.Aa=new Ux(s,a)}}async function hd(i){if(xa(i))for(const e of i.da)await e(!0)}async function uc(i){for(const e of i.da)await e(!1)}function db(i,e){const t=Re(i);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),b_(t)?w_(t):al(t).x_()&&A_(t,e))}function S_(i,e){const t=Re(i),s=al(t);t.Ta.delete(e),s.x_()&&mb(t,e),t.Ta.size===0&&(s.x_()?s.B_():xa(t)&&t.Aa.set("Unknown"))}function A_(i,e){if(i.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(be.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}al(i).H_(e)}function mb(i,e){i.Ra.$e(e),al(i).Y_(e)}function w_(i){i.Ra=new MO({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>i.Ta.get(e)||null,lt:()=>i.datastore.serializer.databaseId}),al(i).start(),i.Aa.aa()}function b_(i){return xa(i)&&!al(i).M_()&&i.Ta.size>0}function xa(i){return Re(i).Ia.size===0}function pb(i){i.Ra=void 0}async function jx(i){i.Aa.set("Online")}async function Bx(i){i.Ta.forEach((e,t)=>{A_(i,e)})}async function Fx(i,e){pb(i),b_(i)?(i.Aa.la(e),w_(i)):i.Aa.set("Unknown")}async function qx(i,e,t){if(i.Aa.set("Online"),e instanceof Jw&&e.state===2&&e.cause)try{await async function(a,l){const c=l.cause;for(const d of l.targetIds)a.Ta.has(d)&&(await a.remoteSyncer.rejectListen(d,c),a.Ta.delete(d),a.Ra.removeTarget(d))}(i,e)}catch(s){ue(wa,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Df(i,s)}else if(e instanceof nf?i.Ra.Ye(e):e instanceof Zw?i.Ra.it(e):i.Ra.et(e),!t.isEqual(be.min()))try{const s=await cb(i.localStore);t.compareTo(s)>=0&&await function(l,c){const d=l.Ra.Pt(c);return d.targetChanges.forEach((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const y=l.Ta.get(g);y&&l.Ta.set(g,y.withResumeToken(p.resumeToken,c))}}),d.targetMismatches.forEach((p,g)=>{const y=l.Ta.get(p);if(!y)return;l.Ta.set(p,y.withResumeToken(nn.EMPTY_BYTE_STRING,y.snapshotVersion)),mb(l,p);const T=new hr(y.target,p,g,y.sequenceNumber);A_(l,T)}),l.remoteSyncer.applyRemoteEvent(d)}(i,t)}catch(s){ue(wa,"Failed to raise snapshot:",s),await Df(i,s)}}async function Df(i,e,t){if(!rl(e))throw e;i.Ia.add(1),await uc(i),i.Aa.set("Offline"),t||(t=()=>cb(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{ue(wa,"Retrying IndexedDB access"),await t(),i.Ia.delete(1),await hd(i)})}function gb(i,e){return e().catch(t=>Df(i,t,e))}async function fd(i){const e=Re(i),t=br(e);let s=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:u_;for(;Hx(e);)try{const a=await bx(e.localStore,s);if(a===null){e.Pa.length===0&&t.B_();break}s=a.batchId,Gx(e,a)}catch(a){await Df(e,a)}_b(e)&&yb(e)}function Hx(i){return xa(i)&&i.Pa.length<10}function Gx(i,e){i.Pa.push(e);const t=br(i);t.x_()&&t.Z_&&t.X_(e.mutations)}function _b(i){return xa(i)&&!br(i).M_()&&i.Pa.length>0}function yb(i){br(i).start()}async function Kx(i){br(i).na()}async function Yx(i){const e=br(i);for(const t of i.Pa)e.X_(t.mutations)}async function Qx(i,e,t){const s=i.Pa.shift(),a=p_.from(s,e,t);await gb(i,()=>i.remoteSyncer.applySuccessfulWrite(a)),await fd(i)}async function Wx(i,e){e&&br(i).Z_&&await async function(s,a){if(function(c){return OO(c)&&c!==X.ABORTED}(a.code)){const l=s.Pa.shift();br(s).N_(),await gb(s,()=>s.remoteSyncer.rejectFailedWrite(l.batchId,a)),await fd(s)}}(i,e),_b(i)&&yb(i)}async function $T(i,e){const t=Re(i);t.asyncQueue.verifyOperationInProgress(),ue(wa,"RemoteStore received new credentials");const s=xa(t);t.Ia.add(3),await uc(t),s&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await hd(t)}async function Xx(i,e){const t=Re(i);e?(t.Ia.delete(2),await hd(t)):e||(t.Ia.add(2),await uc(t),t.Aa.set("Unknown"))}function al(i){return i.Va||(i.Va=function(t,s,a){const l=Re(t);return l.ia(),new kx(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(i.datastore,i.asyncQueue,{Zo:jx.bind(null,i),e_:Bx.bind(null,i),n_:Fx.bind(null,i),J_:qx.bind(null,i)}),i.da.push(async e=>{e?(i.Va.N_(),b_(i)?w_(i):i.Aa.set("Unknown")):(await i.Va.stop(),pb(i))})),i.Va}function br(i){return i.ma||(i.ma=function(t,s,a){const l=Re(t);return l.ia(),new Px(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(i.datastore,i.asyncQueue,{Zo:()=>Promise.resolve(),e_:Kx.bind(null,i),n_:Wx.bind(null,i),ea:Yx.bind(null,i),ta:Qx.bind(null,i)}),i.da.push(async e=>{e?(i.ma.N_(),await fd(i)):(await i.ma.stop(),i.Pa.length>0&&(ue(wa,`Stopping write stream with ${i.Pa.length} pending writes`),i.Pa=[]))})),i.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e,t,s,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=a,this.removalCallback=l,this.deferred=new vs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,a,l){const c=Date.now()+s,d=new R_(e,t,c,a,l);return d.start(s),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new le(X.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function I_(i,e){if(ws("AsyncQueue",`${e}: ${i}`),rl(i))return new le(X.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{static emptySet(e){return new zo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ge.comparator(t.key,s.key):(t,s)=>ge.comparator(t.key,s.key),this.keyedMap=Ru(),this.sortedSet=new _t(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof zo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=s.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new zo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(){this.fa=new _t(ge.comparator)}track(e){const t=e.doc.key,s=this.fa.get(t);s?e.type!==0&&s.type===3?this.fa=this.fa.insert(t,e):e.type===3&&s.type!==1?this.fa=this.fa.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.fa=this.fa.remove(t):e.type===1&&s.type===2?this.fa=this.fa.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):Se(63341,{At:e,ga:s}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal((t,s)=>{e.push(s)}),e}}class Xo{constructor(e,t,s,a,l,c,d,p,g){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,t,s,a,l){const c=[];return t.forEach(d=>{c.push({type:0,doc:d})}),new Xo(e,t,zo.emptySet(t),c,s,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&rd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==s[a].type||!t[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $x{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class Zx{constructor(){this.queries=JT(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,s){const a=Re(t),l=a.queries;a.queries=JT(),l.forEach((c,d)=>{for(const p of d.wa)p.onError(s)})})(this,new le(X.ABORTED,"Firestore shutting down"))}}function JT(){return new Oa(i=>Uw(i),rd)}async function C_(i,e){const t=Re(i);let s=3;const a=e.query;let l=t.queries.get(a);l?!l.Sa()&&e.ba()&&(s=2):(l=new $x,s=e.ba()?0:1);try{switch(s){case 0:l.ya=await t.onListen(a,!0);break;case 1:l.ya=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const d=I_(c,`Initialization of query '${Oo(e.query)}' failed`);return void e.onError(d)}t.queries.set(a,l),l.wa.push(e),e.va(t.onlineState),l.ya&&e.Ca(l.ya)&&D_(t)}async function N_(i,e){const t=Re(i),s=e.query;let a=3;const l=t.queries.get(s);if(l){const c=l.wa.indexOf(e);c>=0&&(l.wa.splice(c,1),l.wa.length===0?a=e.ba()?0:1:!l.Sa()&&e.ba()&&(a=2))}switch(a){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function Jx(i,e){const t=Re(i);let s=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const d of c.wa)d.Ca(a)&&(s=!0);c.ya=a}}s&&D_(t)}function eM(i,e,t){const s=Re(i),a=s.queries.get(e);if(a)for(const l of a.wa)l.onError(t);s.queries.delete(e)}function D_(i){i.Da.forEach(e=>{e.next()})}var bg,eS;(eS=bg||(bg={})).Fa="default",eS.Cache="cache";class O_{constructor(e,t,s){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=s||{}}Ca(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new Xo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const s=t!=="Offline";return(!this.options.ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Xo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==bg.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(e){this.key=e}}class Eb{constructor(e){this.key=e}}class tM{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Le(),this.mutatedKeys=Le(),this.Xa=zw(e),this.eu=new zo(this.Xa)}get tu(){return this.Ha}nu(e,t){const s=t?t.ru:new ZT,a=t?t.eu:this.eu;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,d=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((y,T)=>{const w=a.get(y),P=ad(this.query,T)?T:null,B=!!w&&this.mutatedKeys.has(w.key),J=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let $=!1;w&&P?w.data.isEqual(P.data)?B!==J&&(s.track({type:3,doc:P}),$=!0):this.iu(w,P)||(s.track({type:2,doc:P}),$=!0,(p&&this.Xa(P,p)>0||g&&this.Xa(P,g)<0)&&(d=!0)):!w&&P?(s.track({type:0,doc:P}),$=!0):w&&!P&&(s.track({type:1,doc:w}),$=!0,(p||g)&&(d=!0)),$&&(P?(c=c.add(P),l=J?l.add(y):l.delete(y)):(c=c.delete(y),l=l.delete(y)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const y=this.query.limitType==="F"?c.last():c.first();c=c.delete(y.key),l=l.delete(y.key),s.track({type:1,doc:y})}return{eu:c,ru:s,Ds:d,mutatedKeys:l}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,a){const l=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const c=e.ru.pa();c.sort((y,T)=>function(P,B){const J=$=>{switch($){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Se(20277,{At:$})}};return J(P)-J(B)}(y.type,T.type)||this.Xa(y.doc,T.doc)),this.su(s),a=a!=null&&a;const d=t&&!a?this.ou():[],p=this.Za.size===0&&this.current&&!a?1:0,g=p!==this.Ya;return this.Ya=p,c.length!==0||g?{snapshot:new Xo(this.query,e.eu,l,c,e.mutatedKeys,p===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),_u:d}:{_u:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new ZT,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Le(),this.eu.forEach(s=>{this.au(s.key)&&(this.Za=this.Za.add(s.key))});const t=[];return e.forEach(s=>{this.Za.has(s)||t.push(new Eb(s))}),this.Za.forEach(s=>{e.has(s)||t.push(new vb(s))}),t}uu(e){this.Ha=e.qs,this.Za=Le();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Xo.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const x_="SyncEngine";class nM{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class iM{constructor(e){this.key=e,this.lu=!1}}class sM{constructor(e,t,s,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.hu={},this.Pu=new Oa(d=>Uw(d),rd),this.Tu=new Map,this.Iu=new Set,this.du=new _t(ge.comparator),this.Eu=new Map,this.Au=new y_,this.Ru={},this.Vu=new Map,this.mu=Wo.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function rM(i,e,t=!0){const s=Rb(i);let a;const l=s.Pu.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.cu()):a=await Tb(s,e,t,!0),a}async function aM(i,e){const t=Rb(i);await Tb(t,e,!0,!1)}async function Tb(i,e,t,s){const a=await Rx(i.localStore,Mi(e)),l=a.targetId,c=i.sharedClientState.addLocalQueryTarget(l,t);let d;return s&&(d=await oM(i,e,l,c==="current",a.resumeToken)),i.isPrimaryClient&&t&&db(i.remoteStore,a),d}async function oM(i,e,t,s,a){i.gu=(T,w,P)=>async function(J,$,_e,de){let he=$.view.nu(_e);he.Ds&&(he=await KT(J.localStore,$.query,!1).then(({documents:M})=>$.view.nu(M,he)));const Ce=de&&de.targetChanges.get($.targetId),me=de&&de.targetMismatches.get($.targetId)!=null,Ie=$.view.applyChanges(he,J.isPrimaryClient,Ce,me);return nS(J,$.targetId,Ie._u),Ie.snapshot}(i,T,w,P);const l=await KT(i.localStore,e,!0),c=new tM(e,l.qs),d=c.nu(l.documents),p=lc.createSynthesizedTargetChangeForCurrentChange(t,s&&i.onlineState!=="Offline",a),g=c.applyChanges(d,i.isPrimaryClient,p);nS(i,t,g._u);const y=new nM(e,t,c);return i.Pu.set(e,y),i.Tu.has(t)?i.Tu.get(t).push(e):i.Tu.set(t,[e]),g.snapshot}async function lM(i,e,t){const s=Re(i),a=s.Pu.get(e),l=s.Tu.get(a.targetId);if(l.length>1)return s.Tu.set(a.targetId,l.filter(c=>!rd(c,e))),void s.Pu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await Ag(s.localStore,a.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(a.targetId),t&&S_(s.remoteStore,a.targetId),Rg(s,a.targetId)}).catch(sl)):(Rg(s,a.targetId),await Ag(s.localStore,a.targetId,!0))}async function uM(i,e){const t=Re(i),s=t.Pu.get(e),a=t.Tu.get(s.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),S_(t.remoteStore,s.targetId))}async function cM(i,e,t){const s=_M(i);try{const a=await function(c,d){const p=Re(c),g=ht.now(),y=d.reduce((P,B)=>P.add(B.key),Le());let T,w;return p.persistence.runTransaction("Locally write mutations","readwrite",P=>{let B=bs(),J=Le();return p.Os.getEntries(P,y).next($=>{B=$,B.forEach((_e,de)=>{de.isValidDocument()||(J=J.add(_e))})}).next(()=>p.localDocuments.getOverlayedDocuments(P,B)).next($=>{T=$;const _e=[];for(const de of d){const he=RO(de,T.get(de.key).overlayedDocument);he!=null&&_e.push(new Cr(de.key,he,Dw(he.value.mapValue),ki.exists(!0)))}return p.mutationQueue.addMutationBatch(P,g,_e,d)}).next($=>{w=$;const _e=$.applyToLocalDocumentSet(T,J);return p.documentOverlayCache.saveOverlays(P,$.batchId,_e)})}).then(()=>({batchId:w.batchId,changes:Bw(T)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),function(c,d,p){let g=c.Ru[c.currentUser.toKey()];g||(g=new _t(Oe)),g=g.insert(d,p),c.Ru[c.currentUser.toKey()]=g}(s,a.batchId,t),await cc(s,a.changes),await fd(s.remoteStore)}catch(a){const l=I_(a,"Failed to persist write");t.reject(l)}}async function Sb(i,e){const t=Re(i);try{const s=await Ax(t.localStore,e);e.targetChanges.forEach((a,l)=>{const c=t.Eu.get(l);c&&(Xe(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?c.lu=!0:a.modifiedDocuments.size>0?Xe(c.lu,14607):a.removedDocuments.size>0&&(Xe(c.lu,42227),c.lu=!1))}),await cc(t,s,e)}catch(s){await sl(s)}}function tS(i,e,t){const s=Re(i);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const a=[];s.Pu.forEach((l,c)=>{const d=c.view.va(e);d.snapshot&&a.push(d.snapshot)}),function(c,d){const p=Re(c);p.onlineState=d;let g=!1;p.queries.forEach((y,T)=>{for(const w of T.wa)w.va(d)&&(g=!0)}),g&&D_(p)}(s.eventManager,e),a.length&&s.hu.J_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function hM(i,e,t){const s=Re(i);s.sharedClientState.updateQueryState(e,"rejected",t);const a=s.Eu.get(e),l=a&&a.key;if(l){let c=new _t(ge.comparator);c=c.insert(l,hn.newNoDocument(l,be.min()));const d=Le().add(l),p=new ud(be.min(),new Map,new _t(Oe),c,d);await Sb(s,p),s.du=s.du.remove(l),s.Eu.delete(e),M_(s)}else await Ag(s.localStore,e,!1).then(()=>Rg(s,e,t)).catch(sl)}async function fM(i,e){const t=Re(i),s=e.batch.batchId;try{const a=await Sx(t.localStore,e);wb(t,s,null),Ab(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await cc(t,a)}catch(a){await sl(a)}}async function dM(i,e,t){const s=Re(i);try{const a=await function(c,d){const p=Re(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let y;return p.mutationQueue.lookupMutationBatch(g,d).next(T=>(Xe(T!==null,37113),y=T.keys(),p.mutationQueue.removeMutationBatch(g,T))).next(()=>p.mutationQueue.performConsistencyCheck(g)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(g,y,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,y)).next(()=>p.localDocuments.getDocuments(g,y))})}(s.localStore,e);wb(s,e,t),Ab(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await cc(s,a)}catch(a){await sl(a)}}function Ab(i,e){(i.Vu.get(e)||[]).forEach(t=>{t.resolve()}),i.Vu.delete(e)}function wb(i,e,t){const s=Re(i);let a=s.Ru[s.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),s.Ru[s.currentUser.toKey()]=a}}function Rg(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const s of i.Tu.get(e))i.Pu.delete(s),t&&i.hu.pu(s,t);i.Tu.delete(e),i.isPrimaryClient&&i.Au.zr(e).forEach(s=>{i.Au.containsKey(s)||bb(i,s)})}function bb(i,e){i.Iu.delete(e.path.canonicalString());const t=i.du.get(e);t!==null&&(S_(i.remoteStore,t),i.du=i.du.remove(e),i.Eu.delete(t),M_(i))}function nS(i,e,t){for(const s of t)s instanceof vb?(i.Au.addReference(s.key,e),mM(i,s)):s instanceof Eb?(ue(x_,"Document no longer in limbo: "+s.key),i.Au.removeReference(s.key,e),i.Au.containsKey(s.key)||bb(i,s.key)):Se(19791,{yu:s})}function mM(i,e){const t=e.key,s=t.path.canonicalString();i.du.get(t)||i.Iu.has(s)||(ue(x_,"New document in limbo: "+t),i.Iu.add(s),M_(i))}function M_(i){for(;i.Iu.size>0&&i.du.size<i.maxConcurrentLimboResolutions;){const e=i.Iu.values().next().value;i.Iu.delete(e);const t=new ge(lt.fromString(e)),s=i.mu.next();i.Eu.set(s,new iM(t)),i.du=i.du.insert(t,s),db(i.remoteStore,new hr(Mi(sd(t.path)),s,"TargetPurposeLimboResolution",td.ue))}}async function cc(i,e,t){const s=Re(i),a=[],l=[],c=[];s.Pu.isEmpty()||(s.Pu.forEach((d,p)=>{c.push(s.gu(p,e,t).then(g=>{var y;if((g||t)&&s.isPrimaryClient){const T=g?!g.fromCache:(y=t?.targetChanges.get(p.targetId))===null||y===void 0?void 0:y.current;s.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(g){a.push(g);const T=E_.Es(p.targetId,g);l.push(T)}}))}),await Promise.all(c),s.hu.J_(a),await async function(p,g){const y=Re(p);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>ee.forEach(g,w=>ee.forEach(w.Is,P=>y.persistence.referenceDelegate.addReference(T,w.targetId,P)).next(()=>ee.forEach(w.ds,P=>y.persistence.referenceDelegate.removeReference(T,w.targetId,P)))))}catch(T){if(!rl(T))throw T;ue(T_,"Failed to update sequence numbers: "+T)}for(const T of g){const w=T.targetId;if(!T.fromCache){const P=y.Fs.get(w),B=P.snapshotVersion,J=P.withLastLimboFreeSnapshotVersion(B);y.Fs=y.Fs.insert(w,J)}}}(s.localStore,l))}async function pM(i,e){const t=Re(i);if(!t.currentUser.isEqual(e)){ue(x_,"User change. New user:",e.toKey());const s=await ub(t.localStore,e);t.currentUser=e,function(l,c){l.Vu.forEach(d=>{d.forEach(p=>{p.reject(new le(X.CANCELLED,c))})}),l.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await cc(t,s.Bs)}}function gM(i,e){const t=Re(i),s=t.Eu.get(e);if(s&&s.lu)return Le().add(s.key);{let a=Le();const l=t.Tu.get(e);if(!l)return a;for(const c of l){const d=t.Pu.get(c);a=a.unionWith(d.view.tu)}return a}}function Rb(i){const e=Re(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=Sb.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hM.bind(null,e),e.hu.J_=Jx.bind(null,e.eventManager),e.hu.pu=eM.bind(null,e.eventManager),e}function _M(i){const e=Re(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=fM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=dM.bind(null,e),e}class Of{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=cd(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Tx(this.persistence,new yx,e.initialUser,this.serializer)}Du(e){return new lb(v_.Vi,this.serializer)}bu(e){return new Cx}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Of.provider={build:()=>new Of};class yM extends Of{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Xe(this.persistence.referenceDelegate instanceof Nf,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new ix(s,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Tn.withCacheSize(this.cacheSizeBytes):Tn.DEFAULT;return new lb(s=>Nf.Vi(s,t),this.serializer)}}class Ig{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>tS(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=pM.bind(null,this.syncEngine),await Xx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Zx}()}createDatastore(e){const t=cd(e.databaseInfo.databaseId),s=function(l){return new Mx(l)}(e.databaseInfo);return function(l,c,d,p){return new Lx(l,c,d,p)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,a,l,c,d){return new zx(s,a,l,c,d)}(this.localStore,this.datastore,e.asyncQueue,t=>tS(this.syncEngine,t,0),function(){return WT.C()?new WT:new Nx}())}createSyncEngine(e,t){return function(a,l,c,d,p,g,y){const T=new sM(a,l,c,d,p,g);return y&&(T.fu=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const l=Re(a);ue(wa,"RemoteStore shutting down."),l.Ia.add(5),await uc(l),l.Ea.shutdown(),l.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ig.provider={build:()=>new Ig};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class k_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):ws("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr="FirestoreClient";class vM{constructor(e,t,s,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=a,this.user=ln.UNAUTHENTICATED,this.clientId=l_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,async c=>{ue(Rr,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(s,c=>(ue(Rr,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=I_(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Hp(i,e){i.asyncQueue.verifyOperationInProgress(),ue(Rr,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let s=t.initialUser;i.setCredentialChangeListener(async a=>{s.isEqual(a)||(await ub(e.localStore,a),s=a)}),e.persistence.setDatabaseDeletedListener(()=>{Er("Terminating Firestore due to IndexedDb database deletion"),i.terminate().then(()=>{ue("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(a=>{Er("Terminating Firestore due to IndexedDb database deletion failed",a)})}),i._offlineComponents=e}async function iS(i,e){i.asyncQueue.verifyOperationInProgress();const t=await EM(i);ue(Rr,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(s=>$T(e.remoteStore,s)),i.setAppCheckTokenChangeListener((s,a)=>$T(e.remoteStore,a)),i._onlineComponents=e}async function EM(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){ue(Rr,"Using user provided OfflineComponentProvider");try{await Hp(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===X.FAILED_PRECONDITION||a.code===X.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;Er("Error using user provided cache. Falling back to memory cache: "+t),await Hp(i,new Of)}}else ue(Rr,"Using default OfflineComponentProvider"),await Hp(i,new yM(void 0));return i._offlineComponents}async function Ib(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(ue(Rr,"Using user provided OnlineComponentProvider"),await iS(i,i._uninitializedComponentsProvider._online)):(ue(Rr,"Using default OnlineComponentProvider"),await iS(i,new Ig))),i._onlineComponents}function TM(i){return Ib(i).then(e=>e.syncEngine)}async function xf(i){const e=await Ib(i),t=e.eventManager;return t.onListen=rM.bind(null,e.syncEngine),t.onUnlisten=lM.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=aM.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=uM.bind(null,e.syncEngine),t}function SM(i,e,t={}){const s=new vs;return i.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,g){const y=new k_({next:w=>{y.Ou(),c.enqueueAndForget(()=>N_(l,T));const P=w.docs.has(d);!P&&w.fromCache?g.reject(new le(X.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&w.fromCache&&p&&p.source==="server"?g.reject(new le(X.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(w)},error:w=>g.reject(w)}),T=new O_(sd(d.path),y,{includeMetadataChanges:!0,ka:!0});return C_(l,T)}(await xf(i),i.asyncQueue,e,t,s)),s.promise}function AM(i,e,t={}){const s=new vs;return i.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,g){const y=new k_({next:w=>{y.Ou(),c.enqueueAndForget(()=>N_(l,T)),w.fromCache&&p.source==="server"?g.reject(new le(X.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(w)},error:w=>g.reject(w)}),T=new O_(d,y,{includeMetadataChanges:!0,ka:!0});return C_(l,T)}(await xf(i),i.asyncQueue,e,t,s)),s.promise}/**
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
 */function Cb(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Nb="firestore.googleapis.com",rS=!0;class aS{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new le(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Nb,this.ssl=rS}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:rS;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ob;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<tx)throw new le(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}j2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Cb((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new le(X.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new le(X.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new le(X.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,a){return s.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class dd{constructor(e,t,s,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new aS({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new le(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new le(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new aS(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new O2;switch(s.type){case"firstParty":return new P2(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new le(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=sS.get(t);s&&(ue("ComponentProvider","Removing Datastore"),sS.delete(t),s.terminate())}(this),Promise.resolve()}}function wM(i,e,t,s={}){var a;i=Jn(i,dd);const l=Is(e),c=i._getSettings(),d=Object.assign(Object.assign({},c),{emulatorOptions:i._getEmulatorOptions()}),p=`${e}:${t}`;l&&(Hf(`https://${p}`),Gf("Firestore",!0)),c.host!==Nb&&c.host!==p&&Er("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g=Object.assign(Object.assign({},c),{host:p,ssl:l,emulatorOptions:s});if(!_r(g,d)&&(i._setSettings(g),s.mockUserToken)){let y,T;if(typeof s.mockUserToken=="string")y=s.mockUserToken,T=ln.MOCK_USER;else{y=HS(s.mockUserToken,(a=i._app)===null||a===void 0?void 0:a.options.projectId);const w=s.mockUserToken.sub||s.mockUserToken.user_id;if(!w)throw new le(X.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new ln(w)}i._authCredentials=new x2(new _w(y,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ma(this.firestore,e,this._query)}}class Tt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tt(this.firestore,e,this._key)}toJSON(){return{type:Tt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(rc(t,Tt._jsonSchema))return new Tt(e,s||null,new ge(lt.fromString(t.referencePath)))}}Tt._jsonSchemaVersion="firestore/documentReference/1.0",Tt._jsonSchema={type:xt("string",Tt._jsonSchemaVersion),referencePath:xt("string")};class gr extends Ma{constructor(e,t,s){super(e,t,sd(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tt(this.firestore,null,new ge(e))}withConverter(e){return new gr(this.firestore,e,this._path)}}function bM(i,e,...t){if(i=gt(i),vw("collection","path",e),i instanceof dd){const s=lt.fromString(e,...t);return vT(s),new gr(i,null,s)}{if(!(i instanceof Tt||i instanceof gr))throw new le(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(lt.fromString(e,...t));return vT(s),new gr(i.firestore,null,s)}}function ar(i,e,...t){if(i=gt(i),arguments.length===1&&(e=l_.newId()),vw("doc","path",e),i instanceof dd){const s=lt.fromString(e,...t);return yT(s),new Tt(i,null,new ge(s))}{if(!(i instanceof Tt||i instanceof gr))throw new le(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=i._path.child(lt.fromString(e,...t));return yT(s),new Tt(i.firestore,i instanceof gr?i.converter:null,new ge(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oS="AsyncQueue";class lS{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new hb(this,"async_queue_retry"),this.oc=()=>{const s=qp();s&&ue(oS,"Visibility state changed to "+s.visibilityState),this.F_.y_()},this._c=e;const t=qp();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=qp();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new vs;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!rl(e))throw e;ue(oS,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(s=>{throw this.tc=s,this.nc=!1,ws("INTERNAL UNHANDLED ERROR: ",uS(s)),s}).then(s=>(this.nc=!1,s))));return this._c=t,t}enqueueAfterDelay(e,t,s){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const a=R_.createAndSchedule(this,e,t,s,l=>this.lc(l));return this.ec.push(a),a}ac(){this.tc&&Se(47125,{hc:uS(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function uS(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
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
 */function cS(i){return function(t,s){if(typeof t!="object"||t===null)return!1;const a=t;for(const l of s)if(l in a&&typeof a[l]=="function")return!0;return!1}(i,["next","error","complete"])}class ba extends dd{constructor(e,t,s,a){super(e,t,s,a),this.type="firestore",this._queue=new lS,this._persistenceKey=a?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new lS(e),this._firestoreClient=void 0,await e}}}function RM(i,e){const t=typeof i=="object"?i:Qf(),s=typeof i=="string"?i:Sf,a=Ju(t,"firestore").getImmediate({identifier:s});if(!a._initialized){const l=Vg("firestore");l&&wM(a,...l)}return a}function md(i){if(i._terminated)throw new le(X.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||IM(i),i._firestoreClient}function IM(i){var e,t,s;const a=i._freezeSettings(),l=function(d,p,g,y){return new $2(d,p,g,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,Cb(y.experimentalLongPollingOptions),y.useFetchStreams,y.isUsingEmulator)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,a);i._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=a.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(i._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),i._firestoreClient=new vM(i._authCredentials,i._appCheckCredentials,i._queue,l,i._componentsProvider&&function(d){const p=d?._online.build();return{_offline:d?._offline.build(p),_online:p}}(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xn(nn.fromBase64String(e))}catch(t){throw new le(X.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Xn(nn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Xn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(rc(e,Xn._jsonSchema))return Xn.fromBase64String(e.bytes)}}Xn._jsonSchemaVersion="firestore/bytes/1.0",Xn._jsonSchema={type:xt("string",Xn._jsonSchemaVersion),bytes:xt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new le(X.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Vi{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new le(X.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new le(X.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Oe(this._lat,e._lat)||Oe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Vi._jsonSchemaVersion}}static fromJSON(e){if(rc(e,Vi._jsonSchema))return new Vi(e.latitude,e.longitude)}}Vi._jsonSchemaVersion="firestore/geoPoint/1.0",Vi._jsonSchema={type:xt("string",Vi._jsonSchemaVersion),latitude:xt("number"),longitude:xt("number")};/**
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
 */class Li{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,a){if(s.length!==a.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==a[l])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Li._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(rc(e,Li._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Li(e.vectorValues);throw new le(X.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Li._jsonSchemaVersion="firestore/vectorValue/1.0",Li._jsonSchema={type:xt("string",Li._jsonSchemaVersion),vectorValues:xt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CM=/^__.*__$/;class NM{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Cr(e,this.data,this.fieldMask,t,this.fieldTransforms):new oc(e,this.data,t,this.fieldTransforms)}}class Db{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Cr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Ob(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Se(40011,{Ec:i})}}class V_{constructor(e,t,s,a,l,c){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=a,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new V_(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.Rc({path:s,mc:!1});return a.fc(e),a}gc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.Rc({path:s,mc:!1});return a.Ac(),a}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Mf(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Ob(this.Ec)&&CM.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class DM{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||cd(e)}Dc(e,t,s,a=!1){return new V_({Ec:e,methodName:t,bc:s,path:tn.emptyPath(),mc:!1,Sc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function L_(i){const e=i._freezeSettings(),t=cd(i._databaseId);return new DM(i._databaseId,!!e.ignoreUndefinedProperties,t)}function OM(i,e,t,s,a,l={}){const c=i.Dc(l.merge||l.mergeFields?2:0,e,t,a);U_("Data must be an object, but it was:",c,s);const d=xb(s,c);let p,g;if(l.merge)p=new Pn(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const y=[];for(const T of l.mergeFields){const w=Cg(e,T,t);if(!c.contains(w))throw new le(X.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);kb(y,w)||y.push(w)}p=new Pn(y),g=c.fieldTransforms.filter(T=>p.covers(T.field))}else p=null,g=c.fieldTransforms;return new NM(new An(d),p,g)}class gd extends P_{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof gd}}function xM(i,e,t,s){const a=i.Dc(1,e,t);U_("Data must be an object, but it was:",a,s);const l=[],c=An.empty();Ir(s,(p,g)=>{const y=z_(e,p,t);g=gt(g);const T=a.gc(y);if(g instanceof gd)l.push(y);else{const w=hc(g,T);w!=null&&(l.push(y),c.set(y,w))}});const d=new Pn(l);return new Db(c,d,a.fieldTransforms)}function MM(i,e,t,s,a,l){const c=i.Dc(1,e,t),d=[Cg(e,s,t)],p=[a];if(l.length%2!=0)throw new le(X.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<l.length;w+=2)d.push(Cg(e,l[w])),p.push(l[w+1]);const g=[],y=An.empty();for(let w=d.length-1;w>=0;--w)if(!kb(g,d[w])){const P=d[w];let B=p[w];B=gt(B);const J=c.gc(P);if(B instanceof gd)g.push(P);else{const $=hc(B,J);$!=null&&(g.push(P),y.set(P,$))}}const T=new Pn(g);return new Db(y,T,c.fieldTransforms)}function kM(i,e,t,s=!1){return hc(t,i.Dc(s?4:3,e))}function hc(i,e){if(Mb(i=gt(i)))return U_("Unsupported field value:",e,i),xb(i,e);if(i instanceof P_)return function(s,a){if(!Ob(a.Ec))throw a.wc(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.wc(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(a);l&&a.fieldTransforms.push(l)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(s,a){const l=[];let c=0;for(const d of s){let p=hc(d,a.yc(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}}(i,e)}return function(s,a){if((s=gt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return EO(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=ht.fromDate(s);return{timestampValue:Cf(a.serializer,l)}}if(s instanceof ht){const l=new ht(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Cf(a.serializer,l)}}if(s instanceof Vi)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Xn)return{bytesValue:eb(a.serializer,s._byteString)};if(s instanceof Tt){const l=a.databaseId,c=s.firestore._databaseId;if(!c.isEqual(l))throw a.wc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:__(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof Li)return function(c,d){return{mapValue:{fields:{[Cw]:{stringValue:Nw},[Af]:{arrayValue:{values:c.toArray().map(g=>{if(typeof g!="number")throw d.wc("VectorValues must only contain numeric values.");return m_(d.serializer,g)})}}}}}}(s,a);throw a.wc(`Unsupported field value: ${ed(s)}`)}(i,e)}function xb(i,e){const t={};return Sw(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ir(i,(s,a)=>{const l=hc(a,e.Vc(s));l!=null&&(t[s]=l)}),{mapValue:{fields:t}}}function Mb(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof ht||i instanceof Vi||i instanceof Xn||i instanceof Tt||i instanceof P_||i instanceof Li)}function U_(i,e,t){if(!Mb(t)||!Ew(t)){const s=ed(t);throw s==="an object"?e.wc(i+" a custom object"):e.wc(i+" "+s)}}function Cg(i,e,t){if((e=gt(e))instanceof pd)return e._internalPath;if(typeof e=="string")return z_(i,e);throw Mf("Field path arguments must be of type string or ",i,!1,void 0,t)}const PM=new RegExp("[~\\*/\\[\\]]");function z_(i,e,t){if(e.search(PM)>=0)throw Mf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new pd(...e.split("."))._internalPath}catch{throw Mf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Mf(i,e,t,s,a){const l=s&&!s.isEmpty(),c=a!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${s}`),c&&(p+=` in document ${a}`),p+=")"),new le(X.INVALID_ARGUMENT,d+i+p)}function kb(i,e){return i.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(e,t,s,a,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new VM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(j_("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class VM extends Pb{data(){return super.data()}}function j_(i,e){return typeof e=="string"?z_(i,e):e instanceof pd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vb(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new le(X.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class B_{}class LM extends B_{}function hS(i,e,...t){let s=[];e instanceof B_&&s.push(e),s=s.concat(t),function(l){const c=l.filter(p=>p instanceof F_).length,d=l.filter(p=>p instanceof _d).length;if(c>1||c>0&&d>0)throw new le(X.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const a of s)i=a._apply(i);return i}class _d extends LM{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new _d(e,t,s)}_apply(e){const t=this._parse(e);return Lb(e._query,t),new Ma(e.firestore,e.converter,_g(e._query,t))}_parse(e){const t=L_(e.firestore);return function(l,c,d,p,g,y,T){let w;if(g.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new le(X.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){dS(T,y);const B=[];for(const J of T)B.push(fS(p,l,J));w={arrayValue:{values:B}}}else w=fS(p,l,T)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||dS(T,y),w=kM(d,c,T,y==="in"||y==="not-in");return Ot.create(g,y,w)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Qh(i,e,t){const s=e,a=j_("where",i);return _d._create(a,s,t)}class F_ extends B_{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new F_(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:hi.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(a,l){let c=a;const d=l.getFlattenedFilters();for(const p of d)Lb(c,p),c=_g(c,p)}(e._query,t),new Ma(e.firestore,e.converter,_g(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function fS(i,e,t){if(typeof(t=gt(t))=="string"){if(t==="")throw new le(X.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Lw(e)&&t.indexOf("/")!==-1)throw new le(X.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(lt.fromString(t));if(!ge.isDocumentKey(s))throw new le(X.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return IT(i,new ge(s))}if(t instanceof Tt)return IT(i,t._key);throw new le(X.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ed(t)}.`)}function dS(i,e){if(!Array.isArray(i)||i.length===0)throw new le(X.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Lb(i,e){const t=function(a,l){for(const c of a)for(const d of c.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null}(i.filters,function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new le(X.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new le(X.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class UM{convertValue(e,t="none"){switch(wr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return bt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ar(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Se(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Ir(e,(a,l)=>{s[a]=this.convertValue(l,t)}),s}convertVectorValue(e){var t,s,a;const l=(a=(s=(t=e.fields)===null||t===void 0?void 0:t[Af].arrayValue)===null||s===void 0?void 0:s.values)===null||a===void 0?void 0:a.map(c=>bt(c.doubleValue));return new Li(l)}convertGeoPoint(e){return new Vi(bt(e.latitude),bt(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=id(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Hu(e));default:return null}}convertTimestamp(e){const t=Sr(e);return new ht(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=lt.fromString(e);Xe(ab(s),9688,{name:e});const a=new Gu(s.get(1),s.get(3)),l=new ge(s.popFirst(5));return a.isEqual(t)||ws(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zM(i,e,t){let s;return s=i?i.toFirestore(e):e,s}class Cu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ya extends Pb{constructor(e,t,s,a,l,c){super(e,t,s,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new sf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(j_("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new le(X.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ya._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ya._jsonSchemaVersion="firestore/documentSnapshot/1.0",ya._jsonSchema={type:xt("string",ya._jsonSchemaVersion),bundleSource:xt("string","DocumentSnapshot"),bundleName:xt("string"),bundle:xt("string")};class sf extends ya{data(e={}){return super.data(e)}}class va{constructor(e,t,s,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new Cu(a.hasPendingWrites,a.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new sf(this._firestore,this._userDataWriter,s.key,s,new Cu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new le(X.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(a,l){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map(d=>{const p=new sf(a._firestore,a._userDataWriter,d.doc.key,d.doc,new Cu(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}})}{let c=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(d=>l||d.type!==3).map(d=>{const p=new sf(a._firestore,a._userDataWriter,d.doc.key,d.doc,new Cu(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,y=-1;return d.type!==0&&(g=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),y=c.indexOf(d.doc.key)),{type:jM(d.type),doc:p,oldIndex:g,newIndex:y}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new le(X.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=va._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=l_.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],a=[];return this.docs.forEach(l=>{l._document!==null&&(t.push(l._document),s.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),a.push(l.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function jM(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Se(61501,{type:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BM(i){i=Jn(i,Tt);const e=Jn(i.firestore,ba);return SM(md(e),i._key).then(t=>zb(e,i,t))}va._jsonSchemaVersion="firestore/querySnapshot/1.0",va._jsonSchema={type:xt("string",va._jsonSchemaVersion),bundleSource:xt("string","QuerySnapshot"),bundleName:xt("string"),bundle:xt("string")};class q_ extends UM{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,t)}}function mS(i){i=Jn(i,Ma);const e=Jn(i.firestore,ba),t=md(e),s=new q_(e);return Vb(i._query),AM(t,i._query).then(a=>new va(e,s,i,a))}function FM(i,e,t){i=Jn(i,Tt);const s=Jn(i.firestore,ba),a=zM(i.converter,e);return Ub(s,[OM(L_(s),"setDoc",i._key,a,i.converter!==null,t).toMutation(i._key,ki.none())])}function No(i,e,t,...s){i=Jn(i,Tt);const a=Jn(i.firestore,ba),l=L_(a);let c;return c=typeof(e=gt(e))=="string"||e instanceof pd?MM(l,"updateDoc",i._key,e,t,s):xM(l,"updateDoc",i._key,e),Ub(a,[c.toMutation(i._key,ki.exists(!0))])}function qM(i,...e){var t,s,a;i=gt(i);let l={includeMetadataChanges:!1,source:"default"},c=0;typeof e[c]!="object"||cS(e[c])||(l=e[c++]);const d={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(cS(e[c])){const T=e[c];e[c]=(t=T.next)===null||t===void 0?void 0:t.bind(T),e[c+1]=(s=T.error)===null||s===void 0?void 0:s.bind(T),e[c+2]=(a=T.complete)===null||a===void 0?void 0:a.bind(T)}let p,g,y;if(i instanceof Tt)g=Jn(i.firestore,ba),y=sd(i._key.path),p={next:T=>{e[c]&&e[c](zb(g,i,T))},error:e[c+1],complete:e[c+2]};else{const T=Jn(i,Ma);g=Jn(T.firestore,ba),y=T._query;const w=new q_(g);p={next:P=>{e[c]&&e[c](new va(g,w,T,P))},error:e[c+1],complete:e[c+2]},Vb(i._query)}return function(w,P,B,J){const $=new k_(J),_e=new O_(P,$,B);return w.asyncQueue.enqueueAndForget(async()=>C_(await xf(w),_e)),()=>{$.Ou(),w.asyncQueue.enqueueAndForget(async()=>N_(await xf(w),_e))}}(md(g),y,d,p)}function Ub(i,e){return function(s,a){const l=new vs;return s.asyncQueue.enqueueAndForget(async()=>cM(await TM(s),a,l)),l.promise}(md(i),e)}function zb(i,e,t){const s=t.docs.get(e._key),a=new q_(i);return new ya(i,a,e._key,s,new Cu(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(a){il=a})(Ca),yr(new Ts("firestore",(s,{instanceIdentifier:a,options:l})=>{const c=s.getProvider("app").getImmediate(),d=new ba(new M2(s.getProvider("auth-internal")),new V2(c,s.getProvider("app-check-internal")),function(g,y){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new le(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Gu(g.options.projectId,y)}(c,a),c);return l=Object.assign({useFetchStreams:t},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),Zn(dT,mT,e),Zn(dT,mT,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HM="type.googleapis.com/google.protobuf.Int64Value",GM="type.googleapis.com/google.protobuf.UInt64Value";function jb(i,e){const t={};for(const s in i)i.hasOwnProperty(s)&&(t[s]=e(i[s]));return t}function kf(i){if(i==null)return null;if(i instanceof Number&&(i=i.valueOf()),typeof i=="number"&&isFinite(i)||i===!0||i===!1||Object.prototype.toString.call(i)==="[object String]")return i;if(i instanceof Date)return i.toISOString();if(Array.isArray(i))return i.map(e=>kf(e));if(typeof i=="function"||typeof i=="object")return jb(i,e=>kf(e));throw new Error("Data cannot be encoded in JSON: "+i)}function $o(i){if(i==null)return i;if(i["@type"])switch(i["@type"]){case HM:case GM:{const e=Number(i.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+i);return e}default:throw new Error("Data cannot be decoded from JSON: "+i)}return Array.isArray(i)?i.map(e=>$o(e)):typeof i=="function"||typeof i=="object"?jb(i,e=>$o(e)):i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const pS={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class wn extends Bi{constructor(e,t,s){super(`${H_}/${e}`,t||""),this.details=s,Object.setPrototypeOf(this,wn.prototype)}}function KM(i){if(i>=200&&i<300)return"ok";switch(i){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Pf(i,e){let t=KM(i),s=t,a;try{const l=e&&e.error;if(l){const c=l.status;if(typeof c=="string"){if(!pS[c])return new wn("internal","internal");t=pS[c],s=c}const d=l.message;typeof d=="string"&&(s=d),a=l.details,a!==void 0&&(a=$o(a))}}catch{}return t==="ok"?null:new wn(t,s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YM{constructor(e,t,s,a){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,Sn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=t.getImmediate({optional:!0}),this.messaging=s.getImmediate({optional:!0}),this.auth||t.get().then(l=>this.auth=l,()=>{}),this.messaging||s.get().then(l=>this.messaging=l,()=>{}),this.appCheck||a?.get().then(l=>this.appCheck=l,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e?.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),s=await this.getMessagingToken(),a=await this.getAppCheckToken(e);return{authToken:t,messagingToken:s,appCheckToken:a}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng="us-central1",QM=/^data: (.*?)(?:\n|$)/;function WM(i){let e=null;return{promise:new Promise((t,s)=>{e=setTimeout(()=>{s(new wn("deadline-exceeded","deadline-exceeded"))},i)}),cancel:()=>{e&&clearTimeout(e)}}}class XM{constructor(e,t,s,a,l=Ng,c=(...d)=>fetch(...d)){this.app=e,this.fetchImpl=c,this.emulatorOrigin=null,this.contextProvider=new YM(e,t,s,a),this.cancelAllRequests=new Promise(d=>{this.deleteService=()=>Promise.resolve(d())});try{const d=new URL(l);this.customDomain=d.origin+(d.pathname==="/"?"":d.pathname),this.region=Ng}catch{this.customDomain=null,this.region=l}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function $M(i,e,t){const s=Is(e);i.emulatorOrigin=`http${s?"s":""}://${e}:${t}`,s&&(Hf(i.emulatorOrigin),Gf("Functions",!0))}function ZM(i,e,t){const s=a=>ek(i,e,a,{});return s.stream=(a,l)=>nk(i,e,a,l),s}async function JM(i,e,t,s){t["Content-Type"]="application/json";let a;try{a=await s(i,{method:"POST",body:JSON.stringify(e),headers:t})}catch{return{status:0,json:null}}let l=null;try{l=await a.json()}catch{}return{status:a.status,json:l}}async function Bb(i,e){const t={},s=await i.contextProvider.getContext(e.limitedUseAppCheckTokens);return s.authToken&&(t.Authorization="Bearer "+s.authToken),s.messagingToken&&(t["Firebase-Instance-ID-Token"]=s.messagingToken),s.appCheckToken!==null&&(t["X-Firebase-AppCheck"]=s.appCheckToken),t}function ek(i,e,t,s){const a=i._url(e);return tk(i,a,t,s)}async function tk(i,e,t,s){t=kf(t);const a={data:t},l=await Bb(i,s),c=s.timeout||7e4,d=WM(c),p=await Promise.race([JM(e,a,l,i.fetchImpl),d.promise,i.cancelAllRequests]);if(d.cancel(),!p)throw new wn("cancelled","Firebase Functions instance was deleted.");const g=Pf(p.status,p.json);if(g)throw g;if(!p.json)throw new wn("internal","Response is not valid JSON object.");let y=p.json.data;if(typeof y>"u"&&(y=p.json.result),typeof y>"u")throw new wn("internal","Response is missing data field.");return{data:$o(y)}}function nk(i,e,t,s){const a=i._url(e);return ik(i,a,t,s||{})}async function ik(i,e,t,s){var a;t=kf(t);const l={data:t},c=await Bb(i,s);c["Content-Type"]="application/json",c.Accept="text/event-stream";let d;try{d=await i.fetchImpl(e,{method:"POST",body:JSON.stringify(l),headers:c,signal:s?.signal})}catch(P){if(P instanceof Error&&P.name==="AbortError"){const J=new wn("cancelled","Request was cancelled.");return{data:Promise.reject(J),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(J)}}}}}}const B=Pf(0,null);return{data:Promise.reject(B),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(B)}}}}}}let p,g;const y=new Promise((P,B)=>{p=P,g=B});(a=s?.signal)===null||a===void 0||a.addEventListener("abort",()=>{const P=new wn("cancelled","Request was cancelled.");g(P)});const T=d.body.getReader(),w=sk(T,p,g,s?.signal);return{stream:{[Symbol.asyncIterator](){const P=w.getReader();return{async next(){const{value:B,done:J}=await P.read();return{value:B,done:J}},async return(){return await P.cancel(),{done:!0,value:void 0}}}}},data:y}}function sk(i,e,t,s){const a=(c,d)=>{const p=c.match(QM);if(!p)return;const g=p[1];try{const y=JSON.parse(g);if("result"in y){e($o(y.result));return}if("message"in y){d.enqueue($o(y.message));return}if("error"in y){const T=Pf(0,y);d.error(T),t(T);return}}catch(y){if(y instanceof wn){d.error(y),t(y);return}}},l=new TextDecoder;return new ReadableStream({start(c){let d="";return p();async function p(){if(s?.aborted){const g=new wn("cancelled","Request was cancelled");return c.error(g),t(g),Promise.resolve()}try{const{value:g,done:y}=await i.read();if(y){d.trim()&&a(d.trim(),c),c.close();return}if(s?.aborted){const w=new wn("cancelled","Request was cancelled");c.error(w),t(w),await i.cancel();return}d+=l.decode(g,{stream:!0});const T=d.split(`
`);d=T.pop()||"";for(const w of T)w.trim()&&a(w.trim(),c);return p()}catch(g){const y=g instanceof wn?g:Pf(0,null);c.error(y),t(y)}}},cancel(){return i.cancel()}})}const gS="@firebase/functions",_S="0.12.9";/**
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
 */const rk="auth-internal",ak="app-check-internal",ok="messaging-internal";function lk(i){const e=(t,{instanceIdentifier:s})=>{const a=t.getProvider("app").getImmediate(),l=t.getProvider(rk),c=t.getProvider(ok),d=t.getProvider(ak);return new XM(a,l,c,d,s)};yr(new Ts(H_,e,"PUBLIC").setMultipleInstances(!0)),Zn(gS,_S,i),Zn(gS,_S,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uk(i=Qf(),e=Ng){const s=Ju(gt(i),H_).getImmediate({identifier:e}),a=Vg("functions");return a&&Fb(s,...a),s}function Fb(i,e,t){$M(gt(i),e,t)}function yd(i,e,t){return ZM(gt(i),e)}lk();function G_(i,e){var t={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&e.indexOf(s)<0&&(t[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(i);a<s.length;a++)e.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(i,s[a])&&(t[s[a]]=i[s[a]]);return t}function qb(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ck=qb,Hb=new Zu("auth","Firebase",qb());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf=new Yf("@firebase/auth");function hk(i,...e){Vf.logLevel<=Ve.WARN&&Vf.warn(`Auth (${Ca}): ${i}`,...e)}function rf(i,...e){Vf.logLevel<=Ve.ERROR&&Vf.error(`Auth (${Ca}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(i,...e){throw K_(i,...e)}function Ui(i,...e){return K_(i,...e)}function Gb(i,e,t){const s=Object.assign(Object.assign({},ck()),{[e]:t});return new Zu("auth","Firebase",s).create(e,{appName:i.name})}function Es(i){return Gb(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function K_(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return Hb.create(i,...e)}function Te(i,e,...t){if(!i)throw K_(e,...t)}function gs(i){const e="INTERNAL ASSERTION FAILED: "+i;throw rf(e),new Error(e)}function Rs(i,e){i||gs(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class fc{constructor(e,t){this.shortDelay=e,this.longDelay=t,Rs(t>e,"Short delay should be less than long delay!"),this.isMobile=Ug()||GS()}get(){return dk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y_(i,e){Rs(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gs("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gs("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gs("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const gk=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],_k=new fc(3e4,6e4);function Nr(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function Dr(i,e,t,s,a={}){return Yb(i,a,async()=>{let l={},c={};s&&(e==="GET"?c=s:l={body:JSON.stringify(s)});const d=Jo(Object.assign({key:i.config.apiKey},c)).slice(1),p=await i._getAdditionalHeaders();p["Content-Type"]="application/json",i.languageCode&&(p["X-Firebase-Locale"]=i.languageCode);const g=Object.assign({method:e,headers:p},l);return gI()||(g.referrerPolicy="no-referrer"),i.emulatorConfig&&Is(i.emulatorConfig.host)&&(g.credentials="include"),Kb.fetch()(await Qb(i,i.config.apiHost,t,d),g)})}async function Yb(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},pk),e);try{const a=new vk(i),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Wh(i,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,g]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wh(i,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw Wh(i,"email-already-in-use",c);if(p==="USER_DISABLED")throw Wh(i,"user-disabled",c);const y=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw Gb(i,y,g);fi(i,y)}}catch(a){if(a instanceof Bi)throw a;fi(i,"network-request-failed",{message:String(a)})}}async function dc(i,e,t,s,a={}){const l=await Dr(i,e,t,s,a);return"mfaPendingCredential"in l&&fi(i,"multi-factor-auth-required",{_serverResponse:l}),l}async function Qb(i,e,t,s){const a=`${e}${t}?${s}`,l=i,c=l.config.emulator?Y_(i.config,a):`${i.config.apiScheme}://${a}`;return gk.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function yk(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class vk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Ui(this.auth,"network-request-failed")),_k.get())})}}function Wh(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const a=Ui(i,e,s);return a.customData._tokenResponse=t,a}function vS(i){return i!==void 0&&i.enterprise!==void 0}class Ek{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return yk(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Tk(i,e){return Dr(i,"GET","/v2/recaptchaConfig",Nr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sk(i,e){return Dr(i,"POST","/v1/accounts:delete",e)}async function Lf(i,e){return Dr(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ak(i,e=!1){const t=gt(i),s=await t.getIdToken(e),a=Q_(s);Te(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l?.sign_in_provider;return{claims:a,token:s,authTime:Uu(Gp(a.auth_time)),issuedAtTime:Uu(Gp(a.iat)),expirationTime:Uu(Gp(a.exp)),signInProvider:c||null,signInSecondFactor:l?.sign_in_second_factor||null}}function Gp(i){return Number(i)*1e3}function Q_(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return rf("JWT malformed, contained fewer than 3 sections"),null;try{const a=cf(t);return a?JSON.parse(a):(rf("Failed to decode base64 JWT payload"),null)}catch(a){return rf("Caught error parsing JWT payload as JSON",a?.toString()),null}}function ES(i){const e=Q_(i);return Te(e,"internal-error"),Te(typeof e.exp<"u","internal-error"),Te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wu(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Bi&&wk(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function wk({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function Uf(i){var e;const t=i.auth,s=await i.getIdToken(),a=await Wu(i,Lf(t,{idToken:s}));Te(a?.users.length,t,"internal-error");const l=a.users[0];i._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?Wb(l.providerUserInfo):[],d=Ik(i.providerData,c),p=i.isAnonymous,g=!(i.email&&l.passwordHash)&&!d?.length,y=p?g:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new Og(l.createdAt,l.lastLoginAt),isAnonymous:y};Object.assign(i,T)}async function Rk(i){const e=gt(i);await Uf(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ik(i,e){return[...i.filter(s=>!e.some(a=>a.providerId===s.providerId)),...e]}function Wb(i){return i.map(e=>{var{providerId:t}=e,s=G_(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ck(i,e){const t=await Yb(i,{},async()=>{const s=Jo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=i.config,c=await Qb(i,a,"/v1/token",`key=${l}`),d=await i._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:d,body:s};return i.emulatorConfig&&Is(i.emulatorConfig.host)&&(p.credentials="include"),Kb.fetch()(c,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Nk(i,e){return Dr(i,"POST","/v2/accounts:revokeToken",Nr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Te(e.idToken,"internal-error"),Te(typeof e.idToken<"u","internal-error"),Te(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ES(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Te(e.length!==0,"internal-error");const t=ES(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:a,expiresIn:l}=await Ck(e,t);this.updateTokensAndExpiration(s,a,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:a,expirationTime:l}=t,c=new jo;return s&&(Te(typeof s=="string","internal-error",{appName:e}),c.refreshToken=s),a&&(Te(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(Te(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new jo,this.toJSON())}_performRefresh(){return gs("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(i,e){Te(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class ui{constructor(e){var{uid:t,auth:s,stsTokenManager:a}=e,l=G_(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new bk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Og(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Wu(this,this.stsTokenManager.getToken(this.auth,e));return Te(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ak(this,e)}reload(){return Rk(this)}_assign(e){this!==e&&(Te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ui(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Uf(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Sn(this.auth.app))return Promise.reject(Es(this.auth));const e=await this.getIdToken();return await Wu(this,Sk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,a,l,c,d,p,g,y;const T=(s=t.displayName)!==null&&s!==void 0?s:void 0,w=(a=t.email)!==null&&a!==void 0?a:void 0,P=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,B=(c=t.photoURL)!==null&&c!==void 0?c:void 0,J=(d=t.tenantId)!==null&&d!==void 0?d:void 0,$=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,_e=(g=t.createdAt)!==null&&g!==void 0?g:void 0,de=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:he,emailVerified:Ce,isAnonymous:me,providerData:Ie,stsTokenManager:M}=t;Te(he&&M,e,"internal-error");const R=jo.fromJSON(this.name,M);Te(typeof he=="string",e,"internal-error"),sr(T,e.name),sr(w,e.name),Te(typeof Ce=="boolean",e,"internal-error"),Te(typeof me=="boolean",e,"internal-error"),sr(P,e.name),sr(B,e.name),sr(J,e.name),sr($,e.name),sr(_e,e.name),sr(de,e.name);const C=new ui({uid:he,auth:e,email:w,emailVerified:Ce,displayName:T,isAnonymous:me,photoURL:B,phoneNumber:P,tenantId:J,stsTokenManager:R,createdAt:_e,lastLoginAt:de});return Ie&&Array.isArray(Ie)&&(C.providerData=Ie.map(x=>Object.assign({},x))),$&&(C._redirectEventId=$),C}static async _fromIdTokenResponse(e,t,s=!1){const a=new jo;a.updateFromServerResponse(t);const l=new ui({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:s});return await Uf(l),l}static async _fromGetAccountInfoResponse(e,t,s){const a=t.users[0];Te(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?Wb(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!l?.length,d=new jo;d.updateFromIdToken(s);const p=new ui({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new Og(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!l?.length};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS=new Map;function _s(i){Rs(i instanceof Function,"Expected a class definition");let e=TS.get(i);return e?(Rs(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,TS.set(i,e),e)}/**
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
 */class Xb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Xb.type="NONE";const SS=Xb;/**
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
 */function af(i,e,t){return`firebase:${i}:${e}:${t}`}class Bo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:a,name:l}=this.auth;this.fullUserKey=af(this.userKey,a.apiKey,l),this.fullPersistenceKey=af("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Lf(this.auth,{idToken:e}).catch(()=>{});return t?ui._fromGetAccountInfoResponse(this.auth,t,e):null}return ui._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Bo(_s(SS),e,s);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||_s(SS);const c=af(s,e.config.apiKey,e.name);let d=null;for(const g of t)try{const y=await g._get(c);if(y){let T;if(typeof y=="string"){const w=await Lf(e,{idToken:y}).catch(()=>{});if(!w)break;T=await ui._fromGetAccountInfoResponse(e,w,y)}else T=ui._fromJSON(e,y);g!==l&&(d=T),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Bo(l,e,s):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new Bo(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AS(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(eR(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($b(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(nR(e))return"Blackberry";if(iR(e))return"Webos";if(Zb(e))return"Safari";if((e.includes("chrome/")||Jb(e))&&!e.includes("edge/"))return"Chrome";if(tR(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if(s?.length===2)return s[1]}return"Other"}function $b(i=dn()){return/firefox\//i.test(i)}function Zb(i=dn()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jb(i=dn()){return/crios\//i.test(i)}function eR(i=dn()){return/iemobile/i.test(i)}function tR(i=dn()){return/android/i.test(i)}function nR(i=dn()){return/blackberry/i.test(i)}function iR(i=dn()){return/webos/i.test(i)}function W_(i=dn()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function Dk(i=dn()){var e;return W_(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ok(){return yI()&&document.documentMode===10}function sR(i=dn()){return W_(i)||tR(i)||iR(i)||nR(i)||/windows phone/i.test(i)||eR(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rR(i,e=[]){let t;switch(i){case"Browser":t=AS(dn());break;case"Worker":t=`${AS(dn())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ca}/${s}`}/**
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
 */async function Mk(i,e={}){return Dr(i,"GET","/v2/passwordPolicy",Nr(i,e))}/**
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
 */class Vk{constructor(e,t,s,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wS(this),this.idTokenSubscription=new wS(this),this.beforeStateQueue=new xk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hb,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_s(t)),this._initializationPromise=this.queue(async()=>{var s,a,l;if(!this._deleted&&(this.persistenceManager=await Bo.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Lf(this,{idToken:e}),s=await ui._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Sn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let a=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=a?._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===d)&&p?.user&&(a=p.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(c){a=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return Te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Uf(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Sn(this.app))return Promise.reject(Es(this));const t=e?gt(e):null;return t&&Te(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Sn(this.app)?Promise.reject(Es(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Sn(this.app)?Promise.reject(Es(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_s(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Mk(this),t=new Pk(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Zu("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await Nk(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_s(e)||this._popupRedirectResolver;Te(t,this,"argument-error"),this.redirectPersistenceManager=await Bo.create(this,[_s(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Te(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,s,a);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rR(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(Sn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&hk(`Error while retrieving App Check token: ${t.error}`),t?.token}}function ka(i){return gt(i)}class wS{constructor(e){this.auth=e,this.observer=null,this.addObserver=NI(t=>this.observer=t)}get next(){return Te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Lk(i){vd=i}function aR(i){return vd.loadJS(i)}function Uk(){return vd.recaptchaEnterpriseScript}function zk(){return vd.gapiScript}function jk(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class Bk{constructor(){this.enterprise=new Fk}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Fk{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const qk="recaptcha-enterprise",oR="NO_RECAPTCHA";class Hk{constructor(e){this.type=qk,this.auth=ka(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,d)=>{Tk(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const g=new Ek(p);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,c(g.siteKey)}}).catch(p=>{d(p)})})}function a(l,c,d){const p=window.grecaptcha;vS(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(g=>{c(g)}).catch(()=>{c(oR)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Bk().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{s(this.auth).then(d=>{if(!t&&vS(window.grecaptcha))a(d,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=Uk();p.length!==0&&(p+=d),aR(p).then(()=>{a(d,l,c)}).catch(g=>{c(g)})}}).catch(d=>{c(d)})})}}async function bS(i,e,t,s=!1,a=!1){const l=new Hk(i);let c;if(a)c=oR;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,g=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:g,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return s?Object.assign(d,{captchaResp:c}):Object.assign(d,{captchaResponse:c}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function xg(i,e,t,s,a){var l;if(!((l=i._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await bS(i,e,t,t==="getOobCode");return s(i,c)}else return s(i,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await bS(i,e,t,t==="getOobCode");return s(i,d)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gk(i,e){const t=Ju(i,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(_r(l,e??{}))return a;fi(a,"already-initialized")}return t.initialize({options:e})}function Kk(i,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(_s);e?.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e?.popupRedirectResolver)}function Yk(i,e,t){const s=ka(i);Te(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const a=!1,l=lR(e),{host:c,port:d}=Qk(e),p=d===null?"":`:${d}`,g={url:`${l}//${c}${p}/`},y=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!s._canInitEmulator){Te(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),Te(_r(g,s.config.emulator)&&_r(y,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=y,s.settings.appVerificationDisabledForTesting=!0,Is(c)?(Hf(`${l}//${c}${p}`),Gf("Auth",!0)):Wk()}function lR(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function Qk(i){const e=lR(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(s);if(a){const l=a[1];return{host:l,port:RS(s.substr(l.length+1))}}else{const[l,c]=s.split(":");return{host:l,port:RS(c)}}}function RS(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function Wk(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return gs("not implemented")}_getIdTokenResponse(e){return gs("not implemented")}_linkToIdToken(e,t){return gs("not implemented")}_getReauthenticationResolver(e){return gs("not implemented")}}async function Xk(i,e){return Dr(i,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $k(i,e){return dc(i,"POST","/v1/accounts:signInWithPassword",Nr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zk(i,e){return dc(i,"POST","/v1/accounts:signInWithEmailLink",Nr(i,e))}async function Jk(i,e){return dc(i,"POST","/v1/accounts:signInWithEmailLink",Nr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu extends X_{constructor(e,t,s,a=null){super("password",s),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new Xu(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Xu(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xg(e,t,"signInWithPassword",$k);case"emailLink":return Zk(e,{email:this._email,oobCode:this._password});default:fi(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return xg(e,s,"signUpPassword",Xk);case"emailLink":return Jk(e,{idToken:t,email:this._email,oobCode:this._password});default:fi(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fo(i,e){return dc(i,"POST","/v1/accounts:signInWithIdp",Nr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eP="http://localhost";class Ra extends X_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ra(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):fi("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:a}=t,l=G_(t,["providerId","signInMethod"]);if(!s||!a)return null;const c=new Ra(s,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Fo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Fo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Fo(e,t)}buildRequest(){const e={requestUri:eP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Jo(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tP(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function nP(i){const e=Su(Au(i)).link,t=e?Su(Au(e)).deep_link_id:null,s=Su(Au(i)).deep_link_id;return(s?Su(Au(s)).link:null)||s||t||e||i}class $_{constructor(e){var t,s,a,l,c,d;const p=Su(Au(e)),g=(t=p.apiKey)!==null&&t!==void 0?t:null,y=(s=p.oobCode)!==null&&s!==void 0?s:null,T=tP((a=p.mode)!==null&&a!==void 0?a:null);Te(g&&y&&T,"argument-error"),this.apiKey=g,this.operation=T,this.code=y,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=p.lang)!==null&&c!==void 0?c:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=nP(e);try{return new $_(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(){this.providerId=ol.PROVIDER_ID}static credential(e,t){return Xu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=$_.parseLink(t);return Te(s,"argument-error"),Xu._fromEmailAndCode(e,s.code,s.tenantId)}}ol.PROVIDER_ID="password";ol.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ol.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class mc extends uR{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends mc{constructor(){super("facebook.com")}static credential(e){return Ra._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.FACEBOOK_SIGN_IN_METHOD="facebook.com";or.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends mc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ra._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return lr.credential(t,s)}catch{return null}}}lr.GOOGLE_SIGN_IN_METHOD="google.com";lr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends mc{constructor(){super("github.com")}static credential(e){return Ra._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ur.credential(e.oauthAccessToken)}catch{return null}}}ur.GITHUB_SIGN_IN_METHOD="github.com";ur.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends mc{constructor(){super("twitter.com")}static credential(e,t){return Ra._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return cr.credential(t,s)}catch{return null}}}cr.TWITTER_SIGN_IN_METHOD="twitter.com";cr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iP(i,e){return dc(i,"POST","/v1/accounts:signUp",Nr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,a=!1){const l=await ui._fromIdTokenResponse(e,s,a),c=IS(s);return new Ia({user:l,providerId:c,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const a=IS(s);return new Ia({user:e,providerId:a,_tokenResponse:s,operationType:t})}}function IS(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf extends Bi{constructor(e,t,s,a){var l;super(t.code,t.message),this.operationType=s,this.user=a,Object.setPrototypeOf(this,zf.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,a){return new zf(e,t,s,a)}}function cR(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?zf._fromErrorAndOperation(i,l,e,s):l})}async function sP(i,e,t=!1){const s=await Wu(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return Ia._forOperation(i,"link",s)}/**
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
 */async function rP(i,e,t=!1){const{auth:s}=i;if(Sn(s.app))return Promise.reject(Es(s));const a="reauthenticate";try{const l=await Wu(i,cR(s,a,e,i),t);Te(l.idToken,s,"internal-error");const c=Q_(l.idToken);Te(c,s,"internal-error");const{sub:d}=c;return Te(i.uid===d,s,"user-mismatch"),Ia._forOperation(i,a,l)}catch(l){throw l?.code==="auth/user-not-found"&&fi(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hR(i,e,t=!1){if(Sn(i.app))return Promise.reject(Es(i));const s="signIn",a=await cR(i,s,e),l=await Ia._fromIdTokenResponse(i,s,a);return t||await i._updateCurrentUser(l.user),l}async function aP(i,e){return hR(ka(i),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fR(i){const e=ka(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function oP(i,e,t){if(Sn(i.app))return Promise.reject(Es(i));const s=ka(i),c=await xg(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",iP).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&fR(i),p}),d=await Ia._fromIdTokenResponse(s,"signIn",c);return await s._updateCurrentUser(d.user),d}function lP(i,e,t){return Sn(i.app)?Promise.reject(Es(i)):aP(gt(i),ol.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&fR(i),s})}function uP(i,e,t,s){return gt(i).onIdTokenChanged(e,t,s)}function cP(i,e,t){return gt(i).beforeAuthStateChanged(e,t)}function hP(i,e,t,s){return gt(i).onAuthStateChanged(e,t,s)}const jf="__sak";/**
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
 */class dR{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(jf,"1"),this.storage.removeItem(jf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fP=1e3,dP=10;class mR extends dR{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=sR(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),a=this.localCache[t];s!==a&&e(t,a,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const s=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(s);!t&&this.localCache[s]===c||this.notifyListeners(s,c)},l=this.storage.getItem(s);Ok()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,dP):a()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},fP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}mR.type="LOCAL";const mP=mR;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR extends dR{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}pR.type="SESSION";const gR=pR;/**
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
 */class Ed{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const s=new Ed(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!c?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:a});const d=Array.from(c).map(async g=>g(t.origin,l)),p=await pP(d);t.ports[0].postMessage({status:"done",eventId:s,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ed.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class gP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const g=Z_("",20);a.port1.start();const y=setTimeout(()=>{p(new Error("unsupported_event"))},s);c={messageChannel:a,onMessage(T){const w=T;if(w.data.eventId===g)switch(w.data.status){case"ack":clearTimeout(y),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(w.data.response);break;default:clearTimeout(y),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function _R(){return typeof zi().WorkerGlobalScope<"u"&&typeof zi().importScripts=="function"}async function yP(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vP(){var i;return((i=navigator?.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function EP(){return _R()?self:null}/**
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
 */const yR="firebaseLocalStorageDb",TP=1,Bf="firebaseLocalStorage",vR="fbase_key";class pc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Td(i,e){return i.transaction([Bf],e?"readwrite":"readonly").objectStore(Bf)}function SP(){const i=indexedDB.deleteDatabase(yR);return new pc(i).toPromise()}function Mg(){const i=indexedDB.open(yR,TP);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(Bf,{keyPath:vR})}catch(a){t(a)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(Bf)?e(s):(s.close(),await SP(),e(await Mg()))})})}async function CS(i,e,t){const s=Td(i,!0).put({[vR]:e,value:t});return new pc(s).toPromise()}async function AP(i,e){const t=Td(i,!1).get(e),s=await new pc(t).toPromise();return s===void 0?null:s.value}function NS(i,e){const t=Td(i,!0).delete(e);return new pc(t).toPromise()}const wP=800,bP=3;class ER{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mg(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>bP)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _R()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ed._getInstance(EP()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await yP(),!this.activeServiceWorker)return;this.sender=new gP(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mg();return await CS(e,jf,"1"),await NS(e,jf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>CS(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>AP(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>NS(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=Td(a,!1).getAll();return new pc(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)s.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!s.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const a of Array.from(s))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ER.type="LOCAL";const RP=ER;new fc(3e4,6e4);/**
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
 */function IP(i,e){return e?_s(e):(Te(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class J_ extends X_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Fo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Fo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function CP(i){return hR(i.auth,new J_(i),i.bypassAuthState)}function NP(i){const{auth:e,user:t}=i;return Te(t,e,"internal-error"),rP(t,new J_(i),i.bypassAuthState)}async function DP(i){const{auth:e,user:t}=i;return Te(t,e,"internal-error"),sP(t,new J_(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(e,t,s,a,l=!1){this.auth=e,this.resolver=s,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:a,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return CP;case"linkViaPopup":case"linkViaRedirect":return DP;case"reauthViaPopup":case"reauthViaRedirect":return NP;default:fi(this.auth,"internal-error")}}resolve(e){Rs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OP=new fc(2e3,1e4);class Vo extends TR{constructor(e,t,s,a,l){super(e,t,a,l),this.provider=s,this.authWindow=null,this.pollId=null,Vo.currentPopupAction&&Vo.currentPopupAction.cancel(),Vo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Te(e,this.auth,"internal-error"),e}async onExecution(){Rs(this.filter.length===1,"Popup operations only handle one event");const e=Z_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ui(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ui(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ui(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,OP.get())};e()}}Vo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xP="pendingRedirect",of=new Map;class MP extends TR{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=of.get(this.auth._key());if(!e){try{const s=await kP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}of.set(this.auth._key(),e)}return this.bypassAuthState||of.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kP(i,e){const t=LP(e),s=VP(i);if(!await s._isAvailable())return!1;const a=await s._get(t)==="true";return await s._remove(t),a}function PP(i,e){of.set(i._key(),e)}function VP(i){return _s(i._redirectPersistence)}function LP(i){return af(xP,i.config.apiKey,i.name)}async function UP(i,e,t=!1){if(Sn(i.app))return Promise.reject(Es(i));const s=ka(i),a=IP(s,e),c=await new MP(s,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await s._persistUserIfCurrent(c.user),await s._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP=10*60*1e3;class jP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!BP(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!SR(e)){const a=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Ui(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=zP&&this.cachedEventUids.clear(),this.cachedEventUids.has(DS(e))}saveEventToCache(e){this.cachedEventUids.add(DS(e)),this.lastProcessedEventTime=Date.now()}}function DS(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function SR({type:i,error:e}){return i==="unknown"&&e?.code==="auth/no-auth-event"}function BP(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return SR(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FP(i,e={}){return Dr(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const YP=new fc(3e4,6e4);function OS(){const i=zi().___jsl;if(i?.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function QP(i){return new Promise((e,t)=>{var s,a,l;function c(){OS(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{OS(),t(Ui(i,"network-request-failed"))},timeout:YP.get()})}if(!((a=(s=zi().gapi)===null||s===void 0?void 0:s.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((l=zi().gapi)===null||l===void 0)&&l.load)c();else{const d=jk("iframefcb");return zi()[d]=()=>{gapi.load?c():t(Ui(i,"network-request-failed"))},aR(`${zk()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw lf=null,e})}let lf=null;function WP(i){return lf=lf||QP(i),lf}/**
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
 */const XP=new fc(5e3,15e3),$P="__/auth/iframe",ZP="emulator/auth/iframe",JP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},eV=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tV(i){const e=i.config;Te(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Y_(e,ZP):`https://${i.config.authDomain}/${$P}`,s={apiKey:e.apiKey,appName:i.name,v:Ca},a=eV.get(i.config.apiHost);a&&(s.eid=a);const l=i._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${Jo(s).slice(1)}`}async function nV(i){const e=await WP(i),t=zi().gapi;return Te(t,i,"internal-error"),e.open({where:document.body,url:tV(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:JP,dontclear:!0},s=>new Promise(async(a,l)=>{await s.restyle({setHideOnLeave:!1});const c=Ui(i,"network-request-failed"),d=zi().setTimeout(()=>{l(c)},XP.get());function p(){zi().clearTimeout(d),a(s)}s.ping(p).then(p,()=>{l(c)})}))}/**
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
 */const iV={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sV=500,rV=600,aV="_blank",oV="http://localhost";class xS{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lV(i,e,t,s=sV,a=rV){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-s)/2,0).toString();let d="";const p=Object.assign(Object.assign({},iV),{width:s.toString(),height:a.toString(),top:l,left:c}),g=dn().toLowerCase();t&&(d=Jb(g)?aV:t),$b(g)&&(e=e||oV,p.scrollbars="yes");const y=Object.entries(p).reduce((w,[P,B])=>`${w}${P}=${B},`,"");if(Dk(g)&&d!=="_self")return uV(e||"",d),new xS(null);const T=window.open(e||"",d,y);Te(T,i,"popup-blocked");try{T.focus()}catch{}return new xS(T)}function uV(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const cV="__/auth/handler",hV="emulator/auth/handler",fV=encodeURIComponent("fac");async function MS(i,e,t,s,a,l){Te(i.config.authDomain,i,"auth-domain-config-required"),Te(i.config.apiKey,i,"invalid-api-key");const c={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:Ca,eventId:a};if(e instanceof uR){e.setDefaultLanguage(i.languageCode),c.providerId=e.providerId||"",Yp(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,T]of Object.entries({}))c[y]=T}if(e instanceof mc){const y=e.getScopes().filter(T=>T!=="");y.length>0&&(c.scopes=y.join(","))}i.tenantId&&(c.tid=i.tenantId);const d=c;for(const y of Object.keys(d))d[y]===void 0&&delete d[y];const p=await i._getAppCheckToken(),g=p?`#${fV}=${encodeURIComponent(p)}`:"";return`${dV(i)}?${Jo(d).slice(1)}${g}`}function dV({config:i}){return i.emulator?Y_(i,hV):`https://${i.authDomain}/${cV}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp="webStorageSupport";class mV{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gR,this._completeRedirectFn=UP,this._overrideRedirectResult=PP}async _openPopup(e,t,s,a){var l;Rs((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await MS(e,t,s,Dg(),a);return lV(e,c,Z_())}async _openRedirect(e,t,s,a){await this._originValidation(e);const l=await MS(e,t,s,Dg(),a);return _P(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(Rs(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await nV(e),s=new jP(e);return t.register("authEvent",a=>(Te(a?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Kp,{type:Kp},a=>{var l;const c=(l=a?.[0])===null||l===void 0?void 0:l[Kp];c!==void 0&&t(!!c),fi(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=GP(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return sR()||Zb()||W_()}}const pV=mV;var kS="@firebase/auth",PS="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _V(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yV(i){yr(new Ts("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=s.options;Te(c&&!c.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:c,authDomain:d,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rR(i)},g=new Vk(s,a,l,p);return Kk(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),yr(new Ts("auth-internal",e=>{const t=ka(e.getProvider("auth").getImmediate());return(s=>new gV(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zn(kS,PS,_V(i)),Zn(kS,PS,"esm2017")}/**
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
 */const vV=5*60,EV=qS("authIdTokenMaxAge")||vV;let VS=null;const TV=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>EV)return;const a=t?.token;VS!==a&&(VS=a,await fetch(i,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function SV(i=Qf()){const e=Ju(i,"auth");if(e.isInitialized())return e.getImmediate();const t=Gk(i,{popupRedirectResolver:pV,persistence:[RP,mP,gR]}),s=qS("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const c=TV(l.toString());cP(t,c,()=>c(t.currentUser)),uP(t,d=>c(d))}}const a=BS("auth");return a&&Yk(t,`http://${a}`),t}function AV(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}Lk({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=a=>{const l=Ui("internal-error");l.customData=a,t(l)},s.type="text/javascript",s.charset="UTF-8",AV().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yV("Browser");const wV={apiKey:"AIzaSyD-EnuWkZgnjb6hnaP4LhUIZvxSCf5tiIo",authDomain:"game-of-trust-675c9.firebaseapp.com",projectId:"game-of-trust-675c9",storageBucket:"game-of-trust-675c9.firebasestorage.app",messagingSenderId:"72708199445",appId:"1:72708199445:web:ce23ac49a6c15fe7f02a1c",measurementId:"G-K3GSYXR89X"},Sd=WS(wV);C2(Sd);const ms=RM(Sd),$u=SV(Sd),gc=uk(Sd,"us-central1");Fb(gc,"localhost",5001);const bV=({onAuthSuccess:i})=>{const[e,t]=Ye.useState(!0),[s,a]=Ye.useState(""),[l,c]=Ye.useState(""),[d,p]=Ye.useState(""),[g,y]=Ye.useState(!1),[T,w]=Ye.useState(""),P=async B=>{B.preventDefault(),y(!0),w("");try{if(e){const J=await lP($u,s,l);i(J.user.uid)}else{if(!d.trim()){w("Username is required for registration");return}const J=await oP($u,s,l);await FM(ar(ms,"usernames",J.user.uid),{username:d.trim(),createdAt:new Date().toISOString()}),i(J.user.uid)}}catch(J){w(J.message||"An error occurred")}finally{y(!1)}};return G.jsxs("div",{className:"max-w-md mx-auto mt-8 p-8 bg-gray-900 rounded-xl shadow-2xl border border-cyan-500/30 backdrop-blur-sm",children:[G.jsx("h2",{className:"text-3xl font-bold text-center mb-8 text-cyan-400 glow-text",children:e?"Login":"Sign Up"}),G.jsxs("form",{onSubmit:P,className:"space-y-6",children:[G.jsxs("div",{className:"space-y-2",children:[G.jsx("label",{className:"block text-sm font-medium text-cyan-300",children:"Email:"}),G.jsx("input",{type:"email",value:s,onChange:B=>a(B.target.value),required:!0,className:"w-full px-4 py-3 bg-gray-800 border border-cyan-500/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-white placeholder-gray-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"})]}),G.jsxs("div",{className:"space-y-2",children:[G.jsx("label",{className:"block text-sm font-medium text-cyan-300",children:"Password:"}),G.jsx("input",{type:"password",value:l,onChange:B=>c(B.target.value),required:!0,className:"w-full px-4 py-3 bg-gray-800 border border-cyan-500/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-white placeholder-gray-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"})]}),!e&&G.jsxs("div",{className:"space-y-2",children:[G.jsx("label",{className:"block text-sm font-medium text-cyan-300",children:"Username:"}),G.jsx("input",{type:"text",value:d,onChange:B=>p(B.target.value),required:!0,className:"w-full px-4 py-3 bg-gray-800 border border-cyan-500/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 text-white placeholder-gray-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"})]}),T&&G.jsx("div",{className:"text-red-300 text-sm text-center bg-red-900/30 p-3 rounded-lg border border-red-500/50",children:T}),G.jsx("button",{type:"submit",disabled:g,className:"w-full py-3 px-6 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25",children:g?"Loading...":e?"Login":"Sign Up"})]}),G.jsxs("button",{onClick:()=>t(!e),className:"w-full mt-6 py-3 px-6 bg-gray-800 text-cyan-300 font-medium rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 border border-cyan-500/30 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20",children:["Switch to ",e?"Sign Up":"Login"]})]})},Ff=async i=>{try{const e=await BM(ar(ms,"usernames",i));return e.exists()?e.data().username:null}catch(e){return console.error("Error fetching username:",e),null}},rr=6,AR=({game:i,currentUser:e,onCellClick:t,onAnimationComplete:s,gridSize:a=10,onShapeDrop:l})=>{const[c,d]=Ye.useState(null),[p,g]=Ye.useState(0),[y,T]=Ye.useState(!1),w=Ye.useRef(!1),[P,B]=Ye.useState([]);Ye.useEffect(()=>{const b=()=>{w.current=!0},re=()=>{w.current=!1};return window.addEventListener("mousedown",b),window.addEventListener("mouseup",re),window.addEventListener("dragend",re),()=>{window.removeEventListener("mousedown",b),window.removeEventListener("mouseup",re),window.removeEventListener("dragend",re)}},[]);const J=b=>{const re={};for(let ae=0;ae<a;ae++){re[`row${ae}`]=[];for(let V=0;V<a;V++){const Y=de(b,ae,V),ie=b[`row${ae}`]?.[V]||0;if(ie>0)re[`row${ae}`][V]=Y===2||Y===3?ie:0;else if(Y===3){const fe=he(b,ae,V);fe.player1>fe.player2?re[`row${ae}`][V]=1:fe.player2>fe.player1?re[`row${ae}`][V]=2:re[`row${ae}`][V]=Math.random()>.5?1:2}else re[`row${ae}`][V]=0}}return re},$=(b,re)=>{for(let ae=0;ae<a;ae++){const V=`row${ae}`,Y=b[V]||[],ie=re[V]||[];if(Y.length!==ie.length)return!1;for(let fe=0;fe<a;fe++)if((Y[fe]||0)!==(ie[fe]||0))return!1}return!0},_e=b=>P.length===0?!1:!!($(b,P[P.length-1])||P.length>=2&&$(b,P[P.length-2])),de=(b,re,ae)=>{let V=0;for(let Y=-1;Y<=1;Y++)for(let ie=-1;ie<=1;ie++){if(Y===0&&ie===0)continue;const fe=re+Y,N=ae+ie;fe>=0&&fe<a&&N>=0&&N<a&&(b[`row${fe}`]?.[N]||0)>0&&V++}return V},he=(b,re,ae)=>{let V=0,Y=0;for(let ie=-1;ie<=1;ie++)for(let fe=-1;fe<=1;fe++){if(ie===0&&fe===0)continue;const N=re+ie,W=ae+fe;if(N>=0&&N<a&&W>=0&&W<a){const ne=b[`row${N}`]?.[W]||0;ne===1?V++:ne===2&&Y++}}return{player1:V,player2:Y}};Ye.useEffect(()=>{i.state==="fighting"&&!y&&p<10&&(T(!0),d(JSON.parse(JSON.stringify(i.grid))),g(0),B([]))},[i.state,y,i.grid]),Ye.useEffect(()=>{if(y&&c&&p<1e3){const b=setTimeout(()=>{if(_e(c)){T(!1),s&&s();return}const re=J(c);B(ae=>[...ae,JSON.parse(JSON.stringify(c))].slice(-2)),d(re),g(ae=>ae+1)},50);return()=>clearTimeout(b)}else y&&p>=1e3&&(T(!1),s&&s())},[y,c,p,s,P]);const me=e?i.user1?.uid===e.uid?1:i.user2?.uid===e.uid?2:0:0,Ie=(b,re)=>{me===0||!(me===1&&b<rr||me===2&&b>=a-rr)||t(b,re)},M=(b,re,ae)=>{me===0||!k||!b.pattern.every((Y,ie)=>Y.every((fe,N)=>{if(fe===0)return!0;const W=re+ie,ne=ae+N;return W<0||W>=a||ne<0||ne>=a?!1:me===1&&W<rr||me===2&&W>=a-rr}))||l&&l(b,re,ae)},R=b=>{b.preventDefault(),b.dataTransfer.dropEffect="copy"},C=(b,re,ae)=>{b.preventDefault();try{const V=b.dataTransfer.getData("shape");if(V){const Y=JSON.parse(V);M(Y,re,ae)}}catch(V){console.error("Error handling shape drop:",V)}},x=(b,re)=>{const V=(y&&c?c:i.grid)[`row${b}`];return V&&V[re]||0},k=i.state==="waiting"||i.state==="started",D=()=>{const b=[];for(let re=0;re<a;re++){const ae=[];for(let V=0;V<a;V++){const Y=x(re,V),ie=k&&(me===1&&re<rr||me===2&&re>=a-rr);let fe="";Y===1?fe="bg-red-200":Y===2?fe="bg-blue-200":ie?fe=me===1?"bg-red-50":"bg-blue-50":fe="bg-gray-100",ae.push(G.jsx("div",{className:`w-5 h-5 border border-gray-300 flex items-center justify-center text-xs ${fe} ${ie?"cursor-pointer hover:bg-opacity-80":"cursor-not-allowed"}`,onMouseEnter:()=>{w.current&&Ie(re,V)},onClick:()=>{Ie(re,V)},onDragOver:R,onDrop:N=>C(N,re,V),children:Y!==0?Y:""},`${re}-${V}`))}b.push(G.jsx("div",{className:"flex",children:ae},re))}return b};return G.jsxs("div",{className:"bg-white p-6 rounded-lg",children:[G.jsxs("div",{className:"mb-4",children:[G.jsxs("p",{className:"text-lg font-semibold text-gray-800 mb-2",children:["You are Player ",me]}),k&&G.jsxs(G.Fragment,{children:[G.jsxs("p",{className:"text-sm text-gray-600 mb-1",children:["You can edit rows"," ",me===1?`0-${rr-1}`:`${a-rr}-${a-1}`]}),G.jsx("p",{className:"text-sm text-gray-600 mb-1",children:"Click cells in your area to place your number"}),G.jsx("p",{className:"text-xs text-gray-500",children:"💡 Tip: Drag shapes from the sidebar to quickly place patterns!"})]}),y&&G.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg border border-blue-200",children:[G.jsx("p",{className:"font-semibold text-blue-800 mb-2",children:"Conway's Game of Life Simulation"}),G.jsxs("p",{className:"text-blue-700 mb-2",children:["Generation: ",p," / 1000"]}),G.jsx("div",{className:"w-52 h-2.5 bg-gray-200 rounded-full overflow-hidden",children:G.jsx("div",{className:"h-full bg-green-500 transition-all duration-100 ease-out",style:{width:`${p/1e3*100}%`}})}),G.jsx("p",{className:"text-xs text-blue-600 mt-2",children:"Simulation will stop early if a stable state or oscillation is detected"})]}),i.state==="fighting"&&!y&&i.winner&&G.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border border-green-200",children:[G.jsx("h3",{className:"text-xl font-bold text-green-800 mb-2",children:"🏆 Battle Complete! 🏆"}),i.winner==="tie"?G.jsxs("div",{className:"text-green-700",children:[G.jsx("p",{className:"font-semibold mb-1",children:"It's a tie!"}),G.jsx("p",{className:"mb-1",children:"Both players have equal cell counts."}),G.jsxs("p",{children:["🤝 Great game, ",i.user1?.username," and"," ",i.user2?.username,"! 🤝"]})]}):G.jsxs("div",{className:"text-green-700",children:[G.jsxs("p",{className:"font-semibold mb-1",children:["Player"," ",i.winner==="player1"?"1":"2"," ","wins!"]}),i.winner==="player1"&&i.user1&&G.jsxs("p",{className:"mb-1",children:["🎉 Congratulations ",i.user1.username,"! 🎉"]}),i.winner==="player2"&&i.user2&&G.jsxs("p",{className:"mb-1",children:["🎉 Congratulations ",i.user2.username,"! 🎉"]}),G.jsx("p",{children:"🏆 Victory achieved through superior strategy! 🏆"})]})]}),i.state==="fighting"&&!y&&!i.winner&&G.jsxs("div",{className:"bg-yellow-50 p-4 rounded-lg border border-yellow-200",children:[G.jsx("h3",{className:"text-lg font-semibold text-yellow-800 mb-2",children:"⚔️ Battle Processing... ⚔️"}),G.jsx("p",{className:"text-yellow-700",children:"Server is calculating the final results..."})]})]}),G.jsx("div",{className:"inline-block border-2 border-gray-800 rounded",children:D()})]})},RV=yd(gc,"createGame"),IV=yd(gc,"joinGame");yd(gc,"startFightingPhase");const CV=yd(gc,"scheduleGameTransition"),NV=async(i,e)=>{try{return(await RV({userId:i,username:e})).data}catch(t){throw console.error("Error calling createGame function:",t),t}},DV=async(i,e,t)=>{try{return(await IV({gameId:i,userId:e,username:t})).data}catch(s){throw console.error("Error calling joinGame function:",s),s}},OV=async i=>{try{return(await CV({gameId:i})).data}catch(e){throw console.error("Error calling scheduleGameTransition function:",e),e}},xV=({playerNumber:i})=>{const e=[{id:"block",name:"Block",pattern:[[1,1],[1,1]],color:"#ffcccc"},{id:"blinker",name:"Blinker",pattern:[[1,1,1]],color:"#ffcccc"},{id:"glider",name:"Glider",pattern:[[0,1,0],[0,0,1],[1,1,1]],color:"#ffcccc"},{id:"beacon",name:"Beacon",pattern:[[1,1,0,0],[1,1,0,0],[0,0,1,1],[0,0,1,1]],color:"#ffcccc"},{id:"toad",name:"Toad",pattern:[[0,1,1,1],[1,1,1,0]],color:"#ffcccc"},{id:"line",name:"Line",pattern:[[1],[1],[1],[1]],color:"#ffcccc"}],t=(a,l)=>{a.dataTransfer.setData("shape",JSON.stringify(l)),a.dataTransfer.effectAllowed="copy"},s=a=>{const l=[];for(let c=0;c<a.pattern.length;c++){const d=[];for(let p=0;p<a.pattern[c].length;p++){const g=a.pattern[c][p];d.push(G.jsx("div",{className:`w-3 h-3 border inline-block ${g===1?i===1?"bg-red-200 border-red-300":"bg-blue-200 border-blue-300":"bg-white border-gray-300"}`},`${c}-${p}`))}l.push(G.jsx("div",{className:"flex",children:d},c))}return l};return G.jsxs("div",{className:"bg-gray-50 p-5 rounded-lg min-w-52 max-w-64",children:[G.jsx("h3",{className:"text-lg font-semibold text-gray-800 mt-0 mb-2",children:"Shape Library"}),G.jsx("p",{className:"text-xs text-gray-600 mb-4",children:"Drag shapes onto your area of the board"}),G.jsx("div",{className:"space-y-4",children:e.map(a=>G.jsxs("div",{className:"bg-white p-3 rounded border border-gray-200 cursor-grab hover:shadow-md transition-shadow select-none",draggable:!0,onDragStart:l=>t(l,a),onMouseDown:l=>{l.currentTarget.style.cursor="grabbing"},onMouseUp:l=>{l.currentTarget.style.cursor="grab"},children:[G.jsx("div",{className:"text-sm font-bold mb-1 text-gray-800",children:a.name}),G.jsx("div",{className:"flex flex-col items-start",children:s(a)})]},a.id))}),G.jsxs("div",{className:"text-xs text-gray-500 mt-4 p-2 bg-white rounded border border-gray-200",children:[G.jsx("strong",{children:"Tip:"})," These are classic Conway's Game of Life patterns. Each will behave differently during the simulation!"]})]})},MV=({game:i,currentUser:e,onCellClick:t,onShapeDrop:s,gridSize:a=10})=>{const l=()=>e?i.user1?.uid===e.uid?1:i.user2?.uid===e.uid?2:0:0;return G.jsxs("div",{className:"flex gap-6 p-6 bg-white rounded-lg",children:[G.jsx("div",{className:"flex-1",children:G.jsx(AR,{game:i,currentUser:e,onCellClick:t,onShapeDrop:s,gridSize:a})}),G.jsx("div",{className:"w-80",children:G.jsx(xV,{playerNumber:l()})})]})},kV=()=>{const[i,e]=Ye.useState(null),[t,s]=Ye.useState(""),[a,l]=Ye.useState(!1),[c,d]=Ye.useState(null),[p,g]=Ye.useState(!1),[y,T]=Ye.useState(!1),[w,P]=Ye.useState(!0),[B,J]=Ye.useState(0),[$,_e]=Ye.useState(!1);Ye.useEffect(()=>$u.onAuthStateChanged(async b=>{d(b),b&&await de(b.uid),P(!1)}),[]);const de=async D=>{try{const b=bM(ms,"games"),re=hS(b,Qh("user1.uid","==",D),Qh("state","!=","ended")),ae=hS(b,Qh("user2.uid","==",D),Qh("state","!=","ended")),[V,Y]=await Promise.all([mS(re),mS(ae)]);if(V.empty){if(!Y.empty){const ie=Y.docs[0];s(ie.id),e({id:ie.id,...ie.data()})}}else{const ie=V.docs[0];s(ie.id),e({id:ie.id,...ie.data()})}}catch(b){console.error("Error checking for existing game:",b)}},he=async()=>{if(c){l(!0);try{const D=await Ff(c.uid);if(!D){alert("Username not found. Please set up your username first."),l(!1);return}const b=await NV(c.uid,D);b.success?(s(b.gameId),T(!0)):alert("Failed to create game. Please try again.")}catch(D){console.error("Error creating game:",D),alert("Failed to create game. Please try again.")}finally{l(!1)}}},Ce=async D=>{if(c)try{const b=await Ff(c.uid);if(!b){alert("Username not found. Please set up your username first.");return}(await DV(D,c.uid,b)).success&&s(D)}catch(b){console.error("Error joining game:",b),alert("Failed to join game. Please check the game ID and try again.")}},me=async()=>{if(!t||!c||!i)return;const D=ar(ms,"games",t),re=i.user1?.uid===c.uid?"user1.ready":"user2.ready";try{await No(D,{[re]:!p})}catch(ae){console.error("Error updating ready state:",ae)}},Ie=async()=>{if(!t||!c)return;const D=ar(ms,"games",t);try{await No(D,{state:"ended"}),e(null),s(""),g(!1),T(!1)}catch(b){console.error("Error aborting game:",b)}},M=async()=>{if(!t||!c)return;const D=ar(ms,"games",t);try{await No(D,{state:"waiting","user1.ready":!1,"user2.ready":!1,grid:R(10),startedAt:null,fightingStartedAt:null,finalGrid:null,winner:null,timerStarted:!1}),g(!1),_e(!1),J(0)}catch(b){console.error("Error restarting game:",b)}},R=D=>{const b={};for(let re=0;re<D;re++)b[`row${re}`]=Array(D).fill(0);return b},C=async(D,b)=>{if(!t||!c||!i)return;const re=i.user1?.uid===c.uid?1:i.user2?.uid===c.uid?2:0;if(re===0)return;const ae=ar(ms,"games",t);try{const V={...i.grid};V[`row${D}`]||(V[`row${D}`]=Array(10).fill(0));const Y=V[`row${D}`][b]||0;V[`row${D}`][b]=Y===0?re:0,await No(ae,{grid:V})}catch(V){console.error("Error updating grid:",V)}},x=()=>{_e(!0)},k=async(D,b,re)=>{if(!t||!c||!i)return;const ae=i.user1?.uid===c.uid?1:i.user2?.uid===c.uid?2:0;if(ae===0)return;const V=ar(ms,"games",t);try{const Y={...i.grid};D.pattern.forEach((ie,fe)=>{ie.forEach((N,W)=>{if(N===1){const ne=b+fe,te=re+W;ne>=0&&ne<10&&te>=0&&te<10&&(Y[`row${ne}`]||(Y[`row${ne}`]=Array(10).fill(0)),Y[`row${ne}`][te]===0&&(Y[`row${ne}`][te]=ae))}})}),await No(V,{grid:Y})}catch(Y){console.error("Error dropping shape:",Y)}};if(Ye.useEffect(()=>{if(i?.state==="started"&&i.startedAt){const D=i.startedAt.toDate?i.startedAt.toDate():new Date(i.startedAt),b=new Date(D.getTime()+2*60*1e3),re=setInterval(()=>{const ae=new Date,V=Math.max(0,Math.ceil((b.getTime()-ae.getTime())/1e3));J(V),V===0&&(clearInterval(re),console.log("Client-side timer reached zero - waiting for server to transition game"))},1e3);return()=>clearInterval(re)}},[i?.state,i?.startedAt]),Ye.useEffect(()=>{if(!t)return;const D=ar(ms,"games",t);return qM(D,re=>{if(re.exists()){const ae={id:re.id,...re.data()};if(ae.state==="ended"){e(null),s(""),g(!1),T(!1);return}if(e(ae),c){const Y=ae.user1?.uid===c.uid?ae.user1?.ready:ae.user2?.ready;g(Y||!1)}ae.user1?.ready&&ae.user2?.ready&&ae.state==="waiting"&&(async()=>{await No(D,{state:"started",startedAt:new Date,timerStarted:!1});try{await OV(t),console.log("Server-side timer started successfully")}catch(Y){console.error("Error starting server-side timer:",Y)}})()}})},[t,c]),i?.state==="started"){const D=Math.floor(B/60),b=B%60;return G.jsxs("div",{className:"bg-gray-800 rounded-xl shadow-2xl p-8 border border-cyan-500/30",children:[G.jsx("h2",{className:"text-3xl font-bold text-center mb-6 text-cyan-400 glow-text",children:"🎮 Game Started! 🎮"}),G.jsxs("div",{className:"bg-gray-900 p-6 rounded-lg mb-6 border border-cyan-500/20",children:[G.jsxs("p",{className:"text-center text-cyan-300 mb-4 text-lg",children:["Players: ",i.user1?.username," vs"," ",i.user2?.username]}),G.jsxs("div",{className:"text-center mb-6",children:[G.jsxs("h3",{className:"text-2xl font-bold text-cyan-400 mb-3 glow-text",children:["⏰ Time Remaining: ",D,":",b.toString().padStart(2,"0")]}),G.jsx("p",{className:"text-gray-400",children:"Prepare your strategy! The battle begins automatically when the timer reaches zero."})]}),G.jsx("div",{className:"text-center",children:G.jsx("button",{onClick:Ie,className:"py-3 px-6 bg-gradient-to-r from-red-600 to-pink-600 text-white font-medium rounded-lg hover:from-red-500 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25",children:"Abort Game"})})]}),G.jsx(MV,{game:i,currentUser:c,onCellClick:C,onShapeDrop:k,gridSize:10})]})}return i?.state==="fighting"?G.jsxs("div",{className:"bg-gray-800 rounded-xl shadow-2xl p-8 border border-cyan-500/30",children:[G.jsx("h2",{className:"text-3xl font-bold text-center mb-6 text-cyan-400 glow-text",children:"⚔️ Battle in Progress! ⚔️"}),G.jsxs("div",{className:"bg-gray-900 p-6 rounded-lg mb-6 border border-cyan-500/20",children:[G.jsxs("p",{className:"text-center text-cyan-300 mb-6 text-lg",children:["Players: ",i.user1?.username," vs"," ",i.user2?.username]}),G.jsxs("div",{className:"flex justify-center space-x-4",children:[$&&G.jsx("button",{onClick:M,className:"py-3 px-6 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25",children:"🔄 Restart Game"}),G.jsx("button",{onClick:Ie,className:"py-3 px-6 bg-gradient-to-r from-red-600 to-pink-600 text-white font-medium rounded-lg hover:from-red-500 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25",children:"Abort Game"})]})]}),G.jsx(AR,{game:i,currentUser:c,onCellClick:C,onAnimationComplete:x,gridSize:10})]}):G.jsx("div",{className:"bg-white rounded-lg shadow-lg p-6",children:w?G.jsx("div",{className:"text-center py-8",children:G.jsx("h2",{className:"text-xl font-semibold text-gray-800",children:"Loading..."})}):G.jsxs(G.Fragment,{children:[G.jsx("h2",{className:"text-2xl font-bold text-center mb-6 text-gray-800",children:"Create or Join Game"}),t?G.jsxs("div",{className:"bg-gray-50 p-6 rounded-lg",children:[G.jsx("h3",{className:"text-xl font-semibold mb-4 text-gray-800",children:"Game Lobby"}),G.jsxs("p",{className:"mb-4 text-gray-600",children:[G.jsx("strong",{children:"Game ID:"})," ",t]}),G.jsxs("div",{className:"mb-6",children:[G.jsx("h4",{className:"text-lg font-medium mb-3 text-gray-700",children:"Players:"}),G.jsxs("div",{className:"space-y-2",children:[G.jsxs("div",{className:"flex justify-between items-center bg-white p-3 rounded-md border",children:[G.jsx("span",{className:"font-medium text-gray-800",children:i?.user1?.username||"Player 1"}),G.jsx("span",{className:`px-2 py-1 rounded-full text-sm font-medium ${i?.user1?.ready?"bg-green-100 text-green-800":"bg-gray-100 text-gray-600"}`,children:i?.user1?.ready?"✓ Ready":"○ Not Ready"})]}),G.jsxs("div",{className:"flex justify-between items-center bg-white p-3 rounded-md border",children:[G.jsx("span",{className:"font-medium text-gray-800",children:i?.user2?.username||"Waiting for Player 2..."}),i?.user2&&G.jsx("span",{className:`px-2 py-1 rounded-full text-sm font-medium ${i?.user2?.ready?"bg-green-100 text-green-800":"bg-gray-100 text-gray-600"}`,children:i?.user2?.ready?"✓ Ready":"○ Not Ready"})]})]})]}),i?.user2&&G.jsxs("div",{className:"mb-6",children:[G.jsx("button",{onClick:me,className:`w-full py-3 px-4 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors ${p?"bg-yellow-600 text-white hover:bg-yellow-700 focus:ring-yellow-500":"bg-green-600 text-white hover:bg-green-700 focus:ring-green-500"}`,children:p?"Cancel Ready":"Ready to Start"}),i?.user1?.ready&&i?.user2?.ready&&G.jsx("p",{className:"text-center text-green-600 font-medium mt-3",children:"Starting game..."})]}),y&&!i?.user2&&G.jsxs("div",{className:"mb-6 bg-blue-50 p-4 rounded-lg",children:[G.jsx("p",{className:"text-blue-800 mb-2",children:"Waiting for another player to join..."}),G.jsxs("p",{className:"text-blue-700",children:["Share this Game ID with your friend:"," ",G.jsx("strong",{children:t})]})]}),G.jsx("div",{className:"text-center",children:G.jsx("button",{onClick:Ie,className:"py-2 px-4 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors",children:"Abort Game"})})]}):G.jsxs("div",{className:"space-y-6",children:[G.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[G.jsx("h3",{className:"text-lg font-semibold mb-3 text-gray-700",children:"Create New Game"}),G.jsx("button",{onClick:he,disabled:a||!c,className:"w-full py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors",children:a?"Creating...":"Create Game"})]}),G.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[G.jsx("h3",{className:"text-lg font-semibold mb-3 text-gray-700",children:"Join Existing Game"}),G.jsx("input",{type:"text",placeholder:"Enter Game ID",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white mb-3",onKeyDown:D=>{if(D.key==="Enter"){const b=D.target.value.trim();b&&Ce(b)}}}),G.jsx("button",{onClick:()=>{const b=document.querySelector(".game-id-input")?.value.trim();b&&Ce(b)},disabled:!c,className:"w-full py-2 px-4 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors",children:"Join Game"})]})]})]})})};function PV(){const[i,e]=Ye.useState(null),[t,s]=Ye.useState(null),[a,l]=Ye.useState(!0);Ye.useEffect(()=>{const d=hP($u,async p=>{if(e(p),p){const g=await Ff(p.uid);s(g)}else s(null);l(!1)});return()=>d()},[]);const c=async d=>{const p=await Ff(d);s(p)};return a?G.jsx("div",{className:"min-h-screen bg-gray-900 flex items-center justify-center",children:G.jsx("div",{className:"text-xl text-cyan-400 animate-pulse",children:"Loading..."})}):G.jsx("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900",children:i?G.jsxs("div",{className:"container mx-auto px-4 py-8",children:[G.jsx("div",{className:"bg-gray-800 rounded-xl shadow-2xl p-6 mb-6 border border-cyan-500/30",children:G.jsxs("div",{className:"flex justify-between items-center mb-4",children:[G.jsxs("div",{className:"text-2xl font-bold text-cyan-400 glow-text",children:["Welcome, ",t||i.email,"!"]}),G.jsx("button",{onClick:()=>$u.signOut(),className:"px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg hover:from-red-500 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/25",children:"Logout"})]})}),G.jsx(kV,{})]}):G.jsx("div",{className:"flex items-center justify-center min-h-screen",children:G.jsx(bV,{onAuthSuccess:c})})})}iI.createRoot(document.getElementById("root")).render(G.jsx(Ye.StrictMode,{children:G.jsx(PV,{})}));
