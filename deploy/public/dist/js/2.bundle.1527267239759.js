(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{10:function(t,e,n){"use strict";n.r(e);var r=n(31);function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var i=function(t){function e(){var t,n,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var i=arguments.length,u=Array(i),a=0;a<i;a++)u[a]=arguments[a];return n=r=o(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(u))),r.mount=function(){r.$events.attachAll()},r.events={"click [data-link]":"onClick"},r.onClick=function(t,e){t.preventDefault(),e.classList.add("huzzah")},o(r,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,r["a"]),e}();e.default=i},31:function(t,e,n){"use strict";var r=n(4),o=n(0),i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};function u(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}var a=function(t){return t.replace(/-(.)/g,function(t,e){return e.toUpperCase()})},s=o.c(function(t){return t.value}),c=o.c(function(t){return/^data-/.test(t.name)&&"data-element"!==t.name&&"data-behaviour"!==t.name}),f=o.j(function(t){var e=t.name,n=t.value;return{name:a(e.substr(5)),value:n}}),l=o.m(function(t,e){var n=e.name,r=e.value;return t[n]=r,t},{}),h=o.a(l,f,s,c),v=o.m(function(t,e){return t[""+a(e.getAttribute("data-element"))]=i({node:e},function(t){return h([].concat(u(t.attributes)))}(e)),t},{}),d=function(t){return v([].concat(u(t.querySelectorAll("*[data-element]"))))},p=n(1),w=n(30),y=n.n(w),b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},g=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&a.return&&a.return()}finally{if(o)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),m=void 0,O=o.a(o.n(/'|"/g,""),function(t){return t.getPropertyValue("content")}),$=o.a(O,function(){return window.getComputedStyle(document.body,":after")}),j=$(),A=function(){return{width:window.innerWidth,height:window.innerHeight,query:$()}},x=function(){var t=A(),e=t.width,n=t.height,r=t.query;p.a.emit("window:resize",{width:e,height:n,query:r}),r!==j&&(j=r,p.a.emit("window:breakpoint",{width:e,height:n,query:r}))},k=function t(){if(!t.isRunning)return t.isRunning=!0,m=y.a.bind(null,x),window.addEventListener("resize",m,!1),{destroy:function(){t.isRunning&&(t.isRunning=!1,window.removeEventListener("resize",m,!1),m.cancel())}}};k.isRunning=!1;var E=function(t){return window.matchMedia(t).matches},P=function(t){return Object.entries(t).map(function(t){var e=g(t,2),n=e[0],r=e[1],o=function(t,e){!function t(e,n){t.value!==e&&(n(b({match:e},A())),t.value=e)}(E(t),e)}.bind(null,n,r);return E(n)&&o(),p.a.on("window:resize",o),o})},_=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};k();var e=P(t);return b({get breakpoint(){return $()},get width(){return window.innerWidth},get height(){return window.innerHeight},destroy:function(){e.forEach(function(t){return p.a.off("window:resize",t)}),e=[]}},p.a)},z=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},R=o.b(function(t,e,n){if(e){var r=z({rootMargin:"0px",threshold:0},n||{}),i=function(){return u.unobserve(t)},u=new IntersectionObserver(function(t){var n=o.g(t),r=n.isIntersecting?"enter":"exit";e[r]&&e[r](z({},n,{destroy:i}))},r);return u.observe(t),{destroy:i}}}),C=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.a=function t(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,o=arguments[1];!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.registerObserverOptions={},this.routes={enter:function(){},exit:function(){}},this.viewport={enter:function(){},exit:function(){}},this.screens={},this.init=function(){return e.$observer=R(e.$el,e.viewport,e.registerObserverOptions),e.$eventBus.on("routes:enter",e.routes.enter),e.$eventBus.on("routes:exit",e.routes.exit),e.$refs=d(e.$el),e.$screen=_(e.screens),e.events&&(e.$events=r.a.call(e,e.$el,e.events)),e},this.updateRefs=function(){e.$refs=C({},e.$refs,d(e.$el))},this.mount=function(){},this.unmount=function(){},this.destroy=function(){e.unmount(),e.$eventBus.off("routes:enter",e.routes.enter),e.$eventBus.off("routes:exit",e.routes.exit),e.$screen.destroy(),e.viewport&&e.$observer.destroy(),e.events&&e.$events.destroy()},this.$name=o,this.$el=n,this.$eventBus=p.a,this.$data=h([].concat(function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(this.$el.attributes)))}}}]);
//# sourceMappingURL=2.bundle.1527267239759.js.map