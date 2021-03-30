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
})({"asset/js/episodes.js":[function(require,module,exports) {
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var divtableauEpisode = document.querySelector('#list-episodes');
var divSaison = document.querySelector('#selecteurSaison'); // let tableauFetch = ["https://rickandmortyapi.com/api/episode?page=1", "https://rickandmortyapi.com/api/episode?page=2", "https://rickandmortyapi.com/api/episode?page=3"]
// // tableauFetch.map(x => fetch(x))
// // => [fetch("https://rickandmortyapi.com/api/episode?page=1"), fetch("https://rickandmortyapi.com/api/episode?page=2")]
// Promise.all(tableauFetch.map(x => fetch(x)))
// .then(resp => Promise.all(resp.map(x =>x.json())))
// .then(responJson => {
//   console.log('test api ' ,responJson[0]);
//   // traitement des données 
//   //  let allrespJson = respJson[0] + respJson[1] + respJson[2]
//   //  console.log('test api ' ,allrespJson);
// })

fetch("https://rickandmortyapi.com/api/episode?page=1").then(function (response) {
  return response.json();
}).then(function (responJson) {
  // divSaison.innerHTML = `
  // <input type="checkbox" value="saison 1"> <label for="saison 1">Saison 1</label>
  // <input type="checkbox" value="saison 2"> <label for="saison 2">Saison 2</label>
  // <input type="checkbox" value="saison 3"> <label for="saison 3">Saison 3</label>
  // <input type="checkbox" value="saison 4"> <label for="saison 4">Saison 4</label>
  //                       `
  var tableauEpisode = responJson.results; //   console.log(tabeauEpisode);

  var _iterator = _createForOfIteratorHelper(tableauEpisode),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var episode = _step.value;
      var saisons = episode.episode.split('E');
      divtableauEpisode.innerHTML += "<div  class=\"".concat(saisons[0], "  episodeName\"><span style=\"cursor:pointer;\">").concat(episode.episode, " <span class=\"rm\">").concat(episode.name, "</span></span></div>"); //onclick="displayDiv('episode')" id="episode-${episode.id}"
      // let elmtEpisode = document.getElementById(`episode-${episode.id}`);
    } // toute les div avec la class episodeName

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var divEpisode = document.querySelectorAll('.episodeName');

  for (var i = 0; i < divEpisode.length; i++) {
    divEpisode[i].innerHTML += " <div class =\"episode ".concat(i, "\" style=\"display: none\" >  </div>"); //   console.log(listUriCharacter);
    // getEpisodeDetails(listUriCharacter, divEpisode[i]);
  }

  var divPersonnage = document.getElementsByClassName('episode');

  for (var _i = 0; _i < divPersonnage.length; _i++) {
    var listUriCharacter = tableauEpisode[_i].characters;
    divPersonnage[_i].innerHTML += //` <p> assad</p>`
    //   console.log(listUriCharacter);
    getEpisodeDetails(listUriCharacter, divPersonnage[_i]);
  }

  var _loop = function _loop(_i2) {
    divEpisode[_i2].addEventListener("click", function displayDiv() {
      if (divPersonnage[_i2].style.display === "none") {
        divPersonnage[_i2].style.display = "block";
      } else {
        divPersonnage[_i2].style.display = "none";
      }
    });
  };

  for (var _i2 = 0; _i2 < divPersonnage.length; _i2++) {
    _loop(_i2);
  }
}).catch(function (error) {
  console.error(error);
}); // fetch("https://rickandmortyapi.com/api/episode?page=2")
// .then((response2)=> {
//     return response2.json();
//   })
//   .then((responJson2) => {
//       let tableauEpisode2 = responJson2.results;
//       //   console.log(tabeauEpisode);
//       for (const episode2 of tableauEpisode2) {
//           let saisons2 = episode2.episode.split('E');
//           divtableauEpisode.innerHTML +=
//           `<div  class="${saisons2[0]} , episodeName"><span style="cursor:pointer;">${episode2.episode} ${episode2.name}</span></div>`; //onclick="displayDiv('episode')" id="episode-${episode.id}"
//           // let elmtEpisode = document.getElementById(`episode-${episode.id}`);
//         }
//       })
//       .catch((error) => {
//           console.error(error);
// })

function getEpisodeDetails(listUriCharacter, divEp) {
  var reponse = [];

  var _iterator2 = _createForOfIteratorHelper(listUriCharacter),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var uri = _step2.value;
      fetch(uri).then(function (resp) {
        return resp.json();
      }).then(function (resp2) {
        //console.log(resp2.id)
        //reponse.push(resp2);
        divEp.innerHTML += "<div class = \"EpisodeDetails\">\n      <div><img src= \"".concat(resp2.image, "\"</div>\n      <div> Nom : ").concat(resp2.name, " </div>\n      <div> Genre : ").concat(resp2.gender, " </div>\n      <div> Esp\xE8ce : ").concat(resp2.species, " </div>\n      <div> Type : ").concat(resp2.type, " </div>\n      </div>\n      ");
      });
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}

var saison1 = document.getElementsByTagName('input')[0];
var saison2 = document.getElementsByTagName('input')[1];
var saison3 = document.getElementsByTagName('input')[2];
var saison4 = document.getElementsByTagName('input')[3]; // console.log(saison1)

var SaisonClass1 = document.getElementsByClassName('S01');
var SaisonClass2 = document.getElementsByClassName('S02'); // console.log(SaisonClass2)

saison1.addEventListener('change', function () {
  console.log('saison 1 check');

  for (var i = 0; i < SaisonClass2.length; i++) {
    if (this.checked) {
      SaisonClass2[i].style.display = 'none';
    } else {
      SaisonClass2[i].style.display = 'block';
    }
  }
});
saison2.addEventListener('change', function () {
  console.log('saison 2 check');

  for (var i = 0; i < SaisonClass1.length; i++) {
    if (this.checked) {
      SaisonClass1[i].style.display = 'none';
    } else {
      SaisonClass1[i].style.display = 'block';
    }
  }
});
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63882" + '/');

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
},{}]},{},["../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","asset/js/episodes.js"], null)
//# sourceMappingURL=/episodes.830e6ae7.js.map