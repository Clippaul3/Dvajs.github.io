(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{148:function(e,t,n){},150:function(e,t,n){},179:function(e,t,n){e.exports=n(326)},229:function(e,t){},326:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(22),u=n.n(c),o=n(175),i=n(28),l=n(29),s=n(31),d=n(30),p=n(32),m=function(e,t){return t.map(function(t){return e[t]})},f=n(329),y=(n(82),n(148),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.products,n=e.addToCart,a=e.select,c=(0===a.productSize.length?t:a.productSize).map(function(e,t){return r.a.createElement("div",{key:t,className:"item-cloth"},r.a.createElement("div",{className:"pname"},r.a.createElement("img",{src:"./static/products/".concat(e.sku,"_1.jpg"),alt:""}),r.a.createElement("div",null,e.title),r.a.createElement("div",null,"price:$",e.price),r.a.createElement("div",null,"installments:",e.installments,"*",Math.round(e.price/e.installments*100)/100,"$")),r.a.createElement("div",{className:"item-button"},r.a.createElement(f.a,{className:"buttons",type:"primary",onClick:function(){return n(e.id)},disabled:!e.installments},r.a.createElement("p",{style:{margin:"auto",lineHeight:"0px"}},"\u6dfb\u52a0\u8d2d\u7269\u8f66"))))});return r.a.createElement("div",null,r.a.createElement("div",{className:"item"},c))}}]),t}(r.a.Component)),h=Object(c.connect)(function(e){var t=e.products,n=e.selected;return{products:m(t.byId,t.result),select:n}},function(e){return{addToCart:function(t){return e({type:"cart/add",payload:{id:t}})}}})(y),b=n(330),v=(n(150),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.addToSize,t=b.a.Group,n=["XS","S","M","ML","L","XL","XXL"];return r.a.createElement("div",{className:"size-checkbox"},r.a.createElement("span",{style:{fontSize:"30px"}},"Size:"),r.a.createElement(t,{options:n,defaultValue:n,onChange:function(t){e(t)}}))}}]),t}(r.a.Component)),g=Object(c.connect)(null,function(e){return{addToSize:function(t){return e({type:"selected/add",payload:{size:t}})}}})(v),O=n(20),j=n(34),E=n(332),k=n(331),x=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={visible:!1,placement:"right"},n.showDrawer=function(){n.setState({visible:!0})},n.onClose=function(){n.setState({visible:!1})},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.products,n=e.subtotal,a=e.onCheckout,c=e.loading,u=e.checking,o=e.num,i=e.deleteProducts,l=e.doDecrease,s=e.doIncrease,d=t.map(function(e,t){return r.a.createElement("li",{key:t},e.title," ",e.price," x ",e.quantity,r.a.createElement("button",{disabled:1==e.quantity,onClick:function(){return l(e.id)}},"-"),r.a.createElement("button",{onClick:function(){return s(e.id)}},"+"),r.a.createElement(f.a,{onClick:function(){return i(e.id,e.quantity)},style:{width:"20px",height:"20px",padding:"0",float:"right"}},r.a.createElement(j.a,{type:"close",style:{fontSize:"20px"}})))});return r.a.createElement("div",{style:{display:"flex",width:"100%",paddingTop:"20px"}},r.a.createElement(f.a,{style:{height:"64px",display:"flex",marginLeft:"auto",border:"none"},onClick:this.showDrawer},r.a.createElement("span",{style:{marginRight:24}},r.a.createElement(E.a,{count:o},r.a.createElement(j.a,{type:"shopping-cart",style:{fontSize:"50px"}})))),r.a.createElement(k.a,{title:"\u8d2d\u7269\u8f66",placement:this.state.placement,closable:!1,onClose:this.onClose,visible:this.state.visible},r.a.createElement("ul",{style:{listStyle:"none"}},d),r.a.createElement("div",null,"Total: ",n),r.a.createElement("div",null,u&&r.a.createElement("div",{style:{color:"red"}},"Checking ..."),r.a.createElement(f.a,{onClick:a,disabled:n<=0||c},r.a.createElement("p",{style:{margin:"auto",lineHeight:"0px"}},"Checkout")))))}}]),t}(r.a.Component),w=Object(c.connect)(function(e){var t=e.cart,n=e.products,a=e.loading;return{products:t.added.map(function(e){return Object(O.a)({},n.byId[e],{quantity:t.quantities[e]})}),subtotal:t.added.reduce(function(e,a){return n.byId[a].price*t.quantities[a]+e},0).toFixed(2),loading:a.models.cart,checking:a.effects["cart/checkout"],num:t.num}},function(e){return{onCheckout:function(){return e({type:"cart/checkout"})},deleteProducts:function(t,n){return e({type:"cart/delete",payload:{log:t,num:n}})},doDecrease:function(t){return e({type:"cart/minus",payload:{id:t}})},doIncrease:function(t){return e({type:"cart/add",payload:{id:t}})}}})(x),C=n(328),z=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).Highest=function(){},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=C.a.Option,t=this.props,n=t.products,a=t.select,c=t.OnChange,u=[r.a.createElement(e,{key:"default"},"\u9ed8\u8ba4\u6392\u5e8f"),r.a.createElement(e,{key:"Highest"},"\u4ef7\u683c\u7531\u9ad8\u5230\u4f4e"),r.a.createElement(e,{key:"lowest"},"\u4ef7\u683c\u7531\u4f4e\u5230\u9ad8")];return r.a.createElement("div",{style:{paddingLeft:"150px"}},r.a.createElement("h1",null,0===a.productSize.length?n.length:a.productSize.length," \u4ef6\u76f8\u5173\u8d27\u7269"),r.a.createElement("div",{id:"components-dropdown-demo-dropdown-button"},r.a.createElement(C.a,{defaultValue:"\u9ed8\u8ba4\u6392\u5e8f",onChange:function(e){return c(e,a.size)},style:{width:200}},u)))}}]),t}(r.a.Component),S=Object(c.connect)(function(e){var t=e.products,n=e.selected;return{products:m(t.byId,t.result),select:n}},function(e){return{OnChange:function(t,n){return e({type:"selected/add",payload:{change:t,size:n}})}}})(z),q=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.dispatch)({type:"products/query"})}},{key:"render",value:function(){return r.a.createElement("div",{className:"app-index"},r.a.createElement("div",null,r.a.createElement(g,null)),r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement(h,null)),r.a.createElement("div",null,r.a.createElement(w,null)))}}]),t}(r.a.Component),T=Object(c.connect)()(q),I=n(12),L=n.n(I),N=n(121),X=n(173),M=n.n(X),D=function(){return M.a.get("products.json")},H=function(e){return new Promise(function(t,n){return setTimeout(function(){return t(e)},2e3)})},P=new N.b.Entity("products"),A={namespace:"products",state:{result:[],byId:{}},effects:{query:L.a.mark(function e(t,n){var a,r,c;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.call,r=n.put,e.next=3,a(D);case 3:return c=e.sent,e.next=6,r({type:"setProducts",payload:Object(N.a)(c.data,[P])});case 6:case"end":return e.stop()}},e)})},reducers:{setProducts:function(e,t){var n=t.payload;return Object(O.a)({},e,{byId:n.entities.products,result:n.result})}}},J=n(59),V=n(74),$={added:[],quantities:{},addedSelect:[],num:0},F={namespace:"cart",state:$,effects:{add:L.a.mark(function e(t,n){var a,r,c,u,o,i,l;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.payload.id,r=n.put,c=n.select,e.next=4,c(function(e){return e.products.byId[a]});case 4:return u=e.sent,console.log("product",u),e.next=8,c();case 8:return o=e.sent,i=o.cart,l=i.num+1,e.next=13,r({type:"addToCart",payload:{id:a,num:l}});case 13:case"end":return e.stop()}},e)}),minus:L.a.mark(function e(t,n){var a,r,c,u,o,i,l;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.payload.id,r=n.put,c=n.select,e.next=4,c(function(e){return e.products.byId[a]});case 4:return u=e.sent,console.log("product",u),e.next=8,c();case 8:return o=e.sent,i=o.cart,l=i.num-1,e.next=13,r({type:"decrease",payload:{id:a,num:l}});case 13:case"end":return e.stop()}},e)}),checkout:L.a.mark(function e(t,n){var a,r,c,u,o,i;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.payload,a=n.call,r=n.put,c=n.select,e.next=4,c();case 4:return u=e.sent,o=u.cart,console.log("checkout cart",o),e.next=9,a(H,o);case 9:return i=e.sent,e.next=12,r({type:"checkoutCompleted",payload:i});case 12:case"end":return e.stop()}},e)}),delete:L.a.mark(function e(t,n){var a,r,c,u,o,i,l,s,d,p;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.payload,r=a.log,c=a.num,u=n.put,o=n.select,e.next=4,o();case 4:return i=e.sent,l=i.cart,s=function(e){return e!==r},d=l.num-c,p=l.added.filter(s),console.log(l.quantities),e.next=12,u({type:"deletelog",payload:{deleteAdded:p,deleteNum:d,log:r}});case 12:case"end":return e.stop()}},e)})},reducers:{addToCart:function(e,t){var n=t.payload,a=n.id,r=n.num;return console.log("state",e),Object(O.a)({},e,{added:e.added.includes(a)?Object(V.a)(e.added):[].concat(Object(V.a)(e.added),[a]),quantities:Object(O.a)({},e.quantities,Object(J.a)({},a,(e.quantities[a]||0)+1)),num:r})},decrease:function(e,t){var n=t.payload,a=n.id,r=n.num;return console.log("state",e),Object(O.a)({},e,{added:e.added.includes(a)?Object(V.a)(e.added):[].concat(Object(V.a)(e.added),[a]),quantities:Object(O.a)({},e.quantities,Object(J.a)({},a,(e.quantities[a]||0)-1)),num:r})},checkoutCompleted:function(){return $},deletelog:function(e,t){var n=t.payload,a=n.deleteAdded,r=n.deleteNum,c=n.log;return Object(O.a)({},e,{added:a,num:r,quantities:Object(O.a)({},e.quantities,Object(J.a)({},c,0))})}}},G={namespace:"selected",state:{size:["XS","S","M","ML","L","XL","XXL"],productSize:[],change:"default"},effects:{add:L.a.mark(function e(t,n){var a,r,c,u,o,i,l,s,d,p;return L.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.payload,r=a.size,c=a.change,u=n.put,o=n.call,e.next=4,o(D);case 4:return i=e.sent,l=function(e){for(var t=0;t<r.length;t++)for(var n=0;n<e.availableSizes.length;n++)if(r[t]===e.availableSizes[n])return e},s=i.data.filter(l),d=c,p=i.data.filter(l),console.log(s),e.next=12,u({type:"addToSize",payload:{size:r,productSize:s,changes:d,products:p}});case 12:case"end":return e.stop()}},e)})},reducers:{addToSize:function(e,t){var n=t.payload,a=n.size,r=n.productSize,c=n.changes,u=n.products;return Object(O.a)({},e,{size:a,productSize:"default"===c?u:"Highest"===c?r.sort(function(e,t){return t.price-e.price}):r.sort(function(e,t){return e.price-t.price}),change:c})}}},R=u()();R.model(A),R.model(F),R.model(G),R.use(Object(o.a)()),R.router(function(){return r.a.createElement(T,null)}),R.start("#root")}},[[179,1,2]]]);
//# sourceMappingURL=main.6fedd496.chunk.js.map