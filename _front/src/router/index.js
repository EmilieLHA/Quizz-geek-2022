import { createRouter, createWebHistory } from 'vue-router'
import Quiz from '../views/Quiz.vue'
import ThemeSelection from '../views/ThemeSelection.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'ThemeSelection',
    component: ThemeSelection
  },
  {
    path: '/Quiz/:theme_id',
    name: 'Quiz',
    props: true,
    component: Quiz
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
