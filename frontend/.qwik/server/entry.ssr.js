import{j as y,_ as xe,s as Ae,a as De,F as W,g as Ie,c as Y,i as E,u as se,b as ae,d as Le,e as k,f as S,h as Re,k as Ne,S as Te,l as Be,n as ve,m as B,o as Oe,p as K,q as w,r as Qe,t as Ue,v as $,w as He,x as ge,y as Fe,z as fe,A as Ve,B as O}from"./q-CZcn2bVd.js";const de={manifestHash:"uvlwhr",core:"q-DwC4EpOz.js",preloader:"q-DoNi8vyY.js",qwikLoader:"q-naDMFAHy.js",bundleGraphAsset:"assets/B73UqOf1-bundle-graph.json",injections:[],mapping:{s_9xDfAaRnVDM:"q-uBpjVCS4.js",s_H6p3pUo6r94:"q-Dx-S2KAn.js",s_bi173RN0a1Q:"q-BTbWLjGE.js",s_0STXiMVyVPU:"q-Cj5aD7s-.js",s_7bbR6hOTObs:"q-CicPOp4-.js",s_HF4VibZ2v38:"q-C2L57ZFa.js",s_LdzV1aJSkTM:"q-l1MV1JJZ.js",s_fDVHBDHt0OQ:"q-BPb6HvjP.js",s_l3BYZmZKvrE:"q-Demx37qd.js",s_oWN5EWBjkaY:"q-uBpjVCS4.js",s_sgDwJMKCmAY:"q-D_SuFbqe.js",s_xjDDZoN40kI:"q-BTbWLjGE.js",s_y9bzKNd7Ym8:"q-CmYAOlPs.js",s_Apq4HGpFodU:"q-uBpjVCS4.js",s_A4Ppc3yBbfQ:"q-C98MVzQq.js",s_S0vcnqUSHE8:"q-7iGcTv9w.js",s_bEe3Uf0Gi64:"q-Qur7RmZl.js",s_bHyS0YiEovo:"q-aOT7YTKz.js",s_2FNHxh220gI:"q-BTbWLjGE.js",s_PkpEtDZS50Y:"q-l1MV1JJZ.js",s_QH9Rdk0C18Q:"q-CmYAOlPs.js",s_bACI7g0fYM4:"q-uBpjVCS4.js",s_eaiFRcU94bo:"q-BTbWLjGE.js",s_jqjCtAyYVJw:"q-uBpjVCS4.js",s_l64sCEPSqE4:"q-BTbWLjGE.js",s_sWIQmHyOQbs:"q-CmYAOlPs.js",s_xRS0FRsHhZ4:"q-CicPOp4-.js"}};/**
 * @license
 * @builder.io/qwik/server 1.17.1
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/QwikDev/qwik/blob/main/LICENSE
 */var We=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,n)=>(typeof require<"u"?require:e)[n]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')}),Ye="<sync>";function Je(t,e){const n=e==null?void 0:e.mapper,r=t.symbolMapper?t.symbolMapper:(s,i,a)=>{var l;if(n){const f=H(s),c=n[f];if(!c){if(f===Ye)return[f,""];if((l=globalThis.__qwik_reg_symbols)==null?void 0:l.has(f))return[s,"_"];if(a)return[s,`${a}?qrl=${s}`];console.error("Cannot resolve symbol",s,"in",n,a)}return c}};return{isServer:!0,async importSymbol(s,i,a){var m;const l=H(a),f=(m=globalThis.__qwik_reg_symbols)==null?void 0:m.get(l);if(f)return f;let c=String(i);c.endsWith(".js")||(c+=".js");const u=We(c);if(!(a in u))throw new Error(`Q-ERROR: missing symbol '${a}' in module '${c}'.`);return u[a]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:s=>new Promise(i=>{setTimeout(()=>{i(s())})}),chunkForSymbol(s,i,a){return r(s,n,a)}}}async function Ge(t,e){const n=Je(t,e);Ae(n)}var H=t=>{const e=t.lastIndexOf("_");return e>-1?t.slice(e+1):t},ze="q:instance",M={$DEBUG$:!1,$invPreloadProbability$:.65},Ze=Date.now(),Ke=/\.[mc]?js$/,qe=0,Xe=1,Me=2,et=3,ee,te,tt=(t,e)=>({$name$:t,$state$:Ke.test(t)?qe:et,$deps$:we?e==null?void 0:e.map(n=>({...n,$factor$:1})):e,$inverseProbability$:1,$createdTs$:Date.now(),$waitedMs$:0,$loadedMs$:0}),nt=t=>{const e=new Map;let n=0;for(;n<t.length;){const r=t[n++],o=[];let s,i=1;for(;s=t[n],typeof s=="number";)s<0?i=-s/10:o.push({$name$:t[s],$importProbability$:i,$factor$:1}),n++;e.set(r,o)}return e},_e=t=>{let e=ne.get(t);if(!e){let n;if(te){if(n=te.get(t),!n)return;n.length||(n=void 0)}e=tt(t,n),ne.set(t,e)}return e},rt=(t,e)=>{e&&("debug"in e&&(M.$DEBUG$=!!e.debug),typeof e.preloadProbability=="number"&&(M.$invPreloadProbability$=1-e.preloadProbability)),!(ee!=null||!t)&&(ee="",te=nt(t))},ne=new Map,we,F,Se=0,R=[],ot=(...t)=>{console.log(`Preloader ${Date.now()-Ze}ms ${Se}/${R.length} queued>`,...t)},st=()=>{ne.clear(),F=!1,we=!0,Se=0,R.length=0},at=()=>{F&&(R.sort((t,e)=>t.$inverseProbability$-e.$inverseProbability$),F=!1)},it=()=>{at();let t=.4;const e=[];for(const n of R){const r=Math.round((1-n.$inverseProbability$)*10);r!==t&&(t=r,e.push(t)),e.push(n.$name$)}return e},$e=(t,e,n)=>{if(n!=null&&n.has(t))return;const r=t.$inverseProbability$;if(t.$inverseProbability$=e,!(r-t.$inverseProbability$<.01)&&(ee!=null&&t.$state$<Me&&(t.$state$===qe&&(t.$state$=Xe,R.push(t),M.$DEBUG$&&ot(`queued ${Math.round((1-t.$inverseProbability$)*100)}%`,t.$name$)),F=!0),t.$deps$)){n||(n=new Set),n.add(t);const o=1-t.$inverseProbability$;for(const s of t.$deps$){const i=_e(s.$name$);if(i.$inverseProbability$===0)continue;let a;if(o===1||o>=.99&&re<100)re++,a=Math.min(.01,1-s.$importProbability$);else{const l=1-s.$importProbability$*o,f=s.$factor$,c=l/f;a=Math.max(.02,i.$inverseProbability$*c),s.$factor$=c}$e(i,a,n)}}},me=(t,e)=>{const n=_e(t);n&&n.$inverseProbability$>e&&$e(n,e)},re,lt=(t,e)=>{if(!(t!=null&&t.length))return;re=0;let n=e?1-e:.4;if(Array.isArray(t))for(let r=t.length-1;r>=0;r--){const o=t[r];typeof o=="number"?n=1-o/10:me(o,n)}else me(t,n)};function ct(t){const e=[],n=r=>{if(r)for(const o of r)e.includes(o.url)||(e.push(o.url),o.imports&&n(o.imports))};return n(t),e}var ut=t=>{var n;const e=Ie();return(n=t==null?void 0:t.qrls)==null?void 0:n.map(r=>{var a;const o=r.$refSymbol$||r.$symbol$,s=r.$chunk$,i=e.chunkForSymbol(o,s,(a=r.dev)==null?void 0:a.file);return i?i[1]:s}).filter(Boolean)};function ft(t,e,n){const r=e.prefetchStrategy;if(r===null)return[];if(!(n!=null&&n.manifest.bundleGraph))return ut(t);if(typeof(r==null?void 0:r.symbolsToPrefetch)=="function")try{const s=r.symbolsToPrefetch({manifest:n.manifest});return ct(s)}catch(s){console.error("getPrefetchUrls, symbolsToPrefetch()",s)}const o=new Set;for(const s of(t==null?void 0:t.qrls)||[]){const i=H(s.$refSymbol$||s.$symbol$);i&&i.length>=10&&o.add(i)}return[...o]}var dt=(t,e)=>{if(!(e!=null&&e.manifest.bundleGraph))return[...new Set(t)];st();let n=.99;for(const r of t.slice(0,15))lt(r,n),n*=.85;return it()},oe=(t,e)=>{if(e==null)return null;const n=`${t}${e}`.split("/"),r=[];for(const o of n)o===".."&&r.length>0?r.pop():r.push(o);return r.join("/")},mt=(t,e,n,r,o)=>{var l;const s=oe(t,(l=e==null?void 0:e.manifest)==null?void 0:l.preloader),i="/"+(e==null?void 0:e.manifest.bundleGraphAsset);if(s&&i&&n!==!1){const f=typeof n=="object"?{debug:n.debug,preloadProbability:n.ssrPreloadProbability}:void 0;rt(e==null?void 0:e.manifest.bundleGraph,f);const c=[];n!=null&&n.debug&&c.push("d:1"),n!=null&&n.maxIdlePreloads&&c.push(`P:${n.maxIdlePreloads}`),n!=null&&n.preloadProbability&&c.push(`Q:${n.preloadProbability}`);const u=c.length?`,{${c.join(",")}}`:"",m=`let b=fetch("${i}");import("${s}").then(({l})=>l(${JSON.stringify(t)},b${u}));`;r.push(y("link",{rel:"modulepreload",href:s,nonce:o}),y("link",{rel:"preload",href:i,as:"fetch",crossorigin:"anonymous",nonce:o}),y("script",{type:"module",async:!0,dangerouslySetInnerHTML:m,nonce:o}))}const a=oe(t,e==null?void 0:e.manifest.core);a&&r.push(y("link",{rel:"modulepreload",href:a,nonce:o}))},pt=(t,e,n,r,o)=>{if(r.length===0||n===!1)return null;const{ssrPreloads:s,ssrPreloadProbability:i}=bt(typeof n=="boolean"?void 0:n);let a=s;const l=[],f=[],c=e==null?void 0:e.manifest.manifestHash;if(a){const p=e==null?void 0:e.manifest.preloader,d=e==null?void 0:e.manifest.core,g=dt(r,e);let _=4;const A=i*10;for(const b of g)if(typeof b=="string"){if(_<A)break;if(b===p||b===d)continue;if(f.push(b),--a===0)break}else _=b}const u=oe(t,c&&(e==null?void 0:e.manifest.preloader));let v=f.length?`${JSON.stringify(f)}.map((l,e)=>{e=document.createElement('link');e.rel='modulepreload';e.href=${JSON.stringify(t)}+l;document.head.appendChild(e)});`:"";return u&&(v+=`window.addEventListener('load',f=>{f=_=>import("${u}").then(({p})=>p(${JSON.stringify(r)}));try{requestIdleCallback(f,{timeout:2000})}catch(e){setTimeout(f,200)}})`),v&&l.push(y("script",{type:"module","q:type":"preload",async:!0,dangerouslySetInnerHTML:v,nonce:o})),l.length>0?y(W,{children:l}):null},ht=(t,e,n,r,o)=>{var s;if(n.preloader!==!1){const i=ft(e,n,r);if(i.length>0){const a=pt(t,r,n.preloader,i,(s=n.serverData)==null?void 0:s.nonce);a&&o.push(a)}}};function bt(t){return{...yt,...t}}var yt={ssrPreloads:7,ssrPreloadProbability:.5,debug:!1,maxIdlePreloads:25,preloadProbability:.35},vt='const t=document,e=window,n=new Set,o=new Set([t]);let r;const s=(t,e)=>Array.from(t.querySelectorAll(e)),a=t=>{const e=[];return o.forEach(n=>e.push(...s(n,t))),e},i=t=>{w(t),s(t,"[q\\\\:shadowroot]").forEach(t=>{const e=t.shadowRoot;e&&i(e)})},c=t=>t&&"function"==typeof t.then,l=(t,e,n=e.type)=>{a("[on"+t+"\\\\:"+n+"]").forEach(o=>{b(o,t,e,n)})},f=e=>{if(void 0===e._qwikjson_){let n=(e===t.documentElement?t.body:e).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===n.getAttribute("type")){e._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/gi,"<$1"));break}n=n.previousElementSibling}}},p=(t,e)=>new CustomEvent(t,{detail:e}),b=async(e,n,o,r=o.type)=>{const s="on"+n+":"+r;e.hasAttribute("preventdefault:"+r)&&o.preventDefault(),e.hasAttribute("stoppropagation:"+r)&&o.stopPropagation();const a=e._qc_,i=a&&a.li.filter(t=>t[0]===s);if(i&&i.length>0){for(const t of i){const n=t[1].getFn([e,o],()=>e.isConnected)(o,e),r=o.cancelBubble;c(n)&&await n,r&&o.stopPropagation()}return}const l=e.getAttribute(s);if(l){const n=e.closest("[q\\\\:container]"),r=n.getAttribute("q:base"),s=n.getAttribute("q:version")||"unknown",a=n.getAttribute("q:manifest-hash")||"dev",i=new URL(r,t.baseURI);for(const p of l.split("\\n")){const l=new URL(p,i),b=l.href,h=l.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",q=performance.now();let _,d,y;const w=p.startsWith("#"),g={qBase:r,qManifest:a,qVersion:s,href:b,symbol:h,element:e,reqTime:q};if(w){const e=n.getAttribute("q:instance");_=(t["qFuncs_"+e]||[])[Number.parseInt(h)],_||(d="sync",y=Error("sym:"+h))}else{u("qsymbol",g);const t=l.href.split("#")[0];try{const e=import(t);f(n),_=(await e)[h],_||(d="no-symbol",y=Error(`${h} not in ${t}`))}catch(t){d||(d="async"),y=t}}if(!_){u("qerror",{importError:d,error:y,...g}),console.error(y);break}const m=t.__q_context__;if(e.isConnected)try{t.__q_context__=[e,o,l];const n=_(o,e);c(n)&&await n}catch(t){u("qerror",{error:t,...g})}finally{t.__q_context__=m}}}},u=(e,n)=>{t.dispatchEvent(p(e,n))},h=t=>t.replace(/([A-Z])/g,t=>"-"+t.toLowerCase()),q=async t=>{let e=h(t.type),n=t.target;for(l("-document",t,e);n&&n.getAttribute;){const o=b(n,"",t,e);let r=t.cancelBubble;c(o)&&await o,r||(r=r||t.cancelBubble||n.hasAttribute("stoppropagation:"+t.type)),n=t.bubbles&&!0!==r?n.parentElement:null}},_=t=>{l("-window",t,h(t.type))},d=()=>{const s=t.readyState;if(!r&&("interactive"==s||"complete"==s)&&(o.forEach(i),r=1,u("qinit"),(e.requestIdleCallback??e.setTimeout).bind(e)(()=>u("qidle")),n.has("qvisible"))){const t=a("[on\\\\:qvisible]"),e=new IntersectionObserver(t=>{for(const n of t)n.isIntersecting&&(e.unobserve(n.target),b(n.target,"",p("qvisible",n)))});t.forEach(t=>e.observe(t))}},y=(t,e,n,o=!1)=>{t.addEventListener(e,n,{capture:o,passive:!1})},w=(...t)=>{for(const r of t)"string"==typeof r?n.has(r)||(o.forEach(t=>y(t,r,q,!0)),y(e,r,_,!0),n.add(r)):o.has(r)||(n.forEach(t=>y(r,t,q,!0)),o.add(r))};if(!("__q_context__"in t)){t.__q_context__=0;const r=e.qwikevents;r&&(Array.isArray(r)?w(...r):w("click","input")),e.qwikevents={events:n,roots:o,push:w},y(t,"readystatechange",d),d()}',gt=`const doc = document;
const win = window;
const events = /* @__PURE__ */ new Set();
const roots = /* @__PURE__ */ new Set([doc]);
let hasInitialized;
const nativeQuerySelectorAll = (root, selector) => Array.from(root.querySelectorAll(selector));
const querySelectorAll = (query) => {
  const elements = [];
  roots.forEach((root) => elements.push(...nativeQuerySelectorAll(root, query)));
  return elements;
};
const findShadowRoots = (fragment) => {
  processEventOrNode(fragment);
  nativeQuerySelectorAll(fragment, "[q\\\\:shadowroot]").forEach((parent) => {
    const shadowRoot = parent.shadowRoot;
    shadowRoot && findShadowRoots(shadowRoot);
  });
};
const isPromise = (promise) => promise && typeof promise.then === "function";
const broadcast = (infix, ev, type = ev.type) => {
  querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((el) => {
    dispatch(el, infix, ev, type);
  });
};
const resolveContainer = (containerEl) => {
  if (containerEl._qwikjson_ === void 0) {
    const parentJSON = containerEl === doc.documentElement ? doc.body : containerEl;
    let script = parentJSON.lastElementChild;
    while (script) {
      if (script.tagName === "SCRIPT" && script.getAttribute("type") === "qwik/json") {
        containerEl._qwikjson_ = JSON.parse(
          script.textContent.replace(/\\\\x3C(\\/?script)/gi, "<$1")
        );
        break;
      }
      script = script.previousElementSibling;
    }
  }
};
const createEvent = (eventName, detail) => new CustomEvent(eventName, {
  detail
});
const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
  const attrName = "on" + onPrefix + ":" + eventName;
  if (element.hasAttribute("preventdefault:" + eventName)) {
    ev.preventDefault();
  }
  if (element.hasAttribute("stoppropagation:" + eventName)) {
    ev.stopPropagation();
  }
  const ctx = element._qc_;
  const relevantListeners = ctx && ctx.li.filter((li) => li[0] === attrName);
  if (relevantListeners && relevantListeners.length > 0) {
    for (const listener of relevantListeners) {
      const results = listener[1].getFn([element, ev], () => element.isConnected)(ev, element);
      const cancelBubble = ev.cancelBubble;
      if (isPromise(results)) {
        await results;
      }
      if (cancelBubble) {
        ev.stopPropagation();
      }
    }
    return;
  }
  const attrValue = element.getAttribute(attrName);
  if (attrValue) {
    const container = element.closest("[q\\\\:container]");
    const qBase = container.getAttribute("q:base");
    const qVersion = container.getAttribute("q:version") || "unknown";
    const qManifest = container.getAttribute("q:manifest-hash") || "dev";
    const base = new URL(qBase, doc.baseURI);
    for (const qrl of attrValue.split("\\n")) {
      const url = new URL(qrl, base);
      const href = url.href;
      const symbol = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
      const reqTime = performance.now();
      let handler;
      let importError;
      let error;
      const isSync = qrl.startsWith("#");
      const eventData = {
        qBase,
        qManifest,
        qVersion,
        href,
        symbol,
        element,
        reqTime
      };
      if (isSync) {
        const hash = container.getAttribute("q:instance");
        handler = (doc["qFuncs_" + hash] || [])[Number.parseInt(symbol)];
        if (!handler) {
          importError = "sync";
          error = new Error("sym:" + symbol);
        }
      } else {
        emitEvent("qsymbol", eventData);
        const uri = url.href.split("#")[0];
        try {
          const module = import(
                        uri
          );
          resolveContainer(container);
          handler = (await module)[symbol];
          if (!handler) {
            importError = "no-symbol";
            error = new Error(\`\${symbol} not in \${uri}\`);
          }
        } catch (err) {
          importError || (importError = "async");
          error = err;
        }
      }
      if (!handler) {
        emitEvent("qerror", {
          importError,
          error,
          ...eventData
        });
        console.error(error);
        break;
      }
      const previousCtx = doc.__q_context__;
      if (element.isConnected) {
        try {
          doc.__q_context__ = [element, ev, url];
          const results = handler(ev, element);
          if (isPromise(results)) {
            await results;
          }
        } catch (error2) {
          emitEvent("qerror", { error: error2, ...eventData });
        } finally {
          doc.__q_context__ = previousCtx;
        }
      }
    }
  }
};
const emitEvent = (eventName, detail) => {
  doc.dispatchEvent(createEvent(eventName, detail));
};
const camelToKebab = (str) => str.replace(/([A-Z])/g, (a) => "-" + a.toLowerCase());
const processDocumentEvent = async (ev) => {
  let type = camelToKebab(ev.type);
  let element = ev.target;
  broadcast("-document", ev, type);
  while (element && element.getAttribute) {
    const results = dispatch(element, "", ev, type);
    let cancelBubble = ev.cancelBubble;
    if (isPromise(results)) {
      await results;
    }
    cancelBubble || (cancelBubble = cancelBubble || ev.cancelBubble || element.hasAttribute("stoppropagation:" + ev.type));
    element = ev.bubbles && cancelBubble !== true ? element.parentElement : null;
  }
};
const processWindowEvent = (ev) => {
  broadcast("-window", ev, camelToKebab(ev.type));
};
const processReadyStateChange = () => {
  const readyState = doc.readyState;
  if (!hasInitialized && (readyState == "interactive" || readyState == "complete")) {
    roots.forEach(findShadowRoots);
    hasInitialized = 1;
    emitEvent("qinit");
    const riC = win.requestIdleCallback ?? win.setTimeout;
    riC.bind(win)(() => emitEvent("qidle"));
    if (events.has("qvisible")) {
      const results = querySelectorAll("[on\\\\:qvisible]");
      const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            observer.unobserve(entry.target);
            dispatch(entry.target, "", createEvent("qvisible", entry));
          }
        }
      });
      results.forEach((el) => observer.observe(el));
    }
  }
};
const addEventListener = (el, eventName, handler, capture = false) => {
  el.addEventListener(eventName, handler, { capture, passive: false });
};
const processEventOrNode = (...eventNames) => {
  for (const eventNameOrNode of eventNames) {
    if (typeof eventNameOrNode === "string") {
      if (!events.has(eventNameOrNode)) {
        roots.forEach(
          (root) => addEventListener(root, eventNameOrNode, processDocumentEvent, true)
        );
        addEventListener(win, eventNameOrNode, processWindowEvent, true);
        events.add(eventNameOrNode);
      }
    } else {
      if (!roots.has(eventNameOrNode)) {
        events.forEach(
          (eventName) => addEventListener(eventNameOrNode, eventName, processDocumentEvent, true)
        );
        roots.add(eventNameOrNode);
      }
    }
  }
};
if (!("__q_context__" in doc)) {
  doc.__q_context__ = 0;
  const qwikevents = win.qwikevents;
  if (qwikevents) {
    if (Array.isArray(qwikevents)) {
      processEventOrNode(...qwikevents);
    } else {
      processEventOrNode("click", "input");
    }
  }
  win.qwikevents = {
    events,
    roots,
    push: processEventOrNode
  };
  addEventListener(doc, "readystatechange", processReadyStateChange);
  processReadyStateChange();
}`;function qt(t={}){return t.debug?gt:vt}function X(){if(typeof performance>"u")return()=>0;const t=performance.now();return()=>(performance.now()-t)/1e6}function _t(t){let e=t.base;return typeof t.base=="function"&&(e=t.base(t)),typeof e=="string"?(e.endsWith("/")||(e+="/"),e):"/build/"}var wt="<!DOCTYPE html>";async function St(t,e){var ie,le;let n=e.stream,r=0,o=0,s=0,i=0,a="",l;const f=((ie=e.streaming)==null?void 0:ie.inOrder)??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},c=e.containerTagName??"html",u=e.containerAttributes??{},m=n,v=X(),p=_t(e),d=Pt(e.manifest),g=(le=e.serverData)==null?void 0:le.nonce;function _(){a&&(m.write(a),a="",r=0,s++,s===1&&(i=v()))}function A(h){const q=h.length;r+=q,o+=q,a+=h}switch(f.strategy){case"disabled":n={write:A};break;case"direct":n=m;break;case"auto":let h=0,q=!1;const ce=f.maximunChunk??0,Z=f.maximunInitialChunk??0;n={write(D){D==="<!--qkssr-f-->"?q||(q=!0):D==="<!--qkssr-pu-->"?h++:D==="<!--qkssr-po-->"?h--:A(D),h===0&&(q||r>=(s===0?Z:ce))&&(q=!1,_())}};break}c==="html"?n.write(wt):n.write("<!--cq-->"),d||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."),await Ge(e,d);const b=d==null?void 0:d.manifest.injections,C=b?b.map(h=>y(h.tag,h.attributes??{})):[];let P=e.qwikLoader?typeof e.qwikLoader=="object"?e.qwikLoader.include==="never"?2:0:e.qwikLoader==="inline"?1:e.qwikLoader==="never"?2:0:0;const N=d==null?void 0:d.manifest.qwikLoader;if(P===0&&!N&&(P=1),P===0)C.unshift(y("link",{rel:"modulepreload",href:`${p}${N}`,nonce:g}),y("script",{type:"module",async:!0,src:`${p}${N}`,nonce:g}));else if(P===1){const h=qt({debug:e.debug});C.unshift(y("script",{id:"qwikloader",type:"module",async:!0,nonce:g,dangerouslySetInnerHTML:h}))}mt(p,d,e.preloader,C,g);const J=X(),G=[];let T=0,j=0;await xe(t,{stream:n,containerTagName:c,containerAttributes:u,serverData:e.serverData,base:p,beforeContent:C,beforeClose:async(h,q,ce,Z)=>{T=J();const D=X();l=await De(h,q,void 0,Z);const I=[];ht(p,l,e,d,I);const je=JSON.stringify(l.state,void 0,void 0);if(I.push(y("script",{type:"qwik/json",dangerouslySetInnerHTML:Et(je),nonce:g})),l.funcs.length>0){const L=u[ze];I.push(y("script",{"q:func":"qwik/json",dangerouslySetInnerHTML:jt(L,l.funcs),nonce:g}))}const ue=Array.from(q.$events$,L=>JSON.stringify(L));if(ue.length>0){const L=`(window.qwikevents||(window.qwikevents=[])).push(${ue.join(",")})`;I.push(y("script",{dangerouslySetInnerHTML:L,nonce:g}))}return kt(G,h),j=D(),y(W,{children:I})},manifestHash:(d==null?void 0:d.manifest.manifestHash)||"dev"+$t()}),c!=="html"&&n.write("<!--/cq-->"),_();const z=l.resources.some(h=>h._cache!==1/0);return{prefetchResources:void 0,snapshotResult:l,flushes:s,manifest:d==null?void 0:d.manifest,size:o,isStatic:!z,timing:{render:T,snapshot:j,firstFlush:i}}}function $t(){return Math.random().toString(36).slice(2)}function Pt(t){const e=t?{...de,...t}:de;if(!e||"mapper"in e)return e;if(e.mapping){const n={};return Object.entries(e.mapping).forEach(([r,o])=>{n[H(r)]=[r,o]}),{mapper:n,manifest:e,injections:e.injections||[]}}}var Et=t=>t.replace(/<(\/?script)/gi,"\\x3C$1");function kt(t,e){var n;for(const r of e){const o=(n=r.$componentQrl$)==null?void 0:n.getSymbol();o&&!t.includes(o)&&t.push(o)}}var Ct='document["qFuncs_HASH"]=';function jt(t,e){return Ct.replace("HASH",t)+`[${e.join(`,
`)}]`}const xt=$("qc-s"),At=$("qc-c"),Pe=$("qc-ic"),Ee=$("qc-h"),ke=$("qc-l"),Dt=$("qc-n"),It=$("qc-a"),Lt=$("qc-ir"),Rt=$("qc-p"),Nt=Ne(He("s_A4Ppc3yBbfQ")),Tt=()=>{if(!ae("containerAttributes"))throw new Error("PrefetchServiceWorker component must be rendered on the server.");Le();const e=se(Pe);if(e.value&&e.value.length>0){const n=e.value.length;let r=null;for(let o=n-1;o>=0;o--)e.value[o].default&&(r=k(e.value[o].default,{children:r},1,"aj_0"));return k(W,{children:[r,S("script",{"document:onQCInit$":Nt,"document:onQInit$":Re(()=>{((o,s)=>{var i;if(!o._qcs&&s.scrollRestoration==="manual"){o._qcs=!0;const a=(i=s.state)==null?void 0:i._qCityScroll;a&&o.scrollTo(a.x,a.y),document.dispatchEvent(new Event("qcinit"))}})(window,history)},'()=>{((w,h)=>{if(!w._qcs&&h.scrollRestoration==="manual"){w._qcs=true;const s=h.state?._qCityScroll;if(s){w.scrollTo(s.x,s.y);}document.dispatchEvent(new Event("qcinit"));}})(window,history);}')},null,null,2,"aj_1")]},1,"aj_2")}return Te},Bt=Y(E(Tt,"s_sgDwJMKCmAY")),Ot=(t,e)=>new URL(t,e.href),pe=(t,e)=>t.origin===e.origin,he=t=>t.endsWith("/")?t:t+"/",Qt=({pathname:t},{pathname:e})=>{const n=Math.abs(t.length-e.length);return n===0?t===e:n===1&&he(t)===he(e)},Ut=(t,e)=>t.search===e.search,V=(t,e)=>Ut(t,e)&&Qt(t,e),Ht=t=>t&&typeof t.then=="function",Ft=(t,e,n,r)=>{const o=Ce(),i={head:o,withLocale:a=>fe(r,a),resolveValue:a=>{const l=a.__id;if(a.__brand==="server_loader"&&!(l in t.loaders))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");const f=t.loaders[l];if(Ht(f))throw new Error("Loaders returning a promise can not be resolved for the head function.");return f},...e};for(let a=n.length-1;a>=0;a--){const l=n[a]&&n[a].head;l&&(typeof l=="function"?be(o,fe(r,()=>l(i))):typeof l=="object"&&be(o,l))}return i.head},be=(t,e)=>{typeof e.title=="string"&&(t.title=e.title),Q(t.meta,e.meta),Q(t.links,e.links),Q(t.styles,e.styles),Q(t.scripts,e.scripts),Object.assign(t.frontmatter,e.frontmatter)},Q=(t,e)=>{if(Array.isArray(e))for(const n of e){if(typeof n.key=="string"){const r=t.findIndex(o=>o.key===n.key);if(r>-1){t[r]=n;continue}}t.push(n)}},Ce=()=>({title:"",meta:[],links:[],styles:[],scripts:[],frontmatter:{}}),Vt=()=>se(Ee),Wt=()=>se(ke),Yt=()=>ve(ae("qwikcity")),ye={},U={navCount:0},Jt=":root{view-transition-name:none}",Gt=t=>{},zt=async(t,e)=>{const[n,r,o,s]=ge(),{type:i="link",forceReload:a=t===void 0,replaceState:l=!1,scroll:f=!0}=typeof e=="object"?e:{forceReload:e};U.navCount++;const c=o.value.dest,u=t===void 0?c:typeof t=="number"?t:Ot(t,s.url);if(ye.$cbs$&&(a||typeof u=="number"||!V(u,c)||!pe(u,c))){const m=U.navCount,v=await Promise.all([...ye.$cbs$.values()].map(p=>p(u)));if(m!==U.navCount||v.some(Boolean)){m===U.navCount&&i==="popstate"&&history.pushState(null,"",c);return}}if(typeof u!="number"&&pe(u,c)&&!(!a&&V(u,c)))return o.value={type:i,dest:u,forceReload:a,replaceState:l,scroll:f},n.value=void 0,s.isNavigating=!0,new Promise(m=>{r.r=m})},Zt=({track:t})=>{const[e,n,r,o,s,i,a,l,f,c,u]=ge();async function m(){const[p,d]=t(()=>[c.value,e.value]),g=Fe(""),_=u.url,A=d?"form":p.type;p.replaceState;let b,C,P=null;if(b=new URL(p.dest,u.url),P=s.loadedRoute,C=s.response,P){const[N,J,G,T]=P,j=G,z=j[j.length-1];p.dest.search&&V(b,_)&&(b.search=p.dest.search),V(b,_)||(u.prevUrl=_),u.url=b,u.params={...J},c.untrackedValue={type:A,dest:b};const x=Ft(C,u,j,g);n.headings=z.headings,n.menu=T,r.value=ve(j),o.links=x.links,o.meta=x.meta,o.styles=x.styles,o.scripts=x.scripts,o.title=x.title,o.frontmatter=x.frontmatter}}return m()},Kt=t=>{Be(E(Jt,"s_Apq4HGpFodU"));const e=Yt();if(!(e!=null&&e.params))throw new Error("Missing Qwik City Env Data for help visit https://github.com/QwikDev/qwik/issues/6237");const n=ae("url");if(!n)throw new Error("Missing Qwik URL Env Data");if(e.ev.originalUrl.pathname!==e.ev.url.pathname)throw new Error('enableRequestRewrite is an experimental feature and is not enabled. Please enable the feature flag by adding `experimental: ["enableRequestRewrite"]` to your qwikVite plugin options.');const r=new URL(n),o=B({url:r,params:e.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),s={},i=Oe(B(e.response.loaders,{deep:!1})),a=K({type:"initial",dest:r,forceReload:!1,replaceState:!1,scroll:!0}),l=B(Ce),f=B({headings:void 0,menu:void 0}),c=K(),u=e.response.action,m=u?e.response.loaders[u]:void 0,v=K(m?{id:u,data:e.response.formData,output:{result:m,status:e.response.status}}:void 0),p=E(Gt,"s_bACI7g0fYM4"),d=E(zt,"s_jqjCtAyYVJw",[v,s,a,o]);return w(At,f),w(Pe,c),w(Ee,l),w(ke,o),w(Dt,d),w(xt,i),w(It,v),w(Lt,a),w(Rt,p),Qe(E(Zt,"s_9xDfAaRnVDM",[v,f,c,l,e,d,i,s,t,a,o])),k(Ue,null,3,"aj_3")},Xt=Y(E(Kt,"s_oWN5EWBjkaY")),Mt=()=>{const t=Vt(),e=Wt();return k(W,{children:[S("title",null,null,t.title,1,null),S("link",null,{rel:"canonical",href:Ve(n=>n.url.href,[e],"p0.url.href")},null,3,null),S("meta",null,{name:"viewport",content:"width=device-width, initial-scale=1.0"},null,3,null),S("link",null,{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"},null,3,null),t.meta.map(n=>O("meta",{...n},null,0,n.key)),t.links.map(n=>O("link",{...n},null,0,n.key)),t.styles.map(n=>{var r;return O("style",{...n.props,...(r=n.props)!=null&&r.dangerouslySetInnerHTML?{}:{dangerouslySetInnerHTML:n.style}},null,0,n.key)}),t.scripts.map(n=>{var r;return O("script",{...n.props,...(r=n.props)!=null&&r.dangerouslySetInnerHTML?{}:{dangerouslySetInnerHTML:n.script}},null,0,n.key)})]},1,"hQ_0")},en=Y(E(Mt,"s_HF4VibZ2v38")),tn=()=>k(Xt,{children:[S("head",null,null,[S("meta",null,{charset:"utf-8"},null,3,null),S("link",null,{rel:"manifest",href:"/manifest.json"},null,3,"uW_0"),k(en,null,3,"uW_1")],1,null),S("body",null,{lang:"en"},k(Bt,null,3,"uW_2"),1,null)]},1,"uW_3"),nn=Y(E(tn,"s_0STXiMVyVPU"));function on(t){return St(k(nn,null,3,"Z7_0"),{...t,containerAttributes:{lang:"en-us",...t.containerAttributes},serverData:{...t.serverData}})}export{on as default};
