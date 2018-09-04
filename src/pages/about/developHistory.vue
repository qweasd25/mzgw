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
        <li v-for="">
          
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
  }
};
</script>

<style lang="scss" scoped>
  .right-main {
    font-size: 22px;
    color: #666666;
  }
</style>