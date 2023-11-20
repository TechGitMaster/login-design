import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/Home1.vue';
import Home2 from '@/views/Home/Home2.vue';
import Home3 from '@/views/Home/Home3.vue';
import Home4 from '@/views/Home/Home4.vue';
import Home5 from '@/views/Home/Home5.vue';
import Home6 from '@/views/Home/Home6.vue';
import Home7 from '@/views/Home/Home7.vue';
import Home8 from '@/views/Home/Home8.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home7
    },
    {
      path: '/home1',
      name: 'home1',
      component: Home
    },
    {
      path: '/home2',
      name: 'home2',
      component: Home2
    },
    {
      path: '/home3',
      name: 'home3',
      component: Home3
    },
    {
      path: '/home4',
      name: 'home4',
      component: Home4
    },
    {
      path: '/home5',
      name: 'home5',
      component: Home5
    },
    {
      path: '/home6',
      name: 'home6',
      component: Home6
    },
    {
      path: '/home7',
      name: 'home7',
      component: Home7
    },
    {
      path: '/home8',
      name: 'home8',
      component: Home8
    }
  ]
})

export default router
