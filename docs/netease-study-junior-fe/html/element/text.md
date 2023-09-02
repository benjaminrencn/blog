# 第八节 文本元素

---

<Badge type="tip" text="html" />

## 文本内容

### [📎 `<p>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/p)

* 段落

```html
<p>段落</p>
```

### [📎 `<pre>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/pre)

* 预定义格式文本
* 按照原文件中格式的显示
* 空白符(比如空格和换行符)都会显示出来

```html
<pre>
  body {
    color: red;
  }
</pre>
```

### [📎 `<blockquote>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/blockquote)

* 引用
* `cite` 属性表示来源
  * 使用 `cite` 属性不会在页面显示
  * 使用 `<cite>` 元素会在页面显示

```html
<div>
  什么是HTML？维基百科上是这么定义的
  <blockquote cite="https://zh.wikipedia.org/wiki/HTML">
    超文本标记语言（英语：HyperText Markup Language， 简称：HTML）是一种用于创建网页的标准标记语言。HTML是一种基础技术...
  </blockquote>
</div>
```

## 文本语义

### [📎 `<em>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/em)

* 强调
* 默认斜体
* 可嵌套

```html
<p>猫是一种<em>可爱</em>的动物</p>
```

### [📎 `<strong>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/strong)

* 重要、严重、紧急
* 标题、警告、注意事项、指示性内容
* 默认粗体
* 可嵌套

### [📎 `<span>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/span)

* 无任何特殊语义
* 行内容器

```html
<div>售价<Span>¥109</span></div>
```

### [📎 `<br>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/br)

* 换行

```html
<div>白日依山尽，黄河人海流。<br>欲穷千里目，更上一层楼。</div>
```

### [📎 `<cite>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/cite)

* 引用出处

### [📎 `<q>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/q)

* 短的行内引用内容
* 否则用 `<blockquote>`

```html
</div>
  鲁迅在<cite>故乡</cite>中写到<q>地上本来没有路，走得人多了，便有了路</q>
</div>
```

### [📎 `<code>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/code)

* 代码
* 配合 `<pre>` 使用，保留格式

```html
<pre>
  <code>
    function say() {
      alert ('hello world');
    }
  </code>
</pre>
```