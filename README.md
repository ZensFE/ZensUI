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

## ZensUI
>本框架海量参考了[CMUI](https://github.com/tgoufe/CyanMapleDesign)的代码，向CMUI的开发者致敬

`ZensUI`为前端开发者提供了一个易上手的、语义化的、高兼容性的前端UI框架。致力于帮助开发者可以快速构建自己的web应用。同时`ZensUI`也是跨平台的，目前支持：
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


## 开发脚本
执行以下脚本，将会启动一个基于vue开发的demo页面，开发者可以在`demo/app.vue`中进行`.scss`文件的调试。
```bash
npm run dev

```

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

