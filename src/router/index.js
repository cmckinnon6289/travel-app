import { createRouter, createWebHistory } from "vue-router"
import Home from "@/views/HomeView.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/destination/:id/:slug",
    name: "destination.show",
    component: () => import('@/views/DestinationPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
