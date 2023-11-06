import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
// import store from './store';

const privateRoute: RouteRecordRaw['beforeEnter'] = function(to, from, next) {
  if (true) {
    next({ name: 'login' });
  } else {
    next();
  }
};

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/tabs',
    component: () => import('@/views/tabs/TabsPage.vue'),
    beforeEnter: privateRoute,
    children: [
      {
        path: 'inicio',
        name: 'inicio',
        component: () => import('@/views/tabs/Tab1Page.vue'),
        beforeEnter: privateRoute
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/tabs/Tab2Page.vue'),
        beforeEnter: privateRoute
      }
    ]
  },
  { path: '/', 
    redirect: 'login', }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;