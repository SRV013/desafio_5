// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
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
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
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
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8uBhv":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "0b7c8afcb31310b1";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
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

},{}],"4aleK":[function(require,module,exports) {
var _routes = require("./routes");
var _piedra = require("./componets/piedra");
var _papel = require("./componets/papel");
var _tijera = require("./componets/tijera");
var _boton = require("./componets/boton");
(function() {
    const root = document.querySelector(".root");
    _routes.initRouter(root);
})();

},{"./routes":"aWleg","./componets/piedra":"fNb1b","./componets/papel":"jnoS4","./componets/tijera":"oyPue","./componets/boton":"kRdVG"}],"aWleg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter
);
var _inicio = require("./pages/inicio");
var _reintentar = require("./pages/reintentar");
var _juegos = require("./pages/juegos");
var _resultados = require("./pages/resultados");
var _marcador = require("./pages/marcador");
const routes = [
    {
        path: /\/inicio/,
        component: _inicio.init
    },
    {
        path: /\/juegos/,
        component: _juegos.init
    },
    {
        path: /\/reintentar/,
        component: _reintentar.init
    },
    {
        path: /\/resultados/,
        component: _resultados.init
    },
    {
        path: /\/marcador/,
        component: _marcador.init
    }, 
];
function initRouter(container) {
    function goTo(path) {
        history.pushState({
        }, "", path);
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
    goTo('/juego-ppt//inicio');
    handleRoute(location.pathname);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","./pages/inicio":"hfqxX","./pages/juegos":"61HIE","./pages/resultados":"iYDUM","./pages/reintentar":"e2Qpk","./pages/marcador":"hXf7E"}],"JacNc":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
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

},{}],"hfqxX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init
);
function init(params) {
    const div = document.createElement("div");
    div.classList.add("container");
    const style = document.createElement("style");
    div.innerHTML = `\n	<div class="titulo">Piedra<br> Papel<br> o<br> Tijera !!! </div>  \n	<div class="reglas">Presioná jugar y elija una opcion antes de los 5 segundos...</div>  \n	<div class="reglas-flecha">⬇</div>  \n   <tipo-boton class="btn-click">Jugar</tipo-boton>\n	<div class="tipos">\n	    <tipo-piedra></tipo-piedra>\n  	    <tipo-papel></tipo-papel>\n		<tipo-tijera></tipo-tijera>\n	</div>`;
    style.innerHTML = `\n	.container {\n		height: 100vh;\n    	padding-top: 100px;\n		display: flex;\n		align-items: center;\n		flex-direction: column;\n		justify-content: space-around;\n		align-content: flex-start;\n		flex-wrap: wrap;\n	}\n	.titulo {\n		width: 100%;\n		display: flex;\n		justify-content: space-evenly;\n		font-size:42px;\n		text-align:center;\n		color:var(--titulo-color);\n	}\n	.reglas {\n	    width: 100%;\n    	display: flex;\n   		justify-content: space-evenly;\n   	    font-size: 18px;\n		text-align: center;\n		font-weight:300;\n		font-family:monospace;\n		color:var(--sub-titulo-color);\n		}\n	.reglas-flecha{\n		font-size: 36px;\n		position: relative;\n		animation-name: anim;\n		animation-duration: 1s;\n		animation-iteration-count: infinite;\n	}\n	@keyframes anim{\n	   0% {color: #40dcff;transform:translateY(1px);}\n	   25% {color: #40dcff;transform:translateY(2px);}\n	   50% {color: #40dcff;transform:translateY(4px);}\n	   75% {color: #ff85ff;transform:translateY(2px);}\n	   100% {color: #ff85ff;transform:translateY(1px);}\n	}\n	.tipos {\n		display: flex;\n		justify-content:center;\n			}	\n	`;
    const button = div.querySelector(".btn-click");
    button.addEventListener("click", ()=>{
        params.goTo("/ppt/juegos");
    });
    div.appendChild(style);
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"61HIE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init
);
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
        if (counter < 1) clearInterval(contadorTime);
    }, 1000);
    div.innerHTML = `\n   <div class="tipo-top">\n      <tipo-piedra class="piedra-top  tipo-top-bloqueado"></tipo-piedra>\n      <tipo-papel class="papel-top  tipo-top-bloqueado"></tipo-papel >\n      <tipo-tijera class="tijera-top  tipo-top-bloqueado"></tipo-tijera>\n   </div>\n    <div class="timer-el timer-el-a">${counter}</div>\n    <div class="tipos">\n    <tipo-piedra class="piedra"></tipo-piedra>\n    <tipo-papel class="papel"></tipo-papel>\n    <tipo-tijera class="tijera"></tipo-tijera>\n    </div>\n    `;
    style.innerHTML = `\n   .container {\n      height: 100vh;\n      padding-top: 100px;\n      display: flex;\n      align-items: center;\n      flex-direction: column;\n      justify-content: space-around;\n      align-content: space-around;\n      flex-wrap: wrap;\n    }\n    .timer-el {\n        width:200px;\n        height:200px;\n        border-radius:50%;\n        border:22px solid #5a5a5a;\n        display:flex;\n        flex-direction: column;\n        justify-content: space-around;\n        align-items: center;\n        border-left-color:var(--boton-font);\n        border-right-color:var(--boton-font);\n    }    \n    .timer-el-a{\n        font-size: 100px;\n        color: var(--boton-font);        \n    }\n    .tipos {\n      display: flex;\n	   justify-content:center;\n    } \n    .tipo-bloqueado{\n      transition: all 1s ease-in-out;\n      filter: blur(4px);\n   }\n   .tipo-activos {\n      display: inherit;\n      transform: translateY(-30px);\n      transition: all 0.5s;\n    }\n    .tipo-desactivos {\n      transform: translateY(30px);\n      transform: scale(0.5);\n    }\n    .tipo-top {\n      display: flex;\n	   justify-content:center;\n    } \n    .tipo-top-bloqueado{\n      transition: all 1s ease-in-out;\n      filter: blur(4px);\n      transform: scale(0.7);\n   }\n   .tipo-top-activos {\n      display: inherit;\n      transform: translateY(80px);\n      transition: all 0.5s;\n      filter:none;\n    }`;
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
            _state.state.setMove("tijera");
            activetipos("tijera");
        } else if (type == "piedra") {
            _state.state.setMove("piedra");
            activetipos("piedra");
        } else if (type == "papel") {
            _state.state.setMove("papel");
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
            const movimientoCpu = _state.state.getState().elJuego.pcJugada;
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","../../state":"28XHA"}],"28XHA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"iYDUM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init
);
var _state = require("../../state");
function init(params) {
    const div = document.createElement("div");
    div.className = "resultado-datos";
    div.classList.add("container");
    const resultado = _state.state.whowins();
    const estiloResul = document.createElement("style");
    if (resultado == "ganastes") estiloResul.innerHTML = `.resultados::before { content: "😃";} .resultados{color:var(--font-gana)}`;
    if (resultado == "perdistes") estiloResul.innerHTML = `.resultados::before {content: "😡";} .resultados{color:var(--font-pierde)}`;
    else if (resultado == "empate") estiloResul.innerHTML = `.resultados::before {content: "🤔";} .resultados{color:var(--font-empate)}`;
    const nuevoEstado = _state.state.getState();
    div.innerHTML = `\n  <div class="tablero">\n  <h4>Marcador</h4>\n  <p class="maquina">CPU: ${nuevoEstado.history.cpuPuntos}</p>\n  <p class="vos">Tus triunfos: ${nuevoEstado.history.misPuntos}</p>\n  <p class="empates">Empates: ${nuevoEstado.history.losEmpates}</p>\n  <h3 class="btn-mostrar">ver marcador</h3>\n  </div>\n  <div class="resultados">\n   <h1>${resultado}</h1> \n </div>\n   <tipo-boton class="btn-volver">Continuar Jugando</tipo-boton>\n   <tipo-boton class="btn-inicio">Salir</tipo-boton>\n   `;
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
        _state.state.cleanData();
        _state.state.getStorage();
        params.goTo("/ppt/inicio");
    });
    const style = document.createElement("style");
    style.innerHTML = `\n.container {\n    height: 100vh;\n    padding-top: 100px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: space-around;\n    }\n  .tablero {\n      color: var(--resultados-font);\n      background: var(--resultados-fondo);\n      display: flex;\n      border: 2px solid var(--resultados-borde);\n      border-radius: 8px;\n    flex-direction: column;\n    padding:10px 60px 10px 60px;\n    font-family:monospace;\n  }\n  .tablero > h4 {\n      font-size: 24px;\n      margin: 0 auto;\n      text-align: center;\n    }\n  .tablero > h3 {\n      font-size: 24px;\n      margin: 0 auto;\n      text-align: center;\n      color:blue;\n      padding-top:20px;\n    }\n    .tablero > h3:hover{\n      cursor:pointer;\n      transition:0.5s;\n      transform:scale(1.1);\n    }\n    .tablero > p {\n        margin: 10px 0px 0px 0;\n        font-size: 20px;\n        text-align: center;\n    }\n    .resultados {\n        display: flex;\n        width: 220px;\n        height: 220px;\n        border-radius: 50%;\n        font-family: monospace;\n        align-items: center;\n        justify-content: center;\n        align-content: space-around;\n        flex-direction: column;\n        box-shadow: 0px 0px 10px 10px white;\n        background-color:white;\n    }\n    .resultados > h1 {\n        font-size: 34px;\n        margin: 0 auto;\n        text-align: center;\n        font-family: 'Fredoka One';\n      }\n    .resultados::before{font-size:40px;}\n\n  `;
    div.appendChild(estiloResul);
    div.appendChild(style);
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","../../state":"28XHA"}],"e2Qpk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init
);
var _state = require("../../state");
_state.state.getStorage();
function init(params) {
    const div = document.createElement("div");
    div.classList.add("container");
    const style = document.createElement("style");
    div.innerHTML = `\n   <div class="reglas">Presioná jugar y elija una opcion antes de los 5 segundos...</div>  \n   <div class="reglas-flecha">⬇</div>  \n    <tipo-boton class="btn-click">reintentar</tipo-boton>\n        <div class="tipos">\n        <tipo-piedra class="piedra"></tipo-piedra>\n        <tipo-papel class="papel"></tipo-papel>\n        <tipo-tijera class="tijera"></tipo-tijera>\n    </div>`;
    style.innerHTML = `\n   .container {\n    height: 100vh;\n    padding-top: 100px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: space-around;\n    align-content: flex-start;\n    flex-wrap: wrap;\n    }\n    .titulo {\n      width: 100%;\n      display: flex;\n      justify-content: space-evenly;\n      font-size:42px;\n      text-align:center;\n      color:var(--titulo-color);\n    }\n    .reglas {\n        width: 100%;\n        display: flex;\n         justify-content: space-evenly;\n           font-size: 18px;\n      text-align: center;\n      font-weight:300;\n      font-family:monospace;\n      color:var(--sub-titulo-color);\n      }\n    .reglas-flecha{\n      font-size: 36px;\n      position: relative;\n      animation-name: anim;\n      animation-duration: 1s;\n      animation-iteration-count: infinite;\n    }\n    @keyframes anim{\n       0% {color: #40dcff;transform:translateY(1px);}\n       25% {color: #40dcff;transform:translateY(2px);}\n       50% {color: #40dcff;transform:translateY(4px);}\n       75% {color: #ff85ff;transform:translateY(2px);}\n       100% {color: #ff85ff;transform:translateY(1px);}\n    }\n    .tipos {\n    display: flex;\n		justify-content:center;\n    }\n    `;
    const button = div.querySelector(".btn-click");
    button.addEventListener("click", ()=>{
        params.goTo("/ppt/juegos");
    });
    div.appendChild(style);
    return div;
}

},{"../../state":"28XHA","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"hXf7E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init
);
var _state = require("../../state");
function init(params) {
    const div = document.createElement("div");
    div.className = "resultado-datos";
    div.classList.add("container");
    const nuevoEstado = _state.state.getState();
    div.innerHTML = `\n    <div class="tablero">\n    <h4>Marcador</h4>\n    <p class="maquina">CPU: ${nuevoEstado.history.cpuPuntos}</p>\n    <p class="vos">Tus triunfos: ${nuevoEstado.history.misPuntos}</p>\n    <p class="empates">Empates: ${nuevoEstado.history.losEmpates}</p>\n    <h3>Ultimas Jugadas</h3>\n    <p>${nuevoEstado.history.todoLosResultados}</p>\n    </div>\n     <tipo-boton class="btn-borrar">Borrar Marcador</tipo-boton>\n     <tipo-boton class="btn-volver">Volver</tipo-boton>\n     `;
    const style = document.createElement("style");
    style.innerHTML = `\n.container {\n    height: 100vh;\n    padding-top: 100px;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: space-around;\n    }\n    .tablero {\n        color: var(--resultados-font);\n        background: var(--resultados-fondo);\n        display: flex;\n        border: 2px solid var(--resultados-borde);\n        border-radius: 8px;\n      flex-direction: column;\n      padding:10px 60px 10px 60px;\n      font-family:monospace;\n      max-height:550px;\n      overflow: scroll;\n    }\n    .tablero > h4 {\n        font-size: 24px;\n        margin: 0 auto;\n        text-align: center;\n      }\n      .tablero > p {\n          margin: 10px 0px 0px 0;\n          font-size: 20px;\n          text-align: center;\n      }\n      .tablero > h3 {\n        font-size: 20px;\n        padding:0 20px ;\n        text-align: center;\n        background:var(--boton-fondo);\n      }\n      \n      `;
    const buttonClean = div.querySelector(".btn-borrar");
    buttonClean.addEventListener("click", ()=>{
        _state.state.cleanData();
        _state.state.getStorage();
        params.goTo("/ppt/juegos");
    });
    const buttonBack = div.querySelector(".btn-volver");
    buttonBack.addEventListener("click", ()=>{
        params.goTo("/ppt/juegos");
    });
    div.appendChild(style);
    return div;
}

},{"../../state":"28XHA","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"fNb1b":[function(require,module,exports) {
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
        this.shadow.innerHTML = `\n            <img class="tipo-piedra" src="${piedra}">\n        `;
        style.innerHTML = `\n            .tipo-piedra {\n              height:80%;\n              width:80%;\n            }\n            .tipo-piedra:hover{\n               transition: 0.20s;\n               transform: rotate(45deg);\n               cursor:pointer;\n            }	\n        `;
        this.shadow.appendChild(style);
    }
});

},{"url:../../img/piedra.svg":"fRI5w"}],"fRI5w":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "piedra.b3596ffa.svg";

},{"./helpers/bundle-url":"8YnfL"}],"8YnfL":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
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
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"jnoS4":[function(require,module,exports) {
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
        this.shadow.innerHTML = `\n            <img class="tipo-papel" src="${papel}">\n        `;
        style.innerHTML = `\n            .tipo-papel {\n              height: 80%;\n              width:80%;\n            }\n            .tipo-papel:hover{\n               transition: 0.20s;\n               transform: rotate(45deg);\n               cursor:pointer;\n            }	\n        `;
        this.shadow.appendChild(style);
    }
});

},{"url:../../img/papel.svg":"76biT"}],"76biT":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "papel.ed2ad0ee.svg";

},{"./helpers/bundle-url":"8YnfL"}],"oyPue":[function(require,module,exports) {
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
        this.shadow.innerHTML = `\n            <img class="tipo-tijera" src="${tijera}">\n        `;
        style.innerHTML = `\n            .tipo-tijera {\n              height:80%;\n              width:80%;\n            }\n            .tipo-tijera:hover{\n               transition: 0.20s;\n               transform: rotate(45deg);\n               cursor:pointer;\n            }	\n        `;
        this.shadow.appendChild(style);
    }
});

},{"url:../../img/tijera.svg":"3X3Ia"}],"3X3Ia":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('Z8Pbo') + "tijera.e69d7d7d.svg";

},{"./helpers/bundle-url":"8YnfL"}],"kRdVG":[function(require,module,exports) {
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
        style.innerHTML = `\n         .boton-el {\n            color: var(--boton-font);\n            height: 80px;\n            font-size: 34px;\n            text-align: center;\n            border-radius: 10px;\n            text-transform: uppercase;\n            background: var(--boton-fondo);\n            border:5px solid var(--boton-borde);\n            padding:0px 50px 0px 50px;\n            font-family:Fredoka One;\n         }\n         .boton-el:hover{\n            transition: 0.25s;\n            transform: scale(1.2);\n            cursor: pointer;\n         }`;
        button.textContent = this.textContent;
        this.shadow.appendChild(button);
        this.shadow.appendChild(style);
    }
});

},{}]},["8uBhv","4aleK"], "4aleK", "parcelRequire7796")

//# sourceMappingURL=index.b31310b1.js.map
