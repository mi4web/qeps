(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,a,t){"use strict";a.a={LANDING:"LANDING",VISION:"VISION",ABOUT:"ABOUT",CONTACT:"CONTACT",FACILITIES:"FACILITIES"}},20:function(e,a,t){"use strict";t.d(a,"a",function(){return i}),t.d(a,"b",function(){return l});var n=t(11),i={app:{}},l=[{text:"Home",route:n.a.LANDING},{text:"About Us",route:n.a.ABOUT},{text:"Our Aim",route:n.a.VISION},{text:"Facilities",route:n.a.FACILITIES},{text:"Contact",route:n.a.CONTACT}]},24:function(e,a,t){"use strict";t.d(a,"a",function(){return u});var n=t(47),i=t(49),l=t(48),c=t(45),r=t(46),o=t(11),s={landing:{path:"/",name:o.a.LANDING},vision:{path:"/vision",name:o.a.VISION},about:{path:"/about",name:o.a.ABOUT},contact:{path:"/contact",name:o.a.CONTACT},facilities:{path:"/facilities",name:o.a.FACILITIES}},u=function(e){return n.a(i.a("path"),l.a(c.a("name",e)),r.a)(s)}},33:function(e,a,t){"use strict";var n=t(6),i=t(7),l=t(9),c=t(8),r=t(10),o=t(0),s=t.n(o),u=t(88),m=t(95),d=t(3),h=t.n(d),E=(t(68),t(70),t(24)),f=function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(r.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props,a=e.items;e.location.path;return s.a.createElement("div",{className:"navigation"},s.a.createElement("nav",{className:"navbar"},a.map(function(e,a){return s.a.createElement(h.a,{animation:"bounceIn",delay:.1*(a+1)+"s"},s.a.createElement(u.a,{to:Object(E.a)(e.route),activeClassName:"active",key:a,exact:!0},s.a.createElement("span",null,e.text)))})))}}]),a}(o.Component);a.a=Object(m.a)(f)},38:function(e,a,t){"use strict";var n=t(6),i=t(7),l=t(9),c=t(8),r=t(10),o=t(0),s=(t(62),t(33),t(20),function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(r.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return this.props.children}}]),a}(o.Component));a.a=s},43:function(e,a,t){e.exports=t.p+"static/media/logo.66a7d59a.png"},50:function(e,a,t){e.exports=t(86)},60:function(e,a,t){},62:function(e,a,t){},68:function(e,a,t){},74:function(e,a,t){},76:function(e,a,t){},78:function(e,a,t){},80:function(e,a,t){},82:function(e,a,t){},84:function(e,a,t){},86:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),l=t(31),c=t.n(l),r=t(21),o=t.n(r),s=t(28),u=t(92),m=(t(60),t(6)),d=t(7),h=t(9),E=t(8),f=t(10),p=t(95),b=t(94),v=t(72),y=t(87),O=t(24),N=t(11),g=o()({loader:function(){return t.e(1).then(t.bind(null,91))},loading:function(){return i.a.createElement("div",{className:"hide"},"loading page...")}}),j=(o()({loader:function(){return Promise.resolve().then(t.bind(null,87))},loading:function(){return i.a.createElement("div",{className:"hide"},"loading page...")}}),[{path:Object(O.a)(N.a.LANDING),component:y.default,exact:!0}]),I=function(e){function a(){return Object(m.a)(this,a),Object(h.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(b.a,null,j.map(function(a,t){return i.a.createElement(v.a,Object.assign({},e.props,{path:a.path,component:a.component,key:t,exact:!0}))}),i.a.createElement(v.a,{component:g})))}}]),a}(n.Component),C=Object(p.a)(I),T=(t(84),t(20)),w=t(33),A=t(43),S=t.n(A),k=function(e){function a(){return Object(m.a)(this,a),Object(h.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"header"},i.a.createElement("div",{className:"brand"},i.a.createElement("img",{src:S.a,alt:""}),i.a.createElement("h1",null,"Quari English Public School")),i.a.createElement(w.a,{items:T.b})),i.a.createElement(C,null))}}],[{key:"getData",value:function(){return Promise.resolve({})}}]),a}(n.Component),x=Object(p.a)(Object(s.b)(function(e){e.extranet;return{}},{})(k)),L=t(17),R=t(90),_=t(93),D=t(44),U=("undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||L.d)(Object(L.a)(D.a))(L.e),q=Object(L.c)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_MESSAGE":return a.message;default:return e}}});var F,P=(F=window.__REDUX_STATE__||{},(R.a(F)||_.a(F))&&(F=T.a),U(q,F)),G=i.a.createElement(s.a,{store:P},i.a.createElement(u.a,null,i.a.createElement(x,null)));window.onload=function(){o.a.preloadReady().then(function(){c.a.hydrate(G,document.getElementById("root"))})}},87:function(e,a,t){"use strict";t.r(a);var n=t(6),i=t(7),l=t(9),c=t(8),r=t(10),o=t(0),s=t.n(o),u=t(38),m=t(3),d=t.n(m),h=function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(r.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"home"},s.a.createElement("div",{className:"titleWrapper"},s.a.createElement("div",{className:"title"},s.a.createElement(d.a,{animation:"slideInRight"},s.a.createElement("div",{className:"first"},"A Place To Learn")),s.a.createElement("div",{className:"flex-row second j-c"},s.a.createElement(d.a,{animation:"slideInRight",delay:"0.5s"},s.a.createElement("div",{className:"and"},"&")),s.a.createElement(d.a,{animation:"zoomIn",delay:"1s"},s.a.createElement("div",null,"\xa0Grow"))))))}}]),a}(o.Component),E=(t(74),t(76),function(e){return s.a.createElement("div",{className:"sideHead"},s.a.createElement(d.a,{animation:"slideInLeft"},s.a.createElement("div",{className:"heading"},e.heading)),s.a.createElement("div",{className:"content"},e.children))}),f=function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(r.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"vision"},s.a.createElement(E,{heading:"Vision"},s.a.createElement("div",{className:"visionContent"},s.a.createElement("div",{className:"title"},s.a.createElement("span",{className:"secondaryColor"},'"'),"The school aims to provide a platform to its students to acquire the wealth of knowledge upholding the ethical and moral values",s.a.createElement("span",{className:"secondaryColor"},'"')),s.a.createElement("ul",null,s.a.createElement(d.a,{animation:"slideInRight",delay:"0.1s"},s.a.createElement("li",null,"We aim to enable our students to utilize the acquired knowledge, skills, attitude and values for their spiritual, moral and spiritual development.")),s.a.createElement(d.a,{animation:"slideInRight",delay:"0.15s"},s.a.createElement("li",null,"To develop leadership qualities and team spirit in them")),s.a.createElement(d.a,{animation:"slideInRight",delay:"0.2s"},s.a.createElement("li",null,"To develop the spirit of co-operations, belongingness and service to humanity.")),s.a.createElement(d.a,{animation:"slideInRight",delay:"0.25s"},s.a.createElement("li",null,"To nurture love for environment and wild life.")),s.a.createElement(d.a,{animation:"slideInRight",delay:"0.3s"},s.a.createElement("li",null,"To channelise the inexhaustible energy of the young in the right direction towards creativity and self sufficiency and to fully utilize their inherent talents.")),s.a.createElement(d.a,{animation:"slideInRight",delay:"0.35s"},s.a.createElement("li",null,"Emphasis on 4 I\u2019s (Inquisitiveness, Intelligence, Innovativeness and Inspiration) with equal emphasis in academics and co-curricular activities."))))))}}]),a}(o.Component),p=(t(78),t(80),function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(r.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"about"},s.a.createElement(E,{heading:"About Us"},s.a.createElement(d.a,{animation:"fadeIn"},s.a.createElement("div",{className:"aboutContent"},"Quari English Public School established in year 2019 is an Institution which provides quality all around education to all young boys and girls to develop a sound mind, a robust physique and strong moral values which enable them to become successful in all fields of life, society and National importance. We invite you to discover the family of Quari English Public School and find your place in it."))))}}]),a}(o.Component)),b=(t(82),function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(r.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"facilities"},s.a.createElement(E,{heading:"Facilities"},s.a.createElement("div",{className:"flex-row content"},s.a.createElement("ul",{className:"items"},s.a.createElement(d.a,{key:"1",animation:"slideInLeft",delay:"0s"},s.a.createElement("li",{className:"item"},"Preparation for Army School, Navodaya Vidyalaya, Jamia Millia, Aligarh School entrance exam")),s.a.createElement(d.a,{key:"2",animation:"slideInLeft",delay:"0.1s"},s.a.createElement("li",{className:"item"},"Experienced and qualified Teachers")),s.a.createElement(d.a,{key:"3",animation:"slideInLeft",delay:"0.2s"},s.a.createElement("li",{className:"item"},"Smart Classes")),s.a.createElement(d.a,{key:"4",animation:"slideInLeft",delay:"0.3s"},s.a.createElement("li",{className:"item"},"Computer, Mathematics and Science Labs"))),s.a.createElement("ul",{className:"items"},s.a.createElement(d.a,{animation:"slideInRight",delay:"0.4s"},s.a.createElement("li",{className:"item"},"Admission via extrance exam only")),s.a.createElement(d.a,{animation:"slideInRight",delay:"0.5s"},s.a.createElement("li",{className:"item"},"Maximum 20 Students per Teacher")),s.a.createElement(d.a,{animation:"slideInRight",delay:"0.6s"},s.a.createElement("li",{className:"item"},"Extra attention for weaker Students")),s.a.createElement(d.a,{animation:"slideInRight",delay:"0.6s"},s.a.createElement("li",{className:"item"},"Scholarship for bright Students")))),s.a.createElement("ul",{className:"bottom"},s.a.createElement(d.a,{animation:"slideInUp",delay:"0"},s.a.createElement("li",null,"Computer classes starting from Nursery standard")),s.a.createElement(d.a,{animation:"slideInUp",delay:"0.5s"},s.a.createElement("li",null,"English speaking exposure starting from Nursery standard")))))}}]),a}(o.Component)),v=function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(r.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return s.a.createElement(u.a,null,s.a.createElement(h,null),s.a.createElement(p,null),s.a.createElement(f,null),s.a.createElement(b,null))}}]),a}(o.Component);a.default=v}},[[50,3,2]]]);