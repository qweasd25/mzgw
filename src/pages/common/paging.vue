<template>
  <div class="page-bar">
    <ul>
      <li v-if="cur>1">
        <a v-on:click="cur--,pageClick()">&lt;&lt;</a>
      </li>
      <li v-if="cur==1">
        <a class="banclick">&lt;&lt;</a>
      </li>
      <li v-for="index in indexs" v-bind:class="{'active': cur == index}" :key=index.id>
        <a v-on:click="btnClick(index)">{{ index }}</a>
      </li>
      <li v-if="cur!=all">
        <a v-on:click="cur++,pageClick()">&gt;&gt;</a>
      </li>
      <li v-if="cur == all">
        <a class="banclick">&gt;&gt;</a>
      </li>
      <li>
        <span>共
          <i>{{all}}</i>页</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['all'],
  data () {
    return {
      cur: 1 // 当前页码
    };
  },
  computed: {
    indexs: function () {
      var left = 1;
      var right = this.all;
      var ar = [];
      if (this.all >= 5) {
        if (this.cur > 3 && this.cur < this.all - 2) {
          left = this.cur - 2;
          right = this.cur + 2;
        } else {
          if (this.cur <= 3) {
            left = 1;
            right = 5;
          } else {
            right = this.all;
            left = this.all - 4;
          }
        }
      }
      while (left <= right) {
        ar.push(left);
        left++;
      }
      return ar;
    }
  },
  methods: {
    btnClick: function (data) { // 页码点击事件
      if (data !== this.cur) {
        this.cur = data;
      }
    },
    pageClick: function () {
      console.log('现在在' + this.cur + '页');
    }
  },
  watch: {
    cur: function (oldValue, newValue) {
      console.log(arguments);
      this.$emit('change', arguments[0]);
    }
  }
};
</script>
