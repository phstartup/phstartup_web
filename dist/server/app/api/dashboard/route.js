"use strict";
(() => {
var exports = {};
exports.id = 3707;
exports.ids = [3707];
exports.modules = {

/***/ 97783:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@edge-runtime/cookies");

/***/ }),

/***/ 28530:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@opentelemetry/api");

/***/ }),

/***/ 54426:
/***/ ((module) => {

module.exports = require("next/dist/compiled/chalk");

/***/ }),

/***/ 40252:
/***/ ((module) => {

module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 73238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "headerHooks": () => (/* binding */ headerHooks),
  "originalPathname": () => (/* binding */ originalPathname),
  "requestAsyncStorage": () => (/* binding */ requestAsyncStorage),
  "routeModule": () => (/* binding */ routeModule),
  "serverHooks": () => (/* binding */ serverHooks),
  "staticGenerationAsyncStorage": () => (/* binding */ staticGenerationAsyncStorage),
  "staticGenerationBailout": () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./src/app/api/dashboard/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  "DELETE": () => (DELETE),
  "GET": () => (GET),
  "POST": () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(35387);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(29267);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
;// CONCATENATED MODULE: ./src/app/api/dashboard/route.js
async function GET(request) {
    const data = [
        {
            title: "Manila",
            value: 500,
            percentage: "80%",
            color: "bg-green-200"
        },
        {
            title: "Cebu",
            value: 40,
            percentage: "90%",
            color: "bg-red-100"
        }
    ];
    return new Response(JSON.stringify(data));
}
async function POST(request) {
    const users = [
        {
            id: 1,
            name: "Hello"
        },
        {
            id: 2,
            name: "Hello"
        },
        {
            id: 3,
            name: "Hello"
        }
    ];
    return new Response(JSON.stringify(users));
}
async function DELETE(request) {
    const users = [
        {
            id: 1,
            name: "Hello"
        },
        {
            id: 2,
            name: "Hello"
        },
        {
            id: 3,
            name: "Hello"
        }
    ];
    return new Response(JSON.stringify(users));
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fdashboard%2Froute&name=app%2Fapi%2Fdashboard%2Froute&pagePath=private-next-app-dir%2Fapi%2Fdashboard%2Froute.js&appDir=%2FUsers%2Fincrementtechnologiesinc.%2FDesktop%2Fincrement%2Freact-next%2Fphstartup_web%2Fsrc%2Fapp&appPaths=%2Fapi%2Fdashboard%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=!

    

    

    

    const routeModule = new (module_default())({
    userland: route_namespaceObject,
    pathname: "/api/dashboard",
    resolvedPagePath: "/Users/incrementtechnologiesinc./Desktop/increment/react-next/phstartup_web/src/app/api/dashboard/route.js",
    nextConfigOutput: undefined,
  })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/dashboard/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9405,5981], () => (__webpack_exec__(73238)));
module.exports = __webpack_exports__;

})();