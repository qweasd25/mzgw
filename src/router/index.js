import Vue from 'vue';
import Router from 'vue-router';

import mzIndex from '@/pages/home/index';

import aboutIndex from '@/pages/about/index';
import aboutContent from '@/pages/about/about';
import aboutGroupMenber from '@/pages/about/groupMenber';
import aboutCulture from '@/pages/about/culture';
import aboutDevelopHistory from '@/pages/about/developHistory';
import aboutCooperation from '@/pages/about/cooperation';

import consultCenter from '@/pages/consultCenter/index';
import active from '@/pages/consultCenter/active';
import consult from '@/pages/consultCenter/consult';
import elegant from '@/pages/consultCenter/elegant';

import materialsCenter from '@/pages/materialsCenter/index';
import texture from '@/pages/materialsCenter/texture';
import grain from '@/pages/materialsCenter/grain';
import range from '@/pages/materialsCenter/range';
import colourScheme from '@/pages/materialsCenter/colourScheme';

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
      path: '/consultCenter',
      component: consultCenter,
      children: [
        {
          path: 'active',
          name: 'active',
          component: active,
          meta: {
            title: '企业动态'
          }
        }, {
          path: 'consult',
          name: 'consult',
          component: consult,
          meta: {
            title: '行业资讯'
          }
        }, {
          path: 'elegant',
          name: 'elegant',
          component: elegant,
          meta: {
            title: '美中风采'
          }
        }
      ]
    }, {
      path: '/materialsCenter',
      component: materialsCenter,
      children: [
        {
          path: 'texture',
          name: 'texture',
          component: texture,
          meta: {
            title: '材质'
          }
        }, {
          path: 'grain',
          name: 'grain',
          component: grain,
          meta: {
            title: '纹理'
          }
        }, {
          path: 'range',
          name: 'range',
          component: range,
          meta: {
            title: '适用范围'
          }
        }, {
          path: 'colourScheme',
          name: 'colourScheme',
          component: colourScheme,
          meta: {
            title: '色系'
          }
        }
      ]
    }, {
      path: '*',
      redirect: '/index'
    }
  ]
});
