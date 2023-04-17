// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'

import $ from 'jquery'  
import axios from 'axios'

import VueAxios from 'vue-axios'

import qs from 'qs'

import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

import MobileSelect from 'mobile-select'

import Home from './components/Home'
import Apply from './components/Apply'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueAxios, axios)

//配置路由
const router = new VueRouter({
	routes: [
		{path: "/", component: Home,},
		{path: "/Apply", component: Apply,},
	],
	// mode: "history"
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
