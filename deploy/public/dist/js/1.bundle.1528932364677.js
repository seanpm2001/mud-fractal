(this.webpackJsonp=this.webpackJsonp||[]).push([[1],{129:function(t,n,e){"use strict";e.d(n,"b",function(){return h});var r=e(31),o=e(1),i=e(2),u=function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}();function s(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var a,c,f=function(){function t(n){s(this,t),this.superclass=n}return u(t,[{key:"with",value:function(){for(var t=arguments.length,n=Array(t),e=0;e<t;e++)n[e]=arguments[e];return n.reduce(function(t,n){return n(t)},this.superclass)}}]),t}(),h=function(t){return new f(t)};n.a=(a=document.getElementsByTagName("html")[0],c=document.body,function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";s(this,t),this.mount=function(){},this.unmount=function(){},this.$name=e,this.$el=n,this.$body=c,this.$html=a,this.$$eventBus=o.a,this.$data=Object(r.b)([].concat(function(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n];return e}return Array.from(t)}(this.$el.attributes)))}return u(t,[{key:"init",value:function(){this.routes&&(this.$$eventBus.on(i.f,this.routes.enter),this.$$eventBus.on(i.g,this.routes.exit))}},{key:"destroy",value:function(){this.unmount(),this.routes&&(this.$$eventBus.off(i.f,this.routes.enter),this.$$eventBus.off(i.g,this.routes.exit))}}]),t}())},56:function(t,n,e){"use strict";e.r(n);var r=e(129);function o(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?t:n}var i=function(t){function n(){var t,e,r;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var i=arguments.length,u=Array(i),s=0;s<i;s++)u[s]=arguments[s];return e=r=o(this,(t=n.__proto__||Object.getPrototypeOf(n)).call.apply(t,[this].concat(u))),r.mount=function(){},r.unmount=function(){},o(r,e)}return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}(n,r["a"]),n}();n.default=i}}]);
//# sourceMappingURL=1.bundle.1528932364677.js.map