<template>
	<section>
		<div class="plane_query">
      <div class="header am-cf">
        <p class="fl">{{flightInfo.from}} - {{flightInfo.to}}</p>
        <p class="bookinger">订票人：{{userMsg.name}} | 联系电话：{{userMsg.phone}}</p>
      </div>
      <div class="form-list">
        <ul class="am-cf">
          <li class="am-cf">
            <p>订单编号：</p>
            <p class="w157">{{bookingMsg.bookingNum}}</p>
          </li>
          <li class="am-cf">
            <p>订单状态：</p>
            <p class="green" v-if="bookingMsg.state==4">已出票</p>
            <p class="blue" v-if="bookingMsg.state==3">出票中</p>
            <p class="lightgray" v-if="bookingMsg.state==2">付款失败</p>
            <p class="lightgray" v-if="bookingMsg.state==5">出票失败</p>
          </li>
          <li class="am-cf">
            <p>PNR：</p>
            <p v-if="bookingMsg.PNR" class="w153">{{bookingMsg.PNR}}</p>
            <p v-else class="w153">----</p>
          </li>
          <li class="am-cf">
            <p>创建时间：</p>
            <p class="w100">{{bookingMsg.createTime}}</p>
          </li>
          <li class="am-cf">
            <p>订单结算价：</p>
            <p class="w157 red">￥{{bookingMsg.price}}</p>
          </li>
          <li class="am-cf">
            <p>支付方式：</p>
            <p>{{bookingMsg.payment.way}}</p>
          </li>
          <li class="am-cf">
            <p>支付账号：</p>
            <p class="w153">{{bookingMsg.payment.account}}</p>
          </li>
          <li class="am-cf">
            <p>交易时间：</p>
            <p class="w100">{{bookingMsg.payment.time}}</p>
          </li>
          <li class="am-cf">
            <p>交易号：</p>
            <p class="w250">{{bookingMsg.payment.number}}</p>
          </li>
        </ul>
        <div class="bttn">
          <router-link to="">申请退 / 废票</router-link>
          <router-link to="">客票更改</router-link>
        </div>
        <p class="notice">注意：取消座位时间计算手续费，按照当前舱位票面价收取退票费，统一起飞前／后不得退票.</p>
      </div>
      <div class="tabledata">
        <p class="title">航程信息</p>
        <table class="am-table am-table-bordered am-table-striped flight-table">
          <tbody>
            <tr>
              <th width="80">航段</th>
              <th width="100">航班日期</th>
              <th width="250">航程信息</th>
              <th width="188">航班信息</th>
              <th width="80">机型</th>
              <th width="100">票面价</th>
              <th width="100">机建 + 燃油</th>
            </tr>
            <tr>
              <td>{{flightInfo.phase}}</td>
              <td>
                <p>{{flightInfo.time}}</p>
                <p class="lightgray">{{weekday}}</p>
              </td>
              <td>
                <div class="from am-cf">
                  <p><span class="red">{{flightInfo.from}}</span>（{{flightInfo.fromNum}}）</p>
                  <p class="line"> - </p>
                  <p><span class="red">{{flightInfo.to}}</span>（{{flightInfo.toNum}}）</p>
                </div>
                <div class="to am-cf">
                  <p class="lightgray">{{flightInfo.fromTime}}(起)</p>
                  <p class="lightgray">{{flightInfo.toTime}}(抵)</p>
                </div>
              </td>
              <td>{{flightInfo.message}}</td>
              <td>{{flightInfo.type}}</td>
              <td class="red">￥{{flightInfo.price}}</td>
              <td>{{flightInfo.airrax}} + {{flightInfo.oilrax}} = {{air_oil}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="tabledata">
        <p class="title">乘客信息</p>
        <table class="am-table am-table-bordered am-table-striped flight-table">
          <tbody>
            <tr>
              <th width="30"></th>
              <th width="80">乘客姓名</th>
              <th width="80">证件类型</th>
              <th width="200">证件号码</th>
              <th width="70">乘客类型</th>
              <th width="120">票号</th>
              <th width="120">新票号</th>
              <th width="100">手机号码</th>
              <th width="100">操作</th>
            </tr>
            <tr v-for="(item,index) in passengerInfo">
              <td>{{$index}}</td>
              <td>{{item.name}}</td>
              <td>{{item.IDtype[0]}}</td>
              <td>{{item.IDtype[1]}}&nbsp;<router-link class="blue" :to="{path:'common/main/guest/fill',query:{id:item.id}}">[ 修改 ]</router-link></td>
              <td>{{item.property}}</td>
              <td>{{item.fligtnumber}}</td>
              <td v-if="item.new_fligtnumber">{{item.new_fligtnumber}}</td>
              <td v-else>----</td>
              <td>{{item.telephone}}</td>
              <td>通知单 <a class="blue" href="javascript:void(0);">[ 打印 ]</a></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="tabledata">
        <p class="title">票价信息</p>
        <table class="am-table am-table-bordered am-table-striped flight-table">
          <tbody>
            <tr>
              <td class="lightgray" width="230" height="38">订单结算价</td>
              <td class="bco" width="230" rowspan="2">
                <p class="lightgray">订单总价</p>
                <p class="big">￥599.00</p>
              </td>
              <td class="lightgray" width="230">单人结算价</td>
              <td class="bco" width="230" rowspan="2">
                <p class="lightgray">单人总价</p>
                <p class="big">549 + 50 = 599</p>
              </td>
            </tr>
            <tr>
              <td class="big red">￥599.00</td>
              <td class="big">￥599.00</td>
            </tr>
            <tr>
              <td class="lightgray" width="185" height="38">订单返佣</td>
              <td class="lightgray" width="185">单人返佣</td>
              <td class="lightgray" width="185">增值服务计算</td>
              <td class="lightgray" width="370">备注</td>
            </tr>
            <tr>
              <td>--</td>
              <td>--</td>
              <td>--</td>
              <td>--</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="back-btn"><router-link to="path">返回订单管理<i class="am-icon-angle-double-right am-icon-fw"></i></router-link></div>
    </div>
	</section>
</template>

<script>
require('assets/css/main/plane_query_look.less')
export default {
  data: function () {
    return {
      weekday:'',air_oil:'',
      flightInfo:{}, //航班信息
      userMsg:{},//用户信息
      passengerInfo:[],//乘客信息 
      bookingMsg:{
        state:'',//0未付款 1等待付款 2付款失败 3出票中 4已出票 5出票失败
        payment:{ //支付方式
          way:'',
          account:'',
        }
      },//订单信息 
    }
  },
  created () {
    this.flightInfo={from:'上海虹桥',fromNum:'SHA',fromTime:'13:50',to:'厦门',toNum:'XMN',toTime:'17:00',message:'普通特价 吉祥航空 HO1997 特价舱位4.9折',type:'321',time:'2017-02-19',price:'589.00',phase:'去程',airrax:'50',oilrax:'0'};
    this.userMsg={name:'厦门意博网络服务有限公司',phone:'0592-2950720'}
    this.bookingMsg={bookingNum:'112017010829050505',state:4,createTime:'2017-02-17 16:00',PNR:'AV8D',price:'589.00',payment:{way:'支付宝',account:'562485@qq.com',time:'2017-02-17 17:30',number:'2017010899999999999999999'}};
    this.passengerInfo=[{id:1,name:'TJ.Json',IDtype:['身份证','350524199256475866'],property:'成人',fligtnumber:'010－2017010888',new_fligtnumber:'',telephone:'18056985452'}];
  },
  mounted () {
    this.weekday=this.weekChange(this.flightInfo.time);//推算周几
    this.air_oil=this.flightInfo.airrax*1+this.flightInfo.oilrax*1;//机建费+燃油费
  },
	methods: {
    weekChange(time){
      switch(new Date(time).getDay()){
        case 0:return '星期日';break;
        case 1:return '星期一';break;
        case 2:return '星期二';break;
        case 3:return '星期三';break;
        case 4:return '星期四';break;
        case 5:return '星期五';break;
        case 6:return '星期六';break;
      }
    },
	},
}
</script>