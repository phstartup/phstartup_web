"use strict";
exports.id = 991;
exports.ids = [991];
exports.modules = {

/***/ 30991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14360);



function Textarea(props) {
    const validation = (e)=>{
        const { validation  } = props;
        let response = _Validator__WEBPACK_IMPORTED_MODULE_2__/* ["default"].validate */ .Z.validate(e.target.value, validation, validation.column);
        if (response === true) {
            props.onChange(e.target.value, null);
        } else {
            props.onChange(e.target.value, response);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full float-left mb-[20px]",
        children: [
            props.label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                for: "message",
                className: "font-semibold block mb-2 text-sm text-gray-900 dark:text-white",
                children: props.label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                id: "message",
                rows: "4",
                value: props.value,
                className: "block p-2.5 w-full text-sm text-gray-900 bg-white dark:bg-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                placeholder: props.placeholder,
                onChange: (e)=>{
                    validation(e);
                }
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Textarea);


/***/ })

};
;