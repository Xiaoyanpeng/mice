<template>
	<section>
		<div class="corporate">
			<p class="title">个人信息</p>
			<form action="">
				<table class="show-msg input-fill">
					<tr>
						<td>姓名：</td>
						<td><input v-model="tableData.name" class="am-form-field" type="text"></td>
					</tr>
					<tr>
						<td>部门：</td>
						<td>{{tableData.department}}</td>
					</tr>
					<tr>
						<td>职位：</td>
						<td>{{tableData.job}}</td>
					</tr>
					<tr>
						<td>权限分配：</td>
						<td>{{tableData.abled}}</td>
					</tr>
					<tr>
						<td>邮箱：</td>
						<td><input v-model="tableData.email" class="am-form-field" type="email"></td>
					</tr>
					<tr>
						<td>手机：</td>
						<td><input v-model="tableData.telephone" class="am-form-field" type="text"></td>
					</tr>
					<tr>
						<td>是否启用：</td>
						<td v-if="tableData.right">启用</td>
						<td v-else>禁用</td>
					</tr>
					<tr>
						<td></td>
						<td><input class="bttn reset" type="reset" value="重置"><input class="bttn submit" type="submit" value="提交"></td>
					</tr>
				</table>
			</form>
		</div>
	</section>
</template>

<script>
require('assets/css/main/corporate.less')
export default {
  data: function () {
    return {
			tableData:[]
    }
  },
	created () {
		this.tableData={name:'哆啦A梦',department:'运营部',job:'运营助理',abled:'共享额度',telephone:'13586545855',email:'9602525@qq.com',right:1,};
	},
	methods: {

	},
	computed: {
		
	},
}
</script>