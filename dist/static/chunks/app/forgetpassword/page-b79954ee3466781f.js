(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[572],{6879:function(e,t,l){Promise.resolve().then(l.bind(l,68681))},68681:function(e,t,l){"use strict";l.r(t);var r=l(9268),a=l(86006),n=l(62059),s=l(17842),i=l(56008),u=l(61192);t.default=function(e){let t=(0,i.useRouter)(),[l,c]=(0,a.useState)(null),[o,d]=(0,a.useState)(null);return(0,r.jsxs)("div",{className:"w-full h-[100vh] float-left",children:[(0,r.jsx)("div",{className:"bg-gray-100 dark:bg-gray-800 h-[100vh] float-left text-black dark:text-white lg:w-1/4 2xl:w-[20%] sm:w-full md:w-full xs:w-full",children:(0,r.jsxs)("section",{className:"mt-[150px] text-center lg:px-[20px] 2xl:px-[20px] sm:px-[50px] xs:px-[50px] md:px-[50px]",children:[(0,r.jsx)("p",{className:"text-m text-black dark:text-white font-bold mb-[50px]",children:"Forget Password"}),(0,r.jsx)(n.Z,{type:"text",placeholder:"Username or Email Address",value:l,onChange:(e,t)=>{c(e),d(t)},validation:{type:"text",size:8,column:"Email Address",error:o}}),(0,r.jsx)(s.Z,{title:"Send Request",style:" bg-green-400 text-white",onClick:()=>{}}),(0,r.jsx)("span",{className:"w-full h-[50px] float-left mt-[50px]",children:"Already have an account?"}),(0,r.jsx)(s.Z,{title:"Login",style:" bg-black text-white",onClick:()=>{t.push("/login")}})]})}),(0,r.jsx)(u.Z,{title:"Open & Free Startup Community",list:["Share your Pitch Deck","Grow your network","Validate your ideas","and more"]})]})}},61192:function(e,t,l){"use strict";l.d(t,{Z:function(){return a}});var r=l(9268);l(86006);var a=function(e){return(0,r.jsx)("div",{className:"bg-white dark:bg-black h-[100vh] float-left text-black dark:text-white lg:w-3/4 2xl:w-[3/4] sm:w-full md:w-full xs:w-full",children:(0,r.jsx)("div",{className:"flex items-center content-center h-[100vh] w-full px-[50px]",children:(0,r.jsxs)("section",{children:[(0,r.jsx)("p",{className:"text-6xl text-black dark:text-white font-bold w-full float-left",children:e.title}),(0,r.jsx)("ul",{className:"text-2xl text-black dark:text-white w-full float-left mt-[50px] list-disc pl-[50px]",children:e.list&&e.list.map((e,t)=>(0,r.jsx)("li",{className:"float-left w-full",children:e},t))})]})})})}},17842:function(e,t,l){"use strict";l.d(t,{Z:function(){return a}});var r=l(9268);l(86006);var a=function(e){return(0,r.jsx)("div",{onClick:()=>{e.onClick()},className:"w-full h-[50px] cursor-pointer content-center items-center float-left flex rounded-[25px] justify-center hover:cursor-pointer hover:font-bold "+e.style,children:e.title})}},19481:function(e,t){"use strict";t.Z={validate(e,t,l){switch(t.type.toLowerCase()){case"email":if(null===e||""===e)return l+" is required.";if(!1===this.checkEmail(e))return l+" is invalid.";return!0;case"text":case"text_without_space":if(null===e||""===e)return l+" is required.";if(e.length<t.size)return l+" requires atleast "+t.size+" characters.";return!0;case"phone_number":if(null===e||""===e)return l+" is required.";if(e.length<8)return l+" requires atleast "+t.size+" digits.";if(isNaN(e))return l+" is invalid";return!0;case"number":if(null===e||""===e)return l+" is required.";if(!0===isNaN(e))return l+" is invalid.";return!0}},checkEmail:e=>!/\s/.test(e)&&!1!==/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+.[a-zA-Z0-9]*$/.test(e)}},62059:function(e,t,l){"use strict";var r=l(9268);l(86006);var a=l(19481);t.Z=function(e){let{validation:t,type:l}=e,n=r=>{let n=a.Z.validate(r.target.value,t,t.column);!0===n?"file"===l?e.onChange(r.target.files[0],null):e.onChange(r.target.value,null):"file"===l?e.onChange(r.target.files[0],n):e.onChange(r.target.value,n)};return(0,r.jsxs)("div",{children:[(0,r.jsx)("input",{placeholder:e.placeholder,type:e.type,value:e.value,disabled:!!e.disable&&e.disable,onChange:e=>{n(e)},className:"w-full h-[50px] rounded-[25px] border-gray-300 dark:border-gray-600 text-black dark:text-white px-[10px] bg-white dark:bg-gray-900"}),(0,r.jsx)("div",{className:"w-full mb-[20px]",children:e.validation&&e.validation.error&&(0,r.jsxs)("label",{className:"text-red-600",children:[(0,r.jsx)("b",{children:"Oops!"})," ",e.validation.error]})})]})}},83177:function(e,t,l){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=l(86006),a=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,l){var r,n={},c=null,o=null;for(r in void 0!==l&&(c=""+l),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(o=t.ref),t)s.call(t,r)&&!u.hasOwnProperty(r)&&(n[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===n[r]&&(n[r]=t[r]);return{$$typeof:a,type:e,key:c,ref:o,props:n,_owner:i.current}}t.Fragment=n,t.jsx=c,t.jsxs=c},9268:function(e,t,l){"use strict";e.exports=l(83177)},56008:function(e,t,l){e.exports=l(93027)}},function(e){e.O(0,[667,488,744],function(){return e(e.s=6879)}),_N_E=e.O()}]);