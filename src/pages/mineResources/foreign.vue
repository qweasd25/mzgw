<template>
  <div class="main">
    <left-nav></left-nav>
    <div class="right-content">
      <div class="top-adress">
        <span>您现在的位置: </span>
        <router-link to="/index">首页</router-link> >
        <router-link to="/mineResources/inland">矿山资源</router-link> >
        <router-link to="/mineResources/foreign">国外矿山</router-link>
      </div>
      <div class="right-title">矿山资源</div>
      <div class="right-main foreign">
        <div class="map">
          <router-link class="NorthAmerica" :to="{path:'/mineResources/mineDetail',query:{belongTo: 'NorthAmerica'}}"></router-link>
          <router-link class="Europe" :to="{path:'/mineResources/mineDetail',query:{belongTo: 'Europe'}}"></router-link>
          <router-link class="Africa" :to="{path:'/mineResources/mineDetail',query:{belongTo: 'Africa'}}"></router-link>
          <router-link class="Asian" :to="{path:'/mineResources/mineDetail',query:{belongTo: 'Asian'}}"></router-link>
        </div>
        <ul class="img">
          <li>
            <router-link :to="{path:'/mineResources/mineDetail',query:{belongTo: 'NorthAmerica'}}">
              <img src="static/images/mineResources/1.png">
            </router-link>
          </li>
          <li>
            <router-link :to="{path:'/mineResources/mineDetail',query:{belongTo: 'Europe'}}">
              <img src="static/images/mineResources/2.png">
            </router-link>
          </li>
          <li>
            <router-link :to="{path:'/mineResources/mineDetail',query:{belongTo: 'Africa'}}">
              <img src="static/images/mineResources/3.png">
            </router-link>
          </li>
          <li>
            <router-link :to="{path:'/mineResources/mineDetail',query:{belongTo: 'Asian'}}">
              <img src="static/images/mineResources/4.png">
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import './../../assets/style/foreign.scss';
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
