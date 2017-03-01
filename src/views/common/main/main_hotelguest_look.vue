<template>
	<section>
		<div class="corporate relative">
			<p class="title">常旅客信息</p>
			<p class="fill-msg"><router-link to="/common/main/guest"><i class="am-icon-angle-double-left am-icon-fw"></i>返回</router-link></p>
			<table class="show-msg guest-look">
				<tr>
					<td>中文名字：</td>
					<td>{{childData.nameCN[0]}}{{childData.nameCN[1]}}</td>
				</tr>
				<tr>
					<td>英文名字：</td>
					<td>{{childData.nameEN[0]}} {{childData.nameEN[1]}}</td>
				</tr>
				<tr>
					<td>手机号：</td>
					<td>{{childData.telephone[1]}}</td>
				</tr>
				<tr>
					<td>联系方式：</td>
					<td v-if="childData.phone[1]">{{childData.phone[0]}} - {{childData.phone[1]}} - {{childData.phone[2]}}</td>
					<td v-else class="red">未设置</td>
				</tr>
				<tr>
					<td>传真：</td>
					<td v-if="childData.fax[1]">{{childData.fax[0]}} - {{childData.fax[1]}} - {{childData.fax[2]}}</td>
					<td v-else class="red">未设置</td>
				</tr>
				<tr>
					<td>E-mail：</td>
					<td v-if="childData.email">{{childData.email}}</td>
					<td v-else class="red">未设置</td>
				</tr>
				<tr>
					<td>证件：</td>
					<td>{{childData.IDtype[0]}} &#X3000;&#X3000; {{childData.IDtype[1]}}</td>
				</tr>
				<tr>
					<td>国籍：</td>
					<td>{{childData.country}}</td>
				</tr>
				<tr>
					<td>性别：</td>
					<td v-if="childData.sex">男</td>
					<td v-else>女</td>
				</tr>
				<tr>
					<td>出生日期：</td>
					<td v-if="childData.birthday">{{childData.birthday}}</td>
					<td v-else class="red">未设置</td>
				</tr>
				<tr>
					<td>出生地：</td>
					<td v-if="childData.birthplace[0]">{{childData.birthplace[0]}}{{childData.birthplace[1]}}{{childData.birthplace[2]}}{{childData.birthplace[3]}}</td>
					<td v-else class="red">未设置</td>
				</tr>
			</table>
		</div>
	</section>
</template>
<script>
require('assets/css/main/corporate.less')
export default {
	props: ['tableData'],
  data: function () {
    return {
			childData:{
				nameCN: ['',''],//姓 名
				nameEN: ['',''],//姓 名
				telephone: ['',''],//区号 电话
				phone:['','',''],//区号 电话 分机
				email:'',
				IDtype:['','',''],//证件 号码 有效期
				country:'',
				sex:'',//0女 1男
				fax:['','',''],//区号 电话 分机
				birthday:'',
				birthplace:['','','',''] //省市县镇
			}
    }
  },
	created () {
		this.childData=this.tableData[this.$route.query.id-1]; //取值
	},
	methods: {

	},
}
</script>