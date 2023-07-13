# 备忘录

* ⭐ 可以根据备忘录的[资源](#资源)、[vitepress](#vitepress)、[markdown](#markdown)、[文档](#文档)部分结合按照 [git/commit](#commit) 提交规范的提交记录学习 vitepress 博客搭建过程

## 资源

### emoji

* https://github.com/ikatyang/emoji-cheat-sheet
  * 🚀🎉🏆🔖🏷📔📗📙📘📓✉️✏️📅📎📌✂️🔒🔓🔑🔨🛠🔧🪛⚙️🔗🚫❓❗✔️⭕❌✅❎🚩❤️💔⭐💡💣
* https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json
  * vitepress markdown extensions 中 emoji 的链接

### 音视频转文字 AI

* ❤️通义听悟 https://tingwu.aliyun.com/home

## nvm

* `nvm alias default 18.16.0` `nvm use default` 切换到当前使用的版本
* `nvm alias default 12.9.1` `nvm use default` 切换回去

## vitepress

* 官网 https://vitepress.dev
* 教程 https://vitepress.dev/guide/getting-started
  * Installation/Setup Wizard 步骤中
    * ::: details `vitepress init`
      ```sh {1,9,11,14,17,20,23,28}
      blog % npx vitepress init

        vitepress v1.0.0-beta.2
        
      ┌   Welcome to VitePress!
      │
      ◇  Where should VitePress initialize the config?
      │  ./docs
      │
      ◇  Site title:
      │  Br's Blog
      │
      ◇  Site description:
      │  Web 前端学习笔记
      │
      ◇  Theme:
      │  Default Theme
      │
      ◇  Use TypeScript for config and theme files?
      │  Yes
      │
      ◇  Add VitePress npm scripts to package.json?
      │  Yes
      │
      └  Done! Now run npm run docs:dev and start writing.
        
      Tips:
      - Make sure to add .vitepress/dist and .vitepress/cache to your .gitignore file.
      ```
      :::
* 运行 `npm run docs:dev`
* 源码 https://github.dev/vuejs/vitepress
  * 默认主题类型 `vuejs/vitepress/types/default-theme.d.ts`
  * `import type { DefaultTheme } from 'vitepress/theme'`
* `*` 可忽略、非重点、非干货部分，在 sidebar 或标题上使用

### nav

* 配置的 `activeMatch: '/netease-study-junior-fe|/'` 需要同步

## markdown

* https://github.github.com/gfm/
  * GitHub Flavored Markdown Spec
* https://vitepress.dev/guide/markdown
  * VitePress Markdown Extensions
* https://github.com/shikijs/shiki/blob/main/scripts/grammarSources.ts
  * `` ``` `` 代码高亮支持语言列表
* `<strong>` 用 `**`
* `<ul>` 用 `*`
* `<ol>` 用 `1.`
* `<hr>` 用 `---`
* `<h1>` 下面用 `<Badge>` 前中间加 `<hr>`
* `<a>` `* [📎 name](url)`
* 图片 用 `<img src alt>` 因为可以改宽高，vitepress doc 宽度688px
* 代码 用<code>``</code>
* 代码块
  * 语言 `sh` `js`
  * 行高亮 ` {1,2}`
  * 不显示列数 `:no-line-numbers`
* 代码组
  * 第一个用 js 注释介绍占位节省空间
  ````md
  ```js :no-line-numbers [index.js]
  /**
   * html 前端入门案例
   */
  ```
  ````
  * 使用 snippets
  ```
  <<< ./snippets/xx.js
  ```

* 步骤 用 `>`
* 标签 用 vitepress 的 `<Badge type="tip" />`
  * `前端` `IDE` `WebStorm` `Sublime Text` `VSCode` `浏览器` `Chrome` `Firefox` `Safari` `IE` `浏览器调试` `移动端调试` `html` `css` `less` `sass` `scss` `javascript` `vue` `react`

## 文档

### 目录

```:no-line-numbers
.
├─ docs vitepress 根目录
│  ├─ .vitepress vitepress 配置目录
│  │  ├─ config 配置文件供 config.js 引用
│  │  │  ├─ config 配置参数
│  │  │  ├─ nav 导航
│  │  │  └─ sidebar 侧边栏
│  │  └─ config.js 配置文件
│  ├─ netease-study-junior-fe 网易云课堂初级级前端开发工程师
│  │  ├─ assets 资源
│  │  └─ snippets 代码片段
│  ...
│  ├─ index.md 首页
│  └─ memo.md 备忘录
├─ package.json
└─ README.md
```

## git

### config

```sh
git config --global user.name BenjaminRenCN
git config --global user.email br.github@outlook.com
git config --global http.sslverify true
```

### commit

* `[gitignore]` gitignore
* `[readme]` README.md文件单独修改
* `[memo]` 备忘录单独修改
* `[vitepress]` vitepress配置、插件
* `[vitepress/nav]` `[vitepress/sidebar]` `[vitepress/search]` `[vitepress/footer]` `[vitepress/home]` 对应 vitepress 的nav、sidebar、footer、search、home page
* `[blog]` 除了`[vitepress]`的笔记、代码
* `[blog/index]` 首页
* `[netease-study-junior-fe]` 网易云课堂 初级级前端开发工程师
* `[netease-study-senior-fe]` 网易云课堂 高级前端开发工程师

## TODO

* [📎 网易云课堂 初级级前端开发工程师 TODO](./netease-study-junior-fe/index#todo)
* vitepress markdown 公共样式修改
  * h3 margin-bottom
* vitepress 图片预览