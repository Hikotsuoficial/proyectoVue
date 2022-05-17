import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import index from '../views/HomeView.vue'
import UserRegister from '@/views/Registrer/UserRegister.vue'
import Us from '@/views/Contact/ProfilesContact.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: index
  },
  {
    path: '/profiles',
    name: 'profiles',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProfilePage/ProfileSection.vue')
  },
  {
    path: '/us',
    name: 'us',
    component: Us
  },
  {
    path: '/contact',
    name: 'contact',
    component: index
  },
  {
    path: '/register',
    name: 'register',
    component: UserRegister,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
