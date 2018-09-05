<template>
  <ul class="left-nav">
    <li>
      <router-link to="/consultCenter/active">企业动态</router-link>
    </li>
    <li>
      <router-link to="/consultCenter/consult">行业资讯</router-link>
    </li>
    <li>
      <router-link to="/consultCenter/elegant">美中风采</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'LeftNav'
};
</script>

<style lang="scss">
  .left-nav {
    width: 200px;
    height: 284px;
    margin-top: 64px;
    li {
      width: 200px;
      height: 46px;
      background-color: #7c97ff;
      &:first-child {
        padding-top: 20px;
      }
      &:last-child {
        padding-bottom: 20px;
      }
      a {
        display: block;
        width: 200px;
        height: 46px;
        color: #ffffff;
        font-size: 16px;
        line-height: 46px;
        text-align: center;
        &:hover {
          background-color: #718cf1;
        }
      }
    }
  }
</style>
