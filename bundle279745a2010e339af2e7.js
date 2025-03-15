!function(){"use strict";var t={34:function(t,n,r){var e=r(4901);t.exports=function(t){return"object"==typeof t?null!==t:e(t)}},283:function(t,n,r){var e=r(9504),o=r(9039),i=r(4901),u=r(9297),s=r(3724),c=r(350).CONFIGURABLE,a=r(3706),f=r(1181),p=f.enforce,l=f.get,h=String,v=Object.defineProperty,g=e("".slice),m=e("".replace),d=e([].join),y=s&&!o((function(){return 8!==v((function(){}),"length",{value:8}).length})),b=String(String).split("String"),x=t.exports=function(t,n,r){"Symbol("===g(h(n),0,7)&&(n="["+m(h(n),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(n="get "+n),r&&r.setter&&(n="set "+n),(!u(t,"name")||c&&t.name!==n)&&(s?v(t,"name",{value:n,configurable:!0}):t.name=n),y&&r&&u(r,"arity")&&t.length!==r.arity&&v(t,"length",{value:r.arity});try{r&&u(r,"constructor")&&r.constructor?s&&v(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var e=p(t);return u(e,"source")||(e.source=d(b,"string"==typeof n?n:"")),t};Function.prototype.toString=x((function(){return i(this)&&l(this).source||a(this)}),"toString")},350:function(t,n,r){var e=r(3724),o=r(9297),i=Function.prototype,u=e&&Object.getOwnPropertyDescriptor,s=o(i,"name"),c=s&&"something"===function(){}.name,a=s&&(!e||e&&u(i,"name").configurable);t.exports={EXISTS:s,PROPER:c,CONFIGURABLE:a}},397:function(t,n,r){var e=r(7751);t.exports=e("document","documentElement")},421:function(t){t.exports={}},616:function(t,n,r){var e=r(9039);t.exports=!e((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},741:function(t){var n=Math.ceil,r=Math.floor;t.exports=Math.trunc||function(t){var e=+t;return(e>0?r:n)(e)}},757:function(t,n,r){var e=r(7751),o=r(4901),i=r(1625),u=r(7040),s=Object;t.exports=u?function(t){return"symbol"==typeof t}:function(t){var n=e("Symbol");return o(n)&&i(n.prototype,s(t))}},1072:function(t,n,r){var e=r(1828),o=r(8727);t.exports=Object.keys||function(t){return e(t,o)}},1181:function(t,n,r){var e,o,i,u=r(8622),s=r(4576),c=r(34),a=r(6699),f=r(9297),p=r(7629),l=r(6119),h=r(421),v="Object already initialized",g=s.TypeError,m=s.WeakMap;if(u||p.state){var d=p.state||(p.state=new m);d.get=d.get,d.has=d.has,d.set=d.set,e=function(t,n){if(d.has(t))throw new g(v);return n.facade=t,d.set(t,n),n},o=function(t){return d.get(t)||{}},i=function(t){return d.has(t)}}else{var y=l("state");h[y]=!0,e=function(t,n){if(f(t,y))throw new g(v);return n.facade=t,a(t,y,n),n},o=function(t){return f(t,y)?t[y]:{}},i=function(t){return f(t,y)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!c(n)||(r=o(n)).type!==t)throw new g("Incompatible receiver, "+t+" required");return r}}}},1291:function(t,n,r){var e=r(741);t.exports=function(t){var n=+t;return n!=n||0===n?0:e(n)}},1625:function(t,n,r){var e=r(9504);t.exports=e({}.isPrototypeOf)},1828:function(t,n,r){var e=r(9504),o=r(9297),i=r(5397),u=r(9617).indexOf,s=r(421),c=e([].push);t.exports=function(t,n){var r,e=i(t),a=0,f=[];for(r in e)!o(s,r)&&o(e,r)&&c(f,r);for(;n.length>a;)o(e,r=n[a++])&&(~u(f,r)||c(f,r));return f}},2195:function(t,n,r){var e=r(9504),o=e({}.toString),i=e("".slice);t.exports=function(t){return i(o(t),8,-1)}},2360:function(t,n,r){var e,o=r(8551),i=r(6801),u=r(8727),s=r(421),c=r(397),a=r(4055),f=r(6119),p="prototype",l="script",h=f("IE_PROTO"),v=function(){},g=function(t){return"<"+l+">"+t+"</"+l+">"},m=function(t){t.write(g("")),t.close();var n=t.parentWindow.Object;return t=null,n},d=function(){try{e=new ActiveXObject("htmlfile")}catch(t){}var t,n,r;d="undefined"!=typeof document?document.domain&&e?m(e):(n=a("iframe"),r="java"+l+":",n.style.display="none",c.appendChild(n),n.src=String(r),(t=n.contentWindow.document).open(),t.write(g("document.F=Object")),t.close(),t.F):m(e);for(var o=u.length;o--;)delete d[p][u[o]];return d()};s[h]=!0,t.exports=Object.create||function(t,n){var r;return null!==t?(v[p]=o(t),r=new v,v[p]=null,r[h]=t):r=d(),void 0===n?r:i.f(r,n)}},2777:function(t,n,r){var e=r(9565),o=r(34),i=r(757),u=r(5966),s=r(4270),c=r(8227),a=TypeError,f=c("toPrimitive");t.exports=function(t,n){if(!o(t)||i(t))return t;var r,c=u(t,f);if(c){if(void 0===n&&(n="default"),r=e(c,t,n),!o(r)||i(r))return r;throw new a("Can't convert object to primitive value")}return void 0===n&&(n="number"),s(t,n)}},2796:function(t,n,r){var e=r(9039),o=r(4901),i=/#|\.prototype\./,u=function(t,n){var r=c[s(t)];return r===f||r!==a&&(o(n)?e(n):!!n)},s=u.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=u.data={},a=u.NATIVE="N",f=u.POLYFILL="P";t.exports=u},2839:function(t,n,r){var e=r(4576).navigator,o=e&&e.userAgent;t.exports=o?String(o):""},3392:function(t,n,r){var e=r(9504),o=0,i=Math.random(),u=e(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+u(++o+i,36)}},3706:function(t,n,r){var e=r(9504),o=r(4901),i=r(7629),u=e(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return u(t)}),t.exports=i.inspectSource},3717:function(t,n){n.f=Object.getOwnPropertySymbols},3724:function(t,n,r){var e=r(9039);t.exports=!e((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4055:function(t,n,r){var e=r(4576),o=r(34),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},4117:function(t){t.exports=function(t){return null==t}},4270:function(t,n,r){var e=r(9565),o=r(4901),i=r(34),u=TypeError;t.exports=function(t,n){var r,s;if("string"===n&&o(r=t.toString)&&!i(s=e(r,t)))return s;if(o(r=t.valueOf)&&!i(s=e(r,t)))return s;if("string"!==n&&o(r=t.toString)&&!i(s=e(r,t)))return s;throw new u("Can't convert object to primitive value")}},4423:function(t,n,r){var e=r(6518),o=r(9617).includes,i=r(9039),u=r(6469);e({target:"Array",proto:!0,forced:i((function(){return!Array(1).includes()}))},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),u("includes")},4495:function(t,n,r){var e=r(9519),o=r(9039),i=r(4576).String;t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol("symbol detection");return!i(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&e&&e<41}))},4576:function(t,n,r){var e=function(t){return t&&t.Math===Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof r.g&&r.g)||e("object"==typeof this&&this)||function(){return this}()||Function("return this")()},4901:function(t){var n="object"==typeof document&&document.all;t.exports=void 0===n&&void 0!==n?function(t){return"function"==typeof t||t===n}:function(t){return"function"==typeof t}},4913:function(t,n,r){var e=r(3724),o=r(5917),i=r(8686),u=r(8551),s=r(6969),c=TypeError,a=Object.defineProperty,f=Object.getOwnPropertyDescriptor,p="enumerable",l="configurable",h="writable";n.f=e?i?function(t,n,r){if(u(t),n=s(n),u(r),"function"==typeof t&&"prototype"===n&&"value"in r&&h in r&&!r[h]){var e=f(t,n);e&&e[h]&&(t[n]=r.value,r={configurable:l in r?r[l]:e[l],enumerable:p in r?r[p]:e[p],writable:!1})}return a(t,n,r)}:a:function(t,n,r){if(u(t),n=s(n),u(r),o)try{return a(t,n,r)}catch(t){}if("get"in r||"set"in r)throw new c("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},5031:function(t,n,r){var e=r(7751),o=r(9504),i=r(8480),u=r(3717),s=r(8551),c=o([].concat);t.exports=e("Reflect","ownKeys")||function(t){var n=i.f(s(t)),r=u.f;return r?c(n,r(t)):n}},5397:function(t,n,r){var e=r(7055),o=r(7750);t.exports=function(t){return e(o(t))}},5610:function(t,n,r){var e=r(1291),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},5745:function(t,n,r){var e=r(7629);t.exports=function(t,n){return e[t]||(e[t]=n||{})}},5917:function(t,n,r){var e=r(3724),o=r(9039),i=r(4055);t.exports=!e&&!o((function(){return 7!==Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},5966:function(t,n,r){var e=r(9306),o=r(4117);t.exports=function(t,n){var r=t[n];return o(r)?void 0:e(r)}},6119:function(t,n,r){var e=r(5745),o=r(3392),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},6198:function(t,n,r){var e=r(8014);t.exports=function(t){return e(t.length)}},6395:function(t){t.exports=!1},6469:function(t,n,r){var e=r(8227),o=r(2360),i=r(4913).f,u=e("unscopables"),s=Array.prototype;void 0===s[u]&&i(s,u,{configurable:!0,value:o(null)}),t.exports=function(t){s[u][t]=!0}},6518:function(t,n,r){var e=r(4576),o=r(7347).f,i=r(6699),u=r(6840),s=r(9433),c=r(7740),a=r(2796);t.exports=function(t,n){var r,f,p,l,h,v=t.target,g=t.global,m=t.stat;if(r=g?e:m?e[v]||s(v,{}):e[v]&&e[v].prototype)for(f in n){if(l=n[f],p=t.dontCallGetSet?(h=o(r,f))&&h.value:r[f],!a(g?f:v+(m?".":"#")+f,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;c(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),u(r,f,l,t)}}},6699:function(t,n,r){var e=r(3724),o=r(4913),i=r(6980);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},6801:function(t,n,r){var e=r(3724),o=r(8686),i=r(4913),u=r(8551),s=r(5397),c=r(1072);n.f=e&&!o?Object.defineProperties:function(t,n){u(t);for(var r,e=s(n),o=c(n),a=o.length,f=0;a>f;)i.f(t,r=o[f++],e[r]);return t}},6823:function(t){var n=String;t.exports=function(t){try{return n(t)}catch(t){return"Object"}}},6840:function(t,n,r){var e=r(4901),o=r(4913),i=r(283),u=r(9433);t.exports=function(t,n,r,s){s||(s={});var c=s.enumerable,a=void 0!==s.name?s.name:n;if(e(r)&&i(r,a,s),s.global)c?t[n]=r:u(n,r);else{try{s.unsafe?t[n]&&(c=!0):delete t[n]}catch(t){}c?t[n]=r:o.f(t,n,{value:r,enumerable:!1,configurable:!s.nonConfigurable,writable:!s.nonWritable})}return t}},6969:function(t,n,r){var e=r(2777),o=r(757);t.exports=function(t){var n=e(t,"string");return o(n)?n:n+""}},6980:function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},7040:function(t,n,r){var e=r(4495);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},7055:function(t,n,r){var e=r(9504),o=r(9039),i=r(2195),u=Object,s=e("".split);t.exports=o((function(){return!u("z").propertyIsEnumerable(0)}))?function(t){return"String"===i(t)?s(t,""):u(t)}:u},7347:function(t,n,r){var e=r(3724),o=r(9565),i=r(8773),u=r(6980),s=r(5397),c=r(6969),a=r(9297),f=r(5917),p=Object.getOwnPropertyDescriptor;n.f=e?p:function(t,n){if(t=s(t),n=c(n),f)try{return p(t,n)}catch(t){}if(a(t,n))return u(!o(i.f,t,n),t[n])}},7629:function(t,n,r){var e=r(6395),o=r(4576),i=r(9433),u="__core-js_shared__",s=t.exports=o[u]||i(u,{});(s.versions||(s.versions=[])).push({version:"3.41.0",mode:e?"pure":"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE",source:"https://github.com/zloirock/core-js"})},7740:function(t,n,r){var e=r(9297),o=r(5031),i=r(7347),u=r(4913);t.exports=function(t,n,r){for(var s=o(n),c=u.f,a=i.f,f=0;f<s.length;f++){var p=s[f];e(t,p)||r&&e(r,p)||c(t,p,a(n,p))}}},7750:function(t,n,r){var e=r(4117),o=TypeError;t.exports=function(t){if(e(t))throw new o("Can't call method on "+t);return t}},7751:function(t,n,r){var e=r(4576),o=r(4901);t.exports=function(t,n){return arguments.length<2?(r=e[t],o(r)?r:void 0):e[t]&&e[t][n];var r}},8014:function(t,n,r){var e=r(1291),o=Math.min;t.exports=function(t){var n=e(t);return n>0?o(n,9007199254740991):0}},8227:function(t,n,r){var e=r(4576),o=r(5745),i=r(9297),u=r(3392),s=r(4495),c=r(7040),a=e.Symbol,f=o("wks"),p=c?a.for||a:a&&a.withoutSetter||u;t.exports=function(t){return i(f,t)||(f[t]=s&&i(a,t)?a[t]:p("Symbol."+t)),f[t]}},8480:function(t,n,r){var e=r(1828),o=r(8727).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},8551:function(t,n,r){var e=r(34),o=String,i=TypeError;t.exports=function(t){if(e(t))return t;throw new i(o(t)+" is not an object")}},8622:function(t,n,r){var e=r(4576),o=r(4901),i=e.WeakMap;t.exports=o(i)&&/native code/.test(String(i))},8686:function(t,n,r){var e=r(3724),o=r(9039);t.exports=e&&o((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8727:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},8773:function(t,n){var r={}.propertyIsEnumerable,e=Object.getOwnPropertyDescriptor,o=e&&!r.call({1:2},1);n.f=o?function(t){var n=e(this,t);return!!n&&n.enumerable}:r},8981:function(t,n,r){var e=r(7750),o=Object;t.exports=function(t){return o(e(t))}},9039:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},9297:function(t,n,r){var e=r(9504),o=r(8981),i=e({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,n){return i(o(t),n)}},9306:function(t,n,r){var e=r(4901),o=r(6823),i=TypeError;t.exports=function(t){if(e(t))return t;throw new i(o(t)+" is not a function")}},9433:function(t,n,r){var e=r(4576),o=Object.defineProperty;t.exports=function(t,n){try{o(e,t,{value:n,configurable:!0,writable:!0})}catch(r){e[t]=n}return n}},9504:function(t,n,r){var e=r(616),o=Function.prototype,i=o.call,u=e&&o.bind.bind(i,i);t.exports=e?u:function(t){return function(){return i.apply(t,arguments)}}},9519:function(t,n,r){var e,o,i=r(4576),u=r(2839),s=i.process,c=i.Deno,a=s&&s.versions||c&&c.version,f=a&&a.v8;f&&(o=(e=f.split("."))[0]>0&&e[0]<4?1:+(e[0]+e[1])),!o&&u&&(!(e=u.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=u.match(/Chrome\/(\d+)/))&&(o=+e[1]),t.exports=o},9565:function(t,n,r){var e=r(616),o=Function.prototype.call;t.exports=e?o.bind(o):function(){return o.apply(o,arguments)}},9617:function(t,n,r){var e=r(5397),o=r(5610),i=r(6198),u=function(t){return function(n,r,u){var s=e(n),c=i(s);if(0===c)return!t&&-1;var a,f=o(u,c);if(t&&r!=r){for(;c>f;)if((a=s[f++])!=a)return!0}else for(;c>f;f++)if((t||f in s)&&s[f]===r)return t||f||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,r),i.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r(4423);class e{constructor(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:75,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"normal";["normal","animated","hidden"].includes(r)||(r="normal"),(isNaN(n)||n<0||n>100)&&(n=75),this.container=t,this.progressBar=t.querySelector(".js-progress-bar"),this.circle=t.querySelector(".js-progress-circle"),this.input=t.querySelector(".js-progress-input"),this.animationToggle=t.querySelector(".js-animation-toggle"),this.hideToggle=t.querySelector(".js-hide-toggle"),this.radius=this.circle.r.baseVal.value,this.circumference=2*Math.PI*this.radius,this.startTime=null,this.animationFrameId=null,this.progress=n/100,this.isAnimationRunning=!1,this.duration=2e3,this.init(r)}init(t){this.circle.style.strokeDasharray="".concat(this.circumference," ").concat(this.circumference),this.circle.style.strokeDashoffset=this.circumference,this.input.value=Math.trunc(100*this.progress),"animated"===t?(this.animationToggle.checked=!0,this.startAnimation()):"hidden"===t&&(this.progressBar.classList.add("progress__bar_hidden"),this.hideToggle.checked=!0),this.setProgress(this.progress,this.isAnimationRunning),this.input.addEventListener("input",this.updateFromInput.bind(this)),this.animationToggle.addEventListener("change",this.toggleAnimation.bind(this)),this.hideToggle.addEventListener("change",this.toggleVisibility.bind(this))}setProgress(t,n){this.circle.style.transition=n?"none":"stroke-dashoffset 0.3s ease-in-out";let r=this.circumference*(1-t);this.circle.style.strokeDashoffset=r}updateFromInput(){this.isAnimationRunning&&(this.stopAnimation(),this.animationToggle.checked=!1);let t=isNaN(+this.input.value)?0:Math.min(Math.max(+this.input.value,0),100);this.progress=t/100,this.setProgress(this.progress,this.isAnimationRunning),this.input.value=t}animateProgress(t){this.startTime||(this.startTime=t-this.progress*this.duration);let n=t-this.startTime;this.progress=n/this.duration,this.progress>=1&&(this.startTime=t,this.progress=0),this.setProgress(this.progress,this.isAnimationRunning),this.animationFrameId=requestAnimationFrame((t=>this.animateProgress(t)))}startAnimation(){this.isAnimationRunning||(this.isAnimationRunning=!0,this.startTime=null,this.animationFrameId=requestAnimationFrame((t=>this.animateProgress(t))))}stopAnimation(){this.isAnimationRunning=!1,cancelAnimationFrame(this.animationFrameId)}toggleAnimation(){this.animationToggle.checked?this.startAnimation():(this.stopAnimation(),this.input.value=Math.floor(100*this.progress))}toggleVisibility(){this.progressBar.classList.toggle("progress__bar_hidden")}}document.addEventListener("DOMContentLoaded",(()=>{const t=document.querySelector(".progress");new e(t,75,"normal")}))}();