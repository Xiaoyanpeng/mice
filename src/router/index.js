import Vue from 'vue'
import VueRouter from 'vue-router'
//个人中心主页
import Main from '../views/common/main/main'  
import MainIndex from '../views/common/main/main_index'
//个人中心主页-酒店订单查询
import MainHotelQuery from '../views/common/main/main_hotel_query'
import MainHotelQueryIndex from '../views/common/main/main_hotel_query_index'
import MainHotelQueryLook from '../views/common/main/main_hotel_query_look'
//个人中心主页-机票订单查询
import MainPlaneQuery from '../views/common/main/main_plane_query'
import MainPlaneQueryIndex from '../views/common/main/main_plane_query_index'
import MainPlaneQueryLook from '../views/common/main/main_plane_query_look'

import MainCarQuery from '../views/common/main/main_car_query'
import MainTravelQuery from '../views/common/main/main_travel_query'
import MainVisaQuery from '../views/common/main/main_visa_query'
//我的账单
import MainBillIncome from '../views/common/main/main_bill_income' 
import MainBillPayout from '../views/common/main/main_bill_payout'
import MainBillRecharge from '../views/common/main/main_bill_recharge'
import MainBillRepay from '../views/common/main/main_bill_repay'
import MainBillScore from '../views/common/main/main_bill_score'
//企业中心
import MainCorporManage from '../views/common/main/main_corpor_manage'
import MainCorporManageIndex from '../views/common/main/main_corpor_manage_index'
import MainCorporManageFill from '../views/common/main/main_corpor_manage_fill'
import MainCorporMsgIndex from '../views/common/main/main_corpor_msg_index'
import MainCorporMsg from '../views/common/main/main_corpor_msg'
import MainCorporMsgFill from '../views/common/main/main_corpor_msg_fill'
import MainCorporReg from '../views/common/main/main_corpor_reg'
import MainCorporSafe from '../views/common/main/main_corpor_safe'
//常旅客信息
import MainHotelguestIndex from '../views/common/main/main_hotelguest_index'
import MainHotelguest from '../views/common/main/main_hotelguest'
import MainHotelguestLook from '../views/common/main/main_hotelguest_look'
import MainHotelguestFill from '../views/common/main/main_hotelguest_fill'
//个人信息
import MainPersonal from '../views/common/main/main_personal'
//我的预订
import MainPlane from '../views/common/main/main_plane'
import MainCar from '../views/common/main/main_car'
import MainTravel from '../views/common/main/main_travel'
import MainVisa from '../views/common/main/main_visa'
import MainHotel from '../views/common/main/main_hotel'
//底部页面
import Footer from '../views/common/footer/footer'
import FooterAboutUs from '../views/common/footer/footer_about_us'
import FooterBrandHonor from '../views/common/footer/footer_brand_honor'
import FooterCompanyNews from '../views/common/footer/footer_company_news'
import FooterContactUs from '../views/common/footer/footer_contact_us'
import FooterLagalState from '../views/common/footer/footer_lagal_state'
import FooterPrivacyProtection from '../views/common/footer/footer_privacy_protection'
import FooterTalentRecruitment from '../views/common/footer/footer_talent_recruitment'
import FooterNews from '../views/common/footer/footer_news'
//主页
import Start from '../views/index'
//有头尾共用部分 父组件
import Common from '../views/common'
//酒店
import Hotel from '../views/common/hotel'
//机票
import Plane from '../views/common/plane'
//租车
import Car from '../views/common/car'
//签证
import Visa from '../views/common/visa'
//度假
import Travel from '../views/common/travel'
//登录页
import Login from '../views/login'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
//需要头尾页面
    {path: '/common',
      component: Common,
      children: [
        {path: 'main',component: Main,//个人中心
          children:[
            {path: '', component: MainIndex },
            {path: 'hotel', component: MainHotel},///酒店预订
            {path: 'plane', component: MainPlane},///机票预订
            {path: 'car',component: MainCar},
            {path: 'visa',component: MainVisa},
            {path: 'travel',component: MainTravel},
            {path: 'hotel_query',component: MainHotelQueryIndex,///酒店订单查询
                children:[{path: '',component: MainHotelQuery,},{path: 'look',component: MainHotelQueryLook,}]},
            {path: 'plane_query',component: MainPlaneQueryIndex,///机票订单查询
                children:[{path: '',component: MainPlaneQuery,},{path: 'look',component: MainPlaneQueryLook,}]},
            {path: 'car_query',component: MainCarQuery},
            {path: 'visa_query',component: MainVisaQuery},
            {path: 'travel_query',component: MainTravelQuery},
            {path: 'bill_income',component: MainBillIncome},///我的账单
            {path: 'bill_payout',component: MainBillPayout},
            {path: 'bill_recharge',component: MainBillRecharge},
            {path: 'bill_repay',component: MainBillRepay},
            {path: 'bill_score',component: MainBillScore},
            {path: 'corpor_manage',component: MainCorporManageIndex,///企业中心
                children:[{path: '',component: MainCorporManage,},{path: 'fill',component: MainCorporManageFill,}]},
            {path: 'corpor_msg',component: MainCorporMsgIndex,
                children:[{path: '',component: MainCorporMsg,},{path: 'fill',component: MainCorporMsgFill,}]},
            {path: 'corpor_reg',component: MainCorporReg},
            {path: 'corpor_safe',component: MainCorporSafe},
            {path: 'guest',component: MainHotelguestIndex,///常旅客信息
                children:[{path: '',component: MainHotelguest,},{path: 'fill',component: MainHotelguestFill,},{path: 'look',component: MainHotelguestLook,}]},
            {path: 'personal',component: MainPersonal}///个人信息
          ]},
        {path: 'hotel',component: Hotel,},//酒店
        {path: 'plane',component: Plane,}, //机票
        {path: 'car',component: Car,},//租车
        {path: 'visa',component: Visa,},//签证
        {path: 'travel',component: Travel,},//度假
        {path: 'footer',component: Footer, //底部
            children: [
              {path: 'lagal_state',component: FooterLagalState},{path: 'brand_honor',component: FooterBrandHonor},
              {path: 'about_us',component: FooterAboutUs},{path: 'company_news',component: FooterCompanyNews},
              {path: 'talent_recruitment',component: FooterTalentRecruitment},{path: 'contact_us',component: FooterContactUs},
              {path: 'privacy_protection',component: FooterPrivacyProtection}]},
        {path: 'footer/news',component: FooterNews}]},//没有侧栏 单独
//不需要头尾页面
    { path:'/',component: Start },{ path:'/index',component: Start },
    { path:'/login',component: Login }
  ]
})
