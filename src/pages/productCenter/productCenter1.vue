<template>
  <div class="main">
    <left-nav></left-nav>
    <div class="right-content">
      <div class="top-adress">
        <span>您现在的位置: </span>
        <router-link to="/index">首页</router-link> >
        <router-link to="/productCenter/productCenterMain">产品中心</router-link> >
        <router-link to="/productCenter/productCenter1">石木风情</router-link>
      </div>
      <div class="right-title">石木风情</div>
      <div class="right-main">
        <ul class="classification">
          <li>
            <span class="active" @click="changeShowA">全 部</span>
          </li>
          <li>
            <span @click="changeShowB">波打系列</span>
          </li>
          <li>
            <span @click="changeShowC">喷砂板系列</span>
          </li>
          <li>
            <span @click="changeShowD">镂空板系列</span>
          </li>
          <li>
            <span @click="changeShowE">板材</span>
          </li>
        </ul>
        <ul class="productItem" v-if="show === 'a'">
          <li v-for="item of newList" :key="item.id">
            <router-link :to="{path:'/productCenter/productDetail',query:{id: item.id}}">
              <img src="./../../../static/images/productCenter/product1.png" alt="">
              <p>石材名称： <span class="productName">罗马假日</span></p>
              <p>适用范围： <span class="productRange">室内地面</span></p>
            </router-link>
          </li>
        </ul>
        <ul class="productItem" v-else-if="show === 'b'">
          <li v-for="item of newListB" :key="item.id">
            <router-link :to="{path:'/productCenter/productDetail',query:{id: item.id}}">
              <img src="./../../../static/images/productCenter/product1.png" alt="">
              <p>石材名称： <span class="productName">罗马假日</span></p>
              <p>适用范围： <span class="productRange">室内地面</span></p>
            </router-link>
          </li>
        </ul>
        <ul class="productItem" v-else-if="show === 'c'">
          <li v-for="item of newListC" :key="item.id">
            <router-link :to="{path:'/productCenter/productDetail',query:{id: item.id}}">
              <img src="./../../../static/images/productCenter/product1.png" alt="">
              <p>石材名称： <span class="productName">罗马假日</span></p>
              <p>适用范围： <span class="productRange">室内地面</span></p>
            </router-link>
          </li>
        </ul>
        <ul class="productItem" v-else-if="show === 'd'">
          <li v-for="item of newListD" :key="item.id">
            <router-link :to="{path:'/productCenter/productDetail',query:{id: item.id}}">
              <img :src="'./../../../static/images/productCenter/product'+item.imgUrl+'.png'" alt="">
              <p>石材名称： <span class="productName">{{item.productName}}</span></p>
              <p>适用范围： <span class="productRange">{{item.productRange}}</span></p>
            </router-link>
          </li>
        </ul>
        <ul class="productItem" v-else>
          <li v-for="item of newListD" :key="item.id">
            <router-link :to="{path:'/productCenter/productDetail',query:{id: item.id}}">
              <img :src="'./../../../static/images/productCenter/product'+item.imgUrl+'.png'" alt="">
              <p>石材名称： <span class="productName">{{item.productName}}</span></p>
              <p>适用范围： <span class="productRange">{{item.productRange}}</span></p>
            </router-link>
          </li>
        </ul>
        <common-paging :all="count" @change="handleChange"></common-paging>
      </div>
    </div>
  </div>
</template>

<script>
import LeftNav from './components/leftNav';
import CommonPaging from './../common/paging';
export default {
  name: 'productCenter1',
  components: {
    LeftNav,
    CommonPaging
  },
  data () {
    return {
      productItem: [
        {
          id: '001',
          imgUrl: '1',
          productName: 'BD20',
          texture: 'BD20',
          specification: '1200*100*18 1200*150*18 1200*200*18'
        }
      ],
      newList: [],
      newListB: [],
      newListC: [],
      newListD: [],
      newListE: [],
      count: 0, // 总页数
      show: 'a'
    };
  },
  created () {
    this.count = Math.ceil(this.productItem.length / 12); // 总页数
    this.newList = this.productItem.slice(0, 12);
    this.newListB = this.productItemB.slice(0, 12);
    this.newListC = this.productItemC.slice(0, 12);
    this.newListD = this.productItemD.slice(0, 12);
    this.newListE = this.productItemE.slice(0, 12);
  },
  computed: {
    productItemB: function () {
      return this.productItem.filter((item) => {
        return item.texture === '花岗石';
      });
    },
    productItemC: function () {
      return this.productItem.filter((item) => {
        return item.texture === '大理石';
      });
    },
    productItemD: function () {
      return this.productItem.filter((item) => {
        return item.texture === '方钠石';
      });
    },
    productItemE: function () {
      return this.productItem.filter((item) => {
        return item.texture === '方钠石';
      });
    }
  },
  methods: {
    changeShowA: function () {
      this.show = 'a';
      this.count = Math.ceil(this.productItem.length / 12); // 总页数
    },
    changeShowB: function () {
      this.show = 'b';
      this.count = Math.ceil(this.productItemB.length / 12); // 总页数
    },
    changeShowC: function () {
      this.show = 'c';
      this.count = Math.ceil(this.productItemC.length / 12); // 总页数
    },
    changeShowD: function () {
      this.show = 'd';
      this.count = Math.ceil(this.productItemD.length / 12); // 总页数
    },
    changeShowE: function () {
      this.show = 'd';
      this.count = Math.ceil(this.productItemE.length / 12); // 总页数
    },
    handleChange: function (step) {
      console.log(step);
      let start = (step - 1) * 12;
      let end = step * 12;
      console.log(start, end);
      if (this.show === 'a') {
        this.newList = this.productItem.slice(start, end);
        console.log(this.newList);
      } else if (this.show === 'b') {
        this.newListB = this.productItemB.slice(start, end);
        console.log(this.newList);
      } else if (this.show === 'b') {
        this.newListC = this.productItemC.slice(start, end);
        console.log(this.newList);
      } else if (this.show === 'e') {
        this.newListC = this.productItemC.slice(start, end);
        console.log(this.newList);
      } else {
        this.newListD = this.productItemD.slice(start, end);
        console.log(this.newList);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  .right-main {
    font-size: 22px;
    color: #666666;
  }
</style>
