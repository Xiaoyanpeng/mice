<template>
	<section>
		<div class="corporate relative">
			<p class="title">企业资料 - 完善信息</p>
			<p class="fill-msg"><router-link to="/common/main/corpor_msg"><i class="am-icon-angle-double-left am-icon-fw"></i>返回</router-link></p>
			<table class="show-msg input-fill">
				<tr>
					<td>业务联系人：</td>
					<td><input v-model="tableData.business_contacts" class="am-form-field" type="text"></td>
				</tr>
				<tr>
					<td>业务联系方式：</td>
					<td><input v-model.trim="tableData.business_phone" class="am-form-field" type="text"></td>
				</tr>
				<tr>
					<td>财务联系人：</td>
					<td><input v-model="tableData.money_contacts" class="am-form-field" type="text"></td>
				</tr>
				<tr>
					<td>财务联系方式：</td>
					<td><input v-model.trim="tableData.money_phone" class="am-form-field" type="text"></td>
				</tr>
        <tr>
					<td>企业地址：</td>
					<td>
            <el-select v-model="tableData.corpor_address[0]" @change="query_select_city(tableData.corpor_address[0])" placeholder="请选择地址">
              <el-option
                v-for="item in select_data.options_pro"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </td>
				</tr>
        <tr v-show="tableData.corpor_address[0]">
					<td></td>
					<td>
            <el-select v-model="tableData.corpor_address[1]" @change="query_select_dis(tableData.corpor_address[1])" placeholder="市区">
              <el-option
                v-for="item in select_data.options_city"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </td>
				</tr>
        <tr v-show="tableData.corpor_address[1]">
					<td></td>
					<td>
            <el-select v-model="tableData.corpor_address[2]" placeholder="县城">
              <el-option
                v-for="item in select_data.options_dis"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </td>
				</tr>
        <tr v-show="tableData.corpor_address[2]">
					<td></td>
					<td><input v-model="tableData.corpor_address[3]" type="text" class="am-form-field" placeholder="详细地址"></td>
				</tr>
        <tr>
					<td></td>
					<td><button class="bttn">保&nbsp;存</button></td>
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
        business_contacts:'',
        business_phone:'',
        money_contacts:'',
        money_phone:'',
        corpor_address:['','','',''], //省市区镇
      },

      select_data:{
        options_pro:'', //省份
        options_city:'',//市区
        options_dis:'',//县城
      }

    }
  },
  created () {
		this.queryData();//请求数据
    this.query_select_pro();//请求省份
	},
	methods: {
    queryData(){
      this.tableData={
        business_contacts:'',
        business_phone:'',
        money_contacts:'',
        money_phone:'',
        corpor_address:['','','',''],
      };
    },
    query_select_pro(){
      this.select_data.options_pro=[{value: '1',label: '福建省'},{value: '2',label: '广州省',}];
    },
    query_select_city(val){
      console.log(val);
      this.select_data.options_city=[{value: '1',label: '厦门市'}, {value: '2',label: '深圳市',}];
    },
    query_select_dis(val){
      console.log(val);
      this.select_data.options_dis=[{value: '1',label: '思明区'}, {value: '2',label: '集美区',}];
    },
	},
}
</script>