(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[7],{280:function(e,t,a){"use strict";a.r(t);var n=a(14),o=a(18),s=a(0),r=a.n(s),c=a(257),i=a(84),l=a(20),p=a(269),u=a.n(p),b=a(85),m=a(62),d=(a(83),[{name:"Casino",selector:"brand",sortable:!0},{name:"Clicks",selector:"clicks",sortable:!0},{name:"Registrations",selector:"registrations",sortable:!0},{name:"FTDS",selector:"ftds",sortable:!0},{name:"Deposits",selector:"deposits",sortable:!0},{name:"Net Cash",selector:"net_cash",sortable:!0},{name:"Commission",selector:"commission",sortable:!0},{name:"No of deposits",selector:"no_of_deposits",sortable:!0}]);t.default=function(){var e=Object(s.useState)({daily:[]}),t=Object(o.a)(e,2),a=t[0],p=t[1],f=Object(s.useState)(!1),g=Object(o.a)(f,2),h=g[0],j=g[1],O=Object(s.useState)(0),C=Object(o.a)(O,2),k=C[0],v=C[1],y=Object(l.c)((function(e){return e.auth.currentUser.token})),_=Object(s.useCallback)((function(e){j(!0);var t={token:y,page:e};m.b.fetchDataFromServer(Object(n.a)({type:"casinos_daily"},t)).then((function(e){var t=e.data,a=t.reports,n=t.total_count;console.log(a),p({daily:a}),v(n),setTimeout((function(){j(!1)}),1e3)})).catch((function(){p({daily:{error:!0}})}))}),[y]);return Object(s.useEffect)((function(){_(1)}),[_]),r.a.createElement(c.a,null,r.a.createElement(i.a,{title:"Reports"}),r.a.createElement("div",{className:"data__wrapper"},r.a.createElement(u.a,{title:"Casinos Daily",columns:d,data:a.daily,progressPending:h,pagination:!0,paginationServer:!0,paginationPerPage:20,paginationTotalRows:k,onChangePage:function(e){_(e)},progressComponent:r.a.createElement(b.a,null)})))}}}]);
//# sourceMappingURL=7.ad58985f.chunk.js.map