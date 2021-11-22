import { createRouter, createWebHistory } from 'vue-router';
import Main from '../views/Main.vue';
import About from '../views/About.vue';
import Reference from '../views/Reference.vue';
import Youtube from '../views/Youtube.vue';
import Script from '../views/Script.vue';
import Portfolio from '../views/Portfolio.vue';
import Contact from '../views/Contact.vue';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/reference',
    name: 'Reference',
    component: Reference,
  },
  {
    path: '/youtube',
    name: 'Youtube',
    component: Youtube,
  },
  {
    path: '/script',
    name: 'Script',
    component: Script,
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
