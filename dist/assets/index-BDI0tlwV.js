var u0=Object.defineProperty;var f0=(t,e,n)=>e in t?u0(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var st=(t,e,n)=>f0(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function d0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var lg={exports:{}},Yl={},cg={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wo=Symbol.for("react.element"),h0=Symbol.for("react.portal"),p0=Symbol.for("react.fragment"),m0=Symbol.for("react.strict_mode"),g0=Symbol.for("react.profiler"),v0=Symbol.for("react.provider"),_0=Symbol.for("react.context"),x0=Symbol.for("react.forward_ref"),y0=Symbol.for("react.suspense"),S0=Symbol.for("react.memo"),M0=Symbol.for("react.lazy"),Nh=Symbol.iterator;function E0(t){return t===null||typeof t!="object"?null:(t=Nh&&t[Nh]||t["@@iterator"],typeof t=="function"?t:null)}var ug={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fg=Object.assign,dg={};function ks(t,e,n){this.props=t,this.context=e,this.refs=dg,this.updater=n||ug}ks.prototype.isReactComponent={};ks.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ks.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function hg(){}hg.prototype=ks.prototype;function fd(t,e,n){this.props=t,this.context=e,this.refs=dg,this.updater=n||ug}var dd=fd.prototype=new hg;dd.constructor=fd;fg(dd,ks.prototype);dd.isPureReactComponent=!0;var Ih=Array.isArray,pg=Object.prototype.hasOwnProperty,hd={current:null},mg={key:!0,ref:!0,__self:!0,__source:!0};function gg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)pg.call(e,i)&&!mg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Wo,type:t,key:s,ref:o,props:r,_owner:hd.current}}function w0(t,e){return{$$typeof:Wo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function pd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Wo}function T0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Uh=/\/+/g;function yc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?T0(""+t.key):e.toString(36)}function ja(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Wo:case h0:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+yc(o,0):i,Ih(r)?(n="",t!=null&&(n=t.replace(Uh,"$&/")+"/"),ja(r,e,n,"",function(c){return c})):r!=null&&(pd(r)&&(r=w0(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Uh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Ih(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+yc(s,a);o+=ja(s,e,n,l,r)}else if(l=E0(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+yc(s,a++),o+=ja(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function na(t,e,n){if(t==null)return t;var i=[],r=0;return ja(t,i,"","",function(s){return e.call(n,s,r++)}),i}function A0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Zt={current:null},Xa={transition:null},C0={ReactCurrentDispatcher:Zt,ReactCurrentBatchConfig:Xa,ReactCurrentOwner:hd};function vg(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:na,forEach:function(t,e,n){na(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return na(t,function(){e++}),e},toArray:function(t){return na(t,function(e){return e})||[]},only:function(t){if(!pd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=ks;Xe.Fragment=p0;Xe.Profiler=g0;Xe.PureComponent=fd;Xe.StrictMode=m0;Xe.Suspense=y0;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C0;Xe.act=vg;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=fg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=hd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)pg.call(e,l)&&!mg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Wo,type:t.type,key:r,ref:s,props:i,_owner:o}};Xe.createContext=function(t){return t={$$typeof:_0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:v0,_context:t},t.Consumer=t};Xe.createElement=gg;Xe.createFactory=function(t){var e=gg.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:x0,render:t}};Xe.isValidElement=pd;Xe.lazy=function(t){return{$$typeof:M0,_payload:{_status:-1,_result:t},_init:A0}};Xe.memo=function(t,e){return{$$typeof:S0,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=Xa.transition;Xa.transition={};try{t()}finally{Xa.transition=e}};Xe.unstable_act=vg;Xe.useCallback=function(t,e){return Zt.current.useCallback(t,e)};Xe.useContext=function(t){return Zt.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return Zt.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return Zt.current.useEffect(t,e)};Xe.useId=function(){return Zt.current.useId()};Xe.useImperativeHandle=function(t,e,n){return Zt.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return Zt.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return Zt.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return Zt.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return Zt.current.useReducer(t,e,n)};Xe.useRef=function(t){return Zt.current.useRef(t)};Xe.useState=function(t){return Zt.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return Zt.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return Zt.current.useTransition()};Xe.version="18.3.1";cg.exports=Xe;var fe=cg.exports;const R0=d0(fe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b0=fe,P0=Symbol.for("react.element"),L0=Symbol.for("react.fragment"),D0=Object.prototype.hasOwnProperty,N0=b0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,I0={key:!0,ref:!0,__self:!0,__source:!0};function _g(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)D0.call(e,i)&&!I0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:P0,type:t,key:s,ref:o,props:r,_owner:N0.current}}Yl.Fragment=L0;Yl.jsx=_g;Yl.jsxs=_g;lg.exports=Yl;var P=lg.exports,Au={},xg={exports:{}},_n={},yg={exports:{}},Sg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,ee){var ne=U.length;U.push(ee);e:for(;0<ne;){var le=ne-1>>>1,Re=U[le];if(0<r(Re,ee))U[le]=ee,U[ne]=Re,ne=le;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var ee=U[0],ne=U.pop();if(ne!==ee){U[0]=ne;e:for(var le=0,Re=U.length,Oe=Re>>>1;le<Oe;){var $=2*(le+1)-1,se=U[$],K=$+1,Z=U[K];if(0>r(se,ne))K<Re&&0>r(Z,se)?(U[le]=Z,U[K]=ne,le=K):(U[le]=se,U[$]=ne,le=$);else if(K<Re&&0>r(Z,ne))U[le]=Z,U[K]=ne,le=K;else break e}}return ee}function r(U,ee){var ne=U.sortIndex-ee.sortIndex;return ne!==0?ne:U.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,d=null,h=3,p=!1,g=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(U){for(var ee=n(c);ee!==null;){if(ee.callback===null)i(c);else if(ee.startTime<=U)i(c),ee.sortIndex=ee.expirationTime,e(l,ee);else break;ee=n(c)}}function M(U){if(y=!1,_(U),!g)if(n(l)!==null)g=!0,X(D);else{var ee=n(c);ee!==null&&te(M,ee.startTime-U)}}function D(U,ee){g=!1,y&&(y=!1,u(C),C=-1),p=!0;var ne=h;try{for(_(ee),d=n(l);d!==null&&(!(d.expirationTime>ee)||U&&!E());){var le=d.callback;if(typeof le=="function"){d.callback=null,h=d.priorityLevel;var Re=le(d.expirationTime<=ee);ee=t.unstable_now(),typeof Re=="function"?d.callback=Re:d===n(l)&&i(l),_(ee)}else i(l);d=n(l)}if(d!==null)var Oe=!0;else{var $=n(c);$!==null&&te(M,$.startTime-ee),Oe=!1}return Oe}finally{d=null,h=ne,p=!1}}var A=!1,T=null,C=-1,G=5,x=-1;function E(){return!(t.unstable_now()-x<G)}function z(){if(T!==null){var U=t.unstable_now();x=U;var ee=!0;try{ee=T(!0,U)}finally{ee?B():(A=!1,T=null)}}else A=!1}var B;if(typeof v=="function")B=function(){v(z)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,J=Y.port2;Y.port1.onmessage=z,B=function(){J.postMessage(null)}}else B=function(){m(z,0)};function X(U){T=U,A||(A=!0,B())}function te(U,ee){C=m(function(){U(t.unstable_now())},ee)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,X(D))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(h){case 1:case 2:case 3:var ee=3;break;default:ee=h}var ne=h;h=ee;try{return U()}finally{h=ne}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,ee){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var ne=h;h=U;try{return ee()}finally{h=ne}},t.unstable_scheduleCallback=function(U,ee,ne){var le=t.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?le+ne:le):ne=le,U){case 1:var Re=-1;break;case 2:Re=250;break;case 5:Re=1073741823;break;case 4:Re=1e4;break;default:Re=5e3}return Re=ne+Re,U={id:f++,callback:ee,priorityLevel:U,startTime:ne,expirationTime:Re,sortIndex:-1},ne>le?(U.sortIndex=ne,e(c,U),n(l)===null&&U===n(c)&&(y?(u(C),C=-1):y=!0,te(M,ne-le))):(U.sortIndex=Re,e(l,U),g||p||(g=!0,X(D))),U},t.unstable_shouldYield=E,t.unstable_wrapCallback=function(U){var ee=h;return function(){var ne=h;h=ee;try{return U.apply(this,arguments)}finally{h=ne}}}})(Sg);yg.exports=Sg;var U0=yg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F0=fe,vn=U0;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Mg=new Set,wo={};function Lr(t,e){Es(t,e),Es(t+"Capture",e)}function Es(t,e){for(wo[t]=e,t=0;t<e.length;t++)Mg.add(e[t])}var vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cu=Object.prototype.hasOwnProperty,k0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fh={},kh={};function O0(t){return Cu.call(kh,t)?!0:Cu.call(Fh,t)?!1:k0.test(t)?kh[t]=!0:(Fh[t]=!0,!1)}function B0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function z0(t,e,n,i){if(e===null||typeof e>"u"||B0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Qt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){kt[t]=new Qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];kt[e]=new Qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){kt[t]=new Qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){kt[t]=new Qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){kt[t]=new Qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){kt[t]=new Qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){kt[t]=new Qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){kt[t]=new Qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){kt[t]=new Qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var md=/[\-:]([a-z])/g;function gd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(md,gd);kt[e]=new Qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(md,gd);kt[e]=new Qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(md,gd);kt[e]=new Qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){kt[t]=new Qt(t,1,!1,t.toLowerCase(),null,!1,!1)});kt.xlinkHref=new Qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){kt[t]=new Qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function vd(t,e,n,i){var r=kt.hasOwnProperty(e)?kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(z0(e,n,r,i)&&(n=null),i||r===null?O0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Mi=F0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ia=Symbol.for("react.element"),es=Symbol.for("react.portal"),ts=Symbol.for("react.fragment"),_d=Symbol.for("react.strict_mode"),Ru=Symbol.for("react.profiler"),Eg=Symbol.for("react.provider"),wg=Symbol.for("react.context"),xd=Symbol.for("react.forward_ref"),bu=Symbol.for("react.suspense"),Pu=Symbol.for("react.suspense_list"),yd=Symbol.for("react.memo"),Di=Symbol.for("react.lazy"),Tg=Symbol.for("react.offscreen"),Oh=Symbol.iterator;function Vs(t){return t===null||typeof t!="object"?null:(t=Oh&&t[Oh]||t["@@iterator"],typeof t=="function"?t:null)}var mt=Object.assign,Sc;function oo(t){if(Sc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Sc=e&&e[1]||""}return`
`+Sc+t}var Mc=!1;function Ec(t,e){if(!t||Mc)return"";Mc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Mc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?oo(t):""}function H0(t){switch(t.tag){case 5:return oo(t.type);case 16:return oo("Lazy");case 13:return oo("Suspense");case 19:return oo("SuspenseList");case 0:case 2:case 15:return t=Ec(t.type,!1),t;case 11:return t=Ec(t.type.render,!1),t;case 1:return t=Ec(t.type,!0),t;default:return""}}function Lu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ts:return"Fragment";case es:return"Portal";case Ru:return"Profiler";case _d:return"StrictMode";case bu:return"Suspense";case Pu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case wg:return(t.displayName||"Context")+".Consumer";case Eg:return(t._context.displayName||"Context")+".Provider";case xd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case yd:return e=t.displayName||null,e!==null?e:Lu(t.type)||"Memo";case Di:e=t._payload,t=t._init;try{return Lu(t(e))}catch{}}return null}function V0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Lu(e);case 8:return e===_d?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ki(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ag(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function G0(t){var e=Ag(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ra(t){t._valueTracker||(t._valueTracker=G0(t))}function Cg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Ag(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ul(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Du(t,e){var n=e.checked;return mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Bh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ki(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Rg(t,e){e=e.checked,e!=null&&vd(t,"checked",e,!1)}function Nu(t,e){Rg(t,e);var n=Ki(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Iu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Iu(t,e.type,Ki(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function zh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Iu(t,e,n){(e!=="number"||ul(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ao=Array.isArray;function ps(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ki(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Uu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Hh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(ao(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ki(n)}}function bg(t,e){var n=Ki(e.value),i=Ki(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Vh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Pg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Pg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var sa,Lg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(sa=sa||document.createElement("div"),sa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=sa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function To(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ho={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},W0=["Webkit","ms","Moz","O"];Object.keys(ho).forEach(function(t){W0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ho[e]=ho[t]})});function Dg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ho.hasOwnProperty(t)&&ho[t]?(""+e).trim():e+"px"}function Ng(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Dg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var j0=mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ku(t,e){if(e){if(j0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function Ou(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bu=null;function Sd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zu=null,ms=null,gs=null;function Gh(t){if(t=Yo(t)){if(typeof zu!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=Ql(e),zu(t.stateNode,t.type,e))}}function Ig(t){ms?gs?gs.push(t):gs=[t]:ms=t}function Ug(){if(ms){var t=ms,e=gs;if(gs=ms=null,Gh(t),e)for(t=0;t<e.length;t++)Gh(e[t])}}function Fg(t,e){return t(e)}function kg(){}var wc=!1;function Og(t,e,n){if(wc)return t(e,n);wc=!0;try{return Fg(t,e,n)}finally{wc=!1,(ms!==null||gs!==null)&&(kg(),Ug())}}function Ao(t,e){var n=t.stateNode;if(n===null)return null;var i=Ql(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var Hu=!1;if(vi)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){Hu=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{Hu=!1}function X0(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var po=!1,fl=null,dl=!1,Vu=null,Y0={onError:function(t){po=!0,fl=t}};function $0(t,e,n,i,r,s,o,a,l){po=!1,fl=null,X0.apply(Y0,arguments)}function q0(t,e,n,i,r,s,o,a,l){if($0.apply(this,arguments),po){if(po){var c=fl;po=!1,fl=null}else throw Error(oe(198));dl||(dl=!0,Vu=c)}}function Dr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Bg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Wh(t){if(Dr(t)!==t)throw Error(oe(188))}function K0(t){var e=t.alternate;if(!e){if(e=Dr(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Wh(r),t;if(s===i)return Wh(r),e;s=s.sibling}throw Error(oe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function zg(t){return t=K0(t),t!==null?Hg(t):null}function Hg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Hg(t);if(e!==null)return e;t=t.sibling}return null}var Vg=vn.unstable_scheduleCallback,jh=vn.unstable_cancelCallback,Z0=vn.unstable_shouldYield,Q0=vn.unstable_requestPaint,St=vn.unstable_now,J0=vn.unstable_getCurrentPriorityLevel,Md=vn.unstable_ImmediatePriority,Gg=vn.unstable_UserBlockingPriority,hl=vn.unstable_NormalPriority,ex=vn.unstable_LowPriority,Wg=vn.unstable_IdlePriority,$l=null,Zn=null;function tx(t){if(Zn&&typeof Zn.onCommitFiberRoot=="function")try{Zn.onCommitFiberRoot($l,t,void 0,(t.current.flags&128)===128)}catch{}}var Vn=Math.clz32?Math.clz32:rx,nx=Math.log,ix=Math.LN2;function rx(t){return t>>>=0,t===0?32:31-(nx(t)/ix|0)|0}var oa=64,aa=4194304;function lo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function pl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=lo(a):(s&=o,s!==0&&(i=lo(s)))}else o=n&~r,o!==0?i=lo(o):s!==0&&(i=lo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Vn(e),r=1<<n,i|=t[n],e&=~r;return i}function sx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ox(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Vn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=sx(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Gu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function jg(){var t=oa;return oa<<=1,!(oa&4194240)&&(oa=64),t}function Tc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function jo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Vn(e),t[e]=n}function ax(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Vn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Ed(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Vn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var nt=0;function Xg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Yg,wd,$g,qg,Kg,Wu=!1,la=[],zi=null,Hi=null,Vi=null,Co=new Map,Ro=new Map,Ui=[],lx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xh(t,e){switch(t){case"focusin":case"focusout":zi=null;break;case"dragenter":case"dragleave":Hi=null;break;case"mouseover":case"mouseout":Vi=null;break;case"pointerover":case"pointerout":Co.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(e.pointerId)}}function Ws(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Yo(e),e!==null&&wd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function cx(t,e,n,i,r){switch(e){case"focusin":return zi=Ws(zi,t,e,n,i,r),!0;case"dragenter":return Hi=Ws(Hi,t,e,n,i,r),!0;case"mouseover":return Vi=Ws(Vi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Co.set(s,Ws(Co.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ro.set(s,Ws(Ro.get(s)||null,t,e,n,i,r)),!0}return!1}function Zg(t){var e=vr(t.target);if(e!==null){var n=Dr(e);if(n!==null){if(e=n.tag,e===13){if(e=Bg(n),e!==null){t.blockedOn=e,Kg(t.priority,function(){$g(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ya(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ju(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Bu=i,n.target.dispatchEvent(i),Bu=null}else return e=Yo(n),e!==null&&wd(e),t.blockedOn=n,!1;e.shift()}return!0}function Yh(t,e,n){Ya(t)&&n.delete(e)}function ux(){Wu=!1,zi!==null&&Ya(zi)&&(zi=null),Hi!==null&&Ya(Hi)&&(Hi=null),Vi!==null&&Ya(Vi)&&(Vi=null),Co.forEach(Yh),Ro.forEach(Yh)}function js(t,e){t.blockedOn===e&&(t.blockedOn=null,Wu||(Wu=!0,vn.unstable_scheduleCallback(vn.unstable_NormalPriority,ux)))}function bo(t){function e(r){return js(r,t)}if(0<la.length){js(la[0],t);for(var n=1;n<la.length;n++){var i=la[n];i.blockedOn===t&&(i.blockedOn=null)}}for(zi!==null&&js(zi,t),Hi!==null&&js(Hi,t),Vi!==null&&js(Vi,t),Co.forEach(e),Ro.forEach(e),n=0;n<Ui.length;n++)i=Ui[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ui.length&&(n=Ui[0],n.blockedOn===null);)Zg(n),n.blockedOn===null&&Ui.shift()}var vs=Mi.ReactCurrentBatchConfig,ml=!0;function fx(t,e,n,i){var r=nt,s=vs.transition;vs.transition=null;try{nt=1,Td(t,e,n,i)}finally{nt=r,vs.transition=s}}function dx(t,e,n,i){var r=nt,s=vs.transition;vs.transition=null;try{nt=4,Td(t,e,n,i)}finally{nt=r,vs.transition=s}}function Td(t,e,n,i){if(ml){var r=ju(t,e,n,i);if(r===null)Uc(t,e,i,gl,n),Xh(t,i);else if(cx(r,t,e,n,i))i.stopPropagation();else if(Xh(t,i),e&4&&-1<lx.indexOf(t)){for(;r!==null;){var s=Yo(r);if(s!==null&&Yg(s),s=ju(t,e,n,i),s===null&&Uc(t,e,i,gl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Uc(t,e,i,null,n)}}var gl=null;function ju(t,e,n,i){if(gl=null,t=Sd(i),t=vr(t),t!==null)if(e=Dr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Bg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return gl=t,null}function Qg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(J0()){case Md:return 1;case Gg:return 4;case hl:case ex:return 16;case Wg:return 536870912;default:return 16}default:return 16}}var Oi=null,Ad=null,$a=null;function Jg(){if($a)return $a;var t,e=Ad,n=e.length,i,r="value"in Oi?Oi.value:Oi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return $a=r.slice(t,1<i?1-i:void 0)}function qa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ca(){return!0}function $h(){return!1}function xn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ca:$h,this.isPropagationStopped=$h,this}return mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ca)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ca)},persist:function(){},isPersistent:ca}),e}var Os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cd=xn(Os),Xo=mt({},Os,{view:0,detail:0}),hx=xn(Xo),Ac,Cc,Xs,ql=mt({},Xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xs&&(Xs&&t.type==="mousemove"?(Ac=t.screenX-Xs.screenX,Cc=t.screenY-Xs.screenY):Cc=Ac=0,Xs=t),Ac)},movementY:function(t){return"movementY"in t?t.movementY:Cc}}),qh=xn(ql),px=mt({},ql,{dataTransfer:0}),mx=xn(px),gx=mt({},Xo,{relatedTarget:0}),Rc=xn(gx),vx=mt({},Os,{animationName:0,elapsedTime:0,pseudoElement:0}),_x=xn(vx),xx=mt({},Os,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),yx=xn(xx),Sx=mt({},Os,{data:0}),Kh=xn(Sx),Mx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ex={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=wx[t])?!!e[t]:!1}function Rd(){return Tx}var Ax=mt({},Xo,{key:function(t){if(t.key){var e=Mx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=qa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ex[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rd,charCode:function(t){return t.type==="keypress"?qa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Cx=xn(Ax),Rx=mt({},ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zh=xn(Rx),bx=mt({},Xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rd}),Px=xn(bx),Lx=mt({},Os,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dx=xn(Lx),Nx=mt({},ql,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ix=xn(Nx),Ux=[9,13,27,32],bd=vi&&"CompositionEvent"in window,mo=null;vi&&"documentMode"in document&&(mo=document.documentMode);var Fx=vi&&"TextEvent"in window&&!mo,ev=vi&&(!bd||mo&&8<mo&&11>=mo),Qh=" ",Jh=!1;function tv(t,e){switch(t){case"keyup":return Ux.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ns=!1;function kx(t,e){switch(t){case"compositionend":return nv(e);case"keypress":return e.which!==32?null:(Jh=!0,Qh);case"textInput":return t=e.data,t===Qh&&Jh?null:t;default:return null}}function Ox(t,e){if(ns)return t==="compositionend"||!bd&&tv(t,e)?(t=Jg(),$a=Ad=Oi=null,ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ev&&e.locale!=="ko"?null:e.data;default:return null}}var Bx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ep(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Bx[t.type]:e==="textarea"}function iv(t,e,n,i){Ig(i),e=vl(e,"onChange"),0<e.length&&(n=new Cd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var go=null,Po=null;function zx(t){pv(t,0)}function Kl(t){var e=ss(t);if(Cg(e))return t}function Hx(t,e){if(t==="change")return e}var rv=!1;if(vi){var bc;if(vi){var Pc="oninput"in document;if(!Pc){var tp=document.createElement("div");tp.setAttribute("oninput","return;"),Pc=typeof tp.oninput=="function"}bc=Pc}else bc=!1;rv=bc&&(!document.documentMode||9<document.documentMode)}function np(){go&&(go.detachEvent("onpropertychange",sv),Po=go=null)}function sv(t){if(t.propertyName==="value"&&Kl(Po)){var e=[];iv(e,Po,t,Sd(t)),Og(zx,e)}}function Vx(t,e,n){t==="focusin"?(np(),go=e,Po=n,go.attachEvent("onpropertychange",sv)):t==="focusout"&&np()}function Gx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Kl(Po)}function Wx(t,e){if(t==="click")return Kl(e)}function jx(t,e){if(t==="input"||t==="change")return Kl(e)}function Xx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var jn=typeof Object.is=="function"?Object.is:Xx;function Lo(t,e){if(jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Cu.call(e,r)||!jn(t[r],e[r]))return!1}return!0}function ip(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rp(t,e){var n=ip(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ip(n)}}function ov(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ov(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function av(){for(var t=window,e=ul();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ul(t.document)}return e}function Pd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Yx(t){var e=av(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ov(n.ownerDocument.documentElement,n)){if(i!==null&&Pd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=rp(n,s);var o=rp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var $x=vi&&"documentMode"in document&&11>=document.documentMode,is=null,Xu=null,vo=null,Yu=!1;function sp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yu||is==null||is!==ul(i)||(i=is,"selectionStart"in i&&Pd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),vo&&Lo(vo,i)||(vo=i,i=vl(Xu,"onSelect"),0<i.length&&(e=new Cd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=is)))}function ua(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var rs={animationend:ua("Animation","AnimationEnd"),animationiteration:ua("Animation","AnimationIteration"),animationstart:ua("Animation","AnimationStart"),transitionend:ua("Transition","TransitionEnd")},Lc={},lv={};vi&&(lv=document.createElement("div").style,"AnimationEvent"in window||(delete rs.animationend.animation,delete rs.animationiteration.animation,delete rs.animationstart.animation),"TransitionEvent"in window||delete rs.transitionend.transition);function Zl(t){if(Lc[t])return Lc[t];if(!rs[t])return t;var e=rs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in lv)return Lc[t]=e[n];return t}var cv=Zl("animationend"),uv=Zl("animationiteration"),fv=Zl("animationstart"),dv=Zl("transitionend"),hv=new Map,op="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(t,e){hv.set(t,e),Lr(e,[t])}for(var Dc=0;Dc<op.length;Dc++){var Nc=op[Dc],qx=Nc.toLowerCase(),Kx=Nc[0].toUpperCase()+Nc.slice(1);er(qx,"on"+Kx)}er(cv,"onAnimationEnd");er(uv,"onAnimationIteration");er(fv,"onAnimationStart");er("dblclick","onDoubleClick");er("focusin","onFocus");er("focusout","onBlur");er(dv,"onTransitionEnd");Es("onMouseEnter",["mouseout","mouseover"]);Es("onMouseLeave",["mouseout","mouseover"]);Es("onPointerEnter",["pointerout","pointerover"]);Es("onPointerLeave",["pointerout","pointerover"]);Lr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zx=new Set("cancel close invalid load scroll toggle".split(" ").concat(co));function ap(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,q0(i,e,void 0,t),t.currentTarget=null}function pv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;ap(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;ap(r,a,c),s=l}}}if(dl)throw t=Vu,dl=!1,Vu=null,t}function lt(t,e){var n=e[Qu];n===void 0&&(n=e[Qu]=new Set);var i=t+"__bubble";n.has(i)||(mv(e,t,2,!1),n.add(i))}function Ic(t,e,n){var i=0;e&&(i|=4),mv(n,t,i,e)}var fa="_reactListening"+Math.random().toString(36).slice(2);function Do(t){if(!t[fa]){t[fa]=!0,Mg.forEach(function(n){n!=="selectionchange"&&(Zx.has(n)||Ic(n,!1,t),Ic(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[fa]||(e[fa]=!0,Ic("selectionchange",!1,e))}}function mv(t,e,n,i){switch(Qg(e)){case 1:var r=fx;break;case 4:r=dx;break;default:r=Td}n=r.bind(null,e,n,t),r=void 0,!Hu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Uc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=vr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Og(function(){var c=s,f=Sd(n),d=[];e:{var h=hv.get(t);if(h!==void 0){var p=Cd,g=t;switch(t){case"keypress":if(qa(n)===0)break e;case"keydown":case"keyup":p=Cx;break;case"focusin":g="focus",p=Rc;break;case"focusout":g="blur",p=Rc;break;case"beforeblur":case"afterblur":p=Rc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=qh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=mx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Px;break;case cv:case uv:case fv:p=_x;break;case dv:p=Dx;break;case"scroll":p=hx;break;case"wheel":p=Ix;break;case"copy":case"cut":case"paste":p=yx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Zh}var y=(e&4)!==0,m=!y&&t==="scroll",u=y?h!==null?h+"Capture":null:h;y=[];for(var v=c,_;v!==null;){_=v;var M=_.stateNode;if(_.tag===5&&M!==null&&(_=M,u!==null&&(M=Ao(v,u),M!=null&&y.push(No(v,M,_)))),m)break;v=v.return}0<y.length&&(h=new p(h,g,null,n,f),d.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Bu&&(g=n.relatedTarget||n.fromElement)&&(vr(g)||g[_i]))break e;if((p||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?vr(g):null,g!==null&&(m=Dr(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(y=qh,M="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=Zh,M="onPointerLeave",u="onPointerEnter",v="pointer"),m=p==null?h:ss(p),_=g==null?h:ss(g),h=new y(M,v+"leave",p,n,f),h.target=m,h.relatedTarget=_,M=null,vr(f)===c&&(y=new y(u,v+"enter",g,n,f),y.target=_,y.relatedTarget=m,M=y),m=M,p&&g)t:{for(y=p,u=g,v=0,_=y;_;_=Ur(_))v++;for(_=0,M=u;M;M=Ur(M))_++;for(;0<v-_;)y=Ur(y),v--;for(;0<_-v;)u=Ur(u),_--;for(;v--;){if(y===u||u!==null&&y===u.alternate)break t;y=Ur(y),u=Ur(u)}y=null}else y=null;p!==null&&lp(d,h,p,y,!1),g!==null&&m!==null&&lp(d,m,g,y,!0)}}e:{if(h=c?ss(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var D=Hx;else if(ep(h))if(rv)D=jx;else{D=Gx;var A=Vx}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(D=Wx);if(D&&(D=D(t,c))){iv(d,D,n,f);break e}A&&A(t,h,c),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&Iu(h,"number",h.value)}switch(A=c?ss(c):window,t){case"focusin":(ep(A)||A.contentEditable==="true")&&(is=A,Xu=c,vo=null);break;case"focusout":vo=Xu=is=null;break;case"mousedown":Yu=!0;break;case"contextmenu":case"mouseup":case"dragend":Yu=!1,sp(d,n,f);break;case"selectionchange":if($x)break;case"keydown":case"keyup":sp(d,n,f)}var T;if(bd)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else ns?tv(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(ev&&n.locale!=="ko"&&(ns||C!=="onCompositionStart"?C==="onCompositionEnd"&&ns&&(T=Jg()):(Oi=f,Ad="value"in Oi?Oi.value:Oi.textContent,ns=!0)),A=vl(c,C),0<A.length&&(C=new Kh(C,t,null,n,f),d.push({event:C,listeners:A}),T?C.data=T:(T=nv(n),T!==null&&(C.data=T)))),(T=Fx?kx(t,n):Ox(t,n))&&(c=vl(c,"onBeforeInput"),0<c.length&&(f=new Kh("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=T))}pv(d,e)})}function No(t,e,n){return{instance:t,listener:e,currentTarget:n}}function vl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ao(t,n),s!=null&&i.unshift(No(t,s,r)),s=Ao(t,e),s!=null&&i.push(No(t,s,r))),t=t.return}return i}function Ur(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function lp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ao(n,s),l!=null&&o.unshift(No(n,l,a))):r||(l=Ao(n,s),l!=null&&o.push(No(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Qx=/\r\n?/g,Jx=/\u0000|\uFFFD/g;function cp(t){return(typeof t=="string"?t:""+t).replace(Qx,`
`).replace(Jx,"")}function da(t,e,n){if(e=cp(e),cp(t)!==e&&n)throw Error(oe(425))}function _l(){}var $u=null,qu=null;function Ku(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Zu=typeof setTimeout=="function"?setTimeout:void 0,ey=typeof clearTimeout=="function"?clearTimeout:void 0,up=typeof Promise=="function"?Promise:void 0,ty=typeof queueMicrotask=="function"?queueMicrotask:typeof up<"u"?function(t){return up.resolve(null).then(t).catch(ny)}:Zu;function ny(t){setTimeout(function(){throw t})}function Fc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),bo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);bo(e)}function Gi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function fp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Bs=Math.random().toString(36).slice(2),Kn="__reactFiber$"+Bs,Io="__reactProps$"+Bs,_i="__reactContainer$"+Bs,Qu="__reactEvents$"+Bs,iy="__reactListeners$"+Bs,ry="__reactHandles$"+Bs;function vr(t){var e=t[Kn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[_i]||n[Kn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=fp(t);t!==null;){if(n=t[Kn])return n;t=fp(t)}return e}t=n,n=t.parentNode}return null}function Yo(t){return t=t[Kn]||t[_i],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function Ql(t){return t[Io]||null}var Ju=[],os=-1;function tr(t){return{current:t}}function ut(t){0>os||(t.current=Ju[os],Ju[os]=null,os--)}function ot(t,e){os++,Ju[os]=t.current,t.current=e}var Zi={},Wt=tr(Zi),on=tr(!1),wr=Zi;function ws(t,e){var n=t.type.contextTypes;if(!n)return Zi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function an(t){return t=t.childContextTypes,t!=null}function xl(){ut(on),ut(Wt)}function dp(t,e,n){if(Wt.current!==Zi)throw Error(oe(168));ot(Wt,e),ot(on,n)}function gv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,V0(t)||"Unknown",r));return mt({},n,i)}function yl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zi,wr=Wt.current,ot(Wt,t),ot(on,on.current),!0}function hp(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=gv(t,e,wr),i.__reactInternalMemoizedMergedChildContext=t,ut(on),ut(Wt),ot(Wt,t)):ut(on),ot(on,n)}var li=null,Jl=!1,kc=!1;function vv(t){li===null?li=[t]:li.push(t)}function sy(t){Jl=!0,vv(t)}function nr(){if(!kc&&li!==null){kc=!0;var t=0,e=nt;try{var n=li;for(nt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}li=null,Jl=!1}catch(r){throw li!==null&&(li=li.slice(t+1)),Vg(Md,nr),r}finally{nt=e,kc=!1}}return null}var as=[],ls=0,Sl=null,Ml=0,Mn=[],En=0,Tr=null,ui=1,fi="";function fr(t,e){as[ls++]=Ml,as[ls++]=Sl,Sl=t,Ml=e}function _v(t,e,n){Mn[En++]=ui,Mn[En++]=fi,Mn[En++]=Tr,Tr=t;var i=ui;t=fi;var r=32-Vn(i)-1;i&=~(1<<r),n+=1;var s=32-Vn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ui=1<<32-Vn(e)+r|n<<r|i,fi=s+t}else ui=1<<s|n<<r|i,fi=t}function Ld(t){t.return!==null&&(fr(t,1),_v(t,1,0))}function Dd(t){for(;t===Sl;)Sl=as[--ls],as[ls]=null,Ml=as[--ls],as[ls]=null;for(;t===Tr;)Tr=Mn[--En],Mn[En]=null,fi=Mn[--En],Mn[En]=null,ui=Mn[--En],Mn[En]=null}var gn=null,mn=null,dt=!1,On=null;function xv(t,e){var n=An(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function pp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,gn=t,mn=Gi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,gn=t,mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Tr!==null?{id:ui,overflow:fi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=An(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,gn=t,mn=null,!0):!1;default:return!1}}function ef(t){return(t.mode&1)!==0&&(t.flags&128)===0}function tf(t){if(dt){var e=mn;if(e){var n=e;if(!pp(t,e)){if(ef(t))throw Error(oe(418));e=Gi(n.nextSibling);var i=gn;e&&pp(t,e)?xv(i,n):(t.flags=t.flags&-4097|2,dt=!1,gn=t)}}else{if(ef(t))throw Error(oe(418));t.flags=t.flags&-4097|2,dt=!1,gn=t}}}function mp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gn=t}function ha(t){if(t!==gn)return!1;if(!dt)return mp(t),dt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ku(t.type,t.memoizedProps)),e&&(e=mn)){if(ef(t))throw yv(),Error(oe(418));for(;e;)xv(t,e),e=Gi(e.nextSibling)}if(mp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){mn=Gi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}mn=null}}else mn=gn?Gi(t.stateNode.nextSibling):null;return!0}function yv(){for(var t=mn;t;)t=Gi(t.nextSibling)}function Ts(){mn=gn=null,dt=!1}function Nd(t){On===null?On=[t]:On.push(t)}var oy=Mi.ReactCurrentBatchConfig;function Ys(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function pa(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function gp(t){var e=t._init;return e(t._payload)}function Sv(t){function e(u,v){if(t){var _=u.deletions;_===null?(u.deletions=[v],u.flags|=16):_.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=Yi(u,v),u.index=0,u.sibling=null,u}function s(u,v,_){return u.index=_,t?(_=u.alternate,_!==null?(_=_.index,_<v?(u.flags|=2,v):_):(u.flags|=2,v)):(u.flags|=1048576,v)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,v,_,M){return v===null||v.tag!==6?(v=Wc(_,u.mode,M),v.return=u,v):(v=r(v,_),v.return=u,v)}function l(u,v,_,M){var D=_.type;return D===ts?f(u,v,_.props.children,M,_.key):v!==null&&(v.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Di&&gp(D)===v.type)?(M=r(v,_.props),M.ref=Ys(u,v,_),M.return=u,M):(M=nl(_.type,_.key,_.props,null,u.mode,M),M.ref=Ys(u,v,_),M.return=u,M)}function c(u,v,_,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=jc(_,u.mode,M),v.return=u,v):(v=r(v,_.children||[]),v.return=u,v)}function f(u,v,_,M,D){return v===null||v.tag!==7?(v=Er(_,u.mode,M,D),v.return=u,v):(v=r(v,_),v.return=u,v)}function d(u,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Wc(""+v,u.mode,_),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ia:return _=nl(v.type,v.key,v.props,null,u.mode,_),_.ref=Ys(u,null,v),_.return=u,_;case es:return v=jc(v,u.mode,_),v.return=u,v;case Di:var M=v._init;return d(u,M(v._payload),_)}if(ao(v)||Vs(v))return v=Er(v,u.mode,_,null),v.return=u,v;pa(u,v)}return null}function h(u,v,_,M){var D=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return D!==null?null:a(u,v,""+_,M);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ia:return _.key===D?l(u,v,_,M):null;case es:return _.key===D?c(u,v,_,M):null;case Di:return D=_._init,h(u,v,D(_._payload),M)}if(ao(_)||Vs(_))return D!==null?null:f(u,v,_,M,null);pa(u,_)}return null}function p(u,v,_,M,D){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(_)||null,a(v,u,""+M,D);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case ia:return u=u.get(M.key===null?_:M.key)||null,l(v,u,M,D);case es:return u=u.get(M.key===null?_:M.key)||null,c(v,u,M,D);case Di:var A=M._init;return p(u,v,_,A(M._payload),D)}if(ao(M)||Vs(M))return u=u.get(_)||null,f(v,u,M,D,null);pa(v,M)}return null}function g(u,v,_,M){for(var D=null,A=null,T=v,C=v=0,G=null;T!==null&&C<_.length;C++){T.index>C?(G=T,T=null):G=T.sibling;var x=h(u,T,_[C],M);if(x===null){T===null&&(T=G);break}t&&T&&x.alternate===null&&e(u,T),v=s(x,v,C),A===null?D=x:A.sibling=x,A=x,T=G}if(C===_.length)return n(u,T),dt&&fr(u,C),D;if(T===null){for(;C<_.length;C++)T=d(u,_[C],M),T!==null&&(v=s(T,v,C),A===null?D=T:A.sibling=T,A=T);return dt&&fr(u,C),D}for(T=i(u,T);C<_.length;C++)G=p(T,u,C,_[C],M),G!==null&&(t&&G.alternate!==null&&T.delete(G.key===null?C:G.key),v=s(G,v,C),A===null?D=G:A.sibling=G,A=G);return t&&T.forEach(function(E){return e(u,E)}),dt&&fr(u,C),D}function y(u,v,_,M){var D=Vs(_);if(typeof D!="function")throw Error(oe(150));if(_=D.call(_),_==null)throw Error(oe(151));for(var A=D=null,T=v,C=v=0,G=null,x=_.next();T!==null&&!x.done;C++,x=_.next()){T.index>C?(G=T,T=null):G=T.sibling;var E=h(u,T,x.value,M);if(E===null){T===null&&(T=G);break}t&&T&&E.alternate===null&&e(u,T),v=s(E,v,C),A===null?D=E:A.sibling=E,A=E,T=G}if(x.done)return n(u,T),dt&&fr(u,C),D;if(T===null){for(;!x.done;C++,x=_.next())x=d(u,x.value,M),x!==null&&(v=s(x,v,C),A===null?D=x:A.sibling=x,A=x);return dt&&fr(u,C),D}for(T=i(u,T);!x.done;C++,x=_.next())x=p(T,u,C,x.value,M),x!==null&&(t&&x.alternate!==null&&T.delete(x.key===null?C:x.key),v=s(x,v,C),A===null?D=x:A.sibling=x,A=x);return t&&T.forEach(function(z){return e(u,z)}),dt&&fr(u,C),D}function m(u,v,_,M){if(typeof _=="object"&&_!==null&&_.type===ts&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case ia:e:{for(var D=_.key,A=v;A!==null;){if(A.key===D){if(D=_.type,D===ts){if(A.tag===7){n(u,A.sibling),v=r(A,_.props.children),v.return=u,u=v;break e}}else if(A.elementType===D||typeof D=="object"&&D!==null&&D.$$typeof===Di&&gp(D)===A.type){n(u,A.sibling),v=r(A,_.props),v.ref=Ys(u,A,_),v.return=u,u=v;break e}n(u,A);break}else e(u,A);A=A.sibling}_.type===ts?(v=Er(_.props.children,u.mode,M,_.key),v.return=u,u=v):(M=nl(_.type,_.key,_.props,null,u.mode,M),M.ref=Ys(u,v,_),M.return=u,u=M)}return o(u);case es:e:{for(A=_.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(u,v.sibling),v=r(v,_.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=jc(_,u.mode,M),v.return=u,u=v}return o(u);case Di:return A=_._init,m(u,v,A(_._payload),M)}if(ao(_))return g(u,v,_,M);if(Vs(_))return y(u,v,_,M);pa(u,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,_),v.return=u,u=v):(n(u,v),v=Wc(_,u.mode,M),v.return=u,u=v),o(u)):n(u,v)}return m}var As=Sv(!0),Mv=Sv(!1),El=tr(null),wl=null,cs=null,Id=null;function Ud(){Id=cs=wl=null}function Fd(t){var e=El.current;ut(El),t._currentValue=e}function nf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function _s(t,e){wl=t,Id=cs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(sn=!0),t.firstContext=null)}function bn(t){var e=t._currentValue;if(Id!==t)if(t={context:t,memoizedValue:e,next:null},cs===null){if(wl===null)throw Error(oe(308));cs=t,wl.dependencies={lanes:0,firstContext:t}}else cs=cs.next=t;return e}var _r=null;function kd(t){_r===null?_r=[t]:_r.push(t)}function Ev(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,kd(e)):(n.next=r.next,r.next=n),e.interleaved=n,xi(t,i)}function xi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ni=!1;function Od(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Wi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,xi(t,n)}return r=i.interleaved,r===null?(e.next=e,kd(i)):(e.next=r.next,r.next=e),i.interleaved=e,xi(t,n)}function Ka(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ed(t,n)}}function vp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Tl(t,e,n,i){var r=t.updateQueue;Ni=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,y=a;switch(h=e,p=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){d=g.call(p,d,h);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,h=typeof g=="function"?g.call(p,d,h):g,h==null)break e;d=mt({},d,h);break e;case 2:Ni=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=p,l=d):f=f.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Cr|=o,t.lanes=o,t.memoizedState=d}}function _p(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var $o={},Qn=tr($o),Uo=tr($o),Fo=tr($o);function xr(t){if(t===$o)throw Error(oe(174));return t}function Bd(t,e){switch(ot(Fo,e),ot(Uo,t),ot(Qn,$o),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Fu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Fu(e,t)}ut(Qn),ot(Qn,e)}function Cs(){ut(Qn),ut(Uo),ut(Fo)}function Tv(t){xr(Fo.current);var e=xr(Qn.current),n=Fu(e,t.type);e!==n&&(ot(Uo,t),ot(Qn,n))}function zd(t){Uo.current===t&&(ut(Qn),ut(Uo))}var ht=tr(0);function Al(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Oc=[];function Hd(){for(var t=0;t<Oc.length;t++)Oc[t]._workInProgressVersionPrimary=null;Oc.length=0}var Za=Mi.ReactCurrentDispatcher,Bc=Mi.ReactCurrentBatchConfig,Ar=0,pt=null,Tt=null,Dt=null,Cl=!1,_o=!1,ko=0,ay=0;function Bt(){throw Error(oe(321))}function Vd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!jn(t[n],e[n]))return!1;return!0}function Gd(t,e,n,i,r,s){if(Ar=s,pt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Za.current=t===null||t.memoizedState===null?fy:dy,t=n(i,r),_o){s=0;do{if(_o=!1,ko=0,25<=s)throw Error(oe(301));s+=1,Dt=Tt=null,e.updateQueue=null,Za.current=hy,t=n(i,r)}while(_o)}if(Za.current=Rl,e=Tt!==null&&Tt.next!==null,Ar=0,Dt=Tt=pt=null,Cl=!1,e)throw Error(oe(300));return t}function Wd(){var t=ko!==0;return ko=0,t}function Yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?pt.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function Pn(){if(Tt===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=Tt.next;var e=Dt===null?pt.memoizedState:Dt.next;if(e!==null)Dt=e,Tt=t;else{if(t===null)throw Error(oe(310));Tt=t,t={memoizedState:Tt.memoizedState,baseState:Tt.baseState,baseQueue:Tt.baseQueue,queue:Tt.queue,next:null},Dt===null?pt.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function Oo(t,e){return typeof e=="function"?e(t):e}function zc(t){var e=Pn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=Tt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((Ar&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,pt.lanes|=f,Cr|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,jn(i,e.memoizedState)||(sn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,pt.lanes|=s,Cr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Hc(t){var e=Pn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);jn(s,e.memoizedState)||(sn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Av(){}function Cv(t,e){var n=pt,i=Pn(),r=e(),s=!jn(i.memoizedState,r);if(s&&(i.memoizedState=r,sn=!0),i=i.queue,jd(Pv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Dt!==null&&Dt.memoizedState.tag&1){if(n.flags|=2048,Bo(9,bv.bind(null,n,i,r,e),void 0,null),Nt===null)throw Error(oe(349));Ar&30||Rv(n,e,r)}return r}function Rv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function bv(t,e,n,i){e.value=n,e.getSnapshot=i,Lv(e)&&Dv(t)}function Pv(t,e,n){return n(function(){Lv(e)&&Dv(t)})}function Lv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!jn(t,n)}catch{return!0}}function Dv(t){var e=xi(t,1);e!==null&&Gn(e,t,1,-1)}function xp(t){var e=Yn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oo,lastRenderedState:t},e.queue=t,t=t.dispatch=uy.bind(null,pt,t),[e.memoizedState,t]}function Bo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Nv(){return Pn().memoizedState}function Qa(t,e,n,i){var r=Yn();pt.flags|=t,r.memoizedState=Bo(1|e,n,void 0,i===void 0?null:i)}function ec(t,e,n,i){var r=Pn();i=i===void 0?null:i;var s=void 0;if(Tt!==null){var o=Tt.memoizedState;if(s=o.destroy,i!==null&&Vd(i,o.deps)){r.memoizedState=Bo(e,n,s,i);return}}pt.flags|=t,r.memoizedState=Bo(1|e,n,s,i)}function yp(t,e){return Qa(8390656,8,t,e)}function jd(t,e){return ec(2048,8,t,e)}function Iv(t,e){return ec(4,2,t,e)}function Uv(t,e){return ec(4,4,t,e)}function Fv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function kv(t,e,n){return n=n!=null?n.concat([t]):null,ec(4,4,Fv.bind(null,e,t),n)}function Xd(){}function Ov(t,e){var n=Pn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Vd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Bv(t,e){var n=Pn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Vd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function zv(t,e,n){return Ar&21?(jn(n,e)||(n=jg(),pt.lanes|=n,Cr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,sn=!0),t.memoizedState=n)}function ly(t,e){var n=nt;nt=n!==0&&4>n?n:4,t(!0);var i=Bc.transition;Bc.transition={};try{t(!1),e()}finally{nt=n,Bc.transition=i}}function Hv(){return Pn().memoizedState}function cy(t,e,n){var i=Xi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Vv(t))Gv(e,n);else if(n=Ev(t,e,n,i),n!==null){var r=qt();Gn(n,t,i,r),Wv(n,e,i)}}function uy(t,e,n){var i=Xi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vv(t))Gv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,jn(a,o)){var l=e.interleaved;l===null?(r.next=r,kd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Ev(t,e,r,i),n!==null&&(r=qt(),Gn(n,t,i,r),Wv(n,e,i))}}function Vv(t){var e=t.alternate;return t===pt||e!==null&&e===pt}function Gv(t,e){_o=Cl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Wv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ed(t,n)}}var Rl={readContext:bn,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useInsertionEffect:Bt,useLayoutEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useMutableSource:Bt,useSyncExternalStore:Bt,useId:Bt,unstable_isNewReconciler:!1},fy={readContext:bn,useCallback:function(t,e){return Yn().memoizedState=[t,e===void 0?null:e],t},useContext:bn,useEffect:yp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Qa(4194308,4,Fv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Qa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Qa(4,2,t,e)},useMemo:function(t,e){var n=Yn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Yn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=cy.bind(null,pt,t),[i.memoizedState,t]},useRef:function(t){var e=Yn();return t={current:t},e.memoizedState=t},useState:xp,useDebugValue:Xd,useDeferredValue:function(t){return Yn().memoizedState=t},useTransition:function(){var t=xp(!1),e=t[0];return t=ly.bind(null,t[1]),Yn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=pt,r=Yn();if(dt){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),Nt===null)throw Error(oe(349));Ar&30||Rv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,yp(Pv.bind(null,i,s,t),[t]),i.flags|=2048,Bo(9,bv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Yn(),e=Nt.identifierPrefix;if(dt){var n=fi,i=ui;n=(i&~(1<<32-Vn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ko++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ay++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},dy={readContext:bn,useCallback:Ov,useContext:bn,useEffect:jd,useImperativeHandle:kv,useInsertionEffect:Iv,useLayoutEffect:Uv,useMemo:Bv,useReducer:zc,useRef:Nv,useState:function(){return zc(Oo)},useDebugValue:Xd,useDeferredValue:function(t){var e=Pn();return zv(e,Tt.memoizedState,t)},useTransition:function(){var t=zc(Oo)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:Av,useSyncExternalStore:Cv,useId:Hv,unstable_isNewReconciler:!1},hy={readContext:bn,useCallback:Ov,useContext:bn,useEffect:jd,useImperativeHandle:kv,useInsertionEffect:Iv,useLayoutEffect:Uv,useMemo:Bv,useReducer:Hc,useRef:Nv,useState:function(){return Hc(Oo)},useDebugValue:Xd,useDeferredValue:function(t){var e=Pn();return Tt===null?e.memoizedState=t:zv(e,Tt.memoizedState,t)},useTransition:function(){var t=Hc(Oo)[0],e=Pn().memoizedState;return[t,e]},useMutableSource:Av,useSyncExternalStore:Cv,useId:Hv,unstable_isNewReconciler:!1};function Fn(t,e){if(t&&t.defaultProps){e=mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function rf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var tc={isMounted:function(t){return(t=t._reactInternals)?Dr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=qt(),r=Xi(t),s=mi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Wi(t,s,r),e!==null&&(Gn(e,t,r,i),Ka(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=qt(),r=Xi(t),s=mi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Wi(t,s,r),e!==null&&(Gn(e,t,r,i),Ka(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qt(),i=Xi(t),r=mi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Wi(t,r,i),e!==null&&(Gn(e,t,i,n),Ka(e,t,i))}};function Sp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Lo(n,i)||!Lo(r,s):!0}function jv(t,e,n){var i=!1,r=Zi,s=e.contextType;return typeof s=="object"&&s!==null?s=bn(s):(r=an(e)?wr:Wt.current,i=e.contextTypes,s=(i=i!=null)?ws(t,r):Zi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=tc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Mp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&tc.enqueueReplaceState(e,e.state,null)}function sf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Od(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=bn(s):(s=an(e)?wr:Wt.current,r.context=ws(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(rf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&tc.enqueueReplaceState(r,r.state,null),Tl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Rs(t,e){try{var n="",i=e;do n+=H0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Vc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function of(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var py=typeof WeakMap=="function"?WeakMap:Map;function Xv(t,e,n){n=mi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Pl||(Pl=!0,gf=i),of(t,e)},n}function Yv(t,e,n){n=mi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){of(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){of(t,e),typeof i!="function"&&(ji===null?ji=new Set([this]):ji.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ep(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new py;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Ry.bind(null,t,e,n),e.then(t,t))}function wp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Tp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=mi(-1,1),e.tag=2,Wi(n,e,1))),n.lanes|=1),t)}var my=Mi.ReactCurrentOwner,sn=!1;function Yt(t,e,n,i){e.child=t===null?Mv(e,null,n,i):As(e,t.child,n,i)}function Ap(t,e,n,i,r){n=n.render;var s=e.ref;return _s(e,r),i=Gd(t,e,n,i,s,r),n=Wd(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,yi(t,e,r)):(dt&&n&&Ld(e),e.flags|=1,Yt(t,e,i,r),e.child)}function Cp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!eh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,$v(t,e,s,i,r)):(t=nl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Lo,n(o,i)&&t.ref===e.ref)return yi(t,e,r)}return e.flags|=1,t=Yi(s,i),t.ref=e.ref,t.return=e,e.child=t}function $v(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Lo(s,i)&&t.ref===e.ref)if(sn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(sn=!0);else return e.lanes=t.lanes,yi(t,e,r)}return af(t,e,n,i,r)}function qv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(fs,pn),pn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ot(fs,pn),pn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ot(fs,pn),pn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ot(fs,pn),pn|=i;return Yt(t,e,r,n),e.child}function Kv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function af(t,e,n,i,r){var s=an(n)?wr:Wt.current;return s=ws(e,s),_s(e,r),n=Gd(t,e,n,i,s,r),i=Wd(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,yi(t,e,r)):(dt&&i&&Ld(e),e.flags|=1,Yt(t,e,n,r),e.child)}function Rp(t,e,n,i,r){if(an(n)){var s=!0;yl(e)}else s=!1;if(_s(e,r),e.stateNode===null)Ja(t,e),jv(e,n,i),sf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=bn(c):(c=an(n)?wr:Wt.current,c=ws(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Mp(e,o,i,c),Ni=!1;var h=e.memoizedState;o.state=h,Tl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||on.current||Ni?(typeof f=="function"&&(rf(e,n,f,i),l=e.memoizedState),(a=Ni||Sp(e,n,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,wv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Fn(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=bn(l):(l=an(n)?wr:Wt.current,l=ws(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Mp(e,o,i,l),Ni=!1,h=e.memoizedState,o.state=h,Tl(e,i,o,r);var g=e.memoizedState;a!==d||h!==g||on.current||Ni?(typeof p=="function"&&(rf(e,n,p,i),g=e.memoizedState),(c=Ni||Sp(e,n,c,i,h,g,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return lf(t,e,n,i,s,r)}function lf(t,e,n,i,r,s){Kv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&hp(e,n,!1),yi(t,e,s);i=e.stateNode,my.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=As(e,t.child,null,s),e.child=As(e,null,a,s)):Yt(t,e,a,s),e.memoizedState=i.state,r&&hp(e,n,!0),e.child}function Zv(t){var e=t.stateNode;e.pendingContext?dp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&dp(t,e.context,!1),Bd(t,e.containerInfo)}function bp(t,e,n,i,r){return Ts(),Nd(r),e.flags|=256,Yt(t,e,n,i),e.child}var cf={dehydrated:null,treeContext:null,retryLane:0};function uf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Qv(t,e,n){var i=e.pendingProps,r=ht.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ot(ht,r&1),t===null)return tf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=rc(o,i,0,null),t=Er(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=uf(n),e.memoizedState=cf,t):Yd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return gy(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Yi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Yi(a,s):(s=Er(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?uf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=cf,i}return s=t.child,t=s.sibling,i=Yi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Yd(t,e){return e=rc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ma(t,e,n,i){return i!==null&&Nd(i),As(e,t.child,null,n),t=Yd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function gy(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Vc(Error(oe(422))),ma(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=rc({mode:"visible",children:i.children},r,0,null),s=Er(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&As(e,t.child,null,o),e.child.memoizedState=uf(o),e.memoizedState=cf,s);if(!(e.mode&1))return ma(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(oe(419)),i=Vc(s,i,void 0),ma(t,e,o,i)}if(a=(o&t.childLanes)!==0,sn||a){if(i=Nt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,xi(t,r),Gn(i,t,r,-1))}return Jd(),i=Vc(Error(oe(421))),ma(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=by.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,mn=Gi(r.nextSibling),gn=e,dt=!0,On=null,t!==null&&(Mn[En++]=ui,Mn[En++]=fi,Mn[En++]=Tr,ui=t.id,fi=t.overflow,Tr=e),e=Yd(e,i.children),e.flags|=4096,e)}function Pp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),nf(t.return,e,n)}function Gc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Jv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Yt(t,e,i.children,n),i=ht.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Pp(t,n,e);else if(t.tag===19)Pp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ot(ht,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Al(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Gc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Al(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Gc(e,!0,n,null,s);break;case"together":Gc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ja(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function yi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Cr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=Yi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Yi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function vy(t,e,n){switch(e.tag){case 3:Zv(e),Ts();break;case 5:Tv(e);break;case 1:an(e.type)&&yl(e);break;case 4:Bd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ot(El,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ot(ht,ht.current&1),e.flags|=128,null):n&e.child.childLanes?Qv(t,e,n):(ot(ht,ht.current&1),t=yi(t,e,n),t!==null?t.sibling:null);ot(ht,ht.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Jv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ot(ht,ht.current),i)break;return null;case 22:case 23:return e.lanes=0,qv(t,e,n)}return yi(t,e,n)}var e_,ff,t_,n_;e_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ff=function(){};t_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,xr(Qn.current);var s=null;switch(n){case"input":r=Du(t,r),i=Du(t,i),s=[];break;case"select":r=mt({},r,{value:void 0}),i=mt({},i,{value:void 0}),s=[];break;case"textarea":r=Uu(t,r),i=Uu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=_l)}ku(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(wo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(wo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&lt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};n_=function(t,e,n,i){n!==i&&(e.flags|=4)};function $s(t,e){if(!dt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function _y(t,e,n){var i=e.pendingProps;switch(Dd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(e),null;case 1:return an(e.type)&&xl(),zt(e),null;case 3:return i=e.stateNode,Cs(),ut(on),ut(Wt),Hd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ha(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,On!==null&&(xf(On),On=null))),ff(t,e),zt(e),null;case 5:zd(e);var r=xr(Fo.current);if(n=e.type,t!==null&&e.stateNode!=null)t_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return zt(e),null}if(t=xr(Qn.current),ha(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Kn]=e,i[Io]=s,t=(e.mode&1)!==0,n){case"dialog":lt("cancel",i),lt("close",i);break;case"iframe":case"object":case"embed":lt("load",i);break;case"video":case"audio":for(r=0;r<co.length;r++)lt(co[r],i);break;case"source":lt("error",i);break;case"img":case"image":case"link":lt("error",i),lt("load",i);break;case"details":lt("toggle",i);break;case"input":Bh(i,s),lt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},lt("invalid",i);break;case"textarea":Hh(i,s),lt("invalid",i)}ku(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&da(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&da(i.textContent,a,t),r=["children",""+a]):wo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&lt("scroll",i)}switch(n){case"input":ra(i),zh(i,s,!0);break;case"textarea":ra(i),Vh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=_l)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Pg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Kn]=e,t[Io]=i,e_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ou(n,i),n){case"dialog":lt("cancel",t),lt("close",t),r=i;break;case"iframe":case"object":case"embed":lt("load",t),r=i;break;case"video":case"audio":for(r=0;r<co.length;r++)lt(co[r],t);r=i;break;case"source":lt("error",t),r=i;break;case"img":case"image":case"link":lt("error",t),lt("load",t),r=i;break;case"details":lt("toggle",t),r=i;break;case"input":Bh(t,i),r=Du(t,i),lt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=mt({},i,{value:void 0}),lt("invalid",t);break;case"textarea":Hh(t,i),r=Uu(t,i),lt("invalid",t);break;default:r=i}ku(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Ng(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Lg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&To(t,l):typeof l=="number"&&To(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(wo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&lt("scroll",t):l!=null&&vd(t,s,l,o))}switch(n){case"input":ra(t),zh(t,i,!1);break;case"textarea":ra(t),Vh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ki(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ps(t,!!i.multiple,s,!1):i.defaultValue!=null&&ps(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=_l)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return zt(e),null;case 6:if(t&&e.stateNode!=null)n_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(n=xr(Fo.current),xr(Qn.current),ha(e)){if(i=e.stateNode,n=e.memoizedProps,i[Kn]=e,(s=i.nodeValue!==n)&&(t=gn,t!==null))switch(t.tag){case 3:da(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&da(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Kn]=e,e.stateNode=i}return zt(e),null;case 13:if(ut(ht),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(dt&&mn!==null&&e.mode&1&&!(e.flags&128))yv(),Ts(),e.flags|=98560,s=!1;else if(s=ha(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[Kn]=e}else Ts(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;zt(e),s=!1}else On!==null&&(xf(On),On=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ht.current&1?At===0&&(At=3):Jd())),e.updateQueue!==null&&(e.flags|=4),zt(e),null);case 4:return Cs(),ff(t,e),t===null&&Do(e.stateNode.containerInfo),zt(e),null;case 10:return Fd(e.type._context),zt(e),null;case 17:return an(e.type)&&xl(),zt(e),null;case 19:if(ut(ht),s=e.memoizedState,s===null)return zt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)$s(s,!1);else{if(At!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Al(t),o!==null){for(e.flags|=128,$s(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ot(ht,ht.current&1|2),e.child}t=t.sibling}s.tail!==null&&St()>bs&&(e.flags|=128,i=!0,$s(s,!1),e.lanes=4194304)}else{if(!i)if(t=Al(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),$s(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!dt)return zt(e),null}else 2*St()-s.renderingStartTime>bs&&n!==1073741824&&(e.flags|=128,i=!0,$s(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=St(),e.sibling=null,n=ht.current,ot(ht,i?n&1|2:n&1),e):(zt(e),null);case 22:case 23:return Qd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?pn&1073741824&&(zt(e),e.subtreeFlags&6&&(e.flags|=8192)):zt(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function xy(t,e){switch(Dd(e),e.tag){case 1:return an(e.type)&&xl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Cs(),ut(on),ut(Wt),Hd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return zd(e),null;case 13:if(ut(ht),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));Ts()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ut(ht),null;case 4:return Cs(),null;case 10:return Fd(e.type._context),null;case 22:case 23:return Qd(),null;case 24:return null;default:return null}}var ga=!1,Gt=!1,yy=typeof WeakSet=="function"?WeakSet:Set,Se=null;function us(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){vt(t,e,i)}else n.current=null}function df(t,e,n){try{n()}catch(i){vt(t,e,i)}}var Lp=!1;function Sy(t,e){if($u=ml,t=av(),Pd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++f===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(qu={focusedElem:t,selectionRange:n},ml=!1,Se=e;Se!==null;)if(e=Se,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Se=t;else for(;Se!==null;){e=Se;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,m=g.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:Fn(e.type,y),m);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(M){vt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}return g=Lp,Lp=!1,g}function xo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&df(e,n,s)}r=r.next}while(r!==i)}}function nc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function hf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function i_(t){var e=t.alternate;e!==null&&(t.alternate=null,i_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Kn],delete e[Io],delete e[Qu],delete e[iy],delete e[ry])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function r_(t){return t.tag===5||t.tag===3||t.tag===4}function Dp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||r_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=_l));else if(i!==4&&(t=t.child,t!==null))for(pf(t,e,n),t=t.sibling;t!==null;)pf(t,e,n),t=t.sibling}function mf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(mf(t,e,n),t=t.sibling;t!==null;)mf(t,e,n),t=t.sibling}var Ut=null,kn=!1;function Ti(t,e,n){for(n=n.child;n!==null;)s_(t,e,n),n=n.sibling}function s_(t,e,n){if(Zn&&typeof Zn.onCommitFiberUnmount=="function")try{Zn.onCommitFiberUnmount($l,n)}catch{}switch(n.tag){case 5:Gt||us(n,e);case 6:var i=Ut,r=kn;Ut=null,Ti(t,e,n),Ut=i,kn=r,Ut!==null&&(kn?(t=Ut,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ut.removeChild(n.stateNode));break;case 18:Ut!==null&&(kn?(t=Ut,n=n.stateNode,t.nodeType===8?Fc(t.parentNode,n):t.nodeType===1&&Fc(t,n),bo(t)):Fc(Ut,n.stateNode));break;case 4:i=Ut,r=kn,Ut=n.stateNode.containerInfo,kn=!0,Ti(t,e,n),Ut=i,kn=r;break;case 0:case 11:case 14:case 15:if(!Gt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&df(n,e,o),r=r.next}while(r!==i)}Ti(t,e,n);break;case 1:if(!Gt&&(us(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){vt(n,e,a)}Ti(t,e,n);break;case 21:Ti(t,e,n);break;case 22:n.mode&1?(Gt=(i=Gt)||n.memoizedState!==null,Ti(t,e,n),Gt=i):Ti(t,e,n);break;default:Ti(t,e,n)}}function Np(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new yy),e.forEach(function(i){var r=Py.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Dn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ut=a.stateNode,kn=!1;break e;case 3:Ut=a.stateNode.containerInfo,kn=!0;break e;case 4:Ut=a.stateNode.containerInfo,kn=!0;break e}a=a.return}if(Ut===null)throw Error(oe(160));s_(s,o,r),Ut=null,kn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){vt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)o_(e,t),e=e.sibling}function o_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dn(e,t),Xn(t),i&4){try{xo(3,t,t.return),nc(3,t)}catch(y){vt(t,t.return,y)}try{xo(5,t,t.return)}catch(y){vt(t,t.return,y)}}break;case 1:Dn(e,t),Xn(t),i&512&&n!==null&&us(n,n.return);break;case 5:if(Dn(e,t),Xn(t),i&512&&n!==null&&us(n,n.return),t.flags&32){var r=t.stateNode;try{To(r,"")}catch(y){vt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Rg(r,s),Ou(a,o);var c=Ou(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?Ng(r,d):f==="dangerouslySetInnerHTML"?Lg(r,d):f==="children"?To(r,d):vd(r,f,d,c)}switch(a){case"input":Nu(r,s);break;case"textarea":bg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ps(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?ps(r,!!s.multiple,s.defaultValue,!0):ps(r,!!s.multiple,s.multiple?[]:"",!1))}r[Io]=s}catch(y){vt(t,t.return,y)}}break;case 6:if(Dn(e,t),Xn(t),i&4){if(t.stateNode===null)throw Error(oe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){vt(t,t.return,y)}}break;case 3:if(Dn(e,t),Xn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{bo(e.containerInfo)}catch(y){vt(t,t.return,y)}break;case 4:Dn(e,t),Xn(t);break;case 13:Dn(e,t),Xn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Kd=St())),i&4&&Np(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Gt=(c=Gt)||f,Dn(e,t),Gt=c):Dn(e,t),Xn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Se=t,f=t.child;f!==null;){for(d=Se=f;Se!==null;){switch(h=Se,p=h.child,h.tag){case 0:case 11:case 14:case 15:xo(4,h,h.return);break;case 1:us(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(y){vt(i,n,y)}}break;case 5:us(h,h.return);break;case 22:if(h.memoizedState!==null){Up(d);continue}}p!==null?(p.return=h,Se=p):Up(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Dg("display",o))}catch(y){vt(t,t.return,y)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){vt(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Dn(e,t),Xn(t),i&4&&Np(t);break;case 21:break;default:Dn(e,t),Xn(t)}}function Xn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(r_(n)){var i=n;break e}n=n.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(To(r,""),i.flags&=-33);var s=Dp(t);mf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Dp(t);pf(t,a,o);break;default:throw Error(oe(161))}}catch(l){vt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function My(t,e,n){Se=t,a_(t)}function a_(t,e,n){for(var i=(t.mode&1)!==0;Se!==null;){var r=Se,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ga;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Gt;a=ga;var c=Gt;if(ga=o,(Gt=l)&&!c)for(Se=r;Se!==null;)o=Se,l=o.child,o.tag===22&&o.memoizedState!==null?Fp(r):l!==null?(l.return=o,Se=l):Fp(r);for(;s!==null;)Se=s,a_(s),s=s.sibling;Se=r,ga=a,Gt=c}Ip(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Se=s):Ip(t)}}function Ip(t){for(;Se!==null;){var e=Se;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Gt||nc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Gt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Fn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&_p(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}_p(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&bo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}Gt||e.flags&512&&hf(e)}catch(h){vt(e,e.return,h)}}if(e===t){Se=null;break}if(n=e.sibling,n!==null){n.return=e.return,Se=n;break}Se=e.return}}function Up(t){for(;Se!==null;){var e=Se;if(e===t){Se=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Se=n;break}Se=e.return}}function Fp(t){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{nc(4,e)}catch(l){vt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){vt(e,r,l)}}var s=e.return;try{hf(e)}catch(l){vt(e,s,l)}break;case 5:var o=e.return;try{hf(e)}catch(l){vt(e,o,l)}}}catch(l){vt(e,e.return,l)}if(e===t){Se=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Se=a;break}Se=e.return}}var Ey=Math.ceil,bl=Mi.ReactCurrentDispatcher,$d=Mi.ReactCurrentOwner,Rn=Mi.ReactCurrentBatchConfig,qe=0,Nt=null,wt=null,Ft=0,pn=0,fs=tr(0),At=0,zo=null,Cr=0,ic=0,qd=0,yo=null,nn=null,Kd=0,bs=1/0,ai=null,Pl=!1,gf=null,ji=null,va=!1,Bi=null,Ll=0,So=0,vf=null,el=-1,tl=0;function qt(){return qe&6?St():el!==-1?el:el=St()}function Xi(t){return t.mode&1?qe&2&&Ft!==0?Ft&-Ft:oy.transition!==null?(tl===0&&(tl=jg()),tl):(t=nt,t!==0||(t=window.event,t=t===void 0?16:Qg(t.type)),t):1}function Gn(t,e,n,i){if(50<So)throw So=0,vf=null,Error(oe(185));jo(t,n,i),(!(qe&2)||t!==Nt)&&(t===Nt&&(!(qe&2)&&(ic|=n),At===4&&Fi(t,Ft)),ln(t,i),n===1&&qe===0&&!(e.mode&1)&&(bs=St()+500,Jl&&nr()))}function ln(t,e){var n=t.callbackNode;ox(t,e);var i=pl(t,t===Nt?Ft:0);if(i===0)n!==null&&jh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&jh(n),e===1)t.tag===0?sy(kp.bind(null,t)):vv(kp.bind(null,t)),ty(function(){!(qe&6)&&nr()}),n=null;else{switch(Xg(i)){case 1:n=Md;break;case 4:n=Gg;break;case 16:n=hl;break;case 536870912:n=Wg;break;default:n=hl}n=m_(n,l_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function l_(t,e){if(el=-1,tl=0,qe&6)throw Error(oe(327));var n=t.callbackNode;if(xs()&&t.callbackNode!==n)return null;var i=pl(t,t===Nt?Ft:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Dl(t,i);else{e=i;var r=qe;qe|=2;var s=u_();(Nt!==t||Ft!==e)&&(ai=null,bs=St()+500,Mr(t,e));do try{Ay();break}catch(a){c_(t,a)}while(!0);Ud(),bl.current=s,qe=r,wt!==null?e=0:(Nt=null,Ft=0,e=At)}if(e!==0){if(e===2&&(r=Gu(t),r!==0&&(i=r,e=_f(t,r))),e===1)throw n=zo,Mr(t,0),Fi(t,i),ln(t,St()),n;if(e===6)Fi(t,i);else{if(r=t.current.alternate,!(i&30)&&!wy(r)&&(e=Dl(t,i),e===2&&(s=Gu(t),s!==0&&(i=s,e=_f(t,s))),e===1))throw n=zo,Mr(t,0),Fi(t,i),ln(t,St()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:dr(t,nn,ai);break;case 3:if(Fi(t,i),(i&130023424)===i&&(e=Kd+500-St(),10<e)){if(pl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Zu(dr.bind(null,t,nn,ai),e);break}dr(t,nn,ai);break;case 4:if(Fi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Vn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=St()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Ey(i/1960))-i,10<i){t.timeoutHandle=Zu(dr.bind(null,t,nn,ai),i);break}dr(t,nn,ai);break;case 5:dr(t,nn,ai);break;default:throw Error(oe(329))}}}return ln(t,St()),t.callbackNode===n?l_.bind(null,t):null}function _f(t,e){var n=yo;return t.current.memoizedState.isDehydrated&&(Mr(t,e).flags|=256),t=Dl(t,e),t!==2&&(e=nn,nn=n,e!==null&&xf(e)),t}function xf(t){nn===null?nn=t:nn.push.apply(nn,t)}function wy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!jn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Fi(t,e){for(e&=~qd,e&=~ic,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Vn(e),i=1<<n;t[n]=-1,e&=~i}}function kp(t){if(qe&6)throw Error(oe(327));xs();var e=pl(t,0);if(!(e&1))return ln(t,St()),null;var n=Dl(t,e);if(t.tag!==0&&n===2){var i=Gu(t);i!==0&&(e=i,n=_f(t,i))}if(n===1)throw n=zo,Mr(t,0),Fi(t,e),ln(t,St()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,dr(t,nn,ai),ln(t,St()),null}function Zd(t,e){var n=qe;qe|=1;try{return t(e)}finally{qe=n,qe===0&&(bs=St()+500,Jl&&nr())}}function Rr(t){Bi!==null&&Bi.tag===0&&!(qe&6)&&xs();var e=qe;qe|=1;var n=Rn.transition,i=nt;try{if(Rn.transition=null,nt=1,t)return t()}finally{nt=i,Rn.transition=n,qe=e,!(qe&6)&&nr()}}function Qd(){pn=fs.current,ut(fs)}function Mr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ey(n)),wt!==null)for(n=wt.return;n!==null;){var i=n;switch(Dd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&xl();break;case 3:Cs(),ut(on),ut(Wt),Hd();break;case 5:zd(i);break;case 4:Cs();break;case 13:ut(ht);break;case 19:ut(ht);break;case 10:Fd(i.type._context);break;case 22:case 23:Qd()}n=n.return}if(Nt=t,wt=t=Yi(t.current,null),Ft=pn=e,At=0,zo=null,qd=ic=Cr=0,nn=yo=null,_r!==null){for(e=0;e<_r.length;e++)if(n=_r[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}_r=null}return t}function c_(t,e){do{var n=wt;try{if(Ud(),Za.current=Rl,Cl){for(var i=pt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Cl=!1}if(Ar=0,Dt=Tt=pt=null,_o=!1,ko=0,$d.current=null,n===null||n.return===null){At=1,zo=e,wt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ft,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=wp(o);if(p!==null){p.flags&=-257,Tp(p,o,a,s,e),p.mode&1&&Ep(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var y=new Set;y.add(l),e.updateQueue=y}else g.add(l);break e}else{if(!(e&1)){Ep(s,c,e),Jd();break e}l=Error(oe(426))}}else if(dt&&a.mode&1){var m=wp(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Tp(m,o,a,s,e),Nd(Rs(l,a));break e}}s=l=Rs(l,a),At!==4&&(At=2),yo===null?yo=[s]:yo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Xv(s,l,e);vp(s,u);break e;case 1:a=l;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(ji===null||!ji.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Yv(s,a,e);vp(s,M);break e}}s=s.return}while(s!==null)}d_(n)}catch(D){e=D,wt===n&&n!==null&&(wt=n=n.return);continue}break}while(!0)}function u_(){var t=bl.current;return bl.current=Rl,t===null?Rl:t}function Jd(){(At===0||At===3||At===2)&&(At=4),Nt===null||!(Cr&268435455)&&!(ic&268435455)||Fi(Nt,Ft)}function Dl(t,e){var n=qe;qe|=2;var i=u_();(Nt!==t||Ft!==e)&&(ai=null,Mr(t,e));do try{Ty();break}catch(r){c_(t,r)}while(!0);if(Ud(),qe=n,bl.current=i,wt!==null)throw Error(oe(261));return Nt=null,Ft=0,At}function Ty(){for(;wt!==null;)f_(wt)}function Ay(){for(;wt!==null&&!Z0();)f_(wt)}function f_(t){var e=p_(t.alternate,t,pn);t.memoizedProps=t.pendingProps,e===null?d_(t):wt=e,$d.current=null}function d_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=xy(n,e),n!==null){n.flags&=32767,wt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{At=6,wt=null;return}}else if(n=_y(n,e,pn),n!==null){wt=n;return}if(e=e.sibling,e!==null){wt=e;return}wt=e=t}while(e!==null);At===0&&(At=5)}function dr(t,e,n){var i=nt,r=Rn.transition;try{Rn.transition=null,nt=1,Cy(t,e,n,i)}finally{Rn.transition=r,nt=i}return null}function Cy(t,e,n,i){do xs();while(Bi!==null);if(qe&6)throw Error(oe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ax(t,s),t===Nt&&(wt=Nt=null,Ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||va||(va=!0,m_(hl,function(){return xs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Rn.transition,Rn.transition=null;var o=nt;nt=1;var a=qe;qe|=4,$d.current=null,Sy(t,n),o_(n,t),Yx(qu),ml=!!$u,qu=$u=null,t.current=n,My(n),Q0(),qe=a,nt=o,Rn.transition=s}else t.current=n;if(va&&(va=!1,Bi=t,Ll=r),s=t.pendingLanes,s===0&&(ji=null),tx(n.stateNode),ln(t,St()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Pl)throw Pl=!1,t=gf,gf=null,t;return Ll&1&&t.tag!==0&&xs(),s=t.pendingLanes,s&1?t===vf?So++:(So=0,vf=t):So=0,nr(),null}function xs(){if(Bi!==null){var t=Xg(Ll),e=Rn.transition,n=nt;try{if(Rn.transition=null,nt=16>t?16:t,Bi===null)var i=!1;else{if(t=Bi,Bi=null,Ll=0,qe&6)throw Error(oe(331));var r=qe;for(qe|=4,Se=t.current;Se!==null;){var s=Se,o=s.child;if(Se.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Se=c;Se!==null;){var f=Se;switch(f.tag){case 0:case 11:case 15:xo(8,f,s)}var d=f.child;if(d!==null)d.return=f,Se=d;else for(;Se!==null;){f=Se;var h=f.sibling,p=f.return;if(i_(f),f===c){Se=null;break}if(h!==null){h.return=p,Se=h;break}Se=p}}}var g=s.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}Se=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Se=o;else e:for(;Se!==null;){if(s=Se,s.flags&2048)switch(s.tag){case 0:case 11:case 15:xo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Se=u;break e}Se=s.return}}var v=t.current;for(Se=v;Se!==null;){o=Se;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,Se=_;else e:for(o=v;Se!==null;){if(a=Se,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:nc(9,a)}}catch(D){vt(a,a.return,D)}if(a===o){Se=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,Se=M;break e}Se=a.return}}if(qe=r,nr(),Zn&&typeof Zn.onPostCommitFiberRoot=="function")try{Zn.onPostCommitFiberRoot($l,t)}catch{}i=!0}return i}finally{nt=n,Rn.transition=e}}return!1}function Op(t,e,n){e=Rs(n,e),e=Xv(t,e,1),t=Wi(t,e,1),e=qt(),t!==null&&(jo(t,1,e),ln(t,e))}function vt(t,e,n){if(t.tag===3)Op(t,t,n);else for(;e!==null;){if(e.tag===3){Op(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ji===null||!ji.has(i))){t=Rs(n,t),t=Yv(e,t,1),e=Wi(e,t,1),t=qt(),e!==null&&(jo(e,1,t),ln(e,t));break}}e=e.return}}function Ry(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=qt(),t.pingedLanes|=t.suspendedLanes&n,Nt===t&&(Ft&n)===n&&(At===4||At===3&&(Ft&130023424)===Ft&&500>St()-Kd?Mr(t,0):qd|=n),ln(t,e)}function h_(t,e){e===0&&(t.mode&1?(e=aa,aa<<=1,!(aa&130023424)&&(aa=4194304)):e=1);var n=qt();t=xi(t,e),t!==null&&(jo(t,e,n),ln(t,n))}function by(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),h_(t,n)}function Py(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),h_(t,n)}var p_;p_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||on.current)sn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return sn=!1,vy(t,e,n);sn=!!(t.flags&131072)}else sn=!1,dt&&e.flags&1048576&&_v(e,Ml,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ja(t,e),t=e.pendingProps;var r=ws(e,Wt.current);_s(e,n),r=Gd(null,e,i,t,r,n);var s=Wd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,an(i)?(s=!0,yl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Od(e),r.updater=tc,e.stateNode=r,r._reactInternals=e,sf(e,i,t,n),e=lf(null,e,i,!0,s,n)):(e.tag=0,dt&&s&&Ld(e),Yt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ja(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Dy(i),t=Fn(i,t),r){case 0:e=af(null,e,i,t,n);break e;case 1:e=Rp(null,e,i,t,n);break e;case 11:e=Ap(null,e,i,t,n);break e;case 14:e=Cp(null,e,i,Fn(i.type,t),n);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),af(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),Rp(t,e,i,r,n);case 3:e:{if(Zv(e),t===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,wv(t,e),Tl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Rs(Error(oe(423)),e),e=bp(t,e,i,n,r);break e}else if(i!==r){r=Rs(Error(oe(424)),e),e=bp(t,e,i,n,r);break e}else for(mn=Gi(e.stateNode.containerInfo.firstChild),gn=e,dt=!0,On=null,n=Mv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ts(),i===r){e=yi(t,e,n);break e}Yt(t,e,i,n)}e=e.child}return e;case 5:return Tv(e),t===null&&tf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Ku(i,r)?o=null:s!==null&&Ku(i,s)&&(e.flags|=32),Kv(t,e),Yt(t,e,o,n),e.child;case 6:return t===null&&tf(e),null;case 13:return Qv(t,e,n);case 4:return Bd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=As(e,null,i,n):Yt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),Ap(t,e,i,r,n);case 7:return Yt(t,e,e.pendingProps,n),e.child;case 8:return Yt(t,e,e.pendingProps.children,n),e.child;case 12:return Yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ot(El,i._currentValue),i._currentValue=o,s!==null)if(jn(s.value,o)){if(s.children===r.children&&!on.current){e=yi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=mi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),nf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(oe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),nf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Yt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,_s(e,n),r=bn(r),i=i(r),e.flags|=1,Yt(t,e,i,n),e.child;case 14:return i=e.type,r=Fn(i,e.pendingProps),r=Fn(i.type,r),Cp(t,e,i,r,n);case 15:return $v(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Fn(i,r),Ja(t,e),e.tag=1,an(i)?(t=!0,yl(e)):t=!1,_s(e,n),jv(e,i,r),sf(e,i,r,n),lf(null,e,i,!0,t,n);case 19:return Jv(t,e,n);case 22:return qv(t,e,n)}throw Error(oe(156,e.tag))};function m_(t,e){return Vg(t,e)}function Ly(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(t,e,n,i){return new Ly(t,e,n,i)}function eh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Dy(t){if(typeof t=="function")return eh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===xd)return 11;if(t===yd)return 14}return 2}function Yi(t,e){var n=t.alternate;return n===null?(n=An(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function nl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")eh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ts:return Er(n.children,r,s,e);case _d:o=8,r|=8;break;case Ru:return t=An(12,n,e,r|2),t.elementType=Ru,t.lanes=s,t;case bu:return t=An(13,n,e,r),t.elementType=bu,t.lanes=s,t;case Pu:return t=An(19,n,e,r),t.elementType=Pu,t.lanes=s,t;case Tg:return rc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Eg:o=10;break e;case wg:o=9;break e;case xd:o=11;break e;case yd:o=14;break e;case Di:o=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=An(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Er(t,e,n,i){return t=An(7,t,i,e),t.lanes=n,t}function rc(t,e,n,i){return t=An(22,t,i,e),t.elementType=Tg,t.lanes=n,t.stateNode={isHidden:!1},t}function Wc(t,e,n){return t=An(6,t,null,e),t.lanes=n,t}function jc(t,e,n){return e=An(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ny(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tc(0),this.expirationTimes=Tc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function th(t,e,n,i,r,s,o,a,l){return t=new Ny(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=An(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Od(s),t}function Iy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:es,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function g_(t){if(!t)return Zi;t=t._reactInternals;e:{if(Dr(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(an(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(an(n))return gv(t,n,e)}return e}function v_(t,e,n,i,r,s,o,a,l){return t=th(n,i,!0,t,r,s,o,a,l),t.context=g_(null),n=t.current,i=qt(),r=Xi(n),s=mi(i,r),s.callback=e??null,Wi(n,s,r),t.current.lanes=r,jo(t,r,i),ln(t,i),t}function sc(t,e,n,i){var r=e.current,s=qt(),o=Xi(r);return n=g_(n),e.context===null?e.context=n:e.pendingContext=n,e=mi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Wi(r,e,o),t!==null&&(Gn(t,r,o,s),Ka(t,r,o)),o}function Nl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Bp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function nh(t,e){Bp(t,e),(t=t.alternate)&&Bp(t,e)}function Uy(){return null}var __=typeof reportError=="function"?reportError:function(t){console.error(t)};function ih(t){this._internalRoot=t}oc.prototype.render=ih.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));sc(t,e,null,null)};oc.prototype.unmount=ih.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Rr(function(){sc(null,t,null,null)}),e[_i]=null}};function oc(t){this._internalRoot=t}oc.prototype.unstable_scheduleHydration=function(t){if(t){var e=qg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ui.length&&e!==0&&e<Ui[n].priority;n++);Ui.splice(n,0,t),n===0&&Zg(t)}};function rh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ac(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zp(){}function Fy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Nl(o);s.call(c)}}var o=v_(e,i,t,0,null,!1,!1,"",zp);return t._reactRootContainer=o,t[_i]=o.current,Do(t.nodeType===8?t.parentNode:t),Rr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Nl(l);a.call(c)}}var l=th(t,0,!1,null,null,!1,!1,"",zp);return t._reactRootContainer=l,t[_i]=l.current,Do(t.nodeType===8?t.parentNode:t),Rr(function(){sc(e,l,n,i)}),l}function lc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Nl(o);a.call(l)}}sc(e,o,t,r)}else o=Fy(n,e,t,r,i);return Nl(o)}Yg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=lo(e.pendingLanes);n!==0&&(Ed(e,n|1),ln(e,St()),!(qe&6)&&(bs=St()+500,nr()))}break;case 13:Rr(function(){var i=xi(t,1);if(i!==null){var r=qt();Gn(i,t,1,r)}}),nh(t,1)}};wd=function(t){if(t.tag===13){var e=xi(t,134217728);if(e!==null){var n=qt();Gn(e,t,134217728,n)}nh(t,134217728)}};$g=function(t){if(t.tag===13){var e=Xi(t),n=xi(t,e);if(n!==null){var i=qt();Gn(n,t,e,i)}nh(t,e)}};qg=function(){return nt};Kg=function(t,e){var n=nt;try{return nt=t,e()}finally{nt=n}};zu=function(t,e,n){switch(e){case"input":if(Nu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ql(i);if(!r)throw Error(oe(90));Cg(i),Nu(i,r)}}}break;case"textarea":bg(t,n);break;case"select":e=n.value,e!=null&&ps(t,!!n.multiple,e,!1)}};Fg=Zd;kg=Rr;var ky={usingClientEntryPoint:!1,Events:[Yo,ss,Ql,Ig,Ug,Zd]},qs={findFiberByHostInstance:vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Oy={bundleType:qs.bundleType,version:qs.version,rendererPackageName:qs.rendererPackageName,rendererConfig:qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=zg(t),t===null?null:t.stateNode},findFiberByHostInstance:qs.findFiberByHostInstance||Uy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_a.isDisabled&&_a.supportsFiber)try{$l=_a.inject(Oy),Zn=_a}catch{}}_n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ky;_n.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rh(e))throw Error(oe(200));return Iy(t,e,null,n)};_n.createRoot=function(t,e){if(!rh(t))throw Error(oe(299));var n=!1,i="",r=__;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=th(t,1,!1,null,null,n,!1,i,r),t[_i]=e.current,Do(t.nodeType===8?t.parentNode:t),new ih(e)};_n.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=zg(e),t=t===null?null:t.stateNode,t};_n.flushSync=function(t){return Rr(t)};_n.hydrate=function(t,e,n){if(!ac(e))throw Error(oe(200));return lc(null,t,e,!0,n)};_n.hydrateRoot=function(t,e,n){if(!rh(t))throw Error(oe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=__;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=v_(e,null,t,1,n??null,r,!1,s,o),t[_i]=e.current,Do(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new oc(e)};_n.render=function(t,e,n){if(!ac(e))throw Error(oe(200));return lc(null,t,e,!1,n)};_n.unmountComponentAtNode=function(t){if(!ac(t))throw Error(oe(40));return t._reactRootContainer?(Rr(function(){lc(null,null,t,!1,function(){t._reactRootContainer=null,t[_i]=null})}),!0):!1};_n.unstable_batchedUpdates=Zd;_n.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ac(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return lc(t,e,n,!1,i)};_n.version="18.3.1-next-f1338f8080-20240426";function x_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x_)}catch(t){console.error(t)}}x_(),xg.exports=_n;var By=xg.exports,Hp=By;Au.createRoot=Hp.createRoot,Au.hydrateRoot=Hp.hydrateRoot;const zy=2,di="master",yf=["bus-a","bus-b"],Il=["#4ecdc4","#a78bfa","#f472b6","#34d399","#60a5fa","#ffe066"];class Lt extends Error{constructor(n,i){super(i);st(this,"code");this.name="RoutingError",this.code=n}}function sh(){return[{id:yf[0],name:"总线 A",parentId:null,gain:1,muted:!1,solo:!1,color:Il[0]},{id:yf[1],name:"总线 B",parentId:null,gain:1,muted:!1,solo:!1,color:Il[1]}]}function Hy(t,e,n=null){return{id:t,name:`总线 ${String.fromCharCode(65+e)}`,parentId:n,gain:1,muted:!1,solo:!1,color:Il[e%Il.length]}}function Vp(t,e){var n;return((n=t[e%Math.max(t.length,1)])==null?void 0:n.id)??yf[0]}function cc(t){var s;const e=(s=t.buses)!=null&&s.length?t.buses.map(o=>({...o})):sh(),n=new Set(e.map(o=>o.id)),i=t.tracks.map((o,a)=>{const{busId:l,...c}=o,f=l&&n.has(l)?l:e[a%e.length].id;return{...c,busId:f}}),r={version:zy,routeVersion:typeof t.routeVersion=="number"&&t.routeVersion>=0?t.routeVersion:1,buses:e,tracks:i,listener:t.listener,spatial:t.spatial,masterGain:typeof t.masterGain=="number"?t.masterGain:.9,masterMuted:t.masterMuted??!1,savedAt:t.savedAt??0,name:t.name};return y_(r.buses,r.tracks),r}function y_(t,e){var i;if(t.length===0)throw new Lt("empty-bus","至少必须保留一个有效总线");const n=new Map;for(const r of t){if(n.has(r.id))throw new Lt("dangling",`总线 id 重复：${r.id}`);n.set(r.id,r)}for(const r of t)if(r.parentId!==null&&!n.has(r.parentId))throw new Lt("dangling",`总线「${r.name}」指向已不存在的父总线`);for(const r of t){const s=new Set;let o=r.id;for(;o;){if(s.has(o))throw new Lt("cycle",`检测到循环路由：${[...s,o].join(" → ")}`);s.add(o),o=((i=n.get(o))==null?void 0:i.parentId)??null}}for(const r of e)if(!n.has(r.busId))throw new Lt("dangling",`声轨「${r.name}」没有归属到有效总线`)}function Vy(t,e){const n=structuredClone(t);return e(n),y_(n.buses,n.tracks),n.routeVersion=t.routeVersion+1,n}function Gp(t,e){if(t.buses.length<=1)throw new Lt("empty-bus","不能删除最后一个有效总线");if(t.tracks.some(n=>n.busId===e))throw new Lt("nonempty-bus","该总线仍有声轨成员，请先迁移后再删除");if(t.buses.some(n=>n.parentId===e))throw new Lt("nonempty-bus","该总线仍有子总线，请先改接子总线后再删除")}function S_(t,e){const n=new Set,i=r=>{for(const s of t)s.parentId===r&&!n.has(s.id)&&(n.add(s.id),i(s.id))};return i(e),n}function qo(t,e=0){return{x:Math.sin(t)*Math.cos(e),y:Math.sin(e),z:-Math.cos(t)*Math.cos(e)}}function oh(t){return{x:Math.cos(t),y:0,z:Math.sin(t)}}function ah(t,e){return{x:t.x-e.x,y:t.y-e.y,z:t.z-e.z}}function Wp(t,e){return t.x*e.x+t.y*e.y+t.z*e.z}function Gy(t){return Math.hypot(t.x,t.y,t.z)}function Wy(t){return(t*180/Math.PI%360+360)%360}function jy(t,e){const n=ah(t,e.position),i=qo(e.yaw,0),r=oh(e.yaw),s=Wp(n,i),o=Wp(n,r),a=Math.atan2(o,s)*(180/Math.PI);return a>180?a-360:a<-180?a+360:a}function Xy(t,e){return Gy(ah(t,e))}function Yy(t,e){const n=ah(t,e),i=Math.hypot(n.x,n.z);return Math.atan2(n.y,i)*180/Math.PI}function $y(t){const e=Math.abs(t);let n;return e<5?n="正前":e>175?n="正后":n=t>0?`右偏 ${e.toFixed(0)}°`:`左偏 ${e.toFixed(0)}°`,n}function qy(t,e,n,i,r){const s=Math.max(t,1e-4);let o=1;switch(e){case"linear":o=1-i*((s-n)/(r-n));break;case"inverse":o=n/(n+i*Math.max(s-n,0));break;case"exponential":o=Math.pow(Math.max(s,n)/n,-i);break}return Math.min(1,Math.max(0,o))}function Ul(t){return t<=1e-4?"-∞":`${(20*Math.log10(t)).toFixed(1)} dB`}function Ky(t){let e=t>>>0;return()=>{e|=0,e=e+1831565813|0;let n=Math.imul(e^e>>>15,1|e);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function Zy(t){const e=t.sampleRate,i=t.createBuffer(1,Math.floor(e*1.6),e),r=i.getChannelData(0),s=[.05,.55,1.05];for(const o of s){const a=Math.floor(o*e),l=Math.floor(.05*e);for(let c=0;c<l;c++){const f=c/e,d=Math.pow(1-c/l,1.6);r[a+c]=Math.sin(2*Math.PI*1200*f)*d*.9}}return i}function Qy(t){const e=t.sampleRate,n=3,i=t.createBuffer(1,Math.floor(e*n),e),r=i.getChannelData(0),s=r.length;for(let o=0;o<s;o++){const a=o/e,l=Math.min(1,a/.02,(n-a)/.05);r[o]=Math.sin(2*Math.PI*440*a)*.5*l}return i}function jp(t,e){const n=t.sampleRate,i=4,r=t.createBuffer(1,Math.floor(n*i),n),s=r.getChannelData(0),o=Ky(20260929);for(let a=0;a<s.length;a++){const l=a/n,c=(o()*2-1)*.18,f=Math.sin(2*Math.PI*330*l)*.28,d=.5+.5*Math.sin(2*Math.PI*2*l),h=Math.min(1,l/.05,(i-l)/.1);s[a]=(c+f)*(.6+.4*d)*h}return r}function Jy(t,e){switch(e){case"pulse":return Zy(t);case"tone":return Qy(t);case"duoA":return jp(t);case"duoB":return jp(t);default:throw new Error(`非内置样例类型: ${e}`)}}const eS={pulse:"脉冲样例（方位测试）",tone:"单音样例（声像/距离）",duoA:"双声源 A（同步左）",duoB:"双声源 B（同步右）"};class hr extends Error{constructor(n,i){super(i);st(this,"trackId");this.name="DecodeError",this.trackId=n}}function Ks(){return{l:0,r:0,clipL:!1,clipR:!1}}class tS{constructor(){st(this,"ctx",null);st(this,"unlock","locked");st(this,"masterGain",null);st(this,"masterAnalyser",null);st(this,"masterWorklet",null);st(this,"timeDomainBuf",new Float32Array(new ArrayBuffer(8192)));st(this,"peakWorkletReady",!1);st(this,"workletFailed",!1);st(this,"workletGeneration",0);st(this,"insertingWorklets",null);st(this,"disposed",!1);st(this,"busNodes",new Map);st(this,"voices",new Map);st(this,"buffers",new Map);st(this,"pendingFiles",new Map);st(this,"spatial",null);st(this,"routing",{buses:sh(),tracks:[],masterGain:.9,masterMuted:!1});st(this,"meterLevels",{[di]:Ks()});st(this,"getLatestRouting",null);st(this,"unlockListeners",new Set);st(this,"levelListeners",new Set);st(this,"endedListeners",new Set);st(this,"rafHandle",0)}onUnlock(e){return this.unlockListeners.add(e),e(this.unlock),()=>{this.unlockListeners.delete(e)}}onLevels(e){return this.levelListeners.add(e),()=>{this.levelListeners.delete(e)}}onEnded(e){return this.endedListeners.add(e),()=>{this.endedListeners.delete(e)}}emitUnlock(){this.unlockListeners.forEach(e=>e(this.unlock))}async resume(){var n;if(this.unlock==="unlocked"&&this.ctx){this.ctx.state==="suspended"&&await this.ctx.resume();return}this.unlock="unlocking",this.emitUnlock();const e=this.ctx;this.ctx=null;try{const i=window.AudioContext??window.webkitAudioContext;if(!i)throw new Error("当前浏览器不支持 Web Audio API");const r=new i;this.ctx=r;const s=(n=this.getLatestRouting)==null?void 0:n.call(this);if(s&&(this.routing=s),this.disposed=!1,this.workletFailed=!1,this.buildGraph(r),r.state==="suspended"&&await r.resume(),r.state!=="running")throw new Error("AudioContext 被浏览器策略阻止，未能进入 running 状态");e&&e.close(),this.unlock="unlocked",this.emitUnlock(),this.startMeterLoop(),this.ensurePeakWorklets(r)}catch(i){throw this.ctx?this.ctx.close():e&&e.close(),this.ctx=null,this.unlock="failed",this.emitUnlock(),i}}buildGraph(e){this.masterGain=e.createGain(),this.masterAnalyser=e.createAnalyser(),this.masterAnalyser.fftSize=2048,this.timeDomainBuf=new Float32Array(new ArrayBuffer(this.masterAnalyser.fftSize*4)),this.masterWorklet=null,this.peakWorkletReady=!1,this.workletGeneration+=1,this.insertingWorklets=null,this.busNodes.clear(),this.voices.clear(),this.buffers.clear(),this.pendingFiles.clear(),this.meterLevels={[di]:Ks()};for(const n of this.routing.buses)this.createBusNode(e,n);this.reconnectBuses(),this.applyMasterGain(),this.masterGain.connect(this.masterAnalyser),this.masterAnalyser.connect(e.destination)}createBusNode(e,n){const i=e.createGain(),r=e.createAnalyser();r.fftSize=2048;const s={spec:{...n},gain:i,analyser:r,worklet:null};return this.busNodes.set(n.id,s),this.meterLevels[n.id]=Ks(),i.connect(r),s}reconnectBuses(){if(this.ctx)for(const e of this.busNodes.values()){e.analyser.disconnect();const n=e.spec.parentId,i=n?this.busNodes.get(n):null;n&&!i||e.analyser.connect(i?i.gain:this.masterGain)}}reconcileBuses(e,n){const i=new Map([...this.busNodes].map(([o,a])=>[o,a.spec.parentId])),r=new Map;for(const o of n)r.set(o.id,o);for(const o of[...this.busNodes.keys()])if(!r.has(o)){const a=this.busNodes.get(o);this.disconnectBusNode(a),this.busNodes.delete(o),delete this.meterLevels[o]}let s=!1;for(const o of n){let a=this.busNodes.get(o.id);a||(a=this.createBusNode(e,o),s=!0),i.get(o.id)!==o.parentId&&(s=!0),a.spec={...o},a.gain.gain.setTargetAtTime(o.muted?0:o.gain,e.currentTime,.01)}(s||this.busNodes.size!==n.length)&&this.reconnectBuses(),this.peakWorkletReady&&this.insertAvailableWorklets(e)}disconnectBusNode(e){var n;try{e.gain.disconnect(),e.analyser.disconnect(),(n=e.worklet)==null||n.disconnect()}catch{}}async ensurePeakWorklets(e){if(this.peakWorkletReady||this.workletFailed)return this.peakWorkletReady;const n=this.workletGeneration;try{const i=`
class MeterProcessor extends AudioWorkletProcessor {
  static get parameterDescriptors() { return []; }
  process(inputs, outputs) {
    const in0 = inputs[0] || [];
    const out0 = outputs[0] || [];
    const l = in0[0];
    const r = in0[1] || in0[0];
    const ol = out0[0];
    const or = out0[1] || out0[0];
    let peakL = 0, peakR = 0, clipL = false, clipR = false;
    if (l && ol) {
      for (let i = 0; i < l.length; i++) {
        const vl = l[i];
        const al = Math.abs(vl);
        if (al > peakL) peakL = al;
        if (al >= 1.0) clipL = true;
        ol[i] = vl;
      }
    }
    if (r && or) {
      for (let i = 0; i < r.length; i++) {
        const vr = r[i];
        const ar = Math.abs(vr);
        if (ar > peakR) peakR = ar;
        if (ar >= 1.0) clipR = true;
        or[i] = vr;
      }
    }
    this.port.postMessage({ l: peakL, r: peakR, clipL, clipR });
    return true;
  }
}
registerProcessor('routing-meter', MeterProcessor);
`,r=new Blob([i],{type:"application/javascript"}),s=URL.createObjectURL(r);try{await e.audioWorklet.addModule(s)}finally{URL.revokeObjectURL(s)}return this.disposed||this.ctx!==e||n!==this.workletGeneration?!1:(this.peakWorkletReady=!0,await this.insertAvailableWorklets(e,n),!0)}catch{return n===this.workletGeneration&&(this.workletFailed=!0),!1}}insertAvailableWorklets(e,n=this.workletGeneration){if(!this.peakWorkletReady||this.ctx!==e||n!==this.workletGeneration||this.insertingWorklets)return this.insertingWorklets??Promise.resolve();const i=this.insertWorkletNodes(e,n);return this.insertingWorklets=i,i.finally(()=>{this.insertingWorklets===i&&(this.insertingWorklets=null)}),i}async insertWorkletNodes(e,n){const i=async(r,s,o,a)=>{if(a||!this.peakWorkletReady||this.ctx!==e||n!==this.workletGeneration)return a;const l=new AudioWorkletNode(e,"routing-meter",{numberOfInputs:1,numberOfOutputs:1,outputChannelCount:[2]});return l.channelCount=2,l.channelInterpretation="speakers",s.disconnect(),s.connect(l),l.connect(o),l.port.onmessage=c=>{this.recordWorkletLevel(r,c.data)},l};this.masterGain&&this.masterAnalyser&&(this.masterWorklet=await i(di,this.masterGain,this.masterAnalyser,this.masterWorklet));for(const r of this.busNodes.values())r.worklet=await i(r.spec.id,r.gain,r.analyser,r.worklet)}recordWorkletLevel(e,n){const i=this.meterLevels[e]??Ks();this.meterLevels[e]={l:n.l,r:n.r,clipL:i.clipL||n.clipL,clipR:i.clipR||n.clipR}}clearClipLatch(e){if(e){const n=this.meterLevels[e];n&&(this.meterLevels[e]={...n,clipL:!1,clipR:!1});return}for(const n of Object.keys(this.meterLevels))this.meterLevels[n]={...this.meterLevels[n],clipL:!1,clipR:!1}}startMeterLoop(){const e=()=>{if(!this.peakWorkletReady){this.pollAnalyser(di,this.masterAnalyser??null);for(const[i,r]of this.busNodes)this.pollAnalyser(i,r.analyser)}const n=Object.fromEntries(Object.entries(this.meterLevels).map(([i,r])=>[i,{...r}]));this.levelListeners.forEach(i=>i(n)),this.rafHandle=requestAnimationFrame(e)};this.rafHandle=requestAnimationFrame(e)}pollAnalyser(e,n){if(!n)return;n.getFloatTimeDomainData(this.timeDomainBuf);let i=0;for(let o=0;o<this.timeDomainBuf.length;o++){const a=Math.abs(this.timeDomainBuf[o]);a>i&&(i=a)}const r=this.meterLevels[e]??Ks(),s=i>=1;this.meterLevels[e]={l:i,r:i,clipL:r.clipL||s,clipR:r.clipR||s}}setSpatialSettings(e){if(this.spatial=e,!!this.ctx)for(const n of this.voices.values())n.panner.distanceModel=e.distanceModel,n.panner.refDistance=e.refDistance,n.panner.rolloffFactor=e.rolloffFactor,n.panner.maxDistance=e.maxDistance}setRoutingProvider(e){this.getLatestRouting=e}syncRouting(e){if(this.routing={buses:e.buses.map(n=>({...n})),tracks:e.tracks.map(n=>({...n})),masterGain:e.masterGain,masterMuted:e.masterMuted},!!this.ctx){this.reconcileBuses(this.ctx,e.buses),this.applyMasterGain();for(const n of e.tracks){const i=this.voices.get(n.id);i&&this.updateVoiceLive(i,n,e.buses,e.tracks)}}}applyMasterGain(){if(!this.ctx||!this.masterGain)return;const e=this.routing.masterMuted?0:this.routing.masterGain;this.masterGain.gain.setTargetAtTime(e,this.ctx.currentTime,.01)}setListener(e){if(!this.ctx)return;const n=this.ctx.currentTime,i=qo(e.yaw,e.pitch),r=nS(e.yaw,e.pitch),s=this.ctx.listener,o=(a,l)=>{a&&a.setTargetAtTime(l,n,.02)};o(s.positionX,e.position.x),o(s.positionY,e.position.y),o(s.positionZ,e.position.z),o(s.forwardX,i.x),o(s.forwardY,i.y),o(s.forwardZ,i.z),o(s.upX,r.x),o(s.upY,r.y),o(s.upZ,r.z)}effectiveTrackGain(e,n,i){var c;if(e.muted||this.routing.masterMuted)return 0;const r=new Map(n.map(f=>[f.id,f]));let s=e.busId;const o=[],a=new Set;for(;s;){if(a.has(s))return 0;a.add(s);const f=r.get(s);if(!f)return 0;o.push(f),s=f.parentId}const l=n.filter(f=>f.solo).map(f=>f.id);if(l.length>0){const f=new Set;for(const d of l){let h=d;const p=new Set;for(;h&&!p.has(h);)p.add(h),f.add(h),h=((c=r.get(h))==null?void 0:c.parentId)??null}if(!o.some(d=>f.has(d.id)))return 0}else if(i.some(f=>f.solo)&&!e.solo)return 0;return o.some(f=>f.muted)?0:e.gain}async ensureTrack(e){if(!this.ctx||this.unlock!=="unlocked")return;let n=this.buffers.get(e.id);if(!n){if(e.sourceType==="file"){const r=this.pendingFiles.get(e.id);if(!r)return;try{const s=await r.arrayBuffer();n=await this.ctx.decodeAudioData(s.slice(0))}catch(s){throw new hr(e.id,`音频解码失败：${s instanceof Error?s.message:"不支持的编码或文件损坏"}`)}}else n=Jy(this.ctx,e.sourceType);this.buffers.set(e.id,n)}const i=this.voices.get(e.id);i?this.updateVoiceLive(i,e,this.routing.buses,this.routing.tracks):this.voices.set(e.id,this.createVoice(e,n))}setFileBlob(e,n){this.pendingFiles.set(e,n)}dropBuffer(e){this.buffers.delete(e)}createVoice(e,n){var c,f,d,h;const i=this.ctx,r=i.createBufferSource();r.buffer=n,r.loop=e.loop;const s=i.createGain();s.gain.value=this.effectiveTrackGain(e,this.routing.buses,this.routing.tracks.some(p=>p.id===e.id)?this.routing.tracks:[...this.routing.tracks,e]);const o=new PannerNode(i,{panningModel:"HRTF",distanceModel:((c=this.spatial)==null?void 0:c.distanceModel)??"inverse",refDistance:((f=this.spatial)==null?void 0:f.refDistance)??1,rolloffFactor:((d=this.spatial)==null?void 0:d.rolloffFactor)??1,maxDistance:((h=this.spatial)==null?void 0:h.maxDistance)??100,positionX:e.position.x,positionY:e.position.y,positionZ:e.position.z});if(n.numberOfChannels<=1)r.connect(s);else{const p=i.createChannelSplitter(n.numberOfChannels);r.connect(p);const g=Math.min(e.channel,n.numberOfChannels-1);p.connect(s,g)}s.connect(o);const a=this.busNodes.get(e.busId);if(!a)throw new Error(`声轨「${e.name}」指向无效总线，无法建立音频节点`);o.connect(a.gain);const l={trackId:e.id,spec:e,source:r,trackGain:s,panner:o,busId:e.busId,playing:!1,consumed:!1,startedAt:0,offset:0,duration:n.duration};return r.onended=()=>{if(!l.playing)return;const p=l.spec;l.playing=!1,l.consumed=!0,l.offset=0;const g=this.createVoice(p,n);g.offset=0,this.voices.set(e.id,g),this.endedListeners.forEach(y=>y(e.id))},l}updateVoiceLive(e,n,i,r){var l,c;const o=this.ctx.currentTime,a=Math.max(.005,((l=this.spatial)==null?void 0:l.positionTimeConstant)??.05);if(e.busId!==n.busId){const f=this.busNodes.get(n.busId);if(!f)throw new Error(`目标总线不存在：${n.busId}`);e.panner.disconnect(),e.panner.connect(f.gain),e.busId=n.busId}e.panner.positionX.setTargetAtTime(n.position.x,o,a),e.panner.positionY.setTargetAtTime(n.position.y,o,a),e.panner.positionZ.setTargetAtTime(n.position.z,o,a),e.panner.distanceModel=((c=this.spatial)==null?void 0:c.distanceModel)??e.panner.distanceModel,e.trackGain.gain.setTargetAtTime(this.effectiveTrackGain(n,i,r),o,.01),e.source.loop!==n.loop&&(e.source.loop=n.loop),e.spec=n}syncTracks(e){if(this.ctx){this.routing.tracks=e.map(n=>({...n}));for(const n of e){const i=this.voices.get(n.id);i&&this.updateVoiceLive(i,n,this.routing.buses,e)}}}getChannelCount(e){var n;return((n=this.buffers.get(e))==null?void 0:n.numberOfChannels)??null}async rebuildVoiceGraph(e){await this.ensureTrack(e);const n=this.voices.get(e.id),i=this.buffers.get(e.id);if(!n||!i)return;const r=n.playing,s=r?this.currentOffset(n):n.offset,o=this.replaceVoice(n,e,i,s);r&&(o.source.start(this.ctx.currentTime,s),o.startedAt=this.ctx.currentTime,o.playing=!0,o.consumed=!0)}async playTrack(e){await this.ensureTrack(e);let n=this.voices.get(e.id);if(!n||n.playing)return;if(n.consumed){const r=this.buffers.get(e.id);n=this.replaceVoice(n,e,r,n.offset)}const i=this.ctx;n.source.start(i.currentTime,n.offset%n.duration),n.startedAt=i.currentTime,n.playing=!0,n.consumed=!0}pauseTrack(e){const n=this.voices.get(e.id);!n||!n.playing||(n.offset=this.currentOffset(n),this.replaceVoice(n,e,this.buffers.get(e.id),n.offset))}stopTrack(e){const n=this.voices.get(e.id);n&&(n.playing||n.consumed?this.replaceVoice(n,e,this.buffers.get(e.id),0):n.offset=0)}async seekTrack(e,n,i){await this.ensureTrack(e);const r=this.voices.get(e.id),s=this.buffers.get(e.id);if(!r||!s)return;const o=e.loop?(n%s.duration+s.duration)%s.duration:Math.min(Math.max(0,n),s.duration),a=this.replaceVoice(r,e,s,o);i&&(a.source.start(this.ctx.currentTime,o),a.startedAt=this.ctx.currentTime,a.playing=!0,a.consumed=!0)}replaceVoice(e,n,i,r){try{e.source.onended=null,e.source.stop()}catch{}e.source.disconnect(),e.trackGain.disconnect(),e.panner.disconnect();const s=this.createVoice(n,i);return s.offset=r,this.voices.set(n.id,s),s}currentOffset(e){let n=e.offset+(this.ctx.currentTime-e.startedAt);return n=e.spec.loop?(n%e.duration+e.duration)%e.duration:Math.min(n,e.duration),n}removeTrack(e){const n=this.voices.get(e);if(n){try{n.source.onended=null,n.source.stop()}catch{}n.source.disconnect(),n.trackGain.disconnect(),n.panner.disconnect()}this.voices.delete(e),this.buffers.delete(e),this.pendingFiles.delete(e)}getProgress(e){const n=this.voices.get(e);return n?n.playing?this.currentOffset(n):n.offset:null}getDuration(e){var n;return((n=this.buffers.get(e))==null?void 0:n.duration)??null}isPlaying(e){var n;return((n=this.voices.get(e))==null?void 0:n.playing)??!1}dispose(){var e;this.disposed=!0,this.workletGeneration+=1,cancelAnimationFrame(this.rafHandle);for(const n of[...this.voices.keys()])this.removeTrack(n);for(const n of this.busNodes.values())this.disconnectBusNode(n);this.busNodes.clear(),(e=this.ctx)==null||e.close(),this.ctx=null,this.masterGain=null,this.masterAnalyser=null,this.masterWorklet=null,this.peakWorkletReady=!1,this.workletFailed=!1,this.unlock="locked"}}function nS(t,e){const n=Math.cos(e),i=Math.sin(e);return{x:-i*Math.sin(t),y:n,z:i*Math.cos(t)}}const Pe=new tS,iS="spatial-audio-workbench",rS=2,Fl="session",Ps="projects",Ho="blobs";function sS(t){return new Promise((e,n)=>{const i=indexedDB.open(iS,t);i.onupgradeneeded=()=>{const r=i.result;r.objectStoreNames.contains(Fl)||r.createObjectStore(Fl),r.objectStoreNames.contains(Ps)||r.createObjectStore(Ps,{keyPath:"id"}).createIndex("savedAt","savedAt"),r.objectStoreNames.contains(Ho)||r.createObjectStore(Ho)},i.onsuccess=()=>e(i.result),i.onerror=()=>n(i.error),i.onblocked=()=>n(i.error??new Error("IndexedDB 升级被其他标签页阻塞"))})}function Ei(t,e,n){return sS(rS).then(i=>new Promise((r,s)=>{const o=i.transaction(t,e),a=n(o.objectStore(t));a.onsuccess=()=>r(a.result),a.onerror=()=>s(a.error),o.onerror=()=>s(o.error),o.onabort=()=>s(o.error),o.oncomplete=()=>i.close()}))}async function oS(t){await Ei(Fl,"readwrite",e=>e.put(t,"current"))}async function aS(){const t=await Ei(Fl,"readonly",e=>e.get("current"));return t?cc(t):void 0}async function lS(t,e){await Ei(Ho,"readwrite",n=>n.put(e,t))}async function Xp(t){return Ei(Ho,"readonly",e=>e.get(t))}async function cS(t){await Ei(Ho,"readwrite",e=>e.delete(t))}async function Yp(){return(await Ei(Ps,"readonly",e=>e.getAll())).map(e=>({...e,doc:cc(e.doc)})).sort((e,n)=>n.savedAt-e.savedAt)}async function uS(t){const e={...t,doc:cc(t.doc)};await Ei(Ps,"readwrite",n=>n.put(e))}async function fS(t){await Ei(Ps,"readwrite",e=>e.delete(t))}async function dS(t){const e=await Ei(Ps,"readonly",n=>n.get(t));return e?{...e,doc:cc(e.doc)}:void 0}const kl=["#e8734a","#4ecdc4","#ffe066","#a78bfa","#f472b6","#34d399","#60a5fa"],hS={distanceModel:"inverse",refDistance:1,rolloffFactor:1,maxDistance:30,positionTimeConstant:.06,hrtfIR:"none"},$p={position:{x:0,y:0,z:3},yaw:0,pitch:0,earHeight:0};let qp=0;function uo(t){return qp+=1,`${t}-${Date.now().toString(36)}-${qp}`}function pS(t,e,n){const r={pulse:{position:{x:-3,y:0,z:0},loop:!0},tone:{position:{x:3,y:0,z:0},loop:!0},duoA:{position:{x:-2,y:0,z:0},loop:!0},duoB:{position:{x:2,y:0,z:0},loop:!0}}[t];return{id:uo("trk"),name:eS[t],sourceType:t,busId:n,loop:r.loop,muted:!1,solo:!1,gain:.9,channel:0,color:kl[e%kl.length],position:{...r.position},status:"pending"}}function Kp(){return{version:2,routeVersion:1,buses:sh(),tracks:[],listener:{...$p,position:{...$p.position}},spatial:{...hS},masterGain:.9,masterMuted:!1,savedAt:0}}const Sf={l:0,r:0,clipL:!1,clipR:!1},mS={[di]:Sf};function gS(){const[t,e]=fe.useState(Kp),[n,i]=fe.useState("locked"),[r,s]=fe.useState(null),[o,a]=fe.useState(new Set),[l,c]=fe.useState(mS),[f,d]=fe.useState(null),[h,p]=fe.useState([]),[g,y]=fe.useState(null),[m,u]=fe.useState(null),[v,_]=fe.useState("idle"),[M,D]=fe.useState(null),A=fe.useRef(t);A.current=t;const T=fe.useRef(!1),C=fe.useCallback(b=>{b instanceof Lt?D(b.message):D(b instanceof Error?b.message:String(b))},[]),G=fe.useCallback(b=>{try{const L=Vy(A.current,b);return e(L),!0}catch(L){return C(L),!1}},[C]);fe.useEffect(()=>{if(T.current)return;T.current=!0;let b=!1;return(async()=>{try{const[L,N]=await Promise.all([aS(),Yp()]);if(b)return;p(N),L&&e({...L,tracks:L.tracks.map(Q=>({...Q,status:"pending",errorMessage:void 0}))})}catch(L){b||C(`读取本地工程失败：${L instanceof Error?L.message:String(L)}`)}})(),()=>{b=!0}},[C]),fe.useEffect(()=>Pe.onUnlock(i),[]),fe.useEffect(()=>Pe.onLevels(c),[]),fe.useEffect(()=>Pe.onEnded(b=>{a(L=>{if(!L.has(b))return L;const N=new Set(L);return N.delete(b),N})}),[]),fe.useEffect(()=>{Pe.setSpatialSettings(t.spatial)},[t.spatial]),fe.useEffect(()=>{Pe.setListener(t.listener)},[t.listener]),fe.useEffect(()=>(Pe.setRoutingProvider(()=>{const b=A.current;return{buses:b.buses,tracks:b.tracks,masterGain:b.masterGain,masterMuted:b.masterMuted}}),()=>Pe.setRoutingProvider(null)),[]),fe.useEffect(()=>{c(b=>{const L={[di]:b[di]??Sf};for(const Q of t.buses)L[Q.id]=b[Q.id]??Sf;let N=Object.keys(L).length!==Object.keys(b).length;if(!N)for(const Q of Object.keys(b))Q in L||(N=!0);return N?L:b})},[t.buses]),fe.useEffect(()=>{Pe.syncRouting({buses:t.buses,tracks:t.tracks,masterGain:t.masterGain,masterMuted:t.masterMuted})},[t.buses,t.tracks,t.masterGain,t.masterMuted]),fe.useEffect(()=>{if(n!=="unlocked")return;let b=!1;return(async()=>{Pe.setSpatialSettings(A.current.spatial),Pe.setListener(A.current.listener),Pe.syncRouting({buses:A.current.buses,tracks:A.current.tracks,masterGain:A.current.masterGain,masterMuted:A.current.masterMuted});for(const L of A.current.tracks)if(L.sourceType==="file"&&L.blobKey&&L.status!=="ready")try{const N=await Xp(L.blobKey);N?Pe.setFileBlob(L.id,N):b||E(L.id,{status:"decode-error",errorMessage:"本地音频 Blob 缺失"})}catch{b||E(L.id,{status:"decode-error",errorMessage:"读取本地音频失败"})}for(const L of A.current.tracks){if(b)return;try{if(await Pe.ensureTrack(L),b)return;if(!A.current.tracks.some(ie=>ie.id===L.id)){Pe.removeTrack(L.id);continue}const N=Pe.getDuration(L.id),Q=Pe.getChannelCount(L.id);E(L.id,{status:"ready",errorMessage:void 0,duration:N??L.duration,channels:Q??L.channels})}catch(N){if(b)return;N instanceof hr&&E(L.id,{status:"decode-error",errorMessage:N.message})}}})(),()=>{b=!0}},[n]);const x=fe.useRef(void 0);fe.useEffect(()=>{if(T.current)return _("saving"),window.clearTimeout(x.current),x.current=window.setTimeout(async()=>{const b={...A.current,savedAt:Date.now()};try{await oS(b),_("saved"),window.setTimeout(()=>_("idle"),1200)}catch{_("idle")}},500),()=>window.clearTimeout(x.current)},[t]);function E(b,L){e(N=>N.tracks.find(ie=>ie.id===b)?{...N,routeVersion:N.routeVersion+1,tracks:N.tracks.map(ie=>ie.id===b?{...ie,...L}:ie)}:N)}const z=fe.useCallback(b=>d(b),[]),B=fe.useCallback(async()=>{s(null);try{await Pe.resume()}catch(b){s(b instanceof Error?b.message:String(b))}},[]),Y=fe.useCallback(async(b,L)=>{if(Pe.unlock!=="unlocked"&&(await B(),Pe.unlock!=="unlocked"))return;let N;if(G(Q=>{const ie=L??Vp(Q.buses,Q.tracks.length);if(!Q.buses.some(je=>je.id===ie))throw new Lt("dangling","目标总线不存在");const pe=pS(b,Q.tracks.length,ie);Q.tracks.push(pe),N=pe}),!!N){if(Pe.unlock==="unlocked")try{await Pe.ensureTrack(N);const Q=Pe.getDuration(N.id),ie=Pe.getChannelCount(N.id);E(N.id,{status:"ready",duration:Q??void 0,channels:ie??void 0})}catch{E(N.id,{status:"decode-error",errorMessage:"样例合成失败"})}d(N.id)}},[G,B]),J=fe.useCallback(async(b,L)=>{const N=[...b];if(N.length!==0&&!(Pe.unlock!=="unlocked"&&(await B(),Pe.unlock!=="unlocked")))for(let Q=0;Q<N.length;Q++){const ie=N[Q],pe=uo("blob");let je;const ae=Q;if(!G(Ee=>{const me=Ee.tracks.length,ke=L??Vp(Ee.buses,me);if(!Ee.buses.some(rt=>rt.id===ke))throw new Lt("dangling","目标总线不存在");const Fe={id:uo("trk"),name:ie.name,sourceType:"file",blobKey:pe,originalFileName:ie.name,busId:ke,loop:!1,muted:!1,solo:!1,gain:.9,channel:0,color:kl[(me+ae)%kl.length],position:{x:Math.cos((me+ae)*2*Math.PI/Math.max(N.length,1))*2.5,y:0,z:Math.sin((me+ae)*2*Math.PI/Math.max(N.length,1))*2.5},status:"pending"};Ee.tracks.push(Fe),je=Fe})||!je)continue;const Te=je;try{await lS(pe,ie),E(Te.id,{status:"loading"})}catch{G(Ee=>{Ee.tracks=Ee.tracks.filter(me=>me.id!==Te.id)}),D("音频写入本地 IndexedDB 失败（浏览器存储可能已满）");continue}Pe.setFileBlob(Te.id,ie);try{if(!A.current.tracks.some(ke=>ke.id===Te.id))continue;if(await Pe.ensureTrack(Te),!A.current.tracks.some(ke=>ke.id===Te.id)){Pe.removeTrack(Te.id);continue}const Ee=Pe.getDuration(Te.id),me=Pe.getChannelCount(Te.id);E(Te.id,{status:"ready",duration:Ee??void 0,channels:me??void 0})}catch(Ee){if(!A.current.tracks.some(me=>me.id===Te.id))continue;Ee instanceof hr?E(Te.id,{status:"decode-error",errorMessage:Ee.message}):E(Te.id,{status:"decode-error",errorMessage:Ee instanceof Error?Ee.message:String(Ee)})}}},[G,B]),X=fe.useCallback(async b=>{const L=A.current.tracks.find(N=>N.id===b);if(Pe.removeTrack(b),L!=null&&L.blobKey)try{await cS(L.blobKey)}catch{}a(N=>{const Q=new Set(N);return Q.delete(b),Q}),G(N=>{N.tracks=N.tracks.filter(Q=>Q.id!==b)}),d(N=>N===b?null:N)},[G]),te=fe.useCallback((b,L)=>{const N=A.current.tracks.find(Q=>Q.id===b);if(E(b,L),N&&L.channel!==void 0&&L.channel!==N.channel&&Pe.unlock==="unlocked"){const Q={...N,...L};Pe.rebuildVoiceGraph(Q).catch(ie=>{ie instanceof hr&&E(b,{status:"decode-error",errorMessage:ie.message})})}},[]),U=fe.useCallback((b,L)=>{e(N=>({...N,tracks:N.tracks.map(Q=>Q.id===b?{...Q,position:{...L}}:Q)}))},[]),ee=fe.useCallback((b,L)=>{G(N=>{const Q=N.tracks.find(ie=>ie.id===b);if(!Q)throw new Lt("dangling","声轨不存在");if(!N.buses.some(ie=>ie.id===L))throw new Lt("dangling","目标总线不存在");Q.busId=L})},[G]),ne=fe.useCallback((b=null)=>{G(L=>{if(b!==null&&!L.buses.some(N=>N.id===b))throw new Lt("dangling","父总线不存在");L.buses.push(Hy(uo("bus"),L.buses.length,b))})},[G]),le=fe.useCallback((b,L)=>{G(N=>{const Q=N.buses.find(ie=>ie.id===b);if(!Q)throw new Lt("dangling","总线不存在");if(L.parentId!==void 0){if(L.parentId===b)throw new Lt("cycle","总线不能连接到自身");if(L.parentId!==null){if(!N.buses.some(ie=>ie.id===L.parentId))throw new Lt("dangling","父总线不存在");if(S_(N.buses,b).has(L.parentId))throw new Lt("cycle","不能把总线移动到自己的子总线之下")}}Object.assign(Q,L)})},[G]),Re=fe.useCallback(b=>{try{Gp(A.current,b),G(L=>{Gp(L,b),L.buses=L.buses.filter(N=>N.id!==b)})}catch(L){C(L)}},[G,C]),Oe=fe.useCallback(b=>{e(L=>"position"in b?{...L,listener:{...L.listener,position:{...L.listener.position,...b.position}}}:{...L,listener:{...L.listener,...b}})},[]),$=fe.useCallback(b=>{e(L=>({...L,spatial:{...L.spatial,...b}}))},[]),se=fe.useCallback(b=>{G(L=>{L.masterGain=b})},[G]),K=fe.useCallback(b=>{G(L=>{L.masterMuted=b})},[G]),Z=fe.useCallback(async b=>{Pe.unlock!=="unlocked"&&await B();const L=A.current.tracks.find(N=>N.id===b);if(!(!L||L.status==="decode-error"))try{await Pe.playTrack(L),a(N=>new Set(N).add(b))}catch(N){N instanceof hr?E(b,{status:"decode-error",errorMessage:N.message}):C(N)}},[C,B]),de=fe.useCallback(b=>{const L=A.current.tracks.find(N=>N.id===b);L&&(Pe.pauseTrack(L),a(N=>{const Q=new Set(N);return Q.delete(b),Q}))},[]),ue=fe.useCallback(b=>{const L=A.current.tracks.find(N=>N.id===b);L&&(Pe.stopTrack(L),a(N=>{const Q=new Set(N);return Q.delete(b),Q}))},[]),ge=fe.useCallback(async(b,L)=>{const N=A.current.tracks.find(ie=>ie.id===b);if(!N)return;const Q=Pe.isPlaying(b);await Pe.seekTrack(N,L,Q),a(ie=>{const pe=new Set(ie);return Q?pe.add(b):pe.delete(b),pe})},[]),Le=fe.useCallback(async b=>{Pe.isPlaying(b)?de(b):await Z(b)},[de,Z]),We=fe.useCallback(async()=>{Pe.unlock!=="unlocked"&&await B();for(const b of A.current.tracks)if(b.status!=="decode-error")try{await Pe.playTrack(b),a(L=>new Set(L).add(b.id))}catch(L){L instanceof hr&&E(b.id,{status:"decode-error",errorMessage:L.message})}},[B]),I=fe.useCallback(()=>{for(const b of A.current.tracks)Pe.stopTrack(b);a(new Set)},[]),Ot=fe.useCallback(b=>{Pe.clearClipLatch(b),c(L=>{if(!b)return Object.fromEntries(Object.entries(L).map(([Q,ie])=>[Q,{...ie,clipL:!1,clipR:!1}]));const N=L[b];return N?{...L,[b]:{...N,clipL:!1,clipR:!1}}:L})},[]),Ve=fe.useCallback(async()=>{p(await Yp())},[]),Ye=fe.useCallback(async b=>{const L=g??uo("proj"),N={id:L,name:b.trim()||`工程 ${new Date().toLocaleString()}`,savedAt:Date.now(),doc:{...A.current,savedAt:Date.now()}};await uS(N),y(L),u(N.name),await Ve()},[g,Ve]),De=fe.useCallback(async b=>{if(Pe.unlock==="unlocked"){Pe.syncRouting({buses:b.buses,tracks:b.tracks,masterGain:b.masterGain,masterMuted:b.masterMuted});for(const L of b.tracks){if(L.sourceType==="file"&&L.blobKey)try{const N=await Xp(L.blobKey);N?Pe.setFileBlob(L.id,N):E(L.id,{status:"decode-error",errorMessage:"本地音频 Blob 缺失"})}catch{E(L.id,{status:"decode-error",errorMessage:"读取本地音频失败"})}try{await Pe.ensureTrack(L),E(L.id,{status:"ready",duration:Pe.getDuration(L.id)??L.duration,channels:Pe.getChannelCount(L.id)??L.channels,errorMessage:void 0})}catch(N){N instanceof hr&&E(L.id,{status:"decode-error",errorMessage:N.message})}}}},[]),it=fe.useCallback(async b=>{const L=await dS(b);if(!L)return;for(const Q of A.current.tracks)Pe.removeTrack(Q.id);a(new Set);const N={...L.doc,routeVersion:L.doc.routeVersion+1,tracks:L.doc.tracks.map(Q=>({...Q,status:"pending",errorMessage:void 0}))};e(N),y(L.id),u(L.name),d(null),await De(N)},[De]),Ne=fe.useCallback(async b=>{await fS(b),g===b&&(y(null),u(null)),await Ve()},[g,Ve]),R=fe.useCallback(async()=>{for(const b of A.current.tracks)Pe.removeTrack(b.id);a(new Set),e(Kp()),y(null),u(null),d(null)},[]),S=fe.useCallback(()=>D(null),[]);return fe.useMemo(()=>({doc:t,unlock:n,unlockError:r,playingIds:o,levels:l,selectedId:f,projects:h,loadedProjectId:g,loadedProjectName:m,saveState:v,globalError:M,selectTrack:z,unlockAudio:B,addSample:Y,addFiles:J,removeTrack:X,updateTrack:te,moveTrack:U,moveTrackToBus:ee,addBus:ne,updateBus:le,deleteBus:Re,setListener:Oe,setSpatial:$,setMasterGain:se,setMasterMuted:K,play:Z,pause:de,stop:ue,seek:ge,togglePlay:Le,playAll:We,stopAll:I,clearClips:Ot,saveProjectAs:Ye,loadProject:it,deleteProject:Ne,newProject:R,dismissGlobalError:S}),[t,n,r,o,l,f,h,g,m,v,M,z,B,Y,J,X,te,U,ee,ne,le,Re,Oe,$,se,K,Z,de,ue,ge,Le,We,I,Ot,Ye,it,Ne,R,S])}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lh="169",vS=0,Zp=1,_S=2,M_=1,E_=2,oi=3,Qi=0,cn=1,ci=2,$i=0,ys=1,Qp=2,Jp=3,em=4,xS=5,mr=100,yS=101,SS=102,MS=103,ES=104,wS=200,TS=201,AS=202,CS=203,Mf=204,Ef=205,RS=206,bS=207,PS=208,LS=209,DS=210,NS=211,IS=212,US=213,FS=214,wf=0,Tf=1,Af=2,Ls=3,Cf=4,Rf=5,bf=6,Pf=7,w_=0,kS=1,OS=2,qi=0,BS=1,zS=2,HS=3,VS=4,GS=5,WS=6,jS=7,T_=300,Ds=301,Ns=302,Lf=303,Df=304,uc=306,Nf=1e3,yr=1001,If=1002,Cn=1003,XS=1004,xa=1005,Bn=1006,Xc=1007,Sr=1008,Si=1009,A_=1010,C_=1011,Vo=1012,ch=1013,br=1014,hi=1015,Ko=1016,uh=1017,fh=1018,Is=1020,R_=35902,b_=1021,P_=1022,Hn=1023,L_=1024,D_=1025,Ss=1026,Us=1027,N_=1028,dh=1029,I_=1030,hh=1031,ph=1033,il=33776,rl=33777,sl=33778,ol=33779,Uf=35840,Ff=35841,kf=35842,Of=35843,Bf=36196,zf=37492,Hf=37496,Vf=37808,Gf=37809,Wf=37810,jf=37811,Xf=37812,Yf=37813,$f=37814,qf=37815,Kf=37816,Zf=37817,Qf=37818,Jf=37819,ed=37820,td=37821,al=36492,nd=36494,id=36495,U_=36283,rd=36284,sd=36285,od=36286,YS=3200,$S=3201,F_=0,qS=1,ki="",$n="srgb",ir="srgb-linear",mh="display-p3",fc="display-p3-linear",Ol="linear",ct="srgb",Bl="rec709",zl="p3",Fr=7680,tm=519,KS=512,ZS=513,QS=514,k_=515,JS=516,eM=517,tM=518,nM=519,ad=35044,nm="300 es",pi=2e3,Hl=2001;class zs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let im=1234567;const Mo=Math.PI/180,Go=180/Math.PI;function gi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[t&255]+Ht[t>>8&255]+Ht[t>>16&255]+Ht[t>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[n&63|128]+Ht[n>>8&255]+"-"+Ht[n>>16&255]+Ht[n>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function $t(t,e,n){return Math.max(e,Math.min(n,t))}function gh(t,e){return(t%e+e)%e}function iM(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function rM(t,e,n){return t!==e?(n-t)/(e-t):0}function Eo(t,e,n){return(1-n)*t+n*e}function sM(t,e,n,i){return Eo(t,e,1-Math.exp(-n*i))}function oM(t,e=1){return e-Math.abs(gh(t,e*2)-e)}function aM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function lM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function cM(t,e){return t+Math.floor(Math.random()*(e-t+1))}function uM(t,e){return t+Math.random()*(e-t)}function fM(t){return t*(.5-Math.random())}function dM(t){t!==void 0&&(im=t);let e=im+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hM(t){return t*Mo}function pM(t){return t*Go}function mM(t){return(t&t-1)===0&&t!==0}function gM(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function vM(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function _M(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),f=o((e+i)/2),d=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":t.set(a*f,l*d,l*h,a*c);break;case"YZY":t.set(l*h,a*f,l*d,a*c);break;case"ZXZ":t.set(l*d,l*h,a*f,a*c);break;case"XZX":t.set(a*f,l*g,l*p,a*c);break;case"YXY":t.set(l*p,a*f,l*g,a*c);break;case"ZYZ":t.set(l*g,l*p,a*f,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function zn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function tt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const rm={DEG2RAD:Mo,RAD2DEG:Go,generateUUID:gi,clamp:$t,euclideanModulo:gh,mapLinear:iM,inverseLerp:rM,lerp:Eo,damp:sM,pingpong:oM,smoothstep:aM,smootherstep:lM,randInt:cM,randFloat:uM,randFloatSpread:fM,seededRandom:dM,degToRad:hM,radToDeg:pM,isPowerOfTwo:mM,ceilPowerOfTwo:gM,floorPowerOfTwo:vM,setQuaternionFromProperEuler:_M,normalize:tt,denormalize:zn};class Ge{constructor(e=0,n=0){Ge.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,n,i,r,s,o,a,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],d=i[7],h=i[2],p=i[5],g=i[8],y=r[0],m=r[3],u=r[6],v=r[1],_=r[4],M=r[7],D=r[2],A=r[5],T=r[8];return s[0]=o*y+a*v+l*D,s[3]=o*m+a*_+l*A,s[6]=o*u+a*M+l*T,s[1]=c*y+f*v+d*D,s[4]=c*m+f*_+d*A,s[7]=c*u+f*M+d*T,s[2]=h*y+p*v+g*D,s[5]=h*m+p*_+g*A,s[8]=h*u+p*M+g*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=f*o-a*c,h=a*l-f*s,p=c*s-o*l,g=n*d+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=d*y,e[1]=(r*c-f*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(f*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Yc.makeScale(e,n)),this}rotate(e){return this.premultiply(Yc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Yc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yc=new ze;function O_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Vl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function xM(){const t=Vl("canvas");return t.style.display="block",t}const sm={};function ll(t){t in sm||(sm[t]=!0,console.warn(t))}function yM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function SM(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function MM(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const om=new ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),am=new ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zs={[ir]:{transfer:Ol,primaries:Bl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[$n]:{transfer:ct,primaries:Bl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[fc]:{transfer:Ol,primaries:zl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(am),fromReference:t=>t.applyMatrix3(om)},[mh]:{transfer:ct,primaries:zl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(am),fromReference:t=>t.applyMatrix3(om).convertLinearToSRGB()}},EM=new Set([ir,fc]),Je={enabled:!0,_workingColorSpace:ir,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!EM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Zs[e].toReference,r=Zs[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Zs[t].primaries},getTransfer:function(t){return t===ki?Ol:Zs[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Zs[e].luminanceCoefficients)}};function Ms(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function $c(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let kr;class wM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{kr===void 0&&(kr=Vl("canvas")),kr.width=e.width,kr.height=e.height;const i=kr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=kr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Vl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ms(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ms(n[i]/255)*255):n[i]=Ms(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let TM=0;class B_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=gi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(qc(r[o].image)):s.push(qc(r[o]))}else s=qc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function qc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?wM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let AM=0;class Kt extends zs{constructor(e=Kt.DEFAULT_IMAGE,n=Kt.DEFAULT_MAPPING,i=yr,r=yr,s=Bn,o=Sr,a=Hn,l=Si,c=Kt.DEFAULT_ANISOTROPY,f=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:AM++}),this.uuid=gi(),this.name="",this.source=new B_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==T_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nf:e.x=e.x-Math.floor(e.x);break;case yr:e.x=e.x<0?0:1;break;case If:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nf:e.y=e.y-Math.floor(e.y);break;case yr:e.y=e.y<0?0:1;break;case If:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=T_;Kt.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,n=0,i=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],d=l[8],h=l[1],p=l[5],g=l[9],y=l[2],m=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,M=(p+1)/2,D=(u+1)/2,A=(f+h)/4,T=(d+y)/4,C=(g+m)/4;return _>M&&_>D?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=A/i,s=T/i):M>D?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=A/r,s=C/r):D<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),i=T/s,r=C/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(h-f)*(h-f));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-y)/v,this.z=(h-f)/v,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class CM extends zs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new _t(0,0,e,n),this.scissorTest=!1,this.viewport=new _t(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Kt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new B_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pr extends CM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class z_ extends Kt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class RM extends Kt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=g,e[n+3]=y;return}if(d!==y||l!==h||c!==p||f!==g){let m=1-a;const u=l*h+c*p+f*g+d*y,v=u>=0?1:-1,_=1-u*u;if(_>Number.EPSILON){const D=Math.sqrt(_),A=Math.atan2(D,u*v);m=Math.sin(m*A)/D,a=Math.sin(a*A)/D}const M=a*v;if(l=l*m+h*M,c=c*m+p*M,f=f*m+g*M,d=d*m+y*M,m===1-a){const D=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=D,c*=D,f*=D,d*=D}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],d=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+f*d+l*p-c*h,e[n+1]=l*g+f*h+c*d-a*p,e[n+2]=c*g+f*p+a*h-l*d,e[n+3]=f*g-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*f*d+c*p*g,this._y=c*p*d-h*f*g,this._z=c*f*g+h*p*d,this._w=c*f*d-h*p*g;break;case"YXZ":this._x=h*f*d+c*p*g,this._y=c*p*d-h*f*g,this._z=c*f*g-h*p*d,this._w=c*f*d+h*p*g;break;case"ZXY":this._x=h*f*d-c*p*g,this._y=c*p*d+h*f*g,this._z=c*f*g+h*p*d,this._w=c*f*d-h*p*g;break;case"ZYX":this._x=h*f*d-c*p*g,this._y=c*p*d+h*f*g,this._z=c*f*g-h*p*d,this._w=c*f*d+h*p*g;break;case"YZX":this._x=h*f*d+c*p*g,this._y=c*p*d+h*f*g,this._z=c*f*g-h*p*d,this._w=c*f*d-h*p*g;break;case"XZY":this._x=h*f*d-c*p*g,this._y=c*p*d-h*f*g,this._z=c*f*g+h*p*d,this._w=c*f*d+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],d=n[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),d=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,n=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(lm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(lm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*f,this.y=i+l*f+a*c-s*d,this.z=r+l*d+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Kc.copy(this).projectOnVector(e),this.sub(Kc)}reflect(e){return this.sub(Kc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kc=new H,lm=new Zo;class Qo{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Nn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Nn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Nn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Nn):Nn.fromBufferAttribute(s,o),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ya.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ya.copy(i.boundingBox)),ya.applyMatrix4(e.matrixWorld),this.union(ya)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qs),Sa.subVectors(this.max,Qs),Or.subVectors(e.a,Qs),Br.subVectors(e.b,Qs),zr.subVectors(e.c,Qs),Ai.subVectors(Br,Or),Ci.subVectors(zr,Br),sr.subVectors(Or,zr);let n=[0,-Ai.z,Ai.y,0,-Ci.z,Ci.y,0,-sr.z,sr.y,Ai.z,0,-Ai.x,Ci.z,0,-Ci.x,sr.z,0,-sr.x,-Ai.y,Ai.x,0,-Ci.y,Ci.x,0,-sr.y,sr.x,0];return!Zc(n,Or,Br,zr,Sa)||(n=[1,0,0,0,1,0,0,0,1],!Zc(n,Or,Br,zr,Sa))?!1:(Ma.crossVectors(Ai,Ci),n=[Ma.x,Ma.y,Ma.z],Zc(n,Or,Br,zr,Sa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ti=[new H,new H,new H,new H,new H,new H,new H,new H],Nn=new H,ya=new Qo,Or=new H,Br=new H,zr=new H,Ai=new H,Ci=new H,sr=new H,Qs=new H,Sa=new H,Ma=new H,or=new H;function Zc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){or.fromArray(t,s);const a=r.x*Math.abs(or.x)+r.y*Math.abs(or.y)+r.z*Math.abs(or.z),l=e.dot(or),c=n.dot(or),f=i.dot(or);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const bM=new Qo,Js=new H,Qc=new H;class dc{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):bM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Js.subVectors(e,this.center);const n=Js.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Js,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Js.copy(e.center).add(Qc)),this.expandByPoint(Js.copy(e.center).sub(Qc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new H,Jc=new H,Ea=new H,Ri=new H,eu=new H,wa=new H,tu=new H;class vh{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ni.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,n),ni.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Jc.copy(e).add(n).multiplyScalar(.5),Ea.copy(n).sub(e).normalize(),Ri.copy(this.origin).sub(Jc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ea),a=Ri.dot(this.direction),l=-Ri.dot(Ea),c=Ri.lengthSq(),f=Math.abs(1-o*o);let d,h,p,g;if(f>0)if(d=o*l-a,h=o*a-l,g=s*f,d>=0)if(h>=-g)if(h<=g){const y=1/f;d*=y,h*=y,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Jc).addScaledVector(Ea,h),p}intersectSphere(e,n){ni.subVectors(e.center,this.origin);const i=ni.dot(this.direction),r=ni.dot(ni)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,n,i,r,s){eu.subVectors(n,e),wa.subVectors(i,e),tu.crossVectors(eu,wa);let o=this.direction.dot(tu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ri.subVectors(this.origin,e);const l=a*this.direction.dot(wa.crossVectors(Ri,wa));if(l<0)return null;const c=a*this.direction.dot(eu.cross(Ri));if(c<0||l+c>o)return null;const f=-a*Ri.dot(tu);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,n,i,r,s,o,a,l,c,f,d,h,p,g,y,m){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,d,h,p,g,y,m)}set(e,n,i,r,s,o,a,l,c,f,d,h,p,g,y,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=d,u[14]=h,u[3]=p,u[7]=g,u[11]=y,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Hr.setFromMatrixColumn(e,0).length(),s=1/Hr.setFromMatrixColumn(e,1).length(),o=1/Hr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*f,p=o*d,g=a*f,y=a*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=p+g*c,n[5]=h-y*c,n[9]=-a*l,n[2]=y-h*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,p=l*d,g=c*f,y=c*d;n[0]=h+y*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*f,n[9]=-a,n[2]=p*a-g,n[6]=y+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,p=l*d,g=c*f,y=c*d;n[0]=h-y*a,n[4]=-o*d,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*f,n[9]=y-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,p=o*d,g=a*f,y=a*d;n[0]=l*f,n[4]=g*c-p,n[8]=h*c+y,n[1]=l*d,n[5]=y*c+h,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,y=a*c;n[0]=l*f,n[4]=y-h*d,n[8]=g*d+p,n[1]=d,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=p*d+g,n[10]=h-y*d}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,y=a*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=h*d+y,n[5]=o*f,n[9]=p*d-g,n[2]=g*d-p,n[6]=a*f,n[10]=y*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(PM,e,LM)}lookAt(e,n,i){const r=this.elements;return dn.subVectors(e,n),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),bi.crossVectors(i,dn),bi.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),bi.crossVectors(i,dn)),bi.normalize(),Ta.crossVectors(dn,bi),r[0]=bi.x,r[4]=Ta.x,r[8]=dn.x,r[1]=bi.y,r[5]=Ta.y,r[9]=dn.y,r[2]=bi.z,r[6]=Ta.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],d=i[5],h=i[9],p=i[13],g=i[2],y=i[6],m=i[10],u=i[14],v=i[3],_=i[7],M=i[11],D=i[15],A=r[0],T=r[4],C=r[8],G=r[12],x=r[1],E=r[5],z=r[9],B=r[13],Y=r[2],J=r[6],X=r[10],te=r[14],U=r[3],ee=r[7],ne=r[11],le=r[15];return s[0]=o*A+a*x+l*Y+c*U,s[4]=o*T+a*E+l*J+c*ee,s[8]=o*C+a*z+l*X+c*ne,s[12]=o*G+a*B+l*te+c*le,s[1]=f*A+d*x+h*Y+p*U,s[5]=f*T+d*E+h*J+p*ee,s[9]=f*C+d*z+h*X+p*ne,s[13]=f*G+d*B+h*te+p*le,s[2]=g*A+y*x+m*Y+u*U,s[6]=g*T+y*E+m*J+u*ee,s[10]=g*C+y*z+m*X+u*ne,s[14]=g*G+y*B+m*te+u*le,s[3]=v*A+_*x+M*Y+D*U,s[7]=v*T+_*E+M*J+D*ee,s[11]=v*C+_*z+M*X+D*ne,s[15]=v*G+_*B+M*te+D*le,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],d=e[6],h=e[10],p=e[14],g=e[3],y=e[7],m=e[11],u=e[15];return g*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*p-i*l*p)+y*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*f-s*l*f)+m*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*f-i*c*f)+u*(-r*a*f-n*l*d+n*a*h+r*o*d-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=e[9],h=e[10],p=e[11],g=e[12],y=e[13],m=e[14],u=e[15],v=d*m*c-y*h*c+y*l*p-a*m*p-d*l*u+a*h*u,_=g*h*c-f*m*c-g*l*p+o*m*p+f*l*u-o*h*u,M=f*y*c-g*d*c+g*a*p-o*y*p-f*a*u+o*d*u,D=g*d*l-f*y*l-g*a*h+o*y*h+f*a*m-o*d*m,A=n*v+i*_+r*M+s*D;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=v*T,e[1]=(y*h*s-d*m*s-y*r*p+i*m*p+d*r*u-i*h*u)*T,e[2]=(a*m*s-y*l*s+y*r*c-i*m*c-a*r*u+i*l*u)*T,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*p-i*l*p)*T,e[4]=_*T,e[5]=(f*m*s-g*h*s+g*r*p-n*m*p-f*r*u+n*h*u)*T,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*u-n*l*u)*T,e[7]=(o*h*s-f*l*s+f*r*c-n*h*c-o*r*p+n*l*p)*T,e[8]=M*T,e[9]=(g*d*s-f*y*s-g*i*p+n*y*p+f*i*u-n*d*u)*T,e[10]=(o*y*s-g*a*s+g*i*c-n*y*c-o*i*u+n*a*u)*T,e[11]=(f*a*s-o*d*s-f*i*c+n*d*c+o*i*p-n*a*p)*T,e[12]=D*T,e[13]=(f*y*r-g*d*r+g*i*h-n*y*h-f*i*m+n*d*m)*T,e[14]=(g*a*r-o*y*r-g*i*l+n*y*l+o*i*m-n*a*m)*T,e[15]=(o*d*r-f*a*r+f*i*l-n*d*l-o*i*h+n*a*h)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,d=a+a,h=s*c,p=s*f,g=s*d,y=o*f,m=o*d,u=a*d,v=l*c,_=l*f,M=l*d,D=i.x,A=i.y,T=i.z;return r[0]=(1-(y+u))*D,r[1]=(p+M)*D,r[2]=(g-_)*D,r[3]=0,r[4]=(p-M)*A,r[5]=(1-(h+u))*A,r[6]=(m+v)*A,r[7]=0,r[8]=(g+_)*T,r[9]=(m-v)*T,r[10]=(1-(h+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Hr.set(r[0],r[1],r[2]).length();const o=Hr.set(r[4],r[5],r[6]).length(),a=Hr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],In.copy(this);const c=1/s,f=1/o,d=1/a;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=f,In.elements[5]*=f,In.elements[6]*=f,In.elements[8]*=d,In.elements[9]*=d,In.elements[10]*=d,n.setFromRotationMatrix(In),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=pi){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let p,g;if(a===pi)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Hl)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=pi){const l=this.elements,c=1/(n-e),f=1/(i-r),d=1/(o-s),h=(n+e)*c,p=(i+r)*f;let g,y;if(a===pi)g=(o+s)*d,y=-2*d;else if(a===Hl)g=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Hr=new H,In=new ft,PM=new H(0,0,0),LM=new H(1,1,1),bi=new H,Ta=new H,dn=new H,cm=new ft,um=new Zo;class Jn{constructor(e=0,n=0,i=0,r=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin($t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return cm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return um.setFromEuler(this),this.setFromQuaternion(um,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";class _h{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let DM=0;const fm=new H,Vr=new Zo,ii=new ft,Aa=new H,eo=new H,NM=new H,IM=new Zo,dm=new H(1,0,0),hm=new H(0,1,0),pm=new H(0,0,1),mm={type:"added"},UM={type:"removed"},Gr={type:"childadded",child:null},nu={type:"childremoved",child:null};class Ct extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:DM++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new H,n=new Jn,i=new Zo,r=new H(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new ze}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _h,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Vr.setFromAxisAngle(e,n),this.quaternion.multiply(Vr),this}rotateOnWorldAxis(e,n){return Vr.setFromAxisAngle(e,n),this.quaternion.premultiply(Vr),this}rotateX(e){return this.rotateOnAxis(dm,e)}rotateY(e){return this.rotateOnAxis(hm,e)}rotateZ(e){return this.rotateOnAxis(pm,e)}translateOnAxis(e,n){return fm.copy(e).applyQuaternion(this.quaternion),this.position.add(fm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(dm,e)}translateY(e){return this.translateOnAxis(hm,e)}translateZ(e){return this.translateOnAxis(pm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Aa.copy(e):Aa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(eo,Aa,this.up):ii.lookAt(Aa,eo,this.up),this.quaternion.setFromRotationMatrix(ii),r&&(ii.extractRotation(r.matrixWorld),Vr.setFromRotationMatrix(ii),this.quaternion.premultiply(Vr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(mm),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(UM),nu.child=e,this.dispatchEvent(nu),nu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(mm),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,e,NM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,IM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ct.DEFAULT_UP=new H(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new H,ri=new H,iu=new H,si=new H,Wr=new H,jr=new H,gm=new H,ru=new H,su=new H,ou=new H,au=new _t,lu=new _t,cu=new _t;class Tn{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Un.subVectors(e,n),r.cross(Un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Un.subVectors(r,n),ri.subVectors(i,n),iu.subVectors(e,n);const o=Un.dot(Un),a=Un.dot(ri),l=Un.dot(iu),c=ri.dot(ri),f=ri.dot(iu),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-a*f)*h,g=(o*f-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,si.x),l.addScaledVector(o,si.y),l.addScaledVector(a,si.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return au.setScalar(0),lu.setScalar(0),cu.setScalar(0),au.fromBufferAttribute(e,n),lu.fromBufferAttribute(e,i),cu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(au,s.x),o.addScaledVector(lu,s.y),o.addScaledVector(cu,s.z),o}static isFrontFacing(e,n,i,r){return Un.subVectors(i,n),ri.subVectors(e,n),Un.cross(ri).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Un.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Tn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Tn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Wr.subVectors(r,i),jr.subVectors(s,i),ru.subVectors(e,i);const l=Wr.dot(ru),c=jr.dot(ru);if(l<=0&&c<=0)return n.copy(i);su.subVectors(e,r);const f=Wr.dot(su),d=jr.dot(su);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Wr,o);ou.subVectors(e,s);const p=Wr.dot(ou),g=jr.dot(ou);if(g>=0&&p<=g)return n.copy(s);const y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(jr,a);const m=f*g-p*d;if(m<=0&&d-f>=0&&p-g>=0)return gm.subVectors(s,r),a=(d-f)/(d-f+(p-g)),n.copy(r).addScaledVector(gm,a);const u=1/(m+y+h);return o=y*u,a=h*u,n.copy(i).addScaledVector(Wr,o).addScaledVector(jr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const H_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},Ca={h:0,s:0,l:0};function uu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class He{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=$n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=gh(e,1),n=$t(n,0,1),i=$t(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=uu(o,s,e+1/3),this.g=uu(o,s,e),this.b=uu(o,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,n=$n){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=$n){const i=H_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}copyLinearToSRGB(e){return this.r=$c(e.r),this.g=$c(e.g),this.b=$c(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$n){return Je.fromWorkingColorSpace(Vt.copy(this),e),Math.round($t(Vt.r*255,0,255))*65536+Math.round($t(Vt.g*255,0,255))*256+Math.round($t(Vt.b*255,0,255))}getHexString(e=$n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.fromWorkingColorSpace(Vt.copy(this),n);const i=Vt.r,r=Vt.g,s=Vt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=Je.workingColorSpace){return Je.fromWorkingColorSpace(Vt.copy(this),n),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=$n){Je.fromWorkingColorSpace(Vt.copy(this),e);const n=Vt.r,i=Vt.g,r=Vt.b;return e!==$n?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+n,Pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Pi),e.getHSL(Ca);const i=Eo(Pi.h,Ca.h,n),r=Eo(Pi.s,Ca.s,n),s=Eo(Pi.l,Ca.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new He;He.NAMES=H_;let FM=0;class Nr extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:FM++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=ys,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mf,this.blendDst=Ef,this.blendEquation=mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fr,this.stencilZFail=Fr,this.stencilZPass=Fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(i.blending=this.blending),this.side!==Qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Mf&&(i.blendSrc=this.blendSrc),this.blendDst!==Ef&&(i.blendDst=this.blendDst),this.blendEquation!==mr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class xh extends Nr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=w_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new H,Ra=new Ge;class Wn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=ad,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ra.fromBufferAttribute(this,n),Ra.applyMatrix3(e),this.setXY(n,Ra.x,Ra.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix3(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix4(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyNormalMatrix(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.transformDirection(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=zn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=tt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=zn(n,this.array)),n}setX(e,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=zn(n,this.array)),n}setY(e,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=zn(n,this.array)),n}setZ(e,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=zn(n,this.array)),n}setW(e,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=tt(n,this.array),i=tt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=tt(n,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=tt(n,this.array),i=tt(i,this.array),r=tt(r,this.array),s=tt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ad&&(e.usage=this.usage),e}}class V_ extends Wn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class G_ extends Wn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class xt extends Wn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let kM=0;const Sn=new ft,fu=new Ct,Xr=new H,hn=new Qo,to=new Qo,Pt=new H;class Jt extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kM++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(O_(e)?G_:V_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,n,i){return Sn.makeTranslation(e,n,i),this.applyMatrix4(Sn),this}scale(e,n,i){return Sn.makeScale(e,n,i),this.applyMatrix4(Sn),this}lookAt(e){return fu.lookAt(e),fu.updateMatrix(),this.applyMatrix4(fu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new xt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];to.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(hn.min,to.min),hn.expandByPoint(Pt),Pt.addVectors(hn.max,to.max),hn.expandByPoint(Pt)):(hn.expandByPoint(to.min),hn.expandByPoint(to.max))}hn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Pt.fromBufferAttribute(a,c),l&&(Xr.fromBufferAttribute(e,c),Pt.add(Xr)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<i.count;C++)a[C]=new H,l[C]=new H;const c=new H,f=new H,d=new H,h=new Ge,p=new Ge,g=new Ge,y=new H,m=new H;function u(C,G,x){c.fromBufferAttribute(i,C),f.fromBufferAttribute(i,G),d.fromBufferAttribute(i,x),h.fromBufferAttribute(s,C),p.fromBufferAttribute(s,G),g.fromBufferAttribute(s,x),f.sub(c),d.sub(c),p.sub(h),g.sub(h);const E=1/(p.x*g.y-g.x*p.y);isFinite(E)&&(y.copy(f).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(E),m.copy(d).multiplyScalar(p.x).addScaledVector(f,-g.x).multiplyScalar(E),a[C].add(y),a[G].add(y),a[x].add(y),l[C].add(m),l[G].add(m),l[x].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let C=0,G=v.length;C<G;++C){const x=v[C],E=x.start,z=x.count;for(let B=E,Y=E+z;B<Y;B+=3)u(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const _=new H,M=new H,D=new H,A=new H;function T(C){D.fromBufferAttribute(r,C),A.copy(D);const G=a[C];_.copy(G),_.sub(D.multiplyScalar(D.dot(G))).normalize(),M.crossVectors(A,G);const E=M.dot(l[C])<0?-1:1;o.setXYZW(C,_.x,_.y,_.z,E)}for(let C=0,G=v.length;C<G;++C){const x=v[C],E=x.start,z=x.count;for(let B=E,Y=E+z;B<Y;B+=3)T(e.getX(B+0)),T(e.getX(B+1)),T(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Wn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new H,s=new H,o=new H,a=new H,l=new H,c=new H,f=new H,d=new H;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(f),l.add(f),c.add(f),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Pt.fromBufferAttribute(e,n),Pt.normalize(),e.setXYZ(n,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,d=a.normalized,h=new c.constructor(l.length*f);let p=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*f;for(let u=0;u<f;u++)h[g++]=c[p++]}return new Wn(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Jt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,d=c.length;f<d;f++){const h=c[f],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let h=0,p=d.length;h<p;h++)f.push(d[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vm=new ft,ar=new vh,ba=new dc,_m=new H,Pa=new H,La=new H,Da=new H,du=new H,Na=new H,xm=new H,Ia=new H;class rn extends Ct{constructor(e=new Jt,n=new xh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Na.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],d=s[l];f!==0&&(du.fromBufferAttribute(d,e),o?Na.addScaledVector(du,f):Na.addScaledVector(du.sub(n),f))}n.add(Na)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ba.copy(i.boundingSphere),ba.applyMatrix4(s),ar.copy(e.ray).recast(e.near),!(ba.containsPoint(ar.origin)===!1&&(ar.intersectSphere(ba,_m)===null||ar.origin.distanceToSquared(_m)>(e.far-e.near)**2))&&(vm.copy(s).invert(),ar.copy(e.ray).applyMatrix4(vm),!(i.boundingBox!==null&&ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ar)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){const m=h[g],u=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=v,D=_;M<D;M+=3){const A=a.getX(M),T=a.getX(M+1),C=a.getX(M+2);r=Ua(this,u,e,i,c,f,d,A,T,C),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=g,u=y;m<u;m+=3){const v=a.getX(m),_=a.getX(m+1),M=a.getX(m+2);r=Ua(this,o,e,i,c,f,d,v,_,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){const m=h[g],u=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=v,D=_;M<D;M+=3){const A=M,T=M+1,C=M+2;r=Ua(this,u,e,i,c,f,d,A,T,C),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,u=y;m<u;m+=3){const v=m,_=m+1,M=m+2;r=Ua(this,o,e,i,c,f,d,v,_,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function OM(t,e,n,i,r,s,o,a){let l;if(e.side===cn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Qi,a),l===null)return null;Ia.copy(a),Ia.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ia);return c<n.near||c>n.far?null:{distance:c,point:Ia.clone(),object:t}}function Ua(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Pa),t.getVertexPosition(l,La),t.getVertexPosition(c,Da);const f=OM(t,e,n,i,Pa,La,Da,xm);if(f){const d=new H;Tn.getBarycoord(xm,Pa,La,Da,d),r&&(f.uv=Tn.getInterpolatedAttribute(r,a,l,c,d,new Ge)),s&&(f.uv1=Tn.getInterpolatedAttribute(s,a,l,c,d,new Ge)),o&&(f.normal=Tn.getInterpolatedAttribute(o,a,l,c,d,new H),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new H,materialIndex:0};Tn.getNormal(Pa,La,Da,h.normal),f.face=h,f.barycoord=d}return f}class Jo extends Jt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],d=[];let h=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(f,3)),this.setAttribute("uv",new xt(d,2));function g(y,m,u,v,_,M,D,A,T,C,G){const x=M/T,E=D/C,z=M/2,B=D/2,Y=A/2,J=T+1,X=C+1;let te=0,U=0;const ee=new H;for(let ne=0;ne<X;ne++){const le=ne*E-B;for(let Re=0;Re<J;Re++){const Oe=Re*x-z;ee[y]=Oe*v,ee[m]=le*_,ee[u]=Y,c.push(ee.x,ee.y,ee.z),ee[y]=0,ee[m]=0,ee[u]=A>0?1:-1,f.push(ee.x,ee.y,ee.z),d.push(Re/T),d.push(1-ne/C),te+=1}}for(let ne=0;ne<C;ne++)for(let le=0;le<T;le++){const Re=h+le+J*ne,Oe=h+le+J*(ne+1),$=h+(le+1)+J*(ne+1),se=h+(le+1)+J*ne;l.push(Re,Oe,se),l.push(Oe,$,se),U+=6}a.addGroup(p,U,G),p+=U,h+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Xt(t){const e={};for(let n=0;n<t.length;n++){const i=Fs(t[n]);for(const r in i)e[r]=i[r]}return e}function BM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function W_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const zM={clone:Fs,merge:Xt};var HM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,VM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends Nr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=HM,this.fragmentShader=VM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=BM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class j_ extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=pi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Li=new H,ym=new Ge,Sm=new Ge;class wn extends j_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Go*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Go*2*Math.atan(Math.tan(Mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-e/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Li.x,Li.y).multiplyScalar(-e/Li.z)}getViewSize(e,n){return this.getViewBounds(e,ym,Sm),n.subVectors(Sm,ym)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Mo*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Yr=-90,$r=1;class GM extends Ct{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new wn(Yr,$r,e,n);r.layers=this.layers,this.add(r);const s=new wn(Yr,$r,e,n);s.layers=this.layers,this.add(s);const o=new wn(Yr,$r,e,n);o.layers=this.layers,this.add(o);const a=new wn(Yr,$r,e,n);a.layers=this.layers,this.add(a);const l=new wn(Yr,$r,e,n);l.layers=this.layers,this.add(l);const c=new wn(Yr,$r,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===pi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Hl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class X_ extends Kt{constructor(e,n,i,r,s,o,a,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:Ds,super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class WM extends Pr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new X_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Bn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Jo(5,5,5),s=new Ji({name:"CubemapFromEquirect",uniforms:Fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:$i});s.uniforms.tEquirect.value=n;const o=new rn(r,s),a=n.minFilter;return n.minFilter===Sr&&(n.minFilter=Bn),new GM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const hu=new H,jM=new H,XM=new ze;class Ii{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=hu.subVectors(i,n).cross(jM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(hu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||XM.getNormalMatrix(e),r=this.coplanarPoint(hu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new dc,Fa=new H;class yh{constructor(e=new Ii,n=new Ii,i=new Ii,r=new Ii,s=new Ii,o=new Ii){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=pi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],f=r[5],d=r[6],h=r[7],p=r[8],g=r[9],y=r[10],m=r[11],u=r[12],v=r[13],_=r[14],M=r[15];if(i[0].setComponents(l-s,h-c,m-p,M-u).normalize(),i[1].setComponents(l+s,h+c,m+p,M+u).normalize(),i[2].setComponents(l+o,h+f,m+g,M+v).normalize(),i[3].setComponents(l-o,h-f,m-g,M-v).normalize(),i[4].setComponents(l-a,h-d,m-y,M-_).normalize(),n===pi)i[5].setComponents(l+a,h+d,m+y,M+_).normalize();else if(n===Hl)i[5].setComponents(a,d,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Fa.x=r.normal.x>0?e.max.x:e.min.x,Fa.y=r.normal.y>0?e.max.y:e.min.y,Fa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Y_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function YM(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,f),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const f=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,f);else{d.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<d.length;p++){const g=d[h],y=d[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++h,d[h]=y)}d.length=h+1;for(let p=0,g=d.length;p<g;p++){const y=d[p];t.bufferSubData(c,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class hc extends Jt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,d=e/a,h=n/l,p=[],g=[],y=[],m=[];for(let u=0;u<f;u++){const v=u*h-o;for(let _=0;_<c;_++){const M=_*d-s;g.push(M,-v,0),y.push(0,0,1),m.push(_/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<a;v++){const _=v+c*u,M=v+c*(u+1),D=v+1+c*(u+1),A=v+1+c*u;p.push(_,M,A),p.push(M,D,A)}this.setIndex(p),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(y,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hc(e.width,e.height,e.widthSegments,e.heightSegments)}}var $M=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qM=`#ifdef USE_ALPHAHASH
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
#endif`,KM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ZM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,QM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,JM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eE=`#ifdef USE_AOMAP
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
#endif`,tE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nE=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,iE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,aE=`#ifdef USE_IRIDESCENCE
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
#endif`,lE=`#ifdef USE_BUMPMAP
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
#endif`,cE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,uE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,vE=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,_E=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xE=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,SE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ME=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,EE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wE="gl_FragColor = linearToOutputTexel( gl_FragColor );",TE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,AE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,CE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,RE=`#ifdef USE_ENVMAP
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
#endif`,bE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,PE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,LE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,DE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,NE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,IE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,UE=`#ifdef USE_GRADIENTMAP
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
}`,FE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,OE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,BE=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,zE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,HE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,VE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,GE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,WE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,XE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,YE=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$E=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,qE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,KE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ZE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ew=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,iw=`#if defined( USE_POINTS_UV )
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
#endif`,rw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ow=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,aw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cw=`#ifdef USE_MORPHTARGETS
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
#endif`,uw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gw=`#ifdef USE_NORMALMAP
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
#endif`,vw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_w=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ew=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ww=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Aw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Pw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,Dw=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Nw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Iw=`#ifdef USE_SKINNING
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
#endif`,Uw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fw=`#ifdef USE_SKINNING
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
#endif`,kw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ow=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hw=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Vw=`#ifdef USE_TRANSMISSION
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
#endif`,Gw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ww=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$w=`uniform sampler2D t2D;
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
}`,qw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jw=`#include <common>
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
}`,eT=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,tT=`#define DISTANCE
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
}`,nT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,iT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sT=`uniform float scale;
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
}`,oT=`uniform vec3 diffuse;
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
}`,aT=`#include <common>
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
}`,lT=`uniform vec3 diffuse;
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
}`,cT=`#define LAMBERT
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
}`,uT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,fT=`#define MATCAP
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
}`,dT=`#define MATCAP
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
}`,hT=`#define NORMAL
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
}`,pT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mT=`#define PHONG
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
}`,gT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,vT=`#define STANDARD
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
}`,_T=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,xT=`#define TOON
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
}`,yT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,ST=`uniform float size;
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
}`,MT=`uniform vec3 diffuse;
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
}`,ET=`#include <common>
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
}`,wT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,TT=`uniform float rotation;
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
}`,AT=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:$M,alphahash_pars_fragment:qM,alphamap_fragment:KM,alphamap_pars_fragment:ZM,alphatest_fragment:QM,alphatest_pars_fragment:JM,aomap_fragment:eE,aomap_pars_fragment:tE,batching_pars_vertex:nE,batching_vertex:iE,begin_vertex:rE,beginnormal_vertex:sE,bsdfs:oE,iridescence_fragment:aE,bumpmap_pars_fragment:lE,clipping_planes_fragment:cE,clipping_planes_pars_fragment:uE,clipping_planes_pars_vertex:fE,clipping_planes_vertex:dE,color_fragment:hE,color_pars_fragment:pE,color_pars_vertex:mE,color_vertex:gE,common:vE,cube_uv_reflection_fragment:_E,defaultnormal_vertex:xE,displacementmap_pars_vertex:yE,displacementmap_vertex:SE,emissivemap_fragment:ME,emissivemap_pars_fragment:EE,colorspace_fragment:wE,colorspace_pars_fragment:TE,envmap_fragment:AE,envmap_common_pars_fragment:CE,envmap_pars_fragment:RE,envmap_pars_vertex:bE,envmap_physical_pars_fragment:zE,envmap_vertex:PE,fog_vertex:LE,fog_pars_vertex:DE,fog_fragment:NE,fog_pars_fragment:IE,gradientmap_pars_fragment:UE,lightmap_pars_fragment:FE,lights_lambert_fragment:kE,lights_lambert_pars_fragment:OE,lights_pars_begin:BE,lights_toon_fragment:HE,lights_toon_pars_fragment:VE,lights_phong_fragment:GE,lights_phong_pars_fragment:WE,lights_physical_fragment:jE,lights_physical_pars_fragment:XE,lights_fragment_begin:YE,lights_fragment_maps:$E,lights_fragment_end:qE,logdepthbuf_fragment:KE,logdepthbuf_pars_fragment:ZE,logdepthbuf_pars_vertex:QE,logdepthbuf_vertex:JE,map_fragment:ew,map_pars_fragment:tw,map_particle_fragment:nw,map_particle_pars_fragment:iw,metalnessmap_fragment:rw,metalnessmap_pars_fragment:sw,morphinstance_vertex:ow,morphcolor_vertex:aw,morphnormal_vertex:lw,morphtarget_pars_vertex:cw,morphtarget_vertex:uw,normal_fragment_begin:fw,normal_fragment_maps:dw,normal_pars_fragment:hw,normal_pars_vertex:pw,normal_vertex:mw,normalmap_pars_fragment:gw,clearcoat_normal_fragment_begin:vw,clearcoat_normal_fragment_maps:_w,clearcoat_pars_fragment:xw,iridescence_pars_fragment:yw,opaque_fragment:Sw,packing:Mw,premultiplied_alpha_fragment:Ew,project_vertex:ww,dithering_fragment:Tw,dithering_pars_fragment:Aw,roughnessmap_fragment:Cw,roughnessmap_pars_fragment:Rw,shadowmap_pars_fragment:bw,shadowmap_pars_vertex:Pw,shadowmap_vertex:Lw,shadowmask_pars_fragment:Dw,skinbase_vertex:Nw,skinning_pars_vertex:Iw,skinning_vertex:Uw,skinnormal_vertex:Fw,specularmap_fragment:kw,specularmap_pars_fragment:Ow,tonemapping_fragment:Bw,tonemapping_pars_fragment:zw,transmission_fragment:Hw,transmission_pars_fragment:Vw,uv_pars_fragment:Gw,uv_pars_vertex:Ww,uv_vertex:jw,worldpos_vertex:Xw,background_vert:Yw,background_frag:$w,backgroundCube_vert:qw,backgroundCube_frag:Kw,cube_vert:Zw,cube_frag:Qw,depth_vert:Jw,depth_frag:eT,distanceRGBA_vert:tT,distanceRGBA_frag:nT,equirect_vert:iT,equirect_frag:rT,linedashed_vert:sT,linedashed_frag:oT,meshbasic_vert:aT,meshbasic_frag:lT,meshlambert_vert:cT,meshlambert_frag:uT,meshmatcap_vert:fT,meshmatcap_frag:dT,meshnormal_vert:hT,meshnormal_frag:pT,meshphong_vert:mT,meshphong_frag:gT,meshphysical_vert:vT,meshphysical_frag:_T,meshtoon_vert:xT,meshtoon_frag:yT,points_vert:ST,points_frag:MT,shadow_vert:ET,shadow_frag:wT,sprite_vert:TT,sprite_frag:AT},he={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},qn={basic:{uniforms:Xt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Xt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new He(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Xt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Xt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Xt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new He(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Xt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Xt([he.points,he.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Xt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Xt([he.common,he.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Xt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Xt([he.sprite,he.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Xt([he.common,he.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Xt([he.lights,he.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};qn.physical={uniforms:Xt([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const ka={r:0,b:0,g:0},cr=new Jn,CT=new ft;function RT(t,e,n,i,r,s,o){const a=new He(0);let l=s===!0?0:1,c,f,d=null,h=0,p=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?n:e).get(_)),_}function y(v){let _=!1;const M=g(v);M===null?u(a,l):M&&M.isColor&&(u(M,1),_=!0);const D=t.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(v,_){const M=g(_);M&&(M.isCubeTexture||M.mapping===uc)?(f===void 0&&(f=new rn(new Jo(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:Fs(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(D,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),cr.copy(_.backgroundRotation),cr.x*=-1,cr.y*=-1,cr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),f.material.uniforms.envMap.value=M,f.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(CT.makeRotationFromEuler(cr)),f.material.toneMapped=Je.getTransfer(M.colorSpace)!==ct,(d!==M||h!==M.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,d=M,h=M.version,p=t.toneMapping),f.layers.enableAll(),v.unshift(f,f.geometry,f.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new rn(new hc(2,2),new Ji({name:"BackgroundMaterial",uniforms:Fs(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Je.getTransfer(M.colorSpace)!==ct,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||h!==M.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=M,h=M.version,p=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function u(v,_){v.getRGB(ka,W_(t)),i.buffers.color.setClear(ka.r,ka.g,ka.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),l=_,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,u(a,l)},render:y,addToRenderList:m}}function bT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(x,E,z,B,Y){let J=!1;const X=d(B,z,E);s!==X&&(s=X,c(s.object)),J=p(x,B,z,Y),J&&g(x,B,z,Y),Y!==null&&e.update(Y,t.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,M(x,E,z,B),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return t.createVertexArray()}function c(x){return t.bindVertexArray(x)}function f(x){return t.deleteVertexArray(x)}function d(x,E,z){const B=z.wireframe===!0;let Y=i[x.id];Y===void 0&&(Y={},i[x.id]=Y);let J=Y[E.id];J===void 0&&(J={},Y[E.id]=J);let X=J[B];return X===void 0&&(X=h(l()),J[B]=X),X}function h(x){const E=[],z=[],B=[];for(let Y=0;Y<n;Y++)E[Y]=0,z[Y]=0,B[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:z,attributeDivisors:B,object:x,attributes:{},index:null}}function p(x,E,z,B){const Y=s.attributes,J=E.attributes;let X=0;const te=z.getAttributes();for(const U in te)if(te[U].location>=0){const ne=Y[U];let le=J[U];if(le===void 0&&(U==="instanceMatrix"&&x.instanceMatrix&&(le=x.instanceMatrix),U==="instanceColor"&&x.instanceColor&&(le=x.instanceColor)),ne===void 0||ne.attribute!==le||le&&ne.data!==le.data)return!0;X++}return s.attributesNum!==X||s.index!==B}function g(x,E,z,B){const Y={},J=E.attributes;let X=0;const te=z.getAttributes();for(const U in te)if(te[U].location>=0){let ne=J[U];ne===void 0&&(U==="instanceMatrix"&&x.instanceMatrix&&(ne=x.instanceMatrix),U==="instanceColor"&&x.instanceColor&&(ne=x.instanceColor));const le={};le.attribute=ne,ne&&ne.data&&(le.data=ne.data),Y[U]=le,X++}s.attributes=Y,s.attributesNum=X,s.index=B}function y(){const x=s.newAttributes;for(let E=0,z=x.length;E<z;E++)x[E]=0}function m(x){u(x,0)}function u(x,E){const z=s.newAttributes,B=s.enabledAttributes,Y=s.attributeDivisors;z[x]=1,B[x]===0&&(t.enableVertexAttribArray(x),B[x]=1),Y[x]!==E&&(t.vertexAttribDivisor(x,E),Y[x]=E)}function v(){const x=s.newAttributes,E=s.enabledAttributes;for(let z=0,B=E.length;z<B;z++)E[z]!==x[z]&&(t.disableVertexAttribArray(z),E[z]=0)}function _(x,E,z,B,Y,J,X){X===!0?t.vertexAttribIPointer(x,E,z,Y,J):t.vertexAttribPointer(x,E,z,B,Y,J)}function M(x,E,z,B){y();const Y=B.attributes,J=z.getAttributes(),X=E.defaultAttributeValues;for(const te in J){const U=J[te];if(U.location>=0){let ee=Y[te];if(ee===void 0&&(te==="instanceMatrix"&&x.instanceMatrix&&(ee=x.instanceMatrix),te==="instanceColor"&&x.instanceColor&&(ee=x.instanceColor)),ee!==void 0){const ne=ee.normalized,le=ee.itemSize,Re=e.get(ee);if(Re===void 0)continue;const Oe=Re.buffer,$=Re.type,se=Re.bytesPerElement,K=$===t.INT||$===t.UNSIGNED_INT||ee.gpuType===ch;if(ee.isInterleavedBufferAttribute){const Z=ee.data,de=Z.stride,ue=ee.offset;if(Z.isInstancedInterleavedBuffer){for(let ge=0;ge<U.locationSize;ge++)u(U.location+ge,Z.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ge=0;ge<U.locationSize;ge++)m(U.location+ge);t.bindBuffer(t.ARRAY_BUFFER,Oe);for(let ge=0;ge<U.locationSize;ge++)_(U.location+ge,le/U.locationSize,$,ne,de*se,(ue+le/U.locationSize*ge)*se,K)}else{if(ee.isInstancedBufferAttribute){for(let Z=0;Z<U.locationSize;Z++)u(U.location+Z,ee.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Z=0;Z<U.locationSize;Z++)m(U.location+Z);t.bindBuffer(t.ARRAY_BUFFER,Oe);for(let Z=0;Z<U.locationSize;Z++)_(U.location+Z,le/U.locationSize,$,ne,le*se,le/U.locationSize*Z*se,K)}}else if(X!==void 0){const ne=X[te];if(ne!==void 0)switch(ne.length){case 2:t.vertexAttrib2fv(U.location,ne);break;case 3:t.vertexAttrib3fv(U.location,ne);break;case 4:t.vertexAttrib4fv(U.location,ne);break;default:t.vertexAttrib1fv(U.location,ne)}}}}v()}function D(){C();for(const x in i){const E=i[x];for(const z in E){const B=E[z];for(const Y in B)f(B[Y].object),delete B[Y];delete E[z]}delete i[x]}}function A(x){if(i[x.id]===void 0)return;const E=i[x.id];for(const z in E){const B=E[z];for(const Y in B)f(B[Y].object),delete B[Y];delete E[z]}delete i[x.id]}function T(x){for(const E in i){const z=i[E];if(z[x.id]===void 0)continue;const B=z[x.id];for(const Y in B)f(B[Y].object),delete B[Y];delete z[x.id]}}function C(){G(),o=!0,s!==r&&(s=r,c(s.object))}function G(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:G,dispose:D,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:m,disableUnusedAttributes:v}}function PT(t,e,n){let i;function r(c){i=c}function s(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function o(c,f,d){d!==0&&(t.drawArraysInstanced(i,c,f,d),n.update(f,i,d))}function a(c,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,d);let p=0;for(let g=0;g<d;g++)p+=f[g];n.update(p,i,1)}function l(c,f,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],f[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,f,0,h,0,d);let g=0;for(let y=0;y<d;y++)g+=f[y];for(let y=0;y<h.length;y++)n.update(g,i,h[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function LT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Hn&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const C=T===Ko&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Si&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==hi&&!C)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const d=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:D,maxSamples:A}}function DT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ii,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,p){const g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,u=t.get(d);if(!r||g===null||g.length===0||s&&!m)s?f(null):c();else{const v=s?0:i,_=v*4;let M=u.clippingState||null;l.value=M,M=f(g,h,_,p);for(let D=0;D!==_;++D)M[D]=n[D];u.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,p,g){const y=d!==null?d.length:0;let m=null;if(y!==0){if(m=l.value,g!==!0||m===null){const u=p+y*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<u)&&(m=new Float32Array(u));for(let _=0,M=p;_!==y;++_,M+=4)o.copy(d[_]).applyMatrix4(v,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function NT(t){let e=new WeakMap;function n(o,a){return a===Lf?o.mapping=Ds:a===Df&&(o.mapping=Ns),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Lf||a===Df)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new WM(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class $_ extends j_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ds=4,Mm=[.125,.215,.35,.446,.526,.582],gr=20,pu=new $_,Em=new He;let mu=null,gu=0,vu=0,_u=!1;const pr=(1+Math.sqrt(5))/2,qr=1/pr,wm=[new H(-pr,qr,0),new H(pr,qr,0),new H(-qr,0,pr),new H(qr,0,pr),new H(0,pr,-qr),new H(0,pr,qr),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class Tm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){mu=this._renderer.getRenderTarget(),gu=this._renderer.getActiveCubeFace(),vu=this._renderer.getActiveMipmapLevel(),_u=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mu,gu,vu),this._renderer.xr.enabled=_u,e.scissorTest=!1,Oa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ds||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mu=this._renderer.getRenderTarget(),gu=this._renderer.getActiveCubeFace(),vu=this._renderer.getActiveMipmapLevel(),_u=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:Ko,format:Hn,colorSpace:ir,depthBuffer:!1},r=Am(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Am(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=IT(s)),this._blurMaterial=UT(s,e,n)}return r}_compileMaterial(e){const n=new rn(this._lodPlanes[0],e);this._renderer.compile(n,pu)}_sceneToCubeUV(e,n,i,r){const a=new wn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Em),f.toneMapping=qi,f.autoClear=!1;const p=new xh({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),g=new rn(new Jo,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(Em),y=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):v===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const _=this._cubeSize;Oa(r,v*_,u>2?_:0,_,_),f.setRenderTarget(r),y&&f.render(g,a),f.render(e,a)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ds||e.mapping===Ns;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new rn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Oa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,pu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=wm[(r-s-1)%wm.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new rn(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*gr-1),y=s/g,m=isFinite(s)?1+Math.floor(f*y):gr;m>gr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gr}`);const u=[];let v=0;for(let T=0;T<gr;++T){const C=T/y,G=Math.exp(-C*C/2);u.push(G),T===0?v+=G:T<m&&(v+=2*G)}for(let T=0;T<u.length;T++)u[T]=u[T]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-i;const M=this._sizeLods[r],D=3*M*(r>_-ds?r-_+ds:0),A=4*(this._cubeSize-M);Oa(n,D,A,3*M,2*M),l.setRenderTarget(n),l.render(d,pu)}}function IT(t){const e=[],n=[],i=[];let r=t;const s=t-ds+1+Mm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ds?l=Mm[o-t+ds-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],p=6,g=6,y=3,m=2,u=1,v=new Float32Array(y*g*p),_=new Float32Array(m*g*p),M=new Float32Array(u*g*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,C=A>2?0:-1,G=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];v.set(G,y*g*A),_.set(h,m*g*A);const x=[A,A,A,A,A,A];M.set(x,u*g*A)}const D=new Jt;D.setAttribute("position",new Wn(v,y)),D.setAttribute("uv",new Wn(_,m)),D.setAttribute("faceIndex",new Wn(M,u)),e.push(D),r>ds&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Am(t,e,n){const i=new Pr(t,e,n);return i.texture.mapping=uc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Oa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function UT(t,e,n){const i=new Float32Array(gr),r=new H(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Sh(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Cm(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sh(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Rm(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Sh(){return`

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
	`}function FT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Lf||l===Df,f=l===Ds||l===Ns;if(c||f){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Tm(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||f&&p&&r(p)?(n===null&&(n=new Tm(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function kT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ll("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function OT(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const y=h.morphAttributes[g];for(let m=0,u=y.length;m<u;m++)e.remove(y[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const y=p[g];for(let m=0,u=y.length;m<u;m++)e.update(y[m],t.ARRAY_BUFFER)}}function c(d){const h=[],p=d.index,g=d.attributes.position;let y=0;if(p!==null){const v=p.array;y=p.version;for(let _=0,M=v.length;_<M;_+=3){const D=v[_+0],A=v[_+1],T=v[_+2];h.push(D,A,A,T,T,D)}}else if(g!==void 0){const v=g.array;y=g.version;for(let _=0,M=v.length/3-1;_<M;_+=3){const D=_+0,A=_+1,T=_+2;h.push(D,A,A,T,T,D)}}else return;const m=new(O_(h)?G_:V_)(h,1);m.version=y;const u=s.get(d);u&&e.remove(u),s.set(d,m)}function f(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function BT(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,h*o,g),n.update(p,i,g))}function f(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];n.update(m,i,1)}function d(h,p,g,y){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<h.length;u++)c(h[u]/o,p[u],y[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,y,0,g);let u=0;for(let v=0;v<g;v++)u+=p[v];for(let v=0;v<y.length;v++)n.update(u,i,y[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function zT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function HT(t,e,n){const i=new WeakMap,r=new _t;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=f!==void 0?f.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let x=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var p=x;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),y===!0&&(M=2),m===!0&&(M=3);let D=a.attributes.position.count*M,A=1;D>e.maxTextureSize&&(A=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const T=new Float32Array(D*A*4*d),C=new z_(T,D,A,d);C.type=hi,C.needsUpdate=!0;const G=M*4;for(let E=0;E<d;E++){const z=u[E],B=v[E],Y=_[E],J=D*A*4*E;for(let X=0;X<z.count;X++){const te=X*G;g===!0&&(r.fromBufferAttribute(z,X),T[J+te+0]=r.x,T[J+te+1]=r.y,T[J+te+2]=r.z,T[J+te+3]=0),y===!0&&(r.fromBufferAttribute(B,X),T[J+te+4]=r.x,T[J+te+5]=r.y,T[J+te+6]=r.z,T[J+te+7]=0),m===!0&&(r.fromBufferAttribute(Y,X),T[J+te+8]=r.x,T[J+te+9]=r.y,T[J+te+10]=r.z,T[J+te+11]=Y.itemSize===4?r.w:1)}}h={count:d,texture:C,size:new Ge(D,A)},i.set(a,h),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const y=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function VT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class q_ extends Kt{constructor(e,n,i,r,s,o,a,l,c,f=Ss){if(f!==Ss&&f!==Us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Ss&&(i=br),i===void 0&&f===Us&&(i=Is),super(null,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Cn,this.minFilter=l!==void 0?l:Cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const K_=new Kt,bm=new q_(1,1),Z_=new z_,Q_=new RM,J_=new X_,Pm=[],Lm=[],Dm=new Float32Array(16),Nm=new Float32Array(9),Im=new Float32Array(4);function Hs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Pm[r];if(s===void 0&&(s=new Float32Array(r),Pm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Rt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function pc(t,e){let n=Lm[e];n===void 0&&(n=new Int32Array(e),Lm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function GT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function WT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2fv(this.addr,e),bt(n,e)}}function jT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rt(n,e))return;t.uniform3fv(this.addr,e),bt(n,e)}}function XT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4fv(this.addr,e),bt(n,e)}}function YT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),bt(n,e)}else{if(Rt(n,i))return;Im.set(i),t.uniformMatrix2fv(this.addr,!1,Im),bt(n,i)}}function $T(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),bt(n,e)}else{if(Rt(n,i))return;Nm.set(i),t.uniformMatrix3fv(this.addr,!1,Nm),bt(n,i)}}function qT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),bt(n,e)}else{if(Rt(n,i))return;Dm.set(i),t.uniformMatrix4fv(this.addr,!1,Dm),bt(n,i)}}function KT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function ZT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2iv(this.addr,e),bt(n,e)}}function QT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3iv(this.addr,e),bt(n,e)}}function JT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4iv(this.addr,e),bt(n,e)}}function e1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function t1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2uiv(this.addr,e),bt(n,e)}}function n1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3uiv(this.addr,e),bt(n,e)}}function i1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4uiv(this.addr,e),bt(n,e)}}function r1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(bm.compareFunction=k_,s=bm):s=K_,n.setTexture2D(e||s,r)}function s1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Q_,r)}function o1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||J_,r)}function a1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Z_,r)}function l1(t){switch(t){case 5126:return GT;case 35664:return WT;case 35665:return jT;case 35666:return XT;case 35674:return YT;case 35675:return $T;case 35676:return qT;case 5124:case 35670:return KT;case 35667:case 35671:return ZT;case 35668:case 35672:return QT;case 35669:case 35673:return JT;case 5125:return e1;case 36294:return t1;case 36295:return n1;case 36296:return i1;case 35678:case 36198:case 36298:case 36306:case 35682:return r1;case 35679:case 36299:case 36307:return s1;case 35680:case 36300:case 36308:case 36293:return o1;case 36289:case 36303:case 36311:case 36292:return a1}}function c1(t,e){t.uniform1fv(this.addr,e)}function u1(t,e){const n=Hs(e,this.size,2);t.uniform2fv(this.addr,n)}function f1(t,e){const n=Hs(e,this.size,3);t.uniform3fv(this.addr,n)}function d1(t,e){const n=Hs(e,this.size,4);t.uniform4fv(this.addr,n)}function h1(t,e){const n=Hs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function p1(t,e){const n=Hs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function m1(t,e){const n=Hs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function g1(t,e){t.uniform1iv(this.addr,e)}function v1(t,e){t.uniform2iv(this.addr,e)}function _1(t,e){t.uniform3iv(this.addr,e)}function x1(t,e){t.uniform4iv(this.addr,e)}function y1(t,e){t.uniform1uiv(this.addr,e)}function S1(t,e){t.uniform2uiv(this.addr,e)}function M1(t,e){t.uniform3uiv(this.addr,e)}function E1(t,e){t.uniform4uiv(this.addr,e)}function w1(t,e,n){const i=this.cache,r=e.length,s=pc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||K_,s[o])}function T1(t,e,n){const i=this.cache,r=e.length,s=pc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Q_,s[o])}function A1(t,e,n){const i=this.cache,r=e.length,s=pc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||J_,s[o])}function C1(t,e,n){const i=this.cache,r=e.length,s=pc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Z_,s[o])}function R1(t){switch(t){case 5126:return c1;case 35664:return u1;case 35665:return f1;case 35666:return d1;case 35674:return h1;case 35675:return p1;case 35676:return m1;case 5124:case 35670:return g1;case 35667:case 35671:return v1;case 35668:case 35672:return _1;case 35669:case 35673:return x1;case 5125:return y1;case 36294:return S1;case 36295:return M1;case 36296:return E1;case 35678:case 36198:case 36298:case 36306:case 35682:return w1;case 35679:case 36299:case 36307:return T1;case 35680:case 36300:case 36308:case 36293:return A1;case 36289:case 36303:case 36311:case 36292:return C1}}class b1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=l1(n.type)}}class P1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=R1(n.type)}}class L1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const xu=/(\w+)(\])?(\[|\.)?/g;function Um(t,e){t.seq.push(e),t.map[e.id]=e}function D1(t,e,n){const i=t.name,r=i.length;for(xu.lastIndex=0;;){const s=xu.exec(i),o=xu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Um(n,c===void 0?new b1(a,t,e):new P1(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new L1(a),Um(n,d)),n=d}}}class cl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);D1(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Fm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const N1=37297;let I1=0;function U1(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function F1(t){const e=Je.getPrimaries(Je.workingColorSpace),n=Je.getPrimaries(t);let i;switch(e===n?i="":e===zl&&n===Bl?i="LinearDisplayP3ToLinearSRGB":e===Bl&&n===zl&&(i="LinearSRGBToLinearDisplayP3"),t){case ir:case fc:return[i,"LinearTransferOETF"];case $n:case mh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function km(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+U1(t.getShaderSource(e),o)}else return r}function k1(t,e){const n=F1(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function O1(t,e){let n;switch(e){case BS:n="Linear";break;case zS:n="Reinhard";break;case HS:n="Cineon";break;case VS:n="ACESFilmic";break;case WS:n="AgX";break;case jS:n="Neutral";break;case GS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ba=new H;function B1(){Je.getLuminanceCoefficients(Ba);const t=Ba.x.toFixed(4),e=Ba.y.toFixed(4),n=Ba.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function z1(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fo).join(`
`)}function H1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function V1(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function fo(t){return t!==""}function Om(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const G1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ld(t){return t.replace(G1,j1)}const W1=new Map;function j1(t,e){let n=Be[e];if(n===void 0){const i=W1.get(e);if(i!==void 0)n=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ld(n)}const X1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zm(t){return t.replace(X1,Y1)}function Y1(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $1(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===M_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===E_?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===oi&&(e="SHADOWMAP_TYPE_VSM"),e}function q1(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ds:case Ns:e="ENVMAP_TYPE_CUBE";break;case uc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function K1(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ns:e="ENVMAP_MODE_REFRACTION";break}return e}function Z1(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case w_:e="ENVMAP_BLENDING_MULTIPLY";break;case kS:e="ENVMAP_BLENDING_MIX";break;case OS:e="ENVMAP_BLENDING_ADD";break}return e}function Q1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function J1(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=$1(n),c=q1(n),f=K1(n),d=Z1(n),h=Q1(n),p=z1(n),g=H1(s),y=r.createProgram();let m,u,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(fo).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(fo).join(`
`),u.length>0&&(u+=`
`)):(m=[Hm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fo).join(`
`),u=[Hm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==qi?"#define TONE_MAPPING":"",n.toneMapping!==qi?Be.tonemapping_pars_fragment:"",n.toneMapping!==qi?O1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,k1("linearToOutputTexel",n.outputColorSpace),B1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(fo).join(`
`)),o=ld(o),o=Om(o,n),o=Bm(o,n),a=ld(a),a=Om(a,n),a=Bm(a,n),o=zm(o),a=zm(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===nm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===nm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const _=v+m+o,M=v+u+a,D=Fm(r,r.VERTEX_SHADER,_),A=Fm(r,r.FRAGMENT_SHADER,M);r.attachShader(y,D),r.attachShader(y,A),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function T(E){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(y).trim(),B=r.getShaderInfoLog(D).trim(),Y=r.getShaderInfoLog(A).trim();let J=!0,X=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(J=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,D,A);else{const te=km(r,D,"vertex"),U=km(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+z+`
`+te+`
`+U)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(B===""||Y==="")&&(X=!1);X&&(E.diagnostics={runnable:J,programLog:z,vertexShader:{log:B,prefix:m},fragmentShader:{log:Y,prefix:u}})}r.deleteShader(D),r.deleteShader(A),C=new cl(r,y),G=V1(r,y)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let G;this.getAttributes=function(){return G===void 0&&T(this),G};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(y,N1)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=I1++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=D,this.fragmentShader=A,this}let eA=0;class tA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new nA(e),n.set(e,i)),i}}class nA{constructor(e){this.id=eA++,this.code=e,this.usedTimes=0}}function iA(t,e,n,i,r,s,o){const a=new _h,l=new tA,c=new Set,f=[],d=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,p=r.vertexTextures;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function u(x,E,z,B,Y){const J=B.fog,X=Y.geometry,te=x.isMeshStandardMaterial?B.environment:null,U=(x.isMeshStandardMaterial?n:e).get(x.envMap||te),ee=U&&U.mapping===uc?U.image.height:null,ne=y[x.type];x.precision!==null&&(g=r.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const le=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Re=le!==void 0?le.length:0;let Oe=0;X.morphAttributes.position!==void 0&&(Oe=1),X.morphAttributes.normal!==void 0&&(Oe=2),X.morphAttributes.color!==void 0&&(Oe=3);let $,se,K,Z;if(ne){const tn=qn[ne];$=tn.vertexShader,se=tn.fragmentShader}else $=x.vertexShader,se=x.fragmentShader,l.update(x),K=l.getVertexShaderID(x),Z=l.getFragmentShaderID(x);const de=t.getRenderTarget(),ue=Y.isInstancedMesh===!0,ge=Y.isBatchedMesh===!0,Le=!!x.map,We=!!x.matcap,I=!!U,Ot=!!x.aoMap,Ve=!!x.lightMap,Ye=!!x.bumpMap,De=!!x.normalMap,it=!!x.displacementMap,Ne=!!x.emissiveMap,R=!!x.metalnessMap,S=!!x.roughnessMap,V=x.anisotropy>0,b=x.clearcoat>0,L=x.dispersion>0,N=x.iridescence>0,Q=x.sheen>0,ie=x.transmission>0,pe=V&&!!x.anisotropyMap,je=b&&!!x.clearcoatMap,ae=b&&!!x.clearcoatNormalMap,Me=b&&!!x.clearcoatRoughnessMap,Te=N&&!!x.iridescenceMap,Ee=N&&!!x.iridescenceThicknessMap,me=Q&&!!x.sheenColorMap,ke=Q&&!!x.sheenRoughnessMap,Fe=!!x.specularMap,rt=!!x.specularColorMap,F=!!x.specularIntensityMap,xe=ie&&!!x.transmissionMap,q=ie&&!!x.thicknessMap,re=!!x.gradientMap,ve=!!x.alphaMap,ye=x.alphaTest>0,$e=!!x.alphaHash,Mt=!!x.extensions;let en=qi;x.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(en=t.toneMapping);const Ke={shaderID:ne,shaderType:x.type,shaderName:x.name,vertexShader:$,fragmentShader:se,defines:x.defines,customVertexShaderID:K,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:ge,batchingColor:ge&&Y._colorsTexture!==null,instancing:ue,instancingColor:ue&&Y.instanceColor!==null,instancingMorph:ue&&Y.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:de===null?t.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:ir,alphaToCoverage:!!x.alphaToCoverage,map:Le,matcap:We,envMap:I,envMapMode:I&&U.mapping,envMapCubeUVHeight:ee,aoMap:Ot,lightMap:Ve,bumpMap:Ye,normalMap:De,displacementMap:p&&it,emissiveMap:Ne,normalMapObjectSpace:De&&x.normalMapType===qS,normalMapTangentSpace:De&&x.normalMapType===F_,metalnessMap:R,roughnessMap:S,anisotropy:V,anisotropyMap:pe,clearcoat:b,clearcoatMap:je,clearcoatNormalMap:ae,clearcoatRoughnessMap:Me,dispersion:L,iridescence:N,iridescenceMap:Te,iridescenceThicknessMap:Ee,sheen:Q,sheenColorMap:me,sheenRoughnessMap:ke,specularMap:Fe,specularColorMap:rt,specularIntensityMap:F,transmission:ie,transmissionMap:xe,thicknessMap:q,gradientMap:re,opaque:x.transparent===!1&&x.blending===ys&&x.alphaToCoverage===!1,alphaMap:ve,alphaTest:ye,alphaHash:$e,combine:x.combine,mapUv:Le&&m(x.map.channel),aoMapUv:Ot&&m(x.aoMap.channel),lightMapUv:Ve&&m(x.lightMap.channel),bumpMapUv:Ye&&m(x.bumpMap.channel),normalMapUv:De&&m(x.normalMap.channel),displacementMapUv:it&&m(x.displacementMap.channel),emissiveMapUv:Ne&&m(x.emissiveMap.channel),metalnessMapUv:R&&m(x.metalnessMap.channel),roughnessMapUv:S&&m(x.roughnessMap.channel),anisotropyMapUv:pe&&m(x.anisotropyMap.channel),clearcoatMapUv:je&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:ae&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:me&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:ke&&m(x.sheenRoughnessMap.channel),specularMapUv:Fe&&m(x.specularMap.channel),specularColorMapUv:rt&&m(x.specularColorMap.channel),specularIntensityMapUv:F&&m(x.specularIntensityMap.channel),transmissionMapUv:xe&&m(x.transmissionMap.channel),thicknessMapUv:q&&m(x.thicknessMap.channel),alphaMapUv:ve&&m(x.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(De||V),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!X.attributes.uv&&(Le||ve),fog:!!J,useFog:x.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:h,skinning:Y.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Oe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&z.length>0,shadowMapType:t.shadowMap.type,toneMapping:en,decodeVideoTexture:Le&&x.map.isVideoTexture===!0&&Je.getTransfer(x.map.colorSpace)===ct,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ci,flipSided:x.side===cn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Mt&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Mt&&x.extensions.multiDraw===!0||ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ke.vertexUv1s=c.has(1),Ke.vertexUv2s=c.has(2),Ke.vertexUv3s=c.has(3),c.clear(),Ke}function v(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const z in x.defines)E.push(z),E.push(x.defines[z]);return x.isRawShaderMaterial===!1&&(_(E,x),M(E,x),E.push(t.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function _(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function M(x,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),x.push(a.mask)}function D(x){const E=y[x.type];let z;if(E){const B=qn[E];z=zM.clone(B.uniforms)}else z=x.uniforms;return z}function A(x,E){let z;for(let B=0,Y=f.length;B<Y;B++){const J=f[B];if(J.cacheKey===E){z=J,++z.usedTimes;break}}return z===void 0&&(z=new J1(t,E,x,s),f.push(z)),z}function T(x){if(--x.usedTimes===0){const E=f.indexOf(x);f[E]=f[f.length-1],f.pop(),x.destroy()}}function C(x){l.remove(x)}function G(){l.dispose()}return{getParameters:u,getProgramCacheKey:v,getUniforms:D,acquireProgram:A,releaseProgram:T,releaseShaderCache:C,programs:f,dispose:G}}function rA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function sA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Vm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Gm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,p,g,y,m){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:h,material:p,groupOrder:g,renderOrder:d.renderOrder,z:y,group:m},t[e]=u):(u.id=d.id,u.object=d,u.geometry=h,u.material=p,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=y,u.group=m),e++,u}function a(d,h,p,g,y,m){const u=o(d,h,p,g,y,m);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(d,h,p,g,y,m){const u=o(d,h,p,g,y,m);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(d,h){n.length>1&&n.sort(d||sA),i.length>1&&i.sort(h||Vm),r.length>1&&r.sort(h||Vm)}function f(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function oA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Gm,t.set(i,[o])):r>=s.length?(o=new Gm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function aA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new He};break;case"SpotLight":n={position:new H,direction:new H,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new He,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new He,groundColor:new He};break;case"RectAreaLight":n={color:new He,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function lA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let cA=0;function uA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function fA(t){const e=new aA,n=lA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const r=new H,s=new ft,o=new ft;function a(c){let f=0,d=0,h=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let p=0,g=0,y=0,m=0,u=0,v=0,_=0,M=0,D=0,A=0,T=0;c.sort(uA);for(let G=0,x=c.length;G<x;G++){const E=c[G],z=E.color,B=E.intensity,Y=E.distance,J=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)f+=z.r*B,d+=z.g*B,h+=z.b*B;else if(E.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(E.sh.coefficients[X],B);T++}else if(E.isDirectionalLight){const X=e.get(E);if(X.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const te=E.shadow,U=n.get(E);U.shadowIntensity=te.intensity,U.shadowBias=te.bias,U.shadowNormalBias=te.normalBias,U.shadowRadius=te.radius,U.shadowMapSize=te.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=J,i.directionalShadowMatrix[p]=E.shadow.matrix,v++}i.directional[p]=X,p++}else if(E.isSpotLight){const X=e.get(E);X.position.setFromMatrixPosition(E.matrixWorld),X.color.copy(z).multiplyScalar(B),X.distance=Y,X.coneCos=Math.cos(E.angle),X.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),X.decay=E.decay,i.spot[y]=X;const te=E.shadow;if(E.map&&(i.spotLightMap[D]=E.map,D++,te.updateMatrices(E),E.castShadow&&A++),i.spotLightMatrix[y]=te.matrix,E.castShadow){const U=n.get(E);U.shadowIntensity=te.intensity,U.shadowBias=te.bias,U.shadowNormalBias=te.normalBias,U.shadowRadius=te.radius,U.shadowMapSize=te.mapSize,i.spotShadow[y]=U,i.spotShadowMap[y]=J,M++}y++}else if(E.isRectAreaLight){const X=e.get(E);X.color.copy(z).multiplyScalar(B),X.halfWidth.set(E.width*.5,0,0),X.halfHeight.set(0,E.height*.5,0),i.rectArea[m]=X,m++}else if(E.isPointLight){const X=e.get(E);if(X.color.copy(E.color).multiplyScalar(E.intensity),X.distance=E.distance,X.decay=E.decay,E.castShadow){const te=E.shadow,U=n.get(E);U.shadowIntensity=te.intensity,U.shadowBias=te.bias,U.shadowNormalBias=te.normalBias,U.shadowRadius=te.radius,U.shadowMapSize=te.mapSize,U.shadowCameraNear=te.camera.near,U.shadowCameraFar=te.camera.far,i.pointShadow[g]=U,i.pointShadowMap[g]=J,i.pointShadowMatrix[g]=E.shadow.matrix,_++}i.point[g]=X,g++}else if(E.isHemisphereLight){const X=e.get(E);X.skyColor.copy(E.color).multiplyScalar(B),X.groundColor.copy(E.groundColor).multiplyScalar(B),i.hemi[u]=X,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=h;const C=i.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==y||C.rectAreaLength!==m||C.hemiLength!==u||C.numDirectionalShadows!==v||C.numPointShadows!==_||C.numSpotShadows!==M||C.numSpotMaps!==D||C.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=M+D-A,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,C.directionalLength=p,C.pointLength=g,C.spotLength=y,C.rectAreaLength=m,C.hemiLength=u,C.numDirectionalShadows=v,C.numPointShadows=_,C.numSpotShadows=M,C.numSpotMaps=D,C.numLightProbes=T,i.version=cA++)}function l(c,f){let d=0,h=0,p=0,g=0,y=0;const m=f.matrixWorldInverse;for(let u=0,v=c.length;u<v;u++){const _=c[u];if(_.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(_.isSpotLight){const M=i.spot[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const M=i.point[h];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(m),h++}else if(_.isHemisphereLight){const M=i.hemi[y];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function Wm(t){const e=new fA(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function dA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Wm(t),e.set(r,[a])):s>=o.length?(a=new Wm(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class hA extends Nr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=YS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pA extends Nr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const mA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function vA(t,e,n){let i=new yh;const r=new Ge,s=new Ge,o=new _t,a=new hA({depthPacking:$S}),l=new pA,c={},f=n.maxTextureSize,d={[Qi]:cn,[cn]:Qi,[ci]:ci},h=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:mA,fragmentShader:gA}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Jt;g.setAttribute("position",new Wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new rn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=M_;let u=this.type;this.render=function(A,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const G=t.getRenderTarget(),x=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),z=t.state;z.setBlending($i),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const B=u!==oi&&this.type===oi,Y=u===oi&&this.type!==oi;for(let J=0,X=A.length;J<X;J++){const te=A[J],U=te.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const ee=U.getFrameExtents();if(r.multiply(ee),s.copy(U.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/ee.x),r.x=s.x*ee.x,U.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/ee.y),r.y=s.y*ee.y,U.mapSize.y=s.y)),U.map===null||B===!0||Y===!0){const le=this.type!==oi?{minFilter:Cn,magFilter:Cn}:{};U.map!==null&&U.map.dispose(),U.map=new Pr(r.x,r.y,le),U.map.texture.name=te.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const ne=U.getViewportCount();for(let le=0;le<ne;le++){const Re=U.getViewport(le);o.set(s.x*Re.x,s.y*Re.y,s.x*Re.z,s.y*Re.w),z.viewport(o),U.updateMatrices(te,le),i=U.getFrustum(),M(T,C,U.camera,te,this.type)}U.isPointLightShadow!==!0&&this.type===oi&&v(U,C),U.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(G,x,E)};function v(A,T){const C=e.update(y);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Pr(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(T,null,C,h,y,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(T,null,C,p,y,null)}function _(A,T,C,G){let x=null;const E=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(E!==void 0)x=E;else if(x=C.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const z=x.uuid,B=T.uuid;let Y=c[z];Y===void 0&&(Y={},c[z]=Y);let J=Y[B];J===void 0&&(J=x.clone(),Y[B]=J,T.addEventListener("dispose",D)),x=J}if(x.visible=T.visible,x.wireframe=T.wireframe,G===oi?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:d[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const z=t.properties.get(x);z.light=C}return x}function M(A,T,C,G,x){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===oi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const B=e.update(A),Y=A.material;if(Array.isArray(Y)){const J=B.groups;for(let X=0,te=J.length;X<te;X++){const U=J[X],ee=Y[U.materialIndex];if(ee&&ee.visible){const ne=_(A,ee,G,x);A.onBeforeShadow(t,A,T,C,B,ne,U),t.renderBufferDirect(C,null,B,ne,A,U),A.onAfterShadow(t,A,T,C,B,ne,U)}}}else if(Y.visible){const J=_(A,Y,G,x);A.onBeforeShadow(t,A,T,C,B,J,null),t.renderBufferDirect(C,null,B,J,A,null),A.onAfterShadow(t,A,T,C,B,J,null)}}const z=A.children;for(let B=0,Y=z.length;B<Y;B++)M(z[B],T,C,G,x)}function D(A){A.target.removeEventListener("dispose",D);for(const C in c){const G=c[C],x=A.target.uuid;x in G&&(G[x].dispose(),delete G[x])}}}const _A={[wf]:Tf,[Af]:bf,[Cf]:Pf,[Ls]:Rf,[Tf]:wf,[bf]:Af,[Pf]:Cf,[Rf]:Ls};function xA(t){function e(){let F=!1;const xe=new _t;let q=null;const re=new _t(0,0,0,0);return{setMask:function(ve){q!==ve&&!F&&(t.colorMask(ve,ve,ve,ve),q=ve)},setLocked:function(ve){F=ve},setClear:function(ve,ye,$e,Mt,en){en===!0&&(ve*=Mt,ye*=Mt,$e*=Mt),xe.set(ve,ye,$e,Mt),re.equals(xe)===!1&&(t.clearColor(ve,ye,$e,Mt),re.copy(xe))},reset:function(){F=!1,q=null,re.set(-1,0,0,0)}}}function n(){let F=!1,xe=!1,q=null,re=null,ve=null;return{setReversed:function(ye){xe=ye},setTest:function(ye){ye?K(t.DEPTH_TEST):Z(t.DEPTH_TEST)},setMask:function(ye){q!==ye&&!F&&(t.depthMask(ye),q=ye)},setFunc:function(ye){if(xe&&(ye=_A[ye]),re!==ye){switch(ye){case wf:t.depthFunc(t.NEVER);break;case Tf:t.depthFunc(t.ALWAYS);break;case Af:t.depthFunc(t.LESS);break;case Ls:t.depthFunc(t.LEQUAL);break;case Cf:t.depthFunc(t.EQUAL);break;case Rf:t.depthFunc(t.GEQUAL);break;case bf:t.depthFunc(t.GREATER);break;case Pf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}re=ye}},setLocked:function(ye){F=ye},setClear:function(ye){ve!==ye&&(t.clearDepth(ye),ve=ye)},reset:function(){F=!1,q=null,re=null,ve=null}}}function i(){let F=!1,xe=null,q=null,re=null,ve=null,ye=null,$e=null,Mt=null,en=null;return{setTest:function(Ke){F||(Ke?K(t.STENCIL_TEST):Z(t.STENCIL_TEST))},setMask:function(Ke){xe!==Ke&&!F&&(t.stencilMask(Ke),xe=Ke)},setFunc:function(Ke,tn,ei){(q!==Ke||re!==tn||ve!==ei)&&(t.stencilFunc(Ke,tn,ei),q=Ke,re=tn,ve=ei)},setOp:function(Ke,tn,ei){(ye!==Ke||$e!==tn||Mt!==ei)&&(t.stencilOp(Ke,tn,ei),ye=Ke,$e=tn,Mt=ei)},setLocked:function(Ke){F=Ke},setClear:function(Ke){en!==Ke&&(t.clearStencil(Ke),en=Ke)},reset:function(){F=!1,xe=null,q=null,re=null,ve=null,ye=null,$e=null,Mt=null,en=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},f={},d=new WeakMap,h=[],p=null,g=!1,y=null,m=null,u=null,v=null,_=null,M=null,D=null,A=new He(0,0,0),T=0,C=!1,G=null,x=null,E=null,z=null,B=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,X=0;const te=t.getParameter(t.VERSION);te.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(te)[1]),J=X>=1):te.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),J=X>=2);let U=null,ee={};const ne=t.getParameter(t.SCISSOR_BOX),le=t.getParameter(t.VIEWPORT),Re=new _t().fromArray(ne),Oe=new _t().fromArray(le);function $(F,xe,q,re){const ve=new Uint8Array(4),ye=t.createTexture();t.bindTexture(F,ye),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let $e=0;$e<q;$e++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(xe,0,t.RGBA,1,1,re,0,t.RGBA,t.UNSIGNED_BYTE,ve):t.texImage2D(xe+$e,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ve);return ye}const se={};se[t.TEXTURE_2D]=$(t.TEXTURE_2D,t.TEXTURE_2D,1),se[t.TEXTURE_CUBE_MAP]=$(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[t.TEXTURE_2D_ARRAY]=$(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),se[t.TEXTURE_3D]=$(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),K(t.DEPTH_TEST),s.setFunc(Ls),Ve(!1),Ye(Zp),K(t.CULL_FACE),I($i);function K(F){c[F]!==!0&&(t.enable(F),c[F]=!0)}function Z(F){c[F]!==!1&&(t.disable(F),c[F]=!1)}function de(F,xe){return f[F]!==xe?(t.bindFramebuffer(F,xe),f[F]=xe,F===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=xe),F===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=xe),!0):!1}function ue(F,xe){let q=h,re=!1;if(F){q=d.get(xe),q===void 0&&(q=[],d.set(xe,q));const ve=F.textures;if(q.length!==ve.length||q[0]!==t.COLOR_ATTACHMENT0){for(let ye=0,$e=ve.length;ye<$e;ye++)q[ye]=t.COLOR_ATTACHMENT0+ye;q.length=ve.length,re=!0}}else q[0]!==t.BACK&&(q[0]=t.BACK,re=!0);re&&t.drawBuffers(q)}function ge(F){return p!==F?(t.useProgram(F),p=F,!0):!1}const Le={[mr]:t.FUNC_ADD,[yS]:t.FUNC_SUBTRACT,[SS]:t.FUNC_REVERSE_SUBTRACT};Le[MS]=t.MIN,Le[ES]=t.MAX;const We={[wS]:t.ZERO,[TS]:t.ONE,[AS]:t.SRC_COLOR,[Mf]:t.SRC_ALPHA,[DS]:t.SRC_ALPHA_SATURATE,[PS]:t.DST_COLOR,[RS]:t.DST_ALPHA,[CS]:t.ONE_MINUS_SRC_COLOR,[Ef]:t.ONE_MINUS_SRC_ALPHA,[LS]:t.ONE_MINUS_DST_COLOR,[bS]:t.ONE_MINUS_DST_ALPHA,[NS]:t.CONSTANT_COLOR,[IS]:t.ONE_MINUS_CONSTANT_COLOR,[US]:t.CONSTANT_ALPHA,[FS]:t.ONE_MINUS_CONSTANT_ALPHA};function I(F,xe,q,re,ve,ye,$e,Mt,en,Ke){if(F===$i){g===!0&&(Z(t.BLEND),g=!1);return}if(g===!1&&(K(t.BLEND),g=!0),F!==xS){if(F!==y||Ke!==C){if((m!==mr||_!==mr)&&(t.blendEquation(t.FUNC_ADD),m=mr,_=mr),Ke)switch(F){case ys:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Qp:t.blendFunc(t.ONE,t.ONE);break;case Jp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case em:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case ys:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Qp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Jp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case em:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}u=null,v=null,M=null,D=null,A.set(0,0,0),T=0,y=F,C=Ke}return}ve=ve||xe,ye=ye||q,$e=$e||re,(xe!==m||ve!==_)&&(t.blendEquationSeparate(Le[xe],Le[ve]),m=xe,_=ve),(q!==u||re!==v||ye!==M||$e!==D)&&(t.blendFuncSeparate(We[q],We[re],We[ye],We[$e]),u=q,v=re,M=ye,D=$e),(Mt.equals(A)===!1||en!==T)&&(t.blendColor(Mt.r,Mt.g,Mt.b,en),A.copy(Mt),T=en),y=F,C=!1}function Ot(F,xe){F.side===ci?Z(t.CULL_FACE):K(t.CULL_FACE);let q=F.side===cn;xe&&(q=!q),Ve(q),F.blending===ys&&F.transparent===!1?I($i):I(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),s.setFunc(F.depthFunc),s.setTest(F.depthTest),s.setMask(F.depthWrite),r.setMask(F.colorWrite);const re=F.stencilWrite;o.setTest(re),re&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),it(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?K(t.SAMPLE_ALPHA_TO_COVERAGE):Z(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(F){G!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),G=F)}function Ye(F){F!==vS?(K(t.CULL_FACE),F!==x&&(F===Zp?t.cullFace(t.BACK):F===_S?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Z(t.CULL_FACE),x=F}function De(F){F!==E&&(J&&t.lineWidth(F),E=F)}function it(F,xe,q){F?(K(t.POLYGON_OFFSET_FILL),(z!==xe||B!==q)&&(t.polygonOffset(xe,q),z=xe,B=q)):Z(t.POLYGON_OFFSET_FILL)}function Ne(F){F?K(t.SCISSOR_TEST):Z(t.SCISSOR_TEST)}function R(F){F===void 0&&(F=t.TEXTURE0+Y-1),U!==F&&(t.activeTexture(F),U=F)}function S(F,xe,q){q===void 0&&(U===null?q=t.TEXTURE0+Y-1:q=U);let re=ee[q];re===void 0&&(re={type:void 0,texture:void 0},ee[q]=re),(re.type!==F||re.texture!==xe)&&(U!==q&&(t.activeTexture(q),U=q),t.bindTexture(F,xe||se[F]),re.type=F,re.texture=xe)}function V(){const F=ee[U];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function b(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function L(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function N(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function je(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Me(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(F){Re.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),Re.copy(F))}function me(F){Oe.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),Oe.copy(F))}function ke(F,xe){let q=l.get(xe);q===void 0&&(q=new WeakMap,l.set(xe,q));let re=q.get(F);re===void 0&&(re=t.getUniformBlockIndex(xe,F.name),q.set(F,re))}function Fe(F,xe){const re=l.get(xe).get(F);a.get(xe)!==re&&(t.uniformBlockBinding(xe,re,F.__bindingPointIndex),a.set(xe,re))}function rt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},U=null,ee={},f={},d=new WeakMap,h=[],p=null,g=!1,y=null,m=null,u=null,v=null,_=null,M=null,D=null,A=new He(0,0,0),T=0,C=!1,G=null,x=null,E=null,z=null,B=null,Re.set(0,0,t.canvas.width,t.canvas.height),Oe.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:K,disable:Z,bindFramebuffer:de,drawBuffers:ue,useProgram:ge,setBlending:I,setMaterial:Ot,setFlipSided:Ve,setCullFace:Ye,setLineWidth:De,setPolygonOffset:it,setScissorTest:Ne,activeTexture:R,bindTexture:S,unbindTexture:V,compressedTexImage2D:b,compressedTexImage3D:L,texImage2D:Me,texImage3D:Te,updateUBOMapping:ke,uniformBlockBinding:Fe,texStorage2D:je,texStorage3D:ae,texSubImage2D:N,texSubImage3D:Q,compressedTexSubImage2D:ie,compressedTexSubImage3D:pe,scissor:Ee,viewport:me,reset:rt}}function jm(t,e,n,i){const r=yA(i);switch(n){case b_:return t*e;case L_:return t*e;case D_:return t*e*2;case N_:return t*e/r.components*r.byteLength;case dh:return t*e/r.components*r.byteLength;case I_:return t*e*2/r.components*r.byteLength;case hh:return t*e*2/r.components*r.byteLength;case P_:return t*e*3/r.components*r.byteLength;case Hn:return t*e*4/r.components*r.byteLength;case ph:return t*e*4/r.components*r.byteLength;case il:case rl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case sl:case ol:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ff:case Of:return Math.max(t,16)*Math.max(e,8)/4;case Uf:case kf:return Math.max(t,8)*Math.max(e,8)/2;case Bf:case zf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Hf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Vf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Gf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Wf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case jf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Xf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Yf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case $f:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case qf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Kf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Zf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Qf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Jf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case ed:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case td:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case al:case nd:case id:return Math.ceil(t/4)*Math.ceil(e/4)*16;case U_:case rd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case sd:case od:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function yA(t){switch(t){case Si:case A_:return{byteLength:1,components:1};case Vo:case C_:case Ko:return{byteLength:2,components:1};case uh:case fh:return{byteLength:2,components:4};case br:case ch:case hi:return{byteLength:4,components:1};case R_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function SA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ge,f=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return p?new OffscreenCanvas(R,S):Vl("canvas")}function y(R,S,V){let b=1;const L=Ne(R);if((L.width>V||L.height>V)&&(b=V/Math.max(L.width,L.height)),b<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const N=Math.floor(b*L.width),Q=Math.floor(b*L.height);d===void 0&&(d=g(N,Q));const ie=S?g(N,Q):d;return ie.width=N,ie.height=Q,ie.getContext("2d").drawImage(R,0,0,N,Q),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+N+"x"+Q+")."),ie}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==Cn&&R.minFilter!==Bn}function u(R){t.generateMipmap(R)}function v(R,S,V,b,L=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let N=S;if(S===t.RED&&(V===t.FLOAT&&(N=t.R32F),V===t.HALF_FLOAT&&(N=t.R16F),V===t.UNSIGNED_BYTE&&(N=t.R8)),S===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(N=t.R8UI),V===t.UNSIGNED_SHORT&&(N=t.R16UI),V===t.UNSIGNED_INT&&(N=t.R32UI),V===t.BYTE&&(N=t.R8I),V===t.SHORT&&(N=t.R16I),V===t.INT&&(N=t.R32I)),S===t.RG&&(V===t.FLOAT&&(N=t.RG32F),V===t.HALF_FLOAT&&(N=t.RG16F),V===t.UNSIGNED_BYTE&&(N=t.RG8)),S===t.RG_INTEGER&&(V===t.UNSIGNED_BYTE&&(N=t.RG8UI),V===t.UNSIGNED_SHORT&&(N=t.RG16UI),V===t.UNSIGNED_INT&&(N=t.RG32UI),V===t.BYTE&&(N=t.RG8I),V===t.SHORT&&(N=t.RG16I),V===t.INT&&(N=t.RG32I)),S===t.RGB_INTEGER&&(V===t.UNSIGNED_BYTE&&(N=t.RGB8UI),V===t.UNSIGNED_SHORT&&(N=t.RGB16UI),V===t.UNSIGNED_INT&&(N=t.RGB32UI),V===t.BYTE&&(N=t.RGB8I),V===t.SHORT&&(N=t.RGB16I),V===t.INT&&(N=t.RGB32I)),S===t.RGBA_INTEGER&&(V===t.UNSIGNED_BYTE&&(N=t.RGBA8UI),V===t.UNSIGNED_SHORT&&(N=t.RGBA16UI),V===t.UNSIGNED_INT&&(N=t.RGBA32UI),V===t.BYTE&&(N=t.RGBA8I),V===t.SHORT&&(N=t.RGBA16I),V===t.INT&&(N=t.RGBA32I)),S===t.RGB&&V===t.UNSIGNED_INT_5_9_9_9_REV&&(N=t.RGB9_E5),S===t.RGBA){const Q=L?Ol:Je.getTransfer(b);V===t.FLOAT&&(N=t.RGBA32F),V===t.HALF_FLOAT&&(N=t.RGBA16F),V===t.UNSIGNED_BYTE&&(N=Q===ct?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT_4_4_4_4&&(N=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(N=t.RGB5_A1)}return(N===t.R16F||N===t.R32F||N===t.RG16F||N===t.RG32F||N===t.RGBA16F||N===t.RGBA32F)&&e.get("EXT_color_buffer_float"),N}function _(R,S){let V;return R?S===null||S===br||S===Is?V=t.DEPTH24_STENCIL8:S===hi?V=t.DEPTH32F_STENCIL8:S===Vo&&(V=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===br||S===Is?V=t.DEPTH_COMPONENT24:S===hi?V=t.DEPTH_COMPONENT32F:S===Vo&&(V=t.DEPTH_COMPONENT16),V}function M(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Cn&&R.minFilter!==Bn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function D(R){const S=R.target;S.removeEventListener("dispose",D),T(S),S.isVideoTexture&&f.delete(S)}function A(R){const S=R.target;S.removeEventListener("dispose",A),G(S)}function T(R){const S=i.get(R);if(S.__webglInit===void 0)return;const V=R.source,b=h.get(V);if(b){const L=b[S.__cacheKey];L.usedTimes--,L.usedTimes===0&&C(R),Object.keys(b).length===0&&h.delete(V)}i.remove(R)}function C(R){const S=i.get(R);t.deleteTexture(S.__webglTexture);const V=R.source,b=h.get(V);delete b[S.__cacheKey],o.memory.textures--}function G(R){const S=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let b=0;b<6;b++){if(Array.isArray(S.__webglFramebuffer[b]))for(let L=0;L<S.__webglFramebuffer[b].length;L++)t.deleteFramebuffer(S.__webglFramebuffer[b][L]);else t.deleteFramebuffer(S.__webglFramebuffer[b]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[b])}else{if(Array.isArray(S.__webglFramebuffer))for(let b=0;b<S.__webglFramebuffer.length;b++)t.deleteFramebuffer(S.__webglFramebuffer[b]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let b=0;b<S.__webglColorRenderbuffer.length;b++)S.__webglColorRenderbuffer[b]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[b]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const V=R.textures;for(let b=0,L=V.length;b<L;b++){const N=i.get(V[b]);N.__webglTexture&&(t.deleteTexture(N.__webglTexture),o.memory.textures--),i.remove(V[b])}i.remove(R)}let x=0;function E(){x=0}function z(){const R=x;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),x+=1,R}function B(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function Y(R,S){const V=i.get(R);if(R.isVideoTexture&&De(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){const b=R.image;if(b===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(b.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(V,R,S);return}}n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+S)}function J(R,S){const V=i.get(R);if(R.version>0&&V.__version!==R.version){Oe(V,R,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+S)}function X(R,S){const V=i.get(R);if(R.version>0&&V.__version!==R.version){Oe(V,R,S);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+S)}function te(R,S){const V=i.get(R);if(R.version>0&&V.__version!==R.version){$(V,R,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+S)}const U={[Nf]:t.REPEAT,[yr]:t.CLAMP_TO_EDGE,[If]:t.MIRRORED_REPEAT},ee={[Cn]:t.NEAREST,[XS]:t.NEAREST_MIPMAP_NEAREST,[xa]:t.NEAREST_MIPMAP_LINEAR,[Bn]:t.LINEAR,[Xc]:t.LINEAR_MIPMAP_NEAREST,[Sr]:t.LINEAR_MIPMAP_LINEAR},ne={[KS]:t.NEVER,[nM]:t.ALWAYS,[ZS]:t.LESS,[k_]:t.LEQUAL,[QS]:t.EQUAL,[tM]:t.GEQUAL,[JS]:t.GREATER,[eM]:t.NOTEQUAL};function le(R,S){if(S.type===hi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Bn||S.magFilter===Xc||S.magFilter===xa||S.magFilter===Sr||S.minFilter===Bn||S.minFilter===Xc||S.minFilter===xa||S.minFilter===Sr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,U[S.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,U[S.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,U[S.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,ee[S.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,ee[S.minFilter]),S.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,ne[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Cn||S.minFilter!==xa&&S.minFilter!==Sr||S.type===hi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Re(R,S){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",D));const b=S.source;let L=h.get(b);L===void 0&&(L={},h.set(b,L));const N=B(S);if(N!==R.__cacheKey){L[N]===void 0&&(L[N]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,V=!0),L[N].usedTimes++;const Q=L[R.__cacheKey];Q!==void 0&&(L[R.__cacheKey].usedTimes--,Q.usedTimes===0&&C(S)),R.__cacheKey=N,R.__webglTexture=L[N].texture}return V}function Oe(R,S,V){let b=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(b=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(b=t.TEXTURE_3D);const L=Re(R,S),N=S.source;n.bindTexture(b,R.__webglTexture,t.TEXTURE0+V);const Q=i.get(N);if(N.version!==Q.__version||L===!0){n.activeTexture(t.TEXTURE0+V);const ie=Je.getPrimaries(Je.workingColorSpace),pe=S.colorSpace===ki?null:Je.getPrimaries(S.colorSpace),je=S.colorSpace===ki||ie===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let ae=y(S.image,!1,r.maxTextureSize);ae=it(S,ae);const Me=s.convert(S.format,S.colorSpace),Te=s.convert(S.type);let Ee=v(S.internalFormat,Me,Te,S.colorSpace,S.isVideoTexture);le(b,S);let me;const ke=S.mipmaps,Fe=S.isVideoTexture!==!0,rt=Q.__version===void 0||L===!0,F=N.dataReady,xe=M(S,ae);if(S.isDepthTexture)Ee=_(S.format===Us,S.type),rt&&(Fe?n.texStorage2D(t.TEXTURE_2D,1,Ee,ae.width,ae.height):n.texImage2D(t.TEXTURE_2D,0,Ee,ae.width,ae.height,0,Me,Te,null));else if(S.isDataTexture)if(ke.length>0){Fe&&rt&&n.texStorage2D(t.TEXTURE_2D,xe,Ee,ke[0].width,ke[0].height);for(let q=0,re=ke.length;q<re;q++)me=ke[q],Fe?F&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,me.width,me.height,Me,Te,me.data):n.texImage2D(t.TEXTURE_2D,q,Ee,me.width,me.height,0,Me,Te,me.data);S.generateMipmaps=!1}else Fe?(rt&&n.texStorage2D(t.TEXTURE_2D,xe,Ee,ae.width,ae.height),F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ae.width,ae.height,Me,Te,ae.data)):n.texImage2D(t.TEXTURE_2D,0,Ee,ae.width,ae.height,0,Me,Te,ae.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Fe&&rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,Ee,ke[0].width,ke[0].height,ae.depth);for(let q=0,re=ke.length;q<re;q++)if(me=ke[q],S.format!==Hn)if(Me!==null)if(Fe){if(F)if(S.layerUpdates.size>0){const ve=jm(me.width,me.height,S.format,S.type);for(const ye of S.layerUpdates){const $e=me.data.subarray(ye*ve/me.data.BYTES_PER_ELEMENT,(ye+1)*ve/me.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,ye,me.width,me.height,1,Me,$e,0,0)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,me.width,me.height,ae.depth,Me,me.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,q,Ee,me.width,me.height,ae.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,me.width,me.height,ae.depth,Me,Te,me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,q,Ee,me.width,me.height,ae.depth,0,Me,Te,me.data)}else{Fe&&rt&&n.texStorage2D(t.TEXTURE_2D,xe,Ee,ke[0].width,ke[0].height);for(let q=0,re=ke.length;q<re;q++)me=ke[q],S.format!==Hn?Me!==null?Fe?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,q,0,0,me.width,me.height,Me,me.data):n.compressedTexImage2D(t.TEXTURE_2D,q,Ee,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?F&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,me.width,me.height,Me,Te,me.data):n.texImage2D(t.TEXTURE_2D,q,Ee,me.width,me.height,0,Me,Te,me.data)}else if(S.isDataArrayTexture)if(Fe){if(rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,Ee,ae.width,ae.height,ae.depth),F)if(S.layerUpdates.size>0){const q=jm(ae.width,ae.height,S.format,S.type);for(const re of S.layerUpdates){const ve=ae.data.subarray(re*q/ae.data.BYTES_PER_ELEMENT,(re+1)*q/ae.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,re,ae.width,ae.height,1,Me,Te,ve)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Me,Te,ae.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ee,ae.width,ae.height,ae.depth,0,Me,Te,ae.data);else if(S.isData3DTexture)Fe?(rt&&n.texStorage3D(t.TEXTURE_3D,xe,Ee,ae.width,ae.height,ae.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Me,Te,ae.data)):n.texImage3D(t.TEXTURE_3D,0,Ee,ae.width,ae.height,ae.depth,0,Me,Te,ae.data);else if(S.isFramebufferTexture){if(rt)if(Fe)n.texStorage2D(t.TEXTURE_2D,xe,Ee,ae.width,ae.height);else{let q=ae.width,re=ae.height;for(let ve=0;ve<xe;ve++)n.texImage2D(t.TEXTURE_2D,ve,Ee,q,re,0,Me,Te,null),q>>=1,re>>=1}}else if(ke.length>0){if(Fe&&rt){const q=Ne(ke[0]);n.texStorage2D(t.TEXTURE_2D,xe,Ee,q.width,q.height)}for(let q=0,re=ke.length;q<re;q++)me=ke[q],Fe?F&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,Me,Te,me):n.texImage2D(t.TEXTURE_2D,q,Ee,Me,Te,me);S.generateMipmaps=!1}else if(Fe){if(rt){const q=Ne(ae);n.texStorage2D(t.TEXTURE_2D,xe,Ee,q.width,q.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Me,Te,ae)}else n.texImage2D(t.TEXTURE_2D,0,Ee,Me,Te,ae);m(S)&&u(b),Q.__version=N.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function $(R,S,V){if(S.image.length!==6)return;const b=Re(R,S),L=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+V);const N=i.get(L);if(L.version!==N.__version||b===!0){n.activeTexture(t.TEXTURE0+V);const Q=Je.getPrimaries(Je.workingColorSpace),ie=S.colorSpace===ki?null:Je.getPrimaries(S.colorSpace),pe=S.colorSpace===ki||Q===ie?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const je=S.isCompressedTexture||S.image[0].isCompressedTexture,ae=S.image[0]&&S.image[0].isDataTexture,Me=[];for(let re=0;re<6;re++)!je&&!ae?Me[re]=y(S.image[re],!0,r.maxCubemapSize):Me[re]=ae?S.image[re].image:S.image[re],Me[re]=it(S,Me[re]);const Te=Me[0],Ee=s.convert(S.format,S.colorSpace),me=s.convert(S.type),ke=v(S.internalFormat,Ee,me,S.colorSpace),Fe=S.isVideoTexture!==!0,rt=N.__version===void 0||b===!0,F=L.dataReady;let xe=M(S,Te);le(t.TEXTURE_CUBE_MAP,S);let q;if(je){Fe&&rt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,ke,Te.width,Te.height);for(let re=0;re<6;re++){q=Me[re].mipmaps;for(let ve=0;ve<q.length;ve++){const ye=q[ve];S.format!==Hn?Ee!==null?Fe?F&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,ve,0,0,ye.width,ye.height,Ee,ye.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,ve,ke,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,ve,0,0,ye.width,ye.height,Ee,me,ye.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,ve,ke,ye.width,ye.height,0,Ee,me,ye.data)}}}else{if(q=S.mipmaps,Fe&&rt){q.length>0&&xe++;const re=Ne(Me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,ke,re.width,re.height)}for(let re=0;re<6;re++)if(ae){Fe?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Me[re].width,Me[re].height,Ee,me,Me[re].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ke,Me[re].width,Me[re].height,0,Ee,me,Me[re].data);for(let ve=0;ve<q.length;ve++){const $e=q[ve].image[re].image;Fe?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,ve+1,0,0,$e.width,$e.height,Ee,me,$e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,ve+1,ke,$e.width,$e.height,0,Ee,me,$e.data)}}else{Fe?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ee,me,Me[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ke,Ee,me,Me[re]);for(let ve=0;ve<q.length;ve++){const ye=q[ve];Fe?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,ve+1,0,0,Ee,me,ye.image[re]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,ve+1,ke,Ee,me,ye.image[re])}}}m(S)&&u(t.TEXTURE_CUBE_MAP),N.__version=L.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function se(R,S,V,b,L,N){const Q=s.convert(V.format,V.colorSpace),ie=s.convert(V.type),pe=v(V.internalFormat,Q,ie,V.colorSpace);if(!i.get(S).__hasExternalTextures){const ae=Math.max(1,S.width>>N),Me=Math.max(1,S.height>>N);L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?n.texImage3D(L,N,pe,ae,Me,S.depth,0,Q,ie,null):n.texImage2D(L,N,pe,ae,Me,0,Q,ie,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Ye(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,b,L,i.get(V).__webglTexture,0,Ve(S)):(L===t.TEXTURE_2D||L>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&L<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,b,L,i.get(V).__webglTexture,N),n.bindFramebuffer(t.FRAMEBUFFER,null)}function K(R,S,V){if(t.bindRenderbuffer(t.RENDERBUFFER,R),S.depthBuffer){const b=S.depthTexture,L=b&&b.isDepthTexture?b.type:null,N=_(S.stencilBuffer,L),Q=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=Ve(S);Ye(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,N,S.width,S.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,N,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,N,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,R)}else{const b=S.textures;for(let L=0;L<b.length;L++){const N=b[L],Q=s.convert(N.format,N.colorSpace),ie=s.convert(N.type),pe=v(N.internalFormat,Q,ie,N.colorSpace),je=Ve(S);V&&Ye(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,je,pe,S.width,S.height):Ye(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,je,pe,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,pe,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Z(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Y(S.depthTexture,0);const b=i.get(S.depthTexture).__webglTexture,L=Ve(S);if(S.depthTexture.format===Ss)Ye(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,b,0,L):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,b,0);else if(S.depthTexture.format===Us)Ye(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,b,0,L):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,b,0);else throw new Error("Unknown depthTexture format")}function de(R){const S=i.get(R),V=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const b=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),b){const L=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,b.removeEventListener("dispose",L)};b.addEventListener("dispose",L),S.__depthDisposeCallback=L}S.__boundDepthTexture=b}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Z(S.__webglFramebuffer,R)}else if(V){S.__webglDepthbuffer=[];for(let b=0;b<6;b++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[b]),S.__webglDepthbuffer[b]===void 0)S.__webglDepthbuffer[b]=t.createRenderbuffer(),K(S.__webglDepthbuffer[b],R,!1);else{const L=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,N=S.__webglDepthbuffer[b];t.bindRenderbuffer(t.RENDERBUFFER,N),t.framebufferRenderbuffer(t.FRAMEBUFFER,L,t.RENDERBUFFER,N)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),K(S.__webglDepthbuffer,R,!1);else{const b=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,L=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,L),t.framebufferRenderbuffer(t.FRAMEBUFFER,b,t.RENDERBUFFER,L)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ue(R,S,V){const b=i.get(R);S!==void 0&&se(b.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&de(R)}function ge(R){const S=R.texture,V=i.get(R),b=i.get(S);R.addEventListener("dispose",A);const L=R.textures,N=R.isWebGLCubeRenderTarget===!0,Q=L.length>1;if(Q||(b.__webglTexture===void 0&&(b.__webglTexture=t.createTexture()),b.__version=S.version,o.memory.textures++),N){V.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[ie]=[];for(let pe=0;pe<S.mipmaps.length;pe++)V.__webglFramebuffer[ie][pe]=t.createFramebuffer()}else V.__webglFramebuffer[ie]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let ie=0;ie<S.mipmaps.length;ie++)V.__webglFramebuffer[ie]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(Q)for(let ie=0,pe=L.length;ie<pe;ie++){const je=i.get(L[ie]);je.__webglTexture===void 0&&(je.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&Ye(R)===!1){V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ie=0;ie<L.length;ie++){const pe=L[ie];V.__webglColorRenderbuffer[ie]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[ie]);const je=s.convert(pe.format,pe.colorSpace),ae=s.convert(pe.type),Me=v(pe.internalFormat,je,ae,pe.colorSpace,R.isXRRenderTarget===!0),Te=Ve(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Te,Me,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ie,t.RENDERBUFFER,V.__webglColorRenderbuffer[ie])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),K(V.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(N){n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture),le(t.TEXTURE_CUBE_MAP,S);for(let ie=0;ie<6;ie++)if(S.mipmaps&&S.mipmaps.length>0)for(let pe=0;pe<S.mipmaps.length;pe++)se(V.__webglFramebuffer[ie][pe],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,pe);else se(V.__webglFramebuffer[ie],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);m(S)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Q){for(let ie=0,pe=L.length;ie<pe;ie++){const je=L[ie],ae=i.get(je);n.bindTexture(t.TEXTURE_2D,ae.__webglTexture),le(t.TEXTURE_2D,je),se(V.__webglFramebuffer,R,je,t.COLOR_ATTACHMENT0+ie,t.TEXTURE_2D,0),m(je)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let ie=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ie=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ie,b.__webglTexture),le(ie,S),S.mipmaps&&S.mipmaps.length>0)for(let pe=0;pe<S.mipmaps.length;pe++)se(V.__webglFramebuffer[pe],R,S,t.COLOR_ATTACHMENT0,ie,pe);else se(V.__webglFramebuffer,R,S,t.COLOR_ATTACHMENT0,ie,0);m(S)&&u(ie),n.unbindTexture()}R.depthBuffer&&de(R)}function Le(R){const S=R.textures;for(let V=0,b=S.length;V<b;V++){const L=S[V];if(m(L)){const N=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Q=i.get(L).__webglTexture;n.bindTexture(N,Q),u(N),n.unbindTexture()}}}const We=[],I=[];function Ot(R){if(R.samples>0){if(Ye(R)===!1){const S=R.textures,V=R.width,b=R.height;let L=t.COLOR_BUFFER_BIT;const N=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Q=i.get(R),ie=S.length>1;if(ie)for(let pe=0;pe<S.length;pe++)n.bindFramebuffer(t.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Q.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Q.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Q.__webglFramebuffer);for(let pe=0;pe<S.length;pe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(L|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(L|=t.STENCIL_BUFFER_BIT)),ie){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Q.__webglColorRenderbuffer[pe]);const je=i.get(S[pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,je,0)}t.blitFramebuffer(0,0,V,b,0,0,V,b,L,t.NEAREST),l===!0&&(We.length=0,I.length=0,We.push(t.COLOR_ATTACHMENT0+pe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(We.push(N),I.push(N),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,I)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,We))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ie)for(let pe=0;pe<S.length;pe++){n.bindFramebuffer(t.FRAMEBUFFER,Q.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,Q.__webglColorRenderbuffer[pe]);const je=i.get(S[pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Q.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,je,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Q.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function Ve(R){return Math.min(r.maxSamples,R.samples)}function Ye(R){const S=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function De(R){const S=o.render.frame;f.get(R)!==S&&(f.set(R,S),R.update())}function it(R,S){const V=R.colorSpace,b=R.format,L=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==ir&&V!==ki&&(Je.getTransfer(V)===ct?(b!==Hn||L!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),S}function Ne(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=E,this.setTexture2D=Y,this.setTexture2DArray=J,this.setTexture3D=X,this.setTextureCube=te,this.rebindTextures=ue,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=se,this.useMultisampledRTT=Ye}function MA(t,e){function n(i,r=ki){let s;const o=Je.getTransfer(r);if(i===Si)return t.UNSIGNED_BYTE;if(i===uh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===fh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===R_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===A_)return t.BYTE;if(i===C_)return t.SHORT;if(i===Vo)return t.UNSIGNED_SHORT;if(i===ch)return t.INT;if(i===br)return t.UNSIGNED_INT;if(i===hi)return t.FLOAT;if(i===Ko)return t.HALF_FLOAT;if(i===b_)return t.ALPHA;if(i===P_)return t.RGB;if(i===Hn)return t.RGBA;if(i===L_)return t.LUMINANCE;if(i===D_)return t.LUMINANCE_ALPHA;if(i===Ss)return t.DEPTH_COMPONENT;if(i===Us)return t.DEPTH_STENCIL;if(i===N_)return t.RED;if(i===dh)return t.RED_INTEGER;if(i===I_)return t.RG;if(i===hh)return t.RG_INTEGER;if(i===ph)return t.RGBA_INTEGER;if(i===il||i===rl||i===sl||i===ol)if(o===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===il)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===il)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===rl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ol)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Uf||i===Ff||i===kf||i===Of)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Uf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ff)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===kf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Of)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Bf||i===zf||i===Hf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Bf||i===zf)return o===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Hf)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Vf||i===Gf||i===Wf||i===jf||i===Xf||i===Yf||i===$f||i===qf||i===Kf||i===Zf||i===Qf||i===Jf||i===ed||i===td)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Vf)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Gf)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wf)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===jf)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xf)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Yf)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===$f)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===qf)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Kf)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zf)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Qf)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Jf)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ed)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===td)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===al||i===nd||i===id)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===al)return o===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===nd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===id)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===U_||i===rd||i===sd||i===od)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===al)return s.COMPRESSED_RED_RGTC1_EXT;if(i===rd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===sd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===od)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Is?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class EA extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class hs extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wA={type:"move"};class yu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),u=this._getHandJoint(c,y);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new hs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const TA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,AA=`
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

}`;class CA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Kt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ji({vertexShader:TA,fragmentShader:AA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new rn(new hc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class RA extends zs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,d=null,h=null,p=null,g=null;const y=new CA,m=n.getContextAttributes();let u=null,v=null;const _=[],M=[],D=new Ge;let A=null;const T=new wn;T.layers.enable(1),T.viewport=new _t;const C=new wn;C.layers.enable(2),C.viewport=new _t;const G=[T,C],x=new EA;x.layers.enable(1),x.layers.enable(2);let E=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let se=_[$];return se===void 0&&(se=new yu,_[$]=se),se.getTargetRaySpace()},this.getControllerGrip=function($){let se=_[$];return se===void 0&&(se=new yu,_[$]=se),se.getGripSpace()},this.getHand=function($){let se=_[$];return se===void 0&&(se=new yu,_[$]=se),se.getHandSpace()};function B($){const se=M.indexOf($.inputSource);if(se===-1)return;const K=_[se];K!==void 0&&(K.update($.inputSource,$.frame,c||o),K.dispatchEvent({type:$.type,data:$.inputSource}))}function Y(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",J);for(let $=0;$<_.length;$++){const se=M[$];se!==null&&(M[$]=null,_[$].disconnect(se))}E=null,z=null,y.reset(),e.setRenderTarget(u),p=null,h=null,d=null,r=null,v=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(D),r.renderState.layers===void 0){const se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,se),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Pr(p.framebufferWidth,p.framebufferHeight,{format:Hn,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let se=null,K=null,Z=null;m.depth&&(Z=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,se=m.stencil?Us:Ss,K=m.stencil?Is:br);const de={colorFormat:n.RGBA8,depthFormat:Z,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(de),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Pr(h.textureWidth,h.textureHeight,{format:Hn,type:Si,depthTexture:new q_(h.textureWidth,h.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Oe.setContext(r),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function J($){for(let se=0;se<$.removed.length;se++){const K=$.removed[se],Z=M.indexOf(K);Z>=0&&(M[Z]=null,_[Z].disconnect(K))}for(let se=0;se<$.added.length;se++){const K=$.added[se];let Z=M.indexOf(K);if(Z===-1){for(let ue=0;ue<_.length;ue++)if(ue>=M.length){M.push(K),Z=ue;break}else if(M[ue]===null){M[ue]=K,Z=ue;break}if(Z===-1)break}const de=_[Z];de&&de.connect(K)}}const X=new H,te=new H;function U($,se,K){X.setFromMatrixPosition(se.matrixWorld),te.setFromMatrixPosition(K.matrixWorld);const Z=X.distanceTo(te),de=se.projectionMatrix.elements,ue=K.projectionMatrix.elements,ge=de[14]/(de[10]-1),Le=de[14]/(de[10]+1),We=(de[9]+1)/de[5],I=(de[9]-1)/de[5],Ot=(de[8]-1)/de[0],Ve=(ue[8]+1)/ue[0],Ye=ge*Ot,De=ge*Ve,it=Z/(-Ot+Ve),Ne=it*-Ot;if(se.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ne),$.translateZ(it),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),de[10]===-1)$.projectionMatrix.copy(se.projectionMatrix),$.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const R=ge+it,S=Le+it,V=Ye-Ne,b=De+(Z-Ne),L=We*Le/S*R,N=I*Le/S*R;$.projectionMatrix.makePerspective(V,b,L,N,R,S),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ee($,se){se===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(se.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let se=$.near,K=$.far;y.texture!==null&&(y.depthNear>0&&(se=y.depthNear),y.depthFar>0&&(K=y.depthFar)),x.near=C.near=T.near=se,x.far=C.far=T.far=K,(E!==x.near||z!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,z=x.far);const Z=$.parent,de=x.cameras;ee(x,Z);for(let ue=0;ue<de.length;ue++)ee(de[ue],Z);de.length===2?U(x,T,C):x.projectionMatrix.copy(T.projectionMatrix),ne($,x,Z)};function ne($,se,K){K===null?$.matrix.copy(se.matrixWorld):($.matrix.copy(K.matrixWorld),$.matrix.invert(),$.matrix.multiply(se.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(se.projectionMatrix),$.projectionMatrixInverse.copy(se.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Go*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let le=null;function Re($,se){if(f=se.getViewerPose(c||o),g=se,f!==null){const K=f.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let Z=!1;K.length!==x.cameras.length&&(x.cameras.length=0,Z=!0);for(let ue=0;ue<K.length;ue++){const ge=K[ue];let Le=null;if(p!==null)Le=p.getViewport(ge);else{const I=d.getViewSubImage(h,ge);Le=I.viewport,ue===0&&(e.setRenderTargetTextures(v,I.colorTexture,h.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(v))}let We=G[ue];We===void 0&&(We=new wn,We.layers.enable(ue),We.viewport=new _t,G[ue]=We),We.matrix.fromArray(ge.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(ge.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(Le.x,Le.y,Le.width,Le.height),ue===0&&(x.matrix.copy(We.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Z===!0&&x.cameras.push(We)}const de=r.enabledFeatures;if(de&&de.includes("depth-sensing")){const ue=d.getDepthInformation(K[0]);ue&&ue.isValid&&ue.texture&&y.init(e,ue,r.renderState)}}for(let K=0;K<_.length;K++){const Z=M[K],de=_[K];Z!==null&&de!==void 0&&de.update(Z,se,c||o)}le&&le($,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),g=null}const Oe=new Y_;Oe.setAnimationLoop(Re),this.setAnimationLoop=function($){le=$},this.dispose=function(){}}}const ur=new Jn,bA=new ft;function PA(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,W_(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,v,_,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),d(m,u)):u.isMeshPhongMaterial?(s(m,u),f(m,u)):u.isMeshStandardMaterial?(s(m,u),h(m,u),u.isMeshPhysicalMaterial&&p(m,u,M)):u.isMeshMatcapMaterial?(s(m,u),g(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),y(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,v,_):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===cn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===cn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const v=e.get(u),_=v.envMap,M=v.envMapRotation;_&&(m.envMap.value=_,ur.copy(M),ur.x*=-1,ur.y*=-1,ur.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),m.envMapRotation.value.setFromMatrix4(bA.makeRotationFromEuler(ur)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,v,_){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*v,m.scale.value=_*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function f(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,v){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===cn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function y(m,u){const v=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function LA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){const M=_.program;i.uniformBlockBinding(v,M)}function c(v,_){let M=r[v.id];M===void 0&&(g(v),M=f(v),r[v.id]=M,v.addEventListener("dispose",m));const D=_.program;i.updateUBOMapping(v,D);const A=e.render.frame;s[v.id]!==A&&(h(v),s[v.id]=A)}function f(v){const _=d();v.__bindingPointIndex=_;const M=t.createBuffer(),D=v.__size,A=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,D,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,M),M}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const _=r[v.id],M=v.uniforms,D=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let A=0,T=M.length;A<T;A++){const C=Array.isArray(M[A])?M[A]:[M[A]];for(let G=0,x=C.length;G<x;G++){const E=C[G];if(p(E,A,G,D)===!0){const z=E.__offset,B=Array.isArray(E.value)?E.value:[E.value];let Y=0;for(let J=0;J<B.length;J++){const X=B[J],te=y(X);typeof X=="number"||typeof X=="boolean"?(E.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,z+Y,E.__data)):X.isMatrix3?(E.__data[0]=X.elements[0],E.__data[1]=X.elements[1],E.__data[2]=X.elements[2],E.__data[3]=0,E.__data[4]=X.elements[3],E.__data[5]=X.elements[4],E.__data[6]=X.elements[5],E.__data[7]=0,E.__data[8]=X.elements[6],E.__data[9]=X.elements[7],E.__data[10]=X.elements[8],E.__data[11]=0):(X.toArray(E.__data,Y),Y+=te.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,E.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,_,M,D){const A=v.value,T=_+"_"+M;if(D[T]===void 0)return typeof A=="number"||typeof A=="boolean"?D[T]=A:D[T]=A.clone(),!0;{const C=D[T];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return D[T]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(v){const _=v.uniforms;let M=0;const D=16;for(let T=0,C=_.length;T<C;T++){const G=Array.isArray(_[T])?_[T]:[_[T]];for(let x=0,E=G.length;x<E;x++){const z=G[x],B=Array.isArray(z.value)?z.value:[z.value];for(let Y=0,J=B.length;Y<J;Y++){const X=B[Y],te=y(X),U=M%D,ee=U%te.boundary,ne=U+ee;M+=ee,ne!==0&&D-ne<te.storage&&(M+=D-ne),z.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=M,M+=te.storage}}}const A=M%D;return A>0&&(M+=D-A),v.__size=M,v.__cache={},this}function y(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const M=o.indexOf(_.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class DA{constructor(e={}){const{canvas:n=xM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),g=new Int32Array(4);let y=null,m=null;const u=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$n,this.toneMapping=qi,this.toneMappingExposure=1;const _=this;let M=!1,D=0,A=0,T=null,C=-1,G=null;const x=new _t,E=new _t;let z=null;const B=new He(0);let Y=0,J=n.width,X=n.height,te=1,U=null,ee=null;const ne=new _t(0,0,J,X),le=new _t(0,0,J,X);let Re=!1;const Oe=new yh;let $=!1,se=!1;const K=new ft,Z=new ft,de=new H,ue=new _t,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Le=!1;function We(){return T===null?te:1}let I=i;function Ot(w,k){return n.getContext(w,k)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${lh}`),n.addEventListener("webglcontextlost",re,!1),n.addEventListener("webglcontextrestored",ve,!1),n.addEventListener("webglcontextcreationerror",ye,!1),I===null){const k="webgl2";if(I=Ot(k,w),I===null)throw Ot(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ve,Ye,De,it,Ne,R,S,V,b,L,N,Q,ie,pe,je,ae,Me,Te,Ee,me,ke,Fe,rt,F;function xe(){Ve=new kT(I),Ve.init(),Fe=new MA(I,Ve),Ye=new LT(I,Ve,e,Fe),De=new xA(I),Ye.reverseDepthBuffer&&De.buffers.depth.setReversed(!0),it=new zT(I),Ne=new rA,R=new SA(I,Ve,De,Ne,Ye,Fe,it),S=new NT(_),V=new FT(_),b=new YM(I),rt=new bT(I,b),L=new OT(I,b,it,rt),N=new VT(I,L,b,it),Ee=new HT(I,Ye,R),ae=new DT(Ne),Q=new iA(_,S,V,Ve,Ye,rt,ae),ie=new PA(_,Ne),pe=new oA,je=new dA(Ve),Te=new RT(_,S,V,De,N,h,l),Me=new vA(_,N,Ye),F=new LA(I,it,Ye,De),me=new PT(I,Ve,it),ke=new BT(I,Ve,it),it.programs=Q.programs,_.capabilities=Ye,_.extensions=Ve,_.properties=Ne,_.renderLists=pe,_.shadowMap=Me,_.state=De,_.info=it}xe();const q=new RA(_,I);this.xr=q,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=Ve.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ve.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(w){w!==void 0&&(te=w,this.setSize(J,X,!1))},this.getSize=function(w){return w.set(J,X)},this.setSize=function(w,k,W=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=w,X=k,n.width=Math.floor(w*te),n.height=Math.floor(k*te),W===!0&&(n.style.width=w+"px",n.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(J*te,X*te).floor()},this.setDrawingBufferSize=function(w,k,W){J=w,X=k,te=W,n.width=Math.floor(w*W),n.height=Math.floor(k*W),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(x)},this.getViewport=function(w){return w.copy(ne)},this.setViewport=function(w,k,W,j){w.isVector4?ne.set(w.x,w.y,w.z,w.w):ne.set(w,k,W,j),De.viewport(x.copy(ne).multiplyScalar(te).round())},this.getScissor=function(w){return w.copy(le)},this.setScissor=function(w,k,W,j){w.isVector4?le.set(w.x,w.y,w.z,w.w):le.set(w,k,W,j),De.scissor(E.copy(le).multiplyScalar(te).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(w){De.setScissorTest(Re=w)},this.setOpaqueSort=function(w){U=w},this.setTransparentSort=function(w){ee=w},this.getClearColor=function(w){return w.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(w=!0,k=!0,W=!0){let j=0;if(w){let O=!1;if(T!==null){const ce=T.texture.format;O=ce===ph||ce===hh||ce===dh}if(O){const ce=T.texture.type,_e=ce===Si||ce===br||ce===Vo||ce===Is||ce===uh||ce===fh,we=Te.getClearColor(),Ae=Te.getClearAlpha(),Ie=we.r,Ue=we.g,Ce=we.b;_e?(p[0]=Ie,p[1]=Ue,p[2]=Ce,p[3]=Ae,I.clearBufferuiv(I.COLOR,0,p)):(g[0]=Ie,g[1]=Ue,g[2]=Ce,g[3]=Ae,I.clearBufferiv(I.COLOR,0,g))}else j|=I.COLOR_BUFFER_BIT}k&&(j|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),W&&(j|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",re,!1),n.removeEventListener("webglcontextrestored",ve,!1),n.removeEventListener("webglcontextcreationerror",ye,!1),pe.dispose(),je.dispose(),Ne.dispose(),S.dispose(),V.dispose(),N.dispose(),rt.dispose(),F.dispose(),Q.dispose(),q.dispose(),q.removeEventListener("sessionstart",Th),q.removeEventListener("sessionend",Ah),rr.stop()};function re(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const w=it.autoReset,k=Me.enabled,W=Me.autoUpdate,j=Me.needsUpdate,O=Me.type;xe(),it.autoReset=w,Me.enabled=k,Me.autoUpdate=W,Me.needsUpdate=j,Me.type=O}function ye(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function $e(w){const k=w.target;k.removeEventListener("dispose",$e),Mt(k)}function Mt(w){en(w),Ne.remove(w)}function en(w){const k=Ne.get(w).programs;k!==void 0&&(k.forEach(function(W){Q.releaseProgram(W)}),w.isShaderMaterial&&Q.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,W,j,O,ce){k===null&&(k=ge);const _e=O.isMesh&&O.matrixWorld.determinant()<0,we=o0(w,k,W,j,O);De.setMaterial(j,_e);let Ae=W.index,Ie=1;if(j.wireframe===!0){if(Ae=L.getWireframeAttribute(W),Ae===void 0)return;Ie=2}const Ue=W.drawRange,Ce=W.attributes.position;let et=Ue.start*Ie,at=(Ue.start+Ue.count)*Ie;ce!==null&&(et=Math.max(et,ce.start*Ie),at=Math.min(at,(ce.start+ce.count)*Ie)),Ae!==null?(et=Math.max(et,0),at=Math.min(at,Ae.count)):Ce!=null&&(et=Math.max(et,0),at=Math.min(at,Ce.count));const gt=at-et;if(gt<0||gt===1/0)return;rt.setup(O,j,we,W,Ae);let un,Ze=me;if(Ae!==null&&(un=b.get(Ae),Ze=ke,Ze.setIndex(un)),O.isMesh)j.wireframe===!0?(De.setLineWidth(j.wireframeLinewidth*We()),Ze.setMode(I.LINES)):Ze.setMode(I.TRIANGLES);else if(O.isLine){let be=j.linewidth;be===void 0&&(be=1),De.setLineWidth(be*We()),O.isLineSegments?Ze.setMode(I.LINES):O.isLineLoop?Ze.setMode(I.LINE_LOOP):Ze.setMode(I.LINE_STRIP)}else O.isPoints?Ze.setMode(I.POINTS):O.isSprite&&Ze.setMode(I.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Ze.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))Ze.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const be=O._multiDrawStarts,It=O._multiDrawCounts,Qe=O._multiDrawCount,Ln=Ae?b.get(Ae).bytesPerElement:1,Ir=Ne.get(j).currentProgram.getUniforms();for(let fn=0;fn<Qe;fn++)Ir.setValue(I,"_gl_DrawID",fn),Ze.render(be[fn]/Ln,It[fn])}else if(O.isInstancedMesh)Ze.renderInstances(et,gt,O.count);else if(W.isInstancedBufferGeometry){const be=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,It=Math.min(W.instanceCount,be);Ze.renderInstances(et,gt,It)}else Ze.render(et,gt)};function Ke(w,k,W){w.transparent===!0&&w.side===ci&&w.forceSinglePass===!1?(w.side=cn,w.needsUpdate=!0,ta(w,k,W),w.side=Qi,w.needsUpdate=!0,ta(w,k,W),w.side=ci):ta(w,k,W)}this.compile=function(w,k,W=null){W===null&&(W=w),m=je.get(W),m.init(k),v.push(m),W.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),w!==W&&w.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();const j=new Set;return w.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ce=O.material;if(ce)if(Array.isArray(ce))for(let _e=0;_e<ce.length;_e++){const we=ce[_e];Ke(we,W,O),j.add(we)}else Ke(ce,W,O),j.add(ce)}),v.pop(),m=null,j},this.compileAsync=function(w,k,W=null){const j=this.compile(w,k,W);return new Promise(O=>{function ce(){if(j.forEach(function(_e){Ne.get(_e).currentProgram.isReady()&&j.delete(_e)}),j.size===0){O(w);return}setTimeout(ce,10)}Ve.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let tn=null;function ei(w){tn&&tn(w)}function Th(){rr.stop()}function Ah(){rr.start()}const rr=new Y_;rr.setAnimationLoop(ei),typeof self<"u"&&rr.setContext(self),this.setAnimationLoop=function(w){tn=w,q.setAnimationLoop(w),w===null?rr.stop():rr.start()},q.addEventListener("sessionstart",Th),q.addEventListener("sessionend",Ah),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(k),k=q.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,k,T),m=je.get(w,v.length),m.init(k),v.push(m),Z.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Oe.setFromProjectionMatrix(Z),se=this.localClippingEnabled,$=ae.init(this.clippingPlanes,se),y=pe.get(w,u.length),y.init(),u.push(y),q.enabled===!0&&q.isPresenting===!0){const ce=_.xr.getDepthSensingMesh();ce!==null&&gc(ce,k,-1/0,_.sortObjects)}gc(w,k,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(U,ee),Le=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Le&&Te.addToRenderList(y,w),this.info.render.frame++,$===!0&&ae.beginShadows();const W=m.state.shadowsArray;Me.render(W,w,k),$===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=y.opaque,O=y.transmissive;if(m.setupLights(),k.isArrayCamera){const ce=k.cameras;if(O.length>0)for(let _e=0,we=ce.length;_e<we;_e++){const Ae=ce[_e];Rh(j,O,w,Ae)}Le&&Te.render(w);for(let _e=0,we=ce.length;_e<we;_e++){const Ae=ce[_e];Ch(y,w,Ae,Ae.viewport)}}else O.length>0&&Rh(j,O,w,k),Le&&Te.render(w),Ch(y,w,k);T!==null&&(R.updateMultisampleRenderTarget(T),R.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(_,w,k),rt.resetDefaultState(),C=-1,G=null,v.pop(),v.length>0?(m=v[v.length-1],$===!0&&ae.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function gc(w,k,W,j){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Oe.intersectsSprite(w)){j&&ue.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Z);const _e=N.update(w),we=w.material;we.visible&&y.push(w,_e,we,W,ue.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Oe.intersectsObject(w))){const _e=N.update(w),we=w.material;if(j&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ue.copy(w.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),ue.copy(_e.boundingSphere.center)),ue.applyMatrix4(w.matrixWorld).applyMatrix4(Z)),Array.isArray(we)){const Ae=_e.groups;for(let Ie=0,Ue=Ae.length;Ie<Ue;Ie++){const Ce=Ae[Ie],et=we[Ce.materialIndex];et&&et.visible&&y.push(w,_e,et,W,ue.z,Ce)}}else we.visible&&y.push(w,_e,we,W,ue.z,null)}}const ce=w.children;for(let _e=0,we=ce.length;_e<we;_e++)gc(ce[_e],k,W,j)}function Ch(w,k,W,j){const O=w.opaque,ce=w.transmissive,_e=w.transparent;m.setupLightsView(W),$===!0&&ae.setGlobalState(_.clippingPlanes,W),j&&De.viewport(x.copy(j)),O.length>0&&ea(O,k,W),ce.length>0&&ea(ce,k,W),_e.length>0&&ea(_e,k,W),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function Rh(w,k,W,j){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[j.id]===void 0&&(m.state.transmissionRenderTarget[j.id]=new Pr(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?Ko:Si,minFilter:Sr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const ce=m.state.transmissionRenderTarget[j.id],_e=j.viewport||x;ce.setSize(_e.z,_e.w);const we=_.getRenderTarget();_.setRenderTarget(ce),_.getClearColor(B),Y=_.getClearAlpha(),Y<1&&_.setClearColor(16777215,.5),_.clear(),Le&&Te.render(W);const Ae=_.toneMapping;_.toneMapping=qi;const Ie=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),m.setupLightsView(j),$===!0&&ae.setGlobalState(_.clippingPlanes,j),ea(w,W,j),R.updateMultisampleRenderTarget(ce),R.updateRenderTargetMipmap(ce),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let Ce=0,et=k.length;Ce<et;Ce++){const at=k[Ce],gt=at.object,un=at.geometry,Ze=at.material,be=at.group;if(Ze.side===ci&&gt.layers.test(j.layers)){const It=Ze.side;Ze.side=cn,Ze.needsUpdate=!0,bh(gt,W,j,un,Ze,be),Ze.side=It,Ze.needsUpdate=!0,Ue=!0}}Ue===!0&&(R.updateMultisampleRenderTarget(ce),R.updateRenderTargetMipmap(ce))}_.setRenderTarget(we),_.setClearColor(B,Y),Ie!==void 0&&(j.viewport=Ie),_.toneMapping=Ae}function ea(w,k,W){const j=k.isScene===!0?k.overrideMaterial:null;for(let O=0,ce=w.length;O<ce;O++){const _e=w[O],we=_e.object,Ae=_e.geometry,Ie=j===null?_e.material:j,Ue=_e.group;we.layers.test(W.layers)&&bh(we,k,W,Ae,Ie,Ue)}}function bh(w,k,W,j,O,ce){w.onBeforeRender(_,k,W,j,O,ce),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(_,k,W,j,w,ce),O.transparent===!0&&O.side===ci&&O.forceSinglePass===!1?(O.side=cn,O.needsUpdate=!0,_.renderBufferDirect(W,k,j,O,w,ce),O.side=Qi,O.needsUpdate=!0,_.renderBufferDirect(W,k,j,O,w,ce),O.side=ci):_.renderBufferDirect(W,k,j,O,w,ce),w.onAfterRender(_,k,W,j,O,ce)}function ta(w,k,W){k.isScene!==!0&&(k=ge);const j=Ne.get(w),O=m.state.lights,ce=m.state.shadowsArray,_e=O.state.version,we=Q.getParameters(w,O.state,ce,k,W),Ae=Q.getProgramCacheKey(we);let Ie=j.programs;j.environment=w.isMeshStandardMaterial?k.environment:null,j.fog=k.fog,j.envMap=(w.isMeshStandardMaterial?V:S).get(w.envMap||j.environment),j.envMapRotation=j.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,Ie===void 0&&(w.addEventListener("dispose",$e),Ie=new Map,j.programs=Ie);let Ue=Ie.get(Ae);if(Ue!==void 0){if(j.currentProgram===Ue&&j.lightsStateVersion===_e)return Lh(w,we),Ue}else we.uniforms=Q.getUniforms(w),w.onBeforeCompile(we,_),Ue=Q.acquireProgram(we,Ae),Ie.set(Ae,Ue),j.uniforms=we.uniforms;const Ce=j.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ce.clippingPlanes=ae.uniform),Lh(w,we),j.needsLights=l0(w),j.lightsStateVersion=_e,j.needsLights&&(Ce.ambientLightColor.value=O.state.ambient,Ce.lightProbe.value=O.state.probe,Ce.directionalLights.value=O.state.directional,Ce.directionalLightShadows.value=O.state.directionalShadow,Ce.spotLights.value=O.state.spot,Ce.spotLightShadows.value=O.state.spotShadow,Ce.rectAreaLights.value=O.state.rectArea,Ce.ltc_1.value=O.state.rectAreaLTC1,Ce.ltc_2.value=O.state.rectAreaLTC2,Ce.pointLights.value=O.state.point,Ce.pointLightShadows.value=O.state.pointShadow,Ce.hemisphereLights.value=O.state.hemi,Ce.directionalShadowMap.value=O.state.directionalShadowMap,Ce.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ce.spotShadowMap.value=O.state.spotShadowMap,Ce.spotLightMatrix.value=O.state.spotLightMatrix,Ce.spotLightMap.value=O.state.spotLightMap,Ce.pointShadowMap.value=O.state.pointShadowMap,Ce.pointShadowMatrix.value=O.state.pointShadowMatrix),j.currentProgram=Ue,j.uniformsList=null,Ue}function Ph(w){if(w.uniformsList===null){const k=w.currentProgram.getUniforms();w.uniformsList=cl.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function Lh(w,k){const W=Ne.get(w);W.outputColorSpace=k.outputColorSpace,W.batching=k.batching,W.batchingColor=k.batchingColor,W.instancing=k.instancing,W.instancingColor=k.instancingColor,W.instancingMorph=k.instancingMorph,W.skinning=k.skinning,W.morphTargets=k.morphTargets,W.morphNormals=k.morphNormals,W.morphColors=k.morphColors,W.morphTargetsCount=k.morphTargetsCount,W.numClippingPlanes=k.numClippingPlanes,W.numIntersection=k.numClipIntersection,W.vertexAlphas=k.vertexAlphas,W.vertexTangents=k.vertexTangents,W.toneMapping=k.toneMapping}function o0(w,k,W,j,O){k.isScene!==!0&&(k=ge),R.resetTextureUnits();const ce=k.fog,_e=j.isMeshStandardMaterial?k.environment:null,we=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ir,Ae=(j.isMeshStandardMaterial?V:S).get(j.envMap||_e),Ie=j.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ue=!!W.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ce=!!W.morphAttributes.position,et=!!W.morphAttributes.normal,at=!!W.morphAttributes.color;let gt=qi;j.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(gt=_.toneMapping);const un=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ze=un!==void 0?un.length:0,be=Ne.get(j),It=m.state.lights;if($===!0&&(se===!0||w!==G)){const yn=w===G&&j.id===C;ae.setState(j,w,yn)}let Qe=!1;j.version===be.__version?(be.needsLights&&be.lightsStateVersion!==It.state.version||be.outputColorSpace!==we||O.isBatchedMesh&&be.batching===!1||!O.isBatchedMesh&&be.batching===!0||O.isBatchedMesh&&be.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&be.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&be.instancing===!1||!O.isInstancedMesh&&be.instancing===!0||O.isSkinnedMesh&&be.skinning===!1||!O.isSkinnedMesh&&be.skinning===!0||O.isInstancedMesh&&be.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&be.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&be.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&be.instancingMorph===!1&&O.morphTexture!==null||be.envMap!==Ae||j.fog===!0&&be.fog!==ce||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==ae.numPlanes||be.numIntersection!==ae.numIntersection)||be.vertexAlphas!==Ie||be.vertexTangents!==Ue||be.morphTargets!==Ce||be.morphNormals!==et||be.morphColors!==at||be.toneMapping!==gt||be.morphTargetsCount!==Ze)&&(Qe=!0):(Qe=!0,be.__version=j.version);let Ln=be.currentProgram;Qe===!0&&(Ln=ta(j,k,O));let Ir=!1,fn=!1,vc=!1;const yt=Ln.getUniforms(),wi=be.uniforms;if(De.useProgram(Ln.program)&&(Ir=!0,fn=!0,vc=!0),j.id!==C&&(C=j.id,fn=!0),Ir||G!==w){Ye.reverseDepthBuffer?(K.copy(w.projectionMatrix),SM(K),MM(K),yt.setValue(I,"projectionMatrix",K)):yt.setValue(I,"projectionMatrix",w.projectionMatrix),yt.setValue(I,"viewMatrix",w.matrixWorldInverse);const yn=yt.map.cameraPosition;yn!==void 0&&yn.setValue(I,de.setFromMatrixPosition(w.matrixWorld)),Ye.logarithmicDepthBuffer&&yt.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&yt.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),G!==w&&(G=w,fn=!0,vc=!0)}if(O.isSkinnedMesh){yt.setOptional(I,O,"bindMatrix"),yt.setOptional(I,O,"bindMatrixInverse");const yn=O.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),yt.setValue(I,"boneTexture",yn.boneTexture,R))}O.isBatchedMesh&&(yt.setOptional(I,O,"batchingTexture"),yt.setValue(I,"batchingTexture",O._matricesTexture,R),yt.setOptional(I,O,"batchingIdTexture"),yt.setValue(I,"batchingIdTexture",O._indirectTexture,R),yt.setOptional(I,O,"batchingColorTexture"),O._colorsTexture!==null&&yt.setValue(I,"batchingColorTexture",O._colorsTexture,R));const _c=W.morphAttributes;if((_c.position!==void 0||_c.normal!==void 0||_c.color!==void 0)&&Ee.update(O,W,Ln),(fn||be.receiveShadow!==O.receiveShadow)&&(be.receiveShadow=O.receiveShadow,yt.setValue(I,"receiveShadow",O.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(wi.envMap.value=Ae,wi.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&k.environment!==null&&(wi.envMapIntensity.value=k.environmentIntensity),fn&&(yt.setValue(I,"toneMappingExposure",_.toneMappingExposure),be.needsLights&&a0(wi,vc),ce&&j.fog===!0&&ie.refreshFogUniforms(wi,ce),ie.refreshMaterialUniforms(wi,j,te,X,m.state.transmissionRenderTarget[w.id]),cl.upload(I,Ph(be),wi,R)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(cl.upload(I,Ph(be),wi,R),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&yt.setValue(I,"center",O.center),yt.setValue(I,"modelViewMatrix",O.modelViewMatrix),yt.setValue(I,"normalMatrix",O.normalMatrix),yt.setValue(I,"modelMatrix",O.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const yn=j.uniformsGroups;for(let xc=0,c0=yn.length;xc<c0;xc++){const Dh=yn[xc];F.update(Dh,Ln),F.bind(Dh,Ln)}}return Ln}function a0(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function l0(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,k,W){Ne.get(w.texture).__webglTexture=k,Ne.get(w.depthTexture).__webglTexture=W;const j=Ne.get(w);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=W===void 0,j.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,k){const W=Ne.get(w);W.__webglFramebuffer=k,W.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,W=0){T=w,D=k,A=W;let j=!0,O=null,ce=!1,_e=!1;if(w){const Ae=Ne.get(w);if(Ae.__useDefaultFramebuffer!==void 0)De.bindFramebuffer(I.FRAMEBUFFER,null),j=!1;else if(Ae.__webglFramebuffer===void 0)R.setupRenderTarget(w);else if(Ae.__hasExternalTextures)R.rebindTextures(w,Ne.get(w.texture).__webglTexture,Ne.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ce=w.depthTexture;if(Ae.__boundDepthTexture!==Ce){if(Ce!==null&&Ne.has(Ce)&&(w.width!==Ce.image.width||w.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(w)}}const Ie=w.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(_e=!0);const Ue=Ne.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ue[k])?O=Ue[k][W]:O=Ue[k],ce=!0):w.samples>0&&R.useMultisampledRTT(w)===!1?O=Ne.get(w).__webglMultisampledFramebuffer:Array.isArray(Ue)?O=Ue[W]:O=Ue,x.copy(w.viewport),E.copy(w.scissor),z=w.scissorTest}else x.copy(ne).multiplyScalar(te).floor(),E.copy(le).multiplyScalar(te).floor(),z=Re;if(De.bindFramebuffer(I.FRAMEBUFFER,O)&&j&&De.drawBuffers(w,O),De.viewport(x),De.scissor(E),De.setScissorTest(z),ce){const Ae=Ne.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ae.__webglTexture,W)}else if(_e){const Ae=Ne.get(w.texture),Ie=k||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ae.__webglTexture,W||0,Ie)}C=-1},this.readRenderTargetPixels=function(w,k,W,j,O,ce,_e){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Ne.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_e!==void 0&&(we=we[_e]),we){De.bindFramebuffer(I.FRAMEBUFFER,we);try{const Ae=w.texture,Ie=Ae.format,Ue=Ae.type;if(!Ye.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-j&&W>=0&&W<=w.height-O&&I.readPixels(k,W,j,O,Fe.convert(Ie),Fe.convert(Ue),ce)}finally{const Ae=T!==null?Ne.get(T).__webglFramebuffer:null;De.bindFramebuffer(I.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(w,k,W,j,O,ce,_e){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Ne.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_e!==void 0&&(we=we[_e]),we){const Ae=w.texture,Ie=Ae.format,Ue=Ae.type;if(!Ye.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=w.width-j&&W>=0&&W<=w.height-O){De.bindFramebuffer(I.FRAMEBUFFER,we);const Ce=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ce),I.bufferData(I.PIXEL_PACK_BUFFER,ce.byteLength,I.STREAM_READ),I.readPixels(k,W,j,O,Fe.convert(Ie),Fe.convert(Ue),0);const et=T!==null?Ne.get(T).__webglFramebuffer:null;De.bindFramebuffer(I.FRAMEBUFFER,et);const at=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await yM(I,at,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ce),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ce),I.deleteBuffer(Ce),I.deleteSync(at),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,k=null,W=0){w.isTexture!==!0&&(ll("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,w=arguments[1]);const j=Math.pow(2,-W),O=Math.floor(w.image.width*j),ce=Math.floor(w.image.height*j),_e=k!==null?k.x:0,we=k!==null?k.y:0;R.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,_e,we,O,ce),De.unbindTexture()},this.copyTextureToTexture=function(w,k,W=null,j=null,O=0){w.isTexture!==!0&&(ll("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,w=arguments[1],k=arguments[2],O=arguments[3]||0,W=null);let ce,_e,we,Ae,Ie,Ue;W!==null?(ce=W.max.x-W.min.x,_e=W.max.y-W.min.y,we=W.min.x,Ae=W.min.y):(ce=w.image.width,_e=w.image.height,we=0,Ae=0),j!==null?(Ie=j.x,Ue=j.y):(Ie=0,Ue=0);const Ce=Fe.convert(k.format),et=Fe.convert(k.type);R.setTexture2D(k,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);const at=I.getParameter(I.UNPACK_ROW_LENGTH),gt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),un=I.getParameter(I.UNPACK_SKIP_PIXELS),Ze=I.getParameter(I.UNPACK_SKIP_ROWS),be=I.getParameter(I.UNPACK_SKIP_IMAGES),It=w.isCompressedTexture?w.mipmaps[O]:w.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,It.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,It.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,we),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ae),w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,O,Ie,Ue,ce,_e,Ce,et,It.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,O,Ie,Ue,It.width,It.height,Ce,It.data):I.texSubImage2D(I.TEXTURE_2D,O,Ie,Ue,ce,_e,Ce,et,It),I.pixelStorei(I.UNPACK_ROW_LENGTH,at),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,gt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,un),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ze),I.pixelStorei(I.UNPACK_SKIP_IMAGES,be),O===0&&k.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),De.unbindTexture()},this.copyTextureToTexture3D=function(w,k,W=null,j=null,O=0){w.isTexture!==!0&&(ll("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,j=arguments[1]||null,w=arguments[2],k=arguments[3],O=arguments[4]||0);let ce,_e,we,Ae,Ie,Ue,Ce,et,at;const gt=w.isCompressedTexture?w.mipmaps[O]:w.image;W!==null?(ce=W.max.x-W.min.x,_e=W.max.y-W.min.y,we=W.max.z-W.min.z,Ae=W.min.x,Ie=W.min.y,Ue=W.min.z):(ce=gt.width,_e=gt.height,we=gt.depth,Ae=0,Ie=0,Ue=0),j!==null?(Ce=j.x,et=j.y,at=j.z):(Ce=0,et=0,at=0);const un=Fe.convert(k.format),Ze=Fe.convert(k.type);let be;if(k.isData3DTexture)R.setTexture3D(k,0),be=I.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)R.setTexture2DArray(k,0),be=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);const It=I.getParameter(I.UNPACK_ROW_LENGTH),Qe=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ln=I.getParameter(I.UNPACK_SKIP_PIXELS),Ir=I.getParameter(I.UNPACK_SKIP_ROWS),fn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,gt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,gt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ae),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ie),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ue),w.isDataTexture||w.isData3DTexture?I.texSubImage3D(be,O,Ce,et,at,ce,_e,we,un,Ze,gt.data):k.isCompressedArrayTexture?I.compressedTexSubImage3D(be,O,Ce,et,at,ce,_e,we,un,gt.data):I.texSubImage3D(be,O,Ce,et,at,ce,_e,we,un,Ze,gt),I.pixelStorei(I.UNPACK_ROW_LENGTH,It),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Qe),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ln),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ir),I.pixelStorei(I.UNPACK_SKIP_IMAGES,fn),O===0&&k.generateMipmaps&&I.generateMipmap(be),De.unbindTexture()},this.initRenderTarget=function(w){Ne.get(w).__webglFramebuffer===void 0&&R.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),De.unbindTexture()},this.resetState=function(){D=0,A=0,T=null,De.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===mh?"display-p3":"srgb",n.unpackColorSpace=Je.workingColorSpace===fc?"display-p3":"srgb"}}class NA extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class IA{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=ad,this.updateRanges=[],this.version=0,this.uuid=gi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const jt=new H;class Gl{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)jt.fromBufferAttribute(this,n),jt.applyMatrix4(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)jt.fromBufferAttribute(this,n),jt.applyNormalMatrix(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)jt.fromBufferAttribute(this,n),jt.transformDirection(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=zn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=tt(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=zn(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=zn(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=zn(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=zn(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=tt(n,this.array),i=tt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=tt(n,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=tt(n,this.array),i=tt(i,this.array),r=tt(r,this.array),s=tt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Wn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Gl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class cd extends Nr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Kr;const no=new H,Zr=new H,Qr=new H,Jr=new Ge,io=new Ge,e0=new ft,za=new H,ro=new H,Ha=new H,Xm=new Ge,Su=new Ge,Ym=new Ge;class $m extends Ct{constructor(e=new cd){if(super(),this.isSprite=!0,this.type="Sprite",Kr===void 0){Kr=new Jt;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new IA(n,5);Kr.setIndex([0,1,2,0,2,3]),Kr.setAttribute("position",new Gl(i,3,0,!1)),Kr.setAttribute("uv",new Gl(i,2,3,!1))}this.geometry=Kr,this.material=e,this.center=new Ge(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zr.setFromMatrixScale(this.matrixWorld),e0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Qr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zr.multiplyScalar(-Qr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Va(za.set(-.5,-.5,0),Qr,o,Zr,r,s),Va(ro.set(.5,-.5,0),Qr,o,Zr,r,s),Va(Ha.set(.5,.5,0),Qr,o,Zr,r,s),Xm.set(0,0),Su.set(1,0),Ym.set(1,1);let a=e.ray.intersectTriangle(za,ro,Ha,!1,no);if(a===null&&(Va(ro.set(-.5,.5,0),Qr,o,Zr,r,s),Su.set(0,1),a=e.ray.intersectTriangle(za,Ha,ro,!1,no),a===null))return;const l=e.ray.origin.distanceTo(no);l<e.near||l>e.far||n.push({distance:l,point:no.clone(),uv:Tn.getInterpolation(no,za,ro,Ha,Xm,Su,Ym,new Ge),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Va(t,e,n,i,r,s){Jr.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(io.x=s*Jr.x-r*Jr.y,io.y=r*Jr.x+s*Jr.y):io.copy(Jr),t.copy(e),t.x+=io.x,t.y+=io.y,t.applyMatrix4(e0)}class mc extends Nr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Wl=new H,jl=new H,qm=new ft,so=new vh,Ga=new dc,Mu=new H,Km=new H;class t0 extends Ct{constructor(e=new Jt,n=new mc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Wl.fromBufferAttribute(n,r-1),jl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Wl.distanceTo(jl);e.setAttribute("lineDistance",new xt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ga.copy(i.boundingSphere),Ga.applyMatrix4(r),Ga.radius+=s,e.ray.intersectsSphere(Ga)===!1)return;qm.copy(r).invert(),so.copy(e.ray).applyMatrix4(qm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=i.index,h=i.attributes.position;if(f!==null){const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let y=p,m=g-1;y<m;y+=c){const u=f.getX(y),v=f.getX(y+1),_=Wa(this,e,so,l,u,v);_&&n.push(_)}if(this.isLineLoop){const y=f.getX(g-1),m=f.getX(p),u=Wa(this,e,so,l,y,m);u&&n.push(u)}}else{const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let y=p,m=g-1;y<m;y+=c){const u=Wa(this,e,so,l,y,y+1);u&&n.push(u)}if(this.isLineLoop){const y=Wa(this,e,so,l,g-1,p);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Wa(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(Wl.fromBufferAttribute(o,r),jl.fromBufferAttribute(o,s),n.distanceSqToSegment(Wl,jl,Mu,Km)>i)return;Mu.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Mu);if(!(l<e.near||l>e.far))return{distance:l,point:Km.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}const Zm=new H,Qm=new H;class n0 extends t0{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Zm.fromBufferAttribute(n,r),Qm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Zm.distanceTo(Qm);e.setAttribute("lineDistance",new xt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Jm extends Kt{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Mh extends Jt{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],d=[],h=[],p=[];let g=0;const y=[],m=i/2;let u=0;v(),o===!1&&(e>0&&_(!0),n>0&&_(!1)),this.setIndex(f),this.setAttribute("position",new xt(d,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(p,2));function v(){const M=new H,D=new H;let A=0;const T=(n-e)/i;for(let C=0;C<=s;C++){const G=[],x=C/s,E=x*(n-e)+e;for(let z=0;z<=r;z++){const B=z/r,Y=B*l+a,J=Math.sin(Y),X=Math.cos(Y);D.x=E*J,D.y=-x*i+m,D.z=E*X,d.push(D.x,D.y,D.z),M.set(J,T,X).normalize(),h.push(M.x,M.y,M.z),p.push(B,1-x),G.push(g++)}y.push(G)}for(let C=0;C<r;C++)for(let G=0;G<s;G++){const x=y[G][C],E=y[G+1][C],z=y[G+1][C+1],B=y[G][C+1];e>0&&(f.push(x,E,B),A+=3),n>0&&(f.push(E,z,B),A+=3)}c.addGroup(u,A,0),u+=A}function _(M){const D=g,A=new Ge,T=new H;let C=0;const G=M===!0?e:n,x=M===!0?1:-1;for(let z=1;z<=r;z++)d.push(0,m*x,0),h.push(0,x,0),p.push(.5,.5),g++;const E=g;for(let z=0;z<=r;z++){const Y=z/r*l+a,J=Math.cos(Y),X=Math.sin(Y);T.x=G*X,T.y=m*x,T.z=G*J,d.push(T.x,T.y,T.z),h.push(0,x,0),A.x=J*.5+.5,A.y=X*.5*x+.5,p.push(A.x,A.y),g++}for(let z=0;z<r;z++){const B=D+z,Y=E+z;M===!0?f.push(Y,Y+1,B):f.push(Y+1,Y,B),C+=3}c.addGroup(u,C,M===!0?1:2),u+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mh(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Eh extends Mh{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Eh(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xl extends Jt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],d=new H,h=new H,p=[],g=[],y=[],m=[];for(let u=0;u<=i;u++){const v=[],_=u/i;let M=0;u===0&&o===0?M=.5/n:u===i&&l===Math.PI&&(M=-.5/n);for(let D=0;D<=n;D++){const A=D/n;d.x=-e*Math.cos(r+A*s)*Math.sin(o+_*a),d.y=e*Math.cos(o+_*a),d.z=e*Math.sin(r+A*s)*Math.sin(o+_*a),g.push(d.x,d.y,d.z),h.copy(d).normalize(),y.push(h.x,h.y,h.z),m.push(A+M,1-_),v.push(c++)}f.push(v)}for(let u=0;u<i;u++)for(let v=0;v<n;v++){const _=f[u][v+1],M=f[u][v],D=f[u+1][v],A=f[u+1][v+1];(u!==0||o>0)&&p.push(_,M,A),(u!==i-1||l<Math.PI)&&p.push(M,D,A)}this.setIndex(p),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(y,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class wh extends Jt{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],f=new H,d=new H,h=new H;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const y=g/r*s,m=p/i*Math.PI*2;d.x=(e+n*Math.cos(m))*Math.cos(y),d.y=(e+n*Math.cos(m))*Math.sin(y),d.z=n*Math.sin(m),a.push(d.x,d.y,d.z),f.x=e*Math.cos(y),f.y=e*Math.sin(y),h.subVectors(d,f).normalize(),l.push(h.x,h.y,h.z),c.push(g/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const y=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,u=(r+1)*(p-1)+g,v=(r+1)*p+g;o.push(y,m,v),o.push(m,u,v)}this.setIndex(o),this.setAttribute("position",new xt(a,3)),this.setAttribute("normal",new xt(l,3)),this.setAttribute("uv",new xt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Eu extends Nr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=F_,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class UA extends mc{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class i0 extends Ct{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class FA extends i0{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const wu=new ft,eg=new H,tg=new H;class kA{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yh,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;eg.setFromMatrixPosition(e.matrixWorld),n.position.copy(eg),tg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(tg),n.updateMatrixWorld(),wu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(wu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class OA extends kA{constructor(){super(new $_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class BA extends i0{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new OA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class zA{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ng(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=ng();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function ng(){return performance.now()}const ig=new ft;class HA{constructor(e,n,i=0,r=1/0){this.ray=new vh(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new _h,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return ig.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ig),this}intersectObject(e,n=!0,i=[]){return ud(e,this,i,n),i.sort(rg),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)ud(e[r],this,i,n);return i.sort(rg),i}}function rg(t,e){return t.distance-e.distance}function ud(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)ud(s[o],e,n,!0)}}class VA extends n0{constructor(e=10,n=10,i=4473924,r=8947848){i=new He(i),r=new He(r);const s=n/2,o=e/n,a=e/2,l=[],c=[];for(let h=0,p=0,g=-a;h<=n;h++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const y=h===s?i:r;y.toArray(c,p),p+=3,y.toArray(c,p),p+=3,y.toArray(c,p),p+=3,y.toArray(c,p),p+=3}const f=new Jt;f.setAttribute("position",new xt(l,3)),f.setAttribute("color",new xt(c,3));const d=new mc({vertexColors:!0,toneMapped:!1});super(f,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class GA extends n0{constructor(e=1){const n=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Jt;r.setAttribute("position",new xt(n,3)),r.setAttribute("color",new xt(i,3));const s=new mc({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,n,i){const r=new He,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(n),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lh);function WA(t,e){const n=new NA;n.background=new He("#0e1116");const i=new wn(55,1,.05,200),r=new H(0,11.5,13.5);i.position.copy(r),i.lookAt(0,0,0);const s=new DA({antialias:!0});s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.shadowMap.enabled=!0,s.shadowMap.type=E_,t.appendChild(s.domElement);const o=new FA(12571903,2105384,1.1);n.add(o);const a=new BA(16777215,1.4);a.position.set(6,12,8),a.castShadow=!0,a.shadow.mapSize.set(1024,1024),a.shadow.camera.left=-15,a.shadow.camera.right=15,a.shadow.camera.top=15,a.shadow.camera.bottom=-15,n.add(a);const l=12,c=new VA(l*2,l*2,3818066,2238515);c.material.transparent=!0,c.material.opacity=.55,n.add(c);const f=(K,Z)=>{const de=document.createElement("canvas");de.width=256,de.height=128;const ue=de.getContext("2d");ue.fillStyle=Z,ue.font="bold 56px system-ui, sans-serif",ue.textAlign="center",ue.textBaseline="middle",ue.fillText(K,128,64);const ge=new Jm(de),Le=new cd({map:ge,transparent:!0,depthTest:!1});return new $m(Le)},d=(K,Z,de="#8fa3bf")=>{const ue=f(K,de);ue.position.set(Z.x,Z.y,Z.z),ue.scale.set(2.2,1.1,1),n.add(ue)};d("前 -Z",{x:0,y:.2,z:-l+1},"#7fd1ff"),d("后 +Z",{x:0,y:.2,z:l-1},"#ffb37f"),d("左 -X",{x:-l+1,y:.2,z:0}),d("右 +X",{x:l-1,y:.2,z:0});const h=new GA(1.2);h.position.set(-l+.6,.02,l-.6),n.add(h);const p=new hs,g=new Eh(.32,.9,24);g.rotateX(-Math.PI/2);const y=new Eu({color:16777215,emissive:2241348}),m=new rn(g,y);m.position.z=-.15,m.castShadow=!0,p.add(m);const u=new rn(new Xl(.28,24,16),new Eu({color:14674165}));u.position.set(0,.42,.1),u.castShadow=!0,p.add(u);const v=new Jt().setFromPoints([new H(0,.32,-.5),new H(0,.32,-2.2)]),_=new t0(v,new UA({color:8376831,dashSize:.2,gapSize:.15}));_.computeLineDistances(),p.add(_),n.add(p);const M=new Map;function D(K,Z){const de=document.createElement("canvas");de.width=512,de.height=128;const ue=de.getContext("2d");ue.clearRect(0,0,512,128),ue.font="bold 44px system-ui, sans-serif",ue.textAlign="center",ue.textBaseline="middle",ue.lineWidth=8,ue.strokeStyle="rgba(0,0,0,0.65)",ue.strokeText(K,256,56),ue.fillStyle=Z,ue.fillText(K,256,56);const ge=new Jm(de),Le=new $m(new cd({map:ge,transparent:!0,depthTest:!1}));return Le.scale.set(2.6,.65,1),Le}function A(K){const Z=new hs,de=new He(K.color),ue=new rn(new Xl(.3,24,16),new Eu({color:de,emissive:de.clone().multiplyScalar(.35),roughness:.4}));ue.position.y=.3,ue.castShadow=!0,Z.add(ue);const ge=new rn(new wh(.46,.03,10,40),new xh({color:16777215,transparent:!0,opacity:.9}));ge.rotation.x=Math.PI/2,ge.position.y=.05,ge.visible=!1,Z.add(ge);const Le=D(K.name,K.color);return Le.position.y=.95,Z.add(Le),Z.position.set(K.position.x,K.position.y,K.position.z),Z.userData.trackId=K.id,n.add(Z),{group:Z,sphere:ue,ring:ge,label:Le,trackId:K.id}}function T(K){n.remove(K.group),K.group.traverse(Z=>{if(Z instanceof rn){Z.geometry.dispose();const de=Z.material;Array.isArray(de)?de.forEach(ue=>ue.dispose()):de.dispose()}})}const C=new HA,G=new Ge,x=new Ii(new H(0,1,0),0),E=new H;let z=null,B=null;function Y(K){const Z=s.domElement.getBoundingClientRect();G.x=(K.clientX-Z.left)/Z.width*2-1,G.y=-((K.clientY-Z.top)/Z.height)*2+1}function J(K){Y(K),C.setFromCamera(G,i);const Z=[...M.values()].map(ge=>ge.sphere),de=C.intersectObjects(Z,!1)[0];if(de){const ge=[...M.values()].find(Le=>Le.sphere===de.object);if(!ge)return;z={kind:"source",trackId:ge.trackId,pointerId:K.pointerId,planeY:ge.group.position.y},x.constant=-z.planeY,s.domElement.setPointerCapture(K.pointerId),e.onSelectSource(ge.trackId),B={x:K.clientX,y:K.clientY};return}C.intersectObjects([m,u],!1)[0]&&(z={kind:"listener",pointerId:K.pointerId,planeY:p.position.y},x.constant=-z.planeY,s.domElement.setPointerCapture(K.pointerId),e.onSelectSource(null),B={x:K.clientX,y:K.clientY})}function X(K){if(!(!z||K.pointerId!==z.pointerId)&&(Y(K),C.setFromCamera(G,i),C.ray.intersectPlane(x,E))){const Z=rm.clamp(E.x,-l,l),de=rm.clamp(E.z,-l,l);z.kind==="source"&&z.trackId?e.onMoveSource(z.trackId,{x:Z,y:z.planeY,z:de}):z.kind==="listener"&&e.onMoveListener({x:Z,y:z.planeY,z:de})}}function te(K){if(z&&K.pointerId===z.pointerId){try{s.domElement.releasePointerCapture(K.pointerId)}catch{}z=null}}function U(K){if(B&&Math.hypot(K.clientX-B.x,K.clientY-B.y)>4)return;Y(K),C.setFromCamera(G,i),C.intersectObjects([...[...M.values()].map(de=>de.sphere),m,u],!1)[0]||e.onSelectSource(null),B=null}s.domElement.addEventListener("pointerdown",J),s.domElement.addEventListener("pointermove",X),s.domElement.addEventListener("pointerup",te),s.domElement.addEventListener("pointercancel",te),s.domElement.addEventListener("click",U);function ee(){const K=t.clientWidth,Z=t.clientHeight;K===0||Z===0||(s.setSize(K,Z,!1),i.aspect=K/Z,i.updateProjectionMatrix())}const ne=new ResizeObserver(ee);ne.observe(t),ee();let le=0;const Re=new zA;function Oe(){le=requestAnimationFrame(Oe);const K=Re.getElapsedTime();for(const Z of M.values())Z.ring.visible&&(Z.ring.rotation.z=K*.8);s.render(n,i)}Oe();let $=null;function se(K,Z,de){const ue=new Set(K.map(ge=>ge.id));for(const[ge,Le]of[...M.entries()])ue.has(ge)||(T(Le),M.delete(ge));for(const ge of K){let Le=M.get(ge.id);Le||(Le=A(ge),M.set(ge.id,Le)),Le.group.position.set(ge.position.x,ge.position.y,ge.position.z),Le.ring.visible=ge.id===de;const We=new He(ge.color),I=ge.muted;Le.sphere.material.color.set(I?5593699:ge.color),Le.sphere.material.emissive.set(I?0:We.clone().multiplyScalar(.35))}(!$||Z!==$)&&(p.position.set(Z.position.x,Z.position.y,Z.position.z),p.rotation.order="YXZ",p.rotation.y=-Z.yaw,p.rotation.x=Z.pitch,qo(Z.yaw,Z.pitch),$=Z)}return{destroy(){cancelAnimationFrame(le),ne.disconnect(),s.domElement.removeEventListener("pointerdown",J),s.domElement.removeEventListener("pointermove",X),s.domElement.removeEventListener("pointerup",te),s.domElement.removeEventListener("pointercancel",te),s.domElement.removeEventListener("click",U);for(const K of M.values())T(K);s.dispose(),s.domElement.remove()},sync:se}}function jA({api:t,onMoveSource:e,onMoveListener:n}){const i=fe.useRef(null),r=fe.useRef(null);return fe.useEffect(()=>{if(i.current)return r.current=WA(i.current,{onSelectSource:t.selectTrack,onMoveSource:e,onMoveListener:n}),()=>{var s;(s=r.current)==null||s.destroy(),r.current=null}},[]),fe.useEffect(()=>{var s;(s=r.current)==null||s.sync(t.doc.tracks,t.doc.listener,t.selectedId)},[t.doc.tracks,t.doc.listener,t.selectedId]),P.jsx("div",{className:"scene3d",ref:i})}function XA({tracks:t,listener:e,selectedId:n,onSelect:i,onMoveSource:r,onMoveListener:s,onRotateListener:o}){const a=fe.useRef(null),[l,c]=fe.useState(null),f=10,d=520,h=d/(f*2),p=C=>d/2+C*h,g=C=>d/2+C*h,y=fe.useCallback(C=>{const x=a.current.getBoundingClientRect(),E=(C.clientX-x.left)/x.width*d,z=(C.clientY-x.top)/x.height*d;return{x:(E-d/2)/h,z:(z-d/2)/h}},[h]);fe.useEffect(()=>{if(!l)return;const C=x=>{const E=y(x),z=B=>Math.max(-f,Math.min(f,B));if(l.kind==="source"){const B=t.find(Y=>Y.id===l.id);r(l.id,{x:z(E.x),y:(B==null?void 0:B.position.y)??0,z:z(E.z)})}else if(l.kind==="listener")s({x:z(E.x),y:e.position.y,z:z(E.z)});else if(l.kind==="rotate"){const B=E.x-e.position.x,Y=E.z-e.position.z,J=Math.atan2(B,-Y);o(J)}},G=()=>c(null);return window.addEventListener("pointermove",C),window.addEventListener("pointerup",G),()=>{window.removeEventListener("pointermove",C),window.removeEventListener("pointerup",G)}},[l,y,t,r,s,o,e.position]);const m=qo(e.yaw,0),u=oh(e.yaw),v=e.position,_={x:v.x+m.x*.8,z:v.z+m.z*.8},M={x:v.x-m.x*.45+u.x*.42,z:v.z-m.z*.45+u.z*.42},D={x:v.x-m.x*.45-u.x*.42,z:v.z-m.z*.45-u.z*.42},A={x:v.x+m.x*1.5,z:v.z+m.z*1.5},T=[];for(let C=-f;C<=f;C+=2)T.push(P.jsx("line",{x1:p(C),y1:0,x2:p(C),y2:d,stroke:"#222a36",strokeWidth:1},`v${C}`)),T.push(P.jsx("line",{x1:0,y1:g(C),x2:d,y2:g(C),stroke:"#222a36",strokeWidth:1},`h${C}`));return P.jsxs("div",{className:"plan2d",children:[P.jsxs("svg",{ref:a,viewBox:`0 0 ${d} ${d}`,className:"plan-svg",onPointerDown:C=>{C.target===a.current&&i(null)},children:[T,P.jsx("rect",{x:0,y:0,width:d,height:d/2,fill:"rgba(127,209,255,0.05)"}),P.jsx("text",{x:d/2,y:18,textAnchor:"middle",className:"plan-axis-label front",children:"前 · -Z"}),P.jsx("text",{x:d/2,y:d-6,textAnchor:"middle",className:"plan-axis-label back",children:"后 · +Z"}),P.jsx("text",{x:10,y:d/2,className:"plan-axis-label",children:"左 -X"}),P.jsx("text",{x:d-10,y:d/2,textAnchor:"end",className:"plan-axis-label",children:"右 +X"}),P.jsx("line",{x1:d/2,y1:d/2,x2:p(v.x),y2:g(v.z),stroke:"#2c3647",strokeDasharray:"4 4"}),t.map(C=>{const G=C.id===n;return P.jsxs("g",{className:"plan-source",onPointerDown:x=>{x.stopPropagation(),i(C.id),c({kind:"source",id:C.id})},children:[G&&P.jsx("circle",{cx:p(C.position.x),cy:g(C.position.z),r:14,fill:"none",stroke:"#fff",strokeWidth:1.5}),P.jsx("circle",{cx:p(C.position.x),cy:g(C.position.z),r:9,fill:C.muted?"#555a63":C.color,stroke:C.solo?"#ffe066":"rgba(0,0,0,0.4)",strokeWidth:C.solo?2.5:1}),P.jsx("text",{x:p(C.position.x),y:g(C.position.z)-14,textAnchor:"middle",className:"plan-source-label",fill:C.muted?"#8a909c":C.color,children:C.name.length>10?`${C.name.slice(0,10)}…`:C.name})]},C.id)}),P.jsx("g",{onPointerDown:C=>{C.stopPropagation(),i(null),c({kind:"listener"})},className:"plan-listener",children:P.jsx("polygon",{points:`${p(_.x)},${g(_.z)} ${p(M.x)},${g(M.z)} ${p(D.x)},${g(D.z)}`,fill:"#e6edf7",stroke:"#7fd1ff",strokeWidth:1.5})}),P.jsx("circle",{cx:p(A.x),cy:g(A.z),r:7,fill:"none",stroke:"#7fd1ff",strokeWidth:2,className:"plan-rotate-handle",onPointerDown:C=>{C.stopPropagation(),c({kind:"rotate"})}})]}),P.jsx("div",{className:"plan-hint",children:"拖动彩色圆点移动声源 · 拖动白色三角移动听者 · 拖蓝色圆环手柄旋转朝向"})]})}function r0({levels:t,onClear:e}){return P.jsxs("div",{className:"meter",children:[P.jsx(sg,{label:"L",peak:t.l,clip:t.clipL}),P.jsx(sg,{label:"R",peak:t.r,clip:t.clipR}),P.jsx("button",{className:`clip-clear ${t.clipL||t.clipR?"armed":""}`,onClick:e,title:"清除削波锁存",children:t.clipL||t.clipR?"CLIP!":"PEAK"})]})}function sg({label:t,peak:e,clip:n}){const i=e<=1e-5?-1/0:20*Math.log10(e),r=Math.max(0,Math.min(1,(i+48)/51)),s=24,o=Math.round(r*s);return P.jsxs("div",{className:`meter-bar ${n?"clip":""}`,children:[P.jsx("span",{className:"meter-label",children:t}),P.jsx("div",{className:"meter-segments",children:Array.from({length:s}).map((a,l)=>{const c=l<o,f=l>=s-3;return P.jsx("span",{className:`meter-seg ${c?"on":""} ${f?"danger":""}`},l)})}),P.jsx("span",{className:"meter-db",children:i===-1/0?"-∞":`${i.toFixed(1)}`})]})}function og(t){if(t==null||!isFinite(t))return"--:--";const e=Math.floor(t/60),n=Math.floor(t%60);return`${e}:${n.toString().padStart(2,"0")}`}function YA({track:t,api:e}){const{doc:n,playingIds:i}=e,r=i.has(t.id),[s,o]=fe.useState(0),a=n.listener,l=n.spatial;fe.useEffect(()=>{if(!r){o(Pe.getProgress(t.id)??0);return}let g=0;const y=()=>{o(Pe.getProgress(t.id)??0),g=requestAnimationFrame(y)};return g=requestAnimationFrame(y),()=>cancelAnimationFrame(g)},[r,t.id]);const c=jy(t.position,a),f=Xy(t.position,a.position),d=Yy(t.position,a.position),h=qy(f,l.distanceModel,l.refDistance,l.rolloffFactor,l.maxDistance),p=t.status==="decode-error"?"解码失败":t.status==="loading"?"解码中…":t.status==="pending"&&e.unlock==="locked"?"待解锁":"就绪";return P.jsxs("div",{className:`track-row ${e.selectedId===t.id?"selected":""}`,children:[P.jsxs("div",{className:"track-head",children:[P.jsx("span",{className:"track-color",style:{background:t.muted?"#555a63":t.color}}),P.jsx("button",{className:"track-name",onClick:()=>e.selectTrack(e.selectedId===t.id?null:t.id),title:t.originalFileName??t.name,children:t.name}),P.jsx("span",{className:`track-status ${t.status==="decode-error"?"error":""}`,children:p})]}),t.status==="decode-error"&&P.jsxs("div",{className:"track-error",title:t.errorMessage,children:["⚠ ",t.errorMessage??"解码失败"]}),P.jsxs("div",{className:"track-transport",children:[P.jsx("button",{className:"btn small",onClick:()=>e.togglePlay(t.id),disabled:t.status==="decode-error",title:r?"暂停":"播放",children:r?"⏸":"▶"}),P.jsx("button",{className:"btn small",onClick:()=>e.stop(t.id),title:"停止",children:"⏹"}),P.jsxs("label",{className:"loop-toggle",title:"循环",children:[P.jsx("input",{type:"checkbox",checked:t.loop,onChange:g=>e.updateTrack(t.id,{loop:g.target.checked})}),"循环"]}),P.jsx("button",{className:`btn small ${t.muted?"active":""}`,onClick:()=>e.updateTrack(t.id,{muted:!t.muted}),children:"M"}),P.jsx("button",{className:`btn small ${t.solo?"solo":""}`,onClick:()=>e.updateTrack(t.id,{solo:!t.solo}),children:"S"}),P.jsx("button",{className:"btn small ghost danger",onClick:()=>e.removeTrack(t.id),title:"删除",children:"✕"})]}),P.jsxs("div",{className:"track-routing",children:[P.jsx("span",{children:"总线"}),P.jsx("select",{value:t.busId,onChange:g=>e.moveTrackToBus(t.id,g.target.value),title:"迁移到其他本地监听总线（播放中不会重启声源）",children:e.doc.buses.map(g=>P.jsx("option",{value:g.id,children:g.name},g.id))})]}),P.jsxs("div",{className:"track-gain",children:[P.jsx("input",{type:"range",min:0,max:1.5,step:.01,value:t.gain,onChange:g=>e.updateTrack(t.id,{gain:Number(g.target.value)})}),P.jsx("span",{className:"gain-readout",children:Ul(t.muted?0:t.gain)})]}),P.jsxs("div",{className:"track-progress",onClick:g=>{if(t.duration==null)return;const y=g.currentTarget.getBoundingClientRect(),m=(g.clientX-y.left)/y.width;e.seek(t.id,m*t.duration)},children:[P.jsx("div",{className:"track-progress-fill",style:{width:`${t.duration?s/t.duration*100:0}%`}}),P.jsxs("span",{className:"track-time",children:[og(s)," / ",og(t.duration??null)]})]}),P.jsxs("div",{className:"track-spatial-readout",children:[P.jsx("span",{className:c>0?"side-r":c<0?"side-l":"",children:$y(c)}),P.jsxs("span",{children:[f.toFixed(2)," m"]}),P.jsxs("span",{children:["仰角 ",d.toFixed(0),"°"]}),P.jsxs("span",{title:"距离模型造成的理论衰减（真实衰减由 PannerNode 执行）",children:["距离增益 ",Ul(h)]})]}),t.channels&&t.channels>1?P.jsxs("div",{className:"track-channel",children:["输入声道：",Array.from({length:t.channels}).map((g,y)=>P.jsx("button",{className:`btn mini ${t.channel===y?"active":""}`,onClick:()=>e.updateTrack(t.id,{channel:y}),title:y===0?"文件原始左声道 L":y===1?"文件原始右声道 R":`声道 ${y+1}`,children:y===0?"L（原始左）":y===1?"R（原始右）":`CH${y+1}`},y))]}):null]})}function $A({api:t}){const e=t.doc.buses.filter(n=>n.parentId===null);return P.jsxs("div",{className:"bus-panel",children:[P.jsxs("div",{className:"bus-panel-head",children:[P.jsx("b",{children:"本地监听总线"}),P.jsx("button",{className:"btn mini",onClick:()=>t.addBus(null),children:"＋ 根总线"})]}),e.map(n=>P.jsx(s0,{bus:n,api:t,depth:0},n.id))]})}function s0({bus:t,api:e,depth:n}){const i=e.doc.buses.filter(a=>a.parentId===t.id),r=e.doc.tracks.filter(a=>a.busId===t.id),s=S_(e.doc.buses,t.id),o=e.levels[t.id]??{l:0,r:0,clipL:!1,clipR:!1};return P.jsxs("section",{className:"bus-card",style:{marginLeft:n*12},children:[P.jsxs("div",{className:"bus-row",children:[P.jsx("span",{className:"track-color",style:{background:t.muted?"#555a63":t.color}}),P.jsx("input",{className:"bus-name-input",value:t.name,onChange:a=>e.updateBus(t.id,{name:a.target.value}),title:"总线名称"}),P.jsx("button",{className:`btn mini ${t.muted?"active":""}`,onClick:()=>e.updateBus(t.id,{muted:!t.muted}),title:"静音总线",children:"M"}),P.jsx("button",{className:`btn mini ${t.solo?"solo":""}`,onClick:()=>e.updateBus(t.id,{solo:!t.solo}),title:"独奏总线（其他总线静音）",children:"S"}),P.jsx("button",{className:"btn mini ghost danger",onClick:()=>e.deleteBus(t.id),title:"删除空总线",children:"✕"})]}),P.jsxs("label",{className:"gain-fader bus-gain",children:[P.jsx("span",{children:"增益"}),P.jsx("input",{type:"range",min:0,max:1.5,step:.01,value:t.gain,onChange:a=>e.updateBus(t.id,{gain:Number(a.target.value)})}),P.jsx("b",{children:Ul(t.muted?0:t.gain)})]}),P.jsxs("div",{className:"bus-controls",children:[P.jsxs("label",{className:"bus-parent",children:["父级",P.jsxs("select",{value:t.parentId??"",onChange:a=>e.updateBus(t.id,{parentId:a.target.value||null}),children:[P.jsx("option",{value:"",children:"主输出"}),e.doc.buses.filter(a=>a.id!==t.id&&!s.has(a.id)).map(a=>P.jsx("option",{value:a.id,children:a.name},a.id))]})]}),P.jsx("button",{className:"btn mini",onClick:()=>e.addBus(t.id),children:"＋子总线"}),P.jsx("button",{className:"btn mini",onClick:()=>void e.addSample("tone",t.id),children:"＋单音"})]}),P.jsx(r0,{levels:o,onClear:()=>e.clearClips(t.id)}),P.jsxs("div",{className:"bus-members",children:[r.length===0&&P.jsx("div",{className:"bus-empty",children:"空总线；删除前无需迁移成员。"}),r.map(a=>P.jsx(YA,{track:a,api:e},a.id))]}),i.map(a=>P.jsx(s0,{bus:a,api:e,depth:n+1},a.id))]})}function Tu({label:t,value:e,step:n=.1,onChange:i,hint:r}){return P.jsxs("label",{className:"num-field",title:r,children:[P.jsx("span",{children:t}),P.jsx("input",{type:"number",step:n,value:Number.isFinite(e)?Number(e.toFixed(3)):0,onChange:s=>i(Number(s.target.value))})]})}function qA({api:t}){const e=t.doc.tracks.find(i=>i.id===t.selectedId);if(!e)return P.jsxs("div",{className:"panel inspector empty",children:[P.jsx("p",{children:"在 3D 场景或 2D 俯视图中点击一个声源以编辑精确坐标。"}),P.jsxs("p",{className:"muted",children:["坐标约定：",P.jsx("b",{children:"+X 右"}),"、",P.jsx("b",{children:"+Y 上"}),"、",P.jsx("b",{children:"+Z 后"}),"；听者 yaw=0 时朝向 ",P.jsx("b",{children:"-Z（前方）"}),"。 声源在听者右侧时右耳更响。"]})]});const n=i=>t.moveTrack(e.id,{...e.position,...i});return P.jsxs("div",{className:"panel inspector",children:[P.jsxs("div",{className:"panel-title",children:[P.jsx("span",{className:"track-color",style:{background:e.color}}),"声源参数 · ",e.name]}),P.jsxs("div",{className:"num-grid",children:[P.jsx(Tu,{label:"X 右 (m)",value:e.position.x,onChange:i=>n({x:i})}),P.jsx(Tu,{label:"Y 上 (m)",value:e.position.y,onChange:i=>n({y:i})}),P.jsx(Tu,{label:"Z 后 (m)",value:e.position.z,onChange:i=>n({z:i})})]}),P.jsxs("label",{className:"num-field wide",children:[P.jsx("span",{children:"归属总线"}),P.jsx("select",{value:e.busId,onChange:i=>t.moveTrackToBus(e.id,i.target.value),children:t.doc.buses.map(i=>P.jsx("option",{value:i.id,children:i.name},i.id))})]}),P.jsxs("label",{className:"num-field wide",children:[P.jsx("span",{children:"名称"}),P.jsx("input",{type:"text",value:e.name,onChange:i=>t.updateTrack(e.id,{name:i.target.value})})]})]})}function KA({api:t}){const e=t.doc.listener,n=qo(e.yaw,e.pitch),i=oh(e.yaw),r=Wy(e.yaw),s=e.pitch*180/Math.PI;return P.jsxs("div",{className:"panel",children:[P.jsx("div",{className:"panel-title",children:"听者（头相关位置）"}),P.jsxs("div",{className:"num-grid",children:[P.jsxs("label",{className:"num-field",children:[P.jsx("span",{children:"X (m)"}),P.jsx("input",{type:"number",step:.1,value:Number(e.position.x.toFixed(3)),onChange:o=>t.setListener({position:{x:Number(o.target.value)}})})]}),P.jsxs("label",{className:"num-field",children:[P.jsx("span",{children:"Y (m)"}),P.jsx("input",{type:"number",step:.1,value:Number(e.position.y.toFixed(3)),onChange:o=>t.setListener({position:{y:Number(o.target.value)}})})]}),P.jsxs("label",{className:"num-field",children:[P.jsx("span",{children:"Z (m)"}),P.jsx("input",{type:"number",step:.1,value:Number(e.position.z.toFixed(3)),onChange:o=>t.setListener({position:{z:Number(o.target.value)}})})]})]}),P.jsxs("label",{className:"slider-field",children:[P.jsxs("span",{children:["偏航 yaw ",P.jsxs("b",{children:[r.toFixed(0),"°"]}),P.jsx("em",{className:"muted",children:"（0° 朝 -Z，+90° 朝 +X 即右转）"})]}),P.jsx("input",{type:"range",min:-180,max:180,step:1,value:Math.round(r>180?r-360:r),onChange:o=>t.setListener({yaw:Number(o.target.value)*Math.PI/180})})]}),P.jsxs("label",{className:"slider-field",children:[P.jsxs("span",{children:["俯仰 pitch ",P.jsxs("b",{children:[s.toFixed(0),"°"]}),P.jsx("em",{className:"muted",children:"（正为向上）"})]}),P.jsx("input",{type:"range",min:-60,max:60,step:1,value:Math.round(s),onChange:o=>t.setListener({pitch:Number(o.target.value)*Math.PI/180})})]}),P.jsxs("div",{className:"listener-vec muted",children:[P.jsxs("span",{children:["前方 (",n.x.toFixed(2),", ",n.y.toFixed(2),", ",n.z.toFixed(2),")"]}),P.jsxs("span",{children:["右方 (",i.x.toFixed(2),", ",i.y.toFixed(2),", ",i.z.toFixed(2),")"]})]}),P.jsxs("div",{className:"listener-actions",children:[P.jsx("button",{className:"btn small",onClick:()=>{t.setListener({yaw:0,pitch:0})},children:"朝向归零"}),P.jsx("button",{className:"btn small",onClick:()=>t.setListener({position:{x:0,y:0,z:3}}),children:"位置归位"}),P.jsx("button",{className:"btn small",onClick:()=>t.setListener({yaw:e.yaw-Math.PI/12}),children:"↺ 左转 15°"}),P.jsx("button",{className:"btn small",onClick:()=>t.setListener({yaw:e.yaw+Math.PI/12}),children:"右转 15° ↻"})]})]})}const ag=[{value:"inverse",label:"inverse 反距离",formula:"g = refDistance / (refDistance + rolloff · max(d − ref, 0))"},{value:"linear",label:"linear 线性",formula:"g = 1 − rolloff · (d − ref) / (max − ref)"},{value:"exponential",label:"exponential 指数",formula:"g = (max(d, ref) / ref) ^ (−rolloff)"}];function ZA({api:t}){const e=t.doc.spatial,n=ag.find(i=>i.value===e.distanceModel);return P.jsxs("div",{className:"panel",children:[P.jsx("div",{className:"panel-title",children:"HRTF 与距离衰减"}),P.jsxs("label",{className:"num-field wide",children:[P.jsx("span",{children:"距离模型（PannerNode.distanceModel）"}),P.jsx("select",{value:e.distanceModel,onChange:i=>t.setSpatial({distanceModel:i.target.value}),children:ag.map(i=>P.jsx("option",{value:i.value,children:i.label},i.value))})]}),P.jsx("div",{className:"formula muted",children:n.formula}),P.jsxs("div",{className:"num-grid three",children:[P.jsxs("label",{className:"num-field",children:[P.jsx("span",{children:"refDistance (m)"}),P.jsx("input",{type:"number",min:.01,step:.1,value:e.refDistance,onChange:i=>t.setSpatial({refDistance:Math.max(.01,Number(i.target.value))})})]}),P.jsxs("label",{className:"num-field",children:[P.jsx("span",{children:"rolloffFactor"}),P.jsx("input",{type:"number",min:0,step:.05,value:e.rolloffFactor,onChange:i=>t.setSpatial({rolloffFactor:Math.max(0,Number(i.target.value))})})]}),P.jsxs("label",{className:"num-field",children:[P.jsx("span",{children:"maxDistance (m)"}),P.jsx("input",{type:"number",min:.01,step:1,value:e.maxDistance,onChange:i=>t.setSpatial({maxDistance:Math.max(.01,Number(i.target.value))})})]})]}),P.jsxs("label",{className:"slider-field",children:[P.jsxs("span",{children:["移动平滑时间常数 ",P.jsxs("b",{children:[(e.positionTimeConstant*1e3).toFixed(0)," ms"]}),P.jsx("em",{className:"muted",children:"（仅平滑参数，不重启声源）"})]}),P.jsx("input",{type:"range",min:5,max:300,step:5,value:e.positionTimeConstant*1e3,onChange:i=>t.setSpatial({positionTimeConstant:Number(i.target.value)/1e3})})]}),P.jsxs("p",{className:"muted small",children:["定位模型固定为 ",P.jsx("code",{children:"HRTF"}),"（PannerNode.panningModel），衰减由浏览器在音频线程实时计算； 界面显示的距离增益仅为同公式的理论值。"]})]})}function QA({api:t}){const e=fe.useRef(null),n=i=>{i&&t.addFiles(i),e.current&&(e.current.value="")};return P.jsxs("div",{className:"master-bar",children:[P.jsxs("div",{className:"master-add",children:[P.jsxs("label",{className:"btn",children:["＋ 导入本地音轨",P.jsx("input",{ref:e,type:"file",accept:"audio/*",multiple:!0,hidden:!0,onChange:i=>n(i.target.files)})]}),P.jsxs("div",{className:"sample-buttons",children:[P.jsx("button",{className:"btn",onClick:()=>t.addSample("pulse"),children:"脉冲"}),P.jsx("button",{className:"btn",onClick:()=>t.addSample("tone"),children:"单音"}),P.jsx("button",{className:"btn",onClick:()=>JA(t),children:"双声源 A+B"})]})]}),P.jsxs("div",{className:"master-transport",children:[P.jsx("button",{className:"btn primary",onClick:()=>t.playAll(),children:"▶ 全部播放（同步检查）"}),P.jsx("button",{className:"btn",onClick:()=>t.stopAll(),children:"⏹ 全部停止"})]}),P.jsx("div",{className:"master-gains",children:P.jsxs("label",{className:"gain-fader master",children:[P.jsx("span",{children:"主输出"}),P.jsx("button",{type:"button",className:`btn mini ${t.doc.masterMuted?"active":""}`,onClick:()=>t.setMasterMuted(!t.doc.masterMuted),children:"M"}),P.jsx("input",{type:"range",min:0,max:1.5,step:.01,value:t.doc.masterGain,onChange:i=>t.setMasterGain(Number(i.target.value))}),P.jsx("b",{children:Ul(t.doc.masterMuted?0:t.doc.masterGain)})]})}),P.jsx(r0,{levels:t.levels[di]??{l:0,r:0,clipL:!1,clipR:!1},onClear:()=>t.clearClips(di)})]})}async function JA(t){const e="duoA",n="duoB";await t.addSample(e),await t.addSample(n)}function eC({api:t}){const[e,n]=fe.useState(t.loadedProjectName??""),[i,r]=fe.useState(!1);return P.jsxs("div",{className:"project-bar",children:[P.jsxs("div",{className:"project-current",children:[P.jsx("span",{className:"muted",children:"工程："}),P.jsx("b",{children:t.loadedProjectName??"未命名会话（自动保存）"}),P.jsx("span",{className:`save-state ${t.saveState}`,children:t.saveState==="saving"?"保存中…":t.saveState==="saved"?"已本地保存":""})]}),P.jsxs("div",{className:"project-actions",children:[P.jsx("input",{className:"project-name-input",placeholder:"工程名称",value:e,onChange:s=>n(s.target.value)}),P.jsx("button",{className:"btn small",onClick:()=>t.saveProjectAs(e),children:"另存工程"}),P.jsx("button",{className:"btn small",onClick:()=>r(s=>!s),children:i?"收起列表":"工程列表"}),P.jsx("button",{className:"btn small ghost",onClick:()=>{confirm("新建将清空当前布局（已另存的工程不受影响），继续？")&&t.newProject()},children:"新建"})]}),i&&P.jsxs("div",{className:"project-list",children:[t.projects.length===0&&P.jsx("div",{className:"muted small",children:"还没有保存过工程。"}),t.projects.map(s=>P.jsxs("div",{className:`project-item ${t.loadedProjectId===s.id?"active":""}`,children:[P.jsx("span",{className:"project-item-name",children:s.name}),P.jsx("span",{className:"muted small",children:new Date(s.savedAt).toLocaleString()}),P.jsx("button",{className:"btn mini",onClick:()=>{t.loadProject(s.id),r(!1)},children:"载入"}),P.jsx("button",{className:"btn mini ghost danger",onClick:()=>{confirm(`删除工程「${s.name}」？`)&&t.deleteProject(s.id)},children:"删"})]},s.id))]})]})}function tC({api:t}){const[e,n]=fe.useState(!1);if(t.unlock==="unlocked")return null;const i=t.unlock==="failed";return e?P.jsx("button",{className:`unlock-pill ${i?"failed":""}`,onClick:()=>n(!1),title:"展开音频解锁",children:i?"⚠ 音频解锁失败，点击重试":"🔇 音频未解锁，点击启用"}):P.jsx("div",{className:"unlock-overlay",children:P.jsxs("div",{className:`unlock-card ${i?"failed":""}`,children:[P.jsx("h2",{children:i?"音频解锁失败":"启用空间音频"}),P.jsx("p",{children:"浏览器要求先由一次点击来解锁音频输出。所有音频文件只保存在本机 IndexedDB， 不会上传到任何服务器。"}),i&&P.jsxs("p",{className:"unlock-error",children:["⚠ ",t.unlockError??"AudioContext 无法启动，请检查浏览器自动播放策略后重试。"]}),P.jsx("button",{className:"btn primary big",onClick:()=>void t.unlockAudio(),children:i?"重新解锁音频":"点击解锁并开始试听"}),P.jsxs("p",{className:"muted small",children:["解锁前你仍可",P.jsx("a",{onClick:()=>n(!0),className:"dismiss-link",children:"先编辑布局"}),"； 参数会本地保存，但重载后不会自动播放。"]})]})})}function nC(){const t=gS(),[e,n]=fe.useState("3d"),i=fe.useCallback((o,a)=>t.moveTrack(o,a),[t]),r=fe.useCallback(o=>t.setListener({position:o}),[t]),s=fe.useCallback(o=>t.setListener({yaw:o}),[t]);return P.jsxs("div",{className:"app",children:[P.jsxs("header",{className:"app-header",children:[P.jsxs("div",{className:"brand",children:[P.jsx("span",{className:"brand-mark",children:"◉"})," 空间声像工作台",P.jsx("span",{className:"brand-sub",children:"HRTF · PannerNode · 纯本地浏览器"})]}),P.jsxs("div",{className:"view-switch",children:[P.jsx("button",{className:`btn small ${e==="3d"?"active":""}`,onClick:()=>n("3d"),children:"3D 场景"}),P.jsx("button",{className:`btn small ${e==="2d"?"active":""}`,onClick:()=>n("2d"),children:"2D 俯视"})]}),P.jsxs("div",{className:"coords-help",children:["右手坐标：",P.jsx("b",{children:"+X 右耳方向"})," · ",P.jsx("b",{children:"+Y 上"})," · ",P.jsx("b",{children:"听者前方 −Z"})," · yaw 正值向右转身"]})]}),P.jsx(eC,{api:t}),P.jsxs("div",{className:"layout",children:[P.jsxs("aside",{className:"sidebar left",children:[P.jsx(QA,{api:t}),P.jsx($A,{api:t})]}),P.jsxs("main",{className:"stage",children:[P.jsx("div",{className:`view-container ${e==="3d"?"show":""}`,children:P.jsx(jA,{api:t,onMoveSource:i,onMoveListener:r})}),P.jsx("div",{className:`view-container ${e==="2d"?"show":""}`,children:P.jsx(XA,{tracks:t.doc.tracks,listener:t.doc.listener,selectedId:t.selectedId,onSelect:t.selectTrack,onMoveSource:i,onMoveListener:r,onRotateListener:s})})]}),P.jsxs("aside",{className:"sidebar right",children:[P.jsx(KA,{api:t}),P.jsx(qA,{api:t}),P.jsx(ZA,{api:t})]})]}),t.globalError&&P.jsxs("div",{className:"global-toast",children:["⚠ ",t.globalError,P.jsx("button",{className:"btn mini",onClick:t.dismissGlobalError,children:"知道了"})]}),P.jsx(tC,{api:t})]})}Au.createRoot(document.getElementById("root")).render(P.jsx(R0.StrictMode,{children:P.jsx(nC,{})}));
