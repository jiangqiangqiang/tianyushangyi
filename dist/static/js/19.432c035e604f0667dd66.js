webpackJsonp([19],{"V+IV":function(i,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e={name:"productDesc",data:function(){return{url:this.$store.state.vuexs.url,params:this.$route.params,descObj:{},specifications:[],isActive:0,specificationPrice:"",specificationId:"",specificationName:"",commodityType:"",num:1,picPaths:[]}},methods:{getdetails:function(){var i=this;i.axios({method:"post",url:i.url+"/commodity/edit?id="+i.params.id}).then(function(s){console.log(s),i.descObj=s.data.data,console.log(i.descObj),i.specifications=i.descObj.specifications,i.specifications[0].isActive=!0,i.specificationPrice=i.specifications[0].price,i.specificationName=i.specifications[0].name,i.specificationId=i.specifications[0].id,i.picPaths=i.descObj.picPath.split(";")})},getTabs:function(i,s){console.log(this.specifications),this.specifications.forEach(function(i){i.isActive=!1}),this.specifications[i].isActive=!0,this.specificationPrice=this.specifications[i].price,this.specificationId=this.specifications[i].id,this.specificationName=this.specifications[i].name,console.log(this.specificationName)},numAdd:function(){this.num++},numReduce:function(){if(this.num>1)this.num--;else if(1==this.num)return},submitPay:function(){this.Cookies.get("token")?"服务"==this.descObj.commodityType?this.$router.push({name:"orders",params:{id:this.params.id,commodityId:this.descObj.id,specificationId:this.specificationId,image:this.descObj.majorPath,name:this.descObj.name,specificationName:this.specificationName,num:this.num,specificationPrice:this.specificationPrice,commodityType:this.descObj.commodityType}}):this.$router.push({name:"orders2",params:{id:this.params.id,commodityId:this.descObj.id,specificationId:this.specificationId,image:this.descObj.majorPath,name:this.descObj.name,specificationName:this.specificationName,num:this.num,specificationPrice:this.specificationPrice,commodityType:this.descObj.commodityType}}):this.open2()},open2:function(){var i=this;this.$confirm("当前为未登录状态, 是否登录?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){i.$router.push("/login"),i.$message({type:"success",message:"请登录!"})}).catch(function(){i.$message({type:"info",message:"已取消登录"})})}},created:function(){this.$route.params.id?(this.params=this.$route.params,this.$store.state.vuexs.id=this.$route.params.id):this.params.id=this.$store.state.vuexs.id,this.getdetails()},mounted:function(){this.getdetails()}},c={render:function(){var i=this,s=i.$createElement,t=i._self._c||s;return t("div",{staticClass:"container"},[t("div",{staticClass:"desc-container"},[i._m(0),i._v(" "),t("span",{staticClass:"desc-titleNext"},[i._v("产品详情")]),i._v(" "),t("div",{staticClass:"desc-list"},[t("div",{staticClass:"imgMain"},[t("img",{attrs:{src:i.descObj.majorPath,alt:""}})]),i._v(" "),t("div",{staticClass:"desc-inlist"},[t("span",{staticClass:"list-tap1"},[i._v(i._s(i.descObj.name))]),i._v(" "),t("span",{staticClass:"list-tap2"},[i._v(i._s(i.descObj.feature))]),i._v(" "),t("div",[t("label",[i._v("名称 : ")]),i._v(" "),t("span",[i._v(i._s(i.descObj.name))])]),i._v(" "),t("div",[t("label",[i._v("规格 : ")]),i._v(" "),i._l(i.specifications,function(s,e){return t("span",{staticClass:"norm",class:{isActiveM:s.isActive},on:{click:function(t){i.getTabs(e,s.isActive)}}},[i._v(i._s(s.name))])})],2),i._v(" "),t("div",[t("label",[i._v("价格 : ")]),i._v(" "),t("span",{staticClass:"price"},[i._v("¥"+i._s(i.specificationPrice))])]),i._v(" "),t("div",[t("label",[i._v("适合人群 : ")]),i._v(" "),t("span",[i._v(i._s(i.descObj.applyPerson))])]),i._v(" "),t("div",[t("label",[i._v("数量 : ")]),i._v(" "),t("span",{staticClass:"upDown"},[t("p",{on:{click:i.numReduce}},[i._v("-")]),i._v(i._s(i.num)),t("p",{on:{click:i.numAdd}},[i._v("+")])])])]),i._v(" "),t("div",{staticClass:"buyBtn"},[t("span",{on:{click:i.submitPay}},[i._v("立即购买")])])]),i._v(" "),i._m(1),i._v(" "),t("span",{staticClass:"word-desc"},[i._v("\n      "+i._s(i.descObj.desc)+"\n    ")]),i._v(" "),i._m(2),i._v(" "),t("div",{staticClass:"desc-img"},i._l(i.picPaths,function(i){return t("img",{attrs:{src:i,alt:"",width:"100%"}})}))]),i._v(" "),t("el-button",{attrs:{type:"text"},on:{click:i.open2}}),i._v(" "),t("div",{staticClass:"footer1"},[i._v("Copyright © 天宇尚医, All Rights Reserved.   备案号：京ICP备18045115号-1")])],1)},staticRenderFns:[function(){var i=this.$createElement,s=this._self._c||i;return s("span",{staticClass:"desc-title"},[this._v("首页 〉服务与产品 〉"),s("span",[this._v("详细介绍")])])},function(){var i=this.$createElement,s=this._self._c||i;return s("div",{staticClass:"desc-tap"},[s("div",{staticClass:"imgMain"},[this._v("产品简介")])])},function(){var i=this.$createElement,s=this._self._c||i;return s("div",{staticClass:"desc-tap"},[s("div",{staticClass:"imgMain"},[this._v("产品详情")])])}]};var a=t("VU/8")(e,c,!1,function(i){t("dpb9")},null,null);s.default=a.exports},dpb9:function(i,s){}});
//# sourceMappingURL=19.432c035e604f0667dd66.js.map