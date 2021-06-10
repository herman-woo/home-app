(this["webpackJsonphome-app"]=this["webpackJsonphome-app"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(7),i=n.n(c),s=(n(13),n(14),n(2)),o=n(3),j=n(5),u=n(4),d=n(0),b=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsx)("header",{className:"App-header",children:Object(d.jsxs)("div",{className:"title-card",children:[Object(d.jsx)("h1",{children:"Trust the Process"}),Object(d.jsx)("h5",{children:"Herman's Dev Journal"})]})})}}]),n}(a.Component),h=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"intro",children:[Object(d.jsx)("h1",{children:"About:"}),Object(d.jsx)("h5",{children:"This is a page where I aim to chronicle my progress as a developer."})]})}}]),n}(a.Component),l=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.date,n=e.update,a=e.subject,r=e.id;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:Object(d.jsxs)("a",{onClick:function(){return n(r)},children:[t," - ",a]})}),Object(d.jsx)("img",{height:"300",width:"50"})]})}}]),n}(a.Component),p=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.update;return Object(d.jsxs)("div",{className:"timeline",children:[Object(d.jsx)(l,{date:"June 2021",subject:"Functional Programming in JavaScript",update:e,id:"jun2021"}),Object(d.jsx)(l,{date:"May 2021",subject:"Object Oriented JavaScript",update:e,id:"may2021"}),Object(d.jsx)(l,{date:"January 2021",subject:"React",update:e,id:"jan2021"}),Object(d.jsx)(l,{date:"October 2020",subject:"Landing Page Project",update:e,id:"oct2020"}),Object(d.jsx)(l,{date:"September 2020",subject:"Blog Page Website",update:e,id:"sep2020"}),Object(d.jsx)(l,{date:"Mar-Aug 2020",subject:" Break -",update:e,id:"mar2020"}),Object(d.jsx)(l,{date:"Jan-Feb 2020",subject:"Basic HTML/CSS",id:"jan2020",update:e})]})}}]),n}(a.Component),O=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.data;return Object(d.jsxs)("div",{className:"time-info",children:[Object(d.jsxs)("div",{className:"info-card",children:[Object(d.jsxs)("h1",{children:["Project: ",e.project]}),Object(d.jsxs)("h1",{children:["Time: ",e.date]}),Object(d.jsxs)("h2",{children:["Duration: ",e.duration]}),Object(d.jsxs)("h3",{children:["Status: ",e.status]})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:e.about}),""!==e.link?Object(d.jsxs)("a",{href:e.link,children:[Object(d.jsx)("h1",{children:"Project Link:"}),Object(d.jsx)("h2",{children:e.link})]}):""]})]})}}]),n}(a.Component),m=n(8),f=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={info:"default"},e.displayInfo=function(t){e.setState({info:t})},e.findData=function(){var t=m.filter((function(t){return t.id===e.state.info}));return Object.assign({},t[0])},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.findData();return Object(d.jsx)("div",{className:"history",children:Object(d.jsxs)("div",{className:"history-body",children:[Object(d.jsx)(p,{update:this.displayInfo}),Object(d.jsx)(O,{data:e})]})})}}]),n}(a.Component),x=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsx)("header",{className:"footer",children:Object(d.jsx)("div",{className:"title-card",children:Object(d.jsx)("h2",{children:"The Timeline"})})})}}]),n}(a.Component),v=function(e){Object(j.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("footer",{className:"outro",children:[Object(d.jsx)("h1",{children:"Links:"}),Object(d.jsx)("h5",{children:"Github Links"})]})}}]),n}(a.Component);var g=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(b,{}),Object(d.jsx)(h,{}),Object(d.jsx)(x,{}),Object(d.jsx)(f,{}),Object(d.jsx)(x,{}),Object(d.jsx)(v,{})]})};i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"id":"default","project":"Github Homepage Project","date":"Jan - June 2021","about":"This project is the page you\'re currently on. The goal for this project is to create a timeline to document the progress of my dev journey.","duration":"6 months","status":"On going","link":""},{"id":"jun2021","project":"Functional JS Project","date":"June 2021","about":"Learning to use more specific functional programming paradigm techniques","duration":"1 week","status":"WIP","link":""},{"id":"may2021","project":"Object Oriented JS Project","date":"May 2021","about":"Making use of the construtor functions, making use of classes, and object methods. Use of js array properties to sort data","duration":"1 week","status":"WIP","link":"https://herman-woo.github.io/DinoInfographic/"},{"id":"jan2021","project":"React","date":"January 2021","about":"learnin react","duration":"4 months","status":"WIP"},{"id":"oct2020","project":"Landing Page Project","date":"October 2020","about":"Using javascript to create dynamic loading for the navigation bar.","duration":"1 months","status":"Complete","link":"https://herman-woo.github.io/Cities/"},{"id":"sep2020","project":"Blog Project","date":"September 2020","about":"Took a course on Udacity, started learning how to use Flexbox and Grid to better style pages.","duration":"1 months","status":"Dome","link":"https://herman-woo.github.io/VirtualNomad/"},{"id":"mar2020","project":"Break","date":"Mar-Aug 2020","about":"Took a break from learning","duration":"6 months","link":""},{"id":"jan2020","project":"Basic HTML/CSS","date":"January 2020","about":"First started learning basic web development","duration":"2 months","status":"done","link":""}]')}},[[16,1,2]]]);
//# sourceMappingURL=main.cbd39e53.chunk.js.map