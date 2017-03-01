<template>
	<section>
		<div class="main-info">
			<div class="info-title">联系我们</div>
			<div class="cu-info">
				<p>麦收网 ( 国际会展商旅公共服务平台 )</p>
				<ul>
					<li>地址：厦门市前埔软件园二期望海路63号南座602单元</li>
					<li>电话：400-8866-897</li>
					<li>邮编：361008</li>
					<li>邮箱：service@mice-solution.com</li>
					<li>网址：www.mice-solution.com</li>
				</ul>
			</div>
			<div class="cu-map">
				<p>公司地图导航：</p>
				<div style="height:500px;">
					<el-amap vid="amapDemo" :center='[118.18725, 24.48677]' :zoom='30'>
						<el-amap-marker :position="[118.18725, 24.48677]"></el-amap-marker>
					</el-amap>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
require('assets/css/components/component_info.css')
require('assets/css/footer/contact_us.less')

import vue from 'vue'
import AMap from 'vue-amap'
vue.use(AMap)

AMap.initAMapApiLoader({
  // 高德的key
  key: '3de2cf679cf470d5b1ceb5a98ece96f4',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
})

export default {
  data: function () {
    return {
    }
  },
	methods: {

	},
}
</script>