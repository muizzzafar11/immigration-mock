// import VueRouter from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router'
import home_page from './components/Home.vue';
import services_page from './components/Services.vue';

const routes = [
  { path: '/', component: home_page },
  { path: '/services', component: services_page },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;
