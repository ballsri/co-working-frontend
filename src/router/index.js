import { createRouter, createWebHistory } from 'vue-router'
import LoginVue from '../views/LoginView.vue'
import RegisterVue from '../views/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginVue
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterVue
    },
    {
      path: '/co-working',
      name: 'co-working',
      component: () => import('../views/CoWorkingView.vue')
    },
    {
      path: '/co-working/:id',
      name: 'room-list',
      component: () => import('../views/RoomListView.vue')
    }
  ]
})

export default router
