<template>
<nav>
  <div class="nav-center">
    <div class="mz-nav">
      <div class="nav-header active">
        <a href="#">首 页</a>
      </div>
    </div>
    <div class="mz-nav">
      <div class="nav-header">
        <a href="#">关于美中</a>
      </div>
      <ul id="nav_uploadMenu" class="header-uploadpop">
        <li class="header-uploadpop-item">
          <a href="#">集团简介</a>
        </li>
        <li class="header-uploadpop-item">
          <a href="#">集团成员</a>
        </li>
        <li class="header-uploadpop-item">
          <a href="#">企业文化</a>
        </li>
        <li class="header-uploadpop-item">
          <a href="#">发展历程</a>
        </li>
        <li class="header-uploadpop-item">
          <a href="#">战略合作</a>
        </li>
      </ul>
    </div>
    <div class="mz-nav">
      <div class="nav-header">
        <a href="#">资讯中心</a>
      </div>
      <ul id="nav_uploadMenu" class="header-uploadpop">
        <li class="header-uploadpop-item">
          <a href="#">企业动态</a>
        </li>
        <li class="header-uploadpop-item">
          <a href="#">行业资讯</a>
        </li>
        <li class="header-uploadpop-item">
          <a href="#">美中风采</a>
        </li>
      </ul>
    </div>
    <div class="mz-nav">
      <div class="nav-header">
        <a href="#">产品中心</a>
      </div>
      <ul id="nav_uploadMenu" class="header-uploadpop">
        <li class="header-uploadpop-item">
          <a href="#">石木风情</a>
        </li>
        <li class="header-uploadpop-item">
          <a href="#">异形</a>
        </li>
        <li class="header-uploadpop-item">
          <a href="#">高强板</a>
        </li>
        <li class="header-uploadpop-item">
          <a href="#">马赛克</a>
        </li>
        <li class="header-uploadpop-item">
          <a href="#">艺术拼图</a>
        </li>
        <li class="header-uploadpop-item">
          <a href="#">壁炉</a>
        </li>
        <li class="header-uploadpop-item">
          <a href="#">蒂诺</a>
        </li>
      </ul>
    </div>
    <div class="mz-nav">
      <div class="nav-header">
        <a href="#">材料中心</a>
      </div>
    </div>
    <div class="mz-nav">
      <div class="nav-header">
        <a href="#">矿山资源</a>
      </div>
      <ul id="nav_uploadMenu" class="header-uploadpop">
        <li class="header-uploadpop-item">
          <a href="#">国内矿山</a>
        </li>
        <li class="header-uploadpop-item">
          <a href="#">国外矿山</a>
        </li>
      </ul>
    </div>
    <div class="mz-nav">
      <div class="nav-header">
        <a href="#">工程案例</a>
      </div>
      <ul id="nav_uploadMenu" class="header-uploadpop">
        <li class="header-uploadpop-item">
          <a href="#">美中案例</a>
        </li>
        <li class="header-uploadpop-item">
          <a href="#">案例名录</a>
        </li>
      </ul>
    </div>
    <div class="mz-nav">
      <div class="nav-header">
        <a href="#">联系我们</a>
      </div>
      <ul id="nav_uploadMenu" class="header-uploadpop">
        <li class="header-uploadpop-item">
          <a href="#">全球网点</a>
        </li>
        <li class="header-uploadpop-item">
          <a href="#">加工基地</a>
        </li>
        <li class="header-uploadpop-item">
          <a href="#">采购平台</a>
        </li>
        <li class="header-uploadpop-item">
          <a href="#">人才招聘</a>
        </li>
        <li class="header-uploadpop-item">
          <a href="#">直营网点</a>
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
  nav {
    width: 100%;
    height: 38px;
    background-color: #718cf1;
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
          &.active {
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
          background-color: #718cf1;
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
