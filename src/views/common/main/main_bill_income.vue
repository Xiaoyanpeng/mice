<template>
	<section>
		<div class="bill-repay">
			<p class="title">佣金收入</p>
			<div class="nav">
				<div class="pic"></div>
				<div class="text">您的账户佣金收入总额：<span>￥{{account_income}}</span></div>
			</div>
			<p class="small-title">佣金记录</p>
			<table class="am-table am-table-bordered am-table-striped am-table-hover">
				<thead class="th-color">
					<tr>
						<th width="130">订单号</th>
						<th width="170">返佣时间</th>
						<th width="120">返点比率</th>
						<th width="120">订单总额</th>
						<th width="120">佣金</th>
						<th width="120">操作人员</th>
					</tr>
				</thead>
				<tbody class="td-color">
					<tr v-for="item in tableData">
						<td>{{item.booking_num}}</td>
						<td class="gray">{{item.date}}</td>
						<td class="gray">{{item.rate}}</td>
						<td class="red">￥{{item.allmoney}}</td>
						<td class="red">￥{{item.income}}</td>
						<td class="lightgray">{{item.personal}}</td>
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
			account_income:'',
			tableData: [],
    }
  },
	created () {
		this.queryData();//请求数据
	},
	methods: {
		queryData:function(){
			this.account_income='9999.99';
			this.tableData=[{
				booking_num:'1255555588',
        date: '2016-05-03'+' '+'12:00',
        rate:'0.3%',
				allmoney:'1500',
				income:'9.99',
				personal:'小新',
      },{
				booking_num:'1255555588',
        date: '2016-05-03'+' '+'12:00',
        rate:'0.3%',
				allmoney:'1500',
				income:'9.99',
				personal:'小新',
      },{
				booking_num:'1255555588',
        date: '2016-05-03'+' '+'12:00',
        rate:'0.3%',
				allmoney:'1500',
				income:'9.99',
				personal:'小新',
      },{
				booking_num:'1255555588',
        date: '2016-05-03'+' '+'12:00',
        rate:'0.3%',
				allmoney:'1500',
				income:'9.99',
				personal:'小新',
      },{
				booking_num:'1255555588',
        date: '2016-05-03'+' '+'12:00',
        rate:'0.3%',
				allmoney:'1500',
				income:'9.99',
				personal:'小新',
      },{
				booking_num:'1255555588',
        date: '2016-05-03'+' '+'12:00',
        rate:'0.3%',
				allmoney:'1500',
				income:'9.99',
				personal:'小新',
      }];
		}
	}
}
</script>