# 备忘录 TODO

## 资源

### emoji

* https://github.com/ikatyang/emoji-cheat-sheet
    * 🚀🎉🏆🔖🏷📔📗📙📘📓✉️✏️📅📎📌✂️🔒🔓🔑🔨🛠🔧🪛⚙️🔗🚫❓❗⭕❌✅❎🚩
* https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json
  * vitepress markdown extensions 中 emoji 的链接

## nvm

* `nvm alias default 18.16.0` `nvm use default` 切换到当前使用的版本
* `nvm alias default 12.9.1` `nvm use default` 切换回去

## vitepress

* 官网 https://vitepress.dev
* 教程 https://vitepress.dev/guide/getting-started
  * Installation/Setup Wizard 步骤中
    * ```shell
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
* 运行 `npm run docs:dev`

## git

### config

```shell
git config --global user.name BenjaminRenCN
git config --global user.email br.github@outlook.com
git config --global http.sslverify=true
```

### commit

* `[gitignore]` gitignore
* `[readme]` README.md文件单独修改
* `[memo]` 备忘录单独修改
* `[vitepress]` vitepress配置、插件
* `[vitepress/nav]` `[vitepress/sidebar]` `[vitepress/home]` `[vitepress/footer]` `[vitepress/search]` 对应 vitepress 的nav、sidebar、home page、footer、search
* `[blog]` 除了`[vitepress]`、笔记、代码的
* `[netease-study-junior-fe]` 网易云课堂初级级前端开发工程师
* `[netease-study-senior-fe]` 网易云课堂高级前端开发工程师
