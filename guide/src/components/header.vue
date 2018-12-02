<template>
  <nav class="navbar">
    <h1>FireAnts</h1>
  </nav>
</template>

<script>
export default {
  name: 'header-nav',
  props: {

  }
}
</script>

<style lang="scss" scoped>
  /***** Top menu *****/
  nav {
    background-color: #fff;
    border-bottom: solid 4px #efefef;
    color: white;
    height: 80px;
    padding: 10px;

    h1{
      width: 200px;
      height: 54px;
      overflow: hidden;
      line-height: 2000px;
      background: url("../logo.png") no-repeat left top;
    }
  }
</style>
