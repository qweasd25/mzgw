<template>
  <div>
    <common-header></common-header>
    <common-nav></common-nav>
    <about-banner></about-banner>
    <div class="main">
      <left-nav></left-nav>
      <div class="right-content">
        <div class="top-adress">
          <span>您现在的位置: </span>
          <router-link to="">首页</router-link> >
          <router-link to="">关于美中</router-link> >
          <router-link to="">集团成员</router-link>
          <router-view></router-view>
        </div>
        <div class="right-title">企业文化</div>
        <div class="right-main">内容建设中 ...</div>
      </div>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
import './../../assets/style/aboutCommon.scss';
import CommonHeader from './../common/Header';
import CommonNav from './../common/Nav';
import AboutBanner from './component/banner';
import LeftNav from './component/leftNav';
import CommonFooter from './../common/Footer';
export default {
  name: 'culture',
  components: {
    CommonHeader,
    CommonNav,
    AboutBanner,
    LeftNav,
    CommonFooter
  }
};
</script>

<style lang="scss" scoped>
  .right-main {
    font-size: 22px;
    color: #666666;
  }
</style>
