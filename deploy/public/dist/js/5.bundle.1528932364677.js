(this.webpackJsonp=this.webpackJsonp||[]).push([[5],{129:function(t,e,n){"use strict";n.d(e,"b",function(){return l});var r=n(31),o=n(1),i=n(2),u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a,s,f=function(){function t(e){c(this,t),this.superclass=e}return u(t,[{key:"with",value:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.reduce(function(t,e){return e(t)},this.superclass)}}]),t}(),l=function(t){return new f(t)};e.a=(a=document.getElementsByTagName("html")[0],s=document.body,function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";c(this,t),this.mount=function(){},this.unmount=function(){},this.$name=n,this.$el=e,this.$body=s,this.$html=a,this.$$eventBus=o.a,this.$data=Object(r.b)([].concat(function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(this.$el.attributes)))}return u(t,[{key:"init",value:function(){this.routes&&(this.$$eventBus.on(i.f,this.routes.enter),this.$$eventBus.on(i.g,this.routes.exit))}},{key:"destroy",value:function(){this.unmount(),this.routes&&(this.$$eventBus.off(i.f,this.routes.enter),this.$$eventBus.off(i.g,this.routes.exit))}}]),t}())},55:function(t,e,n){"use strict";n.r(e);var r=n(129),o=n(3),i=n.n(o),u=n(7),c=n.n(u),a=n(0),s=n.n(a),f=n(1),l=n(128),h=n.n(l),p=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),y=function t(e,n,r){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,n,r)}if("value"in o)return o.value;var u=o.get;return void 0!==u?u.call(r):void 0},d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},v=function(){return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var u,c=t[Symbol.iterator]();!(r=(u=c.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&c.return&&c.return()}finally{if(o)throw i}}return n}(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();var b=function(){var t=s()(c()(/'|"/g,""),function(t){return t.getPropertyValue("content")}),e=s()(t,function(){return window.getComputedStyle(document.body,":after")}),n=function(t){return window.matchMedia(t).matches};function r(){return{width:window.innerWidth,height:window.innerHeight,query:e()}}function o(t){return s()(i()(function(t){var e=v(t,2),o=e[0],i=e[1],u=function(t,e){!function t(e,n){t.value!==e&&(n(d({match:e},r())),t.value=e)}(n(t),e)}.bind(null,o,i);return n(o)&&u(),f.a.on("window:resize",u),u}),Object.entries)(t)}var u=void 0,a=e();function l(){var t=r(),e=t.width,n=t.height,o=t.query;f.a.emit("window:resize",{width:e,height:n,query:o}),o!==a&&(a=o,f.a.emit("window:breakpoint",{width:e,height:n,query:o}))}function p(){if(!p.isRunning)return p.isRunning=!0,u=h.a.bind(null,l),window.addEventListener("resize",u,!1),{destroy:function(){p.isRunning&&(p.isRunning=!1,window.removeEventListener("resize",u,!1),u.cancel())}}}return p.isRunning=!1,function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};p();var n=o(t);return d({get breakpoint(){return e()},get width(){return window.innerWidth},get height(){return window.innerHeight},destroy:function(){n.forEach(function(t){return f.a.off("window:resize",t)}),n=[]}},f.a)}}(),w=function(t){return function(e){function n(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(n,t),p(n,[{key:"init",value:function(){return this.$$screen=b(this.screens),y(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this)&&y(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",this).call(this),this}},{key:"destroy",value:function(){this.$$screen.destroy(),y(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"destroy",this)&&y(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"destroy",this).call(this)}}]),n}()};var g=n(36),m=n(31),O=n(35);function _(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var $=function(t){function e(){var t,n,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var o=arguments.length,i=Array(o),u=0;u<o;u++)i[u]=arguments[u];return n=r=_(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(i))),r.events={"click [data-link]":"onClick"},r.mount=function(){r.$$events.attachAll();var t=document.createElement("pre");t.innerHTML=JSON.stringify(r.$$refs,null,2),r.$el.appendChild(t)},r.onClick=function(t,e){t.preventDefault(),e.classList.toggle("huzzah")},r.screens={"(min-width: 1024px)":function(){}},r.unmount=function(){r.$el.classList.add("unmount")},r.viewport={enter:function(t){log(t)},exit:function(){log("exit")}},r.routes={enter:function(){r.$el.classList.toggle("enter")},exit:function(){r.$el.classList.toggle("exit")}},_(r,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,Object(r["b"])(r["a"]).with(w,g["a"],O["a"],m["a"])),e}();e.default=$}}]);
//# sourceMappingURL=5.bundle.1528932364677.js.map