/*!
 * 
 * fluid - v1.1.1 - 2018-12-07
 * https://github.com/immutabl3/fluid#readme
 * Copyright (c) 2018 Immutable, LLC License: MIT
 * 				
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("signal-js"));
	else if(typeof define === 'function' && define.amd)
		define(["signal-js"], factory);
	else if(typeof exports === 'object')
		exports["fluid"] = factory(require("signal-js"));
	else
		root["fluid"] = factory(root["signal-js"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_signal_js__) {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./src/Animation/Animation.js":
/*!************************************!*\
  !*** ./src/Animation/Animation.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timeouts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../timeouts */ "./src/timeouts.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../animations */ "./src/animations.js");
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../timer */ "./src/timer.js");
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../properties */ "./src/properties.js");
// the crème de la crème...the memthods that make
// the animation an animation




/* harmony default export */ __webpack_exports__["default"] = ({
  start: function start() {
    var _this = this;

    // already playing
    if (this.playing) return this;
    this.playing = true; // already registered to play

    var id = this.id;
    if (_timeouts__WEBPACK_IMPORTED_MODULE_0__["default"].has(id)) return this;
    if (_animations__WEBPACK_IMPORTED_MODULE_1__["default"].has(id)) return this; // register the animation

    var delay = this.delay;
    if (!delay) _animations__WEBPACK_IMPORTED_MODULE_1__["default"].set(id, this);
    if (delay) Object(_timeouts__WEBPACK_IMPORTED_MODULE_0__["addTimeout"])(id, function () {
      return _animations__WEBPACK_IMPORTED_MODULE_1__["default"].set(id, _this);
    }, delay); // wipe out the time to start from the begining

    this.time = undefined;
    return this;
  },
  // stops the animation completely
  stop: function stop() {
    if (!this.playing) return this;
    this.playing = false; // clean up

    var id = this.id;
    _timeouts__WEBPACK_IMPORTED_MODULE_0__["default"].has(id) && _timeouts__WEBPACK_IMPORTED_MODULE_0__["default"].delete(id);
    _animations__WEBPACK_IMPORTED_MODULE_1__["default"].has(id) && _animations__WEBPACK_IMPORTED_MODULE_1__["default"].delete(id);
    return this;
  },
  // pause the animation so that it can be resumed
  // at a later time...same as a stop
  pause: function pause() {
    return this.stop();
  },
  // resume a paused animation
  resume: function resume() {
    if (this.playing) return this;
    var id = this.id;
    if (_animations__WEBPACK_IMPORTED_MODULE_1__["default"].has(id)) return this; // to resume, re-adjust the start time to
    // be the current time minus how far the 
    // animation has progressed previously

    this.time = _timer__WEBPACK_IMPORTED_MODULE_2__["default"].time - (_timer__WEBPACK_IMPORTED_MODULE_2__["default"].time - this.time);
    _animations__WEBPACK_IMPORTED_MODULE_1__["default"].set(id, this);
    return this;
  },
  end: function end() {
    // to jump to the end, tick at the end of the duration
    this.tick(this.time + this.duration); // then make sure we stop

    return this.stop();
  },
  tick: function tick(time) {
    var start = this.time === undefined ? this.time = time : this.time;
    var tick = (time - start) / this.duration;
    var y = this.curve(tick);
    var done = tick >= 1;
    var properties;

    if (done) {
      properties = this.curve.returnsToSelf ? this.startProps : this.endProps;
    } else {
      properties = {};

      for (var key in this.startProps) {
        var startInterpolable = this.startProps[key];
        var endInterpolable = this.endProps[key];
        if (!startInterpolable || !endInterpolable) continue;
        properties[key] = startInterpolable.interpolate(endInterpolable, y);
      }
    }

    Object(_properties__WEBPACK_IMPORTED_MODULE_3__["apply"])(this.props, properties);
    this.emit('update', this.props);

    if (done) {
      this.playing = false;
      this.emit('complete', this.props);
    }

    return !done;
  }
});

/***/ }),

/***/ "./src/Animation/index.js":
/*!********************************!*\
  !*** ./src/Animation/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var signal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! signal-js */ "signal-js");
/* harmony import */ var signal_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(signal_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./src/types/index.js");
/* harmony import */ var _properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../properties */ "./src/properties.js");
/* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Animation */ "./src/Animation/Animation.js");
/* harmony import */ var _utils_uniqueId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/uniqueId */ "./src/utils/uniqueId.js");
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../debug */ "./src/debug.js");







var formatOptions = function formatOptions(from, to, config) {
  var id = config && config.id !== undefined ? config.id : Object(_utils_uniqueId__WEBPACK_IMPORTED_MODULE_4__["default"])();
  var delay = Math.max(0, (config && config.delay !== undefined ? config.delay : 0) * _debug__WEBPACK_IMPORTED_MODULE_5__["default"].slow);
  var duration = Math.max(0, (config && config.duration !== undefined ? config.duration : 1000) * _debug__WEBPACK_IMPORTED_MODULE_5__["default"].slow);
  var type = config && config.type !== undefined ? config.type : 'spring';
  return {
    // save these two options
    id: id,
    duration: duration,
    delay: delay,
    // no ticks have occurred, but keep the key 
    // reserved (and wipe out anything assigned)
    time: undefined,
    // the object we mutate every tick
    props: from,
    // the properties we're start at
    startProps: Object(_properties__WEBPACK_IMPORTED_MODULE_2__["parse"])(from),
    // the properties we're going to
    endProps: Object(_properties__WEBPACK_IMPORTED_MODULE_2__["parse"])(to),
    // this is the curve used to animate every tick
    curve: _types__WEBPACK_IMPORTED_MODULE_1__["default"][type](config),
    // by default, we're not animating until "start"
    playing: false
  };
};

/* harmony default export */ __webpack_exports__["default"] = (function (from, to, options) {
  return Object.assign( // create an emitter instance
  signal_js__WEBPACK_IMPORTED_MODULE_0___default()(), // merge in the configuration
  formatOptions(from, to, options), // what makes the animation an animation
  _Animation__WEBPACK_IMPORTED_MODULE_3__["default"]);
});
;

/***/ }),

/***/ "./src/Color/componentToHex.js":
/*!*************************************!*\
  !*** ./src/Color/componentToHex.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return componentToHex; });
function componentToHex(str) {
  var hex = str.toString(16);
  if (hex.length === 1) return "0".concat(hex);
  return hex;
}
;

/***/ }),

/***/ "./src/Color/index.js":
/*!****************************!*\
  !*** ./src/Color/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Color; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _componentToHex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componentToHex */ "./src/Color/componentToHex.js");




var Color =
/*#__PURE__*/
function () {
  function Color() {
    var rgb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var format = arguments.length > 1 ? arguments[1] : undefined;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Color);

    this.rgb = rgb;
    this.format = format;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Color, [{
    key: "toHex",
    value: function toHex() {
      return "#".concat(Object(_componentToHex__WEBPACK_IMPORTED_MODULE_2__["default"])(this.rgb.r)).concat(Object(_componentToHex__WEBPACK_IMPORTED_MODULE_2__["default"])(this.rgb.g)).concat(Object(_componentToHex__WEBPACK_IMPORTED_MODULE_2__["default"])(this.rgb.b));
    }
  }, {
    key: "toRgb",
    value: function toRgb() {
      return "rgb(".concat(this.rgb.r, ", ").concat(this.rgb.g, ", ").concat(this.rgb.b, ")");
    }
  }, {
    key: "toRgba",
    value: function toRgba() {
      return "rgba(".concat(this.rgb.r, ", ").concat(this.rgb.g, ", ").concat(this.rgb.b, ", ").concat(this.rgb.a, ")");
    }
  }]);

  return Color;
}();


;

/***/ }),

/***/ "./src/Interpolable/InterpolableArray.js":
/*!***********************************************!*\
  !*** ./src/Interpolable/InterpolableArray.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InterpolableArray; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ */ "./src/Interpolable/index.js");
/* harmony import */ var _utils_isDefined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/isDefined */ "./src/utils/isDefined.js");






var valueToInterpolable = function valueToInterpolable(val) {
  return Object(___WEBPACK_IMPORTED_MODULE_3__["default"])(val) || val;
};

var InterpolableArray =
/*#__PURE__*/
function () {
  function InterpolableArray(values) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InterpolableArray);

    this.values = values;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(InterpolableArray, [{
    key: "interpolate",
    value: function interpolate(endInterpolable, tick) {
      var start = this.values;
      var end = endInterpolable.values;
      var newValues = [];
      var idx = 0;
      var len = 0;
      var ref = Math.min(start.length, end.length);

      for (; 0 <= ref ? len < ref : len > ref; idx = 0 <= ref ? ++len : --len) {
        if (start[idx].interpolate) {
          newValues.push(start[idx].interpolate(end[idx], tick));
        } else {
          newValues.push(start[idx]);
        }
      }

      return new InterpolableArray(newValues);
    }
  }, {
    key: "format",
    value: function format() {
      return this.values.map(function (val) {
        return val.format ? val.format() : val;
      });
    }
  }]);

  return InterpolableArray;
}();

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(InterpolableArray, "create", function (value) {
  if (!Array.isArray(value)) return;
  return new InterpolableArray(value.map(valueToInterpolable).filter(_utils_isDefined__WEBPACK_IMPORTED_MODULE_4__["default"]));
});


;

/***/ }),

/***/ "./src/Interpolable/InterpolableColor.js":
/*!***********************************************!*\
  !*** ./src/Interpolable/InterpolableColor.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InterpolableColor; });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Color */ "./src/Color/index.js");
/* harmony import */ var _utils_roundFloat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/roundFloat */ "./src/utils/roundFloat.js");







var InterpolableColor =
/*#__PURE__*/
function () {
  function InterpolableColor(color1) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, InterpolableColor);

    this.color = color1;
    this.format = this.format.bind(this);
    this.interpolate = this.interpolate.bind(this);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(InterpolableColor, [{
    key: "interpolate",
    value: function interpolate(endInterpolable, tick) {
      var start = this.color;
      var end = endInterpolable.color;
      var alpha = Object(_utils_roundFloat__WEBPACK_IMPORTED_MODULE_5__["default"])((end.rgb.a - start.rgb.a) * tick + start.rgb.a, 5);
      var rgb = ['r', 'g', 'b'].reduce(function (rgb, key) {
        var value = Math.round((end.rgb[key] - start.rgb[key]) * tick + start.rgb[key]);
        rgb[key] = Math.min(255, Math.max(0, value));
        return rgb;
      }, {
        a: Math.min(1, Math.max(0, alpha))
      });
      return new InterpolableColor(new _Color__WEBPACK_IMPORTED_MODULE_4__["default"](rgb, end.format));
    }
  }, {
    key: "format",
    value: function format() {
      if (this.color.format === 'hex') return this.color.toHex();
      if (this.color.format === 'rgb') return this.color.toRgb();
      if (this.color.format === 'rgba') return this.color.toRgba();
    }
  }]);

  return InterpolableColor;
}();

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(InterpolableColor, "create", function (value) {
  if (!Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === 'string') return;
  var color = _Color__WEBPACK_IMPORTED_MODULE_4__["default"].fromHex(value) || _Color__WEBPACK_IMPORTED_MODULE_4__["default"].fromRgb(value);
  if (color) return new InterpolableColor(color);
});


;

/***/ }),

/***/ "./src/Interpolable/InterpolableNumber.js":
/*!************************************************!*\
  !*** ./src/Interpolable/InterpolableNumber.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InterpolableNumber; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _utils_roundFloat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/roundFloat */ "./src/utils/roundFloat.js");





var InterpolableNumber =
/*#__PURE__*/
function () {
  function InterpolableNumber(value) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InterpolableNumber);

    this.value = parseFloat(value);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(InterpolableNumber, [{
    key: "interpolate",
    value: function interpolate(endInterpolable, tick) {
      var start = this.value;
      var end = endInterpolable.value;
      return new InterpolableNumber((end - start) * tick + start);
    }
  }, {
    key: "format",
    value: function format() {
      return Object(_utils_roundFloat__WEBPACK_IMPORTED_MODULE_3__["default"])(this.value, 5);
    }
  }]);

  return InterpolableNumber;
}();

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(InterpolableNumber, "create", function (value) {
  if (typeof value !== 'number') return;
  return new InterpolableNumber(value);
});


;

/***/ }),

/***/ "./src/Interpolable/InterpolableObject.js":
/*!************************************************!*\
  !*** ./src/Interpolable/InterpolableObject.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InterpolableObject; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ */ "./src/Interpolable/index.js");





var InterpolableObject =
/*#__PURE__*/
function () {
  function InterpolableObject(obj) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InterpolableObject);

    this.obj = obj;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(InterpolableObject, [{
    key: "interpolate",
    value: function interpolate(endInterpolable, tick) {
      var start = this.obj;
      var end = endInterpolable.obj;
      var newObj = {};

      for (var key in start) {
        var val = start[key];
        newObj[key] = val.interpolate ? val.interpolate(end[key], tick) : val;
      }

      return new InterpolableObject(newObj);
    }
  }, {
    key: "format",
    value: function format() {
      return this.obj;
    }
  }]);

  return InterpolableObject;
}();

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(InterpolableObject, "create", function (value) {
  if (!(value instanceof Object)) return;
  var obj = {};

  for (var key in value) {
    var val = value[key];
    obj[key] = Object(___WEBPACK_IMPORTED_MODULE_3__["default"])(val);
  }

  return new InterpolableObject(obj);
});


;

/***/ }),

/***/ "./src/Interpolable/InterpolableString.js":
/*!************************************************!*\
  !*** ./src/Interpolable/InterpolableString.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InterpolableString; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _InterpolableColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InterpolableColor */ "./src/Interpolable/InterpolableColor.js");
/* harmony import */ var _InterpolableNumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InterpolableNumber */ "./src/Interpolable/InterpolableNumber.js");





var types = [{
  re: /(#[a-f\d]{3,6})/ig,
  create: _InterpolableColor__WEBPACK_IMPORTED_MODULE_3__["default"].create,
  parse: function parse(value) {
    return value;
  }
}, {
  re: /(rgba?\([0-9.]*, ?[0-9.]*, ?[0-9.]*(?:, ?[0-9.]*)?\))/ig,
  create: _InterpolableColor__WEBPACK_IMPORTED_MODULE_3__["default"].create,
  parse: function parse(value) {
    return value;
  }
}, {
  re: /([-+]?[\d.]+)/ig,
  create: _InterpolableNumber__WEBPACK_IMPORTED_MODULE_4__["default"].create,
  parse: parseFloat
}];

var sortByIndex = function sortByIndex(left, right) {
  return left.index > right.index ? 1 : -1;
};

var InterpolableString =
/*#__PURE__*/
function () {
  function InterpolableString(parts) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, InterpolableString);

    this.parts = parts;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(InterpolableString, [{
    key: "interpolate",
    value: function interpolate(endInterpolable, tick) {
      var start = this.parts;
      var end = endInterpolable.parts;
      var newParts = [];
      var idx = 0;
      var len = 0;
      var ref = Math.min(start.length, end.length);

      for (; 0 <= ref ? len < ref : len > ref; idx = 0 <= ref ? ++len : --len) {
        if (start[idx].interpolate) {
          newParts.push(start[idx].interpolate(end[idx], tick));
        } else {
          newParts.push(start[idx]);
        }
      }

      return new InterpolableString(newParts);
    }
  }, {
    key: "format",
    value: function format() {
      return this.parts.map(function (val) {
        return val.format ? val.format() : val;
      }).join('');
    }
  }]);

  return InterpolableString;
}();

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(InterpolableString, "create", function (val) {
  var value = "".concat(val);
  var matches = types.reduce(function (matches, _ref) {
    var re = _ref.re,
        create = _ref.create,
        parse = _ref.parse;
    var match;

    while (match = re.exec(value)) {
      matches.push({
        index: match.index,
        length: match[1].length,
        interpolable: create(parse(match[1]))
      });
    }

    return matches;
  }, []).sort(sortByIndex);
  var index = 0;
  var parts = matches.reduce(function (parts, match) {
    if (match.index < index) return parts;
    if (match.index > index) parts.push(value.substring(index, match.index));
    parts.push(match.interpolable);
    index = match.index + match.length;
    return parts;
  }, []);
  if (index < value.length) parts.push(value.substring(index));
  return new InterpolableString(parts);
});


;

/***/ }),

/***/ "./src/Interpolable/index.js":
/*!***********************************!*\
  !*** ./src/Interpolable/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createInterpolable; });
/* harmony import */ var _InterpolableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InterpolableArray */ "./src/Interpolable/InterpolableArray.js");
/* harmony import */ var _InterpolableObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InterpolableObject */ "./src/Interpolable/InterpolableObject.js");
/* harmony import */ var _InterpolableNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InterpolableNumber */ "./src/Interpolable/InterpolableNumber.js");
/* harmony import */ var _InterpolableString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InterpolableString */ "./src/Interpolable/InterpolableString.js");



 // from least to most likely

var classes = [_InterpolableObject__WEBPACK_IMPORTED_MODULE_1__["default"], _InterpolableArray__WEBPACK_IMPORTED_MODULE_0__["default"], _InterpolableString__WEBPACK_IMPORTED_MODULE_3__["default"], _InterpolableNumber__WEBPACK_IMPORTED_MODULE_2__["default"]];
function createInterpolable(value) {
  var idx = classes.length;

  while (idx--) {
    var interpolable = classes[idx].create(value);
    if (interpolable) return interpolable;
  }
}
;

/***/ }),

/***/ "./src/animations.js":
/*!***************************!*\
  !*** ./src/animations.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// holds all currenly animating Animations by id
/* harmony default export */ __webpack_exports__["default"] = (new Map());

/***/ }),

/***/ "./src/debug.js":
/*!**********************!*\
  !*** ./src/debug.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var theSlow = 1;
/* harmony default export */ __webpack_exports__["default"] = ({
  toggle: function toggle() {
    theSlow = theSlow === 1 ? 3 : 1;
    return this;
  },

  get slow() {
    return theSlow;
  },

  set slow(value) {
    theSlow = value;
    return theSlow;
  }

});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_uniqueId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/uniqueId */ "./src/utils/uniqueId.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ "./src/main.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./src/types/index.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animations */ "./src/animations.js");
/* harmony import */ var _timeouts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timeouts */ "./src/timeouts.js");
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timer */ "./src/timer.js");
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./debug */ "./src/debug.js");







var TICK_RATE = 1 / 60 * 1000;

var callTimeouts = function callTimeouts() {
  if (!_timeouts__WEBPACK_IMPORTED_MODULE_4__["default"].size) return;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _timeouts__WEBPACK_IMPORTED_MODULE_4__["default"].keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var id = _step.value;
      var timeout = _timeouts__WEBPACK_IMPORTED_MODULE_4__["default"].get(id);

      if (timeout.start <= _timer__WEBPACK_IMPORTED_MODULE_5__["default"].time) {
        timeout.fn();
        _timeouts__WEBPACK_IMPORTED_MODULE_4__["default"].delete(id);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

var callAnimations = function callAnimations() {
  if (!_animations__WEBPACK_IMPORTED_MODULE_3__["default"].size) return;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = _animations__WEBPACK_IMPORTED_MODULE_3__["default"].keys()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var id = _step2.value;
      var animation = _animations__WEBPACK_IMPORTED_MODULE_3__["default"].get(id);
      var keep = animation.tick(_timer__WEBPACK_IMPORTED_MODULE_5__["default"].time);
      if (!keep) _animations__WEBPACK_IMPORTED_MODULE_3__["default"].delete(id);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Object.assign(_main__WEBPACK_IMPORTED_MODULE_1__["default"], _types__WEBPACK_IMPORTED_MODULE_2__["default"], {
  tick: function tick() {
    var delta = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : TICK_RATE;
    _timer__WEBPACK_IMPORTED_MODULE_5__["default"].time += delta;
    callTimeouts();
    callAnimations();
  },
  setTimeout: function setTimeout(fn, delay) {
    var id = Object(_utils_uniqueId__WEBPACK_IMPORTED_MODULE_0__["default"])();
    return Object(_timeouts__WEBPACK_IMPORTED_MODULE_4__["addTimeout"])(id, fn, delay);
  },
  clearTimeout: function clearTimeout(obj) {
    var id = obj && obj.id !== undefined ? obj.id : obj;
    _timeouts__WEBPACK_IMPORTED_MODULE_4__["default"].has(id) && _timeouts__WEBPACK_IMPORTED_MODULE_4__["default"].delete(id);
  },
  debug: function debug() {
    console.log("fluid: debug ".concat(_debug__WEBPACK_IMPORTED_MODULE_6__["default"].toggle().slow === 3 ? 'enabled' : 'disabled'));
  }
}));

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fluid; });
/* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animation */ "./src/Animation/index.js");
// the main export of fluid, here for a reference by 
// other internal types and functions

function fluid(from, to, config) {
  return Object(_Animation__WEBPACK_IMPORTED_MODULE_0__["default"])(from, to, config);
}
;

/***/ }),

/***/ "./src/properties.js":
/*!***************************!*\
  !*** ./src/properties.js ***!
  \***************************/
/*! exports provided: parse, apply */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return apply; });
/* harmony import */ var _Interpolable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Interpolable */ "./src/Interpolable/index.js");

var parse = function parse(obj) {
  var keys = Object.keys(obj);
  return keys.reduce(function (properties, key) {
    properties[key] = Object(_Interpolable__WEBPACK_IMPORTED_MODULE_0__["default"])(obj[key]);
    return properties;
  }, Object.create(null));
};
var apply = function apply(from, to) {
  for (var key in to) {
    var value = to[key];

    if (key in from) {
      from[key] = value.format ? value.format() : value;
    }
  }
};

/***/ }),

/***/ "./src/timeouts.js":
/*!*************************!*\
  !*** ./src/timeouts.js ***!
  \*************************/
/*! exports provided: default, addTimeout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTimeout", function() { return addTimeout; });
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer */ "./src/timer.js");
 // holds all pending timeouts by id

var timeouts = new Map();
/* harmony default export */ __webpack_exports__["default"] = (timeouts);
var addTimeout = function addTimeout(id, fn, delay) {
  timeouts.set(id, {
    fn: fn,
    start: _timer__WEBPACK_IMPORTED_MODULE_0__["default"].time + delay
  });
  return id;
};

/***/ }),

/***/ "./src/timer.js":
/*!**********************!*\
  !*** ./src/timer.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// holds the time we've ticked starting at zero
// and incrementing by ~16 every tick (60fps)
var theTime = 0;
/* harmony default export */ __webpack_exports__["default"] = ({
  get time() {
    return theTime;
  },

  set time(value) {
    theTime = value;
    return theTime;
  }

});

/***/ }),

/***/ "./src/types/bezier.js":
/*!*****************************!*\
  !*** ./src/types/bezier.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var bez = function bez(t, p0, p1, p2, p3) {
  return Math.pow(1 - t, 3) * p0 + 3 * Math.pow(1 - t, 2) * t * p1 + 3 * (1 - t) * Math.pow(t, 2) * p2 + Math.pow(t, 3) * p3;
};

var Bezier = function Bezier(t, p0, p1, p2, p3) {
  return {
    x: bez(t, p0.x, p1.x, p2.x, p3.x),
    y: bez(t, p0.y, p1.y, p2.y, p3.y)
  };
};

var yForX = function yForX(xTarget, Bs, returnsToSelf) {
  var B = Bs.find(function (aB) {
    return xTarget >= aB(0).x && xTarget <= aB(1).x;
  });
  if (!B) return returnsToSelf ? 0 : 1;
  var xTolerance = 0.0001;
  var lower = 0;
  var upper = 1;
  var percent = (upper + lower) / 2;
  var x = B(percent).x;
  var maxInterations = 100;

  while (Math.abs(xTarget - x) > xTolerance && maxInterations > 0) {
    if (xTarget > x) {
      lower = percent;
    } else {
      upper = percent;
    }

    percent = (upper + lower) / 2;
    x = B(percent).x;
    maxInterations -= 1;
  }

  return B(percent).y;
};

/* harmony default export */ __webpack_exports__["default"] = (Object.assign(function bezier() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var points = options.points;

  var Bs = function () {
    var Bs = [];

    var fn1 = function fn1(pointA, pointB) {
      var B2 = function B2(t) {
        return Bezier(t, pointA, pointA.cp[pointA.cp.length - 1], pointB.cp[0], pointB);
      };

      return Bs.push(B2);
    };

    for (var key in points) {
      var num = parseInt(key, 10);
      if (num >= points.length - 1) break;
      fn1(points[num], points[num + 1]);
    }

    return Bs;
  }();

  return Object.assign(function (t) {
    if (t === 0) return 0;
    if (t === 1) return 1;
    return yForX(t, Bs, this.returnsToSelf);
  }, {
    returnsToSelf: points[points.length - 1].y === 0
  });
}, {
  type: 'bezier'
}));

/***/ }),

/***/ "./src/types/bounce.js":
/*!*****************************!*\
  !*** ./src/types/bounce.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");

var defaults = {
  frequency: 300,
  friction: 200
};
/* harmony default export */ __webpack_exports__["default"] = (Object.assign(function bounce() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var options = Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaults, config);

  var frequency = Math.max(1, options.frequency / 20);
  var friction = Math.pow(20, options.friction / 100);

  var A = function A(t) {
    return Math.pow(friction / 10, -t) * (1 - t);
  };

  return Object.assign(function (t) {
    var b = -3.14 / 2;
    var a = 1;
    var At = A(t);
    var angle = frequency * t * a + b;
    return At * Math.cos(angle);
  }, {
    returnsToSelf: true
  });
}, {
  defaults: defaults,
  type: 'bounce'
}));

/***/ }),

/***/ "./src/types/easeIn.js":
/*!*****************************!*\
  !*** ./src/types/easeIn.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main */ "./src/main.js");

var defaults = {
  friction: 500
};
/* harmony default export */ __webpack_exports__["default"] = (Object.assign(function easeIn() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$friction = _ref.friction,
      friction = _ref$friction === void 0 ? defaults.friction : _ref$friction;

  return _main__WEBPACK_IMPORTED_MODULE_0__["default"].bezier({
    points: [{
      x: 0,
      y: 0,
      cp: [{
        x: 0.92 - friction / 1000,
        y: 0
      }]
    }, {
      x: 1,
      y: 1,
      cp: [{
        x: 1,
        y: 1
      }]
    }]
  });
}, {
  defaults: defaults,
  type: 'easeIn'
}));

/***/ }),

/***/ "./src/types/easeInOut.js":
/*!********************************!*\
  !*** ./src/types/easeInOut.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main */ "./src/main.js");

var defaults = {
  friction: 500
};
/* harmony default export */ __webpack_exports__["default"] = (Object.assign(function easeInOut() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$friction = _ref.friction,
      friction = _ref$friction === void 0 ? defaults.friction : _ref$friction;

  return _main__WEBPACK_IMPORTED_MODULE_0__["default"].bezier({
    points: [{
      x: 0,
      y: 0,
      cp: [{
        x: 0.92 - friction / 1000,
        y: 0
      }]
    }, {
      x: 1,
      y: 1,
      cp: [{
        x: 0.08 + friction / 1000,
        y: 1
      }]
    }]
  });
}, {
  defaults: defaults,
  type: 'easeInOut'
}));

/***/ }),

/***/ "./src/types/easeOut.js":
/*!******************************!*\
  !*** ./src/types/easeOut.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main */ "./src/main.js");

var defaults = {
  friction: 500
};
/* harmony default export */ __webpack_exports__["default"] = (Object.assign(function easeOut() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$friction = _ref.friction,
      friction = _ref$friction === void 0 ? defaults.friction : _ref$friction;

  return _main__WEBPACK_IMPORTED_MODULE_0__["default"].bezier({
    points: [{
      x: 0,
      y: 0,
      cp: [{
        x: 0,
        y: 0
      }]
    }, {
      x: 1,
      y: 1,
      cp: [{
        x: 0.08 + friction / 1000,
        y: 1
      }]
    }]
  });
}, {
  defaults: defaults,
  type: 'easeOut'
}));

/***/ }),

/***/ "./src/types/forceWithGravity.js":
/*!***************************************!*\
  !*** ./src/types/forceWithGravity.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main */ "./src/main.js");


var defaults = {
  bounciness: 400,
  elasticity: 200
};
/* harmony default export */ __webpack_exports__["default"] = (Object.assign(function forceWithGravity() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _main__WEBPACK_IMPORTED_MODULE_1__["default"].gravity(Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaults, config, {
    returnsToSelf: true
  }));
}, {
  defaults: defaults,
  type: 'forceWithGravity'
}));

/***/ }),

/***/ "./src/types/gravity.js":
/*!******************************!*\
  !*** ./src/types/gravity.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");

var defaults = {
  bounciness: 400,
  elasticity: 200
};
/* harmony default export */ __webpack_exports__["default"] = (Object.assign(function gravity() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var options = Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaults, config);

  var bounciness = Math.min(options.bounciness / 1250, 0.8);
  var elasticity = options.elasticity / 1000;
  var gravity = 100;
  var curves = [];

  var L = function () {
    var b = Math.sqrt(2 / gravity);
    var curve = {
      a: -b,
      b: b,
      H: 1
    };

    if (options.returnsToSelf) {
      curve.a = 0;
      curve.b = curve.b * 2;
    }

    while (curve.H > 0.001) {
      var _L = curve.b - curve.a;

      curve.a = curve.b;
      curve.b = curve.b + _L * bounciness;
      curve.H = curve.H * bounciness * bounciness;
    }

    return curve.b;
  }();

  var getPointInCurve = function getPointInCurve(a, b, H, t) {
    L = b - a;
    var t2 = 2 / L * t - 1 - a * 2 / L;
    var c = t2 * t2 * H - H + 1;

    if (options.returnsToSelf) {
      c = 1 - c;
    }

    return c;
  };

  var b = Math.sqrt(2 / (gravity * L * L));
  var curve = {
    a: -b,
    b: b,
    H: 1
  };

  if (options.returnsToSelf) {
    curve.a = 0;
    curve.b = curve.b * 2;
  }

  curves.push(curve);
  var L2 = L;

  while (curve.b < 1 && curve.H > 0.001) {
    L2 = curve.b - curve.a;
    curve = {
      a: curve.b,
      b: curve.b + L2 * bounciness,
      H: curve.H * elasticity
    };
    curves.push(curve);
  }

  return Object.assign(function gravity(tick) {
    var idx = 0;
    var curve = curves[idx];

    while (!(tick >= curve.a && tick <= curve.b)) {
      idx += 1;
      curve = curves[idx];
      if (!curve) break;
    }

    return !curve ? options.returnsToSelf ? 0 : 1 : getPointInCurve(curve.a, curve.b, curve.H, tick);
  }, {
    returnsToSelf: options.returnsToSelf
  });
}, {
  defaults: defaults,
  type: 'gravity'
}));

/***/ }),

/***/ "./src/types/index.js":
/*!****************************!*\
  !*** ./src/types/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bezier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bezier */ "./src/types/bezier.js");
/* harmony import */ var _bounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bounce */ "./src/types/bounce.js");
/* harmony import */ var _easeIn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./easeIn */ "./src/types/easeIn.js");
/* harmony import */ var _easeInOut__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./easeInOut */ "./src/types/easeInOut.js");
/* harmony import */ var _easeOut__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./easeOut */ "./src/types/easeOut.js");
/* harmony import */ var _forceWithGravity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forceWithGravity */ "./src/types/forceWithGravity.js");
/* harmony import */ var _gravity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gravity */ "./src/types/gravity.js");
/* harmony import */ var _spring__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./spring */ "./src/types/spring.js");
/* harmony import */ var _linear__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./linear */ "./src/types/linear.js");









/* harmony default export */ __webpack_exports__["default"] = ({
  bezier: _bezier__WEBPACK_IMPORTED_MODULE_0__["default"],
  bounce: _bounce__WEBPACK_IMPORTED_MODULE_1__["default"],
  easeIn: _easeIn__WEBPACK_IMPORTED_MODULE_2__["default"],
  easeInOut: _easeInOut__WEBPACK_IMPORTED_MODULE_3__["default"],
  easeOut: _easeOut__WEBPACK_IMPORTED_MODULE_4__["default"],
  forceWithGravity: _forceWithGravity__WEBPACK_IMPORTED_MODULE_5__["default"],
  gravity: _gravity__WEBPACK_IMPORTED_MODULE_6__["default"],
  spring: _spring__WEBPACK_IMPORTED_MODULE_7__["default"],
  linear: _linear__WEBPACK_IMPORTED_MODULE_8__["default"]
});

/***/ }),

/***/ "./src/types/linear.js":
/*!*****************************!*\
  !*** ./src/types/linear.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (Object.assign(function linear() {
  return function (x) {
    return x;
  };
}, {
  type: 'linear'
}));

/***/ }),

/***/ "./src/types/spring.js":
/*!*****************************!*\
  !*** ./src/types/spring.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");

var defaults = {
  frequency: 300,
  friction: 200,
  anticipationSize: 0,
  anticipationStrength: 0
};
/* harmony default export */ __webpack_exports__["default"] = (Object.assign(function spring() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var options = Object(_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaults, config);

  var frequency = Math.max(1, options.frequency / 20);
  var friction = Math.pow(20, options.friction / 100);
  var s = options.anticipationSize / 1000;

  var A1 = function A1(t) {
    var M = 0.8;
    var x0 = s / (1 - s);
    var x1 = 0;
    var b = (x0 - M * x1) / (x0 - x1);
    var a = (M - b) / x0;
    return a * t * options.anticipationStrength / 100 + b;
  };

  var A2 = function A2(t) {
    return Math.pow(friction / 10, -t) * (1 - t);
  };

  return function (t) {
    var frictionT = t / (1 - s) - s / (1 - s);
    var A;
    var a;
    var b;

    if (t < s) {
      var yS = s / (1 - s) - s / (1 - s);
      var y0 = 0 / (1 - s) - s / (1 - s);
      b = Math.acos(1 / A1(yS));
      a = (Math.acos(1 / A1(y0)) - b) / (frequency * -s);
      A = A1;
    } else {
      A = A2;
      b = 0;
      a = 1;
    }

    var At = A(frictionT);
    var angle = frequency * (t - s) * a + b;
    return 1 - At * Math.cos(angle);
  };
}, {
  defaults: defaults,
  type: 'spring'
}));

/***/ }),

/***/ "./src/utils/isDefined.js":
/*!********************************!*\
  !*** ./src/utils/isDefined.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (val) {
  return val !== undefined;
});

/***/ }),

/***/ "./src/utils/roundFloat.js":
/*!*********************************!*\
  !*** ./src/utils/roundFloat.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return roundFloat; });
function roundFloat(x, decimal) {
  var dec = Math.pow(10, decimal);
  return Math.round(x * dec) / dec;
}
;

/***/ }),

/***/ "./src/utils/uniqueId.js":
/*!*******************************!*\
  !*** ./src/utils/uniqueId.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var id = -1;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return id += 1;
});

/***/ }),

/***/ "signal-js":
/*!****************************!*\
  !*** external "signal-js" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_signal_js__;

/***/ })

/******/ });
});
//# sourceMappingURL=fluid.js.map