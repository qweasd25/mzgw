<template>
  <div class="main">
    <left-nav></left-nav>
    <div class="right-content">
      <div class="top-adress">
        <span>您现在的位置: </span>
        <router-link to="/index">首页</router-link> >
        <router-link to="/mineResources/inland">矿山资源</router-link> >
        <router-link to="/mineResources/inland">国内矿山</router-link>
      </div>
      <div class="right-title">矿山资源</div>
      <div class="right-main inland">
        <div class="map left">
          <router-link class="hebei" :to="{path:'/mineResources/mineDetail',query:{id: 1}}"></router-link>
          <router-link class="shandong" :to="{path:'/mineResources/mineDetail',query:{id: 2}}"></router-link>
          <router-link class="sichuan" :to="{path:'/mineResources/mineDetail',query:{id: 3}}"></router-link>
        </div>
        <ul class="img right">
          <li>
            <router-link :to="{path:'/mineResources/mineDetail',query:{id: 1}}">
              <img src="./../../../static/images/mineResources/shandong1.png">
              <p>山东地矿</p>
            </router-link>
          </li>
          <li>
            <router-link :to="{path:'/mineResources/mineDetail',query:{id: 2}}">
              <img src="./../../../static/images/mineResources/hebei1.png">
              <p>河北地矿</p>
            </router-link>
          </li>
          <li>
            <router-link :to="{path:'/mineResources/mineDetail',query:{id: 3}}">
              <img src="./../../../static/images/mineResources/sichuan1.png">
              <p>四川地矿</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import './../../assets/style/inland.scss';
import LeftNav from './components/leftNav';
export default {
  name: 'elegant',
  components: {
    LeftNav
  }
};
</script>
