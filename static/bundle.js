webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/mark.kimball/Documents/sites/frontend-boilerplate/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/mark.kimball/Documents/sites/frontend-boilerplate/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	var _reactRouter = __webpack_require__(1);

	var _reactRouterRedux = __webpack_require__(90);

	var _reactRedux = __webpack_require__(95);

	var _reactDom = __webpack_require__(118);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _react = __webpack_require__(23);

	var _react2 = _interopRequireDefault(_react);

	var _App = __webpack_require__(248);

	var _App2 = _interopRequireDefault(_App);

	var _store = __webpack_require__(369);

	var _store2 = _interopRequireDefault(_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var store = (0, _store2.default)();
	var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, store);

	_reactDom2.default.render(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2.default.createElement(
	    _reactRouter.Router,
	    { history: history },
	    _react2.default.createElement(_reactRouter.Route, { path: '/', component: _App2.default })
	  )
	), document.getElementById('root'));

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/mark.kimball/Documents/sites/frontend-boilerplate/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/mark.kimball/Documents/sites/frontend-boilerplate/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/mark.kimball/Documents/sites/frontend-boilerplate/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(249);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(275);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(276);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(280);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(323);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(23);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(102);

	var _reactRedux = __webpack_require__(95);

	var _Header = __webpack_require__(331);

	var _Header2 = _interopRequireDefault(_Header);

	var _MainSection = __webpack_require__(339);

	var _MainSection2 = _interopRequireDefault(_MainSection);

	var _todos = __webpack_require__(354);

	var TodoActions = _interopRequireWildcard(_todos);

	var _style = __webpack_require__(367);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var App = function (_Component) {
	  (0, _inherits3.default)(App, _Component);

	  function App() {
	    (0, _classCallCheck3.default)(this, App);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(App).apply(this, arguments));
	  }

	  (0, _createClass3.default)(App, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var todos = _props.todos;
	      var actions = _props.actions;
	      var children = _props.children;

	      return _react2.default.createElement(
	        'div',
	        { className: _style2.default.normal },
	        _react2.default.createElement(_Header2.default, { addTodo: actions.addTodo }),
	        _react2.default.createElement(_MainSection2.default, { todos: todos, actions: actions }),
	        children
	      );
	    }
	  }]);
	  return App;
	}(_react.Component);

	function mapStateToProps(state) {
	  return {
	    todos: state.todos
	  };
	}

	function mapDispatchToProps(dispatch) {
	  return {
	    actions: (0, _redux.bindActionCreators)(TodoActions, dispatch)
	  };
	}

	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/mark.kimball/Documents/sites/frontend-boilerplate/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(250), __esModule: true };

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(251);
	module.exports = __webpack_require__(262).Object.getPrototypeOf;

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(252)
	  , $getPrototypeOf = __webpack_require__(254);

	__webpack_require__(260)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(253);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 253 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(255)
	  , toObject    = __webpack_require__(252)
	  , IE_PROTO    = __webpack_require__(256)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 255 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(257)('keys')
	  , uid    = __webpack_require__(259);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(258)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 258 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 259 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(261)
	  , core    = __webpack_require__(262)
	  , fails   = __webpack_require__(271);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(258)
	  , core      = __webpack_require__(262)
	  , ctx       = __webpack_require__(263)
	  , hide      = __webpack_require__(265)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 262 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.2.2'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(264);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 264 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(266)
	  , createDesc = __webpack_require__(274);
	module.exports = __webpack_require__(270) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(267)
	  , IE8_DOM_DEFINE = __webpack_require__(269)
	  , toPrimitive    = __webpack_require__(273)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(270) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(268);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 268 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(270) && !__webpack_require__(271)(function(){
	  return Object.defineProperty(__webpack_require__(272)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(271)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 271 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(268)
	  , document = __webpack_require__(258).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(268);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 274 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 275 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(277);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(278), __esModule: true };

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(279);
	var $Object = __webpack_require__(262).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(261);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(270), 'Object', {defineProperty: __webpack_require__(266).f});

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _typeof2 = __webpack_require__(281);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
	};

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(282);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(310);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(283), __esModule: true };

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(284);
	__webpack_require__(306);
	module.exports = __webpack_require__(305)('iterator');

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(285)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(287)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(286)
	  , defined   = __webpack_require__(253);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 286 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(288)
	  , $export        = __webpack_require__(261)
	  , redefine       = __webpack_require__(289)
	  , hide           = __webpack_require__(265)
	  , has            = __webpack_require__(255)
	  , Iterators      = __webpack_require__(290)
	  , $iterCreate    = __webpack_require__(291)
	  , setToStringTag = __webpack_require__(304)
	  , getPrototypeOf = __webpack_require__(254)
	  , ITERATOR       = __webpack_require__(305)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 288 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(265);

/***/ },
/* 290 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(292)
	  , descriptor     = __webpack_require__(274)
	  , setToStringTag = __webpack_require__(304)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(265)(IteratorPrototype, __webpack_require__(305)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(267)
	  , dPs         = __webpack_require__(293)
	  , enumBugKeys = __webpack_require__(302)
	  , IE_PROTO    = __webpack_require__(256)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(272)('iframe')
	    , i      = enumBugKeys.length
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(303).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(266)
	  , anObject = __webpack_require__(267)
	  , getKeys  = __webpack_require__(294);

	module.exports = __webpack_require__(270) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(295)
	  , enumBugKeys = __webpack_require__(302);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(255)
	  , toIObject    = __webpack_require__(296)
	  , arrayIndexOf = __webpack_require__(299)(false)
	  , IE_PROTO     = __webpack_require__(256)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(297)
	  , defined = __webpack_require__(253);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(298);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 298 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(296)
	  , toLength  = __webpack_require__(300)
	  , toIndex   = __webpack_require__(301);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(286)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(286)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 302 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(258).document && document.documentElement;

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(266).f
	  , has = __webpack_require__(255)
	  , TAG = __webpack_require__(305)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(257)('wks')
	  , uid        = __webpack_require__(259)
	  , Symbol     = __webpack_require__(258).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(307);
	var global        = __webpack_require__(258)
	  , hide          = __webpack_require__(265)
	  , Iterators     = __webpack_require__(290)
	  , TO_STRING_TAG = __webpack_require__(305)('toStringTag');

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(308)
	  , step             = __webpack_require__(309)
	  , Iterators        = __webpack_require__(290)
	  , toIObject        = __webpack_require__(296);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(287)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 308 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 309 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(311), __esModule: true };

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(312);
	__webpack_require__(322);
	module.exports = __webpack_require__(262).Symbol;

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(258)
	  , core           = __webpack_require__(262)
	  , has            = __webpack_require__(255)
	  , DESCRIPTORS    = __webpack_require__(270)
	  , $export        = __webpack_require__(261)
	  , redefine       = __webpack_require__(289)
	  , META           = __webpack_require__(313).KEY
	  , $fails         = __webpack_require__(271)
	  , shared         = __webpack_require__(257)
	  , setToStringTag = __webpack_require__(304)
	  , uid            = __webpack_require__(259)
	  , wks            = __webpack_require__(305)
	  , keyOf          = __webpack_require__(314)
	  , enumKeys       = __webpack_require__(315)
	  , isArray        = __webpack_require__(318)
	  , anObject       = __webpack_require__(267)
	  , toIObject      = __webpack_require__(296)
	  , toPrimitive    = __webpack_require__(273)
	  , createDesc     = __webpack_require__(274)
	  , _create        = __webpack_require__(292)
	  , gOPNExt        = __webpack_require__(319)
	  , $GOPD          = __webpack_require__(321)
	  , $DP            = __webpack_require__(266)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = gOPD(it = toIObject(it), key = toPrimitive(key, true));
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , replacer, $replacer;
	  while(arguments.length > i)args.push(arguments[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var BUGGY_JSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(320).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(317).f  = $propertyIsEnumerable
	  __webpack_require__(316).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(288)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	for(var symbols = (
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; ){
	  var key     = symbols[i++]
	    , Wrapper = core.Symbol
	    , sym     = wks(key);
	  if(!(key in Wrapper))dP(Wrapper, key, {value: USE_NATIVE ? sym : wrap(sym)});
	};

	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	if(!QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild)setter = true;

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || BUGGY_JSON), 'JSON', {stringify: $stringify});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(265)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(259)('meta')
	  , isObject = __webpack_require__(268)
	  , has      = __webpack_require__(255)
	  , setDesc  = __webpack_require__(266).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(271)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(294)
	  , toIObject = __webpack_require__(296);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(294)
	  , gOPS    = __webpack_require__(316)
	  , pIE     = __webpack_require__(317);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 316 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 317 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(298);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(296)
	  , gOPN      = __webpack_require__(320).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(295)
	  , hiddenKeys = __webpack_require__(302).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(317)
	  , createDesc     = __webpack_require__(274)
	  , toIObject      = __webpack_require__(296)
	  , toPrimitive    = __webpack_require__(273)
	  , has            = __webpack_require__(255)
	  , IE8_DOM_DEFINE = __webpack_require__(269)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(270) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 322 */
/***/ function(module, exports) {

	

/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _setPrototypeOf = __webpack_require__(324);

	var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

	var _create = __webpack_require__(328);

	var _create2 = _interopRequireDefault(_create);

	var _typeof2 = __webpack_require__(281);

	var _typeof3 = _interopRequireDefault(_typeof2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
	  }

	  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
	};

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(325), __esModule: true };

/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(326);
	module.exports = __webpack_require__(262).Object.setPrototypeOf;

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(261);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(327).set});

/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(268)
	  , anObject = __webpack_require__(267);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(263)(Function.call, __webpack_require__(321).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(329), __esModule: true };

/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(330);
	var $Object = __webpack_require__(262).Object;
	module.exports = function create(P, D){
	  return $Object.create(P, D);
	};

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(261)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(292)});

/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/mark.kimball/Documents/sites/frontend-boilerplate/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/mark.kimball/Documents/sites/frontend-boilerplate/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(249);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(275);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(276);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(280);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(323);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(23);

	var _react2 = _interopRequireDefault(_react);

	var _TodoTextInput = __webpack_require__(332);

	var _TodoTextInput2 = _interopRequireDefault(_TodoTextInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Header = function (_Component) {
	  (0, _inherits3.default)(Header, _Component);

	  function Header() {
	    (0, _classCallCheck3.default)(this, Header);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Header).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Header, [{
	    key: 'handleSave',
	    value: function handleSave(text) {
	      if (text.length) {
	        this.props.addTodo(text);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'header',
	        null,
	        _react2.default.createElement(
	          'h1',
	          null,
	          'Todos'
	        ),
	        _react2.default.createElement(_TodoTextInput2.default, {
	          newTodo: true,
	          onSave: this.handleSave.bind(this),
	          placeholder: 'What needs to be done?' })
	      );
	    }
	  }]);
	  return Header;
	}(_react.Component);

	exports.default = Header;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/mark.kimball/Documents/sites/frontend-boilerplate/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/mark.kimball/Documents/sites/frontend-boilerplate/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/mark.kimball/Documents/sites/frontend-boilerplate/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(333);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _getPrototypeOf = __webpack_require__(249);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(275);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(276);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(280);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(323);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(23);

	var _react2 = _interopRequireDefault(_react);

	var _classnames2 = __webpack_require__(334);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _style = __webpack_require__(335);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TodoTextInput = function (_Component) {
	  (0, _inherits3.default)(TodoTextInput, _Component);

	  function TodoTextInput(props, context) {
	    (0, _classCallCheck3.default)(this, TodoTextInput);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TodoTextInput).call(this, props, context));

	    _this.state = {
	      text: _this.props.text || ''
	    };
	    return _this;
	  }

	  (0, _createClass3.default)(TodoTextInput, [{
	    key: 'handleSubmit',
	    value: function handleSubmit(e) {
	      var text = e.target.value.trim();
	      if (e.which === 13) {
	        this.props.onSave(text);
	        if (this.props.newTodo) {
	          this.setState({ text: '' });
	        }
	      }
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(e) {
	      this.setState({ text: e.target.value });
	    }
	  }, {
	    key: 'handleBlur',
	    value: function handleBlur(e) {
	      var text = e.target.value.trim();
	      if (!this.props.newTodo) {
	        this.props.onSave(text);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _classnames;

	      var classes = (0, _classnames3.default)((_classnames = {}, (0, _defineProperty3.default)(_classnames, _style2.default.edit, this.props.editing), (0, _defineProperty3.default)(_classnames, _style2.default.new, this.props.newTodo), _classnames), _style2.default.normal);

	      return _react2.default.createElement('input', { className: classes,
	        type: 'text',
	        autoFocus: 'true',
	        placeholder: this.props.placeholder,
	        value: this.state.text,
	        onBlur: this.handleBlur.bind(this),
	        onChange: this.handleChange.bind(this),
	        onKeyDown: this.handleSubmit.bind(this) });
	    }
	  }]);
	  return TodoTextInput;
	}(_react.Component);

	exports.default = TodoTextInput;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/mark.kimball/Documents/sites/frontend-boilerplate/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _defineProperty = __webpack_require__(277);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (obj, key, value) {
	  if (key in obj) {
	    (0, _defineProperty2.default)(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	};

/***/ },
/* 334 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 335 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(336);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(338)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(337)();
	// imports


	// module
	exports.push([module.id, "\n.style__new___1MSku,\n.style__edit___21OYt {\n  position: relative;\n  margin: 0;\n  width: 100%;\n  font-size: 24px;\n  font-family: inherit;\n  font-weight: inherit;\n  line-height: 1.4em;\n  border: 0;\n  outline: none;\n  color: inherit;\n  padding: 6px;\n  border: 1px solid #999;\n  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n  box-sizing: border-box;\n  font-smoothing: antialiased;\n}\n\n.style__new___1MSku {\n  padding: 16px 16px 16px 60px;\n  border: none;\n  background: rgba(0, 0, 0, 0.003);\n  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);\n}", "", {"version":3,"sources":["/./components/TodoTextInput/style.css"],"names":[],"mappings":";AACA;;EAEE,mBAAmB;EACnB,UAAU;EACV,YAAY;EACZ,gBAAgB;EAChB,qBAAqB;EACrB,qBAAqB;EACrB,mBAAmB;EACnB,UAAU;EACV,cAAc;EACd,eAAe;EACf,aAAa;EACb,uBAAuB;EACvB,kDAAkD;EAClD,uBAAuB;EACvB,4BAA4B;CAC7B;;AAED;EACE,6BAA6B;EAC7B,aAAa;EACb,iCAAiC;EACjC,8CAA8C;CAC/C","file":"style.css","sourcesContent":["\n.new,\n.edit {\n  position: relative;\n  margin: 0;\n  width: 100%;\n  font-size: 24px;\n  font-family: inherit;\n  font-weight: inherit;\n  line-height: 1.4em;\n  border: 0;\n  outline: none;\n  color: inherit;\n  padding: 6px;\n  border: 1px solid #999;\n  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n  box-sizing: border-box;\n  font-smoothing: antialiased;\n}\n\n.new {\n  padding: 16px 16px 16px 60px;\n  border: none;\n  background: rgba(0, 0, 0, 0.003);\n  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);\n}"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"new": "style__new___1MSku",
		"edit": "style__edit___21OYt"
	};

/***/ },
/* 337 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
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


/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/mark.kimball/Documents/sites/frontend-boilerplate/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/mark.kimball/Documents/sites/frontend-boilerplate/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(340);

	var _extends3 = _interopRequireDefault(_extends2);

	var _getPrototypeOf = __webpack_require__(249);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(275);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(276);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(280);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(323);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _defineProperty2 = __webpack_require__(333);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _TODO_FILTERS;

	var _react = __webpack_require__(23);

	var _react2 = _interopRequireDefault(_react);

	var _TodoItem = __webpack_require__(345);

	var _TodoItem2 = _interopRequireDefault(_TodoItem);

	var _Footer = __webpack_require__(348);

	var _Footer2 = _interopRequireDefault(_Footer);

	var _filters = __webpack_require__(349);

	var _style = __webpack_require__(352);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TODO_FILTERS = (_TODO_FILTERS = {}, (0, _defineProperty3.default)(_TODO_FILTERS, _filters.SHOW_ALL, function () {
	  return true;
	}), (0, _defineProperty3.default)(_TODO_FILTERS, _filters.SHOW_ACTIVE, function (todo) {
	  return !todo.completed;
	}), (0, _defineProperty3.default)(_TODO_FILTERS, _filters.SHOW_COMPLETED, function (todo) {
	  return todo.completed;
	}), _TODO_FILTERS);

	var MainSection = function (_Component) {
	  (0, _inherits3.default)(MainSection, _Component);

	  function MainSection(props, context) {
	    (0, _classCallCheck3.default)(this, MainSection);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(MainSection).call(this, props, context));

	    _this.state = { filter: _filters.SHOW_ALL };
	    return _this;
	  }

	  (0, _createClass3.default)(MainSection, [{
	    key: 'handleClearCompleted',
	    value: function handleClearCompleted() {
	      var atLeastOneCompleted = this.props.todos.some(function (todo) {
	        return todo.completed;
	      });
	      if (atLeastOneCompleted) {
	        this.props.actions.clearCompleted();
	      }
	    }
	  }, {
	    key: 'handleShow',
	    value: function handleShow(filter) {
	      this.setState({ filter: filter });
	    }
	  }, {
	    key: 'renderToggleAll',
	    value: function renderToggleAll(completedCount) {
	      var _props = this.props;
	      var todos = _props.todos;
	      var actions = _props.actions;

	      if (todos.length > 0) {
	        return _react2.default.createElement('input', {
	          className: _style2.default.toggleAll,
	          type: 'checkbox',
	          checked: completedCount === todos.length,
	          onChange: actions.completeAll });
	      }
	    }
	  }, {
	    key: 'renderFooter',
	    value: function renderFooter(completedCount) {
	      var todos = this.props.todos;
	      var filter = this.state.filter;

	      var activeCount = todos.length - completedCount;

	      if (todos.length) {
	        return _react2.default.createElement(_Footer2.default, { completedCount: completedCount,
	          activeCount: activeCount,
	          filter: filter,
	          onClearCompleted: this.handleClearCompleted.bind(this),
	          onShow: this.handleShow.bind(this) });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var todos = _props2.todos;
	      var actions = _props2.actions;
	      var filter = this.state.filter;


	      var filteredTodos = todos.filter(TODO_FILTERS[filter]);
	      var completedCount = todos.reduce(function (count, todo) {
	        return todo.completed ? count + 1 : count;
	      }, 0);

	      return _react2.default.createElement(
	        'section',
	        { className: _style2.default.main },
	        this.renderToggleAll(completedCount),
	        _react2.default.createElement(
	          'ul',
	          { className: _style2.default.normal },
	          filteredTodos.map(function (todo) {
	            return _react2.default.createElement(_TodoItem2.default, (0, _extends3.default)({ key: todo.id, todo: todo }, actions));
	          })
	        ),
	        this.renderFooter(completedCount)
	      );
	    }
	  }]);
	  return MainSection;
	}(_react.Component);

	exports.default = MainSection;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/mark.kimball/Documents/sites/frontend-boilerplate/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _assign = __webpack_require__(341);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _assign2.default || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(342), __esModule: true };

/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(343);
	module.exports = __webpack_require__(262).Object.assign;

/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(261);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(344)});

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(294)
	  , gOPS     = __webpack_require__(316)
	  , pIE      = __webpack_require__(317)
	  , toObject = __webpack_require__(252)
	  , IObject  = __webpack_require__(297)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(271)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/mark.kimball/Documents/sites/frontend-boilerplate/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/mark.kimball/Documents/sites/frontend-boilerplate/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _defineProperty2 = __webpack_require__(333);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _getPrototypeOf = __webpack_require__(249);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(275);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(276);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(280);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(323);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _react = __webpack_require__(23);

	var _react2 = _interopRequireDefault(_react);

	var _TodoTextInput = __webpack_require__(332);

	var _TodoTextInput2 = _interopRequireDefault(_TodoTextInput);

	var _classnames2 = __webpack_require__(334);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _style = __webpack_require__(346);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TodoItem = function (_Component) {
	  (0, _inherits3.default)(TodoItem, _Component);

	  function TodoItem(props, context) {
	    (0, _classCallCheck3.default)(this, TodoItem);

	    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TodoItem).call(this, props, context));

	    _this.state = {
	      editing: false
	    };
	    return _this;
	  }

	  (0, _createClass3.default)(TodoItem, [{
	    key: 'handleDoubleClick',
	    value: function handleDoubleClick() {
	      this.setState({ editing: true });
	    }
	  }, {
	    key: 'handleSave',
	    value: function handleSave(id, text) {
	      if (text.length === 0) {
	        this.props.deleteTodo(id);
	      } else {
	        this.props.editTodo({ id: id, text: text });
	      }
	      this.setState({ editing: false });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this,
	          _classnames;

	      var _props = this.props;
	      var todo = _props.todo;
	      var completeTodo = _props.completeTodo;
	      var deleteTodo = _props.deleteTodo;


	      var element = void 0;
	      if (this.state.editing) {
	        element = _react2.default.createElement(_TodoTextInput2.default, { text: todo.text,
	          editing: this.state.editing,
	          onSave: function onSave(text) {
	            return _this2.handleSave(todo.id, text);
	          } });
	      } else {
	        element = _react2.default.createElement(
	          'div',
	          { className: _style2.default.view },
	          _react2.default.createElement('input', { className: _style2.default.toggle,
	            type: 'checkbox',
	            checked: todo.completed,
	            onChange: function onChange() {
	              return completeTodo(todo.id);
	            } }),
	          _react2.default.createElement(
	            'label',
	            { onDoubleClick: this.handleDoubleClick.bind(this) },
	            todo.text
	          ),
	          _react2.default.createElement('button', { className: _style2.default.destroy, onClick: function onClick() {
	              return deleteTodo(todo.id);
	            } })
	        );
	      }

	      // TODO: compose
	      var classes = (0, _classnames3.default)((_classnames = {}, (0, _defineProperty3.default)(_classnames, _style2.default.completed, todo.completed), (0, _defineProperty3.default)(_classnames, _style2.default.editing, this.state.editing), (0, _defineProperty3.default)(_classnames, _style2.default.normal, !this.state.editing), _classnames));

	      return _react2.default.createElement(
	        'li',
	        { className: classes },
	        element
	      );
	    }
	  }]);
	  return TodoItem;
	}(_react.Component);

	exports.default = TodoItem;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/mark.kimball/Documents/sites/frontend-boilerplate/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(347);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(338)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(337)();
	// imports


	// module
	exports.push([module.id, "\n.style__normal___1Q51z .style__toggle___1qmDW {\n  text-align: center;\n  width: 40px;\n  /* auto, since non-WebKit browsers doesn't support input styling */\n  height: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  border: none; /* Mobile Safari */\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n\n.style__normal___1Q51z .style__toggle___1qmDW:after {\n  content: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#ededed\" stroke-width=\"3\"/></svg>');\n}\n\n.style__normal___1Q51z .style__toggle___1qmDW:checked:after {\n  content: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#bddad5\" stroke-width=\"3\"/><path fill=\"#5dc2af\" d=\"M72 25L42 71 27 56l-4 4 20 20 34-52z\"/></svg>');\n}\n\n.style__normal___1Q51z label {\n  white-space: pre-line;\n  word-break: break-all;\n  padding: 15px 60px 15px 15px;\n  margin-left: 45px;\n  display: block;\n  line-height: 1.2;\n  -webkit-transition: color 0.4s;\n  transition: color 0.4s;\n}\n\n.style__normal___1Q51z .style__destroy___2IRed {\n  display: none;\n  position: absolute;\n  top: 0;\n  right: 10px;\n  bottom: 0;\n  width: 40px;\n  height: 40px;\n  margin: auto 0;\n  font-size: 30px;\n  color: #cc9a9a;\n  margin-bottom: 11px;\n  -webkit-transition: color 0.2s ease-out;\n  transition: color 0.2s ease-out;\n}\n\n.style__normal___1Q51z .style__destroy___2IRed:hover {\n  color: #af5b5e;\n}\n\n.style__normal___1Q51z .style__destroy___2IRed:after {\n  content: '\\D7';\n}\n\n.style__normal___1Q51z:hover .style__destroy___2IRed {\n  display: block;\n}\n\n.style__normal___1Q51z .style__edit___2HdII {\n  display: none;\n}\n\n.style__editing___2EWh0 {\n  border-bottom: none;\n  padding: 0;\n}\n\n.style__editing___2EWh0:last-child {\n  margin-bottom: -1px;\n}\n\n.style__editing___2EWh0 .style__edit___2HdII {\n  display: block;\n  width: 506px;\n  padding: 13px 17px 12px 17px;\n  margin: 0 0 0 43px;\n}\n\n.style__editing___2EWh0 .style__view___2XJXA {\n  display: none;\n}\n\n.style__completed___Cokm5 label {\n  color: #d9d9d9;\n  text-decoration: line-through;\n}\n\n/*\n  Hack to remove background from Mobile Safari.\n  Can't use it globally since it destroys checkboxes in Firefox\n*/\n@media screen and (-webkit-min-device-pixel-ratio:0) {\n  .style__normal___1Q51z .style__toggle___1qmDW {\n    background: none;\n  }\n\n  .style__normal___1Q51z .style__toggle___1qmDW {\n    height: 40px;\n  }\n}", "", {"version":3,"sources":["/./components/TodoItem/style.css"],"names":[],"mappings":";AACA;EACE,mBAAmB;EACnB,YAAY;EACZ,mEAAmE;EACnE,aAAa;EACb,mBAAmB;EACnB,OAAO;EACP,UAAU;EACV,eAAe;EACf,aAAa,CAAC,mBAAmB;EACjC,yBAAiB;KAAjB,sBAAiB;UAAjB,iBAAiB;CAClB;;AAED;EACE,sNAAsN;CACvN;;AAED;EACE,qRAAqR;CACtR;;AAED;EACE,sBAAsB;EACtB,sBAAsB;EACtB,6BAA6B;EAC7B,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,+BAAuB;EAAvB,uBAAuB;CACxB;;AAED;EACE,cAAc;EACd,mBAAmB;EACnB,OAAO;EACP,YAAY;EACZ,UAAU;EACV,YAAY;EACZ,aAAa;EACb,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,oBAAoB;EACpB,wCAAgC;EAAhC,gCAAgC;CACjC;;AAED;EACE,eAAe;CAChB;;AAED;EACE,eAAa;CACd;;AAED;EACE,eAAe;CAChB;;AAED;EACE,cAAc;CACf;;AAED;EACE,oBAAoB;EACpB,WAAW;CAEZ;;AAED;EACE,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;CACpB;;AAED;EACE,cAAc;CACf;;AAED;EACE,eAAe;EACf,8BAA8B;CAC/B;;AAED;;;EAGE;AACF;EACE;IACE,iBAAiB;GAClB;;EAED;IACE,aAAa;GACd;CACF","file":"style.css","sourcesContent":["\n.normal .toggle {\n  text-align: center;\n  width: 40px;\n  /* auto, since non-WebKit browsers doesn't support input styling */\n  height: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  border: none; /* Mobile Safari */\n  appearance: none;\n}\n\n.normal .toggle:after {\n  content: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#ededed\" stroke-width=\"3\"/></svg>');\n}\n\n.normal .toggle:checked:after {\n  content: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#bddad5\" stroke-width=\"3\"/><path fill=\"#5dc2af\" d=\"M72 25L42 71 27 56l-4 4 20 20 34-52z\"/></svg>');\n}\n\n.normal label {\n  white-space: pre-line;\n  word-break: break-all;\n  padding: 15px 60px 15px 15px;\n  margin-left: 45px;\n  display: block;\n  line-height: 1.2;\n  transition: color 0.4s;\n}\n\n.normal .destroy {\n  display: none;\n  position: absolute;\n  top: 0;\n  right: 10px;\n  bottom: 0;\n  width: 40px;\n  height: 40px;\n  margin: auto 0;\n  font-size: 30px;\n  color: #cc9a9a;\n  margin-bottom: 11px;\n  transition: color 0.2s ease-out;\n}\n\n.normal .destroy:hover {\n  color: #af5b5e;\n}\n\n.normal .destroy:after {\n  content: '×';\n}\n\n.normal:hover .destroy {\n  display: block;\n}\n\n.normal .edit {\n  display: none;\n}\n\n.editing {\n  border-bottom: none;\n  padding: 0;\n  composes: normal;\n}\n\n.editing:last-child {\n  margin-bottom: -1px;\n}\n\n.editing .edit {\n  display: block;\n  width: 506px;\n  padding: 13px 17px 12px 17px;\n  margin: 0 0 0 43px;\n}\n\n.editing .view {\n  display: none;\n}\n\n.completed label {\n  color: #d9d9d9;\n  text-decoration: line-through;\n}\n\n/*\n  Hack to remove background from Mobile Safari.\n  Can't use it globally since it destroys checkboxes in Firefox\n*/\n@media screen and (-webkit-min-device-pixel-ratio:0) {\n  .normal .toggle {\n    background: none;\n  }\n\n  .normal .toggle {\n    height: 40px;\n  }\n}"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"normal": "style__normal___1Q51z",
		"toggle": "style__toggle___1qmDW",
		"destroy": "style__destroy___2IRed",
		"edit": "style__edit___2HdII",
		"editing": "style__editing___2EWh0 style__normal___1Q51z",
		"view": "style__view___2XJXA",
		"completed": "style__completed___Cokm5"
	};

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/mark.kimball/Documents/sites/frontend-boilerplate/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/mark.kimball/Documents/sites/frontend-boilerplate/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _getPrototypeOf = __webpack_require__(249);

	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

	var _classCallCheck2 = __webpack_require__(275);

	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

	var _createClass2 = __webpack_require__(276);

	var _createClass3 = _interopRequireDefault(_createClass2);

	var _possibleConstructorReturn2 = __webpack_require__(280);

	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

	var _inherits2 = __webpack_require__(323);

	var _inherits3 = _interopRequireDefault(_inherits2);

	var _defineProperty2 = __webpack_require__(333);

	var _defineProperty3 = _interopRequireDefault(_defineProperty2);

	var _FILTER_TITLES;

	var _react = __webpack_require__(23);

	var _react2 = _interopRequireDefault(_react);

	var _filters = __webpack_require__(349);

	var _classnames2 = __webpack_require__(334);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _style = __webpack_require__(350);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FILTER_TITLES = (_FILTER_TITLES = {}, (0, _defineProperty3.default)(_FILTER_TITLES, _filters.SHOW_ALL, 'All'), (0, _defineProperty3.default)(_FILTER_TITLES, _filters.SHOW_ACTIVE, 'Active'), (0, _defineProperty3.default)(_FILTER_TITLES, _filters.SHOW_COMPLETED, 'Completed'), _FILTER_TITLES);

	var Footer = function (_Component) {
	  (0, _inherits3.default)(Footer, _Component);

	  function Footer() {
	    (0, _classCallCheck3.default)(this, Footer);
	    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Footer).apply(this, arguments));
	  }

	  (0, _createClass3.default)(Footer, [{
	    key: 'renderTodoCount',
	    value: function renderTodoCount() {
	      var activeCount = this.props.activeCount;

	      var itemWord = activeCount === 1 ? 'item' : 'items';

	      return _react2.default.createElement(
	        'span',
	        { className: _style2.default.count },
	        _react2.default.createElement(
	          'strong',
	          null,
	          activeCount || 'No'
	        ),
	        ' ',
	        itemWord,
	        ' left'
	      );
	    }
	  }, {
	    key: 'renderFilterLink',
	    value: function renderFilterLink(filter) {
	      var title = FILTER_TITLES[filter];
	      var _props = this.props;
	      var selectedFilter = _props.filter;
	      var onShow = _props.onShow;


	      return _react2.default.createElement(
	        'a',
	        { className: (0, _classnames3.default)((0, _defineProperty3.default)({}, _style2.default.selected, filter === selectedFilter)),
	          style: { cursor: 'pointer' },
	          onClick: function onClick() {
	            return onShow(filter);
	          } },
	        title
	      );
	    }
	  }, {
	    key: 'renderClearButton',
	    value: function renderClearButton() {
	      var _props2 = this.props;
	      var completedCount = _props2.completedCount;
	      var onClearCompleted = _props2.onClearCompleted;

	      if (completedCount > 0) {
	        return _react2.default.createElement(
	          'button',
	          { className: _style2.default.clearCompleted, onClick: onClearCompleted },
	          'Clear completed'
	        );
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(
	        'footer',
	        { className: _style2.default.normal },
	        this.renderTodoCount(),
	        _react2.default.createElement(
	          'ul',
	          { className: _style2.default.filters },
	          [_filters.SHOW_ALL, _filters.SHOW_ACTIVE, _filters.SHOW_COMPLETED].map(function (filter) {
	            return _react2.default.createElement(
	              'li',
	              { key: filter },
	              _this2.renderFilterLink(filter)
	            );
	          })
	        ),
	        this.renderClearButton()
	      );
	    }
	  }]);
	  return Footer;
	}(_react.Component);

	exports.default = Footer;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/mark.kimball/Documents/sites/frontend-boilerplate/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/mark.kimball/Documents/sites/frontend-boilerplate/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/mark.kimball/Documents/sites/frontend-boilerplate/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var SHOW_ALL = exports.SHOW_ALL = 'show_all';
	var SHOW_COMPLETED = exports.SHOW_COMPLETED = 'show_completed';
	var SHOW_ACTIVE = exports.SHOW_ACTIVE = 'show_active';

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/mark.kimball/Documents/sites/frontend-boilerplate/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "filters.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(351);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(338)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 351 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(337)();
	// imports


	// module
	exports.push([module.id, "\n.style__normal___3FIL- {\n  color: #777;\n  padding: 10px 15px;\n  height: 20px;\n  text-align: center;\n  border-top: 1px solid #e6e6e6;\n}\n\n.style__normal___3FIL-:before {\n  content: '';\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 50px;\n  overflow: hidden;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),\n    0 8px 0 -3px #f6f6f6,\n    0 9px 1px -3px rgba(0, 0, 0, 0.2),\n    0 16px 0 -6px #f6f6f6,\n    0 17px 2px -6px rgba(0, 0, 0, 0.2);\n}\n\n.style__filters___1BcvS {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: absolute;\n  right: 0;\n  left: 0;\n}\n\n.style__filters___1BcvS li {\n  display: inline;\n}\n\n.style__filters___1BcvS li a {\n  color: inherit;\n  margin: 3px;\n  padding: 3px 7px;\n  text-decoration: none;\n  border: 1px solid transparent;\n  border-radius: 3px;\n}\n\n.style__filters___1BcvS li a.style__selected___2piwY,\n.style__filters___1BcvS li a:hover {\n  border-color: rgba(175, 47, 47, 0.1);\n}\n\n.style__filters___1BcvS li a.style__selected___2piwY {\n  border-color: rgba(175, 47, 47, 0.2);\n}\n\n.style__count___3khYx {\n  float: left;\n  text-align: left;\n}\n\n.style__count___3khYx strong {\n  font-weight: 300;\n}\n\n.style__clearCompleted___3tf6X,\nhtml .style__clearCompleted___3tf6X:active {\n  float: right;\n  position: relative;\n  line-height: 20px;\n  text-decoration: none;\n  cursor: pointer;\n  visibility: hidden;\n  position: relative;\n}\n\n.style__clearCompleted___3tf6X::after {\n  visibility: visible;\n  content: 'Clear completed';\n  position: absolute;\n  right: 0;\n  white-space: nowrap;\n}\n\n.style__clearCompleted___3tf6X:hover::after {\n  text-decoration: underline;\n}\n\n@media (max-width: 430px) {\n  .style__normal___3FIL- {\n    height: 50px;\n  }\n\n  .style__filters___1BcvS {\n    bottom: 10px;\n  }\n}", "", {"version":3,"sources":["/./components/Footer/style.css"],"names":[],"mappings":";AACA;EACE,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;CAC/B;;AAED;EACE,YAAY;EACZ,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,QAAQ;EACR,aAAa;EACb,iBAAiB;EACjB;;;;uCAIqC;CACtC;;AAED;EACE,UAAU;EACV,WAAW;EACX,iBAAiB;EACjB,mBAAmB;EACnB,SAAS;EACT,QAAQ;CACT;;AAED;EACE,gBAAgB;CACjB;;AAED;EACE,eAAe;EACf,YAAY;EACZ,iBAAiB;EACjB,sBAAsB;EACtB,8BAA8B;EAC9B,mBAAmB;CACpB;;AAED;;EAEE,qCAAqC;CACtC;;AAED;EACE,qCAAqC;CACtC;;AAED;EACE,YAAY;EACZ,iBAAiB;CAClB;;AAED;EACE,iBAAiB;CAClB;;AAED;;EAEE,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,sBAAsB;EACtB,gBAAgB;EAChB,mBAAmB;EACnB,mBAAmB;CACpB;;AAED;EACE,oBAAoB;EACpB,2BAA2B;EAC3B,mBAAmB;EACnB,SAAS;EACT,oBAAoB;CACrB;;AAED;EACE,2BAA2B;CAC5B;;AAED;EACE;IACE,aAAa;GACd;;EAED;IACE,aAAa;GACd;CACF","file":"style.css","sourcesContent":["\n.normal {\n  color: #777;\n  padding: 10px 15px;\n  height: 20px;\n  text-align: center;\n  border-top: 1px solid #e6e6e6;\n}\n\n.normal:before {\n  content: '';\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 50px;\n  overflow: hidden;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),\n    0 8px 0 -3px #f6f6f6,\n    0 9px 1px -3px rgba(0, 0, 0, 0.2),\n    0 16px 0 -6px #f6f6f6,\n    0 17px 2px -6px rgba(0, 0, 0, 0.2);\n}\n\n.filters {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: absolute;\n  right: 0;\n  left: 0;\n}\n\n.filters li {\n  display: inline;\n}\n\n.filters li a {\n  color: inherit;\n  margin: 3px;\n  padding: 3px 7px;\n  text-decoration: none;\n  border: 1px solid transparent;\n  border-radius: 3px;\n}\n\n.filters li a.selected,\n.filters li a:hover {\n  border-color: rgba(175, 47, 47, 0.1);\n}\n\n.filters li a.selected {\n  border-color: rgba(175, 47, 47, 0.2);\n}\n\n.count {\n  float: left;\n  text-align: left;\n}\n\n.count strong {\n  font-weight: 300;\n}\n\n.clearCompleted,\nhtml .clearCompleted:active {\n  float: right;\n  position: relative;\n  line-height: 20px;\n  text-decoration: none;\n  cursor: pointer;\n  visibility: hidden;\n  position: relative;\n}\n\n.clearCompleted::after {\n  visibility: visible;\n  content: 'Clear completed';\n  position: absolute;\n  right: 0;\n  white-space: nowrap;\n}\n\n.clearCompleted:hover::after {\n  text-decoration: underline;\n}\n\n@media (max-width: 430px) {\n  .normal {\n    height: 50px;\n  }\n\n  .filters {\n    bottom: 10px;\n  }\n}"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"normal": "style__normal___3FIL-",
		"filters": "style__filters___1BcvS",
		"selected": "style__selected___2piwY",
		"count": "style__count___3khYx",
		"clearCompleted": "style__clearCompleted___3tf6X"
	};

/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(353);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(338)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 353 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(337)();
	// imports


	// module
	exports.push([module.id, "\n.style__main___1KuTD {\n  position: relative;\n  z-index: 2;\n  border-top: 1px solid #e6e6e6;\n}\n\n.style__normal___2xC3M {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.style__normal___2xC3M li {\n  position: relative;\n  font-size: 24px;\n  border-bottom: 1px solid #ededed;\n}\n\n.style__normal___2xC3M li:last-child {\n  border-bottom: none;\n}\n\n.style__normal___2xC3M li.style__editing___2erFl {\n  border-bottom: none;\n  padding: 0;\n}\n\n.style__normal___2xC3M li.style__editing___2erFl .style__edit___1i2Hc {\n  display: block;\n  width: 506px;\n  padding: 13px 17px 12px 17px;\n  margin: 0 0 0 43px;\n}\n\n.style__normal___2xC3M li.style__editing___2erFl .style__view___1Rq1x {\n  display: none;\n}\n\n.style__normal___2xC3M li .style__toggle___1DOxo {\n  text-align: center;\n  width: 40px;\n  /* auto, since non-WebKit browsers doesn't support input styling */\n  height: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  border: none; /* Mobile Safari */\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n\n.style__normal___2xC3M li .style__toggle___1DOxo:after {\n  content: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#ededed\" stroke-width=\"3\"/></svg>');\n}\n\n.style__normal___2xC3M li .style__toggle___1DOxo:checked:after {\n  content: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#bddad5\" stroke-width=\"3\"/><path fill=\"#5dc2af\" d=\"M72 25L42 71 27 56l-4 4 20 20 34-52z\"/></svg>');\n}\n\n.style__normal___2xC3M li label {\n  white-space: pre-line;\n  word-break: break-all;\n  padding: 15px 60px 15px 15px;\n  margin-left: 45px;\n  display: block;\n  line-height: 1.2;\n  -webkit-transition: color 0.4s;\n  transition: color 0.4s;\n}\n\n.style__normal___2xC3M li.style__completed___jfFcc label {\n  color: #d9d9d9;\n  text-decoration: line-through;\n}\n\n.style__normal___2xC3M li .style__destroy___3r8fY {\n  display: none;\n  position: absolute;\n  top: 0;\n  right: 10px;\n  bottom: 0;\n  width: 40px;\n  height: 40px;\n  margin: auto 0;\n  font-size: 30px;\n  color: #cc9a9a;\n  margin-bottom: 11px;\n  -webkit-transition: color 0.2s ease-out;\n  transition: color 0.2s ease-out;\n}\n\n.style__normal___2xC3M li .style__destroy___3r8fY:hover {\n  color: #af5b5e;\n}\n\n.style__normal___2xC3M li .style__destroy___3r8fY:after {\n  content: '\\D7';\n}\n\n.style__normal___2xC3M li:hover .style__destroy___3r8fY {\n  display: block;\n}\n\n.style__normal___2xC3M li .style__edit___1i2Hc {\n  display: none;\n}\n\n.style__normal___2xC3M li.style__editing___2erFl:last-child {\n  margin-bottom: -1px;\n}\n\n.style__toggleAll___2UwTp {\n  position: absolute;\n  top: -55px;\n  left: -12px;\n  width: 60px;\n  height: 34px;\n  text-align: center;\n  border: none; /* Mobile Safari */\n}\n\n.style__toggleAll___2UwTp:before {\n  content: '\\276F';\n  font-size: 22px;\n  color: #e6e6e6;\n  padding: 10px 27px 10px 27px;\n}\n\n.style__toggleAll___2UwTp:checked:before {\n  color: #737373;\n}\n\n/*\n  Hack to remove background from Mobile Safari.\n  Can't use it globally since it destroys checkboxes in Firefox\n*/\n@media screen and (-webkit-min-device-pixel-ratio:0) {\n  .style__toggleAll___2UwTp,\n  .style__normal___2xC3M li .style__toggle___1DOxo {\n    background: none;\n  }\n\n  .style__normal___2xC3M li .style__toggle___1DOxo {\n    height: 40px;\n  }\n\n  .style__toggleAll___2UwTp {\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n  }\n}", "", {"version":3,"sources":["/./components/MainSection/style.css"],"names":[],"mappings":";AACA;EACE,mBAAmB;EACnB,WAAW;EACX,8BAA8B;CAC/B;;AAED;EACE,UAAU;EACV,WAAW;EACX,iBAAiB;CAClB;;AAED;EACE,mBAAmB;EACnB,gBAAgB;EAChB,iCAAiC;CAClC;;AAED;EACE,oBAAoB;CACrB;;AAED;EACE,oBAAoB;EACpB,WAAW;CACZ;;AAED;EACE,eAAe;EACf,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;CACpB;;AAED;EACE,cAAc;CACf;;AAED;EACE,mBAAmB;EACnB,YAAY;EACZ,mEAAmE;EACnE,aAAa;EACb,mBAAmB;EACnB,OAAO;EACP,UAAU;EACV,eAAe;EACf,aAAa,CAAC,mBAAmB;EACjC,yBAAiB;KAAjB,sBAAiB;UAAjB,iBAAiB;CAClB;;AAED;EACE,sNAAsN;CACvN;;AAED;EACE,qRAAqR;CACtR;;AAED;EACE,sBAAsB;EACtB,sBAAsB;EACtB,6BAA6B;EAC7B,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,+BAAuB;EAAvB,uBAAuB;CACxB;;AAED;EACE,eAAe;EACf,8BAA8B;CAC/B;;AAED;EACE,cAAc;EACd,mBAAmB;EACnB,OAAO;EACP,YAAY;EACZ,UAAU;EACV,YAAY;EACZ,aAAa;EACb,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,oBAAoB;EACpB,wCAAgC;EAAhC,gCAAgC;CACjC;;AAED;EACE,eAAe;CAChB;;AAED;EACE,eAAa;CACd;;AAED;EACE,eAAe;CAChB;;AAED;EACE,cAAc;CACf;;AAED;EACE,oBAAoB;CACrB;;AAED;EACE,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,aAAa,CAAC,mBAAmB;CAClC;;AAED;EACE,iBAAa;EACb,gBAAgB;EAChB,eAAe;EACf,6BAA6B;CAC9B;;AAED;EACE,eAAe;CAChB;;AAED;;;EAGE;AACF;EACE;;IAEE,iBAAiB;GAClB;;EAED;IACE,aAAa;GACd;;EAED;IACE,iCAAyB;YAAzB,yBAAyB;IACzB,yBAAiB;OAAjB,sBAAiB;YAAjB,iBAAiB;GAClB;CACF","file":"style.css","sourcesContent":["\n.main {\n  position: relative;\n  z-index: 2;\n  border-top: 1px solid #e6e6e6;\n}\n\n.normal {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.normal li {\n  position: relative;\n  font-size: 24px;\n  border-bottom: 1px solid #ededed;\n}\n\n.normal li:last-child {\n  border-bottom: none;\n}\n\n.normal li.editing {\n  border-bottom: none;\n  padding: 0;\n}\n\n.normal li.editing .edit {\n  display: block;\n  width: 506px;\n  padding: 13px 17px 12px 17px;\n  margin: 0 0 0 43px;\n}\n\n.normal li.editing .view {\n  display: none;\n}\n\n.normal li .toggle {\n  text-align: center;\n  width: 40px;\n  /* auto, since non-WebKit browsers doesn't support input styling */\n  height: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  border: none; /* Mobile Safari */\n  appearance: none;\n}\n\n.normal li .toggle:after {\n  content: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#ededed\" stroke-width=\"3\"/></svg>');\n}\n\n.normal li .toggle:checked:after {\n  content: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"-10 -18 100 135\"><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"none\" stroke=\"#bddad5\" stroke-width=\"3\"/><path fill=\"#5dc2af\" d=\"M72 25L42 71 27 56l-4 4 20 20 34-52z\"/></svg>');\n}\n\n.normal li label {\n  white-space: pre-line;\n  word-break: break-all;\n  padding: 15px 60px 15px 15px;\n  margin-left: 45px;\n  display: block;\n  line-height: 1.2;\n  transition: color 0.4s;\n}\n\n.normal li.completed label {\n  color: #d9d9d9;\n  text-decoration: line-through;\n}\n\n.normal li .destroy {\n  display: none;\n  position: absolute;\n  top: 0;\n  right: 10px;\n  bottom: 0;\n  width: 40px;\n  height: 40px;\n  margin: auto 0;\n  font-size: 30px;\n  color: #cc9a9a;\n  margin-bottom: 11px;\n  transition: color 0.2s ease-out;\n}\n\n.normal li .destroy:hover {\n  color: #af5b5e;\n}\n\n.normal li .destroy:after {\n  content: '×';\n}\n\n.normal li:hover .destroy {\n  display: block;\n}\n\n.normal li .edit {\n  display: none;\n}\n\n.normal li.editing:last-child {\n  margin-bottom: -1px;\n}\n\n.toggleAll {\n  position: absolute;\n  top: -55px;\n  left: -12px;\n  width: 60px;\n  height: 34px;\n  text-align: center;\n  border: none; /* Mobile Safari */\n}\n\n.toggleAll:before {\n  content: '❯';\n  font-size: 22px;\n  color: #e6e6e6;\n  padding: 10px 27px 10px 27px;\n}\n\n.toggleAll:checked:before {\n  color: #737373;\n}\n\n/*\n  Hack to remove background from Mobile Safari.\n  Can't use it globally since it destroys checkboxes in Firefox\n*/\n@media screen and (-webkit-min-device-pixel-ratio:0) {\n  .toggleAll,\n  .normal li .toggle {\n    background: none;\n  }\n\n  .normal li .toggle {\n    height: 40px;\n  }\n\n  .toggleAll {\n    transform: rotate(90deg);\n    appearance: none;\n  }\n}"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"main": "style__main___1KuTD",
		"normal": "style__normal___2xC3M",
		"editing": "style__editing___2erFl",
		"edit": "style__edit___1i2Hc",
		"view": "style__view___1Rq1x",
		"toggle": "style__toggle___1DOxo",
		"completed": "style__completed___jfFcc",
		"destroy": "style__destroy___3r8fY",
		"toggleAll": "style__toggleAll___2UwTp"
	};

/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/mark.kimball/Documents/sites/frontend-boilerplate/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/mark.kimball/Documents/sites/frontend-boilerplate/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.clearCompleted = exports.completeAll = exports.completeTodo = exports.editTodo = exports.deleteTodo = exports.addTodo = undefined;

	var _reduxActions = __webpack_require__(355);

	var addTodo = exports.addTodo = (0, _reduxActions.createAction)('add todo');
	var deleteTodo = exports.deleteTodo = (0, _reduxActions.createAction)('delete todo');
	var editTodo = exports.editTodo = (0, _reduxActions.createAction)('edit todo');
	var completeTodo = exports.completeTodo = (0, _reduxActions.createAction)('complete todo');
	var completeAll = exports.completeAll = (0, _reduxActions.createAction)('complete all');
	var clearCompleted = exports.clearCompleted = (0, _reduxActions.createAction)('clear complete');

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/mark.kimball/Documents/sites/frontend-boilerplate/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "todos.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 355 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _createAction = __webpack_require__(356);

	var _createAction2 = _interopRequireDefault(_createAction);

	var _handleAction = __webpack_require__(357);

	var _handleAction2 = _interopRequireDefault(_handleAction);

	var _handleActions = __webpack_require__(364);

	var _handleActions2 = _interopRequireDefault(_handleActions);

	exports.createAction = _createAction2['default'];
	exports.handleAction = _handleAction2['default'];
	exports.handleActions = _handleActions2['default'];

/***/ },
/* 356 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = createAction;
	function identity(t) {
	  return t;
	}

	function createAction(type, actionCreator, metaCreator) {
	  var finalActionCreator = typeof actionCreator === 'function' ? actionCreator : identity;

	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    var action = {
	      type: type,
	      payload: finalActionCreator.apply(undefined, args)
	    };

	    if (args.length === 1 && args[0] instanceof Error) {
	      // Handle FSA errors where the payload is an Error object. Set error.
	      action.error = true;
	    }

	    if (typeof metaCreator === 'function') {
	      action.meta = metaCreator.apply(undefined, args);
	    }

	    return action;
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = handleAction;

	var _fluxStandardAction = __webpack_require__(358);

	function isFunction(val) {
	  return typeof val === 'function';
	}

	function handleAction(type, reducers) {
	  return function (state, action) {
	    // If action type does not match, return previous state
	    if (action.type !== type) return state;

	    var handlerKey = _fluxStandardAction.isError(action) ? 'throw' : 'next';

	    // If function is passed instead of map, use as reducer
	    if (isFunction(reducers)) {
	      reducers.next = reducers['throw'] = reducers;
	    }

	    // Otherwise, assume an action map was passed
	    var reducer = reducers[handlerKey];

	    return isFunction(reducer) ? reducer(state, action) : state;
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.isFSA = isFSA;
	exports.isError = isError;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _lodashIsplainobject = __webpack_require__(359);

	var _lodashIsplainobject2 = _interopRequireDefault(_lodashIsplainobject);

	var validKeys = ['type', 'payload', 'error', 'meta'];

	function isValidKey(key) {
	  return validKeys.indexOf(key) > -1;
	}

	function isFSA(action) {
	  return _lodashIsplainobject2['default'](action) && typeof action.type !== 'undefined' && Object.keys(action).every(isValidKey);
	}

	function isError(action) {
	  return action.error === true;
	}

/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.2.0 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var baseFor = __webpack_require__(360),
	    isArguments = __webpack_require__(361),
	    keysIn = __webpack_require__(362);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/**
	 * The base implementation of `_.forIn` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForIn(object, iteratee) {
	  return baseFor(object, iteratee, keysIn);
	}

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * **Note:** This method assumes objects created by the `Object` constructor
	 * have no inherited enumerable properties.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  var Ctor;

	  // Exit early for non `Object` objects.
	  if (!(isObjectLike(value) && objToString.call(value) == objectTag && !isArguments(value)) ||
	      (!hasOwnProperty.call(value, 'constructor') && (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor)))) {
	    return false;
	  }
	  // IE < 9 iterates inherited properties before own properties. If the first
	  // iterated property is an object's own property then there are no inherited
	  // enumerable properties.
	  var result;
	  // In most environments an object's own properties are iterated before
	  // its inherited properties. If the last iterated property is an object's
	  // own property then there are no inherited enumerable properties.
	  baseForIn(value, function(subValue, key) {
	    result = key;
	  });
	  return result === undefined || hasOwnProperty.call(value, result);
	}

	module.exports = isPlainObject;


/***/ },
/* 360 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.3 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/**
	 * The base implementation of `baseForIn` and `baseForOwn` which iterates
	 * over `object` properties returned by `keysFunc` invoking `iteratee` for
	 * each property. Iteratee functions may exit iteration early by explicitly
	 * returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	/**
	 * Creates a base function for methods like `_.forIn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	module.exports = baseFor;


/***/ },
/* 361 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.8 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value)) && !isFunction(value);
	}

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object, else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isArguments;


/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.0.8 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var isArguments = __webpack_require__(361),
	    isArray = __webpack_require__(363);

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used as the [maximum length](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;

	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;

	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = keysIn;


/***/ },
/* 363 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/** `Object#toString` result references. */
	var arrayTag = '[object Array]',
	    funcTag = '[object Function]';

	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}

	module.exports = isArray;


/***/ },
/* 364 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = handleActions;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _handleAction = __webpack_require__(357);

	var _handleAction2 = _interopRequireDefault(_handleAction);

	var _ownKeys = __webpack_require__(365);

	var _ownKeys2 = _interopRequireDefault(_ownKeys);

	var _reduceReducers = __webpack_require__(366);

	var _reduceReducers2 = _interopRequireDefault(_reduceReducers);

	function handleActions(handlers, defaultState) {
	  var reducers = _ownKeys2['default'](handlers).map(function (type) {
	    return _handleAction2['default'](type, handlers[type]);
	  });

	  return typeof defaultState !== 'undefined' ? function (state, action) {
	    if (state === undefined) state = defaultState;
	    return _reduceReducers2['default'].apply(undefined, reducers)(state, action);
	  } : _reduceReducers2['default'].apply(undefined, reducers);
	}

	module.exports = exports['default'];

/***/ },
/* 365 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = ownKeys;

	function ownKeys(object) {
	  if (typeof Reflect !== 'undefined' && typeof Reflect.ownKeys === 'function') {
	    return Reflect.ownKeys(object);
	  }

	  var keys = Object.getOwnPropertyNames(object);

	  if (typeof Object.getOwnPropertySymbols === 'function') {
	    keys = keys.concat(Object.getOwnPropertySymbols(object));
	  }

	  return keys;
	}

	module.exports = exports['default'];

/***/ },
/* 366 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = reduceReducers;

	function reduceReducers() {
	  for (var _len = arguments.length, reducers = Array(_len), _key = 0; _key < _len; _key++) {
	    reducers[_key] = arguments[_key];
	  }

	  return function (previous, current) {
	    return reducers.reduce(function (p, r) {
	      return r(p, current);
	    }, previous);
	  };
	}

	module.exports = exports["default"];

/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(368);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(338)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./../../../node_modules/postcss-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 368 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(337)();
	// imports


	// module
	exports.push([module.id, "\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n}\n\nbutton {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: none;\n  font-size: 100%;\n  vertical-align: baseline;\n  font-family: inherit;\n  font-weight: inherit;\n  color: inherit;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-smoothing: antialiased;\n}\n\nbody {\n  font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  line-height: 1.4em;\n  background: #f5f5f5;\n  color: #4d4d4d;\n  min-width: 230px;\n  max-width: 550px;\n  margin: 0 auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-font-smoothing: antialiased;\n  -ms-font-smoothing: antialiased;\n  font-smoothing: antialiased;\n  font-weight: 300;\n}\n\nbutton,\ninput[type=\"checkbox\"] {\n  outline: none;\n}\n\n.style__normal___XNTx8 {\n  background: #fff;\n  margin: 200px 0 40px 0;\n  position: relative;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),\n              0 25px 50px 0 rgba(0, 0, 0, 0.1);\n}\n\n.style__normal___XNTx8 input::-webkit-input-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: #e6e6e6;\n}\n\n.style__normal___XNTx8 input::-moz-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: #e6e6e6;\n}\n\n.style__normal___XNTx8 input::input-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: #e6e6e6;\n}\n\n.style__normal___XNTx8 h1 {\n  position: absolute;\n  top: -155px;\n  width: 100%;\n  font-size: 100px;\n  font-weight: 100;\n  text-align: center;\n  color: rgba(175, 47, 47, 0.15);\n  -webkit-text-rendering: optimizeLegibility;\n  -moz-text-rendering: optimizeLegibility;\n  -ms-text-rendering: optimizeLegibility;\n  text-rendering: optimizeLegibility;\n}\n", "", {"version":3,"sources":["/./containers/App/style.css"],"names":[],"mappings":";AACA;;EAEE,UAAU;EACV,WAAW;CACZ;;AAED;EACE,UAAU;EACV,WAAW;EACX,UAAU;EACV,iBAAiB;EACjB,gBAAgB;EAChB,yBAAyB;EACzB,qBAAqB;EACrB,qBAAqB;EACrB,eAAe;EACf,yBAAiB;KAAjB,sBAAiB;UAAjB,iBAAiB;EACjB,4BAA4B;CAC7B;;AAED;EACE,0DAA0D;EAC1D,mBAAmB;EACnB,oBAAoB;EACpB,eAAe;EACf,iBAAiB;EACjB,iBAAiB;EACjB,eAAe;EACf,oCAAoC;EACpC,iCAAiC;EACjC,gCAAgC;EAChC,4BAA4B;EAC5B,iBAAiB;CAClB;;AAED;;EAEE,cAAc;CACf;;AAED;EACE,iBAAiB;EACjB,uBAAuB;EACvB,mBAAmB;EACnB;+CAC6C;CAC9C;;AAED;EACE,mBAAmB;EACnB,iBAAiB;EACjB,eAAe;CAChB;;AAED;EACE,mBAAmB;EACnB,iBAAiB;EACjB,eAAe;CAChB;;AAED;EACE,mBAAmB;EACnB,iBAAiB;EACjB,eAAe;CAChB;;AAED;EACE,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;EACjB,mBAAmB;EACnB,+BAA+B;EAC/B,2CAA2C;EAC3C,wCAAwC;EACxC,uCAAuC;EACvC,mCAAmC;CACpC","file":"style.css","sourcesContent":["\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n}\n\nbutton {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: none;\n  font-size: 100%;\n  vertical-align: baseline;\n  font-family: inherit;\n  font-weight: inherit;\n  color: inherit;\n  appearance: none;\n  font-smoothing: antialiased;\n}\n\nbody {\n  font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  line-height: 1.4em;\n  background: #f5f5f5;\n  color: #4d4d4d;\n  min-width: 230px;\n  max-width: 550px;\n  margin: 0 auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-font-smoothing: antialiased;\n  -ms-font-smoothing: antialiased;\n  font-smoothing: antialiased;\n  font-weight: 300;\n}\n\nbutton,\ninput[type=\"checkbox\"] {\n  outline: none;\n}\n\n.normal {\n  background: #fff;\n  margin: 200px 0 40px 0;\n  position: relative;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),\n              0 25px 50px 0 rgba(0, 0, 0, 0.1);\n}\n\n.normal input::-webkit-input-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: #e6e6e6;\n}\n\n.normal input::-moz-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: #e6e6e6;\n}\n\n.normal input::input-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: #e6e6e6;\n}\n\n.normal h1 {\n  position: absolute;\n  top: -155px;\n  width: 100%;\n  font-size: 100px;\n  font-weight: 100;\n  text-align: center;\n  color: rgba(175, 47, 47, 0.15);\n  -webkit-text-rendering: optimizeLegibility;\n  -moz-text-rendering: optimizeLegibility;\n  -ms-text-rendering: optimizeLegibility;\n  text-rendering: optimizeLegibility;\n}\n"],"sourceRoot":"webpack://"}]);

	// exports
	exports.locals = {
		"normal": "style__normal___XNTx8"
	};

/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/mark.kimball/Documents/sites/frontend-boilerplate/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/mark.kimball/Documents/sites/frontend-boilerplate/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = configure;

	var _redux = __webpack_require__(102);

	var _middleware = __webpack_require__(370);

	var _reducers = __webpack_require__(372);

	var _reducers2 = _interopRequireDefault(_reducers);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function configure(initialState) {
	  var create = window.devToolsExtension ? window.devToolsExtension()(_redux.createStore) : _redux.createStore;

	  var createStoreWithMiddleware = (0, _redux.applyMiddleware)(_middleware.logger)(create);

	  var store = createStoreWithMiddleware(_reducers2.default, initialState);

	  if (false) {
	    module.hot.accept('../reducers', function () {
	      var nextReducer = require('../reducers');
	      store.replaceReducer(nextReducer);
	    });
	  }

	  return store;
	}

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/mark.kimball/Documents/sites/frontend-boilerplate/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/mark.kimball/Documents/sites/frontend-boilerplate/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/mark.kimball/Documents/sites/frontend-boilerplate/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.logger = undefined;

	var _logger = __webpack_require__(371);

	var _logger2 = _interopRequireDefault(_logger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.logger = _logger2.default;

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/mark.kimball/Documents/sites/frontend-boilerplate/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/mark.kimball/Documents/sites/frontend-boilerplate/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/mark.kimball/Documents/sites/frontend-boilerplate/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (store) {
	  return function (next) {
	    return function (action) {
	      console.log(action);
	      return next(action);
	    };
	  };
	};

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/mark.kimball/Documents/sites/frontend-boilerplate/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "logger.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/mark.kimball/Documents/sites/frontend-boilerplate/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/mark.kimball/Documents/sites/frontend-boilerplate/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRouterRedux = __webpack_require__(90);

	var _redux = __webpack_require__(102);

	var _todos = __webpack_require__(373);

	var _todos2 = _interopRequireDefault(_todos);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _redux.combineReducers)({
	  routing: _reactRouterRedux.routerReducer,
	  todos: _todos2.default
	});

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/mark.kimball/Documents/sites/frontend-boilerplate/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/mark.kimball/Documents/sites/frontend-boilerplate/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/mark.kimball/Documents/sites/frontend-boilerplate/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(340);

	var _extends3 = _interopRequireDefault(_extends2);

	var _toConsumableArray2 = __webpack_require__(374);

	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

	var _reduxActions = __webpack_require__(355);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initialState = [{
	  text: 'Use Redux',
	  completed: false,
	  id: 0
	}];

	exports.default = (0, _reduxActions.handleActions)({
	  'add todo': function addTodo(state, action) {
	    return [{
	      id: state.reduce(function (maxId, todo) {
	        return Math.max(todo.id, maxId);
	      }, -1) + 1,
	      completed: false,
	      text: action.payload
	    }].concat((0, _toConsumableArray3.default)(state));
	  },
	  'delete todo': function deleteTodo(state, action) {
	    return state.filter(function (todo) {
	      return todo.id !== action.payload;
	    });
	  },
	  'edit todo': function editTodo(state, action) {
	    return state.map(function (todo) {
	      return todo.id === action.payload.id ? (0, _extends3.default)({}, todo, { text: action.payload.text }) : todo;
	    });
	  },
	  'complete todo': function completeTodo(state, action) {
	    return state.map(function (todo) {
	      return todo.id === action.payload ? (0, _extends3.default)({}, todo, { completed: !todo.completed }) : todo;
	    });
	  },
	  'complete all': function completeAll(state, action) {
	    var areAllMarked = state.every(function (todo) {
	      return todo.completed;
	    });
	    return state.map(function (todo) {
	      return (0, _extends3.default)({}, todo, {
	        completed: !areAllMarked
	      });
	    });
	  },
	  'clear complete': function clearComplete(state, action) {
	    return state.filter(function (todo) {
	      return todo.completed === false;
	    });
	  }
	}, initialState);

	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/mark.kimball/Documents/sites/frontend-boilerplate/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "todos.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },
/* 374 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _from = __webpack_require__(375);

	var _from2 = _interopRequireDefault(_from);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  } else {
	    return (0, _from2.default)(arr);
	  }
	};

/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(376), __esModule: true };

/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(284);
	__webpack_require__(377);
	module.exports = __webpack_require__(262).Array.from;

/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(263)
	  , $export        = __webpack_require__(261)
	  , toObject       = __webpack_require__(252)
	  , call           = __webpack_require__(378)
	  , isArrayIter    = __webpack_require__(379)
	  , toLength       = __webpack_require__(300)
	  , createProperty = __webpack_require__(380)
	  , getIterFn      = __webpack_require__(381);

	$export($export.S + $export.F * !__webpack_require__(383)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(267);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(290)
	  , ITERATOR   = __webpack_require__(305)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(266)
	  , createDesc      = __webpack_require__(274);

	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(382)
	  , ITERATOR  = __webpack_require__(305)('iterator')
	  , Iterators = __webpack_require__(290);
	module.exports = __webpack_require__(262).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 382 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(298)
	  , TAG = __webpack_require__(305)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 383 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(305)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ }
]);