<template>
  <header>
    <div>
      <img src="../../assets/images/index/logo1.png" alt="美中矿业集团">
    </div>
    <div>
      <form action="/search" class="header-search">
        <button class="btn">
          <span class="search-icon"></span>
        </button>
        <input id="searchBox" name="q" type="text" placeholder="请输入关键字搜索" class="form-control" value="">
      </form>
    </div>
  </header>
</template>

<script>
export default {
  name: 'CommonHeader'
};
</script>

<style lang="scss">
  header {
    width: 62.5%;
    min-width: 1200px;
    height: 100px;
    margin: 0 auto;
    position: static;
    div {
      display: inline-block;
      margin-top: 25px;
      &:first-child {
        float: left;
        width: 404px;
        img {
          width: 404px;
          height: 51px;
          vertical-align: middle;
        }
      }
      // 搜索框
      &:last-child {
        display: none;
        float: right;
        position: relative;
        top: 0;
        width: 218px;
        height: 24px;
        margin-top: 50px;
        border: 1px solid #dcdcdc;
        border-radius: 6px;
        font-size: 14px;
        .header-search{
          vertical-align: middle;
          .btn{
            position: absolute;
            top: 2px;
            right: 10px;
            color: #999;
            box-shadow: none;
            border: 0;
            .search-icon{
              position: relative;
              top: 4px;
              display: inline-block;
              width: 16px;
              height: 14px;
              background: url('../../assets/images/index/searchIcon.png') no-repeat center center;
            }
          }
          #searchBox{
            width: 208px;
            height: 24px;
            padding-left: 8px;
            margin-left: 1px;
          }
        }
      }
    }
    &:after{ visibility: hidden; display: inline-block; content: ""; height: 0; clear: both; zoom: 1; }
  }
</style>
