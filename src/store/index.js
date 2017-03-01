import Vue from 'vue'
import Vuex from 'vuex'
import Guest from './guest/mutations'
Vue.use(Vuex)

const Guest_msg = {
  state:Guest.state,
  mutations: Guest.mutations,
}
export default new Vuex.Store({
  modules:{
    Guest_msg
  }
})
///暂时没用vuex处理数据