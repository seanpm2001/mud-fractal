(this.webpackJsonp=this.webpackJsonp||[]).push([[6],{17:function(t,e,n){"use strict";n.r(e);var r=n(37);function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var o=function(t){function e(){var t,n,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var o=arguments.length,u=Array(o),s=0;s<o;s++)u[s]=arguments[s];return n=r=i(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(u))),r.mount=function(){},r.unmount=function(){},i(r,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,r["a"]),e}();e.default=o},37:function(t,e,n){"use strict";var r=n(6),i=n(5),o=n(1),u=n(36),s=n.n(u),a=n(0),c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},f=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,i=!1,o=void 0;try{for(var u,s=t[Symbol.iterator]();!(r=(u=s.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{!r&&s.return&&s.return()}finally{if(i)throw o}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),h=void 0,l=a.a(a.o(/'|"/g,""),function(t){return t.getPropertyValue("content")}),v=a.a(l,function(){return window.getComputedStyle(document.body,":after")}),p=v(),w=function(){return{width:window.innerWidth,height:window.innerHeight,query:v()}},d=function(){var t=w(),e=t.width,n=t.height,r=t.query;o.a.emit("window:resize",{width:e,height:n,query:r}),r!==p&&(p=r,o.a.emit("window:breakpoint",{width:e,height:n,query:r}))},y=function t(){if(!t.isRunning)return t.isRunning=!0,h=s.a.bind(null,d),window.addEventListener("resize",h,!1),{destroy:function(){t.isRunning&&(t.isRunning=!1,window.removeEventListener("resize",h,!1),h.cancel())}}};y.isRunning=!1;var b=function(t){return window.matchMedia(t).matches},g=function(t){return Object.entries(t).map(function(t){var e=f(t,2),n=e[0],r=e[1],i=function(t,e){!function t(e,n){t.value!==e&&(n(c({match:e},w())),t.value=e)}(b(t),e)}.bind(null,n,r);return b(n)&&i(),o.a.on("window:resize",i),i})},O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};y();var e=g(t);return c({get breakpoint(){return v()},get width(){return window.innerWidth},get height(){return window.innerHeight},destroy:function(){e.forEach(function(t){return o.a.off("window:resize",t)}),e=[]}},o.a)},m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$=a.b(function(t,e,n){if(e){var r=m({rootMargin:"0px",threshold:0},n||{}),i=function(){return o.unobserve(t)},o=new IntersectionObserver(function(t){var n=a.g(t),r=n.isIntersecting?"enter":"exit";e[r]&&e[r](m({},n,{destroy:i}))},r);return o.observe(t),{destroy:i}}}),j=n(2),x=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.a=function t(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,u=arguments[1];!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.registerObserverOptions={},this.routes={enter:function(){},exit:function(){}},this.viewport={enter:function(){},exit:function(){}},this.screens={},this.init=function(){return e.$observer=$(e.$el,e.viewport,e.registerObserverOptions),e.$eventBus.on(j.e,e.routes.enter),e.$eventBus.on(j.f,e.routes.exit),e.$refs=Object(i.b)(e.$el),e.$screen=O(e.screens),e.events&&(e.$events=r.a.call(e,e.$el,e.events)),e},this.updateRefs=function(){e.$refs=x({},e.$refs,Object(i.b)(e.$el))},this.mount=function(){},this.unmount=function(){},this.destroy=function(){e.unmount(),e.$eventBus.off(j.e,e.routes.enter),e.$eventBus.off(j.f,e.routes.exit),e.$screen.destroy(),e.viewport&&e.$observer.destroy(),e.events&&e.$events.destroy()},this.$name=u,this.$el=n,this.$eventBus=o.a,this.$data=Object(i.a)([].concat(function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(this.$el.attributes)))}}}]);
//# sourceMappingURL=6.bundle.1527712863498.js.map