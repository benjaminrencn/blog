import { defineConfig } from 'vitepress'

import nav from './config/nav'
import sidebar from './config/sidebar'
import { author, blogRepository } from './config/config'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Br's Blog",
  description: "Web Frontend Note",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,
    search: {
      provider: 'local'
    },
    darkModeSwitchLabel: '外观',
    socialLinks: [
      { icon: 'github', link: blogRepository }
    ],
    sidebar,
    sidebarMenuLabel: '目录',
    outlineTitle: '导航栏',
    editLink: {
      pattern: `${blogRepository}/tree/main/docs/:path`,
      text: '在 GitHub 上编辑此页',
    },
    lastUpdatedText: '最后一次更新于',
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    returnToTopLabel: '返回顶部',
    footer: {
      message: `Released under the <a target="_blank" href="${blogRepository}/blob/main/LICENSE">MIT License</a>.❤️ Powered by VitePress.`,
      copyright: `Copyright © 2023-present ${author}`
    }
  }
})
