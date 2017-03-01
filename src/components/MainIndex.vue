<template>
  <section>
    <ul class="mainIndex">
      <li v-for="item in iconList">
        <router-link :to="item._link">
          <p class="icons"><img :src="item.src" alt=""></p>
          <p>{{item.name}}</p>
          <p>本月订单</p>
          <p>{{item.bookingNum}}单</p>
          <p v-show="item.noticeNum > 0 && item.noticeNum < 100" class="tag">{{item.noticeNum}}</p>
          <p v-if="item.noticeNum > 99" class="tag">99+</p>
          <p v-show="item.hasLine" class="line"></p>
        </router-link>
      </li>
    </ul>
    <div class="newBooking">
      <p class="title">最新订单</p>
      <ul class="message">
        <li v-for="(item,index) in bookingList">
          <div class="p1"><span class="black">“{{item.username}}”</span>&nbsp;于{{item.date}}&nbsp;{{item.time}}订购了&nbsp;<span class="red">“{{item.content}}”</span>&nbsp;{{item.detail}}。</div>
          <div class="p2">查看详情</div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
require('assets/css/components/component_main_index.less')
export default {
  data () {
    return {
      ////图标
      iconList:[
        {
          src:require('assets/images/main/iconHotel.png'),
          name:'酒店',
          bookingNum:400,
          noticeNum:100,
          hasLine:true,//显示侧边线
          _link:'/common/main/hotel_query', //链接地址
        },
        {
          src:require('assets/images/main/iconPlane.png'),
          name:'机票',
          bookingNum:25,
          noticeNum:3,
          hasLine:true,
          _link:'/common/main/plane_query',
        },
        {
          src:require('assets/images/main/iconCar.png'),
          name:'租车',
          bookingNum:25,
          noticeNum:12,
          hasLine:true,
          _link:'/common/main/car_query',
        },
        {
          src:require('assets/images/main/iconVisa.png'),
          name:'签证',
          bookingNum:25,
          noticeNum:0,
          hasLine:true,
          _link:'/common/main/visa_query',
        },
        {
          src:require('assets/images/main/iconTravel.png'),
          name:'度假',
          bookingNum:25,
          noticeNum:0,
          hasLine:false,
          _link:'/common/main/travel_query',
        },
      ],

      ///最新订单  限制8个
      bookingList:[
        {
          username:'小敏',
          date:'2016.9.21',
          time:'16:30',
          content:'威斯汀酒店－海景套房',
          detail:'1间',
        },
        {
          username:'小东',
          date:'2016.9.21',
          time:'16:30',
          content:'厦门 - 慕尼黑',
          detail:'往返机票',
        },
        {
          username:'小敏',
          date:'2016.9.21',
          time:'16:30',
          content:'南非、迪拜11日豪华异域风情游',
          detail:'13天12夜游',
        },
        {
          username:'小敏',
          date:'2016.9.21',
          time:'16:30',
          content:'南非、迪拜11日豪撒飞洒地放水电费水电费水电费水电费方撒旦华异域风情游',
          detail:'13天12夜游',
        },{
          username:'小敏',
          date:'2016.9.21',
          time:'16:30',
          content:'威斯汀酒店－海景套房',
          detail:'1间',
        },
        {
          username:'小东',
          date:'2016.9.21',
          time:'16:30',
          content:'厦门 - 慕尼黑',
          detail:'往返机票',
        },
        {
          username:'小敏',
          date:'2016.9.21',
          time:'16:30',
          content:'南非、迪拜11日豪华异域风情游',
          detail:'13天12夜游',
        },
        {
          username:'小敏',
          date:'2016.9.21',
          time:'16:30',
          content:'南非、迪拜11日豪撒飞洒地放水电费水电费水电费水电费方撒旦华异域风情游',
          detail:'13天12夜游',
        }
      ],
    }
  }
}
</script>
