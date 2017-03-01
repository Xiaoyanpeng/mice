<template>
	<section>
		<div class="corporate">
			<p class="title">账号安全</p>
			<div class="mac-section">
				<div class="mac-sec">
					<div class="icon"><i class="am-icon-lock am-icon-fw"></i><span>登录密码</span></div>
					<div class="text">
						<p>
							<div class="mac-acco">账号安全程度：</div>
							<div class="mac-progress">
									<el-progress :stroke-width="10" :percentage="safe_process" :show-text="false"></el-progress>
							</div>
							<span v-if="safe_process < 50" class="mpa-col mac-col">强度过低</span>
							<span v-if="safe_process >= 80" class="mpa-col mac-col">高等强度</span>
							<span v-if="safe_process >= 50 && safe_process < 80" class="mpa-col mac-col">中等强度</span>
						</p>
						<p class="mac-p1">为保证账号安全，请尽量提高密码强度，建议用数字+字母，</p>
						<p class="mac-p1">请勿使用特殊符号</p>
					</div>
					<div class="bttn">
						<div><router-link to="" tag="div">修改密码</router-link></div>
						<p><router-link to="">忘记密码？</router-link></p>
					</div>
				</div>
				<div class="mac-sec">
					<div class="icon"><i class="am-icon-mobile-phone"></i><span>手机验证</span></div>
					<div class="text">
						<p class="mac-w">
							<div v-if="user_phone" class="mac-acco">您当前绑定的手机号为：</div>
							<div v-else class="mac-acco mac-color">您还未绑定手机号码！</div>
							<div class="mac-tel">{{user_phone}}</div>
						</p>
						<p class="mac-p1">绑定手机号可以快速修改密码，并保证账号安全，方便找回</p>
						<p class="mac-p1">丢失的密码。</p>
					</div>
					<div class="bttn">
						<div v-if="user_phone"><router-link to="" tag="div">更换手机</router-link></div>
						<div v-else><router-link to="" tag="div" class="mac-yes-col">绑定</router-link></div>
						<p></p>
					</div>
				</div>
				<div class="mac-sec">
					<div class="icon"><i class="am-icon-envelope-o small"></i><span>邮箱绑定</span></div>
					<div class="text">
						<p class="mac-w">
							<div v-if="user_email" class="mac-acco">您当前绑定的邮箱为：</div>
							<div v-else class="mac-acco mac-color">您还未绑定邮箱！</div>
							<div class="mac-tel">{{user_email}}</div>
						</p>
						<p class="mac-p1">绑定邮箱，能够方便用户接收订单邮件；亦可辅助找回账号，</p>
						<p class="mac-p1">确保账号安全。</p>
					</div>
					<div class="bttn">
						<div v-if="user_email"><router-link to="" tag="div">更换邮箱</router-link></div>
						<div v-else><router-link to="" tag="div" class="mac-yes-col">绑定</router-link></div>
						<p></p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
require('assets/css/main/corporate.less')
export default {
  data: function () {
    return {
			safe_process:50, //安全程度
			user_phone:'13800088866',//手机号码
			user_email:'',
    }
  },
	methods: {

	}
}
</script>