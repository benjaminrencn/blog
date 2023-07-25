# 第三节 元数据

---

<Badge type="tip" text="html" />

## [📎 `<meta>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta)

## 作用

* 描述文档元数据
  * 如文档字符编码、文档描述等

## 属性

* `charset`
  * 字符编码
  * 唯一
  * 推荐第一行
  * 推荐 UTF-8
    ```html
    <head>
      <meta charset="UTF-8">
    </head>
    ```
* `content`
  * 为 `name` 或 `http-equiv` 属性值的值，一同使用
* `name`
  * 值
  * `description` 描述文字，用于 SEO
  * `keywords` 描述关键字，`,`间隔，用于 SEO
    ```html
    <head>
      <meta name="keywords" content="网易云音乐，音乐，播放器，网易，下载，播放，DJ，免费，明星，精选，歌单，识别音乐，收藏，分享音乐，音乐互动，高音质，320K，音乐社交，官网，music.163.com">
      <meta name="description" content="网易云音乐是一款专注于发现与分享的音乐产品，依托专业音乐人、DJ、好友推荐及社交功能，为用户打造全新的音乐生活。">
    </head>
    ```
  * `viewport` 页面 `viewport`，用户缩放
    * 移动端
    * `content`
      * `width` `height` `initial-scale` `maximum-scale` `minimum-scale` `user-scalable`
        ```html
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        ```
  * `application-name` 如果是 web 应用，定义应用名称
  * `author` 作者
  * `generator` 自动生成文档的软件名称
  * `referrer` 控制 http 请求中 http referrer 内容
    * 可以做图片防盗链
      ```html
      <head>
        <meta name="referrer" content="never"><!-- 去除 referrer -->
      </head>
      ```
* `http-equiv`
  * 值
  * `refresh` 设置页面多久刷新，或刷新后跳转页面
  * `content-language` 页面属性(❌ 废弃)
  * `content-type` 字符编码
  * `default-style` 预定义样式表
  * `set-cookie` 设置页面 cookie(❌ 废弃)
  * `X-UA-Compatible` IE 浏览器呈现一致外观
    ```html
    <head>
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
    </head>
    ```