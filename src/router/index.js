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
      path: '/index',
      name: 'mzIndex',
      component: resolve => require(['@/pages/home/index'], resolve),
      meta: {
        title: '首页'
      }
    }, {
      path: '/about/',
      children: [
        {
          path: 'about',
          name: 'mzAbout',
          component: resolve => require(['@/pages/about/about'], resolve),
          meta: {
            title: '集团简介'
          }
        }, {
          path: 'groupMenber',
          name: 'groupMenber',
          component: resolve => require(['@/pages/about/groupMenber'], resolve),
          meta: {
            title: '集团成员'
          }
        }, {
          path: 'culture',
          name: 'culture',
          component: resolve => require(['@/pages/about/culture'], resolve),
          meta: {
            title: '企业文化'
          }
        }, {
          path: 'developHistory',
          name: 'developHistory',
          component: resolve => require(['@/pages/about/developHistory'], resolve),
          meta: {
            title: '发展历程'
          }
        }, {
          path: 'cooperation',
          name: 'cooperation',
          component: resolve => require(['@/pages/about/cooperation'], resolve),
          meta: {
            title: '战略合作'
          }
        }
      ]
    }, {
      path: '*',
      redirect: '/index'
    }
  ]
});
