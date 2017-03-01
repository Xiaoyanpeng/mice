<template>
	<section>
    <router-view :tableData="tableData"></router-view>
	</section>
</template>

<script>
export default {
  data: function () {
    return {
      tableData:[]
    }
  },
  created () {
    this.tableData= [
        {bookingNum:'112017010829050505',createTime:'2017-02-17 16:00',PNR:'AV8D',ticketTime:'1分钟',passenger:'沈静',flightInfo:{from:'上海虹桥',to:'厦门',number:'D00000',time:'2017-02-18 06:00',price:'589.00',state:0,operator_name:'Eson',active:''}},
        {bookingNum:'112017010829050505',createTime:'2017-02-17 16:00',PNR:'AV8D',ticketTime:'1分钟',passenger:'沈静',flightInfo:{from:'上海虹桥',to:'厦门',number:'D00000',time:'2017-02-18 06:00',price:'589.00',state:1,operator_name:'Eson',active:''}},
        {bookingNum:'112017010829050505',createTime:'2017-02-17 16:00',PNR:'AV8D',ticketTime:'1分钟',passenger:'沈静',flightInfo:{from:'上海虹桥',to:'厦门',number:'D00000',time:'2017-02-18 06:00',price:'589.00',state:2,operator_name:'Eson',active:1}},
        {bookingNum:'112017010829050505',createTime:'2017-02-17 16:00',PNR:'AV8D',ticketTime:'1分钟',passenger:'沈静',flightInfo:{from:'上海虹桥',to:'厦门',number:'D00000',time:'2017-02-18 06:00',price:'589.00',state:3,operator_name:'Eson',active:''}},
        {bookingNum:'112017010829050505',createTime:'2017-02-17 16:00',PNR:'AV8D',ticketTime:'1分钟',passenger:'沈静',flightInfo:{from:'上海虹桥',to:'厦门',number:'D00000',time:'2017-02-18 06:00',price:'589.00',state:4,operator_name:'Eson',active:''}},
        {bookingNum:'112017010829050505',createTime:'2017-02-17 16:00',PNR:'AV8D',ticketTime:'1分钟',passenger:'沈静',flightInfo:{from:'上海虹桥',to:'厦门',number:'D00000',time:'2017-02-18 06:00',price:'589.00',state:2,operator_name:'Eson',active:''}},
        {bookingNum:'112017010829050505',createTime:'2017-02-17 16:00',PNR:'AV8D',ticketTime:'1分钟',passenger:'沈静',flightInfo:{from:'上海虹桥',to:'厦门',number:'D00000',time:'2017-02-18 06:00',price:'589.00',state:0,operator_name:'Eson',active:''}},
        {bookingNum:'112017010829050505',createTime:'2017-02-17 16:00',PNR:'AV8D',ticketTime:'1分钟',passenger:'沈静',flightInfo:{from:'上海虹桥',to:'厦门',number:'D00000',time:'2017-02-18 06:00',price:'589.00',state:2,operator_name:'Eson',active:1}},
        {bookingNum:'112017010829050505',createTime:'2017-02-17 16:00',PNR:'AV8D',ticketTime:'1分钟',passenger:'沈静',flightInfo:{from:'上海虹桥',to:'厦门',number:'D00000',time:'2017-02-18 06:00',price:'589.00',state:1,operator_name:'Eson',active:''}},
        {bookingNum:'112017010829050505',createTime:'2017-02-17 16:00',PNR:'AV8D',ticketTime:'1分钟',passenger:'沈静',flightInfo:{from:'上海虹桥',to:'厦门',number:'D00000',time:'2017-02-18 06:00',price:'589.00',state:3,operator_name:'Eson',active:''}},
      ]
  },
	methods: {	

	}
}
</script>