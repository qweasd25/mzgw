<template>
  <div class="main">
    <left-nav></left-nav>
    <div class="right-content">
      <div class="top-adress">
        <span>您现在的位置: </span>
        <router-link to="/index">首页</router-link> >
        <router-link to="/materialsCenter/texture">材料中心</router-link> >
        <router-link to="/materialsCenter/range">适用范围</router-link>
      </div>
      <div class="right-title">材料中心</div>
      <div class="right-main">
        <ul class="classification">
          <li>
            <span class="active" @click="changeShowA">全 部</span>
          </li>
          <li>
            <span @click="changeShowB">花岗石</span>
          </li>
          <li>
            <span @click="changeShowC">大理石</span>
          </li>
          <li>
            <span @click="changeShowD">方钠石</span>
          </li>
        </ul>
        <ul class="materialsItem" v-if="show === 'a'">
          <li v-for="item of newList" :key="item.id">
            <router-link to="">
              <img src="./../../../static/images/materialsCenter/materials1.png" alt="">
              <p>石材名称： <span class="materialsName">罗马假日</span></p>
              <p>适用范围： <span class="materialsRange">室内地面</span></p>
            </router-link>
          </li>
        </ul>
        <ul class="materialsItem" v-else-if="show === 'b'">
          <li v-for="item of newListB" :key="item.id">
            <router-link to="">
              <img src="./../../../static/images/materialsCenter/materials1.png" alt="">
              <p>石材名称： <span class="materialsName">罗马假日</span></p>
              <p>适用范围： <span class="materialsRange">室内地面</span></p>
            </router-link>
          </li>
        </ul>
        <ul class="materialsItem" v-else-if="show === 'c'">
          <li v-for="item of newListC" :key="item.id">
            <router-link to="">
              <img src="./../../../static/images/materialsCenter/materials1.png" alt="">
              <p>石材名称： <span class="materialsName">罗马假日</span></p>
              <p>适用范围： <span class="materialsRange">室内地面</span></p>
            </router-link>
          </li>
        </ul>
        <ul class="materialsItem" v-else>
          <li v-for="item of newListD" :key="item.id">
            <router-link to="">
              <img :src="'./../../../static/images/materialsCenter/materials'+item.imgUrl+'.png'" alt="">
              <p>石材名称： <span class="materialsName">{{item.materialsName}}</span></p>
              <p>适用范围： <span class="materialsRange">{{item.materialsRange}}</span></p>
            </router-link>
          </li>
        </ul>
        <common-paging :all="count" @change="handleChange"></common-paging>
      </div>
    </div>
  </div>
</template>

<script>
import LeftNav from './components/leftNav';
import CommonPaging from './../common/paging';
import './../../assets/style/texture.scss';
export default {
  name: 'range',
  components: {
    LeftNav,
    CommonPaging
  },
  data () {
    return {
      materialsItem: [
        {
          id: '001',
          imgUrl: '1',
          materialsName: '罗马假日',
          materialsRange: '室内地面',
          texture: '大理石',
          grain: '乱纹',
          colourScheme: '蓝色',
          originPlace: '意大利',
          strong: '128'
        }, {
          id: '002',
          imgUrl: '1',
          materialsName: '罗马假日',
          materialsRange: '室内地面',
          texture: '大理石',
          grain: '乱纹',
          colourScheme: '蓝色',
          originPlace: '意大利',
          strong: '128'
        }, {
          id: '003',
          imgUrl: '1',
          materialsName: '罗马假日',
          materialsRange: '室内地面',
          texture: '花岗石',
          grain: '乱纹',
          colourScheme: '蓝色',
          originPlace: '意大利',
          strong: '128'
        }, {
          id: '004',
          imgUrl: '1',
          materialsName: '罗马假日',
          materialsRange: '室内地面',
          texture: '大理石',
          grain: '乱纹',
          colourScheme: '蓝色',
          originPlace: '意大利',
          strong: '128'
        }, {
          id: '005',
          imgUrl: '1',
          materialsName: '罗马假日',
          materialsRange: '室内地面',
          texture: '大理石',
          grain: '乱纹',
          colourScheme: '蓝色',
          originPlace: '意大利',
          strong: '128'
        }, {
          id: '006',
          imgUrl: '1',
          materialsName: '罗马假日',
          materialsRange: '室内地面',
          texture: '花岗石',
          grain: '乱纹',
          colourScheme: '蓝色',
          originPlace: '意大利',
          strong: '128'
        }, {
          id: '007',
          imgUrl: '1',
          materialsName: '罗马假日',
          materialsRange: '室内地面',
          texture: '方钠石',
          grain: '乱纹',
          colourScheme: '蓝色',
          originPlace: '意大利',
          strong: '128'
        }, {
          id: '008',
          imgUrl: '1',
          materialsName: '罗马假日',
          materialsRange: '室内地面',
          texture: '大理石',
          grain: '乱纹',
          colourScheme: '蓝色',
          originPlace: '意大利',
          strong: '128'
        }, {
          id: '009',
          imgUrl: '1',
          materialsName: '罗马假日',
          materialsRange: '室内地面',
          texture: '花岗石',
          grain: '乱纹',
          colourScheme: '蓝色',
          originPlace: '意大利',
          strong: '128'
        }, {
          id: '010',
          imgUrl: '1',
          materialsName: '罗马假日',
          materialsRange: '室内地面',
          texture: '大理石',
          grain: '乱纹',
          colourScheme: '蓝色',
          originPlace: '意大利',
          strong: '128'
        }, {
          id: '011',
          imgUrl: '1',
          materialsName: '罗马假日',
          materialsRange: '室内地面',
          texture: '大理石',
          grain: '乱纹',
          colourScheme: '蓝色',
          originPlace: '意大利',
          strong: '128'
        }, {
          id: '012',
          imgUrl: '1',
          materialsName: '罗马假日',
          materialsRange: '室内地面',
          texture: '大理石',
          grain: '乱纹',
          colourScheme: '蓝色',
          originPlace: '意大利',
          strong: '128'
        }, {
          id: '013',
          imgUrl: '1',
          materialsName: '罗马假日',
          materialsRange: '室内地面',
          texture: '大理石',
          grain: '乱纹',
          colourScheme: '蓝色',
          originPlace: '意大利',
          strong: '128'
        }, {
          id: '014',
          imgUrl: '1',
          materialsName: '罗马假日',
          materialsRange: '室内地面',
          texture: '大理石',
          grain: '乱纹',
          colourScheme: '蓝色',
          originPlace: '意大利',
          strong: '128'
        }, {
          id: '015',
          imgUrl: '1',
          materialsName: '罗马假日',
          materialsRange: '室内地面',
          texture: '大理石',
          grain: '乱纹',
          colourScheme: '蓝色',
          originPlace: '意大利',
          strong: '128'
        }
      ],
      newList: [],
      newListB: [],
      newListC: [],
      newListD: [],
      count: 0, // 总页数
      show: 'a'
    };
  },
  created () {
    this.count = Math.ceil(this.materialsItem.length / 12); // 总页数
    this.newList = this.materialsItem.slice(0, 12);
    this.newListB = this.materialsItemB.slice(0, 12);
    this.newListC = this.materialsItemC.slice(0, 12);
    this.newListD = this.materialsItemD.slice(0, 12);
  },
  computed: {
    materialsItemB: function () {
      return this.materialsItem.filter((item) => {
        return item.texture === '花岗石';
      });
    },
    materialsItemC: function () {
      return this.materialsItem.filter((item) => {
        return item.texture === '大理石';
      });
    },
    materialsItemD: function () {
      return this.materialsItem.filter((item) => {
        return item.texture === '方钠石';
      });
    }
  },
  methods: {
    changeShowA: function () {
      this.show = 'a';
      this.count = Math.ceil(this.materialsItem.length / 12); // 总页数
    },
    changeShowB: function () {
      this.show = 'b';
      this.count = Math.ceil(this.materialsItemB.length / 12); // 总页数
    },
    changeShowC: function () {
      this.show = 'c';
      this.count = Math.ceil(this.materialsItemC.length / 12); // 总页数
    },
    changeShowD: function () {
      this.show = 'd';
      this.count = Math.ceil(this.materialsItemD.length / 12); // 总页数
    },
    handleChange: function (step) {
      console.log(step);
      let start = (step - 1) * 12;
      let end = step * 12;
      console.log(start, end);
      if (this.show === 'a') {
        this.newList = this.materialsItem.slice(start, end);
        console.log(this.newList);
      } else if (this.show === 'b') {
        this.newListB = this.materialsItemB.slice(start, end);
        console.log(this.newList);
      } else if (this.show === 'b') {
        this.newListC = this.materialsItemC.slice(start, end);
        console.log(this.newList);
      } else {
        this.newListD = this.materialsItemD.slice(start, end);
        console.log(this.newList);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  .right-main {
    font-size: 22px;
    color: #666666;
  }
</style>
