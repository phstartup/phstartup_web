exports.id = 4975;
exports.ids = [4975];
exports.modules = {

/***/ 26922:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 90125, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 86249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 97844, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 61522, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 13100, 23))

/***/ }),

/***/ 41050:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ auth_Right)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./src/components/auth/MovingLogo.js


function MovingLogo(props) {
    return /*#__PURE__*/ _jsxs("div", {
        className: "w-full float-left",
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: "w-full float-left",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        id: "block-blue",
                        className: "logo-blocks rounded-lg"
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        id: "block-orange",
                        className: "logo-blocks rounded-lg ml-[50px]"
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        id: "block-red",
                        className: "logo-blocks rounded-lg ml-[50px]"
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "w-full float-left mt-[20px]",
                children: /*#__PURE__*/ _jsx("div", {
                    id: "block-magenta",
                    className: "logo-blocks rounded-lg"
                })
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "w-full float-left mt-[20px]",
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        id: "block-purple",
                        className: "logo-blocks rounded-lg"
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        id: "block-green",
                        className: "logo-blocks rounded-lg ml-[50px]"
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "w-full float-left mt-[20px]",
                children: /*#__PURE__*/ _jsx("div", {
                    id: "block-black",
                    className: "logo-blocks rounded-lg"
                })
            })
        ]
    });
}
/* harmony default export */ const auth_MovingLogo = ((/* unused pure expression or super */ null && (MovingLogo)));

;// CONCATENATED MODULE: ./src/components/auth/Right.js



function Right(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-white dark:bg-black h-[100vh] float-left text-black dark:text-white lg:w-3/4 2xl:w-[3/4] sm:w-full md:w-full xs:w-full",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "flex items-center content-center h-[100vh] w-full px-[50px]",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-6xl text-black dark:text-white font-bold w-full float-left",
                        children: props.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "text-2xl text-black dark:text-white w-full float-left mt-[50px] list-disc pl-[50px]",
                        children: props.list && props.list.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "float-left w-full",
                                children: item
                            }, index))
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const auth_Right = (Right);


/***/ }),

/***/ 55063:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ buttons_btnRounded)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./src/utils/Color.js
const Color = {
    background: "#000",
    gray: "#555"
};
/* harmony default export */ const utils_Color = ((/* unused pure expression or super */ null && (Color)));

;// CONCATENATED MODULE: ./src/components/buttons/btnRounded.js



function btnRounded(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        onClick: ()=>{
            props.onClick();
        },
        className: "w-full h-[50px] cursor-pointer content-center items-center float-left flex rounded-[25px] justify-center hover:cursor-pointer hover:font-bold " + props.style,
        children: props.title
    });
}
/* harmony default export */ const buttons_btnRounded = (btnRounded);


/***/ })

};
;