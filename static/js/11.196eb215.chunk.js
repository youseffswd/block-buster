(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[11],{96:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c(52),l=c(22),i=c(49),r=c(50),n=c(51),o=c(23),j=c(55),d=c(73),b=c(24),p=c(74),x=c(2);t.default=Object(l.b)((function(e){return{nowPlaying:e.movies.nowPlaying,version:e.version,popular:e.movies.popular,tvPopular:e.movies.tvPopular,trailer:e.movies.trailer}}),{getNowPlaying:a.d,getPopular:a.e,getTvPopular:a.l})((function(e){var t=e.nowPlaying,c=e.version,a=e.popular,l=e.trailer;Object(s.useEffect)((function(){e.getNowPlaying(1),e.getPopular(1),e.getTvPopular(1)}),[]);var h=l&&l.results.find((function(e){return"Trailer"===e.type}));return Object(x.jsxs)("div",{className:"home",children:[Object(x.jsx)(j.a,{headerClass:"full",children:Object(x.jsx)(i.a,{className:"pt-5",children:Object(x.jsx)("div",{className:"slider pt-5",children:Object(x.jsx)(d.a,{kind:"movies",movies:t,loop:!0,trailer:!1})})})}),Object(x.jsx)("div",{className:"movieAtv section-padding bg-".concat(c),children:Object(x.jsxs)(i.a,{children:[Object(x.jsxs)("div",{className:"title mb-3 d-flex align-items-center ".concat(c),children:[Object(x.jsx)("h3",{className:"m-0 text-uppercase",children:"in theater"}),Object(x.jsxs)(o.b,{to:"/watch/movies",className:"text-uppercase ml-auto font-weight-bold text-pColor",children:["view all ",Object(x.jsxs)("span",{children:[Object(x.jsx)(b.b,{})," "]})," "]})]}),Object(x.jsx)(p.a,{kind:"movies"}),Object(x.jsxs)("div",{className:"title mb-3 d-flex align-items-center ".concat(c),children:[Object(x.jsx)("h3",{className:"m-0 text-uppercase",children:"in theater"}),Object(x.jsxs)(o.b,{to:"/watch/tv",className:"text-uppercase ml-auto font-weight-bold text-pColor",children:["view all ",Object(x.jsxs)("span",{children:[Object(x.jsx)(b.b,{})," "]})," "]})]}),Object(x.jsx)(p.a,{kind:"tv"})]})}),Object(x.jsx)("div",{className:"trailers bg-".concat(c,"-light section-padding"),children:Object(x.jsxs)(i.a,{children:[Object(x.jsxs)("div",{className:"title mb-3 d-flex align-items-center ".concat(c),children:[Object(x.jsx)("h3",{className:"m-0 text-uppercase",children:"choose trailer to watch"}),Object(x.jsxs)(o.b,{to:"/watch/movies",className:"text-uppercase ml-auto font-weight-bold text-pColor",children:["view all ",Object(x.jsxs)("span",{children:[Object(x.jsx)(b.b,{})," "]})," "]})]}),Object(x.jsxs)(r.a,{children:[Object(x.jsx)(n.a,{className:"trailer",xs:"12",children:h?Object(x.jsx)("iframe",{title:"trailer",height:"450",src:"https://www.youtube.com/embed/".concat(h.key),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):Object(x.jsx)("div",{})}),Object(x.jsx)(n.a,{xs:"12",children:Object(x.jsx)("div",{className:"options ".concat(c),children:Object(x.jsx)(d.a,{movies:a,loop:!1,trailer:!0})})})]})]})})]})}))}}]);
//# sourceMappingURL=11.196eb215.chunk.js.map