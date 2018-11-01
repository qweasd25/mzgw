<template>
<nav>
  <div class="nav-center">
    <div class="mz-nav">
      <div class="nav-header">
        <router-link to="/index">首 页</router-link>
      </div>
    </div>
    <div class="mz-nav">
      <div class="nav-header">
        <router-link to="/about/about">关于美中</router-link>
      </div>
      <ul id="nav_uploadMenu" class="header-uploadpop">
        <li class="header-uploadpop-item">
          <router-link to="/about/about">集团简介</router-link>
        </li>
        <li class="header-uploadpop-item">
          <router-link to="/about/groupMenber">集团成员</router-link>
        </li>
        <li class="header-uploadpop-item">
          <router-link to="/about/culture">企业文化</router-link>
        </li>
        <li class="header-uploadpop-item">
          <router-link to="/about/developHistory">发展历程</router-link>
        </li>
        <li class="header-uploadpop-item">
          <router-link to="/about/cooperation">战略合作</router-link>
        </li>
      </ul>
    </div>
    <div class="mz-nav">
      <div class="nav-header">
        <router-link to="/consultCenter/active">资讯中心</router-link>
      </div>
      <ul id="nav_uploadMenu" class="header-uploadpop">
        <li class="header-uploadpop-item">
          <router-link to="/consultCenter/active">企业动态</router-link>
        </li>
        <li class="header-uploadpop-item">
          <router-link to="/consultCenter/consult">行业资讯</router-link>
        </li>
        <li class="header-uploadpop-item">
          <router-link to="/consultCenter/elegant">美中风采</router-link>
        </li>
      </ul>
    </div>
    <div class="mz-nav">
      <div class="nav-header">
        <router-link to="/productCenter/productCenterMain">产品中心</router-link>
      </div>
      <ul id="nav_uploadMenu" class="header-uploadpop">
        <li class="header-uploadpop-item">
          <router-link to="/productCenter/productCenter1">石木风情</router-link>
        </li>
        <li class="header-uploadpop-item">
          <router-link to="/productCenter/productCenter2">异 形</router-link>
        </li>
        <li class="header-uploadpop-item">
          <router-link to="/productCenter/productCenter3">高强板</router-link>
        </li>
        <li class="header-uploadpop-item">
          <router-link to="/productCenter/productCenter4">马赛克</router-link>
        </li>
        <li class="header-uploadpop-item">
          <router-link to="/productCenter/productCenter5">艺术拼图</router-link>
        </li>
        <li class="header-uploadpop-item">
          <router-link to="/productCenter/productCenter6">壁 炉</router-link>
        </li>
        <li class="header-uploadpop-item">
          <router-link to="/productCenter/productCenter7">蒂 诺</router-link>
        </li>
      </ul>
    </div>
    <div class="mz-nav">
      <div class="nav-header">
        <router-link to="/materialsCenter/texture">材料中心</router-link>
      </div>
      <ul id="nav_uploadMenu" class="header-uploadpop">
        <li class="header-uploadpop-item">
          <router-link to="/materialsCenter/texture">材 质</router-link>
        </li>
        <li class="header-uploadpop-item">
          <router-link to="/materialsCenter/grain">纹 理</router-link>
        </li>
        <li class="header-uploadpop-item">
          <router-link to="/materialsCenter/range">适用范围</router-link>
        </li>
        <li class="header-uploadpop-item">
          <router-link to="/materialsCenter/colourScheme">色 系</router-link>
        </li>
      </ul>
    </div>
    <div class="mz-nav">
      <div class="nav-header">
        <router-link to="/mineResources/inland">矿山资源</router-link>
      </div>
      <ul id="nav_uploadMenu" class="header-uploadpop">
        <li class="header-uploadpop-item">
          <router-link to="/mineResources/inland">国内矿山</router-link>
        </li>
        <li class="header-uploadpop-item">
          <router-link to="/mineResources/foreign">国外矿山</router-link>
        </li>
      </ul>
    </div>
    <div class="mz-nav">
      <div class="nav-header">
        <router-link to="/projectCase/mzCase">工程案例</router-link>
      </div>
      <ul id="nav_uploadMenu" class="header-uploadpop">
        <li class="header-uploadpop-item">
          <router-link to="/projectCase/mzCase">美中案例</router-link>
        </li>
        <li class="header-uploadpop-item">
          <router-link to="/projectCase/caseMemoir">案例名录</router-link>
        </li>
      </ul>
    </div>
    <div class="mz-nav">
      <div class="nav-header">
        <router-link to="/contactUs/globalWebsite">联系我们</router-link>
      </div>
      <ul id="nav_uploadMenu" class="header-uploadpop">
        <li class="header-uploadpop-item">
          <router-link to="/contactUs/globalWebsite">全球网点</router-link>
        </li>
        <li class="header-uploadpop-item">
          <router-link to="/contactUs/processingBase">加工基地</router-link>
        </li>
        <li class="header-uploadpop-item">
          <router-link to="/contactUs/platform">采购平台</router-link>
        </li>
        <li class="header-uploadpop-item">
          <router-link to="/contactUs/recruit">人才招聘</router-link>
        </li>
        <li class="header-uploadpop-item">
          <router-link to="/contactUs/directWebsite">直营网点</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'CommonNav',
  data () {
    return {
      yes: true,
      no: false
    };
  }
};
</script>

<style lang="scss">
  @import '~style/_setting.scss';
  nav {
    width: 100%;
    height: 38px;
    background-color: $bgColor;
    .nav-center {
      width: 44.8%;
      min-width: 860px;
      margin: 0 auto;
      .mz-nav {
        width: 90px;
        height: 38px;
        float: left;
        margin-left: 20px;
        text-align: center;
        &:first-child {
          margin-left: 0;
        }
        .nav-header {
          .router-link-active {
            height: 36px;
            border-bottom: 2px solid #ffffff;
          }
          a {
            display: block;
            font-family: 'MicrosoftYaHei Bold';
            color: #ffffff;
            font-size: 16px;
            line-height: 38px;
          }
        }
        .header-uploadpop {
          background-color: $bgColor;
          overflow: hidden;
          opacity: 0;
          transition: opacity .8s ease-in-out;
          position: relative;
          z-index: 6;
          .header-uploadpop-item a{
            display: block;
            width: 90px;
            height: 30px;
            color: #ffffff;
            line-height: 30px;
            &:hover {
              background-color: #5678f8;
            }
          }
        }
        &:hover .header-uploadpop {
          opacity: 1;
          transition: opacity .4s ease-in-out;
        }
      }
    }
  }
</style>
