import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Cards from '../views/Cards.vue'
import Students from '../views/Students.vue'
import FormContainer from '../components/FormContainer.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/card',
      name: 'card',
      component: Cards
    },
    {
      path: '/students',
      name: 'students',
      component: Students
    },
    {
      path: '/cont',
      name: 'FormContainer',
      component: FormContainer
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
