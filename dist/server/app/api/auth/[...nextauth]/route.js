"use strict";
(() => {
var exports = {};
exports.id = 4912;
exports.ids = [4912];
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

/***/ 39491:
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 82361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 63477:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 57310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 33076:
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

// NAMESPACE OBJECT: ./src/app/api/auth/[...nextauth]/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  "GET": () => (handler),
  "POST": () => (handler)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(35387);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(29267);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./src/controllers/user.js + 1 modules
var controllers_user = __webpack_require__(48963);
// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(53524);
// EXTERNAL MODULE: ./node_modules/bcryptjs/index.js
var bcryptjs = __webpack_require__(12305);
// EXTERNAL MODULE: ./node_modules/next-auth/providers/credentials.js
var credentials = __webpack_require__(38198);
// EXTERNAL MODULE: ./node_modules/next-auth/providers/google.js
var google = __webpack_require__(19311);
// EXTERNAL MODULE: ./src/lib/helper.js
var lib_helper = __webpack_require__(19585);
// EXTERNAL MODULE: ./node_modules/jsonwebtoken/index.js
var jsonwebtoken = __webpack_require__(39518);
;// CONCATENATED MODULE: ./src/lib/authentication.js







const authOptions = {
    pages: {
        sigIn: "/login"
    },
    session: {
        jwt: true,
        maxAge: 30 * 24 * 60 * 60
    },
    providers: [
        (0,credentials/* default */.Z)({
            name: "Sign In",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "email"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize (credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }
                const model = new controllers_user/* default */.Z();
                const params = {
                    email: credentials.email,
                    password: credentials.password
                };
                const user = await model.authenticate(params);
                return user;
            }
        }),
        (0,google/* default */.Z)({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        })
    ],
    theme: {
        colorScheme: "light"
    },
    callbacks: {
        async signIn ({ user , account , profile  }) {
            let newAccount = new controllers_user/* default */.Z();
            let result = await newAccount.auth(user, account, profile);
            if (result) {
                return true;
            } else {
                return false;
            }
        },
        jwt: async ({ token , user , account  })=>{
            if (user) {
                const helper = new lib_helper/* default */.Z();
                // const cipher = await helper.cipherText(JSON.stringify(token))
                token.account_type = user.account_type;
                token.accessToken = account.provider == "google" ? account.access_token : user.access_token;
            }
            return token;
        },
        session: async ({ session , token  })=>{
            let newAccount = new controllers_user/* default */.Z();
            if (Date.now() / 1000 > token?.exp) {
                return Promise.reject({
                    error: new Error("Token Expired. Please log in again to get a new refresh token.")
                });
            } else {
                let result = await newAccount.get(session.user);
                if (result) {
                    await newAccount.updateToken(JSON.parse(result), token.accessToken);
                    session.accessToken = token.accessToken;
                    session.user = {
                        ...session.user,
                        ...JSON.parse(result)
                    };
                }
                return session;
            }
        }
    }
};

// EXTERNAL MODULE: ./node_modules/next-auth/next/index.js
var next = __webpack_require__(48388);
;// CONCATENATED MODULE: ./src/app/api/auth/[...nextauth]/route.js


const handler = (0,next/* default */.ZP)(authOptions);


;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2FUsers%2Fincrementtechnologiesinc.%2FDesktop%2Fincrement%2Freact-next%2Fphstartup_web%2Fsrc%2Fapp&appPaths=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=!

    

    

    

    const routeModule = new (module_default())({
    userland: route_namespaceObject,
    pathname: "/api/auth/[...nextauth]",
    resolvedPagePath: "/Users/incrementtechnologiesinc./Desktop/increment/react-next/phstartup_web/src/app/api/auth/[...nextauth]/route.js",
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

    const originalPathname = "/api/auth/[...nextauth]/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9405,5981,1887,8070,8963], () => (__webpack_exec__(33076)));
module.exports = __webpack_exports__;

})();