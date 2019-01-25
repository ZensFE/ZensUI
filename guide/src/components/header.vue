<template>
  <nav class="navbar">
    <h1>Zens UI</h1>
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
  $main-color: #f2b57b;

  nav {
    background-color: $main-color;
    border-bottom: solid 4px #efefef;
    color: white;
    height: 80px;
    padding: 10px;

    h1{
      width: 200px;
      height: 45px;
      overflow: hidden;
      /* background: url("../logo.png") left/30% no-repeat; */
    }
  }
</style>
