<template>
	<section class="log-body">
		<div class="log-main">
			<section class="log-sec-left">
				<div class="logo"></div>
				<div class="m1"></div>
				<div class="text">
						<p>麦收 | 最懂你的旅游分销平台</p>
						<p>旨在利用B2B模式，为企业差旅提供酒店机票预订服务。</p>
						<p>拥有国内领先的酒店预订中心，</br>提供即时预订服务。</p>
				</div>
				<a href="" class="bttn">申 请</a>
			</section>
			<section class="log-sec-right">
				<div class="m2"></div>
				<p class="title">欢迎登录麦收平台！</p>
				<p class="tit-en">WELCOME TO THE MICE</p>
				<div class="log-form">
					<form class="am-form am-form-horizontal" action="/common/main">
						<fieldset>
							<div class="am-form-group log-one">
								<label for="" class="am-form-label user"></label>
								<input type="text" v-model.trim="username" placeholder="请输入帐号" v-validate data-rules="required" name="帐号">
							</div>
							<div class="am-form-group log-one">
								<label for="" class="am-form-label pwd"></label>
								<input type="password" v-model.trim="password" placeholder="请输入密码" v-validate data-rules="required" name="密码">     
							</div>
							<div class="am-form-group log-check">
								<el-checkbox v-model="checked">记住帐号</el-checkbox>
							</div>
							<div class="log-error">
								<span class="danger-color" v-show="errors.has('帐号')">{{ errors.first('帐号') }}</span>
								<span class="danger-color" v-show="errors.has('密码')">{{ errors.first('密码') }}</span>
								<span class="danger-color" v-show="errorSign">帐号或密码错误</span>
							</div>
							<div class="am-form-group">
								<input type="submit" class="log-button" value="登录">
								<a class="log-forget">忘记密码？</a>
							</div>
						</fieldset>
					</form>
				</div>
			</section>
		</div>
		<div class="log-shadow"></div>
		<footer class="ms-foot">   
			<div class="msg">
				<p><a href="">法律声明</a> | <a href="">品牌荣誉</a> | <a href="">关于我们</a> | <a href="">公司新闻</a> | <a href="">人才招聘</a> | <a href="">联系我们</a></p>
				<p>Copyright © 2014-2016 by |TN mice-solution.com ICP备案号：闽ICP备12010509号-4</p>
				<p>服务热线：400-8866-897 E-mail: service@mice-solution.com</p>
			</div>
		</footer>
	</section>
</template>

<script>
require('assets/css/login.css')
export default {
  data: function () {
    return {
			checked:false,//记住帐号
			username:'',
			password:'',
			errorSign:false,//判断出错显示信息
    }
  },
	methods: {

	}
}
</script>