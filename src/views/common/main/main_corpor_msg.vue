<template>
	<section>
		<div class="corporate relative">
			<p class="title">企业资料</p>
			<p class="fill-msg"><router-link :to="{path:'fill'}" append>完善信息</router-link></p>
			<table class="show-msg">
				<tr>
					<td>企业代码：</td>
					<td>{{tableData.corpor_code}}</td>
				</tr>
				<tr>
					<td>企业名称：</td>
					<td>{{tableData.corpor_name}}</td>
				</tr>
				<tr>
					<td>企业ID：</td>
					<td>{{tableData.corpor_id}}</td>
				</tr>
				<tr>
					<td>企业法人：</td>
					<td>{{tableData.corpor_person}}</td>
				</tr>
				<tr>
					<td class="top">法人身份证：</td>
					<td class="id-img">
						<img :src="tableData.corpor_img_a" alt="">
						<img :src="tableData.corpor_img_b" alt="">
						<div class="ab_img"><p>正面</p><p>反面</p></div>
					</td>
				</tr>
				<tr>
					<td class="top">营业执照：</td>
					<td class="license"><img :src="tableData.corpor_license" alt=""></td>
				</tr>
				<tr v-if="tableData.business_contacts">
					<td>业务联系人：</td>
					<td>{{tableData.business_contacts}}</td>
				</tr>
				<tr v-if="tableData.business_phone">
					<td>业务联系方式：</td>
					<td>{{tableData.business_phone}}</td>
				</tr>
				<tr v-if="tableData.money_contacts">
					<td>财务联系人：</td>
					<td>{{tableData.money_contacts}}</td>
				</tr>
				<tr v-if="tableData.money_phone">
					<td>财务联系方式：</td>
					<td>{{tableData.money_phone}}</td>
				</tr>
				<tr v-if="tableData.corpor_address[0]">
					<td>企业地址：</td>
					<td>{{tableData.corpor_address[0]}}{{tableData.corpor_address[1]}}{{tableData.corpor_address[2]}}{{tableData.corpor_address[3]}}</td>
				</tr>
			</table>
		</div>
	</section>
</template>

<script>
require('assets/css/main/corporate.less')
export default {
  data: function () {
    return {
			tableData:{
				corpor_code:'',
				corpor_name:'',
				corpor_id:'',
				corpor_person:'',
				corpor_img_a:'',
				corpor_img_b:'',
				corpor_license:'',
				business_contacts:'',
				business_phone:'',
				money_contacts:'',
				money_phone:'',
				corpor_address:['','','',''],
			}
    }
  },
	created () {
		this.queryData();//请求数据
	},
	methods: {
		queryData(){
			this.tableData={
				corpor_code:'CLRYYYYY',
				corpor_name:'意博（厦门）网络服务有限公司',
				corpor_id:'6fw62s6w6ew6266s628198129ds',
				corpor_person:'何总',
				corpor_img_a:require('assets/images/footer_nav/hotel.png'),
				corpor_img_b:require('assets/images/footer_nav/hotel.png'),
				corpor_license:require('assets/images/footer_nav/hotel.png'),
				business_contacts:'',
				business_phone:'',
				money_contacts:'',
				money_phone:'',
				corpor_address:['','','',''],
			}
		}
	},
}
</script>