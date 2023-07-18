# 第二节 文档标题

---

<Badge type="tip" text="html" />

## 应用

* 标签栏
  <img src="./assets/title-tab.png" width="320" alt="文档标题 标签栏">
* 历史记录
  <img src="./assets/title-history.png" alt="文档标题 历史记录">
* 浏览器书签
  <img src="./assets/title-bookmarks.png" width="120" alt="文档标题 书签">
  * 名称默认是页面的标题
* 搜索引擎结果
  <img src="./assets/title-search.png" width="420" alt="文档标题 搜索引擎结果">
  

## 文档标题

* `<title>`
* 建议一个文档指定一个标题
* 元素内容当文本处理
* `document.title`
  * 通过脚本获取、设置

## 实例

### 进度

::: code-group
```js :no-line-numbers [index.js]
/**
 * 文档标题进度实例
 */
```

<<< ./snippets/title-progress.html {11,14}
:::

<img src="assets/title-progress-1.png" width="220" alt="文档标题 进度实例">
<img src="assets/title-progress-2.png" width="220" alt="文档标题 进度实例">

### 消息

* 滚动效果

::: code-group
```js :no-line-numbers [index.js]
/**
 * 文档标题消息实例
 */
```

<<< ./snippets/title-notice.html {12,15}
:::

<img src="assets/title-notice-1.png" width="220" alt="文档标题 消息实例">
<img src="assets/title-notice-2.png" width="220" alt="文档标题 消息实例">