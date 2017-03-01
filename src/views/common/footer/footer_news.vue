<template>
  <section>
    <div class="main-contain">
      <div class="news-header">
        <span>公司新闻 ></span>
        <span>{{title}}</span>
      </div>
      <div class="news-detail">
        <p>{{title}}</p>
        <p>发布时间：{{time}}</p>
        <p>利用互联网、大数据等新兴科技推动传统制造业转型升级，将成为传统制造业发展的新方向。汽车产业作为国民经济支柱产业，其利用互联网、大数据等新兴科技的广度和深度，更是走在了国家大力支持的装备制造业的最前沿。 近年来，作为海西中心城市的厦门在汽车产业的比重也逐渐加深，为厦门积累了可以大力发展汽车产业的产业资源和环境基础。在此背景下，由中国汽车技术研究中心主办、意博（Imagetrans)承办的“2016中国汽车产业数据研究峰会 ”将于2016年07月20-22日在厦门国际会议中心举行，届时，将有众多国内国际研究机构的学者、工程技术人员、企业家和相关政府领导应邀出席。</p>
      </div>
      <div class="news-esc">
        <p onclick="window.history.go(-1)">返回新闻列表 ></p>
      </div>
    </div>
  </section>
</template>

<script>
require('assets/css/footer/news.less')
export default {
  data: function () {
    return {
      title: '"2016中国汽车产业数据研究峰会"7月将在厦门举行',
      time: "2016-05-21"
    }
  },
  computed: {},
  methods: {},
  components: {
  }
}
</script>
