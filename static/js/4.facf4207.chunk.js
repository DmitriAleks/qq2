(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{289:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__3tR3i",dialogsItems:"Dialogs_dialogsItems__1OXY2",dialog:"Dialogs_dialog__2vn4p",active:"Dialogs_active__2I8hT",messages:"Dialogs_messages__25l4V",message:"Dialogs_message__1o67z"}},294:function(e,s,a){"use strict";a.r(s);var t=a(125),i=(a(0),a(289)),n=a.n(i),c=a(17),o=a(1),d=function(e){return Object(o.jsx)("div",{className:n.a.dialog+" "+n.a.active,children:Object(o.jsx)(c.b,{to:"/dialogs/"+e.id,children:e.name})})},j=function(e){return Object(o.jsx)("div",{className:n.a.message,children:e.message})},l=a(10),r=a(126),u=a(127),g=a(48),b=a(50),m=Object(b.a)(100),O=Object(u.a)({form:"dialogAddMessageForm"})((function(e){return Object(o.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(o.jsx)("div",{children:Object(o.jsx)(r.a,{component:g.b,validate:[b.b,m],name:"newMessageBody",placeholder:"Enter your message"})}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{children:"Send"})})]})})),h=function(e){var s=e.dialogPage,a=s.dialogs.map((function(e){return Object(o.jsx)(d,{name:e.name,id:e.id},e.id)})),t=s.messages.map((function(e){return Object(o.jsx)(j,{message:e.message,id:e.id},e.id)}));return e.isAuth?Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:n.a.dialogs,children:[Object(o.jsx)("div",{className:n.a.dialogsItems,children:a}),Object(o.jsx)("div",{className:n.a.messages,children:Object(o.jsx)("div",{children:t})})]}),Object(o.jsx)(O,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})]}):Object(o.jsx)(l.a,{to:"/login"})},x=a(16),f=a(11),_=a(4),v=a(45),p=function(e){return{isAuth:e.auth.isAuth}};s.default=Object(f.d)((function(e){return Object(x.b)(p)((function(s){var a=s.isAuth,t=Object(v.a)(s,["isAuth"]);return a?Object(o.jsx)(e,Object(_.a)({},t)):Object(o.jsx)(l.a,{to:"/login"})}))}),Object(x.b)((function(e){return{dialogPage:e.dialogPage,isAuth:e.auth.isAuth}}),(function(e){return{sendMessage:function(s){e(Object(t.b)(s))}}})))(h)}}]);
//# sourceMappingURL=4.facf4207.chunk.js.map