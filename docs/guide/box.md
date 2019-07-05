## 盒子
`ZensUI`对于常见盒模型属性进行了封装。

### 内边距(`padding`)和外边距(`margin`)

#### 方向变量的抽象

- `上下左右`分别抽象成变量——`t`(top),`b`(bottom),`l`(left),`r`(right)；

- `水平方向`（horizon）抽象成变量——`h`

- `垂直方向`（vertical）抽象成变量——`v`

于是，对于内边距和外边距就可以使用如下的语法来修改元素的内外边距了:

`.padding#{direction}#{size}`和`.margin#{direction}#{size}`


示例代码：
注意： 在`微信小程序`中，单位会变成`rpx`
```html
<!-- 以下这两种写法等价 -->
<div class="padding20 margin30"></div>
<div style="padding: 20px; margin: 30px;"></div>

<!-- 以下这两种写法等价 -->
<div class="paddingt10 paddingl20 marginb30 marginr30"></div>
<div style="padding-top: 10px; padding-left: 20px; margin-bottom: 30px; margin-right: 30px;"></div>

<!-- 以下这三种写法等价 -->
<div class="paddingt20 paddingb20 marginl10 marginr10"></div>
<div class="paddingv20 marginh10"></div>
<div style="padding-top: 20px; padding-bottom: 20px; margin-left: 10px; margin-right: 10px;"></div>

```

#### 负的外边距
此外，外边距（`margin`）还支持负值，语法如下：

`.margin#{direction}-n#{size}`

示例代码：
```html
<!-- 以下两种写法等价 -->
<div class="marginl-n20 marginr-n20"></div>
<div style="margin-left: -20px; margin-right: -20px;"></div>
```
#### 尺寸
需要注意的是，变量`size`是包括0，10，20，30，40，50。此处可以定制化。

### 边框（`border`）
同内外边距的语法类似，边框(`border`)同样可以单独设置不同方向的边框。

语法如下：

`border#{direction}`

示例代码：

```html
/*vue*/
<template>
    <div class="flex-container left border-demo-container bg-purple padding10 text-center">
        <div class="border">.border</div>
        <div class="borderr">.borderr</div>
        <div class="borderh">.borderh</div>
        <div class="borderv">.borderv</div>
        <div class="border radius">.border .radius</div>
        <div class="bordern radius">.bordern .radius</div>
        <div class="border round">.border .round</div>
        <div class="bordern round">.bordern .round</div>
 </div>
</template>

<script>
    export default {
        
    }
</script>
<style scoped>
  .border-demo-container > div {
    width: 75px;
    height: 75px;
    margin-right: 20px;
    background-color: #00b3ee;
  }
</style>
```

需要注意的是，`.border`类的所有`border-style`,`border-width`,`border-color`是统一的，同样也是可以定制化的。

### 修改盒模型
`ZensUI`提供快速修改[盒模型](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)的类。
```
.b-box => box-sizing: border-box

.p-box => box-sizing: padding-box

.c-box => box-sizing: content-box

```
