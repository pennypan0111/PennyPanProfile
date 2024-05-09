import { createRouter, createWebHistory } from 'vue-router'
import ProfileHome from '../views/ProfileHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ProfileHome',
      component: ProfileHome
    }
  ]
})

export default router
