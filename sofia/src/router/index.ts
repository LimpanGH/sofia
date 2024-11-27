import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/flygfyrens_handelspark',
      name: 'Flygfyrens Handelspark',
      component: () => import('../views/FlygfyrensHandelspark.vue'),
    },
    {
      path: '/about',
      name: 'About Me',
      component: () => import('../views/AboutView.vue'),
    },

    {
      path: '/bernard_rudofsky',
      name: 'Bernard Rudofsky',
      component: () => import('../views/BernardRudofsky.vue'),
      props: { message: 'Hello from the Router!' },
    },
    {
      path: '/energihamnen',
      name: 'Energihamnen',
      component: () => import('../views/EnergiHamnen.vue'),
    },
    {
      path: '/habiteum',
      name: 'Habiteum',
      component: () => import('../views/HabiteumView.vue'),
    },
    {
      path: '/lokalanpassningsProjekt',
      name: 'Lokalanpassnings-projekt',
      component: () => import('../views/LokalanpassningsProjekt.vue'),
    },
    {
      path: '/ostra_sala_backe_etapp_3a',
      name: 'Östra Sala Backe Etapp 3a',
      component: () => import('../views/OstraSalaBackeEtapp3a.vue'),
    },
    {
      path: '/stallet_sofiero',
      name: 'Stallet Sofiero',
      component: () => import('../views/StalletSofiero.vue'),
    },
    {
      path: '/the_little_helpers',
      name: 'The Little Helpers',
      component: () => import('../views/TheLittleHelpers.vue'),
    },
    {
      path: '/the_wandering_synagogue',
      name: 'The Wandering Synagogue',
      component: () => import('../views/TheWanderingSynagogue.vue'),
    },
    { path: '/contact', name: 'Contact', component: () => import('../views/ContactView.vue') },
  ],
})

export default router
