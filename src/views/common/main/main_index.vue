<template>
  <section>
    <div class="contain-right-head">
        <div class="contain-right-left">
        <MainIndex></MainIndex>
        </div>
        <div class="contain-right-right">
        <MainIndexRight></MainIndexRight>
        </div>
    </div>
    <div class="contain-right-foot">
        <analysis></analysis>
    </div>
  </section> 
</template>

<script>
import MainIndex from 'components/MainIndex'
import MainIndexRight from 'components/MainIndexRight'
import analysis from 'components/DataAnalysis'
export default {
  data: function () {
    return {
      
    }
  },
  computed: {},
  methods: {},
  components: {
    MainIndex,
    MainIndexRight,
    analysis,
  }
}
</script>

<style lang="less">
  .contain-right-left{
    float: left;
  }
  .contain-right-right{
    float: left;
    margin-left: 20px;
  }
</style>