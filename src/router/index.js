import Vue from 'vue'
import Router from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV) // 判断当前环境，环境在webpack配置过了
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'

export const constantRouterMap = [
  {path: '/login', component: _import('login/index'), hidden: true},
  {path: '/404', component: _import('errorPage/404'), hidden: true},
  {path: '/authredirect', component: _import('login/authredirect'), hidden: true},
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      component: _import('dashboard/index'),
      name: 'dashboard',
      meta: {title: 'dashboard', icon: 'dashboard', noCache: true}
    }]
  },
  {
    path: '/documentation',
    component: Layout,
    redirect: '/documentation/index',
    children: [{
      path: 'index',
      component: _import('documentation/index'),
      name: 'documentation',
      meta: {title: 'documentation', icon: 'documentation', noCache: true}
    }]
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})


export const asyncRouterMap = [
  // {
  //   path: '/permission',
  //   component: Layout,
  //   redirect: '/permission/index',
  //   meta: { roles: ['admin'] }, // you can set roles in root nav
  //   children: [{
  //     path: 'index',
  //     component: _import('permission/index'),
  //     name: 'permission',
  //     meta: {
  //       title: 'permission',
  //       icon: 'lock',
  //       roles: ['admin'] // or you can only set roles in sub nav
  //     }
  //   }]
  // },
  {
    path: '/error-log',
    component: Layout,
    redirect: 'noredirect',
    children: [{
      path: 'log',
      component: _import('errorLog/index'),
      name: 'errorLog',
      meta: {title: 'errorLog', icon: 'bug'}
    }]
  },
  {
    path: '/error',
    component: Layout,
    redirect: 'noredirect',
    name: 'errorPages',
    meta: {
      title: 'errorPages',
      icon: '404'
    },
    children: [
      {path: '401', component: _import('errorPage/401'), name: 'page401', meta: {title: 'page401', noCache: true}},
      {path: '404', component: _import('errorPage/404'), name: 'page404', meta: {title: 'page404', noCache: true}}
    ]
  },
  {
    path: '/user-list',
    component: Layout,
    redirect: 'noredirect',
    name: 'errorPages',
    children: [
      {
        path: 'list',
        component: _import('user-list/index'),
        name: 'usetList',
        meta: {title: 'Uset List', icon: 'bug'}
      }
    ]
  },
  {
    path: '/svg-icons',
    component: Layout,
    redirect: 'noredirect',
    name: 'errorPages',
    children: [
      {
        path: 'icons',
        component: _import('svg-icons/index'),
        name: 'icons',
        meta: {title: 'icons', icon: 'bug'}
      }
    ]
  },
  {
    path: '/authorization',
    component: Layout,
    redirect: 'noredirect',
    name: 'errorPages',
    children: [
      {
        path: 'icons',
        component: _import('authorization/index'),
        name: 'authorization',
        meta: {title: 'Authorization', icon: 'bug'}
      }
    ]
  },
  {path: '*', redirect: '/404', hidden: true}
]
