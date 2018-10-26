<template>
  <div class="main">
    <left-nav></left-nav>
    <div class="right-content">
      <div class="top-adress">
        <span>您现在的位置: </span>
        <router-link to="/index">首页</router-link> >
        <router-link to="/projectCase/mzCase">工程案例</router-link> >
        <router-link to="/projectCase/mzCase">美中案例</router-link>
      </div>
      <div class="right-title">美中案例</div>
      <div class="box-main">
        <div class="box-1">
          <div class="img-box" v-for="(imgBox1,index) in imgBoxListOne" :key="index">
            <img :src="'./../../../static/images/projectCase/'+imgBox1.imgurl+'.png'">
            <span>{{imgBox1.title}}</span>
          </div>
        </div>
        <div class="box-2">
          <div class="img-box">
            <img src="./../../../static/images/projectCase/6.png">
            <span>XXXXXXX</span>
          </div>
          <div class="img-box">
            <img src="./../../../static/images/projectCase/7.png">
            <span>XXXXXXX</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './../../assets/style/mzCase.scss';
import LeftNav from './components/leftNav';
export default {
  name: 'mzCase',
  components: {
    LeftNav
  },
  data () {
    return {
      imgBoxListOne: [],
      imgBoxListTwo: [],
      imgBoxListThree: [],
      imgBoxList: [{
        id: '0001',
        imgurl: '1',
        title: 'XXXXXXX'
      }, {
        id: '0002',
        imgurl: '2',
        title: 'XXXXXXX'
      }, {
        id: '0003',
        imgurl: '3',
        title: 'XXXXXXX'
      }, {
        id: '0004',
        imgurl: '4',
        title: 'XXXXXXX'
      }, {
        id: '0005',
        imgurl: '5',
        title: 'XXXXXXX'
      }, {
        id: '0006',
        imgurl: '6',
        title: 'XXXXXXX'
      }, {
        id: '0007',
        imgurl: '7',
        title: 'XXXXXXX'
      }, {
        id: '0008',
        imgurl: '8',
        title: 'XXXXXXX'
      }, {
        id: '0009',
        imgurl: '9',
        title: 'XXXXXXX'
      }, {
        id: '0010',
        imgurl: '10',
        title: 'XXXXXXX'
      }, {
        id: '0011',
        imgurl: '11',
        title: 'XXXXXXX'
      }, {
        id: '0012',
        imgurl: '12',
        title: 'XXXXXXX'
      }, {
        id: '0013',
        imgurl: '13',
        title: 'XXXXXXX'
      }, {
        id: '0014',
        imgurl: '14',
        title: 'XXXXXXX'
      }, {
        id: '0015',
        imgurl: '15',
        title: 'XXXXXXX'
      }, {
        id: '0016',
        imgurl: '16',
        title: 'XXXXXXX'
      }, {
        id: '0017',
        imgurl: '17',
        title: 'XXXXXXX'
      }, {
        id: '0018',
        imgurl: '18',
        title: 'XXXXXXX'
      }, {
        id: '0019',
        imgurl: '19',
        title: 'XXXXXXX'
      }, {
        id: '0020',
        imgurl: '20',
        title: 'XXXXXXX'
      }, {
        id: '0021',
        imgurl: '21',
        title: 'XXXXXXX'
      }, {
        id: '0022',
        imgurl: '22',
        title: 'XXXXXXX'
      }, {
        id: '0023',
        imgurl: '23',
        title: 'XXXXXXX'
      }, {
        id: '0024',
        imgurl: '24',
        title: 'XXXXXXX'
      }, {
        id: '0025',
        imgurl: '25',
        title: 'XXXXXXX'
      }, {
        id: '0026',
        imgurl: '26',
        title: 'XXXXXXX'
      }, {
        id: '0027',
        imgurl: '27',
        title: 'XXXXXXX'
      }]
    };
  },
  created () {
    this.imgBoxListOne = this.imgBoxList.filter(
      // 返回数组，filter函数获取满足条件的项
      function (item, index, array) {
        return (index < 6);
      });
  }
};
</script>

<style lang="scss" scoped>
  .right-main {
    font-size: 22px;
    color: #666666;
  }
</style>
