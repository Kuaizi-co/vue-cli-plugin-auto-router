const Index = () => import(/* webpackChunkName: "login-index" */ '../views/index.vue')

export default [
  {
    name: 'index',
    path: '/',
    component: Index,
    meta: {
      name: 'login-index',
      sidebar: 0
    }
  }
]
