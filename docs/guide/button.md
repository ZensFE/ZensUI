## 按钮
通过向标签内追加类名——`.btn`将元素修改为按钮样式

### 颜色
当元素已经有了`.btn`类之后，再追加颜色的类名（如：.red .success）就可以修改按钮颜色了。

```html
<button class="btn red">红色</button>
```

```html
/*vue*/
<template>
  <div class="flex-container left demo-container">
    <button class="btn">主色</button>
    <div class="btn red">red</div>
    <p class="btn gray">gray</p>
    <button class="btn blue">blue</button>
 </div>
</template>

<script>
    export default {
        
    }
</script>
<style scoped>
  .button.btn, div.btn , p.btn {
    margin: auto 10px;
  }
</style>
```

[可以选择的颜色](/customization/configuration?id=颜色相关)

[还可以追加颜色](/customization/configuration?id=颜色相关)

### 大小
`ZensUI`预设了三种尺寸的按钮，分别为`.small`, `.base`, `.big`

```html
/*vue*/
<template>
  <div class="flex-container left">
    <button class="btn small">small</button>
    <button class="btn base">base</button>
    <button class="btn big">big</button>
 </div>
</template>

<script>
    export default {
        
    }
</script>
<style scoped>
  button.btn, div.btn , p.btn {
    margin: auto 10px;
  }
</style>

```
您也可以[自定义按钮尺寸](/customization/configuration?id=颜色相关)

### 轮廓
- 通过`.radius`为按钮追加`圆角`

```html
/*vue*/
<template>
  <div class="flex-container left">
    <button class="btn radius">圆角按钮</button>
 </div>
</template>

<script>
    export default {
        
    }
</script>
```

- 通过`.pill`修改按钮为`胶囊状`

```html
/*vue*/
<template>
  <div class="flex-container left">
    <button class="btn pill">胶囊状按钮</button>
 </div>
</template>

<script>
    export default {
        
    }
</script>
```

- 通过`.hollow`修改按钮为`镂空`的样子，**注意需要同时指定`颜色`**

```html
/*vue*/
<template>
  <div class="flex-container left">
    <button class="btn hollow red">镂空状按钮</button>
 </div>
</template>

<script>
    export default {
        
    }
</script>
```
- 可以通过以上三种来进行轮廓样式的组合

```html
/*vue*/
<template>
  <div class="flex-container left">
    <button class="btn hollow blue pill">胶囊+镂空</button>
    <button class="btn radius hollow gray">胶囊+圆角</button>
 </div>
</template>

<script>
    export default {
        
    }
</script>
```

### 按钮组
通过对按钮的容器追加`.btn-group`类，使得多个按钮有成组的样式

```html
/*vue*/
<template>
    <div>
        <div class="btn-group">
          <button class="btn blue pill">左</button>
          <button class="btn red pill">中</button>
          <button class="btn orange pill">右</button>
        </div>
        <hr>
        <div class="btn-group">
          <button class="btn blue ">左</button>
          <button class="btn red">中</button>
          <button class="btn orange pill">右</button>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
  .btn-group>button {
    margin: 0;
  }
</style>
```

