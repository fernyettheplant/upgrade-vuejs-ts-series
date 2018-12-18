import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home.vue'
import Store from '../views/Store.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/store',
      component: Store
    }
  ]
})
