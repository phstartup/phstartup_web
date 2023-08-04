"use strict";
exports.id = 3864;
exports.ids = [3864];
exports.modules = {

/***/ 13864:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14360);



function text(props) {
    const { validation , type  } = props;
    const validations = (e)=>{
        let response = _Validator__WEBPACK_IMPORTED_MODULE_2__/* ["default"].validate */ .Z.validate(e.target.value, validation, validation.column);
        if (response === true) {
            if (type === "file") {
                props.onChange(e.target.files[0], null);
            } else {
                props.onChange(e.target.value, null);
            }
        } else {
            if (type === "file") {
                props.onChange(e.target.files[0], response);
            } else {
                props.onChange(e.target.value, response);
            }
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                placeholder: props.placeholder,
                type: props.type,
                value: props.value,
                disabled: props.disable ? props.disable : false,
                onChange: (e)=>{
                    validations(e);
                },
                className: "w-full h-[50px] rounded-[25px] border-gray-300 dark:border-gray-600 text-black dark:text-white px-[10px] bg-white dark:bg-gray-900"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-full mb-[20px]",
                children: props.validation && props.validation.error && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                    className: "text-red-600",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                            children: "Oops!"
                        }),
                        " ",
                        props.validation.error
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (text);


/***/ })

};
;