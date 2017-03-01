<template>
	<section>
		<div class="mh-nav">
			<div class="booking-query">
				<ul class="hotel-booking">
					<li :class="{ active: isCivil}" @click="isCivil=!isCivil">国内酒店订单</li>
					<li :class="{ active: !isCivil}" @click="isCivil=!isCivil">国际酒店订单</li>
				</ul>
				<p class="title"><i class="am-icon-file-text-o am-icon-fw"></i>&nbsp;订单查询</p>
				<ul class="list am-cf">
					<li>
						<div class="name">订单号：</div>
						<div class="text"><input class="am-form-field radio" type="text"></div>
					</li>
					<li>
						<div class="name">订单时间：</div>
						<div class="text"><el-date-picker v-model="bookingTime" type="date" :picker-options="BookingTimePicker"></el-date-picker></div>
					</li>
					<li>
						<div class="name">订单状态：</div>
						<div class="text"><el-select v-model="bookingState" placeholder="请选择"><el-option v-for="item in bookingStateOptions" :label="item.label" :value="item.value"></el-option></el-select></div>
					</li>
					<li>
						<div class="name">酒店名：</div>
						<div class="text"><input class="am-form-field radio" type="text"></div>
					</li>
					<li>
						<div class="name">入住时间：</div>
						<div class="text"><el-date-picker v-model="checkInTime" type="date" :picker-options="checkInTimePicker"></el-date-picker></div>
					</li>
					<li>
						<div class="name">离店时间：</div>
						<div class="text"><el-date-picker v-model="checkOutTime" type="date" :picker-options="checkOutTimePicker"></el-date-picker></div>
					</li>
				</ul>
				<ul class="am-cf list">
					<li>
						<div class="name">筛选：</div>
						<div class="text"><input class="am-fl am-form-field query" type="text" placeholder="输入你要查询的条件"></div>
					</li>
					<button class="bttn">查询</button>
					<p class="notice">*选择或填入订单信息，进行查询</p>
				</ul>
			</div>
		</div>
		<div class="message-list">
			<p class="small-tit">Table</p>
			<div class="tables">
				<el-table :data="tableData" style="width: 100%">
    			<el-table-column prop="operator" label="进程标识号" width="164">
						<template scope="scope">
							<p class="green slideLeft">{{scope.row.operator_num}}</p>
							<p class="gray slideLeft">工作人员:</p>
							<p class="slideLeft">{{scope.row.operator_name}}</p>
						</template>
					</el-table-column>
    			<el-table-column prop="name" label="客户姓名" width="119"></el-table-column>
    			<el-table-column prop="bookingDate" label="预订日期" width="95"></el-table-column>
					<el-table-column prop="inDate" label="入住日期" width="95"></el-table-column>
					<el-table-column prop="state" label="预订状态" width="95">
						<template scope="scope">
        			<p class="red" v-if="tableData[scope.$index].state==0">未付款</p>
							<p class="red" v-if="tableData[scope.$index].state==1">等待付款</p>
							<p class="green" v-if="tableData[scope.$index].state==2">已付款</p>
							<p class="gray" v-if="tableData[scope.$index].state==3">付款失败</p>
							<p class="gray" v-if="tableData[scope.$index].state==4">已退房</p>
						</template>
					</el-table-column>
					<el-table-column prop="outDate" label="截止日期" width="90"></el-table-column>
					<el-table-column prop="cost" label="费用" width="91"></el-table-column>
					<el-table-column prop="price" label="销售" width="91"></el-table-column>
					<el-table-column prop="" label="操作" width="80">
						<template scope="scope">
							<p v-if="tableData[scope.$index].state < 2" class="btngroup"><router-link to="">[ 付款 ]</router-link></p>
							<p class="btngroup"><router-link :to="{path:'look',query:{id:tableData[scope.$index].id}}" append>[ 查看 ]</router-link></p>
							<p class="btngroup"><a href="javascript:void(0);" @click="deleteRow(scope.$index, tableData)">[ 取消 ]</a></p>
						</template>
					</el-table-column>
  			</el-table>
			</div>
			<div class="pagination" v-show="total_num > 10">
				<el-pagination @current-change="handleCurrentChange" :current-page="1" :page-size="12" layout="total, prev, pager, next" :total="total_num"></el-pagination>
			</div>
		</div>
	</section>
</template>

<script>
require('assets/css/main/hotel_query.less')
export default {
  data: function () {
    return {
			tableData:[],
      isCivil:true,//选择国内
			total_num:1000,
			bookingTime: '',//预订时间
			BookingTimePicker: {disabledDate(time) { return time.getTime() > Date.now();}},
			checkInTime:new Date(),//入住时间
			checkInTimePicker: { },
			checkOutTime:'',//离店时间
			checkOutTimePicker: {},
			bookingState: 2,//预订状态
			bookingStateOptions: [
				{value: 2,label: '已付款'},
				{value: 1,label: '未付款'},
				{value: 0,label: '等待付款'},
				{value: 3,label: '付款失败'},
				{value: 4,label: '已退房'}
			],
		}
  },
	created () {
		this.queryDate();//请求表格
	},
	methods: {
		deleteRow(index, rows) { //删除操作
			rows.splice(index, 1);
		},
		handleCurrentChange(val) { //分页条
			this.currentPage = val;
			console.log(`当前页: ${val}`);
		},
		queryDate(){
			this.tableData=[{    ///表格数据 10条
          id:1,
					operator_num:'XMHK-9988899',
					operator_name:'Chenzhan',
          bookingDate: '2016-05-02',
					inDate:'2016-05-02',
					outDate:'2016-05-10',
					cost:'19999.00',
					price:'21999.00',
					state:0, //0为未付款 1为...
          name: '王小虎',
        }, {
          id:2,
          operator_num:'XMHK-9988899',
					operator_name:'Chenzhan',
          bookingDate: '2016-05-02',
					inDate:'2016-05-02',
					outDate:'2016-05-10',
					cost:'19999.00',
					price:'21999.00',
					state:1,
          name: '王小虎',
        }, {
          id:3,
          operator_num:'XMHK-9988899',
					operator_name:'Chenzhan',
          bookingDate: '2016-05-02',
					inDate:'2016-05-02',
					outDate:'2016-05-10',
					cost:'19999.00',
					price:'21999.00',
					state:0,
          name: '王小虎',
        }, {
          id:4,
          operator_num:'XMHK-9988899',
					operator_name:'Chenzhan',
          bookingDate: '2016-05-02',
					inDate:'2016-05-02',
					outDate:'2016-05-10',
					cost:'19999.00',
					price:'21999.00',
					state:3,
          name: '王小虎',
      }, {
          id:5,
          operator_num:'XMHK-9988899',
					operator_name:'Chenzhan',
          bookingDate: '2016-05-02',
					inDate:'2016-05-02',
					outDate:'2016-05-10',
					cost:'19999.00',
					price:'21999.00',
					state:2,
          name: '王小虎',
      }, {
          id:6,
          operator_num:'XMHK-9988899',
					operator_name:'Chenzhan',
          bookingDate: '2016-05-02',
					inDate:'2016-05-02',
					outDate:'2016-05-10',
					cost:'19999.00',
					price:'21999.00',
					state:4,
          name: '王小虎',
      }, {
          id:7,
          operator_num:'XMHK-9988899',
					operator_name:'Chenzhan',
          bookingDate: '2016-05-02',
					inDate:'2016-05-02',
					outDate:'2016-05-10',
					cost:'19999.00',
					price:'21999.00',
					state:3,
          name: '王小虎',
      }, {
          id:8,
          operator_num:'XMHK-9988899',
					operator_name:'Chenzhan',
          bookingDate: '2016-05-02',
					inDate:'2016-05-02',
					outDate:'2016-05-10',
					cost:'19999.00',
					price:'21999.00',
					state:0,
          name: '王小虎',
      }, {
          id:9,
          operator_num:'XMHK-9988899',
					operator_name:'Chenzhan',
          bookingDate: '2016-05-02',
					inDate:'2016-05-02',
					outDate:'2016-05-10',
					cost:'19999.00',
					price:'21999.00',
					state:2,
          name: '王小虎',
      }, {
          id:10,
          operator_num:'XMHK-9988899',
					operator_name:'Chenzhan',
          bookingDate: '2016-05-02',
					inDate:'2016-05-02',
					outDate:'2016-05-10',
					cost:'19999.00',
					price:'21999.00',
					state:1,
          name: '王小虎',
      }];
		}
	}
}
</script>