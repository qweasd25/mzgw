<template>
  <div class="home-product">
    <div class="title">
      <p>产品中心</p>
      <hr>
    </div>
    <ul class="product-list">
      <li v-for="(list,index) in productList" :key="index">
        <div class="product-image">
          <img :src="'static/images/index/product'+list.imgUrl+'.png'">
        </div>
        <div class="product-classify">{{list.imgName}}</div>
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
        {imgUrl: '1', imgName: '实木石材'},
        {imgUrl: '2', imgName: '异 形'},
        {imgUrl: '3', imgName: '高强板'},
        {imgUrl: '4', imgName: '马赛克'},
        {imgUrl: '5', imgName: '艺术拼图'},
        {imgUrl: '6', imgName: '壁炉'},
        {imgUrl: '7', imgName: '帝诺'},
        {imgUrl: '4', imgName: '查看更多'}
      ]
    };
  }
};
</script>
