(function(){const G=document.createElement("link").relList;if(G&&G.supports&&G.supports("modulepreload"))return;for(const N of document.querySelectorAll('link[rel="modulepreload"]'))d(N);new MutationObserver(N=>{for(const j of N)if(j.type==="childList")for(const R of j.addedNodes)R.tagName==="LINK"&&R.rel==="modulepreload"&&d(R)}).observe(document,{childList:!0,subtree:!0});function Q(N){const j={};return N.integrity&&(j.integrity=N.integrity),N.referrerPolicy&&(j.referrerPolicy=N.referrerPolicy),N.crossOrigin==="use-credentials"?j.credentials="include":N.crossOrigin==="anonymous"?j.credentials="omit":j.credentials="same-origin",j}function d(N){if(N.ep)return;N.ep=!0;const j=Q(N);fetch(N.href,j)}})();var $c={exports:{}},bn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wr;function Om(){if(Wr)return bn;Wr=1;var A=Symbol.for("react.transitional.element"),G=Symbol.for("react.fragment");function Q(d,N,j){var R=null;if(j!==void 0&&(R=""+j),N.key!==void 0&&(R=""+N.key),"key"in N){j={};for(var _ in N)_!=="key"&&(j[_]=N[_])}else j=N;return N=j.ref,{$$typeof:A,type:d,key:R,ref:N!==void 0?N:null,props:j}}return bn.Fragment=G,bn.jsx=Q,bn.jsxs=Q,bn}var Fr;function Cm(){return Fr||(Fr=1,$c.exports=Om()),$c.exports}var S=Cm(),Wc={exports:{}},k={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ir;function Nm(){if(Ir)return k;Ir=1;var A=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),Q=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),j=Symbol.for("react.consumer"),R=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),F=Symbol.iterator;function lt(f){return f===null||typeof f!="object"?null:(f=F&&f[F]||f["@@iterator"],typeof f=="function"?f:null)}var nt={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,Y={};function ct(f,E,C){this.props=f,this.context=E,this.refs=Y,this.updater=C||nt}ct.prototype.isReactComponent={},ct.prototype.setState=function(f,E){if(typeof f!="object"&&typeof f!="function"&&f!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,f,E,"setState")},ct.prototype.forceUpdate=function(f){this.updater.enqueueForceUpdate(this,f,"forceUpdate")};function Ut(){}Ut.prototype=ct.prototype;function Mt(f,E,C){this.props=f,this.context=E,this.refs=Y,this.updater=C||nt}var yt=Mt.prototype=new Ut;yt.constructor=Mt,V(yt,ct.prototype),yt.isPureReactComponent=!0;var Kt=Array.isArray,I={H:null,A:null,T:null,S:null,V:null},Jt=Object.prototype.hasOwnProperty;function $t(f,E,C,D,B,tt){return C=tt.ref,{$$typeof:A,type:f,key:E,ref:C!==void 0?C:null,props:tt}}function Wt(f,E){return $t(f.type,E,void 0,void 0,void 0,f.props)}function pe(f){return typeof f=="object"&&f!==null&&f.$$typeof===A}function _l(f){var E={"=":"=0",":":"=2"};return"$"+f.replace(/[=:]/g,function(C){return E[C]})}var De=/\/+/g;function Bt(f,E){return typeof f=="object"&&f!==null&&f.key!=null?_l(""+f.key):E.toString(36)}function ml(){}function hl(f){switch(f.status){case"fulfilled":return f.value;case"rejected":throw f.reason;default:switch(typeof f.status=="string"?f.then(ml,ml):(f.status="pending",f.then(function(E){f.status==="pending"&&(f.status="fulfilled",f.value=E)},function(E){f.status==="pending"&&(f.status="rejected",f.reason=E)})),f.status){case"fulfilled":return f.value;case"rejected":throw f.reason}}throw f}function qt(f,E,C,D,B){var tt=typeof f;(tt==="undefined"||tt==="boolean")&&(f=null);var Z=!1;if(f===null)Z=!0;else switch(tt){case"bigint":case"string":case"number":Z=!0;break;case"object":switch(f.$$typeof){case A:case G:Z=!0;break;case M:return Z=f._init,qt(Z(f._payload),E,C,D,B)}}if(Z)return B=B(f),Z=D===""?"."+Bt(f,0):D,Kt(B)?(C="",Z!=null&&(C=Z.replace(De,"$&/")+"/"),qt(B,E,C,"",function(Xe){return Xe})):B!=null&&(pe(B)&&(B=Wt(B,C+(B.key==null||f&&f.key===B.key?"":(""+B.key).replace(De,"$&/")+"/")+Z)),E.push(B)),1;Z=0;var Ft=D===""?".":D+":";if(Kt(f))for(var vt=0;vt<f.length;vt++)D=f[vt],tt=Ft+Bt(D,vt),Z+=qt(D,E,C,tt,B);else if(vt=lt(f),typeof vt=="function")for(f=vt.call(f),vt=0;!(D=f.next()).done;)D=D.value,tt=Ft+Bt(D,vt++),Z+=qt(D,E,C,tt,B);else if(tt==="object"){if(typeof f.then=="function")return qt(hl(f),E,C,D,B);throw E=String(f),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.")}return Z}function y(f,E,C){if(f==null)return f;var D=[],B=0;return qt(f,D,"","",function(tt){return E.call(C,tt,B++)}),D}function z(f){if(f._status===-1){var E=f._result;E=E(),E.then(function(C){(f._status===0||f._status===-1)&&(f._status=1,f._result=C)},function(C){(f._status===0||f._status===-1)&&(f._status=2,f._result=C)}),f._status===-1&&(f._status=0,f._result=E)}if(f._status===1)return f._result.default;throw f._result}var L=typeof reportError=="function"?reportError:function(f){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var E=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof f=="object"&&f!==null&&typeof f.message=="string"?String(f.message):String(f),error:f});if(!window.dispatchEvent(E))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",f);return}console.error(f)};function rt(){}return k.Children={map:y,forEach:function(f,E,C){y(f,function(){E.apply(this,arguments)},C)},count:function(f){var E=0;return y(f,function(){E++}),E},toArray:function(f){return y(f,function(E){return E})||[]},only:function(f){if(!pe(f))throw Error("React.Children.only expected to receive a single React element child.");return f}},k.Component=ct,k.Fragment=Q,k.Profiler=N,k.PureComponent=Mt,k.StrictMode=d,k.Suspense=O,k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,k.__COMPILER_RUNTIME={__proto__:null,c:function(f){return I.H.useMemoCache(f)}},k.cache=function(f){return function(){return f.apply(null,arguments)}},k.cloneElement=function(f,E,C){if(f==null)throw Error("The argument must be a React element, but you passed "+f+".");var D=V({},f.props),B=f.key,tt=void 0;if(E!=null)for(Z in E.ref!==void 0&&(tt=void 0),E.key!==void 0&&(B=""+E.key),E)!Jt.call(E,Z)||Z==="key"||Z==="__self"||Z==="__source"||Z==="ref"&&E.ref===void 0||(D[Z]=E[Z]);var Z=arguments.length-2;if(Z===1)D.children=C;else if(1<Z){for(var Ft=Array(Z),vt=0;vt<Z;vt++)Ft[vt]=arguments[vt+2];D.children=Ft}return $t(f.type,B,void 0,void 0,tt,D)},k.createContext=function(f){return f={$$typeof:R,_currentValue:f,_currentValue2:f,_threadCount:0,Provider:null,Consumer:null},f.Provider=f,f.Consumer={$$typeof:j,_context:f},f},k.createElement=function(f,E,C){var D,B={},tt=null;if(E!=null)for(D in E.key!==void 0&&(tt=""+E.key),E)Jt.call(E,D)&&D!=="key"&&D!=="__self"&&D!=="__source"&&(B[D]=E[D]);var Z=arguments.length-2;if(Z===1)B.children=C;else if(1<Z){for(var Ft=Array(Z),vt=0;vt<Z;vt++)Ft[vt]=arguments[vt+2];B.children=Ft}if(f&&f.defaultProps)for(D in Z=f.defaultProps,Z)B[D]===void 0&&(B[D]=Z[D]);return $t(f,tt,void 0,void 0,null,B)},k.createRef=function(){return{current:null}},k.forwardRef=function(f){return{$$typeof:_,render:f}},k.isValidElement=pe,k.lazy=function(f){return{$$typeof:M,_payload:{_status:-1,_result:f},_init:z}},k.memo=function(f,E){return{$$typeof:x,type:f,compare:E===void 0?null:E}},k.startTransition=function(f){var E=I.T,C={};I.T=C;try{var D=f(),B=I.S;B!==null&&B(C,D),typeof D=="object"&&D!==null&&typeof D.then=="function"&&D.then(rt,L)}catch(tt){L(tt)}finally{I.T=E}},k.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},k.use=function(f){return I.H.use(f)},k.useActionState=function(f,E,C){return I.H.useActionState(f,E,C)},k.useCallback=function(f,E){return I.H.useCallback(f,E)},k.useContext=function(f){return I.H.useContext(f)},k.useDebugValue=function(){},k.useDeferredValue=function(f,E){return I.H.useDeferredValue(f,E)},k.useEffect=function(f,E,C){var D=I.H;if(typeof C=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return D.useEffect(f,E)},k.useId=function(){return I.H.useId()},k.useImperativeHandle=function(f,E,C){return I.H.useImperativeHandle(f,E,C)},k.useInsertionEffect=function(f,E){return I.H.useInsertionEffect(f,E)},k.useLayoutEffect=function(f,E){return I.H.useLayoutEffect(f,E)},k.useMemo=function(f,E){return I.H.useMemo(f,E)},k.useOptimistic=function(f,E){return I.H.useOptimistic(f,E)},k.useReducer=function(f,E,C){return I.H.useReducer(f,E,C)},k.useRef=function(f){return I.H.useRef(f)},k.useState=function(f){return I.H.useState(f)},k.useSyncExternalStore=function(f,E,C){return I.H.useSyncExternalStore(f,E,C)},k.useTransition=function(){return I.H.useTransition()},k.version="19.1.1",k}var Pr;function eo(){return Pr||(Pr=1,Wc.exports=Nm()),Wc.exports}var ht=eo(),Fc={exports:{}},yn={},Ic={exports:{}},Pc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var td;function Um(){return td||(td=1,(function(A){function G(y,z){var L=y.length;y.push(z);t:for(;0<L;){var rt=L-1>>>1,f=y[rt];if(0<N(f,z))y[rt]=z,y[L]=f,L=rt;else break t}}function Q(y){return y.length===0?null:y[0]}function d(y){if(y.length===0)return null;var z=y[0],L=y.pop();if(L!==z){y[0]=L;t:for(var rt=0,f=y.length,E=f>>>1;rt<E;){var C=2*(rt+1)-1,D=y[C],B=C+1,tt=y[B];if(0>N(D,L))B<f&&0>N(tt,D)?(y[rt]=tt,y[B]=L,rt=B):(y[rt]=D,y[C]=L,rt=C);else if(B<f&&0>N(tt,L))y[rt]=tt,y[B]=L,rt=B;else break t}}return z}function N(y,z){var L=y.sortIndex-z.sortIndex;return L!==0?L:y.id-z.id}if(A.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var j=performance;A.unstable_now=function(){return j.now()}}else{var R=Date,_=R.now();A.unstable_now=function(){return R.now()-_}}var O=[],x=[],M=1,F=null,lt=3,nt=!1,V=!1,Y=!1,ct=!1,Ut=typeof setTimeout=="function"?setTimeout:null,Mt=typeof clearTimeout=="function"?clearTimeout:null,yt=typeof setImmediate<"u"?setImmediate:null;function Kt(y){for(var z=Q(x);z!==null;){if(z.callback===null)d(x);else if(z.startTime<=y)d(x),z.sortIndex=z.expirationTime,G(O,z);else break;z=Q(x)}}function I(y){if(Y=!1,Kt(y),!V)if(Q(O)!==null)V=!0,Jt||(Jt=!0,Bt());else{var z=Q(x);z!==null&&qt(I,z.startTime-y)}}var Jt=!1,$t=-1,Wt=5,pe=-1;function _l(){return ct?!0:!(A.unstable_now()-pe<Wt)}function De(){if(ct=!1,Jt){var y=A.unstable_now();pe=y;var z=!0;try{t:{V=!1,Y&&(Y=!1,Mt($t),$t=-1),nt=!0;var L=lt;try{e:{for(Kt(y),F=Q(O);F!==null&&!(F.expirationTime>y&&_l());){var rt=F.callback;if(typeof rt=="function"){F.callback=null,lt=F.priorityLevel;var f=rt(F.expirationTime<=y);if(y=A.unstable_now(),typeof f=="function"){F.callback=f,Kt(y),z=!0;break e}F===Q(O)&&d(O),Kt(y)}else d(O);F=Q(O)}if(F!==null)z=!0;else{var E=Q(x);E!==null&&qt(I,E.startTime-y),z=!1}}break t}finally{F=null,lt=L,nt=!1}z=void 0}}finally{z?Bt():Jt=!1}}}var Bt;if(typeof yt=="function")Bt=function(){yt(De)};else if(typeof MessageChannel<"u"){var ml=new MessageChannel,hl=ml.port2;ml.port1.onmessage=De,Bt=function(){hl.postMessage(null)}}else Bt=function(){Ut(De,0)};function qt(y,z){$t=Ut(function(){y(A.unstable_now())},z)}A.unstable_IdlePriority=5,A.unstable_ImmediatePriority=1,A.unstable_LowPriority=4,A.unstable_NormalPriority=3,A.unstable_Profiling=null,A.unstable_UserBlockingPriority=2,A.unstable_cancelCallback=function(y){y.callback=null},A.unstable_forceFrameRate=function(y){0>y||125<y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Wt=0<y?Math.floor(1e3/y):5},A.unstable_getCurrentPriorityLevel=function(){return lt},A.unstable_next=function(y){switch(lt){case 1:case 2:case 3:var z=3;break;default:z=lt}var L=lt;lt=z;try{return y()}finally{lt=L}},A.unstable_requestPaint=function(){ct=!0},A.unstable_runWithPriority=function(y,z){switch(y){case 1:case 2:case 3:case 4:case 5:break;default:y=3}var L=lt;lt=y;try{return z()}finally{lt=L}},A.unstable_scheduleCallback=function(y,z,L){var rt=A.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?rt+L:rt):L=rt,y){case 1:var f=-1;break;case 2:f=250;break;case 5:f=1073741823;break;case 4:f=1e4;break;default:f=5e3}return f=L+f,y={id:M++,callback:z,priorityLevel:y,startTime:L,expirationTime:f,sortIndex:-1},L>rt?(y.sortIndex=L,G(x,y),Q(O)===null&&y===Q(x)&&(Y?(Mt($t),$t=-1):Y=!0,qt(I,L-rt))):(y.sortIndex=f,G(O,y),V||nt||(V=!0,Jt||(Jt=!0,Bt()))),y},A.unstable_shouldYield=_l,A.unstable_wrapCallback=function(y){var z=lt;return function(){var L=lt;lt=z;try{return y.apply(this,arguments)}finally{lt=L}}}})(Pc)),Pc}var ed;function _m(){return ed||(ed=1,Ic.exports=Um()),Ic.exports}var to={exports:{}},Lt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ld;function Hm(){if(ld)return Lt;ld=1;var A=eo();function G(O){var x="https://react.dev/errors/"+O;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var M=2;M<arguments.length;M++)x+="&args[]="+encodeURIComponent(arguments[M])}return"Minified React error #"+O+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Q(){}var d={d:{f:Q,r:function(){throw Error(G(522))},D:Q,C:Q,L:Q,m:Q,X:Q,S:Q,M:Q},p:0,findDOMNode:null},N=Symbol.for("react.portal");function j(O,x,M){var F=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:F==null?null:""+F,children:O,containerInfo:x,implementation:M}}var R=A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function _(O,x){if(O==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return Lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,Lt.createPortal=function(O,x){var M=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(G(299));return j(O,x,null,M)},Lt.flushSync=function(O){var x=R.T,M=d.p;try{if(R.T=null,d.p=2,O)return O()}finally{R.T=x,d.p=M,d.d.f()}},Lt.preconnect=function(O,x){typeof O=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,d.d.C(O,x))},Lt.prefetchDNS=function(O){typeof O=="string"&&d.d.D(O)},Lt.preinit=function(O,x){if(typeof O=="string"&&x&&typeof x.as=="string"){var M=x.as,F=_(M,x.crossOrigin),lt=typeof x.integrity=="string"?x.integrity:void 0,nt=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;M==="style"?d.d.S(O,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:F,integrity:lt,fetchPriority:nt}):M==="script"&&d.d.X(O,{crossOrigin:F,integrity:lt,fetchPriority:nt,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},Lt.preinitModule=function(O,x){if(typeof O=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var M=_(x.as,x.crossOrigin);d.d.M(O,{crossOrigin:M,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&d.d.M(O)},Lt.preload=function(O,x){if(typeof O=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var M=x.as,F=_(M,x.crossOrigin);d.d.L(O,M,{crossOrigin:F,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},Lt.preloadModule=function(O,x){if(typeof O=="string")if(x){var M=_(x.as,x.crossOrigin);d.d.m(O,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:M,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else d.d.m(O)},Lt.requestFormReset=function(O){d.d.r(O)},Lt.unstable_batchedUpdates=function(O,x){return O(x)},Lt.useFormState=function(O,x,M){return R.H.useFormState(O,x,M)},Lt.useFormStatus=function(){return R.H.useHostTransitionStatus()},Lt.version="19.1.1",Lt}var ad;function jm(){if(ad)return to.exports;ad=1;function A(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A)}catch(G){console.error(G)}}return A(),to.exports=Hm(),to.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nd;function Bm(){if(nd)return yn;nd=1;var A=_m(),G=eo(),Q=jm();function d(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function N(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function j(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function R(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function _(t){if(j(t)!==t)throw Error(d(188))}function O(t){var e=t.alternate;if(!e){if(e=j(t),e===null)throw Error(d(188));return e!==t?null:t}for(var l=t,a=e;;){var n=l.return;if(n===null)break;var u=n.alternate;if(u===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===u.child){for(u=n.child;u;){if(u===l)return _(n),t;if(u===a)return _(n),e;u=u.sibling}throw Error(d(188))}if(l.return!==a.return)l=n,a=u;else{for(var i=!1,c=n.child;c;){if(c===l){i=!0,l=n,a=u;break}if(c===a){i=!0,a=n,l=u;break}c=c.sibling}if(!i){for(c=u.child;c;){if(c===l){i=!0,l=u,a=n;break}if(c===a){i=!0,a=u,l=n;break}c=c.sibling}if(!i)throw Error(d(189))}}if(l.alternate!==a)throw Error(d(190))}if(l.tag!==3)throw Error(d(188));return l.stateNode.current===l?t:e}function x(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=x(t),e!==null)return e;t=t.sibling}return null}var M=Object.assign,F=Symbol.for("react.element"),lt=Symbol.for("react.transitional.element"),nt=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),ct=Symbol.for("react.profiler"),Ut=Symbol.for("react.provider"),Mt=Symbol.for("react.consumer"),yt=Symbol.for("react.context"),Kt=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),Jt=Symbol.for("react.suspense_list"),$t=Symbol.for("react.memo"),Wt=Symbol.for("react.lazy"),pe=Symbol.for("react.activity"),_l=Symbol.for("react.memo_cache_sentinel"),De=Symbol.iterator;function Bt(t){return t===null||typeof t!="object"?null:(t=De&&t[De]||t["@@iterator"],typeof t=="function"?t:null)}var ml=Symbol.for("react.client.reference");function hl(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ml?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case V:return"Fragment";case ct:return"Profiler";case Y:return"StrictMode";case I:return"Suspense";case Jt:return"SuspenseList";case pe:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case nt:return"Portal";case yt:return(t.displayName||"Context")+".Provider";case Mt:return(t._context.displayName||"Context")+".Consumer";case Kt:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $t:return e=t.displayName||null,e!==null?e:hl(t.type)||"Memo";case Wt:e=t._payload,t=t._init;try{return hl(t(e))}catch{}}return null}var qt=Array.isArray,y=G.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=Q.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L={pending:!1,data:null,method:null,action:null},rt=[],f=-1;function E(t){return{current:t}}function C(t){0>f||(t.current=rt[f],rt[f]=null,f--)}function D(t,e){f++,rt[f]=t.current,t.current=e}var B=E(null),tt=E(null),Z=E(null),Ft=E(null);function vt(t,e){switch(D(Z,e),D(tt,t),D(B,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Ar(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Ar(e),t=Mr(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}C(B),D(B,t)}function Xe(){C(B),C(tt),C(Z)}function Hu(t){t.memoizedState!==null&&D(Ft,t);var e=B.current,l=Mr(e,t.type);e!==l&&(D(tt,t),D(B,l))}function pn(t){tt.current===t&&(C(B),C(tt)),Ft.current===t&&(C(Ft),dn._currentValue=L)}var ju=Object.prototype.hasOwnProperty,Bu=A.unstable_scheduleCallback,qu=A.unstable_cancelCallback,cd=A.unstable_shouldYield,od=A.unstable_requestPaint,Se=A.unstable_now,fd=A.unstable_getCurrentPriorityLevel,lo=A.unstable_ImmediatePriority,ao=A.unstable_UserBlockingPriority,Sn=A.unstable_NormalPriority,sd=A.unstable_LowPriority,no=A.unstable_IdlePriority,rd=A.log,dd=A.unstable_setDisableYieldValue,pa=null,It=null;function Qe(t){if(typeof rd=="function"&&dd(t),It&&typeof It.setStrictMode=="function")try{It.setStrictMode(pa,t)}catch{}}var Pt=Math.clz32?Math.clz32:vd,md=Math.log,hd=Math.LN2;function vd(t){return t>>>=0,t===0?32:31-(md(t)/hd|0)|0}var xn=256,Tn=4194304;function vl(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function En(t,e,l){var a=t.pendingLanes;if(a===0)return 0;var n=0,u=t.suspendedLanes,i=t.pingedLanes;t=t.warmLanes;var c=a&134217727;return c!==0?(a=c&~u,a!==0?n=vl(a):(i&=c,i!==0?n=vl(i):l||(l=c&~t,l!==0&&(n=vl(l))))):(c=a&~u,c!==0?n=vl(c):i!==0?n=vl(i):l||(l=a&~t,l!==0&&(n=vl(l)))),n===0?0:e!==0&&e!==n&&(e&u)===0&&(u=n&-n,l=e&-e,u>=l||u===32&&(l&4194048)!==0)?e:n}function Sa(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function gd(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uo(){var t=xn;return xn<<=1,(xn&4194048)===0&&(xn=256),t}function io(){var t=Tn;return Tn<<=1,(Tn&62914560)===0&&(Tn=4194304),t}function wu(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function xa(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function bd(t,e,l,a,n,u){var i=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var c=t.entanglements,o=t.expirationTimes,h=t.hiddenUpdates;for(l=i&~l;0<l;){var b=31-Pt(l),T=1<<b;c[b]=0,o[b]=-1;var v=h[b];if(v!==null)for(h[b]=null,b=0;b<v.length;b++){var g=v[b];g!==null&&(g.lane&=-536870913)}l&=~T}a!==0&&co(t,a,0),u!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=u&~(i&~e))}function co(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-Pt(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&4194090}function oo(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-Pt(l),n=1<<a;n&e|t[a]&e&&(t[a]|=e),l&=~n}}function Yu(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Lu(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function fo(){var t=z.p;return t!==0?t:(t=window.event,t===void 0?32:Zr(t.type))}function yd(t,e){var l=z.p;try{return z.p=t,e()}finally{z.p=l}}var Ze=Math.random().toString(36).slice(2),wt="__reactFiber$"+Ze,Xt="__reactProps$"+Ze,Hl="__reactContainer$"+Ze,Gu="__reactEvents$"+Ze,pd="__reactListeners$"+Ze,Sd="__reactHandles$"+Ze,so="__reactResources$"+Ze,Ta="__reactMarker$"+Ze;function Xu(t){delete t[wt],delete t[Xt],delete t[Gu],delete t[pd],delete t[Sd]}function jl(t){var e=t[wt];if(e)return e;for(var l=t.parentNode;l;){if(e=l[Hl]||l[wt]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=Or(t);t!==null;){if(l=t[wt])return l;t=Or(t)}return e}t=l,l=t.parentNode}return null}function Bl(t){if(t=t[wt]||t[Hl]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function Ea(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(d(33))}function ql(t){var e=t[so];return e||(e=t[so]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Rt(t){t[Ta]=!0}var ro=new Set,mo={};function gl(t,e){wl(t,e),wl(t+"Capture",e)}function wl(t,e){for(mo[t]=e,t=0;t<e.length;t++)ro.add(e[t])}var xd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ho={},vo={};function Td(t){return ju.call(vo,t)?!0:ju.call(ho,t)?!1:xd.test(t)?vo[t]=!0:(ho[t]=!0,!1)}function An(t,e,l){if(Td(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function Mn(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function ze(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}var Qu,go;function Yl(t){if(Qu===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);Qu=e&&e[1]||"",go=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qu+t+go}var Zu=!1;function Vu(t,e){if(!t||Zu)return"";Zu=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var T=function(){throw Error()};if(Object.defineProperty(T.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(T,[])}catch(g){var v=g}Reflect.construct(t,[],T)}else{try{T.call()}catch(g){v=g}t.call(T.prototype)}}else{try{throw Error()}catch(g){v=g}(T=t())&&typeof T.catch=="function"&&T.catch(function(){})}}catch(g){if(g&&v&&typeof g.stack=="string")return[g.stack,v.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=a.DetermineComponentFrameRoot(),i=u[0],c=u[1];if(i&&c){var o=i.split(`
`),h=c.split(`
`);for(n=a=0;a<o.length&&!o[a].includes("DetermineComponentFrameRoot");)a++;for(;n<h.length&&!h[n].includes("DetermineComponentFrameRoot");)n++;if(a===o.length||n===h.length)for(a=o.length-1,n=h.length-1;1<=a&&0<=n&&o[a]!==h[n];)n--;for(;1<=a&&0<=n;a--,n--)if(o[a]!==h[n]){if(a!==1||n!==1)do if(a--,n--,0>n||o[a]!==h[n]){var b=`
`+o[a].replace(" at new "," at ");return t.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",t.displayName)),b}while(1<=a&&0<=n);break}}}finally{Zu=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?Yl(l):""}function Ed(t){switch(t.tag){case 26:case 27:case 5:return Yl(t.type);case 16:return Yl("Lazy");case 13:return Yl("Suspense");case 19:return Yl("SuspenseList");case 0:case 15:return Vu(t.type,!1);case 11:return Vu(t.type.render,!1);case 1:return Vu(t.type,!0);case 31:return Yl("Activity");default:return""}}function bo(t){try{var e="";do e+=Ed(t),t=t.return;while(t);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}function ce(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function yo(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ad(t){var e=yo(t)?"checked":"value",l=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),a=""+t[e];if(!t.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,u=l.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(i){a=""+i,u.call(this,i)}}),Object.defineProperty(t,e,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(i){a=""+i},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Dn(t){t._valueTracker||(t._valueTracker=Ad(t))}function po(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=yo(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function zn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Md=/[\n"\\]/g;function oe(t){return t.replace(Md,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function ku(t,e,l,a,n,u,i,c){t.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?t.type=i:t.removeAttribute("type"),e!=null?i==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+ce(e)):t.value!==""+ce(e)&&(t.value=""+ce(e)):i!=="submit"&&i!=="reset"||t.removeAttribute("value"),e!=null?Ku(t,i,ce(e)):l!=null?Ku(t,i,ce(l)):a!=null&&t.removeAttribute("value"),n==null&&u!=null&&(t.defaultChecked=!!u),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+ce(c):t.removeAttribute("name")}function So(t,e,l,a,n,u,i,c){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||l!=null){if(!(u!=="submit"&&u!=="reset"||e!=null))return;l=l!=null?""+ce(l):"",e=e!=null?""+ce(e):l,c||e===t.value||(t.value=e),t.defaultValue=e}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=c?t.checked:!!a,t.defaultChecked=!!a,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.name=i)}function Ku(t,e,l){e==="number"&&zn(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function Ll(t,e,l,a){if(t=t.options,e){e={};for(var n=0;n<l.length;n++)e["$"+l[n]]=!0;for(l=0;l<t.length;l++)n=e.hasOwnProperty("$"+t[l].value),t[l].selected!==n&&(t[l].selected=n),n&&a&&(t[l].defaultSelected=!0)}else{for(l=""+ce(l),e=null,n=0;n<t.length;n++){if(t[n].value===l){t[n].selected=!0,a&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function xo(t,e,l){if(e!=null&&(e=""+ce(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+ce(l):""}function To(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(d(92));if(qt(a)){if(1<a.length)throw Error(d(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=ce(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a)}function Gl(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var Dd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Eo(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||Dd.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function Ao(t,e,l){if(e!=null&&typeof e!="object")throw Error(d(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var n in e)a=e[n],e.hasOwnProperty(n)&&l[n]!==a&&Eo(t,n,a)}else for(var u in e)e.hasOwnProperty(u)&&Eo(t,u,e[u])}function Ju(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Rd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Rn(t){return Rd.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var $u=null;function Wu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Xl=null,Ql=null;function Mo(t){var e=Bl(t);if(e&&(t=e.stateNode)){var l=t[Xt]||null;t:switch(t=e.stateNode,e.type){case"input":if(ku(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+oe(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var n=a[Xt]||null;if(!n)throw Error(d(90));ku(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&po(a)}break t;case"textarea":xo(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&Ll(t,!!l.multiple,e,!1)}}}var Fu=!1;function Do(t,e,l){if(Fu)return t(e,l);Fu=!0;try{var a=t(e);return a}finally{if(Fu=!1,(Xl!==null||Ql!==null)&&(mu(),Xl&&(e=Xl,t=Ql,Ql=Xl=null,Mo(e),t)))for(e=0;e<t.length;e++)Mo(t[e])}}function Aa(t,e){var l=t.stateNode;if(l===null)return null;var a=l[Xt]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(d(231,e,typeof l));return l}var Re=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Iu=!1;if(Re)try{var Ma={};Object.defineProperty(Ma,"passive",{get:function(){Iu=!0}}),window.addEventListener("test",Ma,Ma),window.removeEventListener("test",Ma,Ma)}catch{Iu=!1}var Ve=null,Pu=null,On=null;function zo(){if(On)return On;var t,e=Pu,l=e.length,a,n="value"in Ve?Ve.value:Ve.textContent,u=n.length;for(t=0;t<l&&e[t]===n[t];t++);var i=l-t;for(a=1;a<=i&&e[l-a]===n[u-a];a++);return On=n.slice(t,1<a?1-a:void 0)}function Cn(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Nn(){return!0}function Ro(){return!1}function Qt(t){function e(l,a,n,u,i){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=u,this.target=i,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(l=t[c],this[c]=l?l(u):u[c]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Nn:Ro,this.isPropagationStopped=Ro,this}return M(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Nn)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Nn)},persist:function(){},isPersistent:Nn}),e}var bl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Un=Qt(bl),Da=M({},bl,{view:0,detail:0}),Od=Qt(Da),ti,ei,za,_n=M({},Da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ai,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==za&&(za&&t.type==="mousemove"?(ti=t.screenX-za.screenX,ei=t.screenY-za.screenY):ei=ti=0,za=t),ti)},movementY:function(t){return"movementY"in t?t.movementY:ei}}),Oo=Qt(_n),Cd=M({},_n,{dataTransfer:0}),Nd=Qt(Cd),Ud=M({},Da,{relatedTarget:0}),li=Qt(Ud),_d=M({},bl,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=Qt(_d),jd=M({},bl,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Bd=Qt(jd),qd=M({},bl,{data:0}),Co=Qt(qd),wd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ld={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gd(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ld[t])?!!e[t]:!1}function ai(){return Gd}var Xd=M({},Da,{key:function(t){if(t.key){var e=wd[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Cn(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Yd[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ai,charCode:function(t){return t.type==="keypress"?Cn(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Cn(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Qd=Qt(Xd),Zd=M({},_n,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),No=Qt(Zd),Vd=M({},Da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ai}),kd=Qt(Vd),Kd=M({},bl,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jd=Qt(Kd),$d=M({},_n,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Wd=Qt($d),Fd=M({},bl,{newState:0,oldState:0}),Id=Qt(Fd),Pd=[9,13,27,32],ni=Re&&"CompositionEvent"in window,Ra=null;Re&&"documentMode"in document&&(Ra=document.documentMode);var t0=Re&&"TextEvent"in window&&!Ra,Uo=Re&&(!ni||Ra&&8<Ra&&11>=Ra),_o=" ",Ho=!1;function jo(t,e){switch(t){case"keyup":return Pd.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bo(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zl=!1;function e0(t,e){switch(t){case"compositionend":return Bo(e);case"keypress":return e.which!==32?null:(Ho=!0,_o);case"textInput":return t=e.data,t===_o&&Ho?null:t;default:return null}}function l0(t,e){if(Zl)return t==="compositionend"||!ni&&jo(t,e)?(t=zo(),On=Pu=Ve=null,Zl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Uo&&e.locale!=="ko"?null:e.data;default:return null}}var a0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qo(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!a0[t.type]:e==="textarea"}function wo(t,e,l,a){Xl?Ql?Ql.push(a):Ql=[a]:Xl=a,e=pu(e,"onChange"),0<e.length&&(l=new Un("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var Oa=null,Ca=null;function n0(t){pr(t,0)}function Hn(t){var e=Ea(t);if(po(e))return t}function Yo(t,e){if(t==="change")return e}var Lo=!1;if(Re){var ui;if(Re){var ii="oninput"in document;if(!ii){var Go=document.createElement("div");Go.setAttribute("oninput","return;"),ii=typeof Go.oninput=="function"}ui=ii}else ui=!1;Lo=ui&&(!document.documentMode||9<document.documentMode)}function Xo(){Oa&&(Oa.detachEvent("onpropertychange",Qo),Ca=Oa=null)}function Qo(t){if(t.propertyName==="value"&&Hn(Ca)){var e=[];wo(e,Ca,t,Wu(t)),Do(n0,e)}}function u0(t,e,l){t==="focusin"?(Xo(),Oa=e,Ca=l,Oa.attachEvent("onpropertychange",Qo)):t==="focusout"&&Xo()}function i0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hn(Ca)}function c0(t,e){if(t==="click")return Hn(e)}function o0(t,e){if(t==="input"||t==="change")return Hn(e)}function f0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var te=typeof Object.is=="function"?Object.is:f0;function Na(t,e){if(te(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!ju.call(e,n)||!te(t[n],e[n]))return!1}return!0}function Zo(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vo(t,e){var l=Zo(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=Zo(l)}}function ko(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ko(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ko(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=zn(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=zn(t.document)}return e}function ci(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var s0=Re&&"documentMode"in document&&11>=document.documentMode,Vl=null,oi=null,Ua=null,fi=!1;function Jo(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;fi||Vl==null||Vl!==zn(a)||(a=Vl,"selectionStart"in a&&ci(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ua&&Na(Ua,a)||(Ua=a,a=pu(oi,"onSelect"),0<a.length&&(e=new Un("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=Vl)))}function yl(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var kl={animationend:yl("Animation","AnimationEnd"),animationiteration:yl("Animation","AnimationIteration"),animationstart:yl("Animation","AnimationStart"),transitionrun:yl("Transition","TransitionRun"),transitionstart:yl("Transition","TransitionStart"),transitioncancel:yl("Transition","TransitionCancel"),transitionend:yl("Transition","TransitionEnd")},si={},$o={};Re&&($o=document.createElement("div").style,"AnimationEvent"in window||(delete kl.animationend.animation,delete kl.animationiteration.animation,delete kl.animationstart.animation),"TransitionEvent"in window||delete kl.transitionend.transition);function pl(t){if(si[t])return si[t];if(!kl[t])return t;var e=kl[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in $o)return si[t]=e[l];return t}var Wo=pl("animationend"),Fo=pl("animationiteration"),Io=pl("animationstart"),r0=pl("transitionrun"),d0=pl("transitionstart"),m0=pl("transitioncancel"),Po=pl("transitionend"),tf=new Map,ri="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ri.push("scrollEnd");function ge(t,e){tf.set(t,e),gl(e,[t])}var ef=new WeakMap;function fe(t,e){if(typeof t=="object"&&t!==null){var l=ef.get(t);return l!==void 0?l:(e={value:t,source:e,stack:bo(e)},ef.set(t,e),e)}return{value:t,source:e,stack:bo(e)}}var se=[],Kl=0,di=0;function jn(){for(var t=Kl,e=di=Kl=0;e<t;){var l=se[e];se[e++]=null;var a=se[e];se[e++]=null;var n=se[e];se[e++]=null;var u=se[e];if(se[e++]=null,a!==null&&n!==null){var i=a.pending;i===null?n.next=n:(n.next=i.next,i.next=n),a.pending=n}u!==0&&lf(l,n,u)}}function Bn(t,e,l,a){se[Kl++]=t,se[Kl++]=e,se[Kl++]=l,se[Kl++]=a,di|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function mi(t,e,l,a){return Bn(t,e,l,a),qn(t)}function Jl(t,e){return Bn(t,null,null,e),qn(t)}function lf(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var n=!1,u=t.return;u!==null;)u.childLanes|=l,a=u.alternate,a!==null&&(a.childLanes|=l),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(n=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,n&&e!==null&&(n=31-Pt(l),t=u.hiddenUpdates,a=t[n],a===null?t[n]=[e]:a.push(e),e.lane=l|536870912),u):null}function qn(t){if(50<an)throw an=0,pc=null,Error(d(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var $l={};function h0(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ee(t,e,l,a){return new h0(t,e,l,a)}function hi(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Oe(t,e){var l=t.alternate;return l===null?(l=ee(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function af(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function wn(t,e,l,a,n,u){var i=0;if(a=t,typeof t=="function")hi(t)&&(i=1);else if(typeof t=="string")i=gm(t,l,B.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case pe:return t=ee(31,l,e,n),t.elementType=pe,t.lanes=u,t;case V:return Sl(l.children,n,u,e);case Y:i=8,n|=24;break;case ct:return t=ee(12,l,e,n|2),t.elementType=ct,t.lanes=u,t;case I:return t=ee(13,l,e,n),t.elementType=I,t.lanes=u,t;case Jt:return t=ee(19,l,e,n),t.elementType=Jt,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ut:case yt:i=10;break t;case Mt:i=9;break t;case Kt:i=11;break t;case $t:i=14;break t;case Wt:i=16,a=null;break t}i=29,l=Error(d(130,t===null?"null":typeof t,"")),a=null}return e=ee(i,l,e,n),e.elementType=t,e.type=a,e.lanes=u,e}function Sl(t,e,l,a){return t=ee(7,t,a,e),t.lanes=l,t}function vi(t,e,l){return t=ee(6,t,null,e),t.lanes=l,t}function gi(t,e,l){return e=ee(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Wl=[],Fl=0,Yn=null,Ln=0,re=[],de=0,xl=null,Ce=1,Ne="";function Tl(t,e){Wl[Fl++]=Ln,Wl[Fl++]=Yn,Yn=t,Ln=e}function nf(t,e,l){re[de++]=Ce,re[de++]=Ne,re[de++]=xl,xl=t;var a=Ce;t=Ne;var n=32-Pt(a)-1;a&=~(1<<n),l+=1;var u=32-Pt(e)+n;if(30<u){var i=n-n%5;u=(a&(1<<i)-1).toString(32),a>>=i,n-=i,Ce=1<<32-Pt(e)+n|l<<n|a,Ne=u+t}else Ce=1<<u|l<<n|a,Ne=t}function bi(t){t.return!==null&&(Tl(t,1),nf(t,1,0))}function yi(t){for(;t===Yn;)Yn=Wl[--Fl],Wl[Fl]=null,Ln=Wl[--Fl],Wl[Fl]=null;for(;t===xl;)xl=re[--de],re[de]=null,Ne=re[--de],re[de]=null,Ce=re[--de],re[de]=null}var Gt=null,pt=null,at=!1,El=null,xe=!1,pi=Error(d(519));function Al(t){var e=Error(d(418,""));throw ja(fe(e,t)),pi}function uf(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[wt]=t,e[Xt]=a,l){case"dialog":W("cancel",e),W("close",e);break;case"iframe":case"object":case"embed":W("load",e);break;case"video":case"audio":for(l=0;l<un.length;l++)W(un[l],e);break;case"source":W("error",e);break;case"img":case"image":case"link":W("error",e),W("load",e);break;case"details":W("toggle",e);break;case"input":W("invalid",e),So(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),Dn(e);break;case"select":W("invalid",e);break;case"textarea":W("invalid",e),To(e,a.value,a.defaultValue,a.children),Dn(e)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||Er(e.textContent,l)?(a.popover!=null&&(W("beforetoggle",e),W("toggle",e)),a.onScroll!=null&&W("scroll",e),a.onScrollEnd!=null&&W("scrollend",e),a.onClick!=null&&(e.onclick=Su),e=!0):e=!1,e||Al(t)}function cf(t){for(Gt=t.return;Gt;)switch(Gt.tag){case 5:case 13:xe=!1;return;case 27:case 3:xe=!0;return;default:Gt=Gt.return}}function _a(t){if(t!==Gt)return!1;if(!at)return cf(t),at=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||jc(t.type,t.memoizedProps)),l=!l),l&&pt&&Al(t),cf(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(d(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(l=t.data,l==="/$"){if(e===0){pt=ye(t.nextSibling);break t}e--}else l!=="$"&&l!=="$!"&&l!=="$?"||e++;t=t.nextSibling}pt=null}}else e===27?(e=pt,cl(t.type)?(t=Yc,Yc=null,pt=t):pt=e):pt=Gt?ye(t.stateNode.nextSibling):null;return!0}function Ha(){pt=Gt=null,at=!1}function of(){var t=El;return t!==null&&(kt===null?kt=t:kt.push.apply(kt,t),El=null),t}function ja(t){El===null?El=[t]:El.push(t)}var Si=E(null),Ml=null,Ue=null;function ke(t,e,l){D(Si,e._currentValue),e._currentValue=l}function _e(t){t._currentValue=Si.current,C(Si)}function xi(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function Ti(t,e,l,a){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var u=n.dependencies;if(u!==null){var i=n.child;u=u.firstContext;t:for(;u!==null;){var c=u;u=n;for(var o=0;o<e.length;o++)if(c.context===e[o]){u.lanes|=l,c=u.alternate,c!==null&&(c.lanes|=l),xi(u.return,l,t),a||(i=null);break t}u=c.next}}else if(n.tag===18){if(i=n.return,i===null)throw Error(d(341));i.lanes|=l,u=i.alternate,u!==null&&(u.lanes|=l),xi(i,l,t),i=null}else i=n.child;if(i!==null)i.return=n;else for(i=n;i!==null;){if(i===t){i=null;break}if(n=i.sibling,n!==null){n.return=i.return,i=n;break}i=i.return}n=i}}function Ba(t,e,l,a){t=null;for(var n=e,u=!1;n!==null;){if(!u){if((n.flags&524288)!==0)u=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var i=n.alternate;if(i===null)throw Error(d(387));if(i=i.memoizedProps,i!==null){var c=n.type;te(n.pendingProps.value,i.value)||(t!==null?t.push(c):t=[c])}}else if(n===Ft.current){if(i=n.alternate,i===null)throw Error(d(387));i.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(dn):t=[dn])}n=n.return}t!==null&&Ti(e,t,l,a),e.flags|=262144}function Gn(t){for(t=t.firstContext;t!==null;){if(!te(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Dl(t){Ml=t,Ue=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Yt(t){return ff(Ml,t)}function Xn(t,e){return Ml===null&&Dl(t),ff(t,e)}function ff(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},Ue===null){if(t===null)throw Error(d(308));Ue=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Ue=Ue.next=e;return l}var v0=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},g0=A.unstable_scheduleCallback,b0=A.unstable_NormalPriority,Dt={$$typeof:yt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ei(){return{controller:new v0,data:new Map,refCount:0}}function qa(t){t.refCount--,t.refCount===0&&g0(b0,function(){t.controller.abort()})}var wa=null,Ai=0,Il=0,Pl=null;function y0(t,e){if(wa===null){var l=wa=[];Ai=0,Il=Dc(),Pl={status:"pending",value:void 0,then:function(a){l.push(a)}}}return Ai++,e.then(sf,sf),e}function sf(){if(--Ai===0&&wa!==null){Pl!==null&&(Pl.status="fulfilled");var t=wa;wa=null,Il=0,Pl=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function p0(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var n=0;n<l.length;n++)(0,l[n])(e)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var rf=y.S;y.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&y0(t,e),rf!==null&&rf(t,e)};var zl=E(null);function Mi(){var t=zl.current;return t!==null?t:mt.pooledCache}function Qn(t,e){e===null?D(zl,zl.current):D(zl,e.pool)}function df(){var t=Mi();return t===null?null:{parent:Dt._currentValue,pool:t}}var Ya=Error(d(460)),mf=Error(d(474)),Zn=Error(d(542)),Di={then:function(){}};function hf(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Vn(){}function vf(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(Vn,Vn),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,bf(t),t;default:if(typeof e.status=="string")e.then(Vn,Vn);else{if(t=mt,t!==null&&100<t.shellSuspendCounter)throw Error(d(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=a}},function(a){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,bf(t),t}throw La=e,Ya}}var La=null;function gf(){if(La===null)throw Error(d(459));var t=La;return La=null,t}function bf(t){if(t===Ya||t===Zn)throw Error(d(483))}var Ke=!1;function zi(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ri(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Je(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function $e(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(ut&2)!==0){var n=a.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),a.pending=e,e=qn(t),lf(t,null,l),e}return Bn(t,a,e,l),qn(t)}function Ga(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,oo(t,l)}}function Oi(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,u=null;if(l=l.firstBaseUpdate,l!==null){do{var i={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};u===null?n=u=i:u=u.next=i,l=l.next}while(l!==null);u===null?n=u=e:u=u.next=e}else n=u=e;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:u,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var Ci=!1;function Xa(){if(Ci){var t=Pl;if(t!==null)throw t}}function Qa(t,e,l,a){Ci=!1;var n=t.updateQueue;Ke=!1;var u=n.firstBaseUpdate,i=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var o=c,h=o.next;o.next=null,i===null?u=h:i.next=h,i=o;var b=t.alternate;b!==null&&(b=b.updateQueue,c=b.lastBaseUpdate,c!==i&&(c===null?b.firstBaseUpdate=h:c.next=h,b.lastBaseUpdate=o))}if(u!==null){var T=n.baseState;i=0,b=h=o=null,c=u;do{var v=c.lane&-536870913,g=v!==c.lane;if(g?(P&v)===v:(a&v)===v){v!==0&&v===Il&&(Ci=!0),b!==null&&(b=b.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var X=t,q=c;v=e;var st=l;switch(q.tag){case 1:if(X=q.payload,typeof X=="function"){T=X.call(st,T,v);break t}T=X;break t;case 3:X.flags=X.flags&-65537|128;case 0:if(X=q.payload,v=typeof X=="function"?X.call(st,T,v):X,v==null)break t;T=M({},T,v);break t;case 2:Ke=!0}}v=c.callback,v!==null&&(t.flags|=64,g&&(t.flags|=8192),g=n.callbacks,g===null?n.callbacks=[v]:g.push(v))}else g={lane:v,tag:c.tag,payload:c.payload,callback:c.callback,next:null},b===null?(h=b=g,o=T):b=b.next=g,i|=v;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;g=c,c=g.next,g.next=null,n.lastBaseUpdate=g,n.shared.pending=null}}while(!0);b===null&&(o=T),n.baseState=o,n.firstBaseUpdate=h,n.lastBaseUpdate=b,u===null&&(n.shared.lanes=0),al|=i,t.lanes=i,t.memoizedState=T}}function yf(t,e){if(typeof t!="function")throw Error(d(191,t));t.call(e)}function pf(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)yf(l[t],e)}var ta=E(null),kn=E(0);function Sf(t,e){t=Le,D(kn,t),D(ta,e),Le=t|e.baseLanes}function Ni(){D(kn,Le),D(ta,ta.current)}function Ui(){Le=kn.current,C(ta),C(kn)}var We=0,K=null,ot=null,Et=null,Kn=!1,ea=!1,Rl=!1,Jn=0,Za=0,la=null,S0=0;function xt(){throw Error(d(321))}function _i(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!te(t[l],e[l]))return!1;return!0}function Hi(t,e,l,a,n,u){return We=u,K=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,y.H=t===null||t.memoizedState===null?as:ns,Rl=!1,u=l(a,n),Rl=!1,ea&&(u=Tf(e,l,a,n)),xf(t),u}function xf(t){y.H=tu;var e=ot!==null&&ot.next!==null;if(We=0,Et=ot=K=null,Kn=!1,Za=0,la=null,e)throw Error(d(300));t===null||Ot||(t=t.dependencies,t!==null&&Gn(t)&&(Ot=!0))}function Tf(t,e,l,a){K=t;var n=0;do{if(ea&&(la=null),Za=0,ea=!1,25<=n)throw Error(d(301));if(n+=1,Et=ot=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}y.H=z0,u=e(l,a)}while(ea);return u}function x0(){var t=y.H,e=t.useState()[0];return e=typeof e.then=="function"?Va(e):e,t=t.useState()[0],(ot!==null?ot.memoizedState:null)!==t&&(K.flags|=1024),e}function ji(){var t=Jn!==0;return Jn=0,t}function Bi(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function qi(t){if(Kn){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Kn=!1}We=0,Et=ot=K=null,ea=!1,Za=Jn=0,la=null}function Zt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?K.memoizedState=Et=t:Et=Et.next=t,Et}function At(){if(ot===null){var t=K.alternate;t=t!==null?t.memoizedState:null}else t=ot.next;var e=Et===null?K.memoizedState:Et.next;if(e!==null)Et=e,ot=t;else{if(t===null)throw K.alternate===null?Error(d(467)):Error(d(310));ot=t,t={memoizedState:ot.memoizedState,baseState:ot.baseState,baseQueue:ot.baseQueue,queue:ot.queue,next:null},Et===null?K.memoizedState=Et=t:Et=Et.next=t}return Et}function wi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Va(t){var e=Za;return Za+=1,la===null&&(la=[]),t=vf(la,t,e),e=K,(Et===null?e.memoizedState:Et.next)===null&&(e=e.alternate,y.H=e===null||e.memoizedState===null?as:ns),t}function $n(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Va(t);if(t.$$typeof===yt)return Yt(t)}throw Error(d(438,String(t)))}function Yi(t){var e=null,l=K.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=K.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=wi(),K.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=_l;return e.index++,l}function He(t,e){return typeof e=="function"?e(t):e}function Wn(t){var e=At();return Li(e,ot,t)}function Li(t,e,l){var a=t.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=l;var n=t.baseQueue,u=a.pending;if(u!==null){if(n!==null){var i=n.next;n.next=u.next,u.next=i}e.baseQueue=n=u,a.pending=null}if(u=t.baseState,n===null)t.memoizedState=u;else{e=n.next;var c=i=null,o=null,h=e,b=!1;do{var T=h.lane&-536870913;if(T!==h.lane?(P&T)===T:(We&T)===T){var v=h.revertLane;if(v===0)o!==null&&(o=o.next={lane:0,revertLane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),T===Il&&(b=!0);else if((We&v)===v){h=h.next,v===Il&&(b=!0);continue}else T={lane:0,revertLane:h.revertLane,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},o===null?(c=o=T,i=u):o=o.next=T,K.lanes|=v,al|=v;T=h.action,Rl&&l(u,T),u=h.hasEagerState?h.eagerState:l(u,T)}else v={lane:T,revertLane:h.revertLane,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},o===null?(c=o=v,i=u):o=o.next=v,K.lanes|=T,al|=T;h=h.next}while(h!==null&&h!==e);if(o===null?i=u:o.next=c,!te(u,t.memoizedState)&&(Ot=!0,b&&(l=Pl,l!==null)))throw l;t.memoizedState=u,t.baseState=i,t.baseQueue=o,a.lastRenderedState=u}return n===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function Gi(t){var e=At(),l=e.queue;if(l===null)throw Error(d(311));l.lastRenderedReducer=t;var a=l.dispatch,n=l.pending,u=e.memoizedState;if(n!==null){l.pending=null;var i=n=n.next;do u=t(u,i.action),i=i.next;while(i!==n);te(u,e.memoizedState)||(Ot=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),l.lastRenderedState=u}return[u,a]}function Ef(t,e,l){var a=K,n=At(),u=at;if(u){if(l===void 0)throw Error(d(407));l=l()}else l=e();var i=!te((ot||n).memoizedState,l);i&&(n.memoizedState=l,Ot=!0),n=n.queue;var c=Df.bind(null,a,n,t);if(ka(2048,8,c,[t]),n.getSnapshot!==e||i||Et!==null&&Et.memoizedState.tag&1){if(a.flags|=2048,aa(9,Fn(),Mf.bind(null,a,n,l,e),null),mt===null)throw Error(d(349));u||(We&124)!==0||Af(a,e,l)}return l}function Af(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=K.updateQueue,e===null?(e=wi(),K.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function Mf(t,e,l,a){e.value=l,e.getSnapshot=a,zf(e)&&Rf(t)}function Df(t,e,l){return l(function(){zf(e)&&Rf(t)})}function zf(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!te(t,l)}catch{return!0}}function Rf(t){var e=Jl(t,2);e!==null&&ie(e,t,2)}function Xi(t){var e=Zt();if(typeof t=="function"){var l=t;if(t=l(),Rl){Qe(!0);try{l()}finally{Qe(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:He,lastRenderedState:t},e}function Of(t,e,l,a){return t.baseState=l,Li(t,ot,typeof a=="function"?a:He)}function T0(t,e,l,a,n){if(Pn(t))throw Error(d(485));if(t=e.action,t!==null){var u={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){u.listeners.push(i)}};y.T!==null?l(!0):u.isTransition=!1,a(u),l=e.pending,l===null?(u.next=e.pending=u,Cf(e,u)):(u.next=l.next,e.pending=l.next=u)}}function Cf(t,e){var l=e.action,a=e.payload,n=t.state;if(e.isTransition){var u=y.T,i={};y.T=i;try{var c=l(n,a),o=y.S;o!==null&&o(i,c),Nf(t,e,c)}catch(h){Qi(t,e,h)}finally{y.T=u}}else try{u=l(n,a),Nf(t,e,u)}catch(h){Qi(t,e,h)}}function Nf(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Uf(t,e,a)},function(a){return Qi(t,e,a)}):Uf(t,e,l)}function Uf(t,e,l){e.status="fulfilled",e.value=l,_f(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,Cf(t,l)))}function Qi(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,_f(e),e=e.next;while(e!==a)}t.action=null}function _f(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Hf(t,e){return e}function jf(t,e){if(at){var l=mt.formState;if(l!==null){t:{var a=K;if(at){if(pt){e:{for(var n=pt,u=xe;n.nodeType!==8;){if(!u){n=null;break e}if(n=ye(n.nextSibling),n===null){n=null;break e}}u=n.data,n=u==="F!"||u==="F"?n:null}if(n){pt=ye(n.nextSibling),a=n.data==="F!";break t}}Al(a)}a=!1}a&&(e=l[0])}}return l=Zt(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hf,lastRenderedState:e},l.queue=a,l=ts.bind(null,K,a),a.dispatch=l,a=Xi(!1),u=Ji.bind(null,K,!1,a.queue),a=Zt(),n={state:e,dispatch:null,action:t,pending:null},a.queue=n,l=T0.bind(null,K,n,u,l),n.dispatch=l,a.memoizedState=t,[e,l,!1]}function Bf(t){var e=At();return qf(e,ot,t)}function qf(t,e,l){if(e=Li(t,e,Hf)[0],t=Wn(He)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=Va(e)}catch(i){throw i===Ya?Zn:i}else a=e;e=At();var n=e.queue,u=n.dispatch;return l!==e.memoizedState&&(K.flags|=2048,aa(9,Fn(),E0.bind(null,n,l),null)),[a,u,t]}function E0(t,e){t.action=e}function wf(t){var e=At(),l=ot;if(l!==null)return qf(e,l,t);At(),e=e.memoizedState,l=At();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function aa(t,e,l,a){return t={tag:t,create:l,deps:a,inst:e,next:null},e=K.updateQueue,e===null&&(e=wi(),K.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function Fn(){return{destroy:void 0,resource:void 0}}function Yf(){return At().memoizedState}function In(t,e,l,a){var n=Zt();a=a===void 0?null:a,K.flags|=t,n.memoizedState=aa(1|e,Fn(),l,a)}function ka(t,e,l,a){var n=At();a=a===void 0?null:a;var u=n.memoizedState.inst;ot!==null&&a!==null&&_i(a,ot.memoizedState.deps)?n.memoizedState=aa(e,u,l,a):(K.flags|=t,n.memoizedState=aa(1|e,u,l,a))}function Lf(t,e){In(8390656,8,t,e)}function Gf(t,e){ka(2048,8,t,e)}function Xf(t,e){return ka(4,2,t,e)}function Qf(t,e){return ka(4,4,t,e)}function Zf(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Vf(t,e,l){l=l!=null?l.concat([t]):null,ka(4,4,Zf.bind(null,e,t),l)}function Zi(){}function kf(t,e){var l=At();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&_i(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function Kf(t,e){var l=At();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&_i(e,a[1]))return a[0];if(a=t(),Rl){Qe(!0);try{t()}finally{Qe(!1)}}return l.memoizedState=[a,e],a}function Vi(t,e,l){return l===void 0||(We&1073741824)!==0?t.memoizedState=e:(t.memoizedState=l,t=Ws(),K.lanes|=t,al|=t,l)}function Jf(t,e,l,a){return te(l,e)?l:ta.current!==null?(t=Vi(t,l,a),te(t,e)||(Ot=!0),t):(We&42)===0?(Ot=!0,t.memoizedState=l):(t=Ws(),K.lanes|=t,al|=t,e)}function $f(t,e,l,a,n){var u=z.p;z.p=u!==0&&8>u?u:8;var i=y.T,c={};y.T=c,Ji(t,!1,e,l);try{var o=n(),h=y.S;if(h!==null&&h(c,o),o!==null&&typeof o=="object"&&typeof o.then=="function"){var b=p0(o,a);Ka(t,e,b,ue(t))}else Ka(t,e,a,ue(t))}catch(T){Ka(t,e,{then:function(){},status:"rejected",reason:T},ue())}finally{z.p=u,y.T=i}}function A0(){}function ki(t,e,l,a){if(t.tag!==5)throw Error(d(476));var n=Wf(t).queue;$f(t,n,e,L,l===null?A0:function(){return Ff(t),l(a)})}function Wf(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:L,baseState:L,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:He,lastRenderedState:L},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:He,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Ff(t){var e=Wf(t).next.queue;Ka(t,e,{},ue())}function Ki(){return Yt(dn)}function If(){return At().memoizedState}function Pf(){return At().memoizedState}function M0(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=ue();t=Je(l);var a=$e(e,t,l);a!==null&&(ie(a,e,l),Ga(a,e,l)),e={cache:Ei()},t.payload=e;return}e=e.return}}function D0(t,e,l){var a=ue();l={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null},Pn(t)?es(e,l):(l=mi(t,e,l,a),l!==null&&(ie(l,t,a),ls(l,e,a)))}function ts(t,e,l){var a=ue();Ka(t,e,l,a)}function Ka(t,e,l,a){var n={lane:a,revertLane:0,action:l,hasEagerState:!1,eagerState:null,next:null};if(Pn(t))es(e,n);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var i=e.lastRenderedState,c=u(i,l);if(n.hasEagerState=!0,n.eagerState=c,te(c,i))return Bn(t,e,n,0),mt===null&&jn(),!1}catch{}finally{}if(l=mi(t,e,n,a),l!==null)return ie(l,t,a),ls(l,e,a),!0}return!1}function Ji(t,e,l,a){if(a={lane:2,revertLane:Dc(),action:a,hasEagerState:!1,eagerState:null,next:null},Pn(t)){if(e)throw Error(d(479))}else e=mi(t,l,a,2),e!==null&&ie(e,t,2)}function Pn(t){var e=t.alternate;return t===K||e!==null&&e===K}function es(t,e){ea=Kn=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function ls(t,e,l){if((l&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,oo(t,l)}}var tu={readContext:Yt,use:$n,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useLayoutEffect:xt,useInsertionEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useSyncExternalStore:xt,useId:xt,useHostTransitionStatus:xt,useFormState:xt,useActionState:xt,useOptimistic:xt,useMemoCache:xt,useCacheRefresh:xt},as={readContext:Yt,use:$n,useCallback:function(t,e){return Zt().memoizedState=[t,e===void 0?null:e],t},useContext:Yt,useEffect:Lf,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,In(4194308,4,Zf.bind(null,e,t),l)},useLayoutEffect:function(t,e){return In(4194308,4,t,e)},useInsertionEffect:function(t,e){In(4,2,t,e)},useMemo:function(t,e){var l=Zt();e=e===void 0?null:e;var a=t();if(Rl){Qe(!0);try{t()}finally{Qe(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=Zt();if(l!==void 0){var n=l(e);if(Rl){Qe(!0);try{l(e)}finally{Qe(!1)}}}else n=e;return a.memoizedState=a.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},a.queue=t,t=t.dispatch=D0.bind(null,K,t),[a.memoizedState,t]},useRef:function(t){var e=Zt();return t={current:t},e.memoizedState=t},useState:function(t){t=Xi(t);var e=t.queue,l=ts.bind(null,K,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:Zi,useDeferredValue:function(t,e){var l=Zt();return Vi(l,t,e)},useTransition:function(){var t=Xi(!1);return t=$f.bind(null,K,t.queue,!0,!1),Zt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=K,n=Zt();if(at){if(l===void 0)throw Error(d(407));l=l()}else{if(l=e(),mt===null)throw Error(d(349));(P&124)!==0||Af(a,e,l)}n.memoizedState=l;var u={value:l,getSnapshot:e};return n.queue=u,Lf(Df.bind(null,a,u,t),[t]),a.flags|=2048,aa(9,Fn(),Mf.bind(null,a,u,l,e),null),l},useId:function(){var t=Zt(),e=mt.identifierPrefix;if(at){var l=Ne,a=Ce;l=(a&~(1<<32-Pt(a)-1)).toString(32)+l,e="«"+e+"R"+l,l=Jn++,0<l&&(e+="H"+l.toString(32)),e+="»"}else l=S0++,e="«"+e+"r"+l.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:Ki,useFormState:jf,useActionState:jf,useOptimistic:function(t){var e=Zt();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=Ji.bind(null,K,!0,l),l.dispatch=e,[t,e]},useMemoCache:Yi,useCacheRefresh:function(){return Zt().memoizedState=M0.bind(null,K)}},ns={readContext:Yt,use:$n,useCallback:kf,useContext:Yt,useEffect:Gf,useImperativeHandle:Vf,useInsertionEffect:Xf,useLayoutEffect:Qf,useMemo:Kf,useReducer:Wn,useRef:Yf,useState:function(){return Wn(He)},useDebugValue:Zi,useDeferredValue:function(t,e){var l=At();return Jf(l,ot.memoizedState,t,e)},useTransition:function(){var t=Wn(He)[0],e=At().memoizedState;return[typeof t=="boolean"?t:Va(t),e]},useSyncExternalStore:Ef,useId:If,useHostTransitionStatus:Ki,useFormState:Bf,useActionState:Bf,useOptimistic:function(t,e){var l=At();return Of(l,ot,t,e)},useMemoCache:Yi,useCacheRefresh:Pf},z0={readContext:Yt,use:$n,useCallback:kf,useContext:Yt,useEffect:Gf,useImperativeHandle:Vf,useInsertionEffect:Xf,useLayoutEffect:Qf,useMemo:Kf,useReducer:Gi,useRef:Yf,useState:function(){return Gi(He)},useDebugValue:Zi,useDeferredValue:function(t,e){var l=At();return ot===null?Vi(l,t,e):Jf(l,ot.memoizedState,t,e)},useTransition:function(){var t=Gi(He)[0],e=At().memoizedState;return[typeof t=="boolean"?t:Va(t),e]},useSyncExternalStore:Ef,useId:If,useHostTransitionStatus:Ki,useFormState:wf,useActionState:wf,useOptimistic:function(t,e){var l=At();return ot!==null?Of(l,ot,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:Yi,useCacheRefresh:Pf},na=null,Ja=0;function eu(t){var e=Ja;return Ja+=1,na===null&&(na=[]),vf(na,t,e)}function $a(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function lu(t,e){throw e.$$typeof===F?Error(d(525)):(t=Object.prototype.toString.call(e),Error(d(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function us(t){var e=t._init;return e(t._payload)}function is(t){function e(r,s){if(t){var m=r.deletions;m===null?(r.deletions=[s],r.flags|=16):m.push(s)}}function l(r,s){if(!t)return null;for(;s!==null;)e(r,s),s=s.sibling;return null}function a(r){for(var s=new Map;r!==null;)r.key!==null?s.set(r.key,r):s.set(r.index,r),r=r.sibling;return s}function n(r,s){return r=Oe(r,s),r.index=0,r.sibling=null,r}function u(r,s,m){return r.index=m,t?(m=r.alternate,m!==null?(m=m.index,m<s?(r.flags|=67108866,s):m):(r.flags|=67108866,s)):(r.flags|=1048576,s)}function i(r){return t&&r.alternate===null&&(r.flags|=67108866),r}function c(r,s,m,p){return s===null||s.tag!==6?(s=vi(m,r.mode,p),s.return=r,s):(s=n(s,m),s.return=r,s)}function o(r,s,m,p){var U=m.type;return U===V?b(r,s,m.props.children,p,m.key):s!==null&&(s.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Wt&&us(U)===s.type)?(s=n(s,m.props),$a(s,m),s.return=r,s):(s=wn(m.type,m.key,m.props,null,r.mode,p),$a(s,m),s.return=r,s)}function h(r,s,m,p){return s===null||s.tag!==4||s.stateNode.containerInfo!==m.containerInfo||s.stateNode.implementation!==m.implementation?(s=gi(m,r.mode,p),s.return=r,s):(s=n(s,m.children||[]),s.return=r,s)}function b(r,s,m,p,U){return s===null||s.tag!==7?(s=Sl(m,r.mode,p,U),s.return=r,s):(s=n(s,m),s.return=r,s)}function T(r,s,m){if(typeof s=="string"&&s!==""||typeof s=="number"||typeof s=="bigint")return s=vi(""+s,r.mode,m),s.return=r,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case lt:return m=wn(s.type,s.key,s.props,null,r.mode,m),$a(m,s),m.return=r,m;case nt:return s=gi(s,r.mode,m),s.return=r,s;case Wt:var p=s._init;return s=p(s._payload),T(r,s,m)}if(qt(s)||Bt(s))return s=Sl(s,r.mode,m,null),s.return=r,s;if(typeof s.then=="function")return T(r,eu(s),m);if(s.$$typeof===yt)return T(r,Xn(r,s),m);lu(r,s)}return null}function v(r,s,m,p){var U=s!==null?s.key:null;if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return U!==null?null:c(r,s,""+m,p);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case lt:return m.key===U?o(r,s,m,p):null;case nt:return m.key===U?h(r,s,m,p):null;case Wt:return U=m._init,m=U(m._payload),v(r,s,m,p)}if(qt(m)||Bt(m))return U!==null?null:b(r,s,m,p,null);if(typeof m.then=="function")return v(r,s,eu(m),p);if(m.$$typeof===yt)return v(r,s,Xn(r,m),p);lu(r,m)}return null}function g(r,s,m,p,U){if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return r=r.get(m)||null,c(s,r,""+p,U);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case lt:return r=r.get(p.key===null?m:p.key)||null,o(s,r,p,U);case nt:return r=r.get(p.key===null?m:p.key)||null,h(s,r,p,U);case Wt:var J=p._init;return p=J(p._payload),g(r,s,m,p,U)}if(qt(p)||Bt(p))return r=r.get(m)||null,b(s,r,p,U,null);if(typeof p.then=="function")return g(r,s,m,eu(p),U);if(p.$$typeof===yt)return g(r,s,m,Xn(s,p),U);lu(s,p)}return null}function X(r,s,m,p){for(var U=null,J=null,H=s,w=s=0,Nt=null;H!==null&&w<m.length;w++){H.index>w?(Nt=H,H=null):Nt=H.sibling;var et=v(r,H,m[w],p);if(et===null){H===null&&(H=Nt);break}t&&H&&et.alternate===null&&e(r,H),s=u(et,s,w),J===null?U=et:J.sibling=et,J=et,H=Nt}if(w===m.length)return l(r,H),at&&Tl(r,w),U;if(H===null){for(;w<m.length;w++)H=T(r,m[w],p),H!==null&&(s=u(H,s,w),J===null?U=H:J.sibling=H,J=H);return at&&Tl(r,w),U}for(H=a(H);w<m.length;w++)Nt=g(H,r,w,m[w],p),Nt!==null&&(t&&Nt.alternate!==null&&H.delete(Nt.key===null?w:Nt.key),s=u(Nt,s,w),J===null?U=Nt:J.sibling=Nt,J=Nt);return t&&H.forEach(function(dl){return e(r,dl)}),at&&Tl(r,w),U}function q(r,s,m,p){if(m==null)throw Error(d(151));for(var U=null,J=null,H=s,w=s=0,Nt=null,et=m.next();H!==null&&!et.done;w++,et=m.next()){H.index>w?(Nt=H,H=null):Nt=H.sibling;var dl=v(r,H,et.value,p);if(dl===null){H===null&&(H=Nt);break}t&&H&&dl.alternate===null&&e(r,H),s=u(dl,s,w),J===null?U=dl:J.sibling=dl,J=dl,H=Nt}if(et.done)return l(r,H),at&&Tl(r,w),U;if(H===null){for(;!et.done;w++,et=m.next())et=T(r,et.value,p),et!==null&&(s=u(et,s,w),J===null?U=et:J.sibling=et,J=et);return at&&Tl(r,w),U}for(H=a(H);!et.done;w++,et=m.next())et=g(H,r,w,et.value,p),et!==null&&(t&&et.alternate!==null&&H.delete(et.key===null?w:et.key),s=u(et,s,w),J===null?U=et:J.sibling=et,J=et);return t&&H.forEach(function(Rm){return e(r,Rm)}),at&&Tl(r,w),U}function st(r,s,m,p){if(typeof m=="object"&&m!==null&&m.type===V&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case lt:t:{for(var U=m.key;s!==null;){if(s.key===U){if(U=m.type,U===V){if(s.tag===7){l(r,s.sibling),p=n(s,m.props.children),p.return=r,r=p;break t}}else if(s.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Wt&&us(U)===s.type){l(r,s.sibling),p=n(s,m.props),$a(p,m),p.return=r,r=p;break t}l(r,s);break}else e(r,s);s=s.sibling}m.type===V?(p=Sl(m.props.children,r.mode,p,m.key),p.return=r,r=p):(p=wn(m.type,m.key,m.props,null,r.mode,p),$a(p,m),p.return=r,r=p)}return i(r);case nt:t:{for(U=m.key;s!==null;){if(s.key===U)if(s.tag===4&&s.stateNode.containerInfo===m.containerInfo&&s.stateNode.implementation===m.implementation){l(r,s.sibling),p=n(s,m.children||[]),p.return=r,r=p;break t}else{l(r,s);break}else e(r,s);s=s.sibling}p=gi(m,r.mode,p),p.return=r,r=p}return i(r);case Wt:return U=m._init,m=U(m._payload),st(r,s,m,p)}if(qt(m))return X(r,s,m,p);if(Bt(m)){if(U=Bt(m),typeof U!="function")throw Error(d(150));return m=U.call(m),q(r,s,m,p)}if(typeof m.then=="function")return st(r,s,eu(m),p);if(m.$$typeof===yt)return st(r,s,Xn(r,m),p);lu(r,m)}return typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint"?(m=""+m,s!==null&&s.tag===6?(l(r,s.sibling),p=n(s,m),p.return=r,r=p):(l(r,s),p=vi(m,r.mode,p),p.return=r,r=p),i(r)):l(r,s)}return function(r,s,m,p){try{Ja=0;var U=st(r,s,m,p);return na=null,U}catch(H){if(H===Ya||H===Zn)throw H;var J=ee(29,H,null,r.mode);return J.lanes=p,J.return=r,J}finally{}}}var ua=is(!0),cs=is(!1),me=E(null),Te=null;function Fe(t){var e=t.alternate;D(zt,zt.current&1),D(me,t),Te===null&&(e===null||ta.current!==null||e.memoizedState!==null)&&(Te=t)}function os(t){if(t.tag===22){if(D(zt,zt.current),D(me,t),Te===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(Te=t)}}else Ie()}function Ie(){D(zt,zt.current),D(me,me.current)}function je(t){C(me),Te===t&&(Te=null),C(zt)}var zt=E(0);function au(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||wc(l)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function $i(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:M({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var Wi={enqueueSetState:function(t,e,l){t=t._reactInternals;var a=ue(),n=Je(a);n.payload=e,l!=null&&(n.callback=l),e=$e(t,n,a),e!==null&&(ie(e,t,a),Ga(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=ue(),n=Je(a);n.tag=1,n.payload=e,l!=null&&(n.callback=l),e=$e(t,n,a),e!==null&&(ie(e,t,a),Ga(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=ue(),a=Je(l);a.tag=2,e!=null&&(a.callback=e),e=$e(t,a,l),e!==null&&(ie(e,t,l),Ga(e,t,l))}};function fs(t,e,l,a,n,u,i){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,u,i):e.prototype&&e.prototype.isPureReactComponent?!Na(l,a)||!Na(n,u):!0}function ss(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&Wi.enqueueReplaceState(e,e.state,null)}function Ol(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=M({},l));for(var n in t)l[n]===void 0&&(l[n]=t[n])}return l}var nu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function rs(t){nu(t)}function ds(t){console.error(t)}function ms(t){nu(t)}function uu(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function hs(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Fi(t,e,l){return l=Je(l),l.tag=3,l.payload={element:null},l.callback=function(){uu(t,e)},l}function vs(t){return t=Je(t),t.tag=3,t}function gs(t,e,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var u=a.value;t.payload=function(){return n(u)},t.callback=function(){hs(e,l,a)}}var i=l.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){hs(e,l,a),typeof n!="function"&&(nl===null?nl=new Set([this]):nl.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function R0(t,e,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&Ba(e,l,n,!0),l=me.current,l!==null){switch(l.tag){case 13:return Te===null?xc():l.alternate===null&&St===0&&(St=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===Di?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),Ec(t,a,n)),!1;case 22:return l.flags|=65536,a===Di?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),Ec(t,a,n)),!1}throw Error(d(435,l.tag))}return Ec(t,a,n),xc(),!1}if(at)return e=me.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,a!==pi&&(t=Error(d(422),{cause:a}),ja(fe(t,l)))):(a!==pi&&(e=Error(d(423),{cause:a}),ja(fe(e,l))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,a=fe(a,l),n=Fi(t.stateNode,a,n),Oi(t,n),St!==4&&(St=2)),!1;var u=Error(d(520),{cause:a});if(u=fe(u,l),ln===null?ln=[u]:ln.push(u),St!==4&&(St=2),e===null)return!0;a=fe(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=n&-n,l.lanes|=t,t=Fi(l.stateNode,a,t),Oi(l,t),!1;case 1:if(e=l.type,u=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(nl===null||!nl.has(u))))return l.flags|=65536,n&=-n,l.lanes|=n,n=vs(n),gs(n,t,l,a),Oi(l,n),!1}l=l.return}while(l!==null);return!1}var bs=Error(d(461)),Ot=!1;function _t(t,e,l,a){e.child=t===null?cs(e,null,l,a):ua(e,t.child,l,a)}function ys(t,e,l,a,n){l=l.render;var u=e.ref;if("ref"in a){var i={};for(var c in a)c!=="ref"&&(i[c]=a[c])}else i=a;return Dl(e),a=Hi(t,e,l,i,u,n),c=ji(),t!==null&&!Ot?(Bi(t,e,n),Be(t,e,n)):(at&&c&&bi(e),e.flags|=1,_t(t,e,a,n),e.child)}function ps(t,e,l,a,n){if(t===null){var u=l.type;return typeof u=="function"&&!hi(u)&&u.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=u,Ss(t,e,u,a,n)):(t=wn(l.type,null,a,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!uc(t,n)){var i=u.memoizedProps;if(l=l.compare,l=l!==null?l:Na,l(i,a)&&t.ref===e.ref)return Be(t,e,n)}return e.flags|=1,t=Oe(u,a),t.ref=e.ref,t.return=e,e.child=t}function Ss(t,e,l,a,n){if(t!==null){var u=t.memoizedProps;if(Na(u,a)&&t.ref===e.ref)if(Ot=!1,e.pendingProps=a=u,uc(t,n))(t.flags&131072)!==0&&(Ot=!0);else return e.lanes=t.lanes,Be(t,e,n)}return Ii(t,e,l,a,n)}function xs(t,e,l){var a=e.pendingProps,n=a.children,u=t!==null?t.memoizedState:null;if(a.mode==="hidden"){if((e.flags&128)!==0){if(a=u!==null?u.baseLanes|l:l,t!==null){for(n=e.child=t.child,u=0;n!==null;)u=u|n.lanes|n.childLanes,n=n.sibling;e.childLanes=u&~a}else e.childLanes=0,e.child=null;return Ts(t,e,a,l)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Qn(e,u!==null?u.cachePool:null),u!==null?Sf(e,u):Ni(),os(e);else return e.lanes=e.childLanes=536870912,Ts(t,e,u!==null?u.baseLanes|l:l,l)}else u!==null?(Qn(e,u.cachePool),Sf(e,u),Ie(),e.memoizedState=null):(t!==null&&Qn(e,null),Ni(),Ie());return _t(t,e,n,l),e.child}function Ts(t,e,l,a){var n=Mi();return n=n===null?null:{parent:Dt._currentValue,pool:n},e.memoizedState={baseLanes:l,cachePool:n},t!==null&&Qn(e,null),Ni(),os(e),t!==null&&Ba(t,e,a,!0),null}function iu(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(d(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function Ii(t,e,l,a,n){return Dl(e),l=Hi(t,e,l,a,void 0,n),a=ji(),t!==null&&!Ot?(Bi(t,e,n),Be(t,e,n)):(at&&a&&bi(e),e.flags|=1,_t(t,e,l,n),e.child)}function Es(t,e,l,a,n,u){return Dl(e),e.updateQueue=null,l=Tf(e,a,l,n),xf(t),a=ji(),t!==null&&!Ot?(Bi(t,e,u),Be(t,e,u)):(at&&a&&bi(e),e.flags|=1,_t(t,e,l,u),e.child)}function As(t,e,l,a,n){if(Dl(e),e.stateNode===null){var u=$l,i=l.contextType;typeof i=="object"&&i!==null&&(u=Yt(i)),u=new l(a,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Wi,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=a,u.state=e.memoizedState,u.refs={},zi(e),i=l.contextType,u.context=typeof i=="object"&&i!==null?Yt(i):$l,u.state=e.memoizedState,i=l.getDerivedStateFromProps,typeof i=="function"&&($i(e,l,i,a),u.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&Wi.enqueueReplaceState(u,u.state,null),Qa(e,a,u,n),Xa(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){u=e.stateNode;var c=e.memoizedProps,o=Ol(l,c);u.props=o;var h=u.context,b=l.contextType;i=$l,typeof b=="object"&&b!==null&&(i=Yt(b));var T=l.getDerivedStateFromProps;b=typeof T=="function"||typeof u.getSnapshotBeforeUpdate=="function",c=e.pendingProps!==c,b||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(c||h!==i)&&ss(e,u,a,i),Ke=!1;var v=e.memoizedState;u.state=v,Qa(e,a,u,n),Xa(),h=e.memoizedState,c||v!==h||Ke?(typeof T=="function"&&($i(e,l,T,a),h=e.memoizedState),(o=Ke||fs(e,l,o,a,v,h,i))?(b||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=h),u.props=a,u.state=h,u.context=i,a=o):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{u=e.stateNode,Ri(t,e),i=e.memoizedProps,b=Ol(l,i),u.props=b,T=e.pendingProps,v=u.context,h=l.contextType,o=$l,typeof h=="object"&&h!==null&&(o=Yt(h)),c=l.getDerivedStateFromProps,(h=typeof c=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==T||v!==o)&&ss(e,u,a,o),Ke=!1,v=e.memoizedState,u.state=v,Qa(e,a,u,n),Xa();var g=e.memoizedState;i!==T||v!==g||Ke||t!==null&&t.dependencies!==null&&Gn(t.dependencies)?(typeof c=="function"&&($i(e,l,c,a),g=e.memoizedState),(b=Ke||fs(e,l,b,a,v,g,o)||t!==null&&t.dependencies!==null&&Gn(t.dependencies))?(h||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(a,g,o),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(a,g,o)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||i===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=g),u.props=a,u.state=g,u.context=o,a=b):(typeof u.componentDidUpdate!="function"||i===t.memoizedProps&&v===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&v===t.memoizedState||(e.flags|=1024),a=!1)}return u=a,iu(t,e),a=(e.flags&128)!==0,u||a?(u=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&a?(e.child=ua(e,t.child,null,n),e.child=ua(e,null,l,n)):_t(t,e,l,n),e.memoizedState=u.state,t=e.child):t=Be(t,e,n),t}function Ms(t,e,l,a){return Ha(),e.flags|=256,_t(t,e,l,a),e.child}var Pi={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function tc(t){return{baseLanes:t,cachePool:df()}}function ec(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=he),t}function Ds(t,e,l){var a=e.pendingProps,n=!1,u=(e.flags&128)!==0,i;if((i=u)||(i=t!==null&&t.memoizedState===null?!1:(zt.current&2)!==0),i&&(n=!0,e.flags&=-129),i=(e.flags&32)!==0,e.flags&=-33,t===null){if(at){if(n?Fe(e):Ie(),at){var c=pt,o;if(o=c){t:{for(o=c,c=xe;o.nodeType!==8;){if(!c){c=null;break t}if(o=ye(o.nextSibling),o===null){c=null;break t}}c=o}c!==null?(e.memoizedState={dehydrated:c,treeContext:xl!==null?{id:Ce,overflow:Ne}:null,retryLane:536870912,hydrationErrors:null},o=ee(18,null,null,0),o.stateNode=c,o.return=e,e.child=o,Gt=e,pt=null,o=!0):o=!1}o||Al(e)}if(c=e.memoizedState,c!==null&&(c=c.dehydrated,c!==null))return wc(c)?e.lanes=32:e.lanes=536870912,null;je(e)}return c=a.children,a=a.fallback,n?(Ie(),n=e.mode,c=cu({mode:"hidden",children:c},n),a=Sl(a,n,l,null),c.return=e,a.return=e,c.sibling=a,e.child=c,n=e.child,n.memoizedState=tc(l),n.childLanes=ec(t,i,l),e.memoizedState=Pi,a):(Fe(e),lc(e,c))}if(o=t.memoizedState,o!==null&&(c=o.dehydrated,c!==null)){if(u)e.flags&256?(Fe(e),e.flags&=-257,e=ac(t,e,l)):e.memoizedState!==null?(Ie(),e.child=t.child,e.flags|=128,e=null):(Ie(),n=a.fallback,c=e.mode,a=cu({mode:"visible",children:a.children},c),n=Sl(n,c,l,null),n.flags|=2,a.return=e,n.return=e,a.sibling=n,e.child=a,ua(e,t.child,null,l),a=e.child,a.memoizedState=tc(l),a.childLanes=ec(t,i,l),e.memoizedState=Pi,e=n);else if(Fe(e),wc(c)){if(i=c.nextSibling&&c.nextSibling.dataset,i)var h=i.dgst;i=h,a=Error(d(419)),a.stack="",a.digest=i,ja({value:a,source:null,stack:null}),e=ac(t,e,l)}else if(Ot||Ba(t,e,l,!1),i=(l&t.childLanes)!==0,Ot||i){if(i=mt,i!==null&&(a=l&-l,a=(a&42)!==0?1:Yu(a),a=(a&(i.suspendedLanes|l))!==0?0:a,a!==0&&a!==o.retryLane))throw o.retryLane=a,Jl(t,a),ie(i,t,a),bs;c.data==="$?"||xc(),e=ac(t,e,l)}else c.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=o.treeContext,pt=ye(c.nextSibling),Gt=e,at=!0,El=null,xe=!1,t!==null&&(re[de++]=Ce,re[de++]=Ne,re[de++]=xl,Ce=t.id,Ne=t.overflow,xl=e),e=lc(e,a.children),e.flags|=4096);return e}return n?(Ie(),n=a.fallback,c=e.mode,o=t.child,h=o.sibling,a=Oe(o,{mode:"hidden",children:a.children}),a.subtreeFlags=o.subtreeFlags&65011712,h!==null?n=Oe(h,n):(n=Sl(n,c,l,null),n.flags|=2),n.return=e,a.return=e,a.sibling=n,e.child=a,a=n,n=e.child,c=t.child.memoizedState,c===null?c=tc(l):(o=c.cachePool,o!==null?(h=Dt._currentValue,o=o.parent!==h?{parent:h,pool:h}:o):o=df(),c={baseLanes:c.baseLanes|l,cachePool:o}),n.memoizedState=c,n.childLanes=ec(t,i,l),e.memoizedState=Pi,a):(Fe(e),l=t.child,t=l.sibling,l=Oe(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(i=e.deletions,i===null?(e.deletions=[t],e.flags|=16):i.push(t)),e.child=l,e.memoizedState=null,l)}function lc(t,e){return e=cu({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function cu(t,e){return t=ee(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function ac(t,e,l){return ua(e,t.child,null,l),t=lc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function zs(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),xi(t.return,e,l)}function nc(t,e,l,a,n){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n}:(u.isBackwards=e,u.rendering=null,u.renderingStartTime=0,u.last=a,u.tail=l,u.tailMode=n)}function Rs(t,e,l){var a=e.pendingProps,n=a.revealOrder,u=a.tail;if(_t(t,e,a.children,l),a=zt.current,(a&2)!==0)a=a&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zs(t,l,e);else if(t.tag===19)zs(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}switch(D(zt,a),n){case"forwards":for(l=e.child,n=null;l!==null;)t=l.alternate,t!==null&&au(t)===null&&(n=l),l=l.sibling;l=n,l===null?(n=e.child,e.child=null):(n=l.sibling,l.sibling=null),nc(e,!1,n,l,u);break;case"backwards":for(l=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&au(t)===null){e.child=n;break}t=n.sibling,n.sibling=l,l=n,n=t}nc(e,!0,l,null,u);break;case"together":nc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Be(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),al|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(Ba(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(d(153));if(e.child!==null){for(t=e.child,l=Oe(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=Oe(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function uc(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Gn(t)))}function O0(t,e,l){switch(e.tag){case 3:vt(e,e.stateNode.containerInfo),ke(e,Dt,t.memoizedState.cache),Ha();break;case 27:case 5:Hu(e);break;case 4:vt(e,e.stateNode.containerInfo);break;case 10:ke(e,e.type,e.memoizedProps.value);break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(Fe(e),e.flags|=128,null):(l&e.child.childLanes)!==0?Ds(t,e,l):(Fe(e),t=Be(t,e,l),t!==null?t.sibling:null);Fe(e);break;case 19:var n=(t.flags&128)!==0;if(a=(l&e.childLanes)!==0,a||(Ba(t,e,l,!1),a=(l&e.childLanes)!==0),n){if(a)return Rs(t,e,l);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),D(zt,zt.current),a)break;return null;case 22:case 23:return e.lanes=0,xs(t,e,l);case 24:ke(e,Dt,t.memoizedState.cache)}return Be(t,e,l)}function Os(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)Ot=!0;else{if(!uc(t,l)&&(e.flags&128)===0)return Ot=!1,O0(t,e,l);Ot=(t.flags&131072)!==0}else Ot=!1,at&&(e.flags&1048576)!==0&&nf(e,Ln,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var a=e.elementType,n=a._init;if(a=n(a._payload),e.type=a,typeof a=="function")hi(a)?(t=Ol(a,t),e.tag=1,e=As(null,e,a,t,l)):(e.tag=0,e=Ii(null,e,a,t,l));else{if(a!=null){if(n=a.$$typeof,n===Kt){e.tag=11,e=ys(null,e,a,t,l);break t}else if(n===$t){e.tag=14,e=ps(null,e,a,t,l);break t}}throw e=hl(a)||a,Error(d(306,e,""))}}return e;case 0:return Ii(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,n=Ol(a,e.pendingProps),As(t,e,a,n,l);case 3:t:{if(vt(e,e.stateNode.containerInfo),t===null)throw Error(d(387));a=e.pendingProps;var u=e.memoizedState;n=u.element,Ri(t,e),Qa(e,a,null,l);var i=e.memoizedState;if(a=i.cache,ke(e,Dt,a),a!==u.cache&&Ti(e,[Dt],l,!0),Xa(),a=i.element,u.isDehydrated)if(u={element:a,isDehydrated:!1,cache:i.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=Ms(t,e,a,l);break t}else if(a!==n){n=fe(Error(d(424)),e),ja(n),e=Ms(t,e,a,l);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(pt=ye(t.firstChild),Gt=e,at=!0,El=null,xe=!0,l=cs(e,null,a,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Ha(),a===n){e=Be(t,e,l);break t}_t(t,e,a,l)}e=e.child}return e;case 26:return iu(t,e),t===null?(l=_r(e.type,null,e.pendingProps,null))?e.memoizedState=l:at||(l=e.type,t=e.pendingProps,a=xu(Z.current).createElement(l),a[wt]=e,a[Xt]=t,jt(a,l,t),Rt(a),e.stateNode=a):e.memoizedState=_r(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Hu(e),t===null&&at&&(a=e.stateNode=Cr(e.type,e.pendingProps,Z.current),Gt=e,xe=!0,n=pt,cl(e.type)?(Yc=n,pt=ye(a.firstChild)):pt=n),_t(t,e,e.pendingProps.children,l),iu(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&at&&((n=a=pt)&&(a=am(a,e.type,e.pendingProps,xe),a!==null?(e.stateNode=a,Gt=e,pt=ye(a.firstChild),xe=!1,n=!0):n=!1),n||Al(e)),Hu(e),n=e.type,u=e.pendingProps,i=t!==null?t.memoizedProps:null,a=u.children,jc(n,u)?a=null:i!==null&&jc(n,i)&&(e.flags|=32),e.memoizedState!==null&&(n=Hi(t,e,x0,null,null,l),dn._currentValue=n),iu(t,e),_t(t,e,a,l),e.child;case 6:return t===null&&at&&((t=l=pt)&&(l=nm(l,e.pendingProps,xe),l!==null?(e.stateNode=l,Gt=e,pt=null,t=!0):t=!1),t||Al(e)),null;case 13:return Ds(t,e,l);case 4:return vt(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=ua(e,null,a,l):_t(t,e,a,l),e.child;case 11:return ys(t,e,e.type,e.pendingProps,l);case 7:return _t(t,e,e.pendingProps,l),e.child;case 8:return _t(t,e,e.pendingProps.children,l),e.child;case 12:return _t(t,e,e.pendingProps.children,l),e.child;case 10:return a=e.pendingProps,ke(e,e.type,a.value),_t(t,e,a.children,l),e.child;case 9:return n=e.type._context,a=e.pendingProps.children,Dl(e),n=Yt(n),a=a(n),e.flags|=1,_t(t,e,a,l),e.child;case 14:return ps(t,e,e.type,e.pendingProps,l);case 15:return Ss(t,e,e.type,e.pendingProps,l);case 19:return Rs(t,e,l);case 31:return a=e.pendingProps,l=e.mode,a={mode:a.mode,children:a.children},t===null?(l=cu(a,l),l.ref=e.ref,e.child=l,l.return=e,e=l):(l=Oe(t.child,a),l.ref=e.ref,e.child=l,l.return=e,e=l),e;case 22:return xs(t,e,l);case 24:return Dl(e),a=Yt(Dt),t===null?(n=Mi(),n===null&&(n=mt,u=Ei(),n.pooledCache=u,u.refCount++,u!==null&&(n.pooledCacheLanes|=l),n=u),e.memoizedState={parent:a,cache:n},zi(e),ke(e,Dt,n)):((t.lanes&l)!==0&&(Ri(t,e),Qa(e,null,null,l),Xa()),n=t.memoizedState,u=e.memoizedState,n.parent!==a?(n={parent:a,cache:a},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),ke(e,Dt,a)):(a=u.cache,ke(e,Dt,a),a!==n.cache&&Ti(e,[Dt],l,!0))),_t(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(d(156,e.tag))}function qe(t){t.flags|=4}function Cs(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!wr(e)){if(e=me.current,e!==null&&((P&4194048)===P?Te!==null:(P&62914560)!==P&&(P&536870912)===0||e!==Te))throw La=Di,mf;t.flags|=8192}}function ou(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?io():536870912,t.lanes|=e,fa|=e)}function Wa(t,e){if(!at)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function C0(t,e,l){var a=e.pendingProps;switch(yi(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bt(e),null;case 1:return bt(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),_e(Dt),Xe(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(_a(e)?qe(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,of())),bt(e),null;case 26:return l=e.memoizedState,t===null?(qe(e),l!==null?(bt(e),Cs(e,l)):(bt(e),e.flags&=-16777217)):l?l!==t.memoizedState?(qe(e),bt(e),Cs(e,l)):(bt(e),e.flags&=-16777217):(t.memoizedProps!==a&&qe(e),bt(e),e.flags&=-16777217),null;case 27:pn(e),l=Z.current;var n=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==a&&qe(e);else{if(!a){if(e.stateNode===null)throw Error(d(166));return bt(e),null}t=B.current,_a(e)?uf(e):(t=Cr(n,a,l),e.stateNode=t,qe(e))}return bt(e),null;case 5:if(pn(e),l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&qe(e);else{if(!a){if(e.stateNode===null)throw Error(d(166));return bt(e),null}if(t=B.current,_a(e))uf(e);else{switch(n=xu(Z.current),t){case 1:t=n.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:t=n.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":t=n.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":t=n.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":t=n.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof a.is=="string"?n.createElement("select",{is:a.is}):n.createElement("select"),a.multiple?t.multiple=!0:a.size&&(t.size=a.size);break;default:t=typeof a.is=="string"?n.createElement(l,{is:a.is}):n.createElement(l)}}t[wt]=e,t[Xt]=a;t:for(n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;n=n.return}n.sibling.return=n.return,n=n.sibling}e.stateNode=t;t:switch(jt(t,l,a),l){case"button":case"input":case"select":case"textarea":t=!!a.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&qe(e)}}return bt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&qe(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(d(166));if(t=Z.current,_a(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,n=Gt,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}t[wt]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||Er(t.nodeValue,l)),t||Al(e)}else t=xu(t).createTextNode(a),t[wt]=e,e.stateNode=t}return bt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=_a(e),a!==null&&a.dehydrated!==null){if(t===null){if(!n)throw Error(d(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(317));n[wt]=e}else Ha(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;bt(e),n=!1}else n=of(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(je(e),e):(je(e),null)}if(je(e),(e.flags&128)!==0)return e.lanes=l,e;if(l=a!==null,t=t!==null&&t.memoizedState!==null,l){a=e.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool);var u=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==n&&(a.flags|=2048)}return l!==t&&l&&(e.child.flags|=8192),ou(e,e.updateQueue),bt(e),null;case 4:return Xe(),t===null&&Cc(e.stateNode.containerInfo),bt(e),null;case 10:return _e(e.type),bt(e),null;case 19:if(C(zt),n=e.memoizedState,n===null)return bt(e),null;if(a=(e.flags&128)!==0,u=n.rendering,u===null)if(a)Wa(n,!1);else{if(St!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=au(t),u!==null){for(e.flags|=128,Wa(n,!1),t=u.updateQueue,e.updateQueue=t,ou(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)af(l,t),l=l.sibling;return D(zt,zt.current&1|2),e.child}t=t.sibling}n.tail!==null&&Se()>ru&&(e.flags|=128,a=!0,Wa(n,!1),e.lanes=4194304)}else{if(!a)if(t=au(u),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,ou(e,t),Wa(n,!0),n.tail===null&&n.tailMode==="hidden"&&!u.alternate&&!at)return bt(e),null}else 2*Se()-n.renderingStartTime>ru&&l!==536870912&&(e.flags|=128,a=!0,Wa(n,!1),e.lanes=4194304);n.isBackwards?(u.sibling=e.child,e.child=u):(t=n.last,t!==null?t.sibling=u:e.child=u,n.last=u)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=Se(),e.sibling=null,t=zt.current,D(zt,a?t&1|2:t&1),e):(bt(e),null);case 22:case 23:return je(e),Ui(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(l&536870912)!==0&&(e.flags&128)===0&&(bt(e),e.subtreeFlags&6&&(e.flags|=8192)):bt(e),l=e.updateQueue,l!==null&&ou(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&C(zl),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),_e(Dt),bt(e),null;case 25:return null;case 30:return null}throw Error(d(156,e.tag))}function N0(t,e){switch(yi(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _e(Dt),Xe(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return pn(e),null;case 13:if(je(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(d(340));Ha()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return C(zt),null;case 4:return Xe(),null;case 10:return _e(e.type),null;case 22:case 23:return je(e),Ui(),t!==null&&C(zl),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return _e(Dt),null;case 25:return null;default:return null}}function Ns(t,e){switch(yi(e),e.tag){case 3:_e(Dt),Xe();break;case 26:case 27:case 5:pn(e);break;case 4:Xe();break;case 13:je(e);break;case 19:C(zt);break;case 10:_e(e.type);break;case 22:case 23:je(e),Ui(),t!==null&&C(zl);break;case 24:_e(Dt)}}function Fa(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&t)===t){a=void 0;var u=l.create,i=l.inst;a=u(),i.destroy=a}l=l.next}while(l!==n)}}catch(c){dt(e,e.return,c)}}function Pe(t,e,l){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var u=n.next;a=u;do{if((a.tag&t)===t){var i=a.inst,c=i.destroy;if(c!==void 0){i.destroy=void 0,n=e;var o=l,h=c;try{h()}catch(b){dt(n,o,b)}}}a=a.next}while(a!==u)}}catch(b){dt(e,e.return,b)}}function Us(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{pf(e,l)}catch(a){dt(t,t.return,a)}}}function _s(t,e,l){l.props=Ol(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){dt(t,e,a)}}function Ia(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof l=="function"?t.refCleanup=l(a):l.current=a}}catch(n){dt(t,e,n)}}function Ee(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){dt(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){dt(t,e,n)}else l.current=null}function Hs(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){dt(t,t.return,n)}}function ic(t,e,l){try{var a=t.stateNode;I0(a,t.type,l,e),a[Xt]=e}catch(n){dt(t,t.return,n)}}function js(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&cl(t.type)||t.tag===4}function cc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||js(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&cl(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function oc(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=Su));else if(a!==4&&(a===27&&cl(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(oc(t,e,l),t=t.sibling;t!==null;)oc(t,e,l),t=t.sibling}function fu(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(a!==4&&(a===27&&cl(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(fu(t,e,l),t=t.sibling;t!==null;)fu(t,e,l),t=t.sibling}function Bs(t){var e=t.stateNode,l=t.memoizedProps;try{for(var a=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);jt(e,a,l),e[wt]=t,e[Xt]=l}catch(u){dt(t,t.return,u)}}var we=!1,Tt=!1,fc=!1,qs=typeof WeakSet=="function"?WeakSet:Set,Ct=null;function U0(t,e){if(t=t.containerInfo,_c=zu,t=Ko(t),ci(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,u=a.focusNode;a=a.focusOffset;try{l.nodeType,u.nodeType}catch{l=null;break t}var i=0,c=-1,o=-1,h=0,b=0,T=t,v=null;e:for(;;){for(var g;T!==l||n!==0&&T.nodeType!==3||(c=i+n),T!==u||a!==0&&T.nodeType!==3||(o=i+a),T.nodeType===3&&(i+=T.nodeValue.length),(g=T.firstChild)!==null;)v=T,T=g;for(;;){if(T===t)break e;if(v===l&&++h===n&&(c=i),v===u&&++b===a&&(o=i),(g=T.nextSibling)!==null)break;T=v,v=T.parentNode}T=g}l=c===-1||o===-1?null:{start:c,end:o}}else l=null}l=l||{start:0,end:0}}else l=null;for(Hc={focusedElem:t,selectionRange:l},zu=!1,Ct=e;Ct!==null;)if(e=Ct,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,Ct=t;else for(;Ct!==null;){switch(e=Ct,u=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,l=e,n=u.memoizedProps,u=u.memoizedState,a=l.stateNode;try{var X=Ol(l.type,n,l.elementType===l.type);t=a.getSnapshotBeforeUpdate(X,u),a.__reactInternalSnapshotBeforeUpdate=t}catch(q){dt(l,l.return,q)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)qc(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":qc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(d(163))}if(t=e.sibling,t!==null){t.return=e.return,Ct=t;break}Ct=e.return}}function ws(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:tl(t,l),a&4&&Fa(5,l);break;case 1:if(tl(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(i){dt(l,l.return,i)}else{var n=Ol(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(i){dt(l,l.return,i)}}a&64&&Us(l),a&512&&Ia(l,l.return);break;case 3:if(tl(t,l),a&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{pf(t,e)}catch(i){dt(l,l.return,i)}}break;case 27:e===null&&a&4&&Bs(l);case 26:case 5:tl(t,l),e===null&&a&4&&Hs(l),a&512&&Ia(l,l.return);break;case 12:tl(t,l);break;case 13:tl(t,l),a&4&&Gs(t,l),a&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=G0.bind(null,l),um(t,l))));break;case 22:if(a=l.memoizedState!==null||we,!a){e=e!==null&&e.memoizedState!==null||Tt,n=we;var u=Tt;we=a,(Tt=e)&&!u?el(t,l,(l.subtreeFlags&8772)!==0):tl(t,l),we=n,Tt=u}break;case 30:break;default:tl(t,l)}}function Ys(t){var e=t.alternate;e!==null&&(t.alternate=null,Ys(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Xu(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var gt=null,Vt=!1;function Ye(t,e,l){for(l=l.child;l!==null;)Ls(t,e,l),l=l.sibling}function Ls(t,e,l){if(It&&typeof It.onCommitFiberUnmount=="function")try{It.onCommitFiberUnmount(pa,l)}catch{}switch(l.tag){case 26:Tt||Ee(l,e),Ye(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:Tt||Ee(l,e);var a=gt,n=Vt;cl(l.type)&&(gt=l.stateNode,Vt=!1),Ye(t,e,l),on(l.stateNode),gt=a,Vt=n;break;case 5:Tt||Ee(l,e);case 6:if(a=gt,n=Vt,gt=null,Ye(t,e,l),gt=a,Vt=n,gt!==null)if(Vt)try{(gt.nodeType===9?gt.body:gt.nodeName==="HTML"?gt.ownerDocument.body:gt).removeChild(l.stateNode)}catch(u){dt(l,e,u)}else try{gt.removeChild(l.stateNode)}catch(u){dt(l,e,u)}break;case 18:gt!==null&&(Vt?(t=gt,Rr(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),gn(t)):Rr(gt,l.stateNode));break;case 4:a=gt,n=Vt,gt=l.stateNode.containerInfo,Vt=!0,Ye(t,e,l),gt=a,Vt=n;break;case 0:case 11:case 14:case 15:Tt||Pe(2,l,e),Tt||Pe(4,l,e),Ye(t,e,l);break;case 1:Tt||(Ee(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&_s(l,e,a)),Ye(t,e,l);break;case 21:Ye(t,e,l);break;case 22:Tt=(a=Tt)||l.memoizedState!==null,Ye(t,e,l),Tt=a;break;default:Ye(t,e,l)}}function Gs(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{gn(t)}catch(l){dt(e,e.return,l)}}function _0(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new qs),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new qs),e;default:throw Error(d(435,t.tag))}}function sc(t,e){var l=_0(t);e.forEach(function(a){var n=X0.bind(null,t,a);l.has(a)||(l.add(a),a.then(n,n))})}function le(t,e){var l=e.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],u=t,i=e,c=i;t:for(;c!==null;){switch(c.tag){case 27:if(cl(c.type)){gt=c.stateNode,Vt=!1;break t}break;case 5:gt=c.stateNode,Vt=!1;break t;case 3:case 4:gt=c.stateNode.containerInfo,Vt=!0;break t}c=c.return}if(gt===null)throw Error(d(160));Ls(u,i,n),gt=null,Vt=!1,u=n.alternate,u!==null&&(u.return=null),n.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Xs(e,t),e=e.sibling}var be=null;function Xs(t,e){var l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:le(e,t),ae(t),a&4&&(Pe(3,t,t.return),Fa(3,t),Pe(5,t,t.return));break;case 1:le(e,t),ae(t),a&512&&(Tt||l===null||Ee(l,l.return)),a&64&&we&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=be;if(le(e,t),ae(t),a&512&&(Tt||l===null||Ee(l,l.return)),a&4){var u=l!==null?l.memoizedState:null;if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,n=n.ownerDocument||n;e:switch(a){case"title":u=n.getElementsByTagName("title")[0],(!u||u[Ta]||u[wt]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=n.createElement(a),n.head.insertBefore(u,n.querySelector("head > title"))),jt(u,a,l),u[wt]=t,Rt(u),a=u;break t;case"link":var i=Br("link","href",n).get(a+(l.href||""));if(i){for(var c=0;c<i.length;c++)if(u=i[c],u.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&u.getAttribute("rel")===(l.rel==null?null:l.rel)&&u.getAttribute("title")===(l.title==null?null:l.title)&&u.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){i.splice(c,1);break e}}u=n.createElement(a),jt(u,a,l),n.head.appendChild(u);break;case"meta":if(i=Br("meta","content",n).get(a+(l.content||""))){for(c=0;c<i.length;c++)if(u=i[c],u.getAttribute("content")===(l.content==null?null:""+l.content)&&u.getAttribute("name")===(l.name==null?null:l.name)&&u.getAttribute("property")===(l.property==null?null:l.property)&&u.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&u.getAttribute("charset")===(l.charSet==null?null:l.charSet)){i.splice(c,1);break e}}u=n.createElement(a),jt(u,a,l),n.head.appendChild(u);break;default:throw Error(d(468,a))}u[wt]=t,Rt(u),a=u}t.stateNode=a}else qr(n,t.type,t.stateNode);else t.stateNode=jr(n,a,t.memoizedProps);else u!==a?(u===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):u.count--,a===null?qr(n,t.type,t.stateNode):jr(n,a,t.memoizedProps)):a===null&&t.stateNode!==null&&ic(t,t.memoizedProps,l.memoizedProps)}break;case 27:le(e,t),ae(t),a&512&&(Tt||l===null||Ee(l,l.return)),l!==null&&a&4&&ic(t,t.memoizedProps,l.memoizedProps);break;case 5:if(le(e,t),ae(t),a&512&&(Tt||l===null||Ee(l,l.return)),t.flags&32){n=t.stateNode;try{Gl(n,"")}catch(g){dt(t,t.return,g)}}a&4&&t.stateNode!=null&&(n=t.memoizedProps,ic(t,n,l!==null?l.memoizedProps:n)),a&1024&&(fc=!0);break;case 6:if(le(e,t),ae(t),a&4){if(t.stateNode===null)throw Error(d(162));a=t.memoizedProps,l=t.stateNode;try{l.nodeValue=a}catch(g){dt(t,t.return,g)}}break;case 3:if(Au=null,n=be,be=Tu(e.containerInfo),le(e,t),be=n,ae(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{gn(e.containerInfo)}catch(g){dt(t,t.return,g)}fc&&(fc=!1,Qs(t));break;case 4:a=be,be=Tu(t.stateNode.containerInfo),le(e,t),ae(t),be=a;break;case 12:le(e,t),ae(t);break;case 13:le(e,t),ae(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(gc=Se()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,sc(t,a)));break;case 22:n=t.memoizedState!==null;var o=l!==null&&l.memoizedState!==null,h=we,b=Tt;if(we=h||n,Tt=b||o,le(e,t),Tt=b,we=h,ae(t),a&8192)t:for(e=t.stateNode,e._visibility=n?e._visibility&-2:e._visibility|1,n&&(l===null||o||we||Tt||Cl(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){o=l=e;try{if(u=o.stateNode,n)i=u.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{c=o.stateNode;var T=o.memoizedProps.style,v=T!=null&&T.hasOwnProperty("display")?T.display:null;c.style.display=v==null||typeof v=="boolean"?"":(""+v).trim()}}catch(g){dt(o,o.return,g)}}}else if(e.tag===6){if(l===null){o=e;try{o.stateNode.nodeValue=n?"":o.memoizedProps}catch(g){dt(o,o.return,g)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,sc(t,l))));break;case 19:le(e,t),ae(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,sc(t,a)));break;case 30:break;case 21:break;default:le(e,t),ae(t)}}function ae(t){var e=t.flags;if(e&2){try{for(var l,a=t.return;a!==null;){if(js(a)){l=a;break}a=a.return}if(l==null)throw Error(d(160));switch(l.tag){case 27:var n=l.stateNode,u=cc(t);fu(t,u,n);break;case 5:var i=l.stateNode;l.flags&32&&(Gl(i,""),l.flags&=-33);var c=cc(t);fu(t,c,i);break;case 3:case 4:var o=l.stateNode.containerInfo,h=cc(t);oc(t,h,o);break;default:throw Error(d(161))}}catch(b){dt(t,t.return,b)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Qs(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Qs(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function tl(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)ws(t,e.alternate,e),e=e.sibling}function Cl(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Pe(4,e,e.return),Cl(e);break;case 1:Ee(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&_s(e,e.return,l),Cl(e);break;case 27:on(e.stateNode);case 26:case 5:Ee(e,e.return),Cl(e);break;case 22:e.memoizedState===null&&Cl(e);break;case 30:Cl(e);break;default:Cl(e)}t=t.sibling}}function el(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,n=t,u=e,i=u.flags;switch(u.tag){case 0:case 11:case 15:el(n,u,l),Fa(4,u);break;case 1:if(el(n,u,l),a=u,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(h){dt(a,a.return,h)}if(a=u,n=a.updateQueue,n!==null){var c=a.stateNode;try{var o=n.shared.hiddenCallbacks;if(o!==null)for(n.shared.hiddenCallbacks=null,n=0;n<o.length;n++)yf(o[n],c)}catch(h){dt(a,a.return,h)}}l&&i&64&&Us(u),Ia(u,u.return);break;case 27:Bs(u);case 26:case 5:el(n,u,l),l&&a===null&&i&4&&Hs(u),Ia(u,u.return);break;case 12:el(n,u,l);break;case 13:el(n,u,l),l&&i&4&&Gs(n,u);break;case 22:u.memoizedState===null&&el(n,u,l),Ia(u,u.return);break;case 30:break;default:el(n,u,l)}e=e.sibling}}function rc(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&qa(l))}function dc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&qa(t))}function Ae(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Zs(t,e,l,a),e=e.sibling}function Zs(t,e,l,a){var n=e.flags;switch(e.tag){case 0:case 11:case 15:Ae(t,e,l,a),n&2048&&Fa(9,e);break;case 1:Ae(t,e,l,a);break;case 3:Ae(t,e,l,a),n&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&qa(t)));break;case 12:if(n&2048){Ae(t,e,l,a),t=e.stateNode;try{var u=e.memoizedProps,i=u.id,c=u.onPostCommit;typeof c=="function"&&c(i,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(o){dt(e,e.return,o)}}else Ae(t,e,l,a);break;case 13:Ae(t,e,l,a);break;case 23:break;case 22:u=e.stateNode,i=e.alternate,e.memoizedState!==null?u._visibility&2?Ae(t,e,l,a):Pa(t,e):u._visibility&2?Ae(t,e,l,a):(u._visibility|=2,ia(t,e,l,a,(e.subtreeFlags&10256)!==0)),n&2048&&rc(i,e);break;case 24:Ae(t,e,l,a),n&2048&&dc(e.alternate,e);break;default:Ae(t,e,l,a)}}function ia(t,e,l,a,n){for(n=n&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var u=t,i=e,c=l,o=a,h=i.flags;switch(i.tag){case 0:case 11:case 15:ia(u,i,c,o,n),Fa(8,i);break;case 23:break;case 22:var b=i.stateNode;i.memoizedState!==null?b._visibility&2?ia(u,i,c,o,n):Pa(u,i):(b._visibility|=2,ia(u,i,c,o,n)),n&&h&2048&&rc(i.alternate,i);break;case 24:ia(u,i,c,o,n),n&&h&2048&&dc(i.alternate,i);break;default:ia(u,i,c,o,n)}e=e.sibling}}function Pa(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,n=a.flags;switch(a.tag){case 22:Pa(l,a),n&2048&&rc(a.alternate,a);break;case 24:Pa(l,a),n&2048&&dc(a.alternate,a);break;default:Pa(l,a)}e=e.sibling}}var tn=8192;function ca(t){if(t.subtreeFlags&tn)for(t=t.child;t!==null;)Vs(t),t=t.sibling}function Vs(t){switch(t.tag){case 26:ca(t),t.flags&tn&&t.memoizedState!==null&&ym(be,t.memoizedState,t.memoizedProps);break;case 5:ca(t);break;case 3:case 4:var e=be;be=Tu(t.stateNode.containerInfo),ca(t),be=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=tn,tn=16777216,ca(t),tn=e):ca(t));break;default:ca(t)}}function ks(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function en(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];Ct=a,Js(a,t)}ks(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ks(t),t=t.sibling}function Ks(t){switch(t.tag){case 0:case 11:case 15:en(t),t.flags&2048&&Pe(9,t,t.return);break;case 3:en(t);break;case 12:en(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,su(t)):en(t);break;default:en(t)}}function su(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];Ct=a,Js(a,t)}ks(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Pe(8,e,e.return),su(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,su(e));break;default:su(e)}t=t.sibling}}function Js(t,e){for(;Ct!==null;){var l=Ct;switch(l.tag){case 0:case 11:case 15:Pe(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:qa(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,Ct=a;else t:for(l=t;Ct!==null;){a=Ct;var n=a.sibling,u=a.return;if(Ys(a),a===l){Ct=null;break t}if(n!==null){n.return=u,Ct=n;break t}Ct=u}}}var H0={getCacheForType:function(t){var e=Yt(Dt),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l}},j0=typeof WeakMap=="function"?WeakMap:Map,ut=0,mt=null,$=null,P=0,it=0,ne=null,ll=!1,oa=!1,mc=!1,Le=0,St=0,al=0,Nl=0,hc=0,he=0,fa=0,ln=null,kt=null,vc=!1,gc=0,ru=1/0,du=null,nl=null,Ht=0,ul=null,sa=null,ra=0,bc=0,yc=null,$s=null,an=0,pc=null;function ue(){if((ut&2)!==0&&P!==0)return P&-P;if(y.T!==null){var t=Il;return t!==0?t:Dc()}return fo()}function Ws(){he===0&&(he=(P&536870912)===0||at?uo():536870912);var t=me.current;return t!==null&&(t.flags|=32),he}function ie(t,e,l){(t===mt&&(it===2||it===9)||t.cancelPendingCommit!==null)&&(da(t,0),il(t,P,he,!1)),xa(t,l),((ut&2)===0||t!==mt)&&(t===mt&&((ut&2)===0&&(Nl|=l),St===4&&il(t,P,he,!1)),Me(t))}function Fs(t,e,l){if((ut&6)!==0)throw Error(d(327));var a=!l&&(e&124)===0&&(e&t.expiredLanes)===0||Sa(t,e),n=a?w0(t,e):Tc(t,e,!0),u=a;do{if(n===0){oa&&!a&&il(t,e,0,!1);break}else{if(l=t.current.alternate,u&&!B0(l)){n=Tc(t,e,!1),u=!1;continue}if(n===2){if(u=e,t.errorRecoveryDisabledLanes&u)var i=0;else i=t.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){e=i;t:{var c=t;n=ln;var o=c.current.memoizedState.isDehydrated;if(o&&(da(c,i).flags|=256),i=Tc(c,i,!1),i!==2){if(mc&&!o){c.errorRecoveryDisabledLanes|=u,Nl|=u,n=4;break t}u=kt,kt=n,u!==null&&(kt===null?kt=u:kt.push.apply(kt,u))}n=i}if(u=!1,n!==2)continue}}if(n===1){da(t,0),il(t,e,0,!0);break}t:{switch(a=t,u=n,u){case 0:case 1:throw Error(d(345));case 4:if((e&4194048)!==e)break;case 6:il(a,e,he,!ll);break t;case 2:kt=null;break;case 3:case 5:break;default:throw Error(d(329))}if((e&62914560)===e&&(n=gc+300-Se(),10<n)){if(il(a,e,he,!ll),En(a,0,!0)!==0)break t;a.timeoutHandle=Dr(Is.bind(null,a,l,kt,du,vc,e,he,Nl,fa,ll,u,2,-0,0),n);break t}Is(a,l,kt,du,vc,e,he,Nl,fa,ll,u,0,-0,0)}}break}while(!0);Me(t)}function Is(t,e,l,a,n,u,i,c,o,h,b,T,v,g){if(t.timeoutHandle=-1,T=e.subtreeFlags,(T&8192||(T&16785408)===16785408)&&(rn={stylesheets:null,count:0,unsuspend:bm},Vs(e),T=pm(),T!==null)){t.cancelPendingCommit=T(ur.bind(null,t,e,u,l,a,n,i,c,o,b,1,v,g)),il(t,u,i,!h);return}ur(t,e,u,l,a,n,i,c,o)}function B0(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],u=n.getSnapshot;n=n.value;try{if(!te(u(),n))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function il(t,e,l,a){e&=~hc,e&=~Nl,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var n=e;0<n;){var u=31-Pt(n),i=1<<u;a[u]=-1,n&=~i}l!==0&&co(t,l,e)}function mu(){return(ut&6)===0?(nn(0),!1):!0}function Sc(){if($!==null){if(it===0)var t=$.return;else t=$,Ue=Ml=null,qi(t),na=null,Ja=0,t=$;for(;t!==null;)Ns(t.alternate,t),t=t.return;$=null}}function da(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,tm(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),Sc(),mt=t,$=l=Oe(t.current,null),P=e,it=0,ne=null,ll=!1,oa=Sa(t,e),mc=!1,fa=he=hc=Nl=al=St=0,kt=ln=null,vc=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var n=31-Pt(a),u=1<<n;e|=t[n],a&=~u}return Le=e,jn(),l}function Ps(t,e){K=null,y.H=tu,e===Ya||e===Zn?(e=gf(),it=3):e===mf?(e=gf(),it=4):it=e===bs?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ne=e,$===null&&(St=1,uu(t,fe(e,t.current)))}function tr(){var t=y.H;return y.H=tu,t===null?tu:t}function er(){var t=y.A;return y.A=H0,t}function xc(){St=4,ll||(P&4194048)!==P&&me.current!==null||(oa=!0),(al&134217727)===0&&(Nl&134217727)===0||mt===null||il(mt,P,he,!1)}function Tc(t,e,l){var a=ut;ut|=2;var n=tr(),u=er();(mt!==t||P!==e)&&(du=null,da(t,e)),e=!1;var i=St;t:do try{if(it!==0&&$!==null){var c=$,o=ne;switch(it){case 8:Sc(),i=6;break t;case 3:case 2:case 9:case 6:me.current===null&&(e=!0);var h=it;if(it=0,ne=null,ma(t,c,o,h),l&&oa){i=0;break t}break;default:h=it,it=0,ne=null,ma(t,c,o,h)}}q0(),i=St;break}catch(b){Ps(t,b)}while(!0);return e&&t.shellSuspendCounter++,Ue=Ml=null,ut=a,y.H=n,y.A=u,$===null&&(mt=null,P=0,jn()),i}function q0(){for(;$!==null;)lr($)}function w0(t,e){var l=ut;ut|=2;var a=tr(),n=er();mt!==t||P!==e?(du=null,ru=Se()+500,da(t,e)):oa=Sa(t,e);t:do try{if(it!==0&&$!==null){e=$;var u=ne;e:switch(it){case 1:it=0,ne=null,ma(t,e,u,1);break;case 2:case 9:if(hf(u)){it=0,ne=null,ar(e);break}e=function(){it!==2&&it!==9||mt!==t||(it=7),Me(t)},u.then(e,e);break t;case 3:it=7;break t;case 4:it=5;break t;case 7:hf(u)?(it=0,ne=null,ar(e)):(it=0,ne=null,ma(t,e,u,7));break;case 5:var i=null;switch($.tag){case 26:i=$.memoizedState;case 5:case 27:var c=$;if(!i||wr(i)){it=0,ne=null;var o=c.sibling;if(o!==null)$=o;else{var h=c.return;h!==null?($=h,hu(h)):$=null}break e}}it=0,ne=null,ma(t,e,u,5);break;case 6:it=0,ne=null,ma(t,e,u,6);break;case 8:Sc(),St=6;break t;default:throw Error(d(462))}}Y0();break}catch(b){Ps(t,b)}while(!0);return Ue=Ml=null,y.H=a,y.A=n,ut=l,$!==null?0:(mt=null,P=0,jn(),St)}function Y0(){for(;$!==null&&!cd();)lr($)}function lr(t){var e=Os(t.alternate,t,Le);t.memoizedProps=t.pendingProps,e===null?hu(t):$=e}function ar(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=Es(l,e,e.pendingProps,e.type,void 0,P);break;case 11:e=Es(l,e,e.pendingProps,e.type.render,e.ref,P);break;case 5:qi(e);default:Ns(l,e),e=$=af(e,Le),e=Os(l,e,Le)}t.memoizedProps=t.pendingProps,e===null?hu(t):$=e}function ma(t,e,l,a){Ue=Ml=null,qi(e),na=null,Ja=0;var n=e.return;try{if(R0(t,n,e,l,P)){St=1,uu(t,fe(l,t.current)),$=null;return}}catch(u){if(n!==null)throw $=n,u;St=1,uu(t,fe(l,t.current)),$=null;return}e.flags&32768?(at||a===1?t=!0:oa||(P&536870912)!==0?t=!1:(ll=t=!0,(a===2||a===9||a===3||a===6)&&(a=me.current,a!==null&&a.tag===13&&(a.flags|=16384))),nr(e,t)):hu(e)}function hu(t){var e=t;do{if((e.flags&32768)!==0){nr(e,ll);return}t=e.return;var l=C0(e.alternate,e,Le);if(l!==null){$=l;return}if(e=e.sibling,e!==null){$=e;return}$=e=t}while(e!==null);St===0&&(St=5)}function nr(t,e){do{var l=N0(t.alternate,t);if(l!==null){l.flags&=32767,$=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){$=t;return}$=t=l}while(t!==null);St=6,$=null}function ur(t,e,l,a,n,u,i,c,o){t.cancelPendingCommit=null;do vu();while(Ht!==0);if((ut&6)!==0)throw Error(d(327));if(e!==null){if(e===t.current)throw Error(d(177));if(u=e.lanes|e.childLanes,u|=di,bd(t,l,u,i,c,o),t===mt&&($=mt=null,P=0),sa=e,ul=t,ra=l,bc=u,yc=n,$s=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Q0(Sn,function(){return sr(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=y.T,y.T=null,n=z.p,z.p=2,i=ut,ut|=4;try{U0(t,e,l)}finally{ut=i,z.p=n,y.T=a}}Ht=1,ir(),cr(),or()}}function ir(){if(Ht===1){Ht=0;var t=ul,e=sa,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=y.T,y.T=null;var a=z.p;z.p=2;var n=ut;ut|=4;try{Xs(e,t);var u=Hc,i=Ko(t.containerInfo),c=u.focusedElem,o=u.selectionRange;if(i!==c&&c&&c.ownerDocument&&ko(c.ownerDocument.documentElement,c)){if(o!==null&&ci(c)){var h=o.start,b=o.end;if(b===void 0&&(b=h),"selectionStart"in c)c.selectionStart=h,c.selectionEnd=Math.min(b,c.value.length);else{var T=c.ownerDocument||document,v=T&&T.defaultView||window;if(v.getSelection){var g=v.getSelection(),X=c.textContent.length,q=Math.min(o.start,X),st=o.end===void 0?q:Math.min(o.end,X);!g.extend&&q>st&&(i=st,st=q,q=i);var r=Vo(c,q),s=Vo(c,st);if(r&&s&&(g.rangeCount!==1||g.anchorNode!==r.node||g.anchorOffset!==r.offset||g.focusNode!==s.node||g.focusOffset!==s.offset)){var m=T.createRange();m.setStart(r.node,r.offset),g.removeAllRanges(),q>st?(g.addRange(m),g.extend(s.node,s.offset)):(m.setEnd(s.node,s.offset),g.addRange(m))}}}}for(T=[],g=c;g=g.parentNode;)g.nodeType===1&&T.push({element:g,left:g.scrollLeft,top:g.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<T.length;c++){var p=T[c];p.element.scrollLeft=p.left,p.element.scrollTop=p.top}}zu=!!_c,Hc=_c=null}finally{ut=n,z.p=a,y.T=l}}t.current=e,Ht=2}}function cr(){if(Ht===2){Ht=0;var t=ul,e=sa,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=y.T,y.T=null;var a=z.p;z.p=2;var n=ut;ut|=4;try{ws(t,e.alternate,e)}finally{ut=n,z.p=a,y.T=l}}Ht=3}}function or(){if(Ht===4||Ht===3){Ht=0,od();var t=ul,e=sa,l=ra,a=$s;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Ht=5:(Ht=0,sa=ul=null,fr(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(nl=null),Lu(l),e=e.stateNode,It&&typeof It.onCommitFiberRoot=="function")try{It.onCommitFiberRoot(pa,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=y.T,n=z.p,z.p=2,y.T=null;try{for(var u=t.onRecoverableError,i=0;i<a.length;i++){var c=a[i];u(c.value,{componentStack:c.stack})}}finally{y.T=e,z.p=n}}(ra&3)!==0&&vu(),Me(t),n=t.pendingLanes,(l&4194090)!==0&&(n&42)!==0?t===pc?an++:(an=0,pc=t):an=0,nn(0)}}function fr(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,qa(e)))}function vu(t){return ir(),cr(),or(),sr()}function sr(){if(Ht!==5)return!1;var t=ul,e=bc;bc=0;var l=Lu(ra),a=y.T,n=z.p;try{z.p=32>l?32:l,y.T=null,l=yc,yc=null;var u=ul,i=ra;if(Ht=0,sa=ul=null,ra=0,(ut&6)!==0)throw Error(d(331));var c=ut;if(ut|=4,Ks(u.current),Zs(u,u.current,i,l),ut=c,nn(0,!1),It&&typeof It.onPostCommitFiberRoot=="function")try{It.onPostCommitFiberRoot(pa,u)}catch{}return!0}finally{z.p=n,y.T=a,fr(t,e)}}function rr(t,e,l){e=fe(l,e),e=Fi(t.stateNode,e,2),t=$e(t,e,2),t!==null&&(xa(t,2),Me(t))}function dt(t,e,l){if(t.tag===3)rr(t,t,l);else for(;e!==null;){if(e.tag===3){rr(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(nl===null||!nl.has(a))){t=fe(l,t),l=vs(2),a=$e(e,l,2),a!==null&&(gs(l,a,e,t),xa(a,2),Me(a));break}}e=e.return}}function Ec(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new j0;var n=new Set;a.set(e,n)}else n=a.get(e),n===void 0&&(n=new Set,a.set(e,n));n.has(l)||(mc=!0,n.add(l),t=L0.bind(null,t,e,l),e.then(t,t))}function L0(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,mt===t&&(P&l)===l&&(St===4||St===3&&(P&62914560)===P&&300>Se()-gc?(ut&2)===0&&da(t,0):hc|=l,fa===P&&(fa=0)),Me(t)}function dr(t,e){e===0&&(e=io()),t=Jl(t,e),t!==null&&(xa(t,e),Me(t))}function G0(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),dr(t,l)}function X0(t,e){var l=0;switch(t.tag){case 13:var a=t.stateNode,n=t.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(d(314))}a!==null&&a.delete(e),dr(t,l)}function Q0(t,e){return Bu(t,e)}var gu=null,ha=null,Ac=!1,bu=!1,Mc=!1,Ul=0;function Me(t){t!==ha&&t.next===null&&(ha===null?gu=ha=t:ha=ha.next=t),bu=!0,Ac||(Ac=!0,V0())}function nn(t,e){if(!Mc&&bu){Mc=!0;do for(var l=!1,a=gu;a!==null;){if(t!==0){var n=a.pendingLanes;if(n===0)var u=0;else{var i=a.suspendedLanes,c=a.pingedLanes;u=(1<<31-Pt(42|t)+1)-1,u&=n&~(i&~c),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(l=!0,gr(a,u))}else u=P,u=En(a,a===mt?u:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(u&3)===0||Sa(a,u)||(l=!0,gr(a,u));a=a.next}while(l);Mc=!1}}function Z0(){mr()}function mr(){bu=Ac=!1;var t=0;Ul!==0&&(P0()&&(t=Ul),Ul=0);for(var e=Se(),l=null,a=gu;a!==null;){var n=a.next,u=hr(a,e);u===0?(a.next=null,l===null?gu=n:l.next=n,n===null&&(ha=l)):(l=a,(t!==0||(u&3)!==0)&&(bu=!0)),a=n}nn(t)}function hr(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,n=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var i=31-Pt(u),c=1<<i,o=n[i];o===-1?((c&l)===0||(c&a)!==0)&&(n[i]=gd(c,e)):o<=e&&(t.expiredLanes|=c),u&=~c}if(e=mt,l=P,l=En(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,l===0||t===e&&(it===2||it===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&qu(a),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||Sa(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&qu(a),Lu(l)){case 2:case 8:l=ao;break;case 32:l=Sn;break;case 268435456:l=no;break;default:l=Sn}return a=vr.bind(null,t),l=Bu(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&qu(a),t.callbackPriority=2,t.callbackNode=null,2}function vr(t,e){if(Ht!==0&&Ht!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(vu()&&t.callbackNode!==l)return null;var a=P;return a=En(t,t===mt?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(Fs(t,a,e),hr(t,Se()),t.callbackNode!=null&&t.callbackNode===l?vr.bind(null,t):null)}function gr(t,e){if(vu())return null;Fs(t,e,!0)}function V0(){em(function(){(ut&6)!==0?Bu(lo,Z0):mr()})}function Dc(){return Ul===0&&(Ul=uo()),Ul}function br(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Rn(""+t)}function yr(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function k0(t,e,l,a,n){if(e==="submit"&&l&&l.stateNode===n){var u=br((n[Xt]||null).action),i=a.submitter;i&&(e=(e=i[Xt]||null)?br(e.formAction):i.getAttribute("formAction"),e!==null&&(u=e,i=null));var c=new Un("action","action",null,a,n);t.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Ul!==0){var o=i?yr(n,i):new FormData(n);ki(l,{pending:!0,data:o,method:n.method,action:u},null,o)}}else typeof u=="function"&&(c.preventDefault(),o=i?yr(n,i):new FormData(n),ki(l,{pending:!0,data:o,method:n.method,action:u},u,o))},currentTarget:n}]})}}for(var zc=0;zc<ri.length;zc++){var Rc=ri[zc],K0=Rc.toLowerCase(),J0=Rc[0].toUpperCase()+Rc.slice(1);ge(K0,"on"+J0)}ge(Wo,"onAnimationEnd"),ge(Fo,"onAnimationIteration"),ge(Io,"onAnimationStart"),ge("dblclick","onDoubleClick"),ge("focusin","onFocus"),ge("focusout","onBlur"),ge(r0,"onTransitionRun"),ge(d0,"onTransitionStart"),ge(m0,"onTransitionCancel"),ge(Po,"onTransitionEnd"),wl("onMouseEnter",["mouseout","mouseover"]),wl("onMouseLeave",["mouseout","mouseover"]),wl("onPointerEnter",["pointerout","pointerover"]),wl("onPointerLeave",["pointerout","pointerover"]),gl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),gl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),gl("onBeforeInput",["compositionend","keypress","textInput","paste"]),gl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),gl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),gl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var un="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(un));function pr(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],n=a.event;a=a.listeners;t:{var u=void 0;if(e)for(var i=a.length-1;0<=i;i--){var c=a[i],o=c.instance,h=c.currentTarget;if(c=c.listener,o!==u&&n.isPropagationStopped())break t;u=c,n.currentTarget=h;try{u(n)}catch(b){nu(b)}n.currentTarget=null,u=o}else for(i=0;i<a.length;i++){if(c=a[i],o=c.instance,h=c.currentTarget,c=c.listener,o!==u&&n.isPropagationStopped())break t;u=c,n.currentTarget=h;try{u(n)}catch(b){nu(b)}n.currentTarget=null,u=o}}}}function W(t,e){var l=e[Gu];l===void 0&&(l=e[Gu]=new Set);var a=t+"__bubble";l.has(a)||(Sr(e,t,2,!1),l.add(a))}function Oc(t,e,l){var a=0;e&&(a|=4),Sr(l,t,a,e)}var yu="_reactListening"+Math.random().toString(36).slice(2);function Cc(t){if(!t[yu]){t[yu]=!0,ro.forEach(function(l){l!=="selectionchange"&&($0.has(l)||Oc(l,!1,t),Oc(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[yu]||(e[yu]=!0,Oc("selectionchange",!1,e))}}function Sr(t,e,l,a){switch(Zr(e)){case 2:var n=Tm;break;case 8:n=Em;break;default:n=Zc}l=n.bind(null,e,l,t),n=void 0,!Iu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),a?n!==void 0?t.addEventListener(e,l,{capture:!0,passive:n}):t.addEventListener(e,l,!0):n!==void 0?t.addEventListener(e,l,{passive:n}):t.addEventListener(e,l,!1)}function Nc(t,e,l,a,n){var u=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var i=a.tag;if(i===3||i===4){var c=a.stateNode.containerInfo;if(c===n)break;if(i===4)for(i=a.return;i!==null;){var o=i.tag;if((o===3||o===4)&&i.stateNode.containerInfo===n)return;i=i.return}for(;c!==null;){if(i=jl(c),i===null)return;if(o=i.tag,o===5||o===6||o===26||o===27){a=u=i;continue t}c=c.parentNode}}a=a.return}Do(function(){var h=u,b=Wu(l),T=[];t:{var v=tf.get(t);if(v!==void 0){var g=Un,X=t;switch(t){case"keypress":if(Cn(l)===0)break t;case"keydown":case"keyup":g=Qd;break;case"focusin":X="focus",g=li;break;case"focusout":X="blur",g=li;break;case"beforeblur":case"afterblur":g=li;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Oo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Nd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=kd;break;case Wo:case Fo:case Io:g=Hd;break;case Po:g=Jd;break;case"scroll":case"scrollend":g=Od;break;case"wheel":g=Wd;break;case"copy":case"cut":case"paste":g=Bd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=No;break;case"toggle":case"beforetoggle":g=Id}var q=(e&4)!==0,st=!q&&(t==="scroll"||t==="scrollend"),r=q?v!==null?v+"Capture":null:v;q=[];for(var s=h,m;s!==null;){var p=s;if(m=p.stateNode,p=p.tag,p!==5&&p!==26&&p!==27||m===null||r===null||(p=Aa(s,r),p!=null&&q.push(cn(s,p,m))),st)break;s=s.return}0<q.length&&(v=new g(v,X,null,l,b),T.push({event:v,listeners:q}))}}if((e&7)===0){t:{if(v=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",v&&l!==$u&&(X=l.relatedTarget||l.fromElement)&&(jl(X)||X[Hl]))break t;if((g||v)&&(v=b.window===b?b:(v=b.ownerDocument)?v.defaultView||v.parentWindow:window,g?(X=l.relatedTarget||l.toElement,g=h,X=X?jl(X):null,X!==null&&(st=j(X),q=X.tag,X!==st||q!==5&&q!==27&&q!==6)&&(X=null)):(g=null,X=h),g!==X)){if(q=Oo,p="onMouseLeave",r="onMouseEnter",s="mouse",(t==="pointerout"||t==="pointerover")&&(q=No,p="onPointerLeave",r="onPointerEnter",s="pointer"),st=g==null?v:Ea(g),m=X==null?v:Ea(X),v=new q(p,s+"leave",g,l,b),v.target=st,v.relatedTarget=m,p=null,jl(b)===h&&(q=new q(r,s+"enter",X,l,b),q.target=m,q.relatedTarget=st,p=q),st=p,g&&X)e:{for(q=g,r=X,s=0,m=q;m;m=va(m))s++;for(m=0,p=r;p;p=va(p))m++;for(;0<s-m;)q=va(q),s--;for(;0<m-s;)r=va(r),m--;for(;s--;){if(q===r||r!==null&&q===r.alternate)break e;q=va(q),r=va(r)}q=null}else q=null;g!==null&&xr(T,v,g,q,!1),X!==null&&st!==null&&xr(T,st,X,q,!0)}}t:{if(v=h?Ea(h):window,g=v.nodeName&&v.nodeName.toLowerCase(),g==="select"||g==="input"&&v.type==="file")var U=Yo;else if(qo(v))if(Lo)U=o0;else{U=i0;var J=u0}else g=v.nodeName,!g||g.toLowerCase()!=="input"||v.type!=="checkbox"&&v.type!=="radio"?h&&Ju(h.elementType)&&(U=Yo):U=c0;if(U&&(U=U(t,h))){wo(T,U,l,b);break t}J&&J(t,v,h),t==="focusout"&&h&&v.type==="number"&&h.memoizedProps.value!=null&&Ku(v,"number",v.value)}switch(J=h?Ea(h):window,t){case"focusin":(qo(J)||J.contentEditable==="true")&&(Vl=J,oi=h,Ua=null);break;case"focusout":Ua=oi=Vl=null;break;case"mousedown":fi=!0;break;case"contextmenu":case"mouseup":case"dragend":fi=!1,Jo(T,l,b);break;case"selectionchange":if(s0)break;case"keydown":case"keyup":Jo(T,l,b)}var H;if(ni)t:{switch(t){case"compositionstart":var w="onCompositionStart";break t;case"compositionend":w="onCompositionEnd";break t;case"compositionupdate":w="onCompositionUpdate";break t}w=void 0}else Zl?jo(t,l)&&(w="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(w="onCompositionStart");w&&(Uo&&l.locale!=="ko"&&(Zl||w!=="onCompositionStart"?w==="onCompositionEnd"&&Zl&&(H=zo()):(Ve=b,Pu="value"in Ve?Ve.value:Ve.textContent,Zl=!0)),J=pu(h,w),0<J.length&&(w=new Co(w,t,null,l,b),T.push({event:w,listeners:J}),H?w.data=H:(H=Bo(l),H!==null&&(w.data=H)))),(H=t0?e0(t,l):l0(t,l))&&(w=pu(h,"onBeforeInput"),0<w.length&&(J=new Co("onBeforeInput","beforeinput",null,l,b),T.push({event:J,listeners:w}),J.data=H)),k0(T,t,h,l,b)}pr(T,e)})}function cn(t,e,l){return{instance:t,listener:e,currentTarget:l}}function pu(t,e){for(var l=e+"Capture",a=[];t!==null;){var n=t,u=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||u===null||(n=Aa(t,l),n!=null&&a.unshift(cn(t,n,u)),n=Aa(t,e),n!=null&&a.push(cn(t,n,u))),t.tag===3)return a;t=t.return}return[]}function va(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function xr(t,e,l,a,n){for(var u=e._reactName,i=[];l!==null&&l!==a;){var c=l,o=c.alternate,h=c.stateNode;if(c=c.tag,o!==null&&o===a)break;c!==5&&c!==26&&c!==27||h===null||(o=h,n?(h=Aa(l,u),h!=null&&i.unshift(cn(l,h,o))):n||(h=Aa(l,u),h!=null&&i.push(cn(l,h,o)))),l=l.return}i.length!==0&&t.push({event:e,listeners:i})}var W0=/\r\n?/g,F0=/\u0000|\uFFFD/g;function Tr(t){return(typeof t=="string"?t:""+t).replace(W0,`
`).replace(F0,"")}function Er(t,e){return e=Tr(e),Tr(t)===e}function Su(){}function ft(t,e,l,a,n,u){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||Gl(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&Gl(t,""+a);break;case"className":Mn(t,"class",a);break;case"tabIndex":Mn(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":Mn(t,l,a);break;case"style":Ao(t,a,u);break;case"data":if(e!=="object"){Mn(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Rn(""+a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(l==="formAction"?(e!=="input"&&ft(t,e,"name",n.name,n,null),ft(t,e,"formEncType",n.formEncType,n,null),ft(t,e,"formMethod",n.formMethod,n,null),ft(t,e,"formTarget",n.formTarget,n,null)):(ft(t,e,"encType",n.encType,n,null),ft(t,e,"method",n.method,n,null),ft(t,e,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Rn(""+a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=Su);break;case"onScroll":a!=null&&W("scroll",t);break;case"onScrollEnd":a!=null&&W("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(d(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(d(60));t.innerHTML=l}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=Rn(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":W("beforetoggle",t),W("toggle",t),An(t,"popover",a);break;case"xlinkActuate":ze(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":ze(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":ze(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":ze(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":ze(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":ze(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":ze(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":ze(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":ze(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":An(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=zd.get(l)||l,An(t,l,a))}}function Uc(t,e,l,a,n,u){switch(l){case"style":Ao(t,a,u);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(d(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(d(60));t.innerHTML=l}}break;case"children":typeof a=="string"?Gl(t,a):(typeof a=="number"||typeof a=="bigint")&&Gl(t,""+a);break;case"onScroll":a!=null&&W("scroll",t);break;case"onScrollEnd":a!=null&&W("scrollend",t);break;case"onClick":a!=null&&(t.onclick=Su);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!mo.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),e=l.slice(2,n?l.length-7:void 0),u=t[Xt]||null,u=u!=null?u[l]:null,typeof u=="function"&&t.removeEventListener(e,u,n),typeof a=="function")){typeof u!="function"&&u!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,n);break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):An(t,l,a)}}}function jt(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":W("error",t),W("load",t);var a=!1,n=!1,u;for(u in l)if(l.hasOwnProperty(u)){var i=l[u];if(i!=null)switch(u){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,e));default:ft(t,e,u,i,l,null)}}n&&ft(t,e,"srcSet",l.srcSet,l,null),a&&ft(t,e,"src",l.src,l,null);return;case"input":W("invalid",t);var c=u=i=n=null,o=null,h=null;for(a in l)if(l.hasOwnProperty(a)){var b=l[a];if(b!=null)switch(a){case"name":n=b;break;case"type":i=b;break;case"checked":o=b;break;case"defaultChecked":h=b;break;case"value":u=b;break;case"defaultValue":c=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(d(137,e));break;default:ft(t,e,a,b,l,null)}}So(t,u,c,o,h,i,n,!1),Dn(t);return;case"select":W("invalid",t),a=i=u=null;for(n in l)if(l.hasOwnProperty(n)&&(c=l[n],c!=null))switch(n){case"value":u=c;break;case"defaultValue":i=c;break;case"multiple":a=c;default:ft(t,e,n,c,l,null)}e=u,l=i,t.multiple=!!a,e!=null?Ll(t,!!a,e,!1):l!=null&&Ll(t,!!a,l,!0);return;case"textarea":W("invalid",t),u=n=a=null;for(i in l)if(l.hasOwnProperty(i)&&(c=l[i],c!=null))switch(i){case"value":a=c;break;case"defaultValue":n=c;break;case"children":u=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(d(91));break;default:ft(t,e,i,c,l,null)}To(t,a,n,u),Dn(t);return;case"option":for(o in l)if(l.hasOwnProperty(o)&&(a=l[o],a!=null))switch(o){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:ft(t,e,o,a,l,null)}return;case"dialog":W("beforetoggle",t),W("toggle",t),W("cancel",t),W("close",t);break;case"iframe":case"object":W("load",t);break;case"video":case"audio":for(a=0;a<un.length;a++)W(un[a],t);break;case"image":W("error",t),W("load",t);break;case"details":W("toggle",t);break;case"embed":case"source":case"link":W("error",t),W("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(h in l)if(l.hasOwnProperty(h)&&(a=l[h],a!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,e));default:ft(t,e,h,a,l,null)}return;default:if(Ju(e)){for(b in l)l.hasOwnProperty(b)&&(a=l[b],a!==void 0&&Uc(t,e,b,a,l,void 0));return}}for(c in l)l.hasOwnProperty(c)&&(a=l[c],a!=null&&ft(t,e,c,a,l,null))}function I0(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,u=null,i=null,c=null,o=null,h=null,b=null;for(g in l){var T=l[g];if(l.hasOwnProperty(g)&&T!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":o=T;default:a.hasOwnProperty(g)||ft(t,e,g,null,a,T)}}for(var v in a){var g=a[v];if(T=l[v],a.hasOwnProperty(v)&&(g!=null||T!=null))switch(v){case"type":u=g;break;case"name":n=g;break;case"checked":h=g;break;case"defaultChecked":b=g;break;case"value":i=g;break;case"defaultValue":c=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(d(137,e));break;default:g!==T&&ft(t,e,v,g,a,T)}}ku(t,i,c,o,h,b,u,n);return;case"select":g=i=c=v=null;for(u in l)if(o=l[u],l.hasOwnProperty(u)&&o!=null)switch(u){case"value":break;case"multiple":g=o;default:a.hasOwnProperty(u)||ft(t,e,u,null,a,o)}for(n in a)if(u=a[n],o=l[n],a.hasOwnProperty(n)&&(u!=null||o!=null))switch(n){case"value":v=u;break;case"defaultValue":c=u;break;case"multiple":i=u;default:u!==o&&ft(t,e,n,u,a,o)}e=c,l=i,a=g,v!=null?Ll(t,!!l,v,!1):!!a!=!!l&&(e!=null?Ll(t,!!l,e,!0):Ll(t,!!l,l?[]:"",!1));return;case"textarea":g=v=null;for(c in l)if(n=l[c],l.hasOwnProperty(c)&&n!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:ft(t,e,c,null,a,n)}for(i in a)if(n=a[i],u=l[i],a.hasOwnProperty(i)&&(n!=null||u!=null))switch(i){case"value":v=n;break;case"defaultValue":g=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(d(91));break;default:n!==u&&ft(t,e,i,n,a,u)}xo(t,v,g);return;case"option":for(var X in l)if(v=l[X],l.hasOwnProperty(X)&&v!=null&&!a.hasOwnProperty(X))switch(X){case"selected":t.selected=!1;break;default:ft(t,e,X,null,a,v)}for(o in a)if(v=a[o],g=l[o],a.hasOwnProperty(o)&&v!==g&&(v!=null||g!=null))switch(o){case"selected":t.selected=v&&typeof v!="function"&&typeof v!="symbol";break;default:ft(t,e,o,v,a,g)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var q in l)v=l[q],l.hasOwnProperty(q)&&v!=null&&!a.hasOwnProperty(q)&&ft(t,e,q,null,a,v);for(h in a)if(v=a[h],g=l[h],a.hasOwnProperty(h)&&v!==g&&(v!=null||g!=null))switch(h){case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(d(137,e));break;default:ft(t,e,h,v,a,g)}return;default:if(Ju(e)){for(var st in l)v=l[st],l.hasOwnProperty(st)&&v!==void 0&&!a.hasOwnProperty(st)&&Uc(t,e,st,void 0,a,v);for(b in a)v=a[b],g=l[b],!a.hasOwnProperty(b)||v===g||v===void 0&&g===void 0||Uc(t,e,b,v,a,g);return}}for(var r in l)v=l[r],l.hasOwnProperty(r)&&v!=null&&!a.hasOwnProperty(r)&&ft(t,e,r,null,a,v);for(T in a)v=a[T],g=l[T],!a.hasOwnProperty(T)||v===g||v==null&&g==null||ft(t,e,T,v,a,g)}var _c=null,Hc=null;function xu(t){return t.nodeType===9?t:t.ownerDocument}function Ar(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Mr(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function jc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Bc=null;function P0(){var t=window.event;return t&&t.type==="popstate"?t===Bc?!1:(Bc=t,!0):(Bc=null,!1)}var Dr=typeof setTimeout=="function"?setTimeout:void 0,tm=typeof clearTimeout=="function"?clearTimeout:void 0,zr=typeof Promise=="function"?Promise:void 0,em=typeof queueMicrotask=="function"?queueMicrotask:typeof zr<"u"?function(t){return zr.resolve(null).then(t).catch(lm)}:Dr;function lm(t){setTimeout(function(){throw t})}function cl(t){return t==="head"}function Rr(t,e){var l=e,a=0,n=0;do{var u=l.nextSibling;if(t.removeChild(l),u&&u.nodeType===8)if(l=u.data,l==="/$"){if(0<a&&8>a){l=a;var i=t.ownerDocument;if(l&1&&on(i.documentElement),l&2&&on(i.body),l&4)for(l=i.head,on(l),i=l.firstChild;i;){var c=i.nextSibling,o=i.nodeName;i[Ta]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=c}}if(n===0){t.removeChild(u),gn(e);return}n--}else l==="$"||l==="$?"||l==="$!"?n++:a=l.charCodeAt(0)-48;else a=0;l=u}while(l);gn(e)}function qc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":qc(l),Xu(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function am(t,e,l,a){for(;t.nodeType===1;){var n=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[Ta])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=ye(t.nextSibling),t===null)break}return null}function nm(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=ye(t.nextSibling),t===null))return null;return t}function wc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function um(t,e){var l=t.ownerDocument;if(t.data!=="$?"||l.readyState==="complete")e();else{var a=function(){e(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function ye(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var Yc=null;function Or(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"){if(e===0)return t;e--}else l==="/$"&&e++}t=t.previousSibling}return null}function Cr(t,e,l){switch(e=xu(l),t){case"html":if(t=e.documentElement,!t)throw Error(d(452));return t;case"head":if(t=e.head,!t)throw Error(d(453));return t;case"body":if(t=e.body,!t)throw Error(d(454));return t;default:throw Error(d(451))}}function on(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Xu(t)}var ve=new Map,Nr=new Set;function Tu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ge=z.d;z.d={f:im,r:cm,D:om,C:fm,L:sm,m:rm,X:mm,S:dm,M:hm};function im(){var t=Ge.f(),e=mu();return t||e}function cm(t){var e=Bl(t);e!==null&&e.tag===5&&e.type==="form"?Ff(e):Ge.r(t)}var ga=typeof document>"u"?null:document;function Ur(t,e,l){var a=ga;if(a&&typeof e=="string"&&e){var n=oe(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),Nr.has(n)||(Nr.add(n),t={rel:t,crossOrigin:l,href:e},a.querySelector(n)===null&&(e=a.createElement("link"),jt(e,"link",t),Rt(e),a.head.appendChild(e)))}}function om(t){Ge.D(t),Ur("dns-prefetch",t,null)}function fm(t,e){Ge.C(t,e),Ur("preconnect",t,e)}function sm(t,e,l){Ge.L(t,e,l);var a=ga;if(a&&t&&e){var n='link[rel="preload"][as="'+oe(e)+'"]';e==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+oe(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+oe(l.imageSizes)+'"]')):n+='[href="'+oe(t)+'"]';var u=n;switch(e){case"style":u=ba(t);break;case"script":u=ya(t)}ve.has(u)||(t=M({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),ve.set(u,t),a.querySelector(n)!==null||e==="style"&&a.querySelector(fn(u))||e==="script"&&a.querySelector(sn(u))||(e=a.createElement("link"),jt(e,"link",t),Rt(e),a.head.appendChild(e)))}}function rm(t,e){Ge.m(t,e);var l=ga;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+oe(a)+'"][href="'+oe(t)+'"]',u=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=ya(t)}if(!ve.has(u)&&(t=M({rel:"modulepreload",href:t},e),ve.set(u,t),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(sn(u)))return}a=l.createElement("link"),jt(a,"link",t),Rt(a),l.head.appendChild(a)}}}function dm(t,e,l){Ge.S(t,e,l);var a=ga;if(a&&t){var n=ql(a).hoistableStyles,u=ba(t);e=e||"default";var i=n.get(u);if(!i){var c={loading:0,preload:null};if(i=a.querySelector(fn(u)))c.loading=5;else{t=M({rel:"stylesheet",href:t,"data-precedence":e},l),(l=ve.get(u))&&Lc(t,l);var o=i=a.createElement("link");Rt(o),jt(o,"link",t),o._p=new Promise(function(h,b){o.onload=h,o.onerror=b}),o.addEventListener("load",function(){c.loading|=1}),o.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Eu(i,e,a)}i={type:"stylesheet",instance:i,count:1,state:c},n.set(u,i)}}}function mm(t,e){Ge.X(t,e);var l=ga;if(l&&t){var a=ql(l).hoistableScripts,n=ya(t),u=a.get(n);u||(u=l.querySelector(sn(n)),u||(t=M({src:t,async:!0},e),(e=ve.get(n))&&Gc(t,e),u=l.createElement("script"),Rt(u),jt(u,"link",t),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(n,u))}}function hm(t,e){Ge.M(t,e);var l=ga;if(l&&t){var a=ql(l).hoistableScripts,n=ya(t),u=a.get(n);u||(u=l.querySelector(sn(n)),u||(t=M({src:t,async:!0,type:"module"},e),(e=ve.get(n))&&Gc(t,e),u=l.createElement("script"),Rt(u),jt(u,"link",t),l.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},a.set(n,u))}}function _r(t,e,l,a){var n=(n=Z.current)?Tu(n):null;if(!n)throw Error(d(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=ba(l.href),l=ql(n).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=ba(l.href);var u=ql(n).hoistableStyles,i=u.get(t);if(i||(n=n.ownerDocument||n,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,i),(u=n.querySelector(fn(t)))&&!u._p&&(i.instance=u,i.state.loading=5),ve.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},ve.set(t,l),u||vm(n,t,l,i.state))),e&&a===null)throw Error(d(528,""));return i}if(e&&a!==null)throw Error(d(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=ya(l),l=ql(n).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,t))}}function ba(t){return'href="'+oe(t)+'"'}function fn(t){return'link[rel="stylesheet"]['+t+"]"}function Hr(t){return M({},t,{"data-precedence":t.precedence,precedence:null})}function vm(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),jt(e,"link",l),Rt(e),t.head.appendChild(e))}function ya(t){return'[src="'+oe(t)+'"]'}function sn(t){return"script[async]"+t}function jr(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+oe(l.href)+'"]');if(a)return e.instance=a,Rt(a),a;var n=M({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),Rt(a),jt(a,"style",n),Eu(a,l.precedence,t),e.instance=a;case"stylesheet":n=ba(l.href);var u=t.querySelector(fn(n));if(u)return e.state.loading|=4,e.instance=u,Rt(u),u;a=Hr(l),(n=ve.get(n))&&Lc(a,n),u=(t.ownerDocument||t).createElement("link"),Rt(u);var i=u;return i._p=new Promise(function(c,o){i.onload=c,i.onerror=o}),jt(u,"link",a),e.state.loading|=4,Eu(u,l.precedence,t),e.instance=u;case"script":return u=ya(l.src),(n=t.querySelector(sn(u)))?(e.instance=n,Rt(n),n):(a=l,(n=ve.get(u))&&(a=M({},l),Gc(a,n)),t=t.ownerDocument||t,n=t.createElement("script"),Rt(n),jt(n,"link",a),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(d(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,Eu(a,l.precedence,t));return e.instance}function Eu(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,u=n,i=0;i<a.length;i++){var c=a[i];if(c.dataset.precedence===e)u=c;else if(u!==n)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function Lc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Gc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Au=null;function Br(t,e,l){if(Au===null){var a=new Map,n=Au=new Map;n.set(l,a)}else n=Au,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),n=0;n<l.length;n++){var u=l[n];if(!(u[Ta]||u[wt]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var i=u.getAttribute(e)||"";i=t+i;var c=a.get(i);c?c.push(u):a.set(i,[u])}}return a}function qr(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function gm(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function wr(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var rn=null;function bm(){}function ym(t,e,l){if(rn===null)throw Error(d(475));var a=rn;if(e.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var n=ba(l.href),u=t.querySelector(fn(n));if(u){t=u._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(a.count++,a=Mu.bind(a),t.then(a,a)),e.state.loading|=4,e.instance=u,Rt(u);return}u=t.ownerDocument||t,l=Hr(l),(n=ve.get(n))&&Lc(l,n),u=u.createElement("link"),Rt(u);var i=u;i._p=new Promise(function(c,o){i.onload=c,i.onerror=o}),jt(u,"link",l),e.instance=u}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(a.count++,e=Mu.bind(a),t.addEventListener("load",e),t.addEventListener("error",e))}}function pm(){if(rn===null)throw Error(d(475));var t=rn;return t.stylesheets&&t.count===0&&Xc(t,t.stylesheets),0<t.count?function(e){var l=setTimeout(function(){if(t.stylesheets&&Xc(t,t.stylesheets),t.unsuspend){var a=t.unsuspend;t.unsuspend=null,a()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(l)}}:null}function Mu(){if(this.count--,this.count===0){if(this.stylesheets)Xc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Du=null;function Xc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Du=new Map,e.forEach(Sm,t),Du=null,Mu.call(t))}function Sm(t,e){if(!(e.state.loading&4)){var l=Du.get(t);if(l)var a=l.get(null);else{l=new Map,Du.set(t,l);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<n.length;u++){var i=n[u];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(l.set(i.dataset.precedence,i),a=i)}a&&l.set(null,a)}n=e.instance,i=n.getAttribute("data-precedence"),u=l.get(i)||a,u===a&&l.set(null,n),l.set(i,n),this.count++,a=Mu.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),u?u.parentNode.insertBefore(n,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var dn={$$typeof:yt,Provider:null,Consumer:null,_currentValue:L,_currentValue2:L,_threadCount:0};function xm(t,e,l,a,n,u,i,c){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wu(0),this.hiddenUpdates=wu(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=u,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function Yr(t,e,l,a,n,u,i,c,o,h,b,T){return t=new xm(t,e,l,i,c,o,h,T),e=1,u===!0&&(e|=24),u=ee(3,null,null,e),t.current=u,u.stateNode=t,e=Ei(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:a,isDehydrated:l,cache:e},zi(u),t}function Lr(t){return t?(t=$l,t):$l}function Gr(t,e,l,a,n,u){n=Lr(n),a.context===null?a.context=n:a.pendingContext=n,a=Je(e),a.payload={element:l},u=u===void 0?null:u,u!==null&&(a.callback=u),l=$e(t,a,e),l!==null&&(ie(l,t,e),Ga(l,t,e))}function Xr(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function Qc(t,e){Xr(t,e),(t=t.alternate)&&Xr(t,e)}function Qr(t){if(t.tag===13){var e=Jl(t,67108864);e!==null&&ie(e,t,67108864),Qc(t,67108864)}}var zu=!0;function Tm(t,e,l,a){var n=y.T;y.T=null;var u=z.p;try{z.p=2,Zc(t,e,l,a)}finally{z.p=u,y.T=n}}function Em(t,e,l,a){var n=y.T;y.T=null;var u=z.p;try{z.p=8,Zc(t,e,l,a)}finally{z.p=u,y.T=n}}function Zc(t,e,l,a){if(zu){var n=Vc(a);if(n===null)Nc(t,e,a,Ru,l),Vr(t,a);else if(Mm(n,t,e,l,a))a.stopPropagation();else if(Vr(t,a),e&4&&-1<Am.indexOf(t)){for(;n!==null;){var u=Bl(n);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var i=vl(u.pendingLanes);if(i!==0){var c=u;for(c.pendingLanes|=2,c.entangledLanes|=2;i;){var o=1<<31-Pt(i);c.entanglements[1]|=o,i&=~o}Me(u),(ut&6)===0&&(ru=Se()+500,nn(0))}}break;case 13:c=Jl(u,2),c!==null&&ie(c,u,2),mu(),Qc(u,2)}if(u=Vc(a),u===null&&Nc(t,e,a,Ru,l),u===n)break;n=u}n!==null&&a.stopPropagation()}else Nc(t,e,a,null,l)}}function Vc(t){return t=Wu(t),kc(t)}var Ru=null;function kc(t){if(Ru=null,t=jl(t),t!==null){var e=j(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=R(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Ru=t,null}function Zr(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(fd()){case lo:return 2;case ao:return 8;case Sn:case sd:return 32;case no:return 268435456;default:return 32}default:return 32}}var Kc=!1,ol=null,fl=null,sl=null,mn=new Map,hn=new Map,rl=[],Am="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vr(t,e){switch(t){case"focusin":case"focusout":ol=null;break;case"dragenter":case"dragleave":fl=null;break;case"mouseover":case"mouseout":sl=null;break;case"pointerover":case"pointerout":mn.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":hn.delete(e.pointerId)}}function vn(t,e,l,a,n,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:u,targetContainers:[n]},e!==null&&(e=Bl(e),e!==null&&Qr(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function Mm(t,e,l,a,n){switch(e){case"focusin":return ol=vn(ol,t,e,l,a,n),!0;case"dragenter":return fl=vn(fl,t,e,l,a,n),!0;case"mouseover":return sl=vn(sl,t,e,l,a,n),!0;case"pointerover":var u=n.pointerId;return mn.set(u,vn(mn.get(u)||null,t,e,l,a,n)),!0;case"gotpointercapture":return u=n.pointerId,hn.set(u,vn(hn.get(u)||null,t,e,l,a,n)),!0}return!1}function kr(t){var e=jl(t.target);if(e!==null){var l=j(e);if(l!==null){if(e=l.tag,e===13){if(e=R(l),e!==null){t.blockedOn=e,yd(t.priority,function(){if(l.tag===13){var a=ue();a=Yu(a);var n=Jl(l,a);n!==null&&ie(n,l,a),Qc(l,a)}});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ou(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=Vc(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);$u=a,l.target.dispatchEvent(a),$u=null}else return e=Bl(l),e!==null&&Qr(e),t.blockedOn=l,!1;e.shift()}return!0}function Kr(t,e,l){Ou(t)&&l.delete(e)}function Dm(){Kc=!1,ol!==null&&Ou(ol)&&(ol=null),fl!==null&&Ou(fl)&&(fl=null),sl!==null&&Ou(sl)&&(sl=null),mn.forEach(Kr),hn.forEach(Kr)}function Cu(t,e){t.blockedOn===e&&(t.blockedOn=null,Kc||(Kc=!0,A.unstable_scheduleCallback(A.unstable_NormalPriority,Dm)))}var Nu=null;function Jr(t){Nu!==t&&(Nu=t,A.unstable_scheduleCallback(A.unstable_NormalPriority,function(){Nu===t&&(Nu=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],n=t[e+2];if(typeof a!="function"){if(kc(a||l)===null)continue;break}var u=Bl(l);u!==null&&(t.splice(e,3),e-=3,ki(u,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function gn(t){function e(o){return Cu(o,t)}ol!==null&&Cu(ol,t),fl!==null&&Cu(fl,t),sl!==null&&Cu(sl,t),mn.forEach(e),hn.forEach(e);for(var l=0;l<rl.length;l++){var a=rl[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<rl.length&&(l=rl[0],l.blockedOn===null);)kr(l),l.blockedOn===null&&rl.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],u=l[a+1],i=n[Xt]||null;if(typeof u=="function")i||Jr(l);else if(i){var c=null;if(u&&u.hasAttribute("formAction")){if(n=u,i=u[Xt]||null)c=i.formAction;else if(kc(n)!==null)continue}else c=i.action;typeof c=="function"?l[a+1]=c:(l.splice(a,3),a-=3),Jr(l)}}}function Jc(t){this._internalRoot=t}Uu.prototype.render=Jc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(d(409));var l=e.current,a=ue();Gr(l,a,t,e,null,null)},Uu.prototype.unmount=Jc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Gr(t.current,2,null,t,null,null),mu(),e[Hl]=null}};function Uu(t){this._internalRoot=t}Uu.prototype.unstable_scheduleHydration=function(t){if(t){var e=fo();t={blockedOn:null,target:t,priority:e};for(var l=0;l<rl.length&&e!==0&&e<rl[l].priority;l++);rl.splice(l,0,t),l===0&&kr(t)}};var $r=G.version;if($r!=="19.1.1")throw Error(d(527,$r,"19.1.1"));z.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(d(188)):(t=Object.keys(t).join(","),Error(d(268,t)));return t=O(e),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var zm={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:y,reconcilerVersion:"19.1.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _u=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_u.isDisabled&&_u.supportsFiber)try{pa=_u.inject(zm),It=_u}catch{}}return yn.createRoot=function(t,e){if(!N(t))throw Error(d(299));var l=!1,a="",n=rs,u=ds,i=ms,c=null;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(i=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(c=e.unstable_transitionCallbacks)),e=Yr(t,1,!1,null,null,l,a,n,u,i,c,null),t[Hl]=e.current,Cc(t),new Jc(e)},yn.hydrateRoot=function(t,e,l){if(!N(t))throw Error(d(299));var a=!1,n="",u=rs,i=ds,c=ms,o=null,h=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(u=l.onUncaughtError),l.onCaughtError!==void 0&&(i=l.onCaughtError),l.onRecoverableError!==void 0&&(c=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(o=l.unstable_transitionCallbacks),l.formState!==void 0&&(h=l.formState)),e=Yr(t,1,!0,e,l??null,a,n,u,i,c,o,h),e.context=Lr(null),l=e.current,a=ue(),a=Yu(a),n=Je(a),n.callback=null,$e(l,n,a),l=a,e.current.lanes=l,xa(e,l),Me(e),t[Hl]=e.current,Cc(t),new Uu(e)},yn.version="19.1.1",yn}var ud;function qm(){if(ud)return Fc.exports;ud=1;function A(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A)}catch(G){console.error(G)}}return A(),Fc.exports=Bm(),Fc.exports}var wm=qm();const Ym=()=>{const[A,G]=ht.useState(!0),[Q,d]=ht.useState({x:0,y:0});ht.useEffect(()=>{document.documentElement.classList.add("dark");const R=O=>{const x=O.currentTarget.getBoundingClientRect();d({x:(O.clientX-x.left)/x.width*100,y:(O.clientY-x.top)/x.height*100})},_=document.querySelector(".navbar-container");return _?.addEventListener("mousemove",R),()=>{_?.removeEventListener("mousemove",R)}},[]);const N=()=>{G(!A),document.documentElement.classList.toggle("dark")},j=()=>{window.location.reload()};return S.jsxs("nav",{className:`navbar-container relative overflow-hidden backdrop-blur-xl border-b transition-all duration-300 ${A?"bg-black/20 border-white/10 text-white":"bg-white/20 border-black/10 text-gray-900"}`,children:[S.jsx("div",{className:"absolute inset-0 opacity-30 transition-all duration-300 pointer-events-none",style:{background:`radial-gradient(600px circle at ${Q.x}% ${Q.y}%, ${A?"rgba(99, 102, 241, 0.15), rgba(168, 85, 247, 0.15)":"rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.15)"}, transparent 70%)`}}),S.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:S.jsxs("div",{className:"flex items-center justify-between h-16",children:[S.jsxs("div",{className:"flex items-center space-x-3",children:[S.jsx("div",{className:`w-10 h-10 rounded-xl backdrop-blur-xl flex items-center justify-center transition-all duration-300 ${A?"bg-white/10 border border-white/20":"bg-black/10 border border-black/20"}`,children:S.jsx("span",{className:"text-xl",children:"🚀"})}),S.jsx("h1",{onClick:j,className:"text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-pulse cursor-pointer hover:scale-105 transition-transform duration-300",children:"Tech Dashboard"})]}),S.jsxs("div",{className:"flex items-center space-x-6",children:[S.jsxs("div",{className:`hidden md:flex items-center space-x-2 px-4 py-2 rounded-full backdrop-blur-xl transition-all duration-300 ${A?"bg-white/10 border border-white/20":"bg-black/10 border border-black/20"}`,children:[S.jsx("span",{className:"text-sm font-medium",children:"Learn"}),S.jsx("span",{className:A?"text-blue-300":"text-blue-600",children:"•"}),S.jsx("span",{className:"text-sm font-medium",children:"Practice"}),S.jsx("span",{className:A?"text-purple-300":"text-purple-600",children:"•"}),S.jsx("span",{className:"text-sm font-medium",children:"Master"})]}),S.jsxs("button",{onClick:N,className:`relative w-12 h-12 rounded-full backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95 ${A?"bg-white/10 border border-white/20 hover:bg-white/20":"bg-black/10 border border-black/20 hover:bg-black/20"}`,children:[S.jsx("div",{className:"absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 opacity-0 hover:opacity-100 transition-opacity duration-300"}),S.jsx("span",{className:"relative z-10 text-lg",children:A?"☀️":"🌙"})]})]})]})})]})},Lm=({tech:A,isActive:G,onClick:Q})=>{const[d,N]=ht.useState({x:50,y:50}),[j,R]=ht.useState(!1),[_,O]=ht.useState(!1);ht.useEffect(()=>{const nt=()=>{O(document.documentElement.classList.contains("dark"))};nt();const V=new MutationObserver(nt);return V.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),()=>V.disconnect()},[]);const x=nt=>{const V=nt.currentTarget.getBoundingClientRect();N({x:(nt.clientX-V.left)/V.width*100,y:(nt.clientY-V.top)/V.height*100})},M=nt=>({HTML:"🌐",CSS:"🎨",JavaScript:"⚡",React:"⚛️",SQL:"🗄️",Python:"🐍"})[nt]||"📄",F=nt=>{const Y={HTML:{light:"from-orange-400/80 via-red-400/80 to-pink-400/80",dark:"from-orange-500/60 via-red-500/60 to-pink-500/60"},CSS:{light:"from-blue-400/80 via-indigo-400/80 to-purple-400/80",dark:"from-blue-500/60 via-indigo-500/60 to-purple-500/60"},JavaScript:{light:"from-yellow-400/80 via-orange-400/80 to-red-400/80",dark:"from-yellow-500/60 via-orange-500/60 to-red-500/60"},React:{light:"from-cyan-400/80 via-blue-400/80 to-indigo-400/80",dark:"from-cyan-500/60 via-blue-500/60 to-indigo-500/60"},SQL:{light:"from-green-400/80 via-teal-400/80 to-cyan-400/80",dark:"from-green-500/60 via-teal-500/60 to-cyan-500/60"},Python:{light:"from-green-400/80 via-blue-400/80 to-indigo-400/80",dark:"from-green-500/60 via-blue-500/60 to-indigo-500/60"}}[nt]||{light:"from-gray-400/80 to-gray-500/80",dark:"from-gray-500/60 to-gray-600/60"};return _?Y.dark:Y.light},lt=()=>{Q(G?null:A)};return S.jsxs("div",{onClick:lt,onMouseMove:x,onMouseEnter:()=>R(!0),onMouseLeave:()=>R(!1),className:`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${G?"shadow-2xl shadow-blue-500/25":"hover:shadow-xl hover:shadow-purple-500/20"}`,children:[S.jsx("div",{className:`absolute inset-0 backdrop-blur-xl border transition-all duration-300 rounded-2xl ${_?"bg-white/10 border-white/20":"bg-white/40 border-white/30"}`}),S.jsx("div",{className:`absolute inset-0 opacity-0 transition-all duration-300 rounded-2xl ${j||G?"opacity-100":"opacity-0"}`,style:{background:`radial-gradient(400px circle at ${d.x}% ${d.y}%, ${G?"rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3)":"rgba(147, 51, 234, 0.2), rgba(59, 130, 246, 0.2)"}, transparent 70%)`}}),G&&S.jsx("div",{className:`absolute inset-0 bg-gradient-to-br ${F(A)} rounded-2xl`}),S.jsxs("div",{className:"relative z-10 p-8",children:[S.jsxs("div",{className:"text-center",children:[S.jsx("div",{className:`text-5xl mb-4 transition-all duration-300 ${j?"animate-bounce":""} ${G?"drop-shadow-lg":""}`,children:M(A)}),S.jsx("h3",{className:`text-xl font-bold mb-2 transition-all duration-300 ${G?"text-white drop-shadow-md":_?"text-white":"text-gray-900"}`,children:A}),S.jsx("p",{className:`text-sm transition-all duration-300 ${G?"text-white/90":_?"text-gray-300":"text-gray-600"}`,children:G?"Click to hide documentation":"Click to view documentation"}),j&&S.jsxs(S.Fragment,{children:[S.jsx("div",{className:"absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-ping"}),S.jsx("div",{className:"absolute bottom-6 left-6 w-1 h-1 bg-purple-400 rounded-full animate-pulse"}),S.jsx("div",{className:"absolute top-8 left-8 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce"})]})]}),G&&S.jsxs("div",{className:"absolute top-4 right-4 flex space-x-1",children:[S.jsx("div",{className:"w-2 h-2 bg-white rounded-full animate-pulse"}),S.jsx("div",{className:"w-2 h-2 bg-white/70 rounded-full animate-pulse delay-75"}),S.jsx("div",{className:"w-2 h-2 bg-white/40 rounded-full animate-pulse delay-150"})]}),S.jsx("div",{className:`absolute inset-0 rounded-2xl transition-all duration-300 pointer-events-none ${j?`bg-gradient-to-r ${F(A)} opacity-20 blur-xl`:"opacity-0"}`})]})]})},Gm=({code:A,language:G="html"})=>{const[Q,d]=ht.useState(!1),[N,j]=ht.useState(!1);ht.useEffect(()=>{const _=()=>{j(document.documentElement.classList.contains("dark"))};_();const O=new MutationObserver(_);return O.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),()=>O.disconnect()},[]);const R=()=>{navigator.clipboard.writeText(A),d(!0),setTimeout(()=>d(!1),2e3)};return S.jsxs("div",{className:`relative rounded-xl overflow-hidden backdrop-blur-xl border transition-all duration-300 ${N?"bg-black/40 border-white/10":"bg-white/40 border-black/10"}`,children:[S.jsxs("div",{className:`flex items-center justify-between px-4 py-3 border-b ${N?"bg-white/5 border-white/10":"bg-black/5 border-black/10"}`,children:[S.jsxs("div",{className:"flex items-center space-x-3",children:[S.jsxs("div",{className:"flex space-x-1",children:[S.jsx("div",{className:"w-3 h-3 bg-red-400 rounded-full"}),S.jsx("div",{className:"w-3 h-3 bg-yellow-400 rounded-full"}),S.jsx("div",{className:"w-3 h-3 bg-green-400 rounded-full"})]}),S.jsx("span",{className:`text-sm font-mono font-medium ${N?"text-gray-300":"text-gray-700"}`,children:G.toUpperCase()})]}),S.jsx("button",{onClick:R,className:`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-300 hover:scale-105 active:scale-95 ${Q?"bg-green-500/80 text-white shadow-lg shadow-green-500/25":N?"bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20":"bg-black/10 text-gray-700 hover:bg-black/20 border border-black/20"}`,children:Q?"✓ Copied!":"📋 Copy"})]}),S.jsx("pre",{className:"p-6 overflow-x-auto",children:S.jsx("code",{className:`text-sm font-mono leading-relaxed ${N?"text-gray-300":"text-gray-800"}`,children:A})})]})},Xm=({readme:A})=>{const[G,Q]=ht.useState({x:50,y:50}),[d,N]=ht.useState(!1);ht.useEffect(()=>{const R=()=>{N(document.documentElement.classList.contains("dark"))};R();const _=new MutationObserver(R);return _.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),()=>_.disconnect()},[]);const j=R=>{const _=R.currentTarget.getBoundingClientRect();Q({x:(R.clientX-_.left)/_.width*100,y:(R.clientY-_.top)/_.height*100})};return A?S.jsxs("div",{className:"relative overflow-hidden rounded-2xl backdrop-blur-xl border transition-all duration-300",onMouseMove:j,children:[S.jsx("div",{className:`absolute inset-0 ${d?"bg-white/5 border-white/10":"bg-white/60 border-white/30"} rounded-2xl border`}),S.jsx("div",{className:"absolute inset-0 opacity-30 rounded-2xl transition-all duration-300",style:{background:`radial-gradient(800px circle at ${G.x}% ${G.y}%, ${d?"rgba(99, 102, 241, 0.2), rgba(168, 85, 247, 0.2)":"rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.15)"}, transparent 70%)`}}),S.jsxs("div",{className:"relative z-10",children:[S.jsxs("div",{className:`p-8 border-b ${d?"border-white/10":"border-black/10"}`,children:[S.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-indigo-600/80 via-purple-600/80 to-blue-600/80 rounded-t-2xl",style:{background:`linear-gradient(135deg, 
                rgba(99, 102, 241, ${d?"0.6":"0.8"}) 0%, 
                rgba(168, 85, 247, ${d?"0.6":"0.8"}) 50%, 
                rgba(59, 130, 246, ${d?"0.6":"0.8"}) 100%)`}}),S.jsxs("div",{className:"relative z-10",children:[S.jsx("h1",{className:"text-4xl font-bold text-white mb-4 drop-shadow-lg",children:A.title}),S.jsx("p",{className:"text-white/90 text-lg leading-relaxed",children:A.description})]})]}),S.jsx("div",{className:"relative z-10 p-8",children:A.sections.map((R,_)=>S.jsxs("div",{className:"mb-12 last:mb-0 group",children:[S.jsxs("div",{className:"flex items-center mb-6",children:[S.jsx("div",{className:`w-12 h-12 rounded-2xl backdrop-blur-xl flex items-center justify-center text-lg font-bold mr-4 transition-all duration-300 group-hover:scale-110 ${d?"bg-gradient-to-br from-indigo-500/80 to-purple-500/80 text-white border border-white/20":"bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/25"}`,children:_+1}),S.jsx("h2",{className:`text-2xl font-bold ${d?"text-white":"text-gray-900"}`,children:R.title})]}),S.jsx("p",{className:`text-lg mb-6 leading-relaxed ${d?"text-gray-300":"text-gray-700"}`,children:R.content}),S.jsx(Gm,{code:R.code,language:"html"})]},_))})]}),S.jsx("div",{className:"absolute top-20 right-10 w-3 h-3 bg-blue-400/50 rounded-full animate-float delay-1000"}),S.jsx("div",{className:"absolute bottom-32 left-12 w-2 h-2 bg-purple-400/50 rounded-full animate-float delay-2000"}),S.jsx("div",{className:"absolute top-40 left-20 w-1 h-1 bg-pink-400/50 rounded-full animate-float delay-3000"})]}):S.jsxs("div",{className:"relative overflow-hidden rounded-2xl backdrop-blur-xl border transition-all duration-300",onMouseMove:j,children:[S.jsx("div",{className:`absolute inset-0 ${d?"bg-white/5 border-white/10":"bg-white/60 border-white/30"} rounded-2xl border`}),S.jsx("div",{className:"absolute inset-0 opacity-40 rounded-2xl transition-all duration-300",style:{background:`radial-gradient(800px circle at ${G.x}% ${G.y}%, ${d?"rgba(99, 102, 241, 0.15), rgba(168, 85, 247, 0.15)":"rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2)"}, transparent 70%)`}}),S.jsxs("div",{className:"relative z-10 p-12 text-center",children:[S.jsx("div",{className:"text-8xl mb-6 animate-float",children:"📚"}),S.jsx("h2",{className:"text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent",children:"Welcome to Tech Dashboard"}),S.jsx("p",{className:`text-lg mb-8 max-w-2xl mx-auto ${d?"text-gray-300":"text-gray-700"}`,children:"Select a technology from the containers above to view its documentation, examples, and code snippets."}),S.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto",children:[{icon:"📖",text:"Study comprehensive guides",delay:"0ms"},{icon:"💻",text:"Copy code examples",delay:"200ms"},{icon:"🚀",text:"Quick revision notes",delay:"400ms"}].map((R,_)=>S.jsxs("div",{className:`p-6 rounded-xl backdrop-blur-xl border transition-all duration-500 hover:scale-105 ${d?"bg-white/10 border-white/20 hover:bg-white/20":"bg-white/40 border-white/40 hover:bg-white/60"}`,style:{animationDelay:R.delay},children:[S.jsx("div",{className:"text-3xl mb-3",children:R.icon}),S.jsx("p",{className:`text-sm font-medium ${d?"text-gray-300":"text-gray-700"}`,children:R.text})]},_))})]}),S.jsx("div",{className:"absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-float delay-1000"}),S.jsx("div",{className:"absolute top-20 right-20 w-3 h-3 bg-purple-400 rounded-full animate-float delay-2000"}),S.jsx("div",{className:"absolute bottom-20 left-20 w-1 h-1 bg-pink-400 rounded-full animate-float delay-3000"})]})},id=document.createElement("style");id.textContent=`
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(180deg); }
  }
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
`;document.head.appendChild(id);const Qm={title:"HTML - HyperText Markup Language",description:"HTML is the standard markup language for creating web pages. It describes the structure of a web page using markup elements.",sections:[{title:"What is HTML?",content:"HTML is the standard markup language used to create web pages. It describes the structure and content of a webpage using elements and tags.",code:`<!-- HTML uses tags to structure content -->
<h1>This is a heading</h1>
<p>This is a paragraph with <strong>bold</strong> and <em>italic</em> text.</p>
<a href="https://example.com">This is a link</a>`},{title:"Basic HTML Structure",content:"HTML documents have a basic structure that includes DOCTYPE, html, head, and body elements. This structure provides the foundation for all web pages.",code:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
</head>
<body>
    <!-- Content goes here -->
</body>
</html>`},{title:"Block Elements",content:"Block elements take up the full width available and start on a new line. Common block elements include div, headings, paragraphs, lists, and semantic elements.",code:`<!-- Generic container -->
<div>This is a div block</div>

<!-- Headings -->
<h1>Main Heading</h1>
<h2>Sub Heading</h2>
<h3>Section Heading</h3>
<h4>Subsection Heading</h4>
<h5>Minor Heading</h5>
<h6>Smallest Heading</h6>

<!-- Paragraphs -->
<p>This is a paragraph that takes full width.</p>

<!-- Lists -->
<ul>
    <li>Unordered list item 1</li>
    <li>Unordered list item 2</li>
</ul>

<ol>
    <li>Ordered list item 1</li>
    <li>Ordered list item 2</li>
</ol>

<!-- Semantic elements -->
<section>Section content</section>
<article>Article content</article>
<header>Header content</header>
<footer>Footer content</footer>`},{title:"Inline Elements",content:"Inline elements only take up as much width as necessary and don't start on a new line. Common inline elements include span, links, text formatting, and images.",code:`<!-- Text formatting -->
<p>This is <strong>bold text</strong> and this is <em>italic text</em>.</p>
<p>You can also use <mark>highlighted text</mark> and <u>underlined text</u>.</p>

<!-- Links -->
<a href="https://example.com" target="_blank">External Link</a>
<a href="#section1">Internal Link</a>

<!-- Images -->
<img src="image.jpg" alt="Description" width="300" height="200">

<!-- Inline containers -->
<p>This paragraph contains <span class="highlight">inline styled text</span> within it.</p>

<!-- Form inputs -->
<input type="text" placeholder="Enter text">
<button>Click me</button>`},{title:"Inline-Block Elements",content:"Inline-block elements combine features of both inline and block elements, allowing you to set width and height while keeping them in line with other content.",code:`<style>
    .inline-block {
        display: inline-block;
        width: 100px;
        height: 50px;
        background: lightblue;
        margin: 5px;
        text-align: center;
        line-height: 50px;
    }
</style>

<span class="inline-block">Box 1</span>
<span class="inline-block">Box 2</span>
<span class="inline-block">Box 3</span>`},{title:"Essential HTML Tags - Text and Content",content:"Essential tags for creating text content, headings, paragraphs, links, images, and basic formatting elements.",code:`<!-- Headings -->
<h1>Main Title</h1>
<h2>Subtitle</h2>

<!-- Paragraphs and Text -->
<p>This is a paragraph.</p>
<strong>Bold text</strong>
<em>Italic text</em>
<br> <!-- Line break -->
<hr> <!-- Horizontal rule -->

<!-- Links -->
<a href="https://example.com" target="_blank">External Link</a>
<a href="#section1">Internal Link</a>

<!-- Images -->
<img src="path/to/image.jpg" alt="Description" width="300" height="200">`},{title:"Lists",content:"HTML provides different types of lists for organizing content: unordered lists (bullet points) and ordered lists (numbered).",code:`<!-- Unordered List -->
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

<!-- Ordered List -->
<ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>

<!-- Nested Lists -->
<ul>
    <li>Main item 1
        <ul>
            <li>Sub item 1</li>
            <li>Sub item 2</li>
        </ul>
    </li>
    <li>Main item 2</li>
</ul>`},{title:"Tables",content:"HTML tables are used to display tabular data in rows and columns. They include thead, tbody, and various table elements for proper structure.",code:`<table border="1">
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>John</td>
            <td>25</td>
            <td>New York</td>
        </tr>
        <tr>
            <td>Jane</td>
            <td>30</td>
            <td>London</td>
        </tr>
    </tbody>
</table>

<!-- More complex table -->
<table>
    <caption>Employee Information</caption>
    <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Department</th>
            <th scope="col">Salary</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">John Doe</th>
            <td>Engineering</td>
            <td>$75,000</td>
        </tr>
    </tbody>
</table>`},{title:"Forms",content:"HTML forms are used to collect user input. They include various input types, labels, validation attributes, and form controls for creating interactive interfaces.",code:`<form action="/submit" method="POST">
    <!-- Text Input -->
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    
    <!-- Email Input -->
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <!-- Password Input -->
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>
    
    <!-- Textarea -->
    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="4"></textarea>
    
    <!-- Radio Buttons -->
    <fieldset>
        <legend>Gender:</legend>
        <input type="radio" id="male" name="gender" value="male">
        <label for="male">Male</label>
        <input type="radio" id="female" name="gender" value="female">
        <label for="female">Female</label>
    </fieldset>
    
    <!-- Checkboxes -->
    <input type="checkbox" id="subscribe" name="subscribe">
    <label for="subscribe">Subscribe to newsletter</label>
    
    <!-- Select dropdown -->
    <label for="country">Country:</label>
    <select id="country" name="country">
        <option value="usa">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="canada">Canada</option>
    </select>
    
    <!-- File upload -->
    <label for="file">Upload file:</label>
    <input type="file" id="file" name="file">
    
    <!-- Submit and Reset buttons -->
    <input type="submit" value="Submit">
    <button type="reset">Reset</button>
</form>`},{title:"Semantic HTML5 Elements",content:"HTML5 introduced semantic elements that provide meaning to the structure of your webpage, making it more accessible, SEO-friendly, and easier to maintain.",code:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Semantic HTML Example</title>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section id="hero">
            <h1>Welcome to Our Website</h1>
            <p>Your journey starts here</p>
        </section>
        
        <section id="content">
            <article>
                <header>
                    <h2>Article Title</h2>
                    <time datetime="2024-01-15">January 15, 2024</time>
                </header>
                <p>Article content goes here...</p>
                <footer>
                    <p>Published by: <address>John Doe</address></p>
                </footer>
            </article>
        </section>
       
        <aside>
            <h3>Sidebar Content</h3>
            <p>Additional information and related links</p>
        </aside>
    </main>
    
    <footer>
        <p>&copy; 2025 Your Website. All rights reserved.</p>
        <address>
            <p>Contact us at: <a href="mailto:info@example.com">info@example.com</a></p>
        </address>
    </footer>
</body>
</html>`},{title:"HTML Attributes and Best Practices",content:"HTML attributes provide additional information about elements. Understanding common attributes and following best practices ensures accessible, maintainable code.",code:`<!-- Common attributes -->
<div id="unique-identifier" class="css-class another-class" data-custom="value">
    Content with multiple attributes
</div>

<!-- Accessibility attributes -->
<img src="image.jpg" alt="Descriptive alt text for screen readers" title="Tooltip text">

<!-- Form attributes -->
<input type="email" 
       id="email" 
       name="email" 
       placeholder="Enter your email" 
       required 
       aria-describedby="email-help">
<small id="email-help">We'll never share your email with anyone else.</small>

<!-- Link attributes -->
<a href="https://external-site.com" 
   target="_blank" 
   rel="noopener noreferrer" 
   title="Opens in new tab">
   External Link
</a>

<!-- Meta tags for SEO and responsive design -->
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Page description for search engines">
    <meta name="keywords" content="html, web development, tutorial">
    <meta name="author" content="Your Name">
</head>`},{title:"Happy Coding! 🎉",content:"Remember: The best way to learn web development is by practicing. Start with small projects and gradually build more complex applications as you become comfortable with the basics.",code:`<!-- Start with simple projects like: -->
<!DOCTYPE html>
<html lang="en">
<head>
    <title>My First Project</title>
</head>
<body>
    <h1>Hello World!</h1>
    <p>This is my first webpage!</p>
</body>
</html>`}]},Zm={title:"React Comprehensive Guide 🚀",description:"A complete guide covering React, React Native, Routing, and Functions with practical examples for beginners and quick revision.",sections:[{title:"Table of Contents",code:`
            Getting Started
            React Fundamentals
            Components
            Props and State
            Event Handling
            Conditional Rendering
            Lists and Keys
            Forms and Controlled Components
            React Hooks
            Context API
            React Router
            React Native Basics
            Common Patterns
            Best Practices `},{title:"Getting Started",content:"Prerequisites: Basic knowledge of HTML, CSS, and JavaScript, and Node.js installed on your machine.",code:`# Create a new React app
npx create-react-app my-react-app
cd my-react-app
npm start

# Or using Vite (faster alternative)
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev`},{title:"React Fundamentals",content:"React is a JavaScript library for building user interfaces, particularly web applications. It allows you to create reusable UI components and manage application state efficiently. Key concepts include Component-Based architecture, Virtual DOM, One-Way Data Flow, and Declarative programming.",code:`// React creates an in-memory virtual representation of the real DOM
// Data flows down from parent to child components
// Describe what the UI should look like for any given state

import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return <h1>Hello, React!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);`},{title:"Components",content:"Components are the building blocks of React applications. They can be functional or class-based (legacy), and can be composed together to create complex UIs.",code:`// Simple functional component
function Welcome() {
  return <h1>Hello, World!</h1>;
}

// Arrow function component
const Welcome = () => {
  return <h1>Hello, World!</h1>;
}

// Component with props
const Greeting = ({ name, age }) => {
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>You are {age} years old.</p>
    </div>
  );
}

// Class component (Legacy)
import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

// Component Composition
const Header = () => <h1>My App</h1>;
const Footer = () => <p>&copy; 2024 My App</p>;

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <p>Welcome to my application!</p>
      </main>
      <Footer />
    </div>
  );
}`},{title:"Props and State",content:"Props are read-only data passed from parent to child components. State is managed within components using the useState hook for functional components.",code:`// Props example
const App = () => {
  return (
    <div>
      <UserCard name="John Doe" email="john@example.com" isOnline={true} />
      <UserCard name="Jane Smith" email="jane@example.com" isOnline={false} />
    </div>
  );
}

const UserCard = ({ name, email, isOnline }) => {
  return (
    <div className={\`user-card \${isOnline ? 'online' : 'offline'}\`}>
      <h3>{name}</h3>
      <p>{email}</p>
      <span>{isOnline ? '🟢 Online' : '🔴 Offline'}</span>
    </div>
  );
}

// Default props
const Button = ({ text = "Click me", onClick }) => {
  return <button onClick={onClick}>{text}</button>;
}

// State with useState Hook
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
      
      <div>
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <p>Hello, {name}!</p>
      </div>
    </div>
  );
}`},{title:"Event Handling",content:"React handles events using synthetic events that wrap native events, providing consistent behavior across different browsers.",code:`const EventHandling = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  const handleChange = (e) => {
    console.log('Input changed:', e.target.value);
  };

  const handleMouseEnter = () => {
    console.log('Mouse entered!');
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      
      <div onMouseEnter={handleMouseEnter}>
        Hover over me
      </div>
    </div>
  );
};

// Event with Parameters
const ButtonList = () => {
  const handleButtonClick = (buttonName) => {
    alert(\`\${buttonName} was clicked!\`);
  };

  return (
    <div>
      <button onClick={() => handleButtonClick('Button 1')}>Button 1</button>
      <button onClick={() => handleButtonClick('Button 2')}>Button 2</button>
      <button onClick={() => handleButtonClick('Button 3')}>Button 3</button>
    </div>
  );
};`},{title:"Conditional Rendering",content:"React provides multiple ways to conditionally render components based on state or props, including ternary operators, logical AND operators, and function-based rendering.",code:`const ConditionalRendering = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('guest');
  const [notifications, setNotifications] = useState([]);

  return (
    <div>
      {/* Ternary operator */}
      {isLoggedIn ? (
        <h2>Welcome back!</h2>
      ) : (
        <h2>Please log in</h2>
      )}

      {/* Logical AND operator */}
      {isLoggedIn && <button>Logout</button>}
      {notifications.length > 0 && (
        <div>You have {notifications.length} notifications</div>
      )}

      {/* Multiple conditions */}
      {userRole === 'admin' ? (
        <AdminPanel />
      ) : userRole === 'user' ? (
        <UserPanel />
      ) : (
        <GuestPanel />
      )}

      {/* Function-based conditional rendering */}
      {renderContent()}
    </div>
  );

  function renderContent() {
    if (userRole === 'admin') return <AdminDashboard />;
    if (userRole === 'user') return <UserDashboard />;
    return <div>Access denied</div>;
  }
};`},{title:"Lists and Keys",content:"React efficiently renders lists of elements using the map function. Keys are essential for React to track changes and optimize re-renders.",code:`const ListExamples = () => {
  const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
  
  const users = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Bob', age: 35 }
  ];

  return (
    <div>
      {/* Simple list */}
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      {/* Complex list with objects */}
      <div>
        {users.map(user => (
          <div key={user.id} className="user-item">
            <h3>{user.name}</h3>
            <p>Age: {user.age}</p>
          </div>
        ))}
      </div>

      {/* Filtered list */}
      <div>
        <h3>Adults (30+):</h3>
        {users
          .filter(user => user.age >= 30)
          .map(user => (
            <div key={user.id}>{user.name}</div>
          ))}
      </div>
    </div>
  );
};

// Dynamic Lists with CRUD Operations
const DynamicList = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', completed: false },
    { id: 2, name: 'Item 2', completed: true }
  ]);

  const addItem = () => {
    const newItem = {
      id: Date.now(),
      name: \`Item \${items.length + 1}\`,
      completed: false
    };
    setItems([...items, newItem]);
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const toggleItem = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {items.map(item => (
        <div key={item.id} className="item">
          <span 
            style={{ 
              textDecoration: item.completed ? 'line-through' : 'none' 
            }}
          >
            {item.name}
          </span>
          <button onClick={() => toggleItem(item.id)}>
            {item.completed ? 'Undo' : 'Complete'}
          </button>
          <button onClick={() => deleteItem(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};`},{title:"Forms and Controlled Components",content:"Controlled components are form elements whose values are controlled by React state. This provides a single source of truth and enables validation and dynamic behavior.",code:`const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    category: 'general',
    subscribe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
      category: 'general',
      subscribe: false
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
        />
      </div>
      
      <div>
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="general">General</option>
          <option value="support">Support</option>
          <option value="sales">Sales</option>
        </select>
      </div>
      
      <div>
        <label>
          <input
            type="checkbox"
            name="subscribe"
            checked={formData.subscribe}
            onChange={handleChange}
          />
          Subscribe to newsletter
        </label>
      </div>
      
      <button type="submit">Submit</button>
    </form>
  );
};

// Form Validation
const ValidatedForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form is valid:', formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        {errors.email && <span style={{color: 'red'}}>{errors.email}</span>}
      </div>
      
      <div>
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
        />
        {errors.password && <span style={{color: 'red'}}>{errors.password}</span>}
      </div>
      
      <button type="submit">Login</button>
    </form>
  );
};`},{title:"React Hooks - useState and useEffect",content:"React Hooks allow you to use state and other React features in functional components. useState manages component state, while useEffect handles side effects.",code:`import React, { useState, useEffect } from 'react';

// useState Hook
const UseStateExamples = () => {
  // Basic state
  const [count, setCount] = useState(0);
  
  // Object state
  const [user, setUser] = useState({ name: '', age: 0 });
  
  // Array state
  const [items, setItems] = useState([]);
  
  // Function as initial state (for expensive computations)
  const [data, setData] = useState(() => {
    return expensiveCalculation();
  });

  const updateUser = () => {
    setUser(prev => ({ ...prev, name: 'John' }));
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(prev => prev + 1)}>Increment (functional)</button>
    </div>
  );
};

// useEffect Hook
const UseEffectExamples = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  // Effect runs after every render
  useEffect(() => {
    document.title = \`Count: \${count}\`;
  });

  // Effect runs only once (componentDidMount)
  useEffect(() => {
    fetchInitialData();
  }, []);

  // Effect runs when count changes
  useEffect(() => {
    console.log('Count changed:', count);
  }, [count]);

  // Effect with cleanup (componentWillUnmount)
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('Timer tick');
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const fetchInitialData = async () => {
    try {
      const response = await fetch('https://api.example.com/data');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};`},{title:"Custom Hooks and Advanced Hooks",content:"Custom hooks allow you to extract component logic into reusable functions. Other important hooks include useReducer, useRef, useMemo, and useCallback for different use cases.",code:`// Custom hook for fetching data
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

// Custom hook for local storage
const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };

  return [storedValue, setValue];
};

// useReducer for complex state management
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
}

const CounterWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
};

// useRef for accessing DOM elements
const FocusInput = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};`},{title:"Context API",content:"The Context API provides a way to share data between components without passing props down through every level of the component tree. It's useful for global state management.",code:`import React, { createContext, useContext, useState } from 'react';

// Create context
const ThemeContext = createContext();
const UserContext = createContext();

// Theme Provider
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// User Provider
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hooks to use contexts
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

// Components using context
const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useUser();

  return (
    <header style={{ backgroundColor: theme === 'light' ? '#fff' : '#333' }}>
      <h1>My App</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} theme
      </button>
      {user ? (
        <div>
          <span>Welcome, {user.name}!</span>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button>Login</button>
      )}
    </header>
  );
};

// App with providers
const App = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <div>
          <Header />
          <main>
            <p>Content goes here...</p>
          </main>
        </div>
      </UserProvider>
    </ThemeProvider>
  );
};`},{title:"React Router",content:"React Router enables navigation between different components in a React application, effectively allowing for single-page applications with multiple views.",code:`// Installation: npm install react-router-dom

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';

// Page components
const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;
const Contact = () => <h1>Contact Page</h1>;

// User profile with dynamic routing
const UserProfile = () => {
  const { userId } = useParams();
  return <h1>User Profile: {userId}</h1>;
};

// Navigation component
const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/users/123">User 123</Link>
    </nav>
  );
};

// Protected route example
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = true; // This would come from your auth logic
  
  return isAuthenticated ? children : <Navigate to="/login" />;
};

// Main App with routing
const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users/:userId" element={<UserProfile />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

// Programmatic navigation
const LoginForm = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic
    navigate('/dashboard');
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

// Nested routes with Outlet
const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="profile">Profile</Link>
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet /> {/* This renders child routes */}
    </div>
  );
};`},{title:"React Native Basics",content:"React Native allows you to build mobile applications using React. It uses native components instead of web components and provides platform-specific APIs.",code:`// Setting up React Native
// npm install -g react-native-cli
// npx react-native init MyReactNativeApp
// cd MyReactNativeApp
// npx react-native run-ios (for iOS)
// npx react-native run-android (for Android)

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Image,
  StyleSheet,
  Alert
} from 'react-native';

const BasicComponents = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' }
  ]);

  const handlePress = () => {
    Alert.alert('Button Pressed!');
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>React Native Example</Text>
      
      <Image 
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.image}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Enter text here"
        value={text}
        onChangeText={setText}
      />
      
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>
      
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  list: {
    flex: 1,
  },
  item: {
    padding: 15,
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 5,
  },
});`},{title:"Common Patterns and Best Practices",content:"Essential patterns and best practices for writing maintainable, performant React applications including component composition, state management, and optimization techniques.",code:`// Higher-Order Component (HOC) pattern
const withAuth = (WrappedComponent) => {
  return (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    useEffect(() => {
      // Check authentication status
      checkAuthStatus().then(setIsAuthenticated);
    }, []);
    
    if (!isAuthenticated) {
      return <div>Please log in to access this content.</div>;
    }
    
    return <WrappedComponent {...props} />;
  };
};

// Usage: const AuthenticatedComponent = withAuth(MyComponent);

// Render Props pattern
const DataFetcher = ({ children, url }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [url]);
  
  return children({ data, loading, error });
};

// Usage:
// <DataFetcher url="/api/users">
//   {({ data, loading, error }) => {
//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error.message}</div>;
//     return <div>{data.map(user => <div key={user.id}>{user.name}</div>)}</div>;
//   }}
// </DataFetcher>

// Compound Components pattern (continued)
const Tabs = ({ children, defaultTab = 0 }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  
  return (
    <div className="tabs">
      {React.Children.map(children, (child, index) => 
        React.cloneElement(child, { 
          isActive: index === activeTab,
          onActivate: () => setActiveTab(index),
          index
        })
      )}
    </div>
  );
};

const Tab = ({ children, isActive, onActivate, title }) => (
  <div>
    <button 
      onClick={onActivate}
      className={isActive ? 'tab-active' : 'tab-inactive'}
    >
      {title}
    </button>
    {isActive && <div className="tab-content">{children}</div>}
  </div>
);

// Usage:
// <Tabs>
//   <Tab title="Tab 1">Content 1</Tab>
//   <Tab title="Tab 2">Content 2</Tab>
//   <Tab title="Tab 3">Content 3</Tab>
// </Tabs>

// Performance Optimization with React.memo
const ExpensiveComponent = React.memo(({ data, onUpdate }) => {
  console.log('ExpensiveComponent rendered');
  
  return (
    <div>
      {data.map(item => (
        <div key={item.id}>
          {item.name}
          <button onClick={() => onUpdate(item.id)}>Update</button>
        </div>
      ))}
    </div>
  );
});

// useMemo and useCallback for optimization
const OptimizedComponent = () => {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('');
  const [count, setCount] = useState(0);

  // Memoize expensive calculations
  const filteredItems = useMemo(() => {
    console.log('Filtering items...');
    return items.filter(item => 
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);

  // Memoize callback functions
  const handleItemUpdate = useCallback((itemId) => {
    setItems(prev => prev.map(item => 
      item.id === itemId 
        ? { ...item, updated: true }
        : item
    ));
  }, []);

  const handleAddItem = useCallback(() => {
    const newItem = {
      id: Date.now(),
      updated: false
    };
    setItems(prev => [...prev, newItem]);
  }, [items.length]);

  return (
    <div>
      <input 
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter items..."
      />
      
      <button onClick={handleAddItem}>Add Item</button>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>
      
      <ExpensiveComponent 
        data={filteredItems}
        onUpdate={handleItemUpdate}
      />
    </div>
  );
};

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong!</h2>
          <p>{this.state.error?.message}</p>
          <button onClick={() => this.setState({ hasError: false, error: null })}>
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Portal for rendering outside component tree
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        {children}
      </div>
    </div>,
    document.body
  );
};

// Debounced search hook
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// Search component with debouncing
const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      // Perform search
      searchAPI(debouncedSearchTerm).then(setResults);
    }
  }, [debouncedSearchTerm]);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <div>
        {results.map(result => (
          <div key={result.id}>{result.title}</div>
        ))}
      </div>
    </div>
  );
};

// Lazy loading with Suspense
const LazyComponent = React.lazy(() => import('./LazyComponent'));

const LazyLoadingExample = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
};

// Best Practices Summary:

// 1. Component Structure
const WellStructuredComponent = ({ data, onAction }) => {
  // Hooks at the top
  const [localState, setLocalState] = useState(null);
  const [loading, setLoading] = useState(false);
  
  // Effects after hooks
  useEffect(() => {
    // Side effects here
  }, []);
  
  // Helper functions
  const handleClick = useCallback(() => {
    onAction(data);
  }, [data, onAction]);
  
  // Early returns for loading/error states
  if (loading) return <div>Loading...</div>;
  if (!data) return <div>No data available</div>;
  
  // Main render
  return (
    <div>
      {/* Component content */}
      <button onClick={handleClick}>Action</button>
    </div>
  );
};

// 2. State Management Best Practices
const StateManagementExample = () => {
  // Keep state as flat as possible
  const [user, setUser] = useState({ name: '', email: '' });
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  
  // Use functional updates for state that depends on previous state
  const addPost = useCallback((newPost) => {
    setPosts(prev => [...prev, newPost]);
  }, []);
  
  // Batch state updates when possible
  const handleUserUpdate = useCallback((userData) => {
    setLoading(true);
    // API call here
    Promise.resolve().then(() => {
      setUser(userData);
      setLoading(false);
    });
  }, []);
  
  return (
    <div>
      {/* Component content */}
    </div>
  );
};

// 3. Testing Utilities (example setup)
const TestableComponent = ({ initialCount = 0, onCountChange }) => {
  const [count, setCount] = useState(initialCount);
  
  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    onCountChange?.(newCount);
  };
  
  return (
    <div>
      <span data-testid="count">{count}</span>
      <button data-testid="increment" onClick={increment}>+</button>
    </div>
  );
};

// Example test (Jest + React Testing Library):
/*
import { render, fireEvent, screen } from '@testing-library/react';

test('increments count when button is clicked', () => {
  const handleCountChange = jest.fn();
  render(<TestableComponent onCountChange={handleCountChange} />);
  
  const button = screen.getByTestId('increment');
  fireEvent.click(button);
  
  expect(screen.getByTestId('count')).toHaveTextContent('1');
  expect(handleCountChange).toHaveBeenCalledWith(1);
});
*/
    `}]},Vm=()=>{const[A,G]=ht.useState(null),[Q,d]=ht.useState({x:50,y:50}),[N,j]=ht.useState(!1),R=["HTML","CSS","JavaScript","React","SQL","Python"];ht.useEffect(()=>{const M=()=>{j(document.documentElement.classList.contains("dark"))};M();const F=new MutationObserver(M);return F.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),()=>F.disconnect()},[]);const _=M=>{d({x:M.clientX/window.innerWidth*100,y:M.clientY/window.innerHeight*100})},O=M=>{G(M===A?null:M)},x=M=>{switch(M){case"HTML":return Qm;case"CSS":return null;case"JavaScript":return null;case"React":return Zm;case"SQL":return null;case"Python":return null;default:return null}};return S.jsxs("div",{className:`min-h-screen relative overflow-hidden transition-all duration-500 ${N?"bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20":"bg-gradient-to-br from-blue-50 via-purple-50/50 to-pink-50/30"}`,onMouseMove:_,children:[S.jsx("div",{className:"fixed inset-0 pointer-events-none transition-all duration-700",style:{background:`
            radial-gradient(1200px circle at ${Q.x}% ${Q.y}%, ${N?"rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.05), transparent 50%":"rgba(59, 130, 246, 0.08), rgba(147, 51, 234, 0.05), transparent 50%"}),
            ${N?"linear-gradient(45deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.6) 50%, rgba(15, 23, 42, 0.8) 100%)":"linear-gradient(45deg, rgba(248, 250, 252, 0.8) 0%, rgba(241, 245, 249, 0.6) 50%, rgba(248, 250, 252, 0.8) 100%)"}
          `}}),S.jsx("div",{className:"fixed inset-0 pointer-events-none",children:[...Array(20)].map((M,F)=>S.jsx("div",{className:`absolute w-1 h-1 rounded-full animate-float opacity-30 ${N?"bg-blue-400":"bg-purple-400"}`,style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,animationDelay:`${Math.random()*3}s`,animationDuration:`${3+Math.random()*2}s`}},F))}),S.jsx(Ym,{}),S.jsxs("div",{className:"relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[S.jsxs("div",{className:"mb-8",children:[S.jsxs("div",{className:`text-center mb-8 p-6 rounded-2xl backdrop-blur-xl border transition-all duration-300 ${N?"bg-white/5 border-white/10":"bg-white/30 border-white/20"}`,children:[S.jsx("h2",{className:"text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-pulse",children:"Choose a Technology to Learn"}),S.jsx("p",{className:`text-lg ${N?"text-gray-300":"text-gray-700"}`,children:"Select any technology below to explore comprehensive documentation and examples"})]}),S.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:R.map(M=>S.jsx(Lm,{tech:M,isActive:A===M,onClick:O},M))})]}),S.jsx("div",{className:"mb-8",children:S.jsx(Xm,{readme:A?x(A):null})}),A&&!x(A)&&S.jsxs("div",{className:`relative overflow-hidden rounded-2xl backdrop-blur-xl border transition-all duration-300 ${N?"bg-blue-500/10 border-blue-400/20":"bg-blue-50/80 border-blue-200/50"}`,children:[S.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-blue-400"}),S.jsx("div",{className:"p-6",children:S.jsxs("div",{className:"flex items-center space-x-4",children:[S.jsx("div",{className:`p-3 rounded-full backdrop-blur-xl ${N?"bg-blue-500/20 border border-blue-400/30":"bg-blue-100/80 border border-blue-200"}`,children:S.jsx("span",{className:"text-2xl",children:"🚧"})}),S.jsxs("div",{children:[S.jsx("h3",{className:`text-lg font-semibold mb-1 ${N?"text-blue-300":"text-blue-700"}`,children:"Coming Soon!"}),S.jsxs("p",{className:`text-sm ${N?"text-blue-200":"text-blue-600"}`,children:[S.jsxs("strong",{children:[A," documentation"]})," is being prepared. HTML documentation is currently available for study."]})]})]})}),S.jsx("div",{className:`absolute inset-0 opacity-20 ${N?"bg-blue-400/10":"bg-blue-400/5"} animate-pulse`})]})]}),S.jsx("div",{className:"fixed top-20 right-20 w-32 h-32 pointer-events-none",children:S.jsx("div",{className:`w-full h-full rounded-full opacity-20 animate-pulse ${N?"bg-gradient-to-br from-blue-400/20 to-purple-400/20":"bg-gradient-to-br from-blue-300/30 to-purple-300/30"}`})}),S.jsx("div",{className:"fixed bottom-20 left-20 w-24 h-24 pointer-events-none",children:S.jsx("div",{className:`w-full h-full rounded-full opacity-30 animate-bounce ${N?"bg-gradient-to-br from-purple-400/20 to-pink-400/20":"bg-gradient-to-br from-purple-300/30 to-pink-300/30"}`})})]})};if(!document.querySelector("#dashboard-animations")){const A=document.createElement("style");A.id="dashboard-animations",A.textContent=`
    @keyframes float {
      0%, 100% { 
        transform: translateY(0px) rotate(0deg); 
        opacity: 0.3;
      }
      50% { 
        transform: translateY(-20px) rotate(180deg); 
        opacity: 0.6;
      }
    }
    .animate-float {
      animation: float 4s ease-in-out infinite;
    }
  `,document.head.appendChild(A)}const km=()=>{const A=ht.useRef(null),G=ht.useRef(null);ht.useRef([]);const Q=ht.useRef({x:0,y:0}),[d,N]=ht.useState(!1);return ht.useEffect(()=>{const j=()=>{const O=document.documentElement.classList.contains("dark")||document.body.classList.contains("dark")||window.matchMedia("(prefers-color-scheme: dark)").matches||document.documentElement.getAttribute("data-theme")==="dark";N(O)};j();const R=new MutationObserver(j);R.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),R.observe(document.body,{attributes:!0,attributeFilter:["class"]});const _=window.matchMedia("(prefers-color-scheme: dark)");return _.addEventListener("change",j),()=>{R.disconnect(),_.removeEventListener("change",j)}},[]),ht.useEffect(()=>{const j=A.current,R=j.getContext("2d");let _=[];const O=()=>d?{particleHues:[200,260,180,220],lightness:[60,80],saturation:100,connectionColor:"rgba(100, 200, 255, 0.5)",glowColor:["rgba(100, 200, 255, 0.3)","rgba(100, 200, 255, 0)"],burstHues:[200,260,300,180]}:{particleHues:[300,260,200,340],lightness:[40,60],saturation:80,connectionColor:"rgba(150, 50, 200, 0.6)",glowColor:["rgba(200, 50, 150, 0.4)","rgba(200, 50, 150, 0)"],burstHues:[300,260,320,280]},x=()=>{j.width=window.innerWidth,j.height=window.innerHeight};class M{constructor(Y,ct,Ut=!1){const Mt=O();this.x=Y,this.y=ct,this.size=Math.random()*3+1,this.speedX=Math.random()*3-1.5,this.speedY=Math.random()*3-1.5;const yt=Ut?Mt.burstHues:Mt.particleHues,Kt=yt[Math.floor(Math.random()*yt.length)],I=Mt.lightness[0]+Math.random()*(Mt.lightness[1]-Mt.lightness[0]);this.color=`hsl(${Kt}, ${Mt.saturation}%, ${I}%)`,this.life=1,this.decay=Math.random()*.02+.01,this.originalSize=this.size}update(){this.x+=this.speedX,this.y+=this.speedY,this.life-=this.decay,this.size=this.originalSize*this.life,this.life<=0&&(this.life=0)}draw(Y){this.life>0&&(Y.save(),Y.globalAlpha=this.life,Y.fillStyle=this.color,Y.shadowColor=this.color,Y.shadowBlur=10,Y.beginPath(),Y.arc(this.x,this.y,this.size,0,Math.PI*2),Y.fill(),Y.restore())}}const F=V=>{Q.current.x=V.clientX,Q.current.y=V.clientY;for(let Y=0;Y<3;Y++)_.push(new M(V.clientX+(Math.random()-.5)*20,V.clientY+(Math.random()-.5)*20))},lt=V=>{for(let Y=0;Y<15;Y++){const ct=Math.PI*2*Y/15,Ut=new M(V.clientX,V.clientY);Ut.speedX=Math.cos(ct)*4,Ut.speedY=Math.sin(ct)*4,Ut.color=`hsl(${Math.random()*360}, 100%, 70%)`,_.push(Ut)}},nt=()=>{R.clearRect(0,0,j.width,j.height),_.forEach((Y,ct)=>{Y.update(),Y.draw(R),Y.life<=0&&_.splice(ct,1)});for(let Y=0;Y<_.length;Y++)for(let ct=Y+1;ct<_.length;ct++){const Ut=_[Y].x-_[ct].x,Mt=_[Y].y-_[ct].y,yt=Math.sqrt(Ut*Ut+Mt*Mt);yt<100&&(R.save(),R.globalAlpha=(1-yt/100)*.3,R.strokeStyle="rgba(100, 200, 255, 0.5)",R.lineWidth=1,R.beginPath(),R.moveTo(_[Y].x,_[Y].y),R.lineTo(_[ct].x,_[ct].y),R.stroke(),R.restore())}const V=Q.current;if(V.x!==0||V.y!==0){const Y=R.createRadialGradient(V.x,V.y,0,V.x,V.y,50);Y.addColorStop(0,"rgba(100, 200, 255, 0.3)"),Y.addColorStop(1,"rgba(100, 200, 255, 0)"),R.save(),R.fillStyle=Y,R.beginPath(),R.arc(V.x,V.y,50,0,Math.PI*2),R.fill(),R.restore()}_.length>200&&(_=_.slice(-200)),G.current=requestAnimationFrame(nt)};return x(),window.addEventListener("resize",x),window.addEventListener("mousemove",F),window.addEventListener("click",lt),nt(),()=>{window.removeEventListener("resize",x),window.removeEventListener("mousemove",F),window.removeEventListener("click",lt),G.current&&cancelAnimationFrame(G.current)}},[]),S.jsx("canvas",{ref:A,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:9999}})};function Km(){return S.jsxs("div",{className:"App",children:[S.jsx(Vm,{}),S.jsx(km,{})]})}wm.createRoot(document.getElementById("root")).render(S.jsx(ht.StrictMode,{children:S.jsx(Km,{})}));
