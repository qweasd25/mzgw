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
import activeDetails from '@/pages/consultCenter/activeDetails';
import consult from '@/pages/consultCenter/consult';
import elegant from '@/pages/consultCenter/elegant';

import productCenter from '@/pages/productCenter/index';
import productCenterMain from '@/pages/productCenter/productCenterMain';
import productCenter1 from '@/pages/productCenter/productCenter1';
import productCenter2 from '@/pages/productCenter/productCenter2';
import productCenter3 from '@/pages/productCenter/productCenter3';
import productCenter4 from '@/pages/productCenter/productCenter4';
import productCenter5 from '@/pages/productCenter/productCenter5';
import productCenter6 from '@/pages/productCenter/productCenter6';
import productCenter7 from '@/pages/productCenter/productCenter7';
import productDetail from '@/pages/productCenter/productDetail';

import materialsCenter from '@/pages/materialsCenter/index';
import texture from '@/pages/materialsCenter/texture';
import grain from '@/pages/materialsCenter/grain';
import range from '@/pages/materialsCenter/range';
import colourScheme from '@/pages/materialsCenter/colourScheme';
import materialsDetail from '@/pages/materialsCenter/materialsDetail';

import projectCase from '@/pages/projectCase/index';
import mzCase from '@/pages/projectCase/mzCase';
import caseMemoir from '@/pages/projectCase/caseMemoir';

import mineResources from '@/pages/mineResources/index';
import inland from '@/pages/mineResources/inland';
import foreign from '@/pages/mineResources/foreign';
import mineDetail from '@/pages/mineResources/mineDetail';

import contactUs from '@/pages/contactUs/index';
import globalWebsite from '@/pages/contactUs/globalWebsite';
import processingBase from '@/pages/contactUs/processingBase';
import platform from '@/pages/contactUs/platform';
import recruit from '@/pages/contactUs/recruit';
import directWebsite from '@/pages/contactUs/directWebsite';

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
        }, {
          path: 'activeDetails',
          name: 'activeDetails',
          component: activeDetails,
          meta: {
            title: '动态详情'
          }
        }
      ]
    }, {
      path: '/productCenter',
      component: productCenter,
      children: [
        {
          path: 'productCenterMain',
          name: 'productCenterMain',
          component: productCenterMain,
          meta: {
            title: '产品中心'
          }
        }, {
          path: 'productDetail',
          name: 'productDetail',
          component: productDetail,
          meta: {
            title: '产品详情'
          }
        }, {
          path: 'productCenter1',
          name: 'productCenter1',
          component: productCenter1,
          meta: {
            title: '石木风情'
          }
        }, {
          path: 'productCenter2',
          name: 'productCenter2',
          component: productCenter2,
          meta: {
            title: '异形'
          }
        }, {
          path: 'productCenter3',
          name: 'productCenter3',
          component: productCenter3,
          meta: {
            title: '高强板'
          }
        }, {
          path: 'productCenter4',
          name: 'productCenter4',
          component: productCenter4,
          meta: {
            title: '马赛克'
          }
        }, {
          path: 'productCenter5',
          name: 'productCenter5',
          component: productCenter5,
          meta: {
            title: '艺术拼图'
          }
        }, {
          path: 'productCenter6',
          name: 'productCenter6',
          component: productCenter6,
          meta: {
            title: '壁炉'
          }
        }, {
          path: 'productCenter7',
          name: 'productCenter7',
          component: productCenter7,
          meta: {
            title: '蒂诺'
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
        }, {
          path: 'materialsDetail',
          name: 'materialsDetail',
          component: materialsDetail,
          meta: {
            title: '材料详情'
          }
        }
      ]
    }, {
      path: '/projectCase',
      component: projectCase,
      children: [
        {
          path: 'mzCase',
          name: 'mzCase',
          component: mzCase,
          meta: {
            title: '美中案例'
          }
        }, {
          path: 'caseMemoir',
          name: 'caseMemoir',
          component: caseMemoir,
          meta: {
            title: '案例实录'
          }
        }
      ]
    }, {
      path: '/mineResources',
      component: mineResources,
      children: [
        {
          path: 'inland',
          name: 'inland',
          component: inland,
          meta: {
            title: '国内矿山'
          }
        }, {
          path: 'foreign',
          name: 'foreign',
          component: foreign,
          meta: {
            title: '国外矿山'
          }
        }, {
          path: 'mineDetail',
          name: 'mineDetail',
          component: mineDetail,
          meta: {
            title: '矿山详情'
          }
        }
      ]
    }, {
      path: '/contactUs',
      component: contactUs,
      children: [
        {
          path: 'globalWebsite',
          name: 'globalWebsite',
          component: globalWebsite,
          meta: {
            title: '全球网点'
          }
        }, {
          path: 'processingBase',
          name: 'processingBase',
          component: processingBase,
          meta: {
            title: '加工基地'
          }
        }, {
          path: 'platform',
          name: 'platform',
          component: platform,
          meta: {
            title: '采购平台'
          }
        }, {
          path: 'recruit',
          name: 'recruit',
          component: recruit,
          meta: {
            title: '人才招聘'
          }
        }, {
          path: 'directWebsite',
          name: 'directWebsite',
          component: directWebsite,
          meta: {
            title: '直营网点'
          }
        }
      ]
    }, {
      path: '*',
      redirect: '/index'
    }
  ]
});
