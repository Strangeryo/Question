import { createRouter, createWebHashHistory } from 'vue-router'

import home from "@/views/home.vue"
import start from "@/views/start/start.vue"
import introduce from "@/views/start/introduce.vue"
import product from "@/views/start/product.vue"
import login from "@/views/start/login.vue"

import index from "@/views/index.vue"

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/start/start'   //重定向
    },
    {
      path: "/start",
      name: "welcome",
      component: home,
      children: [
        {
          path: "start",
          name: "start",
          component: start
        },
        {
          path: "login",
          name: "login",
          component: login
        },
        {
          path: "introduce",
          name: "introduce",
          component: introduce
        },
        {
          path: "product",
          name: "product",
          component: product
        }
      ]
    },
    {
      path: "/index",
      name: "index",
      component: index,
    }

  ]
})

export default router
