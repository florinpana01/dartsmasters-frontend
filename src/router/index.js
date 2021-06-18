import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import '../assets/css/tailwind.css'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/connectivity',
    name: 'Connectivity',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Connectivity.vue')
  },
  {
    path: '/admin/postmanager',
    name: 'AdminPostManager',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AdminPostManager.vue')
  },
  {
    path: '/admin/postcreator',
    name: 'CreatePost',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CreatePost.vue')
  },
  {
    path: '/user/userprofile',
    name: 'UserProfile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/UserProfile.vue')
  },
  {
    path: '/rules',
    name: 'Rules',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Rules.vue')
  },
  {
    path: "/posts",
    name: "posts",
    component: () => import("../components/PostsList.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
