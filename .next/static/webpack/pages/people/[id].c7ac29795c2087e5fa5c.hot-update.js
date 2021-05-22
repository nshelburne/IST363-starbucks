webpackHotUpdate_N_E("pages/people/[id]",{

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
      content = personItemData.content,
      jobInfor = personItemData.jobInfor;
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
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: [" ", jobInfor.experience]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: jobInfor.jobTitle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      dangerouslySetInnerHTML: {
        __html: content
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGVvcGxlLy5qcyJdLCJuYW1lcyI6WyJwZW9wbGVJdGVtIiwicGVyc29uSXRlbURhdGEiLCJ0aXRsZSIsImZlYXR1cmVkSW1hZ2UiLCJjb250ZW50Iiwiam9iSW5mb3IiLCJub2RlIiwic291cmNlVXJsIiwibWVkaWFEZXRhaWxzIiwiYWx0VGV4dCIsIndpZHRoIiwiaGVpZ2h0Iiwic2l0ZVRpdGxlIiwiZXhwZXJpZW5jZSIsImpvYlRpdGxlIiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUE2QmUsU0FBU0EsVUFBVCxPQUFzQztBQUFBLE1BQWpCQyxjQUFpQixRQUFqQkEsY0FBaUI7QUFBQSxNQUMxQ0MsS0FEMEMsR0FDQ0QsY0FERCxDQUMxQ0MsS0FEMEM7QUFBQSxNQUNuQ0MsYUFEbUMsR0FDQ0YsY0FERCxDQUNuQ0UsYUFEbUM7QUFBQSxNQUNwQkMsT0FEb0IsR0FDQ0gsY0FERCxDQUNwQkcsT0FEb0I7QUFBQSxNQUNYQyxRQURXLEdBQ0NKLGNBREQsQ0FDWEksUUFEVztBQUFBLDRCQUVORixhQUFhLENBQUNHLElBRlI7QUFBQSxNQUUxQ0MsU0FGMEMsdUJBRTFDQSxTQUYwQztBQUFBLE1BRS9CQyxZQUYrQix1QkFFL0JBLFlBRitCO0FBQUEsTUFFakJDLE9BRmlCLHVCQUVqQkEsT0FGaUI7QUFBQSxNQUcxQ0MsS0FIMEMsR0FHMUJGLFlBSDBCLENBRzFDRSxLQUgwQztBQUFBLE1BR3BDQyxNQUhvQyxHQUcxQkgsWUFIMEIsQ0FHcENHLE1BSG9DO0FBS2pELHNCQUNJLHFFQUFDLDBEQUFEO0FBQUEsNEJBQ0kscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDSTtBQUFBLG1CQUFRQyw0REFBUixTQUFzQlYsS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBSUkscUVBQUMsdURBQUQ7QUFBQSw2QkFDSSxxRUFBQyx1REFBRDtBQUFBLCtCQUNJLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFDLFNBQVg7QUFBQSxpQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKLGVBV0kscUVBQUMsaURBQUQ7QUFDSSxTQUFHLEVBQUVLLFNBRFQ7QUFFSSxXQUFLLEVBQUVHLEtBRlg7QUFHSSxZQUFNLEVBQUVDLE1BSFo7QUFJSSxTQUFHLEVBQUVGO0FBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhKLGVBaUJJO0FBQUEsZ0JBQUtQO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpCSixlQWtCSTtBQUFBLHNCQUFLRyxRQUFRLENBQUNRLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbEJKLGVBbUJJO0FBQUEsZ0JBQUlSLFFBQVEsQ0FBQ1M7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkJKLGVBcUJJO0FBQUssNkJBQXVCLEVBQUU7QUFBQ0MsY0FBTSxFQUFFWDtBQUFUO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFyQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUF5QkgiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGVvcGxlL1tpZF0uYzdhYzI5Nzk1YzIwODdlNWZhNWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQsIHsgc2l0ZVRpdGxlIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUm93IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcm93JztcclxuaW1wb3J0IENvbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbCc7XHJcbmltcG9ydCB7Z2V0UGVvcGxlTGlzdCwgZ2V0UGVyc29uQnlTbHVnfSBmcm9tICcuLi8uLi9saWIvYXBpJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAgIGNvbnN0IGFsbFNsdWdzID0gYXdhaXQgZ2V0UGVvcGxlTGlzdCgpO1xyXG4gICAgY29uc3QgcGF0aHMgPSBhbGxTbHVncy5lZGdlcy5tYXAoZWRnZSA9PiB7XHJcbiAgICAgICAgY29uc3Qge3NsdWd9ID0gZWRnZS5ub2RlO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHBhcmFtczogeyBcclxuICAgICAgICAgICAgICAgIGlkOiBzbHVnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF0aHMsXHJcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7cGFyYW1zfSkge1xyXG4gICAgY29uc3QgcGVyc29uSXRlbURhdGEgPSBhd2FpdCBnZXRQZXJzb25CeVNsdWcgKHBhcmFtcy5pZClcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHsgXHJcbiAgICAgICAgICAgIHBlcnNvbkl0ZW1EYXRhXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwZW9wbGVJdGVtKHtwZXJzb25JdGVtRGF0YX0pIHtcclxuICAgIGNvbnN0IHt0aXRsZSwgZmVhdHVyZWRJbWFnZSwgY29udGVudCwgam9iSW5mb3J9ID0gcGVyc29uSXRlbURhdGE7XHJcbiAgICBjb25zdCB7c291cmNlVXJsLCBtZWRpYURldGFpbHMsIGFsdFRleHR9ID0gZmVhdHVyZWRJbWFnZS5ub2RlO1xyXG4gICAgY29uc3Qge3dpZHRoLGhlaWdodH0gPSBtZWRpYURldGFpbHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT57c2l0ZVRpdGxlfSAtIHt0aXRsZX0gPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvcGVvcGxlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+U2VlIG1vcmUgdGVhbSBtZW1iZXJzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPEltYWdlIFxyXG4gICAgICAgICAgICAgICAgc3JjPXtzb3VyY2VVcmx9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17d2lkdGh9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cclxuICAgICAgICAgICAgICAgIGFsdD17YWx0VGV4dH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxyXG4gICAgICAgICAgICA8cD4ge2pvYkluZm9yLmV4cGVyaWVuY2V9PC9wPlxyXG4gICAgICAgICAgICA8cD57am9iSW5mb3Iuam9iVGl0bGV9PC9wPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogY29udGVudH19Lz5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9