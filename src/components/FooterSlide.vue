<template>
	<section>
		<ul class="footer-nav">
			<li v-for="item in dataList">
				<router-link :to="item.url">
						<p v-text="item.text"></p>
				</router-link>
			</li>
		</ul>
	</section>
</template>
<script>
require('assets/css/components/component_footer_slide.less')
export default {
	data () {
		return {
			dataList: [{
        //对应底部链接
				url: '/common/footer/lagal_state',
				text: '法律声明'
			},{
				url: '/common/footer/brand_honor',
				text: '品牌荣誉'
			},{
				url: '/common/footer/about_us',
				text: '关于我们'
			},{
				url: '/common/footer/company_news',
				text: '公司新闻'
			},{
				url: '/common/footer/talent_recruitment',
				text: '人才招聘'
			},{
				url: '/common/footer/contact_us',
				text: "联系我们"
			},{
				url: '/common/footer/privacy_protection',
				text: "隐私保护"
			}]
    }
	},
	methods: {

	}
}
</script>
