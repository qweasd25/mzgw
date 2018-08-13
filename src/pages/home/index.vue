<template>
  <div>
    <common-header></common-header>
    <common-nav></common-nav>
    <home-swiper></home-swiper>
    <news></news>
  </div>
</template>

<script>
import CommonHeader from './../common/Header';
import CommonNav from './../common/Nav';
import HomeSwiper from './component/swiper';
import News from './component/news';
export default {
  name: 'mzIndex',
  components: {
    CommonHeader,
    CommonNav,
    HomeSwiper,
    News
  }
};
</script>

<style lang="scss">

</style>
