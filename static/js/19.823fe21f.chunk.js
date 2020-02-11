(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[19],{174:function(n,e,t){"use strict";t.d(e,"i",(function(){return j})),t.d(e,"a",(function(){return w})),t.d(e,"h",(function(){return x})),t.d(e,"d",(function(){return y})),t.d(e,"e",(function(){return O})),t.d(e,"c",(function(){return E})),t.d(e,"b",(function(){return k})),t.d(e,"j",(function(){return z})),t.d(e,"l",(function(){return N})),t.d(e,"f",(function(){return P})),t.d(e,"k",(function(){return D})),t.d(e,"g",(function(){return G}));var r=t(7),a=t(8),i=t(172),o=t(3);function c(){var n=Object(r.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    padding-bottom: 1rem;\n"]);return c=function(){return n},n}function l(){var n=Object(r.a)(["\n    \n"]);return l=function(){return n},n}function u(){var n=Object(r.a)(["\n    width: 100%;\n    font-weight: bold;\n"]);return u=function(){return n},n}function d(){var n=Object(r.a)(["\n    width: 100%;\n    background: none;\n    border: none;\n    padding: 1rem 2rem;\n    color: white;\n    cursor: pointer;\n    background: ",";\n    border-radius: 5px;\n    transition: background 0.2s;\n\n    :hover {\n        background: ",";\n    }\n\n    ","\n"]);return d=function(){return n},n}function s(){var n=Object(r.a)(["\n    box-sizing: border-box;\n    display: block;\n    width: 100%;\n    padding: 0 0.8rem;\n    font-size: 1.2rem;\n"]);return s=function(){return n},n}function m(){var n=Object(r.a)(["\n    box-sizing: border-box;\n    width: 100%;\n    color: red;\n    padding: 0 0.8rem;\n    font-size: 1.2rem;\n"]);return m=function(){return n},n}function f(){var n=Object(r.a)(["\n    width: 100%;\n    background: none;\n    border: none;\n    box-sizing: border-box;\n    padding: 0.8rem;\n    border: 1px solid #ddd;\n    border-radius: 5px;\n    transition: all 0.2s;\n\n    :focus {\n        outline: none;\n        border: 1px solid ",";\n        box-shadow: 0 0 5px ",';\n    }\n\n    &[type="radio"] {\n        outline: none;\n        border: none;\n        box-shadow: none;\n        cursor: pointer;\n        width: 1.6rem;\n        height: 1.6rem;\n    }\n']);return f=function(){return n},n}function p(){var n=Object(r.a)(["\n    margin-top: 1rem;\n    width: 100%;\n    position: relative;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 1rem;\n"]);return p=function(){return n},n}function b(){var n=Object(r.a)(["\n    margin-top: 1rem;\n    width: 100%;\n    position: relative;\n"]);return b=function(){return n},n}function g(){var n=Object(r.a)(["\n    -webkit-box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.2);\n    -moz-box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.2);\n    box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.2);\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 2rem;\n    font-size: 1.5rem;\n    width: 50%;\n\n    @media (max-width: ",") {\n        padding: 1rem;\n        width: 80%;\n    }\n    @media (max-width: ",") {\n        padding: 1rem;\n        width: 100%;\n    }\n"]);return g=function(){return n},n}function h(){var n=Object(r.a)(["\n    width: 100%;\n    padding: 0.8rem;\n    font-size: 1.4rem;\n    border-radius: 5px;\n    color: white;\n    background: #ff4230;\n"]);return h=function(){return n},n}function v(){var n=Object(r.a)(["\n    width: 100%;\n    padding: 0.8rem;\n    border-radius: 5px;\n    font-size: 1.4rem;\n    background: #fff87d;\n"]);return v=function(){return n},n}var j=a.c.span(v()),w=a.c.span(h()),x=Object(a.c)(i.c)(g(),o.a.md,o.a.sm),y=a.c.div(b()),O=a.c.div(p()),E=Object(a.c)(i.b)(f(),o.b.blue,o.b.blue),k=Object(a.c)(i.a)(m()),z=a.c.label(s()),N=a.c.button(d(),o.b.blue,o.b.darkblue,(function(n){return n.light&&"\n            background: #226aff;\n            :hover {\n                background: #042bfc;\n            }\n        "})),P=a.c.div(u()),D=a.c.option(l()),G=a.c.div(c())},178:function(n,e,t){"use strict";var r=t(0),a=t.n(r),i=t(7),o=t(8),c=t(3);function l(){var n=Object(i.a)(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);return l=function(){return n},n}function u(){var n=Object(i.a)(["\n    display: inline-block;\n    position: relative;\n    width: 64px;\n    height: 64px;\n    z-index: 1000;\n    div {\n        position: absolute;\n        top: 27px;\n        width: 11px;\n        height: 11px;\n        border-radius: 50%;\n        background: ",";\n        animation-timing-function: cubic-bezier(0, 1, 1, 0);\n    }\n    div:nth-child(1) {\n        left: 6px;\n        animation: lds-ellipsis1 0.6s infinite;\n    }\n    div:nth-child(2) {\n        left: 6px;\n        animation: lds-ellipsis2 0.6s infinite;\n    }\n    div:nth-child(3) {\n        left: 26px;\n        animation: lds-ellipsis2 0.6s infinite;\n    }\n    div:nth-child(4) {\n        left: 45px;\n        animation: lds-ellipsis3 0.6s infinite;\n    }\n    @keyframes lds-ellipsis1 {\n        0% {\n            transform: scale(0);\n        }\n        100% {\n            transform: scale(1);\n        }\n    }\n    @keyframes lds-ellipsis3 {\n        0% {\n            transform: scale(1);\n        }\n        100% {\n            transform: scale(0);\n        }\n    }\n    @keyframes lds-ellipsis2 {\n        0% {\n            transform: translate(0, 0);\n        }\n        100% {\n            transform: translate(19px, 0);\n        }\n    }\n"]);return u=function(){return n},n}var d=o.c.div(u(),c.b.blue),s=o.c.div(l());e.a=function(){return a.a.createElement(s,null,a.a.createElement(d,null,a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null)))}},680:function(n,e,t){"use strict";t.r(e);var r=t(26),a=t(33),i=t(0),o=t.n(i),c=t(63),l=t(178),u=t(7),d=t(8),s=t(3);function m(){var n=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n"]);return m=function(){return n},n}function f(){var n=Object(u.a)(["\n    width: 100vw;\n    min-height: calc(100vh - ",");\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding-bottom: calc(1 * ",");\n"]);return f=function(){return n},n}var p=d.c.div(f(),s.e,s.e),b=d.c.div(m()),g=t(174),h=t(172),v=t(194),j=t(30),w=t(46),x=t(15);function y(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}var O=v.object().shape({therapyGoal:v.string().required("Cel terapii jest wymagany"),age:v.number().integer("Wiek musi by\u0107 warto\u015bci\u0105 liczbow\u0105").required("Wiek jest wymagany"),gender:v.string().required("P\u0142e\u0107 jest wymagana"),firstName:v.string().required("Imi\u0119 jest wymagane"),lastName:v.string().required("Nazwisko jest wymagane")}),E={push:x.d};e.default=Object(j.c)((function(n){return{currentUser:n.auth.currentUser}}),E)((function(n){var e=Object(i.useState)(!1),t=Object(a.a)(e,2),u=t[0],d=t[1],s=Object(i.useState)(),m=Object(a.a)(s,2),f=(m[0],m[1]),v=null;return n.location&&(v=n.location.state?n.location.state.userAccountId:null),Object(i.useEffect)((function(){v&&w.f.getUser(v).then((function(n){console.log(n),f(n.data.user)})).catch((function(n){console.log(n)}))}),[]),o.a.createElement(p,null,o.a.createElement(c.a,null,o.a.createElement(b,null,o.a.createElement(h.d,{initialValues:{therapyGoal:"",age:"",gender:"",firstName:"",lastName:""},validationSchema:O,onSubmit:function(e){if("doctor"===n.currentUser.accountType){d(!0);var t=function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?y(t,!0).forEach((function(e){Object(r.a)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):y(t).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}({},e,{userAccountId:v});w.e.addPatient(t).then((function(e){console.log(e),n.push("/patient-details/"+e.data.patient.id)})).catch((function(n){console.log(n)})).finally((function(){d(!1)}))}}},o.a.createElement(g.h,null,u&&o.a.createElement(g.g,null,o.a.createElement(l.a,null)),o.a.createElement(g.f,null,"Dodaj nowego pacjenta ",v),o.a.createElement(g.d,null,o.a.createElement(g.j,{htmlFor:"firstName"},"Imi\u0119"),o.a.createElement(g.c,{id:"firstName",name:"firstName",placeholder:"Imi\u0119"}),o.a.createElement(g.b,{name:"firstName",component:"div"})),o.a.createElement(g.d,null,o.a.createElement(g.j,{htmlFor:"lastName"},"Nazwisko"),o.a.createElement(g.c,{name:"lastName",placeholder:"Nazwisko",id:"lastName"}),o.a.createElement(g.b,{name:"lastName",component:"div"})),o.a.createElement(g.d,null,o.a.createElement(g.j,{htmlFor:"age"},"Wiek"),o.a.createElement(g.c,{name:"age",placeholder:"Wiek",id:"age"}),o.a.createElement(g.b,{name:"age",component:"div"})),o.a.createElement(g.d,null,o.a.createElement(g.j,{htmlFor:"gender"},"P\u0142e\u0107 (M/K)"),o.a.createElement(g.c,{name:"gender",placeholder:"P\u0142e\u0107 (M/K)",id:"gender"}),o.a.createElement(g.b,{name:"gender",component:"div"})),o.a.createElement(g.d,null,o.a.createElement(g.j,{htmlFor:"therapyGoal"},"Cel terapii"),o.a.createElement(g.c,{name:"therapyGoal",placeholder:"Cel terapii",id:"therapyGoal"}),o.a.createElement(g.b,{name:"therapyGoal",component:"div"})),o.a.createElement(g.d,null,o.a.createElement(g.l,{type:"submit"},"Dodaj pacjenta")))))))}))}}]);
//# sourceMappingURL=19.823fe21f.chunk.js.map