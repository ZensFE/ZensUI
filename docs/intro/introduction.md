## Introduction

### 是什么？
`Zens UI`是一款纯CSS的前端框架，他旨在帮前端开发写成高效、可维护的样式代码（html+css）。

### 为什么？

#### 基于设计语言
`Zens UI`的底层思想是基于`设计语言`这个基本概念。

当我们用自然语言去描述一个页面或页面元素时，我们会说 "一个圆角的红色按钮"，对于一个有设计语言的Web应用来说，当我们说出上面这段话时，不管那个按钮在什么页面，他们都应该长成一个样子。

所以我们希望在前端开发过程中，描述出元素的特征或页面的结构时，代码同时就一定写出来了。比如下面的样子
```html
<!--这是一个按钮的例子-->
<button class="btn red radius"></button>
```
我们可以从上面的例子可以看出，`.btn`确定了元素的基本性质，然后`.red`和`.radius`作为`btn`的形容词，逐渐地细化按钮的属性。

#### 全环境的支持
我们除了支持所有的web和native环境外，我还针对小程序进行了充分的优化和适配。做到尽可能多的环境可以流畅的运行。


### 快速上手

#### npm
推荐使用npm引入的方式，它能更好地和webpack打包工具配合使用。

* 步骤1 npm安装
```bash
npm i zens-ui -S
```

* 步骤2 加载css文件
```scss
/*在scss文件中引入资源*/
@import "~zens-ui/dist/css/ZensUI.css"
```

#### CDN
可以通过[unpkg.com/zens-ui](https://unpkg.com/zens-ui/dist/css/ZensUI.min.css)来获取到最新版本资源文件，参考下面代码中的css引入方式。

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/zens-ui/dist/css/ZensUI.min.css">

```
