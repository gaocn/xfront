import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('@/views/Layout/Layout.vue')
  },
  {
    path: '/401',
    name: '401',
    component: () => import('@/views/errorPages/401.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/errorPages/404.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
