<template>
	<section>
		<div class="plane_query_one">
			<div class="sec_one">
				<p class="title">航班订单</p>
				<ul class="form-list am-cf">
					<li>
						<div class="name">订单编号：</div>
						<div class="text"><input class="am-form-field" type="text"></div>
					</li>
					<li>
						<div class="name">PNR：</div>
						<div class="text"><input class="am-form-field" type="text"></div>
					</li>
					<li>
						<div class="name">创建日期：</div>
						<div class="text long"><el-date-picker v-model="createTimeRange" type="daterange" placeholder="选择日期范围"></el-date-picker></div>
					</li>
					<li>
						<div class="name">票号：</div>
						<div class="text"><input class="am-form-field" type="text"></div>
					</li>
					<li>
						<div class="name">乘机人：</div>
						<div class="text"><input class="am-form-field" type="text"></div>
					</li>
					<li>
						<div class="name">航班日期：</div>
						<div class="text small"><el-date-picker v-model="flightTime" type="date"></el-date-picker></div>
					</li>
					<li>
						<div class="name">航班号：</div>
						<div class="text xsmall"><input class="am-form-field" type="text"></div>
					</li>
					<li>
						<div class="name">证件号：</div>
						<div class="text"><input class="am-form-field" type="text"></div>
					</li>
					<li>
						<div class="name">手机号码：</div>
						<div class="text"><input class="am-form-field" type="text"></div>
					</li>
					<button class="btnquery">查询</button>
				</ul>
			</div>
			<div class="sec_two" id="navheader">
				<ul id="booking-list" class="bookings am-cf">
					<div class="left">订单分类：</div>
					<li class="active">全部</li>
					<li>未付款<span class="red">（{{ticketState.nopay_num}}张）</span></li>
					<li>出票中<span class="blue">（{{ticketState.ticketing_num}}张）</span></li>
					<li>已出票<span class="green">（{{ticketState.ticketed_num}}张）</span></li>
					<li>有退款（{{ticketState.refund}}）</li>
					<li>有变更（{{ticketState.change}}）</li>
					<li>有拒单（{{ticketState.reject}}）</li>
				</ul>
			</div>
			<div class="stuck-space" style="display: none"></div>
		</div>
		<div class="message-list">
			<p class="small-tit">Table</p>
			<div class="tables">
				<el-table :data="tableData" :fit='false' style="width: 100%">
    			<el-table-column prop="" label="订单编号/创建时间" width="190">
						<template scope="scope">
							<p class="green">{{scope.row.bookingNum}}<a href="javascript:void(0);" class="copyBtn" >[复制]</a></p>
							<p class="lightgray">{{scope.row.createTime}}</p>
						</template>
					</el-table-column>
    			<el-table-column prop="" label="PNR" width="80">
						<template scope="scope">
							<p class="black">{{scope.row.PNR}}<a href="javascript:void(0);" class="copyBtn" >[复制]</a></p>
							<p v-if="tableData[scope.$index].flightInfo.active" class="cheap">特价</p>
						</template>
					</el-table-column>
    			<el-table-column prop="ticketTime" label="出票所需时间" width="80"></el-table-column>
					<el-table-column prop="passenger" label="乘机人" width="100"></el-table-column>
					<el-table-column prop="" label="航程信息" width="140">
						<template scope="scope">
        			<p class="gray lineH">{{scope.row.flightInfo.from}}-{{scope.row.flightInfo.to}}</p>
							<p class="gray lineH">{{scope.row.flightInfo.number}}</p>
							<p class="lightgray lineH">{{scope.row.flightInfo.time}}</p>
						</template>
					</el-table-column>
					<el-table-column prop="flightInfo.price" label="订单结算价" width="80"></el-table-column>
					<el-table-column prop="" label="订单状态" width="95">
						<template scope="scope">
        			<p class="red" v-if="tableData[scope.$index].flightInfo.state==0">未付款</p>
							<p class="blue" v-if="tableData[scope.$index].flightInfo.state==3">出票中</p>
							<p class="green" v-if="tableData[scope.$index].flightInfo.state==4">已出票</p>
							<p class="lightgray" v-if="tableData[scope.$index].flightInfo.state==2">付款失败</p>
							<p class="red" v-if="tableData[scope.$index].flightInfo.state==1">等待付款</p>
							<p class="lightgray" v-if="tableData[scope.$index].flightInfo.state==5">出票失败</p>
						</template>
					</el-table-column>
					<el-table-column prop="" label="操作" width="76">
						<template scope="scope">
							<p v-if="tableData[scope.$index].flightInfo.state <= 1" class="btngroup paddingTop"><router-link to="">[ 付款 ]</router-link></p>
							<p v-if="tableData[scope.$index].flightInfo.state > 1" class="btngroup paddingTop"><router-link :to="{path:'look'}" append>[ 查看 ]</router-link></p>
							<p class="btngroup"><a href="javascript:void(0);">[ 客票处理 ]</a></p>
							<p class="btngroup"><a href="javascript:void(0);">[ 申请退/废票 ]</a></p>
							<p class="btngroup paddingBottom"><a href="javascript:void(0);">[ 发送短信 ]</a></p>
						</template>
					</el-table-column>
					<el-table-column prop="flightInfo.operator_name" label="操作人员" width="79"></el-table-column>
  			</el-table>
			</div>
			<div class="pagination" v-show="total_num > 10">
				<el-pagination @current-change="handleCurrentChange" :current-page="1" :page-size="12" layout="total, prev, pager, next" :total="total_num"></el-pagination>
			</div>
		</div>		
	</section>
</template>

<script>
require('assets/css/main/plane_query.less')
import jquery from 'jquery'

export default {
	props: ['tableData'],
  data: function () {
    return {
			total_num:1000,//搜索结果
			createTimeRange:'', // 创建日期
			ticketState:{
				nopay_num:103,//未付款
				ticketing_num:0,//出票中
				ticketed_num:130,//已出票
			},
			flightTime:'',//航班时间
      bookingNum:'',//预订编号
			createTime:'',//创建时间
			PNR:'',
			ticketTime:'',//出票时间
			passenger:'',//乘客
			flightInfo:{  //航班信息
				from:'',
				to:'',
				number:'',
				time:'',
				price:'',
				state:'',
				operator_name:'', //操作人员
				active:''}, //特价
			}
	},		
	methods: {
		handleCurrentChange(val) {
			this.currentPage = val;
			console.log(`当前页: ${val}`);
		},
	},
	mounted () { 
		///小导航条固定顶部
		jquery('#booking-list li').click(function(){
			jquery(this).addClass('active').siblings().removeClass('active');
		})
		var start = parseInt(jquery('#navheader').offset().top);
		jquery(document).on('scroll', function(){
			var scroll = parseInt(jquery(document).scrollTop());
			if(scroll > start){
					jquery("#navheader").css({position:'fixed',top:'0',borderBottom:'solid 1px #e4e4e4'})
					jquery('.stuck-space').css('display','block')
			}
			else{
					jquery("#navheader").css({position:'static',borderBottom:'none'})
					jquery('.stuck-space').css('display','none')
			}
		})
		///复制变色
		jquery('.tables').on('click','.copyBtn',function(){
			jquery('.copyBtn').removeClass('active');
			jquery(this).addClass('active');
		})
	}
}
</script>