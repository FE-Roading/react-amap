(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9587],{57135:function(e,n,t){e.exports=t(94808)},80363:function(e){function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=function(){return[]},n.resolve=n,n.id=80363,e.exports=n},47437:function(e,n,t){"use strict";t.d(n,{Z:function(){return C}});var o=t(50189),r=t(53782),i=t(22951),a=t(91976),u=t(67591),c=t(43415),s=t(41473),l=t(41418),f="2.7.22",d=t(55220),p=t(69286),v=["version","dependencies","codeSandbox","codePen"];function h(e){var n=e.version,t=e.dependencies,i=e.codeSandbox,a=e.codePen,u=(0,r.Z)(e,v),c=(0,o.Z)({},u);return a&&(c.codePenOption={title:"uiw".concat(n," - demo"),includeModule:["uiw"],js:(c.code||"").replace("_mount_",'document.getElementById("container")'),html:'<div id="container" style="padding: 24px"></div>',css_external:"https://unpkg.com/uiw@".concat(n,"/dist/uiw.min.css"),js_external:"https://unpkg.com/react@17.x/umd/react.development.js;https://unpkg.com/react-dom@17.x/umd/react-dom.development.js;https://unpkg.com/classnames@2.2.6/index.js;https://unpkg.com/uiw@".concat(n,"/dist/uiw.min.js;https://unpkg.com/@uiw/codepen-require-polyfill@1.1.3/index.js")}),i&&(c.codeSandboxOption={files:{"sandbox.config.json":{content:'{\n            "template": "node",\n            "container": {\n              "startScript": "start",\n              "node": "14"\n            }\n          }'},"public/index.html":{content:'<div id="container"></div>'},"src/index.js":{content:(c.code||"").replace("_mount_",'document.getElementById("container")')},".kktrc.js":{content:'import lessModules from "@kkt/less-modules";\nexport default (conf, env, options) => {\nconf = lessModules(conf, env, options);\nreturn conf;\n};'},"package.json":{content:{name:"uiw-demo",description:"uiw v".concat(n," - demo"),dependencies:{react:"^17.0.2","react-dom":"^17.0.2","@uiw/react-amap":"latest"},devDependencies:{"@kkt/less-modules":"~7.1.1",kkt:"~7.1.5"},license:"MIT",scripts:{start:"kkt start",build:"kkt build",test:"kkt test --env=jsdom"},browserslist:[">0.2%","not dead","not ie <= 11","not op_mini all"]}}}}),(0,p.jsx)(d.Z,(0,o.Z)((0,o.Z)({},c),{},{dependencies:(0,o.Z)((0,o.Z)({},t),{},{React:s},s),style:{marginBottom:0}}))}var m="index_footer__Fp4ea",M=function(e){var n=(e||{}).editorUrl;return(0,p.jsxs)("div",{className:m,children:[n&&(0,p.jsx)("a",{title:"Editor Current Page",target:"_blank",rel:"noreferrer",href:"https://github.com/uiwjs/react-amap/edit/master".concat(n),children:"\u7f16\u8f91\u5f53\u524d\u9875\u9762"}),(0,p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/react-amap/issues/new",children:"\u63d0\u4ea4 Bug"}),(0,p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/react-amap",children:"GitHub"}),(0,p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/kktjs/kkt",children:"kkt"}),(0,p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/uiw",children:"uiwjs"}),(0,p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/react-baidu-map",children:"\u767e\u5ea6\u5730\u56fe React \u7248\u672c"})]})},g="index_markdown__hcQCp",w=["inline","node"],y=function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.forEach((function(n){"text"===n.type?t+=n.value:n.children&&Array.isArray(n.children)&&(t+=e(n.children))})),t},C=function(e){(0,u.Z)(t,e);var n=(0,c.Z)(t);function t(e){var o;return(0,i.Z)(this,t),(o=n.call(this,e)).editorUrl=void 0,o.getMdStr=void 0,o.dependencies=void 0,o.state={mdStr:""},o}return(0,a.Z)(t,[{key:"componentDidMount",value:function(){var e=this;this.getMdStr&&this.getMdStr().then((function(n){e.setState({mdStr:n.default||n})}))}},{key:"render",value:function(){var e=this;return(0,p.jsxs)(s.Fragment,{children:[(0,p.jsx)(l.Z,{style:{padding:"20px 26px"},source:this.state.mdStr,className:g,components:{code:function(n){var t=n.inline,i=n.node,a=(0,r.Z)(n,w),u=a,c=u.noPreview,s=u.noScroll,l=u.bgWhite,d=u.noCode,v=u.codeSandbox,m=u.codePen;if(t)return(0,p.jsx)("code",(0,o.Z)({},a));var M={noPreview:c,noScroll:s,bgWhite:l,noCode:d,codeSandbox:v,codePen:m};return 0===Object.keys(M).filter((function(e){return void 0!==M[e]})).length?(0,p.jsx)("code",(0,o.Z)({},a)):(0,p.jsx)(h,{version:f,code:y(i.children),dependencies:e.dependencies,noPreview:c,noScroll:s,bgWhite:l,noCode:d,codePen:m,codeSandbox:v})}}}),(0,p.jsx)(M,{editorUrl:this.editorUrl})]})}}]),t}(s.Component)},94808:function(e){var n=function(e){"use strict";var n,t=Object.prototype,o=t.hasOwnProperty,r="function"===typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",u=r.toStringTag||"@@toStringTag";function c(e,n,t){return Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}),e[n]}try{c({},"")}catch(O){c=function(e,n,t){return e[n]=t}}function s(e,n,t,o){var r=n&&n.prototype instanceof m?n:m,i=Object.create(r.prototype),a=new A(o||[]);return i._invoke=function(e,n,t){var o=f;return function(r,i){if(o===p)throw new Error("Generator is already running");if(o===v){if("throw"===r)throw i;return P()}for(t.method=r,t.arg=i;;){var a=t.delegate;if(a){var u=x(a,t);if(u){if(u===h)continue;return u}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if(o===f)throw o=v,t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);o=p;var c=l(e,n,t);if("normal"===c.type){if(o=t.done?v:d,c.arg===h)continue;return{value:c.arg,done:t.done}}"throw"===c.type&&(o=v,t.method="throw",t.arg=c.arg)}}}(e,t,a),i}function l(e,n,t){try{return{type:"normal",arg:e.call(n,t)}}catch(O){return{type:"throw",arg:O}}}e.wrap=s;var f="suspendedStart",d="suspendedYield",p="executing",v="completed",h={};function m(){}function M(){}function g(){}var w={};c(w,i,(function(){return this}));var y=Object.getPrototypeOf,C=y&&y(y(T([])));C&&C!==t&&o.call(C,i)&&(w=C);var k=g.prototype=m.prototype=Object.create(w);function E(e){["next","throw","return"].forEach((function(n){c(e,n,(function(e){return this._invoke(n,e)}))}))}function b(e,n){function t(r,i,a,u){var c=l(e[r],e,i);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"===typeof f&&o.call(f,"__await")?n.resolve(f.__await).then((function(e){t("next",e,a,u)}),(function(e){t("throw",e,a,u)})):n.resolve(f).then((function(e){s.value=e,a(s)}),(function(e){return t("throw",e,a,u)}))}u(c.arg)}var r;this._invoke=function(e,o){function i(){return new n((function(n,r){t(e,o,n,r)}))}return r=r?r.then(i,i):i()}}function x(e,t){var o=e.iterator[t.method];if(o===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=n,x(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var r=l(o,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,h;var i=r.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=n),t.delegate=null,h):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function Z(e){var n={tryLoc:e[0]};1 in e&&(n.catchLoc=e[1]),2 in e&&(n.finallyLoc=e[2],n.afterLoc=e[3]),this.tryEntries.push(n)}function S(e){var n=e.completion||{};n.type="normal",delete n.arg,e.completion=n}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(Z,this),this.reset(!0)}function T(e){if(e){var t=e[i];if(t)return t.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(o.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=n,t.done=!0,t};return a.next=a}}return{next:P}}function P(){return{value:n,done:!0}}return M.prototype=g,c(k,"constructor",g),c(g,"constructor",M),M.displayName=c(g,u,"GeneratorFunction"),e.isGeneratorFunction=function(e){var n="function"===typeof e&&e.constructor;return!!n&&(n===M||"GeneratorFunction"===(n.displayName||n.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,c(e,u,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(b.prototype),c(b.prototype,a,(function(){return this})),e.AsyncIterator=b,e.async=function(n,t,o,r,i){void 0===i&&(i=Promise);var a=new b(s(n,t,o,r),i);return e.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(k),c(k,u,"Generator"),c(k,i,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var n=[];for(var t in e)n.push(t);return n.reverse(),function t(){for(;n.length;){var o=n.pop();if(o in e)return t.value=o,t.done=!1,t}return t.done=!0,t}},e.values=T,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=n)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(o,r){return u.type="throw",u.arg=e,t.next=o,r&&(t.method="next",t.arg=n),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,n){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(e,n){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&n&&(this.next=n),h},finish:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var t=this.tryEntries[n];if(t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),S(t),h}},catch:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var t=this.tryEntries[n];if(t.tryLoc===e){var o=t.completion;if("throw"===o.type){var r=o.arg;S(t)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,o){return this.delegate={iterator:T(e),resultName:t,nextLoc:o},"next"===this.method&&(this.arg=n),h}},e}(e.exports);try{regeneratorRuntime=n}catch(t){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},44483:function(e,n,t){"use strict";t.r(n),t.d(n,{APILoader:function(){return m},AutoComplete:function(){return A},BezierCurve:function(){return B},Circle:function(){return U},CircleMarker:function(){return Q},Context:function(){return j},ContextMenu:function(){return $},ControlBarControl:function(){return K},Ellipse:function(){return ne},Geolocation:function(){return re},HawkEyeControl:function(){return ue},InfoWindow:function(){return le},Map:function(){return _},MapTypeControl:function(){return pe},Marker:function(){return me},MassMarks:function(){return we},Polygon:function(){return ke},PolygonEditor:function(){return Ee},Polyline:function(){return Ze},Provider:function(){return R},Rectangle:function(){return Te},ScaleControl:function(){return Oe},Text:function(){return De},ToolBarControl:function(){return Re},Weather:function(){return He},delay:function(){return h},initialState:function(){return P},reducer:function(){return O},requireCss:function(){return d},requireScript:function(){return p},useAutoComplete:function(){return S},useBezierCurve:function(){return z},useCircle:function(){return W},useCircleMarker:function(){return G},useContextMenu:function(){return V},useControlBarControl:function(){return J},useEllipse:function(){return ee},useEventProperties:function(){return x},useGeolocation:function(){return oe},useHawkEyeControl:function(){return ae},useInfoWindow:function(){return se},useMap:function(){return D},useMapContext:function(){return I},useMapTypeControl:function(){return de},useMarker:function(){return he},useMassMarks:function(){return ge},usePolygon:function(){return Ce},usePolyline:function(){return xe},usePortal:function(){return C},usePrevious:function(){return b},useRectangle:function(){return Ae},useScaleControl:function(){return Pe},useSetStatus:function(){return k},useSettingProperties:function(){return Z},useText:function(){return Ie},useToolBarControl:function(){return Le},useVisiable:function(){return E},useWeather:function(){return _e}});var o=t(22951),r=t(91976),i=t(67591),a=t(43415),u=t(57135),c=t.n(u);function s(e,n,t,o,r,i,a){try{var u=e[i](a),c=u.value}catch(s){return void t(s)}u.done?n(c):Promise.resolve(c).then(o,r)}var l=t(41473),f={};function d(e,n){void 0===n&&(n="_react_amap_css");var t=document&&(document.head||document.getElementsByTagName("head")[0]),o=document.getElementById(n);return new Promise((function(r,i){if(!document||e in f||o)r();else{var a=document.createElement("link");a.type="text/css",a.rel="stylesheet",a.id=n,a.href=e,a.onerror=function(n){t.removeChild(a),i(new URIError("The css "+e+" is no accessible."))},a.onload=function(){f[e]=!0,r()},t.appendChild(a)}}))}function p(e,n){void 0===n&&(n="_react_amap_plugin");var t=document&&(document.head||document.getElementsByTagName("head")[0]),o=document.getElementById(n);return new Promise((function(r,i){if(!document||e in f||o)r();else{var a=document.createElement("script");a.type="text/javascript",a.id=n,a.async=!0,a.defer=!0,a.src=e,a.onerror=function(n){t.removeChild(a),i(new URIError("The Script "+e+" is no accessible."))},a.onload=function(){f[e]=!0,r()},t.appendChild(a)}}))}var v=t(69286);function h(e){return new Promise((function(n,t){window.setTimeout(n,e)}))}var m=function(e){(0,i.Z)(t,e);var n=(0,a.Z)(t);function t(e){var r;if((0,o.Z)(this,t),(r=n.call(this,e)).isMountedOk=!1,r.state={loaded:!!window.AMap},r.handleError=function(e){r.isMountedOk&&r.setState({error:e})},r.finish=function(){r.isMountedOk&&r.setState({loaded:!0})},null===e.akay)throw new TypeError("AMap: akay is required");return r}return(0,r.Z)(t,[{key:"componentDidMount",value:function(){this.isMountedOk=!0;var e=this.props.callbackName;if(null==window.AMap){if(window[e])return void t.waitQueue.push([this.finish,this.handleError]);this.loadMap()}}},{key:"componentWillUnmount",value:function(){this.isMountedOk=!1}},{key:"render",value:function(){return this.state.loaded?this.props.children:this.props.fallback?this.props.fallback(this.state.error):this.state.error?(0,v.jsx)("div",{style:{color:"red"},children:this.state.error.message}):null}},{key:"getScriptSrc",value:function(){var e=this.props,n=e.protocol||window.location.protocol;-1===n.indexOf(":")&&(n+=":");var t="";return e.plugin&&(t="&plugin="+e.plugin),n+"//"+e.hostAndPath+"?v="+e.version+"&key="+e.akay+"&callback="+e.callbackName+t}},{key:"loadMap",value:function(){var e,n=this;return(e=c().mark((function e(){var o,r,i,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=n.props.callbackName,r=n.getScriptSrc(),window[o]=function(){var e=t.waitQueue;t.waitQueue=[],e.forEach((function(e){return e[0]()})),n.finish()},i=0;case 4:if(!(i<3)){e.next=22;break}return e.prev=5,e.next=8,p(r);case 8:return e.abrupt("break",22);case 11:if(e.prev=11,e.t0=e.catch(5),2!==i){e.next=17;break}if("object"!==typeof(a=function(){var o=new Error("Failed to load AMap: "+e.t0.message),r=t.waitQueue;return t.waitQueue=[],r.forEach((function(e){return e[1](o)})),n.handleError(o),{v:void 0}}())){e.next=17;break}return e.abrupt("return",a.v);case 17:return e.next=19,h(1e3*i);case 19:i++,e.next=4;break;case 22:case"end":return e.stop()}}),e,null,[[5,11]])})),function(){var n=this,t=arguments;return new Promise((function(o,r){var i=e.apply(n,t);function a(e){s(i,o,r,a,u,"next",e)}function u(e){s(i,o,r,a,u,"throw",e)}a(void 0)}))})()}}]),t}(l.Component);m.defaultProps={protocol:/^file:/.test(window.location.protocol)?"https":window.location.protocol,akay:"",hostAndPath:"webapi.amap.com/maps",version:"2.0",callbackName:"load_amap_sdk",plugin:""},m.waitQueue=[];var M=t(25773),g=t(11026),w=t(64649),y=t(7510),C=function(){var e=l.useState((function(){return document.createElement("div")})),n=(0,g.Z)(e,1)[0],t=(0,l.useState)({render:function(){return null},remove:function(){return null}}),o=(0,g.Z)(t,2),r=o[0],i=o[1],a=l.useCallback((function(e){return{render:function(n){var t=n.children;return t?(0,y.createPortal)(t,e):null},remove:function(e){e&&(0,y.unmountComponentAtNode)(e)}}}),[]);return(0,l.useEffect)((function(){n&&r.remove();var e=a(n);return i(e),function(){e.remove(n)}}),[n]),{Portal:r.render,container:n}};function k(e,n,t){void 0===n&&(n={}),void 0===t&&(t=[]),t.forEach((function(t){var o=t,r=(0,l.useState)(n[o]),i=(0,g.Z)(r,2),a=i[0],u=i[1];(0,l.useEffect)((function(){if(e&&void 0!==n[o]&&n[o]!==a){var t=e.getStatus();e.setStatus((0,M.Z)({},t,(0,w.Z)({},o,n[o]))),u(n[o])}}),[e,n[o]])}))}function E(e,n){var t=(0,l.useState)(n),o=(0,g.Z)(t,2),r=o[0],i=o[1];(0,l.useEffect)((function(){e&&void 0!==n&&(n?e.show&&e.show():e.hide&&e.hide(),n!==r&&i(n))}),[e,n])}function b(e){var n=(0,l.useRef)();return(0,l.useEffect)((function(){n.current=e})),n.current}function x(e,n,t,o){void 0===n&&(n={}),void 0===t&&(t=[]),t.forEach((function(t){var o=t,r=n[o];(0,l.useEffect)((function(){if(e){var n=t.toLocaleLowerCase().replace(/^on/,"");return r&&n&&e.on(n,r),function(){n&&r&&e.off(n,r)}}}),[e,n[o]])}))}function Z(e,n,t){void 0===e&&(e={}),void 0===n&&(n={}),void 0===t&&(t=[]),t.forEach((function(t){var o="set"+t,r=""+t.charAt(0).toLowerCase()+t.slice(1),i=(0,l.useState)(n[r]),a=(0,g.Z)(i,2),u=a[0],c=a[1];(0,l.useEffect)((function(){e&&void 0!==n[r]&&n[r]!==u&&e[o]&&"function"===typeof e[o]&&(e[o](n[r]),c(n[r]))}),[e,n[r]])}))}var S=function(e){void 0===e&&(e={});var n=(0,l.useState)(),t=(0,g.Z)(n,2),o=t[0],r=t[1];return(0,l.useEffect)((function(){var n;if(AMap&&!o)return AMap.plugin(["AMap.AutoComplete"],(function(){n=new AMap.AutoComplete(e),r(n)})),function(){n&&r(void 0)}}),[]),Z(o,e,["Type","City","CityLimit"]),x(o,e,["onChoose","onSelect"]),{autoComplete:o,setAutoComplete:r}},A=l.forwardRef((function(e,n){var t=S(e).autoComplete;return(0,l.useImperativeHandle)(n,(function(){return(0,M.Z)({},e,{autoComplete:t})})),null})),T=t(30808),P={map:void 0,AMap:void 0,container:void 0},O=function(e,n){return(0,M.Z)({},e,n)},j=l.createContext({state:P,dispatch:function(){return null}});function I(){var e=(0,l.useContext)(j),n=e.state,t=e.dispatch;return(0,M.Z)({},n,{state:n,dispatch:t})}var D=function(e){void 0===e&&(e={});var n=(0,M.Z)({},e),t=(0,l.useState)(),o=(0,g.Z)(t,2),r=o[0],i=o[1],a=(0,l.useState)(e.zoom||15),u=(0,g.Z)(a,2),c=u[0],s=u[1],f=(0,l.useState)(e.container),d=(0,g.Z)(f,2),p=d[0],v=d[1],h=(0,l.useContext)(j).dispatch;return(0,l.useEffect)((function(){if(p&&!r&&AMap){p.className=p.className+" react-amap-wapper";var e=new AMap.Map(p,(0,M.Z)({zoom:c},n));i(e)}return function(){r&&(r.clearInfoWindow(),r.clearLimitBounds(),r.clearMap(),r.destroy(),i(void 0))}}),[p,r]),(0,l.useEffect)((function(){return r&&p&&h({map:r,container:p,AMap:AMap}),function(){h({map:void 0,container:void 0,AMap:void 0})}}),[r,p]),(0,l.useMemo)((function(){r&&"number"===typeof e.zoom&&c!==e.zoom&&e.zoom>=2&&e.zoom<=20&&(s(e.zoom),r.setZoom(e.zoom))}),[c,e.zoom]),(0,l.useMemo)((function(){e.center&&r&&r.setCenter(e.center)}),[r,e.center]),k(r,e,["dragEnable","zoomEnable","jogEnable","pitchEnable","rotateEnable","animateEnable","keyboardEnable"]),Z(r,e,["Zoom","LabelzIndex","Layers","City","Bounds","LimitBounds","Lang","Rotation","DefaultCursor","MapStyle","Features","DefaultLayer","Pitch"]),x(r,e,["onMouseMove","onZoomChange","onMapMove","onMouseWheel","onZoomStart","onMouseOver","onMouseOut","onDblClick","onClick","onZoomEnd","onMoveEnd","onMouseUp","onMouseDown","onRightClick","onMoveStart","onDragStart","onDragging","onDragEnd","onHotspotOut","onHotspotOver","onTouchStart","onComplete","onHotspotClick","onTouchMove","onTouchEnd","onResize"]),{map:r,setMap:i,zoom:c,setZoom:s,container:p,setContainer:v}},L=["className","children"];function R(e){var n=(0,l.useReducer)(O,P),t=(0,g.Z)(n,2),o=t[0],r=t[1];return(0,v.jsx)(j.Provider,{value:(0,M.Z)({},o,{state:o,dispatch:r}),children:e.children})}var _=(0,l.forwardRef)((function(e,n){var t=e.className,o=e.children,r=(0,T.Z)(e,L),i=(0,l.useReducer)(O,P),a=(0,g.Z)(i,2),u=a[0],c=a[1],s=(0,l.useRef)(null),f=D((0,M.Z)({container:r.container||s.current},r)),d=f.setContainer,p=f.container,h=f.map;(0,l.useEffect)((function(){return d(s.current)}),[s.current]),(0,l.useImperativeHandle)(n,(function(){return(0,M.Z)({},r,{map:h,AMap:AMap,container:r.container||s.current})}),[h]);var m=l.Children.toArray(o);return(0,l.useEffect)((function(){h&&c({map:h,container:s.current,AMap:AMap})}),[h]),(0,v.jsxs)(j.Provider,{value:(0,M.Z)({},u,{state:u,dispatch:c}),children:[!r.container&&(0,v.jsx)("div",{ref:s,className:"react-amap-wapper "+t,style:(0,M.Z)({fontSize:1,width:"100%",height:"100%"},r.style)}),AMap&&h&&"function"===typeof o&&o({AMap:AMap,map:h,container:p}),AMap&&h&&m.map((function(e,n){return(0,l.isValidElement)(e)?"string"===typeof e?(0,l.cloneElement)((0,v.jsx)(l.Fragment,{children:e}),{key:n}):e.type&&"string"===typeof e.type?(0,l.cloneElement)(e,{key:n}):(0,l.cloneElement)(e,(0,M.Z)({},e.props,{AMap:AMap,map:h,container:p,key:n})):null}))]})})),H=["visiable"],z=function(e){void 0===e&&(e={});var n=e.visiable,t=(0,T.Z)(e,H),o=I().map,r=(0,l.useState)(),i=(0,g.Z)(r,2),a=i[0],u=i[1];return(0,l.useEffect)((function(){if(AMap&&o&&!a){var e=new AMap.BezierCurve((0,M.Z)({},t));return o.add(e),u(e),function(){e&&(o&&o.removeLayer(e),u(void 0))}}}),[o]),E(a,n),Z(a,e,["Options","Path","ExtData","ExtData"]),x(a,e,["onHide","onShow","onDblClick","onMouseOver","onMouseUp","onMouseDown","onclick","onTouchEnd","onTouchMove","onTouchStart","onRightClick","onMouseOut"]),{bezierCurve:a,setBezierCurve:u}},B=l.forwardRef((function(e,n){var t=z(e).bezierCurve;return(0,l.useImperativeHandle)(n,(function(){return(0,M.Z)({},e,{bezierCurve:t})})),null})),N=["visiable"],W=function(e){void 0===e&&(e={});var n=e.visiable,t=(0,T.Z)(e,N),o=I().map,r=(0,l.useState)(),i=(0,g.Z)(r,2),a=i[0],u=i[1];return(0,l.useEffect)((function(){if(AMap&&o&&!a){var e=new AMap.Circle((0,M.Z)({},t));o.add(e),u(e)}return function(){a&&(o&&o.remove(a),u(void 0))}}),[o]),E(a,n),Z(a,e,["Center","Raius","Options","ExtData"]),x(a,e,["onHide","onShow","onRightClick","onClick","onTouchEnd","onDblClick","onTouchMove","onTouchStart","onMouseOut","onMouseOver","onMouseUp","onMouseDown"]),{circle:a,setCircle:u}},U=l.forwardRef((function(e,n){var t=W(e).circle;return(0,l.useImperativeHandle)(n,(function(){return(0,M.Z)({},e,{circle:t})})),null})),F=["visiable"],G=function(e){void 0===e&&(e={});var n=e.visiable,t=(0,T.Z)(e,F),o=I().map,r=(0,l.useState)(),i=(0,g.Z)(r,2),a=i[0],u=i[1];return(0,l.useEffect)((function(){if(AMap&&o&&!a){var e=new AMap.CircleMarker((0,M.Z)({},t));return o.add(e),u(e),function(){e&&(o&&o.removeLayer(e),u(void 0))}}}),[o]),E(a,n),Z(a,e,["Center","Raius","zIndex","Bubble","Cursor","StrokeColor","StrokeOpacity","StrokeWeight","FillColor","FillOpacity","Draggable","ExtData"]),x(a,e,["onHide","onShow","onMouseover","onTouchend","onClick","onTouchmove","onRightclick","onMouseup","onMouseout","onTouchstart","onMousedown","onDblclick"]),{circleMarker:a,setCircleMarker:u}},Q=l.forwardRef((function(e,n){var t=G(e).circleMarker;return(0,l.useImperativeHandle)(n,(function(){return(0,M.Z)({},e,{circleMarker:t})})),null})),q=["position"],V=function(e){void 0===e&&(e={});var n=e.position,t=(0,T.Z)(e,q),o=I().map,r=(0,l.useState)(),i=(0,g.Z)(r,2),a=i[0],u=i[1];return(0,l.useEffect)((function(){if(AMap&&o&&!a){var e=new AMap.ContextMenu((0,M.Z)({},t));u(e);var r=function(t){return e.open(o,n||t.lnglat)};return o.on("rightclick",r),function(){e&&(o.off("rightclick",r),o&&o.removeLayer(e),u(void 0))}}}),[o]),x(a,e,["onOpen","onClose"]),{contextMenu:a,setContextMenu:u}},Y=function(){},$=l.forwardRef((function(e,n){var t=V(e).contextMenu;(0,l.useImperativeHandle)(n,(function(){return(0,M.Z)({},e,{contextMenu:t})}));var o=l.Children.toArray(e.children);return(0,v.jsx)(l.Fragment,{children:AMap&&t&&o.map((function(n,o){return l.isValidElement(n)?l.cloneElement(n,(0,M.Z)({},n.props,{AMap:AMap,map:e.map,contextMenu:t,key:o})):null}))})}));function J(e){void 0===e&&(e={});var n=e,t=n.position,o=n.visiable,r=n.offset,i=(0,l.useState)(),a=(0,g.Z)(i,2),u=a[0],c=a[1],s=I().map;return(0,l.useEffect)((function(){var e;if(s&&!u)return s.plugin(["AMap.ControlBar","AMap.HawkEye"],(function(){e=new AMap.ControlBar({offset:r,position:t}),s.addControl(e),c(e)})),function(){e&&s.removeControl(e)}}),[s]),E(u,o),{controlBarControl:u,setControlBarControl:c}}$.Item=function(e){void 0===e&&(e={});var n=e,t=n.text,o=void 0===t?"":t,r=n.onClick,i=void 0===r?Y:r;return(0,l.useEffect)((function(){return e.contextMenu&&e.contextMenu.addItem(o,i,1),function(){e.contextMenu&&e.contextMenu.removeItem(o,i)}}),[e.contextMenu,e.text,e.onClick]),null};var K=l.forwardRef((function(e,n){var t=J(e).controlBarControl;return(0,l.useImperativeHandle)(n,(function(){return(0,M.Z)({},e,{controlBarControl:t})}),[t]),null})),X=["visiable"],ee=function(e){void 0===e&&(e={});var n=e.visiable,t=(0,T.Z)(e,X),o=I().map,r=(0,l.useState)(),i=(0,g.Z)(r,2),a=i[0],u=i[1];return(0,l.useEffect)((function(){if(AMap&&o&&!a){var e=new AMap.Ellipse((0,M.Z)({},t));return o.add(e),u(e),function(){e&&(o&&o.removeLayer(e),u(void 0))}}}),[o]),E(a,n),Z(a,e,["Center","Radius","Options","ExtData"]),x(a,e,["onHide","onShow","onClick","onDblClick","onRightClick","onMouseOut","onMouseOver","onMouseUp","onMouseDown","onTouchEnd","onTouchMove","onTouchStart"]),{ellipse:a,setEllipse:u}},ne=l.forwardRef((function(e,n){var t=ee(e).ellipse;return(0,l.useImperativeHandle)(n,(function(){return(0,M.Z)({},e,{ellipse:t})})),null})),te=["type","onComplete","onError"],oe=function(e){void 0===e&&(e={});var n=e,t=n.type,o=void 0===t?"position":t,r=n.onComplete,i=n.onError,a=(0,T.Z)(e,te),u=(0,l.useState)(),c=(0,g.Z)(u,2),s=c[0],f=c[1],d=I().map;function p(e,n){"complete"===e&&r?r(n):i&&i(n)}return(0,l.useEffect)((function(){var e;if(AMap&&!s)return AMap.plugin(["AMap.Geolocation"],(function(){e=new AMap.Geolocation((0,M.Z)({},a)),f(e)})),function(){e&&f(void 0)}}),[AMap]),(0,l.useMemo)((function(){if(/^(position|cityInfo)$/.test(o)){var e="position"===o?"getCurrentPosition":"getCityInfo";s&&d?(s[e](p),d.addControl(s)):s&&s[e](p)}}),[s]),{geolocation:s,setGeolocation:f}},re=l.forwardRef((function(e,n){var t=oe(e).geolocation;return(0,l.useImperativeHandle)(n,(function(){return(0,M.Z)({},e,{geolocation:t})})),null})),ie=["offset","visiable"];function ae(e){void 0===e&&(e={});var n=(0,l.useState)(),t=(0,g.Z)(n,2),o=t[0],r=t[1],i=e,a=i.offset,u=i.visiable,c=(0,T.Z)(e,ie),s=I().map;return(0,l.useEffect)((function(){var e;if(s&&!o)return s.plugin(["AMap.HawkEye"],(function(){e=new AMap.HawkEye((0,M.Z)({offset:a},c)),s.addControl(e),r(e)})),function(){e&&s&&(s.removeLayer(e),r(void 0))}}),[s]),E(o,u),{hawkEyeControl:o,setHawkEyeControl:r}}var ue=l.forwardRef((function(e,n){var t=ae(e).hawkEyeControl;return(0,l.useImperativeHandle)(n,(function(){return(0,M.Z)({},e,{hawkEyeControl:t})}),[t]),null})),ce=["visiable","position"],se=function(e){void 0===e&&(e={});var n=e,t=n.visiable,o=n.position,r=(0,T.Z)(e,ce),i=I().map,a=(0,l.useState)(t),u=(0,g.Z)(a,2),c=u[0],s=u[1],f=(0,l.useState)(),d=(0,g.Z)(f,2),p=d[0],v=d[1],h=C(),m=h.container,w=h.Portal;return(0,l.useEffect)((function(){if(AMap&&i&&!p){var n=i.getCenter();e.children&&(r.content=m);var t=new AMap.InfoWindow((0,M.Z)({},r,{position:o||n}));return v(t),c&&t.open(i,o||n),function(){t&&(i&&i.remove(t),v(void 0))}}}),[i]),(0,l.useEffect)((function(){p&&p.setContent(e.children?m:r.content||"")}),[e.children,m,r.content,p]),(0,l.useMemo)((function(){if(c!==t&&p&&i)if(s(t),t){var e=i.getCenter();p.open(i,o||e)}else p.close()}),[t,p]),(0,l.useEffect)((function(){if(i&&p&&t){var e=i.getCenter();p.open(i,o||e)}}),[o]),Z(p,e,["Content","Anchor","Size"]),x(p,e,["onOpen","onClose","onChange"]),{isOpen:c,setIsOpen:s,infoWindow:p,setInfoWindow:v,InfoWindowPortal:w}},le=l.forwardRef((function(e,n){var t=se(e),o=t.infoWindow,r=t.InfoWindowPortal;return(0,l.useImperativeHandle)(n,(function(){return(0,M.Z)({},e,{infoWindow:o})})),(0,v.jsx)(r,{children:e.children})})),fe=["visiable","defaultType"];function de(e){void 0===e&&(e={});var n=(0,l.useState)(),t=(0,g.Z)(n,2),o=t[0],r=t[1],i=e,a=i.visiable,u=i.defaultType,c=void 0===u?0:u,s=(0,T.Z)(e,fe),f=I().map;return(0,l.useEffect)((function(){var e;if(f&&!o)return f.plugin(["AMap.MapType"],(function(){e=new AMap.MapType((0,M.Z)({defaultType:c},s)),f.addControl(e),r(e)})),function(){e&&f.removeControl(e)}}),[f]),E(o,a),{mapTypeControl:o,setMapTypeControl:r}}var pe=l.forwardRef((function(e,n){var t=de(e).mapTypeControl;return(0,l.useImperativeHandle)(n,(function(){return(0,M.Z)({},e,{mapTypeControl:t})}),[t]),null})),ve=["visiable","children"],he=function(e){void 0===e&&(e={});var n=e.visiable,t=(0,T.Z)(e,ve),o=I().map,r=(0,l.useState)(),i=(0,g.Z)(r,2),a=i[0],u=i[1],c=C(),s=c.container,f=c.Portal;return(0,l.useEffect)((function(){if(!a&&o){e.children&&(t.content=s);var n=new AMap.Marker((0,M.Z)({},t));o.add(n),u(n)}return function(){a&&(a.remove(),u(void 0))}}),[o,a]),E(a,n),Z(a,e,["Path","Anchor","Offset","Animation","Clickable","Position","Angle","Label","zIndex","Icon","Draggable","Cursor","Content","Map","Title","Top","Shadow","Shape","ExtData"]),x(a,e,["onClick","onDblClick","onRightClick","onMouseMove","onMouseOver","onMouseOut","onMouseDown","onMouseUp","onDragStart","onDragging","onDragEnd","onMoving","onMoveEnd","onMoveAlong","onTouchStart","onTouchMove","onTouchEnd"]),{marker:a,setMarker:u,MarkerPortal:f}},me=(0,l.forwardRef)((function(e,n){var t=he(e),o=t.marker,r=t.MarkerPortal;return(0,l.useImperativeHandle)(n,(function(){return(0,M.Z)({},e,{marker:o})}),[o]),(0,v.jsx)(r,{children:e.children})})),Me=["visiable"],ge=function(e){void 0===e&&(e={});var n=e.visiable,t=(0,T.Z)(e,Me),o=I().map,r=t||{},i=r.opacity,a=void 0===i?.8:i,u=r.zIndex,c=void 0===u?1111:u,s=r.style,f=r.data,d=(0,l.useState)(),p=(0,g.Z)(d,2),v=p[0],h=p[1];return(0,l.useEffect)((function(){if(AMap&&o&&!v){var e=s;e||(e=[{url:"https://webapi.amap.com/images/mass/mass0.png",anchor:new AMap.Pixel(6,6),size:new AMap.Size(11,11),zIndex:3},{url:"https://webapi.amap.com/images/mass/mass1.png",anchor:new AMap.Pixel(4,4),size:new AMap.Size(7,7),zIndex:2},{url:"https://webapi.amap.com/images/mass/mass2.png",anchor:new AMap.Pixel(3,3),size:new AMap.Size(5,5),zIndex:1}]);var n=new AMap.MassMarks(f||[],{opacity:a,zIndex:c,style:e});return h(n),n.setMap(o),function(){n&&(n.clear(),h(void 0))}}}),[o]),E(v,n),Z(v,e,["Map","Data","Style","Opacity","zIndex","Zooms"]),x(v,e,["onClick","onDblClick","onMouseMove","onMouseOut","onMouseUp","onMouseDown","onMouseOver","onTouchStart","onTouchEnd"]),{massMarks:v,setMassMarks:h}},we=l.forwardRef((function(e,n){var t=ge(e).massMarks;return(0,l.useImperativeHandle)(n,(function(){return(0,M.Z)({},e,{massMarks:t})}),[t,e]),null})),ye=["visiable"],Ce=function(e){void 0===e&&(e={});var n=e.visiable,t=(0,T.Z)(e,ye),o=I().map,r=(0,l.useState)(),i=(0,g.Z)(r,2),a=i[0],u=i[1];return(0,l.useEffect)((function(){if(AMap&&o&&!a){var e=new AMap.Polygon((0,M.Z)({},t));o.add(e),u(e)}}),[o]),E(a,n),Z(a,e,["ExtData","ExtData"]),x(a,e,["onClick","onDblClick","onRightClick","onHide","onShow","onMouseDown","onMouseUp","onMouseOver","onMouseOut","onChange","onTouchStart","onTouchMove","onTouchEnd"]),{polygon:a,setPolygon:u}},ke=(0,l.forwardRef)((function(e,n){var t=e.children,o=Ce(e).polygon;return(0,l.useImperativeHandle)(n,(function(){return(0,M.Z)({},e,{polygon:o})})),t&&(0,l.isValidElement)(t)?(0,l.cloneElement)(t,(0,M.Z)({},e,{polygon:o})):null})),Ee=(0,l.forwardRef)((function(e,n){var t=e.active,o=e.polygon,r=I().map,i=(0,l.useState)(!0),a=(0,g.Z)(i,2),u=a[0],c=a[1],s=(0,l.useState)(),f=(0,g.Z)(s,2),d=f[0],p=f[1];return(0,l.useEffect)((function(){if(o&&r&&!d&&AMap&&AMap.PolygonEditor){var e=new AMap.PolygonEditor(r,o);o.on("hide",(function(){return c(!1)})),o.on("show",(function(){return c(!0)})),p(e)}}),[o]),(0,l.useEffect)((function(){d&&(u&&!t?d.close():u&&t?d.open():!u&&t&&d.close())}),[t,u]),x(d,e,["onEnd","onAddnode","onAdjust","onMove","onAdd"]),null})),be=["visiable"];function xe(e){void 0===e&&(e={});var n=(0,l.useState)(),t=(0,g.Z)(n,2),o=t[0],r=t[1],i=e.visiable,a=(0,T.Z)(e,be),u=I().map;return(0,l.useEffect)((function(){if(u&&!o){var e=new AMap.Polyline((0,M.Z)({},a));return u.add(e),r(e),function(){e&&(u&&u.removeLayer(e),r(void 0))}}}),[u]),E(o,i),Z(o,e,["Path","Options","Map","ExtData"]),x(o,e,["onHide","onShow","onMouseOut","onChange","onRightClick","onDblClick","onMouseDown","onClick","onMouseOver","onTouchEnd","onTouchMove","onTouchStart","onMouseUp"]),{polyline:o,setPolyline:r}}var Ze=l.forwardRef((function(e,n){var t=xe(e).polyline;return(0,l.useImperativeHandle)(n,(function(){return(0,M.Z)({},e,{polyline:t})}),[t]),null})),Se=["visiable"],Ae=function(e){void 0===e&&(e={});var n=e.visiable,t=(0,T.Z)(e,Se),o=I().map,r=(0,l.useState)(),i=(0,g.Z)(r,2),a=i[0],u=i[1];return(0,l.useEffect)((function(){if(AMap&&o&&!a){var e=new AMap.Rectangle((0,M.Z)({},t));return o.add(e),u(e),function(){e&&(o&&o.removeLayer(e),u(void 0))}}}),[o]),E(a,n),Z(a,e,["Bounds","Options","Map","ExtData"]),x(a,e,["onHide","onShow","onClick","onDblClick","onRightClick","onMouseOut","onMouseOver","onMouseUp","onMouseDown","onTouchEnd","onTouchMove","onTouchStart"]),{rectangle:a,setRectangle:u}},Te=l.forwardRef((function(e,n){var t=Ae(e).rectangle;return(0,l.useImperativeHandle)(n,(function(){return(0,M.Z)({},e,{rectangle:t})})),null}));function Pe(e){void 0===e&&(e={});var n=(0,l.useState)(),t=(0,g.Z)(n,2),o=t[0],r=t[1],i=e,a=i.position,u=i.visiable,c=i.offset,s=I().map;return(0,l.useEffect)((function(){var e;if(s&&!o)return s.plugin(["AMap.Scale"],(function(){e=new AMap.Scale({offset:c,position:a}),s.addControl(e),r(e)})),function(){e&&s.removeControl(e)}}),[s]),E(o,u),{scaleControl:o,setScaleControl:r}}var Oe=l.forwardRef((function(e,n){var t=Pe(e).scaleControl;return(0,l.useImperativeHandle)(n,(function(){return(0,M.Z)({},e,{scaleControl:t})}),[t]),null})),je=["visiable"],Ie=function(e){void 0===e&&(e={});var n=e.visiable,t=(0,T.Z)(e,je),o=(0,l.useState)(),r=(0,g.Z)(o,2),i=r[0],a=r[1],u=I().map,c=C(),s=c.container,f=c.Portal;return(0,l.useEffect)((function(){if(AMap&&u&&!i){e.children&&(t.text=s.innerHTML);var n=new AMap.Text((0,M.Z)({},t));return u.add(n),a(n),function(){n&&(n.remove(),a(void 0))}}}),[u]),(0,l.useEffect)((function(){i&&i.setText(e.children?s.innerHTML:e.text||"")}),[e.children,e.text,s,i]),E(i,n),Z(i,e,["Style","Title","Clickable","Draggable","Map","Position","Offset","Angle","zIndex","Top","Cursor","ExtData"]),x(i,e,["onMoving","onTouchMove","onTouchEnd","onMoveaLong","onTouchStart","onMoveEnd","onClick","onDblClick","onRightClick","onMouseMove","onMouseOver","onMouseOut","onMouseDown","onMouseUp","onDragStart","onDragEnd","onDragging"]),{text:i,setText:a,TextPortal:f}},De=(0,l.forwardRef)((function(e,n){var t=Ie((0,M.Z)({},e)),o=t.text,r=t.TextPortal;return(0,l.useImperativeHandle)(n,(function(){return(0,M.Z)({},e,{text:o})})),e.children?(0,v.jsx)(r,{children:e.children}):null}));function Le(e){void 0===e&&(e={});var n=(0,l.useState)(),t=(0,g.Z)(n,2),o=t[0],r=t[1],i=e,a=i.position,u=i.visiable,c=i.offset,s=I().map;return(0,l.useEffect)((function(){var e;if(s&&!o)return s.plugin(["AMap.ToolBar"],(function(){e=new AMap.ToolBar({offset:c,position:a}),s.addControl(e),r(e)})),function(){e&&s.removeControl(e)}}),[s]),E(o,u),{toolBarControl:o,setToolBarControl:r}}var Re=l.forwardRef((function(e,n){var t=Le(e).toolBarControl;return(0,l.useImperativeHandle)(n,(function(){return(0,M.Z)({},e,{toolBarControl:t})}),[t]),null})),_e=function(e){void 0===e&&(e={});var n=e,t=n.city,o=void 0===t?"":t,r=n.type,i=void 0===r?"live":r,a=n.onComplete,u=n.onError,c=(0,l.useState)(),s=(0,g.Z)(c,2),f=s[0],d=s[1],p="live"===i?"getLive":"getForecast";return(0,l.useEffect)((function(){var e;if(AMap&&!f)return AMap.plugin(["AMap.Weather"],(function(){e=new AMap.Weather,d(e)})),function(){e&&d(void 0)}}),[]),(0,l.useMemo)((function(){var e;f&&o&&i&&(e=f,i&&o&&/^(live|forecast)$/.test(i)&&e[p](o,(function(e,n){e&&u?u(e):n&&a&&a(n)})))}),[f,o,i]),{weather:f,setWeather:d}},He=l.forwardRef((function(e,n){var t=_e(e).weather;return(0,l.useImperativeHandle)(n,(function(){return(0,M.Z)({},e,{weather:t})})),null}))}}]);
//# sourceMappingURL=9587.e818d7f3.chunk.js.map