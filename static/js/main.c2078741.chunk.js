(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={label:"Filter_label__3eKgh",input:"Filter_input__3VMNj"}},12:function(e,t,n){e.exports={container:"Container_container__2AjcJ"}},18:function(e,t,n){},2:function(e,t,n){e.exports={form:"Phonebook_form__3daUO",label:"Phonebook_label__3Gi1u",input:"Phonebook_input__2_Dk4",button:"Phonebook_button__u_9ou"}},23:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),i=(n(18),n(13)),s=n(3),u=n(25),l=n(11),b=(n(19),n(2)),d=n.n(b),m=n(1);var j=function(e){var t=e.onSubmit,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],o=r[1],i=Object(a.useState)(""),u=Object(s.a)(i,2),l=u[0],b=u[1],j=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":o(a);break;case"number":b(a);break;default:return}};return Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(c,l),o(""),b("")},className:d.a.form,children:[Object(m.jsxs)("label",{className:d.a.label,children:["Name",Object(m.jsx)("input",{type:"text",name:"name",value:c,onChange:j,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,className:d.a.input})]}),Object(m.jsxs)("label",{className:d.a.label,children:["Number",Object(m.jsx)("input",{type:"tel",name:"number",value:l,onChange:j,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,className:d.a.input})]}),Object(m.jsx)("button",{type:"submit",className:d.a.button,children:"Add contact"})]})},h=n(12),f=n.n(h),p=function(e){var t=e.children;return Object(m.jsx)("div",{className:f.a.container,children:t})},_=n(4),O=n.n(_),x=function(e){var t=e.data,n=e.onDeleteContact;return Object(m.jsx)("ul",{className:O.a.list,children:t.map((function(e){var t=e.id,a=e.name,r=e.number;return Object(m.jsxs)("li",{className:O.a.listItem,children:[Object(m.jsxs)("p",{className:O.a.name,children:[a,": ",Object(m.jsx)("span",{className:O.a.number,children:r})]}),Object(m.jsx)("button",{className:O.a.button,onClick:function(){return n(t)},children:"Delete"})]},t)}))})},v=n(9),C=n.n(v),g=n(10),N=n.n(g),k=function(e){var t=e.value,n=e.onChange;return Object(m.jsxs)("label",{className:N.a.label,children:["Find contact by name",Object(m.jsx)("input",{className:N.a.input,type:"text",value:t,onChange:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f."})]})};k.propType={value:C.a.string.isRequired,onChange:C.a.func.isRequired};var w=k;var A=function(){var e=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],t=Object(a.useState)((function(){var t;return null!==(t=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==t?t:e})),n=Object(s.a)(t,2),r=n[0],c=n[1],o=Object(a.useState)(""),b=Object(s.a)(o,2),d=b[0],h=b[1];return Object(a.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(r))}),[r]),Object(m.jsxs)(p,{children:[Object(m.jsx)("h1",{children:"Phonebook"}),Object(m.jsx)(j,{onSubmit:function(e,t){var n=e.toLowerCase();if(r.find((function(e){return n===e.name.toLowerCase()})))return l.b.error("".concat(e," is already in contacts"));var a={id:Object(u.a)(),name:e,number:t};c((function(e){return[a].concat(Object(i.a)(e))}))}}),Object(m.jsx)("h2",{children:"Contacts"}),Object(m.jsx)(l.a,{}),Object(m.jsx)(w,{value:d,onChange:function(e){h(e.currentTarget.value)}}),Object(m.jsx)(x,{data:function(){var e=d.toLowerCase();return r.filter((function(t){return t.name.toLowerCase().includes(e)}))}(),onDeleteContact:function(e){c((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})};o.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(A,{})}),document.getElementById("root"))},4:function(e,t,n){e.exports={list:"Contacts_list__1bZ3j",listItem:"Contacts_listItem__3x2ri",name:"Contacts_name__2Rzsp",number:"Contacts_number__1rlkE",button:"Contacts_button__1Ynd9"}}},[[23,1,2]]]);
//# sourceMappingURL=main.c2078741.chunk.js.map