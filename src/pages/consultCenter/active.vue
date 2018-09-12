<template>
  <div class="bgColor">
    <div class="main">
      <left-nav></left-nav>
      <div class="right-content">
        <div class="top-adress">
          <span>您现在的位置: </span>
          <router-link to="/index">首页</router-link> >
          <router-link to="/consultCenter/active">资讯中心</router-link> >
          <router-link to="/consultCenter/active">企业动态</router-link>
        </div>
        <div class="right-title">企业动态</div>
        <div class="right-main">
          <div class="top-active">
            <div class="top-image">
              <img src="./../../../static/images/consultCenter/active1.png">
            </div>
            <div class="top-image-content">
              <p class="title">设计名仕到访高时石材参观交流</p>
              <p class="content">—— &nbsp;&nbsp;&nbsp;识石，悟者为俊杰</p>
              <router-link to="">阅读更多</router-link>
            </div>
          </div>
          <ul class="other-active">
            <li v-for="list of newList" :key="list.id">
              <img :src="'./../../../static/images/consultCenter/active'+list.imgUrl+'.png'" alt="">
              <div class="other-active-content">
                <p class="other-title">{{list.title}}</p>
                <p class="other-content">{{list.content}}</p>
                <span>{{list.time}}</span>
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
import './../../assets/style/active.scss';
export default {
  name: 'active',
  components: {
    LeftNav,
    CommonPaging
  },
  data () {
    return {
      activeList: [
        {
          id: '0001',
          title: '设计名仕到访高时石材参观交流',
          imgUrl: '2',
          content: '石材作为基本、原始、普遍的自然元素，经历千万年沧桑历史而经久不衰，是当之无愧的建筑装饰材料之王...',
          time: '2014.12.31'
        }, {
          id: '0002',
          title: '设计名仕到访高时石材参观交流',
          imgUrl: '2',
          content: '石材作为基本、原始、普遍的自然元素，经历千万年沧桑历史而经久不衰，是当之无愧的建筑装饰材料之王...',
          time: '2014.12.31'
        }, {
          id: '0003',
          title: '设计名仕到访高时石材参观交流',
          imgUrl: '2',
          content: '石材作为基本、原始、普遍的自然元素，经历千万年沧桑历史而经久不衰，是当之无愧的建筑装饰材料之王...',
          time: '2014.12.31'
        }, {
          id: '0004',
          title: '设计名仕到访高时石材参观交流',
          imgUrl: '2',
          content: '石材作为基本、原始、普遍的自然元素，经历千万年沧桑历史而经久不衰，是当之无愧的建筑装饰材料之王...',
          time: '2014.12.31'
        }, {
          id: '0005',
          title: '设计名仕到访高时石材参观交流',
          imgUrl: '2',
          content: '石材作为基本、原始、普遍的自然元素，经历千万年沧桑历史而经久不衰，是当之无愧的建筑装饰材料之王...',
          time: '2014.12.31'
        }, {
          id: '0006',
          title: '设计名仕到访高时石材参观交流',
          imgUrl: '2',
          content: '石材作为基本、原始、普遍的自然元素，经历千万年沧桑历史而经久不衰，是当之无愧的建筑装饰材料之王...',
          time: '2014.12.31'
        }, {
          id: '0007',
          title: '设计名仕到访高时石材参观交流',
          imgUrl: '2',
          content: '石材作为基本、原始、普遍的自然元素，经历千万年沧桑历史而经久不衰，是当之无愧的建筑装饰材料之王...',
          time: '2014.12.31'
        }, {
          id: '0008',
          title: '设计名仕到访高时石材参观交流',
          imgUrl: '2',
          content: '石材作为基本、原始、普遍的自然元素，经历千万年沧桑历史而经久不衰，是当之无愧的建筑装饰材料之王...',
          time: '2014.12.31'
        }, {
          id: '0009',
          title: '设计名仕到访高时石材参观交流',
          imgUrl: '2',
          content: '石材作为基本、原始、普遍的自然元素，经历千万年沧桑历史而经久不衰，是当之无愧的建筑装饰材料之王...',
          time: '2014.12.31'
        }, {
          id: '0010',
          title: '设计名仕到访高时石材参观交流',
          imgUrl: '2',
          content: '石材作为基本、原始、普遍的自然元素，经历千万年沧桑历史而经久不衰，是当之无愧的建筑装饰材料之王...',
          time: '2014.12.31'
        }, {
          id: '0011',
          title: '设计名仕到访高时石材参观交流',
          imgUrl: '2',
          content: '石材作为基本、原始、普遍的自然元素，经历千万年沧桑历史而经久不衰，是当之无愧的建筑装饰材料之王...',
          time: '2014.12.31'
        }
      ],
      count: 0,
      newList: [],
      activeLength: 0
    };
  },
  created () {
    this.count = Math.ceil(this.activeList.length / 6); // 总页数
    this.newList = this.activeList.slice(0, 6); // 获取第一页数据
    console.log(this.newList);
  },
  mounted () {
    this.activeLength = this.activeList.length;
  },
  methods: {
    handleChange: function (step) {
      console.log(step);
      let start = (step - 1) * 6;
      let end = step * 6;
      console.log(start, end);
      this.newList = this.activeList.slice(start, end);
      console.log(this.newList);
    }
  }
};
</script>
