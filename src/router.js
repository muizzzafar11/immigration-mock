// import VueRouter from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router'
import home_page from './components/Home.vue';
import services_page from './components/Services.vue';
import contact_us_page from './components/ContactUs.vue'
import faq_page from './components/FAQ.vue'
import free_assessment_page from './components/FreeAssessment.vue'

const routes = [
  { path: '/', component: home_page },
  { path: '/services', component: services_page },
  { path: '/free-assessment', component: free_assessment_page },
  { path: '/contact-us', component: contact_us_page },
  { path: '/faq', component: faq_page },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;
