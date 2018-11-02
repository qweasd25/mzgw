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
          <div class="top-active" v-for="top of topActive" :key="top.id">
            <div class="top-image">
              <img :src="'./../../../static/images/consultCenter/active'+top.topImgUrl+'.png'">
            </div>
            <div class="top-image-content">
              <p class="title">{{top.title}}</p>
              <p class="content">—— &nbsp;&nbsp;&nbsp;{{top.topContent}}</p>
              <router-link :to="{path:'/consultCenter/activeDetails',query:{id: top.id}}">阅读更多</router-link>
            </div>
          </div>
          <ul class="other-active">
            <li v-for="list of newList" :key="list.id">
              <router-link :to="{path:'/consultCenter/activeDetails',query:{id: list.id}}">
                <img :src="'./../../../static/images/consultCenter/active'+list.imgUrl+'.png'" alt="">
                <div class="other-active-content">
                  <p class="other-title">{{list.title}}</p>
                  <p class="other-content">{{list.content}}</p>
                  <span>{{list.time}}</span>
                </div>
              </router-link>
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
          topImgUrl: '1',
          topContent: '识石，悟者为俊杰',
          content: '石材作为基本、原始、普遍的自然元素，经历千万年沧桑历史而经久不衰，是当之无愧的建筑装饰材料之王...',
          time: '2014.12.31',
          articleContent: `<p>石材作为基本、原始、普遍的自然元素，经历千万年沧桑历史而经久不衰，是当之无愧的建筑装饰材料之王。“识石，悟者为俊杰”——要想成为顶级的设计师，怎能不懂设计的原材料呢？</p>
            <p>12月19日，由搜房网发起的“设计名仕观察团华南基地行”来到高时石材总部。10余位来自国内室内设计行业的领军人士与媒体一行，参观了高时石材样品展区、产品生产线、并跟高时的高层领导一起探讨了高时的发展历程与现状。</p>
            <img src="./../../../static/images/consultCenter/21.jpg" alt="">
            <p>活动当天，高时高层领导带领设计师智囊团参观了高时石材产业园和生产基地。参观过程中高时工作人员在旁细心指导，一一解说了各款产品的性能与用途，令设计师们叹为观止。</p>
            <img src="./../../../static/images/consultCenter/22.jpg" alt="">
            <p>论坛会上，高时石材总经理李翼翔向大家展示了石种运用在工程中的最新的案例，有神秘的亚特兰蒂斯酒店，时尚奢华的北京W酒店，魅力独特的北京华尔道夫酒店，颇具商务能量的广州国际金融中心，还有以意大利威尼斯水乡为建筑特色的澳门威尼斯人度假村酒店。还介绍了高时的发展历程和现状。</p>
            <img src="./../../../static/images/consultCenter/23.jpg" alt="">
            <p class="article-img-title">高时经典案例：亚特兰蒂斯酒店</p>
            <img src="./../../../static/images/consultCenter/24.jpg" alt="">
            <p class="article-img-title">高时经典案例：北京W酒店</p>
            <p>设计师智囊团从消费者，以敏锐的设计视觉角度出发，就产品用材、工艺标准、资源利用、服务规范等提出疑问和探讨。几位设计大师各抒己见，并积极建言献策，现场气氛热烈，纷纷表示此行果真是大开眼界、不虚此行。</p>`
        }, {
          id: '0002',
          title: '高時石材集团荣获2013年度“中国石材行业十强企业”、“中国建筑装饰材料百强企业”称号',
          imgUrl: '2',
          topImgUrl: '1',
          topContent: '高時石材集团荣获2013年度称号',
          content: '6月10日-11日，由中国建筑装饰协会主办的首届中国建材家居产业发展大会在北京国际会议中心隆重举行...',
          time: '2014.12.31',
          articleContent: `<p>6月10日-11日，由中国建筑装饰协会主办的首届中国建材家居产业发展大会在北京国际会议中心隆重举行。中装协、住建部、国家建材测试中心等权威机构领导与年度中国建筑材料百强企业等近500名代表共同见证会议。</p>
            <p>会上，备受行业瞩目的首届“2013年度中国建筑装饰材料百强企业”及“2013年度中国建筑装饰材料石材行业十强企业”同时揭晓，作为全球石材领导品牌高時集团，凭借优异的产品品质和卓著的品牌影响力，高時石材以石材行业第一身份获得以上殊荣，并接受了现场授牌表彰。</p>
            <p>此次大会以“创新、融合、发展”为主题，由主题演讲、首部行业发展报告发布、嘉宾对话论坛、绿色装饰美丽中国行启动仪式、中国建筑装饰材料百强企业授牌仪式组成。</p>
            <img src="./../../../static/images/consultCenter/22.jpg" alt="">
            <p>高時石材始于1994年，经过20年的发展，成为了全球石材领导品牌。业务遍及全球七十多个国家，涉及了石材行业的所有项目。高時在深化全球市场的同时，也不断加大对国内市场的投资；凭借20年的专业经验和对全球石材资源的掌控和整合，为国内广大客户带来奢华的家装体验。</p>`
        }, {
          id: '0003',
          title: '新浪家居专访集团董事长高忠麟先生',
          imgUrl: '2',
          topImgUrl: '1',
          topContent: '新浪家居专访集团董事长高忠麟先生',
          content: '始创于1994年的高时集团，作为石材行业的创始者和领先者，一直傲立于石材行业的顶端。集团的掌舵者——高忠麟董事长...',
          time: '2014.12.31',
          articleContent: `<p>始创于1994年的高时集团，作为石材行业的创始者和领先者，一直傲立于石材行业的顶端。集团的掌舵者——高忠麟董事长，亦是整个石材行业的灵魂人物，他带领着高时一直坚守在石材行业的第一线。如今面对消费者对于大理石存在高强度辐射的误解，高时集团豪掷五个亿做“真相基金”，志在为整个石材行业“洗白”，也还消费者一个真相。这种大气魄在整个家居行业都是首屈一指的。“高时将要开启天然大理石的家居时代”是高董提出来的企业新愿景，他相信在不久，石材将走入千家万户。</p>
            <p>采访时间：2014年6月24日</p>
            <p>本期嘉宾：高时集团董事长高忠麟</p>
            <img src="./../../../static/images/consultCenter/22.jpg" alt="">
            <p>【新浪家居】各位网友大家好，新浪家居深度访谈栏目点将——本期邀请的嘉宾是高时集团董事长高忠麟先生，高总您好</p>
            <p>【高忠麟】：主持人好，网友们好。</p>
            <p>【新浪家居】我们了解到高时集团1994年成立，历经20载，很好奇您当时您是出于什么样的考虑做石材这个行业？</p>
            <p>【高忠麟】当时有很多因素，但是最主要的原因是我非常喜欢这个行业。</p>
            <p>【新浪家居】其实石材行业是比较笨重的行业，而高时集团却一直专注于做石材。时下我们经常听到一个概念——整体家居，很多企业都在丰富自己的产品线，加大多元化发展，为什么高时不这么做，而是选择专注于石材呢？</p>
            <p>【高忠麟】石材这个行业太复杂了，任何一个人要把它做精做透，我觉得非常困难，几乎不可能兼顾到其他领域。主持人提到多元化发展，其实高时也有，不过我们是纵向的发展，比如说对于加工废料再利用等环保方面高时就有做一些动作。我们一直在丰富我们的产品，但一定是和石材相关。这个行业非常让我着迷去把它做透做大。高时现在在做的，是把整个产业（纵向）多元化做齐全，以前这个产业每个环节都由一个公司来做，比如说开矿是一个公司、物流是一个公司、生产一个公司、安装是一个公司，这些环节都是独立出去的。我们高时现在希望把这种多元化做全，做到纵向的多元化发展。</p>
            `
        }
      ],
      topActive: [],
      count: 0,
      newList: [],
      activeLength: 0
    };
  },
  created () {
    this.count = Math.ceil(this.activeList.length / 6); // 总页数
    this.newList = this.activeList.slice(0, 6); // 获取第一页数据
    this.topActive = this.activeList.filter( // 置顶新闻
      (item) => {
        return (item.id === '0001');
      }
    );
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
