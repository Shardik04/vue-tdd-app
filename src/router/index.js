import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'UserView',
      component: () => import('@/views/UserView')
    },
    {
      path: '/slotDemo',
      name: 'SlotDemo',
      component: () => import('@/views/SlotDemo')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

export default router
