<template>
	<section>
		<div class="main-info">
			<div class="info-title">关于麦收网</div>
			<ul class="au-info">
				<li>
					<p>麦收网的来历</p>
					<p>麦收网2014年成立，创立之初便欲借助B2B模式(Business-to-Business)帮助旅游与会展行业中小企业提供云模式的产品和服务。是由意博（厦门）网络服务有限公司成立并运营。</p>
					<p>麦收网注重会议、奖励旅游、大型企业会议、活动展览、节事活动、展位申请、机票预订、签证办理、酒店会议室预定、酒店、餐饮、司机、导游、翻译、租车等MICE服务。旨在帮助中小企业提供便捷的M.I.C.E解决方案。</p>
				</li>
				<li>
					<p>MICE的概述</p>
					<p>MICE，即Meetings（会议）、Incentives（奖励旅游）、Conferencing/Conventions（大型企业会议）、Exhibitions/Exposition（活动展览）和Event（节事活动）的第一个字母大写组成，是会展的英文缩写。 Mice Solution释义为：会议、奖励旅游、大型企业会议、活动展览、节事活动提供解决方案。麦收网旨在帮助旅游与会展行业中小企业提供云模式的MICE产品和服务。</p>
				</li>
				<li>
					<p>麦收网产品与服务</p>
					<ul>
						<li v-for="itemA in lists" class="au-service">
							<div :style="{background: 'url(' + itemA.img +')'}">
								<p>{{itemA.title}}</p>
								<p>{{itemA.info}}</p>
							</div>
						</li>
					</ul>
					<div class="am-cf"></div>
				</li>
				<li>
					<p>麦收优势</p>
					<p>我们拥有一批既懂旅游会展行业业务操作流程又深谙互联网应用的产品团队，专业的产品研发团队，有丰富操作经验的运营的团队。平台拥有专业的会展商旅 B2B交易平台，并通过云服务模式，部署了多种成熟的免费行业应用，以充分满足旅游会展企业多方面的需求。</p>
				</li>
			</ul>
		</div>
	</section>
</template>

<script>
require('assets/css/components/component_info.css')
require('assets/css/footer/about_us.less')
export default {
  data: function () {
    return {
		lists: [ //服务列表
			{
				img: require('assets/images/footer_nav/city.png'),  //列表图片
				title: "旅游产品",  //标题
				info: "麦收网提供数百条旅游产品线路，其中以会议、奖励旅游、大型企业会议、 活动展览、节事活动和团队旅游为主，线路更是包含意大利、法国、英国、德国、荷兰、比利时、卢森堡、瑞士、奥地利、爱尔兰等地，客人可选择由北京、上海、广州、厦门等地出发。"   //内容
			},{
				img: require('assets/images/footer_nav/hotel.png'),
				title: "旅游产品",
				info: "麦收网提供数百条旅游产品线路，其中以会议、奖励旅游、大型企业会议、 活动展览、节事活动和团队旅游为主，线路更是包含意大利、法国、英国、德国、荷兰、比利时、卢森堡、瑞士、奥地利、爱尔兰等地，客人可选择由北京、上海、广州、厦门等地出发。"
			},{
				img: require('assets/images/footer_nav/city.png'),
				title: "旅游产品",
				info: "麦收网提供数百条旅游产品线路，其中以会议、奖励旅游、大型企业会议、 活动展览、节事活动和团队旅游为主，线路更是包含意大利、法国、英国、德国、荷兰、比利时、卢森堡、瑞士、奥地利、爱尔兰等地，客人可选择由北京、上海、广州、厦门等地出发。"
			},{
				img: require('assets/images/footer_nav/hotel.png'),
				title: "旅游产品",
				info: "麦收网提供数百条旅游产品线路，其中以会议、奖励旅游、大型企业会议、 活动展览、节事活动和团队旅游为主，线路更是包含意大利、法国、英国、德国、荷兰、比利时、卢森堡、瑞士、奥地利、爱尔兰等地，客人可选择由北京、上海、广州、厦门等地出发。"
			}
		]
    }
  },
	methods: {

	}
}
</script>
<style>
</style>