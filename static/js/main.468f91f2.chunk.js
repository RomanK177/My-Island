(this["webpackJsonpmy-island"]=this["webpackJsonpmy-island"]||[]).push([[0],{26:function(n,t,e){},28:function(n,t,e){},29:function(n,t,e){},31:function(n,t,e){},32:function(n,t,e){},33:function(n,t,e){},53:function(n,t,e){"use strict";e.r(t);var c=e(2),a=e.n(c),o=e(19),i=e.n(o),r=(e(26),e(10)),u=e.n(r),s=e(20),l=e(21),j=e(8),d=(e(28),e(29),e(0)),f=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"Welcome To My Island!"})})},b=e(4),p=(e(31),function(n){var t=n.onBuild,e=Object(c.useState)({i:0,j:0}),a=Object(j.a)(e,2),o=a[0],i=a[1],r=o.i,u=o.j;return Object(d.jsxs)("div",{className:"m-input",children:[Object(d.jsx)("input",{className:"inputI",type:"number",defaultValue:r,onChange:function(n){var t=n.target.value;i((function(n){return Object(b.a)(Object(b.a)({},n),{},{i:t})}))}}),Object(d.jsx)("input",{className:"inputJ",type:"number",defaultValue:u,onChange:function(n){var t=n.target.value;i((function(n){return Object(b.a)(Object(b.a)({},n),{},{j:t})}))}}),Object(d.jsx)("button",{onClick:function(){return t({i:r,j:u})},children:"Build Island!"})]})}),h=(e(32),e.p+"static/media/land.b5895e0a.jpg"),O=e.p+"static/media/water.a1ab9f65.jpg",m=function(n){var t=n.cell,e=n.changeLand;function c(n){"click"===n.type&&e(t.row,t.col),"mouseenter"===n.type&&1===n.buttons&&e(t.row,t.col),"mousedown"===n.type&&e(t.row,t.col)}return Object(d.jsx)("div",{onDragStart:function(n){n.preventDefault()},onMouseEnter:c,onMouseDown:c,className:"cell",children:Object(d.jsx)("img",{src:t.isLand?h:O,alt:""})})},x=(e(33),function(n){var t=n.board,e=n.changeLand;return Object(d.jsx)("div",{className:"matrix-build flex column align-center",children:t.map((function(n,t){return Object(d.jsx)("div",{className:"row flex",children:n.map((function(n,c){return Object(d.jsx)(m,{cell:n,changeLand:e},"Row: ".concat(t," Column: ").concat(c))}))},t)}))})}),g=e(34).default;var v=function(){var n=Object(c.useState)([]),t=Object(j.a)(n,2),e=t[0],a=t[1];function o(){return(o=Object(s.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.post("http://localhost:5000/",e).then((function(n){console.log("return from backend",n.data)})).catch((function(n){console.log("zcdsd",n)})).then((function(){}));case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(f,{}),Object(d.jsx)(p,{onBuild:function(n){for(var t=n.i,e=n.j,c=[],o=0;o<t;o++){for(var i=[],r=0;r<e;r++)i.push({row:o,col:r,isLand:!1});c.push(i)}a(c)}}),Object(d.jsx)(x,{board:e,changeLand:function(n,t){var c=Object(l.a)(e);c[n][t].isLand=!c[n][t].isLand,a(c)}}),Object(d.jsx)("button",{onClick:function(){return o.apply(this,arguments)},children:"Get Bigest Island"})]})},w=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,54)).then((function(t){var e=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;e(n),c(n),a(n),o(n),i(n)}))};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),w()}},[[53,1,2]]]);
//# sourceMappingURL=main.468f91f2.chunk.js.map