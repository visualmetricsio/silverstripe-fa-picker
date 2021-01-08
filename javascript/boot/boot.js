!function(e){var t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t){e.exports=React},function(e,t){e.exports=PropTypes},function(e,t){e.exports=Injector},function(e,t){e.exports=classnames},function(e,t){e.exports=ReactDom},function(e,t){e.exports=jQuery},function(e,t){e.exports=schemaFieldValues},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(2),o=n.n(r),l=n(3),s=n.n(l),c=n(1),u=n.n(c);function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=h(e);if(t){var i=h(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return g(this,n)}}function g(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(o,e);var t,n,a,r=y(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=r.call(this,e)).state={value:e.value},t.handleClick=t.handleClick.bind(m(t)),t}return t=o,(n=[{key:"handleClick",value:function(e){"function"==typeof this.props.onChange&&this.props.onChange({value:e})}},{key:"render",value:function(){var e=this,t=this.props,n=t.iconValue,a=t.className,r=t.tooltip;return i.a.createElement("div",{class:"fapicker-icons__holder__fullicon"},i.a.createElement("div",{className:s()(a,"fapicker-icons__holder__icon"),title:r,onClick:function(){return e.handleClick(n.fullName)}},i.a.createElement("i",{class:n.fullName})),i.a.createElement("div",null,n.shortName))}}])&&f(t.prototype,n),a&&f(t,a),o}(a.Component);v.defaultProps={imageUrl:"",width:0,height:0,tooltip:"",onChange:null};var P=v;var d={kPagination:"styles_kPagination__1qVvD",kPaginationListItemHorizontal:"styles_kPaginationListItemHorizontal__2lTp3",kPaginationListItemVertical:"styles_kPaginationListItemVertical__q-2s5",kPaginationListPage:"styles_kPaginationListPage__2_6Ph",kPaginationActive:"styles_kPaginationActive__A_vb-",kPaginationJumpNext:"styles_kPaginationJumpNext__2qX6c",kPaginationJumpPrev:"styles_kPaginationJumpPrev__HSEv6",kPaginationPrev:"styles_kPaginationPrev__3Rw4o",kPaginationNext:"styles_kPaginationNext__eysRZ",kPaginationItem:"styles_kPaginationItem__3pBF9",kPrevDisabled:"styles_kPrevDisabled__7uvNZ",kNextDisabled:"styles_kNextDisabled__1rUP6",kiconLeft:"styles_kiconLeft__VaKJc",kiconRight:"styles_kiconRight__3jfFT"};!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&a.firstChild?a.insertBefore(i,a.firstChild):a.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".styles_kPagination__1qVvD {\n  padding: 0.5rem;\n  display: flex;\n  flex-direction: column; }\n  .styles_kPagination__1qVvD .styles_kPaginationListItemHorizontal__2lTp3 {\n    display: flex;\n    flex-direction: row; }\n  .styles_kPagination__1qVvD .styles_kPaginationListItemVertical__q-2s5 {\n    display: flex;\n    flex-direction: column; }\n  .styles_kPagination__1qVvD .styles_kPaginationListPage__2_6Ph {\n    padding-left: 0;\n    margin: 5px 0; }\n    .styles_kPagination__1qVvD .styles_kPaginationListPage__2_6Ph li {\n      float: left;\n      list-style: none;\n      margin: 0 4px;\n      cursor: pointer; }\n    .styles_kPagination__1qVvD .styles_kPaginationListPage__2_6Ph .styles_kPaginationActive__A_vb- {\n      color: #2196f3;\n      border-color: #2196f3 !important; }\n    .styles_kPagination__1qVvD .styles_kPaginationListPage__2_6Ph .styles_kPaginationJumpNext__2qX6c,\n    .styles_kPagination__1qVvD .styles_kPaginationListPage__2_6Ph .styles_kPaginationJumpPrev__HSEv6 {\n      border: 0 !important;\n      font-size: 12px; }\n      .styles_kPagination__1qVvD .styles_kPaginationListPage__2_6Ph .styles_kPaginationJumpNext__2qX6c i,\n      .styles_kPagination__1qVvD .styles_kPaginationListPage__2_6Ph .styles_kPaginationJumpPrev__HSEv6 i {\n        opacity: 0;\n        position: absolute;\n        transition: all 200ms ease; }\n      .styles_kPagination__1qVvD .styles_kPaginationListPage__2_6Ph .styles_kPaginationJumpNext__2qX6c a,\n      .styles_kPagination__1qVvD .styles_kPaginationListPage__2_6Ph .styles_kPaginationJumpPrev__HSEv6 a {\n        opacity: 1;\n        position: absolute;\n        transition: all 200ms ease; }\n      .styles_kPagination__1qVvD .styles_kPaginationListPage__2_6Ph .styles_kPaginationJumpNext__2qX6c:hover i,\n      .styles_kPagination__1qVvD .styles_kPaginationListPage__2_6Ph .styles_kPaginationJumpPrev__HSEv6:hover i {\n        opacity: 1; }\n      .styles_kPagination__1qVvD .styles_kPaginationListPage__2_6Ph .styles_kPaginationJumpNext__2qX6c:hover a,\n      .styles_kPagination__1qVvD .styles_kPaginationListPage__2_6Ph .styles_kPaginationJumpPrev__HSEv6:hover a {\n        opacity: 0; }\n    .styles_kPagination__1qVvD .styles_kPaginationListPage__2_6Ph .styles_kPaginationPrev__3Rw4o,\n    .styles_kPagination__1qVvD .styles_kPaginationListPage__2_6Ph .styles_kPaginationNext__eysRZ,\n    .styles_kPagination__1qVvD .styles_kPaginationListPage__2_6Ph .styles_kPaginationItem__3pBF9 {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      min-width: 32px;\n      height: 32px;\n      text-align: center;\n      list-style: none;\n      background-color: #fff;\n      border: 1px solid #d9d9d9;\n      border-radius: 4px;\n      outline: 0;\n      cursor: pointer;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none; }\n      .styles_kPagination__1qVvD .styles_kPaginationListPage__2_6Ph .styles_kPaginationPrev__3Rw4o:hover,\n      .styles_kPagination__1qVvD .styles_kPaginationListPage__2_6Ph .styles_kPaginationNext__eysRZ:hover,\n      .styles_kPagination__1qVvD .styles_kPaginationListPage__2_6Ph .styles_kPaginationItem__3pBF9:hover {\n        color: #2196f3;\n        border-color: #2196f3 !important; }\n    .styles_kPagination__1qVvD .styles_kPaginationListPage__2_6Ph .styles_kPrevDisabled__7uvNZ,\n    .styles_kPagination__1qVvD .styles_kPaginationListPage__2_6Ph .styles_kNextDisabled__1rUP6 {\n      cursor: not-allowed;\n      color: #e8e6e6; }\n    .styles_kPagination__1qVvD .styles_kPaginationListPage__2_6Ph .styles_kiconLeft__VaKJc,\n    .styles_kPagination__1qVvD .styles_kPaginationListPage__2_6Ph .styles_kiconRight__3jfFT {\n      font-size: 12px; }\n");var k=1,b=Object(a.memo)((function(e){var t=e.data,n=e.pageSize,i=e.layout,r=Object(a.useState)([]),o=r[0],l=r[1],s=Object(a.useState)([]),c=s[0],u=s[1],_=Object(a.useState)(1),f=_[0],p=_[1],y=Object(a.useState)(!1),g=y[0],m=y[1],h=Object(a.useState)(1),v=h[0],P=h[1];Object(a.useEffect)((function(){var e=b(t,1,n||0),a=e.arrayList,i=e.totalPage,r=e.pageCurrent;u(i>5?Array.from(Array(5).keys()).slice():Array.from(Array(i).keys()).slice()),l(a),p(i),P(r)}),[n,t]);var b=function(e,t,n){var a={totalPage:1,arrayList:[],arrayAll:e,nextPage:1,prePage:1,pageCurrent:1};if(e.length>0){var i=Math.ceil(e.length/n),r=t&&t&&0!==t?t<=i?t:i:1,o=r<i?r+1:r,l=r>1?r-1:r,s=0!==n?e.slice((t-1)*n,t*n):e;a.totalPage=i,a.arrayList=s,a.nextPage=o,a.prePage=l,a.pageCurrent=r}return a},O=function(e,t){return 1!==e||g?f-5<5||5*e>f?f-(5-t):5*e-(5-t):t},j=function(e,a){var i=b(t,e,n||0).arrayList;P(e),l(i),function(e){for(var t=document.querySelectorAll(".k-pagination-item"),n=0,a=Array.from(t);n<a.length;n++){var i=a[n];i.classList.remove(d.kPaginationActive);var r=i.getAttribute("title");r&&r==e&&i.classList.add(d.kPaginationActive)}}(e),a&&(k="first"===a?1:Math.ceil(f/5))},E=function(){1!==v&&(P(--v),j(v)),f%5==0?v%5==0&&k--:k===Math.ceil(f/5)?f-v==5&&k--:v%5==0&&k--},L=function(){v!==f&&(P(++v),j(v)),v%5==1&&k++};return Object(a.createElement)(a.Fragment,null,Object(a.createElement)("div",{className:d.kPagination},Object(a.createElement)("div",{className:"vertical"===i?d.kPaginationListItemVertical:d.kPaginationListItemHorizontal},o.map((function(t,n){return e.renderItem(t,n)}))),t.length>0&&(n&&0!==n?Object(a.createElement)("ul",{className:d.kPaginationListPage},Object(a.createElement)("li",{className:d.kPaginationPrev+" "+(1!==v?"":""+d.kPrevDisabled),onClick:E},Object(a.createElement)("i",{className:d.kicon+" "+d.kiconLeft},Object(a.createElement)("svg",{viewBox:"64 64 896 896",focusable:"false","data-icon":"left",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},Object(a.createElement)("path",{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"})))),function(e){var t=e,n=Object(a.createElement)("li",{key:t,title:""+t,onClick:function(){return j(t,"last")},className:d.kPaginationItem},t),i=Object(a.createElement)("li",{key:1,title:"1",onClick:function(){return j(1,"first")},className:d.kPaginationItem+" "+(1===v?d.kPaginationActive:"")},1),r=null,o=null,l=function(t){var n;t?(P(n=(n=5*k-4)===e?n-4:n),j(n)):(P(n=e-4),j(n))};e>5&&(r=Object(a.createElement)("li",{key:"jump_next",onClick:function(){var t=!0;c.length+5>e?(t=!1,m(!0)):k++,u(Array.from(Array(5).keys()).slice()),l(t)},title:"Jump Next",className:d.kPaginationItem+" "+d.kPaginationJumpNext},Object(a.createElement)("i",null,Object(a.createElement)("svg",{viewBox:"64 64 896 896",focusable:"false","data-icon":"double-right",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},Object(a.createElement)("path",{d:"M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 0 0 188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 0 0 492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z"}))),Object(a.createElement)("a",null,"•••")),o=Object(a.createElement)("li",{key:"jump_prev",onClick:function(){var t=!0;c.length+5>e?(t=!1,m(!1)):k--,u(Array.from(Array(5).keys()).slice()),l(t)},title:"Jump Prev",className:d.kPaginationItem+" "+d.kPaginationJumpPrev},Object(a.createElement)("i",null,Object(a.createElement)("svg",{viewBox:"64 64 896 896",focusable:"false","data-icon":"double-left",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},Object(a.createElement)("path",{d:"M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 0 0 0 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 0 0 0 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z"}))),Object(a.createElement)("a",null,"•••")));var s=c.map((function(e,t){var n=O(k,++t);return Object(a.createElement)("li",{title:""+n,className:d.kPaginationItem+" "+(v===n?d.kPaginationActive:""),onClick:function(){return j(n)},key:n},n)}));if(e>5){var _=Object(a.createElement)(a.Fragment,{key:"wrap_jump_next"},5*k<e?Object(a.createElement)(a.Fragment,null,r,n):null),f=Object(a.createElement)(a.Fragment,{key:"wrap_jump_prev"},i,o);(k>1||g)&&s.unshift(f),g||s.push(_)}return s}(f),Object(a.createElement)("li",{className:d.kPaginationNext+" "+(v!==f?"":""+d.kNextDisabled),onClick:L},Object(a.createElement)("i",{className:d.kicon+" "+d.kiconRight},Object(a.createElement)("svg",{viewBox:"64 64 896 896",focusable:"false","data-icon":"right",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},Object(a.createElement)("path",{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"}))))):Object(a.createElement)("div",null))))}));b.propTypes={data:u.a.array.isRequired,layout:u.a.string,renderItem:u.a.func.isRequired,pageSize:u.a.number.isRequired,onChange:u.a.func},b.defaultProps={data:[],pageSize:0,layout:"vertical",renderItem:void 0,onChange:void 0};var O=b;function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){x(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function V(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=S(e);if(t){var i=S(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return w(this,n)}}function w(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?N(e):t}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(o,e);var t,n,a,r=V(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=r.call(this,e)).state={value:e.value?e.value:"",iconList:e.data.iconList?e.data.iconList:null,filteredList:e.data.iconList?e.data.iconList:null,iconVersion:e.data.iconVersion?e.data.iconVersion:null,iconTotal:e.data.iconTotal?e.data.iconTotal:null,activeFilterType:"all",searchValue:null},t.handleChange=t.handleChange.bind(N(t)),t.handleFilterTypeClick=t.handleFilterTypeClick.bind(N(t)),t.searchIcons=t.searchIcons.bind(N(t)),t}return t=o,(n=[{key:"componentDidMount",value:function(){console.log("hello world")}},{key:"handleChange",value:function(e){var t=e.value,n=this.props,a=n.onAutofill,i=n.name;this.setState({value:t});var r=t;"function"==typeof a&&a("".concat(i),r)}},{key:"handleFilterTypeClick",value:function(e){this.setState({filteredList:this.filterByType(e),activeFilterType:e,searchValue:""})}},{key:"filterByType",value:function(e){return"all"==e?this.state.iconList:this.state.iconList.filter((function(t){return t.type.includes(e)}))}},{key:"searchIcons",value:function(e){var t="";t=""===e?this.filterByType(this.state.activeFilterType):this.filterByType(this.state.activeFilterType).filter((function(t){return t.shortName.includes(e)})),this.setState({filteredList:t,searchValue:e})}},{key:"render",value:function(){var e=this,t=this.state,n=t.value,a=t.filteredList,r=t.iconVersion,o=t.iconTotal,l=t.searchValue,c=this.props.FieldGroup,u=L(L({},this.props),{},{className:s()("fapicker-field")});return a.map((function(t){return i.a.createElement(P,{className:e.state.value==t.fullName?"active":null,iconValue:t,onChange:e.handleChange})})),i.a.createElement(c,u,i.a.createElement("div",{class:"fapicker-icons"},i.a.createElement("div",{class:"fapicker-icons__search-holder"},i.a.createElement("span",{class:"fapicker-icons__holder__icon"},i.a.createElement("i",{class:n})),i.a.createElement("input",{type:"text",value:l,class:"text",placeholder:"Filter...",onChange:function(t){return e.searchIcons(t.target.value)}})),i.a.createElement("ul",{class:"fapicker-icons__type-selector"},i.a.createElement("li",{onClick:function(){return e.handleFilterTypeClick("all")},class:"all"==this.state.activeFilterType?"active":null},"All"),i.a.createElement("li",{onClick:function(){return e.handleFilterTypeClick("fas")},class:"fas"==this.state.activeFilterType?"active":null},"Solid"),i.a.createElement("li",{onClick:function(){return e.handleFilterTypeClick("far")},class:"far"==this.state.activeFilterType?"active":null},"Regular"),i.a.createElement("li",{onClick:function(){return e.handleFilterTypeClick("fal")},class:"fal"==this.state.activeFilterType?"active":null},"Light"),i.a.createElement("li",{onClick:function(){return e.handleFilterTypeClick("fad")},class:"fad"==this.state.activeFilterType?"active":null},"Duotone"),i.a.createElement("li",{onClick:function(){return e.handleFilterTypeClick("fab")},class:"fab"==this.state.activeFilterType?"active":null},"Brands")),i.a.createElement("div",{class:"fapicker-icons__holder"},i.a.createElement(O,{data:a,pageSize:100,renderItem:function(t,n){return i.a.createElement(P,{className:e.state.value==t.fullName?"active":null,iconValue:t,onChange:e.handleChange})}})),i.a.createElement("div",{class:"fapicker-icons__bottom"},i.a.createElement("span",{class:"small version"},"Version ",i.a.createElement("strong",null,r)),i.a.createElement("span",{class:"small icons"},i.a.createElement("strong",null,o)," Icons"))))}}])&&C(t.prototype,n),a&&C(t,a),o}(a.Component);T.defaultProps={extraClass:"",value:""},T.propTypes={extraClass:u.a.string,id:u.a.string,name:u.a.string.isRequired,children:u.a.array.isRequired,onAutofill:u.a.func,onChange:u.a.func,value:u.a.string,readOnly:u.a.bool};var q=Object(r.inject)(["FieldGroup"])(T),F=function(){o.a.component.register("FAPickerField",q)},A=n(5),R=n.n(A),I=n(4),J=n.n(I),z=n(6);function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}R.a.entwine("ss",(function(e){e(".fa-holder input.fapicker.text").entwine({Component:null,getContainer:function(){var t=this.siblings(".fa-holder")[0];if(!t){var n=e('<div class="fa-holder"></div>');this.before(n),t=n[0]}return t},onunmatch:function(){this._super(),J.a.unmountComponentAtNode(this.siblings(".fa-holder")[0])},onmatch:function(){var e=this.closest(".cms-content").attr("id"),t=e?{context:e}:{},n=Object(r.loadComponent)("FAPickerField",t);this.setComponent(n),this._super(),this.hide(),this.refresh()},onclick:function(e){e.preventDefault()},refresh:function(){var t=this.getAttributes(),n=(e(this).closest("form"),this.getComponent());J.a.render(i.a.createElement(n,H({},t,{onAutofill:function(t,n){var a=e('input[name="'+t+'"]');a&&a.val(n)},noHolder:!0})),this.getContainer())},getAttributes:function(){var t=e(this).data("state"),n=e(this).data("schema");return Object(z.schemaMerge)(n,t)}})})),document.addEventListener("DOMContentLoaded",(function(){F()}))}]);
//# sourceMappingURL=boot.js.map