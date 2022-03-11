import { createRouter, createWebHistory } from 'vue-router'
import Quiz from '../views/Quiz.vue'
import Accueil from '../views/Accueil.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/Quiz',
    name: 'Quiz',
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
