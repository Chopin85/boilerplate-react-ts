(this["webpackJsonpboilerplate-react-ts"]=this["webpackJsonpboilerplate-react-ts"]||[]).push([[0],{16:function(e,t,n){e.exports={root:"styles_root__23kHT",logo:"styles_logo__2I-b3",header:"styles_header__2dQfB",link:"styles_link__3mu6n","App-logo-spin":"styles_App-logo-spin__1stbd"}},18:function(e,t,n){e.exports={root:"styles_root__L5zOd",open:"styles_open__3DQ8G",drawerHeader:"styles_drawerHeader__1Y0-t",drawerContent:"styles_drawerContent__3krhB"}},21:function(e,t,n){e.exports={root:"styles_root__2n2Tc",link:"styles_link__3iS2r"}},24:function(e,t,n){e.exports={root:"styles_root__9YqiB",menu:"styles_menu__3-PTb",menuBar:"styles_menuBar__kuWHT"}},26:function(e,t,n){e.exports={root:"styles_root__2dEU2",listHeader:"styles_listHeader__2-fhM",listTitle:"styles_listTitle__1yHPD"}},27:function(e,t,n){e.exports={root:"styles_root__2GWQA",apiDemoHeader:"styles_apiDemoHeader__15J0w",apiDemoContent:"styles_apiDemoContent__3eznN"}},34:function(e,t,n){e.exports={root:"styles_root__1toge",counter:"styles_counter__2lr0b"}},49:function(e,t,n){e.exports={root:"styles_root__1b77Q"}},51:function(e,t,n){e.exports={root:"styles_root__1kWxC"}},59:function(e,t,n){},98:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),c=n.n(a),o=n(22),s=n.n(o),i=(n(59),n(23)),u=n(24),l=n.n(u),d=n(5),j=n.n(d),b=n(13),p=n(4),O=n(16),x=n.n(O),m=n.p+"static/media/logo.103b5fa1.svg",h=function(e){var t=e.className;return Object(r.jsx)("div",{className:j()(x.a.root,t),children:Object(r.jsxs)("header",{className:x.a.header,children:[Object(r.jsx)("img",{src:m,className:x.a.logo,alt:"logo"}),Object(r.jsxs)("p",{children:["Edit ",Object(r.jsx)("code",{children:"src/App.tsx"})," and save to reload."]}),Object(r.jsx)("a",{className:x.a.link,href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"}),Object(r.jsx)(b.b,{className:x.a.link,to:"/demo",children:"Demo Page"}),Object(r.jsx)(b.b,{className:x.a.link,to:"/apidemo",children:"API demo"})]})})},f=n(6),v="INCREMENT_COUNTER",_="DECREMENT_COUNTER",k="INCREMENT_COUNTER_WITH_VALUE",y="DECREMENT_COUNTER_WITH_VALUE",N="SET_COUNTER",g="RESET_COUNTER",C="OPEN_DRAWER",w="CLOSE_DRAWER",E=function(e){var t=e.className,n=e.style,a=e.icon,c=void 0===a?"":a,o=e.onClick,s=e.text;return""!==c?Object(r.jsxs)("button",{type:"button",className:t,style:n,onClick:o,children:[Object(r.jsx)("img",{src:"assets/img/".concat(c,".svg"),alt:"pageIcon"}),s]}):Object(r.jsx)("button",{type:"button",className:t,style:n,onClick:o,children:s})},T=function(e){var t=e.onClick;return Object(r.jsx)(E,{onClick:t,text:"Close"})},R=n(18),B=n.n(R),D=function(e){var t=e.className,n=e.headerContent,a=e.content,c=Object(f.c)();return Object(f.d)((function(e){return e.drawer.isOpen}),f.b)?Object(r.jsxs)("section",{className:j()(B.a.root,B.a.open),children:[Object(r.jsxs)("div",{className:B.a.drawerHeader,children:[n,Object(r.jsx)(T,{onClick:function(){return c({type:w})}})]}),Object(r.jsx)("div",{className:B.a.drawerContent,children:a})]}):Object(r.jsx)("section",{className:j()(B.a.root,t)})},A=function(e){var t=e.onClick,n=e.buttonText,a=e.text;return Object(r.jsxs)("div",{className:"actionButton",children:[Object(r.jsx)("div",{children:a}),Object(r.jsx)(E,{onClick:t,text:n})]})},H=function(){var e=Object(a.useState)(0),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(f.c)(),s=Object(r.jsx)("div",{children:"Counter actions"}),u=Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:"Enter a value :"}),Object(r.jsx)("input",{type:"number",onChange:function(e){c(Number(e.currentTarget.value))},value:n}),Object(r.jsx)(A,{buttonText:"+1",text:"Add 1",onClick:function(){return o({type:v})}}),Object(r.jsx)(A,{buttonText:"-1",text:"Remove 1",onClick:function(){return o({type:_})}}),Object(r.jsx)(A,{buttonText:"+".concat(n),text:"Add ".concat(n),onClick:function(){return o(function(e){return{type:k,payload:e}}(n))}}),Object(r.jsx)(A,{buttonText:"+".concat(n),text:"Remove ".concat(n),onClick:function(){return o(function(e){return{type:y,payload:e}}(n))}}),Object(r.jsx)(A,{buttonText:"=".concat(n),text:"Set to ".concat(n),onClick:function(){return o(function(e){return{type:N,payload:e}}(n))}}),Object(r.jsx)(A,{buttonText:"Reset",text:"Reset counter",onClick:function(){return o({type:g})}})]});return Object(r.jsx)(D,{content:u,headerContent:s})},S=n(34),I=n.n(S),L=function(){var e=Object(f.c)();return Object(r.jsx)(E,{onClick:function(){return e({type:C})},text:"Open Drawer !"})},P=function(e){var t=e.counter,n=e.className;return Object(r.jsxs)("div",{className:j()(I.a.root,n),children:[Object(r.jsx)("div",{children:"Check the Redux Devtools to see the dispatched actions."}),Object(r.jsx)("a",{href:"https://github.com/zalmoxisus/redux-devtools-extension",target:"_blank",rel:"noopener noreferrer",children:"(link)"}),Object(r.jsx)("div",{className:I.a.counter,children:t}),Object(r.jsx)(L,{})]})},U=n(49),W=n.n(U),z=function(e){var t=e.className,n=Object(f.d)((function(e){return e.counter.counter}),f.b);return Object(r.jsxs)("div",{className:j()(W.a.root,t),children:[Object(r.jsx)(P,{counter:n}),Object(r.jsx)(H,{})]})},M=n(7),G=n.n(M),Q=n(14),J="GET_BOOKS",K="GET_BOOKS_SUCCESS",V="GET_BOOKS_ERROR",Y=n(20),q=n.n(Y),$=n(25),F=n.n($),X=n(50),Z=n.n(X),ee={get:function(e,t){var n=arguments;return Object(Q.a)(G.a.mark((function r(){var a,c;return G.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=n.length>2&&void 0!==n[2]&&n[2],r.prev=1,r.next=4,q()({method:"get",url:"".concat(e)});case 4:return c=r.sent,r.abrupt("return",a?c.data:t?c.data.payload:Z()(c.data,{deep:!0}));case 8:throw r.prev=8,r.t0=r.catch(1),{code:void 0!==r.t0?r.t0.response.status:500,message:void 0!==r.t0?r.t0.response.data.error?r.t0.response.data.error:r.t0.response.statusText:"Internal Server Error"};case 12:case"end":return r.stop()}}),r,null,[[1,8]])})))()},post:function(e,t){return Object(Q.a)(G.a.mark((function n(){var r,a;return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(r=F.a.get("token"))||document.location.reload(),n.prev=2,n.next=5,q()({method:"post",url:"/".concat(e),headers:{Authorization:"Bearer ".concat(r)},data:t});case 5:return a=n.sent,n.abrupt("return",a.data);case 9:return n.prev=9,n.t0=n.catch(2),n.abrupt("return",n.t0.response.data);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})))()},put:function(e,t){return Object(Q.a)(G.a.mark((function n(){var r,a;return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(r=F.a.get("token"))||document.location.reload(),n.prev=2,n.next=5,q()({method:"put",url:"/".concat(e),headers:{Authorization:"Bearer ".concat(r)},data:t});case 5:return a=n.sent,n.abrupt("return",a.data);case 9:return n.prev=9,n.t0=n.catch(2),n.abrupt("return",n.t0.response.data);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})))()},delete:function(e,t){return Object(Q.a)(G.a.mark((function n(){var r,a;return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(r=F.a.get("token"))||document.location.reload(),n.prev=2,n.next=5,q()({method:"delete",url:"/".concat(e),headers:{Authorization:"Bearer ".concat(r)},data:t});case 5:return a=n.sent,n.abrupt("return",a.data.payload);case 9:throw n.prev=9,n.t0=n.catch(2),new Error(n.t0.response.data.error);case 12:case"end":return n.stop()}}),n,null,[[2,9]])})))()}},te={getBooks:function(){return Object(Q.a)(G.a.mark((function e(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ee.get("".concat("/api/books")));case 1:case"end":return e.stop()}}),e)})))()}},ne=n(51),re=n.n(ne),ae=function(e){var t=e.name,n=e.className;return Object(r.jsx)("div",{className:j()(re.a.root,n),children:Object(r.jsx)("div",{children:t})})},ce=function(){return Object(r.jsx)("img",{src:"assets/images/loader.gif",alt:"spinner"})},oe=n(26),se=n.n(oe),ie=function(e){var t=e.className,n=Object(f.c)(),a=Object(f.d)((function(e){return e.api}),f.b),c=a.isLoadingBooks,o=a.books,s=c?Object(r.jsx)(ce,{}):o.map((function(e){return Object(r.jsx)(ae,{name:e.name},e.url)}));return Object(r.jsxs)("div",{className:j()(se.a.root,t),children:[Object(r.jsx)("div",{children:"with React hooks (functional component)"}),Object(r.jsxs)("div",{className:se.a.listHeader,children:[Object(r.jsx)("div",{className:se.a.listTitl,children:"Books"}),Object(r.jsx)(E,{onClick:function(){return n(function(){var e=Object(Q.a)(G.a.mark((function e(t){var n;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:J}),e.prev=1,e.next=4,te.getBooks();case 4:n=e.sent,t({type:K,payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:V,payload:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}())},text:"Refresh"})]}),s]})},ue=n(27),le=n.n(ue),de=function(e){var t=e.className;return Object(r.jsxs)("div",{className:j()(le.a.root,t),children:[Object(r.jsx)("div",{className:le.a.apiDemoHeader,children:"API Demo with Redux thunk"}),Object(r.jsx)("div",{className:le.a.apiDemoContent,children:Object(r.jsx)(ie,{})})]})},je=n(21),be=n.n(je),pe=function(e,t){var n=e.className,a=e.onClick;return Object(r.jsxs)("div",{ref:t,className:j()(be.a.root,n),children:[Object(r.jsx)(b.b,{onClick:a,className:be.a.link,to:"/",children:"Home"}),Object(r.jsx)(b.b,{onClick:a,className:be.a.link,to:"/demo",children:"Demo Page"}),Object(r.jsx)(b.b,{onClick:a,className:be.a.link,to:"/apidemo",children:"API demo"})]})},Oe=c.a.forwardRef(pe),xe=n(28),me=function(e){var t=e.className,n=Object(a.useState)(!1),c=Object(i.a)(n,2),o=c[0],s=c[1],u=Object(a.useRef)(null);return Object(a.useLayoutEffect)((function(){xe.a.timeline().set(u.current,{xPercent:-100})}),[]),Object(a.useEffect)((function(){o?xe.a.timeline({repeat:0,repeatDelay:1}).to(u.current,{xPercent:0,duration:1}):xe.a.timeline({repeat:0,repeatDelay:1}).to(u.current,{xPercent:-100,duration:1})}),[o]),Object(r.jsx)("div",{className:j()(l.a.root,t),children:Object(r.jsxs)(b.a,{children:[Object(r.jsx)("div",{onClick:function(){return s(!0)},className:l.a.menu}),Object(r.jsx)(Oe,{ref:u,className:l.a.menuBar,onClick:function(){return s(!1)}}),Object(r.jsxs)(p.c,{children:[Object(r.jsx)(p.a,{exact:!0,path:"/",component:h}),Object(r.jsx)(p.a,{path:"/apidemo",component:de}),Object(r.jsx)(p.a,{path:"/demo",component:z})]})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var he=n(15),fe=n(52),ve=n(3),_e={counter:0},ke={isOpen:!1},ye={isLoadingBooks:!1,books:[]},Ne=n(53),ge=Object(he.combineReducers)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(ve.a)(Object(ve.a)({},e),{},{counter:e.counter+1});case _:return Object(ve.a)(Object(ve.a)({},e),{},{counter:e.counter-1});case k:return Object(ve.a)(Object(ve.a)({},e),{},{counter:e.counter+t.payload});case y:return Object(ve.a)(Object(ve.a)({},e),{},{counter:e.counter-t.payload});case N:return Object(ve.a)(Object(ve.a)({},e),{},{counter:t.payload});case g:return _e;default:return e}},drawer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(ve.a)(Object(ve.a)({},e),{},{isOpen:!0});case w:return Object(ve.a)(Object(ve.a)({},e),{},{isOpen:!1});default:return e}},api:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:return Object(ve.a)(Object(ve.a)({},e),{},{isLoadingBooks:!0,books:ye.books});case K:return Object(ve.a)(Object(ve.a)({},e),{},{isLoadingBooks:!1,books:t.payload});case V:return Object(ve.a)(Object(ve.a)({},e),{},{isLoadingBooks:!1});default:return e}}}),Ce=Object(he.createStore)(ge,Object(fe.composeWithDevTools)(Object(he.applyMiddleware)(Ne.a)));s.a.render(Object(r.jsx)(f.a,{store:Ce,children:Object(r.jsx)(me,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[98,1,2]]]);
//# sourceMappingURL=main.13573116.chunk.js.map