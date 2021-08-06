/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend_capstone"] = self["webpackChunkfrontend_capstone"] || []).push([["client_components_ratings-review_ProductBreakdown_ProductBreakdown_jsx"],{

/***/ "./client/components/ratings-review/ProductBreakdown/Characteristic.jsx":
/*!******************************************************************************!*\
  !*** ./client/components/ratings-review/ProductBreakdown/Characteristic.jsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _Ratings_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Ratings.css */ \"./client/components/ratings-review/Ratings.css\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar Characteristic = function Characteristic(props) {\n  var showChars = Object.keys(props.productCharacteristics);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState2 = _slicedToArray(_useState, 2),\n      showSize = _useState2[0],\n      setShowSize = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      _useState4 = _slicedToArray(_useState3, 2),\n      sizeNum = _useState4[0],\n      setSizeNum = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState6 = _slicedToArray(_useState5, 2),\n      showFit = _useState6[0],\n      setShowFit = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      _useState8 = _slicedToArray(_useState7, 2),\n      fitNum = _useState8[0],\n      setFitNum = _useState8[1];\n\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState10 = _slicedToArray(_useState9, 2),\n      showLength = _useState10[0],\n      setShowLength = _useState10[1];\n\n  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      _useState12 = _slicedToArray(_useState11, 2),\n      lengthNum = _useState12[0],\n      setLengthNum = _useState12[1];\n\n  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState14 = _slicedToArray(_useState13, 2),\n      showComfort = _useState14[0],\n      setShowComfort = _useState14[1];\n\n  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      _useState16 = _slicedToArray(_useState15, 2),\n      comfortNum = _useState16[0],\n      setComfortNum = _useState16[1];\n\n  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState18 = _slicedToArray(_useState17, 2),\n      showQuality = _useState18[0],\n      setShowQuality = _useState18[1];\n\n  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      _useState20 = _slicedToArray(_useState19, 2),\n      qualityNum = _useState20[0],\n      setQualityNum = _useState20[1];\n\n  var convertPercentage = function convertPercentage(num) {\n    var newNum = Number(num);\n    var resultNum = Math.round(num / 5 * 100);\n    return resultNum;\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (showChars.indexOf('Size') !== -1) {\n      var calcSizeNum = convertPercentage(props.productCharacteristics['Size']['value']);\n      setSizeNum(calcSizeNum);\n      setShowSize(true);\n    }\n\n    if (showChars.indexOf('Fit') !== -1) {\n      var calcFitNum = convertPercentage(props.productCharacteristics['Fit']['value']);\n      setFitNum(calcFitNum);\n      setShowFit(true);\n    }\n\n    if (showChars.indexOf('Length') !== -1) {\n      var calcLengthNum = convertPercentage(props.productCharacteristics['Length']['value']);\n      setSizeNum(calcLengthNum);\n      setShowLength(true);\n    }\n\n    if (showChars.indexOf('Comfort') !== -1) {\n      var calcComfortNum = convertPercentage(props.productCharacteristics['Comfort']['value']);\n      setComfortNum(calcComfortNum);\n      setShowComfort(true);\n    }\n\n    if (showChars.indexOf('Quality') !== -1) {\n      var calcQualityNum = convertPercentage(props.productCharacteristics['Quality']['value']);\n      setQualityNum(calcQualityNum);\n      setShowQuality(true);\n    }\n  }, [showChars]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, showSize && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"size\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", {\n    className: \"decriptionText\"\n  }, \"Size\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"characterBar\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"triangle\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", {\n    className: \"fa fa-caret-up fa-2x\",\n    \"aria-hidden\": \"true\",\n    style: {\n      \"paddingLeft\": \"\".concat(sizeNum, \"%\")\n    }\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"descriptions\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"leftText\"\n  }, \"Fits Tight\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"rightText\"\n  }, \"Fits Loose\"))), showFit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"fit\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", {\n    className: \"decriptionText\"\n  }, \"Fit\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"characterBar\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"triangle\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", {\n    className: \"fa fa-caret-up fa-2x\",\n    \"aria-hidden\": \"true\",\n    style: {\n      \"paddingLeft\": \"\".concat(fitNum, \"%\")\n    }\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"descriptions\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"leftText\"\n  }, \"MouseFeet\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"rightText\"\n  }, \"ClownTown\"))), showLength && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"fit\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", {\n    className: \"decriptionText\"\n  }, \"Length\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"characterBar\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"triangle\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", {\n    className: \"fa fa-caret-up fa-2x\",\n    \"aria-hidden\": \"true\",\n    style: {\n      \"paddingLeft\": \"\".concat(lengthNum, \"%\")\n    }\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"descriptions\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"leftText\"\n  }, \"Too Short\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"rightText\"\n  }, \"Too Long\"))), showComfort && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"fit\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", {\n    className: \"decriptionText\"\n  }, \"Comfort\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"characterBar\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"triangle\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", {\n    className: \"fa fa-caret-up fa-2x\",\n    \"aria-hidden\": \"true\",\n    style: {\n      \"paddingLeft\": \"\".concat(comfortNum, \"%\")\n    }\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"descriptions\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"leftText\"\n  }, \"Feels like a cloud\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"rightText\"\n  }, \"It would hurt if mom hit you with this\"))), showQuality && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"fit\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", {\n    className: \"decriptionText\"\n  }, \"Quality\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"characterBar\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"triangle\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"i\", {\n    className: \"fa fa-caret-up fa-2x\",\n    \"aria-hidden\": \"true\",\n    style: {\n      \"paddingLeft\": \"\".concat(qualityNum, \"%\")\n    }\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"descriptions\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"leftText\"\n  }, \"Poor\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"rightText\"\n  }, \"Gucci\"))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Characteristic);\n\n//# sourceURL=webpack://frontend-capstone/./client/components/ratings-review/ProductBreakdown/Characteristic.jsx?");

/***/ }),

/***/ "./client/components/ratings-review/ProductBreakdown/ProductBreakdown.jsx":
/*!********************************************************************************!*\
  !*** ./client/components/ratings-review/ProductBreakdown/ProductBreakdown.jsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _ProductContext_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ProductContext.jsx */ \"./client/ProductContext.jsx\");\n/* harmony import */ var _Characteristic_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Characteristic.jsx */ \"./client/components/ratings-review/ProductBreakdown/Characteristic.jsx\");\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../config.js */ \"./config.js\");\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Ratings_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../Ratings.css */ \"./client/components/ratings-review/Ratings.css\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\nvar ProductBreakdown = function ProductBreakdown(props) {\n  var currentProduct = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_ProductContext_jsx__WEBPACK_IMPORTED_MODULE_1__.ProductContext);\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),\n      _useState2 = _slicedToArray(_useState, 2),\n      metaData = _useState2[0],\n      setMetaData = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState4 = _slicedToArray(_useState3, 2),\n      isLoading = _useState4[0],\n      setLoading = _useState4[1];\n\n  var productId = currentProduct.id;\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var myHeaders = new Headers();\n    myHeaders.append(\"Authorization\", \"\".concat((_config_js__WEBPACK_IMPORTED_MODULE_3___default().TOKEN)), 'Content-Type', 'application/json');\n    var requestOptions = {\n      method: 'GET',\n      headers: myHeaders,\n      redirect: 'follow'\n    };\n    fetch(\"https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta/?product_id=17070\", requestOptions).then(function (response) {\n      return response.json();\n    }).then(function (result) {\n      return setMetaData(result);\n    }).then(function (result) {\n      setLoading(true);\n    })[\"catch\"](function (error) {\n      return console.log('error', error);\n    });\n  }, [productId]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"productBreakdown\"\n  }, isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Characteristic_jsx__WEBPACK_IMPORTED_MODULE_2__.default, {\n    productCharacteristics: metaData.characteristics\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductBreakdown);\n\n//# sourceURL=webpack://frontend-capstone/./client/components/ratings-review/ProductBreakdown/ProductBreakdown.jsx?");

/***/ })

}]);