<template>
	<section>
		<div class="main-info">
			<div class="bh-background">
					<p>品牌荣誉</p>
					<p>荣获14辞世界荣誉证书嘉奖以及10国内高端旅游市场荣誉证书等.</p>
			</div>
			<div class="bh-international">
				<p class="bh-title">国际荣誉证书</p>
				<ul class="bh-images">
					<li v-for="item in international">
						<p><img :src="item.image"></p>
						<p>{{item.info}}</p>
					</li>
				</ul>
				<div class="am-cf"></div>
			</div>
			<div class="bh-domestic">
				<p class="bh-title">国内荣誉证书</p>
				<ul class="bh-images">
					<li v-for="itemD in domestic">
						<p><img :src="itemD.image"></p>
						<p>{{itemD.info}}</p>
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<script>
require('assets/css/components/component_info.css')
require('assets/css/footer/brand_honor.less')
export default {
  data: function () {
    return {
			international: [{   //国际证书
				image: require('assets/images/footer_nav/certificate.png'),
				info: '意博旅游目的地预定服务与客户管理系统V1.0'
			},{
				image: require('assets/images/footer_nav/certificate.png'),
				info: '意博旅游目的地预定服务与客户管理系统V1.0'
			},{
				image: require('assets/images/footer_nav/certificate.png'),
				info: '意博旅游目的地预定服务与客户管理系统V1.0'
			},{
				image: require('assets/images/footer_nav/certificate.png'),
				info: '意博旅游目的地预定服务与客户管理系统V1.0'
			},{
				image: require('assets/images/footer_nav/certificate.png'),
				info: '意博旅游目的地预定服务与客户管理系统V1.0'
			},{
				image: require('assets/images/footer_nav/certificate.png'),
				info: '意博旅游目的地预定服务与客户管理系统V1.0'
			},{
				image: require('assets/images/footer_nav/certificate.png'),
				info: '意博旅游目的地预定服务与客户管理系统V1.0'
			}],
			domestic: [{  //国内证书
				image: require('assets/images/footer_nav/certificate.png'),
				info: '意博旅游目的地预定服务与客户管理系统V1.0'
			},{
				image: require('assets/images/footer_nav/certificate.png'),
				info: '意博旅游目的地预定服务与客户管理系统V1.0'
			},{
				image: require('assets/images/footer_nav/certificate.png'),
				info: '意博旅游目的地预定服务与客户管理系统V1.0'
			},{
				image: require('assets/images/footer_nav/certificate.png'),
				info: '意博旅游目的地预定服务与客户管理系统V1.0'
			},{
				image: require('assets/images/footer_nav/certificate.png'),
				info: '意博旅游目的地预定服务与客户管理系统V1.0'
			},{
				image: require('assets/images/footer_nav/certificate.png'),
				info: '意博旅游目的地预定服务与客户管理系统V1.0'
			},{
				image: require('assets/images/footer_nav/certificate.png'),
				info: '意博旅游目的地预定服务与客户管理系统V1.0'
			}]
    }
  },
	methods: {

	}
}
</script>