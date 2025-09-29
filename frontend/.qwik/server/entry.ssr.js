import{j as b,_ as De,s as Ie,a as Re,F as J,g as Be,c as W,i as P,u as se,b as ae,d as Ne,e as k,f as $,h as Le,k as Te,S as Qe,l as Oe,n as ge,m as Q,o as Fe,p as Z,q as w,r as He,t as Ue,v as S,w as Ye,x as _e,y as Ve,z as de,A as Je,B as O}from"./q-l0kiFKyN.js";const me={manifestHash:"3u8s9s",core:"q-58BKY9oY.js",preloader:"q-DoNi8vyY.js",qwikLoader:"q-pLIxelCT.js",bundleGraphAsset:"assets/BEc4IpEx-bundle-graph.json",injections:[],mapping:{s_9xDfAaRnVDM:"q-BQpya-Ba.js",s_H6p3pUo6r94:"q-CfAvqxn1.js",s_bi173RN0a1Q:"q-CjFDbjAJ.js",s_0STXiMVyVPU:"q--hFT2WTY.js",s_7bbR6hOTObs:"q-58BKY9oY.js",s_HF4VibZ2v38:"q-Bo8ybd-H.js",s_LdzV1aJSkTM:"q-n_Sfoyr9.js",s_fDVHBDHt0OQ:"q--hcwh9Hw.js",s_l3BYZmZKvrE:"q-Du5MqLpn.js",s_oWN5EWBjkaY:"q-BQpya-Ba.js",s_sgDwJMKCmAY:"q-D7XR0D6D.js",s_xjDDZoN40kI:"q-CjFDbjAJ.js",s_y9bzKNd7Ym8:"q-YGB5Gl9R.js",s_Apq4HGpFodU:"q-BQpya-Ba.js",s_A4Ppc3yBbfQ:"q-C98MVzQq.js",s_S0vcnqUSHE8:"q-Be2zE_zR.js",s_bEe3Uf0Gi64:"q-BSI0zFn3.js",s_bHyS0YiEovo:"q-D-DJDfxA.js",s_2FNHxh220gI:"q-CjFDbjAJ.js",s_PkpEtDZS50Y:"q-n_Sfoyr9.js",s_QH9Rdk0C18Q:"q-YGB5Gl9R.js",s_bACI7g0fYM4:"q-BQpya-Ba.js",s_eaiFRcU94bo:"q-CjFDbjAJ.js",s_jqjCtAyYVJw:"q-BQpya-Ba.js",s_l64sCEPSqE4:"q-CjFDbjAJ.js",s_sWIQmHyOQbs:"q-YGB5Gl9R.js",s_xRS0FRsHhZ4:"q-58BKY9oY.js"}};/**
 * @license
 * @builder.io/qwik/server 1.16.1
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/QwikDev/qwik/blob/main/LICENSE
 */var We=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,n)=>(typeof require<"u"?require:e)[n]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')}),Ge="<sync>";function ze(t,e){const n=e==null?void 0:e.mapper,r=t.symbolMapper?t.symbolMapper:(s,i,a)=>{var l;if(n){const f=U(s),c=n[f];if(!c){if(f===Ge)return[f,""];if((l=globalThis.__qwik_reg_symbols)==null?void 0:l.has(f))return[s,"_"];if(a)return[s,`${a}?qrl=${s}`];console.error("Cannot resolve symbol",s,"in",n,a)}return c}};return{isServer:!0,async importSymbol(s,i,a){var m;const l=U(a),f=(m=globalThis.__qwik_reg_symbols)==null?void 0:m.get(l);if(f)return f;let c=String(i);c.endsWith(".js")||(c+=".js");const u=We(c);if(!(a in u))throw new Error(`Q-ERROR: missing symbol '${a}' in module '${c}'.`);return u[a]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:s=>new Promise(i=>{setTimeout(()=>{i(s())})}),chunkForSymbol(s,i,a){return r(s,n,a)}}}async function Ke(t,e){const n=ze(t,e);Ie(n)}var U=t=>{const e=t.lastIndexOf("_");return e>-1?t.slice(e+1):t},Ze="q:instance",M={$DEBUG$:!1,$invPreloadProbability$:.65},Xe=Date.now(),Me=/\.[mc]?js$/,qe=0,et=1,tt=2,nt=3,ee,te,rt=(t,e)=>({$name$:t,$state$:Me.test(t)?qe:nt,$deps$:$e?e==null?void 0:e.map(n=>({...n,$factor$:1})):e,$inverseProbability$:1,$createdTs$:Date.now(),$waitedMs$:0,$loadedMs$:0}),ot=t=>{const e=new Map;let n=0;for(;n<t.length;){const r=t[n++],o=[];let s,i=1;for(;s=t[n],typeof s=="number";)s<0?i=-s/10:o.push({$name$:t[s],$importProbability$:i,$factor$:1}),n++;e.set(r,o)}return e},we=t=>{let e=ne.get(t);if(!e){let n;if(te){if(n=te.get(t),!n)return;n.length||(n=void 0)}e=rt(t,n),ne.set(t,e)}return e},st=(t,e)=>{e&&("debug"in e&&(M.$DEBUG$=!!e.debug),typeof e.preloadProbability=="number"&&(M.$invPreloadProbability$=1-e.preloadProbability)),!(ee!=null||!t)&&(ee="",te=ot(t))},ne=new Map,$e,Y,Se=0,B=[],at=(...t)=>{console.log(`Preloader ${Date.now()-Xe}ms ${Se}/${B.length} queued>`,...t)},it=()=>{ne.clear(),Y=!1,$e=!0,Se=0,B.length=0},lt=()=>{Y&&(B.sort((t,e)=>t.$inverseProbability$-e.$inverseProbability$),Y=!1)},ct=()=>{lt();let t=.4;const e=[];for(const n of B){const r=Math.round((1-n.$inverseProbability$)*10);r!==t&&(t=r,e.push(t)),e.push(n.$name$)}return e},Ee=(t,e,n)=>{if(n!=null&&n.has(t))return;const r=t.$inverseProbability$;if(t.$inverseProbability$=e,!(r-t.$inverseProbability$<.01)&&(ee!=null&&t.$state$<tt&&(t.$state$===qe&&(t.$state$=et,B.push(t),M.$DEBUG$&&at(`queued ${Math.round((1-t.$inverseProbability$)*100)}%`,t.$name$)),Y=!0),t.$deps$)){n||(n=new Set),n.add(t);const o=1-t.$inverseProbability$;for(const s of t.$deps$){const i=we(s.$name$);if(i.$inverseProbability$===0)continue;let a;if(o===1||o>=.99&&re<100)re++,a=Math.min(.01,1-s.$importProbability$);else{const l=1-s.$importProbability$*o,f=s.$factor$,c=l/f;a=Math.max(.02,i.$inverseProbability$*c),s.$factor$=c}Ee(i,a,n)}}},pe=(t,e)=>{const n=we(t);n&&n.$inverseProbability$>e&&Ee(n,e)},re,ut=(t,e)=>{if(!(t!=null&&t.length))return;re=0;let n=e?1-e:.4;if(Array.isArray(t))for(let r=t.length-1;r>=0;r--){const o=t[r];typeof o=="number"?n=1-o/10:pe(o,n)}else pe(t,n)};function ft(t){const e=[],n=r=>{if(r)for(const o of r)e.includes(o.url)||(e.push(o.url),o.imports&&n(o.imports))};return n(t),e}var dt=t=>{var n;const e=Be();return(n=t==null?void 0:t.qrls)==null?void 0:n.map(r=>{var a;const o=r.$refSymbol$||r.$symbol$,s=r.$chunk$,i=e.chunkForSymbol(o,s,(a=r.dev)==null?void 0:a.file);return i?i[1]:s}).filter(Boolean)};function mt(t,e,n){const r=e.prefetchStrategy;if(r===null)return[];if(!(n!=null&&n.manifest.bundleGraph))return dt(t);if(typeof(r==null?void 0:r.symbolsToPrefetch)=="function")try{const s=r.symbolsToPrefetch({manifest:n.manifest});return ft(s)}catch(s){console.error("getPrefetchUrls, symbolsToPrefetch()",s)}const o=new Set;for(const s of(t==null?void 0:t.qrls)||[]){const i=U(s.$refSymbol$||s.$symbol$);i&&i.length>=10&&o.add(i)}return[...o]}var pt=(t,e)=>{if(!(e!=null&&e.manifest.bundleGraph))return[...new Set(t)];it();let n=.99;for(const r of t.slice(0,15))ut(r,n),n*=.85;return ct()},oe=(t,e)=>{if(e==null)return null;const n=`${t}${e}`.split("/"),r=[];for(const o of n)o===".."&&r.length>0?r.pop():r.push(o);return r.join("/")},ht=(t,e,n,r,o)=>{var l;const s=oe(t,(l=e==null?void 0:e.manifest)==null?void 0:l.preloader),i="/"+(e==null?void 0:e.manifest.bundleGraphAsset);if(s&&i&&n!==!1){const f=typeof n=="object"?{debug:n.debug,preloadProbability:n.ssrPreloadProbability}:void 0;st(e==null?void 0:e.manifest.bundleGraph,f);const c=[];n!=null&&n.debug&&c.push("d:1"),n!=null&&n.maxIdlePreloads&&c.push(`P:${n.maxIdlePreloads}`),n!=null&&n.preloadProbability&&c.push(`Q:${n.preloadProbability}`);const u=c.length?`,{${c.join(",")}}`:"",m=`let b=fetch("${i}");import("${s}").then(({l})=>l(${JSON.stringify(t)},b${u}));`;r.push(b("link",{rel:"modulepreload",href:s,nonce:o}),b("link",{rel:"preload",href:i,as:"fetch",crossorigin:"anonymous",nonce:o}),b("script",{type:"module",async:!0,dangerouslySetInnerHTML:m,nonce:o}))}const a=oe(t,e==null?void 0:e.manifest.core);a&&r.push(b("link",{rel:"modulepreload",href:a,nonce:o}))},yt=(t,e,n,r,o)=>{if(r.length===0||n===!1)return null;const{ssrPreloads:s,ssrPreloadProbability:i}=vt(typeof n=="boolean"?void 0:n);let a=s;const l=[],f=[],c=e==null?void 0:e.manifest.manifestHash;if(a){const p=e==null?void 0:e.manifest.preloader,d=e==null?void 0:e.manifest.core,g=pt(r,e);let q=4;const D=i*10;for(const h of g)if(typeof h=="string"){if(q<D)break;if(h===p||h===d)continue;if(f.push(h),--a===0)break}else q=h}const u=oe(t,c&&(e==null?void 0:e.manifest.preloader));let v=f.length?`${JSON.stringify(f)}.map((l,e)=>{e=document.createElement('link');e.rel='modulepreload';e.href=${JSON.stringify(t)}+l;document.head.appendChild(e)});`:"";return u&&(v+=`window.addEventListener('load',f=>{f=_=>import("${u}").then(({p})=>p(${JSON.stringify(r)}));try{requestIdleCallback(f,{timeout:2000})}catch(e){setTimeout(f,200)}})`),v&&l.push(b("script",{type:"module","q:type":"preload",async:!0,dangerouslySetInnerHTML:v,nonce:o})),l.length>0?b(J,{children:l}):null},bt=(t,e,n,r,o)=>{var s;if(n.preloader!==!1){const i=mt(e,n,r);if(i.length>0){const a=yt(t,r,n.preloader,i,(s=n.serverData)==null?void 0:s.nonce);a&&o.push(a)}}};function vt(t){return{...gt,...t}}var gt={ssrPreloads:7,ssrPreloadProbability:.5,debug:!1,maxIdlePreloads:25,preloadProbability:.35},_t='const t=document,e=window,n=new Set,o=new Set([t]);let r;const s=(t,e)=>Array.from(t.querySelectorAll(e)),a=t=>{const e=[];return o.forEach(n=>e.push(...s(n,t))),e},i=t=>{w(t),s(t,"[q\\\\:shadowroot]").forEach(t=>{const e=t.shadowRoot;e&&i(e)})},c=t=>t&&"function"==typeof t.then,l=(t,e,n=e.type)=>{a("[on"+t+"\\\\:"+n+"]").forEach(o=>{u(o,t,e,n)})},f=e=>{if(void 0===e._qwikjson_){let n=(e===t.documentElement?t.body:e).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===n.getAttribute("type")){e._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/gi,"<$1"));break}n=n.previousElementSibling}}},p=(t,e)=>new CustomEvent(t,{detail:e}),u=async(e,n,o,r=o.type)=>{const s="on"+n+":"+r;e.hasAttribute("preventdefault:"+r)&&o.preventDefault(),e.hasAttribute("stoppropagation:"+r)&&o.stopPropagation();const a=e._qc_,i=a&&a.li.filter(t=>t[0]===s);if(i&&i.length>0){for(const t of i){const n=t[1].getFn([e,o],()=>e.isConnected)(o,e),r=o.cancelBubble;c(n)&&await n,r&&o.stopPropagation()}return}const l=e.getAttribute(s);if(l){const n=e.closest("[q\\\\:container]"),r=n.getAttribute("q:base"),s=n.getAttribute("q:version")||"unknown",a=n.getAttribute("q:manifest-hash")||"dev",i=new URL(r,t.baseURI);for(const p of l.split("\\n")){const l=new URL(p,i),u=l.href,h=l.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",q=performance.now();let _,d,y;const w=p.startsWith("#"),g={qBase:r,qManifest:a,qVersion:s,href:u,symbol:h,element:e,reqTime:q};if(w){const e=n.getAttribute("q:instance");_=(t["qFuncs_"+e]||[])[Number.parseInt(h)],_||(d="sync",y=Error("sym:"+h))}else{b("qsymbol",g);const t=l.href.split("#")[0];try{const e=import(t);f(n),_=(await e)[h],_||(d="no-symbol",y=Error(`${h} not in ${t}`))}catch(t){d||(d="async"),y=t}}if(!_){b("qerror",{importError:d,error:y,...g}),console.error(y);break}const m=t.__q_context__;if(e.isConnected)try{t.__q_context__=[e,o,l];const n=_(o,e);c(n)&&await n}catch(t){b("qerror",{error:t,...g})}finally{t.__q_context__=m}}}},b=(e,n)=>{t.dispatchEvent(p(e,n))},h=t=>t.replace(/([A-Z])/g,t=>"-"+t.toLowerCase()),q=async t=>{let e=h(t.type),n=t.target;for(l("-document",t,e);n&&n.getAttribute;){const o=u(n,"",t,e);let r=t.cancelBubble;c(o)&&await o,r||(r=r||t.cancelBubble||n.hasAttribute("stoppropagation:"+t.type)),n=t.bubbles&&!0!==r?n.parentElement:null}},_=t=>{l("-window",t,h(t.type))},d=()=>{var s;const c=t.readyState;if(!r&&("interactive"==c||"complete"==c)&&(o.forEach(i),r=1,b("qinit"),(null!=(s=e.requestIdleCallback)?s:e.setTimeout).bind(e)(()=>b("qidle")),n.has("qvisible"))){const t=a("[on\\\\:qvisible]"),e=new IntersectionObserver(t=>{for(const n of t)n.isIntersecting&&(e.unobserve(n.target),u(n.target,"",p("qvisible",n)))});t.forEach(t=>e.observe(t))}},y=(t,e,n,o=!1)=>{t.addEventListener(e,n,{capture:o,passive:!1})},w=(...t)=>{for(const r of t)"string"==typeof r?n.has(r)||(o.forEach(t=>y(t,r,q,!0)),y(e,r,_,!0),n.add(r)):o.has(r)||(n.forEach(t=>y(r,t,q,!0)),o.add(r))};if(!("__q_context__"in t)){t.__q_context__=0;const r=e.qwikevents;r&&(Array.isArray(r)?w(...r):w("click","input")),e.qwikevents={events:n,roots:o,push:w},y(t,"readystatechange",d),d()}',qt=`const doc = document;
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
  var _a;
  const readyState = doc.readyState;
  if (!hasInitialized && (readyState == "interactive" || readyState == "complete")) {
    roots.forEach(findShadowRoots);
    hasInitialized = 1;
    emitEvent("qinit");
    const riC = (_a = win.requestIdleCallback) != null ? _a : win.setTimeout;
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
}`;function wt(t={}){return t.debug?qt:_t}function X(){if(typeof performance>"u")return()=>0;const t=performance.now();return()=>(performance.now()-t)/1e6}function $t(t){let e=t.base;return typeof t.base=="function"&&(e=t.base(t)),typeof e=="string"?(e.endsWith("/")||(e+="/"),e):"/build/"}var St="<!DOCTYPE html>";async function Et(t,e){var ie,le,ce;let n=e.stream,r=0,o=0,s=0,i=0,a="",l;const f=((ie=e.streaming)==null?void 0:ie.inOrder)??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},c=e.containerTagName??"html",u=e.containerAttributes??{},m=n,v=X(),p=$t(e),d=kt(e.manifest),g=(le=e.serverData)==null?void 0:le.nonce;function q(){a&&(m.write(a),a="",r=0,s++,s===1&&(i=v()))}function D(y){const _=y.length;r+=_,o+=_,a+=y}switch(f.strategy){case"disabled":n={write:D};break;case"direct":n=m;break;case"auto":let y=0,_=!1;const ue=f.maximunChunk??0,K=f.maximunInitialChunk??0;n={write(R){R==="<!--qkssr-f-->"?_||(_=!0):R==="<!--qkssr-pu-->"?y++:R==="<!--qkssr-po-->"?y--:D(R),y===0&&(_||r>=(s===0?K:ue))&&(_=!1,q())}};break}c==="html"?n.write(St):n.write("<!--cq-->"),d||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."),await Ke(e,d);const h=d==null?void 0:d.manifest.injections,I=h?h.map(y=>b(y.tag,y.attributes??{})):[],C=((ce=e.qwikLoader)==null?void 0:ce.include)??"auto",N=d==null?void 0:d.manifest.qwikLoader;let L=!1;C!=="never"&&N&&(I.unshift(b("link",{rel:"modulepreload",href:`${p}${N}`,nonce:g}),b("script",{type:"module",async:!0,src:`${p}${N}`,nonce:g})),L=!0),ht(p,d,e.preloader,I,g);const G=X(),z=[];let j=0,T=0;await De(t,{stream:n,containerTagName:c,containerAttributes:u,serverData:e.serverData,base:p,beforeContent:I,beforeClose:async(y,_,ue,K)=>{j=G();const R=X();l=await Re(y,_,void 0,K);const x=[];bt(p,l,e,d,x);const xe=JSON.stringify(l.state,void 0,void 0);if(x.push(b("script",{type:"qwik/json",dangerouslySetInnerHTML:Ct(xe),nonce:g})),l.funcs.length>0){const A=u[Ze];x.push(b("script",{"q:func":"qwik/json",dangerouslySetInnerHTML:At(A,l.funcs),nonce:g}))}const Ae=!l||l.mode!=="static";if(!L&&(C==="always"||C==="auto"&&Ae)){const A=wt({debug:e.debug});x.push(b("script",{id:"qwikloader",async:!0,type:"module",dangerouslySetInnerHTML:A,nonce:g}))}const fe=Array.from(_.$events$,A=>JSON.stringify(A));if(fe.length>0){const A=`(window.qwikevents||(window.qwikevents=[])).push(${fe.join(",")})`;x.push(b("script",{dangerouslySetInnerHTML:A,nonce:g}))}return jt(z,y),T=R(),b(J,{children:x})},manifestHash:(d==null?void 0:d.manifest.manifestHash)||"dev"+Pt()}),c!=="html"&&n.write("<!--/cq-->"),q();const E=l.resources.some(y=>y._cache!==1/0);return{prefetchResources:void 0,snapshotResult:l,flushes:s,manifest:d==null?void 0:d.manifest,size:o,isStatic:!E,timing:{render:j,snapshot:T,firstFlush:i}}}function Pt(){return Math.random().toString(36).slice(2)}function kt(t){const e=t?{...me,...t}:me;if(!e||"mapper"in e)return e;if(e.mapping){const n={};return Object.entries(e.mapping).forEach(([r,o])=>{n[U(r)]=[r,o]}),{mapper:n,manifest:e,injections:e.injections||[]}}}var Ct=t=>t.replace(/<(\/?script)/gi,"\\x3C$1");function jt(t,e){var n;for(const r of e){const o=(n=r.$componentQrl$)==null?void 0:n.getSymbol();o&&!t.includes(o)&&t.push(o)}}var xt='document["qFuncs_HASH"]=';function At(t,e){return xt.replace("HASH",t)+`[${e.join(`,
`)}]`}const Dt=S("qc-s"),It=S("qc-c"),Pe=S("qc-ic"),ke=S("qc-h"),Ce=S("qc-l"),Rt=S("qc-n"),Bt=S("qc-a"),Nt=S("qc-ir"),Lt=S("qc-p"),Tt=Te(Ye("s_A4Ppc3yBbfQ")),Qt=()=>{if(!ae("containerAttributes"))throw new Error("PrefetchServiceWorker component must be rendered on the server.");Ne();const e=se(Pe);if(e.value&&e.value.length>0){const n=e.value.length;let r=null;for(let o=n-1;o>=0;o--)e.value[o].default&&(r=k(e.value[o].default,{children:r},1,"aj_0"));return k(J,{children:[r,$("script",{"document:onQCInit$":Tt,"document:onQInit$":Le(()=>{((o,s)=>{var i;if(!o._qcs&&s.scrollRestoration==="manual"){o._qcs=!0;const a=(i=s.state)==null?void 0:i._qCityScroll;a&&o.scrollTo(a.x,a.y),document.dispatchEvent(new Event("qcinit"))}})(window,history)},'()=>{((w,h)=>{if(!w._qcs&&h.scrollRestoration==="manual"){w._qcs=true;const s=h.state?._qCityScroll;if(s){w.scrollTo(s.x,s.y);}document.dispatchEvent(new Event("qcinit"));}})(window,history);}')},null,null,2,"aj_1")]},1,"aj_2")}return Qe},Ot=W(P(Qt,"s_sgDwJMKCmAY")),Ft=(t,e)=>new URL(t,e.href),he=(t,e)=>t.origin===e.origin,ye=t=>t.endsWith("/")?t:t+"/",Ht=({pathname:t},{pathname:e})=>{const n=Math.abs(t.length-e.length);return n===0?t===e:n===1&&ye(t)===ye(e)},Ut=(t,e)=>t.search===e.search,V=(t,e)=>Ut(t,e)&&Ht(t,e),Yt=t=>t&&typeof t.then=="function",Vt=(t,e,n,r)=>{const o=je(),i={head:o,withLocale:a=>de(r,a),resolveValue:a=>{const l=a.__id;if(a.__brand==="server_loader"&&!(l in t.loaders))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");const f=t.loaders[l];if(Yt(f))throw new Error("Loaders returning a promise can not be resolved for the head function.");return f},...e};for(let a=n.length-1;a>=0;a--){const l=n[a]&&n[a].head;l&&(typeof l=="function"?be(o,de(r,()=>l(i))):typeof l=="object"&&be(o,l))}return i.head},be=(t,e)=>{typeof e.title=="string"&&(t.title=e.title),F(t.meta,e.meta),F(t.links,e.links),F(t.styles,e.styles),F(t.scripts,e.scripts),Object.assign(t.frontmatter,e.frontmatter)},F=(t,e)=>{if(Array.isArray(e))for(const n of e){if(typeof n.key=="string"){const r=t.findIndex(o=>o.key===n.key);if(r>-1){t[r]=n;continue}}t.push(n)}},je=()=>({title:"",meta:[],links:[],styles:[],scripts:[],frontmatter:{}}),Jt=()=>se(ke),Wt=()=>se(Ce),Gt=()=>ge(ae("qwikcity")),ve={},H={navCount:0},zt=":root{view-transition-name:none}",Kt=t=>{},Zt=async(t,e)=>{const[n,r,o,s]=_e(),{type:i="link",forceReload:a=t===void 0,replaceState:l=!1,scroll:f=!0}=typeof e=="object"?e:{forceReload:e};H.navCount++;const c=o.value.dest,u=t===void 0?c:typeof t=="number"?t:Ft(t,s.url);if(ve.$cbs$&&(a||typeof u=="number"||!V(u,c)||!he(u,c))){const m=H.navCount,v=await Promise.all([...ve.$cbs$.values()].map(p=>p(u)));if(m!==H.navCount||v.some(Boolean)){m===H.navCount&&i==="popstate"&&history.pushState(null,"",c);return}}if(typeof u!="number"&&he(u,c)&&!(!a&&V(u,c)))return o.value={type:i,dest:u,forceReload:a,replaceState:l,scroll:f},n.value=void 0,s.isNavigating=!0,new Promise(m=>{r.r=m})},Xt=({track:t})=>{const[e,n,r,o,s,i,a,l,f,c,u]=_e();async function m(){const[p,d]=t(()=>[c.value,e.value]),g=Ve(""),q=u.url,D=d?"form":p.type;p.replaceState;let h,I,C=null;if(h=new URL(p.dest,u.url),C=s.loadedRoute,I=s.response,C){const[N,L,G,z]=C,j=G,T=j[j.length-1];p.dest.search&&V(h,q)&&(h.search=p.dest.search),V(h,q)||(u.prevUrl=q),u.url=h,u.params={...L},c.untrackedValue={type:D,dest:h};const E=Vt(I,u,j,g);n.headings=T.headings,n.menu=z,r.value=ge(j),o.links=E.links,o.meta=E.meta,o.styles=E.styles,o.scripts=E.scripts,o.title=E.title,o.frontmatter=E.frontmatter}}return m()},Mt=t=>{Oe(P(zt,"s_Apq4HGpFodU"));const e=Gt();if(!(e!=null&&e.params))throw new Error("Missing Qwik City Env Data for help visit https://github.com/QwikDev/qwik/issues/6237");const n=ae("url");if(!n)throw new Error("Missing Qwik URL Env Data");if(e.ev.originalUrl.pathname!==e.ev.url.pathname)throw new Error('enableRequestRewrite is an experimental feature and is not enabled. Please enable the feature flag by adding `experimental: ["enableRequestRewrite"]` to your qwikVite plugin options.');const r=new URL(n),o=Q({url:r,params:e.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),s={},i=Fe(Q(e.response.loaders,{deep:!1})),a=Z({type:"initial",dest:r,forceReload:!1,replaceState:!1,scroll:!0}),l=Q(je),f=Q({headings:void 0,menu:void 0}),c=Z(),u=e.response.action,m=u?e.response.loaders[u]:void 0,v=Z(m?{id:u,data:e.response.formData,output:{result:m,status:e.response.status}}:void 0),p=P(Kt,"s_bACI7g0fYM4"),d=P(Zt,"s_jqjCtAyYVJw",[v,s,a,o]);return w(It,f),w(Pe,c),w(ke,l),w(Ce,o),w(Rt,d),w(Dt,i),w(Bt,v),w(Nt,a),w(Lt,p),He(P(Xt,"s_9xDfAaRnVDM",[v,f,c,l,e,d,i,s,t,a,o])),k(Ue,null,3,"aj_3")},en=W(P(Mt,"s_oWN5EWBjkaY")),tn=()=>{const t=Jt(),e=Wt();return k(J,{children:[$("title",null,null,t.title,1,null),$("link",null,{rel:"canonical",href:Je(n=>n.url.href,[e],"p0.url.href")},null,3,null),$("meta",null,{name:"viewport",content:"width=device-width, initial-scale=1.0"},null,3,null),$("link",null,{rel:"icon",type:"image/svg+xml",href:"/favicon.svg"},null,3,null),t.meta.map(n=>O("meta",{...n},null,0,n.key)),t.links.map(n=>O("link",{...n},null,0,n.key)),t.styles.map(n=>{var r;return O("style",{...n.props,...(r=n.props)!=null&&r.dangerouslySetInnerHTML?{}:{dangerouslySetInnerHTML:n.style}},null,0,n.key)}),t.scripts.map(n=>{var r;return O("script",{...n.props,...(r=n.props)!=null&&r.dangerouslySetInnerHTML?{}:{dangerouslySetInnerHTML:n.script}},null,0,n.key)})]},1,"hQ_0")},nn=W(P(tn,"s_HF4VibZ2v38")),rn=()=>k(en,{children:[$("head",null,null,[$("meta",null,{charset:"utf-8"},null,3,null),$("link",null,{rel:"manifest",href:"/manifest.json"},null,3,"uW_0"),k(nn,null,3,"uW_1")],1,null),$("body",null,{lang:"en"},k(Ot,null,3,"uW_2"),1,null)]},1,"uW_3"),on=W(P(rn,"s_0STXiMVyVPU"));function cn(t){return Et(k(on,null,3,"Z7_0"),{...t,containerAttributes:{lang:"en-us",...t.containerAttributes},serverData:{...t.serverData}})}export{cn as default};
