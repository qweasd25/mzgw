<template>
    <div class="main">
    <left-nav></left-nav>
    <div class="right-content">
      <div class="top-adress">
        <span>您现在的位置: </span>
        <router-link to="/index">首页</router-link> >
        <router-link to="/about/about">关于美中</router-link> >
        <router-link to="/about/cooperation">发展历程</router-link>
      </div>
      <div class="right-title">发展历程</div>
      <ul class="right-main">
        <li v-for="list in developList" :key="list.id">
          <div class="develop-year">
            <span class="year">{{list.year}}</span>
            <span class="develop-round"></span>
          </div>
          <div class="develop-content">
            <div class="develop-img">
              <img :src="'./../../../static/images/consultCenter/'+list.imgUrl+'.png'">
            </div>
            <div class="develop-describe">{{list.describe}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import LeftNav from './component/leftNav';
export default {
  name: 'aboutDevelopHistory',
  components: {
    LeftNav
  },
  data () {
    return {
      developList: [
        {year: '2014年', imgUrl: '1', describe: '2014年--模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板'}, {year: '2013年', imgUrl: '2', describe: '2013年--模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模模板模板模板模板模板模板模板模板模板模板模板'}, {year: '2012年', imgUrl: '3', describe: '2012年--模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板模板'}
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
    margin-bottom: 100px;
    li {
      display: flex;
      &:last-child .develop-year{
        height: 100px;
      }
      .develop-year {
        width: 75px;
        border-right: 1px solid #cccccc;
        position: relative;
        .year {
          font-size: 16px;
          color: #7c97ff;
        }
        .develop-round {
          display: block;
          position: absolute;
          top: 10px;
          right: -7px;
          width: 10px;
          height: 10px;
          background-color: #ffffff;
          border: 2px solid $primary;
          border-radius: 50%;
        }
      }
      .develop-content {
        width: 825px;
        display: flex;
        .develop-img {
          width: 200px;
          height: 149px;
          margin: 10px 30px 30px 25px;
          img {
            width: 200px;
            height: 149px;
          }
        }
        .develop-describe {
          width: 569px;
          font-size: 14px;
          line-height: 28px;
          color: #444444;
          margin-bottom: 20px;
        }
      }
    }
  }
</style>
