## 可配置的SCSS参数

### 颜色相关

#### 基础色

基础色已经存在的色值如下：
```html
/*vue*/
<template>
  <div class="flex-container text-white border ">
    <div class="flex2 bg-primary padding30">primary #b89267
    </div>
    <div class="flex1 bg-orange padding30">orange #fd7e14</div>
    <div class="flex1 bg-yellow padding30">yellow #ffc107</div>
    <div class="flex1 bg-green padding30">green #28a745</div>
    <div class="flex1 bg-blue padding30">blue #007bff</div>
    <div class="flex1 bg-purple padding30">purple #6f42c1</div>
  </div>
</template>

<script>
    export default {
        
    }
</script>

```

#### 灰度色 

gray-list: 通过配置`$gray-list`来对灰度进行调整，默认灰度值如下：
```html
/*vue*/
<template>
  <div class="flex-container text-center text-white">
    <div class="flex1 bg-black padding30">black #000</div>
    <div class="flex1 bg-darker padding30">darker #333</div>
    <div class="flex1 bg-dark padding30">dark #666</div>
    <div class="flex1 bg-gray padding30">gray #999</div>
    <div class="flex1 bg-light padding30">light #b3b3b3</div>
    <div class="flex2 bg-lighter padding30 text-gray">lighter #ebebeb</div>
 </div>
</template>

<script>
    export default {
        
    }
</script>
<style>
```
