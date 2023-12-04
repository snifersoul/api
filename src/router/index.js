import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue'
import Games from '../views/Games.vue'
import Game from '../views/Game.vue'

const routes =  [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/games/:platform',
    name: 'games',
    component: Games
  },
  {
    path: '/game/:id',
    name: 'game',
    component: Game
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
