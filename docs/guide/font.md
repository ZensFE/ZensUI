## 文字

### 颜色
通过`.text-#{color}`可以修改文字颜色，如：`.text-red`,`.text-blue`

```html
/*vue*/
<template>
  <div>
    <span class="text-black">黑色文字</span>
    <span class="text-red">红色文字</span>
    <span class="text-gray">灰色文字</span>
  </div>
</template>

<script>
    export default {
        
    }
</script>
```

### 大小
通过`.fs-#{font-size}`可以修改文字大小，如：`.fs-14`,`fs-20`等。

PS：小程序端会自动变成对应的`rpx`单位，移动端会自动缩小为类名尺寸的一半。

```html
/*vue*/
<template>
  <div>
    <span class="text-dark fs-12">12px</span>
    <span class="text-dark fs-16">16px</span>
    <span class="text-dark fs-20">20px</span>
    <span class="text-dark fs-24">24px</span>
    <span class="text-dark fs-28">28px</span>
  </div>
</template>

<script>
    export default {
        
    }
</script>
```

### 粗细
可以通过`.fw-#{weight}`来修改文字的粗细，`ZensUI`预置了5个字体粗细等级，
由细到粗分别为`lighter`、`light`、`normal`、`bold`、`bolder`,默认为`normal`,
具体用法如：`.fs-light`、`.fs-bolder`。


```html
/*vue*/
<template>
  <div class="text-dark fs-20">
    <p class="fw-lighter">lighter</p>
    <p class="fw-light">light</p>
    <p class="fw-normal">normal</p>
    <p class="fw-bold">bold</p>
    <p class="fw-bolder">bolder</p>
  </div>
</template>

<script>
    export default {
        
    }
</script>
```

### 位置及特殊样式
通过`.text-#{style-name}`来调整文字的位置及样式，如：`.text-left`（文字居左）、 `.text-delete`（添加删除线）

```html
/*vue*/
<template>
  <div class="text-dark fs-16 style">
    <p class="text-left">text-left</p>
    <p class="text-center">text-center</p>
    <p class="text-right">text-right</p>
    <p class="text-justify">text-justify ： 缩进自适应</p>
    <p class="text-delete">text-delete：追加中间删除线</p>
    <p class="text-indent ">text-indent ： 缩进两个文字宽度</p>
    <p class="text-nowrap ">text-nowrap ： 取消自动折行。例：Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
    <p class="text-lowercase">text-lowercase: 强制将所有字母转换成小写。例：Lorem ipsum dolor sit amet</p>
    <p class="text-uppercase">text-uppercase: 强制将所有字母转换成大写。例：Lorem ipsum dolor sit amet</p>
    <p class="text-capitalize">text-capitalize: 强制将所有单词的首字母转成大写。例：Lorem ipsum dolor sit amet</p>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
  div.style>p {
    min-height: 2em;
    border: 1px solid #c8c8c8;
  }
</style>
```

### 行数
- 通过`.text-limit#{layout-number}`设置文字行数最大值，文字数量超出行数最大限制时，用"..."代替。如：`.text-limit1`、`.text-limit2`

```html
/*vue*/
<template>
  <div class="text-dark fs-20">
    <p class="text-limit1">text-limit1 可以将文字行数限制在一行，多处部分用'...'代替。 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
    <hr>
    <p class="text-limit2">text-limit2 可以将文字行数限制在两行，多处部分用'...'代替。 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
 </div>
</template>

<script>
    export default {
        
    }
</script>
```

- 通过`.text-fixed#{layout-number}`设置文字行数固定值，文字数量小于行数固定值时，仍然占用固定行数的空间，大于该固定值时，样式同`.text-limit#{layout-number}`一致。

```html
/*vue*/
<template>
  <div class="text-dark fs-20">
    <p class="text-fixed2">text-fixed2 可以将文字行数固定为两行，多处部分用'...'代替。 </p>
    <hr>
    <p class="text-fixed2">text-fixed2 可以将文字行数固定为两行，多处部分用'...'代替。 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
 </div>
</template>

<script>
    export default {
        
    }
</script>
```


