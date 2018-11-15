<template>
  <div class="main">
    <left-nav></left-nav>
    <div class="right-content">
      <div class="top-adress">
        <span>您现在的位置: </span>
        <router-link to="/index">首页</router-link> >
        <router-link to="/about/about">关于美中</router-link> >
        <router-link to="/about/about">集团简介</router-link>
      </div>
      <div class="right-title">集团简介</div>
      <div class="right-main">
        <img src="static/images/about/banner1.png">
        <div class="intro">
          <p>高时源于1994，励精图治20载，成长为全球一体化石材解决方案的最佳服务商与专业化顶级石材的最佳供应商。高时是世界知名的超大型石材综合企业，以打造具有一流文化底蕴与思想深邃的"人居环境"为追求，通过绿色环保的矿山开采技术、引领时代的产品研发团队，标准化的生产系统，先进的营销理念，完善的专卖店体系，一体化的物流与服务系统为客户提供优质产品与服务——向消费者演绎亘古以来大自然万象迭起的迷人风情，将真石之美传递至全世界。</p>
          <p>高时先后引进全球领先的生产设备1000多台（套），建成了全球先进、完整的综合性石材生产线，凭借于此，高时将每一件石材产品都打造成一个梦想、一个标志，一个杰作，将自然之美与艺术之美进行完美结合，努力塑造着因您而生的极致品位。</p>
          <p>高时成就时代经典</p>
          <p>高时足迹遍布全球70多个国家和地区——美国拉斯维加斯永利酒店、德国汉堡机场、澳大利亚ASX金融中心、迪拜亚特兰蒂斯酒店、乌兹别克斯坦总统府、北京保利大厦、香港时代广场……，只要是尊贵奢华的场所，就有高时魅力四射的身影。高时已成为尊贵、奢华、优雅生活方式的象征。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftNav from './component/leftNav';
export default {
  name: 'aboutContent',
  components: {
    LeftNav
  }
};
</script>

<style lang="scss" scoped>
  .right-main {
    background: url("~/static/images/about/background.png") no-repeat center bottom;
    .intro {
      width: 782px;
      height: 652px;
      margin: 50px auto 100px;
      p {
        text-indent: 2em;
        font-size: 18px;
        line-height: 36px;
        color: #444444;
      }
    }
  }
</style>
