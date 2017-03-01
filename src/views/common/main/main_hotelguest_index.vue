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
    //请求数据
    this.tableData=[
        {id:1,nameCN: ['王','小新'],nameEN:['WANG','XIAOXIN'],telephone: ['0','15245855558'],IDtype:['身份证','350524155524563578',''],country:'中国',sex:1,phone:['','',''],fax:['','',''],email:'',birthday:'',birthplace:['','','','']},
        {id:2,nameCN:['陈','大熊'],nameEN:['CHEN','DAXIONG'],telephone: ['1','18526547958'],IDtype:['护照','350544552525','2016-3-1'],country:'中国',sex:1,phone:['','',''],fax:['','',''],email:'',birthday:'',birthplace:['','','','']},
        {id:3,nameCN: ['小','星星'],nameEN:['XIAO','XINGXING'],telephone: ['0','13458765482'],IDtype:['身份证','350524155524563578',''],country:'美国',sex:0,phone:['','',''],fax:['','',''],email:'',birthday:'',birthplace:['','','','']},
        {id:4,nameCN: ['陈','小燕'],nameEN:['CHEN','XIAOYAN'],telephone: ['0','15474475788'],IDtype:['身份证','350524155524563578',''],country:'中国',sex:0,phone:['','',''],fax:['','',''],email:'',birthday:'',birthplace:['','','','']},
        {id:5,nameCN: ['刘','小童'],nameEN:['LIU','XIAOTONG'],telephone: ['0','18059869542'],IDtype:['身份证','350524155524563578',''],country:'中国',sex:1,phone:['','',''],fax:['','',''],email:'',birthday:'',birthplace:['','','','']},
        {id:6,nameCN: ['华','师傅'],nameEN:['HUA','SHIFU'],telephone: ['0','17548588265'],IDtype:['身份证','350524155524563578',''],country:'中国',sex:1,phone:['','',''],fax:['','',''],email:'',birthday:'',birthplace:['','','','']},
        {id:7,nameCN:['四','豆腐'],nameEN:['SI','DOUFU'],telephone: ['0','13489658546'],IDtype:['身份证','350524155524563578',''],country:'中国',sex:1,phone:['','',''],fax:['','',''],email:'',birthday:'',birthplace:['','','','']},
        {id:8,nameCN: ['房','祖名'],nameEN:['FANG','ZUMING'],telephone: ['0','15058642563'],IDtype:['身份证','350524155524563578',''],country:'中国',sex:1,phone:['','',''],fax:['','',''],email:'',birthday:'',birthplace:['','','','']},
        {id:9,nameCN: ['阮','水晶'],nameEN:['RUAN','SHUIJING'],telephone: ['1','13489658546'],IDtype:['身份证','350524155524563578',''],country:'中国',sex:0,phone:['','',''],fax:['','',''],email:'',birthday:'',birthplace:['','','','']},
        {id:10,nameCN:['陈','大大'],nameEN:['CHEN','DADA'],telephone: ['0','13489658546'],IDtype:['身份证','350524155524563578',''],country:'中国',sex:1,phone:['','',''],fax:['','',''],email:'',birthday:'',birthplace:['','','','']},
        {id:11,nameCN: ['孙','大生'],nameEN:['SUN','DASHENG'],telephone: ['0','13489658546'],IDtype:['身份证','350524155524563578',''],country:'中国',sex:1,phone:['','',''],fax:['','',''],email:'',birthday:'',birthplace:['','','','']},
        {id:12,nameCN: ['杨','艳阳'],nameEN:['YANG','YANYANG'],telephone: ['0','13489658546'],IDtype:['身份证','350524155524563578',''],country:'中国',sex:0,phone:['','',''],fax:['','',''],email:'',birthday:'',birthplace:['','','','']},
      ];
  },
	methods: {	
    
	},
}
</script>