(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,function(e,t,n){e.exports={form:"Phonebook_form__3daUO",label:"Phonebook_label__3Gi1u",input:"Phonebook_input__2_Dk4",button:"Phonebook_button__u_9ou"}},,,function(e,t,n){e.exports={listItem:"ContactsItem_listItem__1lvno",name:"ContactsItem_name__3oYkZ",number:"ContactsItem_number__1Rs7-",button:"ContactsItem_button__DS5CU"}},,,,,function(e,t,n){e.exports={label:"Filter_label__3eKgh",input:"Filter_input__3VMNj"}},,function(e,t,n){e.exports={container:"Container_container__2AjcJ"}},function(e,t,n){e.exports={list:"Contacts_list__1bZ3j"}},,,,,,function(e,t,n){},,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),i=(n(19),n(14)),s=n(3),u=n(26),l=n(11),b=(n(20),n(2)),m=n.n(b),d=n(1);var j=function(e){var t=e.onSubmit,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],o=r[1],i=Object(a.useState)(""),u=Object(s.a)(i,2),l=u[0],b=u[1],j=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":o(a);break;case"number":b(a);break;default:return}};return Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(c,l),o(""),b("")},className:m.a.form,children:[Object(d.jsxs)("label",{className:m.a.label,children:["Name",Object(d.jsx)("input",{type:"text",name:"name",value:c,onChange:j,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,className:m.a.input})]}),Object(d.jsxs)("label",{className:m.a.label,children:["Number",Object(d.jsx)("input",{type:"tel",name:"number",value:l,onChange:j,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,className:m.a.input})]}),Object(d.jsx)("button",{type:"submit",className:m.a.button,children:"Add contact"})]})},f=n(12),h=n.n(f),p=function(e){var t=e.children;return Object(d.jsx)("div",{className:h.a.container,children:t})},O=n(13),_=n.n(O),x=n(5),C=n.n(x),v=function(e){var t=e.id,n=e.name,a=e.number,r=e.onDeleteContact;return Object(d.jsxs)("li",{className:C.a.listItem,children:[Object(d.jsxs)("p",{className:C.a.name,children:[n,": ",Object(d.jsx)("span",{className:C.a.number,children:a})]}),Object(d.jsx)("button",{className:C.a.button,onClick:function(){return r(t)},children:"Delete"})]})},g=function(e){var t=e.data,n=e.onDeleteContact;return Object(d.jsx)("ul",{className:_.a.list,children:t.map((function(e){var t=e.id,a=e.name,r=e.number;return Object(d.jsx)(v,{id:t,name:a,number:r,onDeleteContact:n},t)}))})},N=n(9),k=n.n(N),S=n(10),w=n.n(S),A=function(e){var t=e.value,n=e.onChange;return Object(d.jsxs)("label",{className:w.a.label,children:["Find contact by name",Object(d.jsx)("input",{className:w.a.input,type:"text",value:t,onChange:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f."})]})};A.propType={value:k.a.string.isRequired,onChange:k.a.func.isRequired};var I=A;var y=function(){var e=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],t=Object(a.useState)((function(){var t;return null!==(t=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==t?t:e})),n=Object(s.a)(t,2),r=n[0],c=n[1],o=Object(a.useState)(""),b=Object(s.a)(o,2),m=b[0],f=b[1];return Object(a.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(r))}),[r]),Object(d.jsxs)(p,{children:[Object(d.jsx)("h1",{children:"Phonebook"}),Object(d.jsx)(j,{onSubmit:function(e,t){var n=e.toLowerCase();if(r.find((function(e){return n===e.name.toLowerCase()})))return l.b.error("".concat(e," is already in contacts"));var a={id:Object(u.a)(),name:e,number:t};c((function(e){return[a].concat(Object(i.a)(e))}))}}),Object(d.jsx)("h2",{children:"Contacts"}),Object(d.jsx)(l.a,{}),Object(d.jsx)(I,{value:m,onChange:function(e){f(e.currentTarget.value)}}),Object(d.jsx)(g,{data:function(){var e=m.toLowerCase();return r.filter((function(t){return t.name.toLowerCase().includes(e)}))}(),onDeleteContact:function(e){c((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})};o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.fda0e911.chunk.js.map