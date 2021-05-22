webpackHotUpdate_N_E("pages/people/[id]",{

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/*! exports provided: getAllMenuItems, getAllMenuItemSlugs, getMenuItemBySlug, getMenuTypesAndMenuItems, getLocationItems, getLocationItemBySlug, getPeopleList, getPeopleListBySlug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllMenuItems", function() { return getAllMenuItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllMenuItemSlugs", function() { return getAllMenuItemSlugs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMenuItemBySlug", function() { return getMenuItemBySlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMenuTypesAndMenuItems", function() { return getMenuTypesAndMenuItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocationItems", function() { return getLocationItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocationItemBySlug", function() { return getLocationItemBySlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPeopleList", function() { return getPeopleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPeopleListBySlug", function() { return getPeopleListBySlug; });
/* harmony import */ var C_Users_nsnad_Desktop_ist363_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_nsnad_Desktop_ist363_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_nsnad_Desktop_ist363_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_nsnad_Desktop_ist363_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");


var API_URL = process.env.WORDPRESS_API_URL;

function fetchAPI(_x) {
  return _fetchAPI.apply(this, arguments);
}

function _fetchAPI() {
  _fetchAPI = Object(C_Users_nsnad_Desktop_ist363_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_nsnad_Desktop_ist363_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(query) {
    var _ref,
        variables,
        headers,
        res,
        json,
        _args = arguments;

    return C_Users_nsnad_Desktop_ist363_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref = _args.length > 1 && _args[1] !== undefined ? _args[1] : {}, variables = _ref.variables;
            headers = {
              'Content-Type': 'application/json'
            };
            _context.next = 4;
            return fetch(API_URL, {
              method: 'POST',
              headers: headers,
              body: JSON.stringify({
                query: query,
                variables: variables
              })
            });

          case 4:
            res = _context.sent;
            _context.next = 7;
            return res.json();

          case 7:
            json = _context.sent;

            if (!json.errors) {
              _context.next = 11;
              break;
            }

            console.error(json.errors);
            throw new Error('Failed to fetch API');

          case 11:
            return _context.abrupt("return", json.data);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchAPI.apply(this, arguments);
}

function getAllMenuItems() {
  return _getAllMenuItems.apply(this, arguments);
}

function _getAllMenuItems() {
  _getAllMenuItems = Object(C_Users_nsnad_Desktop_ist363_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_nsnad_Desktop_ist363_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    var data;
    return C_Users_nsnad_Desktop_ist363_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetchAPI("\n        query MyQuery {\n            items {\n                edges {\n                    node {\n                        id\n                        title\n                        slug\n                        featuredImage {\n                            node {\n                            altText\n                            mediaDetails {\n                                height\n                                width\n                            }\n                            sourceUrl\n                            }\n                        }\n                    }\n                }\n            }\n        }      \n\t");

          case 2:
            data = _context2.sent;
            return _context2.abrupt("return", data === null || data === void 0 ? void 0 : data.items);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getAllMenuItems.apply(this, arguments);
}

function getAllMenuItemSlugs() {
  return _getAllMenuItemSlugs.apply(this, arguments);
}

function _getAllMenuItemSlugs() {
  _getAllMenuItemSlugs = Object(C_Users_nsnad_Desktop_ist363_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_nsnad_Desktop_ist363_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
    var data;
    return C_Users_nsnad_Desktop_ist363_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return fetchAPI("\n        query MyQuery {\n            items {\n                edges {\n                    node {\n                        id\n                        slug\n                    }\n                }\n            }\n        }      \n\t");

          case 2:
            data = _context3.sent;
            return _context3.abrupt("return", data === null || data === void 0 ? void 0 : data.items);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getAllMenuItemSlugs.apply(this, arguments);
}

function getMenuItemBySlug(_x2) {
  return _getMenuItemBySlug.apply(this, arguments);
}

function _getMenuItemBySlug() {
  _getMenuItemBySlug = Object(C_Users_nsnad_Desktop_ist363_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_nsnad_Desktop_ist363_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(id) {
    var data;
    return C_Users_nsnad_Desktop_ist363_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return fetchAPI("\n        query MyQuery($id: ID!) {\n            item(id: $id, idType: SLUG) {\n            id\n            title\n            content\n            featuredImage {\n                node {\n                    altText\n                    sourceUrl\n                    mediaDetails {\n                            height\n                            width\n                        }\n                    }\n                }\n            }\n        }", {
              variables: {
                "id": id
              }
            });

          case 2:
            data = _context4.sent;
            return _context4.abrupt("return", data === null || data === void 0 ? void 0 : data.item);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getMenuItemBySlug.apply(this, arguments);
}

function getMenuTypesAndMenuItems() {
  return _getMenuTypesAndMenuItems.apply(this, arguments);
}

function _getMenuTypesAndMenuItems() {
  _getMenuTypesAndMenuItems = Object(C_Users_nsnad_Desktop_ist363_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_nsnad_Desktop_ist363_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
    var data;
    return C_Users_nsnad_Desktop_ist363_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return fetchAPI("\n    query MyQuery {\n        menuTypes {\n          edges {\n            node {\n              id\n              name\n              items {\n                edges {\n                  node {\n                    id\n                    title\n                    slug\n                    featuredImage {\n                      node {\n                        altText\n                        sourceUrl\n                        mediaDetails {\n                          height\n                          width\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n      ");

          case 2:
            data = _context5.sent;
            return _context5.abrupt("return", data === null || data === void 0 ? void 0 : data.menuTypes);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _getMenuTypesAndMenuItems.apply(this, arguments);
}

function getLocationItems() {
  return _getLocationItems.apply(this, arguments);
}

function _getLocationItems() {
  _getLocationItems = Object(C_Users_nsnad_Desktop_ist363_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_nsnad_Desktop_ist363_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
    var data;
    return C_Users_nsnad_Desktop_ist363_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return fetchAPI("\n  query MyQuery {\n    locations {\n      edges {\n        node {\n          content\n          slug\n          title\n          id\n          featuredImage {\n            node {\n              altText\n              sourceUrl\n              mediaDetails {\n                height\n                width\n              }\n            }\n          }\n        }\n      }\n    }\n  }  \n  ");

          case 2:
            data = _context6.sent;
            return _context6.abrupt("return", data === null || data === void 0 ? void 0 : data.locations);

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _getLocationItems.apply(this, arguments);
}

function getLocationItemBySlug(_x3) {
  return _getLocationItemBySlug.apply(this, arguments);
}

function _getLocationItemBySlug() {
  _getLocationItemBySlug = Object(C_Users_nsnad_Desktop_ist363_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_nsnad_Desktop_ist363_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(id) {
    var data;
    return C_Users_nsnad_Desktop_ist363_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return fetchAPI("\n  query MyQuery($id: ID!) {\n    location(id: $id, idType: SLUG) {\n      id\n      title\n      content\n      featuredImage {\n        node {\n          altText\n          mediaDetails {\n            height\n            width\n          }\n          sourceUrl\n        }\n      }\n      menuTypes {\n        edges {\n          node {\n            id\n            name\n            items {\n              edges {\n                node {\n                  id\n                  title\n                  slug\n                  featuredImage {\n                    node {\n                      altText\n                      sourceUrl\n                      mediaDetails {\n                        height\n                        width\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n      store {\n        address\n        staff {\n          ... on Person {\n            id\n            title\n            featuredImage {\n              node {\n                altText\n                mediaDetails {\n                  height\n                  width\n                }\n                sourceUrl\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n  \n  \n  ", {
              variables: {
                "id": id
              }
            });

          case 2:
            data = _context7.sent;
            return _context7.abrupt("return", data === null || data === void 0 ? void 0 : data.location);

          case 4:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _getLocationItemBySlug.apply(this, arguments);
}

function getPeopleList() {
  return _getPeopleList.apply(this, arguments);
}

function _getPeopleList() {
  _getPeopleList = Object(C_Users_nsnad_Desktop_ist363_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_nsnad_Desktop_ist363_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
    var data;
    return C_Users_nsnad_Desktop_ist363_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return fetchAPI("\n  query MyQuery {\n    people {\n      edges {\n        node {\n          id\n          slug\n          title\n          featuredImage {\n            node {\n              altText\n              sourceUrl\n              mediaDetails {\n                height\n                width\n              }\n            }\n          }\n        }\n      }\n    }\n  }  \n  ");

          case 2:
            data = _context8.sent;
            return _context8.abrupt("return", data === null || data === void 0 ? void 0 : data.people);

          case 4:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _getPeopleList.apply(this, arguments);
}

function getPeopleListBySlug(_x4) {
  return _getPeopleListBySlug.apply(this, arguments);
}

function _getPeopleListBySlug() {
  _getPeopleListBySlug = Object(C_Users_nsnad_Desktop_ist363_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_nsnad_Desktop_ist363_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9(id) {
    var data;
    return C_Users_nsnad_Desktop_ist363_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return fetchAPI("\n  query MyQuery($id: ID!) {\n    people(id: $id, idType: SLUG) {\n      content\n      id\n      slug\n      title\n      featuredImage {\n        node {\n          altText\n          sourceUrl\n          mediaDetails {\n            height\n            width\n          }\n        }\n      }\n    }\n  }", {
              variables: {
                "id": id
              }
            });

          case 2:
            data = _context9.sent;
            return _context9.abrupt("return", data === null || data === void 0 ? void 0 : data.people);

          case 4:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));
  return _getPeopleListBySlug.apply(this, arguments);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

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
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2FwaS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Blb3BsZS8uanMiXSwibmFtZXMiOlsiQVBJX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJXT1JEUFJFU1NfQVBJX1VSTCIsImZldGNoQVBJIiwicXVlcnkiLCJ2YXJpYWJsZXMiLCJoZWFkZXJzIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcyIsImpzb24iLCJlcnJvcnMiLCJjb25zb2xlIiwiZXJyb3IiLCJFcnJvciIsImRhdGEiLCJnZXRBbGxNZW51SXRlbXMiLCJpdGVtcyIsImdldEFsbE1lbnVJdGVtU2x1Z3MiLCJnZXRNZW51SXRlbUJ5U2x1ZyIsImlkIiwiaXRlbSIsImdldE1lbnVUeXBlc0FuZE1lbnVJdGVtcyIsIm1lbnVUeXBlcyIsImdldExvY2F0aW9uSXRlbXMiLCJsb2NhdGlvbnMiLCJnZXRMb2NhdGlvbkl0ZW1CeVNsdWciLCJsb2NhdGlvbiIsImdldFBlb3BsZUxpc3QiLCJwZW9wbGUiLCJnZXRQZW9wbGVMaXN0QnlTbHVnIiwicGVvcGxlSXRlbSIsInBlcnNvbkl0ZW1EYXRhIiwidGl0bGUiLCJmZWF0dXJlZEltYWdlIiwiY29udGVudCIsIm5vZGUiLCJzb3VyY2VVcmwiLCJtZWRpYURldGFpbHMiLCJhbHRUZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJzaXRlVGl0bGUiLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLE9BQU8sR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGlCQUE1Qjs7U0FFZUMsUTs7Ozs7K1JBQWYs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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQzs7Ozs7Ozs7Ozs7QUNsQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkx0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUE0QmUsU0FBU0UsVUFBVCxPQUFzQztBQUFBLE1BQWpCQyxjQUFpQixRQUFqQkEsY0FBaUI7QUFBQSxNQUMxQ0MsS0FEMEMsR0FDVEQsY0FEUyxDQUMxQ0MsS0FEMEM7QUFBQSxNQUNuQ0MsYUFEbUMsR0FDVEYsY0FEUyxDQUNuQ0UsYUFEbUM7QUFBQSxNQUNwQkMsT0FEb0IsR0FDVEgsY0FEUyxDQUNwQkcsT0FEb0I7QUFBQSw0QkFFTkQsYUFBYSxDQUFDRSxJQUZSO0FBQUEsTUFFMUNDLFNBRjBDLHVCQUUxQ0EsU0FGMEM7QUFBQSxNQUUvQkMsWUFGK0IsdUJBRS9CQSxZQUYrQjtBQUFBLE1BRWpCQyxPQUZpQix1QkFFakJBLE9BRmlCO0FBQUEsTUFHMUNDLEtBSDBDLEdBRzFCRixZQUgwQixDQUcxQ0UsS0FIMEM7QUFBQSxNQUdwQ0MsTUFIb0MsR0FHMUJILFlBSDBCLENBR3BDRyxNQUhvQztBQUtqRCxzQkFDSSxxRUFBQywwREFBRDtBQUFBLDRCQUNJLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0k7QUFBQSxtQkFBUUMsNERBQVIsU0FBc0JULEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUlJLHFFQUFDLHVEQUFEO0FBQUEsNkJBQ0kscUVBQUMsdURBQUQ7QUFBQSwrQkFDSSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxTQUFYO0FBQUEsaUNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKSixlQVdJLHFFQUFDLGlEQUFEO0FBQ0ksU0FBRyxFQUFFSSxTQURUO0FBRUksV0FBSyxFQUFFRyxLQUZYO0FBR0ksWUFBTSxFQUFFQyxNQUhaO0FBSUksU0FBRyxFQUFFRjtBQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYSixlQWlCSTtBQUFBLGdCQUFLTjtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQkosZUFrQkk7QUFBSyw2QkFBdUIsRUFBRTtBQUFDVSxjQUFNLEVBQUVSO0FBQVQ7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXNCSCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wZW9wbGUvW2lkXS40ZDVkZjg1OWRhZmMyZGU4ZjM0Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQVBJX1VSTCA9IHByb2Nlc3MuZW52LldPUkRQUkVTU19BUElfVVJMXHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaEFQSShxdWVyeSwgeyB2YXJpYWJsZXMgfSA9IHt9KSB7XHJcblx0Y29uc3QgaGVhZGVycyA9IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XHJcblxyXG5cclxuXHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChBUElfVVJMLCB7XHJcblx0XHRtZXRob2Q6ICdQT1NUJyxcclxuXHRcdGhlYWRlcnMsXHJcblx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcblx0XHRcdHF1ZXJ5LFxyXG5cdFx0XHR2YXJpYWJsZXMsXHJcblx0XHR9KSxcclxuXHR9KVxyXG5cclxuXHRjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxyXG5cdGlmIChqc29uLmVycm9ycykge1xyXG5cdFx0Y29uc29sZS5lcnJvcihqc29uLmVycm9ycylcclxuXHRcdHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIEFQSScpXHJcblx0fVxyXG5cdHJldHVybiBqc29uLmRhdGFcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbE1lbnVJdGVtcygpIHtcclxuXHRjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hBUEkoYFxyXG4gICAgICAgIHF1ZXJ5IE15UXVlcnkge1xyXG4gICAgICAgICAgICBpdGVtcyB7XHJcbiAgICAgICAgICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZWRJbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhRGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgICAgIFxyXG5cdGApXHJcblx0cmV0dXJuIGRhdGE/Lml0ZW1zXHJcblxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsTWVudUl0ZW1TbHVncygpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaEFQSShgXHJcbiAgICAgICAgcXVlcnkgTXlRdWVyeSB7XHJcbiAgICAgICAgICAgIGl0ZW1zIHtcclxuICAgICAgICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gICAgICBcclxuXHRgKVxyXG5cdHJldHVybiBkYXRhPy5pdGVtc1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TWVudUl0ZW1CeVNsdWcgKGlkKSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hBUEkoYFxyXG4gICAgICAgIHF1ZXJ5IE15UXVlcnkoJGlkOiBJRCEpIHtcclxuICAgICAgICAgICAgaXRlbShpZDogJGlkLCBpZFR5cGU6IFNMVUcpIHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgY29udGVudFxyXG4gICAgICAgICAgICBmZWF0dXJlZEltYWdlIHtcclxuICAgICAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsdFRleHRcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VVcmxcclxuICAgICAgICAgICAgICAgICAgICBtZWRpYURldGFpbHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWAsIHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7IFxyXG4gICAgICAgICAgICAgICAgXCJpZFwiIDogaWQsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgKVxyXG5cdHJldHVybiBkYXRhPy5pdGVtXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRNZW51VHlwZXNBbmRNZW51SXRlbXMoKSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hBUEkoYFxyXG4gICAgcXVlcnkgTXlRdWVyeSB7XHJcbiAgICAgICAgbWVudVR5cGVzIHtcclxuICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICAgaXRlbXMge1xyXG4gICAgICAgICAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmVkSW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdFRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlVXJsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhRGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBgKVxyXG4gICAgcmV0dXJuIGRhdGE/Lm1lbnVUeXBlc1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0TG9jYXRpb25JdGVtcygpe1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaEFQSShgXHJcbiAgcXVlcnkgTXlRdWVyeSB7XHJcbiAgICBsb2NhdGlvbnMge1xyXG4gICAgICBlZGdlcyB7XHJcbiAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICBjb250ZW50XHJcbiAgICAgICAgICBzbHVnXHJcbiAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgaWRcclxuICAgICAgICAgIGZlYXR1cmVkSW1hZ2Uge1xyXG4gICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICBhbHRUZXh0XHJcbiAgICAgICAgICAgICAgc291cmNlVXJsXHJcbiAgICAgICAgICAgICAgbWVkaWFEZXRhaWxzIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9ICBcclxuICBgKVxyXG4gIHJldHVybiBkYXRhPy5sb2NhdGlvbnNcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldExvY2F0aW9uSXRlbUJ5U2x1ZyAoaWQpIHtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hBUEkoYFxyXG4gIHF1ZXJ5IE15UXVlcnkoJGlkOiBJRCEpIHtcclxuICAgIGxvY2F0aW9uKGlkOiAkaWQsIGlkVHlwZTogU0xVRykge1xyXG4gICAgICBpZFxyXG4gICAgICB0aXRsZVxyXG4gICAgICBjb250ZW50XHJcbiAgICAgIGZlYXR1cmVkSW1hZ2Uge1xyXG4gICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgYWx0VGV4dFxyXG4gICAgICAgICAgbWVkaWFEZXRhaWxzIHtcclxuICAgICAgICAgICAgaGVpZ2h0XHJcbiAgICAgICAgICAgIHdpZHRoXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBzb3VyY2VVcmxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbWVudVR5cGVzIHtcclxuICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICBpdGVtcyB7XHJcbiAgICAgICAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgICAgICAgIHNsdWdcclxuICAgICAgICAgICAgICAgICAgZmVhdHVyZWRJbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHRUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VVcmxcclxuICAgICAgICAgICAgICAgICAgICAgIG1lZGlhRGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBzdG9yZSB7XHJcbiAgICAgICAgYWRkcmVzc1xyXG4gICAgICAgIHN0YWZmIHtcclxuICAgICAgICAgIC4uLiBvbiBQZXJzb24ge1xyXG4gICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICBmZWF0dXJlZEltYWdlIHtcclxuICAgICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICAgIGFsdFRleHRcclxuICAgICAgICAgICAgICAgIG1lZGlhRGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgICB3aWR0aFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc291cmNlVXJsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIGAsIHtcclxuICAgIHZhcmlhYmxlczogeyBcclxuICAgICAgICBcImlkXCIgOiBpZCxcclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiBkYXRhPy5sb2NhdGlvblxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGVvcGxlTGlzdCgpe1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaEFQSShgXHJcbiAgcXVlcnkgTXlRdWVyeSB7XHJcbiAgICBwZW9wbGUge1xyXG4gICAgICBlZGdlcyB7XHJcbiAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgICAgc2x1Z1xyXG4gICAgICAgICAgdGl0bGVcclxuICAgICAgICAgIGZlYXR1cmVkSW1hZ2Uge1xyXG4gICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICBhbHRUZXh0XHJcbiAgICAgICAgICAgICAgc291cmNlVXJsXHJcbiAgICAgICAgICAgICAgbWVkaWFEZXRhaWxzIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodFxyXG4gICAgICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9ICBcclxuICBgKVxyXG4gIHJldHVybiBkYXRhPy5wZW9wbGVcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBlb3BsZUxpc3RCeVNsdWcoaWQpIHtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hBUEkoYFxyXG4gIHF1ZXJ5IE15UXVlcnkoJGlkOiBJRCEpIHtcclxuICAgIHBlb3BsZShpZDogJGlkLCBpZFR5cGU6IFNMVUcpIHtcclxuICAgICAgY29udGVudFxyXG4gICAgICBpZFxyXG4gICAgICBzbHVnXHJcbiAgICAgIHRpdGxlXHJcbiAgICAgIGZlYXR1cmVkSW1hZ2Uge1xyXG4gICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgYWx0VGV4dFxyXG4gICAgICAgICAgc291cmNlVXJsXHJcbiAgICAgICAgICBtZWRpYURldGFpbHMge1xyXG4gICAgICAgICAgICBoZWlnaHRcclxuICAgICAgICAgICAgd2lkdGhcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9YFxyXG4gICwge1xyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIFwiaWRcIjogaWQsXHJcbiAgICB9XHJcbiAgfSlcclxuICByZXR1cm4gZGF0YT8ucGVvcGxlO1xyXG59IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsImltcG9ydCBMYXlvdXQsIHsgc2l0ZVRpdGxlIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUm93IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcm93JztcclxuaW1wb3J0IENvbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbCc7XHJcbmltcG9ydCB7Z2V0UGVvcGxlTGlzdCwgZ2V0UGVvcGxlTGlzdEJ5U2x1Z30gZnJvbSAnLi4vLi4vbGliL2FwaSc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgICBjb25zdCBhbGxTbHVncyA9IGF3YWl0IGdldFBlb3BsZUxpc3QoKTtcclxuICAgIGNvbnN0IHBhdGhzID0gYWxsU2x1Z3MuZWRnZXMubWFwKGVkZ2UgPT4ge1xyXG4gICAgICAgIGNvbnN0IHtzbHVnfSA9IGVkZ2Uubm9kZTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwYXJhbXM6IHsgXHJcbiAgICAgICAgICAgICAgICBpZDogc2x1Z1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhdGhzLFxyXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoe3BhcmFtc30pIHtcclxuICAgIGNvbnN0IHBlcnNvbkl0ZW1EYXRhID0gYXdhaXQgZ2V0UGVyc29uQnlTbHVnIChwYXJhbXMuaWQpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7IFxyXG4gICAgICAgICAgICBwZXJzb25JdGVtRGF0YVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGVvcGxlSXRlbSh7cGVyc29uSXRlbURhdGF9KSB7XHJcbiAgICBjb25zdCB7dGl0bGUsIGZlYXR1cmVkSW1hZ2UsIGNvbnRlbnR9ID0gcGVyc29uSXRlbURhdGE7XHJcbiAgICBjb25zdCB7c291cmNlVXJsLCBtZWRpYURldGFpbHMsIGFsdFRleHR9ID0gZmVhdHVyZWRJbWFnZS5ub2RlO1xyXG4gICAgY29uc3Qge3dpZHRoLGhlaWdodH0gPSBtZWRpYURldGFpbHM7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT57c2l0ZVRpdGxlfSAtIHt0aXRsZX0gPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvcGVvcGxlJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+U2VlIG1vcmUgdGVhbSBtZW1iZXJzPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPEltYWdlIFxyXG4gICAgICAgICAgICAgICAgc3JjPXtzb3VyY2VVcmx9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17d2lkdGh9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cclxuICAgICAgICAgICAgICAgIGFsdD17YWx0VGV4dH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBjb250ZW50fX0vPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=