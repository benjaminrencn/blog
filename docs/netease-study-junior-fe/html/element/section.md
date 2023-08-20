# 第六节 内容分区元素

---

<Badge type="tip" text="html" />

## `<article>`

* 文档、页面、应用或网站中可独立分配或可复用的结构
* 场景
  * **文章**(博客或者报刊)
  * 论坛怗子
  * 用户评论
  * 独立的插件
  * 任何独立的内容
* 通常有标题(`<header>`)、脚注(`<footer>`)
* 可嵌套

```html
<article>
  <header><h2>To be wild疯狂旅行团，全球四大目的地，免费旅行由你决定。</h2></header>
  <div>...</div>
<article>
```

## `<section>`

* 对网站或者应用程序中页面上的**内容进行分块**
  * 有主题的内容
  * 一般都会有标题
* 场景
  * 文章的**章节**
  * **Tab的内容**

```html
<article>
  <header><h1>前端基础课程</h1></header>
  <section>
    <h2>前端入门</h2>
    <div>web前端...</div>
  </section>
  <section>
    <h2>HTML</h2>
    <div>HTML是...</div>
  </section>
</article>
```

## `<div>`

* **无任何语义**
* 场景
  * 内容容器
  * 样式

```html
<article>
  <header><h1>前端基础课程</h1></header>
  <section>
    ＜h2>前端人门</h2>
    <div class="intro">
      <p>前端是...</p>
      <p>入门课程中...</p>
    </div>
  </section>
</article>
```

## 区别

* `<div>` **无任何语义**
* `<section>` **主题性**的内容
* `<article>` 完整的**独立**的内容

## `<nav>`

* 含有多个超链接的区域
  * 其他页面
  * 页面内部其他部分
  * 一个页面可以有多个 `<nav>`
* 场景
  * 传统导航
  * 侧边栏导航
  * 页内导航

```html
<nav>
  <ul><li><a href="/zh-CN/docs/Web">技术</a></li></ul>
  <ul><li><a href="/zh-CN/docs/Learn">参考和指引</a></li></ul>
  <ul><li><a href="/zh-CN/docs/MDN/Feedback">反馈</a></li></ul>
</nav>
```

## `<aside>`

* 表示一个和其余页面内容几乎无关的部分
* 场景
  * 包含在 `<article>` 元素中作为主要内容的附属信息
    * 参考资料
    * 名称解释
    * 相关引用
    * 个人资料
  * `<article>` 元素之外，页面或者站点全局的附属信息
    * 侧边栏
    * 广告

```html
<section>
  <h3>性能面板</h3>
  <aside>Note: 在Chrome 57 之后时间线面板更名为性能面板.</aside>
  <p>使用...</p>
</section>
```

## `<header>`

* 概括性内容
  * 可包含标题元素
  * 可包含其他元素，像logo、分节头部、搜索表单等

```html
<header id="main-header">
  <a href="/zh-CN/" class="logo">MDN Web 文档</a>
  <div id="nav-sec">登录</div>
  <nav id="main-nav" class="nav-main">...</nav>
</header>
```

## `<h1>`-`<h6>`

* 描述该节的主题
* 重要程度 `<h1>`>`<h2>`>`<h3>`>`<h4>`>`<h5>`>`<h6>`

## `<footer>`

* 章节内容或者根节点元素的页脚
* 常用场景
  * 文章作者
  * 相关阅读链接
  * 版权

```html
<footer id="nav-footer" class="nav-footer">
  <a href="/zh-CN/" class="nav-footer-logo">MDN web 文档</a>
  ...
</footer>
```