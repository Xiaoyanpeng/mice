<template>
  <section>
    <div class="main-contain">
      <div class="contain-left">
        <FooterSlide></FooterSlide>
      </div>
      <div class="contain-info">
        <router-view></router-view>
      </div> 
    </div> 
  </section>
</template>

<script>
import FooterSlide from 'components/FooterSlide'
export default {
  data: function () {
    return {
      
    }
  },
  computed: {},
  methods: {},
  components: {
		FooterSlide
  }
}
</script>

<style lang="less">
  .main-contain{
    margin:0 auto;
    width: 1200px;
    padding-top: 30px;
    min-height: 400px;
  }
 .contain-left{
    float:left;
  }
  .contain-info{
    float:left;
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
