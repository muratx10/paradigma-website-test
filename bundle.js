!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){e.exports=r.p+"assets/images/08d885f82f639974c438992c6931ef5b.png"},function(e,t,r){"use strict";r.r(t);r(2);var n=r(0),o=r.n(n);document.querySelector(".logo img").src=o.a,document.querySelector(".burger").addEventListener("click",e=>{const t=document.querySelector(".navigation ul");e.currentTarget.classList.toggle("burger-menu__active"),t.classList.toggle("hidden")}),document.querySelectorAll(".navigation__link").forEach(e=>{e.addEventListener("click",e=>{e.preventDefault(),function(){const e=document.querySelector(".navigation ul");document.querySelector(".burger").classList.toggle("burger-menu__active"),e.classList.toggle("hidden")}()})}),document.querySelector(".order__link").addEventListener("click",()=>{const e=document.querySelector(".order-modal");e.classList.toggle("show-modal"),document.querySelector(".close-icon").addEventListener("click",()=>{e.classList.remove("show-modal"),e.style.display="none"})}),document.querySelector("#submit").addEventListener("click",e=>{document.querySelector(".order-modal").classList.remove("show-modal"),document.querySelector(".order-modal").style.display="none"})},function(e,t,r){}]);