import Vue from 'vue';
import Router from 'vue-router';
import mzIndex from '@/pages/home/index';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

Vue.use(Router);
Vue.use(VueAwesomeSwiper);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mzIndex',
      component: mzIndex
    }
  ]
});
