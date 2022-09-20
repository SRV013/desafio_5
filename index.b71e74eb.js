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
})({"iJYvl":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
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

},{}],"h7u1C":[function(require,module,exports) {
var _routes = require("./routes");
var _piedra = require("./componets/piedra");
var _papel = require("./componets/papel");
var _tijera = require("./componets/tijera");
var _boton = require("./componets/boton");
(function() {
    const root = document.querySelector(".root");
    (0, _routes.initRouter)(root);
})();

},{"./routes":"cAFqI","./componets/piedra":"h7mfo","./componets/papel":"iteOw","./componets/tijera":"1FmMT","./componets/boton":"UrtFY"}],"cAFqI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter);
var _inicio = require("./pages/inicio");
var _reintentar = require("./pages/reintentar");
var _juegos = require("./pages/juegos");
var _resultados = require("./pages/resultados");
var _marcador = require("./pages/marcador");
const routes = [
    {
        path: /\/inicio/,
        component: (0, _inicio.init)
    },
    {
        path: /\/juegos/,
        component: (0, _juegos.init)
    },
    {
        path: /\/reintentar/,
        component: (0, _reintentar.init)
    },
    {
        path: /\/resultados/,
        component: (0, _resultados.init)
    },
    {
        path: /\/marcador/,
        component: (0, _marcador.init)
    }, 
];
function initRouter(container) {
    function goTo(path) {
        history.pushState({}, "", path);
        handleRoute(path);
    }
    function handleRoute(route) {
        container.innerHTML = ``;
        routes.find((r)=>{
            if (r.path.test(route)) {
                const el = r.component({
                    goTo: goTo
                });
                container.appendChild(el);
            }
        });
    }
    goTo("/inicio");
    handleRoute(location.pathname);
}

},{"./pages/inicio":"eOBMs","./pages/reintentar":"glgNr","./pages/juegos":"NEJMO","./pages/resultados":"9K1ey","./pages/marcador":"gh1Vd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eOBMs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init);
function init(params) {
    const div = document.createElement("div");
    div.classList.add("container");
    const style = document.createElement("style");
    div.innerHTML = `
	<div class="titulo">Piedra<br> Papel<br> o<br> Tijera !!! </div>  
	<div class="reglas">Presioná jugar y elija una opcion antes de los 5 segundos...</div>  
	<div class="reglas-flecha">⬇</div>  
   <tipo-boton class="btn-click">Jugar</tipo-boton>
	<div class="tipos">
	    <tipo-piedra></tipo-piedra>
  	    <tipo-papel></tipo-papel>
		<tipo-tijera></tipo-tijera>
	</div>`;
    style.innerHTML = `
	.container {
		height: 100vh;
    	padding-top: 100px;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: space-around;
		align-content: flex-start;
		flex-wrap: wrap;
	}
	.titulo {
		width: 100%;
		display: flex;
		justify-content: space-evenly;
		font-size:42px;
		text-align:center;
		color:var(--titulo-color);
	}
	.reglas {
	    width: 100%;
    	display: flex;
   		justify-content: space-evenly;
   	    font-size: 18px;
		text-align: center;
		font-weight:300;
		font-family:monospace;
		color:var(--sub-titulo-color);
		}
	.reglas-flecha{
		font-size: 36px;
		position: relative;
		animation-name: anim;
		animation-duration: 1s;
		animation-iteration-count: infinite;
	}
	@keyframes anim{
	   0% {color: #40dcff;transform:translateY(1px);}
	   25% {color: #40dcff;transform:translateY(2px);}
	   50% {color: #40dcff;transform:translateY(4px);}
	   75% {color: #ff85ff;transform:translateY(2px);}
	   100% {color: #ff85ff;transform:translateY(1px);}
	}
	.tipos {
		display: flex;
		justify-content:center;
			}	
	`;
    const button = div.querySelector(".btn-click");
    button.addEventListener("click", ()=>{
        params.goTo("/ppt/juegos");
    });
    div.appendChild(style);
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"glgNr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init);
var _state = require("../../state");
(0, _state.state).getStorage();
function init(params) {
    const div = document.createElement("div");
    div.classList.add("container");
    const style = document.createElement("style");
    div.innerHTML = `
   <div class="reglas">Presioná jugar y elija una opcion antes de los 5 segundos...</div>  
   <div class="reglas-flecha">⬇</div>  
    <tipo-boton class="btn-click">reintentar</tipo-boton>
        <div class="tipos">
        <tipo-piedra class="piedra"></tipo-piedra>
        <tipo-papel class="papel"></tipo-papel>
        <tipo-tijera class="tijera"></tipo-tijera>
    </div>`;
    style.innerHTML = `
   .container {
    height: 100vh;
    padding-top: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    align-content: flex-start;
    flex-wrap: wrap;
    }
    .titulo {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      font-size:42px;
      text-align:center;
      color:var(--titulo-color);
    }
    .reglas {
        width: 100%;
        display: flex;
         justify-content: space-evenly;
           font-size: 18px;
      text-align: center;
      font-weight:300;
      font-family:monospace;
      color:var(--sub-titulo-color);
      }
    .reglas-flecha{
      font-size: 36px;
      position: relative;
      animation-name: anim;
      animation-duration: 1s;
      animation-iteration-count: infinite;
    }
    @keyframes anim{
       0% {color: #40dcff;transform:translateY(1px);}
       25% {color: #40dcff;transform:translateY(2px);}
       50% {color: #40dcff;transform:translateY(4px);}
       75% {color: #ff85ff;transform:translateY(2px);}
       100% {color: #ff85ff;transform:translateY(1px);}
    }
    .tipos {
    display: flex;
		justify-content:center;
    }
    `;
    const button = div.querySelector(".btn-click");
    button.addEventListener("click", ()=>{
        params.goTo("/ppt/juegos");
    });
    div.appendChild(style);
    return div;
}

},{"../../state":"1Yeju","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Yeju":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
const state = {
    data: {
        elJuego: {
            miJugada: "",
            pcJugada: ""
        },
        history: {
            misPuntos: 0,
            cpuPuntos: 0,
            losEmpates: 0,
            todoLosResultados: ""
        }
    },
    getStorage () {
        const local = JSON.parse(localStorage.getItem("data"));
        if (localStorage.getItem("data")) this.data.history = local;
    },
    getState () {
        return this.data;
    },
    setState (nuevoEstado) {
        this.data = nuevoEstado;
    },
    setMove (move) {
        const estadoActual = this.getState();
        estadoActual.elJuego.miJugada = move;
        const machineMove = ()=>{
            const manos = [
                "piedra",
                "papel",
                "tijera"
            ];
            return manos[Math.floor(Math.random() * 3)];
        };
        estadoActual.elJuego.pcJugada = machineMove();
        this.setHistory();
    },
    whowins () {
        const estadoActual = this.getState();
        const jugada = estadoActual.elJuego;
        const empate = [
            jugada.miJugada == "tijera" && jugada.pcJugada == "tijera",
            jugada.miJugada == "piedra" && jugada.pcJugada == "piedra",
            jugada.miJugada == "papel" && jugada.pcJugada == "papel", 
        ];
        if (empate.includes(true)) return "empate";
        const juego = [
            jugada.miJugada == "tijera" && jugada.pcJugada == "papel",
            jugada.miJugada == "piedra" && jugada.pcJugada == "tijera",
            jugada.miJugada == "papel" && jugada.pcJugada == "piedra", 
        ];
        if (juego.includes(true)) return "ganastes";
        else return "perdistes";
    },
    setHistory () {
        const elGanador = this.whowins();
        const estadoActual = this.getState();
        const misPuntos = estadoActual.history.misPuntos;
        const cpuPuntos = estadoActual.history.cpuPuntos;
        const losEmpates = estadoActual.history.losEmpates;
        const todoLosResultados = estadoActual.history.todoLosResultados;
        if (elGanador == "ganastes") this.setState({
            ...estadoActual,
            history: {
                misPuntos: misPuntos + 1,
                cpuPuntos: cpuPuntos,
                losEmpates: losEmpates,
                todoLosResultados: "ganastes" + todoLosResultados
            }
        });
        if (elGanador == "perdistes") this.setState({
            ...estadoActual,
            history: {
                misPuntos: misPuntos,
                cpuPuntos: cpuPuntos + 1,
                losEmpates: losEmpates,
                todoLosResultados: "perfistes" + todoLosResultados
            }
        });
        if (elGanador == "empate") this.setState({
            ...estadoActual,
            history: {
                misPuntos: misPuntos,
                cpuPuntos: cpuPuntos,
                losEmpates: losEmpates + 1,
                todoLosResultados: "empate" + todoLosResultados
            }
        });
        this.savedData();
    },
    savedData () {
        const estadoActual = this.getState().history;
        localStorage.setItem("data", JSON.stringify(estadoActual));
    },
    cleanData () {
        localStorage.setItem("data", JSON.stringify({
            misPuntos: 0,
            cpuPuntos: 0,
            losEmpates: 0,
            todoLosResultados: ""
        }));
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"NEJMO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init);
var _state = require("../../state");
function init(params) {
    const div = document.createElement("div");
    div.classList.add("container");
    const style = document.createElement("style");
    let counter = 5;
    const contadorTime = setInterval(()=>{
        counter--;
        const counterEl = div.querySelector(".timer-el");
        counterEl.textContent = String(counter);
        if (counter < 1) {
            clearInterval(contadorTime);
            params.goTo("/ppt/reintentar");
        }
    }, 1000);
    div.innerHTML = `
   <div class="tipo-top">
      <tipo-piedra class="piedra-top  tipo-top-bloqueado"></tipo-piedra>
      <tipo-papel class="papel-top  tipo-top-bloqueado"></tipo-papel >
      <tipo-tijera class="tijera-top  tipo-top-bloqueado"></tipo-tijera>
   </div>
    <div class="timer-el timer-el-a">${counter}</div>
    <div class="tipos">
    <tipo-piedra class="piedra"></tipo-piedra>
    <tipo-papel class="papel"></tipo-papel>
    <tipo-tijera class="tijera"></tipo-tijera>
    </div>
    `;
    style.innerHTML = `
   .container {
      height: 100vh;
      padding-top: 100px;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-around;
      align-content: space-around;
      flex-wrap: wrap;
    }
    .timer-el {
        width:200px;
        height:200px;
        border-radius:50%;
        border:22px solid #5a5a5a;
        display:flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        border-left-color:var(--boton-font);
        border-right-color:var(--boton-font);
    }    
    .timer-el-a{
        font-size: 100px;
        color: var(--boton-font);        
    }
    .tipos {
      display: flex;
	   justify-content:center;
    } 
    .tipo-bloqueado{
      transition: all 1s ease-in-out;
      filter: blur(4px);
   }
   .tipo-activos {
      display: inherit;
      transform: translateY(-30px);
      transition: all 0.5s;
    }
    .tipo-desactivos {
      transform: translateY(30px);
      transform: scale(0.5);
    }
    .tipo-top {
      display: flex;
	   justify-content:center;
    } 
    .tipo-top-bloqueado{
      transition: all 1s ease-in-out;
      filter: blur(4px);
      transform: scale(0.7);
   }
   .tipo-top-activos {
      display: inherit;
      transform: translateY(80px);
      transition: all 0.5s;
      filter:none;
    }`;
    // LEER CLASES
    const tiposCont = div.querySelector(".tipos");
    const tipotijera = div.querySelector(".tijera");
    const tipopiedra = div.querySelector(".piedra");
    const tipopapel = div.querySelector(".papel");
    const tipopiedraTop = div.querySelector(".piedra-top");
    const tipopapelTop = div.querySelector(".papel-top");
    // PASA FUNCION A LO ELEGIDO POR EL USUARIO
    for (const tipos of tiposCont.children)tipos.addEventListener("click", ()=>{
        const type = tipos.getAttribute("class");
        clearInterval(contadorTime);
        if (type == "tijera") {
            (0, _state.state).setMove("tijera");
            activetipos("tijera");
        } else if (type == "piedra") {
            (0, _state.state).setMove("piedra");
            activetipos("piedra");
        } else if (type == "papel") {
            (0, _state.state).setMove("papel");
            activetipos("papel");
        }
    });
    // SELECCION DE LO ELEGIDO POR USUARIO
    function activetipos(param) {
        for (const tipo of tiposCont.children)tipo.classList.add("tipo-desactivos");
        if (param == "tijera") {
            tipotijera.classList.add("tipo-activos");
            tipotijera.classList.remove("tipo-desactivos");
            tipopiedra.classList.add("tipo-bloqueado");
            tipopapel.classList.add("tipo-bloqueado");
        }
        if (param == "piedra") {
            tipopiedra.classList.add("tipo-activos");
            tipopiedra.classList.remove("tipo-desactivos");
            tipotijera.classList.add("tipo-bloqueado");
            tipopapel.classList.add("tipo-bloqueado");
        }
        if (param == "papel") {
            tipopapel.classList.add("tipo-activos");
            tipopapel.classList.remove("tipo-desactivos");
            tipotijera.classList.add("tipo-bloqueado");
            tipopiedra.classList.add("tipo-bloqueado");
        }
        // TIMER Q DISPARA A RESULTADO      
        setTimeout(()=>{
            const movimientoCpu = (0, _state.state).getState().elJuego.pcJugada;
            if (movimientoCpu == "tijera") tipopiedraTop.classList.add("tipo-top-activos");
            if (movimientoCpu == "piedra") tipopiedraTop.classList.add("tipo-top-activos");
            if (movimientoCpu == "papel") tipopapelTop.classList.add("tipo-top-activos");
            setTimeout(()=>{
                params.goTo("/ppt/resultados");
            }, 1500);
        }, 1000);
    }
    div.appendChild(style);
    return div;
}

},{"../../state":"1Yeju","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9K1ey":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init);
var _state = require("../../state");
function init(params) {
    const div = document.createElement("div");
    div.className = "resultado-datos";
    div.classList.add("container");
    const resultado = (0, _state.state).whowins();
    const estiloResul = document.createElement("style");
    if (resultado == "ganastes") estiloResul.innerHTML = `.resultados::before { content: "😃";} .resultados{color:var(--font-gana)}`;
    if (resultado == "perdistes") estiloResul.innerHTML = `.resultados::before {content: "😡";} .resultados{color:var(--font-pierde)}`;
    else if (resultado == "empate") estiloResul.innerHTML = `.resultados::before {content: "🤔";} .resultados{color:var(--font-empate)}`;
    const nuevoEstado = (0, _state.state).getState();
    div.innerHTML = `
  <div class="tablero">
  <h4>Marcador</h4>
  <p class="maquina">CPU: ${nuevoEstado.history.cpuPuntos}</p>
  <p class="vos">Tus triunfos: ${nuevoEstado.history.misPuntos}</p>
  <p class="empates">Empates: ${nuevoEstado.history.losEmpates}</p>
  <h3 class="btn-mostrar">ver marcador</h3>
  </div>
  <div class="resultados">
   <h1>${resultado}</h1> 
 </div>
   <tipo-boton class="btn-volver">Continuar Jugando</tipo-boton>
   <tipo-boton class="btn-inicio">Salir</tipo-boton>
   `;
    const buttonBack = div.querySelector(".btn-volver");
    buttonBack.addEventListener("click", ()=>{
        params.goTo("/ppt/juegos");
    });
    const buttonClean = div.querySelector(".btn-mostrar");
    buttonClean.addEventListener("click", ()=>{
        //   state.cleanData();
        //   state.getStorage();
        params.goTo("/ppt/marcador");
    });
    const buttonInicio = div.querySelector(".btn-inicio");
    buttonInicio.addEventListener("click", ()=>{
        (0, _state.state).cleanData();
        (0, _state.state).getStorage();
        params.goTo("/ppt/inicio");
    });
    const style = document.createElement("style");
    style.innerHTML = `
.container {
    height: 100vh;
    padding-top: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    }
  .tablero {
      color: var(--resultados-font);
      background: var(--resultados-fondo);
      display: flex;
      border: 2px solid var(--resultados-borde);
      border-radius: 8px;
    flex-direction: column;
    padding:10px 60px 10px 60px;
    font-family:monospace;
  }
  .tablero > h4 {
      font-size: 24px;
      margin: 0 auto;
      text-align: center;
    }
  .tablero > h3 {
      font-size: 24px;
      margin: 0 auto;
      text-align: center;
      color:blue;
      padding-top:20px;
    }
    .tablero > h3:hover{
      cursor:pointer;
      transition:0.5s;
      transform:scale(1.1);
    }
    .tablero > p {
        margin: 10px 0px 0px 0;
        font-size: 20px;
        text-align: center;
    }
    .resultados {
        display: flex;
        width: 220px;
        height: 220px;
        border-radius: 50%;
        font-family: monospace;
        align-items: center;
        justify-content: center;
        align-content: space-around;
        flex-direction: column;
        box-shadow: 0px 0px 10px 10px white;
        background-color:white;
    }
    .resultados > h1 {
        font-size: 34px;
        margin: 0 auto;
        text-align: center;
        font-family: 'Fredoka One';
      }
    .resultados::before{font-size:40px;}

  `;
    div.appendChild(estiloResul);
    div.appendChild(style);
    return div;
}

},{"../../state":"1Yeju","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gh1Vd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init);
var _state = require("../../state");
function init(params) {
    const div = document.createElement("div");
    div.className = "resultado-datos";
    div.classList.add("container");
    const nuevoEstado = (0, _state.state).getState();
    div.innerHTML = `
    <div class="tablero">
    <h4>Marcador</h4>
    <p class="maquina">CPU: ${nuevoEstado.history.cpuPuntos}</p>
    <p class="vos">Tus triunfos: ${nuevoEstado.history.misPuntos}</p>
    <p class="empates">Empates: ${nuevoEstado.history.losEmpates}</p>
    <h3>Ultimas Jugadas</h3>
    <p>${nuevoEstado.history.todoLosResultados}</p>
    </div>
     <tipo-boton class="btn-borrar">Borrar Marcador</tipo-boton>
     <tipo-boton class="btn-volver">Volver</tipo-boton>
     `;
    const style = document.createElement("style");
    style.innerHTML = `
.container {
    height: 100vh;
    padding-top: 100px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    }
    .tablero {
        color: var(--resultados-font);
        background: var(--resultados-fondo);
        display: flex;
        border: 2px solid var(--resultados-borde);
        border-radius: 8px;
      flex-direction: column;
      padding:10px 60px 10px 60px;
      font-family:monospace;
      max-height:550px;
      overflow: scroll;
    }
    .tablero > h4 {
        font-size: 24px;
        margin: 0 auto;
        text-align: center;
      }
      .tablero > p {
          margin: 10px 0px 0px 0;
          font-size: 20px;
          text-align: center;
      }
      .tablero > h3 {
        font-size: 20px;
        padding:0 20px ;
        text-align: center;
        background:var(--boton-fondo);
      }
      
      `;
    const buttonClean = div.querySelector(".btn-borrar");
    buttonClean.addEventListener("click", ()=>{
        (0, _state.state).cleanData();
        (0, _state.state).getStorage();
        params.goTo("/ppt/juegos");
    });
    const buttonBack = div.querySelector(".btn-volver");
    buttonBack.addEventListener("click", ()=>{
        params.goTo("/ppt/juegos");
    });
    div.appendChild(style);
    return div;
}

},{"../../state":"1Yeju","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h7mfo":[function(require,module,exports) {
const piedra = require("url:../../img/piedra.svg");
customElements.define("tipo-piedra", class Piedra extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.render();
    }
    render() {
        const style = document.createElement("style");
        this.shadow.innerHTML = `
            <img class="tipo-piedra" src="${piedra}">
        `;
        style.innerHTML = `
            .tipo-piedra {
              height:80%;
              width:80%;
            }
            .tipo-piedra:hover{
               transition: 0.20s;
               transform: rotate(45deg);
               cursor:pointer;
            }	
        `;
        this.shadow.appendChild(style);
    }
});

},{"url:../../img/piedra.svg":"2RAfQ"}],"2RAfQ":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("7UhFu") + "piedra.05f5c82f.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"iteOw":[function(require,module,exports) {
const papel = require("url:../../img/papel.svg");
customElements.define("tipo-papel", class Papel extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.render();
    }
    render() {
        const style = document.createElement("style");
        this.shadow.innerHTML = `
            <img class="tipo-papel" src="${papel}">
        `;
        style.innerHTML = `
            .tipo-papel {
              height: 80%;
              width:80%;
            }
            .tipo-papel:hover{
               transition: 0.20s;
               transform: rotate(45deg);
               cursor:pointer;
            }	
        `;
        this.shadow.appendChild(style);
    }
});

},{"url:../../img/papel.svg":"3x7Gg"}],"3x7Gg":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("7UhFu") + "papel.790c5697.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"1FmMT":[function(require,module,exports) {
const tijera = require("url:../../img/tijera.svg");
customElements.define("tipo-tijera", class Tijera extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.render();
    }
    render() {
        const style = document.createElement("style");
        this.shadow.innerHTML = `
            <img class="tipo-tijera" src="${tijera}">
        `;
        style.innerHTML = `
            .tipo-tijera {
              height:80%;
              width:80%;
            }
            .tipo-tijera:hover{
               transition: 0.20s;
               transform: rotate(45deg);
               cursor:pointer;
            }	
        `;
        this.shadow.appendChild(style);
    }
});

},{"url:../../img/tijera.svg":"9fESS"}],"9fESS":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("7UhFu") + "tijera.1779fc23.svg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"UrtFY":[function(require,module,exports) {
customElements.define("tipo-boton", class Button extends HTMLElement {
    constructor(){
        super();
        this.shadow = this.attachShadow({
            mode: "open"
        });
        this.render();
    }
    render() {
        const button = document.createElement("button");
        const style = document.createElement("style");
        button.className = "boton-el";
        style.innerHTML = `
         .boton-el {
            color: var(--boton-font);
            height: 80px;
            font-size: 34px;
            text-align: center;
            border-radius: 10px;
            text-transform: uppercase;
            background: var(--boton-fondo);
            border:5px solid var(--boton-borde);
            padding:0px 50px 0px 50px;
            font-family:Fredoka One;
         }
         .boton-el:hover{
            transition: 0.25s;
            transform: scale(1.2);
            cursor: pointer;
         }
         @media (max-width:500px) {
            .boton-el {
               font-size: 20px;
            }
          }
         `;
        button.textContent = this.textContent;
        this.shadow.appendChild(button);
        this.shadow.appendChild(style);
    }
});

},{}]},["iJYvl","h7u1C"], "h7u1C", "parcelRequire7796")

//# sourceMappingURL=index.b71e74eb.js.map
