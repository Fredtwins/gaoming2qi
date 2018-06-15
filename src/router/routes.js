const routes = [
  {
    path: '*',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: 'login' */ 'components/login/login')
  },
  {
    path: '/home',
    component: () => import(/* webpackChunkName: 'home' */ 'components/home/home'),
    props: true
  }
]

export default routes
