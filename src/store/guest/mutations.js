const state = {
		
}
const mutations = {
  updateGuestTel (state, payload) { state.tableData[payload.id].telephone = payload.message }, //电话号码
  updateGuestSex (state, payload) { state.tableData[payload.id].sex = payload.message }, //性别
  updateGuestNameCN (state, payload) { state.tableData[payload.id].nameCN = payload.message }, //中文姓名
  updateGuestNameEN (state, payload) { state.tableData[payload.id].nameEN = payload.message }, //英文姓名
}

export default {
	state,
	mutations
}