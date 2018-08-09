import Vue from 'vue';
import Router from 'vue-router';
import mzIndex from '@/pages/home/index';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mzIndex',
      component: mzIndex
    }
  ]
});
