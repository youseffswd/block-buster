(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[7],{52:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"f",(function(){return l})),a.d(t,"d",(function(){return u})),a.d(t,"e",(function(){return p})),a.d(t,"b",(function(){return d})),a.d(t,"h",(function(){return f})),a.d(t,"l",(function(){return j})),a.d(t,"k",(function(){return b})),a.d(t,"m",(function(){return m})),a.d(t,"i",(function(){return h})),a.d(t,"c",(function(){return v})),a.d(t,"j",(function(){return x})),a.d(t,"g",(function(){return g}));var c=a(56),n=a.n(c),r=a(57),s=a(58),i=a.n(s),o=function(e,t){return function(){var a=Object(r.a)(n.a.mark((function a(c){var r,s;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(0!==e.length){a.next=4;break}a.t0=null,a.next=7;break;case 4:return a.next=6,i.a.get("https://api.themoviedb.org/3/search/multi?api_key=af64c5c103f265313a6fa2368d35c51a&query=".concat(e,"&page=").concat(t));case 6:a.t0=a.sent;case 7:r=a.t0,s=r&&r.data,c({type:"GET_AUTO_COMPLETE_SEARCH",payload:s});case 10:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},l=function(e,t){return function(){var a=Object(r.a)(n.a.mark((function a(c){var r,s;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(0!==e.length){a.next=4;break}a.t0=null,a.next=7;break;case 4:return a.next=6,i.a.get("https://api.themoviedb.org/3/search/multi?api_key=af64c5c103f265313a6fa2368d35c51a&query=".concat(e,"&page=").concat(t));case 6:a.t0=a.sent;case 7:r=a.t0,s=r&&r.data,c({type:"GET_SEARCH",payload:s});case 10:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},u=function(e){return function(){var t=Object(r.a)(n.a.mark((function t(a){var c,r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("https://api.themoviedb.org/3/movie/now_playing?api_key=af64c5c103f265313a6fa2368d35c51a&language=en-US&page=".concat(e));case 2:c=t.sent,r=c.data,a({type:"GET_NOW_PLAYING",payload:r});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(r.a)(n.a.mark((function t(a){var c,r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("https://api.themoviedb.org/3/movie/popular?api_key=af64c5c103f265313a6fa2368d35c51a&language=en-US&page=".concat(e));case 2:c=t.sent,r=c.data,a({type:"GET_POPULAR",payload:r});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(r.a)(n.a.mark((function t(a){var c,r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("https://api.themoviedb.org/3/movie/upcoming?api_key=af64c5c103f265313a6fa2368d35c51a&language=en-US&page=".concat(e));case 2:c=t.sent,r=c.data,a({type:"GET_COMING_SOON",payload:r});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(r.a)(n.a.mark((function t(a){var c,r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("https://api.themoviedb.org/3/movie/top_rated?api_key=af64c5c103f265313a6fa2368d35c51a&language=en-US&page=".concat(e));case 2:c=t.sent,r=c.data,a({type:"GET_TOP_RATED",payload:r});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(r.a)(n.a.mark((function t(a){var c,r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("https://api.themoviedb.org/3/tv/popular?api_key=af64c5c103f265313a6fa2368d35c51a&language=en-US&page=".concat(e));case 2:c=t.sent,r=c.data,a({type:"GET_TV_POPULAR",payload:r});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(r.a)(n.a.mark((function t(a){var c,r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("https://api.themoviedb.org/3/tv/on_the_air?api_key=af64c5c103f265313a6fa2368d35c51a&language=en-US&page=".concat(e));case 2:c=t.sent,r=c.data,a({type:"GET_TV_COMING_SOON",payload:r});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(r.a)(n.a.mark((function t(a){var c,r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("https://api.themoviedb.org/3/tv/top_rated?api_key=af64c5c103f265313a6fa2368d35c51a&language=en-US&page=".concat(e));case 2:c=t.sent,r=c.data,a({type:"GET_TV_TOP_RATED",payload:r});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(r.a)(n.a.mark((function t(a){var c,r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("https://api.themoviedb.org/3".concat(e,"?api_key=af64c5c103f265313a6fa2368d35c51a&language=en-US"));case 2:c=t.sent,r=c.data,a({type:"GET_TRAILER",payload:r});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(r.a)(n.a.mark((function t(a){var c,r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=4;break}a({type:"GET_MOVIE",payload:e}),t.next=9;break;case 4:return t.next=6,i.a.get("https://api.themoviedb.org/3/".concat(e,"?api_key=af64c5c103f265313a6fa2368d35c51a"));case 6:c=t.sent,r=c.data,a({type:"GET_MOVIE",payload:r});case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(r.a)(n.a.mark((function t(a){var c,r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=4;break}a({type:"GET_TV",payload:e}),t.next=9;break;case 4:return t.next=6,i.a.get("https://api.themoviedb.org/3/".concat(e,"?api_key=af64c5c103f265313a6fa2368d35c51a"));case 6:c=t.sent,r=c.data,a({type:"GET_TV",payload:r});case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(r.a)(n.a.mark((function t(a){var c,r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=4;break}a({type:"GET_SINGLE_TRAILER",payload:e}),t.next=9;break;case 4:return t.next=6,i.a.get("https://api.themoviedb.org/3".concat(e,"/videos?api_key=af64c5c103f265313a6fa2368d35c51a&language=en-US"));case 6:c=t.sent,r=c.data,a({type:"GET_SINGLE_TRAILER",payload:r});case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},55:function(e,t,a){"use strict";var c=a(14),n=a(53),r=a(1),s=a(22),i=a(23),o=a(2),l=Object(s.b)(null,{chooseVersion:function(e){return function(t){localStorage.setItem("version",e),t({type:"CHOOSE_VERSION",payload:e})}}})((function(e){var t=e.navClass,a=e.chooseVersion,s=Object(r.useState)(!1),l=Object(n.a)(s,2),u=l[0],p=l[1],d=Object(r.useRef)(null),f=function(){p(!1)};return Object(r.useEffect)((function(){localStorage.getItem("version")?(a(localStorage.getItem("version")),d.current.checked="light"===localStorage.getItem("version")):a("dark")}),[]),Object(o.jsxs)("nav",{className:"".concat(t," px-3 px-sm-4 px-md-5 py-2 py-sm-3 py-lg-4 d-flex align-items-center flex-wrap flex-lg-nowrap"),children:[Object(o.jsx)(i.c,{to:"/block-buster/",className:"logo",children:Object(o.jsx)("img",{className:"img-fluid",src:c.b,alt:"logo"})}),Object(o.jsx)("div",{onClick:function(){return p(!u)},className:"icon d-lg-none text-white flex-content-center flex-wrap",children:Object(o.jsxs)("div",{className:"father",children:[Object(o.jsx)("span",{className:u?"active1":""}),Object(o.jsx)("span",{className:u?"active2":""}),Object(o.jsx)("span",{className:u?"active3":""})]})}),Object(o.jsx)("div",{className:"".concat(u?"active":""," links-container "),children:Object(o.jsxs)("div",{className:"links",children:[Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{onClick:f,children:Object(o.jsx)(i.c,{exact:!0,to:"/block-buster/",activeClassName:"active",children:"Home"})}),Object(o.jsx)("li",{onClick:f,children:Object(o.jsx)(i.c,{to:"/block-buster/watch/movies",activeClassName:"active",children:"Movies"})}),Object(o.jsx)("li",{onClick:f,children:Object(o.jsx)(i.c,{to:"/block-buster/watch/tv",activeClassName:"active",children:"Tv"})}),Object(o.jsx)("li",{onClick:f,children:Object(o.jsx)(i.c,{to:"/block-buster/news",activeClassName:"active",children:"News"})}),Object(o.jsx)("li",{onClick:f,children:Object(o.jsx)(i.c,{to:"/block-buster/signup",activeClassName:"active",children:"Sign Up"})}),Object(o.jsx)("li",{onClick:f,children:Object(o.jsx)(i.c,{to:"block-buster/signin",activeClassName:"active",children:"Sign In"})})]}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(i.c,{className:"profile bg-primary text-uppercase",to:"/block-buster/profile",children:"YS"})}),Object(o.jsx)("li",{children:Object(o.jsx)("div",{className:"toggle-button-cover",children:Object(o.jsx)("div",{className:"button-cover",children:Object(o.jsxs)("div",{className:"button r",id:"button-3",children:[Object(o.jsx)("input",{type:"checkbox",onChange:function(e){e.target.checked?a("light"):a("dark")},ref:d,className:"checkbox"}),Object(o.jsx)("div",{className:"knobs"}),Object(o.jsx)("div",{className:"layer"})]})})})})]})]})})]})})),u=a(24),p=a(5),d=a(52),f=Object(s.b)(null,{getSingleTrailer:d.g,getTv:d.j,getMovie:d.c})((function(e){var t=e.results,a=(e.focussed,e.getSingleTrailer),c=e.getTv,n=e.getMovie;return Object(o.jsx)("div",{className:"results rela",children:Object(o.jsx)("ul",{className:"bg-nav text-capitalize",children:t&&t.map((function(e){var t=e.title,r=e.name,s=e.backdrop_path,l=e.id,u="tv"===e.media_type?"tv":"movies";return Object(o.jsx)("li",{children:Object(o.jsxs)(i.b,{onClick:function(){n(null),c(null),a(null)},className:"d-flex  p-2  flex-row align-items-center",to:"/block-buster/watch/".concat(u,"/").concat(l),children:[Object(o.jsx)("div",{className:"img mr-4",children:Object(o.jsx)("img",{className:"img-fluid",src:s?"https://image.tmdb.org/t/p/w200".concat(s):"",alt:"poster"})}),Object(o.jsxs)("p",{className:"m-0",children:[t||r," "]})]})},l)}))})})})),j=Object(s.b)((function(e){return{autoCompleteSearchResults:e.movies.autoCompleteSearchResults,value:e.input}}),{getSearch:d.f,getAutoCompleteSearch:d.a,handleInput:function(e){return{type:"HANDLE_INPUT",payload:e}}})((function(e){var t=e.className,a=e.getSearch,c=e.value,s=e.handleInput,i=e.autoCompleteSearchResults,l=e.getAutoCompleteSearch,d=Object(r.useState)(!1),j=Object(n.a)(d,2),b=j[0],m=j[1],h=Object(r.useState)(null),v=Object(n.a)(h,2),x=v[0],g=v[1],O=Object(r.useRef)(null),y=Object(p.g)();return Object(r.useEffect)((function(){return b&&g(i&&i.results.slice(0,5)),function(){b&&g(i&&i.results.slice(0,5))}}),[i]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("form",{className:"SearchBarForm",autoComplete:"off",onSubmit:function(e){e.preventDefault(),a(c,1),O.current.blur(),y.push("/search")},children:Object(o.jsxs)("div",{className:"".concat(t," rela input-group search-bar mt-3"),children:[Object(o.jsx)("div",{className:"input-group-prepend"}),Object(o.jsx)("input",{ref:O,onFocus:function(){g(i&&i.results.slice(0,5)),m(!0)},onBlur:function(){setTimeout((function(){g(null),m(!1)}),300)},type:"text",value:c,onChange:function(e){s(e.target.value),localStorage.setItem("searchValue",e.target.value),clearTimeout(),setTimeout((function(){l(e.target.value,1)}),500)},required:!0,className:"form-control search bg-nav",id:"inlineFormInputGroupUsername",placeholder:"Search..."}),Object(o.jsxs)("button",{type:"submit",children:[Object(o.jsx)(u.f,{})," "]})]})}),Object(o.jsx)(f,{focussed:b,results:x})]})})),b=a(49),m=a(59);t.a=function(e){var t=e.headerClass,a=e.children,n=e.searchClass,r=void 0===n?"":n,s=Object(m.a)({}),i=s.ref,u=s.inView,p=Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(l,{navClass:"".concat(u?"":"fixed")}),Object(o.jsx)(b.a,{className:r,children:Object(o.jsx)(j,{})})]});return Object(o.jsxs)("header",{ref:i,className:"".concat(t," "),style:{backgroundImage:"url(".concat(c.a,")")},children:[p,a]})}},99:function(e,t,a){"use strict";a.r(t);var c=a(53),n=a(1),r=a(52),s=a(22),i=a(25),o=a(49),l=a(50),u=a(51),p=a(55),d=a(24),f=a(94),j=a(2);t.default=Object(s.b)((function(e){return{movies:e.movies.movie,tv:e.movies.tv,version:e.version,trailer:e.movies.singleTrailer}}),{getMovie:r.c,getTv:r.j,getSingleTrailer:r.g})((function(e){var t=e.movies,a=e.tv,r=e.getMovie,s=e.getTv,b=e.match,m=e.trailer,h=e.getSingleTrailer,v=e.version,x=void 0===v?localStorage.getItem("version"):v,g=b.params,O=g.type,y=g.id,k=Object(n.useState)(null),N=Object(c.a)(k,2),w=N[0],_=N[1];Object(n.useEffect)((function(){"movies"===O?(r("movie/"+y),_(t)):(s("tv/"+y),_(a))}),[y]),Object(n.useEffect)((function(){_(e[O])}),[e[O]]);var T=m&&m.results.find((function(e){return"Trailer"===e.type}));if(w){var S=w.poster_path,C=w.overview,E=w.title,I=w.name,G=w.vote_average,R=w.release_date,U=w.first_air_date,A=w.production_companies;return Object(j.jsxs)("div",{className:"singleMovieOrTv  bg-".concat(x),children:[Object(j.jsxs)(p.a,{headerClass:"half",children:[Object(j.jsxs)("h2",{className:"mt-5 mb-3 text-center text-white font-weight-bold",children:[E||I,Object(j.jsxs)("small",{style:{fontSize:"18px"},className:"ml-3 text-pColor",children:[R||U," "]})]}),Object(j.jsxs)("div",{className:" rate d-flex justify-content-center align-items-center mb-0 ",children:[Object(j.jsx)("span",{children:Object(j.jsx)(d.e,{})}),Object(j.jsx)("big",{children:G}),Object(j.jsx)("small",{children:"/10"})]})]}),Object(j.jsx)(o.a,{className:"py-5",children:Object(j.jsxs)(l.a,{className:"py-5",children:[Object(j.jsx)(u.a,{xs:"12",children:T?Object(j.jsx)("iframe",{title:"trailer",style:{width:"100%",marginBottom:"30px"},height:"450",src:"https://www.youtube.com/embed/".concat(T.key),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):Object(j.jsx)("div",{})}),Object(j.jsx)(u.a,{className:"mb-5 mb-lg-0",xs:"12",lg:"4",children:Object(j.jsxs)("div",{className:"singleMovieCard px-3 ",children:[Object(j.jsx)("div",{className:"img text-center",children:Object(j.jsx)("img",{className:"img-fluid",src:"https://image.tmdb.org/t/p/w500".concat(S),alt:"poster"})}),Object(j.jsxs)("div",{className:"content p-4 bg-dark",children:[Object(j.jsxs)("button",{onClick:function(){return h("/".concat("movies"===O?"movie":"tv","/").concat(y))},className:"mb-3 py-2",children:[Object(j.jsxs)("span",{children:[Object(j.jsx)(d.d,{})," "]})," ",Object(j.jsx)("span",{children:"Watch Trailer"})]}),Object(j.jsxs)("button",{className:" py-2",children:[Object(j.jsxs)("span",{children:[Object(j.jsx)(f.a,{})," "]})," ",Object(j.jsx)("span",{children:"buy ticket"})]})]})]})}),Object(j.jsxs)(u.a,{xs:"12",lg:"8",className:"contentInfo ".concat(x),children:[Object(j.jsxs)("div",{className:"overview mb-4",children:[Object(j.jsx)("h4",{className:"text-white font-weight-bold title",children:"Overview"}),Object(j.jsxs)("p",{className:"text-pColor",children:[C," "]})]}),Object(j.jsxs)("div",{className:"companies",children:[Object(j.jsx)("h4",{className:"text-white font-weight-bold mb-4 title",children:"Companies"}),Object(j.jsx)(l.a,{children:A&&A.map((function(e){return Object(j.jsxs)(u.a,{className:"d-flex align-items-center flex-row mb-3",xs:"12",children:[Object(j.jsx)("div",{className:"img mr-4",children:Object(j.jsx)("img",{src:e.logo_path?"https://image.tmdb.org/t/p/w200"+e.logo_path:"",alt:"logo",className:"img-fluid"})}),Object(j.jsxs)("h4",{className:"m-0 name",children:[e.name,' "',Object(j.jsx)("span",{children:e.origin_country}),'"']})]},e.id)}))})]})]})]})})]})}return Object(j.jsx)(i.a,{})}))}}]);
//# sourceMappingURL=7.a5b19600.chunk.js.map