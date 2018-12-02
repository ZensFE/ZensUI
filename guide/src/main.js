// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 文档页面组件
import headerNav from './components/header'
import footer from './components/footer'
import sideNav from './components/side-nav'
import pageBtn from './components/page-btn'
import BackToTop from './components/back-to-top'
import demoBlock from './components/demo-block'

Vue.component('demo-block', demoBlock)
Vue.component('back-to-top', BackToTop)
Vue.component('header-nav', headerNav)
Vue.component('footer-nav', footer)
Vue.component('side-nav', sideNav)
Vue.component('page-btn', pageBtn)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
