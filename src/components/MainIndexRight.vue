<template>
  <section>
    <div class="user_message">
        <p><img :src="imageUrl" alt=""></p>
        <p>{{userName}}</p>
        <p v-if="isIdentify"><i class="am-icon-get-pocket am-icon-fw"></i>&nbsp;已认证</p>
        <p v-else class="noID"><i class="am-icon-get-pocket am-icon-fw"></i>&nbsp;未认证</p>
        <p>账户余额：<span>￥{{accountPay}}</span></p>
        <p>未出账单：¥{{noBill}}</p>
        <p>账户消费总额 ￥{{consumeSum}}</p>
        <p>账户积分：{{integral}}</p>
    </div>
    <div class="add_people">
        <p class="title">新增人员</p>
        <ul class="list" :class="{active:openAll}">
            <li v-for="(item,index) in peopleList">{{item.name}}<span>（{{item.department}}）</span></li>
        </ul>
        <div class="all">
            <p>新增会员<span>{{peopleSum}}</span>人</p>
            <p v-if="openAll" @click="openClose">收起</p>
            <p v-show="peopleSum > 14 && !openAll" @click="openClose">查看全部</p>
        </div>
    </div>
  </section>
</template>

<script>
require('assets/css/components/component_main_index.less')
export default {
  data () {
    return {
     isIdentify:true,//认证
     imageUrl:require('assets/images/main/xiecheng.jpg'),
     userName:'携程旅游网络有限公司',
     accountPay:10000,
     noBill:1200.00,
     consumeSum:12560.00,
     integral:1256,
     peopleList:[
         {name:'曹德生',department:'运营部'},
         {name:'徐冬冬',department:'技术部'},
         {name:'徐冬冬',department:'技术部'},
         {name:'徐冬冬',department:'技术部'},
         {name:'徐冬冬',department:'技术部'},
         {name:'徐冬冬',department:'技术部'},
         {name:'徐冬冬',department:'技术部'},
         {name:'徐冬冬',department:'技术部'},
         {name:'徐冬冬',department:'技术部'},
         {name:'徐冬冬',department:'技术部'},
         {name:'徐冬冬',department:'技术部'},
         {name:'徐冬冬',department:'技术部'},
         {name:'徐冬冬13',department:'技术部'},
         {name:'徐冬冬14',department:'技术部'},
         {name:'徐冬冬15',department:'技术部'},  
     ],
     peopleSum:15, //新增人员数量
     openAll:false,//查看全部
    }
  },
  methods:{
      openClose:function(){
          this.openAll = !this.openAll;
      }
  }
}
</script>