<template>
  <div class="bgColor">
    <div class="main">
      <left-nav></left-nav>
      <div class="right-content">
        <div class="top-adress">
          <span>您现在的位置: </span>
          <router-link to="/index">首页</router-link> >
          <router-link to="/contactUs/globalWebsite">联系我们</router-link> >
          <router-link to="/contactUs/globalWebsite">全球网点</router-link>
        </div>
        <div class="right-title">全球网点</div>
        <div class="global-website">
          <div class="global-detail">
            <div class="global-bg">
              <img :src="'static/images/contactUs/'+detailGlobal.imgUrl+'.png'">
            </div>
            <div class="global-content">
              <p class="name">{{detailGlobal.name}}</p>
              <p class="content">{{detailGlobal.content}}</p>
              <p class="adress">地址：{{detailGlobal.adress}}</p>
              <p class="tel">电话：{{detailGlobal.tel}}</p>
              <p class="fax">传真：{{detailGlobal.fax}}</p>
              <p class="mail">电子邮件：{{detailGlobal.mail}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftNav from './components/leftNav';
import CommonPaging from './../common/paging';
import './../../assets/style/globalWebsiteDetail.scss';
export default {
  name: 'globalWebsiteDetail',
  components: {
    LeftNav,
    CommonPaging
  },
  data () {
    return {
      activeList: [
        {
          id: '0001',
          name: '高时（厦门）石业有限公司',
          imgUrl: '1',
          belongTo: '福建省',
          content: '厦门高時是中国最大的花岗岩加工基地。',
          adress: '厦门市同安区大同街道朝元路999号',
          tel: '(86)0592-7222222',
          fax: '(86)0592-7226080'
        }, {
          id: '0002',
          name: '泉州市高时新型建材有限公司',
          imgUrl: '2',
          belongTo: '福建省',
          content: '高時PC是开发预制混凝土结构的新型建材公司，全部采用日本进口设备和生产技术,目前高時 PC的新型产品已经达到国际先进技术水平,同时依托高時集团先进的生产管理、营销经验和中国 大陆成本、资源、人才的优势，目前高時PC的产品已经发往日本深受客人好评。',
          adress: '福建省南安市水头镇福山二期工业项目区',
          tel: '(86)0595-86007000',
          fax: '(86)0595-86007001'
        }, {
          id: '0003',
          name: '愉天石材（深圳）有限公司',
          imgUrl: '3',
          belongTo: '广东省',
          content: '高時石材集团大理石加工基地，也是中国最大的石材马赛克和石材壁炉的生产基地',
          adress: '深圳市龙岗区布吉镇坂田高時工业园',
          tel: '(86)755-28777888',
          fax: '(86)755-28777015'
        }, {
          id: '0004',
          name: '东莞友联建筑材料有限公司',
          imgUrl: '4',
          belongTo: '广东省',
          content: '新型复合型石材--蜂窝板/家具台面板。',
          adress: '茶山镇茶龙公路工业区',
          tel: '86-769-86649125',
          fax: '86-769-86408858'
        }, {
          id: '0005',
          name: '高时石材（上海）有限公司',
          imgUrl: '5',
          belongTo: '上海',
          content: '高時石材(上海) 有限公司成立于2000年4月12日，占地总面积33588平方米， 其中厂房面 积1.26万平方米。工厂拥有意大利钻石拉锯6台， 磨抛线、补胶线各两条及大量异型、 工程 板加工设备，年产石材60万平方米， 弧板105万平方米， 线条3.6万米',
          adress: '上海市青浦区华新镇嘉松中路3299号',
          tel: '(86)021-39872020',
          fax: '(86)021-39872121'
        }
      ],
      count: 0,
      newList: [],
      newListB: [],
      newListC: [],
      newListD: [],
      show: 'a',
      id: 0,
      detailGlobal: []
    };
  },
  created () {
    this.id = this.$route.query.id;
    for (let i = 0; i < this.activeList.length; i++) {
      if (this.activeList[i].id === this.id) {
        this.detailGlobal = this.activeList[i];
      }
    }
    console.log(this.detailGlobal);
  }
};
</script>
