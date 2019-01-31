## 可配置的SCSS参数

### 颜色相关

#### 基础色

```html
/*vue*/
<template>
  <div class="flex-container text-white border ">
    <div class="flex2 bg-primary padding30">primary
    </div>
    <div class="flex1 bg-orange padding30">orange</div>
    <div class="flex1 bg-yellow padding30">yellow</div>
    <div class="flex1 bg-green padding30">green</div>
    <div class="flex1 bg-blue padding30">blue</div>
    <div class="flex1 bg-purple padding30">purple</div>
 </div>
</template>

<script>
    export default {
        
    }
</script>

```

#### 灰度色 

gray-list
```html
/*vue*/
<template>
  <div class="flex-container text-center text-white">
    <div class="flex1 bg-black padding30">black <p class="fs-24">#000000</p></div>
    <div class="flex1 bg-darker padding30">darker</div>
    <div class="flex1 bg-dark padding30">dark</div>
    <div class="flex1 bg-gray padding30">gray</div>
    <div class="flex1 bg-light padding30">light</div>
    <div class="flex2 bg-lighter padding30">lighter</div>
 </div>
</template>

<script>
    export default {
        
    }
</script>

```
