<template>
  <div>
    <common-header></common-header>
    <common-nav></common-nav>
    <about-banner></about-banner>
    <router-view></router-view>
    <common-footer></common-footer>
  </div>
</template>

<script>
import './../../assets/style/aboutCommon.scss';
import CommonHeader from './../common/Header';
import CommonNav from './../common/Nav';
import AboutBanner from './component/banner';
import CommonFooter from './../common/Footer';
export default {
  name: 'aboutIndex',
  components: {
    CommonHeader,
    CommonNav,
    AboutBanner,
    CommonFooter
  }
};
</script>
