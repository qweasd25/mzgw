<template>
  <div class="main">
    <left-nav></left-nav>
    <div class="right-content">
      <div class="top-adress">
        <span>您现在的位置: </span>
        <router-link to="/index">首页</router-link> >
        <router-link to="/materialsCenter/texture">材料中心</router-link> >
        <router-link to="/materialsCenter/texture">材 质</router-link>
      </div>
      <div class="right-title">材料详情</div>
      <div class="right-main">
        <div class="datail">
          <div class="datailImg"><img src="./../../../static/images/materialsCenter/detail.png" alt=""></div>
          <div class="detailContent">
            <h5>{{lastMaterials.materialsName}}</h5>
            <p>中文名：<span class="materialsName">{{lastMaterials.materialsName}}</span></p>
            <p>材质：<span class="texture">{{lastMaterials.texture}}</span></p>
            <p>纹理：<span class="grain">{{lastMaterials.grain}}</span></p>
            <p>色系：<span class="colourScheme">{{lastMaterials.colourScheme}}</span></p>
            <p>适用范围：<span class="materialsRange">{{lastMaterials.materialsRange}}</span></p>
            <h5>材料介绍</h5>
            <p>产地：<span class="originPlace">{{lastMaterials.originPlace}}</span></p>
            <p>强度：<span class="strong">{{lastMaterials.strong}}</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftNav from './components/leftNav';
import CommonPaging from './../common/paging';
import './../../assets/style/materialsDetail.scss';
export default {
  name: 'materialsDetail',
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
      lastMaterials: {},
      id: 0
    };
  },
  created () {
    this.id = this.$route.query.id;
    for (let i = 0; i < this.materialsItem.length; i++) {
      if (this.materialsItem[i].id === this.id) {
        this.lastMaterials = this.materialsItem[i];
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
