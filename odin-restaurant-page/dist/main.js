(()=>{"use strict";var n={426:(n,t,e)=>{e.d(t,{Z:()=>h});var r=e(81),o=e.n(r),a=e(645),c=e.n(a),i=e(667),s=e.n(i),d=new URL(e(88),e.b),l=new URL(e(244),e.b),p=c()(o()),m=s()(d),u=s()(l);p.push([n.id,'body {\r\n  font-family: Roboto, sans-serif;\r\n  margin: 0 auto;\r\n  padding: 0;\r\n  background-color: #171717;\r\n}\r\n\r\n#landing-page-wrapper,\r\n#main {\r\n  /*\r\n    Photo by <a href="https://unsplash.com/@amoonnotmoon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Amna Akram</a> on <a href="https://unsplash.com/s/photos/steak?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>\r\n  */\r\n  background-image: url('+m+");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  height: 100vh;\r\n}\r\n\r\n.landing-page {\r\n  height: 100%;\r\n  width: 50%;\r\n  text-align: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  gap: 3rem;\r\n}\r\n\r\n.short-description {\r\n  color: white;\r\n  font-size: 1.5rem;\r\n  text-transform: uppercase;\r\n  letter-spacing: 7px;\r\n}\r\n\r\n.title {\r\n  color: wheat;\r\n  font-size: 8rem;\r\n  text-transform: uppercase;\r\n  letter-spacing: 15px;\r\n  font-weight: bold;\r\n  border-top: 1px solid white;\r\n  border-bottom: 1px solid white;\r\n}\r\n\r\n.description {\r\n  color: white;\r\n  font-size: 1rem;\r\n  line-height: 2;\r\n}\r\n\r\n.explore-button,\r\n.home-main-call-to-action-button,\r\n.contact-main-contact-form-submit {\r\n  font-size: 1rem;\r\n  text-transform: uppercase;\r\n  font-weight: bold;\r\n  letter-spacing: 2px;\r\n  height: 50px;\r\n  width: 125px;\r\n  border: none;\r\n  background-color: wheat;\r\n  border: 1px solid #171717;\r\n  transition: all 0.2s ease-in;\r\n  cursor: pointer;\r\n}\r\n\r\n.explore-button:hover,\r\n.home-main-call-to-action-button:hover,\r\n.contact-main-contact-form-submit:hover {\r\n  color: wheat;  \r\n  background-color: #171717;\r\n  border: 1px solid wheat;\r\n  letter-spacing: 3px;\r\n}\r\n\r\n.home-main-call-to-action-button {\r\n  width: 175px;\r\n}\r\n\r\n.contact-main-contact-form-submit {\r\n  width: 75px;\r\n  height: 30px;\r\n}\r\n\r\nheader {\r\n  color: wheat;\r\n  font-size: 4rem;\r\n  text-transform: uppercase;\r\n  letter-spacing: 15px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  border-bottom: 1px solid white;\r\n  padding: 16px;\r\n}\r\n\r\nnav {\r\n  min-height: 75px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 25px;\r\n  border-bottom: 1px solid white;\r\n}\r\n\r\n#home,\r\n#menu,\r\n#contact {\r\n  border: none;\r\n  background-color: transparent;\r\n  color: white;\r\n  font-size: 1.5rem;  \r\n  cursor: pointer;\r\n  transition: all 200ms ease-in-out;\r\n}\r\n\r\n#home::after,\r\n#menu::after,\r\n#contact::after {\r\n  display:block;\r\n  content: '';\r\n  border-bottom: solid 3px wheat;  \r\n  transform: scaleX(0);  \r\n  transition: transform 200ms ease-in-out;\r\n}\r\n\r\n#home:hover::after,\r\n#menu:hover::after,\r\n#contact:hover::after {\r\n  transform: scaleX(1);\r\n}\r\n\r\n#home:active::after,  \r\n#menu:active::after, \r\n#contact:active::after {\r\n  border-bottom: solid 3px wheat;  \r\n}\r\n\r\n#home.active,  \r\n#menu.active, \r\n#contact.active {\r\n  color: wheat;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #171717;\r\n  color: #e5e7eb;\r\n  font-weight: bold;\r\n  min-height: 75px;\r\n  margin-top:auto; \r\n  border-top: 1px solid white;\r\n}\r\n\r\n.footer-wrapper {\r\n  display: flex;\r\n  gap: 8px;\r\n  align-items: center;\r\n}\r\n\r\n.footer-link {\r\n  background-image: url("+u+");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  height: 20px;\r\n  width: 20px;\r\n}\r\n\r\n.home-main-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: start;\r\n  align-items: center;  \r\n  height: 100%;\r\n  gap: 16px;\r\n}\r\n\r\n.home-main-description {\r\n  color: white;\r\n  white-space: pre-line;\r\n  font-weight: bold;\r\n  font-size: 5rem;\r\n  margin-top: 5%;\r\n}\r\n\r\n.home-main-contact {\r\n  display: flex;\r\n  gap: 32px;\r\n  padding: 16px;\r\n}\r\n\r\n.home-main-contact-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  justify-content: center;\r\n  background-color: hsla(0, 0%, 9%, 0.8);\r\n  border: 1px solid wheat;\r\n}\r\n\r\n.home-main-contact-visit-us {\r\n  color: white;\r\n  font-weight: bold;\r\n  text-decoration: underline;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.home-main-contact-address {\r\n  white-space: pre-line;\r\n  color: white;\r\n}\r\n\r\n.home-main-contact-hours {\r\n  white-space: pre-line;\r\n  color: white;\r\n}\r\n\r\n.contact-main-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-evenly;\r\n  align-items: center;  \r\n  height: 100%;\r\n}\r\n\r\n.contact-main-description {\r\n  color: white;\r\n  white-space: pre-line;\r\n  font-weight: bold;\r\n  font-size: 5rem;\r\n}\r\n\r\n.contact-main-contact {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 32px;\r\n  gap: 18px;\r\n}\r\n\r\n.contact-main-contact-wrapper {\r\n  display: flex;\r\n  flex-direction: row;\r\n  text-align: center;\r\n  justify-content: center;\r\n  background-color: hsla(0, 0%, 9%, 0.8);\r\n  border: 1px solid wheat;\r\n}\r\n\r\n.contact-main-contact-address {\r\n  white-space: pre-line;\r\n  color: white;\r\n}\r\n\r\n.contact-main-contact-hours {\r\n  white-space: pre-line;\r\n  color: white;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 12px;\r\n}\r\n\r\nform > legend {\r\n  color: wheat;\r\n  font-size: 1.5rem;\r\n  letter-spacing: 3px;\r\n  font-weight: bold;\r\n  border-bottom: 1px solid white;\r\n}\r\n\r\nform > input {\r\n  border: none;\r\n\tborder-bottom: 0.125rem solid white;\r\n\tfont-size: 1rem;\r\n\tpadding-left: 0.875rem;\r\n\tpadding-top: 0.825rem;\r\n\tpadding-bottom: 0.5rem;\r\n  background-color: transparent;\r\n  color: white;\r\n}\r\n\r\nform > input:focus {\r\n  outline: none;\r\n}\r\n\r\n.contact-main-opening-hours-p {\r\n  display: flex;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.contact-main-contact-address-title,\r\n.contact-main-contact-opening-hours,\r\n.contact-main-contact-title {\r\n  color: wheat;\r\n  font-size: 1.5rem;\r\n  letter-spacing: 3px;\r\n  font-weight: bold;\r\n  border-bottom: 1px solid white;\r\n}\r\n\r\n.contact-main-contact-title {\r\n  font-size: 3rem;\r\n}\r\n\r\n.contact-main-map {\r\n  display: flex;\r\n  align-items: center;\r\n  margin: 0 auto;\r\n  padding: 32px;\r\n  margin: 32px;\r\n  background-color: antiquewhite;\r\n  color: #171717;\r\n  font-weight: bold;\r\n}\r\n\r\n.wheat-colored {\r\n  color: wheat;\r\n  margin-right: 8px;\r\n}\r\n\r\n.inactive {\r\n  display: none;\r\n}",""]);const h=p},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},667:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var a={},c=[],i=0;i<n.length;i++){var s=n[i],d=r.base?s[0]+r.base:s[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var m=e(p),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)t[m].references++,t[m].updater(u);else{var h=o(u,r);r.byIndex=i,t.splice(i,0,{identifier:p,updater:h,references:1})}c.push(p)}return c}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var c=0;c<a.length;c++){var i=e(a[c]);t[i].references--}for(var s=r(n,o),d=0;d<a.length;d++){var l=e(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},88:(n,t,e)=>{n.exports=e.p+"693f6c916937a4df890e.jpg"},244:(n,t,e)=>{n.exports=e.p+"2c0b3d17597d506011d6.png"}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return n[r](a,a.exports,e),a.exports}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var r=t.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{var n=e(379),t=e.n(n),r=e(795),o=e.n(r),a=e(569),c=e.n(a),i=e(565),s=e.n(i),d=e(216),l=e.n(d),p=e(589),m=e.n(p),u=e(426),h={};h.styleTagTransform=m(),h.setAttributes=s(),h.insert=c().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),t()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;const f=function(){w();const n=document.getElementById("main"),t=document.createElement("div");t.textContent="buildMenu",n.appendChild(t)},g=function(){w();const n=document.getElementById("main"),t=document.createElement("div");t.classList.add("home-main-wrapper");const e=function(){const n=document.createElement("div");return n.classList.add("home-main-description"),n.textContent="A Premium\n And Authentic\n Steakhouse",n}();t.appendChild(e);const r=document.createElement("div");r.classList.add("home-main-call-to-action");const o=function(){const n=document.createElement("button");return n.classList.add("home-main-call-to-action-button"),n.textContent="View Menu",n.addEventListener("click",(n=>{n.target.classList.contains("active")||(w(),v(document.getElementById("menu")),f())})),n}();r.appendChild(o),t.appendChild(r),n.appendChild(t)};function x(n){const t=document.createElement("div");return t.classList.add("contact-main-contact-address"),t.textContent=n,t}function b(n,t){const e=document.createElement("p");e.classList.add("contact-main-opening-hours-p");const r=document.createElement("p");r.classList.add("contact-main-opening-hours-p");const o=document.createElement("span");return o.classList.add("wheat-colored"),o.textContent=n,r.textContent=t,e.appendChild(o),e.appendChild(r),e}function v(n){console.log(n),document.querySelectorAll("nav > button").forEach((n=>{n!==this&&n.classList.remove("active")})),n.classList.add("active")}function w(){document.getElementById("main").innerHTML=""}!function(){const n=document.getElementById("content"),t=document.createElement("div");t.classList.add("content-wrapper");const e=function(){const n=document.createElement("header");return n.textContent="Restaurant",n}();t.appendChild(e);const r=function(){const n=document.createElement("nav"),t=document.createElement("button");t.setAttribute("id","home"),t.textContent="Home",t.addEventListener("click",(n=>{n.target.classList.contains("active")||(v(t),g())}));const e=document.createElement("button");e.setAttribute("id","menu"),e.textContent="Menu",e.addEventListener("click",(n=>{n.target.classList.contains("active")||(v(e),f())}));const r=document.createElement("button");return r.setAttribute("id","contact"),r.textContent="Contact",r.addEventListener("click",(n=>{n.target.classList.contains("active")||(v(r),function(){w();const n=document.getElementById("main"),t=document.createElement("div");t.classList.add("contact-main-wrapper");const e=function(){const n=document.createElement("p");return n.classList.add("contact-main-contact-title"),n.textContent="Contact Us",n}();t.appendChild(e);const r=document.createElement("div");r.classList.add("contact-main-contact-wrapper"),t.appendChild(r);const o=document.createElement("div");o.classList.add("contact-main-contact"),r.appendChild(o);const a=function(){const n=document.createElement("div");return n.classList.add("contact-main-contact-address-title"),n.textContent="Address",n}();o.appendChild(a);const c=x("219 Millbrook Road\n San Diego, CA 22434");o.appendChild(c);const i=x("+123-456-7890\n restaurant@email.com");o.appendChild(i);const s=function(){const n=document.createElement("div");return n.classList.add("contact-main-contact-opening-hours"),n.textContent="Opening hours",n}();o.appendChild(s);const d=document.createElement("div");d.classList.add("contact-main-contact-hours"),o.appendChild(d);const l=b("Monday - Tuesday:","11:00AM – 6:00PM");d.appendChild(l);const p=b("Friday - Sunday:","11:00AM – 11:00PM");d.appendChild(p);const m=b("Happy Hour:","2:00PM – 4:00PM");d.appendChild(m);const u=document.createElement("div");u.classList.add("contact-main-contact-form-wrapper");const h=function(){const n=document.createElement("form"),t=document.createElement("legend");t.textContent="Send a message",n.appendChild(t);const e=document.createElement("input");e.type="text",e.name="name",e.placeholder="Your name",n.appendChild(e);const r=document.createElement("input");r.type="email",r.name="email",r.placeholder="Your email",n.appendChild(r);const o=document.createElement("input");o.type="text",o.name="message",o.placeholder="Type your message ...",n.appendChild(o);const a=document.createElement("button");return a.classList.add("contact-main-contact-form-submit"),a.textContent="Send",a.type="button",n.appendChild(a),n}();u.appendChild(h),o.appendChild(u);const f=function(){const n=document.createElement("div");return n.classList.add("contact-main-map"),n.textContent="Placeholder Google Maps",n}();r.appendChild(f),n.appendChild(t)}())})),n.appendChild(t),n.appendChild(e),n.appendChild(r),n}();t.appendChild(r);const o=function(){const n=document.createElement("div");return n.setAttribute("id","main"),n}();t.appendChild(o);const a=function(){const n=document.createElement("footer"),t=document.createElement("div");t.classList.add("footer-wrapper"),t.textContent="Copyright © 2022 Eduard";const e=document.createElement("a");return e.classList.add("footer-link"),e.href="https://github.com/raqo0",t.appendChild(e),n.appendChild(t),n}();t.appendChild(a),n.appendChild(t)}(),v(document.querySelector("nav > #home")),g()})()})();