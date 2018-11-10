<template>
  <div class="main">
    <div class="top-adress">
      <span>您现在的位置: </span>
      <router-link to="/index">首页</router-link> >
      <router-link to="/productCenter/productCenterMain">产品中心</router-link>
    </div>
    <article>
      <h3>产品中心</h3>
      <section>
        <div class="left img-content">
          <router-link to="/productCenter/productCenter1">
            <img src="./../../../static/images/productCenter/1.png" alt="石木风情">
            <span>石木风情</span>
          </router-link>
        </div>
        <div class="right content">
          <p>高时汇聚全球好石材</p>
        </div>
      </section>
      <section>
        <div class="right img-content">
          <router-link to="/productCenter/productCenter2">
            <img src="./../../../static/images/productCenter/2.png" alt="异形">
            <span>异 形</span>
          </router-link>
        </div>
        <div class="left content">
          <p>美国太阳白麻、挪威蓝麻、纳米比亚梦幻白王、冰岛白王、牛津金麻、中国石岛红、皇室珍珠……</p>
        </div>
      </section>
      <section>
        <div class="left img-content">
          <router-link to="/productCenter/productCenter3">
            <img src="./../../../static/images/productCenter/3.png" alt="高强板">
            <span>高强板</span>
          </router-link>
        </div>
        <div class="right content">
          <p>高时直接拥有和控制位于欧洲、北美洲、亚洲和非洲的50多座不同类型的优质矿山</p>
        </div>
      </section>
      <section>
        <div class="right img-content">
          <router-link to="/productCenter/productCenter4">
            <img src="./../../../static/images/productCenter/4.png" alt="马赛克">
            <span>马赛克</span>
          </router-link>
        </div>
        <div class="left content">
          <p>掌握全球石材资源最多的企业</p>
        </div>
      </section>
      <section>
        <div class="left img-content">
          <router-link to="/productCenter/productCenter5">
            <img src="./../../../static/images/productCenter/5.png" alt="艺术拼图">
            <span>艺术拼图</span>
          </router-link>
        </div>
        <div class="right content">
          <p>保证从源头上向世界各地输送顶级品质的产品</p>
        </div>
      </section>
      <section>
        <div class="right img-content">
          <router-link to="/productCenter/productCenter6">
            <img src="./../../../static/images/productCenter/6.png" alt="壁炉">
            <span>壁 炉</span>
          </router-link>
        </div>
        <div class="left content">
          <p>将每一件石材产品都打造成一个梦想、一个标志，一个杰作</p>
        </div>
      </section>
      <section>
        <div class="left img-content">
          <router-link to="/productCenter/productCenter">
            <img src="./../../../static/images/productCenter/7.png" alt="蒂诺">
            <span>蒂 诺</span>
          </router-link>
        </div>
        <div class="right content">
          <p>将自然之美与艺术之美进行完美结合，努力塑造着因您而生的极致品位</p>
        </div>
      </section>
    </article>
  </div>
</template>

<script>
import './../../assets/style/productCenterMain.scss';
export default {
  name: 'productCenterMain'
};
</script>
