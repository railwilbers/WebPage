import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import ReleaseDetail from './pages/ReleaseDetail.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/releases/:slug', name: 'release', component: ReleaseDetail, props: true },
  ],
  scrollBehavior(to, from, saved) {
    if (saved) return saved
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

export default router
