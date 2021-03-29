// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
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
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"asset/js/personnages.js":[function(require,module,exports) {
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

divPersonnages = document.querySelector('#list-episodes');
fetch("https:/rickandmortyapi.com/api/character?").then(function (response) {
  return response.json();
}).then(function (responJson) {
  var listPersonnage = responJson.results;
  console.log(listPersonnage);
  var filter = listPersonnage.filter(function (x) {
    return x.species;
  });

  var _iterator = _createForOfIteratorHelper(listPersonnage),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var personnage = _step.value;
      divPersonnages.innerHTML += "<div class=\"personnage-name\" id=\"personnage-".concat(personnage.id, "\">\n    <section class = \"container\">\n            <div class=\"image\">\n                <img class=\"img\" src=\"").concat(personnage.image, "\" alt=\"photo_").concat(personnage.name, "\">\n               <h3 class=\"nom\">").concat(personnage.name, "</h3>\n\n            </div>\n          </section>\n          </div>\n    "); // let elmtEpisode = document.getElementById(`episode-${episode.id}`);
    } // toute les div avec la class episode-name let         

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var divPersonnage = document.querySelectorAll('.personnage-name'); // console.log('données en index 0 : ', listEpisode[0]);
  // console.log('element HTML en index 0 : ', divPersonnage[0]);

  var _loop = function _loop(index) {
    divPersonnage[index].addEventListener('click', function () {
      var listUriEpisode = listPersonnage[index].episode;
      console.log(listUriEpisode);
      var divToogle = document.querySelector('#toogle');
      console.log(divToogle);
      console.log(divPersonnages); // ça marche pas pour l'instant
      // let section = document.getElementById("section");
      // section.style.filter= "blur";
      // section.style.opacity= ".1";

      divToogle.innerHTML += "\n        <div class=\"popup\">\n          <img src=\"".concat(listPersonnage[index].image, "\" alt=\"\" class=\"popup_img\">\n          <ul class=\"ul_popup\">\n              <li class=\"li_clicl\">Nom :").concat(listPersonnage[index].name, "</li>\n              <li class=\"li_clicl\">status :").concat(listPersonnage[index].status, "</li>\n              <li class=\"li_clicl\">Esp\xE8ce :").concat(listPersonnage[index].species, "</li>\n              <li class=\"li_clicl\">Type :").concat(listPersonnage[index].type, "</li>\n              <li class=\"li_clicl\">Origin :").concat(listPersonnage[index].origin.name, "</li>\n              <li class=\"li_clicl\">Genre :").concat(listPersonnage[index].gender, "</li>\n              <li class=\"li_clicl\">Leu d'habitation :").concat(listPersonnage[index].location.name, "</li>\n              <li class=\"li_clicl\">Dernier lieu Connu :").concat(listPersonnage[index].location.name, "</li>\n              <li class=\"li_clicl\">Episode  :<span id=\"perso-").concat(listPersonnage[index].id, "\"></span></li>\n          </ul>\n        </div>");
      divToogle.addEventListener("click", function (event) {
        section.style.filter = "none";
        section.style.opacity = "none";
        console.log(event);
        var chemin = event.path[1];
        console.log(chemin);
        chemin.style.display = "none"; // let section = document.getElementById("section");
      });
      getEpisodeDetails(listUriEpisode, divPersonnage[index], listPersonnage[index].id);
    });
  };

  for (var index = 0; index < divPersonnage.length; index++) {
    _loop(index);
  }
}).catch(function (error) {
  console.error(error);
}); // changer caractère en episode

function getEpisodeDetails(listUriEpisode, divToogle, idPersonnage) {
  var reponseArrray = [];

  var _iterator2 = _createForOfIteratorHelper(listUriEpisode),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var uri = _step2.value;
      fetch(uri).then(function (res) {
        return res.json();
      }).then(function (response) {
        console.log(response.id);
        reponseArrray.push(response);
        document.getElementById("perso-".concat(idPersonnage)).innerHTML += "\n          <span>".concat(response.name, " , </span>\n      ");
      });
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
} // je cree une variable qui va contenir le resultat de mes types d'espèce en format objet


var types = {};
var buttons = document.querySelectorAll(".species");
buttons.forEach(function (button) {
  // j'ai utilisé un change au lieu du click car les radio change ce sont les boutons qui sont clické
  button.addEventListener("change", function (event) {
    console.log(event); // avec le event.target je recupère ma balise cliqué

    var specie = event.target.value; //je lui ai mis "species=${specie}" à la fin pour qu'il aille recuperer mes datas en fonction des espèces
    // mon specie fait reference à ma variable en haut qui contien l'element radio selectionné.

    fetch("https:/rickandmortyapi.com/api/character?species=".concat(specie)).then(function (response) {
      return response.json();
    }).then(function (characters) {
      var info = characters.info,
          results = characters.results;
      createSpecies(results);
    });
    divPersonnages.style.display = "none"; // if(=! specie)
  });
});

function createSpecie(specie) {
  return "\n    <div class=\"specie\">\n      <div class=\"specie_img\">\n        <img src=\"".concat(specie.image, "\" alt=\"\">\n      </div>\n      <h2 class=\"specie_nom\">").concat(specie.name, "</h2>\n      <h2 class=\"specie_nom\">Je suis : ").concat(specie.species, "</h2>\n    </div>\n  ");
}

function createSpecies(species) {
  var species_container = document.querySelector(".species_container");
  console.log(species_container);
  species_container.innerHTML = ""; //je vide ma div 

  species.forEach(function (specie) {
    // je concataine species_container avec la fonction createspecie 
    species_container.innerHTML += createSpecie(specie);
  });
}
},{}],"../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51573" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","asset/js/personnages.js"], null)
//# sourceMappingURL=/personnages.19c27fac.js.map