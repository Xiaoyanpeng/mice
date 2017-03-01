<template>
  <section>
    <div class="echart-week" id="week-order"></div>
    <div class="echart-month" id="month-order"></div>
    <div class="echart-sum">
      <p class="title">{{nowYear}}年订单</p>
      <ul>
        <li v-for="(item,index) in sumOrder">
          <p>{{item.number}}单</p>
          <p>{{item.name}}（{{item.percent}}%）</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  require('assets/css/components/component_main_index.less')
  import echarts from "echarts"
  export default {
        data(){
            return{
              nowYear:2016,
              sumOrder:[{
                name:'酒店',
                number:800,
                percent:40,
              },{
                name:'机票',
                number:300,
                percent:30,
              },{
                name:'租车',
                number:100,
                percent:10,
              },{
                name:'签证',
                number:80,
                percent:8,
              },{
                name:'度假',
                number:50,
                percent:6,
              },]
            }
        },
        mounted (){
            var myChart_week = echarts.init(document.getElementById('week-order'));
            myChart_week.setOption({
                tooltip : {},
                title:{
                  show:true,
                  text:'日订单量',
                  padding:[20,0,0,28],
                  textStyle:{
                    // fontWeight:'normal',
                    color:'#373737',
                    fontSize:16,
                  },
                },
                legend:{
                  show:true,
                  orient:'vertical',
                  right:'3%',
                  top:'20%',
                  itemGap:30,
                  data: [
                    {name: '机票订单',textStyle: {color: '#1a8bda'}},
                    {name: '酒店订单',textStyle: {color: '#a03ad0'}},
                    {name: '租车订单',textStyle: {color: '#7d56cc'}},
                    {name: '签证订单',textStyle: {color: '#ba6a4a'}},
                    {name: '度假订单',textStyle: {color: '#18965f'}},
                  ]
                },
                grid: {
                    left: 28,
                    right: '15%',
                    bottom: '5%',
                    top:'20%',
                    containLabel: true
                },
                xAxis : [{
                    type : 'category',
                    data : ['10.2', '10.3', '10.4', '10.5', '10.6', '10.7', '10.8'],
                    axisTick: {
                        show:false,
                        alignWithLabel: false, 
                    },
                    axisLabel:{
                        interval:'0',
                        textStyle:{color:'#666'},     
                    },
                    axisLine:{
                        lineStyle:{color:'#ccc'},
                    },
                    // name:'日',
                    // nameTextStyle:{color:'#999'},
                    // nameGap:10,
                }],
                yAxis : [{
                    type : 'value',
                    axisLine:{
                        show:false,
                        lineStyle:{color:'#bbb',type:'dashed'},
                    },
                    axisLabel:{
                        textStyle:{color:'#666'},
                    },
                    splitLine:{
                        show:true,
                        lineStyle:{color:'#bbb',type:'dashed'},
                    },
                    axisTick: {
                        show:false,
                        alignWithLabel: false, 
                    },
                }],
                series : [{
                    type:'line',
                    name:'机票订单',
                    itemStyle:{ normal:{ color:'#1a8bda'}},
                    data:[10, 9, 7, 14, 20,35,32],
                },{
                    type:'line',
                    name:'酒店订单',
                    itemStyle:{ normal:{ color:'#a03ad0'}},
                    data:[11, 8, 9, 19, 20,15,22],
                },{
                    type:'line',
                    name:'租车订单',
                    itemStyle:{ normal:{ color:'#7d56cc'}},
                    data:[1, 4, 2, 7, 0,5,2],
                },{
                    type:'line',
                    name:'签证订单',
                    itemStyle:{ normal:{ color:'#ba6a4a'}},
                    data:[12, 4, 5, 9, 2,5,12],
                },{
                    type:'line',
                    name:'度假订单',
                    itemStyle:{ normal:{ color:'#18965f'}},
                    data:[7, 8, 9, 10, 11,12,13],
                },]
            })

            var myChart_month = echarts.init(document.getElementById("month-order"));
            myChart_month.setOption({
                tooltip : {},
                title:{
                  show:true,
                  text:'月订单量',
                  padding:[20,0,0,28],
                  textStyle:{
                    // fontWeight:'normal',
                    color:'#373737',
                    fontSize:16,
                  },
                },
                legend:{
                  show:true,
                  right:'3%',
                  top:28,
                  orient:'horizontal',
                  selectedMode:'single',
                  data: ['机票', '酒店', '租车', '签证','度假'],
                },
                grid: {
                    left: 28,
                    right: '7%',
                    bottom: '5%',
                    top:'13%',
                    containLabel: true
                },
                xAxis : [{
                    type : 'category',
                    data : ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec'],
                    axisTick: {
                        show:false,
                        alignWithLabel: false, 
                    },
                    axisLabel:{
                        interval:'0',
                        textStyle:{color:'#666'},         
                    },
                    axisLine:{
                        lineStyle:{color:'#ccc'},
                    },
                    name:'月份',
                    nameTextStyle:{color:'#999'},
                }],
                yAxis : [{
                    type : 'value',
                    axisLine:{
                        lineStyle:{color:'#bbb',type:'dashed'},
                    },
                    axisLabel:{
                        textStyle:{color:'#666'},
                    },
                    splitLine:{
                        show:true,
                        lineStyle:{color:'#bbb',type:'dashed'},
                    },
                    axisTick: {
                        show:false,
                        alignWithLabel: false, 
                    },
                }],
                series : [{
                    name:'机票',
                    type:'bar',
                    barWidth: '50%',
                    data:[10, 52, 200, 134, 90,30,20,20,190,68,54,10],
                    itemStyle:{normal:{color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#ff6100' }, {offset: 1, color: '#fe8f00'}]),}}
                },{
                    name:'酒店',
                    type:'bar',
                    barWidth: '50%',
                    data:[11, 2, 150, 34, 190,130,120,12,90,8,54,10],
                    itemStyle:{normal:{color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#ff6100' }, {offset: 1, color: '#fe8f00'}]),}}
                },{
                    name:'租车',
                    type:'bar',
                    barWidth: '50%',
                    data:[50, 52, 100, 34, 9,35,50,20,90,8,84,60],
                    itemStyle:{normal:{color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#ff6100' }, {offset: 1, color: '#fe8f00'}]),}}
                },{
                    name:'签证',
                    type:'bar',
                    barWidth: '50%',
                    data:[20, 82, 100, 34, 95,38,50,20,190,68,54,10],
                    itemStyle:{normal:{color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#ff6100' }, {offset: 1, color: '#fe8f00'}]),}}
                },{
                    name:'度假',
                    type:'bar',
                    barWidth: '50%',
                    data:[80, 50, 90, 34, 9,30,20,20,190,68,54,10],
                    itemStyle:{normal:{color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{offset: 0, color: '#ff6100' }, {offset: 1, color: '#fe8f00'}]),}}
                }]
            })
      }
  }
</script>