"use strict";
(() => {
var exports = {};
exports.id = 84;
exports.ids = [84];
exports.modules = {

/***/ 53524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 46517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

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

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 41383:
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

// NAMESPACE OBJECT: ./src/app/api/services/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  "GET": () => (GET),
  "POST": () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(35387);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(29267);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./src/controllers/Service.js
var Service = __webpack_require__(46914);
// EXTERNAL MODULE: ./src/lib/helper.js
var helper = __webpack_require__(19585);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(32413);
// EXTERNAL MODULE: ./src/lib/middleware.js
var middleware = __webpack_require__(75064);
;// CONCATENATED MODULE: ./src/app/api/services/route.js



let route_helper = new helper/* default */.Z();
let controller = new Service/* default */.Z();

const route_middleware = new middleware/* default */.Z();
async function GET(req) {
    const mwareAccount = await route_middleware.check(req);
    if (mwareAccount == false) {
        return new Response(route_helper.response(null, 401, "Invalid Accessed."));
    }
    const url = new URL(req.url);
    const searchParams = new URLSearchParams(url.search);
    const company_id = searchParams.get("company_id");
    if (company_id) {
        let result = await controller.retrieve({
            where: {
                company_id: company_id
            }
        });
        result = result ? result : null;
        return new next_response/* default */.Z(route_helper.response(result, 200, null));
    } else {
        // let result = await controller.retrieveAdmin()
        return new next_response/* default */.Z(route_helper.response("Hello", 200, null));
    }
}
async function POST(req) {
    const mwareAccount = await route_middleware.check(req);
    if (mwareAccount == false) {
        return new Response(route_helper.response(null, 401, "Invalid Accessed."));
    }
    const body = await req.json();
    const { company_id , video , title , description , featured  } = body;
    if (body.id) {
        // update
        let result = await controller.update(body.id, {
            user_id: mwareAccount.id,
            company_id,
            title,
            description,
            video,
            featured
        });
        return new next_response/* default */.Z(route_helper.response(result, 200, null));
    } else if (video && company_id && title && description && featured) {
        let result = await controller.create({
            user_id: mwareAccount.id,
            company_id,
            title,
            description,
            video,
            featured
        });
        return new next_response/* default */.Z(route_helper.response(result, 200, null));
    }
    return new next_response/* default */.Z(route_helper.response(null, 200, null));
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fservices%2Froute&name=app%2Fapi%2Fservices%2Froute&pagePath=private-next-app-dir%2Fapi%2Fservices%2Froute.js&appDir=%2FUsers%2Fincrementtechnologiesinc.%2FDesktop%2Fincrement%2Freact-next%2Fphstartup_web%2Fsrc%2Fapp&appPaths=%2Fapi%2Fservices%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=!

    

    

    

    const routeModule = new (module_default())({
    userland: route_namespaceObject,
    pathname: "/api/services",
    resolvedPagePath: "/Users/incrementtechnologiesinc./Desktop/increment/react-next/phstartup_web/src/app/api/services/route.js",
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

    const originalPathname = "/api/services/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9405,5981,1887,2917,8963,6887,6914], () => (__webpack_exec__(41383)));
module.exports = __webpack_exports__;

})();