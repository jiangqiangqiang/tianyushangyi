webpackJsonp([24],{"2get":function(s,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={name:"account",data:function(){return{username:"",oldPassword:"",password:"",passwordCheck:"",token:"",url:this.$store.state.vuexs.url}},methods:{open:function(){this.$message({showClose:!0,message:"密码输入错误",type:"error"})},getToken:function(){this.token=this.Cookies.get("token")},changePwd:function(){var s=this;if(""==s.oldPassword||""==s.password||""==s.passwordCheck)alert("必填项不能为空");else if(s.passwordCheck!=s.password)alert("新密码两次输入不一致");else{var e={oldPassword:s.oldPassword,newPassword:s.password};s.axios.defaults.headers.post.token=s.token,s.axios({method:"post",url:s.url+"/account/resetpassword",data:s.qs.stringify(e)}).then(function(e){console.log(e),0==e.data.code?(s.Cookies.remove("username"),s.Cookies.remove("token"),s.Cookies.remove("userShow"),s.$store.state.vuexs.userShow=!1,s.Cookies.set("userShow",!1),s.$router.push({path:"/login"})):s.open()})}}},created:function(){this.getToken()}},a={render:function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"container"},[t("div",{staticClass:"account-container"},[t("div",{staticClass:"account-title"},[s._v("修改密码")]),s._v(" "),t("div",{staticClass:"account-info"},[t("div",{staticClass:"min-info"},[s._m(0),s._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:s.oldPassword,expression:"oldPassword"}],attrs:{type:"password"},domProps:{value:s.oldPassword},on:{input:function(e){e.target.composing||(s.oldPassword=e.target.value)}}})]),s._v(" "),t("div",{staticClass:"min-info"},[s._m(1),s._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],attrs:{type:"password"},domProps:{value:s.password},on:{input:function(e){e.target.composing||(s.password=e.target.value)}}})]),s._v(" "),t("div",{staticClass:"min-info"},[s._m(2),s._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:s.passwordCheck,expression:"passwordCheck"}],attrs:{type:"password"},domProps:{value:s.passwordCheck},on:{input:function(e){e.target.composing||(s.passwordCheck=e.target.value)}}})]),s._v(" "),t("div",{staticClass:"account-btn",on:{click:s.changePwd}},[s._v("\n              提交\n            ")]),s._v(" "),t("el-button",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{plain:!0},on:{click:s.open}})],1)])])},staticRenderFns:[function(){var s=this.$createElement,e=this._self._c||s;return e("span",[e("i",[this._v("*")]),this._v("旧密码：")])},function(){var s=this.$createElement,e=this._self._c||s;return e("span",[e("i",[this._v("*")]),this._v("新密码：")])},function(){var s=this.$createElement,e=this._self._c||s;return e("span",[e("i",[this._v("*")]),this._v("确认密码：")])}]};var n=t("VU/8")(o,a,!1,function(s){t("Lczd")},"data-v-004d98e5",null);e.default=n.exports},Lczd:function(s,e){}});
//# sourceMappingURL=24.a05c690a7820464e43f6.js.map