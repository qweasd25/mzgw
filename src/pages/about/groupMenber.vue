<template>
  <div>
    <common-header></common-header>
    <common-nav></common-nav>
    <about-banner></about-banner>
    <div class="main">
      <left-nav></left-nav>
      <div class="right-content">
        <div class="top-adress">
          <span>您现在的位置: </span>
          <router-link to="/index.html">首页</router-link> >
          <router-link to="/about.html">关于美中</router-link> >
          <router-link to="/about/groupMenber.html">集团成员</router-link>
          <router-view></router-view>
        </div>
        <div class="right-title">集团成员</div>
        <div class="right-main">
          <div class="member-tab">
            <div class="tab active" @click="handleToggle">
              <div>国内</div>
            </div>
            <div class="tab" @click="handleToggle">
              <div>国外</div>
            </div>
          </div>
          <ul class="about-member domestic">
            <li v-for="item in groupInMenber" :key="item.id">
              <div class="imgLeft">
                <img :src="'./../../../static/images/about/example'+item.imgUrl+'.png'">
              </div>
              <div class="contentRight">
                <h3>{{item.title}}</h3>
                <div>{{item.content}}</div>
                <p>地址：{{item.adress}}</p>
                <p>电话：{{item.tel}}</p>
                <p>传真：{{item.cz}}</p>
                <p>电子邮件：{{item.mail}}</p>
              </div>
            </li>
          </ul>
          <ul class="about-member abroad">
            <li v-for="item in groupOutMenber" :key="item.id">
              <div class="imgLeft">
                <img :src="'./../../../static/images/about/example'+item.imgUrl+'.png'">
              </div>
              <div class="contentRight">
                <h3>{{item.title}}</h3>
                <div>{{item.content}}</div>
                <p>地址：{{item.adress}}</p>
                <p>电话：{{item.tel}}</p>
                <p>传真：{{item.cz}}</p>
                <p>电子邮件：{{item.mail}}</p>
              </div>
            </li>
          </ul>
          <common-paging :all="count">></common-paging>
        </div>
      </div>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
import './../../assets/style/aboutCommon.scss';
import './../../assets/style/groupMenber.scss';
import CommonHeader from './../common/Header';
import CommonNav from './../common/Nav';
import AboutBanner from './component/banner';
import CommonPaging from './../common/paging';
import LeftNav from './component/leftNav';
import CommonFooter from './../common/Footer';
export default {
  name: 'groupMenber',
  components: {
    CommonHeader,
    CommonNav,
    AboutBanner,
    CommonPaging,
    LeftNav,
    CommonFooter
  },
  data () {
    return {
      groupInMenber: [
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'}
      ],
      groupOutMenber: [
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: '（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: '（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: '（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: '（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: '（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: '（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: '（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: '（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: '（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: '（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）（厦门）', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'}
      ],
      count: 0
    };
  },
  created () {
    this.count = Math.ceil(this.groupInMenber.length / 5);
  },
  methods: {
    handleToggle: function () {
      var tab1 = document.getElementsByClassName('tab')[0];
      var tab2 = document.getElementsByClassName('tab')[1];
      var domestic = document.getElementsByClassName('domestic')[0];
      var abroad = document.getElementsByClassName('abroad')[0];
      var domesticLength = this.groupInMenber.length;
      var abroadLength = this.groupOutMenber.length;
      console.log(domesticLength, abroadLength);
      if (tab1.classList.contains('active') === true) {
        tab1.classList.remove('active');
        tab2.classList.add('active');
        domestic.style.display = 'none';
        abroad.style.display = 'block';
        this.count = Math.ceil(abroadLength / 5);
      } else {
        tab2.classList.remove('active');
        tab1.classList.add('active');
        domestic.style.display = 'block';
        abroad.style.display = 'none';
        this.count = Math.ceil(domesticLength / 5);
      }
    }
  }
};
</script>

<style lang="scss">
.page-bar{
  margin: 70px 0 90px 300px;
  height: 30px;
  li:first-child>a {
    margin-left: 0px;
  }
  li {
    a {
      text-decoration: none;
      position: relative;
      float: left;
      font-size: 16px;
      padding: 6px 20px;
      margin-left: -1px;
      line-height: 30px;
      color: #333333;
      cursor: pointer;
      border: none;
      &:hover {
        color: #718cf1;
      }
      &.banclick{
        cursor:not-allowed;
        border: none;
      }
    }
    &.active a{
      color: #718cf1;
      cursor: default;
    }
    span {
      text-decoration: none;
      position: relative;
      float: left;
      font-size: 16px;
      padding: 6px 20px;
    }
    i {
      font-style:normal;
      margin: 0px 4px;
      font-size: 16px;
      line-height: 30px;
      color: #333333;
      border: none;
    }
  }
}
</style>
