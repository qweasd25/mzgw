<template>
  <div>
    <common-header></common-header>
    <common-nav></common-nav>
    <banner-swiper></banner-swiper>
    <news></news>
  </div>
</template>

<script>
import CommonHeader from './../common/Header';
import CommonNav from './../common/Nav';
import BannerSwiper from './component/bannerSwiper';
import News from './component/news';
export default {
  name: 'mzIndex',
  components: {
    CommonHeader,
    CommonNav,
    BannerSwiper,
    News
  }
};
</script>

<style lang="scss">
.title {
  width: 100%;
  margin: 92px auto 60px;
  p {
    text-align: center;
    font-family: 'Microsoft YaHei Regular Bold';
    font-size: 30px;
    color: #718cf1;
  }
  hr {
    width: 80px;
    height: 5px;
    background-color: #718cf1;
    margin: 22px auto 0;
    border: none;
  }
}
</style>
