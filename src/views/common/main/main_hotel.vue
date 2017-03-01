<template>
	<section>
		<div class="main-hotel">
			<ul class="hotel-booking">
				<li :class="{ active: isCivil}" @click="isCivil=!isCivil">国内酒店</li>
				<li :class="{ active: !isCivil}" @click="isCivil=!isCivil">国外酒店</li>
			</ul>
			<div class="hotel-query">
				<ul class="form-list">
					<li>
						<div class="name">酒店名</div>
						<div class="text"><input class="am-form-field beaty" type="text"></div>
					</li>
					<li>
						<div class="name">城市/地标／酒店星级</div>
						<div class="text"><input class="am-form-field beaty" type="text"></div>
					</li>
					<li>
						<div class="name">入住时间</div>
						<div class="text"><el-date-picker v-model="checkInTime" type="date" :picker-options="checkInTimePicker"></el-date-picker></div>
					</li>
					<li>
						<div class="name">离店时间</div>
						<div class="text"><el-date-picker v-model="checkOutTime" type="date" :picker-options="checkOutTimePicker"></el-date-picker></div>
					</li>
				</ul>
				<transition name="fade">
					<ul v-show="isSuperSearch" class="two-sec">
						<li>
							<div class="name">成人</div>
							<div class="people"><el-select v-model="adultSelect"><el-option v-for="item in adultSelectOptions" :label="item.label" :value="item.value"></el-option></el-select></div>
						</li>
						<li>
							<div class="name">儿童</div>
							<div class="people"><el-select v-model="childSelect"><el-option v-for="item in childSelectOptions" :label="item.label" :value="item.value"></el-option></el-select></div>
						</li>
						<li>
							<div class="name">婴儿</div>
							<div class="people"><el-select v-model="badySelect"><el-option v-for="item in badySelectOptions" :label="item.label" :value="item.value"></el-option></el-select></div>
						</li>
						<li>
							<div class="name">酒店星级</div>
							<div class="state"><el-select v-model="starSelect"><el-option v-for="item in starSelectOptions" :label="item.label" :value="item.value"></el-option></el-select></div>
						</li>
						<li>
							<div class="name">房型</div>
							<div class="state"><el-select v-model="roomSelect"><el-option v-for="item in roomSelectOptions" :label="item.label" :value="item.value"></el-option></el-select></div>
						</li>
						<p class="notice">温馨提示：婴儿（0-2）、儿童（2-11）。若无，可不填</p>
					</ul>
				</transition>
				<div class="button">
					<div class="super-search" @click="isSuperSearch=!isSuperSearch;"><i class="am-icon-search am-icon-fw"></i>&nbsp;高级搜索<i class="am-icon-fw" :class="[ isSuperSearch ? 'am-icon-angle-up': 'am-icon-angle-down']"></i></div>
					<div class="bttn">查询</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
require('assets/css/main/hotel.less')
export default {
  data: function () {
    return {
      isCivil:true,//选择国内
			isSuperSearch:false,//高级搜索
			checkInTime:new Date(),//入住时间
			checkInTimePicker: { },
			checkOutTime:'',//离店时间
			checkOutTimePicker: {disabledDate(time) {}},
			adultSelect: '',//select选项
			adultSelectOptions: [
				{value: '0',label: '0'},{value: '1',label: '1'},{value: '2',label: '2'},{value: '3',label: '3'},
				{value: '4',label: '4'},{value: '5',label: '5'}
			],
			childSelect: '',
			childSelectOptions: [
				{value: '0',label: '0'},{value: '1',label: '1'},{value: '2',label: '2'},{value: '3',label: '3'},
				{value: '4',label: '4'},{value: '5',label: '5'}
			],
			badySelect: '',
			badySelectOptions: [
				{value: '0',label: '0'},{value: '1',label: '1'},{value: '2',label: '2'},{value: '3',label: '3'},
				{value: '4',label: '4'},{value: '5',label: '5'}
			],
			starSelect: '',
			starSelectOptions: [
				{value: '1',label: '二星级及以下'},{value: '2',label: '三星级'},{value: '3',label: '四星级'},
				{value: '4',label: '五星级及以上'}
			],
			roomSelect: '',
			roomSelectOptions: [
				{value: '1',label: '特价房'},{value: '2',label: '单床房'},{value: '3',label: '双人房'},
				{value: '4',label: '标准房'},{value: '5',label: '商务房'}
			],
		}
  },
	methods: {
		
	}
}
</script>
<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>