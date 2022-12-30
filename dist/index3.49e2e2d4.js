// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"d35Re":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "2d977b2a49e2e2d4";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"i31AT":[function(require,module,exports) {
var _gsap = require("gsap");
var _utils = require("./utils");
var _contentItem = require("./contentItem");
var _previewItem = require("./previewItem");
var _flip = require("gsap/Flip");
(0, _gsap.gsap).registerPlugin((0, _flip.Flip));
// Body 
const bodyEl = document.body;
// window sizes
let winsize = {
    width: window.innerWidth,
    height: window.innerHeight
};
// update on resize
window.addEventListener("resize", ()=>{
    winsize = {
        width: window.innerWidth,
        height: window.innerHeight
    };
});
// Content overlay
const contentOverlay = document.querySelector(".content__overlay");
// Preview Items
const previewItems = [];
[
    ...document.querySelectorAll(".preview__item")
].forEach((previewItem)=>{
    previewItems.push(new (0, _previewItem.PreviewItem)(previewItem));
});
// Content Items
const contentItems = [];
[
    ...document.querySelectorAll(".content__item")
].forEach((contentItem, pos)=>{
    contentItems.push(new (0, _contentItem.ContentItem)(contentItem, previewItems[pos]));
});
// current element
let current = -1;
// true if preview is shown (after clicking one content item)
let inPreview = false;
// check if currently animating
let isAnimating = false;
// Back control
const backCtrl = document.querySelector(".preview__back");
// Events
for (const [pos, contentItem] of contentItems.entries()){
    // click on a content item
    contentItem.DOM.imgWrap.addEventListener("click", ()=>{
        if (inPreview || isAnimating) return;
        isAnimating = true;
        current = pos;
        const previewItem = previewItems[pos];
        (0, _gsap.gsap).timeline({
            defaults: {
                duration: 0.8,
                ease: "power4.inOut"
            },
            onStart: ()=>{
                inPreview = true;
                bodyEl.classList.add("preview-open");
                (0, _gsap.gsap).set(contentItem.DOM.el, {
                    zIndex: 10
                });
                (0, _gsap.gsap).set(contentOverlay, {
                    transformOrigin: current % 2 ? "0% 100%" : "0% 0%",
                    scaleX: contentItem.DOM.el.offsetWidth / winsize.width,
                    scaleY: 0,
                    x: contentItem.DOM.el.offsetLeft
                });
                (0, _gsap.gsap).set(previewItem.DOM.slideTexts, {
                    yPercent: 100
                });
                (0, _gsap.gsap).set(previewItem.DOM.descriptions, {
                    xPercent: (pos)=>pos ? -5 : 5,
                    opacity: 0
                });
                (0, _gsap.gsap).set(backCtrl, {
                    x: "+=15%",
                    opacity: 0
                });
                previewItem.DOM.el.classList.add("preview__item--current");
            },
            onComplete: ()=>isAnimating = false
        }).addLabel("start", 0).addLabel("content", "start+=0.6").to(contentItem.DOM.titleInner, {
            yPercent: current % 2 ? -100 : 100
        }, "start").to(contentItem.DOM.caption, {
            yPercent: current % 2 ? -10 : 10,
            opacity: 0
        }, "start").to(contentOverlay, {
            scaleY: 1
        }, "start").to(contentOverlay, {
            scaleX: 1,
            x: 0
        }, "content").add(()=>{
            const flipstate = (0, _flip.Flip).getState(contentItem.DOM.imgWrap);
            previewItem.DOM.imgOuter.appendChild(contentItem.DOM.imgWrap);
            (0, _flip.Flip).from(flipstate, {
                duration: 0.8,
                ease: "power4.inOut",
                absolute: true
            });
        }, "content").to(previewItem.DOM.slideTexts, {
            duration: 1.1,
            ease: "expo",
            yPercent: 0
        }, "content+=0.3").to(previewItem.DOM.descriptions, {
            duration: 1.1,
            ease: "expo",
            opacity: 1,
            xPercent: 0
        }, "content+=0.3").to(backCtrl, {
            opacity: 1,
            x: "-=15%"
        }, "content");
    });
    // mouseenter / mouseleave effect
    contentItem.DOM.imgWrap.addEventListener("mouseenter", ()=>{
        if (inPreview) return;
        (0, _gsap.gsap).timeline({
            defaults: {
                duration: 0.8,
                ease: "power4"
            }
        }).addLabel("start", 0).set(contentItem.DOM.titleInner, {
            transformOrigin: "0% 50%"
        }, "start").to(contentItem.DOM.titleInner, {
            startAt: {
                filter: "blur(0px)"
            },
            duration: 0.2,
            ease: "power1.in",
            yPercent: -100,
            rotation: -4,
            filter: "blur(6px)"
        }, "start").to(contentItem.DOM.titleInner, {
            startAt: {
                yPercent: 100,
                rotation: 4,
                filter: "blur(6px)"
            },
            yPercent: 0,
            rotation: 0,
            filter: "blur(0px)"
        }, "start+=0.2").to(contentItem.DOM.imgWrap, {
            scale: 0.95
        }, "start").to(contentItem.DOM.img, {
            scale: 1.2
        }, "start");
    });
    contentItem.DOM.imgWrap.addEventListener("mouseleave", ()=>{
        if (inPreview) return;
        (0, _gsap.gsap).timeline({
            defaults: {
                duration: 0.8,
                ease: "power4"
            }
        }).addLabel("start", 0).to([
            contentItem.DOM.imgWrap,
            contentItem.DOM.img
        ], {
            scale: 1
        }, "start");
    });
}
// Back to grid
backCtrl.addEventListener("click", ()=>{
    if (isAnimating) return;
    isAnimating = true;
    const previewItem = previewItems[current];
    const contentItem = contentItems[current];
    (0, _gsap.gsap).timeline({
        defaults: {
            duration: 0.8,
            ease: "power4.inOut"
        },
        onComplete: ()=>{
            previewItem.DOM.el.classList.remove("preview__item--current");
            bodyEl.classList.remove("preview-open");
            (0, _gsap.gsap).set(contentItem.DOM.el, {
                zIndex: 1
            });
            inPreview = false;
            isAnimating = false;
        }
    }).addLabel("start", 0).addLabel("content", "start+=0.7").to(backCtrl, {
        ease: "power2",
        opacity: 0
    }, "start").to(previewItem.DOM.descriptions, {
        ease: "power2",
        opacity: 0
    }, "start").to(previewItem.DOM.descriptions, {
        yPercent: 15
    }, "start").to(previewItem.DOM.slideTexts, {
        yPercent: 100
    }, "start").add(()=>{
        const flipstate = (0, _flip.Flip).getState(contentItem.DOM.imgWrap);
        contentItem.DOM.el.insertBefore(contentItem.DOM.imgWrap, contentItem.DOM.el.children[1]);
        (0, _flip.Flip).from(flipstate, {
            duration: 0.8,
            ease: "power4.inOut",
            absolute: true
        });
    }, "start").to(contentOverlay, {
        scaleX: contentItem.DOM.el.offsetWidth / winsize.width,
        x: contentItem.DOM.el.offsetLeft
    }, "start").to(contentOverlay, {
        scaleY: 0
    }, "start+=0.6").to(contentItem.DOM.titleInner, {
        yPercent: 0
    }, "start+=0.6").to(contentItem.DOM.caption, {
        yPercent: 0,
        opacity: 1
    }, "start+=0.6");
});
// Preload images
(0, _utils.preloadImages)(".content__item-img").then(()=>document.body.classList.remove("loading"));

},{"gsap":"3LPLT","./utils":"eYK4L","./contentItem":"7VNk8","./previewItem":"94Cef","gsap/Flip":"iI4qb"}],"iI4qb":[function(require,module,exports) {
/*!
 * Flip 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/ /* eslint-disable */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Flip", ()=>Flip);
parcelHelpers.export(exports, "default", ()=>Flip);
var _matrixJs = require("./utils/matrix.js");
var _id = 1, _toArray, gsap, _batch, _batchAction, _body, _closestTenth, _forEachBatch = function _forEachBatch(batch, name) {
    return batch.actions.forEach(function(a) {
        return a.vars[name] && a.vars[name](a);
    });
}, _batchLookup = {}, _RAD2DEG = 180 / Math.PI, _DEG2RAD = Math.PI / 180, _emptyObj = {}, _dashedNameLookup = {}, _memoizedRemoveProps = {}, _listToArray = function _listToArray(list) {
    return typeof list === "string" ? list.split(" ").join("").split(",") : list;
}, // removes extra spaces contaminating the names, returns an Array.
_callbacks = _listToArray("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"), _removeProps = _listToArray("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"), _getEl = function _getEl(target) {
    return _toArray(target)[0] || console.warn("Element not found:", target);
}, _round = function _round(value) {
    return Math.round(value * 10000) / 10000 || 0;
}, _toggleClass = function _toggleClass(targets, className, action) {
    return targets.forEach(function(el) {
        return el.classList[action](className);
    });
}, _reserved = {
    zIndex: 1,
    kill: 1,
    simple: 1,
    spin: 1,
    clearProps: 1,
    targets: 1,
    toggleClass: 1,
    onComplete: 1,
    onUpdate: 1,
    onInterrupt: 1,
    onStart: 1,
    delay: 1,
    repeat: 1,
    repeatDelay: 1,
    yoyo: 1,
    scale: 1,
    fade: 1,
    absolute: 1,
    props: 1,
    onEnter: 1,
    onLeave: 1,
    custom: 1,
    paused: 1,
    nested: 1,
    prune: 1,
    absoluteOnLeave: 1
}, _fitReserved = {
    zIndex: 1,
    simple: 1,
    clearProps: 1,
    scale: 1,
    absolute: 1,
    fitChild: 1,
    getVars: 1,
    props: 1
}, _camelToDashed = function _camelToDashed(p) {
    return p.replace(/([A-Z])/g, "-$1").toLowerCase();
}, _copy = function _copy(obj, exclude) {
    var result = {}, p;
    for(p in obj)exclude[p] || (result[p] = obj[p]);
    return result;
}, _memoizedProps = {}, _memoizeProps = function _memoizeProps(props) {
    var p = _memoizedProps[props] = _listToArray(props);
    _memoizedRemoveProps[props] = p.concat(_removeProps);
    return p;
}, _getInverseGlobalMatrix = function _getInverseGlobalMatrix(el) {
    // integrates caching for improved performance
    var cache = el._gsap || gsap.core.getCache(el);
    if (cache.gmCache === gsap.ticker.frame) return cache.gMatrix;
    cache.gmCache = gsap.ticker.frame;
    return cache.gMatrix = (0, _matrixJs.getGlobalMatrix)(el, true, false, true);
}, _getDOMDepth = function _getDOMDepth(el, invert, level) {
    if (level === void 0) level = 0;
    // In invert is true, the sibling depth is increments of 1, and parent/nesting depth is increments of 1000. This lets us order elements in an Array to reflect document flow.
    var parent = el.parentNode, inc = 1000 * Math.pow(10, level) * (invert ? -1 : 1), l = invert ? -inc * 900 : 0;
    while(el){
        l += inc;
        el = el.previousSibling;
    }
    return parent ? l + _getDOMDepth(parent, invert, level + 1) : l;
}, _orderByDOMDepth = function _orderByDOMDepth(comps, invert, isElStates) {
    comps.forEach(function(comp) {
        return comp.d = _getDOMDepth(isElStates ? comp.element : comp.t, invert);
    });
    comps.sort(function(c1, c2) {
        return c1.d - c2.d;
    });
    return comps;
}, _recordInlineStyles = function _recordInlineStyles(elState, props) {
    // records the current inline CSS properties into an Array in alternating name/value pairs that's stored in a "css" property on the state object so that we can revert later.
    var style = elState.element.style, a = elState.css = elState.css || [], i = props.length, p, v;
    while(i--){
        p = props[i];
        v = style[p] || style.getPropertyValue(p);
        a.push(v ? p : _dashedNameLookup[p] || (_dashedNameLookup[p] = _camelToDashed(p)), v);
    }
    return style;
}, _applyInlineStyles = function _applyInlineStyles(state) {
    var css = state.css, style = state.element.style, i = 0;
    state.cache.uncache = 1;
    for(; i < css.length; i += 2)css[i + 1] ? style[css[i]] = css[i + 1] : style.removeProperty(css[i]);
    if (!css[css.indexOf("transform") + 1] && style.translate) {
        // CSSPlugin adds scale, translate, and rotate inline CSS as "none" in order to keep CSS rules from contaminating transforms.
        style.removeProperty("translate");
        style.removeProperty("scale");
        style.removeProperty("rotate");
    }
}, _setFinalStates = function _setFinalStates(comps, onlyTransforms) {
    comps.forEach(function(c) {
        return c.a.cache.uncache = 1;
    });
    onlyTransforms || comps.finalStates.forEach(_applyInlineStyles);
}, _absoluteProps = "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","), // properties that we must record just
_makeAbsolute = function _makeAbsolute(elState, fallbackNode, ignoreBatch) {
    var element = elState.element, width = elState.width, height = elState.height, uncache = elState.uncache, getProp = elState.getProp, style = element.style, i = 4, result, displayIsNone, cs;
    typeof fallbackNode !== "object" && (fallbackNode = elState);
    if (_batch && ignoreBatch !== 1) {
        _batch._abs.push({
            t: element,
            b: elState,
            a: elState,
            sd: 0
        });
        _batch._final.push(function() {
            return elState.cache.uncache = 1, _applyInlineStyles(elState);
        });
        return element;
    }
    displayIsNone = getProp("display") === "none";
    if (!elState.isVisible || displayIsNone) {
        displayIsNone && (_recordInlineStyles(elState, [
            "display"
        ]).display = fallbackNode.display);
        elState.matrix = fallbackNode.matrix;
        elState.width = width = elState.width || fallbackNode.width;
        elState.height = height = elState.height || fallbackNode.height;
    }
    _recordInlineStyles(elState, _absoluteProps);
    cs = window.getComputedStyle(element);
    while(i--)style[_absoluteProps[i]] = cs[_absoluteProps[i]]; // record paddings as px-based because if removed from grid, percentage-based ones could be altered.
    style.gridArea = "1 / 1 / 1 / 1";
    style.transition = "none";
    style.position = "absolute";
    style.width = width + "px";
    style.height = height + "px";
    style.top || (style.top = "0px");
    style.left || (style.left = "0px");
    if (uncache) result = new ElementState(element);
    else {
        // better performance
        result = _copy(elState, _emptyObj);
        result.position = "absolute";
        if (elState.simple) {
            var bounds = element.getBoundingClientRect();
            result.matrix = new (0, _matrixJs.Matrix2D)(1, 0, 0, 1, bounds.left + (0, _matrixJs._getDocScrollLeft)(), bounds.top + (0, _matrixJs._getDocScrollTop)());
        } else result.matrix = (0, _matrixJs.getGlobalMatrix)(element, false, false, true);
    }
    result = _fit(result, elState, true);
    elState.x = _closestTenth(result.x, 0.01);
    elState.y = _closestTenth(result.y, 0.01);
    return element;
}, _filterComps = function _filterComps(comps, targets) {
    if (targets !== true) {
        targets = _toArray(targets);
        comps = comps.filter(function(c) {
            if (targets.indexOf((c.sd < 0 ? c.b : c.a).element) !== -1) return true;
            else {
                c.t._gsap.renderTransform(1); // we must force transforms to render on anything that isn't being made position: absolute, otherwise the absolute position happens and then when animation begins it applies transforms which can create a new stacking context, throwing off positioning!
                if (c.b.isVisible) {
                    c.t.style.width = c.b.width + "px"; // otherwise things can collapse when contents are made position: absolute.
                    c.t.style.height = c.b.height + "px";
                }
            }
        });
    }
    return comps;
}, _makeCompsAbsolute = function _makeCompsAbsolute(comps) {
    return _orderByDOMDepth(comps, true).forEach(function(c) {
        return (c.a.isVisible || c.b.isVisible) && _makeAbsolute(c.sd < 0 ? c.b : c.a, c.b, 1);
    });
}, _findElStateInState = function _findElStateInState(state, other) {
    return other && state.idLookup[_parseElementState(other).id] || state.elementStates[0];
}, _parseElementState = function _parseElementState(elOrNode, props, simple, other) {
    return elOrNode instanceof ElementState ? elOrNode : elOrNode instanceof FlipState ? _findElStateInState(elOrNode, other) : new ElementState(typeof elOrNode === "string" ? _getEl(elOrNode) || console.warn(elOrNode + " not found") : elOrNode, props, simple);
}, _recordProps = function _recordProps(elState, props) {
    var getProp = gsap.getProperty(elState.element, null, "native"), obj = elState.props = {}, i = props.length;
    while(i--)obj[props[i]] = (getProp(props[i]) + "").trim();
    obj.zIndex && (obj.zIndex = parseFloat(obj.zIndex) || 0);
    return elState;
}, _applyProps = function _applyProps(element, props) {
    var style = element.style || element, // could pass in a vars object.
    p;
    for(p in props)style[p] = props[p];
}, _getID = function _getID(el) {
    var id = el.getAttribute("data-flip-id");
    id || el.setAttribute("data-flip-id", id = "auto-" + _id++);
    return id;
}, _elementsFromElementStates = function _elementsFromElementStates(elStates) {
    return elStates.map(function(elState) {
        return elState.element;
    });
}, _handleCallback = function _handleCallback(callback, elStates, tl) {
    return callback && elStates.length && tl.add(callback(_elementsFromElementStates(elStates), tl, new FlipState(elStates, 0, true)), 0);
}, _fit = function _fit(fromState, toState, scale, applyProps, fitChild, vars) {
    var element = fromState.element, cache = fromState.cache, parent = fromState.parent, x = fromState.x, y = fromState.y, width = toState.width, height = toState.height, scaleX = toState.scaleX, scaleY = toState.scaleY, rotation = toState.rotation, bounds = toState.bounds, cssText = vars && element.style.cssText, transform = vars && element.getBBox && element.getAttribute("transform"), dimensionState = fromState, _toState$matrix = toState.matrix, e = _toState$matrix.e, f = _toState$matrix.f, deep = fromState.bounds.width !== bounds.width || fromState.bounds.height !== bounds.height || fromState.scaleX !== scaleX || fromState.scaleY !== scaleY || fromState.rotation !== rotation, simple = !deep && fromState.simple && toState.simple && !fitChild, skewX, fromPoint, toPoint, getProp, parentMatrix, matrix, bbox;
    if (simple || !parent) {
        scaleX = scaleY = 1;
        rotation = skewX = 0;
    } else {
        parentMatrix = _getInverseGlobalMatrix(parent);
        matrix = parentMatrix.clone().multiply(toState.ctm ? toState.matrix.clone().multiply(toState.ctm) : toState.matrix); // root SVG elements have a ctm that we must factor out (for example, viewBox:"0 0 94 94" with a width of 200px would scale the internals by 2.127 but when we're matching the size of the root <svg> element itself, that scaling shouldn't factor in!)
        rotation = _round(Math.atan2(matrix.b, matrix.a) * _RAD2DEG);
        skewX = _round(Math.atan2(matrix.c, matrix.d) * _RAD2DEG + rotation) % 360; // in very rare cases, minor rounding might end up with 360 which should be 0.
        scaleX = Math.sqrt(Math.pow(matrix.a, 2) + Math.pow(matrix.b, 2));
        scaleY = Math.sqrt(Math.pow(matrix.c, 2) + Math.pow(matrix.d, 2)) * Math.cos(skewX * _DEG2RAD);
        if (fitChild) {
            fitChild = _toArray(fitChild)[0];
            getProp = gsap.getProperty(fitChild);
            bbox = fitChild.getBBox && typeof fitChild.getBBox === "function" && fitChild.getBBox();
            dimensionState = {
                scaleX: getProp("scaleX"),
                scaleY: getProp("scaleY"),
                width: bbox ? bbox.width : Math.ceil(parseFloat(getProp("width", "px"))),
                height: bbox ? bbox.height : parseFloat(getProp("height", "px"))
            };
        }
        cache.rotation = rotation + "deg";
        cache.skewX = skewX + "deg";
    }
    if (scale) {
        scaleX *= width === dimensionState.width || !dimensionState.width ? 1 : width / dimensionState.width; // note if widths are both 0, we should make scaleX 1 - some elements have box-sizing that incorporates padding, etc. and we don't want it to collapse in that case.
        scaleY *= height === dimensionState.height || !dimensionState.height ? 1 : height / dimensionState.height;
        cache.scaleX = scaleX;
        cache.scaleY = scaleY;
    } else {
        width = _closestTenth(width * scaleX / dimensionState.scaleX, 0);
        height = _closestTenth(height * scaleY / dimensionState.scaleY, 0);
        element.style.width = width + "px";
        element.style.height = height + "px";
    } // if (fromState.isFixed) { // commented out because it's now taken care of in getGlobalMatrix() with a flag at the end.
    // 	e -= _getDocScrollLeft();
    // 	f -= _getDocScrollTop();
    // }
    applyProps && _applyProps(element, toState.props);
    if (simple || !parent) {
        x += e - fromState.matrix.e;
        y += f - fromState.matrix.f;
    } else if (deep || parent !== toState.parent) {
        cache.renderTransform(1, cache);
        matrix = (0, _matrixJs.getGlobalMatrix)(fitChild || element, false, false, true);
        fromPoint = parentMatrix.apply({
            x: matrix.e,
            y: matrix.f
        });
        toPoint = parentMatrix.apply({
            x: e,
            y: f
        });
        x += toPoint.x - fromPoint.x;
        y += toPoint.y - fromPoint.y;
    } else {
        // use a faster/cheaper algorithm if we're just moving x/y
        parentMatrix.e = parentMatrix.f = 0;
        toPoint = parentMatrix.apply({
            x: e - fromState.matrix.e,
            y: f - fromState.matrix.f
        });
        x += toPoint.x;
        y += toPoint.y;
    }
    x = _closestTenth(x, 0.02);
    y = _closestTenth(y, 0.02);
    if (vars && !(vars instanceof ElementState)) {
        // revert
        element.style.cssText = cssText;
        element.getBBox && element.setAttribute("transform", transform || "");
        cache.uncache = 1;
    } else {
        // or apply the transform immediately
        cache.x = x + "px";
        cache.y = y + "px";
        cache.renderTransform(1, cache);
    }
    if (vars) {
        vars.x = x;
        vars.y = y;
        vars.rotation = rotation;
        vars.skewX = skewX;
        if (scale) {
            vars.scaleX = scaleX;
            vars.scaleY = scaleY;
        } else {
            vars.width = width;
            vars.height = height;
        }
    }
    return vars || cache;
}, _parseState = function _parseState(targetsOrState, vars) {
    return targetsOrState instanceof FlipState ? targetsOrState : new FlipState(targetsOrState, vars);
}, _getChangingElState = function _getChangingElState(toState, fromState, id) {
    var to1 = toState.idLookup[id], to2 = toState.alt[id];
    return to2.isVisible && (!(fromState.getElementState(to2.element) || to2).isVisible || !to1.isVisible) ? to2 : to1;
}, _bodyMetrics = [], _bodyProps = "width,height,overflowX,overflowY".split(","), _bodyLocked, _lockBodyScroll = function _lockBodyScroll(lock) {
    // if there's no scrollbar, we should lock that so that measurements don't get affected by temporary repositioning, like if something is centered in the window.
    if (lock !== _bodyLocked) {
        var s = _body.style, w = _body.clientWidth === window.outerWidth, h = _body.clientHeight === window.outerHeight, i = 4;
        if (lock && (w || h)) {
            while(i--)_bodyMetrics[i] = s[_bodyProps[i]];
            if (w) {
                s.width = _body.clientWidth + "px";
                s.overflowY = "hidden";
            }
            if (h) {
                s.height = _body.clientHeight + "px";
                s.overflowX = "hidden";
            }
            _bodyLocked = lock;
        } else if (_bodyLocked) {
            while(i--)_bodyMetrics[i] ? s[_bodyProps[i]] = _bodyMetrics[i] : s.removeProperty(_camelToDashed(_bodyProps[i]));
            _bodyLocked = lock;
        }
    }
}, _fromTo = function _fromTo(fromState, toState, vars, relative) {
    // relative is -1 if "from()", and 1 if "to()"
    fromState instanceof FlipState && toState instanceof FlipState || console.warn("Not a valid state object.");
    vars = vars || {};
    var _vars = vars, clearProps = _vars.clearProps, onEnter = _vars.onEnter, onLeave = _vars.onLeave, absolute = _vars.absolute, absoluteOnLeave = _vars.absoluteOnLeave, custom = _vars.custom, delay = _vars.delay, paused = _vars.paused, repeat = _vars.repeat, repeatDelay = _vars.repeatDelay, yoyo = _vars.yoyo, toggleClass = _vars.toggleClass, nested = _vars.nested, _zIndex = _vars.zIndex, scale = _vars.scale, fade = _vars.fade, stagger = _vars.stagger, spin = _vars.spin, prune = _vars.prune, props = ("props" in vars ? vars : fromState).props, tweenVars = _copy(vars, _reserved), animation = gsap.timeline({
        delay: delay,
        paused: paused,
        repeat: repeat,
        repeatDelay: repeatDelay,
        yoyo: yoyo,
        data: "isFlip"
    }), remainingProps = tweenVars, entering = [], leaving = [], comps = [], swapOutTargets = [], spinNum = spin === true ? 1 : spin || 0, spinFunc = typeof spin === "function" ? spin : function() {
        return spinNum;
    }, interrupted = fromState.interrupted || toState.interrupted, addFunc = animation[relative !== 1 ? "to" : "from"], v, p, endTime, i, el, comp, state, targets, finalStates, fromNode, toNode, run, a, b; //relative || (toState = (new FlipState(toState.targets, {props: props})).fit(toState, scale));
    for(p in toState.idLookup){
        toNode = !toState.alt[p] ? toState.idLookup[p] : _getChangingElState(toState, fromState, p);
        el = toNode.element;
        fromNode = fromState.idLookup[p];
        fromState.alt[p] && el === fromNode.element && (fromState.alt[p].isVisible || !toNode.isVisible) && (fromNode = fromState.alt[p]);
        if (fromNode) {
            comp = {
                t: el,
                b: fromNode,
                a: toNode,
                sd: fromNode.element === el ? 0 : toNode.isVisible ? 1 : -1
            };
            comps.push(comp);
            if (comp.sd) {
                if (comp.sd < 0) {
                    comp.b = toNode;
                    comp.a = fromNode;
                } // for swapping elements that got interrupted, we must re-record the inline styles to ensure they're not tainted. Remember, .batch() permits getState() not to force in-progress flips to their end state.
                interrupted && _recordInlineStyles(comp.b, props ? _memoizedRemoveProps[props] : _removeProps);
                fade && comps.push(comp.swap = {
                    t: fromNode.element,
                    b: comp.b,
                    a: comp.a,
                    sd: -comp.sd,
                    swap: comp
                });
            }
            el._flip = fromNode.element._flip = _batch ? _batch.timeline : animation;
        } else if (toNode.isVisible) {
            comps.push({
                t: el,
                b: _copy(toNode, {
                    isVisible: 1
                }),
                a: toNode,
                sd: 0,
                entering: 1
            }); // to include it in the "entering" Array and do absolute positioning if necessary
            el._flip = _batch ? _batch.timeline : animation;
        }
    }
    props && (_memoizedProps[props] || _memoizeProps(props)).forEach(function(p) {
        return tweenVars[p] = function(i) {
            return comps[i].a.props[p];
        };
    });
    comps.finalStates = finalStates = [];
    run = function run() {
        _orderByDOMDepth(comps);
        _lockBodyScroll(true); // otherwise, measurements may get thrown off when things get fit.
        // TODO: cache the matrix, especially for parent because it'll probably get reused quite a bit, but lock it to a particular cycle(?).
        for(i = 0; i < comps.length; i++){
            comp = comps[i];
            a = comp.a;
            b = comp.b;
            if (prune && !a.isDifferent(b) && !comp.entering) // only flip if things changed! Don't omit it from comps initially because that'd prevent the element from being positioned absolutely (if necessary)
            comps.splice(i--, 1);
            else {
                el = comp.t;
                nested && !(comp.sd < 0) && i && (a.matrix = (0, _matrixJs.getGlobalMatrix)(el, false, false, true)); // moving a parent affects the position of children
                if (b.isVisible && a.isVisible) {
                    if (comp.sd < 0) {
                        // swapping OUT (swap direction of -1 is out)
                        state = new ElementState(el, props, fromState.simple);
                        _fit(state, a, scale, 0, 0, state);
                        state.matrix = (0, _matrixJs.getGlobalMatrix)(el, false, false, true);
                        state.css = comp.b.css;
                        comp.a = a = state;
                        fade && (el.style.opacity = interrupted ? b.opacity : a.opacity);
                        stagger && swapOutTargets.push(el);
                    } else if (comp.sd > 0 && fade) // swapping IN (swap direction of 1 is in)
                    el.style.opacity = interrupted ? a.opacity - b.opacity : "0";
                    _fit(a, b, scale, props);
                } else if (b.isVisible !== a.isVisible) {
                    // either entering or leaving (one side is invisible)
                    if (!b.isVisible) {
                        // entering
                        a.isVisible && entering.push(a);
                        comps.splice(i--, 1);
                    } else if (!a.isVisible) {
                        // leaving
                        b.css = a.css;
                        leaving.push(b);
                        comps.splice(i--, 1);
                        absolute && nested && _fit(a, b, scale, props);
                    }
                }
                if (!scale) {
                    el.style.maxWidth = Math.max(a.width, b.width) + "px";
                    el.style.maxHeight = Math.max(a.height, b.height) + "px";
                    el.style.minWidth = Math.min(a.width, b.width) + "px";
                    el.style.minHeight = Math.min(a.height, b.height) + "px";
                }
                nested && toggleClass && el.classList.add(toggleClass);
            }
            finalStates.push(a);
        }
        var classTargets;
        if (toggleClass) {
            classTargets = finalStates.map(function(s) {
                return s.element;
            });
            nested && classTargets.forEach(function(e) {
                return e.classList.remove(toggleClass);
            }); // there could be a delay, so don't leave the classes applied (we'll do it in a timeline callback)
        }
        _lockBodyScroll(false);
        if (scale) {
            tweenVars.scaleX = function(i) {
                return comps[i].a.scaleX;
            };
            tweenVars.scaleY = function(i) {
                return comps[i].a.scaleY;
            };
        } else {
            tweenVars.width = function(i) {
                return comps[i].a.width + "px";
            };
            tweenVars.height = function(i) {
                return comps[i].a.height + "px";
            };
            tweenVars.autoRound = vars.autoRound || false;
        }
        tweenVars.x = function(i) {
            return comps[i].a.x + "px";
        };
        tweenVars.y = function(i) {
            return comps[i].a.y + "px";
        };
        tweenVars.rotation = function(i) {
            return comps[i].a.rotation + (spin ? spinFunc(i, targets[i], targets) * 360 : 0);
        };
        tweenVars.skewX = function(i) {
            return comps[i].a.skewX;
        };
        targets = comps.map(function(c) {
            return c.t;
        });
        if (_zIndex || _zIndex === 0) {
            tweenVars.modifiers = {
                zIndex: function zIndex() {
                    return _zIndex;
                }
            };
            tweenVars.zIndex = _zIndex;
            tweenVars.immediateRender = vars.immediateRender !== false;
        }
        fade && (tweenVars.opacity = function(i) {
            return comps[i].sd < 0 ? 0 : comps[i].sd > 0 ? comps[i].a.opacity : "+=0";
        });
        if (swapOutTargets.length) {
            stagger = gsap.utils.distribute(stagger);
            var dummyArray = targets.slice(swapOutTargets.length);
            tweenVars.stagger = function(i, el) {
                return stagger(~swapOutTargets.indexOf(el) ? targets.indexOf(comps[i].swap.t) : i, el, dummyArray);
            };
        } // // for testing...
        // gsap.delayedCall(vars.data ? 50 : 1, function() {
        // 	animation.eventCallback("onComplete", () => _setFinalStates(comps, !clearProps));
        // 	addFunc.call(animation, targets, tweenVars, 0).play();
        // });
        // return;
        _callbacks.forEach(function(name) {
            return vars[name] && animation.eventCallback(name, vars[name], vars[name + "Params"]);
        }); // apply callbacks to the timeline, not tweens (because "custom" timing can make multiple tweens)
        if (custom && targets.length) {
            // bust out the custom properties as their own tweens so they can use different eases, durations, etc.
            remainingProps = _copy(tweenVars, _reserved);
            if ("scale" in custom) {
                custom.scaleX = custom.scaleY = custom.scale;
                delete custom.scale;
            }
            for(p in custom){
                v = _copy(custom[p], _fitReserved);
                v[p] = tweenVars[p];
                !("duration" in v) && "duration" in tweenVars && (v.duration = tweenVars.duration);
                v.stagger = tweenVars.stagger;
                addFunc.call(animation, targets, v, 0);
                delete remainingProps[p];
            }
        }
        if (targets.length || leaving.length || entering.length) {
            toggleClass && animation.add(function() {
                return _toggleClass(classTargets, toggleClass, animation._zTime < 0 ? "remove" : "add");
            }, 0) && !paused && _toggleClass(classTargets, toggleClass, "add");
            targets.length && addFunc.call(animation, targets, remainingProps, 0);
        }
        _handleCallback(onEnter, entering, animation);
        _handleCallback(onLeave, leaving, animation);
        var batchTl = _batch && _batch.timeline;
        if (batchTl) {
            batchTl.add(animation, 0);
            _batch._final.push(function() {
                return _setFinalStates(comps, !clearProps);
            });
        }
        endTime = animation.duration();
        animation.call(function() {
            var forward = animation.time() >= endTime;
            forward && !batchTl && _setFinalStates(comps, !clearProps);
            toggleClass && _toggleClass(classTargets, toggleClass, forward ? "remove" : "add");
        });
    };
    absoluteOnLeave && (absolute = comps.filter(function(comp) {
        return !comp.sd && !comp.a.isVisible && comp.b.isVisible;
    }).map(function(comp) {
        return comp.a.element;
    }));
    if (_batch) {
        var _batch$_abs;
        absolute && (_batch$_abs = _batch._abs).push.apply(_batch$_abs, _filterComps(comps, absolute));
        _batch._run.push(run);
    } else {
        absolute && _makeCompsAbsolute(_filterComps(comps, absolute)); // when making absolute, we must go in a very particular order so that document flow changes don't affect things. Don't make it visible if both the before and after states are invisible! There's no point, and it could make things appear visible during the flip that shouldn't be.
        run();
    }
    var anim = _batch ? _batch.timeline : animation;
    anim.revert = function() {
        return _killFlip(anim, 1);
    }; // a Flip timeline should behave very different when reverting - it should actually jump to the end so that styles get cleared out.
    return anim;
}, _interrupt = function _interrupt(tl) {
    tl.vars.onInterrupt && tl.vars.onInterrupt.apply(tl, tl.vars.onInterruptParams || []);
    tl.getChildren(true, false, true).forEach(_interrupt);
}, _killFlip = function _killFlip(tl, action) {
    // action: 0 = nothing, 1 = complete, 2 = only kill (don't complete)
    if (tl && tl.progress() < 1 && !tl.paused()) {
        if (action) {
            _interrupt(tl);
            action < 2 && tl.progress(1); // we should also kill it in case it was added to a parent timeline.
            tl.kill();
        }
        return true;
    }
}, _createLookup = function _createLookup(state) {
    var lookup = state.idLookup = {}, alt = state.alt = {}, elStates = state.elementStates, i = elStates.length, elState;
    while(i--){
        elState = elStates[i];
        lookup[elState.id] ? alt[elState.id] = elState : lookup[elState.id] = elState;
    }
};
var FlipState = /*#__PURE__*/ function() {
    function FlipState(targets, vars, targetsAreElementStates) {
        this.props = vars && vars.props;
        this.simple = !!(vars && vars.simple);
        if (targetsAreElementStates) {
            this.targets = _elementsFromElementStates(targets);
            this.elementStates = targets;
            _createLookup(this);
        } else {
            this.targets = _toArray(targets);
            var soft = vars && (vars.kill === false || vars.batch && !vars.kill);
            _batch && !soft && _batch._kill.push(this);
            this.update(soft || !!_batch); // when batching, don't force in-progress flips to their end; we need to do that AFTER all getStates() are called.
        }
    }
    var _proto = FlipState.prototype;
    _proto.update = function update(soft) {
        var _this = this;
        this.elementStates = this.targets.map(function(el) {
            return new ElementState(el, _this.props, _this.simple);
        });
        _createLookup(this);
        this.interrupt(soft);
        this.recordInlineStyles();
        return this;
    };
    _proto.clear = function clear() {
        this.targets.length = this.elementStates.length = 0;
        _createLookup(this);
        return this;
    };
    _proto.fit = function fit(state, scale, nested) {
        var elStatesInOrder = _orderByDOMDepth(this.elementStates.slice(0), false, true), toElStates = (state || this).idLookup, i = 0, fromNode, toNode;
        for(; i < elStatesInOrder.length; i++){
            fromNode = elStatesInOrder[i];
            nested && (fromNode.matrix = (0, _matrixJs.getGlobalMatrix)(fromNode.element, false, false, true)); // moving a parent affects the position of children
            toNode = toElStates[fromNode.id];
            toNode && _fit(fromNode, toNode, scale, true, 0, fromNode);
            fromNode.matrix = (0, _matrixJs.getGlobalMatrix)(fromNode.element, false, false, true);
        }
        return this;
    };
    _proto.getProperty = function getProperty(element, property) {
        var es = this.getElementState(element) || _emptyObj;
        return (property in es ? es : es.props || _emptyObj)[property];
    };
    _proto.add = function add(state) {
        var i = state.targets.length, lookup = this.idLookup, alt = this.alt, index, es, es2;
        while(i--){
            es = state.elementStates[i];
            es2 = lookup[es.id];
            if (es2 && (es.element === es2.element || alt[es.id] && alt[es.id].element === es.element)) {
                // if the flip id is already in this FlipState, replace it!
                index = this.elementStates.indexOf(es.element === es2.element ? es2 : alt[es.id]);
                this.targets.splice(index, 1, state.targets[i]);
                this.elementStates.splice(index, 1, es);
            } else {
                this.targets.push(state.targets[i]);
                this.elementStates.push(es);
            }
        }
        state.interrupted && (this.interrupted = true);
        state.simple || (this.simple = false);
        _createLookup(this);
        return this;
    };
    _proto.compare = function compare(state) {
        var l1 = state.idLookup, l2 = this.idLookup, unchanged = [], changed = [], enter = [], leave = [], targets = [], a1 = state.alt, a2 = this.alt, place = function place(s1, s2, el) {
            return (s1.isVisible !== s2.isVisible ? s1.isVisible ? enter : leave : s1.isVisible ? changed : unchanged).push(el) && targets.push(el);
        }, placeIfDoesNotExist = function placeIfDoesNotExist(s1, s2, el) {
            return targets.indexOf(el) < 0 && place(s1, s2, el);
        }, s1, s2, p, el, s1Alt, s2Alt, c1, c2;
        for(p in l1){
            s1Alt = a1[p];
            s2Alt = a2[p];
            s1 = !s1Alt ? l1[p] : _getChangingElState(state, this, p);
            el = s1.element;
            s2 = l2[p];
            if (s2Alt) {
                c2 = s2.isVisible || !s2Alt.isVisible && el === s2.element ? s2 : s2Alt;
                c1 = s1Alt && !s1.isVisible && !s1Alt.isVisible && c2.element === s1Alt.element ? s1Alt : s1; //c1.element !== c2.element && c1.element === s2.element && (c2 = s2);
                if (c1.isVisible && c2.isVisible && c1.element !== c2.element) {
                    // swapping, so force into "changed" array
                    (c1.isDifferent(c2) ? changed : unchanged).push(c1.element, c2.element);
                    targets.push(c1.element, c2.element);
                } else place(c1, c2, c1.element);
                s1Alt && c1.element === s1Alt.element && (s1Alt = l1[p]);
                placeIfDoesNotExist(c1.element !== s2.element && s1Alt ? s1Alt : c1, s2, s2.element);
                placeIfDoesNotExist(s1Alt && s1Alt.element === s2Alt.element ? s1Alt : c1, s2Alt, s2Alt.element);
                s1Alt && placeIfDoesNotExist(s1Alt, s2Alt.element === s1Alt.element ? s2Alt : s2, s1Alt.element);
            } else {
                !s2 ? enter.push(el) : !s2.isDifferent(s1) ? unchanged.push(el) : place(s1, s2, el);
                s1Alt && placeIfDoesNotExist(s1Alt, s2, s1Alt.element);
            }
        }
        for(p in l2)if (!l1[p]) {
            leave.push(l2[p].element);
            a2[p] && leave.push(a2[p].element);
        }
        return {
            changed: changed,
            unchanged: unchanged,
            enter: enter,
            leave: leave
        };
    };
    _proto.recordInlineStyles = function recordInlineStyles() {
        var props = _memoizedRemoveProps[this.props] || _removeProps, i = this.elementStates.length;
        while(i--)_recordInlineStyles(this.elementStates[i], props);
    };
    _proto.interrupt = function interrupt(soft) {
        var _this2 = this;
        // soft = DON'T force in-progress flip animations to completion (like when running a batch, we can't immediately kill flips when getting states because it could contaminate positioning and other .getState() calls that will run in the batch (we kill AFTER all the .getState() calls complete).
        var timelines = [];
        this.targets.forEach(function(t) {
            var tl = t._flip, foundInProgress = _killFlip(tl, soft ? 0 : 1);
            soft && foundInProgress && timelines.indexOf(tl) < 0 && tl.add(function() {
                return _this2.updateVisibility();
            });
            foundInProgress && timelines.push(tl);
        });
        !soft && timelines.length && this.updateVisibility(); // if we found an in-progress Flip animation, we must record all the values in their current state at that point BUT we should update the isVisible value AFTER pushing that flip to completion so that elements that are entering or leaving will populate those Arrays properly.
        this.interrupted || (this.interrupted = !!timelines.length);
    };
    _proto.updateVisibility = function updateVisibility() {
        this.elementStates.forEach(function(es) {
            var b = es.element.getBoundingClientRect();
            es.isVisible = !!(b.width || b.height || b.top || b.left);
            es.uncache = 1;
        });
    };
    _proto.getElementState = function getElementState(element) {
        return this.elementStates[this.targets.indexOf(_getEl(element))];
    };
    _proto.makeAbsolute = function makeAbsolute() {
        return _orderByDOMDepth(this.elementStates.slice(0), true, true).map(_makeAbsolute);
    };
    return FlipState;
}();
var ElementState = /*#__PURE__*/ function() {
    function ElementState(element, props, simple) {
        this.element = element;
        this.update(props, simple);
    }
    var _proto2 = ElementState.prototype;
    _proto2.isDifferent = function isDifferent(state) {
        var b1 = this.bounds, b2 = state.bounds;
        return b1.top !== b2.top || b1.left !== b2.left || b1.width !== b2.width || b1.height !== b2.height || !this.matrix.equals(state.matrix) || this.opacity !== state.opacity || this.props && state.props && JSON.stringify(this.props) !== JSON.stringify(state.props);
    };
    _proto2.update = function update(props, simple) {
        var self = this, element = self.element, getProp = gsap.getProperty(element), cache = gsap.core.getCache(element), bounds = element.getBoundingClientRect(), bbox = element.getBBox && typeof element.getBBox === "function" && element.nodeName.toLowerCase() !== "svg" && element.getBBox(), m = simple ? new (0, _matrixJs.Matrix2D)(1, 0, 0, 1, bounds.left + (0, _matrixJs._getDocScrollLeft)(), bounds.top + (0, _matrixJs._getDocScrollTop)()) : (0, _matrixJs.getGlobalMatrix)(element, false, false, true);
        self.getProp = getProp;
        self.element = element;
        self.id = _getID(element);
        self.matrix = m;
        self.cache = cache;
        self.bounds = bounds;
        self.isVisible = !!(bounds.width || bounds.height || bounds.left || bounds.top);
        self.display = getProp("display");
        self.position = getProp("position");
        self.parent = element.parentNode;
        self.x = getProp("x");
        self.y = getProp("y");
        self.scaleX = cache.scaleX;
        self.scaleY = cache.scaleY;
        self.rotation = getProp("rotation");
        self.skewX = getProp("skewX");
        self.opacity = getProp("opacity");
        self.width = bbox ? bbox.width : _closestTenth(getProp("width", "px"), 0.04); // round up to the closest 0.1 so that text doesn't wrap.
        self.height = bbox ? bbox.height : _closestTenth(getProp("height", "px"), 0.04);
        props && _recordProps(self, _memoizedProps[props] || _memoizeProps(props));
        self.ctm = element.getCTM && element.nodeName.toLowerCase() === "svg" && (0, _matrixJs._getCTM)(element).inverse();
        self.simple = simple || _round(m.a) === 1 && !_round(m.b) && !_round(m.c) && _round(m.d) === 1; // allows us to speed through some other tasks if it's not scale/rotated
        self.uncache = 0;
    };
    return ElementState;
}();
var FlipAction = /*#__PURE__*/ function() {
    function FlipAction(vars, batch) {
        this.vars = vars;
        this.batch = batch;
        this.states = [];
        this.timeline = batch.timeline;
    }
    var _proto3 = FlipAction.prototype;
    _proto3.getStateById = function getStateById(id) {
        var i = this.states.length;
        while(i--){
            if (this.states[i].idLookup[id]) return this.states[i];
        }
    };
    _proto3.kill = function kill() {
        this.batch.remove(this);
    };
    return FlipAction;
}();
var FlipBatch = /*#__PURE__*/ function() {
    function FlipBatch(id) {
        this.id = id;
        this.actions = [];
        this._kill = [];
        this._final = [];
        this._abs = [];
        this._run = [];
        this.data = {};
        this.state = new FlipState();
        this.timeline = gsap.timeline();
    }
    var _proto4 = FlipBatch.prototype;
    _proto4.add = function add(config) {
        var result = this.actions.filter(function(action) {
            return action.vars === config;
        });
        if (result.length) return result[0];
        result = new FlipAction(typeof config === "function" ? {
            animate: config
        } : config, this);
        this.actions.push(result);
        return result;
    };
    _proto4.remove = function remove(action) {
        var i = this.actions.indexOf(action);
        i >= 0 && this.actions.splice(i, 1);
        return this;
    };
    _proto4.getState = function getState(merge) {
        var _this3 = this;
        var prevBatch = _batch, prevAction = _batchAction;
        _batch = this;
        this.state.clear();
        this._kill.length = 0;
        this.actions.forEach(function(action) {
            if (action.vars.getState) {
                action.states.length = 0;
                _batchAction = action;
                action.state = action.vars.getState(action);
            }
            merge && action.states.forEach(function(s) {
                return _this3.state.add(s);
            });
        });
        _batchAction = prevAction;
        _batch = prevBatch;
        this.killConflicts();
        return this;
    };
    _proto4.animate = function animate() {
        var _this4 = this;
        var prevBatch = _batch, tl = this.timeline, i = this.actions.length, finalStates, endTime;
        _batch = this;
        tl.clear();
        this._abs.length = this._final.length = this._run.length = 0;
        this.actions.forEach(function(a) {
            a.vars.animate && a.vars.animate(a);
            var onEnter = a.vars.onEnter, onLeave = a.vars.onLeave, targets = a.targets, s, result;
            if (targets && targets.length && (onEnter || onLeave)) {
                s = new FlipState();
                a.states.forEach(function(state) {
                    return s.add(state);
                });
                result = s.compare(Flip.getState(targets));
                result.enter.length && onEnter && onEnter(result.enter);
                result.leave.length && onLeave && onLeave(result.leave);
            }
        });
        _makeCompsAbsolute(this._abs);
        this._run.forEach(function(f) {
            return f();
        });
        endTime = tl.duration();
        finalStates = this._final.slice(0);
        tl.add(function() {
            if (endTime <= tl.time()) {
                // only call if moving forward in the timeline (in case it's nested in a timeline that gets reversed)
                finalStates.forEach(function(f) {
                    return f();
                });
                _forEachBatch(_this4, "onComplete");
            }
        });
        _batch = prevBatch;
        while(i--)this.actions[i].vars.once && this.actions[i].kill();
        _forEachBatch(this, "onStart");
        tl.restart();
        return this;
    };
    _proto4.loadState = function loadState(done) {
        done || (done = function done() {
            return 0;
        });
        var queue = [];
        this.actions.forEach(function(c) {
            if (c.vars.loadState) {
                var i, f = function f(targets) {
                    targets && (c.targets = targets);
                    i = queue.indexOf(f);
                    if (~i) {
                        queue.splice(i, 1);
                        queue.length || done();
                    }
                };
                queue.push(f);
                c.vars.loadState(f);
            }
        });
        queue.length || done();
        return this;
    };
    _proto4.setState = function setState() {
        this.actions.forEach(function(c) {
            return c.targets = c.vars.setState && c.vars.setState(c);
        });
        return this;
    };
    _proto4.killConflicts = function killConflicts(soft) {
        this.state.interrupt(soft);
        this._kill.forEach(function(state) {
            return state.interrupt(soft);
        });
        return this;
    };
    _proto4.run = function run(skipGetState, merge) {
        var _this5 = this;
        if (this !== _batch) {
            skipGetState || this.getState(merge);
            this.loadState(function() {
                if (!_this5._killed) {
                    _this5.setState();
                    _this5.animate();
                }
            });
        }
        return this;
    };
    _proto4.clear = function clear(stateOnly) {
        this.state.clear();
        stateOnly || (this.actions.length = 0);
    };
    _proto4.getStateById = function getStateById(id) {
        var i = this.actions.length, s;
        while(i--){
            s = this.actions[i].getStateById(id);
            if (s) return s;
        }
        return this.state.idLookup[id] && this.state;
    };
    _proto4.kill = function kill() {
        this._killed = 1;
        this.clear();
        delete _batchLookup[this.id];
    };
    return FlipBatch;
}();
var Flip = /*#__PURE__*/ function() {
    function Flip() {}
    Flip.getState = function getState(targets, vars) {
        var state = _parseState(targets, vars);
        _batchAction && _batchAction.states.push(state);
        vars && vars.batch && Flip.batch(vars.batch).state.add(state);
        return state;
    };
    Flip.from = function from(state, vars) {
        vars = vars || {};
        "clearProps" in vars || (vars.clearProps = true);
        return _fromTo(state, _parseState(vars.targets || state.targets, {
            props: vars.props || state.props,
            simple: vars.simple,
            kill: !!vars.kill
        }), vars, -1);
    };
    Flip.to = function to(state, vars) {
        return _fromTo(state, _parseState(vars.targets || state.targets, {
            props: vars.props || state.props,
            simple: vars.simple,
            kill: !!vars.kill
        }), vars, 1);
    };
    Flip.fromTo = function fromTo(fromState, toState, vars) {
        return _fromTo(fromState, toState, vars);
    };
    Flip.fit = function fit(fromEl, toEl, vars) {
        var v = vars ? _copy(vars, _fitReserved) : {}, _ref = vars || v, absolute = _ref.absolute, scale = _ref.scale, getVars = _ref.getVars, props = _ref.props, runBackwards = _ref.runBackwards, onComplete = _ref.onComplete, simple = _ref.simple, fitChild = vars && vars.fitChild && _getEl(vars.fitChild), before = _parseElementState(toEl, props, simple, fromEl), after = _parseElementState(fromEl, 0, simple, before), inlineProps = props ? _memoizedRemoveProps[props] : _removeProps;
        props && _applyProps(v, before.props);
        if (runBackwards) {
            _recordInlineStyles(after, inlineProps);
            "immediateRender" in v || (v.immediateRender = true);
            v.onComplete = function() {
                _applyInlineStyles(after);
                onComplete && onComplete.apply(this, arguments);
            };
        }
        absolute && _makeAbsolute(after, before);
        v = _fit(after, before, scale || fitChild, props, fitChild, v.duration || getVars ? v : 0);
        return getVars ? v : v.duration ? gsap.to(after.element, v) : null;
    };
    Flip.makeAbsolute = function makeAbsolute(targetsOrStates, vars) {
        return (targetsOrStates instanceof FlipState ? targetsOrStates : new FlipState(targetsOrStates, vars)).makeAbsolute();
    };
    Flip.batch = function batch(id) {
        id || (id = "default");
        return _batchLookup[id] || (_batchLookup[id] = new FlipBatch(id));
    };
    Flip.killFlipsOf = function killFlipsOf(targets, complete) {
        (targets instanceof FlipState ? targets.targets : _toArray(targets)).forEach(function(t) {
            return t && _killFlip(t._flip, complete !== false ? 1 : 2);
        });
    };
    Flip.isFlipping = function isFlipping(target) {
        var f = Flip.getByTarget(target);
        return !!f && f.isActive();
    };
    Flip.getByTarget = function getByTarget(target) {
        return (_getEl(target) || _emptyObj)._flip;
    };
    Flip.getElementState = function getElementState(target, props) {
        return new ElementState(_getEl(target), props);
    };
    Flip.convertCoordinates = function convertCoordinates(fromElement, toElement, point) {
        var m = (0, _matrixJs.getGlobalMatrix)(toElement, true, true).multiply((0, _matrixJs.getGlobalMatrix)(fromElement));
        return point ? m.apply(point) : m;
    };
    Flip.register = function register(core) {
        _body = typeof document !== "undefined" && document.body;
        if (_body) {
            gsap = core;
            (0, _matrixJs._setDoc)(_body);
            _toArray = gsap.utils.toArray;
            var snap = gsap.utils.snap(0.1);
            _closestTenth = function _closestTenth(value, add) {
                return snap(parseFloat(value) + add);
            };
        }
    };
    return Flip;
}();
Flip.version = "3.11.4"; // function whenImagesLoad(el, func) {
// 	let pending = [],
// 		onLoad = e => {
// 			pending.splice(pending.indexOf(e.target), 1);
// 			e.target.removeEventListener("load", onLoad);
// 			pending.length || func();
// 		};
// 	gsap.utils.toArray(el.tagName.toLowerCase() === "img" ? el : el.querySelectorAll("img")).forEach(img => img.complete || img.addEventListener("load", onLoad) || pending.push(img));
// 	pending.length || func();
// }
typeof window !== "undefined" && window.gsap && window.gsap.registerPlugin(Flip);

},{"./utils/matrix.js":"cIJoY","@parcel/transformer-js/src/esmodule-helpers.js":"2IUUi"}],"cIJoY":[function(require,module,exports) {
/*!
 * matrix 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/ /* eslint-disable */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Matrix2D", ()=>Matrix2D);
// Inverting lets you translate a global point into a local coordinate space. No inverting lets you go the other way.
// We needed this to work around various browser bugs, like Firefox doesn't accurately report getScreenCTM() when there
// are transforms applied to ancestor elements.
// The matrix math to convert any x/y coordinate is as follows, which is wrapped in a convenient apply() method of Matrix2D above:
//     tx = m.a * x + m.c * y + m.e
//     ty = m.b * x + m.d * y + m.f
parcelHelpers.export(exports, "getGlobalMatrix", ()=>getGlobalMatrix);
parcelHelpers.export(exports, "_getDocScrollTop", ()=>_getDocScrollTop) // export function getMatrix(element) {
 // 	_doc || _setDoc(element);
 // 	let m = (_win.getComputedStyle(element)[_transformProp] + "").substr(7).match(/[-.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g),
 // 		is2D = m && m.length === 6;
 // 	return !m || m.length < 6 ? new Matrix2D() : new Matrix2D(+m[0], +m[1], +m[is2D ? 2 : 4], +m[is2D ? 3 : 5], +m[is2D ? 4 : 12], +m[is2D ? 5 : 13]);
 // }
;
parcelHelpers.export(exports, "_getDocScrollLeft", ()=>_getDocScrollLeft);
parcelHelpers.export(exports, "_setDoc", ()=>_setDoc);
parcelHelpers.export(exports, "_isFixed", ()=>_isFixed);
parcelHelpers.export(exports, "_getCTM", ()=>_getCTM);
var _doc, _win, _docElement, _body, _divContainer, _svgContainer, _identityMatrix, _gEl, _transformProp = "transform", _transformOriginProp = _transformProp + "Origin", _hasOffsetBug, _setDoc = function _setDoc(element) {
    var doc = element.ownerDocument || element;
    if (!(_transformProp in element.style) && "msTransform" in element.style) {
        //to improve compatibility with old Microsoft browsers
        _transformProp = "msTransform";
        _transformOriginProp = _transformProp + "Origin";
    }
    while(doc.parentNode && (doc = doc.parentNode));
    _win = window;
    _identityMatrix = new Matrix2D();
    if (doc) {
        _doc = doc;
        _docElement = doc.documentElement;
        _body = doc.body;
        _gEl = _doc.createElementNS("http://www.w3.org/2000/svg", "g"); // prevent any existing CSS from transforming it
        _gEl.style.transform = "none"; // now test for the offset reporting bug. Use feature detection instead of browser sniffing to make things more bulletproof and future-proof. Hopefully Safari will fix their bug soon but it's 2020 and it's still not fixed.
        var d1 = doc.createElement("div"), d2 = doc.createElement("div");
        _body.appendChild(d1);
        d1.appendChild(d2);
        d1.style.position = "static";
        d1.style[_transformProp] = "translate3d(0,0,1px)";
        _hasOffsetBug = d2.offsetParent !== d1;
        _body.removeChild(d1);
    }
    return doc;
}, _forceNonZeroScale = function _forceNonZeroScale(e) {
    // walks up the element's ancestors and finds any that had their scale set to 0 via GSAP, and changes them to 0.0001 to ensure that measurements work. Firefox has a bug that causes it to incorrectly report getBoundingClientRect() when scale is 0.
    var a, cache;
    while(e && e !== _body){
        cache = e._gsap;
        cache && cache.uncache && cache.get(e, "x"); // force re-parsing of transforms if necessary
        if (cache && !cache.scaleX && !cache.scaleY && cache.renderTransform) {
            cache.scaleX = cache.scaleY = 1e-4;
            cache.renderTransform(1, cache);
            a ? a.push(cache) : a = [
                cache
            ];
        }
        e = e.parentNode;
    }
    return a;
}, // possible future addition: pass an element to _forceDisplay() and it'll walk up all its ancestors and make sure anything with display: none is set to display: block, and if there's no parentNode, it'll add it to the body. It returns an Array that you can then feed to _revertDisplay() to have it revert all the changes it made.
// _forceDisplay = e => {
// 	let a = [],
// 		parent;
// 	while (e && e !== _body) {
// 		parent = e.parentNode;
// 		(_win.getComputedStyle(e).display === "none" || !parent) && a.push(e, e.style.display, parent) && (e.style.display = "block");
// 		parent || _body.appendChild(e);
// 		e = parent;
// 	}
// 	return a;
// },
// _revertDisplay = a => {
// 	for (let i = 0; i < a.length; i+=3) {
// 		a[i+1] ? (a[i].style.display = a[i+1]) : a[i].style.removeProperty("display");
// 		a[i+2] || a[i].parentNode.removeChild(a[i]);
// 	}
// },
_svgTemps = [], //we create 3 elements for SVG, and 3 for other DOM elements and cache them for performance reasons. They get nested in _divContainer and _svgContainer so that just one element is added to the DOM on each successive attempt. Again, performance is key.
_divTemps = [], _getDocScrollTop = function _getDocScrollTop() {
    return _win.pageYOffset || _doc.scrollTop || _docElement.scrollTop || _body.scrollTop || 0;
}, _getDocScrollLeft = function _getDocScrollLeft() {
    return _win.pageXOffset || _doc.scrollLeft || _docElement.scrollLeft || _body.scrollLeft || 0;
}, _svgOwner = function _svgOwner(element) {
    return element.ownerSVGElement || ((element.tagName + "").toLowerCase() === "svg" ? element : null);
}, _isFixed = function _isFixed(element) {
    if (_win.getComputedStyle(element).position === "fixed") return true;
    element = element.parentNode;
    if (element && element.nodeType === 1) // avoid document fragments which will throw an error.
    return _isFixed(element);
}, _createSibling = function _createSibling(element, i) {
    if (element.parentNode && (_doc || _setDoc(element))) {
        var svg = _svgOwner(element), ns = svg ? svg.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", type = svg ? i ? "rect" : "g" : "div", x = i !== 2 ? 0 : 100, y = i === 3 ? 100 : 0, css = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;", e = _doc.createElementNS ? _doc.createElementNS(ns.replace(/^https/, "http"), type) : _doc.createElement(type);
        if (i) {
            if (!svg) {
                if (!_divContainer) {
                    _divContainer = _createSibling(element);
                    _divContainer.style.cssText = css;
                }
                e.style.cssText = css + "width:0.1px;height:0.1px;top:" + y + "px;left:" + x + "px";
                _divContainer.appendChild(e);
            } else {
                _svgContainer || (_svgContainer = _createSibling(element));
                e.setAttribute("width", 0.01);
                e.setAttribute("height", 0.01);
                e.setAttribute("transform", "translate(" + x + "," + y + ")");
                _svgContainer.appendChild(e);
            }
        }
        return e;
    }
    throw "Need document and parent.";
}, _consolidate = function _consolidate(m) {
    // replaces SVGTransformList.consolidate() because a bug in Firefox causes it to break pointer events. See https://greensock.com/forums/topic/23248-touch-is-not-working-on-draggable-in-firefox-windows-v324/?tab=comments#comment-109800
    var c = new Matrix2D(), i = 0;
    for(; i < m.numberOfItems; i++)c.multiply(m.getItem(i).matrix);
    return c;
}, _getCTM = function _getCTM(svg) {
    var m = svg.getCTM(), transform;
    if (!m) {
        // Firefox returns null for getCTM() on root <svg> elements, so this is a workaround using a <g> that we temporarily append.
        transform = svg.style[_transformProp];
        svg.style[_transformProp] = "none"; // a bug in Firefox causes css transforms to contaminate the getCTM()
        svg.appendChild(_gEl);
        m = _gEl.getCTM();
        svg.removeChild(_gEl);
        transform ? svg.style[_transformProp] = transform : svg.style.removeProperty(_transformProp.replace(/([A-Z])/g, "-$1").toLowerCase());
    }
    return m || _identityMatrix.clone(); // Firefox will still return null if the <svg> has a width/height of 0 in the browser.
}, _placeSiblings = function _placeSiblings(element, adjustGOffset) {
    var svg = _svgOwner(element), isRootSVG = element === svg, siblings = svg ? _svgTemps : _divTemps, parent = element.parentNode, container, m, b, x, y, cs;
    if (element === _win) return element;
    siblings.length || siblings.push(_createSibling(element, 1), _createSibling(element, 2), _createSibling(element, 3));
    container = svg ? _svgContainer : _divContainer;
    if (svg) {
        if (isRootSVG) {
            b = _getCTM(element);
            x = -b.e / b.a;
            y = -b.f / b.d;
            m = _identityMatrix;
        } else if (element.getBBox) {
            b = element.getBBox();
            m = element.transform ? element.transform.baseVal : {}; // IE11 doesn't follow the spec.
            m = !m.numberOfItems ? _identityMatrix : m.numberOfItems > 1 ? _consolidate(m) : m.getItem(0).matrix; // don't call m.consolidate().matrix because a bug in Firefox makes pointer events not work when consolidate() is called on the same tick as getBoundingClientRect()! See https://greensock.com/forums/topic/23248-touch-is-not-working-on-draggable-in-firefox-windows-v324/?tab=comments#comment-109800
            x = m.a * b.x + m.c * b.y;
            y = m.b * b.x + m.d * b.y;
        } else {
            // may be a <mask> which has no getBBox() so just use defaults instead of throwing errors.
            m = new Matrix2D();
            x = y = 0;
        }
        if (adjustGOffset && element.tagName.toLowerCase() === "g") x = y = 0;
        (isRootSVG ? svg : parent).appendChild(container);
        container.setAttribute("transform", "matrix(" + m.a + "," + m.b + "," + m.c + "," + m.d + "," + (m.e + x) + "," + (m.f + y) + ")");
    } else {
        x = y = 0;
        if (_hasOffsetBug) {
            // some browsers (like Safari) have a bug that causes them to misreport offset values. When an ancestor element has a transform applied, it's supposed to treat it as if it's position: relative (new context). Safari botches this, so we need to find the closest ancestor (between the element and its offsetParent) that has a transform applied and if one is found, grab its offsetTop/Left and subtract them to compensate.
            m = element.offsetParent;
            b = element;
            while(b && (b = b.parentNode) && b !== m && b.parentNode)if ((_win.getComputedStyle(b)[_transformProp] + "").length > 4) {
                x = b.offsetLeft;
                y = b.offsetTop;
                b = 0;
            }
        }
        cs = _win.getComputedStyle(element);
        if (cs.position !== "absolute" && cs.position !== "fixed") {
            m = element.offsetParent;
            while(parent && parent !== m){
                // if there's an ancestor element between the element and its offsetParent that's scrolled, we must factor that in.
                x += parent.scrollLeft || 0;
                y += parent.scrollTop || 0;
                parent = parent.parentNode;
            }
        }
        b = container.style;
        b.top = element.offsetTop - y + "px";
        b.left = element.offsetLeft - x + "px";
        b[_transformProp] = cs[_transformProp];
        b[_transformOriginProp] = cs[_transformOriginProp]; // b.border = m.border;
        // b.borderLeftStyle = m.borderLeftStyle;
        // b.borderTopStyle = m.borderTopStyle;
        // b.borderLeftWidth = m.borderLeftWidth;
        // b.borderTopWidth = m.borderTopWidth;
        b.position = cs.position === "fixed" ? "fixed" : "absolute";
        element.parentNode.appendChild(container);
    }
    return container;
}, _setMatrix = function _setMatrix(m, a, b, c, d, e, f) {
    m.a = a;
    m.b = b;
    m.c = c;
    m.d = d;
    m.e = e;
    m.f = f;
    return m;
};
var Matrix2D = /*#__PURE__*/ function() {
    function Matrix2D(a, b, c, d, e, f) {
        if (a === void 0) a = 1;
        if (b === void 0) b = 0;
        if (c === void 0) c = 0;
        if (d === void 0) d = 1;
        if (e === void 0) e = 0;
        if (f === void 0) f = 0;
        _setMatrix(this, a, b, c, d, e, f);
    }
    var _proto = Matrix2D.prototype;
    _proto.inverse = function inverse() {
        var a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f, determinant = a * d - b * c || 1e-10;
        return _setMatrix(this, d / determinant, -b / determinant, -c / determinant, a / determinant, (c * f - d * e) / determinant, -(a * f - b * e) / determinant);
    };
    _proto.multiply = function multiply(matrix) {
        var a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f, a2 = matrix.a, b2 = matrix.c, c2 = matrix.b, d2 = matrix.d, e2 = matrix.e, f2 = matrix.f;
        return _setMatrix(this, a2 * a + c2 * c, a2 * b + c2 * d, b2 * a + d2 * c, b2 * b + d2 * d, e + e2 * a + f2 * c, f + e2 * b + f2 * d);
    };
    _proto.clone = function clone() {
        return new Matrix2D(this.a, this.b, this.c, this.d, this.e, this.f);
    };
    _proto.equals = function equals(matrix) {
        var a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f;
        return a === matrix.a && b === matrix.b && c === matrix.c && d === matrix.d && e === matrix.e && f === matrix.f;
    };
    _proto.apply = function apply(point, decoratee) {
        if (decoratee === void 0) decoratee = {};
        var x = point.x, y = point.y, a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f;
        decoratee.x = x * a + y * c + e || 0;
        decoratee.y = x * b + y * d + f || 0;
        return decoratee;
    };
    return Matrix2D;
}(); // Feed in an element and it'll return a 2D matrix (optionally inverted) so that you can translate between coordinate spaces.
function getGlobalMatrix(element, inverse, adjustGOffset, includeScrollInFixed) {
    // adjustGOffset is typically used only when grabbing an element's PARENT's global matrix, and it ignores the x/y offset of any SVG <g> elements because they behave in a special way.
    if (!element || !element.parentNode || (_doc || _setDoc(element)).documentElement === element) return new Matrix2D();
    var zeroScales = _forceNonZeroScale(element), svg = _svgOwner(element), temps = svg ? _svgTemps : _divTemps, container = _placeSiblings(element, adjustGOffset), b1 = temps[0].getBoundingClientRect(), b2 = temps[1].getBoundingClientRect(), b3 = temps[2].getBoundingClientRect(), parent = container.parentNode, isFixed = !includeScrollInFixed && _isFixed(element), m = new Matrix2D((b2.left - b1.left) / 100, (b2.top - b1.top) / 100, (b3.left - b1.left) / 100, (b3.top - b1.top) / 100, b1.left + (isFixed ? 0 : _getDocScrollLeft()), b1.top + (isFixed ? 0 : _getDocScrollTop()));
    parent.removeChild(container);
    if (zeroScales) {
        b1 = zeroScales.length;
        while(b1--){
            b2 = zeroScales[b1];
            b2.scaleX = b2.scaleY = 0;
            b2.renderTransform(1, b2);
        }
    }
    return inverse ? m.inverse() : m;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2IUUi"}]},["d35Re","i31AT"], "i31AT", "parcelRequire94c2")

//# sourceMappingURL=index3.49e2e2d4.js.map
