exports.id = 2513;
exports.ids = [2513];
exports.modules = {

/***/ 18458:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 29849))

/***/ }),

/***/ 29849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/app/layout.js","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var layout_js_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(51284);
var layout_js_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(layout_js_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(28360);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/next-auth/react/index.js
var react = __webpack_require__(63370);
// EXTERNAL MODULE: ./src/components/header/logo.js
var logo = __webpack_require__(85500);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/SvgIcon/index.js
var SvgIcon = __webpack_require__(81394);
var SvgIcon_default = /*#__PURE__*/__webpack_require__.n(SvgIcon);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/DarkMode.js
var DarkMode = __webpack_require__(29132);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Face6.js
var Face6 = __webpack_require__(30077);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/LightMode.js
var LightMode = __webpack_require__(12008);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/MenuOutlined.js
var MenuOutlined = __webpack_require__(46133);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Message.js
var Message = __webpack_require__(19256);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Notifications.js
var Notifications = __webpack_require__(68388);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Settings.js
var Settings = __webpack_require__(56714);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(59483);
// EXTERNAL MODULE: ./src/hooks/useColorMode.js + 1 modules
var useColorMode = __webpack_require__(32241);
// EXTERNAL MODULE: ./src/utils/String.js
var utils_String = __webpack_require__(23474);
// EXTERNAL MODULE: ./src/assets/profile.png
var profile = __webpack_require__(44320);
;// CONCATENATED MODULE: ./src/config.js
const Config = {
    accountType: 5,
    admin: 10
};
/* harmony default export */ const config = (Config);

// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Close.js
var Close = __webpack_require__(67671);
// EXTERNAL MODULE: ./src/lib/api.js
var api = __webpack_require__(67272);
// EXTERNAL MODULE: ./src/lib/helper.js
var helper = __webpack_require__(15539);
;// CONCATENATED MODULE: ./src/components/loading/Single.js


function Card(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-full float-left",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            role: "status",
            className: "w-full rounded animate-pulse",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-full",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "h-[100px] bg-gray-300 rounded-lg dark:bg-gray-600 w-full mb-[20px]"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "sr-only",
                    children: "Loading..."
                })
            ]
        })
    });
}
/* harmony default export */ const Single = (Card);

// EXTERNAL MODULE: ./src/components/empty/Simple.js
var Simple = __webpack_require__(89779);
;// CONCATENATED MODULE: ./src/components/notifications/index.js






let notifications_api = new api/* default */.Z();




let notifications_helper = new helper/* default */.Z();
function notifications_Notifications(props) {
    const [loading, setLoading] = (0,react_.useState)(null);
    const [data, setData] = (0,react_.useState)([]);
    const { data: session  } = (0,react.useSession)();
    (0,react_.useEffect)(()=>{
        const getData = async ()=>{
            if (!session) return;
            setLoading(true);
            await notifications_api.get("/api/notifications", session?.accessToken, (response)=>{
                setLoading(false);
                if (response.data) {
                    setData(response.data);
                } else {
                    setData([]);
                }
            }, (error)=>{
                setLoading(false);
                setData([]);
            });
        };
        getData();
    }, [
        session
    ]);
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
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "absolute top-[80px] right-0 w-[450px] h-[calc(100vh-80px)] bg-white dark:bg-gray-800 border-l-[1px] border-gray-200 dark:border-gray-700",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-full float-left h-[80px] px-[20px] flex justify-between items-center content-center border-b-[1px] border-gray-200 dark:border-gray-700",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "font-semibold",
                        children: "Notifications"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((SvgIcon_default()), {
                        onClick: ()=>{
                            props.onClose();
                        },
                        className: "cursor-pointer",
                        component: Close/* default */.Z
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-full float-left h-[calc(100vh-160px)] overflow-scroll",
                children: [
                    !loading && data && data.length > 0 && data.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "cursor-pointer float-left w-full px-[20px] py-[20px] border-b-[1px] border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    className: "w-full float-left text-sm mb-[10px] font-semibold",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: renderProfile(item.user)
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "font-semibold h-[30px] flex items-center content-center",
                                            children: notifications_helper.getName(item.user)
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "w-full float-left text-sm",
                                    children: item.message
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "w-full float-left text-xs text-green-500 mt-[10px] font-semibold",
                                    children: item.created_at
                                })
                            ]
                        }, index)),
                    loading && [
                        1,
                        2,
                        3,
                        4,
                        5
                    ].map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "cursor-pointer float-left w-full border-b-[1px] border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Single, {})
                        }, index)),
                    !loading && data && data.length == 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-full float-left",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Simple/* default */.Z, {})
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const notifications = (notifications_Notifications);

;// CONCATENATED MODULE: ./src/components/header/loggedin.js
/* __next_internal_client_entry_do_not_use__ default auto */ 






















const dropdownMenu = [
    {
        title: "Settings",
        icon: Settings/* default */.Z,
        route: "/settings"
    }
];
function Loggedin(props) {
    const [toggle, setToggle] = (0,react_.useState)(false);
    const router = (0,navigation.useRouter)();
    const [colorMode, setColorMode] = (0,useColorMode/* default */.Z)();
    const { data: session  } = (0,react.useSession)();
    const [menu, setMenu] = (0,react_.useState)([]);
    const [dropdown, setDropdown] = (0,react_.useState)(false);
    const [notifFlag, setNotifFlag] = (0,react_.useState)(false);
    (0,react_.useEffect)(()=>{
        let actType = parseInt(session?.user?.account_type);
        if (actType == config.admin) {
            setMenu(utils_String/* default.adminMenu */.Z.adminMenu);
        } else {
            setMenu(utils_String/* default.loggedInMenu */.Z.loggedInMenu);
        }
    }, [
        session
    ]);
    const renderDropdown = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-[300px] right-0 top-[60px] dark:bg-gray-800 dark:divide-gray-800 border border-gray-200 dark:border-gray-700 " + (dropdown == false ? "hidden" : ""),
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "px-4 py-4 text-sm text-gray-900 dark:text-white",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "text-lg font-semibold",
                            children: [
                                "Hi ",
                                session?.user.name,
                                "!"
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "font-medium truncate",
                            children: session?.user?.email
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: "text-sm text-gray-700 dark:text-gray-200",
                    children: dropdownMenu && dropdownMenu.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                            onClick: ()=>{
                                router.push(item.route);
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "block px-4 py-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
                                children: item.title
                            })
                        }, index))
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mb-[20px]",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        onClick: ()=>{
                            (0,react.signOut)({
                                callbackUrl: `${window.location.origin}`
                            });
                        },
                        className: "block px-4 cursor-pointer py-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white",
                        children: "Sign out"
                    })
                })
            ]
        });
    };
    const renderProfile = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            onClick: ()=>{
                // router.push('/profile')
                setDropdown(!dropdown);
            },
            className: "h-[30px] w-[30px] mr-[10px] float-left relative",
            children: [
                session?.user?.information && session.user.information.profile ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: session.user.information.profile,
                    width: 30,
                    height: 30,
                    className: "rounded-[15px] cursor-pointer border-2 border-green-500 dark:border-green-500",
                    alt: session?.user?.name
                }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "h-[30px] w-[30px] rounded-[15px] bg-green-400 dark:bg-white float-left cursor-pointer",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((SvgIcon_default()), {
                        component: Face6/* default */.Z,
                        className: "text-white dark:text-black",
                        style: {
                            fontSize: 30
                        }
                    })
                }),
                renderDropdown()
            ]
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "z-50 float-left w-full h-[80px] fixed bg-white dark:bg-gray-800 border-b-[1px] border-b-gray-200  dark:border-b-gray-700",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "lg:block xl:block 2xl:block sm:hidden md:hidden xs:hidden",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-1/4 h-[80px] float-left content-center items-center flex href-link px-[20px]",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(logo/* default */.Z, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "h-[80px] w-3/4 float-left flex flex-row content-center items-center justify-between pr-[20px]",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "h-[80px] flex content-center items-center justify-between",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((SvgIcon_default()), {
                                        component: Notifications/* default */.Z,
                                        onClick: ()=>{
                                            setNotifFlag(!notifFlag);
                                        },
                                        className: "cursor-pointer float-left mr-[20px] ml-[20px]"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((SvgIcon_default()), {
                                        component: Message/* default */.Z,
                                        onClick: ()=>{
                                            router.push("/messages");
                                        },
                                        className: "cursor-pointer float-left mr-[20px]"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((SvgIcon_default()), {
                                        component: colorMode == "light" ? DarkMode/* default */.Z : LightMode/* default */.Z,
                                        onClick: ()=>setColorMode(colorMode === "light" ? "dark" : "light"),
                                        className: "cursor-pointer float-left mr-[20px]"
                                    }),
                                    renderProfile()
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "sm:block md:block xs:block lg:hidden 2xl:hidden",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-full h-[80px] float-left href-link px-[20px] pr-[20px] flex items-center content-center justify-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-[5g0%]",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(logo/* default */.Z, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((SvgIcon_default()), {
                                    component: Notifications/* default */.Z,
                                    onClick: ()=>{
                                        setNotifFlag(!notifFlag);
                                    },
                                    className: "cursor-pointer float-left mr-[20px] ml-[20px]"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((SvgIcon_default()), {
                                    component: Message/* default */.Z,
                                    onClick: ()=>{
                                        router.push("/messages");
                                    },
                                    className: "cursor-pointer float-left mr-[20px]"
                                }),
                                renderProfile(),
                                /*#__PURE__*/ jsx_runtime_.jsx((SvgIcon_default()), {
                                    component: MenuOutlined/* default */.Z,
                                    className: "cursor-pointer ml-[20px]",
                                    onClick: ()=>{
                                        setToggle(!toggle);
                                    }
                                })
                            ]
                        })
                    ]
                })
            }),
            toggle && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-full h-[calc(100vh-80px)] absolute mt-[80px] px-[20px] pr-[20px] bg-white dark:bg-gray-800",
                children: [
                    menu && menu.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            onClick: ()=>{
                                router.push("/" + item.route);
                                setToggle(!toggle);
                            },
                            className: "w-full float-left h-[60px] flex items-center content-center hover:font-bold cursor-pointer",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((SvgIcon_default()), {
                                    component: item.icon,
                                    className: "text-gray-500"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-sm ml-[10px]",
                                    children: item.title
                                })
                            ]
                        }, index)),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mt-[50px] w-full float-left",
                        children: [
                            [
                                "Logout"
                            ].map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "hover:font-bold cursor-pointer w-full float-left pt-[20px] pb-[20px] text-sm",
                                    onClick: ()=>{
                                        router.push("/" + item.toLowerCase());
                                        setToggle(!toggle);
                                    },
                                    children: item
                                }, index)),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "hover:font-bold cursor-pointer w-full float-left pt-[20px] pb-[20px] text-sm",
                                onClick: ()=>{
                                    setColorMode(colorMode === "light" ? "dark" : "light");
                                    setToggle(!toggle);
                                },
                                children: colorMode == "dark" ? "Light Mode" : "Dark Mode"
                            })
                        ]
                    })
                ]
            }),
            notifFlag && /*#__PURE__*/ jsx_runtime_.jsx(notifications, {
                onClose: ()=>{
                    setNotifFlag(false);
                }
            })
        ]
    });
}
/* harmony default export */ const loggedin = (Loggedin);

// EXTERNAL MODULE: ./src/components/header/index.js
var header = __webpack_require__(49840);
// EXTERNAL MODULE: ./src/components/header/content.js
var content = __webpack_require__(67443);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/disclosure/disclosure.js + 16 modules
var disclosure = __webpack_require__(88144);
;// CONCATENATED MODULE: ./src/components/header/blackwhite.js
/* __next_internal_client_entry_do_not_use__ default auto */ 



function index(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(disclosure/* Disclosure */.p, {
        as: "nav",
        children: /*#__PURE__*/ jsx_runtime_.jsx(content/* default */.Z, {
            leftColor: " bg-black dark:bg-white text-white dark:text-black",
            rightColor: " bg-white dark:bg-black"
        })
    });
}
/* harmony default export */ const blackwhite = (index);

// EXTERNAL MODULE: ./node_modules/@material-tailwind/react/index.js
var _material_tailwind_react = __webpack_require__(18714);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/HandshakeRounded.js
var HandshakeRounded = __webpack_require__(88677);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Logout.js
var Logout = __webpack_require__(8207);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Person3.js
var Person3 = __webpack_require__(6535);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/SecurityOutlined.js
var SecurityOutlined = __webpack_require__(58832);
// EXTERNAL MODULE: ./src/utils/Style.js
var Style = __webpack_require__(60168);
;// CONCATENATED MODULE: ./src/components/sidebar/sidebar.js
/* __next_internal_client_entry_do_not_use__ default auto */ 












const menu = utils_String/* default.loggedInMenu */.Z.loggedInMenu;
function Sidebar(props) {
    const pathname = (0,navigation.usePathname)();
    const router = (0,navigation.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `w-full float-left min-h-[100vh] mt-[80px] relative bg-white dark:bg-gray-800 border-r-[1px] border-r-gray-200 dark:border-r-gray-700`,
        children: [
            menu && menu.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    onClick: ()=>{
                        router.push("/" + item.route);
                    },
                    className: "w-full float-left h-[60px] flex items-center content-center px-[20px] hover:font-bold  cursor-pointer " + (pathname.match(item.route) ? "font-bold" : ""),
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((SvgIcon_default()), {
                            component: item.icon,
                            className: pathname.match(item.route) ? "font-bold" : "text-gray-500"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-sm ml-[10px]",
                            children: item.title
                        })
                    ]
                }, index)),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "absolute bottom-[100px] left-0 flex items-center content-center h-[50px] justify-center w-full",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(_material_tailwind_react.Tooltip, {
                        content: "Contributors",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((SvgIcon_default()), {
                            onClick: ()=>{
                                router.push("/contributors");
                            },
                            component: Person3/* default */.Z,
                            className: "cursor-pointer"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(_material_tailwind_react.Tooltip, {
                        content: "Terms & Conditions",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((SvgIcon_default()), {
                            onClick: ()=>{
                                router.push("/docs/terms&conditions");
                            },
                            component: HandshakeRounded/* default */.Z,
                            className: "cursor-pointer"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(_material_tailwind_react.Tooltip, {
                        content: "Privacy Policy",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((SvgIcon_default()), {
                            onClick: ()=>{
                                router.push("/docs/privacypolicy");
                            },
                            component: SecurityOutlined/* default */.Z,
                            className: "ml-[10px] cursor-pointer"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(_material_tailwind_react.Tooltip, {
                        content: "Settings",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((SvgIcon_default()), {
                            onClick: ()=>{
                                router.push("/settings");
                            },
                            component: Settings/* default */.Z,
                            className: "ml-[10px] cursor-pointer"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(_material_tailwind_react.Tooltip, {
                        content: "Logout",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((SvgIcon_default()), {
                            onClick: ()=>{
                                (0,react.signOut)({
                                    callbackUrl: `${window.location.origin}`
                                });
                            },
                            component: Logout/* default */.Z,
                            className: "ml-[10px] cursor-pointer"
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const sidebar = (Sidebar);

// EXTERNAL MODULE: ./src/components/footer/index.js
var footer = __webpack_require__(79021);
;// CONCATENATED MODULE: ./src/components/layouts/Homepage.js
/* __next_internal_client_entry_do_not_use__ default auto */ 








const protectedPages = [
    "/dashboard",
    "/settings",
    "/profile",
    "/match",
    "/jobs",
    "/events",
    "/mycompany"
];
const loginRegiser = [
    "/login",
    "/register"
];
function Homepage({ children  }) {
    const router = (0,navigation.useRouter)();
    const pathname = (0,navigation.usePathname)();
    const [loading, setLoading] = (0,react_.useState)(true);
    const { data: session  } = (0,react.useSession)();
    (0,react_.useEffect)(()=>{
        const securedPage = async ()=>{
            let localSession = await (0,react.getSession)();
            if (localSession && pathname === "/") {
                router.push("/dashboard");
                setTimeout(()=>{
                    setLoading(false);
                }, 1000);
            } else if (!localSession && protectedPages.includes(pathname)) {
                // signIn()
                window.location.href = window.location.origin + "/login";
            } else {
                setTimeout(()=>{
                    setLoading(false);
                }, 1000);
            }
        };
        securedPage();
    }, [
        pathname,
        router
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-full float-left",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "float-left w-full min-h-full bg-white dark:bg-black text-black dark:text-white",
            children: [
                !loading && session && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-full float-left",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(loggedin, {}),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "w-full min-h-[100vh] bg-gray-100 dark:bg-gray-900 float-left relative",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "lg:block 2xl:block sm:hidden xs:hidden md:hidden w-[15%] min-h-[100vh] fixed float-left",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(sidebar, {})
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "lg:w-[85%] min-h-[100vh] 2xl:w-[85%] sm:w-full xs:w-full md:w-full float-left p-[20px] mt-[80px] lg:ml-[15%] 2xl:ml-[15%]",
                                    children: children
                                })
                            ]
                        })
                    ]
                }),
                !loading && !session && !loginRegiser.includes(pathname) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-full float-left bg-white dark:bg-black text-black dark:text-white min-h-[100px]",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(header/* default */.Z, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full float-left",
                            children: children
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(footer/* default */.Z, {})
                    ]
                }),
                !loading && !session && loginRegiser.includes(pathname) && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-full float-left bg-white dark:bg-black text-black dark:text-white min-h-[100px]",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(blackwhite, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full float-left",
                            children: children
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(footer/* default */.Z, {})
                    ]
                }),
                loading && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-full float-left bg-white dark:bg-black text-black dark:text-white h-[100vh] items-center justify-center content-center flex",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                            className: "w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-black dark:fill-white",
                            viewBox: "0 0 100 101",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                                    fill: "currentColor"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                                    fill: "currentFill"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "sr-only",
                            children: "Loading..."
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const layouts_Homepage = (Homepage);

;// CONCATENATED MODULE: ./src/app/layout.js
/* __next_internal_client_entry_do_not_use__ default auto */ 





function RootLayout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("head", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "phstartup.org"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("body", {
                className: (layout_js_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
                children: /*#__PURE__*/ jsx_runtime_.jsx(react.SessionProvider, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(layouts_Homepage, {
                        children: children
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 89779:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_Face5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60864);
/* harmony import */ var _mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81394);
/* harmony import */ var _mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);





function Simple(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full h-[50vh] flex items-center content-center justify-center",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "text-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_2___default()), {
                        component: _mui_icons_material_Face5__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                        style: {
                            fontSize: 100
                        }
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: "text-center font-bold text-lg mt-[20px]",
                    children: "No Results Found."
                }),
                props.action && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: "text-center",
                    children: [
                        "Click ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                            className: "font-bold",
                            children: props.action
                        }),
                        " to start."
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Simple);


/***/ }),

/***/ 79021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header_logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85500);
/* harmony import */ var _utils_String__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23474);
/* harmony import */ var _mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81394);
/* harmony import */ var _mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_Facebook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97245);
/* harmony import */ var _mui_icons_material_Instagram__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(99994);
/* harmony import */ var _mui_icons_material_LinkedIn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(18532);
/* harmony import */ var _mui_icons_material_Twitter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(27370);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_Style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(60168);
/* __next_internal_client_entry_do_not_use__ default auto */ 











const cards = "lg:w-1/3 2x:w-1/3 xl:w-1/3 md:w-full sm:w-full xs:w-full float-left";
function Index(props) {
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "float-left min-h-[500px] overflow-hidden bg-white dark:bg-black text-black dark:text-white w-full pb-[50px] " + _utils_Style__WEBPACK_IMPORTED_MODULE_5__/* ["default"].padding */ .Z.padding,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mt-[100px] w-full footer-bg-light dark:footer-bg-dark overflow-hidden",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: cards,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full float-left",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-full float-left",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_header_logo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full float-left text-lg mt-[20px] font-bold",
                                children: "Open Startup & Business Community"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: cards,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full float-left mt-[20px]",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "font-bold text-sm mb-[20px]",
                                children: "DOCUMENTS"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: cards,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "w-full float-left mt-[20px]",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "font-bold text-sm mb-[20px]",
                                    children: "PROGRAMS"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    onClick: ()=>{
                                        router.push("/contributors");
                                    },
                                    className: "mt-[20px] mb-[10px] cursor-pointer hover:underline text-sm",
                                    children: "Contributors"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mt-[50px] w-full border-t-[1px] border-gray-200 dark:border-gray-700 lg:flex xl:flex 2xl:flex sm:flex-row xs:flex-row md:flex-row items-center content-center justify-between min-h-[100px] overflow-hidden",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "float-left lg:w-[20%] xl:w-[20%] 2xl:w-[20%] sm:w-[100%] xs:w-[100%] md:w-[100%] flex items-center content-center justify-between",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_6___default()), {
                                component: _mui_icons_material_Facebook__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                                onClick: ()=>{
                                    router.push("https://www.facebook.com", "_blank");
                                },
                                className: "text-2xl cursor-pointer  hover:text-green-400"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_6___default()), {
                                component: _mui_icons_material_Twitter__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                                onClick: ()=>{
                                    router.push("https://twitter.com", "_blank");
                                },
                                className: "text-2xl cursor-pointer hover:text-green-400"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_6___default()), {
                                component: _mui_icons_material_Instagram__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                                onClick: ()=>{
                                    router.push("https://www.instagram.com/", "_blank");
                                },
                                className: "text-2xl cursor-pointer  hover:text-green-400"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_6___default()), {
                                component: _mui_icons_material_LinkedIn__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
                                onClick: ()=>{
                                    router.push("https://www.linkedin.com/", "_blank");
                                },
                                className: "text-2xl cursor-pointer  hover:text-green-400"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "float-left lg:w-[80%] xl:w-[80%] 2xl:w-[80%] sm:w-[100%] xs:w-[100%] md:w-full lg:block 2xl:block xl:block sm:hidden xs:hidden md:hidden",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "text-sm float-right",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
                                        className: "mr-[20px]",
                                        children: "|"
                                    }),
                                    "Cebu City, Philippines"
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                onClick: ()=>{
                                    router.push("/docs/privacypolicy");
                                },
                                className: "cursor-pointer hover:underline text-sm mr-[20px] float-right",
                                children: "Privacy Policy"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                onClick: ()=>{
                                    router.push("/docs/terms&conditions");
                                },
                                className: "cursor-pointer hover:underline text-sm float-right mr-[20px]",
                                children: "Terms & Conditions"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "lg:hidden xl:hidden 2xl:hidden sm:block xs:block md:block w-full float-left",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                onClick: ()=>{
                                    router.push("/docs/privacypolicy");
                                },
                                className: "cursor-pointer hover:underline text-sm float-left w-full",
                                children: "Privacy Policy"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                onClick: ()=>{
                                    router.push("/docs/terms&conditions");
                                },
                                className: "cursor-pointer hover:underline text-sm float-left w-full",
                                children: "Terms & Conditions"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-sm float-left w-full",
                                children: "Cebu City, Philippines"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);


/***/ }),

/***/ 67443:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85500);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(81394);
/* harmony import */ var _mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_icons_material_DarkMode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29132);
/* harmony import */ var _mui_icons_material_LightMode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(12008);
/* harmony import */ var _mui_icons_material_MenuOutlined__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(46133);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7406);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useColorMode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32241);
/* harmony import */ var _utils_String__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23474);
/* __next_internal_client_entry_do_not_use__ default auto */ 











const menu = _utils_String__WEBPACK_IMPORTED_MODULE_6__/* ["default"].menu */ .Z.menu;
function Content(props) {
    const [toggle, setToggle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const [colorMode, setColorMode] = (0,_hooks_useColorMode__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "bg-white dark:bg-black z-50 float-left w-full h-[100px] fixed text-black dark:text-white",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "lg:block xl:block 2xl:block sm:hidden md:hidden xs:hidden",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-1/4 h-[100px] float-left content-center items-center flex href-link px-[100px]" + (props.leftColor ? props.leftColor : ""),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_logo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "h-[100px] w-3/4 float-left flex flex-row content-center items-center justify-between pr-[100px]" + (props.rightColor ? props.rightColor : ""),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    menu && menu.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            onClick: ()=>{
                                                router.push(item.route);
                                            },
                                            className: "href-link cursor-pointer px-[20px] pr-[20px] text-sm",
                                            children: item.title
                                        }, index)),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        component: _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
                                        onClick: ()=>{
                                            router.push("/search");
                                        },
                                        className: "cursor-pointer"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    [
                                        "Login",
                                        "Register"
                                    ].map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            onClick: ()=>{
                                                router.push("/" + item.toLowerCase());
                                            },
                                            className: "href-link cursor-pointer px-[20px] pr-[20px] text-sm",
                                            children: item
                                        }, index)),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_7___default()), {
                                        component: colorMode == "light" ? _mui_icons_material_DarkMode__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z : _mui_icons_material_LightMode__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
                                        onClick: ()=>setColorMode(colorMode === "light" ? "dark" : "light"),
                                        className: "cursor-pointer"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "sm:block md:block xs:block lg:hidden 2xl:hidden",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-full h-[100px] float-left content-center items-center flex href-link justify-between px-[20px] pr-[20px] ",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_logo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_7___default()), {
                            component: _mui_icons_material_MenuOutlined__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
                            className: "cursor-pointer",
                            onClick: ()=>{
                                setToggle(!toggle);
                            }
                        })
                    ]
                })
            }),
            toggle && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full h-[calc(100vh-100px)] absolute mt-[100px] px-[20px] pr-[20px] bg-white dark:bg-black",
                children: [
                    menu && menu.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "hover:font-bold cursor-pointer w-full float-left pt-[20px] pb-[20px] text-sm",
                            onClick: ()=>{
                                router.push(item.route.toLowerCase());
                                setToggle(!toggle);
                            },
                            children: item.title
                        }, index)),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "hover:font-bold cursor-pointer w-full float-left pt-[20px] pb-[20px] text-sm",
                        onClick: ()=>{
                            router.push("/search");
                            setToggle(!toggle);
                        },
                        children: "Search"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-[50px] w-full float-left",
                        children: [
                            [
                                "Login",
                                "Register"
                            ].map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "hover:font-bold cursor-pointer w-full float-left pt-[20px] pb-[20px] text-sm",
                                    onClick: ()=>{
                                        router.push("/" + item.toLowerCase());
                                        setToggle(!toggle);
                                    },
                                    children: item
                                }, index)),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "hover:font-bold cursor-pointer w-full float-left pt-[20px] pb-[20px] text-sm",
                                onClick: ()=>{
                                    setColorMode(colorMode === "light" ? "dark" : "light");
                                    setToggle(!toggle);
                                },
                                children: colorMode == "dark" ? "Light Mode" : "Dark Mode"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);


/***/ }),

/***/ 49840:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88144);
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67443);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function index(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__/* .Disclosure */ .p, {
        as: "nav",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_content__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);


/***/ }),

/***/ 85500:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_String__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23474);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);




function logo(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: "/",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("b", {
            className: "text-3xl",
            children: _utils_String__WEBPACK_IMPORTED_MODULE_2__/* ["default"].app_name */ .Z.app_name
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logo);


/***/ }),

/***/ 32241:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ hooks_useColorMode)
});

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./src/hooks/useLocalStorage.js
/* __next_internal_client_entry_do_not_use__ default auto */ 
const useLocalStorage = (key, initialValue)=>{
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = (0,react_.useState)(()=>{
        try {
            // Get from local storage by key
            const item = window.localStorage.getItem(key);
            // Parse stored json or if none return initialValue
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            // If error also return initialValue
            console.log(error);
            return initialValue;
        }
    });
    // useEffect to update local storage when the state changes
    (0,react_.useEffect)(()=>{
        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore = typeof storedValue === "function" ? storedValue(storedValue) : storedValue;
            // Save state
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            // A more advanced implementation would handle the error case
            console.log(error);
        }
    }, [
        key,
        storedValue
    ]);
    return [
        storedValue,
        setStoredValue
    ];
};
/* harmony default export */ const hooks_useLocalStorage = (useLocalStorage);

;// CONCATENATED MODULE: ./src/hooks/useColorMode.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

const useColorMode = ()=>{
    const [colorMode, setColorMode] = hooks_useLocalStorage("color-theme", "light");
    (0,react_.useEffect)(()=>{
        const className = "dark";
        const bodyClass = window.document.body.classList;
        colorMode === "dark" ? bodyClass.add(className) : bodyClass.remove(className);
    }, [
        colorMode
    ]);
    return [
        colorMode,
        setColorMode
    ];
};
/* harmony default export */ const hooks_useColorMode = (useColorMode);


/***/ }),

/***/ 67272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Api)
/* harmony export */ });
class Api {
    async post(url, data, token, callback, errorCallback) {
        if (!token) {
            return;
        }
        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify({
                ...data
            })
        };
        fetch(url, fetchOptions).then((response)=>response.json()).then((json)=>{
            callback(json);
        }).catch((error)=>{
            if (errorCallback) {
                errorCallback(error);
            }
        });
    }
    async postRegister(url, data, callback, errorCallback) {
        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...data
            })
        };
        fetch(url, fetchOptions).then((response)=>response.json()).then((json)=>{
            callback(json);
        }).catch((error)=>{
            if (errorCallback) {
                errorCallback(error);
            }
        });
    }
    async patch(url, data, token, callback, errorCallback) {
        if (!token) {
            return;
        }
        const fetchOptions = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify({
                ...data
            })
        };
        fetch(url, fetchOptions).then((response)=>response.json()).then((json)=>{
            callback(json);
        }).catch((error)=>{
            if (errorCallback) {
                errorCallback(error);
            }
        });
    }
    async get(url, token, callback, errorCallback) {
        if (!token) {
            return;
        }
        const fetchOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        };
        fetch(url, fetchOptions).then((response)=>response.json()).then((json)=>{
            callback(json);
        }).catch((error)=>{
            if (errorCallback) {
                errorCallback(error);
            }
        });
    }
    async getNoToken(url, callback, errorCallback) {
        const fetchOptions = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        };
        fetch(url, fetchOptions).then((response)=>response.json()).then((json)=>{
            callback(json);
        }).catch((error)=>{
            if (errorCallback) {
                errorCallback(error);
            }
        });
    }
}


/***/ }),

/***/ 15539:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Helper)
/* harmony export */ });
class Helper {
    response(data, status, message) {
        return JSON.stringify({
            data,
            status,
            message,
            timestamps: new Date()
        }, (key, value)=>typeof value === "bigint" ? value.toString() : value);
    }
    stringify(data) {
        return JSON.stringify(data, (key, value)=>typeof value === "bigint" ? value.toString() : value);
    }
    exclude(user, keys) {
        return Object.fromEntries(Object.entries(user).filter(([key])=>!keys.includes(key)));
    }
    codeGenerator(prefix, length = null) {
        var crypto = __webpack_require__(6113);
        var str = crypto.randomBytes(length ? length : 60).toString("hex");
        return prefix + "-" + str;
    }
    getName(user) {
        if (user) {
            if (!user.information) {
                return user.username;
            } else {
                let info = user.information;
                if (info.first_name && info.last_name) {
                    return info.first_name + " " + info.last_name;
                } else if (info.first_name) {
                    return info.first_name;
                } else {
                    return user.username;
                }
            }
        } else {
            return null;
        }
    }
}


/***/ }),

/***/ 23474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_icons_material_CalendarMonth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76437);
/* harmony import */ var _mui_icons_material_CasesOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98123);
/* harmony import */ var _mui_icons_material_House__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39586);
/* harmony import */ var _mui_icons_material_Person2Outlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2488);
/* harmony import */ var _mui_icons_material_PieChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23513);
/* harmony import */ var _mui_icons_material_Rocket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30580);
/* __next_internal_client_entry_do_not_use__ default auto */ 







const String = {
    app_name: "phstartup.org",
    api_url: "test",
    host: "phstartup.org",
    menu: [
        {
            title: "Startups",
            route: "/startups"
        },
        {
            title: "Investors",
            route: "/investors"
        },
        {
            title: "Accelerators",
            route: "/accelerators"
        },
        {
            title: "Incubators",
            route: "/incubators"
        },
        {
            title: "Government Programs",
            route: "/governments"
        },
        {
            title: "Events",
            route: "/events"
        }
    ],
    loggedInMenu: [
        {
            title: "Dashboard",
            icon: _mui_icons_material_PieChart__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,
            route: "dashboard"
        },
        {
            title: "My Company",
            icon: _mui_icons_material_House__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
            route: "mycompany"
        },
        {
            title: "Programs",
            icon: _mui_icons_material_Rocket__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
            route: "programs"
        },
        {
            title: "Startup Events",
            icon: _mui_icons_material_CalendarMonth__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
            route: "events"
        },
        {
            title: "Find a match",
            icon: _mui_icons_material_Person2Outlined__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
            route: "match"
        },
        {
            title: "Jobs",
            icon: _mui_icons_material_CasesOutlined__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
            route: "jobs"
        }
    ],
    categories: [
        {
            value: "Startup"
        },
        {
            value: "Investor"
        },
        {
            value: "Accelerator"
        },
        {
            value: "Incubator"
        },
        {
            value: "Government"
        },
        {
            value: "Events"
        },
        {
            value: "Others"
        }
    ],
    industries: [
        {
            value: "Finance"
        },
        {
            value: "Hotel"
        },
        {
            value: "Restaurant"
        }
    ],
    pitches: [
        {
            value: "60 Seconds"
        },
        {
            value: "120 Seconds"
        },
        {
            value: "300 Seconds"
        }
    ],
    stages: [
        {
            value: "Ideation"
        },
        {
            value: "MVP"
        },
        {
            value: "Market Validation"
        },
        {
            value: "Expansion"
        },
        {
            value: "Growing"
        },
        {
            value: "Pre-seed"
        },
        {
            value: "Seed"
        },
        {
            value: "Series A"
        },
        {
            value: "Series B"
        },
        {
            value: "Series C"
        },
        {
            value: "Series D"
        },
        {
            value: "Series E"
        },
        {
            value: "Series F"
        },
        {
            value: "IPO"
        },
        {
            value: "Exit"
        }
    ]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (String);


/***/ }),

/***/ 60168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Style = {
    bgComponent: "bg-white dark:bg-gray-800",
    padding: "lg:px-[100px] xl:px-[100px] 2xl:px-[100px] sm:px-[20px] md:px-[20px] xs:px-[20px]",
    titleFont: "font-bold lg:text-5xl xl:text-5xl 2xl:text-5xl sm:text-2xl xs:text-2xl md:text-3xl",
    cardContainer: "relative w-full float-left min-h-[100px] overflow-hidden p-[20px] rounded-lg bg-white dark:bg-gray-800 mb-[20px]",
    cardContainerWithoutPadding: "relative w-full float-left min-h-[100px] overflow-hidden rounded-lg bg-white dark:bg-gray-800",
    cardContainerHome: "relative w-full float-left min-h-[100px] overflow-hidden rounded-lg bg-white dark:bg-black",
    btn: "w-full h-[50px] lg:pr-[20px] lg:px-[20px] cursor-pointer content-center items-center float-left flex rounded-[25px]",
    cardWidth: "lg:w-[24%] xl:w-[24%] 2xl:w-[24%] sm:w-[100%] xs:w-[100%] md:w-[49%] lg:mr-[1%] xl:mr-[1%] 2xl:mr-[1%] md:mr-[1%] xs:mr-[0%] sm:mr-[0%]"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);


/***/ }),

/***/ 38227:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$$typeof": () => (/* binding */ $$typeof),
/* harmony export */   "__esModule": () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21313);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/incrementtechnologiesinc./Desktop/increment/react-next/phstartup_web/src/app/layout.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 44320:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/profile.0bd0b0fa.png","height":724,"width":726,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAflBMVEVIVT3Gj3k7PiwKX1VXTktyjZQwKSYMRUQ6Rz5+k5kNVE82SlKTW0MtW09YfW90dGtHYk9nfIIkPjy5u3x2YlmeuWwkTj1Ge3a4iGeYX1Z+UUthgZeDgFcRUkKGdltiSTZTXl6Spqw5YHBQbX+rwdMnNyI0cmMcYGNag4h/lmNMfJaQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAASUlEQVR4nAXBBQKAIAAEsENAkJCwu+v/H3TDdmYsTcBw5I70KVbsdiTdcklojdYkUmLgfDbxdcgaaqNQAZVQ9M5FQFHWk/fP9wOKagQY6G3rYwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 41764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93180);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 28360:
/***/ (() => {



/***/ })

};
;