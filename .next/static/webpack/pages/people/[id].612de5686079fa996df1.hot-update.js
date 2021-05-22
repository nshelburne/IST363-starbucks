webpackHotUpdate_N_E("pages/people/[id]",{

/***/ "./lib/api.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
false,

/***/ "./node_modules/process/browser.js":
false,

/***/ "./pages/people/[id].js":
/*!******************************!*\
  !*** ./pages/people/[id].js ***!
  \******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return peopleItem; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/row */ "./components/row.js");
/* harmony import */ var _components_col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/col */ "./components/col.js");

var _jsxFileName = "C:\\Users\\nsnad\\Desktop\\ist363-nextjs\\pages\\people\\[id].js";






var __N_SSG = true;
function peopleItem(_ref) {
  var personItemData = _ref.personItemData;
  var title = personItemData.title,
      featuredImage = personItemData.featuredImage,
      content = personItemData.content;
  var _featuredImage$node = featuredImage.node,
      sourceUrl = _featuredImage$node.sourceUrl,
      mediaDetails = _featuredImage$node.mediaDetails,
      altText = _featuredImage$node.altText;
  var width = mediaDetails.width,
      height = mediaDetails.height;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: [_components_layout__WEBPACK_IMPORTED_MODULE_1__["siteTitle"], " - ", title, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_row__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_col__WEBPACK_IMPORTED_MODULE_6__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/people",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: "See more team members"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
      src: sourceUrl,
      width: width,
      height: height,
      alt: altText
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      dangerouslySetInnerHTML: {
        __html: content
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 9
  }, this);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGVvcGxlLy5qcyJdLCJuYW1lcyI6WyJwZW9wbGVJdGVtIiwicGVyc29uSXRlbURhdGEiLCJ0aXRsZSIsImZlYXR1cmVkSW1hZ2UiLCJjb250ZW50Iiwibm9kZSIsInNvdXJjZVVybCIsIm1lZGlhRGV0YWlscyIsImFsdFRleHQiLCJ3aWR0aCIsImhlaWdodCIsInNpdGVUaXRsZSIsIl9faHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBNkJlLFNBQVNBLFVBQVQsT0FBc0M7QUFBQSxNQUFqQkMsY0FBaUIsUUFBakJBLGNBQWlCO0FBQUEsTUFDMUNDLEtBRDBDLEdBQ1RELGNBRFMsQ0FDMUNDLEtBRDBDO0FBQUEsTUFDbkNDLGFBRG1DLEdBQ1RGLGNBRFMsQ0FDbkNFLGFBRG1DO0FBQUEsTUFDcEJDLE9BRG9CLEdBQ1RILGNBRFMsQ0FDcEJHLE9BRG9CO0FBQUEsNEJBRU5ELGFBQWEsQ0FBQ0UsSUFGUjtBQUFBLE1BRTFDQyxTQUYwQyx1QkFFMUNBLFNBRjBDO0FBQUEsTUFFL0JDLFlBRitCLHVCQUUvQkEsWUFGK0I7QUFBQSxNQUVqQkMsT0FGaUIsdUJBRWpCQSxPQUZpQjtBQUFBLE1BRzFDQyxLQUgwQyxHQUcxQkYsWUFIMEIsQ0FHMUNFLEtBSDBDO0FBQUEsTUFHcENDLE1BSG9DLEdBRzFCSCxZQUgwQixDQUdwQ0csTUFIb0M7QUFLakQsc0JBQ0kscUVBQUMsMERBQUQ7QUFBQSw0QkFDSSxxRUFBQyxnREFBRDtBQUFBLDZCQUNJO0FBQUEsbUJBQVFDLDREQUFSLFNBQXNCVCxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFJSSxxRUFBQyx1REFBRDtBQUFBLDZCQUNJLHFFQUFDLHVEQUFEO0FBQUEsK0JBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUMsU0FBWDtBQUFBLGlDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkosZUFXSSxxRUFBQyxpREFBRDtBQUNJLFNBQUcsRUFBRUksU0FEVDtBQUVJLFdBQUssRUFBRUcsS0FGWDtBQUdJLFlBQU0sRUFBRUMsTUFIWjtBQUlJLFNBQUcsRUFBRUY7QUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEosZUFpQkk7QUFBQSxnQkFBS047QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakJKLGVBa0JJO0FBQUssNkJBQXVCLEVBQUU7QUFBQ1UsY0FBTSxFQUFFUjtBQUFUO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFzQkgiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGVvcGxlL1tpZF0uNjEyZGU1Njg2MDc5ZmE5OTZkZjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQsIHsgc2l0ZVRpdGxlIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUm93IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcm93JztcclxuaW1wb3J0IENvbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbCc7XHJcbmltcG9ydCB7Z2V0UGVvcGxlTGlzdCwgZ2V0UGVyc29uQnlTbHVnfSBmcm9tICcuLi8uLi9saWIvYXBpJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAgIGNvbnN0IGFsbFNsdWdzID0gYXdhaXQgZ2V0UGVvcGxlTGlzdCgpO1xyXG4gICAgY29uc3QgcGF0aHMgPSBhbGxTbHVncy5lZGdlcy5tYXAoZWRnZSA9PiB7XHJcbiAgICAgICAgY29uc3Qge3NsdWd9ID0gZWRnZS5ub2RlO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHBhcmFtczogeyBcclxuICAgICAgICAgICAgICAgIGlkOiBzbHVnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF0aHMsXHJcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7cGFyYW1zfSkge1xyXG4gICAgY29uc3QgcGVyc29uSXRlbURhdGEgPSBhd2FpdCBnZXRQZXJzb25CeVNsdWcgKHBhcmFtcy5pZClcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHsgXHJcbiAgICAgICAgICAgIHBlcnNvbkl0ZW1EYXRhXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwZW9wbGVJdGVtKHtwZXJzb25JdGVtRGF0YX0pIHtcclxuICAgIGNvbnN0IHt0aXRsZSwgZmVhdHVyZWRJbWFnZSwgY29udGVudH0gPSBwZXJzb25JdGVtRGF0YTtcclxuICAgIGNvbnN0IHtzb3VyY2VVcmwsIG1lZGlhRGV0YWlscywgYWx0VGV4dH0gPSBmZWF0dXJlZEltYWdlLm5vZGU7XHJcbiAgICBjb25zdCB7d2lkdGgsaGVpZ2h0fSA9IG1lZGlhRGV0YWlscztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPntzaXRlVGl0bGV9IC0ge3RpdGxlfSA8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9wZW9wbGUnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5TZWUgbW9yZSB0ZWFtIG1lbWJlcnM8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8SW1hZ2UgXHJcbiAgICAgICAgICAgICAgICBzcmM9e3NvdXJjZVVybH1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cclxuICAgICAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxyXG4gICAgICAgICAgICAgICAgYWx0PXthbHRUZXh0fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aDE+e3RpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGNvbnRlbnR9fS8+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==