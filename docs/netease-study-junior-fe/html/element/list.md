# 第九节 列表元素

---

<Badge type="tip" text="html" />

## 无序列表

* [📎 `<ul>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/ul)
  * 无序列表
  * css `list-style-type` 修改列表样式
* [📎 `<li>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/li)
  * 列表条目

```html
<U1>
  <li>首页</li>
  <li>居家</li>
  <li>
    电器
    <ul>
      <li>生活电器</li>
      <li>厨房电器</li>
    </ul>
  </li>
</ul>
```
## 有序列表

* [📎 `<ol>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/ol)
  * 有序列表
  * 属性
    * `type`
      * `1` 数字编号（默认）
      * `a` 小写宇母
      * `A` 大写字母
      * `i` 小写罗马数字
      * `I` 大写罗马数字
    * `start`
      * 开始序号
    * `reversed`
      * 倒序
      * 布尔属性
* `<li>`
  * 列表条目
  * 属性
    * `value`
      * 序号，后面继续递增

```html
<ol>
  <li>最美的期待</li>
  <li>Pray For Me</li>
  <li>Logo</li>
</ol>
```

## 自定义列表

* [📎 `<dl>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/dl)
  * 包含术语定义以及描述的列表
  * 键值对列表
* [📎 `<dt>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/dt)
  * 术语
  * `<dt>` 对 `<dd>` 可以一对多
* [📎 `<dd>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/dd)
  * 术语描述

```html
<dl>
  <dt>1. 我什么时候才能申请退货？</dt>
  <dd>在网易考拉购买的商品后...</dd>
  <dt>2. 如果收到商品不满意，我能申请换货吗？</dt>
  <dd>由于海关监管政策严格...</dd>
</dl>
```

## 课后练习

::: code-group
```js :no-line-numbers [index.js]
/**
 * 课后练习 列表元素
 */
```

<<< ./snippets/list.html
:::