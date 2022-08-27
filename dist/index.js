(()=>{"use strict";var n,t,e,o={890:(n,t,e)=>{e.d(t,{Z:()=>i});var o=e(645),a=e.n(o)()((function(n){return n[1]}));a.push([n.id,'html,\nbody {\n  height: 100%;\n}\n\nbody {\n  background-color: burlywood;\n  width: 98%;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\np {\n  font-size: 20px;\n}\n\n.header {\n  position: sticky;\n  top: 0;\n  flex: 0 0 auto;\n  margin-bottom: 30px;\n}\n\n.header-nav {\n  display: inline-flex;\n  justify-content: space-between;\n  width: 98%;\n}\n\n.rs-lang {\n  width: 100px;\n}\n\n.theme {\n  height: 60px;\n  width: 60px;\n  font-size: 35px;\n}\n\n.authorization {\n  height: 60px;\n  width: 60px;\n  font-size: 40px;\n}\n\n.menu {\n  height: 60px;\n  width: 60px;\n  padding-top: 25px;\n  padding-right: 35px;\n}\n\n.menu-btn span,\n.menu-btn span::before,\n.menu-btn span::after {\n  top: 45%;\n  height: 2px;\n  position: absolute;\n  width: 30px;\n  background-color: black;\n}\n\n.menu-btn span::before,\n.menu-btn span::after {\n  content: "";\n  display: block;\n  align-items: center;\n}\n\n.menu-btn span::before {\n  transform: translateY(-10px);\n}\n\n.menu-btn span::after {\n  transform: translateY(10px);\n}\n\n.main {\n  flex: 1 0 auto;\n}\n\n.information {\n  margin-top: 100px;\n  display: flex;\n  justify-content: center;\n  margin-bottom: 1000px;\n}\n\n.information-buttons {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 10px;\n}\n\n.more,\n.start,\n.video,\n.about {\n  display: flex;\n  width: 300px;\n  height: 30px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.footer {\n  position: sticky;\n  bottom: 0px;\n  z-index: 10;\n}\n\n.logo {\n  width: 80px;\n  height: 40px;\n}\n\n.footer-nav {\n  width: 100%;\n}\n\n.header-link {\n  text-decoration: none;\n  color: black;\n}\n\n.book-title {\n  display: flex;\n  justify-content: center;\n}\n\n.book-nav {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 50px;\n}\n\n.book-buttons {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 15px;\n}\n\n.elementary,\n.pre-intermediate,\n.intermediate,\n.upper-intermediate,\n.advanced,\n.profiency {\n  width: 300px;\n  height: 100px;\n}\n',""]);const i=a},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=n(t);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,o){"string"==typeof n&&(n=[[null,n,""]]);var a={};if(o)for(var i=0;i<this.length;i++){var r=this[i][0];null!=r&&(a[r]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);o&&a[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),t.push(c))}},t}},379:(n,t,e)=>{var o,a=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),i=[];function r(n){for(var t=-1,e=0;e<i.length;e++)if(i[e].identifier===n){t=e;break}return t}function s(n,t){for(var e={},o=[],a=0;a<n.length;a++){var s=n[a],c=t.base?s[0]+t.base:s[0],l=e[c]||0,u="".concat(c," ").concat(l);e[c]=l+1;var d=r(u),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:u,updater:m(f,t),references:1}),o.push(u)}return o}function c(n){var t=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var i=e.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(n){t.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(t);else{var r=a(n.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var l,u=(l=[],function(n,t){return l[n]=t,l.filter(Boolean).join("\n")});function d(n,t,e,o){var a=e?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=u(t,a);else{var i=document.createTextNode(a),r=n.childNodes;r[t]&&n.removeChild(r[t]),r.length?n.insertBefore(i,r[t]):n.appendChild(i)}}function f(n,t,e){var o=e.css,a=e.media,i=e.sourceMap;if(a?n.setAttribute("media",a):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var p=null,b=0;function m(n,t){var e,o,a;if(t.singleton){var i=b++;e=p||(p=c(t)),o=d.bind(null,e,i,!1),a=d.bind(null,e,i,!0)}else e=c(t),o=f.bind(null,e,t),a=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return o(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;o(n=t)}else a()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var e=s(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<e.length;o++){var a=r(e[o]);i[a].references--}for(var c=s(n,t),l=0;l<e.length;l++){var u=r(e[l]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}e=c}}}}},a={};function i(n){var t=a[n];if(void 0!==t)return t.exports;var e=a[n]={id:n,exports:{}};return o[n](e,e.exports,i),e.exports}i.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return i.d(t,{a:t}),t},i.d=(n,t)=>{for(var e in t)i.o(t,e)&&!i.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},i.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),i.nc=void 0,n=i(379),t=i.n(n),e=i(890),t()(e.Z,{insert:"head",singleton:!1}),e.Z.locals,async function(){await async function(){const n=document.querySelector(".root"),t=document.createElement("div");t.innerHTML='\n  \n    <header class="header">\n\t\t\t<div class="header-nav">\n\t\t\t<a class="header-link" href="../index.html"><h2 class="rs-lang">RS Lang</h2></a>\n\t\t\t<div class="header-buttons">\n\t\t\t<button class="theme">&#9790;</button>\n\t\t\t<button class="authorization">&#9094;</button>\n\t\t\t<button class="menu">\n\t\t\t<a href="#" class="menu-btn">\n                <span></span>\n              </a>\n\t\t\t  </button>\n\t\t</div>\n\t\t</div>\n\t\t</header>\n\t\t<main class="main">\n\t\t<div class="nav">\n\t\t\t<button class="book">Учебник</button>\n\t\t\t<button class="statistic">Статистика</button>\n\t\t\t<button class="savannah">Саванна</button>\n\t\t\t<button class="sprint">Спринт</button>\n\t\t\t<button class="audio">Аудиовызов</button>\n\t\t\t<button class="writing">Написание</button>\n\t\t  </div>\n\n\t\t  <div class="information">\n\t\t\t  <div class="information-buttons">\n\t\t\t  <button class="more">Узнать больше о приложении</button>\n\t\t\t  <button class="start">Начать изучение</button>\n\t\t\t  <button class="video">Как работает приложение</button>\n\t\t\t  <button class="about">О команде</button>\n\t\t\t  </div>\n\t\t  </div>\n\t\t</main>\n\n\t\t<footer class="footer">\n\t\t\t<div class="footer-nav">\n\t\t\t\t<a href="https://rs.school/js/"><img class="logo" src="./assets/rslogo.png" alt="rs-logo"></a>\n\t\t\t</div>\n\t\t</footer>\n  \n      ',n.appendChild(t)}(),await async function(){const n=document.querySelector(".book"),t=document.querySelector(".main");null==n||n.addEventListener("click",(async function(){return t.innerHTML='\n       <main class="main">\n  <h1 class="book-title">Уровни сложности</h1>\n  <div class="book-nav">\n    <div class="book-buttons">\n      <button class="elementary" class="button-level">A1 Elementary</button>\n      <button class="pre-intermediate" class="button-level">A2 Pre-Intermediate</button>\n      <button class="intermediate" class="button-level">B1 Intermediate</button>\n      <button class="upper-intermediate" class="button-level">B2 Upper-Intermediate</button>\n      <button class="advanced" class="button-level">C1 Advanced</button>\n      <button class="profiency" class="button-level">C2 Profiency</button>\n    </div>\n  </div>\n</main>\n    '}))}(),await async function(){const n=document.querySelector(".statistic"),t=document.querySelector(".main");null==n||n.addEventListener("click",(async function(){return t.innerHTML="\n      \n    "}))}(),await async function(){const n=document.querySelector(".savannah"),t=document.querySelector(".main");null==n||n.addEventListener("click",(async function(){return t.innerHTML="\n      \n    "}))}(),await async function(){document.querySelector(".elementary").addEventListener("click",(async function(){console.log(1)}))}()}()})();