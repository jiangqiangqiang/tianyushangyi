webpackJsonp([26],{0:function(n,e,t){t("j1ja"),n.exports=t("NHnr")},"0q+q":function(n,e){},NHnr:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});t("MU8w"),t("j1ja");var a=t("7+uW"),o={render:function(){var n=this.$createElement,e=this._self._c||n;return e("div",{attrs:{id:"app"}},[e("keep-alive",[this.$route.meta.keepAlive?e("router-view"):this._e()],1),this._v(" "),this.$route.meta.keepAlive?this._e():e("router-view")],1)},staticRenderFns:[]};var r=t("VU/8")({name:"App"},o,!1,function(n){t("0q+q")},null,null).exports,i=t("/ocq");a.default.use(i.a);var c=new i.a({routes:[{path:"/HelloWorld",name:"HelloWorld",component:function(n){return t.e(14).then(function(){var e=[t("gORT")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"/mainTable",name:"mainTable",component:function(n){return t.e(4).then(function(){var e=[t("L/Zn")];n.apply(null,e)}.bind(this)).catch(t.oe)},redirect:"/mainhome",children:[{path:"/mainhome",name:"mainhome",component:function(n){return t.e(2).then(function(){var e=[t("1zCN")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"/products",name:"products",component:function(n){return t.e(20).then(function(){var e=[t("nKQ0")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"/sources",name:"sources",component:function(n){return t.e(18).then(function(){var e=[t("WKNH")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"/content",name:"content",component:function(n){return t.e(13).then(function(){var e=[t("ZPdz")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"/productDesc",name:"productDesc",component:function(n){return t.e(19).then(function(){var e=[t("V+IV")];n.apply(null,e)}.bind(this)).catch(t.oe)},meta:{keepAlive:!1}},{path:"/login",name:"login",component:function(n){return t.e(8).then(function(){var e=[t("K31e")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"/register",name:"register",component:function(n){return t.e(6).then(function(){var e=[t("q3Wa")];n.apply(null,e)}.bind(this)).catch(t.oe)},meta:{keepAlive:!1}},{path:"/agreement",name:"agreement",component:function(n){return t.e(17).then(function(){var e=[t("rdFc")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"/forget",name:"forget",component:function(n){return t.e(22).then(function(){var e=[t("7FYo")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"/orders",name:"orders",component:function(n){return t.e(10).then(function(){var e=[t("H1kL")];n.apply(null,e)}.bind(this)).catch(t.oe)},meta:{keepAlive:!1}},{path:"/orders2",name:"orders2",component:function(n){return t.e(3).then(function(){var e=[t("x2Ue")];n.apply(null,e)}.bind(this)).catch(t.oe)},meta:{keepAlive:!1}},{path:"/pay",name:"pay",component:function(n){return Promise.all([t.e(0),t.e(1)]).then(function(){var e=[t("mTUd")];n.apply(null,e)}.bind(this)).catch(t.oe)},meta:{keepAlive:!1}},{path:"/paySuccess",name:"paySuccess",component:function(n){return Promise.all([t.e(0),t.e(21)]).then(function(){var e=[t("9iMb")];n.apply(null,e)}.bind(this)).catch(t.oe)},meta:{keepAlive:!1}},{path:"/transfer",name:"transfer",component:function(n){return Promise.all([t.e(0),t.e(15)]).then(function(){var e=[t("46GV")];n.apply(null,e)}.bind(this)).catch(t.oe)},meta:{keepAlive:!1}},{path:"/talk",name:"talk",component:function(n){return t.e(12).then(function(){var e=[t("2jHg")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"/loginmax",name:"loginmax",redirect:"/myserves",component:function(n){return t.e(7).then(function(){var e=[t("TwlU")];n.apply(null,e)}.bind(this)).catch(t.oe)},children:[{path:"/myserves",name:"myserves",component:function(n){return t.e(5).then(function(){var e=[t("VQA1")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"/myfile",name:"myfile",component:function(n){return t.e(11).then(function(){var e=[t("LfIv")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"/servesMan",name:"servesMan",component:function(n){return t.e(9).then(function(){var e=[t("CqE7")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"/account",name:"account",component:function(n){return t.e(24).then(function(){var e=[t("2get")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"/money",name:"money",component:function(n){return t.e(23).then(function(){var e=[t("u4Kb")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"/orderInfo",name:"orderInfo",component:function(n){return t.e(16).then(function(){var e=[t("yRx0")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"/pay2",name:"pay2",component:function(n){return Promise.all([t.e(0),t.e(1)]).then(function(){var e=[t("mTUd")];n.apply(null,e)}.bind(this)).catch(t.oe)}}]}]},{path:"/",redirect:"/mainTable"}]}),u=(t("sVYa"),t("NYxO"));a.default.use(u.a);var p=new u.a.Store({modules:{vuexs:{state:{show:!1,userShow:!1,user:"12321321",token:"",itemTextArr:[{name:"首页",url:"/mainhome",isActive:!0},{name:"服务与产品",url:"/products",isActive:!1},{name:"医院&专家",url:"/sources",isActive:!1},{name:"联系我们",url:"/content",isActive:!1}],url:"http://api.tianyushangyi.com",id:"",orderInfo:{},orderInfo1:{},orderP:{},orderP1:{},pay:{}}}},mutations:{}}),l=t("mtWM"),h=t.n(l),m=t("mw3O"),s=t.n(m),f=t("lbHh"),d=t.n(f),v=t("zL8q"),y=t.n(v);a.default.config.productionTip=!1,a.default.use(y.a),new a.default({el:"#app",router:c,store:p,components:{App:r},template:"<App/>"}),a.default.prototype.axios=h.a,a.default.prototype.qs=s.a,a.default.prototype.Cookies=d.a}},[0]);
//# sourceMappingURL=app.653cdc545dd1bd0f56d0.js.map