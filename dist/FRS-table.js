parcelRequire=function(e,r,n,t){function i(n,t){function o(e){return i(o.resolve(e))}function c(r){return e[n][1][r]||r}if(!r[n]){if(!e[n]){var l="function"==typeof parcelRequire&&parcelRequire;if(!t&&l)return l(n,!0);if(u)return u(n,!0);if(f&&"string"==typeof n)return f(n);var p=new Error("Cannot find module '"+n+"'");throw p.code="MODULE_NOT_FOUND",p}o.resolve=c;var a=r[n]=new i.Module(n);e[n][0].call(a.exports,o,a,a.exports,this)}return r[n].exports}function o(e){this.id=e,this.bundle=i,this.exports={}}var u="function"==typeof parcelRequire&&parcelRequire,f="function"==typeof require&&require;i.isParcelRequire=!0,i.Module=o,i.modules=e,i.cache=r,i.parent=u;for(var c=0;c<n.length;c++)i(n[c]);if(n.length){var l=i(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):t&&(this[t]=l)}return i}({5:[function(require,module,exports) {
function e(i){var s=(i=i.length?Array.prototype.slice.apply(i):[i]).map(r).map(t);return e.config.useFallback&&s.forEach(a),s}function t(t){return Array.prototype.slice.apply(t.children).forEach(function(t){t.classList.add(e.config.itemClassName)}),t}function r(t){if(t.classList.contains(e.config.wrapperClassName))return t;var r=document.createElement("div"),a=t.childNodes;r.className=e.config.wrapperClassName;for(var i=void 0;i=a[0];)r.appendChild(i);return t.appendChild(r),r}function a(t){var r=void 0,a=void 0;function i(e){t.removeEventListener("scroll",i),a=e.target.scrollLeft}function s(e){var r=0,s=e.target.scrollLeft,o=Array.prototype.slice.apply(e.target.children),l=a>s?-1:0,n=void 0;t.addEventListener("scroll",i,{passive:!0});do{r+=(n=o.shift()).offsetWidth}while(r<s);e.target.scrollLeft=r+l*n.offsetWidth}t.addEventListener("scroll",i,{passive:!0}),t.addEventListener("scroll",function(t){clearTimeout(r),r=setTimeout(s,e.config.scrollTimeout,t)},{passive:!0})}window.FRSTinyCarousel=e,e.config={wrapperClassName:"frs-tc-wrapper",itemClassName:"frs-tc-item",scrollTimeout:45,useFallback:"undefined"==typeof InstallTrigger};
},{}],6:[function(require,module,exports) {

},{}],3:[function(require,module,exports) {
require("./scripts/FRSTinyCarousel.js"),require("./styles/FRSTinyCarousel.scss");
},{"./scripts/FRSTinyCarousel.js":5,"./styles/FRSTinyCarousel.scss":6}],1:[function(require,module,exports) {
require("./src/FRS-tiny-carousel.js");
},{"./src/FRS-tiny-carousel.js":3}]},{},[1], null)
//# sourceMappingURL=/FRS-table.map