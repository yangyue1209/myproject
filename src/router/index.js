import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login'
import home from '@/views/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/login'},
    {path:'/login',component:login},
    {path:'/home',component:home}
  ],
  // linkActiveClass:'mui-active'
})
