(this["webpackJsonpblog-post"]=this["webpackJsonpblog-post"]||[]).push([[1],{122:function(e,t,n){},123:function(e,t,n){},127:function(e,t,n){},128:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(17),E=n.n(a),l=n(38),o=n(72),i=n(81),T=function(e){e&&e instanceof Function&&n.e(8).then(n.bind(null,262)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,E=t.getTTFB;n(e),c(e),r(e),a(e),E(e)}))},s=n(27),O=n(59),S=(n(112),n(83)),u=n(91),_=n(82),C=n.n(_),j=n(6),d=n(39),b=n(29),m=function(e){var t=e.objectId;return e.objects.filter((function(e){return e.id!==t}))},p=function(e){var t=e.object,n=e.objects,c=Object(b.a)(n);return c.push(t),c},f=function(e){var t=e.object;return e.objects.map((function(e){return e.id===t.id?t:e}))},h={commentsArr:null,commentsError:null},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.a.GET_COMMENTS_SUCCESS:return Object(j.a)(Object(j.a)({},e),{},{commentsArr:t.payload,commentsError:null});case d.a.GET_COMMENTS_FAILURE:return Object(j.a)(Object(j.a)({},e),{},{commentsError:t.payload});case d.a.DELETE_COMMENT_SUCCESS:return Object(j.a)(Object(j.a)({},e),{},{commentsArr:m(t.payload)});case d.a.UPDATE_COMMENT_SUCCESS:return Object(j.a)(Object(j.a)({},e),{},{commentsArr:f(t.payload)});case d.a.CREATE_COMMENT_SUCCESS:return Object(j.a)(Object(j.a)({},e),{},{commentsArr:p(t.payload)});default:return e}},M=n(34),N={posts:null,postsError:null,post:null,postError:null},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M.a.GET_POSTS_SUCCESS:return Object(j.a)(Object(j.a)({},e),{},{posts:t.payload,postsError:null});case M.a.GET_POSTS_FAILURE:return Object(j.a)(Object(j.a)({},e),{},{postsError:t.payload});case M.a.GET_POST_SUCCESS:return Object(j.a)(Object(j.a)({},e),{},{post:t.payload,postError:null});case M.a.GET_POST_FAILURE:return Object(j.a)(Object(j.a)({},e),{},{postError:t.payload});case M.a.DELETE_POST_SUCCESS:return Object(j.a)(Object(j.a)({},e),{},{posts:m(t.payload)});case M.a.UPDATE_POST_SUCCESS:return Object(j.a)(Object(j.a)({},e),{},{posts:f(t.payload)});case M.a.CREATE_POST_SUCCESS:return Object(j.a)(Object(j.a)({},e),{},{posts:p(t.payload)});default:return e}},P={key:"root",storage:C.a,whitelist:[]},I=Object(s.b)({posts:v,comments:A}),g=Object(O.a)(P,I),U=n(64),D=n.n(U),R=n(92),L=D.a.mark(x);function x(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(R.a)([]);case 2:case"end":return e.stop()}}),L)}var y=Object(u.a)(),F=[S.a,y];var w=Object(s.d)(g,s.a.apply(void 0,F));y.run(x);var G=Object(O.b)(w),k=n(166),z=n(13),B=n(60),V=n(162),H=n(164),Y=n(163),J=n(139),W=n(157),K=n(4),X=function(e){var t=e.children,n=Object(k.a)().i18n,c=Object(J.a)({palette:{primary:{light:"#FFAC5F",main:"#FF9F45",dark:"#FF8512",contrastText:"#fff"}},direction:n.dir(),typography:{fontFamily:"ltr"===n.dir()?'"Inter", Arial, Helvetica, sans-serif':'"Tajawal", Arial, Helvetica, sans-serif',button:{textTransform:"none",fontSize:14},body1:{fontSize:"1.4rem"},body2:{fontSize:"1rem"}}});return Object(K.jsx)(W.a,{theme:c,children:t})},q=function(){return Object(B.b)(),null},Q=(n(122),n(159)),Z=n(160),$=n(161),ee=n(138),te=n(165),ne=n(158),ce=n(61),re=n(87),ae=n(46),Ee={en:{translation:n(88)},ar:{translation:n(89)}};ce.a.use(re.a).use(ae.e),ce.a.use(ae.e).init({language:"en",resources:Ee,initImmediate:!0,fallbackLng:"en",debug:!1,supportedLngs:["en","ar"],interpolation:{escapeValue:!1},react:{useSuspense:!0}});ce.a;var le,oe,ie,Te,se,Oe,Se,ue,_e,Ce,je,de,be,me,pe,fe,he,Ae,Me,Ne=function(){var e=Object(k.a)().i18n,t=function(t){e.changeLanguage(t)};return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(te.a,{component:"div",display:"ar"===e.language?"none":"inherit",children:Object(K.jsx)(ne.a,{variant:"text",onClick:function(){return t("ar")},children:"\u0627\u0644\u0639\u0631\u0628\u064a\u0629"})}),Object(K.jsx)(te.a,{component:"div",display:"en"===e.language?"none":"inherit",children:Object(K.jsx)(ne.a,{variant:"text",onClick:function(){return t("en")},children:"English"})})]})},ve=["title","titleId"];function Pe(){return Pe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e},Pe.apply(this,arguments)}function Ie(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function ge(e,t){var n=e.title,r=e.titleId,a=Ie(e,ve);return c.createElement("svg",Pe({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,c.createElement("circle",{style:{fill:"#FF9911"},cx:256,cy:256,r:247.916}),c.createElement("path",{style:{fill:"#ED8800"},d:"M256,8.084c-10.96,0-21.752,0.72-32.337,2.099C345.304,26.029,439.242,130.04,439.242,256 s-93.939,229.971-215.579,245.817c10.585,1.379,21.377,2.099,32.337,2.099c136.921,0,247.916-110.996,247.916-247.916 S392.921,8.084,256,8.084z"}),c.createElement("path",{style:{fill:"#FFFFFF"},d:"M383.464,223.124h-51.473v-49.933c0-31.953-25.903-57.856-57.856-57.856h-79.387 c-31.953,0-57.856,25.903-57.856,57.856v165.619c0,31.953,25.903,57.856,57.856,57.856h144.061 c31.953,0,57.856-25.903,57.856-57.856V236.325C396.665,229.034,390.755,223.124,383.464,223.124z M207.495,158.451h53.895 c15.156,0,27.486,12.33,27.486,27.486s-12.33,27.486-27.486,27.486h-53.895c-15.156,0-27.486-12.33-27.486-27.486 S192.338,158.451,207.495,158.451z M326.063,342.771H207.495c-15.156,0-27.486-12.33-27.486-27.486 c0-15.156,12.33-27.486,27.486-27.486h118.568c15.156,0,27.486,12.33,27.486,27.486C353.549,330.44,341.219,342.771,326.063,342.771 z"}),le||(le=c.createElement("path",{d:"M437.019,74.981C388.667,26.628,324.379,0,256,0S123.333,26.628,74.981,74.981S0,187.62,0,256 s26.628,132.667,74.981,181.019S187.62,512,256,512s132.667-26.628,181.019-74.981C485.372,388.667,512,324.379,512,256 S485.372,123.333,437.019,74.981z M256,495.832C123.756,495.832,16.168,388.244,16.168,256S123.756,16.168,256,16.168 S495.832,123.756,495.832,256S388.244,495.832,256,495.832z"})),oe||(oe=c.createElement("path",{d:"M390.57,215.579h-51.033v-42.388c0-36.062-29.339-65.401-65.401-65.401h-79.387c-36.062,0-65.401,29.339-65.401,65.401 v165.619c0,36.062,29.339,65.401,65.401,65.401h144.061c36.062,0,65.401-29.339,65.401-65.401V229.22 C404.211,221.698,398.091,215.579,390.57,215.579z M388.042,338.809c0,27.147-22.085,49.233-49.233,49.233H194.749 c-27.147,0-49.233-22.086-49.233-49.233V173.191c0-27.147,22.086-49.233,49.233-49.233h79.387c27.148,0,49.233,22.086,49.233,49.233 v50.472c0,4.465,3.618,8.084,8.084,8.084h56.589V338.809z"})),ie||(ie=c.createElement("path",{d:"M325.366,280.253h-64.197c-4.465,0-8.084,3.62-8.084,8.084l0,0c0,4.465,3.62,8.084,8.084,8.084h64.396 c10.55,0,19.536,8.633,19.36,19.183c-0.171,10.254-8.567,18.543-18.861,18.543H207.995c-10.55,0-19.536-8.633-19.36-19.183 c0.17-10.254,8.566-18.543,18.86-18.543h14.295c4.465,0,8.084-3.62,8.084-8.084l0,0c0-4.465-3.62-8.084-8.084-8.084h-13.597 c-19.6,0-36.058,16.039-35.725,35.636c0.323,19.039,15.912,34.427,35.026,34.427h118.568c19.114,0,34.703-15.388,35.026-34.427 C361.423,296.292,344.965,280.253,325.366,280.253z"})),Te||(Te=c.createElement("path",{d:"M207.495,220.968h53.895c19.317,0,35.032-15.716,35.032-35.032s-15.715-35.032-35.032-35.032h-53.895 c-19.316,0-35.032,15.716-35.032,35.032S188.179,220.968,207.495,220.968z M207.495,167.074h53.895 c10.401,0,18.863,8.463,18.863,18.863c0,10.401-8.463,18.863-18.863,18.863h-53.895c-10.401,0-18.863-8.463-18.863-18.863 C188.632,175.536,197.094,167.074,207.495,167.074z"})),se||(se=c.createElement("g",null)),Oe||(Oe=c.createElement("g",null)),Se||(Se=c.createElement("g",null)),ue||(ue=c.createElement("g",null)),_e||(_e=c.createElement("g",null)),Ce||(Ce=c.createElement("g",null)),je||(je=c.createElement("g",null)),de||(de=c.createElement("g",null)),be||(be=c.createElement("g",null)),me||(me=c.createElement("g",null)),pe||(pe=c.createElement("g",null)),fe||(fe=c.createElement("g",null)),he||(he=c.createElement("g",null)),Ae||(Ae=c.createElement("g",null)),Me||(Me=c.createElement("g",null)))}var Ue,De=c.forwardRef(ge),Re=(n.p,n(123),Object(ee.a)((function(e){return{appBar:{backgroundColor:"#fffffff7"},formControl:{margin:e.spacing(1),minWidth:120}}}))),Le=function(){var e=Re(),t=Object(k.a)().t;return Object(K.jsx)(Q.a,{className:e.appBar,position:"fixed",children:Object(K.jsx)(Z.a,{children:Object(K.jsx)($.a,{maxWidth:"md",children:Object(K.jsxs)("div",{className:"app-header",children:[Object(K.jsx)(l.b,{to:"/",children:Object(K.jsx)(De,{})}),Object(K.jsx)("div",{children:Object(K.jsx)(l.c,{exact:!0,className:"menu-item",activeClassName:"active",to:"/",children:t("NAVIGATION.HOME")})}),Object(K.jsx)("div",{children:Object(K.jsx)(Ne,{})})]})})})})},xe=(n(127),n(128),Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(5)]).then(n.bind(null,263))}))),ye=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,281))})),Fe=Object(c.lazy)((function(){return n.e(7).then(n.bind(null,280))})),we=(Ue=function(){var e=Object(k.a)().i18n;document.getElementById("direction").dir=e.dir();var t=r.a.createRef(),n=function(e){return function(){t.current.closeSnackbar(e)}};return Object(K.jsx)(X,{children:Object(K.jsxs)(B.a,{ref:t,anchorOrigin:{vertical:"bottom",horizontal:"center"},preventDuplicate:!0,action:function(e){return Object(K.jsx)(V.a,{onClick:n(e),"aria-label":"delete",children:Object(K.jsx)(Y.a,{})})},children:[Object(K.jsx)(q,{}),Object(K.jsx)(Le,{}),Object(K.jsx)(c.Suspense,{fallback:Object(K.jsx)("div",{className:"loader-div",children:Object(K.jsx)(H.a,{})}),children:Object(K.jsxs)(z.c,{children:[Object(K.jsx)(z.a,{exact:!0,path:"/",component:xe}),Object(K.jsx)(z.a,{exact:!0,path:"/post/:id",component:ye}),Object(K.jsx)(z.a,{path:"*",component:Fe})]})})]})})},function(e){var t=Object.assign({},e),n=Object(k.a)().t;Object(c.useEffect)((function(){return r(),window.addEventListener("online",r),window.addEventListener("offline",r),function(){window.removeEventListener("online",r),window.removeEventListener("offline",r)}}),[]);var r=function(){var e=document.getElementById("snackbarDiv");if("online"!==(navigator.onLine?"online":"offline"))e.className="show";else var t=setInterval((function(){fetch("//google.com",{mode:"no-cors"}).then((function(){e.className=e.className.replace("show",""),clearInterval(t)})).catch((function(){e.className="show",clearInterval(t)}))}),2e3)};return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)("div",{id:"snackbarDiv",children:n("NO_INTERNET.TITLE")}),Object(K.jsx)(Ue,Object(j.a)({},t))]})});n(129);E.a.render(Object(K.jsx)(r.a.StrictMode,{children:Object(K.jsx)(o.a,{store:w,children:Object(K.jsx)(l.a,{children:Object(K.jsx)(i.a,{persistor:G,children:Object(K.jsx)(we,{})})})})}),document.getElementById("root")),T()},34:function(e,t,n){"use strict";t.a={GET_POSTS_START:"GET_POSTS_START",GET_POSTS_SUCCESS:"GET_POSTS_SUCCESS",GET_POSTS_FAILURE:"GET_POSTS_FAILURE",GET_POST_START:"GET_POST_START",GET_POST_SUCCESS:"GET_POST_SUCCESS",GET_POST_FAILURE:"GET_POST_FAILURE",CREATE_POST_START:"CREATE_POST_START",CREATE_POST_SUCCESS:"CREATE_POST_SUCCESS",CREATE_POST_FAILURE:"CREATE_POST_FAILURE",UPDATE_POST_START:"UPDATE_POST_START",UPDATE_POST_SUCCESS:"UPDATE_POST_SUCCESS",UPDATE_POST_FAILURE:"UPDATE_POST_FAILURE",DELETE_POST_START:"DELETE_POST_START",DELETE_POST_SUCCESS:"DELETE_POST_SUCCESS",DELETE_POST_FAILURE:"DELETE_POST_FAILURE"}},39:function(e,t,n){"use strict";t.a={GET_COMMENTS_START:"GET_COMMENTS_START",GET_COMMENTS_SUCCESS:"GET_COMMENTS_SUCCESS",GET_COMMENTS_FAILURE:"GET_COMMENTS_FAILURE",CREATE_COMMENT_START:"CREATE_COMMENT_START",CREATE_COMMENT_SUCCESS:"CREATE_COMMENT_SUCCESS",CREATE_COMMENT_FAILURE:"CREATE_COMMENT_FAILURE",UPDATE_COMMENT_START:"UPDATE_COMMENT_START",UPDATE_COMMENT_SUCCESS:"UPDATE_COMMENT_SUCCESS",UPDATE_COMMENT_FAILURE:"UPDATE_COMMENT_FAILURE",DELETE_COMMENT_START:"DELETE_COMMENT_START",DELETE_COMMENT_SUCCESS:"DELETE_COMMENT_SUCCESS",DELETE_COMMENT_FAILURE:"DELETE_COMMENT_FAILURE"}},88:function(e){e.exports=JSON.parse('{"404":{"NOT_FOUND":"Ooops! The page you are looking for could not be found \ud83d\udea7 \u2639\ufe0f","BACK_HOME":"Back Home"},"NAVIGATION":{"HOME":"Home","FIND_INSTRUCTOR":"Private Sessions","COURSES":"Group Sessions"},"POSTS":{"ID":"ID","TITLE":"Title","BODY":"Body","ADD_POST":"Add Post","EDIT_POST":"Edit Post","DELETE_POST":"Delete Post","VIEW_DETAILS":"View Details"},"POST":{"TITLE":"Title","BODY":"Body","EMAIL":"Email","NAME":"Name","CANCEL":"Cancel","EDIT_COMMENT":"Edit Comment","SAVE_COMMENT":"Save Comment","ADD_COMMENT":"Add Comment","COMMENTS":"Comments","EDIT":"Edit","DELETE":"Delete"},"NO_INTERNET":{"TITLE":"You are offline. Check your internet connection."}}')},89:function(e){e.exports=JSON.parse('{"404":{"NOT_FOUND":"\u0639\u0641\u0648\u0627\u064b! \u0627\u0644\u0635\u0641\u062d\u0629 \u0627\u0644\u062a\u064a \u062a\u0628\u062d\u062b \u0639\u0646\u0647\u0627 \u0644\u0627 \u064a\u0645\u0643\u0646 \u0627\u0644\u0639\u062b\u0648\u0631 \u0639\u0644\u064a\u0647\u0627 \ud83d\udea7 \u2639\ufe0f","BACK_HOME":"\u0627\u0644\u0635\u0641\u062d\u0629 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629"},"NAVIGATION":{"HOME":"\u0627\u0644\u0631\u0626\u0633\u064a\u0629","FIND_INSTRUCTOR":"\u0627\u0644\u0643\u0648\u0631\u0633\u0627\u062a \u0627\u0644\u062e\u0627\u0635\u0629","COURSES":"\u0627\u0644\u0643\u0648\u0631\u0633\u0627\u062a \u0627\u0644\u062c\u0645\u0627\u0639\u064a\u0629"},"POSTS":{"ID":"\u0631\u0642\u0645 \u062a\u0639\u0631\u064a\u0641\u064a","TITLE":"\u0627\u0644\u0639\u0646\u0648\u0627\u0646","BODY":"\u0627\u0644\u0645\u062d\u062a\u0648\u0649","ADD_POST":"\u0623\u0636\u0641 \u0645\u0646\u0634\u0648\u0631","EDIT_POST":"\u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u0645\u0646\u0634\u0648\u0631","DELETE_POST":"\u062d\u0630\u0641 \u0627\u0644\u0645\u0646\u0634\u0648\u0631","VIEW_DETAILS":"\u0639\u0631\u0636 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644"},"POST":{"TITLE":"\u0627\u0644\u0639\u0646\u0648\u0627\u0646","BODY":"\u0627\u0644\u0645\u062d\u062a\u0648\u0649","EMAIL":"\u0627\u0644\u0628\u0631\u064a\u062f","NAME":"\u0627\u0644\u0627\u0633\u0645","CANCEL":"\u0625\u0644\u063a\u0627\u0621","EDIT_COMMENT":"\u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u062a\u0639\u0644\u064a\u0642","SAVE_COMMENT":"\u062d\u0641\u0638 \u0627\u0644\u062a\u0639\u0644\u064a\u0642","ADD_COMMENT":"\u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u062a\u0639\u0644\u064a\u0642","COMMENTS":"\u0627\u0644\u062a\u0639\u0644\u064a\u0642\u0627\u062a","EDIT":"\u062a\u0639\u062f\u064a\u0644","DELETE":"\u062d\u0630\u0641"},"NO_INTERNET":{"TITLE":"\u0627\u0646\u062a \u063a\u064a\u0631 \u0645\u062a\u0635\u0644. \u062a\u062d\u0642\u0642 \u0645\u0646 \u0627\u062a\u0635\u0627\u0644\u0643 \u0628\u0627\u0644\u0625\u0646\u062a\u0631\u0646\u062a."}}')}},[[130,2,3]]]);
//# sourceMappingURL=main.2e4c448b.chunk.js.map