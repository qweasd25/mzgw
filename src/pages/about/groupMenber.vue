<template>
  <div class="main">
    <left-nav></left-nav>
    <div class="right-content">
      <div class="top-adress">
        <span>您现在的位置: </span>
        <router-link to="/index">首页</router-link> >
        <router-link to="/about/about">关于美中</router-link> >
        <router-link to="/about/groupMenber">集团成员</router-link>
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
          <li v-for="item in inMenber" :key="item.id">
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
          <li v-for="item in outMenber" :key="item.id">
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
        <common-paging :all="count" @change="handleChange"></common-paging>
      </div>
    </div>
  </div>
</template>

<script>
import './../../assets/style/groupMenber.scss';
import CommonPaging from './../common/paging';
import LeftNav from './component/leftNav';
export default {
  name: 'aboutGroupMenber',
  components: {
    CommonPaging,
    LeftNav
  },
  data () {
    return {
      groupInMenber: [
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: '国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: '国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: '国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: '国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: '国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: '国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: '国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: '国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: '国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: '国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: '国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: '国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: '国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: '国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: '国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: '国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内国内', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'}
      ],
      groupOutMenber: [
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: '国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: '国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: '国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: '国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: '国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: '国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: '国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: '国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: '国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'},
        {imgUrl: '1', title: '高时（厦门）石业有限公司', content: '国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外国外', adress: 'XXXXXXXXXX', tel: '(86)0592-72222222', cz: '(86)0592-72222222', mail: 'XXX@XXX.com'}
      ],
      count: 0,
      tab1: '',
      tab2: '',
      domestic: '',
      abroad: '',
      domesticLength: 0,
      abroadLength: 0,
      outMenber: [],
      inMenber: []
    };
  },
  created () {
    this.count = Math.ceil(this.groupInMenber.length / 5); // 总页数
    this.inMenber = this.groupInMenber.slice(0, 5);
    this.outMenber = this.groupOutMenber.slice(0, 5);
  },
  mounted () {
    this.tab1 = document.getElementsByClassName('tab')[0];
    this.tab2 = document.getElementsByClassName('tab')[1];
    this.domestic = document.getElementsByClassName('domestic')[0];
    this.abroad = document.getElementsByClassName('abroad')[0];
    this.domesticLength = this.groupInMenber.length;
    this.abroadLength = this.groupOutMenber.length;
    console.log(this.domesticLength, this.abroadLength);
  },
  methods: {
    handleToggle: function () {
      if (this.tab1.classList.contains('active') === true) {
        this.tab1.classList.remove('active');
        this.tab2.classList.add('active');
        this.domestic.style.display = 'none';
        this.abroad.style.display = 'block';
        this.count = Math.ceil(this.abroadLength / 5);
      } else {
        this.tab2.classList.remove('active');
        this.tab1.classList.add('active');
        this.domestic.style.display = 'block';
        this.abroad.style.display = 'none';
        this.count = Math.ceil(this.domesticLength / 5);
      }
    },
    handleChange: function (step) {
      console.log(step);
      let start = (step - 1) * 5;
      let end = step * 5 - 1;
      if (this.tab2.classList.contains('active') === true) {
        end = end <= this.abroadLength ? end : this.abroadLength;
        console.log(start, end);
        this.outMenber = this.groupOutMenber.slice(start, end);
        console.log(this.outMenber);
      } else {
        end = end <= this.domesticLength ? end : this.domesticLength;
        console.log(start, end);
        this.inMenber = this.groupInMenber.slice(start, end);
        console.log(this.inMenber);
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
