import Vue from 'vue';
import Router from 'vue-router';

import mzIndex from '@/pages/home/index';

import aboutIndex from '@/pages/about/index';
import aboutContent from '@/pages/about/about';
import aboutGroupMenber from '@/pages/about/groupMenber';
import aboutCulture from '@/pages/about/culture';
import aboutDevelopHistory from '@/pages/about/developHistory';
import aboutCooperation from '@/pages/about/cooperation';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/index',
      name: 'index',
      component: mzIndex,
      meta: {
        title: '首页'
      }
    }, {
      path: '/about',
      component: aboutIndex,
      children: [
        {
          path: 'about',
          name: 'mzAbout',
          component: aboutContent,
          meta: {
            title: '集团简介'
          }
        }, {
          path: 'groupMenber',
          name: 'groupMenber',
          component: aboutGroupMenber,
          meta: {
            title: '集团成员'
          }
        }, {
          path: 'culture',
          name: 'culture',
          component: aboutCulture,
          meta: {
            title: '企业文化'
          }
        }, {
          path: 'developHistory',
          name: 'developHistory',
          component: aboutDevelopHistory,
          meta: {
            title: '发展历程'
          }
        }, {
          path: 'cooperation',
          name: 'cooperation',
          component: aboutCooperation,
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
