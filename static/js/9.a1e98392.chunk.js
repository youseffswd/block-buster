(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[9],{104:function(e,t,a){"use strict";a.r(t);var n=a(55),c=a(23),r=a(2);t.default=function(e){return Object(r.jsx)("div",{className:"signin",children:Object(r.jsx)(n.a,{searchClass:"d-none",headerClass:"full",children:Object(r.jsxs)("form",{children:[Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"email",children:"Email address"}),Object(r.jsx)("input",{required:!0,type:"email",className:"form-control",id:"email","aria-describedby":"emailHelp"})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{htmlFor:"password",children:"Password"}),Object(r.jsx)("input",{required:!0,type:"password",className:"form-control",id:"password"})]}),Object(r.jsx)("button",{type:"submit",className:"btn btn-pink",children:"Submit"}),Object(r.jsxs)("small",{id:"emailHelp",className:" mt-3 form-text text-muted",children:["You Don't Have an Account"," ",Object(r.jsx)(c.b,{to:"/signup",children:"Sign Up"})," "]}),Object(r.jsx)("div",{className:"my-3 alert alert-danger ".concat(e.auth?"":"noDanger"),role:"alert"})]})})})}},52:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"f",(function(){return u})),a.d(t,"d",(function(){return l})),a.d(t,"e",(function(){return p})),a.d(t,"b",(function(){return f})),a.d(t,"h",(function(){return d})),a.d(t,"l",(function(){return j})),a.d(t,"k",(function(){return h})),a.d(t,"m",(function(){return b})),a.d(t,"i",(function(){return m})),a.d(t,"c",(function(){return v})),a.d(t,"j",(function(){return g})),a.d(t,"g",(function(){return x}));var n=a(56),c=a.n(n),r=a(57),s=a(58),i=a.n(s),o=function(e,t){return function(){var a=Object(r.a)(c.a.mark((function a(n){var r,s;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(0!==e.length){a.next=4;break}a.t0=null,a.next=7;break;case 4:return a.next=6,i.a.get("https://api.themoviedb.org/3/search/multi?api_key=af64c5c103f265313a6fa2368d35c51a&query=".concat(e,"&page=").concat(t));case 6:a.t0=a.sent;case 7:r=a.t0,s=r&&r.data,n({type:"GET_AUTO_COMPLETE_SEARCH",payload:s});case 10:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},u=function(e,t){return function(){var a=Object(r.a)(c.a.mark((function a(n){var r,s;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(0!==e.length){a.next=4;break}a.t0=null,a.next=7;break;case 4:return a.next=6,i.a.get("https://api.themoviedb.org/3/search/multi?api_key=af64c5c103f265313a6fa2368d35c51a&query=".concat(e,"&page=").concat(t));case 6:a.t0=a.sent;case 7:r=a.t0,s=r&&r.data,n({type:"GET_SEARCH",payload:s});case 10:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},l=function(e){return function(){var t=Object(r.a)(c.a.mark((function t(a){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("https://api.themoviedb.org/3/movie/now_playing?api_key=af64c5c103f265313a6fa2368d35c51a&language=en-US&page=".concat(e));case 2:n=t.sent,r=n.data,a({type:"GET_NOW_PLAYING",payload:r});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(r.a)(c.a.mark((function t(a){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("https://api.themoviedb.org/3/movie/popular?api_key=af64c5c103f265313a6fa2368d35c51a&language=en-US&page=".concat(e));case 2:n=t.sent,r=n.data,a({type:"GET_POPULAR",payload:r});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(r.a)(c.a.mark((function t(a){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("https://api.themoviedb.org/3/movie/upcoming?api_key=af64c5c103f265313a6fa2368d35c51a&language=en-US&page=".concat(e));case 2:n=t.sent,r=n.data,a({type:"GET_COMING_SOON",payload:r});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(r.a)(c.a.mark((function t(a){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("https://api.themoviedb.org/3/movie/top_rated?api_key=af64c5c103f265313a6fa2368d35c51a&language=en-US&page=".concat(e));case 2:n=t.sent,r=n.data,a({type:"GET_TOP_RATED",payload:r});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(r.a)(c.a.mark((function t(a){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("https://api.themoviedb.org/3/tv/popular?api_key=af64c5c103f265313a6fa2368d35c51a&language=en-US&page=".concat(e));case 2:n=t.sent,r=n.data,a({type:"GET_TV_POPULAR",payload:r});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(r.a)(c.a.mark((function t(a){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("https://api.themoviedb.org/3/tv/on_the_air?api_key=af64c5c103f265313a6fa2368d35c51a&language=en-US&page=".concat(e));case 2:n=t.sent,r=n.data,a({type:"GET_TV_COMING_SOON",payload:r});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(r.a)(c.a.mark((function t(a){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("https://api.themoviedb.org/3/tv/top_rated?api_key=af64c5c103f265313a6fa2368d35c51a&language=en-US&page=".concat(e));case 2:n=t.sent,r=n.data,a({type:"GET_TV_TOP_RATED",payload:r});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(r.a)(c.a.mark((function t(a){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("https://api.themoviedb.org/3".concat(e,"?api_key=af64c5c103f265313a6fa2368d35c51a&language=en-US"));case 2:n=t.sent,r=n.data,a({type:"GET_TRAILER",payload:r});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(r.a)(c.a.mark((function t(a){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=4;break}a({type:"GET_MOVIE",payload:e}),t.next=9;break;case 4:return t.next=6,i.a.get("https://api.themoviedb.org/3/".concat(e,"?api_key=af64c5c103f265313a6fa2368d35c51a"));case 6:n=t.sent,r=n.data,a({type:"GET_MOVIE",payload:r});case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(r.a)(c.a.mark((function t(a){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=4;break}a({type:"GET_TV",payload:e}),t.next=9;break;case 4:return t.next=6,i.a.get("https://api.themoviedb.org/3/".concat(e,"?api_key=af64c5c103f265313a6fa2368d35c51a"));case 6:n=t.sent,r=n.data,a({type:"GET_TV",payload:r});case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(r.a)(c.a.mark((function t(a){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=4;break}a({type:"GET_SINGLE_TRAILER",payload:e}),t.next=9;break;case 4:return t.next=6,i.a.get("https://api.themoviedb.org/3".concat(e,"/videos?api_key=af64c5c103f265313a6fa2368d35c51a&language=en-US"));case 6:n=t.sent,r=n.data,a({type:"GET_SINGLE_TRAILER",payload:r});case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},55:function(e,t,a){"use strict";var n=a(14),c=a(53),r=a(1),s=a(22),i=a(23),o=a(2),u=Object(s.b)(null,{chooseVersion:function(e){return function(t){localStorage.setItem("version",e),t({type:"CHOOSE_VERSION",payload:e})}}})((function(e){var t=e.navClass,a=e.chooseVersion,s=Object(r.useState)(!1),u=Object(c.a)(s,2),l=u[0],p=u[1],f=Object(r.useRef)(null),d=function(){p(!1)};return Object(r.useEffect)((function(){localStorage.getItem("version")?(a(localStorage.getItem("version")),f.current.checked="light"===localStorage.getItem("version")):a("dark")}),[]),Object(o.jsxs)("nav",{className:"".concat(t," px-3 px-sm-4 px-md-5 py-2 py-sm-3 py-lg-4 d-flex align-items-center flex-wrap flex-lg-nowrap"),children:[Object(o.jsx)(i.c,{to:"/home",className:"logo",children:Object(o.jsx)("img",{className:"img-fluid",src:n.b,alt:"logo"})}),Object(o.jsx)("div",{onClick:function(){return p(!l)},className:"icon d-lg-none text-white flex-content-center flex-wrap",children:Object(o.jsxs)("div",{className:"father",children:[Object(o.jsx)("span",{className:l?"active1":""}),Object(o.jsx)("span",{className:l?"active2":""}),Object(o.jsx)("span",{className:l?"active3":""})]})}),Object(o.jsx)("div",{className:"".concat(l?"active":""," links-container "),children:Object(o.jsxs)("div",{className:"links",children:[Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{onClick:d,children:Object(o.jsx)(i.c,{exact:!0,to:"/",activeClassName:"active",children:"Home"})}),Object(o.jsx)("li",{onClick:d,children:Object(o.jsx)(i.c,{to:"/watch/movies",activeClassName:"active",children:"Movies"})}),Object(o.jsx)("li",{onClick:d,children:Object(o.jsx)(i.c,{to:"/watch/tv",activeClassName:"active",children:"Tv"})}),Object(o.jsx)("li",{onClick:d,children:Object(o.jsx)(i.c,{to:"/news",activeClassName:"active",children:"News"})}),Object(o.jsx)("li",{onClick:d,children:Object(o.jsx)(i.c,{to:"/signup",activeClassName:"active",children:"Sign Up"})}),Object(o.jsx)("li",{onClick:d,children:Object(o.jsx)(i.c,{to:"/signin",activeClassName:"active",children:"Sign In"})})]}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(i.c,{className:"profile bg-primary text-uppercase",to:"/profile",children:"YS"})}),Object(o.jsx)("li",{children:Object(o.jsx)("div",{className:"toggle-button-cover",children:Object(o.jsx)("div",{className:"button-cover",children:Object(o.jsxs)("div",{className:"button r",id:"button-3",children:[Object(o.jsx)("input",{type:"checkbox",onChange:function(e){e.target.checked?a("light"):a("dark")},ref:f,className:"checkbox"}),Object(o.jsx)("div",{className:"knobs"}),Object(o.jsx)("div",{className:"layer"})]})})})})]})]})})]})})),l=a(24),p=a(5),f=a(52),d=Object(s.b)(null,{getSingleTrailer:f.g,getTv:f.j,getMovie:f.c})((function(e){var t=e.results,a=(e.focussed,e.getSingleTrailer),n=e.getTv,c=e.getMovie;return Object(o.jsx)("div",{className:"results rela",children:Object(o.jsx)("ul",{className:"bg-nav text-capitalize",children:t&&t.map((function(e){var t=e.title,r=e.name,s=e.backdrop_path,u=e.id,l="tv"===e.media_type?"tv":"movies";return Object(o.jsx)("li",{children:Object(o.jsxs)(i.b,{onClick:function(){c(null),n(null),a(null)},className:"d-flex  p-2  flex-row align-items-center",to:"/watch/".concat(l,"/").concat(u),children:[Object(o.jsx)("div",{className:"img mr-4",children:Object(o.jsx)("img",{className:"img-fluid",src:s?"https://image.tmdb.org/t/p/w200".concat(s):"",alt:"poster"})}),Object(o.jsxs)("p",{className:"m-0",children:[t||r," "]})]})},u)}))})})})),j=Object(s.b)((function(e){return{autoCompleteSearchResults:e.movies.autoCompleteSearchResults,value:e.input}}),{getSearch:f.f,getAutoCompleteSearch:f.a,handleInput:function(e){return{type:"HANDLE_INPUT",payload:e}}})((function(e){var t=e.className,a=e.getSearch,n=e.value,s=e.handleInput,i=e.autoCompleteSearchResults,u=e.getAutoCompleteSearch,f=Object(r.useState)(!1),j=Object(c.a)(f,2),h=j[0],b=j[1],m=Object(r.useState)(null),v=Object(c.a)(m,2),g=v[0],x=v[1],O=Object(r.useRef)(null),y=Object(p.g)();return Object(r.useEffect)((function(){return h&&x(i&&i.results.slice(0,5)),function(){h&&x(i&&i.results.slice(0,5))}}),[i]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("form",{className:"SearchBarForm",autoComplete:"off",onSubmit:function(e){e.preventDefault(),a(n,1),O.current.blur(),y.push("/search")},children:Object(o.jsxs)("div",{className:"".concat(t," rela input-group search-bar mt-3"),children:[Object(o.jsx)("div",{className:"input-group-prepend"}),Object(o.jsx)("input",{ref:O,onFocus:function(){x(i&&i.results.slice(0,5)),b(!0)},onBlur:function(){setTimeout((function(){x(null),b(!1)}),300)},type:"text",value:n,onChange:function(e){s(e.target.value),localStorage.setItem("searchValue",e.target.value),clearTimeout(),setTimeout((function(){u(e.target.value,1)}),500)},required:!0,className:"form-control search bg-nav",id:"inlineFormInputGroupUsername",placeholder:"Search..."}),Object(o.jsxs)("button",{type:"submit",children:[Object(o.jsx)(l.f,{})," "]})]})}),Object(o.jsx)(d,{focussed:h,results:g})]})})),h=a(49),b=a(59);t.a=function(e){var t=e.headerClass,a=e.children,c=e.searchClass,r=void 0===c?"":c,s=Object(b.a)({}),i=s.ref,l=s.inView,p=Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(u,{navClass:"".concat(l?"":"fixed")}),Object(o.jsx)(h.a,{className:r,children:Object(o.jsx)(j,{})})]});return Object(o.jsxs)("header",{ref:i,className:"".concat(t," "),style:{backgroundImage:"url(".concat(n.a,")")},children:[p,a]})}}}]);
//# sourceMappingURL=9.a1e98392.chunk.js.map