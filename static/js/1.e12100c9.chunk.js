(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[1],{52:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"f",(function(){return u})),n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return d})),n.d(t,"b",(function(){return v})),n.d(t,"h",(function(){return p})),n.d(t,"l",(function(){return j})),n.d(t,"k",(function(){return f})),n.d(t,"m",(function(){return b})),n.d(t,"i",(function(){return m})),n.d(t,"c",(function(){return g})),n.d(t,"j",(function(){return h})),n.d(t,"g",(function(){return O}));var a=n(56),c=n.n(a),i=n(57),r=n(58),s=n.n(r),o=function(e,t){return function(){var n=Object(i.a)(c.a.mark((function n(a){var i,r;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(0!==e.length){n.next=4;break}n.t0=null,n.next=7;break;case 4:return n.next=6,s.a.get("https://api.themoviedb.org/3/search/multi?api_key=af64c5c103f265313a6fa2368d35c51a&query=".concat(e,"&page=").concat(t));case 6:n.t0=n.sent;case 7:i=n.t0,r=i&&i.data,a({type:"GET_AUTO_COMPLETE_SEARCH",payload:r});case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},u=function(e,t){return function(){var n=Object(i.a)(c.a.mark((function n(a){var i,r;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(0!==e.length){n.next=4;break}n.t0=null,n.next=7;break;case 4:return n.next=6,s.a.get("https://api.themoviedb.org/3/search/multi?api_key=af64c5c103f265313a6fa2368d35c51a&query=".concat(e,"&page=").concat(t));case 6:n.t0=n.sent;case 7:i=n.t0,r=i&&i.data,a({type:"GET_SEARCH",payload:r});case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},l=function(e){return function(){var t=Object(i.a)(c.a.mark((function t(n){var a,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("https://api.themoviedb.org/3/movie/now_playing?api_key=af64c5c103f265313a6fa2368d35c51a&language=en-US&page=".concat(e));case 2:a=t.sent,i=a.data,n({type:"GET_NOW_PLAYING",payload:i});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(i.a)(c.a.mark((function t(n){var a,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("https://api.themoviedb.org/3/movie/popular?api_key=af64c5c103f265313a6fa2368d35c51a&language=en-US&page=".concat(e));case 2:a=t.sent,i=a.data,n({type:"GET_POPULAR",payload:i});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(i.a)(c.a.mark((function t(n){var a,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("https://api.themoviedb.org/3/movie/upcoming?api_key=af64c5c103f265313a6fa2368d35c51a&language=en-US&page=".concat(e));case 2:a=t.sent,i=a.data,n({type:"GET_COMING_SOON",payload:i});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(i.a)(c.a.mark((function t(n){var a,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("https://api.themoviedb.org/3/movie/top_rated?api_key=af64c5c103f265313a6fa2368d35c51a&language=en-US&page=".concat(e));case 2:a=t.sent,i=a.data,n({type:"GET_TOP_RATED",payload:i});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(i.a)(c.a.mark((function t(n){var a,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("https://api.themoviedb.org/3/tv/popular?api_key=af64c5c103f265313a6fa2368d35c51a&language=en-US&page=".concat(e));case 2:a=t.sent,i=a.data,n({type:"GET_TV_POPULAR",payload:i});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(i.a)(c.a.mark((function t(n){var a,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("https://api.themoviedb.org/3/tv/on_the_air?api_key=af64c5c103f265313a6fa2368d35c51a&language=en-US&page=".concat(e));case 2:a=t.sent,i=a.data,n({type:"GET_TV_COMING_SOON",payload:i});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(i.a)(c.a.mark((function t(n){var a,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("https://api.themoviedb.org/3/tv/top_rated?api_key=af64c5c103f265313a6fa2368d35c51a&language=en-US&page=".concat(e));case 2:a=t.sent,i=a.data,n({type:"GET_TV_TOP_RATED",payload:i});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(i.a)(c.a.mark((function t(n){var a,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.get("https://api.themoviedb.org/3".concat(e,"?api_key=af64c5c103f265313a6fa2368d35c51a&language=en-US"));case 2:a=t.sent,i=a.data,n({type:"GET_TRAILER",payload:i});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(i.a)(c.a.mark((function t(n){var a,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=4;break}n({type:"GET_MOVIE",payload:e}),t.next=9;break;case 4:return t.next=6,s.a.get("https://api.themoviedb.org/3/".concat(e,"?api_key=af64c5c103f265313a6fa2368d35c51a"));case 6:a=t.sent,i=a.data,n({type:"GET_MOVIE",payload:i});case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(i.a)(c.a.mark((function t(n){var a,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=4;break}n({type:"GET_TV",payload:e}),t.next=9;break;case 4:return t.next=6,s.a.get("https://api.themoviedb.org/3/".concat(e,"?api_key=af64c5c103f265313a6fa2368d35c51a"));case 6:a=t.sent,i=a.data,n({type:"GET_TV",payload:i});case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(i.a)(c.a.mark((function t(n){var a,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=4;break}n({type:"GET_SINGLE_TRAILER",payload:e}),t.next=9;break;case 4:return t.next=6,s.a.get("https://api.themoviedb.org/3".concat(e,"/videos?api_key=af64c5c103f265313a6fa2368d35c51a&language=en-US"));case 6:a=t.sent,i=a.data,n({type:"GET_SINGLE_TRAILER",payload:i});case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},55:function(e,t,n){"use strict";var a=n(14),c=n(53),i=n(1),r=n(22),s=n(23),o=n(2),u=Object(r.b)(null,{chooseVersion:function(e){return function(t){localStorage.setItem("version",e),t({type:"CHOOSE_VERSION",payload:e})}}})((function(e){var t=e.navClass,n=e.chooseVersion,r=Object(i.useState)(!1),u=Object(c.a)(r,2),l=u[0],d=u[1],v=Object(i.useRef)(null),p=function(){d(!1)};return Object(i.useEffect)((function(){localStorage.getItem("version")?(n(localStorage.getItem("version")),v.current.checked="light"===localStorage.getItem("version")):n("dark")}),[]),Object(o.jsxs)("nav",{className:"".concat(t," px-3 px-sm-4 px-md-5 py-2 py-sm-3 py-lg-4 d-flex align-items-center flex-wrap flex-lg-nowrap"),children:[Object(o.jsx)(s.c,{to:"/home",className:"logo",children:Object(o.jsx)("img",{className:"img-fluid",src:a.b,alt:"logo"})}),Object(o.jsx)("div",{onClick:function(){return d(!l)},className:"icon d-lg-none text-white flex-content-center flex-wrap",children:Object(o.jsxs)("div",{className:"father",children:[Object(o.jsx)("span",{className:l?"active1":""}),Object(o.jsx)("span",{className:l?"active2":""}),Object(o.jsx)("span",{className:l?"active3":""})]})}),Object(o.jsx)("div",{className:"".concat(l?"active":""," links-container "),children:Object(o.jsxs)("div",{className:"links",children:[Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{onClick:p,children:Object(o.jsx)(s.c,{exact:!0,to:"/",activeClassName:"active",children:"Home"})}),Object(o.jsx)("li",{onClick:p,children:Object(o.jsx)(s.c,{to:"/watch/movies",activeClassName:"active",children:"Movies"})}),Object(o.jsx)("li",{onClick:p,children:Object(o.jsx)(s.c,{to:"/watch/tv",activeClassName:"active",children:"Tv"})}),Object(o.jsx)("li",{onClick:p,children:Object(o.jsx)(s.c,{to:"/news",activeClassName:"active",children:"News"})}),Object(o.jsx)("li",{onClick:p,children:Object(o.jsx)(s.c,{to:"/signup",activeClassName:"active",children:"Sign Up"})}),Object(o.jsx)("li",{onClick:p,children:Object(o.jsx)(s.c,{to:"/signin",activeClassName:"active",children:"Sign In"})})]}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(s.c,{className:"profile bg-primary text-uppercase",to:"/profile",children:"YS"})}),Object(o.jsx)("li",{children:Object(o.jsx)("div",{className:"toggle-button-cover",children:Object(o.jsx)("div",{className:"button-cover",children:Object(o.jsxs)("div",{className:"button r",id:"button-3",children:[Object(o.jsx)("input",{type:"checkbox",onChange:function(e){e.target.checked?n("light"):n("dark")},ref:v,className:"checkbox"}),Object(o.jsx)("div",{className:"knobs"}),Object(o.jsx)("div",{className:"layer"})]})})})})]})]})})]})})),l=n(24),d=n(5),v=n(52),p=Object(r.b)(null,{getSingleTrailer:v.g,getTv:v.j,getMovie:v.c})((function(e){var t=e.results,n=(e.focussed,e.getSingleTrailer),a=e.getTv,c=e.getMovie;return Object(o.jsx)("div",{className:"results rela",children:Object(o.jsx)("ul",{className:"bg-nav text-capitalize",children:t&&t.map((function(e){var t=e.title,i=e.name,r=e.backdrop_path,u=e.id,l="tv"===e.media_type?"tv":"movies";return Object(o.jsx)("li",{children:Object(o.jsxs)(s.b,{onClick:function(){c(null),a(null),n(null)},className:"d-flex  p-2  flex-row align-items-center",to:"/watch/".concat(l,"/").concat(u),children:[Object(o.jsx)("div",{className:"img mr-4",children:Object(o.jsx)("img",{className:"img-fluid",src:r?"https://image.tmdb.org/t/p/w200".concat(r):"",alt:"poster"})}),Object(o.jsxs)("p",{className:"m-0",children:[t||i," "]})]})},u)}))})})})),j=Object(r.b)((function(e){return{autoCompleteSearchResults:e.movies.autoCompleteSearchResults,value:e.input}}),{getSearch:v.f,getAutoCompleteSearch:v.a,handleInput:function(e){return{type:"HANDLE_INPUT",payload:e}}})((function(e){var t=e.className,n=e.getSearch,a=e.value,r=e.handleInput,s=e.autoCompleteSearchResults,u=e.getAutoCompleteSearch,v=Object(i.useState)(!1),j=Object(c.a)(v,2),f=j[0],b=j[1],m=Object(i.useState)(null),g=Object(c.a)(m,2),h=g[0],O=g[1],x=Object(i.useRef)(null),k=Object(d.g)();return Object(i.useEffect)((function(){return f&&O(s&&s.results.slice(0,5)),function(){f&&O(s&&s.results.slice(0,5))}}),[s]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("form",{className:"SearchBarForm",autoComplete:"off",onSubmit:function(e){e.preventDefault(),n(a,1),x.current.blur(),k.push("/search")},children:Object(o.jsxs)("div",{className:"".concat(t," rela input-group search-bar mt-3"),children:[Object(o.jsx)("div",{className:"input-group-prepend"}),Object(o.jsx)("input",{ref:x,onFocus:function(){O(s&&s.results.slice(0,5)),b(!0)},onBlur:function(){setTimeout((function(){O(null),b(!1)}),300)},type:"text",value:a,onChange:function(e){r(e.target.value),localStorage.setItem("searchValue",e.target.value),clearTimeout(),setTimeout((function(){u(e.target.value,1)}),500)},required:!0,className:"form-control search bg-nav",id:"inlineFormInputGroupUsername",placeholder:"Search..."}),Object(o.jsxs)("button",{type:"submit",children:[Object(o.jsx)(l.f,{})," "]})]})}),Object(o.jsx)(p,{focussed:f,results:h})]})})),f=n(49),b=n(59);t.a=function(e){var t=e.headerClass,n=e.children,c=e.searchClass,i=void 0===c?"":c,r=Object(b.a)({}),s=r.ref,l=r.inView,d=Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(u,{navClass:"".concat(l?"":"fixed")}),Object(o.jsx)(f.a,{className:i,children:Object(o.jsx)(j,{})})]});return Object(o.jsxs)("header",{ref:s,className:"".concat(t," "),style:{backgroundImage:"url(".concat(a.a,")")},children:[d,n]})}},61:function(e,t,n){"use strict";var a=n(24),c=n(23),i=n(22),r=n(52),s=n(2);t.a=Object(i.b)((function(e){return{version:e.version}}),{getSingleTrailer:r.g,getMovie:r.c,getTv:r.j})((function(e){var t=e.movie,n=e.version,i=void 0===n?localStorage.getItem("version"):n,r=e.kind,o=e.getSingleTrailer,u=e.getMovie,l=e.getTv,d=t.title,v=t.poster_path,p=t.vote_average,j=t.id,f=t.name;return Object(s.jsxs)(c.b,{onClick:function(){o(null),l(null),u(null)},to:"/watch/".concat(r,"/").concat(j),className:"movieCard",children:[Object(s.jsx)("div",{className:"img  mb-2 text-center",children:v?Object(s.jsx)("img",{className:"img-fluid",src:"".concat("https://image.tmdb.org/t/p/w200").concat(v),alt:"poster"}):Object(s.jsx)("div",{className:"mx-auto",children:"no poster available"})}),Object(s.jsxs)("div",{className:"".concat(i," info  "),children:[Object(s.jsxs)("h4",{className:" mb-2 ",children:[d||f," "]}),Object(s.jsxs)("div",{className:" d-flex justify-content-center align-items-center mb-0 ",children:[Object(s.jsx)("span",{children:Object(s.jsx)(a.e,{})}),Object(s.jsx)("big",{children:p}),Object(s.jsx)("small",{children:"/10"})]})]})]})}))},62:function(e,t,n){"use strict";var a=n(53),c=n(1),i=n(24),r=n(2);t.a=function(e){var t=e.version,n=e.startingPage,s=e.total,o=e.getPage,u=e.type,l=void 0===u?null:u,d=Object(c.useState)(n),v=Object(a.a)(d,2),p=v[0],j=v[1],f=function(e,t){clearTimeout(),setTimeout((function(){"increase"===e?p<s&&(j(p+t),o(p+t)):p>1&&(j(p-1),o(p-1))}),500)};return Object(c.useEffect)((function(){j(1),o(1)}),[l]),Object(c.useEffect)((function(){j(1),o(1)}),[s]),Object(r.jsxs)("div",{className:"".concat(t," mt-4 mx-auto PagesButtons"),children:[Object(r.jsxs)("button",{className:"".concat(1===p?"disable":""),onClick:function(){return f("descrease")},children:[Object(r.jsx)(i.a,{})," "]}),Object(r.jsxs)("button",{className:"active",children:[p," "]}),Object(r.jsxs)("button",{className:"".concat(p+1>s?"disable":""),onClick:function(){return f("increase",1)},children:[p+1," "]}),Object(r.jsxs)("button",{className:"".concat(p+2>s?"disable":""),onClick:function(){return f("increase",2)},children:[p+2," "]}),Object(r.jsxs)("button",{className:"".concat(p+1>s?"disable":""),onClick:function(){return f("increase",1)},children:[Object(r.jsx)(i.b,{})," "]})]})}},73:function(e,t,n){"use strict";var a=n(4),c=n(53),i=n(1),r=n(61),s=n(2),o=function(){return Object(s.jsxs)("div",{className:"movieCardLoading",children:[Object(s.jsx)("div",{className:"img  rela mb-2"}),Object(s.jsx)("div",{className:" mb-2 rela title ",children:" "}),Object(s.jsx)("div",{className:" stars rela  "})]})},u=n(50),l=n(51),d=n(22),v=n(105),p=n(97),j=n(52),f=function(e,t,n,a,c){return window.innerWidth<576?e:window.innerWidth<768&&window.innerWidth>=576?t:window.innerWidth<992&&window.innerWidth>=768?n:window.innerWidth<1200&&window.innerWidth>=992?a:c};t.a=Object(d.b)(null,{getTrailer:j.i})((function(e){var t=e.movies,n=e.loop,d=e.trailer,j=e.kind,b=Object(i.useState)({height:window.innerHeight,width:window.innerWidth}),m=Object(c.a)(b,2)[1];window.addEventListener("resize",(function(){m({height:window.innerHeight,width:window.innerWidth})}));var g=Object(i.useState)({activeMovie:null,trailer:d}),h=Object(c.a)(g,2),O=h[0],x=h[1];return Object(i.useEffect)((function(){x((function(e){return Object(a.a)(Object(a.a)({},e),{},{trailer:d})}))}),[d]),t?Object(s.jsx)(v.a,{navigation:!0,spaceBetween:f(15,20,20,20,20),slidesPerView:f(2,2,3,4,5),loop:n,centeredSlides:!n,children:t&&t.results.map((function(t,n){return Object(s.jsx)(p.a,{children:d?Object(s.jsxs)("div",{id:t.id,onClick:function(){return n=t.id,void(d&&d.id===n||(e.getTrailer("/movie/".concat(n,"/videos")),x({activeMovie:n,trailer:d})));var n},className:"".concat(t.id===O.activeMovie?"active":"","  recommends text-center d-flex align-items-center flex-wrap"),children:[Object(s.jsx)("div",{className:"img w-100",children:Object(s.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(t.backdrop_path),alt:"poster",className:"img-fluid"})}),Object(s.jsx)("div",{className:"text-center w-100 mt-2",children:Object(s.jsxs)("h5",{className:"",children:[t.title," "]})})]}):Object(s.jsx)(r.a,{kind:j,movie:t})},n)}))}):Object(s.jsxs)(u.a,{children:[Object(s.jsx)(l.a,{xs:"6",md:"4",lg:"3",children:Object(s.jsx)(o,{})}),Object(s.jsx)(l.a,{xs:"6",md:"4",lg:"3",children:Object(s.jsx)(o,{})}),Object(s.jsx)(l.a,{className:"d-none d-md-block",md:"4",lg:"3",children:Object(s.jsx)(o,{})}),Object(s.jsx)(l.a,{className:"d-none d-lg-block",lg:"3",children:Object(s.jsx)(o,{})})]})}))},74:function(e,t,n){"use strict";var a=n(53),c=n(1),i=n(4),r=n(52),s=n(22),o=n(2),u=Object(s.b)((function(e){return{version:e.version,popular:e.movies.popular,comingSoon:e.movies.comingSoon,topRated:e.movies.topRated,tvPopular:e.movies.tvPopular,tvComingSoon:e.movies.tvComingSoon,tvTopRated:e.movies.tvTopRated}}),{getPopular:r.e,getComingSoon:r.b,getTopRated:r.h,getTvPopular:r.l,getTvComingSoon:r.k,getTvTopRated:r.m})((function(e){var t=e.getMTType,n=e.kind,r=e.popular,s=e.tvPopular,u=e.comingSoon,l=e.topRated,d=e.tvComingSoon,v=e.tvTopRated,p=e.version,j=void 0===p?localStorage.getItem("version"):p,f=e.page,b=Object(c.useState)({moviesLinks:[{id:0,content:"#popular",data:"popular",func:"getPopular"},{id:1,content:"#coming soon",data:"comingSoon",func:"getComingSoon"},{id:2,content:"#top rated",data:"topRated",func:"getTopRated"}],tvLinks:[{id:0,content:"#popular",data:"tvPopular",func:"getTvPopular"},{id:1,content:"#coming soon",data:"tvComingSoon",func:"getTvComingSoon"},{id:2,content:"#top rated",data:"tvTopRated",func:"getTvTopRated"}],activeLinkMovie:0,activeLinkTv:0}),m=Object(a.a)(b,2),g=m[0],h=m[1],O=Object(c.useState)({movies:r,tv:s}),x=Object(a.a)(O,2),k=x[0],y=x[1],N={popular:r,comingSoon:u,topRated:l},w={tvPopular:s,tvComingSoon:d,tvTopRated:v},T=function(n,a,c){"movie"===c?g.activeLinkMovie!==n&&(h(Object(i.a)(Object(i.a)({},g),{},{activeLinkMovie:n})),N[g.moviesLinks[n].data]||e[g.moviesLinks[n].func](1),y((function(e){return Object(i.a)(Object(i.a)({},e),{},{movies:N[g.moviesLinks[n].data]})})),t(Object(i.a)(Object(i.a)({},k),{},{movies:N[g.moviesLinks[n].data]}))):g.activeLinkTv!==a&&(h(Object(i.a)(Object(i.a)({},g),{},{activeLinkTv:a})),w[g.tvLinks[a].data]||e[g.tvLinks[a].func](1),y((function(e){return Object(i.a)(Object(i.a)({},k),{},{tv:w[g.tvLinks[a].data]})})),t(Object(i.a)(Object(i.a)({},k),{},{tv:w[g.tvLinks[a].data]})))};return Object(c.useEffect)((function(){y((function(e){return Object(i.a)(Object(i.a)({},e),{},{movies:N[g.moviesLinks[g.activeLinkMovie].data]})})),t(Object(i.a)(Object(i.a)({},k),{},{movies:N[g.moviesLinks[g.activeLinkMovie].data]}))}),[N[g.moviesLinks[g.activeLinkMovie].data]]),Object(c.useEffect)((function(){y(Object(i.a)(Object(i.a)({},k),{},{tv:w[g.tvLinks[g.activeLinkTv].data]})),t(Object(i.a)(Object(i.a)({},k),{},{tv:w[g.tvLinks[g.activeLinkTv].data]}))}),[w[g.tvLinks[g.activeLinkTv].data]]),Object(c.useEffect)((function(){"movies"===n?e[g.moviesLinks[g.activeLinkMovie].func](f):e[g.tvLinks[g.activeLinkTv].func](f)}),[f]),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("ul",{className:"type ".concat(j," mb-5 text-capitalize"),children:"movies"===n?Object(o.jsx)(o.Fragment,{children:g.moviesLinks.map((function(e,t){return Object(o.jsxs)("li",{className:"".concat(e.id===g.activeLinkMovie?"active":""," d-md-inline-block text-pColor"),onClick:function(){return T(e.id,g.activeLinkTv,"movie")},children:[e.content," "]},t)}))}):Object(o.jsx)(o.Fragment,{children:g.tvLinks.map((function(e,t){return Object(o.jsxs)("li",{className:"".concat(e.id===g.activeLinkTv?"active":""," d-md-inline-block text-pColor"),onClick:function(){return T(g.activeLinkMovie,e.id,"tv")},children:[e.content," "]},t)}))})})})})),l=n(73),d=n(50),v=n(51),p=n(61),j=n(62);t.a=Object(s.b)((function(e){return{popular:e.movies.popular,tvPopular:e.movies.tvPopular,version:e.version}}))((function(e){var t=e.kind,n=e.popular,i=e.tvPopular,r=e.version,s=void 0===r?localStorage.getItem("version"):r,f=e.slider,b=void 0===f||f,m=Object(c.useState)({movies:n,tv:i}),g=Object(a.a)(m,2),h=g[0],O=g[1],x=Object(c.useState)(1),k=Object(a.a)(x,2),y=k[0],N=k[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(u,{kind:t,getMTType:function(e){O(e)},page:y}),b?Object(o.jsx)("div",{className:"slider mb-5",children:Object(o.jsx)(l.a,{kind:t,movies:"movies"===t?h.movies:h.tv,loop:!1,trailer:!1})}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(d.a,{children:h[t]&&h[t].results.map((function(e){return Object(o.jsx)(v.a,{className:"mb-4 mx-auto",xs:"6",md:"4",lg:"3",children:Object(o.jsx)(p.a,{kind:t,movie:e,version:s})},e.id)}))}),Object(o.jsx)(j.a,{getPage:function(e){N(e)},type:t,startingPage:h[t]&&h[t].page,total:h[t]&&h[t].total_pages,version:s})]})]})}))}}]);
//# sourceMappingURL=1.e12100c9.chunk.js.map