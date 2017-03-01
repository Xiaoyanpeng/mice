<template>
  <section>
    <NavHeader></NavHeader>
    <router-view></router-view>
    <NavFooter></NavFooter>
  </section>
</template>

<script>
import NavHeader from 'components/NavHeader'
import NavFooter from 'components/NavFooter'
export default {
  data: function () {
    return {
      
    }
  },
  computed: {},
  methods: {},
  components: {
    NavHeader,
    NavFooter
  }
}
</script>