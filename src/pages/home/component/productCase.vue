<template>
  <div class="home-case">
    <div class="title">
      <p>工程案例</p>
      <hr>
    </div>
    <ul class="accordion">
      <li>
        <img src="" alt="">
      </li>
    </ul>
    <ul class="photo-wall"></ul>
  </div>
</template>

<script>
import './../../../assets/style/homeProductCase.scss';
export default {
  name: 'homeProductCase',
  data () {
    return {
      accordionImages: []
    };
  }
};
</script>
