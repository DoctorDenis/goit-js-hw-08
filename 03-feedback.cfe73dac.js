!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r,i,a="Expected a function",f=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt,d="object"==typeof n&&n&&n.Object===Object&&n,m="object"==typeof self&&self&&self.Object===Object&&self,v=d||m||Function("return this")(),g=Object.prototype.toString,b=Math.max,p=Math.min,y=function(){return v.Date.now()};function S(e,t,n){var o,r,i,f,u,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(a);function v(t){var n=o,i=r;return o=r=void 0,c=t,f=e.apply(i,n)}function g(e){return c=e,u=setTimeout(N,t),s?v(e):f}function S(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=i}function N(){var e=y();if(S(e))return h(e);u=setTimeout(N,function(e){var n=t-(e-l);return d?p(n,i-(e-c)):n}(e))}function h(e){return u=void 0,m&&o?v(e):(o=r=void 0,f)}function k(){var e=y(),n=S(e);if(o=arguments,r=this,l=e,n){if(void 0===u)return g(l);if(d)return u=setTimeout(N,t),v(l)}return void 0===u&&(u=setTimeout(N,t)),f}return t=j(t)||0,O(n)&&(s=!!n.leading,i=(d="maxWait"in n)?b(j(n.maxWait)||0,t):i,m="trailing"in n?!!n.trailing:m),k.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=l=r=u=void 0},k.flush=function(){return void 0===u?f:h(y())},k}function O(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==g.call(t)}(t))return NaN;if(O(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=O(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(f,"");var r=l.test(t);return r||c.test(t)?s(t.slice(2),r?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(a);return O(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),S(e,t,{leading:o,maxWait:t,trailing:r})};var N=document.querySelector(".feedback-form"),h=JSON.parse(localStorage.getItem("feedback-form-state"))?JSON.parse(localStorage.getItem("feedback-form-state")):{};N.elements.email.value=(null===(r=JSON.parse(localStorage.getItem("feedback-form-state")))||void 0===r?void 0:r.email)?JSON.parse(localStorage.getItem("feedback-form-state")).email:"",N.elements.message.value=(null===(i=JSON.parse(localStorage.getItem("feedback-form-state")))||void 0===i?void 0:i.message)?JSON.parse(localStorage.getItem("feedback-form-state")).message:"",N.addEventListener("input",e(t)((function(e){h[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(h))}),500)),N.addEventListener("submit",(function(e){e.preventDefault(),console.log(h),localStorage.removeItem("feedback-form-state"),N.reset()}))}();
//# sourceMappingURL=03-feedback.cfe73dac.js.map