---
lang: zh-CN
description: 模块化、组件化、如何制定 CSS 规范。
meta:
  - name: keywords
    content: 网易云课堂,高级前端开发工程师,前端基础预习课,页面架构,模块与组件
---

# 模块与组件

\#网易云课堂#
\#高级前端开发工程师#
\#前端基础预习课#
\#页面架构#
\#模块与组件#

模块化、组件化、如何制定 CSS 规范。

## 模块化

### 定义

* 是一系列相关联的结构组成的**整体**
* 是产品需求的具体时间，具有**产品语义**

### 如何实现

* **整体**
  * HTML 一个根节点
  * CSS 一个 class 对应 HTML 根节点
* **扩展**
  * 外观相似、语义相同的模块的情况

## 组件化

### 定义

* 是一系列相关联的结构组成的**整体**
* 是对（多模块内）通用内容的**抽象**

## 优点

* 多人协同
* 扩展、重用
* 可读性、可维护性

## 规范

### 文件规范

* 通用类
  * base\ reset.css 框架样式
  * lib\ 库样式
  * ui\ UI 设计通用组件样式
  * ……
* 业务类
  * 模块 页面

### 命名规范

* 分类
  * 模块 `.m-nav`
  * 组件 `.u-button`
* 扩展 `.m-nav-1` `.u-button-1`
* 语义 `nav` `navigation` `subNav`

### 格式规范

* 定义
  * 单行、分行
  * 冒号、分号、空格
  * 属性顺序： 显示类属性、自身属性 、文本属性和其他修饰
  * ……
* 注释
  * 块状注释：星号对齐
  * 单行显示：注释两端空格（无空格时编码错误可能导致后面样式失效）
  * ……