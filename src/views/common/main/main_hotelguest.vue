<template>
	<section>
		<div class="hotelguest">
			<p class="title">常用旅客</p>
			<div class="search">
				<ul class="form-list am-cf">
					<li>
						<div class="name">姓名</div>
						<div class="text"><input class="am-form-field beaty" type="text"></div>
					</li>
					<li>
						<div class="name">联系电话</div>
						<div class="text"><input class="am-form-field beaty" type="text"></div>
					</li>
					<li><div class="bttn">搜索</div></li>
					<li><div class="bttn black"><router-link :to="{path:'fill'}" append tag="div">新增</router-link></div></li>
				</ul>
			</div>
			<p class="small-title">旅客表</p>
			<div class="select-table">
				<el-table :data="tableData" stripe border :fit="false" style="width: 100%" @selection-change="handleSelectionChange">
					<el-table-column type="selection" width="50"></el-table-column>
					<el-table-column prop="nameCN" label="姓名" width="100"></el-table-column>
					<el-table-column prop="" label="手机号码" width="150">
						<template scope="scope">
							<p>{{tableData[scope.$index].telephone[1]}}</p>
						</template>
					</el-table-column>
					<el-table-column prop="" label="证件类型" width="100">
						<template scope="scope">
							<p>{{tableData[scope.$index].IDtype[0]}}</p>
						</template>
					</el-table-column>
					<el-table-column prop="" label="证件号" width="180">
						<template scope="scope">
							<p>{{tableData[scope.$index].IDtype[1]}}</p>
						</template>
					</el-table-column>
					<el-table-column prop="country" label="国籍" width="75"></el-table-column>
					<el-table-column prop="sex" label="性别" width="74">
						<template scope="scope">
							<p v-if="tableData[scope.$index].sex=='0'">女</p>
							<p v-if="tableData[scope.$index].sex=='1'">男</p>
						</template>
					</el-table-column>
					<el-table-column prop="" label="操作" width="170">
						<template scope="scope">
							<router-link :to="{path:'look',query:{id:tableData[scope.$index].id}}" append><i class="am-icon-eye am-icon-fw"></i>查看</router-link>&nbsp;
							<router-link :to="{path:'fill',query:{id:tableData[scope.$index].id}}" append><i class="am-icon-pencil am-icon-fw"></i>编辑</router-link>
							<div class="delete" @click="deleteRow(scope.$index, tableData)"><i class="am-icon-times-circle-o am-icon-fw"></i>删除</div>
						</template>
					</el-table-column>
				</el-table>
			</div>
			<div class="pagination" v-show="total_num > 12">
				<el-pagination @current-change="handleCurrentChange" :current-page="1" :page-size="12" layout="total, prev, pager, next" :total="total_num"></el-pagination>
			</div>
		</div>
	</section>
</template>

<script>
require('assets/css/main/guest.less')
export default {
	props: ['tableData'],
  data: function () {
    return {
			total_num:1000,//数据数量
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
		handleCurrentChange(val) { //分页
			this.currentPage = val;
			console.log(`当前页: ${val}`);
		}
	}
}
</script>