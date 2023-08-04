exports.id = 98;
exports.ids = [98];
exports.modules = {

/***/ 64557:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(27574);
__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;
var _createSvgIcon = _interopRequireDefault(__webpack_require__(30935));
var _jsxRuntime = __webpack_require__(56786);
var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
}), 'FacebookOutlined');
exports.Z = _default;

/***/ }),

/***/ 70098:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ auth_Social)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/utils/Style.js
var Style = __webpack_require__(60168);
;// CONCATENATED MODULE: ./src/assets/google.png
/* harmony default export */ const google = ({"src":"/_next/static/media/google.67a46f3b.png","height":131,"width":128,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAY1BMVEVMaXHnQTZDh/wzplCQfYHpQTXoQjVBhfPzRDc0r1cmo1T1uAdChPPpQzVGjP1Bf/s3p3AzqExCev81plVChPIzplK/ux/mODggpV36lhVEg+7gLTjrRDX/wgNDld32WTBXskrL7S0iAAAAHXRSTlMAmPCZCVfMxPr5MrWx7fpO5NobUd/CsT8/sqwyNLRpW0QAAAAJcEhZcwAACxMAAAsTAQCanBgAAABCSURBVHicHcZHDoAwDADBTcNxIPTe//9KJOY0cBYxFgGOHI3JAbZnAQ9cJX4Xqf7IaGvmd4XeCknVufZuIE2q3cAHW30CqS+WXFUAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(48421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/auth/GoogleBtn.js





function GoogleBtn(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: Style/* default.btn */.Z.btn + " border border-gray-100 dark:bg-white text-white dark:text-black",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: google,
                height: 20,
                width: 20,
                alt: "Google Icon"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "ml-[10px] text-sm font-semibold",
                children: props.label
            })
        ]
    });
}
/* harmony default export */ const auth_GoogleBtn = (GoogleBtn);

// EXTERNAL MODULE: ./node_modules/@mui/icons-material/FacebookOutlined.js
var FacebookOutlined = __webpack_require__(64557);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/SvgIcon/index.js
var SvgIcon = __webpack_require__(81394);
var SvgIcon_default = /*#__PURE__*/__webpack_require__.n(SvgIcon);
;// CONCATENATED MODULE: ./src/components/auth/FacebookBtn.js





function FacebookBtn(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: Style/* default.btn */.Z.btn + " border border-gray-100 dark:bg-white text-white dark:text-black",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((SvgIcon_default()), {
                component: FacebookOutlined/* default */.Z,
                className: "text-blue-800"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "ml-[10px] text-sm font-semibold",
                children: props.label
            })
        ]
    });
}
/* harmony default export */ const auth_FacebookBtn = (FacebookBtn);

// EXTERNAL MODULE: ./node_modules/next-auth/react/index.js
var react = __webpack_require__(63370);
;// CONCATENATED MODULE: ./src/components/auth/Social.js





function Social(props) {
    const handler = (channel)=>{
        (0,react.signIn)(channel, {
            callbackUrl: `${window.location.origin}/dashboard`
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full float-left mb-[20px] mt-[20px]",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                onClick: ()=>{
                    handler("google");
                },
                className: "w-full float-left",
                children: /*#__PURE__*/ jsx_runtime_.jsx(auth_GoogleBtn, {
                    label: props.label + " as Google"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                onClick: ()=>{
                    handler("facebook");
                },
                className: "w-full float-left mt-[20px]",
                children: /*#__PURE__*/ jsx_runtime_.jsx(auth_FacebookBtn, {
                    label: props.label + " as Facebook"
                })
            })
        ]
    });
}
/* harmony default export */ const auth_Social = (Social);


/***/ }),

/***/ 48421:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(7649)


/***/ })

};
;