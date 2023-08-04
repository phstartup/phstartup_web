"use strict";
exports.id = 7162;
exports.ids = [7162];
exports.modules = {

/***/ 67162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Page)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/SvgIcon/index.js
var SvgIcon = __webpack_require__(81394);
var SvgIcon_default = /*#__PURE__*/__webpack_require__.n(SvgIcon);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/PlayCircle.js
var PlayCircle = __webpack_require__(81095);
// EXTERNAL MODULE: ./src/components/buttons/btn.js + 1 modules
var btn = __webpack_require__(57537);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(59483);
// EXTERNAL MODULE: ./src/components/modal/Video.js + 1 modules
var Video = __webpack_require__(32007);
;// CONCATENATED MODULE: ./src/components/featured/index.js
/* __next_internal_client_entry_do_not_use__ default auto */ 






function Index(props) {
    const [data, setData] = (0,react_.useState)(null);
    const router = (0,navigation.useRouter)();
    const [pitch, setPitch] = (0,react_.useState)(null);
    const [viewVideo, setViewVideo] = (0,react_.useState)(false);
    (0,react_.useEffect)(()=>{
        if (props.data) {
            setData(props.data);
        }
    }, [
        props
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        style: {
            marginTop: 100
        },
        className: "float-left w-full relative lg:h-[80vh] 2xl:h-[80vh] sm:h-[60vh] md:h-[60vh]",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "float-left lg:h-[80vh] 2xl:h-[80vh] w-full sm:h-[60vh] md:h-[60vh]",
                children: [
                    "   ",
                    data && data.settings && data.settings.banner && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: data.settings.banner,
                        className: "w-full h-full",
                        alt: data.settings.banner
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-full absolute bottom-0 left-0 pt-[20px] pb-[20px] lg:px-[100px] 2xl:px-[100px] profile-card-title text-white",
                children: [
                    data && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "font-bold lg:text-6xl 2xl:text-6xl sm:text-3xl xs:text-3xl md:text-3xl",
                        children: data.name
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "left w-full flex items-center content-center",
                        children: [
                            data && data.pitches && /*#__PURE__*/ jsx_runtime_.jsx((SvgIcon_default()), {
                                component: PlayCircle/* default */.Z,
                                className: "float-left cursor-pointer",
                                style: {
                                    fontSize: 60
                                },
                                onClick: ()=>{
                                    setPitch(data.pitches[0]);
                                    setTimeout(()=>{
                                        setViewVideo(true);
                                    }, 10);
                                }
                            }),
                            data && /*#__PURE__*/ jsx_runtime_.jsx(btn/* default */.Z, {
                                title: "More details",
                                onPress: ()=>{
                                    router.push("/company?id=" + data.id);
                                }
                            })
                        ]
                    })
                ]
            }),
            viewVideo && pitch && /*#__PURE__*/ jsx_runtime_.jsx(Video/* default */.Z, {
                title: "Elavator Pitch",
                onClose: ()=>{
                    setPitch(null);
                    setViewVideo(false);
                },
                url: pitch.url
            })
        ]
    });
}
/* harmony default export */ const components_featured = (Index);

;// CONCATENATED MODULE: ./src/components/thumbnail/smallVideoThumbnail.js
/* __next_internal_client_entry_do_not_use__ default auto */ 


function SmallVideoThumbnail(props) {
    const router = (0,navigation.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "float-left lg:w-[24%] xl:w-[24%] 2xl:w-[24%] xs:w-[100%] sm:w-[100%] md:w-[48%] h-[250px] lg:mr-[1%] xl:mr-[1%] 2xl:mr-[1%] small-video-thumbnail relative cursor-pointer mb-10",
        onClick: ()=>{
            router.push("/company?id=" + props.data?.id);
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: props.data?.settings?.banner,
                alt: props.data?.settings?.banner,
                className: "w-full h-full"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute px-5 py-5 bottom-0 profile-card-title w-full font-bold text-white",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: props.data?.name
                })
            })
        ]
    });
}
/* harmony default export */ const smallVideoThumbnail = (SmallVideoThumbnail);

;// CONCATENATED MODULE: ./src/components/thumbnail/collectionSmall.js



function collectionSmall(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "float-left w-full lg:px-[100px] 2xl:px-[100px] xs:px-[20px] sm:px-[20px] md:px-[20px]",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "float-left w-full pt-[20px] pb-[20px]",
                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "text-2xl font-bold",
                    children: props.title
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full overflow-x-scroll float-left",
                children: props.data && props.data.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(smallVideoThumbnail, {
                        data: item
                    }, index))
            })
        ]
    });
}
/* harmony default export */ const thumbnail_collectionSmall = (collectionSmall);

// EXTERNAL MODULE: ./src/utils/String.js
var utils_String = __webpack_require__(23474);
// EXTERNAL MODULE: ./src/components/header/index.js
var header = __webpack_require__(49840);
// EXTERNAL MODULE: ./src/components/footer/index.js
var footer = __webpack_require__(79021);
// EXTERNAL MODULE: ./src/lib/api.js
var api = __webpack_require__(67272);
;// CONCATENATED MODULE: ./src/app/pitch/page.js
/* __next_internal_client_entry_do_not_use__ default auto */ 







let page_api = new api/* default */.Z();
function Page(props) {
    const [loading, setLoading] = (0,react_.useState)(false);
    const [data, setData] = (0,react_.useState)(null);
    const [featured, setFeatured] = (0,react_.useState)(null);
    const [categories, setCategories] = (0,react_.useState)(null);
    (0,react_.useEffect)(()=>{
        const getData = async ()=>{
            await page_api.getNoToken("/api/home", (response)=>{
                setData(response.data);
                if (response.data) {
                    if (response.data.featured) {
                        setFeatured(response.data.featured);
                    }
                    if (response.data.categories) {
                        setCategories(response.data.categories);
                    }
                }
                setTimeout(()=>{
                    setLoading(false);
                }, 1000);
            }, (error)=>{
                setTimeout(()=>{
                    setLoading(false);
                }, 1000);
            });
        };
        getData();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full float-left text-black dark:text-white",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(header/* default */.Z, {}),
            featured && /*#__PURE__*/ jsx_runtime_.jsx(components_featured, {
                data: featured
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "float-left w-full",
                children: categories && categories.length > 0 && categories.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(thumbnail_collectionSmall, {
                        title: item.title,
                        data: item.data
                    }, index))
            })
        ]
    });
}


/***/ })

};
;