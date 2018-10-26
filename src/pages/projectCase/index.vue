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
import AboutBanner from './components/banner';
import CommonFooter from './../common/Footer';
export default {
  name: 'projectCase',
  components: {
    CommonHeader,
    CommonNav,
    AboutBanner,
    CommonFooter
  }
};
</script>
