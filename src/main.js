import Vue from 'vue'
import App from './App'
import routers from './router'
import store from './store'
import echarts from "echarts" //引入统计图表
import ElementUI from 'element-ui' //引入elementUI
import 'element-ui/lib/theme-default/index.css' 
import VeeValidate, { Validator } from 'vee-validate'; //验证器
import messages from 'assets/js/zh_CN';

//全局引入
Vue.use(ElementUI)

// Validator.updateDictionary({
//     zh_CN: {
//         messages
//     }
// });
const config = {
    errorBagName: 'errors', 
    delay: 0,
    locale: 'zh_CN',
    messages: null,
    strict: true
};
Vue.use(VeeValidate,config);
//自定义
// const isMobile = {
//     messages: {
//         en:(field, args) =>'请输入正确的联系方式',
//     },
//     validate: (value, args) => {
//        return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
//     }
// }
// Validator.extend('mobile', isMobile)

new Vue({
  store:store,
  router: routers,
  ...App
}).$mount('#app')
