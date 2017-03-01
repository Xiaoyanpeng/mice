<template>
	<section>
		<div class="bill-repay">
			<p class="title">消费账单</p>
			<div class="nav">
				<div class="pic"></div>
				<div class="text">您的账单消费总额：<span>￥{{account_payout}}</span></div>
			</div>
			<p class="small-title">账单记录</p>
			<table class="am-table am-table-bordered am-table-striped am-table-hover">
				<thead class="th-color">
					<tr>
						<th width="130">订单号</th>
						<th width="170">消费时间</th>
						<th width="120">金额</th>
						<th width="120">订单状态</th>
						<th width="120">操作人员</th>
						<th width="120">操作</th>
					</tr>
				</thead>
				<tbody class="td-color">
					<tr v-for="item in tableData">
						<td>{{item.booking_num}}</td>
						<td class="gray">{{item.date}}</td>
						<td class="red">￥{{item.payout}}</td>
						<td v-if="item.state === 0">未出行</td>
						<td class="gray" v-if="item.state === 1">已完成</td>
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
			account_payout:'',
			tableData:[]
    }
  },
	created () {
		this.queryData();//请求数据
	},
	methods: {
		queryData(){
			this.account_payout='9999.99';
			this.tableData= [{
				booking_num:'1255555588',
        date: '2016-05-03'+' '+'12:00',
				payout:'1500',
				state:1,
				personal:'小新',
      },{
				booking_num:'1255555588',
        date: '2016-05-03'+' '+'12:00',
				payout:'1500',
				state:0,
				personal:'小新',
      },{
				booking_num:'1255555588',
        date: '2016-05-03'+' '+'12:00',
				payout:'1500',
				state:1,
				personal:'小新',
      },{
				booking_num:'1255555588',
        date: '2016-05-03'+' '+'12:00',
				payout:'1500',
				state:1,
				personal:'小新',
      },{
				booking_num:'1255555588',
        date: '2016-05-03'+' '+'12:00',
				payout:'1500',
				state:1,
				personal:'小新',
      },{
				booking_num:'1255555588',
        date: '2016-05-03'+' '+'12:00',
				payout:'1500',
				state:1,
				personal:'小新',
      }];
		}
	}
}
</script>