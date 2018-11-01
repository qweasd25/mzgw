<template>
  <div class="main">
    <left-nav></left-nav>
    <div class="right-content">
      <div class="top-adress">
        <span>您现在的位置: </span>
        <router-link to="/index">首页</router-link> >
        <router-link to="/materialsCenter/texture">材料中心</router-link> >
        <router-link to="/materialsCenter/texture">材 质</router-link>
      </div>
      <div class="right-title">产品详情</div>
      <div class="right-main">
        <div class="productDatail">
          <div class="datailImg"><img :src="'./../../../static/images/productCenter/product'+lastProduct.imgUrl+'.png'" alt=""></div>
          <div class="detailContent">
            <h3>{{lastProduct.productName}}</h3>
            <p>
              <span>中文名：{{lastProduct.productName}}</span>
              <span>中文名：{{lastProduct.number}}</span>
            </p>
            <p>规格：{{lastProduct.specification}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftNav from './components/leftNav';
import CommonPaging from './../common/paging';
import './../../assets/style/productDetail.scss';
export default {
  name: 'materialsDetail',
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
      lastProduct: {},
      id: 0
    };
  },
  created () {
    this.id = this.$route.query.id;
    for (let i = 0; i < this.productItem.length; i++) {
      if (this.productItem[i].id === this.id) {
        this.lastProduct = this.productItem[i];
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
