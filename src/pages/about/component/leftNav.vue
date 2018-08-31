<template>
  <ul class="left-nav">
    <li>
      <router-link to="/about.html">集团简介</router-link>
    </li>
    <li>
      <router-link to="/about/groupMenber.html">集团成员</router-link>
    </li>
    <li>
      <router-link to="/about/culture.html">企业文化</router-link>
    </li>
    <li>
      <router-link to="/about/developHistory.html">发展历程</router-link>
    </li>
    <li>
      <router-link to="/about/cooperation.html">战略合作</router-link>
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
