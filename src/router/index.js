import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/reglesSpeciales',
    name: 'reglesSpeciales',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "reglesSpeciales" */ '../views/regleSpecial.vue')
  },
  {
    path: '/roster',
    name: 'MyRoster',
    component: () => import(/* webpackChunkName: "roster" */'../views/roster.vue')
  },
  {
    path: '/:catchAll(.*)*',
    name: 'NotFound',
    // Fin de routeur
    component: () => import(/* webpackChunkName: "404" */ '../views/notFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
