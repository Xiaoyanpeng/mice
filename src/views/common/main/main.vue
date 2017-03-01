<template>
  <section>
    <div class="main-contain">
      <div class="contain-left">
        <MainSlide></MainSlide>
      </div>
      <div class="contain-right">
        <router-view></router-view>
      </div> 
    </div> 
  </section>
</template>

<script>
import MainSlide from 'components/MainSlide'
export default {
  data: function () {
    return {
      
    }
  },
  computed: {},
  methods: {},
  components: {
    MainSlide,
  }
}
</script>

<style lang="less">
  .main-contain{
    margin:0 auto;
    width: 1200px;
    padding-top: 30px;
  }
 .contain-left{
    float:left;
  }
  .contain-right{
    float:left;
    margin-left: 20px;
  }
  .main-contain:after{ 
    content:".";
    display:block;
    height:0;
    clear:both;
    visibility:hidden;
  }
  .contain-right-foot{
    float: left;
    margin-top: 20px;
  }
</style>
