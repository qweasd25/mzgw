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
          <router-link class="img-box" v-for="(imgBox1,index) in imgBoxListOne" :key="index" :to="{path:'/projectCase/mzCaseDetail',query:{id: imgBox1.id}}">
            <img :src="'static/images/projectCase/'+imgBox1.imgurl+'.png'">
            <span>{{imgBox1.title}}</span>
          </router-link>
        </div>
        <div class="box-2">
          <router-link class="img-box" v-for="(imgBox2,index) in imgBoxListTwo" :key="index" :to="{path:'/projectCase/mzCaseDetail',query:{id: imgBox2.id}}">
            <img :src="'static/images/projectCase/'+imgBox2.imgurl+'.png'">
            <span>{{imgBox2.title}}</span>
          </router-link>
        </div>
        <div class="box-3">
          <router-link class="img-box" v-for="(imgBox3,index) in imgBoxListThree" :key="index" :to="{path:'/projectCase/mzCaseDetail',query:{id: imgBox3.id}}">
            <img :src="'static/images/projectCase/'+imgBox3.imgurl+'.png'">
            <span>{{imgBox3.title}}</span>
          </router-link>
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
      imgBoxList: [
        {
          id: '0001',
          imgurl: '1',
          title: '北京W酒店',
          type: '酒店',
          adress: '北京市朝阳区建国门南大街2号',
          materials: '',
          introduce: '<p>北京长安街W酒店位于北京市朝阳区建国门南大街2号，毗邻东单商圈、国贸商圈和第一使馆区,雄踞北京现代商务及历史文化核心区域。酒店地上21层、地下5层，总建筑面积62805平米，设有E-WOW套房、WOW套房、双床房、大床房等8种房型共353间。</p><p>W酒店是喜达屋旗下的全球现代奢华时尚生活品牌，其官方的定位是“Lifestye”品牌，业内普遍将其归类为大型的Boutique hotel路线。激发灵感、创造潮流、大胆创新的 W 酒店在业界影响深远，为宾客提供终极的入住体验。</p>'
        }, {
          id: '0002',
          imgurl: '2',
          title: '中国银行总行大厦',
          type: '大厦',
          adress: '北京市朝阳区建国门南大街2号',
          materials: '',
          introduce: '<p>北京长安街W酒店位于北京市朝阳区建国门南大街2号，毗邻东单商圈、国贸商圈和第一使馆区,雄踞北京现代商务及历史文化核心区域。酒店地上21层、地下5层，总建筑面积62805平米，设有E-WOW套房、WOW套房、双床房、大床房等8种房型共353间。</p><p>W酒店是喜达屋旗下的全球现代奢华时尚生活品牌，其官方的定位是“Lifestye”品牌，业内普遍将其归类为大型的Boutique hotel路线。激发灵感、创造潮流、大胆创新的 W 酒店在业界影响深远，为宾客提供终极的入住体验。</p>'
        }, {
          id: '0003',
          imgurl: '3',
          title: '重庆凯宾斯基酒店',
          type: '酒店',
          adress: '北京市朝阳区建国门南大街2号',
          materials: '',
          introduce: '<p>北京长安街W酒店位于北京市朝阳区建国门南大街2号，毗邻东单商圈、国贸商圈和第一使馆区,雄踞北京现代商务及历史文化核心区域。酒店地上21层、地下5层，总建筑面积62805平米，设有E-WOW套房、WOW套房、双床房、大床房等8种房型共353间。</p><p>W酒店是喜达屋旗下的全球现代奢华时尚生活品牌，其官方的定位是“Lifestye”品牌，业内普遍将其归类为大型的Boutique hotel路线。激发灵感、创造潮流、大胆创新的 W 酒店在业界影响深远，为宾客提供终极的入住体验。</p>'
        }, {
          id: '0004',
          imgurl: '4',
          title: '广州星河湾酒店',
          type: '酒店',
          adress: '北京市朝阳区建国门南大街2号',
          materials: '',
          introduce: '<p>北京长安街W酒店位于北京市朝阳区建国门南大街2号，毗邻东单商圈、国贸商圈和第一使馆区,雄踞北京现代商务及历史文化核心区域。酒店地上21层、地下5层，总建筑面积62805平米，设有E-WOW套房、WOW套房、双床房、大床房等8种房型共353间。</p><p>W酒店是喜达屋旗下的全球现代奢华时尚生活品牌，其官方的定位是“Lifestye”品牌，业内普遍将其归类为大型的Boutique hotel路线。激发灵感、创造潮流、大胆创新的 W 酒店在业界影响深远，为宾客提供终极的入住体验。</p>'
        }, {
          id: '0005',
          imgurl: '5',
          title: '亚特兰蒂斯酒店',
          type: '酒店',
          adress: '北京市朝阳区建国门南大街2号',
          materials: '',
          introduce: '<p>北京长安街W酒店位于北京市朝阳区建国门南大街2号，毗邻东单商圈、国贸商圈和第一使馆区,雄踞北京现代商务及历史文化核心区域。酒店地上21层、地下5层，总建筑面积62805平米，设有E-WOW套房、WOW套房、双床房、大床房等8种房型共353间。</p><p>W酒店是喜达屋旗下的全球现代奢华时尚生活品牌，其官方的定位是“Lifestye”品牌，业内普遍将其归类为大型的Boutique hotel路线。激发灵感、创造潮流、大胆创新的 W 酒店在业界影响深远，为宾客提供终极的入住体验。</p>'
        }, {
          id: '0006',
          imgurl: '6',
          title: '澳门威尼斯人度假村酒店',
          type: '酒店',
          adress: '北京市朝阳区建国门南大街2号',
          materials: '',
          introduce: '<p>北京长安街W酒店位于北京市朝阳区建国门南大街2号，毗邻东单商圈、国贸商圈和第一使馆区,雄踞北京现代商务及历史文化核心区域。酒店地上21层、地下5层，总建筑面积62805平米，设有E-WOW套房、WOW套房、双床房、大床房等8种房型共353间。</p><p>W酒店是喜达屋旗下的全球现代奢华时尚生活品牌，其官方的定位是“Lifestye”品牌，业内普遍将其归类为大型的Boutique hotel路线。激发灵感、创造潮流、大胆创新的 W 酒店在业界影响深远，为宾客提供终极的入住体验。</p>'
        }, {
          id: '0007',
          imgurl: '7',
          title: '澳门永利酒店',
          type: '酒店',
          adress: '北京市朝阳区建国门南大街2号',
          materials: '',
          introduce: '<p>北京长安街W酒店位于北京市朝阳区建国门南大街2号，毗邻东单商圈、国贸商圈和第一使馆区,雄踞北京现代商务及历史文化核心区域。酒店地上21层、地下5层，总建筑面积62805平米，设有E-WOW套房、WOW套房、双床房、大床房等8种房型共353间。</p><p>W酒店是喜达屋旗下的全球现代奢华时尚生活品牌，其官方的定位是“Lifestye”品牌，业内普遍将其归类为大型的Boutique hotel路线。激发灵感、创造潮流、大胆创新的 W 酒店在业界影响深远，为宾客提供终极的入住体验。</p>'
        }, {
          id: '0008',
          imgurl: '8',
          title: '广州歌剧院',
          type: '歌剧院',
          adress: '北京市朝阳区建国门南大街2号',
          materials: '',
          introduce: '<p>北京长安街W酒店位于北京市朝阳区建国门南大街2号，毗邻东单商圈、国贸商圈和第一使馆区,雄踞北京现代商务及历史文化核心区域。酒店地上21层、地下5层，总建筑面积62805平米，设有E-WOW套房、WOW套房、双床房、大床房等8种房型共353间。</p><p>W酒店是喜达屋旗下的全球现代奢华时尚生活品牌，其官方的定位是“Lifestye”品牌，业内普遍将其归类为大型的Boutique hotel路线。激发灵感、创造潮流、大胆创新的 W 酒店在业界影响深远，为宾客提供终极的入住体验。</p>'
        }, {
          id: '0009',
          imgurl: '9',
          title: '三亚美高梅度酒店',
          type: '酒店',
          adress: '北京市朝阳区建国门南大街2号',
          materials: '',
          introduce: '<p>北京长安街W酒店位于北京市朝阳区建国门南大街2号，毗邻东单商圈、国贸商圈和第一使馆区,雄踞北京现代商务及历史文化核心区域。酒店地上21层、地下5层，总建筑面积62805平米，设有E-WOW套房、WOW套房、双床房、大床房等8种房型共353间。</p><p>W酒店是喜达屋旗下的全球现代奢华时尚生活品牌，其官方的定位是“Lifestye”品牌，业内普遍将其归类为大型的Boutique hotel路线。激发灵感、创造潮流、大胆创新的 W 酒店在业界影响深远，为宾客提供终极的入住体验。</p>'
        }, {
          id: '0010',
          imgurl: '10',
          title: '三亚凤凰岛',
          type: '酒店',
          adress: '北京市朝阳区建国门南大街2号',
          materials: '',
          introduce: '<p>北京长安街W酒店位于北京市朝阳区建国门南大街2号，毗邻东单商圈、国贸商圈和第一使馆区,雄踞北京现代商务及历史文化核心区域。酒店地上21层、地下5层，总建筑面积62805平米，设有E-WOW套房、WOW套房、双床房、大床房等8种房型共353间。</p><p>W酒店是喜达屋旗下的全球现代奢华时尚生活品牌，其官方的定位是“Lifestye”品牌，业内普遍将其归类为大型的Boutique hotel路线。激发灵感、创造潮流、大胆创新的 W 酒店在业界影响深远，为宾客提供终极的入住体验。</p>'
        }, {
          id: '0011',
          imgurl: '11',
          title: '深圳保利剧院',
          type: '酒店',
          adress: '北京市朝阳区建国门南大街2号',
          materials: '',
          introduce: '<p>北京长安街W酒店位于北京市朝阳区建国门南大街2号，毗邻东单商圈、国贸商圈和第一使馆区,雄踞北京现代商务及历史文化核心区域。酒店地上21层、地下5层，总建筑面积62805平米，设有E-WOW套房、WOW套房、双床房、大床房等8种房型共353间。</p><p>W酒店是喜达屋旗下的全球现代奢华时尚生活品牌，其官方的定位是“Lifestye”品牌，业内普遍将其归类为大型的Boutique hotel路线。激发灵感、创造潮流、大胆创新的 W 酒店在业界影响深远，为宾客提供终极的入住体验。</p>'
        }, {
          id: '0012',
          imgurl: '12',
          title: '深圳星河丽思卡尔顿酒店',
          type: '酒店',
          adress: '北京市朝阳区建国门南大街2号',
          materials: '',
          introduce: '<p>北京长安街W酒店位于北京市朝阳区建国门南大街2号，毗邻东单商圈、国贸商圈和第一使馆区,雄踞北京现代商务及历史文化核心区域。酒店地上21层、地下5层，总建筑面积62805平米，设有E-WOW套房、WOW套房、双床房、大床房等8种房型共353间。</p><p>W酒店是喜达屋旗下的全球现代奢华时尚生活品牌，其官方的定位是“Lifestye”品牌，业内普遍将其归类为大型的Boutique hotel路线。激发灵感、创造潮流、大胆创新的 W 酒店在业界影响深远，为宾客提供终极的入住体验。</p>'
        }, {
          id: '0013',
          imgurl: '13',
          title: '北京W酒店',
          type: '酒店',
          adress: '北京市朝阳区建国门南大街2号',
          materials: '',
          introduce: '<p>北京长安街W酒店位于北京市朝阳区建国门南大街2号，毗邻东单商圈、国贸商圈和第一使馆区,雄踞北京现代商务及历史文化核心区域。酒店地上21层、地下5层，总建筑面积62805平米，设有E-WOW套房、WOW套房、双床房、大床房等8种房型共353间。</p><p>W酒店是喜达屋旗下的全球现代奢华时尚生活品牌，其官方的定位是“Lifestye”品牌，业内普遍将其归类为大型的Boutique hotel路线。激发灵感、创造潮流、大胆创新的 W 酒店在业界影响深远，为宾客提供终极的入住体验。</p>'
        }, {
          id: '0014',
          imgurl: '14',
          title: '北京W酒店',
          type: '酒店',
          adress: '北京市朝阳区建国门南大街2号',
          materials: '',
          introduce: '<p>北京长安街W酒店位于北京市朝阳区建国门南大街2号，毗邻东单商圈、国贸商圈和第一使馆区,雄踞北京现代商务及历史文化核心区域。酒店地上21层、地下5层，总建筑面积62805平米，设有E-WOW套房、WOW套房、双床房、大床房等8种房型共353间。</p><p>W酒店是喜达屋旗下的全球现代奢华时尚生活品牌，其官方的定位是“Lifestye”品牌，业内普遍将其归类为大型的Boutique hotel路线。激发灵感、创造潮流、大胆创新的 W 酒店在业界影响深远，为宾客提供终极的入住体验。</p>'
        }, {
          id: '0015',
          imgurl: '15',
          title: '北京W酒店',
          type: '酒店',
          adress: '北京市朝阳区建国门南大街2号',
          materials: '',
          introduce: '<p>北京长安街W酒店位于北京市朝阳区建国门南大街2号，毗邻东单商圈、国贸商圈和第一使馆区,雄踞北京现代商务及历史文化核心区域。酒店地上21层、地下5层，总建筑面积62805平米，设有E-WOW套房、WOW套房、双床房、大床房等8种房型共353间。</p><p>W酒店是喜达屋旗下的全球现代奢华时尚生活品牌，其官方的定位是“Lifestye”品牌，业内普遍将其归类为大型的Boutique hotel路线。激发灵感、创造潮流、大胆创新的 W 酒店在业界影响深远，为宾客提供终极的入住体验。</p>'
        }, {
          id: '0016',
          imgurl: '16',
          title: '北京W酒店',
          type: '酒店',
          adress: '北京市朝阳区建国门南大街2号',
          materials: '',
          introduce: '<p>北京长安街W酒店位于北京市朝阳区建国门南大街2号，毗邻东单商圈、国贸商圈和第一使馆区,雄踞北京现代商务及历史文化核心区域。酒店地上21层、地下5层，总建筑面积62805平米，设有E-WOW套房、WOW套房、双床房、大床房等8种房型共353间。</p><p>W酒店是喜达屋旗下的全球现代奢华时尚生活品牌，其官方的定位是“Lifestye”品牌，业内普遍将其归类为大型的Boutique hotel路线。激发灵感、创造潮流、大胆创新的 W 酒店在业界影响深远，为宾客提供终极的入住体验。</p>'
        }, {
          id: '0017',
          imgurl: '17',
          title: '北京W酒店',
          type: '酒店',
          adress: '北京市朝阳区建国门南大街2号',
          materials: '',
          introduce: '<p>北京长安街W酒店位于北京市朝阳区建国门南大街2号，毗邻东单商圈、国贸商圈和第一使馆区,雄踞北京现代商务及历史文化核心区域。酒店地上21层、地下5层，总建筑面积62805平米，设有E-WOW套房、WOW套房、双床房、大床房等8种房型共353间。</p><p>W酒店是喜达屋旗下的全球现代奢华时尚生活品牌，其官方的定位是“Lifestye”品牌，业内普遍将其归类为大型的Boutique hotel路线。激发灵感、创造潮流、大胆创新的 W 酒店在业界影响深远，为宾客提供终极的入住体验。</p>'
        }, {
          id: '0018',
          imgurl: '18',
          title: '北京W酒店',
          type: '酒店',
          adress: '北京市朝阳区建国门南大街2号',
          materials: '',
          introduce: '<p>北京长安街W酒店位于北京市朝阳区建国门南大街2号，毗邻东单商圈、国贸商圈和第一使馆区,雄踞北京现代商务及历史文化核心区域。酒店地上21层、地下5层，总建筑面积62805平米，设有E-WOW套房、WOW套房、双床房、大床房等8种房型共353间。</p><p>W酒店是喜达屋旗下的全球现代奢华时尚生活品牌，其官方的定位是“Lifestye”品牌，业内普遍将其归类为大型的Boutique hotel路线。激发灵感、创造潮流、大胆创新的 W 酒店在业界影响深远，为宾客提供终极的入住体验。</p>'
        }, {
          id: '0019',
          imgurl: '19',
          title: '北京W酒店',
          type: '酒店',
          adress: '北京市朝阳区建国门南大街2号',
          materials: '',
          introduce: '<p>北京长安街W酒店位于北京市朝阳区建国门南大街2号，毗邻东单商圈、国贸商圈和第一使馆区,雄踞北京现代商务及历史文化核心区域。酒店地上21层、地下5层，总建筑面积62805平米，设有E-WOW套房、WOW套房、双床房、大床房等8种房型共353间。</p><p>W酒店是喜达屋旗下的全球现代奢华时尚生活品牌，其官方的定位是“Lifestye”品牌，业内普遍将其归类为大型的Boutique hotel路线。激发灵感、创造潮流、大胆创新的 W 酒店在业界影响深远，为宾客提供终极的入住体验。</p>'
        }, {
          id: '0020',
          imgurl: '20',
          title: '北京W酒店',
          type: '酒店',
          adress: '北京市朝阳区建国门南大街2号',
          materials: '',
          introduce: '<p>北京长安街W酒店位于北京市朝阳区建国门南大街2号，毗邻东单商圈、国贸商圈和第一使馆区,雄踞北京现代商务及历史文化核心区域。酒店地上21层、地下5层，总建筑面积62805平米，设有E-WOW套房、WOW套房、双床房、大床房等8种房型共353间。</p><p>W酒店是喜达屋旗下的全球现代奢华时尚生活品牌，其官方的定位是“Lifestye”品牌，业内普遍将其归类为大型的Boutique hotel路线。激发灵感、创造潮流、大胆创新的 W 酒店在业界影响深远，为宾客提供终极的入住体验。</p>'
        }, {
          id: '0021',
          imgurl: '21',
          title: '北京W酒店',
          type: '酒店',
          adress: '北京市朝阳区建国门南大街2号',
          materials: '',
          introduce: '<p>北京长安街W酒店位于北京市朝阳区建国门南大街2号，毗邻东单商圈、国贸商圈和第一使馆区,雄踞北京现代商务及历史文化核心区域。酒店地上21层、地下5层，总建筑面积62805平米，设有E-WOW套房、WOW套房、双床房、大床房等8种房型共353间。</p><p>W酒店是喜达屋旗下的全球现代奢华时尚生活品牌，其官方的定位是“Lifestye”品牌，业内普遍将其归类为大型的Boutique hotel路线。激发灵感、创造潮流、大胆创新的 W 酒店在业界影响深远，为宾客提供终极的入住体验。</p>'
        }, {
          id: '0022',
          imgurl: '22',
          title: '北京W酒店',
          type: '酒店',
          adress: '北京市朝阳区建国门南大街2号',
          materials: '',
          introduce: '<p>北京长安街W酒店位于北京市朝阳区建国门南大街2号，毗邻东单商圈、国贸商圈和第一使馆区,雄踞北京现代商务及历史文化核心区域。酒店地上21层、地下5层，总建筑面积62805平米，设有E-WOW套房、WOW套房、双床房、大床房等8种房型共353间。</p><p>W酒店是喜达屋旗下的全球现代奢华时尚生活品牌，其官方的定位是“Lifestye”品牌，业内普遍将其归类为大型的Boutique hotel路线。激发灵感、创造潮流、大胆创新的 W 酒店在业界影响深远，为宾客提供终极的入住体验。</p>'
        }, {
          id: '0023',
          imgurl: '23',
          title: '北京W酒店',
          type: '酒店',
          adress: '北京市朝阳区建国门南大街2号',
          materials: '',
          introduce: '<p>北京长安街W酒店位于北京市朝阳区建国门南大街2号，毗邻东单商圈、国贸商圈和第一使馆区,雄踞北京现代商务及历史文化核心区域。酒店地上21层、地下5层，总建筑面积62805平米，设有E-WOW套房、WOW套房、双床房、大床房等8种房型共353间。</p><p>W酒店是喜达屋旗下的全球现代奢华时尚生活品牌，其官方的定位是“Lifestye”品牌，业内普遍将其归类为大型的Boutique hotel路线。激发灵感、创造潮流、大胆创新的 W 酒店在业界影响深远，为宾客提供终极的入住体验。</p>'
        }, {
          id: '0024',
          imgurl: '24',
          title: '北京W酒店',
          type: '酒店',
          adress: '北京市朝阳区建国门南大街2号',
          materials: '',
          introduce: '<p>北京长安街W酒店位于北京市朝阳区建国门南大街2号，毗邻东单商圈、国贸商圈和第一使馆区,雄踞北京现代商务及历史文化核心区域。酒店地上21层、地下5层，总建筑面积62805平米，设有E-WOW套房、WOW套房、双床房、大床房等8种房型共353间。</p><p>W酒店是喜达屋旗下的全球现代奢华时尚生活品牌，其官方的定位是“Lifestye”品牌，业内普遍将其归类为大型的Boutique hotel路线。激发灵感、创造潮流、大胆创新的 W 酒店在业界影响深远，为宾客提供终极的入住体验。</p>'
        }, {
          id: '0025',
          imgurl: '25',
          title: '北京W酒店',
          type: '酒店',
          adress: '北京市朝阳区建国门南大街2号',
          materials: '',
          introduce: '<p>北京长安街W酒店位于北京市朝阳区建国门南大街2号，毗邻东单商圈、国贸商圈和第一使馆区,雄踞北京现代商务及历史文化核心区域。酒店地上21层、地下5层，总建筑面积62805平米，设有E-WOW套房、WOW套房、双床房、大床房等8种房型共353间。</p><p>W酒店是喜达屋旗下的全球现代奢华时尚生活品牌，其官方的定位是“Lifestye”品牌，业内普遍将其归类为大型的Boutique hotel路线。激发灵感、创造潮流、大胆创新的 W 酒店在业界影响深远，为宾客提供终极的入住体验。</p>'
        }, {
          id: '0026',
          imgurl: '26',
          title: '北京W酒店',
          type: '酒店',
          adress: '北京市朝阳区建国门南大街2号',
          materials: '',
          introduce: '<p>北京长安街W酒店位于北京市朝阳区建国门南大街2号，毗邻东单商圈、国贸商圈和第一使馆区,雄踞北京现代商务及历史文化核心区域。酒店地上21层、地下5层，总建筑面积62805平米，设有E-WOW套房、WOW套房、双床房、大床房等8种房型共353间。</p><p>W酒店是喜达屋旗下的全球现代奢华时尚生活品牌，其官方的定位是“Lifestye”品牌，业内普遍将其归类为大型的Boutique hotel路线。激发灵感、创造潮流、大胆创新的 W 酒店在业界影响深远，为宾客提供终极的入住体验。</p>'
        }, {
          id: '0027',
          imgurl: '27',
          title: '北京W酒店',
          type: '酒店',
          adress: '北京市朝阳区建国门南大街2号',
          materials: '',
          introduce: '<p>北京长安街W酒店位于北京市朝阳区建国门南大街2号，毗邻东单商圈、国贸商圈和第一使馆区,雄踞北京现代商务及历史文化核心区域。酒店地上21层、地下5层，总建筑面积62805平米，设有E-WOW套房、WOW套房、双床房、大床房等8种房型共353间。</p><p>W酒店是喜达屋旗下的全球现代奢华时尚生活品牌，其官方的定位是“Lifestye”品牌，业内普遍将其归类为大型的Boutique hotel路线。激发灵感、创造潮流、大胆创新的 W 酒店在业界影响深远，为宾客提供终极的入住体验。</p>'
        }
      ]
    };
  },
  created () {
    this.imgBoxListOne = this.imgBoxList.filter(
      // 返回数组，filter函数获取满足条件的项
      function (item, index, array) {
        return (index < 5);
      }
    );
    this.imgBoxListTwo = this.imgBoxList.filter(
      // 返回数组，filter函数获取满足条件的项
      function (item, index, array) {
        return (index >= 5 && index < 7);
      }
    );
    this.imgBoxListThree = this.imgBoxList.filter(
      // 返回数组，filter函数获取满足条件的项
      function (item, index, array) {
        return (index >= 7 && index < 27);
      }
    );
  }
};
</script>

<style lang="scss" scoped>
  .right-main {
    font-size: 22px;
    color: #666666;
  }
</style>
