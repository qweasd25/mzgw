<template>
  <div class="home-product">
    <div class="title">
      <p>产品中心</p>
      <hr>
    </div>
    <ul class="product-list">
      <li v-for="(list,index) in productList" :key="index">
        <router-link :to="list.to">
          <div class="product-image">
            <img :src="'static/images/index/product'+list.imgUrl+'.png'">
          </div>
          <div class="product-classify">{{list.imgName}}</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import './../../../assets/style/homeProduct.scss';
export default {
  name: 'HomeProduct',
  data () {
    return {
      productList: [
        {imgUrl: '1', imgName: '实木石材', to: '/productCenter/productCenter1'},
        {imgUrl: '2', imgName: '异 形', to: '/productCenter/productCenter2'},
        {imgUrl: '3', imgName: '高强板', to: '/productCenter/productCenter3'},
        {imgUrl: '4', imgName: '马赛克', to: '/productCenter/productCenter4'},
        {imgUrl: '5', imgName: '艺术拼图', to: '/productCenter/productCenter5'},
        {imgUrl: '6', imgName: '壁炉', to: '/productCenter/productCenter6'},
        {imgUrl: '7', imgName: '帝诺', to: '/productCenter/productCenter7'},
        {imgUrl: '4', imgName: '查看更多', to: '/productCenter/productCenterMain'}
      ]
    };
  }
};
</script>
