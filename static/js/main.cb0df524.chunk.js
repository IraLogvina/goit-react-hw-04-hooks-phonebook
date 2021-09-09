(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={ContactForm:"ContactForm_ContactForm__1zvAA",label:"ContactForm_label__378f8",input:"ContactForm_input__gm87B",button:"ContactForm_button__1MLZK"}},,function(t,e,n){t.exports={list:"ContactList_list__2T7aG",listItem:"ContactList_listItem__29Cbr",listItemName:"ContactList_listItemName__39F1_",listItemNumber:"ContactList_listItemNumber__3d8DW",button:"ContactList_button__1RuFy"}},,,,function(t,e,n){t.exports={title:"App_title__-GfWs"}},function(t,e,n){t.exports={input:"Filter_input__2DoVp",title:"Filter_title__mtLuE"}},,,,,,,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),s=n(10),r=n.n(s),o=(n(16),n(11)),i=n(3),l=n(20),u=n(8),b=n.n(u),m=n(2),j=n.n(m),d=n(0);var f=function(t){var e=t.addContact,n=Object(a.useState)(""),c=Object(i.a)(n,2),s=c[0],r=c[1],o=Object(a.useState)(""),l=Object(i.a)(o,2),u=l[0],b=l[1],m=function(t){var e=t.currentTarget,n=e.name,a=e.value;switch(n){case"name":r(a);break;case"number":b(a);break;default:return}};return Object(d.jsxs)("form",{className:j.a.ContactForm,onSubmit:function(t){t.preventDefault(),e(s,u),r(""),b("")},children:[Object(d.jsx)("label",{className:j.a.label,children:"Name"}),Object(d.jsx)("input",{className:j.a.input,value:s,onChange:m,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(d.jsx)("label",{className:j.a.label,children:"Number"}),Object(d.jsx)("input",{className:j.a.input,value:u,onChange:m,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(d.jsx)("button",{type:"submit",className:j.a.button,children:"Add contact"})]})},_=n(9),p=n.n(_),O=function(t){var e=t.filter,n=t.filterContacts;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{className:p.a.title,children:"Find contacts by name"}),Object(d.jsx)("input",{type:"text",name:"filter",value:e,onChange:n,className:p.a.input})]})},h=n(4),C=n.n(h),x=function(t){var e=t.contacts,n=t.deleteContact;return Object(d.jsx)("ul",{className:C.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(d.jsxs)("li",{className:C.a.listItem,children:[Object(d.jsxs)("span",{className:C.a.listItemName,children:[a,":"]}),Object(d.jsx)("span",{className:C.a.listItemNumber,children:c}),Object(d.jsx)("button",{type:"button",className:C.a.button,onClick:function(){return n(e)},children:"Delete"})]},e)}))})};var N=function(){var t=Object(a.useState)([]),e=Object(i.a)(t,2),n=e[0],c=e[1],s=Object(a.useState)(""),r=Object(i.a)(s,2),u=r[0],m=r[1];return Object(a.useEffect)((function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&c(t)}),[]),Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]),Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:b.a.title,children:"Phonebook"}),Object(d.jsx)(f,{addContact:function(t){var e=t.name,a=t.number,s={id:Object(l.a)(),name:e,number:a};void 0===n.find((function(e){return e.name===t.name}))?c((function(t){return[s].concat(Object(o.a)(t.contacts))})):alert("".concat(s.name," is already in contact"))}}),Object(d.jsx)("h2",{className:b.a.title,children:"Contacts"}),Object(d.jsx)(O,{filter:u,filterContacts:function(t){m(t.currentTarget.value)}}),Object(d.jsx)(x,{contacts:function(){var t=u.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))},deleteContact:function(t){c(n.filter((function(e){return e!==t})))}})]})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),s(t),r(t)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root")),v()}],[[18,1,2]]]);
//# sourceMappingURL=main.cb0df524.chunk.js.map