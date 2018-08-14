<template>
  <div class="news">
    <div class="title">
      <p>企业动态</p>
      <hr>
    </div>
    <div class="news-content">
      <div class="news-swiper">
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide v-for="(slide,index) in swiperSlides" :key="index">
            <a href="#">
              <img :src="'static/images/index/news_swiper'+slide.imgNum+'.png'" alt="">
              <div class="swiper-title">{{slide.title}}</div>
            </a>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
          <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
        </swiper>
      </div>
      <div class="new-list"></div>
    </div>
  </div>
</template>

<script>
import './../../../assets/style/news.scss';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
  name: 'News',
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
        // 滑动速度
        speed: 800,
        effect: 'coverflow',
        // 滑动方向
        // direction: 'horizontal',
        // 小手掌抓取滑动
        grabCursor: true,
        // 分页器设置
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          bulletClass: 'my-bullet',
          bulletActiveClass: 'my-bullet-active'
        }
      },
      swiperSlides: [
        {imgNum: 1, imgUrl: '#', title: '设计名仕到访高时石材参观交流'},
        {imgNum: 2, imgUrl: '#', title: '荣获2013年度“中国石材行业十强企业'},
        {imgNum: 3, imgUrl: '#', title: '新浪家居专访集团董事长高忠麟先生'}
      ]
    };
  }
};
</script>
