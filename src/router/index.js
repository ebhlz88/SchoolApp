import { createRouter, createWebHistory } from 'vue-router'
import Table from '../components/Table.vue'
import Main from '../views/Main.vue'
import Cards from '../views/Cards.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'table',
      component: Table
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    },
    {
      path: '/card',
      name: 'card',
      component: Cards
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
