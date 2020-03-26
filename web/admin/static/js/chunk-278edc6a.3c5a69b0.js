(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-278edc6a"],{1969:function(t,e,n){"use strict";var r=n("d9a6"),o=n.n(r);o.a},9472:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-main",[n("el-drawer",{ref:"createFormDrawer",attrs:{visible:t.createFormDrawer,direction:"rtl","before-close":t.handleCreateFormDrawerClose},on:{"update:visible":function(e){t.createFormDrawer=e}}},[n("div",{staticStyle:{width:"90%","margin-left":"15px"}},[n("h2",{staticStyle:{"margin-top":"0",color:"#606266"}},[t._v("添加短链接")]),t._v(" "),n("el-form",{ref:"createForm",attrs:{model:t.createForm,rules:t.createFormRules}},[n("el-form-item",{attrs:{label:"目标链接",prop:"url"}},[n("el-input",{model:{value:t.createForm.url,callback:function(e){t.$set(t.createForm,"url",e)},expression:"createForm.url"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"描述",prop:"description"}},[n("el-input",{attrs:{type:"textarea"},model:{value:t.createForm.description,callback:function(e){t.$set(t.createForm,"description",e)},expression:"createForm.description"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"启用？",prop:"is_enable"}},[n("el-switch",{model:{value:t.createForm.is_enable,callback:function(e){t.$set(t.createForm,"is_enable",e)},expression:"createForm.is_enable"}})],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.onCreateFormSubmit}},[t._v("添加")]),t._v(" "),n("el-button",{attrs:{size:"mini"},on:{click:t.onCreateFormCancel}},[t._v("取消")])],1)],1)],1)]),t._v(" "),n("el-drawer",{ref:"editFormDrawer",attrs:{visible:t.editFormDrawer,direction:"rtl","before-close":t.handleEditFormDrawerClose},on:{"update:visible":function(e){t.editFormDrawer=e}}},[n("div",{staticStyle:{width:"90%","margin-left":"15px"}},[n("h2",{staticStyle:{"margin-top":"0",color:"#606266"}},[t._v("更新："+t._s(t.editForm.id))]),t._v(" "),n("el-form",{ref:"editForm",attrs:{model:t.editForm,rules:t.editFormRules}},[n("el-form-item",{attrs:{label:"目标链接",prop:"url"}},[n("el-input",{model:{value:t.editForm.url,callback:function(e){t.$set(t.editForm,"url",e)},expression:"editForm.url"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"描述",prop:"description"}},[n("el-input",{attrs:{type:"textarea"},model:{value:t.editForm.description,callback:function(e){t.$set(t.editForm,"description",e)},expression:"editForm.description"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"启用？",prop:"is_enable"}},[n("el-switch",{model:{value:t.editForm.is_enable,callback:function(e){t.$set(t.editForm,"is_enable",e)},expression:"editForm.is_enable"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"创建人"}},[n("span",{staticStyle:{color:"#909399"}},[t._v(t._s(t.editForm.created_by))])]),t._v(" "),n("el-form-item",{attrs:{label:"添加时间"}},[n("span",{staticStyle:{color:"#909399"}},[t._v(t._s(t._f("dateformat")(t.editForm.create_time)))])]),t._v(" "),n("el-form-item",{attrs:{label:"更新时间"}},[n("span",{staticStyle:{color:"#909399"}},[t._v(t._s(t._f("dateformat")(t.editForm.update_time)))])]),t._v(" "),n("el-form-item",[n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.onEditFormSubmit}},[t._v("更新")]),t._v(" "),n("el-button",{attrs:{size:"mini"},on:{click:t.onEditFormCancel}},[t._v("取消")])],1)],1)],1)]),t._v(" "),n("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:function(e){return t.getList(1)}}},[t._v("刷新")]),t._v(" "),n("el-button",{attrs:{icon:"el-icon-plus",size:"mini",type:"primary"},on:{click:function(e){t.createFormDrawer=!0}}},[t._v("添加\n  ")]),t._v(" "),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list,"max-height":"800"}},[n("el-table-column",{attrs:{label:"短链接",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-dropdown",{attrs:{size:"mini"}},[n("span",{staticClass:"el-dropdown-link"},[t._v("\n            "+t._s(e.row.id)),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.landingHosts,(function(r){return n("el-dropdown-item",[n("span",{on:{click:function(n){return t.copyShortLink(r+e.row.id,n)}}},[t._v(t._s(r+e.row.id))])])})),1)],1)]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"url",label:"目标链接",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-link",{attrs:{type:"info",href:e.row.url,target:"_blank"}},[t._v(t._s(e.row.url))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"描述",width:"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.description?e.row.description:"-")+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"启用？",width:"70",align:"center"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("i",{class:{"el-icon-check":t.row.is_enable,"el-icon-close":!t.row.is_enable}})]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"创建人",width:"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.created_by)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"添加时间",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t._f("dateformat")(e.row.create_time))+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"更新时间",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t._f("dateformat")(e.row.update_time))+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini",circle:"",icon:"el-icon-s-data"},on:{click:function(n){return t.goto({name:"ShortLinkLatestRequestHistory",params:{id:e.row.id}})}}}),t._v(" "),n("el-button",{attrs:{size:"mini",circle:"",icon:"el-icon-edit-outline"},on:{click:function(n){return t.toEdit(e.row.id)}}}),t._v(" "),n("el-button",{attrs:{type:"danger",size:"mini",icon:"el-icon-delete-solid",circle:""},on:{click:function(n){return t.deleteShortLink(e.row.id)}}})]}}])})],1),t._v(" "),n("div",{staticClass:"paginator-container"},[n("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[10,20,30],"page-size":t.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.total,"hide-on-single-page":!0},on:{"size-change":t.handlePageSizeChange,"current-change":t.handleCurrentPageChange}})],1)],1)},o=[],i=n("bfad"),a=n("da71"),c=n("61f7"),l=n("2b0e"),s=n("b311"),u=n.n(s);function f(){l["default"].prototype.$message({message:"复制成功",type:"success",duration:1500})}function d(){l["default"].prototype.$message({message:"复制失败",type:"error"})}function m(t,e){var n=new u.a(e.target,{text:function(){return t}});n.on("success",(function(){f(),n.off("error"),n.off("success"),n.destroy()})),n.on("error",(function(){d(),n.off("error"),n.off("success"),n.destroy()})),n.onClick(e)}var h={name:"ShortLinkList",data:function(){var t=function(t,e,n){if(""===e)n(new Error("请输入目标链接"));else{if(!Object(c["b"])(e))return void n(new Error("这不是一个合法的目标链接"));n()}};return{landingHosts:[],list:[],total:0,currentPage:1,pageSize:20,createFormDrawer:!1,createForm:{url:"",description:"",is_enable:!1},createFormRules:{url:[{validator:t,trigger:"blur"}]},editFormDrawer:!1,editForm:{id:"",url:"",description:"",is_enable:!1,created_by:"",create_time:"",update_time:""},editFormRules:{url:[{validator:t,trigger:"blur"}]}}},created:function(){var t=this;Object(a["a"])().then((function(e){t.landingHosts=e.data.config.landingHosts,t.getList(t.currentPage)}))},methods:{goto:function(t){this.$router.push(t)},copyShortLink:function(t,e){m(t,e)},getList:function(t){var e=this;Object(i["c"])(t,this.pageSize).then((function(t){e.total=t.data.total,e.list=t.data.shortLinks,1!==e.currentPage&&0===e.list.length&&e.total>0&&(e.currentPage=1,e.getList(1))}))},resetCreateForm:function(){this.createForm.url="",this.createForm.description="",this.createForm.is_enable=!1},resetEditForm:function(){this.editForm.url="",this.editForm.description="",this.editForm.is_enable=!1,this.editForm.created_by="",this.editForm.create_time="",this.editForm.update_time=""},handlePageSizeChange:function(t){this.pageSize=t,this.currentPage=1,this.getList(1)},handleCurrentPageChange:function(t){this.currentPage=t,this.getList(t)},handleCreateFormDrawerClose:function(t){this.resetCreateForm(),t()},onCreateFormSubmit:function(){var t=this;this.$refs.createForm.validate((function(e){if(!e)return!1;Object(i["a"])(t.createForm).then((function(e){t.$refs.createFormDrawer.closeDrawer(),t.$notify({title:"添加短链接成功",message:"ID："+e.data.shortLink.id,type:"success"}),t.getList(t.currentPage)}))}))},onCreateFormCancel:function(){this.resetCreateForm(),this.createFormDrawer=!1},toEdit:function(t){var e=this;Object(i["d"])(t).then((function(t){e.editFormDrawer=!0,e.editForm=t.data.shortLink}))},handleEditFormDrawerClose:function(t){this.resetEditForm(),t()},onEditFormSubmit:function(){var t=this;this.$refs.editForm.validate((function(e){if(!e)return!1;Object(i["f"])(t.editForm.id,t.editForm).then((function(e){t.$refs.editFormDrawer.closeDrawer(),t.$notify({title:"更新成功",message:"ID："+e.data.shortLink.id,type:"success"}),t.getList(t.currentPage)}))}))},onEditFormCancel:function(){this.resetEditForm(),this.editFormDrawer=!1},deleteShortLink:function(t){var e=this;this.$confirm("此操作会永久删除短链接，是否继续？","删除确认",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(i["e"])(t).then((function(n){e.$notify({title:"成功删除短链接",message:"ID：".concat(t),type:"success"}),e.getList(e.currentPage)}))}))}}},p=h,b=(n("1969"),n("2877")),v=Object(b["a"])(p,r,o,!1,null,"75948d96",null);e["default"]=v.exports},b311:function(t,e,n){
/*!
 * clipboard.js v2.0.6
 * https://clipboardjs.com/
 * 
 * Licensed MIT © Zeno Rocha
 */
(function(e,n){t.exports=n()})(0,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e){function n(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var r=window.getSelection(),o=document.createRange();o.selectNodeContents(t),r.removeAllRanges(),r.addRange(o),e=r.toString()}return e}t.exports=n},function(t,e){function n(){}n.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var r=this;function o(){r.off(t,o),e.apply(n,arguments)}return o._=e,this.on(t,o,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,o=n.length;for(r;r<o;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],o=[];if(r&&e)for(var i=0,a=r.length;i<a;i++)r[i].fn!==e&&r[i].fn._!==e&&o.push(r[i]);return o.length?n[t]=o:delete n[t],this}},t.exports=n,t.exports.TinyEmitter=n},function(t,e,n){var r=n(3),o=n(4);function i(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!r.string(e))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(t))return a(t,e,n);if(r.nodeList(t))return c(t,e,n);if(r.string(t))return l(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function a(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function c(t,e,n){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,n)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,n)}))}}}function l(t,e,n){return o(document.body,t,e,n)}t.exports=i},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"===typeof t||t instanceof String},e.fn=function(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e}},function(t,e,n){var r=n(5);function o(t,e,n,r,o){var i=a.apply(this,arguments);return t.addEventListener(n,i,o),{destroy:function(){t.removeEventListener(n,i,o)}}}function i(t,e,n,r,i){return"function"===typeof t.addEventListener?o.apply(null,arguments):"function"===typeof n?o.bind(null,document).apply(null,arguments):("string"===typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return o(t,e,n,r,i)})))}function a(t,e,n,o){return function(n){n.delegateTarget=r(n.target,e),n.delegateTarget&&o.call(t,n)}}t.exports=i},function(t,e){var n=9;if("undefined"!==typeof Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}function o(t,e){while(t&&t.nodeType!==n){if("function"===typeof t.matches&&t.matches(e))return t;t=t.parentNode}}t.exports=o},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var l=function(){function t(e){c(this,t),this.resolveOptions(e),this.initSelection()}return a(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=o()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=o()(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==("undefined"===typeof t?"undefined":i(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}(),s=l,u=n(1),f=n.n(u),d=n(2),m=n.n(d),h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();function b(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function y(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var g=function(t){function e(t,n){b(this,e);var r=v(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return r.resolveOptions(n),r.listenClick(t),r}return y(e,t),p(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"===typeof t.action?t.action:this.defaultAction,this.target="function"===typeof t.target?t.target:this.defaultTarget,this.text="function"===typeof t.text?t.text:this.defaultText,this.container="object"===h(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=m()(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new s({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return _("action",t)}},{key:"defaultTarget",value:function(t){var e=_("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return _("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"===typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach((function(t){n=n&&!!document.queryCommandSupported(t)})),n}}]),e}(f.a);function _(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}e["default"]=g}])["default"]}))},bfad:function(t,e,n){"use strict";n.d(e,"d",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return a})),n.d(e,"e",(function(){return c})),n.d(e,"f",(function(){return l})),n.d(e,"b",(function(){return s}));var r=n("b775");function o(t){return Object(r["a"])({url:"/v1/short-link/".concat(t),method:"get"})}function i(t,e){return Object(r["a"])({url:"/v1/short-link/?page=".concat(t,"&pageSize=").concat(e),method:"get"})}function a(t){return Object(r["a"])({url:"/v1/short-link/",method:"post",data:t})}function c(t){return Object(r["a"])({url:"/v1/short-link/".concat(t),method:"delete"})}function l(t,e){return Object(r["a"])({url:"/v1/short-link/".concat(t),method:"patch",data:e})}function s(t){return Object(r["a"])({url:"/v1/short-link/".concat(t,"/latest-request-history"),method:"get"})}},d9a6:function(t,e,n){},da71:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i}));var r=n("b775");function o(){return Object(r["a"])({url:"/v1/config",method:"get"})}function i(t){return Object(r["a"])({url:"/v1/config",method:"patch",data:t})}}}]);