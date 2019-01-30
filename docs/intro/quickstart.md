## 引入

#### npm
安装
```bash
npm install --save zens-ui
```

引入
```javascript
import 'zens-ui/dist/css/ZensUI.css'
```

#### CDN

引入flexible.js
```html
<script src="https://zens-pic.oss-cn-shenzhen.aliyuncs.com/static/js/flexible.js"></script>
```
引入css
```html
<link rel="stylesheet" href="//unpkg.com/zens-ui/dist/css/ZensUI.css">
```

## 用法

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
  <button class="btn">Basic button</button>
  <button class="btn gray pill">Gray pills like button</button>
  <button class="btn big hollow red radius">Big hollow round button</button>
  <button class="btn black small">Small black button</button>
```