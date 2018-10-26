<template>
  <div class="bgColor">
    <div class="main">
      <left-nav></left-nav>
      <div class="right-content">
        <div class="top-adress">
          <span>您现在的位置: </span>
          <router-link to="/index">首页</router-link> >
          <router-link to="/contactUs/globalWebsite">联系我们</router-link> >
          <router-link to="/contactUs/platform">采购平台</router-link>
        </div>
        <div class="right-title">采购平台</div>
        <div class="right-main">
          <p>售后服务： 0592-722222222</p>
          <p>投诉处理： 0592-722222222</p>
          <p>邮箱： XX@XX.com</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftNav from './components/leftNav';
import CommonPaging from './../common/paging';
export default {
  name: 'platform',
  components: {
    LeftNav,
    CommonPaging
  }
};
</script>

<style lang="scss" scoped>
  .right-main {
    p {
      font-size: 20px;
      line-height: 36px;
      color: #666;
    }
  }
</style>
