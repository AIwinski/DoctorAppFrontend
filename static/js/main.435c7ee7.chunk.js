(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[5],{10:function(e,n,t){"use strict";var r;t.d(n,"a",(function(){return r})),function(e){e.LOGIN_REQUEST="@@auth/LOGIN_REQUEST",e.LOGIN_SUCCESS="@@auth/LOGIN_SUCCESS",e.LOGIN_ERROR="@@auth/LOGIN_ERROR",e.REGISTER_REQUEST="@@auth/REGISTER_REQUEST",e.REGISTER_SUCCESS="@@auth/REGISTER_SUCCESS",e.REGISTER_ERROR="@@auth/REGISTER_ERROR",e.AUTH_ERROR_RESET="@@auth/AUTH_ERROR_RESET",e.LOGOUT="@@auth/LOGOUT",e.SET_CURRENT_USER="@@auth/SET_CURRENT_USER"}(r||(r={}))},104:function(e,n,t){e.exports=t(168)},11:function(e,n,t){"use strict";t.d(n,"j",(function(){return E})),t.d(n,"i",(function(){return O})),t.d(n,"k",(function(){return v})),t.d(n,"f",(function(){return y})),t.d(n,"b",(function(){return j})),t.d(n,"d",(function(){return x})),t.d(n,"c",(function(){return w})),t.d(n,"e",(function(){return S})),t.d(n,"h",(function(){return R})),t.d(n,"a",(function(){return k})),t.d(n,"g",(function(){return _}));var r=t(7),a=t(8),o=t(3),i=t(41);function c(){var e=Object(r.a)(["\n    height: ",";\n    margin-left: ",";\n"]);return c=function(){return e},e}function u(){var e=Object(r.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);return u=function(){return e},e}function l(){var e=Object(r.a)(["\n    color: #444;\n    padding: 0 0.5rem;\n"]);return l=function(){return e},e}function s(){var e=Object(r.a)(["\n    text-decoration: none;\n    color: ",";\n    transition: color 0.1s;\n\n    :link {\n        color: ",";\n    }\n\n    &:hover {\n        color: ",";\n    }\n\n    position: relative;\n    display: flex;\n    align-items: center;\n"]);return s=function(){return e},e}function d(){var e=Object(r.a)(["\n    padding: 0 ",";\n    font-size: 1.4rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    \n\n    :last-of-type {\n        padding-right: 0;\n    }\n    @media (max-width: ",") {\n        justify-content: flex-start;\n        padding: ",";\n        border-top: 1px solid ",";\n        :last-of-type {\n            padding-right: ",";\n            border-bottom: 1px solid ",";\n        }\n    }\n"]);return d=function(){return e},e}function f(){var e=Object(r.a)(["\n    display: flex;\n    flex-direction: row;\n    @media (max-width: ",") {\n        width: 100%;\n        left: 0;\n        top: ",";\n        max-height: calc(100vh - ",");\n        position: absolute;\n        flex-direction: column;\n        justify-content: space-evenly;\n        background: white;\n        display: ",";\n    }\n"]);return f=function(){return e},e}function p(){var e=Object(r.a)(["\n    display: none;\n    background: none;\n    @media (max-width: ",") {\n        display: block;\n    }\n    width: 2.6rem;\n    height: 2.6rem;\n    cursor: pointer;\n    padding: 0;\n    margin: 0;\n    border: none;\n    background: ",";\n    color: ",";\n    font-size: 2.2rem;\n    outline: none;\n"]);return p=function(){return e},e}function b(){var e=Object(r.a)(["\n    padding: 0 ",";\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding-left: 0;\n    position: relative;\n    height: 100%;\n"]);return b=function(){return e},e}function m(){var e=Object(r.a)(["\n    position: absolute;\n    background: #ff2020;\n    opacity: 0.92;\n    height: 2rem;\n    font-size: 1.2rem;\n    bottom: -2rem;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    letter-spacing: 0.1rem;\n    justify-content: center;\n    color: white;\n    z-index: 0;\n"]);return m=function(){return e},e}function g(){var e=Object(r.a)(["\n    display: flex;\n    justify-content: ",";\n    /* justify-content: space-between; */\n    align-items: center;\n    height: 100%;\n    box-sizing: border-box;\n"]);return g=function(){return e},e}function h(){var e=Object(r.a)(["\n    position: sticky;\n    box-sizing: border-box;\n    top: 0;\n    z-index: 1000;\n    height: ",";\n    width: 100%;\n    -webkit-box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);\n    -moz-box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);\n    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.2);\n\n    font-weight: bold;\n"]);return h=function(){return e},e}var E=a.c.nav(h(),o.f),O=a.c.div(g(),(function(e){return e.isOnline?"space-between":"center"})),v=a.c.div(m()),y=a.c.div(b(),Object(o.d)(3)),j=a.c.button(p(),o.a.md,o.b.white,o.b.blue),x=a.c.ul(f(),o.a.md,o.f,o.f,(function(e){return e.opened?"flex":"none"})),w=a.c.li(d(),Object(o.d)(4),o.a.md,Object(o.d)(4),o.b.gray,Object(o.d)(4),o.b.gray),S=Object(a.c)(i.Link)(s(),o.b.darkblue,o.b.darkblue,o.b.blue2),R=a.c.span(l()),k=a.c.div(u()),_=a.c.img(c(),(function(e){return e.isBig?"5rem":"3.2rem"}),(function(e){return e.isBig?"2rem":"0rem"}))},161:function(e,n){},168:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(34),i=t.n(o),c=t(33),u=t(30),l=t(93),s=t(21),d=t(7),f=t(8),p=t(3);function b(){var e=Object(d.a)(["\n    ::-webkit-scrollbar {\n        width: 8px;\n    }\n\n    ::-webkit-scrollbar:hover {\n        background: #ddd;\n    }\n\n    /* Track */\n    ::-webkit-scrollbar-track {\n        box-shadow: inset 0 0 4px rgba(148, 148, 148, 0.6);\n    }\n    /* Handle */\n    ::-webkit-scrollbar-thumb {\n        background: rgba(156, 156, 156, 0.7);\n        border-radius: 3px;\n        border: 1px solid rgba(196, 196, 196, 0.7);\n    }\n    ::-webkit-scrollbar-thumb:hover {\n        background: rgba(126, 126, 126, 1);\n    }\n"]);return b=function(){return e},e}var m=Object(f.b)(b());function g(){var e=Object(d.a)(["\n    .router-enter {\n        opacity: 0.01;\n        transform: translate3d(0, 12px, 0);\n    }\n\n    .router-enter-active {\n        opacity: 1;\n        transform: translate3d(0, 0px, 0);\n        transition: all ","ms ","ms;\n    }\n\n    .router-exit {\n        opacity: 1;\n        transform: translate3d(0, 0px, 0);\n    }\n\n    .router-exit-active {\n        opacity: 0.01;\n        transform: translate3d(0, 12px, 0);\n        transition: all ","ms;\n    }\n"]);return g=function(){return e},e}var h=Object(f.b)(g(),p.g.exit,p.g.enter-p.g.exit,p.g.exit);function E(){var e=Object(d.a)(["\n.gallery {\n    &__container {\n        display: grid;\n        grid-gap: 2rem;\n        grid-template-columns: repeat(6, 1fr);\n\n        @media only screen and (max-width: 600px) {\n            grid-template-columns: repeat(2, 1fr);\n        }\n    }\n        \n\n\n    &__image--small {\n        height: 100%;\n        width: 100%;\n        cursor: pointer;\n        position: relative;\n\n        img {\n            height: 100%;\n            width: 100%;\n            object-fit: cover;\n            object-position: center;\n        }\n    }\n}\n\n\n.ril__toolbar {\n    background-color: transparent !important;\n}\n"]);return E=function(){return e},e}var O=Object(f.b)(E());function v(){var e=Object(d.a)(["\n    .input-range {\n        padding: 3rem 0rem;\n        \n        &__label-container {\n            font-size: 1.6rem !important;\n        }\n\n        &__label--value {\n            top: -3rem !important;\n        }\n\n        &__label--max {\n            bottom: -0.4rem !important;\n        }\n\n        &__label--min {\n            bottom: -0.4rem !important;\n        }\n    }\n"]);return v=function(){return e},e}var y=Object(f.b)(v());function j(){var e=Object(d.a)(['\n    @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");\n    html,\n    body {\n        font-size: 62.5%;\n        @media (max-width: ',") {\n            font-size: 60%;\n        }\n        @media (max-width: ",") {\n            font-size: 57.5%;\n        }\n        @media (max-width: ",") {\n            font-size: 55%;\n        }\n        @media (max-width: ",') {\n            font-size: 52.5%;\n        }\n\n    \n        scroll-behavior: smooth;\n\n        max-width: 100vw;\n\n    }\n    body {\n        overflow: overlay;\n        font-size: 1.6rem;\n        line-height: 2.4rem;\n        font-family: "Roboto", sans-serif;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        text-rendering: optimizeLegibility;\n    }\n    html,\n    body,\n    div,\n    span,\n    applet,\n    object,\n    iframe,\n    h1,\n    h2,\n    h3,\n    h4,\n    h5,\n    h6,\n    p,\n    blockquote,\n    pre,\n    a,\n    abbr,\n    acronym,\n    address,\n    big,\n    cite,\n    code,\n    del,\n    dfn,\n    em,\n    img,\n    ins,\n    kbd,\n    q,\n    s,\n    samp,\n    small,\n    strike,\n    strong,\n    sub,\n    sup,\n    tt,\n    var,\n    b,\n    u,\n    i,\n    center,\n    dl,\n    dt,\n    dd,\n    ol,\n    ul,\n    li,\n    fieldset,\n    form,\n    label,\n    legend,\n    table,\n    caption,\n    tbody,\n    tfoot,\n    thead,\n    tr,\n    th,\n    td,\n    article,\n    aside,\n    canvas,\n    details,\n    embed,\n    figure,\n    figcaption,\n    footer,\n    header,\n    hgroup,\n    menu,\n    nav,\n    output,\n    ruby,\n    section,\n    summary,\n    time,\n    mark,\n    audio,\n    video {\n        margin: 0;\n        padding: 0;\n        border: 0;\n        vertical-align: baseline;\n        box-sizing: border-box;\n    }\n    article,\n    aside,\n    details,\n    figcaption,\n    figure,\n    footer,\n    header,\n    hgroup,\n    menu,\n    nav,\n    section {\n        display: block;\n    }\n    ol,\n    ul {\n        list-style: none;\n    }\n    blockquote,\n    q {\n        quotes: none;\n    }\n    blockquote:before,\n    blockquote:after,\n    q:before,\n    q:after {\n        content: "";\n        content: none;\n    }\n    table {\n        border-collapse: collapse;\n        border-spacing: 0;\n    }\n    .page-wrapper {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        padding-top: ',";\n        box-sizing: border-box;\n        display: block;\n    }\n    ","\n    ","\n    ","\n    ","\n\n    select {\n        display: inline-block;\n        width: 100%;\n        height: calc(1.5em + 0.75rem + 2px);\n        padding: 0.375rem 1.75rem 0.375rem 0.75rem;\n        font-weight: 400;\n        line-height: 1.5;\n        color: #495057;\n        vertical-align: middle;\n        background: #fff url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\") no-repeat right 0.75rem center/16px 12px;\n        border: 1px solid #ced4da;\n        border-radius: 0.25rem;\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n    }\n"]);return j=function(){return e},e}var x=Object(f.a)(j(),p.a.xl,p.a.lg,p.a.md,p.a.sm,p.e,m,h,O,y),w=t(42),S=t(11),R=t(63),k=t(24),_=t(47),T=t(41);function U(){var e=Object(d.a)(["\n    padding: 0.5rem;\n    width: 100%;\n    font-size: 1.4rem;\n    border-bottom: 1px solid #eee;\n    background: ",";\n    text-decoration: none;\n    color: ",";\n    text-align: center;\n\n    &:hover {\n        background: #ddd;\n        cursor: pointer;\n    }\n\n"]);return U=function(){return e},e}function I(){var e=Object(d.a)(["\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    top: 120%;\n    right: 0;\n    width: 12rem;\n\n    box-shadow:\n  0 4.5px 10px rgba(0, 0, 0, 0.078),\n  0 9px 80px rgba(0, 0, 0, 0.12)\n;\n\n    border: 1px solid #eee;\n\n"]);return I=function(){return e},e}function P(){var e=Object(d.a)(["\n    display: block;\n    border: none;\n    width: 2.6rem;\n    height: 2.6rem;\n    cursor: pointer;\n    padding: 0;\n    margin: 0;\n    border-radius: 100%;\n    background: ",";\n    color: ",";\n    font-size: 2.2rem;\n    outline: none;\n"]);return P=function(){return e},e}function C(){var e=Object(d.a)(["\n    width: 2.6rem;\n    height: 2.6rem;\n    padding: 0;\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);return C=function(){return e},e}var N=f.c.div(C()),L=f.c.button(P(),p.b.white,p.b.blue),z=f.c.ul(I()),G=Object(f.c)(T.Link)(U(),p.b.white,p.b.blue);var D=function(e,n){function t(t){e.current&&!e.current.contains(t.target)&&n()}Object(r.useEffect)((function(){return document.addEventListener("mousedown",t),function(){document.removeEventListener("mousedown",t)}}))},A=function(e){var n=Object(r.useRef)(null),t=Object(r.useState)(!1),o=Object(c.a)(t,2),i=o[0],u=o[1];return D(n,(function(){u(!1)})),a.a.createElement(N,{ref:n},a.a.createElement(L,{onClick:function(){return u(!i)}},e.children),i&&a.a.createElement(z,null,e.elements.map((function(e,n){return a.a.createElement(G,{key:n,to:e.url,onClick:function(){u(!i),e.onclick&&e.onclick()}},e.text)}))))},F=t(38),M=t(39),Q={logout:k.d},q=Object(u.c)((function(e){return{currentUser:e.auth.currentUser,isAuthenticated:e.auth.isAuthenticated}}),Q)((function(e){var n=Object(r.useState)(!1),t=Object(c.a)(n,2),o=t[0],i=t[1];return a.a.createElement(S.j,null,!e.isOnline&&a.a.createElement(S.k,null,"Jeste\u015b offline"),a.a.createElement(R.a,{maxheight:!0},a.a.createElement(S.i,{isOnline:e.isOnline},a.a.createElement(S.f,{onClick:function(){return i(!1)}},a.a.createElement(S.e,{to:"/"},a.a.createElement(S.g,{src:"/logo.svg"}))),e.isOnline&&a.a.createElement(a.a.Fragment,null,a.a.createElement(S.b,{onClick:function(){return i(!o)}},o?a.a.createElement(F.a,{icon:M.j}):a.a.createElement(F.a,{icon:M.c})),a.a.createElement(S.d,{opened:o},a.a.createElement(S.c,{onClick:function(){return i(!1)}},a.a.createElement(S.e,{to:"/list"},"Przegl\u0105daj profile")),e.isAuthenticated?a.a.createElement(a.a.Fragment,null,a.a.createElement(S.c,{onClick:function(){return i(!1)}},a.a.createElement(S.e,{to:"/chat"},"Chat")),"doctor"===e.currentUser.accountType?a.a.createElement(a.a.Fragment,null,a.a.createElement(S.c,{onClick:function(){return i(!1)}},a.a.createElement(S.e,{to:"/dashboard"},"Panel")),a.a.createElement(S.c,null,a.a.createElement(S.a,null,a.a.createElement(_.a,{url:e.currentUser.avatar?e.currentUser.avatar:void 0}),a.a.createElement(S.h,null,e.currentUser.displayName),a.a.createElement(A,{elements:[{text:"M\xf3j profil",url:"/profile/"+e.currentUser.profileId},{text:"Edytuj profil",url:"/profile-settings"},{text:"Wyloguj si\u0119",onclick:function(){e.logout()}}]},a.a.createElement(F.a,{icon:M.a}))))):a.a.createElement(S.c,null,a.a.createElement(S.a,null,a.a.createElement(_.a,{url:e.currentUser.avatar?e.currentUser.avatar:void 0}),a.a.createElement(S.h,null,e.currentUser.displayName),a.a.createElement(A,{elements:[{text:"Edytuj profil",url:"/profile-settings"},{text:"Wyloguj si\u0119",onclick:function(){e.logout()}}]},a.a.createElement(F.a,{icon:M.a}))))):a.a.createElement(a.a.Fragment,null,a.a.createElement(S.c,{onClick:function(){return i(!1)}},a.a.createElement(S.e,{to:"/login"},"Logowanie")),a.a.createElement(S.c,{onClick:function(){return i(!1)}},a.a.createElement(S.e,{to:"/register"},"Rejestracja"))))))))})),B=t(171),W=t(170),H=t(9),J=Object(H.o)((function(e){return a.a.createElement(B.a,null,a.a.createElement(W.a,{key:e.location.pathname.split("/")[1]||"/",classNames:"router",timeout:{appear:p.g.appear,enter:p.g.enter,exit:p.g.exit},appear:!0},a.a.createElement("div",{className:"page-wrapper"},a.a.createElement(r.Suspense,{fallback:a.a.createElement(w.a,null)},a.a.createElement(H.g,{location:e.location},e.children)))))})),K=t(36),V=Object(r.lazy)((function(){return t.e(11).then(t.bind(null,675))})),Y=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(15)]).then(t.bind(null,682))})),X=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(16)]).then(t.bind(null,678))})),Z=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(14)]).then(t.bind(null,673))})),$=Object(r.lazy)((function(){return t.e(20).then(t.bind(null,683))})),ee=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(8),t.e(17)]).then(t.bind(null,674))})),ne=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(4),t.e(10)]).then(t.bind(null,676))})),te=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(4),t.e(9)]).then(t.bind(null,672))})),re=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(3),t.e(12)]).then(t.bind(null,671))})),ae=Object(r.lazy)((function(){return t.e(18).then(t.bind(null,684))})),oe=Object(r.lazy)((function(){return t.e(21).then(t.bind(null,679))})),ie=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(19)]).then(t.bind(null,680))})),ce=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(13)]).then(t.bind(null,677))})),ue=Object(r.lazy)((function(){return t.e(22).then(t.bind(null,681))})),le=function(){var e=Object(r.useState)(navigator.onLine),n=Object(c.a)(e,2),t=n[0],o=n[1];Object(r.useEffect)((function(){window.addEventListener("online",i),window.addEventListener("offline",i)}),[]);var i=function(e){console.log(e.type),"offline"===e.type?(o(!1),s.a.push("/offline")):(o(!0),s.a.push("/"))};return a.a.createElement(r.Suspense,{fallback:a.a.createElement(w.a,null)},a.a.createElement(u.a,{store:s.c},a.a.createElement(l.a,{persistor:s.b},a.a.createElement(K.a,{history:s.a},a.a.createElement(a.a.Fragment,null,a.a.createElement(x,null),a.a.createElement(q,{isOnline:t}),a.a.createElement(J,null,a.a.createElement(H.d,{exact:!0,path:"/",component:V}),a.a.createElement(H.d,{exact:!0,path:"/login",component:Y}),a.a.createElement(H.d,{exact:!0,path:"/register",component:X}),a.a.createElement(H.d,{exact:!0,path:"/register-success",component:$}),a.a.createElement(H.d,{path:"/chat",component:Z}),a.a.createElement(H.d,{path:"/chat/:id",component:Z}),a.a.createElement(H.d,{path:"/list",component:ee}),a.a.createElement(H.d,{path:"/profile-settings",component:te}),a.a.createElement(H.d,{path:"/profile/:id",component:ne}),a.a.createElement(H.d,{path:"/dashboard",component:re}),a.a.createElement(H.d,{path:"/video/:id",component:ae}),a.a.createElement(H.d,{path:"/not-found",component:oe}),a.a.createElement(H.d,{path:"/add-patient",component:ie}),a.a.createElement(H.d,{path:"/patient-details/:id",component:ce}),a.a.createElement(H.d,{path:"/offline",component:ue}),a.a.createElement(H.c,{to:{pathname:"/not-found"}})))))))};i.a.render(a.a.createElement(le,null),document.getElementById("root")),"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("service-worker.js").then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}))},21:function(e,n,t){"use strict";var r=t(14),a=t.n(r),o=t(17),i=t(94),c=t(62),u=t(95),l=t.n(u),s=t(96),d=t(100),f=t(13),p=t(26),b=t(10);function m(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?m(t,!0).forEach((function(n){Object(p.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var h={currentUser:{id:"",avatar:"",displayName:"",email:"",accountType:"",profileId:""},token:"",isLoggingIn:!1,isRegistering:!1,isAuthenticated:!1,error:null},E=t(46),O=t(24),v=t(15),y=a.a.mark(_),j=a.a.mark(T),x=a.a.mark(U),w=a.a.mark(I),S=a.a.mark(P),R=a.a.mark(C),k=a.a.mark(N);function _(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(f.b)(E.a.login,e.payload);case 3:if(!(n=t.sent).error){t.next=9;break}return t.next=7,Object(f.d)(Object(O.a)(n.error));case 7:t.next=18;break;case 9:return t.next=11,Object(f.d)(Object(O.c)(n.data));case 11:if(!e.payload.from){t.next=16;break}return t.next=14,Object(f.d)(Object(v.d)(e.payload.from));case 14:t.next=18;break;case 16:return t.next=18,Object(f.d)(Object(v.d)("/"));case 18:t.next=25;break;case 20:return t.prev=20,t.t0=t.catch(0),console.log(t.t0),t.next=25,Object(f.d)(Object(O.a)(t.t0));case 25:case"end":return t.stop()}}),y,null,[[0,20]])}function T(e){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(f.b)(E.a.register,e.payload);case 3:if(!(n=t.sent).error){t.next=9;break}return t.next=7,Object(f.d)(Object(O.e)(n.error));case 7:t.next=11;break;case 9:return t.next=11,Object(f.d)(Object(O.g)(n.data));case 11:t.next=17;break;case 13:return t.prev=13,t.t0=t.catch(0),t.next=17,Object(f.d)(Object(O.e)(t.t0));case 17:case"end":return t.stop()}}),j,null,[[0,13]])}function U(e){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.d)(Object(v.d)("/"));case 2:case"end":return e.stop()}}),x)}function I(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.e)(b.a.LOGIN_REQUEST,_);case 2:case"end":return e.stop()}}),w)}function P(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.e)(b.a.REGISTER_REQUEST,T);case 2:case"end":return e.stop()}}),S)}function C(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.e)(b.a.LOGOUT,U);case 2:case"end":return e.stop()}}),R)}function N(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.a)([Object(f.c)(I),Object(f.c)(P),Object(f.c)(C)]);case 2:case"end":return e.stop()}}),k)}var L,z=N,G=t(36),D=t(89),A=t(18);function F(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function M(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?F(t,!0).forEach((function(n){Object(p.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):F(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}!function(e){e.SEND_MESSAGE_REQUEST="@@chat/SEND_MESSAGE_REQUEST",e.SEND_MESSAGE_SUCCESS="@@chat/SEND_MESSAGE_SUCCESS",e.SEND_MESSAGE_ERROR="@@chat/SEND_MESSAGE_ERROR"}(L||(L={}));var Q={},q=t(86);function B(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function W(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?B(t,!0).forEach((function(n){Object(p.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):B(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var H={city:"All",services:[],priceRange:{min:0,max:200}},J=t(87);function K(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function V(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?K(t,!0).forEach((function(n){Object(p.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):K(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var Y={sorting:"POPULARITY_ASC"};t.d(n,"a",(function(){return Z})),t.d(n,"c",(function(){return ae})),t.d(n,"b",(function(){return oe}));var X=a.a.mark(ie),Z=Object(A.a)(),$=Object(o.combineReducers)({router:Object(G.b)(Z),auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case b.a.LOGOUT:return g({},e,{isAuthenticated:!1,currentUser:{id:"",avatar:"",displayName:"",email:"",accountType:"",profileId:""},token:""});case b.a.LOGIN_REQUEST:return g({},e,{isLoggingIn:!0});case b.a.LOGIN_SUCCESS:return g({},e,{isLoggingIn:!1,isAuthenticated:!0,currentUser:{id:n.payload.user.id,avatar:n.payload.user.avatar,displayName:n.payload.user.displayName,email:n.payload.user.email,accountType:n.payload.user.accountType,profileId:n.payload.user.profileId},token:n.payload.token});case b.a.LOGIN_ERROR:return g({},e,{isLoggingIn:!1,error:n.payload});case b.a.REGISTER_REQUEST:return g({},e,{isRegistering:!0});case b.a.REGISTER_SUCCESS:return g({},e,{isRegistering:!1});case b.a.REGISTER_ERROR:return g({},e,{isRegistering:!1,error:n.payload});case b.a.AUTH_ERROR_RESET:return g({},e,{error:null});case b.a.SET_CURRENT_USER:return g({},e,{currentUser:g({},e.currentUser,{displayName:void 0!==n.payload.displayName?n.payload.displayName:e.currentUser.displayName,avatar:void 0!==n.payload.avatar?n.payload.avatar:e.currentUser.avatar})});default:return e}},chat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case L.SEND_MESSAGE_REQUEST:case L.SEND_MESSAGE_SUCCESS:case L.SEND_MESSAGE_ERROR:return M({},e);default:return e}},filters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case q.a.FILTER:return console.log(n.payload),W({},e,{},n.payload);default:return e}},sorting:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case J.a.SORT:return V({},e,{},n.payload);default:return e}}}),ee={key:"root",storage:l.a,whitelist:["auth","filters","sorting"]},ne=Object(i.createLogger)(),te=Object(c.a)(ee,$),re=Object(d.a)(),ae=Object(o.createStore)(te,Object(s.composeWithDevTools)(Object(o.applyMiddleware)(Object(D.a)(Z),ne,re))),oe=Object(c.b)(ae);function ie(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.a)([Object(f.c)(z)]);case 2:case"end":return e.stop()}}),X)}re.run(ie)},22:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"e",(function(){return a})),t.d(n,"d",(function(){return o})),t.d(n,"c",(function(){return i})),t.d(n,"b",(function(){return c}));var r="https://praca-inz-backend.herokuapp.com",a=r+"/uploads/",o=5,i=100,c="https://icon-library.net/images/default-user-icon/default-user-icon-8.jpg"},24:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return c})),t.d(n,"f",(function(){return u})),t.d(n,"g",(function(){return l})),t.d(n,"e",(function(){return s})),t.d(n,"h",(function(){return d})),t.d(n,"d",(function(){return f})),t.d(n,"i",(function(){return p}));var r=t(23),a=t(10),o=function(e){return Object(r.action)(a.a.LOGIN_REQUEST,e)},i=function(e){return Object(r.action)(a.a.LOGIN_SUCCESS,e)},c=function(e){return Object(r.action)(a.a.LOGIN_ERROR,e)},u=function(e){return Object(r.action)(a.a.REGISTER_REQUEST,e)},l=function(e){return Object(r.action)(a.a.REGISTER_SUCCESS,e)},s=function(e){return Object(r.action)(a.a.REGISTER_ERROR,e)},d=function(){return Object(r.action)(a.a.AUTH_ERROR_RESET)},f=function(){return Object(r.action)(a.a.LOGOUT)},p=function(e){return Object(r.action)(a.a.SET_CURRENT_USER,e)}},3:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return a})),t.d(n,"g",(function(){return o})),t.d(n,"f",(function(){return i})),t.d(n,"e",(function(){return c})),t.d(n,"c",(function(){return u})),t.d(n,"d",(function(){return l}));var r={white:"#FFFFFF",black:"#000000",gray:"#E1E1E1",golden:"#CD9843",lightgray:"#EEEEEE",blue:"#3b95f5",blue2:"#00d1a4",darkblue:"#277cd6"},a={sm:"576px",md:"768px",lg:"992px",xl:"1200px"},o={appear:300,enter:500,exit:375},i="55px",c="calc(".concat(i+" + 0rem",")"),u=2,l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return.5*e+"rem"}},42:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(60),i=t.n(o);i.a.config({barColors:{0:"#3b95f5","1.0":"#00d1a4"},shadowColor:"#0b05f5"});n.a=function(){return a.a.createElement(i.a,null)}},46:function(e,n,t){"use strict";t.d(n,"c",(function(){return s})),t.d(n,"d",(function(){return d})),t.d(n,"g",(function(){return l})),t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b})),t.d(n,"f",(function(){return m})),t.d(n,"e",(function(){return g}));var r=t(29),a=t.n(r),o=t(22),i=t(21),c=t(10),u=t(97),l=t.n(u).a.connect(o.a);l.on("SET_ID",(function(e){localStorage.setItem("SOCKET_ID",e),f.get("/")})),a.a.interceptors.request.use((function(e){var n=localStorage.getItem("SOCKET_ID")||"";e.headers.socketid=n;var t=i.c.getState().auth.token;return t&&(e.headers.Authorization="Bearer ".concat(t)),e}),(function(e){return Promise.reject(e)})),a.a.interceptors.response.use((function(e){return e}),(function(e){return e.response&&401===e.response.status&&"/login"!==i.a.location.pathname&&(i.c.dispatch({type:c.a.LOGOUT}),i.a.push({pathname:"/login",state:{from:i.a.location.pathname,showLoginFirstMessage:!0}})),Promise.reject(e.response)}));var s,d,f={get:function(e,n){return a.a.get("".concat(o.a).concat(e),n)},post:function(e,n,t){return a.a.post("".concat(o.a).concat(e),n,t)},put:function(e,n,t){return a.a.put("".concat(o.a).concat(e),n,t)},patch:function(e,n,t){return a.a.patch("".concat(o.a).concat(e),n,t)},delete:function(e,n){return a.a.delete("".concat(o.a).concat(e),n)}},p={register:function(e){return f.post("/auth/register",e)},login:function(e){return e.loginType===s.local?f.post("/auth/login",e.data):e.loginType===s.facebook?(console.log(e.data),f.post("/auth/facebookToken",e.data)):void 0}};!function(e){e.local="LOCAL",e.facebook="FACEBOOK"}(s||(s={})),function(e){e.text="text",e.file="file"}(d||(d={}));var b={sendMessage:function(e){if(e.messageType===d.file){var n=new FormData;return n.append("file",e.file),n.set("conversationId",e.conversationId),n.set("text",e.text),n.set("messageType",e.messageType),f.post("/upload/file",n,{headers:{"Content-Type":"multipart/form-data"}})}return f.post("/chat/send",e)},getConversations:function(){return f.get("/chat/conversations")},getMessages:function(e){return f.get("/chat/conversations/"+encodeURIComponent(e.conversationId)+"?qty="+encodeURIComponent(e.qty)+"&offset="+encodeURIComponent(e.offset))},getFile:function(e){return f.get("/upload/file/"+e,{responseType:"blob"})}},m={getProfiles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=encodeURIComponent(JSON.stringify(n));return f.get("/profile?already_fetched=".concat(e,"&filters=").concat(t,"&batch_size=").concat(o.d))},getProfile:function(e){return f.get("/profile/".concat(e))},addPriceListElement:function(e){return f.post("/profile/price-list-element",e)},deletePriceListElement:function(e){return f.delete("/profile/price-list-element/".concat(e))},addImage:function(e){var n=new FormData;return n.append("file",e.file),n.set("profileId",e.profileId),f.post("/upload/image",n,{headers:{"Content-Type":"multipart/form-data"}})},deleteImage:function(e){return f.delete("/profile/image/"+e)},uploadAvatar:function(e){var n=new FormData;return n.append("file",e.file),f.post("/upload/avatar",n,{headers:{"Content-Type":"multipart/form-data"}})},resetAvatar:function(){return f.get("/profile/avatar-reset")},updateProfileData:function(e,n){return f.put("/profile/"+n,e)},updateUserData:function(e){return f.put("/profile/user",e)},addReview:function(e){return f.post("/profile/review",e)},updateReview:function(e){return f.put("/profile/review",e)},search:function(e){return f.get("/profile/search/"+e)},count:function(){return f.get("/profile/count")},mostRecent:function(){return f.get("/profile/most-recent")},getReport:function(e,n){return f.get("/profile/report?profile="+n+"&days="+e)},getUser:function(e){return f.get("/user/"+e)}},g={getPatients:function(){return f.get("/patient")},getPatient:function(e){return f.get("/patient/"+e)},addPatient:function(e){return f.post("/patient",e)},addNote:function(e){return f.post("/patient/note",e)},deleteNote:function(e){return f.delete("/patient/note/"+e)},getNotes:function(e){return f.get("/patient/note"+(e?"/"+e:""))},getDataSets:function(e){return f.get("/patient/data-set/"+e)},addDataSet:function(e,n){return f.post("/patient/data-set/"+e,n)},removeDataSet:function(e){return f.delete("/patient/data-set/"+e)},addDataValue:function(e){return f.post("/patient/data-value",e)},deleteDataValue:function(e){return f.delete("/patient/data-value/"+e)}}},47:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(7),i=t(8);function c(){var e=Object(o.a)(["\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    background-size: contain;\n    border-radius: ",";\n"]);return c=function(){return e},e}function u(){var e=Object(o.a)(["\n    width: ",";\n    height: ",";\n    border-radius: ",";\n    border: 1px solid #ccc;\n"]);return u=function(){return e},e}var l=i.c.div(u(),(function(e){return e.isFull?"100%":"30px"}),(function(e){return e.isFull?"100%":"30px"}),(function(e){return e.isFull?"0px":"30px"})),s=i.c.img(c(),(function(e){return e.isFull?"0px":"30px"})),d=t(22);n.a=function(e){var n=e.url||"";return n=n?n.includes("http")?e.url:d.e+e.url:d.b,a.a.createElement(l,{isFull:e.isFull},a.a.createElement(s,{src:n,isFull:e.isFull}))}},63:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t(7),a=t(8),o=t(3);function i(){var e=Object(r.a)(["\n    display: block;\n    padding-left: ","rem;\n    padding-right: ","rem;\n    @media (max-width: ",") {\n        padding-right: ","rem;\n        padding-left: ","rem;\n    }\n    @media (max-width: ",") {\n        padding-right: ","rem;\n        padding-left: ","rem;\n    }\n    @media (max-width: ",") {\n        padding-right: ","rem;\n        padding-left: ","rem;\n    }\n    @media (max-width: ",") {\n        padding-right: ","rem;\n        padding-left: ","rem;\n    }\n    \n    ","\n\n    width: 100%;\n    max-width: 100vw;\n"]);return i=function(){return e},e}var c=a.c.div(i(),8*o.c,8*o.c,o.a.xl,6*o.c,6*o.c,o.a.lg,4*o.c,4*o.c,o.a.md,2*o.c,2*o.c,o.a.sm,o.c,o.c,(function(e){return e.maxheight&&"\n            height: 100%\n        "}))},86:function(e,n,t){"use strict";var r;t.d(n,"a",(function(){return r})),function(e){e.FILTER="@@filters/filter"}(r||(r={}))},87:function(e,n,t){"use strict";var r;t.d(n,"a",(function(){return r})),function(e){e.SORT="@@sorting/sort"}(r||(r={}))}},[[104,6,7]]]);
//# sourceMappingURL=main.435c7ee7.chunk.js.map