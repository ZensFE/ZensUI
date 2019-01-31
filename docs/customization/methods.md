## 自定义样式
ZensUI默认提供了一套基础样式，可以满足大多数人的使用。但是为了满足个性化需求，ZensUI提供了三种不同方式的定制化方案。

### 主题替换
主题还在开发中~~~~~

### 项目中使用SCSS进行变量替换
ZensUI使用SCSS编写的，如果你的项目同样使用SCSS进行开发的话，可以直接在引用ZensUI的SCSS文件，通过变量覆盖的方式来进行个性化定制。
```scss
// 改变主题色值定义
$primary: #B89267;
$red:     #E23939;
$blue:    #007BFF;


// 改变灰度定义
$darker: #333;
$dark: #666;
$gray: #999;
$light: #B3B3B3;
$lighter: #EBEBEB;

// 灰度列表覆盖
$gray-list: (
        'darker':     $darker,
        'dark':       $dark,
        'gray':       $gray,
        'light':      $light,
        'lighter':    $lighter
);

// 扩展新的颜色
// 追加一个枣红色
$maroon: #822723;
$colorList: ( 'maroon': $maroon );

@import "~zens-ui/scss/ZensUI.mp";
```


### 使用在线工具制作
在线工具还在开发中~~~~~