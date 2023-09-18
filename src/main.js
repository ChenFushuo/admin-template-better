import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import './plugins'
import '@/layouts/export'

import md5 from 'js-md5'
Vue.prototype.$md5 = md5

// 引入自定义插件对象
import './components/index.js'

import * as filters from './filters'
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})

/**
 * @author https://vue-admin-beautiful.com （不想保留author可删除）
 * @description 生产环境默认都使用mock，如果正式用于生产环境时，记得去掉
 */

if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('@/utils/static')
  mockXHR()
}

Vue.config.productionTip = false

new Vue({
  el: '#vue-admin-beautiful',
  router,
  store,
  render: (h) => h(App),
})
