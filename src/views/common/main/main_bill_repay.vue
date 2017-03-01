<template>
	<section>
		<div class="bill-repay">
			<p class="title">退款记录</p>
			<div class="nav">
				<div class="pic"></div>
				<div class="text">您的账户退款总额：<span>¥{{account_repay}}</span></div>
			</div>
			<p class="small-title">退款记录</p>
			<table class="am-table am-table-bordered am-table-striped am-table-hover">
				<thead class="th-color">
					<tr>
						<th width="130">订单号</th>
						<th width="170">消费时间</th>
						<th width="120">订单总额</th>
						<th width="120">退款手续费</th>
						<th width="120">退款金额</th>
						<th width="120">操作人员</th>
						<th width="120">操作</th>
					</tr>
				</thead>
				<tbody class="td-color">
					<tr v-for="item in tableData">
						<td>{{item.booking_num}}</td>
						<td class="gray">{{item.paytime}}</td>
						<td class="red">{{item.booking_sum}}</td>
						<td class="lightred">{{item.repay_fee}}</td>
						<td class="red">{{item.repay_money}}</td>
						<td class="lightgray">{{item.personal}}</td>
						<td class="gray"><router-link to="">查看</router-link></td>
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
			account_repay:'',
			tableData:[] 
    }
  },
	created () {
		this.queryData();//请求数据
	},
	methods: {
		queryData(){
			this.account_repay='9999.99';
			this.tableData=[{
				booking_num:'1255555588',
        paytime: '2016-05-03'+' '+'12:00',
        booking_sum: '￥'+'1200',
				repay_fee:'￥'+'200',
				repay_money:'￥'+'1000',
				personal:'小新',
      },{
				booking_num:'1255555588',
        paytime: '2016-05-03',
        booking_sum: '￥'+'1200',
				repay_fee:'￥'+'200',
				repay_money:'￥'+'1000',
				personal:'小新',
      },{
				booking_num:'1255555588',
        paytime: '2016-05-03',
        booking_sum: '￥'+'1200',
				repay_fee:'￥'+'200',
				repay_money:'￥'+'1000',
				personal:'小新',
      },{
				booking_num:'1255555588',
        paytime: '2016-05-03',
        booking_sum: '￥'+'1200',
				repay_fee:'￥'+'200',
				repay_money:'￥'+'1000',
				personal:'小新',
      },{
				booking_num:'1255555588',
        paytime: '2016-05-03',
        booking_sum: '￥'+'1200',
				repay_fee:'￥'+'200',
				repay_money:'￥'+'1000',
				personal:'小新',
      },{
				booking_num:'1255555588',
        paytime: '2016-05-03',
        booking_sum: '￥'+'1200',
				repay_fee:'￥'+'200',
				repay_money:'￥'+'1000',
				personal:'小新',
      }];
		}
	}
}
</script>