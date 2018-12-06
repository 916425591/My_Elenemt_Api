import Vue from 'vue'
import Router from 'vue-router'
const nodeEnvUrl = require('./'+process.env.NODE_ENV)//process获取的是当前运行环境，仅配置了dev和production
Vue.use(Router)

/*layout 先这样吧*/
import  Layout from  '@/views/layout/Layout'


/*基础配置*/
export  const routersMap = [
  {path:'/login',component:nodeEnvUrl('login/index'),hidden:true},
  {path:'/',component:nodeEnvUrl('layout/Layout')}
]
/*异步url配置*/
export default new Router({
  routes: routersMap
})
