import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		token: '11',
		baseUrl: 'http://localhost:8080/api',
		user: {
			id: 1,
			url: 'tao-ran-ran-42',
			nickname: '王欢乐',
			avatar: 'https://student-manage-whl.oss-cn-beijing.aliyuncs.com/logo/9.jpg'
		}
	},
	mutations: {
		setToken(state, data) {
			state.token = data;
		},
		setUser(state, data) {
			state.user = data;
		}
	},
	getters: {
	},
	actions: {
	},
	modules: {}
})