"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[464],{9464:function(n,e,t){t.r(e),t.d(e,{default:function(){return hn}});var r,i,a,o,l,s,d,c,u,x,p,f,m,b,h,Z,g=t(4554),j=t(890),y=t(6043),v=t(2791),C=t(9434),w=t(826),k=t(6916),z=function(n){return n.contacts.items},_=function(n){return n.contacts.isLoading},S=function(n){return n.filter},I=(0,k.P1)([z,S],(function(n,e){var t=e.toLocaleLowerCase().trim();return n.filter((function(n){return n.name.toLocaleLowerCase().includes(t)}))})),D=(0,k.P1)([z,S],(function(n,e){var t=e.trim();return n.filter((function(n){return n.number.includes(t)}))})),P=t(5218),A=t(6382),E=t(168),F=t(6088),L=(F.Z.form(r||(r=(0,E.Z)(["\n  padding: 16px 10px;\n  display: flex;\n  flex-direction: column;\n  gap: 25px;\n  font-family: 'Segoe UI';\n  font-size: 18px;\n  border: 1px solid #1664e2;\n  border-radius: 8px;\n"]))),F.Z.form(i||(i=(0,E.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"])))),N=(F.Z.div(a||(a=(0,E.Z)(["\n  position: absolute;\n  top: 100%;\n  left: 0;\n  padding: 3px;\n  width: 160px;\n  border: 1px solid red;\n  border-radius: 4px;\n  color: red;\n  font-size: 12px;\n"]))),t(5979)),U=t(6151),q=t(184),K=function(){var n=(0,C.I0)(),e=(0,C.v9)(z);return(0,q.jsxs)(L,{onSubmit:function(t){t.preventDefault();var r=t.currentTarget,i=r.elements.name.value,a=r.elements.number.value;if(e.some((function(n){return n.name===i})))return P.Am.success('"'.concat(i,'" is already in contacts.'));n((0,w.uK)({id:(0,A.x0)(),name:i,number:a})),r.reset()},autoComplete:"off",children:[(0,q.jsx)(N.Z,{id:"standard-basic",type:"text",name:"name",label:"Name",variant:"standard",required:!0,fullWidth:!0,sx:{mb:"1rem",color:"#1976d2",backgroundColor:"#fffefe"}}),(0,q.jsx)(N.Z,{id:"standard-basic",type:"tel",name:"number",label:"Number",variant:"standard",required:!0,helperText:"the phone number must contain between 10 and 13 digits",inputProps:{inputMode:"numeric",pattern:"[0-9]{10,13}"},fullWidth:!0,sx:{mb:"1rem",color:"#1976d2",backgroundColor:"#fffefe"}}),(0,q.jsx)(U.Z,{type:"submit",variant:"contained",sx:{mt:"20px"},children:"Add contact"})]})},M=t(3433),O=t(9439),T=t(8617),$=t(828),B=(F.Z.li(o||(o=(0,E.Z)(["\n  min-width: 380px;\n  display: flex;\n  align-items: center;\n  &:not(:last-child) {\n    margin-bottom: 5px;\n  }\n"]))),F.Z.div(l||(l=(0,E.Z)(["\n  /* min-width: 380px; */\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n"])))),W=F.Z.p(s||(s=(0,E.Z)(["\n  display: flex;\n  gap: 10px;\n  max-width: 245px;\n  font-family: 'Segoe UI';\n  font-size: 18px;\n  font-weight: 600;\n  color: white;\n"]))),J=F.Z.p(d||(d=(0,E.Z)(["\n  display: flex;\n  gap: 10px;\n  max-width: 245px;\n  font-family: 'Segoe UI';\n  font-size: 16px;\n  color: white;\n"]))),G=(F.Z.form(c||(c=(0,E.Z)(["\n  /* min-width: 380px; */\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n"]))),F.Z.input(u||(u=(0,E.Z)(["\n  border: 1px solid orangered;\n  border-radius: 4px;\n  outline: 1px solid orangered;\n"]))),F.Z.label(x||(x=(0,E.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  font-family: 'Segoe UI';\n  font-size: 12px;\n"]))),F.Z.div(p||(p=(0,E.Z)(["\n  display: flex;\n  gap: 4px;\n  margin-left: auto;\n"])))),R=t(3400),V=t(7247),H=t(1286),Q=t(3329),X=function(n){var e=n.id,t=n.onDeleteContact,r=n.onEditContact;return(0,q.jsxs)(G,{children:[(0,q.jsx)(R.Z,{type:"button",size:"large",color:"primary","aria-label":"edit",onClick:r,children:(0,q.jsx)(H.Z,{})}),(0,q.jsx)(R.Z,{type:"button",size:"large",color:"primary","aria-label":"delete",onClick:function(){return t(e)},children:(0,q.jsx)(V.Z,{})})]})},Y=function(n){var e=n.id,t=n.onDeleteContact;return(0,q.jsxs)(G,{children:[(0,q.jsx)(R.Z,{type:"submit",size:"large",color:"primary","aria-label":"save",children:(0,q.jsx)(Q.Z,{})}),(0,q.jsx)(R.Z,{type:"button",size:"large",color:"primary","aria-label":"delete",onClick:function(){return t(e)},children:(0,q.jsx)(V.Z,{})})]})},nn=t(5705),en=t(6727),tn=(0,F.Z)(nn.l0)(f||(f=(0,E.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n"]))),rn=F.Z.label(m||(m=(0,E.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  font-family: 'Segoe UI';\n  font-size: 14px;\n"]))),an=(0,F.Z)(nn.gN)(b||(b=(0,E.Z)(["\n  width: 180px;\n  border: 1px solid #1664e2;\n  border-radius: 4px;\n  outline: 1px solid #1664e2;\n"]))),on=F.Z.div(h||(h=(0,E.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n"]))),ln=F.Z.div(Z||(Z=(0,E.Z)(["\n  position: absolute;\n  top: 0;\n  left: 100%;\n  padding: 3px;\n  width: 110px;\n  border: 1px solid red;\n  border-radius: 4px;\n  color: red;\n  font-size: 8px;\n"]))),sn=(0,en.Ry)({name:(0,en.Z_)().matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f0-9]{3,}$/,"Name is not valid!").required(),number:(0,en.Z_)().matches(/[0-9]{10,13}/,"Phone number is not valid!").required()});var dn=function(n){var e=n.name,t=n.number,r=n.onEditContact,i=n.children;return(0,q.jsx)(nn.J9,{initialValues:{name:e,number:t},validationSchema:sn,onSubmit:function(n,e){var t=e.resetForm,i=n.name,a=n.number;r(i,a),t()},children:(0,q.jsxs)(tn,{autoComplete:"off",children:[(0,q.jsxs)(on,{children:[(0,q.jsxs)(rn,{children:[(0,q.jsx)(T._K$,{fill:"#1664e2"}),(0,q.jsx)(an,{type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}),(0,q.jsx)(nn.Bc,{component:ln,name:"name"})]}),(0,q.jsxs)(rn,{children:[(0,q.jsx)($.MdO,{fill:"#1664e2"}),(0,q.jsx)(an,{type:"tel",name:"number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}),(0,q.jsx)(nn.Bc,{component:ln,name:"number"})]})]}),i]})})},cn=function(n){var e=(""+n).replace(/\D/g,"").match(/^(\d{1,3}|)?(\d{3})(\d{3})(\d{4})$/);return e?[e[1]?"+".concat(e[1]," "):"","(",e[2],") ",e[3],"-",e[4]].join(""):null};var un=function(n){var e=n.name,t=n.number,r=n.id,i=(0,v.useState)(e),a=(0,O.Z)(i,2),o=a[0],l=a[1],s=(0,v.useState)(t),d=(0,O.Z)(s,2),c=d[0],u=d[1],x=(0,v.useState)(!1),p=(0,O.Z)(x,2),f=p[0],m=p[1],b=(0,C.I0)(),h=function(n){b((0,w.GK)(n))},Z=function(n,i){f?(l((function(e){return n||e})),u((function(n){return i||n})),m(!1),b((0,w.mP)({id:r,name:n||e,number:i||t}))):m(!0)};return(0,q.jsxs)(g.Z,{component:"li",sx:{display:"flex",justifyContent:"space-between",mb:"10px"},children:[!f&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(B,{children:[(0,q.jsxs)(W,{children:[(0,q.jsx)(T._K$,{fill:"#1976d2"}),e,":"]}),(0,q.jsxs)(J,{children:[(0,q.jsx)($.MdO,{fill:"#1976d2"}),cn(t)]})]}),(0,q.jsx)(X,{id:r,onDeleteContact:h,onEditContact:Z})]}),f&&(0,q.jsx)(dn,{name:o,number:c,onEditContact:Z,children:(0,q.jsx)(Y,{id:r,onDeleteContact:h})})]})};var xn=function(){var n=(0,C.v9)(I),e=(0,C.v9)(D),t=[].concat((0,M.Z)(n),(0,M.Z)(e)).filter((function(n,e,t){return t.indexOf(n)===e}));return(0,q.jsx)("ul",{children:t.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,q.jsx)(un,{name:t,number:r,id:e},e)}))})},pn=t(4808);var fn=function(){var n=(0,C.I0)();return(0,q.jsxs)(g.Z,{sx:{display:"flex",gap:"20px"},children:[(0,q.jsx)(N.Z,{id:"standard-basic",type:"text",label:"Find contacts by name",variant:"standard",onChange:function(e){n((0,pn.xO)(e.currentTarget.value))},sx:{mb:"1rem",color:"#1976d2",backgroundColor:"#fffefe"}}),(0,q.jsx)(N.Z,{id:"standard-basic",type:"text",label:"Find contacts by number",variant:"standard",onChange:function(e){n((0,pn.nE)(e.currentTarget.value))},sx:{mb:"1rem",color:"#1976d2",backgroundColor:"#fffefe"}})]})},mn=t(7892),bn=t(2216);var hn=function(){var n=(0,C.I0)(),e=(0,C.v9)(_),t=(0,C.v9)(z);return(0,v.useEffect)((function(){n((0,w.yF)())}),[n]),(0,q.jsxs)(g.Z,{sx:{pt:"20px",display:"flex",flexDirection:"column",gap:"15px"},children:[(0,q.jsx)(j.Z,{variant:"h2",sx:{color:"#1976d2",textAlign:"center"},children:"Phonebook"}),(0,q.jsx)(K,{}),(0,q.jsxs)(j.Z,{variant:"h5",component:"h2",sx:{fontWeight:600,display:"flex",gap:"15px",alignItems:"center",color:"#1976d2"},children:["Contacts"," ",(0,q.jsx)(y.Z,{color:"secondary",badgeContent:t.length,sx:{color:"#1976d2"},children:(0,q.jsx)(bn.Z,{})})]}),(0,q.jsx)(fn,{}),e&&(0,q.jsx)(mn.Z,{}),(0,q.jsx)(xn,{})]})}}}]);
//# sourceMappingURL=464.f77292be.chunk.js.map