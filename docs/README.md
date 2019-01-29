## What is Zens UI
`Zens UI` provides a handy, semantic, and highly compatible UI framework. Committed to helping developers build their web apps quickly. At the same time `ZensUI` is also cross-platform

platforms supported:
 * mobile web
 * PC web
 * [Weixin Mini Program](https://mp.weixin.qq.com/cgi-bin/wx)
 * platforms in testing progress ——— Weex、Flutter、ReactNative

## Quick Start

### Install

#### npm
```bash
npm install --save-dev zens-ui
```
import css file
```scss
@import '~zens-ui/scss/ZensUI.scss'
```

#### CDN
```html
<link rel="stylesheet" href="//unpkg.com/zens-ui/dist/css/ZensUI.mp.css">
```


## Usage

### Basic Example

If you need a red rounded button in document, you just need write css style code like below
```html
<button class="btn red radius">my button</button>
```
It will be rendered like below:
<div>
    <img src="http://cdn.zens.asia/cms/img/153924359633b20949.png" alt="">
</div>

As you see, `.btn` described what element it will be, `.red` and `.radius` are modifiers, they described what this element will look like.

**More button's usages**：
<div>
    <img src="http://cdn.zens.asia/cms/img/153924951268d8a270.png" alt="">
</div>

```html
  <button class="btn">Basic button</button>
  <button class="btn gray pill">Gray pills like button</button>
  <button class="btn big hollow red radius">Big hollow round button</button>
  <button class="btn black small">Small black button</button>
```

### Further Example

`Zens UI` has several containers, they are designed to quickly implement layout.

 - `img-container`:image container
 - `flex-container`：flex layout container
 - `flex-row-container`：flex layout container

`img-container`'s usage is like below:

```html
<div class="img-container round" style="width: 100px; height: 100px;">
  <img src="https://via.placeholder.com/100x100" alt="">
</div>
```
It will be rendered like below:
<div>
    <img src="http://cdn.zens.asia/cms/img/1539248296095ca1c6.png" alt="">
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
