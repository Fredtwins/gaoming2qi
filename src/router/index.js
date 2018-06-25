import VueRouter from 'vue-router'
import routes from './routes'
// import { getUserIng } from '../common/js/util'
// import { options } from '../api/config'
// import iView from 'iview'
// import { getLocalStorage } from 'common/js/dom'

const router = new VueRouter({
  mode: 'history',
  routes
})

// router.beforeEach((to, from, next) => {
//   // to and from are Route Object,next() must be called to resolve the hook
//   // 判断登录
//   if (!to.meta.nologin) {
//     // console.log(options().headers.token)
//     if (options().headers.token === undefined || !options().headers.token) {
//       router.push('/')
//     } else {
//       next()
//     }
//   } else {
//     next()
//   }
// })

export default router
