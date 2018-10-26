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
          <ul class="adresses">
            <li>
              <span class="active" @click="changeShowA">全 部</span>
            </li>
            <li>
              <span @click="changeShowB">福建省</span>
            </li>
            <li>
              <span @click="changeShowC">广东省</span>
            </li>
            <li>
              <span @click="changeShowD">上海</span>
            </li>
          </ul>
          <div class="top-site">
            <div class="img-bg">
              <img src="./../../../static/images/contactUs/active1.png">
            </div>
            <div class="img-content">
              <p class="name">高时（厦门）石业有限公司</p>
              <p class="content">厦门高时是中国最大的花岗岩加工基地</p>
              <router-link to="">查看详情</router-link>
            </div>
          </div>
          <ul class="other-site" v-if="show === 'a'">
            <li v-for="list of newList" :key="list.id">
              <img :src="'./../../../static/images/contactUs/'+list.imgUrl+'.png'" alt="">
              <div class="other-site-content">
                <p class="other-title">{{list.name}}</p>
                <router-link to="">查看详情</router-link>
              </div>
            </li>
          </ul>
          <ul class="other-site" v-else-if="show === 'b'">
            <li v-for="list of newListB" :key="list.id">
              <img :src="'./../../../static/images/contactUs/'+list.imgUrl+'.png'" alt="">
              <div class="other-site-content">
                <p class="other-title">{{list.name}}</p>
                <router-link to="">查看详情</router-link>
              </div>
            </li>
          </ul>
          <ul class="other-site" v-else-if="show === 'c'">
            <li v-for="list of newListC" :key="list.id">
              <img :src="'./../../../static/images/contactUs/'+list.imgUrl+'.png'" alt="">
              <div class="other-site-content">
                <p class="other-title">{{list.name}}</p>
                <router-link to="">查看详情</router-link>
              </div>
            </li>
          </ul>
          <ul class="other-site" v-else>
            <li v-for="list of newListD" :key="list.id">
              <img :src="'./../../../static/images/contactUs/'+list.imgUrl+'.png'" alt="">
              <div class="other-site-content">
                <p class="other-title">{{list.name}}</p>
                <router-link to="">查看详情</router-link>
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
import './../../assets/style/globalWebsite.scss';
export default {
  name: 'globalWebsite',
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
      show: 'a'
    };
  },
  computed: {
    activeListB: function () {
      return this.activeList.filter((item) => {
        return item.belongTo === '福建省';
      });
    },
    activeListC: function () {
      return this.activeList.filter((item) => {
        return item.belongTo === '广东省';
      });
    },
    activeListD: function () {
      return this.activeList.filter((item) => {
        return item.belongTo === '上海';
      });
    }
  },
  created () {
    this.count = Math.ceil(this.activeList.length / 6); // 总页数
    this.newList = this.activeList.slice(0, 6); // 获取第一页数据
    this.newListB = this.activeListB.slice(0, 6);
    this.newListC = this.activeListC.slice(0, 6);
    this.newListD = this.activeListD.slice(0, 6);
  },
  methods: {
    changeShowA: function () {
      this.show = 'a';
      this.count = Math.ceil(this.activeList.length / 6); // 总页数
    },
    changeShowB: function () {
      this.show = 'b';
      this.count = Math.ceil(this.activeListB.length / 6); // 总页数
    },
    changeShowC: function () {
      this.show = 'c';
      this.count = Math.ceil(this.activeListC.length / 6); // 总页数
    },
    changeShowD: function () {
      this.show = 'd';
      this.count = Math.ceil(this.activeListD.length / 6); // 总页数
    },
    handleChange: function (step) {
      console.log(step);
      let start = (step - 1) * 6;
      let end = step * 6;
      console.log(start, end);
      if (this.show === 'a') {
        this.newList = this.activeList.slice(start, end);
        console.log(this.newList);
      } else if (this.show === 'b') {
        this.newListB = this.activeListB.slice(start, end);
        console.log(this.newList);
      } else if (this.show === 'b') {
        this.newListC = this.activeListC.slice(start, end);
        console.log(this.newList);
      } else {
        this.newListD = this.activeListD.slice(start, end);
        console.log(this.newList);
      }
    }
  }
};
</script>
