## 下载

### 通用下载
[下载地址](https://unpkg.com/zens-ui/dist/css/ZensUI.css)
#### 包中的目录结构：
其中`ZensUI.css`用于通用的web开发，而`ZensUI.mp.css`用于微信小程序的开发
```
ZensUI/                                        
    ├─ css/                      
    │  ├─ZensUI.css 
    │  ├─ZensUI.min.css
    │  ├─ZensUI.mp.css
    │  └─ZensUI.mp.min.css
    │
    ├─ scss/ 
    │  ├─ZensUI.scss  
    │  ├─ZensUI.mp.scss 
    │  └─_var.scss
    │
    └─ js/ 
        └─flexible.js   
```

### 微信小程序
由于微信小程序提供了独有的`rpx`单位，解决了自适应问题，所以不再需要配合`flexible.js`来实现屏幕自适应，单独引入`.css`文件就好。

[小程序端地址](https://unpkg.com/zens-ui/dist/css/ZensUI.mp.css)