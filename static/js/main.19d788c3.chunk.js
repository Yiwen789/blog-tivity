(this["webpackJsonpblog-tivity"]=this["webpackJsonpblog-tivity"]||[]).push([[0],{43:function(n,t,e){"use strict";e.d(t,"b",(function(){return a})),e.d(t,"a",(function(){return i}));var i={};e.r(i),e.d(i,"getDetail",(function(){return d}));var o=e(12),r="detail/CHANGE_DETAIL",c=Object(o.fromJS)({login:!1}),a=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r:return n.merge({title:t.title,content:t.content});default:return n}},s=e(19),l=e.n(s),d=function(){return function(n){l.a.get("/api/detail.json").then((function(t){var e,i,o=t.data.data;n((e=o.title,i=o.content,{type:r,title:e,content:i}))})).catch((function(){alert("Loading Failed")}))}}},85:function(n,t,e){"use strict";e.r(t);var i={};e.r(i),e.d(i,"searchFocus",(function(){return an})),e.d(i,"searchBlur",(function(){return sn})),e.d(i,"mouseEnter",(function(){return ln})),e.d(i,"mouseLeave",(function(){return dn})),e.d(i,"changePage",(function(){return un})),e.d(i,"getList",(function(){return pn}));var o={};e.r(o),e.d(o,"logout",(function(){return gn})),e.d(o,"login",(function(){return fn}));var r={};e.r(r),e.d(r,"getHomeInfo",(function(){return st})),e.d(r,"getMoreList",(function(){return lt})),e.d(r,"toggleScroll",(function(){return dt}));var c,a,s,l,d,u,p,A,b,h,g,f,x,j,O,m,v,L,y,w,S,z,I,k,E,P,G,N,R,J,D,T,H,q=e(0),M=e(20),K=e.n(M),W=e(7),C=e(8),V=e(11),X=e(10),Q=e(9),U=e(18),B=e(6),F=e(88),Y="header/SEARCH_FOCUS",Z="header/SEARCH_BLUR",_="header/CHANGE_LIST",$="header/MOUSE_ENTER",nn="header/MOUSE_LEAVE",tn="header/CHANGE_PAGE",en=e(12),on=Object(en.fromJS)({focused:!1,mouseIn:!1,list:[],page:1,totalPage:1}),rn=e(19),cn=e.n(rn),an=function(){return{type:Y}},sn=function(){return{type:Z}},ln=function(){return{type:$}},dn=function(){return{type:nn}},un=function(n){return{type:tn,page:n}},pn=function(){return console.log(123),function(n){cn.a.get("blog-tivity/api/headerList.json").then((function(t){var e=t.data;n(function(n){return{type:_,data:Object(en.fromJS)(n),totalPage:Math.ceil(n.length/10)}}(e.data))})).catch((function(n){console.log(n)}))}},An="login/CHANGE_LOGIN",bn="login/LOGOUT",hn=Object(en.fromJS)({login:!1}),gn=function(){return{type:bn,value:!1}},fn=function(n,t){return function(e){cn.a.get("/api/login.json?account="+n+"&password"+t).then((function(n){n.data.data?e({type:An,value:!0}):alert("Login Failed")}))}},xn=e(3),jn=e(4),On=jn.b.div(c||(c=Object(xn.a)(["\n  z-index: 1;\n  position: relative;\n  height: 58px;\n  border-bottom: 1px solid #f0f0f0;\n"]))),mn=jn.b.div(a||(a=Object(xn.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100px;\n  height: 56px;\n  border-bottom: 1px solid #f0f0f0;\n  background: url(",");\n  background-size: contain;\n  background-repeat: no-repeat;\n\n"])),"data:image/png;base64,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"),vn=jn.b.div(s||(s=Object(xn.a)(["\n  width: 960px;\n  height: 100%;\n  padding-right: 70px;\n  box-sizing: border-box;\n  margin: 0 auto;\n"]))),Ln=jn.b.div(l||(l=Object(xn.a)(["\nline-height: 56px;\npadding: 0 15px;\nfont-size: 17px;\ncolor: #333;\n&.left {\n  float: left;\n}\n&.right {\n  float: right;\n  color: #969696;\n}\n&.active {\n  color: #ea6f5a;\n}\n"]))),yn=jn.b.input.attrs({placeholder:"\u641c\u7d22"})(d||(d=Object(xn.a)(["\n  width: 160px;\n  height: 38px;\n  padding: 0 30px 0 20px;\n  margin-top: 9px;\n  margin-left: 20px;\n  box-sizing: border-box;\n  border: none;\n  outline: none;\n  border-radius: 19px;\n  background: #eee;\n  font-size: 14px;\n  color: #666;\n  &.slide-enter {\n    width: 160px;\n    transition: all .2s ease-out;\n  }\n  &.slide-enter-active {\n    width: 240px;\n  }\n  &.slide-exit {\n    transition: all .2s ease-out;\n  }\n  &.slide-exit-active {\n    width: 160px;\n  }\n  &::placeholder {\n    color: #999;\n  }\n  &.focused {\n    width: 240px;\n  }\n"]))),wn=jn.b.div(u||(u=Object(xn.a)(["\n  position: relative;\n  float: left;\n  .zoom {\n    position: absolute;\n    right: 5px;\n    bottom: 9px;\n    width: 22px;\n    height: 22px;\n    line-height: 22px;\n    border-radius: 11px;\n    text-align: center;\n    &.focused {\n      background: #777;\n      color: $fff;\n    }\n  }\n  .icon{\n    position: relative;\n    height: 13px;\n    line-height: 13px;\n    margin-top: 2px;\n    margin-right: 4px;\n    text-align: center;\n  }\n"]))),Sn=jn.b.div(p||(p=Object(xn.a)(["\n  position: absolute;\n  left: 0;\n  top: 56px;\n  width: 240px;\n  padding: 0 20px;\n  box-shadow: 0px 0px 10px #666;\n  border-radius: 4px;\n  background: #fff;\n"]))),zn=jn.b.div(A||(A=Object(xn.a)(["\n  margin-top: 20px;\n  margin-bottom: 15px;\n  line-height: 20px;\n  font-size: 14px;\n  color: #969696;\n"]))),In=jn.b.span(b||(b=Object(xn.a)(["\n  float: right;\n  font-size: 13px;\n  cursor: pointer;\n  .spin {\n    display: block;\n    float: left;\n    font-size: 12px;\n    margin-right: 2px;\n    transition: all .2s ease-in;\n    transform: rotate(0deg);\n    transorm-origin: center center;\n  }\n"]))),kn=jn.b.div(h||(h=Object(xn.a)(["\n  overflow: hidden;\n"]))),En=jn.b.a(g||(g=Object(xn.a)(["\n  display: block;\n  float: left;\n  line-height: 20px;\n  padding: 0 5px;\n  margin-right: 10px;\n  margin-bottom: 10px;\n  font-size: 12px;\n  border: 1px solid #ddd;\n  color: #787878;\n  border-radius: 2px;\n"]))),Pn=jn.b.div(f||(f=Object(xn.a)(["\n  position: absolute;\n  right: 0;\n  top: 0;\n  height: 56px;\n"]))),Gn=jn.b.div(x||(x=Object(xn.a)(["\n  float: right;\n  margin-top: 9px;\n  margin-right: 20px;\n  padding: 0 20px;\n  line-height: 38px;\n  border-radius: 19px;\n  border: 1px solid #ec6149;\n  font-size: 14px;\n  &.reg {\n    color: #ec6149;\n  }\n  &.writing {\n    color: #fff;\n    background: #ec6149\n  }\n"]))),Nn=e(24),Rn=e(48),Jn=e(23),Dn=e(1),Tn=function(n){Object(V.a)(e,n);var t=Object(X.a)(e);function e(){return Object(W.a)(this,e),t.apply(this,arguments)}return Object(C.a)(e,[{key:"getListArea",value:function(){var n=this,t=this.props,e=t.focused,i=t.list,o=t.page,r=t.totalPage,c=t.mouseIn,a=t.handleMouseEnter,s=t.handleMouseLeave,l=t.handleChangePage,d=i.toJS(),u=[];if(d.length)for(var p=10*(o-1);p<10*o;p++)u.push(Object(Dn.jsx)(En,{children:d[p]},d[p]));return e||c?Object(Dn.jsxs)(Sn,{onMouseEnter:a,onMouseLeave:s,children:[Object(Dn.jsxs)(zn,{children:["Trending",Object(Dn.jsxs)(In,{onClick:function(){return l(o,r,n.spinIcon)},children:[Object(Dn.jsx)(Nn.a,{forwardedRef:function(t){n.spinIcon=t},icon:Jn.a,className:"iconfont icon spin"}),"Switch"]})]}),Object(Dn.jsx)(kn,{children:u})]}):null}},{key:"render",value:function(){var n=this.props,t=n.focused,e=n.list,i=n.handleInputFocus,o=n.handleInputBlur,r=n.login,c=n.logout;return Object(Dn.jsxs)(On,{children:[Object(Dn.jsx)(U.b,{to:"/",children:Object(Dn.jsx)(mn,{})}),Object(Dn.jsxs)(vn,{children:[Object(Dn.jsx)(Ln,{className:"left active",children:"\u9996\u9875"}),Object(Dn.jsx)(Ln,{className:"left ",children:"\u4e0b\u8f7dApp"}),r?Object(Dn.jsx)(Ln,{onClick:c,className:"right",children:"Log Out"}):Object(Dn.jsx)(U.b,{to:"/login",children:Object(Dn.jsx)(Ln,{className:"right",children:"Log In"})}),Object(Dn.jsx)(Ln,{className:"right ",children:"Aa"}),Object(Dn.jsxs)(wn,{children:[Object(Dn.jsx)(F.a,{in:t,timeout:200,classNames:"slide",children:Object(Dn.jsx)(yn,{className:t?"focused":"",onFocus:function(){return i(e)},onBlur:o})}),Object(Dn.jsx)(Nn.a,{icon:Rn.a,className:t?"focused iconfont zoom":"iconfont zoom"}),this.getListArea(t)]})]}),Object(Dn.jsxs)(Pn,{children:[Object(Dn.jsx)(U.b,{to:"/write",children:Object(Dn.jsxs)(Gn,{className:"writing",children:[Object(Dn.jsx)(Nn.a,{icon:Jn.b,className:"iconfont"}),"Write Blog"]})}),Object(Dn.jsx)(Gn,{className:"reg",children:"\u6ce8\u518c"})]})]})}}]),e}(q.Component),Hn=Object(Q.b)((function(n){return{focused:n.getIn(["header","focused"]),list:n.getIn(["header","list"]),page:n.getIn(["header","page"]),totalPage:n.getIn(["header","totalPage"]),mouseIn:n.getIn(["header","mouseIn"]),login:n.getIn(["login","login"])}}),(function(n){return{handleInputFocus:function(t){0===t.size&&n(i.getList()),n(i.searchFocus())},handleInputBlur:function(){n(i.searchBlur())},handleMouseEnter:function(){n(i.mouseEnter())},handleMouseLeave:function(){n(i.mouseLeave())},handleChangePage:function(t,e,o){var r=o.style.transform.replace(/[^0-9]/gi,"");r=r?parseInt(r,10):0,o.style.transform="rotate("+(r+360)+"deg)",n(t<e?i.changePage(t+1):i.changePage(1))},logout:function(){n(o.logout())}}}))(Tn),qn=jn.b.div(j||(j=Object(xn.a)(["\n    overflow: hidden;\n    width: 960px;\n    margin: 0 auto;\n"]))),Mn=jn.b.div(O||(O=Object(xn.a)(["\n    float: left;\n    margin-left: 15px;\n    padding-top: 30px;\n    width: 625px;\n    .banner-img {\n      width: 625px;\n      height: 270px;\n    }\n"]))),Kn=jn.b.div(m||(m=Object(xn.a)(["\n    width: 280px;\n    float: right;\n"]))),Wn=jn.b.div(v||(v=Object(xn.a)(["\n  overflow: hidden;\n  padding: 20px 0 10px 0;\n  margin-left: -18px;\n  border-bottom: 1px solid #dcdcdc;\n"]))),Cn=jn.b.div(L||(L=Object(xn.a)(["\n    float: left;\n    height: 32px;\n    line-height: 32px;\n    margin-left: 18px;\n    margin-bottom: 18px;\n    padding-right: 10px;\n    background: #f7f7f7;\n    font-size: 14px;\n    color: #000;\n    border: 1px solid #dcdcdc;\n    border-radius: 4px;\n    .topic-pic {\n      display: block;\n      float: left;\n      width: 32px;\n      height: 32px;\n      margin-right: 10px;\n    }\n"]))),Vn=jn.b.div(y||(y=Object(xn.a)(["\n    overflow: hidden;\n    padding: 20px 0;\n    border-bottom: 1px solid #dcdcdc;\n    .pic {\n      display: block;\n      width: 125px;\n      height: 100px;\n      float: right;\n      border-radius: 10px;\n    }\n"]))),Xn=jn.b.div(w||(w=Object(xn.a)(["\n    width: 500px;\n    float: left;\n    .title {\n      line-height: 27px;\n      font-size: 18px;\n      font-weight: bold;\n      color: #333;\n    }\n    .description {\n      line-height: 24px;\n      font-size: 13px;\n      color: #999;\n    }\n"]))),Qn=jn.b.div(S||(S=Object(xn.a)(["\n    margin: 30px 0;\n    width: 280px;\n\n"]))),Un=jn.b.div(z||(z=Object(xn.a)(["\n    width: 280px;\n    height: 50px;\n    background: url(",");\n    background-size: contain;\n"])),(function(n){return n.imgUrl})),Bn=jn.b.div(I||(I=Object(xn.a)(["\n    width: 278px;\n    // border: 1px solid #dcdcdc;\n    // border-radius: 3px;\n    height: 300px;\n    // text-align: center; \n"]))),Fn=jn.b.div(k||(k=Object(xn.a)(["\n    padding: 15px 0 15px 0;\n    width: 278px;\n    height: 18px;\n    float: left;\n    font-size: 14px;\n    color: #999;\n    .left-text {\n      float: left;\n    };\n    .right-text {\n      float: right;\n    }\n"]))),Yn=jn.b.div(E||(E=Object(xn.a)(["\n    overflow: hidden;\n    margin: 15px 0 15px 0;\n    // margin-top: 15px;\n    width: 278px;\n    height: 50px;\n    font-size: 12px;\n    .profile-pic {\n      display: block;\n      float: left;\n      border-radius: 24px;\n      margin-right: 10px;\n      cursor: pointer;\n    };\n    .follow {\n      float: right;\n      margin-top: 5px;\n      font-size: 13px;\n      color: #42c02e;\n      cursor: pointer;\n    }\n"]))),Zn=jn.b.div(P||(P=Object(xn.a)(["\n    margin-top: 0;\n    float: left;\n    .name {\n      line-height: 20px;\n      font-size: 14px;\n      color: #333;\n      cursor: pointer;\n    };\n    .description {\n      line-height: 20px;\n      font-size: 12px;\n      color: #969696;\n      margin-bottom: 5px;\n    };\n"]))),_n=jn.b.div(G||(G=Object(xn.a)(["\n    width: 100%;\n    height: 40px;\n    line-height: 40px;\n    margin: 30px 0;\n    background: #a5a5a5;\n    text-align: center;\n    border-radius: 20px;\n    cursor: pointer;\n\n"]))),$n=jn.b.div(N||(N=Object(xn.a)(["\n    position: fixed;\n    right: 100px;\n    bottom: 30px;\n    width: 60px;\n    height: 60px;\n    line-height: 60px;\n    text-align: center;\n    border: 1px solid #ccc;\n    font-size: 14px;\n"]))),nt=function(n){Object(V.a)(e,n);var t=Object(X.a)(e);function e(){return Object(W.a)(this,e),t.apply(this,arguments)}return Object(C.a)(e,[{key:"render",value:function(){var n=this.props.list;return Object(Dn.jsx)(Wn,{children:n.map((function(n){return Object(Dn.jsxs)(Cn,{children:[Object(Dn.jsx)("img",{alt:"",className:"topic-pic",src:n.get("imgUrl")}),n.get("title")]},n.get("id"))}))})}}]),e}(q.PureComponent),tt=Object(Q.b)((function(n){return{list:n.getIn(["home","topicList"])}}),null)(nt),et="home/CHANGE_HOME_DATA",it="home/ADD_ARTICLE_LIST",ot="home/TOGGLE_SCROLL",rt=Object(en.fromJS)({topicList:[],articleList:[],recommendList:[],writerList:[],articlePage:1,showScroll:!1}),ct=function(n,t){return n.merge({topicList:Object(en.fromJS)(t.topicList),articleList:Object(en.fromJS)(t.articleList),recommendList:Object(en.fromJS)(t.recommendList),writerList:Object(en.fromJS)(t.writerList)})},at=function(n,t){return n.merge({articleList:n.get("articleList").concat(t.list),articlePage:t.nextPage})},st=function(){return function(n){cn.a.get("/api/home.json").then((function(t){var e=t.data.data;n(function(n){return{type:et,topicList:n.topicList,articleList:n.articleList,recommendList:n.recommendList,writerList:n.writerList}}(e))}))}},lt=function(n){return function(t){cn.a.get("/api/homeList.json?page="+n).then((function(e){var i,o,r=e.data.data;t((i=r,o=n+1,{type:it,list:Object(en.fromJS)(i),nextPage:o}))}))}},dt=function(n){return{type:ot,show:n}},ut=function(n){Object(V.a)(e,n);var t=Object(X.a)(e);function e(){return Object(W.a)(this,e),t.apply(this,arguments)}return Object(C.a)(e,[{key:"render",value:function(){var n=this.props,t=n.list,e=n.getMoreList,i=n.page;return Object(Dn.jsxs)("div",{children:[t.map((function(n,t){return Object(Dn.jsx)(U.b,{to:"/detail/"+n.get("id"),children:Object(Dn.jsxs)(Vn,{children:[Object(Dn.jsx)("img",{alt:"",className:"pic",src:n.get("imgUrl")}),Object(Dn.jsxs)(Xn,{children:[Object(Dn.jsx)("h3",{className:"title",children:n.get("title")}),Object(Dn.jsx)("p",{className:"description",children:n.get("description")})]})]},t)},t)})),Object(Dn.jsx)(_n,{onClick:function(){return e(i)},children:"Show More"})]})}}]),e}(q.PureComponent),pt=Object(Q.b)((function(n){return{list:n.getIn(["home","articleList"]),page:n.getIn(["home","articlePage"])}}),(function(n){return{getMoreList:function(t){n(r.getMoreList(t))}}}))(ut),At=function(n){Object(V.a)(e,n);var t=Object(X.a)(e);function e(){return Object(W.a)(this,e),t.apply(this,arguments)}return Object(C.a)(e,[{key:"render",value:function(){var n=this.props.list;return Object(Dn.jsx)(Qn,{children:n.map((function(n){return Object(Dn.jsx)(Un,{imgUrl:n.get("imgUrl")},n.get("id"))}))})}}]),e}(q.PureComponent),bt=Object(Q.b)((function(n){return{list:n.getIn(["home","recommendList"])}}),null)(At),ht=function(n){Object(V.a)(e,n);var t=Object(X.a)(e);function e(){return Object(W.a)(this,e),t.apply(this,arguments)}return Object(C.a)(e,[{key:"render",value:function(){var n=this.props.list;return Object(Dn.jsxs)(Bn,{children:[Object(Dn.jsxs)(Fn,{children:[Object(Dn.jsx)("div",{className:"left-text",children:"Recommended Writers"}),Object(Dn.jsxs)("div",{className:"right-text",children:[Object(Dn.jsx)(Nn.a,{icon:Jn.a,className:"iconfont icon spin"}),"Switch"]})]}),n.map((function(n){return Object(Dn.jsxs)(Yn,{children:[Object(Dn.jsx)("img",{alt:"",className:"profile-pic",src:n.get("imgUrl")}),Object(Dn.jsxs)(Zn,{children:[Object(Dn.jsx)("div",{className:"name",children:n.get("name")}),Object(Dn.jsx)("div",{className:"description",children:n.get("description")})]}),Object(Dn.jsx)("div",{className:"follow",children:"+ Follow"})]},n.get("id"))}))]})}}]),e}(q.PureComponent),gt=Object(Q.b)((function(n){return{list:n.getIn(["home","writerList"])}}))(ht),ft=function(n){Object(V.a)(e,n);var t=Object(X.a)(e);function e(){return Object(W.a)(this,e),t.apply(this,arguments)}return Object(C.a)(e,[{key:"handleScrollTop",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return Object(Dn.jsxs)(qn,{children:[Object(Dn.jsxs)(Mn,{children:[Object(Dn.jsx)("img",{alt:"",className:"banner-img",src:"https://source.unsplash.com/random/625x270"}),Object(Dn.jsx)(tt,{}),Object(Dn.jsx)(pt,{})]}),Object(Dn.jsxs)(Kn,{children:[Object(Dn.jsx)(bt,{}),Object(Dn.jsx)(gt,{})]}),this.props.showScroll?Object(Dn.jsx)($n,{onClick:this.handleScrollTop,children:"\u9876\u90e8"}):null]})}},{key:"componentDidMount",value:function(){this.props.changeHomeData(),this.bindEvents()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.props.changeScrollShow)}},{key:"bindEvents",value:function(){window.addEventListener("scroll",this.props.changeScrollShow)}}]),e}(q.PureComponent),xt=Object(Q.b)((function(n){return{showScroll:n.getIn(["home","showScroll"])}}),(function(n){return{changeHomeData:function(){n(r.getHomeInfo())},changeScrollShow:function(){document.documentElement.scrollTop>100?n(r.toggleScroll(!0)):n(r.toggleScroll(!1))}}}))(ft),jt=e(49),Ot=e.n(jt)()({loader:function(){return e.e(3).then(e.bind(null,89))},loading:function(){return Object(Dn.jsx)("div",{children:"Loading"})}}),mt=function(){return Object(Dn.jsx)(Ot,{})},vt=jn.b.div(R||(R=Object(xn.a)(["\n  z-index: 0;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 56px;\n  background: #eee;\n"]))),Lt=jn.b.div(J||(J=Object(xn.a)(["\n  width: 400px;\n  height: 180px;\n  margin: 100px auto;\n  padding-top: 20px;\n  background: #fff;\n  box-shadow: 0 0 8px rgba(0, 0, 0, .1); \n"]))),yt=jn.b.input(D||(D=Object(xn.a)(["\n  display: block;\n  width: 200px;\n  height: 30px;\n  line-height: 30px;\n  padding: 0 10px;\n  margin: 10px auto;\n  color: #777;\n"]))),wt=jn.b.div(T||(T=Object(xn.a)(["\n  width: 220px;\n  height: 30px;\n  line-height: 30px;\n  color: #fff;\n  background: #3194d0;\n  border-radius: 15px;\n  margin: 10px auto;\n  text-align: center;\n"]))),St=function(n){Object(V.a)(e,n);var t=Object(X.a)(e);function e(){return Object(W.a)(this,e),t.apply(this,arguments)}return Object(C.a)(e,[{key:"render",value:function(){var n=this;return this.props.loginStatus?Object(Dn.jsx)(B.a,{to:"/"}):Object(Dn.jsx)(vt,{children:Object(Dn.jsxs)(Lt,{children:[Object(Dn.jsx)(yt,{placeholder:"Username",ref:function(t){n.account=t}}),Object(Dn.jsx)(yt,{placeholder:"Password",type:"password",ref:function(t){n.password=t}}),Object(Dn.jsx)(wt,{onClick:function(){return n.props.login(n.account,n.password)},children:"Log In"})]})})}},{key:"componentDidMount",value:function(){}}]),e}(q.PureComponent),zt=Object(Q.b)((function(n){return{loginStatus:n.getIn(["login","login"])}}),(function(n){return{login:function(t,e){n(o.login(t.value,e.value))}}}))(St),It=function(n){Object(V.a)(e,n);var t=Object(X.a)(e);function e(){return Object(W.a)(this,e),t.apply(this,arguments)}return Object(C.a)(e,[{key:"render",value:function(){return this.props.loginStatus?Object(Dn.jsx)("div",{children:"Write Article Page"}):Object(Dn.jsx)(B.a,{to:"/login"})}},{key:"componentDidMount",value:function(){}}]),e}(q.PureComponent),kt=Object(Q.b)((function(n){return{loginStatus:n.getIn(["login","login"])}}),null)(It),Et=e(27),Pt=e(50),Gt=e(51),Nt=e(43),Rt=Object(Gt.combineReducers)({header:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:on,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return n.set("focused",!0);case Z:return n.set("focused",!1);case _:return n.merge({list:t.data,totalPage:t.totalPage});case $:return n.set("mouseIn",!0);case nn:return n.set("mouseIn",!1);case tn:return n.set("page",t.page);default:return n}},home:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case et:return ct(n,t);case it:at(n,t);case ot:return n.set("showScroll",t.show);default:return n}},detail:Nt.b,login:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:hn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case An:case bn:return n.set("login",t.value);default:return n}}}),Jt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE||Et.b,Dt=Object(Et.c)(Rt,Jt(Object(Et.a)(Pt.a))),Tt=Object(jn.a)(H||(H=Object(xn.a)(["\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: Open-Sans, Helvetica, Sans-Serif;\n  }\n"]))),Ht=function(n){Object(V.a)(e,n);var t=Object(X.a)(e);function e(){return Object(W.a)(this,e),t.apply(this,arguments)}return Object(C.a)(e,[{key:"render",value:function(){return Object(Dn.jsx)(Q.a,{store:Dt,children:Object(Dn.jsxs)("div",{children:[Object(Dn.jsx)(Tt,{}),Object(Dn.jsx)(U.a,{basename:"/blog-tivity",children:Object(Dn.jsxs)("div",{children:[Object(Dn.jsx)(Hn,{}),Object(Dn.jsxs)(B.d,{children:[Object(Dn.jsx)(B.b,{path:"/",exact:!0,component:xt}),Object(Dn.jsx)(B.b,{path:"/detail/:id",exact:!0,component:mt}),Object(Dn.jsx)(B.b,{path:"/write",exact:!0,component:kt}),Object(Dn.jsx)(B.b,{path:"/login",exact:!0,component:zt})]})]})})]})})}}]),e}(q.Component);K.a.render(Object(Dn.jsx)(Ht,{}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.19d788c3.chunk.js.map