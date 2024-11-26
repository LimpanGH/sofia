import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/flygfyrens_handelspark',
      name: 'flygfyrens_handelspark',
      component: () => import('../views/FlygfyrensHandelspark.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },

    {
      path: '/bernard_rudofsky',
      name: 'bernard_rudofsky',
      component: () => import('../views/BernardRudofsky.vue'),
      props: { message: 'Hello from the Router!' }
    },
    {
      path: '/energihamnen',
      name: 'energihamnen',
      component: () => import('../views/EnergiHamnen.vue'),
    },
    {
      path: '/habiteum',
      name: 'habiteum',
      component: () => import('../views/HabiteumView.vue'),
    },
    {
      path: '/lokalanpassningsProjekt',
      name: 'lokalanpassningsProjekt',
      component: () => import('../views/LokalanpassningsProjekt.vue'),
    },
    {
      path: '/ostra_sala_backe_etapp_3a',
      name: 'ostra_sala_backe_etapp_3a',
      component: () => import('../views/OstraSalaBackeEtapp3a.vue'),
    },
    {
      path: '/stallet_sofiero',
      name: 'stallet_sofiero',
      component: () => import('../views/StalletSofiero.vue'),
    },
    {
      path: '/the_little_helpers',
      name: 'the_little_helpers',
      component: () => import('../views/TheLittleHelpers.vue'),
    },
    {
      path: '/the_wandering_synagogue',
      name: 'the_wandering_synagogue',
      component: () => import('../views/TheWanderingSynagogue.vue'),
    },
  ],
})

export default router
