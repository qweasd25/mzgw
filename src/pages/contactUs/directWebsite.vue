<template>
  <div class="bgColor">
    <div class="main">
      <left-nav></left-nav>
      <div class="right-content">
        <div class="top-adress">
          <span>您现在的位置: </span>
          <router-link to="/index">首页</router-link> >
          <router-link to="/contactUs/globalWebsite">联系我们</router-link> >
          <router-link to="/contactUs/directWebsite">直营网点</router-link>
        </div>
        <div class="right-title">直营网站</div>
        <div class="dire-main">
          <div class="dire-items-main">
            <ul class="dire-items">
              <li v-for="list of newListA" :key="list.id">
                <p class="dire-item-title">高时石材天然大理石体验馆</p>
                <p class="dire-item-title">{{list.name}}</p>
                <div class="dire-item-content">
                  <p class="dire-item-adress">地址：{{list.adress}}</p>
                  <p>联系人: {{list.contactPeople}}</p>
                  <p class="dire-item-tel">电话：{{list.tel}}</p>
                </div>
              </li>
            </ul>
            <ul class="dire-items">
              <li v-for="list of newListB" :key="list.id">
                <p class="dire-item-title">高时石材天然大理石体验馆</p>
                <p class="dire-item-title">{{list.name}}</p>
                <div class="dire-item-content">
                  <p class="dire-item-adress">地址：{{list.adress}}</p>
                  <p>联系人: {{list.contactPeople}}</p>
                  <p class="dire-item-tel">电话：{{list.tel}}</p>
                </div>
              </li>
            </ul>
            <ul class="dire-items">
              <li v-for="list of newListC" :key="list.id">
                <p class="dire-item-title">高时石材天然大理石体验馆</p>
                <p class="dire-item-title">{{list.name}}</p>
                <div class="dire-item-content">
                  <p class="dire-item-adress">地址：{{list.adress}}</p>
                  <p>联系人: {{list.contactPeople}}</p>
                  <p class="dire-item-tel">电话：{{list.tel}}</p>
                </div>
              </li>
            </ul>
          </div>
          <common-paging :all="count" @change="handleChange"></common-paging>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftNav from './components/leftNav';
import CommonPaging from './../common/paging';
import './../../assets/style/directWebsite.scss';
export default {
  name: 'directWebsite',
  components: {
    LeftNav,
    CommonPaging
  },
  data () {
    return {
      activeList: [
        {
          id: '0001',
          name: '长春店',
          adress: '厦门市同安区洪塘镇碧云中路8号',
          tel: '0592-7138001',
          contactPeople: '陈XX'
        }, {
          id: '0002',
          name: '长春店',
          adress: '厦门市同安区洪塘镇碧云中路8号厦门市同安区洪塘镇碧云中路8号',
          tel: '0592-7138001',
          contactPeople: '陈XX'
        }, {
          id: '0003',
          name: '长春店',
          adress: '厦门市同安区洪塘镇碧云中路8号',
          tel: '0592-7138001',
          contactPeople: '陈XX'
        }, {
          id: '0004',
          name: '温州店',
          adress: '厦门市同安区洪塘镇碧云中路8号厦门市同安区洪塘镇碧云中路8号',
          tel: '0592-7138001',
          contactPeople: '陈XX'
        }, {
          id: '0005',
          name: '厦门店',
          adress: '厦门市同安区洪塘镇碧云中路8号',
          tel: '0592-7138001',
          contactPeople: '陈XX'
        }, {
          id: '0006',
          name: '长春店',
          adress: '厦门市同安区洪塘镇碧云中路8号',
          tel: '0592-7138001',
          contactPeople: '陈XX'
        }, {
          id: '0007',
          name: '长春店',
          adress: '厦门市同安区洪塘镇碧云中路8号',
          tel: '0592-7138001',
          contactPeople: '陈XX'
        }, {
          id: '0008',
          name: '长春店',
          adress: '厦门市同安区洪塘镇碧云中路8号厦门市同安区洪塘镇碧云中路8号',
          tel: '0592-7138001',
          contactPeople: '陈XX'
        }, {
          id: '0009',
          name: '长春店',
          adress: '厦门市同安区洪塘镇碧云中路8号',
          tel: '0592-7138001',
          contactPeople: '陈XX'
        }, {
          id: '0010',
          name: '长春店',
          adress: '厦门市同安区洪塘镇碧云中路8号',
          tel: '0592-7138001',
          contactPeople: '陈XX'
        }, {
          id: '0011',
          name: '长春店',
          adress: '厦门市同安区洪塘镇碧云中路8号厦门市同安区洪塘镇碧云中路8号',
          tel: '0592-7138001',
          contactPeople: '陈XX'
        }, {
          id: '0012',
          name: '长春店',
          adress: '厦门市同安区洪塘镇碧云中路8号',
          tel: '0592-7138001',
          contactPeople: '陈XX'
        }, {
          id: '0013',
          name: '长春店',
          adress: '厦门市同安区洪塘镇碧云中路8号',
          tel: '0592-7138001',
          contactPeople: '陈XX'
        }, {
          id: '0014',
          name: '长春店',
          adress: '厦门市同安区洪塘镇碧云中路8号',
          tel: '0592-7138001',
          contactPeople: '陈XX'
        }, {
          id: '0015',
          name: '长春店',
          adress: '厦门市同安区洪塘镇碧云中路8号',
          tel: '0592-7138001',
          contactPeople: '陈XX'
        }, {
          id: '0016',
          name: '长春店',
          adress: '厦门市同安区洪塘镇碧云中路8号',
          tel: '0592-7138001',
          contactPeople: '陈XX'
        }, {
          id: '0017',
          name: '长春店',
          adress: '厦门市同安区洪塘镇碧云中路8号',
          tel: '0592-7138001',
          contactPeople: '陈XX'
        }
      ],
      count: 0,
      newList: [],
      newListA: [],
      newListB: [],
      newListC: [],
      show: 'a',
      tepLength: 0,
      n: 0
    };
  },
  created () {
    this.count = Math.ceil(this.activeList.length / 12); // 总页数
    this.newList = this.activeList.slice(0, 12); // 获取第一页数据
    this.init();
  },
  methods: {
    handleChange: function (step) {
      console.log(step);
      let start = (step - 1) * 12;
      let end = step * 12;
      console.log(start, end);
      this.newList = this.activeList.slice(start, end);
      console.log(this.newList);
      this.init();
    },
    init () {
      this.tepLength = this.newList.length;
      this.n = Math.ceil(this.tepLength / 3);
      this.newListA = this.newList.slice(0, this.n);
      this.newListB = this.newList.slice(this.n, 2 * this.n);
      this.newListC = this.newList.slice(2 * this.n, this.tepLength);
    }
  }
};
</script>
