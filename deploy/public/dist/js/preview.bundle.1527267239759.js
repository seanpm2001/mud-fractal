!function(t){function n(n){for(var r,i,u=n[0],c=n[1],s=n[2],l=0,p=[];l<u.length;l++)i=u[l],o[i]&&p.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);for(f&&f(n);p.length;)p.shift()();return a.push.apply(a,s||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],r=!0,u=1;u<e.length;u++){var c=e[u];0!==o[c]&&(r=!1)}r&&(a.splice(n--,1),t=i(i.s=e[0]))}return t}var r={},o={5:0,4:0},a=[];function i(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.e=function(t){var n=[],e=o[t];if(0!==e)if(e)n.push(e[2]);else{var r=new Promise(function(n,r){e=o[t]=[n,r]});n.push(e[2]=r);var a=document.getElementsByTagName("head")[0],u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=i.p+""+({}[t]||t)+".bundle.1527267239759.js";var c=setTimeout(function(){s({type:"timeout",target:u})},12e4);function s(n){u.onerror=u.onload=null,clearTimeout(c);var e=o[t];if(0!==e){if(e){var r=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src,i=new Error("Loading chunk "+t+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,e[1](i)}o[t]=void 0}}u.onerror=u.onload=s,a.appendChild(u)}return Promise.all(n)},i.m=t,i.c=r,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:e})},i.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},i.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="/dist/js/",i.oe=function(t){throw console.error(t),t};var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=n,u=u.slice();for(var s=0;s<u.length;s++)n(u[s]);var f=c;a.push([16,0]),e()}([,function(t,n,e){"use strict";var r=e(8),o=Object(r.a)();n.a=o},,,function(t,n,e){"use strict";var r=e(2),o=e.n(r),a=e(0),i=function(){return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return function(t,n){var e=[],r=!0,o=!1,a=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(e.push(i.value),!n||e.length!==n);r=!0);}catch(t){o=!0,a=t}finally{try{!r&&u.return&&u.return()}finally{if(o)throw a}}return e}(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();function u(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n];return e}return Array.from(t)}n.a=a.b(function(t,n){var e=this,r=Object.entries(n).map(function(t){var n=i(t,2),r=n[0],o=n[1],c=a.a(a.j(a.p),a.o(" "))(r),s=!!a.a(a.i,a.k(/mouse/g),a.g)(c);console.log(s);var f="string"==typeof o?e[o]:o;return[].concat(u(c),[f,s])}),c=void 0,s=void 0,f=a.b(function(t,n,e){a.a(a.f(function(t){var e;return(e=c)[n].apply(e,u(t))}),a.j(function(n){return a.d(function(t){var e=i(t,2);return[e[0],e[1]].join(" ")===n})(t)}))(e)})(r);return{attachAll:function(){c=c||new o.a(t);try{a.f(function(t){var n;return(n=c).on.apply(n,u(t))})(r)}catch(t){console.error("Handler must be a type of Function, careful with arrow functions, they will need to be above the events object:",t)}},attach:function(n){c=c||new o.a(t),f("on",n)},remove:function(t){c&&f("off",t)},destroy:function(){c&&a.f(function(t){var n;return(n=c).off.apply(n,u(t))})(r)},emit:function(t,n){(s=s||document.createEvent("HTMLEvents")).initEvent(n,!0,!1),t.dispatchEvent(s)}}})},,,,,,,,function(t,n,e){"use strict";e.r(n);e(15);var r=e(0);var o=function(){var t={stack:[],scope:[]},n=(arguments.length>0&&void 0!==arguments[0]&&arguments[0],r.a(r.j(function(t){var n=t.node,r=t.behaviour;return new Promise(function(t){e(13)("./"+r).then(function(e){t({id:r,node:n,behaviour:e.default})})})}),r.e,r.j(function(t){return r.a(r.j(function(n){return{behaviour:n,node:t}}),r.o(" "),r.n(/^\s+|\s+$|\s+(?=\s)/g,""))(t.getAttribute("data-behaviour"))})));return{hydrate:function(e){return Promise.all(n([].concat(function(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n];return e}return Array.from(t)}(e.querySelectorAll("*[data-behaviour]"))))).then(function(n){var e=r.a(r.j(function(t){var n=t.behaviour,e=t.node,r=t.id,o=new n(e,r);o.init(),setTimeout(function(){o.mount()});var a=e.classList.contains("fake");return{fn:o,destroy:a,id:r}}))(n),o=r.a(r.c(function(t){return t.destroy}))(e);return Object.assign(t,{stack:e,scope:o}),t})},unmount:function(){r.a(r.j(function(t){t.destroy()}))(t.scope)}}},a=e(4),i=e(1),u=e(7),c=e.n(u),s=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t};function f(t){for(var n=f.options,e=n.parser[n.strictMode?"strict":"loose"].exec(t),r={},o=14;o--;)r[n.key[o]]=e[o]||"";return r[n.q.name]={},r[n.key[12]].replace(n.q.parser,function(t,e,o){e&&(r[n.q.name][e]=o)}),r}function l(t){try{return decodeURIComponent(t)}catch(t){console.error("decodeParam error")}}f.options={strictMode:!1,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}};var p,h,v,d,g,m=(p=(p={sensitive:!1,strict:!1,end:!1})||{},function(t){var n=[],e=c()(t,n,p);return function(t,r){var o=e.exec(t);if(!o)return!1;r=r||{};for(var a=void 0,i=void 0,u=0;u<n.length;u+=1)a=n[u],(i=o[u+1])&&(r[a.name]=l(i),a.repeat&&(r[a.name]=r[a.name].split(a.delimiter)));return r}}),y=r.m(function(t,n){var e=n.path,o=n.view,a=n.children,i=n.name,u=e,c=[];if(c.push({path:e,view:o,name:i}),a){var f=Array.isArray(a)?a:[a];c.push.apply(c,function(t){if(Array.isArray(t)){for(var n=0,e=Array(t.length);n<t.length;n++)e[n]=t[n];return e}return Array.from(t)}(r.a(r.j(function(t){return s({},t,{path:(u+"/"+t.path).replace("//","/")})}),y)(f)))}return t.push.apply(t,c),t},[]),w=r.b(function(t){return r.l(r.h,function(n){var e,o,a,i,u,c,s,l=(e=f(n),o=e.anchor,a=e.host,i=e.path,u=e.queryKey,c=e.source,s=i.split("/").filter(function(t){return t.length}),{isRoot:"/"===i,hash:o,host:a,path:i,segments:s,slug:s[s.length-1],source:c,query:u,length:s.length}),p=l.path,h=r.c(function(t){var n=t.path;return m(n)(p)})(t);return{route:1===h.length&&"/"!==p?t.find(function(t){return"*"===t.path}):h[h.length-1],data:l}})}),x=function(t,n){var e=n.href;n.pathname;return!(!n||!e)&&(!(t.which>1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||n.target&&"_blank"===n.target||window.location.protocol!==n.protocol||window.location.hostname!==n.hostname||e.indexOf("#")>-1||n.getAttribute&&"string"==typeof n.getAttribute("download")||n.classList.contains("nope"))||void 0)},E=e(6),b=((h=e.n(E)()()).listen(function(t,n){var e=t.pathname;t.state,"POP"===n&&i.a.emit("__route-pop__",e)}),{store:{from:"",to:""},push:function(){h.push.apply(h,arguments)}}),A=function(){var t={};return{set:function(n,e){t[n]=e},get:function(n){return t[n]}}}(),j=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text";return new Promise(function(r){if(A.get(t))return log("from cache"),void r();fetch(t,n).then(function(t){return t[e]()}).then(function(n){A.set(t,{data:n}),r()})})},O={el:".page-child",updateDom:function(t){var n=t.wrapper,e=t.newHtml,r=t.title;n.innerHTML="",n.appendChild(e),document.title=r},onExit:function(t){var n=t.next;log("onExit"),n()},onAfterExit:function(){log("onAfterExit")},onEnter:function(t){var n=t.next;log("onEnter"),n()},onAfterEnter:function(){log("onAfterEnter")}},P=e(5),k=e.n(P),_=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},M=(v=void 0,d=void 0,g=void 0,{addRoutes:function(t){v=w(t),b.store.from=v(window.location.pathname)},exit:function(t,n){var e=v(t),r=n||e.route.view;b.store.to=e,i.a.emit("route:exit"),d=Object.assign({},O,b.store.from.route.view),g=Object.assign({},O,r);var o=function(t,n){return new Promise(function(e){n[t](_({next:e},b.store))})};return Promise.all([o("onExit",d),j(t)]).then(function(){var n=A.get(t).data;i.a.emit("route:exit:complete");var e=k()(n),r=e.querySelector("title").textContent,o=e.querySelector(g.el),a={wrapper:document.getElementById("page-wrapper"),newHtml:o,title:r};return g.updateDom(_({},a,b.store)),d.onAfterExit(_({},a,b.store)),a}).then(function(t){i.a.emit("route:enter"),o("onEnter",g).then(function(){g.onAfterEnter(_({},t,b.store)),b.store.from=e,i.a.emit("route:enter:complete")})})}});var q=function t(n){var e=this,r=n.routes,o=n.wrapper,u=void 0===o?"page-wrapper":o;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.onMouseEnter=function(t,n){var e=n.pathname;x(t,n)&&!A.get(e)&&j(e)},this.onClick=function(n,e){var r=e.pathname;x(n,e)&&(n.stopPropagation(),n.preventDefault(),r!==window.location.pathname&&t.goTo(r))},this.mount=function(){i.a.on("__route-pop__",function(t){M.exit(t)}),e.$events.attachAll()},this.$routes=y(r),M.addRoutes(this.$routes),this.$findRoute=w(this.$routes),this.$wrapper=document.getElementById(u),this.$events=a.a.call(this,document,{"click a":"onClick","mouseover a":"onMouseEnter"})};q.goTo=function(t,n){M.exit(t,n).then(function(){b.push(t,{some:"state"})})};var T=q;function C(t,n){var e={};for(var r in t)n.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}o("@/behaviours/").hydrate(document);var $={onExit:function(t){var n=t.next,e=C(t,["next"]);log("onExit",e),n()},onAfterExit:function(t){var n=C(t,[]);log("onAfterExit",n)},onEnter:function(t){var n=t.next,e=C(t,["next"]);log("onEnter",e),n()},onAfterEnter:function(t){var n=C(t,[]);log("onAfterEnter",n)}};new T({routes:[{path:"/",view:$},{path:"/page-1/",view:$,children:{path:":id",view:$}},{path:"/page-2/",view:{onExit:function(t){var n=t.next,e=C(t,["next"]);log("onExit page-2",e),n()},onEnter:function(t){var n=t.next,e=C(t,["next"]);log("onEnter page-2",e),n()}}},{path:"/page-3/",view:{onExit:function(t){var n=t.next,e=C(t,["next"]);log("onExit page-3",e),n()},onEnter:function(t){var n=t.next,e=C(t,["next"]);log("onEnter page-3",e),n()}}},{path:"/page-4/",view:$}]}).mount()},function(t,n,e){var r={"./ExampleClass":[11,0,3],"./ExampleClass.js":[11,0,3],"./ModuleA":[10,0,2],"./ModuleA.js":[10,0,2],"./ModuleB":[9,0,1],"./ModuleB.js":[9,0,1]};function o(t){var n=r[t];return n?Promise.all(n.slice(1).map(e.e)).then(function(){return e(n[0])}):Promise.resolve().then(function(){var n=new Error('Cannot find module "'+t+'".');throw n.code="MODULE_NOT_FOUND",n})}o.keys=function(){return Object.keys(r)},o.id=13,t.exports=o},,function(t,n,e){"use strict";(function(t){var n=e(3),r=e.n(n);window.log=t.log=r()("app:log"),r.a.disable("app:log"),log("Logging is enabled!, NODE_ENV: production")}).call(this,e(14))},function(t,n,e){t.exports=e(12)}]);
//# sourceMappingURL=preview.bundle.1527267239759.js.map