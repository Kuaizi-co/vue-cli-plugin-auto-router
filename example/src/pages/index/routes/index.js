const _404 = () => import(/* webpackChunkName: "index-404" */ '../views/404.vue')
const Account = () =>
  import(/* webpackChunkName: "index-account" */ '../views/account.vue')
const Home = () => import(/* webpackChunkName: "index-home" */ '../views/home.vue')
const Login = () => import(/* webpackChunkName: "index-login" */ '../views/login.vue')
const Report = () =>
  import(/* webpackChunkName: "index-report" */ '../views/report.vue')
const System = () =>
  import(/* webpackChunkName: "index-system" */ '../views/system.vue')
const ManageIndex = () =>
  import(/* webpackChunkName: "index-manage-index" */ '../views/manage/index.vue')
const ManageHello = () =>
  import(/* webpackChunkName: "index-manage-hello" */ '../views/manage/hello.vue')
const ManageWord = () =>
  import(/* webpackChunkName: "index-manage-word" */ '../views/manage/word.vue')
const ManageWordId = () =>
  import(/* webpackChunkName: "index-manage-word-id" */ '../views/manage/word/_id.vue')

export default [
  {
    name: '404',
    path: '/404',
    component: _404
  },
  {
    name: 'account',
    path: '/account',
    component: Account
  },
  {
    name: 'home',
    path: '/home',
    component: Home
  },
  {
    name: 'login',
    path: '/login',
    component: Login,
    meta: {
      sidebar: 0
    }
  },
  {
    name: 'report',
    path: '/report',
    component: Report
  },
  {
    name: 'system',
    path: '/system',
    component: System
  },
  {
    name: 'manage-index',
    path: '/manage',
    component: ManageIndex,
    meta: {
      keepAlive: true
    }
  },
  {
    name: 'manage-hello',
    path: '/manage/hello',
    component: ManageHello
  },
  {
    name: 'manage-word',
    path: '/manage/word',
    component: ManageWord,
    children: [
      {
        name: 'manage-word-id',
        path: ':id?',
        component: ManageWordId,
        meta: {
          name: 'word'
        }
      }
    ]
  }
]
