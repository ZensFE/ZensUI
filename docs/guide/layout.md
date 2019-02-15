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

#### 绝对定位（position: absolute）
`绝对定位(absolute)`中还封装了几种常用的布局方式。
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

- 固定在指定方向并填充

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
除此上面四种之外，还有填充容器——`.abs-full`

#### 绝对定位（position: fixed）
`绝对定位（fixed）`的语法上面`.abs-#{position}`是一致的，语法如下：

```scss
.fixed-#{position}
```

如： `.fixed-left`, `.fixed-right`, `.fixed-top`, `.fixed-bottom`, `.fixed-center`, `.fixed-full`

#### overflow

```html
<!-- 以下两种写法等价 -->
<div class="overflow-h"></div>
<div style="overflow: hidden;"></div>

<!-- 以下两种写法等价 -->
<div class="overflow-xh"></div>
<div style="overflow-x: hidden;"></div>

<!-- 以下两种写法等价 -->
<div class="overflow-yh"></div>
<div style="overflow-y: hidden;"></div>

<!-- 以下两种写法等价 -->
<div class="overflow-i"></div>
<div style="overflow: initial;"></div>

```

#### display

```html
<!-- 以下两种写法等价 -->
<div class="dis-b"></div>
<div style="display: block;"></div>

<!-- 以下两种写法等价 -->
<div class="dis-i"></div>
<div style="display: inline-block;"></div>

<!-- 以下两种写法等价 -->
<div class="dis-n"></div>
<div style="display: none;"></div>

```

#### 弹性布局（flex）
`Flex`是`Flexible Box`的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。
详细的说明可以看阮一峰的文章——[《Flex 布局教程：语法篇》](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

要想将一个容器变为弹性布局，可以通过向容器追加class`.flex-container`的方式。

下面例子类似于[《Flex 布局教程：实例篇》](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)中提到的"骰子"

- `flex-container`默认情况如下

```html
/*vue*/
<template>
  <div class="pos-r flex-demo-container">
    <div class=" flex-container">
      <div class="inner"></div>
    </div>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
  .flex-demo-container>div {
    background-color: #ebebeb;
    padding: 10px;
    border-radius: 5px;
    margin: 5px;
    width: 100px; 
    height: 100px;
  }
  .inner {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #333;
  }
</style>
```

- 更多的布局示例

##### 单项目

```html
/*vue*/
<template>
  <div class="pos-r flex-demo-container">
  
    <span>.flex-container .top .left</span>
    <div class=" flex-container top left">
      <div class="inner"></div>
    </div>
    
    <span>.flex-container .top .center</span>
    <div class=" flex-container top center">
      <div class="inner"></div>
    </div>
    
    <span>.flex-container .top .right</span>
    <div class=" flex-container top right">
      <div class="inner"></div>
    </div>
    
    <span>.flex-container .left</span>
    <div class=" flex-container left">
      <div class="inner"></div>
    </div>
    
    <span>.flex-container .center</span>
    <div class=" flex-container center">
      <div class="inner"></div>
    </div>
    
    <span>.flex-container .right</span>
    <div class=" flex-container right">
      <div class="inner"></div>
    </div>
    
    <span>.flex-container .left .bottom</span>
    <div class=" flex-container bottom left">
      <div class="inner"></div>
    </div>
    
    <span>.flex-container .center .bottom</span>
    <div class=" flex-container bottom center">
      <div class="inner"></div>
    </div>
    
    <span>.flex-container .right .bottom</span>
    <div class=" flex-container bottom right">
      <div class="inner"></div>
    </div>
  </div>
</template>

<script>
    export default {
        
    }
</script>
```

##### 双项目

```html
/*vue*/
<template>
  <div class="pos-r flex-demo-container">
     <h3>横向排列</h3>
    <span> 默认情况 .flex-container</span>
    <div class=" flex-container">
      <div class="inner"></div>
      <div class="inner"></div>
    </div>
    
    <span>.flex-container .top</span>
    <div class=" flex-container top">
      <div class="inner"></div>
      <div class="inner"></div>
    </div>
    
    <span>.flex-container .bottom</span>
    <div class=" flex-container bottom">
      <div class="inner"></div>
      <div class="inner"></div>
    </div>
   <hr>
   <h3>纵向排列</h3>
    <span>.flex-container-col .left</span>
    <div class="flex-container-col left">
      <div class="inner"></div>
      <div class="inner"></div>
    </div>
       
    <span>.flex-container-col .right</span>
    <div class="flex-container-col right">
      <div class="inner"></div>
      <div class="inner"></div>
    </div>
       
    <span>.flex-container-col </span>
    <div class="flex-container-col ">
      <div class="inner"></div>
      <div class="inner"></div>
    </div>   
  </div>
</template>

<script>
    export default {
        
    }
</script>
```




