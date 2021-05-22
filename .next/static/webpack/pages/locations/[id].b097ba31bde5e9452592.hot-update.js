webpackHotUpdate_N_E("pages/locations/[id]",{

/***/ "./pages/locations/[id].js":
/*!*********************************!*\
  !*** ./pages/locations/[id].js ***!
  \*********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LocationItem; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/section */ "./components/section.js");
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/card */ "./components/card.js");
/* harmony import */ var _components_row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/row */ "./components/row.js");
/* harmony import */ var _components_col__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/col */ "./components/col.js");
/* harmony import */ var _components_heading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/heading */ "./components/heading.js");

var _jsxFileName = "C:\\Users\\nsnad\\Desktop\\ist363-nextjs\\pages\\locations\\[id].js";









var __N_SSG = true;
function LocationItem(_ref) {
  var _this = this;

  var locationItemData = _ref.locationItemData;
  var title = locationItemData.title,
      featuredImage = locationItemData.featuredImage,
      content = locationItemData.content,
      menuTypes = locationItemData.menuTypes,
      store = locationItemData.store;
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
        lineNumber: 47,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_row__WEBPACK_IMPORTED_MODULE_7__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_col__WEBPACK_IMPORTED_MODULE_8__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: "/locations",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: "See our other locations"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, {
      src: sourceUrl,
      width: width,
      height: height,
      alt: altText
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      dangerouslySetInnerHTML: {
        __html: content
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_heading__WEBPACK_IMPORTED_MODULE_9__["default"], {
      type: "h1",
      children: "Menu"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }, this), menuTypes.edges.map(function (edge) {
      var _edge$node = edge.node,
          name = _edge$node.name,
          items = _edge$node.items;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_section__WEBPACK_IMPORTED_MODULE_5__["default"], {
        title: name,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_row__WEBPACK_IMPORTED_MODULE_7__["default"], {
          justifyContentCenter: true,
          children: items.edges.map(function (edge, index) {
            var node = edge.node;
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_col__WEBPACK_IMPORTED_MODULE_8__["default"], {
              sm: 6,
              md: 4,
              lg: 3,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_card__WEBPACK_IMPORTED_MODULE_6__["default"], {
                node: node,
                returnPage: "menu"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 29
              }, _this)
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 32
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 24
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 9
  }, this);
}
_c = LocationItem;

var _c;

$RefreshReg$(_c, "LocationItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9jYXRpb25zLy5qcyJdLCJuYW1lcyI6WyJMb2NhdGlvbkl0ZW0iLCJsb2NhdGlvbkl0ZW1EYXRhIiwidGl0bGUiLCJmZWF0dXJlZEltYWdlIiwiY29udGVudCIsIm1lbnVUeXBlcyIsInN0b3JlIiwibm9kZSIsInNvdXJjZVVybCIsIm1lZGlhRGV0YWlscyIsImFsdFRleHQiLCJ3aWR0aCIsImhlaWdodCIsInNpdGVUaXRsZSIsIl9faHRtbCIsImVkZ2VzIiwibWFwIiwiZWRnZSIsIm5hbWUiLCJpdGVtcyIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUE4QmUsU0FBU0EsWUFBVCxPQUEwQztBQUFBOztBQUFBLE1BQW5CQyxnQkFBbUIsUUFBbkJBLGdCQUFtQjtBQUFBLE1BQzlDQyxLQUQ4QyxHQUNLRCxnQkFETCxDQUM5Q0MsS0FEOEM7QUFBQSxNQUN2Q0MsYUFEdUMsR0FDS0YsZ0JBREwsQ0FDdkNFLGFBRHVDO0FBQUEsTUFDeEJDLE9BRHdCLEdBQ0tILGdCQURMLENBQ3hCRyxPQUR3QjtBQUFBLE1BQ2ZDLFNBRGUsR0FDS0osZ0JBREwsQ0FDZkksU0FEZTtBQUFBLE1BQ0pDLEtBREksR0FDS0wsZ0JBREwsQ0FDSkssS0FESTtBQUFBLDRCQUVWSCxhQUFhLENBQUNJLElBRko7QUFBQSxNQUU5Q0MsU0FGOEMsdUJBRTlDQSxTQUY4QztBQUFBLE1BRW5DQyxZQUZtQyx1QkFFbkNBLFlBRm1DO0FBQUEsTUFFckJDLE9BRnFCLHVCQUVyQkEsT0FGcUI7QUFBQSxNQUc5Q0MsS0FIOEMsR0FHOUJGLFlBSDhCLENBRzlDRSxLQUg4QztBQUFBLE1BR3hDQyxNQUh3QyxHQUc5QkgsWUFIOEIsQ0FHeENHLE1BSHdDO0FBS3JELHNCQUNJLHFFQUFDLDBEQUFEO0FBQUEsNEJBQ0kscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDSTtBQUFBLG1CQUFRQyw0REFBUixTQUFzQlgsS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBSUkscUVBQUMsdURBQUQ7QUFBQSw2QkFDSSxxRUFBQyx1REFBRDtBQUFBLCtCQUNJLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFDLFlBQVg7QUFBQSxpQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKLGVBV0kscUVBQUMsaURBQUQ7QUFDSSxTQUFHLEVBQUVNLFNBRFQ7QUFFSSxXQUFLLEVBQUVHLEtBRlg7QUFHSSxZQUFNLEVBQUVDLE1BSFo7QUFJSSxTQUFHLEVBQUVGO0FBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhKLGVBaUJJO0FBQUEsZ0JBQUtSO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpCSixlQWtCSTtBQUFLLDZCQUF1QixFQUFFO0FBQUNZLGNBQU0sRUFBRVY7QUFBVDtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbEJKLGVBbUJJLHFFQUFDLDJEQUFEO0FBQVMsVUFBSSxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuQkosRUFvQktDLFNBQVMsQ0FBQ1UsS0FBVixDQUFnQkMsR0FBaEIsQ0FBb0IsVUFBQUMsSUFBSSxFQUFHO0FBQUEsdUJBQ0ZBLElBQUksQ0FBQ1YsSUFESDtBQUFBLFVBQ2pCVyxJQURpQixjQUNqQkEsSUFEaUI7QUFBQSxVQUNYQyxLQURXLGNBQ1hBLEtBRFc7QUFFeEIsMEJBQU8scUVBQUMsMkRBQUQ7QUFBUyxhQUFLLEVBQUVELElBQWhCO0FBQUEsK0JBQ0gscUVBQUMsdURBQUQ7QUFBSyw4QkFBb0IsTUFBekI7QUFBQSxvQkFDQ0MsS0FBSyxDQUFDSixLQUFOLENBQVlDLEdBQVosQ0FBZ0IsVUFBQ0MsSUFBRCxFQUFPRyxLQUFQLEVBQWdCO0FBQUEsZ0JBQ3RCYixJQURzQixHQUNkVSxJQURjLENBQ3RCVixJQURzQjtBQUU3QixnQ0FBTyxxRUFBQyx1REFBRDtBQUFLLGdCQUFFLEVBQUUsQ0FBVDtBQUFZLGdCQUFFLEVBQUUsQ0FBaEI7QUFBbUIsZ0JBQUUsRUFBRSxDQUF2QjtBQUFBLHFDQUNILHFFQUFDLHdEQUFEO0FBQU0sb0JBQUksRUFBRUEsSUFBWjtBQUFrQiwwQkFBVSxFQUFDO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERyxlQUErQmEsS0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBUDtBQUdILFdBTEE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREc7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBVUgsS0FaQSxDQXBCTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXFDSDtLQTFDdUJwQixZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvY2F0aW9ucy9baWRdLmIwOTdiYTMxYmRlNWU5NDUyNTkyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0LCB7IHNpdGVUaXRsZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9zZWN0aW9uJztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jYXJkJztcclxuaW1wb3J0IFJvdyBmcm9tICcuLi8uLi9jb21wb25lbnRzL3Jvdyc7XHJcbmltcG9ydCBDb2wgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb2wnO1xyXG5pbXBvcnQgSGVhZGluZyBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hlYWRpbmcnO1xyXG5pbXBvcnQge2dldExvY2F0aW9uSXRlbXMsIGdldExvY2F0aW9uSXRlbUJ5U2x1Z30gZnJvbSAnLi4vLi4vbGliL2FwaSc7XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gICAgY29uc3QgYWxsU2x1Z3MgPSBhd2FpdCBnZXRMb2NhdGlvbkl0ZW1zKCk7XHJcbiAgICBjb25zdCBwYXRocyA9IGFsbFNsdWdzLmVkZ2VzLm1hcChlZGdlID0+IHtcclxuICAgICAgICBjb25zdCB7c2x1Z30gPSBlZGdlLm5vZGU7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcGFyYW1zOiB7IFxyXG4gICAgICAgICAgICAgICAgaWQ6IHNsdWdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRocyxcclxuICAgICAgICBmYWxsYmFjazogZmFsc2VcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHtwYXJhbXN9KSB7XHJcbiAgICBjb25zdCBsb2NhdGlvbkl0ZW1EYXRhID0gYXdhaXQgZ2V0TG9jYXRpb25JdGVtQnlTbHVnIChwYXJhbXMuaWQpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7IFxyXG4gICAgICAgICAgICBsb2NhdGlvbkl0ZW1EYXRhXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2NhdGlvbkl0ZW0oe2xvY2F0aW9uSXRlbURhdGF9KSB7XHJcbiAgICBjb25zdCB7dGl0bGUsIGZlYXR1cmVkSW1hZ2UsIGNvbnRlbnQsIG1lbnVUeXBlcywgc3RvcmV9ID0gbG9jYXRpb25JdGVtRGF0YTtcclxuICAgIGNvbnN0IHtzb3VyY2VVcmwsIG1lZGlhRGV0YWlscywgYWx0VGV4dH0gPSBmZWF0dXJlZEltYWdlLm5vZGU7XHJcbiAgICBjb25zdCB7d2lkdGgsaGVpZ2h0fSA9IG1lZGlhRGV0YWlscztcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPntzaXRlVGl0bGV9IC0ge3RpdGxlfSA8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9sb2NhdGlvbnMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5TZWUgb3VyIG90aGVyIGxvY2F0aW9uczwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDxJbWFnZSBcclxuICAgICAgICAgICAgICAgIHNyYz17c291cmNlVXJsfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XHJcbiAgICAgICAgICAgICAgICBhbHQ9e2FsdFRleHR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxoMT57dGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogY29udGVudH19Lz5cclxuICAgICAgICAgICAgPEhlYWRpbmcgdHlwZT1cImgxXCI+TWVudTwvSGVhZGluZz5cclxuICAgICAgICAgICAge21lbnVUeXBlcy5lZGdlcy5tYXAoZWRnZT0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtuYW1lLCBpdGVtc30gPSBlZGdlLm5vZGU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPFNlY3Rpb24gdGl0bGU9e25hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3cganVzdGlmeUNvbnRlbnRDZW50ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW1zLmVkZ2VzLm1hcCgoZWRnZSwgaW5kZXgpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7bm9kZX0gPSBlZGdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENvbCBzbT17Nn0gbWQ9ezR9IGxnPXszfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIG5vZGU9e25vZGV9IHJldHVyblBhZ2U9XCJtZW51XCIvPiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=