<template>
  <div class="main">
    <left-nav></left-nav>
    <div class="right-content">
      <div class="top-adress">
        <span>您现在的位置: </span>
        <router-link to="/index">首页</router-link> >
        <router-link to="/contactUs/globalWebsite">联系我们</router-link> >
        <router-link to="/contactUs/recruit">人才招聘</router-link>
      </div>
      <div class="right-title">人才招聘</div>
      <ul class="right-main">
        <li v-for="(item,index) in recruitList" :key="index">
          <div class="recruitTittle">
            <span class="recruitName">{{item.recruitName}}</span>
            <span :class="{'active': item.isShow, 'unactive': !item.isShow}" @click="toggle(index)"></span>
          </div>
          <div class="recruitContent" v-show="item.isShow">
            <p>招聘数量：<span class="needNum">{{item.needNum}}</span>名</p>
            <ul class="rule">
              <li v-for="(ruleItem,index) in item.rule" :key="index">{{ruleItem}}</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import LeftNav from './components/leftNav';
import CommonPaging from './../common/paging';
import './../../assets/style/recruit.scss';
export default {
  name: 'recruit',
  components: {
    LeftNav,
    CommonPaging
  },
  data () {
    return {
      recruitList: [{
        id: '0001',
        recruitName: '品牌营销',
        needNum: 2,
        rule: ['1.参与市场调研，策划参加各种展会，掌握市场动态，熟悉市场状况并有独特见解。', '2.负责协调、策划、配合媒体公关和新闻事件的炒作；', '3.管理日常销售业务工作，审阅订货、发货等业务报表，指导、监督并有效控制控制销售活动。'],
        isShow: false
      }, {
        id: '0002',
        recruitName: '营销经理',
        needNum: 2,
        rule: ['1.参与市场调研，策划参加各种展会，掌握市场动态，熟悉市场状况并有独特见解。', '2.负责协调、策划、配合媒体公关和新闻事件的炒作；', '3.管理日常销售业务工作，审阅订货、发货等业务报表，指导、监督并有效控制控制销售活动。'],
        isShow: false
      }]
    };
  },
  methods: {
    toggle (index) {
      this.recruitList[index].isShow = !this.recruitList[index].isShow;
    }
  }
};
</script>
