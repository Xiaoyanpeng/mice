<template>
	<section>
		<div class="bill-repay">
			<p class="title">我的积分</p>
			<div class="nav">
				<div class="pic"></div>
				<div class="text">您的账单积分：<span>{{account_score}}</span></div>
			</div>
			<p class="small-title">积分记录</p>
			<table class="am-table am-table-bordered am-table-striped am-table-hover">
				<thead class="th-color">
					<tr>
						<th width="130">订单号</th>
						<th width="170">时间</th>
						<th width="120">积分来源</th>
						<th width="120">积分数</th>
						<th width="120">操作人员</th>
						<th width="120">操作</th>
					</tr>
				</thead>
				<tbody class="td-color">
					<tr v-for="item in tableData">
						<td>{{item.booking_num}}</td>
						<td class="gray">{{item.date}}</td>
						<td class="gray">{{item.resources}}</td>
						<td class="lightred">+{{item.score}}</td>
						<td class="lightgray">{{item.personal}}</td>
						<td class="gray"><router-link to="">查看详情</router-link></td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
</template>

<script>
require('assets/css/main/bill.less')
export default {
  data: function () {
    return {
			account_score:'',
			tableData: []
    }
  },
	created () {
		this.queryData();//请求数据
	},
	methods: {
		queryData(){
			this.account_repay='1300';
			this.tableData=[{
				booking_num:'1255555588',
        date: '2016-05-03'+' '+'12:00',
        resources:'充值',
				score:'20',
				personal:'小新',
      },{
				booking_num:'1255555588',
        date: '2016-05-03'+' '+'12:00',
        resources:'活动',
				score:'20',
				personal:'小新',
      },{
				booking_num:'1255555588',
        date: '2016-05-03'+' '+'12:00',
        resources:'官方补偿',
				score:'20',
				personal:'小新',
      },{
				booking_num:'1255555588',
        date: '2016-05-03'+' '+'12:00',
        resources:'充值',
				score:'20',
				personal:'小新',
      },{
				booking_num:'1255555588',
        date: '2016-05-03'+' '+'12:00',
        resources:'充值',
				score:'20',
				personal:'小新',
      },{
				booking_num:'1255555588',
        date: '2016-05-03'+' '+'12:00',
        resources:'充值',
				score:'20',
				personal:'小新',
      }];
		}
	}
}
</script>
