import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'

import router from './router'
import store from './store'
import App from './App'
import iView from 'iView'
import axios from 'axios'
// import 'iview/dist/styles/iview.css'

import 'common/scss/reset'

Vue.use(VueRouter)
Vue.use(iView)
Vue.use(axios)

/* eslint-disable */
new Vue({ // eslint-disable-line
  el: '#app',
  router,
  store,
  render: h => h(App),
  // template: '<App/>',
  // components: { App }
})
/* eslint-enable */
