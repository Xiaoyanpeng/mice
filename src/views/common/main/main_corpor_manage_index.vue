<template>
	<section>
    <router-view :tableData="tableData"></router-view>
	</section>
</template>

<script>
export default {
  data: function () {
    return {
     tableData: []
    }
  },
  created () {
		this.queryData();//请求数据
	},
	methods: {
    queryData(){
      this.tableData=[  
        {id:1,name: '小新',department: '技术部',job:'前端开发',abled:1,right:1},
        {id:2,name: '大熊',department: '开发部',job:'后端开发',abled:1,right:1},
        {id:3,name: '小星星',department: '人力部',job:'招聘员',abled:0,right:1},
        {id:4,name: '小燕',department: '财务部',job:'财务经理',abled:1,right:0},
        {id:5,name: '小通',department: '动力部',job:'设备工程师',abled:0,right:1},
        {id:6,name: '小新',department: '采购部',job:'采购员',abled:1,right:0},
        {id:7,name: '小新',department: '保安部',job:'保安',abled:1,right:1},
        {id:8,name: '小新',department: '技术部',job:'后端开发',abled:1,right:1},
        {id:9,name: '小新',department: '技术部',job:'招聘员',abled:0,right:1},
        {id:10,name: '小新',department: '技术部',job:'前端开发',abled:1,right:0},
        {id:11,name: '小新',department: '技术部',job:'前端开发',abled:0,right:1},
        {id:12,name: '小新',department: '技术部',job:'前端开发',abled:1,right:0},
      ];
    }
	}
}
</script>