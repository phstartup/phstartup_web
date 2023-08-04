"use strict";
exports.id = 2007;
exports.ids = [2007];
exports.modules = {

/***/ 32007:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Video)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./src/components/video/Youtube.js


function Youtube(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-full float-left",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "embed-responsive embed-responsive-21by9 relative w-full overflow-hidden h-[500px]",
            children: props.url && /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                className: "embed-responsive-item h-full w-full",
                src: props.url,
                allowfullscreen: "",
                "data-gtm-yt-inspected-2340190_699": "true",
                id: "240632615"
            })
        })
    });
}
/* harmony default export */ const video_Youtube = (Youtube);

// EXTERNAL MODULE: ./node_modules/@mui/material/node/SvgIcon/index.js
var SvgIcon = __webpack_require__(81394);
var SvgIcon_default = /*#__PURE__*/__webpack_require__.n(SvgIcon);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Add.js
var Add = __webpack_require__(33598);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Face6.js
var Face6 = __webpack_require__(30077);
// EXTERNAL MODULE: ./src/components/form/textarea.js
var form_textarea = __webpack_require__(30991);
// EXTERNAL MODULE: ./src/components/buttons/btn.js + 1 modules
var btn = __webpack_require__(57537);
// EXTERNAL MODULE: ./src/lib/helper.js
var helper = __webpack_require__(15539);
;// CONCATENATED MODULE: ./src/components/modal/Video.js









let Video_helper = new helper/* default */.Z();
const comments = [
    {
        created_at: "July 1, 2023",
        user: {
            username: "kennette",
            information: {
                first_name: "Kennette",
                last_name: "Canales",
                profile: "https://lh3.googleusercontent.com/a/AAcHTtfPb4VcRepRHKExg7-HfrIoQ-njnXlHAEKZCdXBgMGb6w=s96-c"
            },
            id: 1
        },
        content: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. "
    },
    {
        created_at: "July 1, 2023",
        user: {
            username: "kennette",
            information: {
                first_name: "Kennette",
                last_name: "Canales",
                profile: "https://lh3.googleusercontent.com/a/AAcHTtfPb4VcRepRHKExg7-HfrIoQ-njnXlHAEKZCdXBgMGb6w=s96-c"
            },
            id: 1
        },
        content: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. "
    },
    {
        created_at: "July 1, 2023",
        user: {
            username: "kennette",
            information: {
                first_name: "Kennette",
                last_name: "Canales",
                profile: "https://lh3.googleusercontent.com/a/AAcHTtfPb4VcRepRHKExg7-HfrIoQ-njnXlHAEKZCdXBgMGb6w=s96-c"
            },
            id: 1
        },
        content: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. "
    }
];
function ModalVideo(props) {
    const [addComment, setAddComment] = (0,react_.useState)(false);
    const [comment, setComment] = (0,react_.useState)(null);
    const [commentError, setCommentError] = (0,react_.useState)(null);
    const [btnLoading, setBtnLoading] = (0,react_.useState)(false);
    const renderProfile = (user)=>{
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "h-[30px] w-[30px] mr-[10px] float-left relative",
            children: user.information && user.information.profile ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: user.information.profile,
                width: 30,
                height: 30,
                className: "rounded-[15px] cursor-pointer border-2 border-green-500 dark:border-green-500",
                alt: user.information.profile
            }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "h-[30px] w-[30px] rounded-[15px] bg-green-400 dark:bg-white float-left cursor-pointer",
                children: /*#__PURE__*/ jsx_runtime_.jsx((SvgIcon_default()), {
                    component: Face6/* default */.Z,
                    className: "text-white dark:text-black",
                    style: {
                        fontSize: 30
                    }
                })
            })
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        id: "large-modal",
        tabindex: "-1",
        className: "fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[100vh] max-h-full items-center content-center justify-center flex modal",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "relative w-full max-w-4xl max-h-full",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative bg-white rounded-lg shadow dark:bg-gray-900 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center justify-between p-5",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "text-xl font-medium text-gray-900 dark:text-white",
                                children: props.title
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                onClick: ()=>{
                                    props.onClose();
                                },
                                type: "button",
                                className: "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white",
                                "data-modal-hide": "large-modal",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        "aria-hidden": "true",
                                        className: "w-5 h-5",
                                        fill: "currentColor",
                                        viewBox: "0 0 20 20",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            "fill-rule": "evenodd",
                                            d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                                            "clip-rule": "evenodd"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "sr-only",
                                        children: "Close modal"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-full float-left min-h-[200px] overflow-y-hidden bg-white dark:bg-gray-900",
                        children: props.url && /*#__PURE__*/ jsx_runtime_.jsx(video_Youtube, {
                            url: props.url
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-full float-left px-[20px] mt-[20px]",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full float-left flex justify-between text-sm font-bold",
                            children: "1,000 Views"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-full float-left pb-[20px] px-[20px]",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "w-full float-left mt-[20px] mb-[20px] flex justify-between",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            className: "text-xl font-medium",
                                            children: "Comments"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((SvgIcon_default()), {
                                            component: Add/* default */.Z,
                                            style: {
                                                fontSize: 30
                                            },
                                            className: "cursor-pointer",
                                            onClick: ()=>{
                                                setAddComment(true);
                                            }
                                        })
                                    })
                                ]
                            }),
                            addComment && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-full float-left",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "w-full float-left mb-[20px] border-b border-b-gray-100 dark:border-b-gray-700",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "w-full float-left text-sm",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                                    className: "text-sm mb-[20px]",
                                                    children: "New Comment"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(form_textarea/* default */.Z, {
                                                    type: "text",
                                                    placeholder: "Type something here",
                                                    value: comment,
                                                    onChange: (value, error)=>{
                                                        setComment(value);
                                                        setCommentError(error);
                                                    },
                                                    validation: {
                                                        type: "text",
                                                        size: 2,
                                                        column: "Comment",
                                                        error: commentError
                                                    }
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "w-full float-left text-sm mb-[20px]",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(btn/* default */.Z, {
                                                    style: " bg-red-400 text-white",
                                                    title: "Cancel",
                                                    onPress: ()=>{
                                                        setAddComment(false);
                                                        setComment(null);
                                                        setCommentError(null);
                                                    }
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(btn/* default */.Z, {
                                                    style: " bg-black dark:bg-white text-white dark:text-black ml-[20px]",
                                                    title: "Save",
                                                    loading: btnLoading,
                                                    onPress: ()=>{}
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-full float-left",
                                children: comments && comments.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "w-full float-left mb-[20px] border-b border-b-gray-100 dark:border-b-gray-700",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                className: "w-full float-left flex justify-between text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: renderProfile(item.user)
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "font-semibold",
                                                                children: Video_helper.getName(item.user)
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "Posted on " + item.created_at
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "w-full float-left mt-[20px] text-sm mb-[20px]",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "w-full text-justify float-left",
                                                    children: item.content
                                                })
                                            })
                                        ]
                                    }, index))
                            })
                        ]
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const Video = (ModalVideo);


/***/ })

};
;