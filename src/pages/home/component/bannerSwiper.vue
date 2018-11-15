<template>
  <div id="banner">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(slide,index) in swiperSlides" :key="index">
        <img :src="'static/images/index/banner'+slide+'.png'" alt="">
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
          delay: 3000
          // 当切换到最后一个slide时停止自动切换
          // stopOnLastSlide: false,
          // // 如果设置为true，当切换到最后一个slide时停止自动切换
          // disableOnInteraction: true
        },
        // 设置轮播
        effect: 'fade',
        // 滑动速度
        speed: 800,
        // 滑动方向
        // direction: 'horizontal',
        // 小手掌抓取滑动
        // grabCursor: true,
        // 滑动之后回调函数
        // on: {
        //   slideChangeTransitionEnd: function () {
        //   // console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
        //   }
        // },
        // 左右点击
        navigation: {
          nextEl: '.swiper-button-next',
          revEl: '.swiper-button-prev',
          disabledClass: 'my-button-disabled'
        },
        // 分页器设置
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          bulletClass: 'banner-bullet',
          bulletActiveClass: 'banner-bullet-active'
        }
      },
      swiperSlides: [1, 2, 3]
    };
  }
};
</script>

<style lang="scss">
  #banner{
    width: 100%;
    height: 500px;
    .swiper-container{
      z-index: 4;
    }
    .swiper-slide{
      width: 100%;
      height: 500px;
      img {
        width: 100%;
        min-width: 1920px;
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
    .banner-bullet {
      display: inline-block;
      width: 16px;
      height: 16px;
      background: url('~/static/images/index/bullet_big_white.png') no-repeat center center;
      background-size: 16px 16px;
      margin-left: 10px;
    }
    .banner-bullet-active {
      background: url('~/static/images/index/bullet_big_grey.png') no-repeat center center;
    }
  }
</style>
