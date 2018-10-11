<p align="center">
  <a href="https://github.com/ZensFE/ZensUI">
    <img src="http://cdn.zens.asia/cms/img/1537356182e28014bc.png" alt="Bootstrap logo" width=200 height=200>
  </a>
  <p align="center">
    <a href="https://npmcharts.com/compare/zens-ui?minimal=true"><img src="https://img.shields.io/npm/dm/zens-ui.svg" alt="Downloads"></a>
    <a href="https://travis-ci.com/ZensFE/ZensUI"><img src="https://api.travis-ci.com/ZensFE/ZensUI.svg?branch=master" alt="Travis CI"></a>
    <a href="https://www.npmjs.com/package/zens-ui"><img src="https://img.shields.io/npm/v/zens-ui.svg" alt="Version"></a>
    <a href="https://www.npmjs.com/package/zens-ui"><img src="https://img.shields.io/npm/l/zens-ui.svg" alt="License"></a>
  </p>
</p>

[详细介绍](/docs/intro/introduction.md) | [文档](#)  

## ZensUI
>本框架海量参考了[CMUI](https://github.com/tgoufe/CyanMapleDesign)的代码，向CMUI的开发者致敬

`ZensUI`为前端开发者提供了一个易上手的、语义化的、高兼容性的前端UI框架。致力于帮助开发者可以快速构建自己的web应用。同时`ZensUI`也是跨平台的，目前支持：

支持的平台有：
 * 移动端web
 * PC端web
 * 微信小程序


## 快速上手
安装
```bash
npm install --save-dev zens-ui
```

引入scss样式
```javascript
import 'zens-ui/scss/ZensUI.scss'
```

## 使用说明

### 基础示例

如果你想创建一个**红色的**、**圆角** **按钮**，你可以像下面这样写代码：
```html
<button class="btn red radius">my button</button>
```
它会被渲染成下面的样子：
<div>
    <img src="http://cdn.zens.asia/cms/img/153924359633b20949.png" alt="">
</div>

就像你看到一样，其中`.btn`是来描述当前是一个什么元素，而`.red`和`.radius`作为"修饰符"，来描述当前元素长什么样子。

更多的按钮用法：
<div>
    <img src="http://cdn.zens.asia/cms/img/153924951268d8a270.png" alt="">
</div>

```html
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
```

### 其他示例
`Zens UI`封装了几个`container`类，他们是为了快速实现布局而设计的。
 - `img-container`:图像容器
 - `flex-container`：flex布局容器
 - `flex-row-container`：flex布局容器（纵向排列）
 
 `img-container`的用法如下：
 ```html
 <div class="img-container round" style="width: 100px; height: 100px;">
   <img src="https://via.placeholder.com/100x100" alt="">
 </div>
 ```
它会被渲染成下面的样子：
<div>
    <img src="http://cdn.zens.asia/cms/img/1539248296095ca1c6.png" alt="">
</div>

## npm包中的目录结构
其中`ZensUI.css`用于通用的web开发，而`ZensUI.mp.css`用于微信小程序的开发
```
ZensUI/
    ├─ dist/                                           
    │     └── css/                      
    │         ├─ZensUI.css 
    │         ├─ZensUI.css.map
    │         ├─ZensUI.min.css
    │         ├─ZensUI.min.css.map 
    │         ├─ZensUI.mp.css
    │         ├─ZensUI.mp.css.map
    │         ├─ZensUI.mp.min.css
    │         └─ZensUI.mp.min.css.map    
    └─ scss/ 
       └─ZensUI.scss  
```

## License
Everything is [MIT](https://en.wikipedia.org/wiki/MIT_License)
