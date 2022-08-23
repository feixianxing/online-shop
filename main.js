import App from './App'
// 引入 request-miniprogram
import {$http} from '@escook/request-miniprogram'

// 导入 store 的实例对象
import store from './store/store.js'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App,
    // 将 store 挂载到 Vue 实例上
    store,
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app,
  }
}
// #endif


uni.$http = $http
// 配置请求根路径
$http.baseUrl = 'https://api-ugo-web.itheima.net'

// 请求开始之前做一些事情
$http.beforeRequest = function(options){
  uni.showLoading({
    title: '数据加载中...',
  })
}

// 请求完成之后做一些事情
$http.afterRequest = function(){
  uni.hideLoading()
}

// 封装 uni.$showMsg() 方法
uni.$showMsg = function(title = '数据加载失败！',duration = 1500){
  uni.showToast({
    title,
    duration,
    icon:'none'
  })
}