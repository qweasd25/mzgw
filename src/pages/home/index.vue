<template>
  <div>
    <common-header></common-header>
    <common-nav></common-nav>
    <banner-swiper></banner-swiper>
    <news></news>
    <home-product></home-product>
    <home-product-case></home-product-case>
  </div>
</template>

<script>
import CommonHeader from './../common/Header';
import CommonNav from './../common/Nav';
import BannerSwiper from './component/bannerSwiper';
import News from './component/news';
import HomeProduct from './component/product';
import homeProductCase from './component/productCase';
export default {
  name: 'mzIndex',
  components: {
    CommonHeader,
    CommonNav,
    BannerSwiper,
    News,
    HomeProduct,
    homeProductCase
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
