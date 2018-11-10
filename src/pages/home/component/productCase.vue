<template>
  <div class="home-case">
    <div class="title">
      <p>工程案例</p>
      <hr>
    </div>
    <ul class="accordion">
      <li v-for="(images,index) in accordionImages" :key="index">
        <router-link to="/projectCase/mzCase">
          <img :src="'static/images/index/accordion_big'+images.imgUrl+'.png'">
          <span>{{images.imgName}}</span>
        </router-link>
      </li>
    </ul>
    <ul class="photo-wall">
      <li class="wall-cell" v-for="(images,index) in wallImages" :key="index" >
        <router-link to="/projectCase/mzCase">
          <img :src="'static/images/index/cell'+images.imgUrl+'.png'">
          <span>{{images.imgName}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import './../../../assets/style/homeProductCase.scss';
export default {
  name: 'homeProductCase',
  data () {
    return {
      accordionImages: [
        {imgUrl: '1', imgName: '北京W酒店'},
        {imgUrl: '2', imgName: '中国银行总行大厦'},
        {imgUrl: '3', imgName: '重庆凯宾斯基酒店'},
        {imgUrl: '4', imgName: '广州星河湾酒店'},
        {imgUrl: '5', imgName: '亚特兰蒂斯酒店'},
        {imgUrl: '6', imgName: '澳门威尼斯人度假村酒店'}
      ],
      wallImages: [
        {imgUrl: '1', imgName: '澳门永利酒店'},
        {imgUrl: '2', imgName: '广州歌剧院'},
        {imgUrl: '3', imgName: '三亚美高梅度酒店'},
        {imgUrl: '4', imgName: '三亚凤凰岛'},
        {imgUrl: '5', imgName: '深圳保利剧院'},
        {imgUrl: '6', imgName: '深圳星河丽思卡尔顿酒店'}
      ]
    };
  },
  methods: {
    handleMouseover: function (index) {
      console.log(index);
      console.log(this.child);
    }
  }
};
</script>
