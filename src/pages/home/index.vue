<template>
  <div>
    <common-header></common-header>
    <common-nav></common-nav>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import CommonHeader from '../common/Header';
import CommonNav from '../common/Nav';
import HomeSwiper from './component/swiper';
export default {
  name: 'mzIndex',
  components: {
    CommonHeader,
    CommonNav,
    HomeSwiper
  }
};
</script>

<style lang="scss">

</style>
