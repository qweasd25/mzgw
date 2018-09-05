<template>
  <div class="main">
    <left-nav></left-nav>
    <div class="right-content">
      <div class="top-adress">
        <span>您现在的位置: </span>
        <router-link to="/index">首页</router-link> >
        <router-link to="/consultCenter/active">资讯中心</router-link> >
        <router-link to="/consultCenter/consult">行业资讯</router-link>
      </div>
      <div class="right-title">行业资讯</div>
      <div class="right-main">内容建设中 ...</div>
    </div>
  </div>
</template>

<script>
import LeftNav from './components/leftNav';
export default {
  name: 'consult',
  components: {
    LeftNav
  }
};
</script>

<style lang="scss" scoped>
  .right-main {
    font-size: 22px;
    color: #666666;
  }
</style>
