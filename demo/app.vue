<template>
  <div class="all-container">
    <h3>色值系统</h3>

    <h4>字体颜色</h4>
    <ul>
      <li class="text-primary">主色 primary</li>
      <li class="text-white">白色 white</li>
      <li class="text-dark">深色 dark</li>
    </ul>

    <h4>按钮</h4>
    <div class="button-list">

      <h5>按钮大小</h5>
      <button class="btn radius small">small 按钮</button>
      <button class="btn radius base">base 按钮</button>
      <button class="btn radius big">big 按钮</button>

      <h5>按钮颜色</h5>
      <button class="btn radius">主色按钮</button>
      <button class="btn radius primary reverse">主色翻转按钮</button>
      <button class="btn radius primary hollow">主色镂空按钮</button>
      <button class="btn radius red hollow">红色镂空按钮</button>
      <button class="btn red radius">红色按钮</button>
      <button class="btn red radius reverse">红色翻转按钮</button>

      <h5>按钮形状</h5>
      <button class="btn">默认长方形</button>
      <button class="btn radius">圆角按钮</button>
      <button class="btn pill">椭圆按钮</button>

    </div>


    <h4>Box Model</h4>
    <div class="test-container">
      <div class="padding10" style="width: 200px; height: 200px;">
    </div>

    </div>
    <div style="min-height: 50px;"></div>
    <div class="img-container round" style="width: 100px; height: 100px;">
      <img src="https://via.placeholder.com/100x100" alt="">
    </div>

  <button class="btn">
    Basic button
  </button>
  <button class="btn gray pill">
    Gray pills like button
  </button>
  <button class="btn big hollow red radius">
    Big hollow round button
  </button>
  <button class="btn black small">
    Small black button
  </button>
  </div>



</template>
<script>
    export default {
      data () {}
    }
</script>
<style lang="scss">
  @import "../scss/ZensUI.pc";

  html {
    background-color: #fff;
  }

  .all-container {
    padding: 50px;
  }

  .button-list button {
    width: 150px;
    margin: 5px 0;
  }

  .test-container {
    div {
      border: 1px solid gray;
    }
  }
</style>
