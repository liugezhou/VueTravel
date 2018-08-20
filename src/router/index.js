import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Home',
      component: Home
    }
  ]
})
