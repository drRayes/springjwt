webpackJsonp([3],{"7Kme":function(e,t){},HAkb:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("7+uW"),r={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("nav",{staticClass:"navbar navbar-expand navbar-dark bg-dark"},[s("a",{staticClass:"navbar-brand",attrs:{href:""},on:{click:function(e){e.preventDefault()}}},[e._v("bezKoder")]),e._v(" "),s("div",{staticClass:"navbar-nav mr-auto"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/home"}},[s("font-awesome-icon",{attrs:{icon:"home"}}),e._v("Home\n        ")],1)],1),e._v(" "),e.showAdminBoard?s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/admin"}},[e._v("Admin Board")])],1):e._e(),e._v(" "),e.showModeratorBoard?s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/mod"}},[e._v("Moderator Board")])],1):e._e(),e._v(" "),s("li",{staticClass:"nav-item"},[e.currentUser?s("router-link",{staticClass:"nav-link",attrs:{to:"/user"}},[e._v("User")]):e._e()],1)]),e._v(" "),e.currentUser?e._e():s("div",{staticClass:"navbar-nav ml-auto"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/register"}},[s("font-awesome-icon",{attrs:{icon:"user-plus"}}),e._v("Sign Up\n        ")],1)],1),e._v(" "),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/login"}},[s("font-awesome-icon",{attrs:{icon:"sign-in-alt"}}),e._v("Login\n        ")],1)],1)]),e._v(" "),e.currentUser?s("div",{staticClass:"navbar-nav ml-auto"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/profile"}},[s("font-awesome-icon",{attrs:{icon:"user"}}),e._v("\n          "+e._s(e.currentUser.username)+"\n        ")],1)],1),e._v(" "),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:""},on:{click:function(t){return t.preventDefault(),e.logOut(t)}}},[s("font-awesome-icon",{attrs:{icon:"sign-out-alt"}}),e._v("LogOut\n        ")],1)])]):e._e()]),e._v(" "),s("div",{staticClass:"container"},[s("router-view")],1)])},staticRenderFns:[]},n=s("VU/8")({computed:{currentUser:function(){return this.$store.state.auth.user},showAdminBoard:function(){return!(!this.currentUser||!this.currentUser.roles)&&this.currentUser.roles.includes("ROLE_ADMIN")},showModeratorBoard:function(){return!(!this.currentUser||!this.currentUser.roles)&&this.currentUser.roles.includes("ROLE_MODERATOR")}},methods:{logOut:function(){this.$store.dispatch("auth/logout"),this.$router.push("/login")}}},r,!1,null,null,null).exports,i=s("/ocq"),o=(s("qjiu"),{render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("header",{staticClass:"jumbotron"},[t("h3",[this._v(this._s(this.content))])])])},staticRenderFns:[]}),u=s("VU/8")({name:"Home",data:function(){return{content:""}},mounted:function(){}},o,!1,null,null,null).exports,l=s("Zrlr"),c=s.n(l),m=function e(t,s,a){c()(this,e),this.username=t,this.email=s,this.password=a},d={name:"Login",data:function(){return{user:new m("",""),loading:!1,message:""}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},created:function(){this.loggedIn&&this.$router.push("/profile")},methods:{handleLogin:function(){var e=this;this.loading=!0,this.$validator.validateAll().then(function(t){t?e.user.username&&e.user.password&&e.$store.dispatch("auth/login",e.user).then(function(){e.$router.push("/profile")},function(t){e.loading=!1,e.message=t.response&&t.response.data||t.message||t.toString()}):e.loading=!1})}}},v={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"card card-container"},[s("img",{staticClass:"profile-img-card",attrs:{id:"profile-img",src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png"}}),e._v(" "),s("form",{attrs:{name:"form"},on:{submit:function(t){return t.preventDefault(),e.handleLogin(t)}}},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"username"}},[e._v("Username")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"text",name:"username"},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}}),e._v(" "),e.errors.has("username")?s("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v("Username is required!")]):e._e()]),e._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"password"}},[e._v("Password")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"password",name:"password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),e._v(" "),e.errors.has("password")?s("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v("Password is required!")]):e._e()]),e._v(" "),s("div",{staticClass:"form-group"},[s("button",{staticClass:"btn btn-primary btn-block",attrs:{disabled:e.loading}},[s("span",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"spinner-border spinner-border-sm"}),e._v(" "),s("span",[e._v("Login")])])]),e._v(" "),s("div",{staticClass:"form-group"},[e.message?s("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(e._s(e.message))]):e._e()])])])])},staticRenderFns:[]};var g=s("VU/8")(d,v,!1,function(e){s("HAkb")},"data-v-c4cb54aa",null).exports,p={name:"Register",data:function(){return{user:new m("","",""),submitted:!1,successful:!1,message:""}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},mounted:function(){this.loggedIn&&this.$router.push("/profile")},methods:{handleRegister:function(){var e=this;this.message="",this.submitted=!0,this.$validator.validate().then(function(t){t&&e.$store.dispatch("auth/register",e.user).then(function(t){e.message=t.message,e.successful=!0},function(t){e.message=t.response&&t.response.data||t.message||t.toString(),e.successful=!1})})}}},f={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"card card-container"},[s("img",{staticClass:"profile-img-card",attrs:{id:"profile-img",src:"//ssl.gstatic.com/accounts/ui/avatar_2x.png"}}),e._v(" "),s("form",{attrs:{name:"form"},on:{submit:function(t){return t.preventDefault(),e.handleRegister(t)}}},[e.successful?e._e():s("div",[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"username"}},[e._v("Username")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"},{name:"validate",rawName:"v-validate",value:"required|min:3|max:20",expression:"'required|min:3|max:20'"}],staticClass:"form-control",attrs:{type:"text",name:"username"},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}}),e._v(" "),e.submitted&&e.errors.has("username")?s("div",{staticClass:"alert-danger"},[e._v(e._s(e.errors.first("username")))]):e._e()]),e._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"email"}},[e._v("Email")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"},{name:"validate",rawName:"v-validate",value:"required|email|max:50",expression:"'required|email|max:50'"}],staticClass:"form-control",attrs:{type:"email",name:"email"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}}),e._v(" "),e.submitted&&e.errors.has("email")?s("div",{staticClass:"alert-danger"},[e._v(e._s(e.errors.first("email")))]):e._e()]),e._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"password"}},[e._v("Password")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"},{name:"validate",rawName:"v-validate",value:"required|min:6|max:40",expression:"'required|min:6|max:40'"}],staticClass:"form-control",attrs:{type:"password",name:"password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),e._v(" "),e.submitted&&e.errors.has("password")?s("div",{staticClass:"alert-danger"},[e._v(e._s(e.errors.first("password")))]):e._e()]),e._v(" "),e._m(0)])]),e._v(" "),e.message?s("div",{staticClass:"alert",class:e.successful?"alert-success":"alert-danger"},[e._v(e._s(e.message))]):e._e()])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"form-group"},[t("button",{staticClass:"btn btn-primary btn-block"},[this._v("Sign Up")])])}]};var h=s("VU/8")(p,f,!1,function(e){s("7Kme")},"data-v-88555ba8",null).exports;s("bKv9");a.a.use(i.a);var _=new i.a({mode:"history",routes:[{path:"/",name:"home",component:u},{path:"/home",component:u},{path:"/login",component:g},{path:"/register",component:h},{path:"/profile",name:"profile",component:function(){return s.e(0).then(s.bind(null,"Twgf"))}},{path:"/admin",name:"admin",component:function(){return s.e(1).then(s.bind(null,"Atqm"))}},{path:"/user",name:"user",component:function(){return new Promise(function(e){e()}).then(s.bind(null,"bKv9"))}}]}),w=s("NYxO"),C=s("//Fk"),b=s.n(C),k=s("mvHQ"),x=s.n(k),U=s("wxAW"),$=s.n(U),q=s("mtWM"),I=s.n(q),y="http://localhost:8088/api/auth/",N=new(function(){function e(){c()(this,e)}return $()(e,[{key:"login",value:function(e){return I.a.post(y+"signin",{username:e.username,password:e.password}).then(function(e){return e.data.accessToken&&localStorage.setItem("user",x()(e.data)),e.data})}},{key:"logout",value:function(){localStorage.removeItem("user")}},{key:"register",value:function(e){return I.a.post(y+"signup",{username:e.username,email:e.email,password:e.password})}}]),e}()),S=JSON.parse(localStorage.getItem("user")),A={namespaced:!0,state:S?{status:{loggedIn:!0},user:S}:{status:{loggedIn:!1},user:null},actions:{login:function(e,t){var s=e.commit;return N.login(t).then(function(e){return s("loginSuccess",e),b.a.resolve(e)},function(e){return s("loginFailure"),b.a.reject(e)})},logout:function(e){var t=e.commit;N.logout(),t("logout")},register:function(e,t){var s=e.commit;return N.register(t).then(function(e){return s("registerSuccess"),b.a.resolve(e.data)},function(e){return s("registerFailure"),b.a.reject(e)})}},mutations:{loginSuccess:function(e,t){e.status.loggedIn=!0,e.user=t},loginFailure:function(e){e.status.loggedIn=!1,e.user=null},logout:function(e){e.status.loggedIn=!1,e.user=null},registerSuccess:function(e){e.status.loggedIn=!1},registerFailure:function(e){e.status.loggedIn=!1}}};a.a.use(w.a);var O=new w.a.Store({modules:{auth:A}}),P=(s("K3J8"),s("qb6w"),s("sUu7")),R=s("C/JF"),F=s("1e6/"),B=s("fhbW");R.c.add(B.a,B.d,B.e,B.b,B.c),a.a.config.productionTip=!1,a.a.use(P.a),a.a.component("font-awesome-icon",F.a),a.a.use(w.a),new a.a({router:_,store:O,render:function(e){return e(n)}}).$mount("#app")},bKv9:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});s("qjiu");var a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("header",{staticClass:"jumbotron"},[t("h3",[this._v(this._s(this.content))])])])},staticRenderFns:[]},r=s("VU/8")({name:"User",data:function(){return{content:""}},mounted:function(){}},a,!1,null,null,null);t.default=r.exports},qb6w:function(e,t){},qjiu:function(e,t,s){"use strict";var a=s("Zrlr"),r=s.n(a),n=s("wxAW"),i=s.n(n),o=s("mtWM"),u=s.n(o);function l(){var e=JSON.parse(localStorage.getItem("user"));return e&&e.accessToken?{Authorization:"Bearer "+e.accessToken}:{}}var c="http://localhost:8088/api/test/";new(function(){function e(){r()(this,e)}return i()(e,[{key:"getPublicContent",value:function(){return u.a.get(c+"all")}},{key:"getUserBoard",value:function(){return u.a.get(c+"user",{headers:l()})}},{key:"getModeratorBoard",value:function(){return u.a.get(c+"mod",{headers:l()})}},{key:"getAdminBoard",value:function(){return u.a.get(c+"admin",{headers:l()})}}]),e}())}},["NHnr"]);
//# sourceMappingURL=app.9466992026de08e362f9.js.map