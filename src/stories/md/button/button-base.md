
<font color="#020202" size=4 face="微软雅黑">按钮组件</font>
====

>:smile: 基础用法

```html
<cu-button type="info" plain hairline @click="btnClick">
  细边框按钮
</cu-button>
```

```js
 export default {
  methods{
    btnClick(){
      console.info('点击按钮');
    }
  },
};
```

<br/>
   
>:point_right: API

##### :one:属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
type|类型可选值为 primary,info,warning,danger|string|default
size|尺寸，可选值为 large small mini|string|normal
text|按钮文字|string|-
color|按钮颜色，支持传入 linear-gradient 渐变色|string|-
icon|左侧图标名称或图片链接|string|-
icon-prefix v2.6.0|图标类名前缀，同 Icon 组件的 class-prefix 属性|string|van-icon
icon-position v2.10.7|图标展示位置，可选值为 right|string|left
tag|按钮根节点的 HTML 标签|string|button
native-type|原生 button 标签的 type 属性|string|-
block|是否为块级元素|boolean|false
plain|是否为朴素按钮|boolean|false
square|是否为方形按钮|boolean|false
round|是否为圆形按钮|boolean|false
disabled|是否禁用按钮|boolean|false
hairline|是否使用 0.5px 边框|boolean|false
loading|是否显示为加载状态|boolean|false
loading-text|加载状态提示文字|string|-
loading-type|加载图标类型，可选值为 spinner|string|circular
loading-size|加载图标大小|string|20px
url|点击后跳转的链接地址|string|-
to|点击后跳转的目标路由对象，同 vue-router 的 to 属性|string | object|-
replace|是否在跳转时替换当前页面历史|boolean|false

##### :two:事件

| 事件名 | 说明 | 回调参数 |
|---|---|---|
click|点击按钮，且按钮状态不为加载或禁用时触发|event: Event
touchstart|开始触摸按钮时触发|event: TouchEvent
