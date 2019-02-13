## 布局
`ZensUI`对于常见的布局都做了相应的封装。

### 浮动(Float)

- 左浮动：`.float-left`
- 右浮动：`.float-right`
- 清除浮动：`.clearfix`

### 定位

```html
<!-- 以下两种写法等价 -->
<div class="pos-a"></div>
<div style="position: absolute;"></div>

<!-- 以下两种写法等价 -->
<div class="pos-r"></div>
<div style="position: relative;"></div>

<!-- 以下两种写法等价 -->
<div class="pos-f"></div>
<div style="position: fixed;"></div>


```

#### 绝对定位（absolute）
`绝对定位`中还封装了几种常用的布局方式。
- 水平居中： `.vcenter`
- 垂直居中： `.hcenter`
- 水平和垂直都居中： `.fullcenter`

```html
/*vue*/
<template>
  <div style="height: 300px;" class="pos-a-demo pos-r text-center text-white">
    <div class="hcenter bg-blue">
       .hcenter 水平居中
    </div>
    <div class="vcenter bg-blue">
      .vcenter 垂直居中
    </div>
    <div class="fullcenter bg-primary">
      .fullcenter
      全居中
    </div>
  </div>
</template>

<script>
    export default {
        
    }
</script>
<style scoped>
  div.pos-a-demo > div {
    width: 75px;
    height: 75px;
  }
</style> 
```

- 固定在指定方向

```html
/*vue*/
<template>
  <div style="height: 300px; width: 500px;" class="pos-r text-white">
    <div class="abs-top bg-red text-center padding10">
      .abs-top
    </div>
    <div class="abs-bottom bg-blue text-center padding10">
      .abs-bottom
    </div>
    <div class="abs-right bg-green padding10">
      .abs-right
    </div>
    <div class="abs-left bg-yellow padding10">
      .abs-left
    </div>
  </div>
</template>

<script>
    export default {
        
    }
</script>
```


