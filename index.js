!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){var r=n(3);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(6).default)("1a199c97",r,!0,{})},function(e,t){document.querySelector("svg defs").innerHTML+='\n  <symbol id="icon-trevor" viewBox="0 0 1024 1024">\n    <path d="M851.8 516.4h-30.4V380c0-7.8-6.3-14.1-14.1-14.1H456.9c-7.8 0-14.1 6.3-14.1 14.1v104.9c-7.8-10.7-18.3-19.2-30.6-24.4V76.1c0-17-13.8-30.8-30.8-30.8H148.7c-17 0-30.8 13.8-30.8 30.8v420.7c0 17 13.8 30.8 30.8 30.8h162.6c0 37.8 29 68.5 65.8 72.2h-0.1v309.5c0 25.9 21 46.8 46.8 46.8h416.6c25.9 0 46.8-21 46.8-46.8V551.8c0-19.5-15.9-35.4-35.4-35.4z m-512.3 11.2c0-24.6 20-44.7 44.7-44.7 10.7 0 20.4 3.8 28 10.1 7.2 5.9 12.6 14.1 15.1 23.4 0.9 3.6 1.6 7.3 1.6 11.2 0 22.3-16.5 40.6-37.8 44-2.3 0.4-4.5 0.7-6.9 0.7-24.6-0.1-44.7-20.1-44.7-44.7z m453.6-11.2H471V394.1h322.1v122.3z" />\n    <path d="M565.6 421.7h28.2v66.4h-28.2zM625 421.7h28.2v66.4H625zM684.4 421.7h28.2v66.4h-28.2zM759.7 267.1c0-0.5-0.1-1-0.1-1.5-3.6-38-24.9-155.5-153.6-191.1 0 0 29.7 37.7-50 121.8-4.6 4.1-8.9 8.4-12.8 13.1-0.1 0.1-0.1 0.2-0.2 0.2-15.6 18.9-25 42.4-25 67.9 0 61.8 54.2 112 121.1 112s121.1-50.1 121.1-112c0 0.1 0-3.8-0.5-10.4z" />\n  </symbol>\n'},function(e,t,n){"use strict";var r=n(0);n.n(r).a},function(e,t,n){(e.exports=n(4)(!1)).push([e.i,'\n.trevor[data-v-064da54e] {\n  height: 100%;\n  display: grid;\n  grid-gap: 0 1rem;\n  grid-template:"heading heading"\n                "keys    text" 1fr\n                "ctrl    text"\n                / 1fr 3fr;\n}\n.heading[data-v-064da54e] {\n  grid-area: heading;\n}\n.editor[data-v-064da54e] {\n  display: contents;\n}\n.keys[data-v-064da54e] {\n  grid-area: keys;\n  overflow-y: auto;\n  background: #fbfbfb;\n}\n.key[data-v-064da54e] {\n  background: #fff;\n  padding: 0.7rem 0.5rem;\n  border-bottom: 1px solid #f3f3f3;\n  display: flex;\n  align-items: center;\n}\n.key.selected[data-v-064da54e] {\n  box-shadow: 0 0 8px inset #ccc;\n}\n.key.edited[data-v-064da54e] {\n  background-color: lightyellow;\n}\n.key .txt[data-v-064da54e] {\n  flex-grow: 1;\n}\n.key .missing[data-v-064da54e] {\n  display: block;\n  height: 0.8rem;\n  width: 0.8rem;\n  border-radius: 0.4rem;\n  border: 1px solid #9a0202;\n  background-color: red;\n}\n.key[data-v-064da54e]:focus {\n  outline: none;\n}\n.ctrl[data-v-064da54e] {\n  grid-area: ctrl;\n  text-align: end;\n  background: #fbfbfb;\n  padding: 0.5rem;\n}\n.texts[data-v-064da54e] {\n  grid-area: text;\n  overflow-y: auto;\n}\n.texts > *[data-v-064da54e] {\n  height: 100%;\n}\n.no-selection[data-v-064da54e] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0.7;\n\n  font-style: italic;\n}\n.lang[data-v-064da54e] {\n  margin-bottom: 2rem;\n}\n.savebar[data-v-064da54e] {\n  position: absolute;\n  width: 100%;\n  left: 0;\n  bottom: 0;\n  background-color: #de935f;\n}\n.savebar .k-view[data-v-064da54e] {\n  display: flex;\n  justify-content: space-between;\n  height: 40px;\n}\n',""])},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),s=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(s).concat([a]).join("\n")}var i;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var s=this[a][0];null!=s&&(r[s]=!0)}for(a=0;a<e.length;a++){var i=e[a];null!=i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){"use strict";n.r(t);n(1);var r={computed:{languagekeys(){const e=new Set;for(let[t,n]of this.languages)Object.keys(n.translations).forEach(t=>e.add(t));return Array.from(e)},missing(){const e=new Set;for(let t of this.languagekeys)for(let[n,r]of this.languages)void 0!==r.translations[t]&&""!==r.translations[t].trim()||e.add(t);return e}},data:function(){return{edited:new Set,languages:[],selected:null}},created:function(){this.fetch(),this.$events.$on("keydown.cmd.s",this.save)},destroyed:function(){this.$events.$off("keydown.cmd.s",this.save)},methods:{fetch(){this.$api.get("trevor/languages").then(e=>{this.languages=Object.entries(e).sort(([e,t],[n,r])=>t.default?-1:r.default?1:e.localeCompare(n))})},add(){let e=window.prompt(this.$t("trevor.addkey"));e&&(e=e.toLowerCase(),-1===this.languagekeys.indexOf(e.trim())&&(this.languages.length&&this.$set(this.languages[0][1].translations,e,""),this.edited.add(e)),this.$nextTick(()=>this.selectOne(e)))},selectOne(e){this.selected=e;const t=this.languagekeys.indexOf(e);this.$refs.keyspane[t].scrollIntoViewIfNeeded(),this.$nextTick(()=>{for(let[t,n]of this.languages)if(void 0===n.translations[e]||""===n.translations[e].trim()){let e=null;if(e=this.$refs[`input_${t}`])return void e[0].focus()}})},selectPrev(){const e=this.languagekeys.indexOf(this.selected),t=Math.max(0,e-1);this.selectOne(this.languagekeys[t])},selectNext(){const e=this.languagekeys.indexOf(this.selected),t=Math.min(this.languagekeys.length-1,e+1);this.selectOne(this.languagekeys[t])},save(){if(0===this.edited.size)return;const e={};for(let[t,n]of this.languages){e[t]={};for(let r of this.edited)e[t][r]=n.translations[r]}this.$api.patch("trevor/languages/translations",e).then(this.fetch),this.edited=new Set},revert(){this.languages=[],this.edited=new Set,this.fetch()}}};n(2);var a=function(e,t,n,r,a,s,i,o){var d,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),s&&(l._scopeId="data-v-"+s),i?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=d):a&&(d=o?function(){a.call(this,this.$root.$options.shadowRoot)}:a),d)if(l.functional){l._injectStyles=d;var c=l.render;l.render=function(e,t){return d.call(t),c(e,t)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,d):[d]}return{exports:e,options:l}}(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("k-view",{staticClass:"trevor"},[n("k-header",{staticClass:"heading"},[e._v(e._s(e.$t("trevor.heading")))]),e._v(" "),n("div",{staticClass:"editor"},[n("div",{staticClass:"keys",on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.selectNext(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.selectPrev(t)}]}},e._l(e.languagekeys,function(t){return n("div",{key:t,ref:"keyspane",refInFor:!0,class:["key",{selected:e.selected==t,edited:e.edited.has(t)}],attrs:{tabindex:"-1"},on:{click:function(n){return e.selectOne(t)}}},[n("div",{staticClass:"txt"},[e._v(e._s(t))]),e._v(" "),e.missing.has(t)?n("div",{staticClass:"missing"}):e._e()])}),0),e._v(" "),n("div",{staticClass:"ctrl"},[n("k-button",{attrs:{icon:"add"},on:{click:e.add}},[e._v(e._s(e.$t("add")))])],1),e._v(" "),n("div",{staticClass:"texts"},[e.selected?n("div",{on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:t.ctrlKey?e.selectPrev(t):null},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:t.ctrlKey?e.selectNext(t):null}]}},e._l(e.languages,function(t){var r=t[0],a=t[1];return n("div",{key:r,staticClass:"lang"},[n("k-textarea-field",{ref:"input_"+r,refInFor:!0,attrs:{buttons:!1,label:a.name+(a.default?" *":"")},on:{input:function(t){return e.edited.add(e.selected)}},model:{value:a.translations[e.selected],callback:function(t){e.$set(a.translations,e.selected,t)},expression:"lang.translations[selected]"}})],1)}),0):n("div",{staticClass:"no-selection"},[n("div",{staticClass:"text"},[n("p",[e._v(e._s(e.$t("trevor.startinfo")))]),e._v(" "),n("p",[n("b",[e._v("Trevor")]),e._v(": "+e._s(e.$t("trevor.payoff")))])])])])]),e._v(" "),e.edited.size?n("div",{staticClass:"savebar"},[n("k-view",[n("k-button",{attrs:{icon:"undo"},on:{click:e.revert}},[e._v(e._s(e.$t("revert")))]),e._v(" "),n("k-button",{attrs:{icon:"check"},on:{click:e.save}},[e._v(e._s(e.$t("save")))])],1)],1):e._e()],1)},[],!1,null,"064da54e",null).exports;panel.plugin("rasteiner/k3-trevor-view",{views:{trevor:{label:"Trevor",icon:"trevor",component:a}}})},function(e,t,n){"use strict";function r(e,t){for(var n=[],r={},a=0;a<t.length;a++){var s=t[a],i=s[0],o={id:e+":"+a,css:s[1],media:s[2],sourceMap:s[3]};r[i]?r[i].parts.push(o):n.push(r[i]={id:i,parts:[o]})}return n}n.r(t),n.d(t,"default",function(){return h});var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s={},i=a&&(document.head||document.getElementsByTagName("head")[0]),o=null,d=0,l=!1,c=function(){},u=null,f="data-vue-ssr-id",v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e,t,n,a){l=n,u=a||{};var i=r(e,t);return p(i),function(t){for(var n=[],a=0;a<i.length;a++){var o=i[a];(d=s[o.id]).refs--,n.push(d)}t?p(i=r(e,t)):i=[];for(a=0;a<n.length;a++){var d;if(0===(d=n[a]).refs){for(var l=0;l<d.parts.length;l++)d.parts[l]();delete s[d.id]}}}}function p(e){for(var t=0;t<e.length;t++){var n=e[t],r=s[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(y(n.parts[a]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var i=[];for(a=0;a<n.parts.length;a++)i.push(y(n.parts[a]));s[n.id]={id:n.id,refs:1,parts:i}}}}function g(){var e=document.createElement("style");return e.type="text/css",i.appendChild(e),e}function y(e){var t,n,r=document.querySelector("style["+f+'~="'+e.id+'"]');if(r){if(l)return c;r.parentNode.removeChild(r)}if(v){var a=d++;r=o||(o=g()),t=b.bind(null,r,a,!1),n=b.bind(null,r,a,!0)}else r=g(),t=function(e,t){var n=t.css,r=t.media,a=t.sourceMap;r&&e.setAttribute("media",r);u.ssrId&&e.setAttribute(f,t.id);a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var m,k=(m=[],function(e,t){return m[e]=t,m.filter(Boolean).join("\n")});function b(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=k(t,a);else{var s=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(s,i[t]):e.appendChild(s)}}}]);