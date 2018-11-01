<template>
  <footer>
    <div class="footer-top">
      <ul>
        <li>关于美中</li>
        <li><router-link to="/about/about">集团简介</router-link></li>
        <li><router-link to="/about/groupMenber">集团成员</router-link></li>
        <li><router-link to="/about/culture">企业文化</router-link></li>
        <li><router-link to="/about/developHistory">发展历程</router-link></li>
        <li><router-link to="/about/cooperation">战略合作</router-link></li>
      </ul>
      <ul>
        <li>资讯中心</li>
        <li><router-link to="/consultCenter/active">企业动态</router-link></li>
        <li><router-link to="/consultCenter/consult">行业资讯</router-link></li>
        <li><router-link to="/consultCenter/elegant">美中风采</router-link></li>
      </ul>
      <ul>
        <li>产品中心</li>
        <li><router-link to="/productCenter/productCenter1">石木风情</router-link></li>
        <li><router-link to="/productCenter/productCenter2">异形</router-link></li>
        <li><router-link to="/productCenter/productCenter3">高强板</router-link></li>
        <li><router-link to="/productCenter/productCenter4">马赛克</router-link></li>
        <li><router-link to="/productCenter/productCenter5">艺术拼图</router-link></li>
        <li><router-link to="/productCenter/productCenter6">壁炉</router-link></li>
        <li><router-link to="/productCenter/productCenter7">蒂诺</router-link></li>
      </ul>
      <ul>
        <li>矿山资源</li>
        <li><router-link to="/mineResources/inland">国内矿山</router-link></li>
        <li><router-link to="/mineResources/foreign">国外矿山</router-link></li>
      </ul>
      <ul>
        <li>工程案例</li>
        <li><router-link to="/projectCase/mzCase">美中案例</router-link></li>
        <li><router-link to="/projectCase/caseMemoir">案例名录</router-link></li>
      </ul>
      <ul>
        <li>联系我们</li>
        <li><router-link to="/contactUs/globalWebsite">全球网点</router-link></li>
        <li><router-link to="/contactUs/processingBase">加工基地</router-link></li>
        <li><router-link to="/contactUs/platform">采购平台</router-link></li>
        <li><router-link to="/contactUs/recruit">人才招聘</router-link></li>
        <li><router-link to="/contactUs/directWebsite">直营网点</router-link></li>
      </ul>
    </div>
    <div class="footer-bottom">
      <div class="footer-logo"></div>
      <div class="copyright">
        <p>Copyright © 2013 Best Cheer Stone Group.  高时石材. All Rights Reserved.</p>
        <p>Copyright © 2013 Best Cheer Stone Group.  高时石材. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
import './../../assets/style/footer.scss';
export default {
  name: 'CommonFooter'
};
</script>
