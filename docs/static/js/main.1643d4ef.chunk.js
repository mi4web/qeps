(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"c",function(){return c}),n.d(t,"b",function(){return l});var a,i=n(22),r=n(2),o={app:{}},c=(a={},Object(i.a)(a,r.a.LANDING,"home"),Object(i.a)(a,r.a.ABOUT,"about"),Object(i.a)(a,r.a.VISION,"aim"),Object(i.a)(a,r.a.FACILITIES,"facilities"),Object(i.a)(a,r.a.CONTACT,"contact"),a),l=[{text:"Home",route:r.a.LANDING,href:c[r.a.LANDING]},{text:"About Us",route:r.a.ABOUT,href:c[r.a.ABOUT]},{text:"Our Aim",route:r.a.VISION,href:c[r.a.VISION]},{text:"Facilities",route:r.a.FACILITIES,href:c[r.a.FACILITIES]},{text:"Contact",route:r.a.CONTACT,href:c[r.a.CONTACT]}]},2:function(e,t,n){"use strict";t.a={LANDING:"LANDING",VISION:"VISION",ABOUT:"ABOUT",CONTACT:"CONTACT",FACILITIES:"FACILITIES"}},31:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(105),i=n(109),r=n(55),o=n(53),c=n(54),l=n(2),s={landing:{path:"/",name:l.a.LANDING},vision:{path:"/vision",name:l.a.VISION},about:{path:"/about",name:l.a.ABOUT},contact:{path:"/contact",name:l.a.CONTACT},facilities:{path:"/facilities",name:l.a.FACILITIES}},u=function(e){return a.a(i.a("path"),r.a(o.a("name",e)),c.a)(s)}},41:function(e,t,n){"use strict";var a=n(52),i=n(7),r=n(8),o=n(10),c=n(9),l=n(11),s=n(0),u=n.n(s),m=n(111),d=n(5),h=n.n(d),p=(n(74),n(76),n(31),n(12)),f=n(105),E=n(106),v=n(109),b=n(99),O=n(101),y=n(104),j=f.a(E.a(v.a(0)),b.a(v.a(1)),O.a),g=function(){var e;return(e=[]).concat.apply(e,arguments).reduce(function(e,t){if("string"===typeof t)e.push(t);else if("object"===typeof t)return f.a(y.a(e),j)(t);return e},[]).join(" ")},N=function(e,t){var n;return function(){var a=arguments;n||(e.apply(this,a),n=!0,setTimeout(function(){return n=!1},t))}},I=n(2),C=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(n=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).onScroll=N(function(){var e=Object.entries(p.c).find(function(e){var t=Object(a.a)(e,2),i=(t[0],t[1]),r=document.querySelector("#".concat(i)),o=r.querySelector(".sideHead"),c=o?o.getBoundingClientRect():r.getBoundingClientRect();return c&&c.top>-2&&c.top<n.innerHeight});e?n.setState({selectedRoute:e[0]}):n.setState({selectedRoute:I.a.LANDING})},200),n.scrollIntoView=function(e){var t="#".concat(e.href);document.querySelector(t).scrollIntoView({behavior:"smooth"}),setTimeout(function(){n.setState({selectedRoute:e.route})},1e3)},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.onScroll),this.innerHeight=window.innerHeight}},{key:"render",value:function(){var e=this,t=this.props,n=t.items,a=(t.location.path,(this.state||{}).selectedRoute);return u.a.createElement("div",{className:"navigation"},u.a.createElement("nav",{className:"navbar"},n.map(function(t,n){return u.a.createElement(h.a,{animation:"bounceIn",delay:.1*(n+1)+"s",key:n},u.a.createElement("a",{onClick:function(){return e.scrollIntoView(t)},className:g({active:t.route===a})},u.a.createElement("span",null,t.text)))})))}}]),t}(s.Component);t.a=Object(m.a)(C)},44:function(e,t,n){"use strict";var a=n(7),i=n(8),r=n(10),o=n(9),c=n(11),l=n(0),s=(n(68),n(41),n(12),function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.props.children}}]),t}(l.Component));t.a=s},50:function(e,t,n){e.exports=n.p+"static/media/logo.66a7d59a.png"},56:function(e,t,n){e.exports=n(98)},66:function(e,t,n){},68:function(e,t,n){},74:function(e,t,n){},79:function(e,t,n){},81:function(e,t,n){},83:function(e,t,n){},85:function(e,t,n){},87:function(e,t,n){},89:function(e,t,n){},91:function(e,t,n){},93:function(e,t,n){},95:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var a=n(7),i=n(8),r=n(10),o=n(9),c=n(11),l=n(0),s=n.n(l),u=n(44),m=n(5),d=n.n(m),h=n(12),p=n(2),f=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"home",id:h.c[p.a.LANDING]},s.a.createElement("div",{className:"titleWrapper"},s.a.createElement("div",{className:"title"},s.a.createElement(d.a,{animation:"slideInRight"},s.a.createElement("div",{className:"first"},"A Place To Learn")),s.a.createElement("div",{className:"flex-row second j-c"},s.a.createElement(d.a,{animation:"slideInRight",delay:"0.5s"},s.a.createElement("div",{className:"and"},"&")),s.a.createElement(d.a,{animation:"zoomIn",delay:"1s"},s.a.createElement("div",null,"\xa0Grow"))))),s.a.createElement("marquee",{className:"info"},"A CBSE Curriculum English medium School (Nursery to X)"))}}]),t}(l.Component),E=(n(79),n(81),function(e){return s.a.createElement("div",{className:"sideHead"},s.a.createElement(d.a,{animation:"slideInLeft"},s.a.createElement("div",{className:"heading"},e.heading)),s.a.createElement("div",{className:"content"},e.children))}),v=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"vision",id:h.c[p.a.VISION]},s.a.createElement(E,{heading:"Our Aim"},s.a.createElement("div",{className:"visionContent"},s.a.createElement("div",{className:"title"},s.a.createElement("span",{className:"secondaryColor"},'"'),"The School aims to provide a platform to its students to acquire the wealth of knowledge upholding the ethical and moral values",s.a.createElement("span",{className:"secondaryColor"},'"')),s.a.createElement("ul",null,s.a.createElement(d.a,{animation:"slideInRight",delay:"0.1s"},s.a.createElement("li",null,"We aim to enable our students to utilize the acquired knowledge, skills, attitude and values for their spiritual, moral and spiritual development.")),s.a.createElement(d.a,{animation:"slideInRight",delay:"0.15s"},s.a.createElement("li",null,"To develop leadership qualities and team spirit in them")),s.a.createElement(d.a,{animation:"slideInRight",delay:"0.2s"},s.a.createElement("li",null,"To develop the spirit of co-operations, belongingness and service to humanity.")),s.a.createElement(d.a,{animation:"slideInRight",delay:"0.25s"},s.a.createElement("li",null,"To nurture love for environment and wild life.")),s.a.createElement(d.a,{animation:"slideInRight",delay:"0.3s"},s.a.createElement("li",null,"To channelise the inexhaustible energy of the young in the right direction towards creativity and self sufficiency and to fully utilize their inherent talents.")),s.a.createElement(d.a,{animation:"slideInRight",delay:"0.35s"},s.a.createElement("li",null,"Emphasis on 4 I\u2019s (Inquisitiveness, Intelligence, Innovativeness and Inspiration) with equal emphasis in academics and co-curricular activities."))))))}}]),t}(l.Component),b=(n(83),n(85),function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"about",id:h.c[p.a.ABOUT]},s.a.createElement(E,{heading:"About Us"},s.a.createElement(d.a,{animation:"aboutContent"},s.a.createElement("p",{className:"aboutContent"},"Quari English Public School was established in year 2019 is an Institution which provides quality all around education to all young boys and girls to develop a sound mind, a robust physique and strong moral values which enable them to become successful in all fields of life, society and National importance. We invite you to discover the family of Quari English Public School and find your place in it."))))}}]),t}(l.Component)),O=(n(87),function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"facilities",id:h.c[p.a.FACILITIES]},s.a.createElement(E,{heading:"Facilities"},s.a.createElement("div",{className:"flex-row content"},s.a.createElement("ul",{className:"items"},s.a.createElement(d.a,{key:"1",animation:"slideInLeft",delay:"0s"},s.a.createElement("li",{className:"item"},"Preparation for Army School, Navodaya Vidyalaya, Jamia Millia, Aligarh School entrance exam")),s.a.createElement(d.a,{key:"2",animation:"slideInLeft",delay:"0.1s"},s.a.createElement("li",{className:"item"},"Experienced and qualified Teachers")),s.a.createElement(d.a,{key:"3",animation:"slideInLeft",delay:"0.2s"},s.a.createElement("li",{className:"item"},"Smart Classes")),s.a.createElement(d.a,{key:"4",animation:"slideInLeft",delay:"0.3s"},s.a.createElement("li",{className:"item"},"Computer, Mathematics and Science Labs"))),s.a.createElement("ul",{className:"items"},s.a.createElement(d.a,{animation:"slideInRight",delay:"0.4s"},s.a.createElement("li",{className:"item"},"Admission via entrance exam only")),s.a.createElement(d.a,{animation:"slideInRight",delay:"0.5s"},s.a.createElement("li",{className:"item"},"Maximum 20 Students per Teacher")),s.a.createElement(d.a,{animation:"slideInRight",delay:"0.6s"},s.a.createElement("li",{className:"item"},"Extra attention for weaker Students")),s.a.createElement(d.a,{animation:"slideInRight",delay:"0.6s"},s.a.createElement("li",{className:"item"},"Scholarship for bright Students")))),s.a.createElement("ul",{className:"bottom"},s.a.createElement(d.a,{animation:"slideInUp",delay:"0"},s.a.createElement("li",null,"Computer classes starting from Nursery standard")),s.a.createElement(d.a,{animation:"slideInUp",delay:"0.5s"},s.a.createElement("li",null,"English speaking exposure starting from Nursery standard")))))}}]),t}(l.Component)),y=(n(89),function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"contact",id:h.c[p.a.CONTACT]},s.a.createElement(E,{heading:"Contact"},s.a.createElement("div",{className:"contactContent"},"Quari English Public School",s.a.createElement("br",null),"Vill. - Milki Rajwara",s.a.createElement("br",null),"P.S - Rosera",s.a.createElement("br",null),"District - Samastipur",s.a.createElement("br",null),"Bihar - 848210",s.a.createElement("br",null),"Mob: ",s.a.createElement("a",{href:"tel:9818038295"},"+91 9818038295"),s.a.createElement("br",null),"Email: ",s.a.createElement("a",{href:"mailto:er.sajid@hotmail.com"},"er.sajid@hotmail.com"))))}}]),t}(l.Component)),j=(n(91),function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("footer",{className:"footer"},"\xa9 Designed and developed by ",s.a.createElement("a",{href:"https://www.imamudinnaseem.com/"},"Imamudin Naseem"))}}]),t}(l.Component)),g=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return s.a.createElement(u.a,null,s.a.createElement(f,null),s.a.createElement(b,null),s.a.createElement(v,null),s.a.createElement(O,null),s.a.createElement(y,null),s.a.createElement(j,null))}}]),t}(l.Component);t.default=g},98:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(39),o=n.n(r),c=n(30),l=n.n(c),s=n(36),u=n(107),m=(n(66),n(7)),d=n(8),h=n(10),p=n(9),f=n(11),E=n(111),v=n(110),b=n(102),O=n(97),y=n(31),j=n(2),g=l()({loader:function(){return n.e(1).then(n.bind(null,108))},loading:function(){return i.a.createElement("div",{className:"hide"},"loading page...")}}),N=(l()({loader:function(){return Promise.resolve().then(n.bind(null,97))},loading:function(){return i.a.createElement("div",{className:"hide"},"loading page...")}}),[{path:Object(y.a)(j.a.LANDING),component:O.default,exact:!0}]),I=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(v.a,null,N.map(function(t,n){return i.a.createElement(b.a,Object.assign({},e.props,{path:t.path,component:t.component,key:n,exact:!0}))}),i.a.createElement(b.a,{component:g})))}}]),t}(a.Component),C=Object(E.a)(I),w=(n(93),n(12)),k=n(41),S=n(50),T=n.n(S),A=n(37),x=(n(95),function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,e))).scrollIntoView=function(e){var t="#".concat(e.href);document.querySelector(t).scrollIntoView({behavior:"smooth"}),n.setState({menuOpen:!n.state.menuOpen})},n.state={menuOpen:!1},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"handleMenuClick",value:function(){this.setState({menuOpen:!this.state.menuOpen})}},{key:"handleLinkClick",value:function(){this.setState({menuOpen:!1})}},{key:"render",value:function(){var e=this,t=w.b.map(function(t,n){return i.a.createElement(L,{key:n,delay:"".concat(.1*n,"s")},i.a.createElement("a",{onClick:function(){return e.scrollIntoView(t)}},t.text))});return i.a.createElement("div",{className:"hamburger"},i.a.createElement("div",{className:"menuButton container"},i.a.createElement(D,{open:this.state.menuOpen,onClick:function(){return e.handleMenuClick()}})),i.a.createElement(R,{open:this.state.menuOpen},t))}}]),t}(i.a.Component)),L=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={hover:!1},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"handleHover",value:function(){this.setState({hover:!this.state.hover})}},{key:"render",value:function(){var e=this,t={container:{animationDelay:this.props.delay},menuItem:{color:this.state.hover?"gray":"#fafafa",animationDelay:this.props.delay},line:{animationDelay:this.props.delay}};return i.a.createElement("div",{className:"container item",style:t.container},i.a.createElement("div",{className:"menuItem",style:t.menuItem,onMouseEnter:function(){e.handleHover()},onMouseLeave:function(){e.handleHover()},onClick:this.props.onClick},this.props.children),i.a.createElement("div",{className:"line",style:t.line}))}}]),t}(i.a.Component),R=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={open:!!n.props.open&&n.props.open},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.open!==this.state.open&&this.setState({open:e.open})}},{key:"render",value:function(){var e={container:{height:this.state.open?"100%":0}};return i.a.createElement("div",{style:e.container,className:"menuList container"},this.state.open?i.a.createElement("div",{className:"menuList"},this.props.children):null)}}]),t}(i.a.Component),D=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={open:!!n.props.open&&n.props.open,color:n.props.color?n.props.color:"#777"},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.open!==this.state.open&&this.setState({open:e.open})}},{key:"handleClick",value:function(){this.setState({open:!this.state.open})}},{key:"render",value:function(){var e=this,t={container:{height:"40px",width:"40px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",cursor:"pointer",padding:"4px"},line:{height:"2px",width:"20px",background:this.state.color,transition:"all 0.2s ease"},lineTop:{transform:this.state.open?"rotate(45deg)":"none",transformOrigin:"top left",marginBottom:"5px"},lineMiddle:{opacity:this.state.open?0:1,transform:this.state.open?"translateX(-16px)":"none"},lineBottom:{transform:this.state.open?"translateX(-1px) rotate(-45deg)":"none",transformOrigin:"top left",marginTop:"5px"}};return i.a.createElement("div",{style:t.container,onClick:this.props.onClick?this.props.onClick:function(){e.handleClick()}},i.a.createElement("div",{style:Object(A.a)({},t.line,t.lineTop)}),i.a.createElement("div",{style:Object(A.a)({},t.line,t.lineMiddle)}),i.a.createElement("div",{style:Object(A.a)({},t.line,t.lineBottom)}))}}]),t}(i.a.Component),B=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"header"},i.a.createElement("a",{className:"brand",href:"#home"},i.a.createElement("img",{src:T.a,alt:""}),i.a.createElement("div",null,i.a.createElement("h1",null,"Quari English Public School"),i.a.createElement("div",{className:"subtitle"},"(With Hostel)"))),i.a.createElement(k.a,{items:w.b})),i.a.createElement(x,null),i.a.createElement(C,null))}}],[{key:"getData",value:function(){return Promise.resolve({})}}]),t}(a.Component),M=Object(E.a)(Object(s.b)(function(e){e.extranet;return{}},{})(B)),V=n(23),U=n(103),q=n(112),_=n(51),P=("undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||V.d)(Object(V.a)(_.a))(V.e),F=Object(V.c)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MESSAGE":return t.message;default:return e}}});var G=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function H(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var W,X=(W=window.__REDUX_STATE__||{},(U.a(W)||q.a(W))&&(W=w.a),P(F,W)),Q=i.a.createElement(s.a,{store:X},i.a.createElement(u.a,null,i.a.createElement(M,null)));window.onload=function(){l.a.preloadReady().then(function(){o.a.hydrate(Q,document.getElementById("root"))})},function(){if("serviceWorker"in navigator){if(new URL(".",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat(".","/service-worker.js");G?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):H(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):H(e)})}}()}},[[56,3,2]]]);