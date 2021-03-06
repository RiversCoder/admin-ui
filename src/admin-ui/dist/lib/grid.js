(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("admin-ui-breadcrumb-button-cascading-checkbox-collapse-datepicker-frame-grid", [], factory);
	else if(typeof exports === 'object')
		exports["admin-ui-breadcrumb-button-cascading-checkbox-collapse-datepicker-frame-grid"] = factory();
	else
		root["admin-ui-breadcrumb-button-cascading-checkbox-collapse-datepicker-frame-grid"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "d1Eh");
/******/ })
/************************************************************************/
/******/ ({

/***/ "/PwX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function getSize(el) {
  // let computed = window.getComputedStyle(el)
  // let rect = el.getBoundingClientRect()
  // return {
  //   width: el.offsetWidth || rect.width || parseInt(computed.width) || 0,
  //   height: el.offsetHeight || rect.height || parseInt(computed.height) || 0
  // }
  return {
    width: el.offsetWidth || 0,
    height: el.offsetHeight || 0
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function (el, isFragment) {
  var temp = getSize(el);
  if (temp.width || temp.height) return temp;

  // clone the el
  var copy = el.cloneNode(true);
  // ste some style to minimize the influence to the document
  // if (isFragment) copy.setAttribute('style', 'visibility:hidden !important; display:block !important;')
  // else copy.setAttribute('style', 'visibility:hidden !important;')
  copy.style.visibility = 'hidden';
  copy.style.display = 'block';
  copy.style.position = 'absolute';
  copy.style.top = '-9999999px';
  copy.style.left = '-9999999px';

  var res = null;
  // insert it to document
  // if (isFragment) document.body.appendChild(copy)
  // else el.parentNode.insertBefore(copy, el)
  document.body.appendChild(copy);
  res = getSize(copy);

  // remove it
  // if (isFragment) document.body.removeChild(copy)
  // else el.parentNode.removeChild(copy)
  document.body.removeChild(copy);
  return res;
});

/***/ }),

/***/ "472O":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return removeListener; });
let raf = null;
function requestAnimationFrame (callback) {
  if (!raf) {
    raf = (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function (callback) {
        return setTimeout(callback, 16)
      }
    ).bind(window);
  }
  return raf(callback)
}

let caf = null;
function cancelAnimationFrame (id) {
  if (!caf) {
    caf = (
      window.cancelAnimationFrame ||
      window.webkitCancelAnimationFrame ||
      window.mozCancelAnimationFrame ||
      function (id) {
        clearTimeout(id);
      }
    ).bind(window);
  }

  caf(id);
}

function createStyles (styleText) {
  var style = document.createElement('style');
  style.type = 'text/css';

  if (style.styleSheet) {
    style.styleSheet.cssText = styleText;
  } else {
    style.appendChild(document.createTextNode(styleText));
  }
  (document.querySelector('head') || document.body).appendChild(style);
  return style
}

function createElement (tagName, props = {}) {
  let elem = document.createElement(tagName);
  Object.keys(props).forEach(key => {
    elem[key] = props[key];
  });
  return elem
}

function getComputedStyle (elem, prop, pseudo) {
  // for older versions of Firefox, `getComputedStyle` required
  // the second argument and may return `null` for some elements
  // when `display: none`
  let computedStyle = window.getComputedStyle(elem, pseudo || null) || {
    display: 'none'
  };

  return computedStyle[prop]
}

function getRenderInfo (elem) {
  if (!document.documentElement.contains(elem)) {
    return {
      detached: true,
      rendered: false
    }
  }

  let current = elem;
  while (current !== document) {
    if (getComputedStyle(current, 'display') === 'none') {
      return {
        detached: false,
        rendered: false
      }
    }
    current = current.parentNode;
  }

  return {
    detached: false,
    rendered: true
  }
}

var css = ".resize-triggers{visibility:hidden;opacity:0}.resize-contract-trigger,.resize-contract-trigger:before,.resize-expand-trigger,.resize-triggers{content:\"\";position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden}.resize-contract-trigger,.resize-expand-trigger{background:#eee;overflow:auto}.resize-contract-trigger:before{width:200%;height:200%}";

let total = 0;
let style = null;

function addListener (elem, callback) {
  if (!elem.__resize_mutation_handler__) {
    elem.__resize_mutation_handler__ = handleMutation.bind(elem);
  }

  let listeners = elem.__resize_listeners__;

  if (!listeners) {
    elem.__resize_listeners__ = [];
    if (window.ResizeObserver) {
      let { offsetWidth, offsetHeight } = elem;
      let ro = new ResizeObserver(() => {
        if (!elem.__resize_observer_triggered__) {
          elem.__resize_observer_triggered__ = true;
          if (elem.offsetWidth === offsetWidth && elem.offsetHeight === offsetHeight) {
            return
          }
        }
        runCallbacks(elem);
      });

      // initially display none won't trigger ResizeObserver callback
      let { detached, rendered } = getRenderInfo(elem);
      elem.__resize_observer_triggered__ = detached === false && rendered === false;
      elem.__resize_observer__ = ro;
      ro.observe(elem);
    } else if (elem.attachEvent && elem.addEventListener) {
      // targeting IE9/10
      elem.__resize_legacy_resize_handler__ = function handleLegacyResize () {
        runCallbacks(elem);
      };
      elem.attachEvent('onresize', elem.__resize_legacy_resize_handler__);
      document.addEventListener('DOMSubtreeModified', elem.__resize_mutation_handler__);
    } else {
      if (!total) {
        style = createStyles(css);
      }
      initTriggers(elem);

      elem.__resize_rendered__ = getRenderInfo(elem).rendered;
      if (window.MutationObserver) {
        let mo = new MutationObserver(elem.__resize_mutation_handler__);
        mo.observe(document, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });
        elem.__resize_mutation_observer__ = mo;
      }
    }
  }

  elem.__resize_listeners__.push(callback);
  total++;
}

function removeListener (elem, callback) {
  // targeting IE9/10
  if (elem.detachEvent && elem.removeEventListener) {
    elem.detachEvent('onresize', elem.__resize_legacy_resize_handler__);
    document.removeEventListener('DOMSubtreeModified', elem.__resize_mutation_handler__);
    return
  }

  let listeners = elem.__resize_listeners__;
  if (!listeners) {
    return
  }
  listeners.splice(listeners.indexOf(callback), 1);

  if (!listeners.length) {
    if (elem.__resize_observer__) {
      elem.__resize_observer__.unobserve(elem);
      elem.__resize_observer__.disconnect();
      elem.__resize_observer__ = null;
    } else {
      if (elem.__resize_mutation_observer__) {
        elem.__resize_mutation_observer__.disconnect();
        elem.__resize_mutation_observer__ = null;
      }
      elem.removeEventListener('scroll', handleScroll);
      elem.removeChild(elem.__resize_triggers__.triggers);
      elem.__resize_triggers__ = null;
    }
    elem.__resize_listeners__ = null;
  }

  if (!--total && style) {
    style.parentNode.removeChild(style);
  }
}

function getUpdatedSize (elem) {
  let { width, height } = elem.__resize_last__;
  let { offsetWidth, offsetHeight } = elem;
  if (offsetWidth !== width || offsetHeight !== height) {
    return {
      width: offsetWidth,
      height: offsetHeight
    }
  }
  return null
}

function handleMutation () {
  // `this` denotes the scrolling element
  let { rendered, detached } = getRenderInfo(this);
  if (rendered !== this.__resize_rendered__) {
    if (!detached && this.__resize_triggers__) {
      resetTriggers(this);
      this.addEventListener('scroll', handleScroll, true);
    }
    this.__resize_rendered__ = rendered;
    runCallbacks(this);
  }
}

function handleScroll () {
  // `this` denotes the scrolling element
  resetTriggers(this);
  if (this.__resize_raf__) {
    cancelAnimationFrame(this.__resize_raf__);
  }
  this.__resize_raf__ = requestAnimationFrame(() => {
    let updated = getUpdatedSize(this);
    if (updated) {
      this.__resize_last__ = updated;
      runCallbacks(this);
    }
  });
}

function runCallbacks (elem) {
  elem.__resize_listeners__.forEach(callback => {
    callback.call(elem);
  });
}

function initTriggers (elem) {
  let position = getComputedStyle(elem, 'position');
  if (!position || position === 'static') {
    elem.style.position = 'relative';
  }

  elem.__resize_old_position__ = position;
  elem.__resize_last__ = {};

  let triggers = createElement('div', {
    className: 'resize-triggers'
  });
  let expand = createElement('div', {
    className: 'resize-expand-trigger'
  });
  let expandChild = createElement('div');
  let contract = createElement('div', {
    className: 'resize-contract-trigger'
  });
  expand.appendChild(expandChild);
  triggers.appendChild(expand);
  triggers.appendChild(contract);
  elem.appendChild(triggers);

  elem.__resize_triggers__ = {
    triggers,
    expand,
    expandChild,
    contract
  };

  resetTriggers(elem);
  elem.addEventListener('scroll', handleScroll, true);

  elem.__resize_last__ = {
    width: elem.offsetWidth,
    height: elem.offsetHeight
  };
}

function resetTriggers (elem) {
  let { expand, expandChild, contract } = elem.__resize_triggers__;

  // batch read
  let { scrollWidth: csw, scrollHeight: csh } = contract;
  let { offsetWidth: eow, offsetHeight: eoh, scrollWidth: esw, scrollHeight: esh } = expand;

  // batch write
  contract.scrollLeft = csw;
  contract.scrollTop = csh;
  expandChild.style.width = eow + 1 + 'px';
  expandChild.style.height = eoh + 1 + 'px';
  expand.scrollLeft = esw;
  expand.scrollTop = esh;
}




/***/ }),

/***/ "FZ+f":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "JbP+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "au-grid",
      class:
        "au-grid-cell-" +
        _vm.cellNumber +
        " au-grid-offset-" +
        _vm.offsetNumber,
      style: {
        margin:
          "0 " +
          (_vm.row[_vm.row.length - 1] === _vm.$el ? 0 : _vm.space) +
          " " +
          (_vm.isLastRow ? 0 : _vm.space) +
          " 0",
        width:
          (_vm.containerWidth + parseInt(_vm.space)) / (24 / _vm.cellNumber) -
          parseInt(_vm.space) +
          "px"
      }
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-da316b40", esExports)
  }
}

/***/ }),

/***/ "Jkv8":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("x118");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("rjj0").default
var update = add("14115e99", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true}!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-da316b40\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./grid.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?{\"sourceMap\":true}!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-da316b40\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../../node_modules/sass-loader/lib/loader.js?{\"sourceMap\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./grid.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "KFyd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
  // 获取窗口宽度
  if (window.innerWidth) {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
  } else if (document.body.clientWidth) {
    return {
      width: document.body.clientWidth,
      height: document.body.clientHeight
    };
  }
});

/***/ }),

/***/ "VU/8":
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "d1Eh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_grid_vue__ = __webpack_require__("tn8G");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return __WEBPACK_IMPORTED_MODULE_0__src_grid_vue__["a"]; });


/***/ }),

/***/ "fkvk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_dom_get_element_size__ = __webpack_require__("/PwX");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_dom_get_window_size__ = __webpack_require__("KFyd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_resize_detector__ = __webpack_require__("472O");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



// import heartbeat from '../../../helpers/utils/heartbeat.js'


function validateWidth(v) {
  return v >= 1 && v <= 24 && parseInt(v) === Number(v);
}
function getElementInnerWidth(el) {
  var copy = el.cloneNode();
  copy.innerHTML = '';
  var div = document.createElement('div');
  div.style.width = '100%';
  copy.appendChild(div);
  el.parentNode.appendChild(copy);
  var res = Object(__WEBPACK_IMPORTED_MODULE_0__helpers_dom_get_element_size__["a" /* default */])(div).width;
  copy.parentNode.removeChild(copy);
  return res;
}

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'au-grid',
  props: {
    widthXl: {
      type: [String, Number],
      validator: validateWidth
    },
    widthLg: {
      type: [String, Number],
      validator: validateWidth
    },
    widthMd: {
      type: [String, Number],
      validator: validateWidth
    },
    widthSm: {
      type: [String, Number],
      validator: validateWidth
    },
    widthXs: {
      type: [String, Number],
      validator: validateWidth
    },
    offsetXl: {
      type: [String, Number],
      default: 0
    },
    offsetLg: {
      type: [String, Number],
      default: 0
    },
    offsetMd: {
      type: [String, Number],
      default: 0
    },
    offsetSm: {
      type: [String, Number],
      default: 0
    },
    offsetXs: {
      type: [String, Number],
      default: 0
    },
    space: {
      type: [String, Number],
      default: 0
    }
  },
  data: function data() {
    return {
      cellNumber: 24,
      offsetNumber: 0,
      breakPoint: { // base on this size to pile cells or list them horizontally
        xl: 1900,
        lg: 1180,
        md: 940,
        sm: 748,
        xs: 0
      },
      observer: null,
      observerCount: 0,
      observerClock: null,
      containerWidth: 0,
      row: [],
      isLastRow: false,
      timer: null
    };
  },
  mounted: function mounted() {
    // this.reorder()
    // let MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
    // if (MutationObserver) {
    //   let config = {
    //     attributes: true,
    //     childList: false,
    //     subtree: false,
    //     characterData: false,
    //     attributeOldValue: false,
    //     characterDataOldValue: false,
    //     attributeFilter: ['style']
    //   }
    //   let vm = this
    //   vm.observer = new MutationObserver(function (mutations) {
    //     let hasDisplayChange = false
    //     mutations.forEach(m => {
    //       if (m.attributeName === 'style' && m.target.style.display !== 'none') {
    //         hasDisplayChange = true
    //       }
    //     })
    //     if (hasDisplayChange) {
    //       vm.observer.disconnect() // need pause observe to prevent infinity loop
    //       vm.$el.parentNode.style.display = 'flex'
    //       vm.$nextTick(() => vm.observer.observe(vm.$el.parentNode, config)) // and after render the observing should continue
    //     }
    //   })
    //   vm.observer.observe(vm.$el.parentNode, config)
    // }

    // heartbeat.add(this.reorder.bind(this), this._uid)
    this.reorder();
    Object(__WEBPACK_IMPORTED_MODULE_2_resize_detector__["a" /* addListener */])(this.$el.parentElement, this.reorder);
  },
  beforeDestroy: function beforeDestroy() {
    if (this.observe) this.observer.disconnect();
    // heartbeat.remove(this._uid)
    Object(__WEBPACK_IMPORTED_MODULE_2_resize_detector__["b" /* removeListener */])(this.$el.parentElement, this.reorder);
  },

  watch: {
    widthXl: function widthXl() {
      this.reorder();
    },
    widthLg: function widthLg() {
      this.reorder();
    },
    widthMd: function widthMd() {
      this.reorder();
    },
    widthSm: function widthSm() {
      this.reorder();
    },
    widthXs: function widthXs() {
      this.reorder();
    },
    offsetXl: function offsetXl() {
      this.reorder();
    },
    offsetLg: function offsetLg() {
      this.reorder();
    },
    offsetMd: function offsetMd() {
      this.reorder();
    },
    offsetSm: function offsetSm() {
      this.reorder();
    },
    offsetXs: function offsetXs() {
      this.reorder();
    }
  },
  methods: {
    setContainer: function setContainer() {
      var container = this.$el.parentNode;
      container.style.display = 'flex';
      container.style.flexWrap = 'wrap';
    },
    reorder: function reorder() {
      if (window.getComputedStyle(this.$el.parentNode).display === 'none') return;
      this.setContainer();
      this.getCellNumber();
      this.getOffsetNumber();
      this.getContainerWidth();
      this.$nextTick(this.gatherRow);
    },
    getCellNumber: function getCellNumber() {
      // let containerWidth = getElementSize(this.$el.parentNode).width
      var referenceWidth = Object(__WEBPACK_IMPORTED_MODULE_1__helpers_dom_get_window_size__["a" /* default */])().width;

      if (this.widthXl && referenceWidth >= this.breakPoint.xl) {
        this.cellNumber = this.widthXl;
      } else if (this.widthLg && referenceWidth >= this.breakPoint.lg) {
        this.cellNumber = this.widthLg;
      } else if (this.widthMd && referenceWidth >= this.breakPoint.md) {
        this.cellNumber = this.widthMd;
      } else if (this.widthSm && referenceWidth >= this.breakPoint.sm) {
        this.cellNumber = this.widthSm;
      } else if (this.widthXs) {
        this.cellNumber = this.widthXs;
      } else {
        this.cellNumber = 24;
      }
      this.$el.setAttribute('data-grid', this.cellNumber);
    },
    getOffsetNumber: function getOffsetNumber() {
      // let containerWidth = getElementSize(this.$el.parentNode).width
      var referenceWidth = Object(__WEBPACK_IMPORTED_MODULE_1__helpers_dom_get_window_size__["a" /* default */])().width;

      if (this.offsetXl && referenceWidth >= this.breakPoint.xl) {
        this.offsetNumber = this.offsetXl;
      } else if (this.offsetLg && referenceWidth >= this.breakPoint.lg) {
        this.offsetNumber = this.offsetLg;
      } else if (this.offsetMd && referenceWidth >= this.breakPoint.md) {
        this.offsetNumber = this.offsetMd;
      } else if (this.offsetSm && referenceWidth >= this.breakPoint.sm) {
        this.offsetNumber = this.offsetSm;
      } else if (this.offsetXs) {
        this.offsetNumber = this.offsetXs;
      } else {
        this.offsetNumber = 0;
      }
    },
    getContainerWidth: function getContainerWidth() {
      this.containerWidth = getElementInnerWidth(this.$el.parentNode);
    },
    gatherRow: function gatherRow() {
      var allGrid = this.$el.parentNode.querySelectorAll('.au-grid');
      var cellCount = 0;
      for (var i = 0; i < allGrid.length; i++) {
        cellCount += parseInt(allGrid[i].getAttribute('data-grid'));
        if (allGrid[i + 1] && cellCount + parseInt(allGrid[i + 1].getAttribute('data-grid')) > (parseInt(cellCount / 24) + 1) * 24) {
          cellCount = (parseInt(cellCount / 24) + 1) * 24;
        }
        if (allGrid[i] === this.$el) break;
      }
      var start = 0;
      var end = 0;
      if (cellCount % 24) {
        start = parseInt(cellCount / 24) * 24;
      } else {
        start = parseInt(cellCount / 24 - 1) * 24;
      }
      end = start + 24;
      var cellCount2 = 0;
      for (var _i = 0; _i < allGrid.length; _i++) {
        cellCount2 += parseInt(allGrid[_i].getAttribute('data-grid'));
        if (allGrid[_i + 1] && cellCount2 + parseInt(allGrid[_i + 1].getAttribute('data-grid')) > (parseInt(cellCount2 / 24) + 1) * 24) {
          cellCount2 = (parseInt(cellCount2 / 24) + 1) * 24;
        }
        if (cellCount2 > start && cellCount2 <= end) {
          this.row.push(allGrid[_i]);
        }
      }
      if (cellCount2 > start && cellCount2 <= end) this.isLastRow = true;else this.isLastRow = false;
    }
  }
});

/***/ }),

/***/ "rjj0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = addStylesClient;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__listToStyles__ = __webpack_require__("tTVk");
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(__WEBPACK_IMPORTED_MODULE_0__listToStyles__["a" /* default */])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(__WEBPACK_IMPORTED_MODULE_0__listToStyles__["a" /* default */])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "tTVk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = listToStyles;
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ "tn8G":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_grid_vue__ = __webpack_require__("fkvk");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_da316b40_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_grid_vue__ = __webpack_require__("JbP+");
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("Jkv8")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_grid_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_da316b40_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_grid_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/admin-ui/src/components/grid/src/grid.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-da316b40", Component.options)
  } else {
    hotAPI.reload("data-v-da316b40", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "x118":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(true);
// imports


// module
exports.push([module.i, "\n.au-grid {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.au-grid-cell-1 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 4.16667%;\n          flex: 0 0 4.16667%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-cell-2 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 8.33333%;\n          flex: 0 0 8.33333%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-cell-3 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 12.5%;\n          flex: 0 0 12.5%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-cell-4 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 16.66667%;\n          flex: 0 0 16.66667%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-cell-5 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 20.83333%;\n          flex: 0 0 20.83333%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-cell-6 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 25%;\n          flex: 0 0 25%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-cell-7 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 29.16667%;\n          flex: 0 0 29.16667%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-cell-8 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 33.33333%;\n          flex: 0 0 33.33333%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-cell-9 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 37.5%;\n          flex: 0 0 37.5%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-cell-10 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 41.66667%;\n          flex: 0 0 41.66667%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-cell-11 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 45.83333%;\n          flex: 0 0 45.83333%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-cell-12 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 50%;\n          flex: 0 0 50%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-cell-13 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 54.16667%;\n          flex: 0 0 54.16667%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-cell-14 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 58.33333%;\n          flex: 0 0 58.33333%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-cell-15 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 62.5%;\n          flex: 0 0 62.5%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-cell-16 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 66.66667%;\n          flex: 0 0 66.66667%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-cell-17 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 70.83333%;\n          flex: 0 0 70.83333%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-cell-18 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 75%;\n          flex: 0 0 75%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-cell-19 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 79.16667%;\n          flex: 0 0 79.16667%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-cell-20 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 83.33333%;\n          flex: 0 0 83.33333%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-cell-21 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 87.5%;\n          flex: 0 0 87.5%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-cell-22 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 91.66667%;\n          flex: 0 0 91.66667%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-cell-23 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 95.83333%;\n          flex: 0 0 95.83333%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-cell-24 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 100%;\n          flex: 0 0 100%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-offset-1 {\n  margin-left: 4.16667%;\n}\n.au-grid-offset-2 {\n  margin-left: 8.33333%;\n}\n.au-grid-offset-3 {\n  margin-left: 12.5%;\n}\n.au-grid-offset-4 {\n  margin-left: 16.66667%;\n}\n.au-grid-offset-5 {\n  margin-left: 20.83333%;\n}\n.au-grid-offset-6 {\n  margin-left: 25%;\n}\n.au-grid-offset-7 {\n  margin-left: 29.16667%;\n}\n.au-grid-offset-8 {\n  margin-left: 33.33333%;\n}\n.au-grid-offset-9 {\n  margin-left: 37.5%;\n}\n.au-grid-offset-10 {\n  margin-left: 41.66667%;\n}\n.au-grid-offset-11 {\n  margin-left: 45.83333%;\n}\n.au-grid-offset-12 {\n  margin-left: 50%;\n}\n.au-grid-offset-13 {\n  margin-left: 54.16667%;\n}\n.au-grid-offset-14 {\n  margin-left: 58.33333%;\n}\n.au-grid-offset-15 {\n  margin-left: 62.5%;\n}\n.au-grid-offset-16 {\n  margin-left: 66.66667%;\n}\n.au-grid-offset-17 {\n  margin-left: 70.83333%;\n}\n.au-grid-offset-18 {\n  margin-left: 75%;\n}\n.au-grid-offset-19 {\n  margin-left: 79.16667%;\n}\n.au-grid-offset-20 {\n  margin-left: 83.33333%;\n}\n.au-grid-offset-21 {\n  margin-left: 87.5%;\n}\n.au-grid-offset-22 {\n  margin-left: 91.66667%;\n}\n.au-grid-offset-23 {\n  margin-left: 95.83333%;\n}\n.au-grid-offset-24 {\n  margin-left: 100%;\n}\n", "", {"version":3,"sources":["/Users/awey/Documents/projects/admin-ui/src/admin-ui/src/components/grid/src/grid.vue"],"names":[],"mappings":";AACA;EACE,eAAe;EACf,+BAA+B;UACvB,uBAAuB;CAChC;AACD;EACE,oBAAoB;MAChB,uBAAuB;UACnB,mBAAmB;EAC3B,8BAA8B;MAC1B,iBAAiB;CACtB;AACD;EACE,oBAAoB;MAChB,uBAAuB;UACnB,mBAAmB;EAC3B,8BAA8B;MAC1B,iBAAiB;CACtB;AACD;EACE,oBAAoB;MAChB,oBAAoB;UAChB,gBAAgB;EACxB,8BAA8B;MAC1B,iBAAiB;CACtB;AACD;EACE,oBAAoB;MAChB,wBAAwB;UACpB,oBAAoB;EAC5B,8BAA8B;MAC1B,iBAAiB;CACtB;AACD;EACE,oBAAoB;MAChB,wBAAwB;UACpB,oBAAoB;EAC5B,8BAA8B;MAC1B,iBAAiB;CACtB;AACD;EACE,oBAAoB;MAChB,kBAAkB;UACd,cAAc;EACtB,8BAA8B;MAC1B,iBAAiB;CACtB;AACD;EACE,oBAAoB;MAChB,wBAAwB;UACpB,oBAAoB;EAC5B,8BAA8B;MAC1B,iBAAiB;CACtB;AACD;EACE,oBAAoB;MAChB,wBAAwB;UACpB,oBAAoB;EAC5B,8BAA8B;MAC1B,iBAAiB;CACtB;AACD;EACE,oBAAoB;MAChB,oBAAoB;UAChB,gBAAgB;EACxB,8BAA8B;MAC1B,iBAAiB;CACtB;AACD;EACE,oBAAoB;MAChB,wBAAwB;UACpB,oBAAoB;EAC5B,8BAA8B;MAC1B,iBAAiB;CACtB;AACD;EACE,oBAAoB;MAChB,wBAAwB;UACpB,oBAAoB;EAC5B,8BAA8B;MAC1B,iBAAiB;CACtB;AACD;EACE,oBAAoB;MAChB,kBAAkB;UACd,cAAc;EACtB,8BAA8B;MAC1B,iBAAiB;CACtB;AACD;EACE,oBAAoB;MAChB,wBAAwB;UACpB,oBAAoB;EAC5B,8BAA8B;MAC1B,iBAAiB;CACtB;AACD;EACE,oBAAoB;MAChB,wBAAwB;UACpB,oBAAoB;EAC5B,8BAA8B;MAC1B,iBAAiB;CACtB;AACD;EACE,oBAAoB;MAChB,oBAAoB;UAChB,gBAAgB;EACxB,8BAA8B;MAC1B,iBAAiB;CACtB;AACD;EACE,oBAAoB;MAChB,wBAAwB;UACpB,oBAAoB;EAC5B,8BAA8B;MAC1B,iBAAiB;CACtB;AACD;EACE,oBAAoB;MAChB,wBAAwB;UACpB,oBAAoB;EAC5B,8BAA8B;MAC1B,iBAAiB;CACtB;AACD;EACE,oBAAoB;MAChB,kBAAkB;UACd,cAAc;EACtB,8BAA8B;MAC1B,iBAAiB;CACtB;AACD;EACE,oBAAoB;MAChB,wBAAwB;UACpB,oBAAoB;EAC5B,8BAA8B;MAC1B,iBAAiB;CACtB;AACD;EACE,oBAAoB;MAChB,wBAAwB;UACpB,oBAAoB;EAC5B,8BAA8B;MAC1B,iBAAiB;CACtB;AACD;EACE,oBAAoB;MAChB,oBAAoB;UAChB,gBAAgB;EACxB,8BAA8B;MAC1B,iBAAiB;CACtB;AACD;EACE,oBAAoB;MAChB,wBAAwB;UACpB,oBAAoB;EAC5B,8BAA8B;MAC1B,iBAAiB;CACtB;AACD;EACE,oBAAoB;MAChB,wBAAwB;UACpB,oBAAoB;EAC5B,8BAA8B;MAC1B,iBAAiB;CACtB;AACD;EACE,oBAAoB;MAChB,mBAAmB;UACf,eAAe;EACvB,8BAA8B;MAC1B,iBAAiB;CACtB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,kBAAkB;CACnB","file":"grid.vue","sourcesContent":["\n.au-grid {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.au-grid-cell-1 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 4.16667%;\n          flex: 0 0 4.16667%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-cell-2 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 8.33333%;\n          flex: 0 0 8.33333%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-cell-3 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 12.5%;\n          flex: 0 0 12.5%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-cell-4 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 16.66667%;\n          flex: 0 0 16.66667%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-cell-5 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 20.83333%;\n          flex: 0 0 20.83333%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-cell-6 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 25%;\n          flex: 0 0 25%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-cell-7 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 29.16667%;\n          flex: 0 0 29.16667%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-cell-8 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 33.33333%;\n          flex: 0 0 33.33333%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-cell-9 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 37.5%;\n          flex: 0 0 37.5%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-cell-10 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 41.66667%;\n          flex: 0 0 41.66667%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-cell-11 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 45.83333%;\n          flex: 0 0 45.83333%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-cell-12 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 50%;\n          flex: 0 0 50%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-cell-13 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 54.16667%;\n          flex: 0 0 54.16667%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-cell-14 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 58.33333%;\n          flex: 0 0 58.33333%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-cell-15 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 62.5%;\n          flex: 0 0 62.5%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-cell-16 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 66.66667%;\n          flex: 0 0 66.66667%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-cell-17 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 70.83333%;\n          flex: 0 0 70.83333%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-cell-18 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 75%;\n          flex: 0 0 75%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-cell-19 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 79.16667%;\n          flex: 0 0 79.16667%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-cell-20 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 83.33333%;\n          flex: 0 0 83.33333%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-cell-21 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 87.5%;\n          flex: 0 0 87.5%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-cell-22 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 91.66667%;\n          flex: 0 0 91.66667%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-cell-23 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 95.83333%;\n          flex: 0 0 95.83333%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-cell-24 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 100%;\n          flex: 0 0 100%;\n  -ms-flex-preferred-size: auto;\n      flex-basis: auto;\n}\n.au-grid-offset-1 {\n  margin-left: 4.16667%;\n}\n.au-grid-offset-2 {\n  margin-left: 8.33333%;\n}\n.au-grid-offset-3 {\n  margin-left: 12.5%;\n}\n.au-grid-offset-4 {\n  margin-left: 16.66667%;\n}\n.au-grid-offset-5 {\n  margin-left: 20.83333%;\n}\n.au-grid-offset-6 {\n  margin-left: 25%;\n}\n.au-grid-offset-7 {\n  margin-left: 29.16667%;\n}\n.au-grid-offset-8 {\n  margin-left: 33.33333%;\n}\n.au-grid-offset-9 {\n  margin-left: 37.5%;\n}\n.au-grid-offset-10 {\n  margin-left: 41.66667%;\n}\n.au-grid-offset-11 {\n  margin-left: 45.83333%;\n}\n.au-grid-offset-12 {\n  margin-left: 50%;\n}\n.au-grid-offset-13 {\n  margin-left: 54.16667%;\n}\n.au-grid-offset-14 {\n  margin-left: 58.33333%;\n}\n.au-grid-offset-15 {\n  margin-left: 62.5%;\n}\n.au-grid-offset-16 {\n  margin-left: 66.66667%;\n}\n.au-grid-offset-17 {\n  margin-left: 70.83333%;\n}\n.au-grid-offset-18 {\n  margin-left: 75%;\n}\n.au-grid-offset-19 {\n  margin-left: 79.16667%;\n}\n.au-grid-offset-20 {\n  margin-left: 83.33333%;\n}\n.au-grid-offset-21 {\n  margin-left: 87.5%;\n}\n.au-grid-offset-22 {\n  margin-left: 91.66667%;\n}\n.au-grid-offset-23 {\n  margin-left: 95.83333%;\n}\n.au-grid-offset-24 {\n  margin-left: 100%;\n}\n"],"sourceRoot":""}]);

// exports


/***/ })

/******/ });
});