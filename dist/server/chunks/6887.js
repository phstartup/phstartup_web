"use strict";
exports.id = 6887;
exports.ids = [6887];
exports.modules = {

/***/ 32413:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
// This file is for modularized imports for next/server to get fully-treeshaking.

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _response.NextResponse;
    }
}));
const _response = __webpack_require__(72917); //# sourceMappingURL=next-response.js.map


/***/ }),

/***/ 75064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Middleware)
/* harmony export */ });
/* harmony import */ var _controllers_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48963);

class Middleware {
    async check(request) {
        const Authorization = request.headers.get("Authorization");
        if (request.url.includes("/api/auth")) {
            return true;
        } else if (!Authorization) {
            return false;
        } else {
            let token = Authorization.replace("Bearer ", "");
            let user = new _controllers_user__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z();
            let rUser = await user.verifyHeaderToken(token);
            if (rUser == null) {
                return false;
            }
            return rUser;
        }
    }
}


/***/ })

};
;