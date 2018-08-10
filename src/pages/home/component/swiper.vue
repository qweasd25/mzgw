<template>
  <div id="banner">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="slide in swiperSlides" :key="slide.id">
        <img :src="slide.imgUrl" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import banner from './../../../assets/images/index/banner.png';
import bannerTwo from './../../../assets/images/index/banner02.png';
import bannerThree from './../../../assets/images/index/banner03.png';

export default {
  name: 'HomeSwiper',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        notNextTick: true,
        // 循环
        loop: true,
        // 设定初始化时slide的索引
        initialSlide: 0,
        // 自动播放
        // autoplay: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        },
        // 设置轮播
        effect: 'flip',
        // 滑动速度
        speed: 800,
        // 滑动方向
        // direction: 'horizontal',
        // 小手掌抓取滑动
        // grabCursor : true,
        // 滑动之后回调函数
        on: {
          slideChangeTransitionEnd: function () {
          // console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
          }
        },
        // 左右点击
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        // 分页器设置
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      swiperSlides: [
        {imgUrl: banner},
        {imgUrl: bannerTwo},
        {imgUrl: bannerThree}
      ]
    };
  }
};
</script>

<style lang="scss">
  @import 'swiper/dist/css/swiper.css';
  #banner{
    width: 100%;
    height: 500px;
    .swiper-slide{
      width: 100%;
      height: 500px;
      // background-repeat: no-repeat;
      // background-size: 1920px 500px;
      // background-position: center center;
      img {
        width: 1920px;
        height: 500px;
      }
    }
    .swiper-button-prev{
      width: 30px;
      height: 66px;
      margin-left: 60px;
    }
    .swiper-button-next{
      width: 30px;
      height: 66px;
      margin-right: 60px;
    }
    .swiper-pagination-bullet {
      width: 15px;
      height: 15px;
    }
  }
</style>
