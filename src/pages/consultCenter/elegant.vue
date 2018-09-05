<template>
  <div class="main">
    <left-nav></left-nav>
    <div class="right-content">
      <div class="top-adress">
        <span>您现在的位置: </span>
        <router-link to="/index">首页</router-link> >
        <router-link to="/consultCenter/active">资讯中心</router-link> >
        <router-link to="/consultCenter/elegant">美中风采</router-link>
      </div>
      <div class="right-title">美中风采</div>
      <div class="right-main">内容建设中 ...</div>
    </div>
  </div>
</template>

<script>
import LeftNav from './components/leftNav';
export default {
  name: 'elegant',
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
