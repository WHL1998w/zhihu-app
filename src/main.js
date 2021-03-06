import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import RGBaster from './util/rgbaster.js';
import global_ from './util/Global.vue';
Vue.prototype.GLOBAL = global_
Vue.use(VueAxios, axios, RGBaster)
Vue.prototype.$store = store;
Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
