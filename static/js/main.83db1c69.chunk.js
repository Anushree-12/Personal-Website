(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(45)},31:function(e,t,a){},33:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(13),c=a.n(r),o=(a(31),a(7)),i=a(8),s=a(10),m=a(9),u=a(11),d=(a(33),a(48)),h=a(47),E=a(49),p=a(14),f=a(5),b=a(3),y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={data:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a("data/projects.csv").then(function(t){e.setState({data:t})})}},{key:"render",value:function(){return console.log(this.state.data),l.a.createElement(b.Grid,{fluid:!0},l.a.createElement(b.Row,null,l.a.createElement(f.e,{xs:12,md:6},l.a.createElement(b.Row,null,l.a.createElement("div",{style:{fontSize:40,fontWeight:"bold",color:"#960056"}},"Class Projects")),this.state.data.map(function(e,t){return l.a.createElement(f.e,{xs:12,key:"project"+t},l.a.createElement(f.a,{className:"project"},l.a.createElement(f.b,null,l.a.createElement(f.d,{className:"card-title"},l.a.createElement("h5",{className:"card-title",style:{color:"#c95169",fontWeight:"bold"}}," ",e.name," ")),l.a.createElement(f.c,{className:"card-text",style:{color:"#d27b8d"}},l.a.createElement("p",null,e.cls," ",e.quarter)),l.a.createElement(f.c,{className:"card-text"},l.a.createElement("p",null,e.desc)))),l.a.createElement("br",null))}))))}}]),t}(n.Component),g=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(b.Grid,{fluid:!0},l.a.createElement(b.Row,null,l.a.createElement("div",{style:{fontSize:40,fontWeight:"bold",color:"#960056"}},"About Me")),l.a.createElement(b.Row,null,l.a.createElement("div",{style:{fontSize:20,fontWeight:"normal"}},l.a.createElement("p",null,"I have been constantly involved on campus in various clubs I have joined such as Tech++, which integrates technology and fashion, and Operation Smile, fundraising for a charity helping kids with cleft/lip palate."),l.a.createElement("p",null,"I have refined my leadership style during my two years as a Resident Advisor in UW housing and by being a Teaching Assistant for a Leadership Theory class in the Foster Business School."),l.a.createElement("p",null,"Currently, I'm a Peer Advisor in the iSchool!"))))}}]),t}(n.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(b.Grid,{fluid:!0},l.a.createElement(b.Row,null,l.a.createElement(b.Col,{xs:12,md:6},l.a.createElement(b.Row,null,l.a.createElement("div",{style:{fontSize:40,fontWeight:"bold",color:"#960056"}},"Anushree Gopal")),l.a.createElement(b.Row,null,l.a.createElement("div",{style:{fontSize:20,fontWeight:"normal"}},l.a.createElement("p",null,"I am a senior in Informatics with a focus in cybersecurity. Currently, I am extremely interested by in web application pen-testing and forensics! I love reading and watching movies in my free-time."))),l.a.createElement(b.Col,{xs:3},l.a.createElement("a",{href:"https://github.com/Anushree-12",target:"_blank",style:{textDecoration:"none",color:"#960056",fontSize:22}},"GitHub"),l.a.createElement("br",null),l.a.createElement("a",{href:"https://www.linkedin.com/in/anushreegopal/",target:"_blank",style:{textDecoration:"none",color:"#960056",fontSize:22}},"LinkedIn"),l.a.createElement("br",null),l.a.createElement("a",{href:"https://medium.com/@agopal12",target:"_blank",style:{textDecoration:"none",color:"#960056",fontSize:22}},"Medium"))),l.a.createElement(b.Col,{className:"image",xs:12,md:6},l.a.createElement("img",{src:"./image.png",alt:"Anushree Gopal"}))))}}]),t}(n.Component),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={data:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a("data/resume.csv").then(function(t){e.setState({data:t})})}},{key:"render",value:function(){return console.log(this.state.data),l.a.createElement(b.Grid,{fluid:!0},l.a.createElement(b.Row,null,l.a.createElement(b.Col,{xs:12,md:6},l.a.createElement(b.Row,null,l.a.createElement("div",{style:{fontSize:40,fontWeight:"bold",color:"#960056"}},"Work Experience")),this.state.data.map(function(e,t){return l.a.createElement(b.Col,{xs:12,key:"project"+t},l.a.createElement(f.a,{className:"project"},l.a.createElement(f.b,null,l.a.createElement(f.d,{className:"card-title"},l.a.createElement("h4",{className:"card-title",style:{color:"#bd2c49",fontWeight:"bold"}}," ",e.title," "),l.a.createElement("h5",{className:"card-company",style:{color:"#c95169",fontWeight:"bold"}}," ",e.company," ")),l.a.createElement(f.c,{className:"card-text",style:{color:"#d27b8d"}},l.a.createElement("p",null,e.start," ",e.end)),l.a.createElement(f.c,{className:"card-text"},l.a.createElement("p",null,e.desc)))),l.a.createElement("br",null))}))))}}]),t}(n.Component),w=(a(42),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement("div",{className:"container"},l.a.createElement("header",{className:"App-header"},l.a.createElement(h.a,{to:"/"},"Home")," ",l.a.createElement(h.a,{to:"/about"},"About")," ",l.a.createElement(h.a,{to:"/projects"},"Projects")," ",l.a.createElement(h.a,{to:"/work"},"Work Experience")," "),l.a.createElement(E.a,{exact:!0,path:"/",component:j}),l.a.createElement(E.a,{path:"/projects",component:y}),l.a.createElement(E.a,{path:"/about",component:g}),l.a.createElement(E.a,{path:"/work",component:v})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,2,1]]]);
//# sourceMappingURL=main.83db1c69.chunk.js.map