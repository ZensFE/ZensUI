
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
            <button class="btn radius" >主色按钮</button>
            <button class="btn radius primary reverse">主色翻转按钮</button>
            <button class="btn radius primary hollow">主色镂空按钮</button>
            <button class="btn radius red hollow">红色镂空按钮</button>
            <button class="btn red radius">红色按钮</button>
            <button class="btn red radius reverse">红色翻转按钮</button>
            <button class="btn small radius">小按钮</button>
            <button class="btn big radius" :class="test">大按钮 </button>
        </div>
    </div>

</template>
<script>
    import Vue from 'vue'
    import '../scss/ZensUI.scss'
    export default {
      data(){
        return {
          test: '参与中'
        }
      },
      mounted(){
      }
    }
</script>
<style lang="scss">
    @import "../scss/ZensUI";
    html {
        background-color: $light;
    }
    .button-list button{
        width: 80%;
        margin: 5px 0;
    }
</style>
