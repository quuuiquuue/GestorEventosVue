import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ConcertDetails from '../views/ConcertDetailView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/concerts/:id',
      name: 'ConcertDetails',
      component: ConcertDetails
    }
    
  ]
})

export default router
