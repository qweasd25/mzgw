<template>
  <div class="main">
    <left-nav></left-nav>
    <div class="right-content">
      <div class="top-adress">
        <span>您现在的位置: </span>
        <router-link to="/index">首页</router-link> >
        <router-link to="/mineResources/inland">矿山资源</router-link>
      </div>
      <div class="right-title">
        {{this.$query.hasOwnProperty('mineName')?$query.mineName:$query.belongTo}}
      </div>
      <div class="right-main">
        <swiper :options="swiperOptionTop" ref="swiperTop" class="mineDetail gallery-top">
          <!-- slides -->
          <swiper-slide v-for="(mine,index) in lastMine" :key="index">
            <img :src="'static/images/mineResources/'+mine.imgUrl+'.png'" alt="">
            <div class="type-name">{{mine.typeName}}</div>
            <div class="type-content">{{mine.typeContent}}</div>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-button-prev swiper-button-blue" slot="button-prev"></div>
          <div class="swiper-button-next swiper-button-blue" slot="button-next"></div>
          <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
        </swiper>
        <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
          <swiper-slide v-for="(mine,index) in lastMine" :key="index">
            <img :src="'static/images/mineResources/'+mine.imgUrl+'.png'" alt="">
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import LeftNav from './components/leftNav';
import CommonPaging from './../common/paging';
import './../../assets/style/mineDetail.scss';
export default {
  name: 'mineDetail',
  components: {
    LeftNav,
    CommonPaging,
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOptionTop: {
        notNextTick: true,
        // 循环
        // loop: true,
        // 设定初始化时slide的索引
        initialSlide: 0,
        // 自动播放
        // autoplay: true,
        // 设置轮播
        effect: 'flip',
        grabCursor: true,
        // 滑动速度
        speed: 800,
        // 左右点击
        navigation: {
          nextEl: '.swiper-button-next',
          revEl: '.swiper-button-prev',
          disabledClass: 'my-button-disabled'
        }
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
      },
      swiperSlides: [1, 2, 3],
      mineList: [
        {
          id: '1',
          imgUrl: '11',
          mineName: '四川矿山',
          belongTo: 'Asian',
          typeName: '花岗石--太平洋蓝',
          typeImgUrl: '',
          typeContent: '四川米易太平洋蓝矿山， 荒料年产量3万立方米，采用全流程冷工艺机械化开采。'
        }, {
          id: '2',
          imgUrl: '12',
          mineName: '四川矿山',
          belongTo: 'Asian',
          typeName: '花岗石--太平洋蓝矿',
          typeImgUrl: '',
          typeContent: '四川米易太平洋蓝矿山， 荒料年产量3万立方米，采用全流程冷工艺机械化开采。'
        }, {
          id: '3',
          imgUrl: '13',
          mineName: '四川矿山',
          belongTo: 'Asian',
          typeName: '花岗岩--冰花兰矿',
          typeImgUrl: '',
          typeContent: '四川米易冰花兰矿山，采用全流程冷工艺机械化开采。'
        }, {
          id: '4',
          imgUrl: '11',
          mineName: '河北矿山',
          belongTo: 'Asian',
          typeName: '花岗石--沙漠绿洲矿',
          typeImgUrl: '',
          typeContent: '河北承德沙漠绿洲矿山，荒料年产量3万立方米，采用全流程冷工艺机械化开采。'
        }, {
          id: '5',
          imgUrl: '12',
          mineName: '河北矿山',
          belongTo: 'Asian',
          typeName: '花岗石--香槟金麻矿',
          typeImgUrl: '',
          typeContent: '河北承德香槟金麻矿山，荒料年产量4万立方米，采用全流程冷工艺机械化开采。'
        }, {
          id: '6',
          imgUrl: '13',
          mineName: '河北矿山',
          belongTo: 'Asian',
          typeName: '花岗岩--蓝豹矿',
          typeImgUrl: '',
          typeContent: '河北承德蓝豹矿山，荒料年产量3万立方米，采用全流程冷工艺机械化开采。'
        }, {
          id: '7',
          imgUrl: '11',
          mineName: '山东矿山',
          belongTo: 'Asian',
          typeName: '花岗石--石岛红8号矿',
          typeImgUrl: '',
          typeContent: '山东荣成石岛红8号矿山，矿区面积13.3公顷，保有储量约900万立方米，荒料年产量10万立方米，采用全流程冷工艺机械化开采。'
        }, {
          id: '8',
          imgUrl: '12',
          mineName: '山东矿山',
          belongTo: 'Asian',
          typeName: '花岗石--紫晶钻矿',
          typeImgUrl: '',
          typeContent: '山东荣成紫晶钻矿山，矿区面积10公顷，荒料年产量6万立方米，采用全流程冷工艺机械化开采。'
        }, {
          id: '9',
          imgUrl: '13',
          mineName: '挪威',
          belongTo: 'Europe',
          typeName: '花岗岩--挪威蓝麻矿',
          typeImgUrl: '',
          typeContent: '挪威蓝麻矿山，荒料年产量0.5万立方米。'
        }, {
          id: '10',
          imgUrl: '1',
          mineName: '挪威',
          belongTo: 'Europe',
          typeName: '花岗岩--挪威蓝麻矿',
          typeImgUrl: '',
          typeContent: '挪威蓝麻矿山，荒料年产量0.5万立方米。'
        }, {
          id: '11',
          imgUrl: '1',
          mineName: '挪威',
          belongTo: 'Europe',
          typeName: '花岗岩--挪威蓝麻矿',
          typeImgUrl: '',
          typeContent: '挪威蓝麻矿山，荒料年产量0.5万立方米。'
        }, {
          id: '12',
          imgUrl: '1',
          mineName: '美国',
          belongTo: 'NorthAmerica',
          typeName: '花岗岩--美国太阳白麻矿',
          typeImgUrl: '',
          typeContent: '美国太阳白麻矿山，位于美国北卡罗纳州，荒料年产量0.5万立方米。'
        }, {
          id: '13',
          imgUrl: '1',
          mineName: '美国',
          belongTo: 'NorthAmerica',
          typeName: '花岗岩--美国太阳白麻矿',
          typeImgUrl: '',
          typeContent: '美国太阳白麻矿山，位于美国北卡罗纳州，荒料年产量0.5万立方米。'
        }, {
          id: '14',
          imgUrl: '1',
          mineName: '美国',
          belongTo: 'NorthAmerica',
          typeName: '花岗岩--美国太阳白麻矿',
          typeImgUrl: '',
          typeContent: '美国太阳白麻矿山，位于美国北卡罗纳州，荒料年产量0.5万立方米。'
        }, {
          id: '15',
          imgUrl: '1',
          mineName: '纳米比亚',
          belongTo: 'Africa',
          typeName: '花岗岩--波多金麻矿',
          typeImgUrl: '',
          typeContent: '非洲纳米比亚波多金麻矿山，荒料年产量2万立方米。'
        }, {
          id: '16',
          imgUrl: '1',
          mineName: '纳米比亚',
          belongTo: 'Africa',
          typeName: '花岗岩--盘龙云海矿',
          typeImgUrl: '',
          typeContent: '非洲纳米比亚波多金麻矿山，荒料年产量2万立方米。'
        }, {
          id: '17',
          imgUrl: '1',
          mineName: '纳米比亚',
          belongTo: 'Africa',
          typeName: '花岗岩--纳米金麻矿',
          typeImgUrl: '',
          typeContent: '非洲纳米比亚纳米金麻矿山，荒料年产量4万立方米。'
        }, {
          id: '18',
          imgUrl: '1',
          mineName: '纳米比亚',
          belongTo: 'Africa',
          typeName: '花岗岩--杜那金麻矿',
          typeImgUrl: '',
          typeContent: '非洲杜那金麻矿山，荒料年产量4万立方米。'
        }, {
          id: '19',
          imgUrl: '1',
          mineName: '纳米比亚',
          belongTo: 'Africa',
          typeName: '方钠石--蓝至尊矿',
          typeImgUrl: '',
          typeContent: '非洲纳米比亚蓝至尊矿山，属方钠石，是极其稀少的名贵石材品种，荒料年产量0.2万立方米，'
        }, {
          id: '20',
          imgUrl: '1',
          mineName: '纳米比亚',
          belongTo: 'Africa',
          typeName: '大理石--冰岛白玉矿',
          typeImgUrl: '',
          typeContent: '非洲纳米比亚冰岛白玉矿山，荒料年产量2万立方米。'
        }
      ],
      lastMine: [],
      id: 0,
      $query: {}
    };
  },
  created () {
    this.$query = this.$route.query;
    this.init();
  },
  mounted () {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper;
      const swiperThumbs = this.$refs.swiperThumbs.swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },
  methods: {
    init () {
      if (this.$query.hasOwnProperty('mineName')) {
        for (let i = 0; i < this.mineList.length; i++) {
          if (this.mineList[i].mineName === this.$query.mineName) {
            this.lastMine.push(this.mineList[i]);
          }
        }
      } else if (this.$query.hasOwnProperty('belongTo')) {
        for (let i = 0; i < this.mineList.length; i++) {
          if (this.mineList[i].belongTo === this.$query.belongTo) {
            this.lastMine.push(this.mineList[i]);
          }
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  .right-main {
    font-size: 22px;
    color: #666666;
  }
</style>
