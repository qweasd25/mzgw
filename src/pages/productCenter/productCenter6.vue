<template>
  <div class="main">
    <left-nav></left-nav>
    <div class="right-content">
      <div class="top-adress">
        <span>您现在的位置: </span>
        <router-link to="/index">首页</router-link> >
        <router-link to="/productCenter/productCenterMain">产品中心</router-link> >
        <router-link to="/productCenter/productCenter6">壁 炉</router-link>
      </div>
      <div class="right-title">壁 炉</div>
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
              <img :src="'./../../../static/images/productCenter/product'+item.imgUrl+'.png'" alt="">
              <p>名称： <span class="productName">{{item.productName}}</span></p>
              <p>规格： <span class="productRange">{{item.specification}}</span></p>
            </router-link>
          </li>
        </ul>
        <ul class="productItem" v-else-if="show === 'b'">
          <li v-for="item of newListB" :key="item.id">
            <router-link :to="{path:'/productCenter/productDetail',query:{id: item.id}}">
              <img :src="'./../../../static/images/productCenter/product'+item.imgUrl+'.png'" alt="">
              <p>名称： <span class="productName">{{item.productName}}</span></p>
              <p>规格： <span class="productRange">{{item.specification}}</span></p>
            </router-link>
          </li>
        </ul>
        <ul class="productItem" v-else-if="show === 'c'">
          <li v-for="item of newListC" :key="item.id">
            <router-link :to="{path:'/productCenter/productDetail',query:{id: item.id}}">
              <img :src="'./../../../static/images/productCenter/product'+item.imgUrl+'.png'" alt="">
              <p>名称： <span class="productName">{{item.productName}}</span></p>
              <p>规格： <span class="productRange">{{item.specification}}</span></p>
            </router-link>
          </li>
        </ul>
        <ul class="productItem" v-else-if="show === 'd'">
          <li v-for="item of newListD" :key="item.id">
            <router-link :to="{path:'/productCenter/productDetail',query:{id: item.id}}">
              <img :src="'./../../../static/images/productCenter/product'+item.imgUrl+'.png'" alt="">
              <p>名称： <span class="productName">{{item.productName}}</span></p>
              <p>规格： <span class="productRange">{{item.specification}}</span></p>
            </router-link>
          </li>
        </ul>
        <ul class="productItem" v-else>
          <li v-for="item of newListE" :key="item.id">
            <router-link :to="{path:'/productCenter/productDetail',query:{id: item.id}}">
              <img :src="'./../../../static/images/productCenter/product'+item.imgUrl+'.png'" alt="">
              <p>名称： <span class="productName">{{item.productName}}</span></p>
              <p>规格： <span class="productRange">{{item.specification}}</span></p>
            </router-link>
          </li>
        </ul>
        <common-paging :all="count" @change="handleChange"></common-paging>
      </div>
    </div>
  </div>
</template>

<script>
import './../../assets/style/productCenter1.scss';
import LeftNav from './components/leftNav';
import CommonPaging from './../common/paging';
export default {
  name: 'productCenter6',
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
          belongTo: '波打系列',
          number: 'BD20',
          specification: '1200*100*18 1200*150*18 1200*200*18'
        }, {
          id: '002',
          imgUrl: '2',
          productName: 'BS01',
          belongTo: '喷砂板系列',
          number: 'BS01',
          specification: '600*600*18 800*800*18'
        }, {
          id: '003',
          imgUrl: '3',
          productName: 'BL01',
          belongTo: '镂空板系列',
          number: 'BL01',
          specification: '1500*900*18'
        }, {
          id: '004',
          imgUrl: '4',
          productName: '沉香',
          belongTo: '板材',
          number: 'S99',
          specification: '600x98x14 600x148x14 800x98x14 800x130x14 800x198x14 800x265x14 1200x148x14 1200x198x14'
        }, {
          id: '005',
          imgUrl: '5',
          productName: '翅木',
          belongTo: '板材',
          number: '996',
          specification: '600x98x14 600x148x14 800x98x14 800x130x14 800x198x14 800x265x14 1200x148x14 1200x198x14'
        }, {
          id: '006',
          imgUrl: '1',
          productName: 'BD20',
          belongTo: '波打系列',
          number: 'BD20',
          specification: '1200*100*18 1200*150*18 1200*200*18'
        }, {
          id: '007',
          imgUrl: '2',
          productName: 'BS01',
          belongTo: '喷砂板系列',
          number: 'BS01',
          specification: '600*600*18 800*800*18'
        }, {
          id: '008',
          imgUrl: '3',
          productName: 'BL01',
          belongTo: '镂空板系列',
          number: 'BL01',
          specification: '1500*900*18'
        }, {
          id: '009',
          imgUrl: '4',
          productName: '沉香',
          belongTo: '板材',
          number: 'S99',
          specification: '600x98x14 600x148x14 800x98x14 800x130x14 800x198x14 800x265x14 1200x148x14 1200x198x14'
        }, {
          id: '010',
          imgUrl: '5',
          productName: '翅木',
          belongTo: '板材',
          number: '996',
          specification: '600x98x14 600x148x14 800x98x14 800x130x14 800x198x14 800x265x14 1200x148x14 1200x198x14'
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
    this.count = Math.ceil(this.productItem.length / 8); // 总页数
    this.newList = this.productItem.slice(0, 8);
    this.newListB = this.productItemB.slice(0, 8);
    this.newListC = this.productItemC.slice(0, 8);
    this.newListD = this.productItemD.slice(0, 8);
    this.newListE = this.productItemE.slice(0, 8);
  },
  computed: {
    productItemB: function () {
      return this.productItem.filter((item) => {
        return item.belongTo === '波打系列';
      });
    },
    productItemC: function () {
      return this.productItem.filter((item) => {
        return item.belongTo === '喷砂板系列';
      });
    },
    productItemD: function () {
      return this.productItem.filter((item) => {
        return item.belongTo === '镂空板系列';
      });
    },
    productItemE: function () {
      return this.productItem.filter((item) => {
        return item.belongTo === '板材';
      });
    }
  },
  methods: {
    changeShowA: function () {
      this.show = 'a';
      this.count = Math.ceil(this.productItem.length / 8); // 总页数
    },
    changeShowB: function () {
      this.show = 'b';
      this.count = Math.ceil(this.productItemB.length / 8); // 总页数
    },
    changeShowC: function () {
      this.show = 'c';
      this.count = Math.ceil(this.productItemC.length / 8); // 总页数
    },
    changeShowD: function () {
      this.show = 'd';
      this.count = Math.ceil(this.productItemD.length / 8); // 总页数
    },
    changeShowE: function () {
      this.show = 'e';
      this.count = Math.ceil(this.productItemE.length / 8); // 总页数
    },
    handleChange: function (step) {
      console.log(step);
      let start = (step - 1) * 8;
      let end = step * 8;
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
        this.newListD = this.productItemD.slice(start, end);
        console.log(this.newList);
      } else {
        this.newListE = this.productItemE.slice(start, end);
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
