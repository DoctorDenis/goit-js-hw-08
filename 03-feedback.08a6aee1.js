function e(e){return e&&e.__esModule?e.default:e}var t,n,o,r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt,c="object"==typeof r&&r&&r.Object===Object&&r,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,g=Math.max,v=Math.min,p=function(){return d.Date.now()};function b(e,t,n){var o,r,a,i,f,l,u=0,c=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var n=o,a=r;return o=r=void 0,u=t,i=e.apply(a,n)}function b(e){return u=e,f=setTimeout(N,t),c?m(e):i}function O(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-u>=a}function N(){var e=p();if(O(e))return j(e);f=setTimeout(N,function(e){var n=t-(e-l);return s?v(n,a-(e-u)):n}(e))}function j(e){return f=void 0,d&&o?m(e):(o=r=void 0,i)}function k(){var e=p(),n=O(e);if(o=arguments,r=this,l=e,n){if(void 0===f)return b(l);if(s)return f=setTimeout(N,t),m(l)}return void 0===f&&(f=setTimeout(N,t)),i}return t=S(t)||0,y(n)&&(c=!!n.leading,a=(s="maxWait"in n)?g(S(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),k.cancel=function(){void 0!==f&&clearTimeout(f),u=0,o=l=r=f=void 0},k.flush=function(){return void 0===f?i:j(p())},k}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=f.test(e);return n||l.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return y(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),b(e,t,{leading:o,maxWait:t,trailing:r})};const O=document.querySelector(".feedback-form");var N=JSON.parse(localStorage.getItem("feedback-form-state"))?JSON.parse(localStorage.getItem("feedback-form-state")):{};O.elements.email.value=(null===(n=JSON.parse(localStorage.getItem("feedback-form-state")))||void 0===n?void 0:n.email)?JSON.parse(localStorage.getItem("feedback-form-state")).email:"",O.elements.message.value=(null===(o=JSON.parse(localStorage.getItem("feedback-form-state")))||void 0===o?void 0:o.message)?JSON.parse(localStorage.getItem("feedback-form-state")).message:"",O.addEventListener("input",e(t)((e=>{N[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(N))}),500)),O.addEventListener("submit",(e=>{e.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.removeItem("feedback-form-state"),N={},O.reset()}));
//# sourceMappingURL=03-feedback.08a6aee1.js.map