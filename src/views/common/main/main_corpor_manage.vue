<template>
	<section>
		<div class="corporate">
			<p class="title">账户管理</p>
			<div class="corpor_manage">
				<ul class="form-list am-cf">
					<li>
						<div class="name">人员姓名</div>
						<div class="text"><input class="am-form-field beaty" type="text"></div>
					</li>
					<li>
						<div class="name">添加时间</div>
						<div class="text"><el-date-picker v-model="addTime" type="daterange" placeholder="选择日期范围" :picker-options="addTimePicker"></el-date-picker></div>
					</li>
					<li>
						<div class="name">筛选</div>
						<div class="text"><el-select v-model="select" clearable placeholder="请选择">
							<el-option-group v-for="group in groupOptions" :label="group.label">
								<el-option v-for="item in group.options" :label="item.label" :value="item.value"></el-option>
							</el-option-group>
						</el-select></div>
					</li>
					<li><div class="bttn">搜索</div></li>
				</ul>
				<ul class="btn-group am-cf">
					<router-link tag="li" :to="{path:'fill'}" append>新建</router-link>
					<li @click="deleteSelect">删除</li>
					<li @click="ableSelect">启用</li>
					<li @click="disableSelect">禁用</li>
				</ul>
				<div class="select-table">
					<el-table :data="tableData" stripe border style="width: 100%" @selection-change="handleSelectionChange">
    				<el-table-column type="selection" width="70"></el-table-column>
    				<el-table-column prop="name" label="姓名" width="130"></el-table-column>
    				<el-table-column prop="department" label="部门" width="160"></el-table-column>
						<el-table-column prop="job" label="职位" width="160"></el-table-column>
						<el-table-column prop="abled" label="是否启用" width="110">
							<template scope="scope">
								<p v-if="tableData[scope.$index].abled=='0'">否</p>
								<p v-if="tableData[scope.$index].abled=='1'">是</p>
							</template>
						</el-table-column>
						<el-table-column prop="right" label="权限" width="120">
							<template scope="scope">
								<p v-if="tableData[scope.$index].right=='0'">无权限</p>
								<p v-if="tableData[scope.$index].right=='1'">共享额度</p>
							</template>
						</el-table-column>
						<el-table-column prop="" label="操作" width="150">
						<template scope="scope">
        			<router-link :to="{path:'fill',query:{id:tableData[scope.$index].id}}" append><i class="am-icon-pencil am-icon-fw"></i>修改</router-link>
							<div class="delete" @click="deleteRow(scope.$index, tableData)"><i class="am-icon-times-circle-o am-icon-fw"></i>删除</div>
						</template>
					</el-table-column>
  				</el-table>
				</div>
				<div class="pagination" v-show="total_num > 12">
					<el-pagination @current-change="handleCurrentChange" :current-page="1" :page-size="12" layout="total, prev, pager, next" :total="total_num"></el-pagination>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
require('assets/css/main/corporate.less')
export default {
	props: ['tableData'],
  data: function () {
    return {
			total_num:1000,//数据数量
			addTime:'',//添加时间
			addTimePicker: { disabledDate(time) {}},
			select: '',//select选项
			groupOptions:[ 
				{
					label:'部门',
					options: [
						{value: '0',label: '运营部'},{value: '1',label: '技术部'},{value: '2',label: '人事部'}
					]
				},
				{
					label:'权限',
					options: [
						{value: '3',label: '共享额度'},{value: '4',label: '无权限'}
					]
				},
				{
					label:'是否启用',
					options: [
						{value: '5',label: '启用'},{value: '6',label: '禁用'}
					]
				},
				{
					label:'部门职位',
					options: [
						{value: '7',label: '经理'},{value: '8',label: '技术员'},{value: '9',label: '助理'}
					]
				},
			],
			multipleSelection: []	,////账户选择数据 显示12条
		}
  },
	methods: {
		handleSelectionChange(val) {  //储存选择数据
			this.multipleSelection = val;
		},
		deleteRow(index, rows) {  //删除单个数据
			rows.splice(index, 1);
		},
		deleteSelect:function(){ //删除多个数据
			let table = this.tableData
			this.multipleSelection.map(function(item){
				table.splice(table.indexOf(item),1)	
			})
		},
		disableSelect:function(){ //禁用
			let table = this.tableData
			this.multipleSelection.map(function(item){
				table[table.indexOf(item)].abled=0;
			})
		},
		ableSelect:function(){ //启用
			let table = this.tableData
			this.multipleSelection.map(function(item){
				table[table.indexOf(item)].abled=1;	
			})
		},
		handleCurrentChange(val) { //分页
			this.currentPage = val;
			console.log(`当前页: ${val}`);
		}
	}
}
</script>