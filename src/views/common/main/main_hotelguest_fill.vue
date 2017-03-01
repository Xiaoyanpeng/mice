<template>
	<section>
		<div class="corporate relative guest am-cf">
			<p v-if="reviseSign" class="title">修改旅客信息</p>
			<p v-else class="title">新增旅客信息</p>
			<p class="fill-msg"><router-link to="/common/main/guest"><i class="am-icon-angle-double-left am-icon-fw"></i>返回</router-link></p>
			<form action="">
				<table class="show-msg input-fill manage guest-fill">
					<tr>
						<td>中文名字：</td>
						<td class="am-cf">
							<input v-model="childData.nameCN[0]" class="am-form-field twoinput1 gap" type="text" placeholder="姓">
							<input v-model="childData.nameCN[1]" class="am-form-field twoinput2" type="text" placeholder="名字">
							<p class="require">*</p>
						</td>
					</tr>
					<tr>
						<td>英文名字：</td>
						<td class="am-cf">
							<input v-model="childData.nameEN[0]" class="am-form-field twoinput1 gap" type="text">
							<input v-model="childData.nameEN[1]" class="am-form-field twoinput2" type="text">
							<p class="require">*</p>
						</td>
					</tr>
					<tr>
						<td>手机：</td>
						<td class="am-cf">
							<div class="twoinput1 gap">
								<el-select v-model="childData.telephone[0]">
									<el-option
										v-for="item in telOptions"
										:label="item.label"
										:value="item.value">
									</el-option>
								</el-select>
							</div>
							<div class="twoinput2">
								<input v-model="childData.telephone[1]" class="am-form-field" type="text">
							</div>
							<p class="require">*</p>
						</td>
					</tr>
          <tr>
						<td>联系电话：</td>
						<td class="am-cf">
							<div class="twoinput1 gap">
								<el-select v-model="childData.phone[0]">
									<el-option
										v-for="item in phoneOptions"
										:label="item.label"
										:value="item.value">
										<span class="dot" style="display: inline-block;width: 84px;">{{ item.label }}</span>
										<span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
									</el-option>
								</el-select>
							</div>
							<div class="twoinput2">
								<input v-model="childData.phone[1]" class="am-form-field" type="text" placeholder="电话">
							</div>
						</td>
					</tr>
					<tr>
						<td></td>
						<td>
							<input v-model="childData.phone[2]" class="am-form-field" type="text" placeholder="分机号">
						</td>
					</tr>
          <tr>
						<td>传真：</td>
						<td class="am-cf">
							<div class="twoinput1 gap">
								<el-select v-model="childData.fax[0]">
									<el-option
										v-for="item in phoneOptions"
										:label="item.label"
										:value="item.value">
										<span class="dot" style="display: inline-block;width: 84px;">{{ item.label }}</span>
										<span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
									</el-option>
								</el-select>
							</div>
							<div class="twoinput2">
								<input v-model="childData.fax[1]" class="am-form-field" type="text" placeholder="电话">
							</div>
						</td>
					</tr>
					<tr>
						<td></td>
						<td>
							<input v-model="childData.fax[2]" class="am-form-field" type="text" placeholder="分机号">
						</td>
					</tr>
					<tr>
						<td>E-mail：</td>
						<td>
							<input v-model="childData.email" class="am-form-field" type="email">
						</td>
					</tr>
					<tr>
						<td>证件类型：</td>
						<td class="am-cf">
							<div class="twoinput1 gap">
								<el-select v-model="childData.IDtype[0]">
									<el-option
										v-for="item in IDOptions"
										:label="item.label"
										:value="item.value">
									</el-option>
								</el-select>
							</div>
							<div class="twoinput2">
								<input v-model="childData.IDtype[1]" class="am-form-field" type="text" placeholder="证件号码">
							</div>
							<p class="require">*</p>
						</td>
					</tr>
					<tr v-if="childData.IDtype[0] > 0">
						<td></td>
						<td>
							<el-date-picker v-model="childData.IDtype[2]" type="date" placeholder="有效期"></el-date-picker>
						</td>
					</tr>
					<tr>
						<td>国籍：</td>
						<td>
							<el-select v-model="childData.country">
								<el-option v-for="item in countryOptions" :label="item.label" :value="item.value"></el-option>
							</el-select>
						</td>
					</tr>
					<tr>
						<td>性别：</td>
						<td>
              <el-radio-group v-model="childData.sex">
                <el-radio :label="0">女</el-radio>
                <el-radio :label="1">男</el-radio>
              </el-radio-group>
            </td>
					</tr>
					<tr>
						<td>出生时间：</td>
						<td>
							<el-date-picker v-model="childData.birthday" type="date"></el-date-picker>
						</td>
					</tr>
					<tr>
						<td>出生地：</td>
						<td>
							<el-select v-model="childData.birthplace[0]" @change="query_select_city(childData.birthplace[0])" placeholder="请选择地址">
								<el-option
									v-for="item in select_data.options_pro"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
						</td>
					</tr>
					<tr v-show="childData.birthplace[0]">
						<td></td>
						<td>
							<el-select v-model="childData.birthplace[1]" @change="query_select_dis(childData.birthplace[1])" placeholder="市区">
								<el-option
									v-for="item in select_data.options_city"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
						</td>
					</tr>
					<tr v-show="childData.birthplace[1]">
						<td></td>
						<td>
							<el-select v-model="childData.birthplace[2]" placeholder="县城">
								<el-option
									v-for="item in select_data.options_dis"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
						</td>
					</tr>
					<tr v-show="childData.birthplace[2]">
						<td></td>
						<td><input v-model="childData.birthplace[3]" type="text" class="am-form-field" placeholder="详细地址"></td>
					</tr>
					<tr>
						<td></td>
            <td v-if="reviseSign"><input class="bttn" type="submit" value="保存"></td>
						<td v-else><input class="bttn reset" type="reset" value="重置"><input class="bttn submit" type="submit" value="提交"></td>
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
			childData:{
				nameCN:['',''],
				nameEN:['',''],
				telephone:['',''],
				phone:['','',''], //电话 区号+号码+分机号
				fax:['','',''], //电话 区号+号码+分机号
				email:'',
				IDtype:['','',''],//证件 类型+号码+有效期
				country:'',
				birthplace:['','','',''],//省区县镇
				birthday:'',
				sex:''
			},

			telOptions: [{value: '0',label: '境内'}, {value: '1',label: '境外'}],
			phoneOptions: '',//电话区号
			IDOptions: [{value:'0',label: '身份证'}, {value:'1',label: '护照'}],
			countryOptions: '',//国家
			select_data:{
        options_pro:'', //省份
        options_city:'',//市区
        options_dis:'',//县城
      }
		
    }
  },
	mounted () {
		if(this.reviseSign){this.queryData()};//请求数据
		this.query_select_pro();//省份
		this.query_country();
		this.query_phone();
	},
	methods: {
		queryData(){
			this.childData={id:1,nameCN: ['王','小新'],nameEN:['WANG','XIAOXIN'],telephone: ['0','15245855558'],IDtype:['身份证','350524155524563578',''],country:'中国',sex:1,phone:['+86','0592-5685455','752'],fax:['+86','0592-5685455','752'],email:'658555458@qq.com',birthday:'1991-11-12',birthplace:['福建省','厦门市','集美区','理工路600号']};
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
		query_country(){
			this.countryOptions=[{value:'0',label: '中国'}, {value:'1',label: '美国'}];
		},
		query_phone(){
			this.phoneOptions=[{value:'+86',label: '中国'}, {value:'+852',label: '香港'}];
		},
	},
	computed: {
		reviseSign:function(){ if(this.$route.query.id){return true} else{return false} } ,//判断修改标志
  }
}
</script>