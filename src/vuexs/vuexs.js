export default {
  state:{
    show:false,
    userShow:false,
    user:"12321321",
    token:"",
    itemTextArr:[
      {
        name:"首页",
        url:"/mainhome",
        isActive:true
      },{
        name:"服务与产品",
        url:"/products",
        isActive:false
      },{
        name:"医院&专家",
        url:"/sources",
        isActive:false
      },{
        name:"联系我们",
        url:"/content",
        isActive:false
      }
    ],
    url:'http://api.tianyushangyi.com',
    id:"",
    orderInfo:{},
    orderInfo1:{},
    orderP:{},
    orderP1:{},
    pay:{}
  }
}
