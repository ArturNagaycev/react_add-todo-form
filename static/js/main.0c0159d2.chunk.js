(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),r=a(9),s=a(6),c=a(2),o=(a(14),a(1)),l=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],d=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}],u=a(8),m=a.n(u),j=a(0),b=function(e){var t=e.user,a=t.email,n=t.name;return Object(j.jsx)("a",{className:"UserInfo",href:"mailto:".concat(a),children:n})},h=function(e){var t=e.todo,a=t.id,n=t.completed,i=t.title,r=t.user;return Object(j.jsxs)("article",{"data-id":a,className:m()("TodoInfo",{"TodoInfo--completed":n}),children:[Object(j.jsx)("h2",{className:"TodoInfo__title",children:i}),r?Object(j.jsx)(b,{user:r}):"No user"]})},O=function(e){var t=e.todos;return Object(j.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(j.jsx)(h,{todo:e,"data-id":e.id},e.id)}))})},f=function(){var e=Object(o.useState)(""),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(0),u=Object(c.a)(i,2),m=u[0],b=u[1],h=Object(o.useState)(d),f=Object(c.a)(h,2),p=f[0],x=f[1],v=Object(o.useState)(!1),y=Object(c.a)(v,2),S=y[0],N=y[1],I=Object(o.useState)(!1),g=Object(c.a)(I,2),C=g[0],_=g[1],k=p.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{user:(t=e.userId,l.find((function(e){return e.id===t}))||null)});var t})),D={id:k.reduce((function(e,t){return e>=t.id?e:t.id}),0)+1,title:a,completed:!1,userId:m};return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Add todo form"}),Object(j.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){e.preventDefault(),a&&m&&a.trim()&&(x((function(e){return[].concat(Object(r.a)(e),[D])})),n(""),b(0),N(!1),_(!1)),N(""===a.trim()),_(0===m)},children:[Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{htmlFor:"title",children:"Title: "}),Object(j.jsx)("input",{id:"title",type:"text","data-cy":"titleInput",value:a,onChange:function(e){n(e.target.value),N(!1)},placeholder:"Enter a title"}),S&&Object(j.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(j.jsxs)("div",{className:"field",children:[Object(j.jsx)("label",{htmlFor:"username",children:"User: "}),Object(j.jsxs)("select",{id:"username","data-cy":"userSelect",value:m,onChange:function(e){b(+e.target.value),_(!1)},children:[Object(j.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),l.map((function(e){return Object(j.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),C&&Object(j.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(j.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(j.jsx)(O,{todos:k})]})};i.a.render(Object(j.jsx)(f,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.0c0159d2.chunk.js.map