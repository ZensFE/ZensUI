
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

[[中文版介绍](/README.chs.md)]

## What is Zens UI
>This UI frame is inspired by [CMUI](https://github.com/tgoufe/CyanMapleDesign).

`Zens UI` provides a handy, semantic, and highly compatible UI framework. Committed to helping developers build their web apps quickly. At the same time `ZensUI` is also cross-platform

platforms supported:
 * mobile web
 * PC web
 * [Weixin Mini Program](https://mp.weixin.qq.com/cgi-bin/wx)


## Quick Start
Install
```bash
npm install --save-dev zens-ui
```

import css file
```scss
@import '~zens-ui/scss/ZensUI.scss'
```

## Usage
If you need a red rounded button in document, you just need write css style code like below
```html
<button class="btn red radius">my button</button>
```
  <div>
    <link rel="stylesheet" href="https://unpkg.com/zens-ui/dist/css/ZensUI.min.css">
    <button class="btn red radius">my button</button>
  </div>

## npm package content
In npm package, `ZensUI.css` is designed for common web developers, and `ZensUI.mp.css` is designed for weixin mini program developers 
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
