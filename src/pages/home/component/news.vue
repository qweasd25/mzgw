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
            <router-link :to="{path:'/consultCenter/activeDetails',query:{id: slide.id}}">
              <img :src="'static/images/index/news_swiper'+slide.imgNum+'.png'" alt="">
              <div class="swiper-title">{{slide.title}}</div>
            </router-link>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
          <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
        </swiper>
      </div>
      <ul>
        <li v-for="(list,index) in newsList" :key="index">
          <div class="datetime">
            <div class="date">{{list.date}}</div>
            <div class="month">{{list.month}}</div>
          </div>
          <router-link class="news-list" :to="{path:'/consultCenter/activeDetails',query:{id: list.id}}">
            <div class="news-title">{{list.title}}</div>
            <div class="news-detail">{{list.detail}}</div>
          </router-link>
        </li>
      </ul>
    </div>
    <router-link to="/consultCenter/active" class="news-more">查看更多</router-link>
  </div>
</template>

<script>
import './../../../assets/style/homeNews.scss';
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
        {id: '0001', imgNum: 1, imgUrl: '#', title: '设计名仕到访高时石材参观交流'},
        {id: '0002', imgNum: 2, imgUrl: '#', title: '荣获2013年度“中国石材行业十强企业'},
        {id: '0003', imgNum: 3, imgUrl: '#', title: '新浪家居专访集团董事长高忠麟先生'}
      ],
      newsList: [
        {id: '0001', date: '31', month: '12月', title: '设计名仕到访高时石材参观交流', detail: '石材作为基本、原始、普遍的自然元素，经历千万年沧桑历史而经久不衰，是当之无愧的建筑装饰材料之王。“识石，悟者为俊杰”——要想成为顶级的设计师，怎能不懂设计的原材料呢？...', href: '#'},
        {id: '0002', date: '31', month: '12月', title: '荣获2013年度“中国石材行业十强企业”、“中国建筑装饰材料百强企业”称号', detail: '6月10日-11日，由中国建筑装饰协会主办的首届中国建材家居产业发展大会在北京国际会议中心隆重举行。中装协、住建部、国家建材测试中心等权威机构领导与年度中国建筑材料百强企业等...', href: '#'},
        {id: '0003', date: '31', month: '12月', title: '新浪家居专访集团董事长高忠麟先生', detail: '始创于1994年的高时集团，作为石材行业的创始者和领先者，一直傲立于石材行业的顶端。集团的掌舵者——高忠麟董事长，亦是整个石材行业的灵魂人物，他带领着高时一直坚守在石材行业的第一线...', href: '#'}
      ]
    };
  }
};
</script>
