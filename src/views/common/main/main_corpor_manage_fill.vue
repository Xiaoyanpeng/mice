<template>
	<section>
		<div class="corporate">
      <p v-if="reviseSign" class="title">修改帐号</p>
			<p v-else class="title">新建帐号</p>
			<form>
				<table class="show-msg input-fill manage">
					<tr>
						<td>姓名：</td>
						<td><input v-model="childData.name" class="am-form-field" type="text"></td>
					</tr>
					<tr>
						<td>部门：</td>
						<td><input v-model="childData.department" class="am-form-field" type="text"></td>
					</tr>
					<tr>
						<td>职位：</td>
						<td><input v-model="childData.job" class="am-form-field" type="text"></td>
					</tr>
          <tr>
						<td>密码：</td>
						<td><input v-model="childData.password" @input="showConfirm" class="am-form-field" type="text"></td>
					</tr>
          <tr v-if="show_confirm_btn">
						<td>确认密码：</td>
						<td><input v-model="childData.confirm_password" class="am-form-field" type="password"></td>
					</tr>
					<tr>
						<td>权限分配：</td>
						<td>
              <el-radio-group v-model="childData.abled">
                <el-radio :label="1">无权限</el-radio>
                <el-radio :label="2">共享额度</el-radio>
                <el-radio :label="3">限额</el-radio>
              </el-radio-group>
            </td>
					</tr>
          <tr v-if="childData.abled == 3">
						<td></td>
						<td><input v-model="limit" class="am-form-field" type="text" placeholder="填写额度"></td>
					</tr>
					<tr>
						<td>邮箱：</td>
						<td><input v-model="childData.email" class="am-form-field" type="email"></td>
					</tr>
					<tr>
						<td>手机：</td>
						<td><input v-model="childData.telephone" class="am-form-field" type="text"></td>
					</tr>
					<tr>
						<td>是否启用：</td>
						<td>
              <el-radio-group v-model="childData.right">
                <el-radio :label="1">启用</el-radio>
                <el-radio :label="0">禁用</el-radio>
              </el-radio-group>
            </td>
					</tr>
					<tr>
						<td></td>
						<td><input class="bttn" type="submit" value="保存"></td>
					</tr>
				</table>
			</form>
		</div>
	</section>
</template>

<script>
require('assets/css/main/corporate.less')
export default {
  props: ['tableData'],
  data: function () {
    return {
			show_confirm_btn:false, //显示确认密码按钮
			childData:{
				name:'',
				department:'',
				job:'',
				abled:'',
				telephone:'',
				email:'',
				right:'',
				password:'',
				confirm_password:'',
				limit:'',  //额度
			},
    }
  },
	mounted () {
		if(this.reviseSign){this.queryData()}//请求数据
	},
	methods: {
		queryData(){
			this.childData={id:1,name: '小新',department: '技术部',job:'前端开发',abled:1,right:1,telephone:'15246859666',email:'960250420@qq.com',password:'123456',limit:'无限制'};
		},
		showConfirm(){ 
			this.show_confirm_btn= true; 
		}
	},
  computed: {
		reviseSign:function(){ if(this.$route.query.id){return true} else{return false} } ,//判断修改标志
  }
}
</script>