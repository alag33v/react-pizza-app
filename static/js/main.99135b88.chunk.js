(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{47:function(t,e,c){},48:function(t,e,c){"use strict";c.r(e);var n=c(0),i=c(1),a=c.n(i),s=c(18),r=c(10),o=c(5),l=c(4),j=c.p+"static/media/pizza-logo.56ac8703.svg",d=function(){var t=Object(o.c)((function(t){return t.cart})),e=t.totalPrice,c=t.itemsCount;return Object(n.jsx)("div",{className:"header",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(r.b,{to:"/react-pizza-app",children:Object(n.jsxs)("div",{className:"header__logo",children:[Object(n.jsx)("img",{width:"38",src:j,alt:"Pizza logo"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"React Pizza"}),Object(n.jsx)("p",{children:"\u0441\u0430\u043c\u0430\u044f \u0432\u043a\u0443\u0441\u043d\u0430\u044f \u043f\u0438\u0446\u0446\u0430 \u0432\u043e \u0432\u0441\u0435\u043b\u0435\u043d\u043d\u043e\u0439"})]})]})}),Object(n.jsx)("div",{className:"header__cart",children:Object(n.jsx)(r.b,{to:"/cart",children:Object(n.jsxs)(E,{className:"button--cart",children:[Object(n.jsxs)("span",{children:[e," \u20bd"]}),Object(n.jsx)("div",{className:"button__delimiter"}),Object(n.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(n.jsx)("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(n.jsx)("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(n.jsx)("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),Object(n.jsx)("span",{children:c})]})})})]})})},b=c(2),u="SET_SORT_BY",h="SET_CATEGORY",p="SET_SORT",O={sortBy:"popularity",categoryNames:["\u041c\u044f\u0441\u043d\u044b\u0435","\u0412\u0435\u0433\u0435\u0442\u0430\u0440\u0438\u0430\u043d\u0441\u043a\u0430\u044f","\u0413\u0440\u0438\u043b\u044c","\u041e\u0441\u0442\u0440\u044b\u0435","\u0417\u0430\u043a\u0440\u044b\u0442\u044b\u0435"],categoryActive:null,sortTitles:[{name:"\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u0438",type:"popularity"},{name:"\u0446\u0435\u043d\u0435",type:"price"}],sortActive:0},x=function(t){return{type:h,payload:t}},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case u:return Object(b.a)(Object(b.a)({},t),{},{sortBy:e.payload});case h:return Object(b.a)(Object(b.a)({},t),{},{categoryActive:e.payload});case p:return Object(b.a)(Object(b.a)({},t),{},{sortActive:e.payload});default:return t}},z=c(28),C=c.n(z),v=c(32),f="SET_PIZZAS",g="SHOW_LOADER",_="HIDE_LOADER",k={pizzas:[],isLoading:!1},w=function(t){return function(){var e=Object(v.a)(C.a.mark((function e(c){var n,i,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c({type:g}),e.prev=1,e.next=4,fetch("https://my-api-test-2021.herokuapp.com/pizzas");case 4:return n=e.sent,e.next=7,n.json();case 7:i=e.sent,a=i.filter((function(e){if("number"===typeof t)return e.category===t;if("string"===typeof t){if("price"===t)return i.sort((function(t,e){return e.price-t.price}));if("popularity"===t)return i.sort((function(t,e){return e.rating-t.rating}))}return e})),c({type:f,payload:a}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log("error",e.t0);case 15:return e.prev=15,c({type:_}),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[1,12,15,18]])})));return function(t){return e.apply(this,arguments)}}()},y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case f:return Object(b.a)(Object(b.a)({},t),{},{pizzas:e.payload});case g:return Object(b.a)(Object(b.a)({},t),{},{isLoading:!0});case _:return Object(b.a)(Object(b.a)({},t),{},{isLoading:!1});default:return t}},L=function(){var t=Object(o.c)((function(t){return t.filters})),e=t.categoryNames,c=t.categoryActive,i=Object(o.b)(),a=function(t){i(x(t)),i(w(t))};return Object(n.jsx)("div",{className:"categories",children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{className:null===c?"active":"",onClick:function(){return a(null)},children:"\u0412\u0441\u0435"}),e&&e.map((function(t,e){return Object(n.jsx)("li",{className:c===e?"active":"",onClick:function(){return a(e)},children:t},"".concat(t,"-").concat(e))}))]})})},N=c(17),P=function(){var t=Object(i.useState)(!1),e=Object(N.a)(t,2),c=e[0],a=e[1],s=Object(i.useRef)(null),r=Object(o.c)((function(t){return t.filters})),l=r.sortTitles,j=r.sortActive,d=Object(o.b)();Object(i.useEffect)((function(){return document.body.addEventListener("click",b),function(){document.body.removeEventListener("click",b)}}),[]);var b=function(t){(t.path||t.composedPath&&t.composedPath()).includes(s.current)||a(!1)},u=function(t,e){d(function(t){return{type:p,payload:t}}(t)),d(x(null)),d(w(e)),a(!1)};return Object(n.jsxs)("div",{className:"sort",ref:s,children:[Object(n.jsxs)("div",{className:"sort__label",children:[Object(n.jsx)("svg",{className:"".concat(c?"rotated":""),width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(n.jsx)("path",{d:"M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z",fill:"#2C2C2C"})}),Object(n.jsx)("b",{children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e:"}),Object(n.jsx)("span",{onClick:function(){a(!c)},children:l[j].name})]}),c&&Object(n.jsx)("div",{className:"sort__popup",children:Object(n.jsx)("ul",{children:l&&l.map((function(t,e){return Object(n.jsx)("li",{className:j===e?"active":"",onClick:function(){return u(e,t.type)},children:t.name},"".concat(t.name,"-").concat(t.type,"-").concat(e))}))})})]})},E=function(t){var e=t.className,c=t.outline,i=t.onClick,a=t.children;return Object(n.jsx)("div",{children:Object(n.jsx)("button",{className:"button ".concat(e," ").concat(c?"button--outline":""," "),onClick:i,children:a})})},B=function(t){var e=t.name,c=t.price,a=t.imageUrl,s=t.sizes,r=t.id,o=t.cartCount,l=t.onClickAddPizza,j=Object(i.useState)(0),d=Object(N.a)(j,2),b=d[0],u=d[1],h=Object(i.useState)(0),p=Object(N.a)(h,2),O=p[0],x=p[1],m=["\u0442\u043e\u043d\u043a\u043e\u0435","\u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u043e\u0435"];return Object(n.jsxs)("div",{className:"pizza-block",children:[Object(n.jsx)("img",{className:"pizza-block__image",src:a,alt:e}),Object(n.jsx)("h4",{className:"pizza-block__title",children:e}),Object(n.jsxs)("div",{className:"pizza-block__selector",children:[Object(n.jsx)("ul",{children:m.map((function(t,e){return Object(n.jsx)("li",{className:"".concat(b===e?"active":""),onClick:function(){return u(e)},children:t},"".concat(t,"-").concat(e))}))}),Object(n.jsx)("ul",{children:s&&s.map((function(t,e){return Object(n.jsxs)("li",{className:O===e?"active":"",onClick:function(){return x(e)},children:[t," \u0441\u043c"]},"".concat(t,"-").concat(e))}))})]}),Object(n.jsxs)("div",{className:"pizza-block__bottom",children:[Object(n.jsxs)("div",{className:"pizza-block__price",children:[c," \u20bd"]}),Object(n.jsxs)(E,{className:"button--add",onClick:function(){var t={name:e,price:c,imageUrl:a,dough:m[b],size:s[O],id:r};l(t)},outline:!0,children:[Object(n.jsx)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(n.jsx)("path",{d:"M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z",fill:"white"})}),Object(n.jsx)("span",{children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),o&&Object(n.jsx)("i",{children:o})]})]})]})},A=function(t){var e=t.id,c=t.name,i=t.dough,a=t.size,s=t.itemsCount,r=t.totalPrice,o=t.onMinusCartPizza,l=t.onPlusCartPizza,j=t.onRemovePizza;return Object(n.jsxs)("div",{className:"cart__item",children:[Object(n.jsx)("div",{className:"cart__item-img",children:Object(n.jsx)("img",{className:"pizza-block__image",src:"https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg",alt:"Pizza"})}),Object(n.jsxs)("div",{className:"cart__item-info",children:[Object(n.jsx)("h3",{children:c}),Object(n.jsxs)("p",{children:[i," \u0442\u0435\u0441\u0442\u043e, ",a," \u0441\u043c."]})]}),Object(n.jsxs)("div",{className:"cart__item-count",children:[Object(n.jsx)("div",{className:"button button--outline button--circle cart__item-count-minus",onClick:function(){o(e)},children:Object(n.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(n.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(n.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})}),Object(n.jsx)("b",{children:s}),Object(n.jsx)("div",{className:"button button--outline button--circle cart__item-count-plus",onClick:function(){l(e)},children:Object(n.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(n.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(n.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})})]}),Object(n.jsx)("div",{className:"cart__item-price",children:Object(n.jsxs)("b",{children:[r," \u20bd"]})}),Object(n.jsx)("div",{className:"cart__item-remove",children:Object(n.jsx)(E,{className:"button--circle",outline:!0,onClick:function(){j(e)},children:Object(n.jsxs)("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(n.jsx)("path",{d:"M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z",fill:"#EB5A1E"}),Object(n.jsx)("path",{d:"M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z",fill:"#EB5A1E"})]})})})]})},M=c(33),V=function(){return Object(n.jsxs)(M.a,{className:"pizza-block",speed:2,width:280,height:457,viewBox:"0 0 280 457",backgroundColor:"#dedede",foregroundColor:"#ece1c6",children:[Object(n.jsx)("circle",{cx:"140",cy:"100",r:"100"}),Object(n.jsx)("rect",{x:"0",y:"215",rx:"4",ry:"4",width:"280",height:"24"}),Object(n.jsx)("rect",{x:"0",y:"256",rx:"10",ry:"10",width:"280",height:"84"}),Object(n.jsx)("rect",{x:"0",y:"362",rx:"4",ry:"4",width:"92",height:"27"}),Object(n.jsx)("rect",{x:"129",y:"353",rx:"24",ry:"24",width:"152",height:"44"})]})},Z=c(14),H=c(29),R=c(34),S="ADD_PIZZA_TO_CART",T="MINUS_CART_PIZZA",W="PLUS_CART_PIZZA",D="REMOVE_CART_PIZZA",I="CLEAR_CART",U={pizzas:{},totalPrice:0,itemsCount:0},J=function(t){return t.reduce((function(t,e){return t+e.price}),0)},X=function(t,e){return Object.values(t).reduce((function(t,c){return t+function(t,e){var c=e.split("."),n=Object(R.a)(c),i=n[0];return n.slice(1).reduce((function(t,e){return t[e]}),t[i])}(c,e)}),0)},Y=function(){return{type:I}},G=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case S:var c=t.pizzas[e.payload.id]?[].concat(Object(H.a)(t.pizzas[e.payload.id].pizzas),[e.payload]):[e.payload],n=Object(b.a)(Object(b.a)({},t.pizzas),{},Object(Z.a)({},e.payload.id,{pizzas:c,totalPrice:J(c)})),i=X(n,"totalPrice"),a=X(n,"pizzas.length");return Object(b.a)(Object(b.a)({},t),{},{pizzas:n,totalPrice:i,itemsCount:a});case T:var s=t.pizzas[e.payload].pizzas,r=s.length>1?t.pizzas[e.payload].pizzas.slice(1):s,o=Object(b.a)(Object(b.a)({},t.pizzas),{},Object(Z.a)({},e.payload,{pizzas:r,totalPrice:J(r)})),l=X(o,"totalPrice"),j=X(o,"pizzas.length");return Object(b.a)(Object(b.a)({},t),{},{pizzas:o,totalPrice:l,itemsCount:j});case W:var d=[].concat(Object(H.a)(t.pizzas[e.payload].pizzas),[t.pizzas[e.payload].pizzas[0]]),u=Object(b.a)(Object(b.a)({},t.pizzas),{},Object(Z.a)({},e.payload,{pizzas:d,totalPrice:J(d)})),h=X(u,"totalPrice"),p=X(u,"pizzas.length");return Object(b.a)(Object(b.a)({},t),{},{pizzas:u,totalPrice:h,itemsCount:p});case D:var O=Object(b.a)({},t.pizzas),x=O[e.payload].totalPrice,m=O[e.payload].pizzas.length;return delete O[e.payload],Object(b.a)(Object(b.a)({},t),{},{pizzas:O,totalPrice:t.totalPrice-x,itemsCount:t.itemsCount-m});case I:return Object(b.a)(Object(b.a)({},t),{},{pizzas:{},totalPrice:0,itemsCount:0});default:return t}},q=function(){var t=Object(o.c)((function(t){return t.pizzas})),e=t.pizzas,c=t.isLoading,a=Object(o.c)((function(t){return t.cart})).pizzas,s=Object(o.b)();Object(i.useEffect)((function(){s(w())}),[s]);var r=function(t){s({type:S,payload:t})};return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"content__top",children:[Object(n.jsx)(L,{}),Object(n.jsx)(P,{})]}),Object(n.jsx)("h2",{className:"content__title",children:"\u0412\u0441\u0435 \u043f\u0438\u0446\u0446\u044b"}),Object(n.jsx)("div",{className:"content__items",children:c?Array(12).fill("").map((function(t,e){return Object(n.jsx)(V,{},e)})):e.map((function(t,e){return Object(i.createElement)(B,Object(b.a)(Object(b.a)({},t),{},{cartCount:a[t.id]&&a[t.id].pizzas.length,onClickAddPizza:r,key:"".concat(t.id,"-").concat(e)}))}))})]})},F=c.p+"static/media/sad.2a32b404.svg",K=c.p+"static/media/empty-cart.db905d1f.png",Q=function(){var t=Object(o.c)((function(t){return t.cart})),e=t.pizzas,c=t.totalPrice,i=t.itemsCount,a=Object(o.b)(),s=Object.keys(e).map((function(t){return e[t].pizzas[0]})),l=function(t){a(function(t){return{type:T,payload:t}}(t))},j=function(t){a(function(t){return{type:W,payload:t}}(t))},d=function(t){console.log(t),a(function(t){return{type:D,payload:t}}(t))};return Object(n.jsx)("div",{className:"container container--cart",children:i?Object(n.jsxs)("div",{className:"cart",children:[Object(n.jsxs)("div",{className:"cart__top",children:[Object(n.jsxs)("h2",{className:"content__title",children:[Object(n.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(n.jsx)("path",{d:"M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(n.jsx)("path",{d:"M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}),Object(n.jsx)("path",{d:"M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669",stroke:"white",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]}),"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"]}),Object(n.jsxs)("div",{className:"cart__clear",children:[Object(n.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(n.jsx)("path",{d:"M2.5 5H4.16667H17.5",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(n.jsx)("path",{d:"M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(n.jsx)("path",{d:"M8.33337 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(n.jsx)("path",{d:"M11.6666 9.16667V14.1667",stroke:"#B6B6B6",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})]}),Object(n.jsx)("span",{onClick:function(){window.confirm("\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443?")&&a(Y())},children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443"})]})]}),Object(n.jsx)("div",{className:"content__items",children:s.map((function(t){return Object(n.jsx)(A,{id:t.id,name:t.name,dough:t.dough,size:t.size,itemsCount:e[t.id].pizzas.length,totalPrice:e[t.id].totalPrice,onMinusCartPizza:l,onPlusCartPizza:j,onRemovePizza:d},"".concat(t.name,"-").concat(t.id))}))}),Object(n.jsxs)("div",{className:"cart__bottom",children:[Object(n.jsxs)("div",{className:"cart__bottom-details",children:[Object(n.jsxs)("span",{children:["\u0412\u0441\u0435\u0433\u043e \u043f\u0438\u0446\u0446: ",Object(n.jsxs)("b",{children:[i," \u0448\u0442."]})]}),Object(n.jsxs)("span",{children:["\u0421\u0443\u043c\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0430: ",Object(n.jsxs)("b",{children:[c," \u20bd"]})]})]}),Object(n.jsxs)("div",{className:"cart__bottom-buttons",children:[Object(n.jsxs)(r.b,{to:"/react-pizza-app",className:"button button--outline button--add go-back-btn",children:[Object(n.jsx)("svg",{width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(n.jsx)("path",{d:"M7 13L1 6.93015L6.86175 1",stroke:"#D3D3D3",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Object(n.jsx)("span",{children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})]}),Object(n.jsx)(E,{className:"pay-btn",onClick:function(){alert("\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 \u043f\u0440\u0438\u043d\u044f\u0442"),a(Y())},children:Object(n.jsx)("span",{children:"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0441\u0435\u0439\u0447\u0430\u0441"})})]})]})]}):Object(n.jsxs)("div",{className:"cart cart--empty",children:[Object(n.jsxs)("div",{className:"cart-wrapper",children:[Object(n.jsx)("h2",{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f"}),Object(n.jsx)("img",{className:"sad",src:F,alt:"sad"})]}),Object(n.jsxs)("p",{children:["\u0412\u0435\u0440\u043e\u044f\u0442\u043d\u0435\u0439 \u0432\u0441\u0435\u0433\u043e, \u0432\u044b \u043d\u0435 \u0437\u0430\u043a\u0430\u0437\u044b\u0432\u0430\u043b\u0438 \u0435\u0449\u0451 \u043f\u0438\u0446\u0446\u0443.",Object(n.jsx)("br",{}),"\u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u043a\u0430\u0437\u0430\u0442\u044c \u043f\u0438\u0446\u0446\u0443, \u043f\u0435\u0440\u0435\u0439\u0434\u0438 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443."]}),Object(n.jsx)("img",{src:K,alt:"Empty cart"}),Object(n.jsx)(r.b,{className:"button button--black",to:"/react-pizza-app",children:Object(n.jsx)("span",{children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"})})]})})},$=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"404"})})},tt=function(){return Object(n.jsxs)("div",{className:"wrapper",children:[Object(n.jsx)(d,{}),Object(n.jsx)("div",{className:"content",children:Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{exact:!0,path:"/react-pizza-app",component:q}),Object(n.jsx)(l.a,{exact:!0,path:"/cart",component:Q}),Object(n.jsx)(l.a,{component:$})]})})]})},et=c(11),ct=c(35),nt=Object(et.c)({filters:m,pizzas:y,cart:G}),it=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||et.d,at=Object(et.e)(nt,it(Object(et.a)(ct.a)));c(47);Object(s.render)(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(r.a,{children:Object(n.jsx)(o.a,{store:at,children:Object(n.jsx)(tt,{})})})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.99135b88.chunk.js.map