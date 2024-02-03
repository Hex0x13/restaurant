/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Fredoka-VariableFont_wdth,wght.ttf */ \"./src/fonts/Fredoka-VariableFont_wdth,wght.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\r\n    font-family: fredoka;\r\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n}\r\n\r\n:root {\r\n    --header-height: 80px;\r\n    --header-bg-color: #2C3E50;\r\n    --header-color: white;\r\n    --home-page-container-bg: #2c3e50c2;\r\n    --positive-px-num: 2px;\r\n    --negative-px-num: -2px;\r\n}\r\n\r\nhtml,\r\n*,\r\n*::after,\r\n*::before {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: fredoka, Arial, Helvetica, sans-serif;\r\n}\r\n\r\nbody {\r\n    height: 100vh;\r\n}\r\n\r\nheader {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: var(--header-bg-color);\r\n    height: var(--header-height);\r\n    background-image: -webkit-linear-gradient(to right, #4CA1AF, #2C3E50);\r\n    background-image: linear-gradient(to right, #4CA1AF, #2C3E50);\r\n}\r\n\r\nheader>button {\r\n    border: none;\r\n    margin: 20px;\r\n    padding: 5px;\r\n    font-size: 25px;\r\n    background-color: transparent;\r\n    color: var(--header-color);\r\n    cursor: pointer;\r\n    position: relative;\r\n    transition: transform 300ms;\r\n}\r\n\r\nheader>button:hover {\r\n    transform: translateY(-5px);\r\n}\r\n\r\nheader>button.active {\r\n    border-bottom: 2px solid var(--header-color);\r\n}\r\n\r\n.home-page,\r\n.menu-page,\r\n.contact-page {\r\n    height: calc(100vh - var(--header-height));\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n.home-page {\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n\r\n.home-page .content-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: stretch;\r\n    align-items: center;\r\n    height: 100%;\r\n    width: clamp(300px, 80%, 800px);\r\n    height: auto;\r\n    padding: 50px;\r\n    border-radius: 22px;\r\n    color: var(--header-color);\r\n    background-color: var(--home-page-container-bg);\r\n}\r\n\r\n.home-page h1 {\r\n    padding: 5px;\r\n    font-size: 48px;\r\n}\r\n\r\n/*\r\nbackground: #D66D75;\r\nbackground: -webkit-linear-gradient(to right, #E29587, #D66D75);\r\nbackground: linear-gradient(to right, #E29587, #D66D75);\r\n*/\r\n\r\n.menu-page {\r\n    height: auto;\r\n    min-height: calc(100vh - var(--header-height));\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.menu-logo {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: 30px;\r\n    gap: 10px;\r\n}\r\n\r\n.menu-logo h2 {\r\n    text-align: center;\r\n    color: white;\r\n    text-shadow: var(--positive-px-num) var(--positive-px-num) black, \r\n            var(--positive-px-num) var(--negative-px-num) black,\r\n            var(--negative-px-num) var(--positive-px-num) black, \r\n            var(--negative-px-num) var(--negative-px-num) black;\r\n    font-size: 64px;\r\n    font-weight: bold;\r\n}\r\n\r\n.menu-logo img {\r\n    width: 64px;\r\n    height: 64px;\r\n    object-fit: contain;\r\n    object-position: center;\r\n}\r\n\r\n.menu-item img {\r\n    width: 100px;\r\n}\r\n\r\n.menu-page .content-container {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    border-radius: 24px;\r\n    width: 70%;\r\n    padding: 40px;\r\n    justify-content: center;\r\n    border: 1px solid #2C3E50;\r\n    align-items: center;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.menu-item {\r\n    width: 200px;\r\n    height: 200px;\r\n    margin: 12px;\r\n    background-color: #236ab1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 22px;\r\n    cursor: pointer;\r\n    color: white;\r\n}\r\n\r\n.menu-item > img {\r\n    width: 120px;\r\n    height: 120px;\r\n    object-fit: contain;\r\n    object-position: center;\r\n}\r\n\r\n.rrp-icon {\r\n    height: 32px;\r\n    width: 32px;\r\n    object-fit: cover;\r\n}\r\n\r\n.contact-page .content-container > div{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/image/Iced-Tea.png":
/*!********************************!*\
  !*** ./src/image/Iced-Tea.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"image/Iced-Tea.png\");\n\n//# sourceURL=webpack://restaurant-page/./src/image/Iced-Tea.png?");

/***/ }),

/***/ "./src/image/burger.png":
/*!******************************!*\
  !*** ./src/image/burger.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"image/burger.png\");\n\n//# sourceURL=webpack://restaurant-page/./src/image/burger.png?");

/***/ }),

/***/ "./src/image/carbonara.png":
/*!*********************************!*\
  !*** ./src/image/carbonara.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"image/carbonara.png\");\n\n//# sourceURL=webpack://restaurant-page/./src/image/carbonara.png?");

/***/ }),

/***/ "./src/image/fast-food.png":
/*!*********************************!*\
  !*** ./src/image/fast-food.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"image/fast-food.png\");\n\n//# sourceURL=webpack://restaurant-page/./src/image/fast-food.png?");

/***/ }),

/***/ "./src/image/fresh-lumpia.png":
/*!************************************!*\
  !*** ./src/image/fresh-lumpia.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"image/fresh-lumpia.png\");\n\n//# sourceURL=webpack://restaurant-page/./src/image/fresh-lumpia.png?");

/***/ }),

/***/ "./src/image/fries.png":
/*!*****************************!*\
  !*** ./src/image/fries.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"image/fries.png\");\n\n//# sourceURL=webpack://restaurant-page/./src/image/fries.png?");

/***/ }),

/***/ "./src/image/gmail.png":
/*!*****************************!*\
  !*** ./src/image/gmail.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"image/gmail.png\");\n\n//# sourceURL=webpack://restaurant-page/./src/image/gmail.png?");

/***/ }),

/***/ "./src/image/home.png":
/*!****************************!*\
  !*** ./src/image/home.png ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"image/home.png\");\n\n//# sourceURL=webpack://restaurant-page/./src/image/home.png?");

/***/ }),

/***/ "./src/image/orange-juice.png":
/*!************************************!*\
  !*** ./src/image/orange-juice.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"image/orange-juice.png\");\n\n//# sourceURL=webpack://restaurant-page/./src/image/orange-juice.png?");

/***/ }),

/***/ "./src/image/pepperoni-pizza.png":
/*!***************************************!*\
  !*** ./src/image/pepperoni-pizza.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"image/pepperoni-pizza.png\");\n\n//# sourceURL=webpack://restaurant-page/./src/image/pepperoni-pizza.png?");

/***/ }),

/***/ "./src/image/spaghetti.png":
/*!*********************************!*\
  !*** ./src/image/spaghetti.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"image/spaghetti.png\");\n\n//# sourceURL=webpack://restaurant-page/./src/image/spaghetti.png?");

/***/ }),

/***/ "./src/image/telephone.png":
/*!*********************************!*\
  !*** ./src/image/telephone.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"image/telephone.png\");\n\n//# sourceURL=webpack://restaurant-page/./src/image/telephone.png?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _image_gmail_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image/gmail.png */ \"./src/image/gmail.png\");\n/* harmony import */ var _image_telephone_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image/telephone.png */ \"./src/image/telephone.png\");\n/* harmony import */ var _image_home_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image/home.png */ \"./src/image/home.png\");\n\r\n\r\n\r\n\r\nfunction contactPage() {\r\n    const textClass = 'rp-text';\r\n    const iconClass = 'rp-icon';\r\n\r\n    const contactContent = document.createElement('div');\r\n    contactContent.classList.add('contact-page');\r\n    contactContent.classList.add('hidden');\r\n\r\n    const contentContainer = document.createElement('div');\r\n    contentContainer.classList.add('content-container');\r\n\r\n    const heading2 = document.createElement('h2');\r\n    heading2.textContent = 'Contact Us';\r\n\r\n    const gmailDiv = document.createElement('div');\r\n\r\n    const gmailImg = document.createElement('img');\r\n    gmailImg.classList.add(iconClass);\r\n    gmailImg.src = _image_gmail_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n    gmailDiv.appendChild(gmailImg);\r\n\r\n    const gmailText = document.createElement('span');\r\n    gmailText.classList.add(textClass);\r\n    gmailText.textContent = 'myemail@unknown.com';\r\n    gmailDiv.appendChild(gmailText);\r\n\r\n    const phoneDiv = document.createElement('div');\r\n\r\n    const phoneImg = document.createElement('img');\r\n    phoneImg.classList.add(iconClass);\r\n    phoneImg.src = _image_telephone_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\n    phoneDiv.appendChild(phoneImg);\r\n\r\n    const phoneText = document.createElement('span');\r\n    phoneText.classList.add(textClass);\r\n    phoneText.textContent = '63xx xxx xxxx';\r\n    phoneDiv.appendChild(phoneText);\r\n\r\n    const homeDiv = document.createElement('div');\r\n\r\n    const homeImg = document.createElement('img');\r\n    homeImg.classList.add(iconClass);\r\n    homeImg.src = _image_home_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\r\n    homeDiv.appendChild(homeImg);\r\n\r\n    const homeText = document.createElement('span');\r\n    homeText.classList.add(textClass);\r\n    homeText.textContent = 'Testville, TX 98765';\r\n    homeDiv.appendChild(homeText);\r\n\r\n    contentContainer.appendChild(heading2);\r\n    contentContainer.appendChild(gmailDiv);\r\n    contentContainer.appendChild(phoneDiv);\r\n    contentContainer.appendChild(homeDiv);\r\n\r\n    contactContent.appendChild(contentContainer);\r\n    return contactContent;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage());\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ header)\n/* harmony export */ });\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\r\n\r\n\r\n\r\nlet currentPage;\r\n\r\nfunction showPage(page) {\r\n    page.classList.remove('hidden');\r\n}\r\n\r\nfunction hidePage(page) {\r\n    page.classList.add('hidden');\r\n}\r\n\r\nfunction loadPage(page, container) {\r\n    if (!this.classList.contains('active')) {\r\n        const children = container.children;\r\n        for (let i = 0; i < children.length; i++) {\r\n            children[i].classList.remove('active');\r\n        }\r\n        this.classList.add('active');\r\n        hidePage(currentPage);\r\n        currentPage = page;\r\n        showPage(currentPage);\r\n    }\r\n}\r\n\r\nfunction header() {\r\n    const header = document.createElement('header');\r\n\r\n    const homeButton = document.createElement('button');\r\n    homeButton.textContent = 'Home';\r\n    homeButton.onclick = loadPage.bind(homeButton, _home__WEBPACK_IMPORTED_MODULE_2__[\"default\"], header);\r\n    homeButton.classList.add('active');\r\n    showPage(_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n    currentPage = _home__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\r\n\r\n    const menuButton = document.createElement('button');\r\n    menuButton.textContent = 'Menu';\r\n    menuButton.onclick = loadPage.bind(menuButton, _menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"], header);\r\n\r\n    const contactButton = document.createElement('button');\r\n    contactButton.textContent = 'Contact';\r\n    contactButton.onclick = loadPage.bind(contactButton, _contact__WEBPACK_IMPORTED_MODULE_0__[\"default\"], header);\r\n\r\n    header.append(homeButton, menuButton, contactButton);\r\n    return header;\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nfunction homePage() {\r\n    const homeContainer = document.createElement('div');\r\n    homeContainer.classList.add('home-page');\r\n    homeContainer.classList.add('hidden');\r\n\r\n    const contentContainer = document.createElement('div');\r\n    contentContainer.classList.add('content-container');\r\n\r\n    const restaurantName = document.createElement('h1');\r\n    restaurantName.classList.add('restaurant-name');\r\n    restaurantName.textContent = \"Restaurant Name\";\r\n\r\n    const descriptionContainer = document.createElement('div');\r\n    descriptionContainer.classList.add('description-container');\r\n\r\n    const dateTimeContainer = document.createElement('div');\r\n    dateTimeContainer.classList.add('date-time-container');\r\n\r\n    const locationContainer = document.createElement('div');\r\n    locationContainer.classList.add('location-container');\r\n\r\n    contentContainer.appendChild(restaurantName);\r\n    contentContainer.appendChild(descriptionContainer);\r\n    contentContainer.appendChild(dateTimeContainer);\r\n    contentContainer.appendChild(locationContainer);\r\n\r\n    // descriptionContainer children elements:\r\n    const descPar = document.createElement('p');\r\n    descPar.classList.add('desc-par');\r\n    descPar.textContent = (\r\n        \"Lorem ipsum dolor sit amet, consectetur adipiscing elit,\" +\r\n        \" sed do eiusmod tempor incididunt ut labore et dolore magna\" +\r\n        \" aliqua. Ut enim ad minim veniam, quis nostrud exercitation\" +\r\n        \" ullamco laboris nisi ut aliquip ex ea commodo consequat.\");\r\n    \r\n    const descHeader = document.createElement('h2');\r\n    descHeader.classList.add('desc-header');\r\n    descHeader.textContent = \"Restaurant\";\r\n    \r\n    descriptionContainer.appendChild(descPar);\r\n    descriptionContainer.appendChild(descHeader);\r\n\r\n\r\n    // dateTimeContainer children elements:\r\n    const dtHeader = document.createElement('h2');\r\n    dtHeader.classList.add('dt-header');\r\n    dtHeader.textContent = \"Hours\";\r\n\r\n    const dtList = document.createElement('ul');\r\n    dtList.classList.add('date-time-par');\r\n    dtList.innerHTML = \r\n        `<li>Monday: 8am - 6pm</li>\r\n        <li>Tuesday: 8am - 6pm</li>\r\n        <li>Wednesday: 8am - 6pm</li>\r\n        <li>Thursday: 8am - 6pm</li>\r\n        <li>Friday: 8am - 6pm</li>`;\r\n    \r\n    dateTimeContainer.appendChild(dtHeader);\r\n    dateTimeContainer.appendChild(dtList);\r\n\r\n\r\n    // locationContainer\r\n    const locationHeader = document.createElement('h2');\r\n    locationContainer.classList.add('location-header');\r\n    locationHeader.textContent = \"Location\";\r\n    \r\n    const locationPar = document.createElement('p');\r\n    locationPar.classList.add('location-par');\r\n    locationPar.textContent = \"Route 007, Celadon City, Kanto\";\r\n\r\n    locationContainer.appendChild(locationHeader);\r\n    locationContainer.appendChild(locationPar);\r\n\r\n\r\n    homeContainer.appendChild(contentContainer);\r\n    return homeContainer;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage());\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction main() {\r\n    const content = document.querySelector('#content');\r\n    const headSection = (0,_header__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n    const homePage = _home__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\r\n    const contactPage = _contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\r\n    const menuPage = _menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\r\n\r\n    content.appendChild(headSection);\r\n    content.appendChild(homePage);\r\n    content.appendChild(menuPage);\r\n    content.appendChild(contactPage);\r\n}\r\n\r\nwindow.onload = main;\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _image_burger_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image/burger.png */ \"./src/image/burger.png\");\n/* harmony import */ var _image_fries_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image/fries.png */ \"./src/image/fries.png\");\n/* harmony import */ var _image_pepperoni_pizza_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image/pepperoni-pizza.png */ \"./src/image/pepperoni-pizza.png\");\n/* harmony import */ var _image_fresh_lumpia_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image/fresh-lumpia.png */ \"./src/image/fresh-lumpia.png\");\n/* harmony import */ var _image_spaghetti_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./image/spaghetti.png */ \"./src/image/spaghetti.png\");\n/* harmony import */ var _image_carbonara_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image/carbonara.png */ \"./src/image/carbonara.png\");\n/* harmony import */ var _image_orange_juice_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image/orange-juice.png */ \"./src/image/orange-juice.png\");\n/* harmony import */ var _image_Iced_Tea_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./image/Iced-Tea.png */ \"./src/image/Iced-Tea.png\");\n/* harmony import */ var _image_fast_food_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./image/fast-food.png */ \"./src/image/fast-food.png\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction createItem(img, name, prize) {\r\n    const item = document.createElement('div');\r\n    item.classList.add('menu-item');\r\n\r\n    const itemImg = document.createElement('img');\r\n    itemImg.src = img;\r\n\r\n    const itemName = document.createElement('h3');\r\n    itemName.textContent = name;\r\n\r\n    const itemPrice = document.createElement('span');\r\n    itemPrice.textContent = `$${prize.toFixed(2)}`;\r\n\r\n    const itemDesc = document.createElement('p');\r\n\r\n    item.appendChild(itemImg);\r\n    item.appendChild(itemName);\r\n    item.appendChild(itemPrice);\r\n    item.appendChild(itemDesc);\r\n    return item;\r\n}\r\n\r\nfunction menuPage() {\r\n    const menuContent = document.createElement('div');\r\n    menuContent.classList.add('menu-page');\r\n    menuContent.classList.add('hidden');\r\n\r\n    const menuLogoDiv = document.createElement('div');\r\n    menuLogoDiv.classList.add('menu-logo');\r\n    \r\n    const menuLogoImg = document.createElement('img');\r\n    menuLogoImg.src = _image_fast_food_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"];\r\n\r\n    const menuLogo = document.createElement('h2');\r\n    menuLogo.textContent = 'Menu';\r\n    menuLogoDiv.appendChild(menuLogoImg);\r\n    menuLogoDiv.appendChild(menuLogo);\r\n\r\n\r\n    const contentContainer = document.createElement('ul');\r\n    contentContainer.classList.add('content-container');\r\n\r\n    const hamBurger = createItem(\r\n        _image_burger_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n        \"hamburger\",\r\n        1.92,\r\n    );\r\n    contentContainer.appendChild(hamBurger);\r\n\r\n    const frenchFries = createItem(\r\n        _image_fries_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\r\n        \"french fries\",\r\n        0.58,\r\n    );\r\n    contentContainer.appendChild(frenchFries);\r\n\r\n    const pepperoni = createItem(\r\n        _image_pepperoni_pizza_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\r\n        \"pepperoni pizza\",\r\n        2.3,\r\n    );\r\n    contentContainer.appendChild(pepperoni);\r\n\r\n    const spaghetti = createItem(\r\n        _image_spaghetti_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\r\n        \"spaghetti\",\r\n        0.42,\r\n    );\r\n    contentContainer.appendChild(spaghetti);\r\n\r\n    const carbonara = createItem (\r\n        _image_carbonara_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\r\n        \"carbonara\",\r\n        0.41,\r\n    );\r\n    contentContainer.appendChild(carbonara);\r\n\r\n    const freshLumpia = createItem(\r\n        _image_fresh_lumpia_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\r\n        \"fresh lumpia\",\r\n        2.0,\r\n    );\r\n    contentContainer.appendChild(freshLumpia);\r\n\r\n    const orangeJuice = createItem(\r\n        _image_orange_juice_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\r\n        \"orange juice\",\r\n        0.33,\r\n    );\r\n    contentContainer.appendChild(orangeJuice);\r\n\r\n    const icedTea = createItem(\r\n        _image_Iced_Tea_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\r\n        \"iced tea\",\r\n        0.33,\r\n    );\r\n    contentContainer.appendChild(icedTea);\r\n\r\n    menuContent.appendChild(menuLogoDiv);\r\n    menuContent.appendChild(contentContainer);\r\n    return menuContent;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage());\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/fonts/Fredoka-VariableFont_wdth,wght.ttf":
/*!******************************************************!*\
  !*** ./src/fonts/Fredoka-VariableFont_wdth,wght.ttf ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1cfa1639746e014c46fc.ttf\";\n\n//# sourceURL=webpack://restaurant-page/./src/fonts/Fredoka-VariableFont_wdth,wght.ttf?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;