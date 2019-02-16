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
`绝对定位（fixed）`的语法与上面`.abs-#{position}`是一致的，语法如下：

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
    <h4>横向排列</h4>
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
   <h4>纵向排列</h4>
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

#### 其他常用弹性布局

- `.vfull`使容器内的元素在垂直方向铺满。

```html
/*vue*/
<template>
  <div class="pos-r ">
    <div class="flex-container vfull bg-light padding10" style="height: 100px;">
      <div class="padding10 text-gray bg-lighter">最简单的网格布局</div>
      <div class="padding10 text-gray bg-lighter">最简单的网格布局</div>
    </div>  
  </div>
</template>

<script>
    export default {
        
    }
</script>
```

- `.hfull`使容器内的元素在水平方向铺满。

```html
/*vue*/
<template>
  <div class="pos-r ">
    <div class="flex-container hfull bg-light padding10" style="height: 100px;">
      <div class="padding10 text-gray bg-white border">最简单的网格布局</div>
      <div class="padding10 text-gray bg-white border">最简单的网格布局</div>
    </div>  
  </div>
</template>

<script>
    export default {
        
    }
</script>
```


#### 比例分配

可以通过`.flex#{grow}`来调整`flex-container`内部元素的显示比例，如`.flex1`代表容器剩余宽度进行等分后占用`1份`。
即该元素的CSS属性`flex`为`1`。

下面的例子中，整个容器的宽度除去`固定宽度`元素的宽度后，剩余宽度被其他元素`按比例`均分，共15份(1+2+3+4+5)，所以`.flex1`占用1份，`.flex2`占用2份，以此类推。

```html
/*vue*/
<template>
  <div class="pos-r">
    <div class=" flex-container vfull text-white text-center" style="height: 100px; width: 100%;">
      <div class="bg-black" style="width: 100px;">固定宽度</div>
      <div class="bg-darker flex1">flex1</div>
      <div class="bg-dark flex2">flex2</div>
      <div class="bg-gray flex3">flex3</div>
      <div class="bg-light flex4">flex4</div>
      <div class="bg-lighter flex5 text-gray">flex5</div>
    </div> 
  </div>
</template>

<script>
    export default {
        
    }
</script>
```

### 图片容器

可以图片容器上追加`.img-container`来控制内部图片的显示。

```html
/*vue*/
<template>
  <div class="pos-r">
    <h3>照片尺寸小于容器大小</h3>
    <h4>默认情况</h4>
    <div class="img-container bg-lighter" style="width: 200px; height: 200px;">
      <img src="https://zens-pic.oss-cn-shenzhen.aliyuncs.com/static/staff/img-demo2.jpeg" alt="">
    </div>
    
    <h4>照片铺满 .img-container .full</h4>
    <div class="img-container full bg-lighter" style="width: 200px; height: 200px;">
      <img src="https://zens-pic.oss-cn-shenzhen.aliyuncs.com/static/staff/img-demo2.jpeg" alt="">
    </div>
  </div>
</template>

<script>
    export default {
        
    }
</script>
```

- `.flex-x` ：保持原有比例，截取左右多余部分，纵向铺满

```html
/*vue*/
<template>
  <div class="pos-r box-container">
  <h5>左侧是默认情况，右侧使用`.flex-x`后</h5>
    <div class="img-container bg-lighter float-left" style="width: 200px; height: 200px;">
      <img src="https://zens-pic.oss-cn-shenzhen.aliyuncs.com/static/staff/img-demo3.jpeg" alt="">
    </div>
    <div class="img-container flex-x bg-lighter float-left clearfix marginl20" style="width: 200px; height: 200px;">
      <img src="https://zens-pic.oss-cn-shenzhen.aliyuncs.com/static/staff/img-demo3.jpeg" alt="">
    </div>
  </div>
</template>

<script>
    export default {
        
    }
</script>
```

- `.flex-y` ：保持原有比例，截取上下多余部分，横向铺满

```html
/*vue*/
<template>
  <div class="pos-r box-container">
    <h5>左侧是默认情况，右侧使用`.flex-y`后</h5>
    <div class="img-container bg-lighter clearfix float-left" style="width: 200px; height: 200px;">
      <img src="https://zens-pic.oss-cn-shenzhen.aliyuncs.com/static/staff/img-demo4.jpeg" alt="">
    </div>
    <div class="img-container flex-y bg-lighter clearfix float-left marginl20" style="width: 200px; height: 200px;">
      <img src="https://zens-pic.oss-cn-shenzhen.aliyuncs.com/static/staff/img-demo4.jpeg" alt="">
    </div>
  </div>
</template>

<script>
    export default {
        
    }
</script>
```

- 改变形状

```html
/*vue*/
<template>
  <div class="pos-r">
    <h4>圆形 .round</h4>
    <div class="img-container round" style="width: 100px; height: 100px;">
      <img src="https://zens-pic.oss-cn-shenzhen.aliyuncs.com/static/staff/img-demo2.jpeg" alt="">
    </div>
    <h4>圆角 .radius</h4>
    <div class="img-container radius" style="width: 100px; height: 100px;">
      <img src="https://zens-pic.oss-cn-shenzhen.aliyuncs.com/static/staff/img-demo2.jpeg" alt="">
    </div>
    <h4>边框 .border</h4>
     <div class="img-container border" style="width: 100px; height: 100px;">
      <img src="https://zens-pic.oss-cn-shenzhen.aliyuncs.com/static/staff/img-demo2.jpeg" alt="">
    </div>
  </div>
</template>

<script>
    export default {
        
    }
</script>
```

