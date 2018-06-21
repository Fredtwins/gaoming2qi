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
    children: [
      {
        path: '/home/echartsList',
        component: () => import('components/echartsList/index'),
        children: [
          {
            path: '/home/echartsList/listcontent',
            component: () => import('components/echartsList/listcontent')
          }, {
            path: '/home/echartsList/shuju',
            component: () => import('components/echartsList/shuju')
          }
        ]
      }
    ]
  }
]

export default routes
