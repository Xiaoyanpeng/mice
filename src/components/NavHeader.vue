<template>
  <section>
    <div class="nav-bg">
      <div class="wm-1200">
        <div class="title">麦收分销-帮您实现流量变现</div>
        <ul v-if="isLogin">
          <li><i class="am-icon-envelope-o am-icon-fw"></i><p v-show="messageNotice > 0 " class="tag"></p></li>
          <li><router-link to="/common/main">欢迎您，{{name}}</router-link></li>
          <li @click="logout(isLogin)">退出</li>
          <li>中文</li>
        </ul>
        <ul v-else>
          <li><a href="/login">登录</a></li>
          <li>注册</li>
          <li>中文</li>
        </ul>
      </div>
    </div>
    <div class="nav-head">
      <div class="wm-1200">
        <div class="logo"></div>
        <ul>
          <li><router-link to="/index">首页</router-link></li>
          <li><router-link to="/common/hotel">酒店</router-link></li>
          <li><router-link to="/common/plane">机票</router-link></li>
          <li><router-link to="/common/car">租车</router-link></li>
          <li><router-link to="/common/visa">签证</router-link></li>
          <li><router-link to="/common/travel">度假</router-link></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
require('assets/css/components/component_nav.less')
export default {
  data () {
    return {
      name:'吉程在线',
      isLogin:true,
      messageNotice:1,
    }
  },
  methods:{
    logout:function(isLogin){
      this.isLogin=false;
    }
  },
}
</script>