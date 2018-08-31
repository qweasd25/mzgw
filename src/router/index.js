import Vue from 'vue';
import Router from 'vue-router';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

Vue.use(Router);
Vue.use(VueAwesomeSwiper);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/index.html',
      name: 'mzIndex',
      component: resolve => require(['@/pages/home/index'], resolve),
      meta: {
        title: '首页'
      }
    }, {
      path: '/about.html',
      name: 'mzAbout',
      component: resolve => require(['@/pages/about/about'], resolve),
      meta: {
        title: '集团简介'
      }
    }, {
      path: '/about/groupMenber.html',
      name: 'groupMenber',
      component: resolve => require(['@/pages/about/groupMenber'], resolve),
      meta: {
        title: '集团成员'
      }
    }, {
      path: '/about/culture.html',
      name: 'culture',
      component: resolve => require(['@/pages/about/culture'], resolve),
      meta: {
        title: '企业文化'
      }
    }, {
      path: '/about/developHistory.html',
      name: 'developHistory',
      component: resolve => require(['@/pages/about/developHistory'], resolve),
      meta: {
        title: '发展历程'
      }
    }, {
      path: '/about/cooperation.html',
      name: 'cooperation',
      component: resolve => require(['@/pages/about/cooperation'], resolve),
      meta: {
        title: '战略合作'
      }
    }, {
      path: '*',
      redirect: '/index.html'
    }
  ]
});
