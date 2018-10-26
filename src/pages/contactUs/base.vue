<template>
  <div class="bgColor">
    <div class="main">
      <left-nav></left-nav>
      <div class="right-content">
        <div class="top-adress">
          <span>您现在的位置: </span>
          <router-link to="/index">首页</router-link> >
          <router-link to="/contactUs/globalWebsite">联系我们</router-link> >
          <router-link to="/contactUs/base">加工基地</router-link>
        </div>
        <div class="right-title">加工基地</div>
        <div class="base">
          <ul class="base-items">
            <li v-for="list of newList" :key="list.id">
              <img :src="'./../../../static/images/contactUs/base'+list.imgUrl+'.png'" alt="">
              <div class="base-item-content">
                <p class="other-title">{{list.name}}</p>
                <p>{{list.content}}</p>
                <p>地址：{{list.adress}}</p>
                <p>电话：{{list.tel}}</p>
                <p>传真：{{list.fax}}</p>
                <p>电子邮件：{{list.mail}}</p>
              </div>
            </li>
          </ul>
          <common-paging :all="count" @change="handleChange"></common-paging>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftNav from './components/leftNav';
import CommonPaging from './../common/paging';
import './../../assets/style/base.scss';
export default {
  name: 'base',
  components: {
    LeftNav,
    CommonPaging
  },
  data () {
    return {
      activeList: [
        {
          id: '0001',
          name: '厦门高时实业有限公司',
          imgUrl: '1',
          content: '洪塘生产基地，隶属高时石材集团，占地12万平米，主营大理石荒料及板材加工，设立有板材加工、精加工、薄板、马赛克、复合板、异型壁炉等车间。引进意大利、西班牙等国际先进石材加工设备200余台/套，拥有国内最先进的数控机床及自动胶补、自动抛光、自动打磨及壁炉生产线。',
          adress: '厦门市同安区洪塘镇碧云中路8号',
          tel: '0592-7138001 7138002',
          fax: '0592-7138003',
          mail: 'sales@bestcheer.com'
        }, {
          id: '0002',
          name: '泉州市高时新型建材有限公司',
          imgUrl: '1',
          content: '高時PC是开发预制混凝土结构的新型建材公司，全部采用日本进口设备和生产技术,目前高時 PC的新型产品已经达到国际先进技术水平,同时依托高時集团先进的生产管理、营销经验和中国 大陆成本、资源、人才的优势，目前高時PC的产品已经发往日本深受客人好评。',
          adress: '福建省南安市水头镇福山二期工业项目区',
          tel: '(86)0595-86007000',
          fax: '(86)0595-86007001',
          mail: ''
        }, {
          id: '0003',
          name: '泉州市高时新型建材有限公司',
          imgUrl: '1',
          content: '高時PC是开发预制混凝土结构的新型建材公司，全部采用日本进口设备和生产技术,目前高時 PC的新型产品已经达到国际先进技术水平,同时依托高時集团先进的生产管理、营销经验和中国 大陆成本、资源、人才的优势，目前高時PC的产品已经发往日本深受客人好评。',
          adress: '福建省南安市水头镇福山二期工业项目区',
          tel: '(86)0595-86007000',
          fax: '(86)0595-86007001',
          mail: ''
        }, {
          id: '0004',
          name: '泉州市高时新型建材有限公司',
          imgUrl: '1',
          content: '高時PC是开发预制混凝土结构的新型建材公司，全部采用日本进口设备和生产技术,目前高時 PC的新型产品已经达到国际先进技术水平,同时依托高時集团先进的生产管理、营销经验和中国 大陆成本、资源、人才的优势，目前高時PC的产品已经发往日本深受客人好评。',
          adress: '福建省南安市水头镇福山二期工业项目区',
          tel: '(86)0595-86007000',
          fax: '(86)0595-86007001',
          mail: ''
        }, {
          id: '0005',
          name: '泉州市高时新型建材有限公司',
          imgUrl: '1',
          content: '高時PC是开发预制混凝土结构的新型建材公司，全部采用日本进口设备和生产技术,目前高時 PC的新型产品已经达到国际先进技术水平,同时依托高時集团先进的生产管理、营销经验和中国 大陆成本、资源、人才的优势，目前高時PC的产品已经发往日本深受客人好评。',
          adress: '福建省南安市水头镇福山二期工业项目区',
          tel: '(86)0595-86007000',
          fax: '(86)0595-86007001',
          mail: ''
        }, {
          id: '0006',
          name: '泉州市高时新型建材有限公司',
          imgUrl: '1',
          content: '高時PC是开发预制混凝土结构的新型建材公司，全部采用日本进口设备和生产技术,目前高時 PC的新型产品已经达到国际先进技术水平,同时依托高時集团先进的生产管理、营销经验和中国 大陆成本、资源、人才的优势，目前高時PC的产品已经发往日本深受客人好评。',
          adress: '福建省南安市水头镇福山二期工业项目区',
          tel: '(86)0595-86007000',
          fax: '(86)0595-86007001',
          mail: ''
        }, {
          id: '0007',
          name: '泉州市高时新型建材有限公司',
          imgUrl: '1',
          content: '高時PC是开发预制混凝土结构的新型建材公司，全部采用日本进口设备和生产技术,目前高時 PC的新型产品已经达到国际先进技术水平,同时依托高時集团先进的生产管理、营销经验和中国 大陆成本、资源、人才的优势，目前高時PC的产品已经发往日本深受客人好评。',
          adress: '福建省南安市水头镇福山二期工业项目区',
          tel: '(86)0595-86007000',
          fax: '(86)0595-86007001',
          mail: ''
        }
      ],
      count: 0,
      newList: [],
      show: 'a'
    };
  },
  created () {
    this.count = Math.ceil(this.activeList.length / 6); // 总页数
    this.newList = this.activeList.slice(0, 6); // 获取第一页数据
  },
  methods: {
    handleChange: function (step) {
      console.log(step);
      let start = (step - 1) * 6;
      let end = step * 6;
      console.log(start, end);
      this.newList = this.activeList.slice(start, end);
    }
  }
};
</script>
