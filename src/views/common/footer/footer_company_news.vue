<template>
	<section>
		<div class="main-info">
			<div class="cn-background">
					<p>公司新闻</p>
					<p>公司近期活动，以及公司最新动态。</p>
			</div>
      <ul class="cn-info">
        <li v-for="itemC in cnList">
          <router-link to="/common/footer/news">
            <img :src="itemC.url">
          <div>
            <p>{{itemC.title}}</p>
            <p>{{itemC.info}}</p>
            <p>{{itemC.time}}</p>
          </div>
          </router-link>
        </li>
      </ul>
      <div class="pagination cn-page" v-if="cnList.length > 10">
				<el-pagination @current-change="handleCurrentChange" :current-page="1" :page-size="10" layout="total, prev, pager, next" :total="cnList.length"></el-pagination>
			</div>
		</div>
	</section>
</template>

<script>
require('assets/css/components/component_info.css')
require('assets/css/footer/company_news.less')
export default {
  data: function () {
    return {
      cnList: [{    //新闻数据s
          url: require('assets/images/footer_nav/ok1y.png'), //新闻图片
          title: "“2016中国汽车产业数据研究峰会”7月将在厦门举行”",  //标题
          info: "利用互联网、大数据等新兴科技推动传统制造业转型升级，利用互联网、大数据等新兴科技推动传统制造业转型升级，将成为传统制造业发展的新方向。汽车产业作为国民经济支柱产业，其利用互联网、大数据等新兴科技的广度和深度，更是走在了国家大力支持的装备制造业的最前沿。 近年来更是走在了国家大力支持的装备制造业的最前沿。 近年来",  //新闻内容
          time: "2016-10-15"  //时间
        },{
          url: require('assets/images/footer_nav/ok1y.png'), 
          title: "“2016中国汽车产业数据研究峰会”7月将在厦门举行”", 
          info: "利用互联网、大数据等新兴科技推动传统制造业转型升级，将成为传统制造业发展的新方向。汽车产业作为国民经济支柱产业，其利用互联网、大数据等新兴科技的广度和深度，更是走在了国家大力支持的装备制造业的最前沿。 近年来更是走在了国家大力支持的装备制造业的最前沿。 近年来",
          time: "2016-10-15"
        },{
          url: require('assets/images/footer_nav/ok1y.png'), 
          title: "“2016中国汽车产业数据研究峰会”7月将在厦门举行”", 
          info: "利用互联网、大数据等新兴科技推动传统制造业转型升级，将成为传统制造业发展的新方向。汽车产业作为国民经济支柱产业，其利用互联网、大数据等新兴科技的广度和深度，更是走在了国家大力支持的装备制造业的最前沿。 近年来更是走在了国家大力支持的装备制造业的最前沿。 近年来",
          time: "2016-10-15"
        },{
          url: require('assets/images/footer_nav/ok1y.png'), 
          title: "“2016中国汽车产业数据研究峰会”7月将在厦门举行”", 
          info: "利用互联网、大数据等新兴科技推动传统制造业转型升级，将成为传统制造业发展的新方向。汽车产业作为国民经济支柱产业，其利用互联网、大数据等新兴科技的广度和深度，更是走在了国家大力支持的装备制造业的最前沿。 近年来更是走在了国家大力支持的装备制造业的最前沿。 近年来",
          time: "2016-10-15"
        },{
          url: require('assets/images/footer_nav/ok1y.png'), 
          title: "“2016中国汽车产业数据研究峰会”7月将在厦门举行”", 
          info: "利用互联网、大数据等新兴科技推动传统制造业转型升级，将成为传统制造业发展的新方向。汽车产业作为国民经济支柱产业，其利用互联网、大数据等新兴科技的广度和深度，更是走在了国家大力支持的装备制造业的最前沿。 近年来更是走在了国家大力支持的装备制造业的最前沿。 近年来",
          time: "2016-10-15"
        },{
          url: require('assets/images/footer_nav/ok1y.png'), 
          title: "“2016中国汽车产业数据研究峰会”7月将在厦门举行”", 
          info: "利用互联网、大数据等新兴科技推动传统制造业转型升级，将成为传统制造业发展的新方向。汽车产业作为国民经济支柱产业，其利用互联网、大数据等新兴科技的广度和深度，更是走在了国家大力支持的装备制造业的最前沿。 近年来更是走在了国家大力支持的装备制造业的最前沿。 近年来",
          time: "2016-10-15"
        }]
    }
  },
	methods: {
		handleCurrentChange(val) {
			this.currentPage = val;
			// console.log(`当前页: ${val}`);
		}

	}
}
</script>