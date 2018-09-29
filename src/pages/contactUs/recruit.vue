<template>
  <div class="main">
    <left-nav></left-nav>
    <div class="right-content">
      <div class="top-adress">
        <span>您现在的位置: </span>
        <router-link to="/index">首页</router-link> >
        <router-link to="/contactUs">联系我们</router-link> >
        <router-link to="/contactUs/recruit">人才招聘</router-link>
      </div>
      <div class="right-title">人才招聘</div>
      <div class="right-main">
        <ul>
          <li>
            <div class="recruitTittle">
              <span>品牌营销</span>
              <span></span>
            </div>
            <div class="recruitContent">
              <p>招聘数量：<span>2名</span></p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import LeftNav from './components/leftNav';
import CommonPaging from './../common/paging';
import './../../assets/style/texture.scss';
export default {
  name: 'recruit',
  components: {
    LeftNav,
    CommonPaging
  },
  data () {
    return {
    };
  }
};
</script>

<style lang="scss" scoped>
  .right-main {
    font-size: 22px;
    color: #666666;
  }
</style>
