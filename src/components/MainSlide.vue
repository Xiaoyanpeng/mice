<template>
  <section>
    <div class="mainslide">
      <div class="title" @click="isShow.booking=!isShow.booking;">
        <p>我的预订</p>
        <p>MY BOOKINGS</p>
        <div class="downicon"><i class="am-icon-fw" :class="[isShow.booking ? 'am-icon-caret-up': 'am-icon-caret-down']"></i></div>
      </div>
      <div class="list">
        <transition name="fade">
          <ul v-show="isShow.booking">
            <li v-for="item in dataList[0]">
              <router-link :to="item._link">
                <p><i class="am-icon-fw" :class="item.iconClass"></i></p>
                <p v-text="item.text"></p>
                <p class="right"><i class="am-icon-caret-right am-icon-fw"></i></p>
              </router-link>
            </li>
          </ul>
        </transition> 
      </div>
      <div class="title" @click="isShow.corporate=!isShow.corporate;">
        <p>企业中心</p>
        <p>CORPORATE CENTER</p>
        <div class="downicon"><i class="am-icon-fw" :class="[ isShow.corporate ? 'am-icon-caret-up': 'am-icon-caret-down']"></i></div>
      </div>
      <div class="list">
        <transition name="fade">
          <ul v-show="isShow.corporate">
            <li v-for="item in dataList[1]">
              <router-link :to="item._link">
                <p v-text="item.text"></p>
                <p class="right"><i class="am-icon-caret-right am-icon-fw"></i></p>
              </router-link>
            </li>
          </ul>
        </transition> 
      </div>
      <div class="title" @click="isShow.account=!isShow.account;">
        <p>我的账单</p>
        <p>ACCOUNT BILL</p>
        <div class="downicon"><i class="am-icon-fw" :class="[ isShow.account ? 'am-icon-caret-up': 'am-icon-caret-down']"></i></div>
      </div>
      <div class="list">
        <transition name="fade">
          <ul v-show="isShow.account">
              <li v-for="item in dataList[2]">
                <router-link :to="item._link">
                  <p v-text="item.text"></p>
                  <p class="right"><i class="am-icon-caret-right am-icon-fw"></i></p>
                </router-link>
              </li>
          </ul>
        </transition> 
      </div>
      
      <div class="title cur">
        <router-link to="/common/main/guest">
          <p>常旅客信息</p>
          <p>HOTEL GUEST</p>
        </router-link>
      </div>
      <div class="list"></div>
      <div class="title cur">
        <router-link to="/common/main/personal">
          <p>个人信息</p>
          <p>PERSONAL</p>
        </router-link>
      </div>
      <div class="list"></div>
    </div>
  </section>
</template>

<script>
require('assets/css/components/component_main_slide.less')
export default {
  data () {
    return {
      isShow:{booking:true,corporate:true,account:true},//点击展开关闭参数
      dataList:[
        ///我的预订数据
        [{
            _link:'/common/main/hotel', //链接地址
            text: '酒店', 
            iconClass: 'am-icon-building',  //图标
        }, {
            _link:'/common/main/plane',
            text: '机票',
            iconClass: 'am-icon-plane',
        }, {
            _link:'/common/main/car',
            text: '租车',
            iconClass: 'am-icon-bus',
        }, {
           _link:'/common/main/visa',
            text: '签证',
            iconClass: 'am-icon-globe',
        }, {
            _link:'/common/main/travel',
            text: '度假',
            iconClass: 'am-icon-map-signs',
        }],
        ///企业中心
       [{
            _link:'/common/main/corpor_msg',
            text: '企业资料', 
        }, {
            _link:'/common/main/corpor_safe',
            text: '账号安全',
        }, {
            _link:'/common/main/corpor_reg',
            text: '资质认证',
        }, {
            _link:'/common/main/corpor_manage',
            text: '账号管理',
        }],
        ////我的账单
        [
          //未开放
        //   {
        //     _link:'/common/main/bill_recharge',
        //     text: '充值账单', 
        // },
         {
            _link:'/common/main/bill_payout',
            text: '消费账单',
        }, {
            _link:'/common/main/bill_income',
            text: '佣金收入',
        }, {
            _link:'/common/main/bill_repay',
            text: '退款记录',
        }, {
            _link:'/common/main/bill_score',
            text: '我的积分',
        }]
      ]
    }
  },
  methods:{

  }
}
</script>
<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>