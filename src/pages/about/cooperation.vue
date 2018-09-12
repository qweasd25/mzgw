<template>
  <div class="main">
    <left-nav></left-nav>
    <div class="right-content">
      <div class="top-adress">
        <span>您现在的位置: </span>
        <router-link to="/index">首页</router-link> >
        <router-link to="/about/about">关于美中</router-link> >
        <router-link to="/about/cooperation">战略合作</router-link>
      </div>
      <div class="right-title">战略合作</div>
      <ul class="right-main">
        <li v-for="item in cooperationList" :key="item.id">
          <a :href="item.imgUrl">
            <img :src="'./../../../static/images/about/'+item.imgNum+'.png'" alt="">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import LeftNav from './component/leftNav';
export default {
  name: 'aboutCooperation',
  components: {
    LeftNav
  },
  data () {
    return {
      cooperationList: [
        {imgNum: 1, imgUrl: '#'},
        {imgNum: 2, imgUrl: '#'},
        {imgNum: 3, imgUrl: '#'},
        {imgNum: 4, imgUrl: '#'},
        {imgNum: 5, imgUrl: '#'},
        {imgNum: 6, imgUrl: '#'},
        {imgNum: 7, imgUrl: '#'},
        {imgNum: 8, imgUrl: '#'},
        {imgNum: 9, imgUrl: '#'},
        {imgNum: 10, imgUrl: '#'},
        {imgNum: 11, imgUrl: '#'},
        {imgNum: 12, imgUrl: '#'}
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
  @import '~style/_setting.scss';
  .right-main {
    font-size: 22px;
    color: #666666;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    justify-content: space-between;
    li {
      width: 250px;
      height: 126px;
      border: 1px solid $primary;
      margin-bottom: 30px;
      &:last-child{
        margin-bottom: 100px;
      }
      a{
        display: block;
        width: 250px;
        height: 126px;
        img {
          display: block;
          width: 250px;
          height: 126px;
        }
      }
    }
  }
</style>
