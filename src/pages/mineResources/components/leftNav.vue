<template>
  <ul class="left-nav">
    <li>
      <router-link to="/mineResources/inland">国内矿山</router-link>
    </li>
    <li>
      <router-link to="/mineResources/foreign">国外矿山</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'LeftNav'
};
</script>

<style lang="scss">
  @import '~style/_setting.scss';
  .left-nav {
    width: 200px;
    height: 284px;
    margin-top: 64px;
    li {
      width: 200px;
      height: 46px;
      background-color: $primary;
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
          background-color: $bgColor;
        }
      }
    }
  }
</style>
