import Vue from 'vue';
import VueRouter from 'vue-router';
import EpisodesView from '../views/EpisodesView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'EpisodesView',
    component: EpisodesView
  },

  {
    path: '/characters',
    name: 'CharactersView',
    component: () => import('../views/CharactersView.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
