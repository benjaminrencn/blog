# 第五章 前端调试工具

---

<Badge type="tip" text="前端" />
<Badge type="tip" text="浏览器" />
<Badge type="tip" text="Chrome" />
<Badge type="tip" text="Firefox" />
<Badge type="tip" text="IE" />
<Badge type="tip" text="Safari" />
<Badge type="tip" text="浏览器调试" />
<Badge type="tip" text="移动端调试" />

## 概述

* 调试工具
  * **Google Chrome** ❤️
  * Mozilla Firefox
  * Apple Safari
  * Internet Explore
* 基本功能
  * 元素 Elements
    * html、css
  * 源码 Sources
    * 查看资源，html、css、js
    * 打断点调试、查看变量、堆栈
  * 网络 Network
    * 网络请求详细信息
  * 控制台 Console
    * 查看信息
    * 运行脚本
  * 应用 Application
    * 存储信息
  * 性能 Performance
    * 运行渲染过程
* 移动端调试

## Chrome {#chrome}

### 打开方式

* 更多(3个点) > `更多工具` > `开发者工具`
* 右击 > `检查`
* (`option` + `command`) / (`Ctrl` + `Shift`) + `I`
* `F12`

### 元素 Elements

* 编辑 html、css

<img src="./assets/chrome-elements.png" alt="chrome 开发者工具元素" title="chrome 开发者工具元素">
<img src="./assets/chrome-elements-computed.png" width="340" alt="chrome 开发者工具元素计算样式" title="chrome 开发者工具元素计算样式">

### 源码 Sources

* 调试脚本
* 查看资源、变量、堆栈
* 调试资源

<img src="./assets/chrome-sources.png" alt="chrome 开发者工具源码" title="chrome 开发者工具源码">

### 控制台 Console

* 查看信息
* 运行脚本

<img src="./assets/chrome-console.png" width="480" alt="chrome 开发者工具控制台" title="chrome 开发者工具控制台">

### 网络 Network

* 资源请求
* 请求信息
* 过滤排序

<img src="./assets/chrome-network.png" alt="chrome 开发者工具网络" title="chrome 开发者工具网络">
<img src="./assets/chrome-network-detail.png" width="480" alt="chrome 开发者工具网络详情" title="chrome 开发者工具网络详情">

### 性能 Performance

* 记录网站生命周期

<img src="./assets/chrome-performance.png" width="480" alt="chrome 开发者工具性能" title="chrome 开发者工具性能">

### 内存 Memory

* 追踪内存泄漏

<img src="./assets/chrome-memory.png" width="480" alt="chrome 开发者工具内存" title="chrome 开发者工具内存">

### 应用 Application

* 存储

<img src="./assets/chrome-application.png" width="340" alt="chrome 开发者工具应用" title="chrome 开发者工具应用">

### 安全 Security

* 调试混合内容、证书问题

<img src="./assets/chrome-security.png" width="480" alt="chrome 开发者工具安全" title="chrome 开发者工具安全">

## Firefox

### 打开方式

* 工具(3条横) > `更多工具` > `开发者工具`
* 右击 > `检查`
* (`option` + `command`) / (`Ctrl` + `Shift`) + `I`
* `F12`

### 查看器

* 编辑 html、css

<img src="./assets/firefox-elements.png" alt="firefox 开发者工具查看器" title="firefox 开发者工具查看器">
<img src="./assets/firefox-elements-computed.png" width="340" alt="firefox 开发者工具查看器计算值" title="firefox 开发者工具查看器计算值">

### 调试器

* 调试脚本
* 查看变量
* 查看调用堆栈

<img src="./assets/firefox-sources.png" alt="firefox 开发者工具调试器" title="firefox 开发者工具调试器">

### 控制台

* 查看信息
* 运行脚本

<img src="./assets/firefox-console.png" width="480" alt="firefox 开发者工具控制台" title="firefox 开发者工具控制台">

### 网络

* 资源请求
* 请求信息
* 过滤排序

<img src="./assets/firefox-network.png" alt="firefox 开发者工具网络" title="firefox 开发者工具网络">
<img src="./assets/firefox-network-detail.png" alt="firefox 开发者工具网络详情" title="firefox 开发者工具网络详情">

### 性能

<img src="./assets/firefox-performance.png" width="400" alt="firefox 开发者工具性能" title="firefox 开发者工具性能">
<img src="./assets/firefox-performance-result.png" alt="firefox 开发者工具性能结果" title="firefox 开发者工具性能结果">

### 内存

<img src="./assets/firefox-memory.png" width="540" alt="firefox 开发者工具内存" title="firefox 开发者工具内存">

### 存储

<img src="./assets/firefox-storage.png" width="540" alt="firefox 开发者工具存储" title="firefox 开发者工具存储">

### 样式编辑器

<img src="./assets/firefox-style.png" width="540" alt="firefox 开发者工具样式编辑器" title="firefox 开发者工具样式编辑器">

## IE

### 打开方式

* `设置` > `更多工具` > `F12 开发人员工具`
* 右击 > `检查元素`
* `F12`

### DOM 资源管理器

* 编辑 html、css

<img src="./assets/ie-dom.png" alt="ie 开发者工具 DOM 资源管理器" title="ie 开发者工具 DOM 资源管理器">
<img src="./assets/ie-dom-computed.png" width="220" alt="ie 开发者工具 DOM 资源管理器计算值" title="ie 开发者工具 DOM 资源管理器计算值">
<img src="./assets/ie-dom-layout.png" width="220" alt="ie 开发者工具 DOM 资源管理器布局" title="ie 开发者工具 DOM 资源管理器布局">

### 调试程序

* 调试脚本
* 查看变量
* 查看调用堆栈

<img src="./assets/ie-sources.png" width="320" alt="ie 开发者工具调试程序" title="ie 开发者工具调试程序">
<img src="./assets/ie-sources-2.png" alt="ie 开发者工具调试程序2" title="ie 开发者工具调试程序2">

### 控制台

* 查看信息
* 运行脚本

<img src="./assets/ie-console.png" width="220" alt="ie 开发者工具控制台" title="ie 开发者工具控制台">

### 网络

* 资源请求
* 请求信息
* 过滤排序

<img src="./assets/ie-network.png" alt="ie 开发者工具网络" title="ie 开发者工具网络">
<img src="./assets/ie-network-detail.png" alt="ie 开发者工具网络详情" title="ie 开发者工具网络详情">

### 仿真

* 文档模式(不同 IE 版本)
* 用户代理 userAgent
* 屏幕大小、显示
* 地理位置

<img src="./assets/ie-simulation.png" alt="ie 开发者工具仿真" title="ie 开发者工具仿真">

### UI 响应

* UI 性能

### 探查器

* js 性能

### 内存

* 内存情况

## 移动端调试

### 调试方式

* 浏览器模拟
  * UA
  * 屏幕尺寸
* 真机调试
  * iOS Safari
  * Android Chrome

### Chrome 浏览器模拟

* [开发者工具](#chrome) > `切换设备`

<img src="./assets/chrome-simulation.png" width="560" alt="chrome 移动端调试浏览器模拟" title="chrome 移动端调试浏览器模拟">

### 真机调试

#### iOS Safari

* `Safari 浏览器` > `设置` > `高级` > `在菜单栏中显示"开发"菜单`

<img src="./assets/safari-debug-setting-1.png" width="560" alt="真机调试 iOS Safari 设置" title="真机调试 iOS Safari 设置">

* `设置` > `Safari 浏览器` > `高级` > `JavaScript` `网页检查器`

<img src="./assets/safari-debug-setting-2.jpeg" width="200" alt="真机调试 iOS Safari 设置" title="真机调试 iOS Safari 设置">

* USB 连接设备进行调试，选择页面

<img src="./assets/safari-debug-1.png" width="360" alt="真机调试 iOS Safari 调试" title="真机调试 iOS Safari 调试">
<img src="./assets/safari-debug-2.png" alt="真机调试 iOS Safari 调试" title="真机调试 iOS Safari 调试">

* 💡 遇见 mac 系统版本、safari、iphone 系统版本太新、不匹配导致的无法调试问题，尝试[📎Safari Technology Preview](https://developer.apple.com/safari/technology-preview/)

#### Android Chrome

* 💣 需要科学上网
* `chrome://inspect/#devices` > `Discover USB devices`

<img src="./assets/chrome-debug-1.png" width="300" alt="真机调试 Android Chrome 调试" title="真机调试 Android Chrome 调试">

* 打开手机开发者模式、USB 调试
  * 💣 **不同手机方式不同**

<img src="./assets/chrome-debug-setting.jpg" width="200" alt="真机调试 Android Chrome 设置" title="真机调试 Android Chrome 设置">

* USB 连接设备进行调试，选择页面 `inspect`

<img src="./assets/chrome-debug-2.png" alt="真机调试 Android Chrome 调试" title="真机调试 Android Chrome 调试">

* 💡 使用[📎Edge](https://www.microsoft.com/zh-cn/edge) (Chromium 内核) 不需要科学上网 🎉
  * `edge://inspect/#devices`
