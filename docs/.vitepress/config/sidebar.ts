// https://vitepress.dev/reference/default-theme-sidebar
export default handleSidebar({
  '/netease-study-junior-fe/': [
    {
      text: '网易云课堂 初级级前端开发工程师',
      link: '/netease-study-junior-fe/'
    },
    {
      text: '前端入门',
      items: [
        {
          text: '第一章 前端技术发展概述 *',
          link: '/netease-study-junior-fe/introduction/history'
        },
        {
          text: '第二章 微专业课程体系概述 *',
          link: '/netease-study-junior-fe/introduction/course'
        },
        {
          text: '第三章 前端入门案例 *',
          link: '/netease-study-junior-fe/introduction/case'
        },
        {
          text: '第四章 前端开发工具',
          link: '/netease-study-junior-fe/introduction/ide'
        },
        {
          text: '第五章 前端调试工具',
          link: '/netease-study-junior-fe/introduction/dev-tools'
        }
      ]
    },
    {
      text: 'HTML',
      items: [
        {
          text: '第一章 HTML 简介 *',
          link: '/netease-study-junior-fe/html/introduction'
        },
        {
          text: '第二章 HTML 语法',
          link: '/netease-study-junior-fe/html/grammar'
        },
        {
          text: '第三章 HTML 元素',
          items: [
            {
              text: '第一节 元素分类',
              link: '/netease-study-junior-fe/html/element/element'
            },
            {
              text: '第二节 文档标题',
              link: '/netease-study-junior-fe/html/element/title'
            },
            {
              text: '第三节 元数据',
              link: '/netease-study-junior-fe/html/element/meta'
            },
            {
              text: '第四节 插入样式 ✏️',
              link: '/netease-study-junior-fe/html/element/style'
            },
            {
              text: '第五节 插入脚本',
              link: '/netease-study-junior-fe/html/element/script'
            }
          ]
        },
      ]
    }
  ]
})

import type { DefaultTheme } from 'vitepress/theme'

/**
 * 处理 SidebarMulti
 */
function handleSidebar(sidebar: DefaultTheme.SidebarMulti): DefaultTheme.SidebarMulti {
  // console.debug('.vitepress/config/sidebar.ts handleSidebar', sidebar)
  for (let path in sidebar) {
    handleSidebarItems(sidebar[path])
  }
  return sidebar
}
/**
 * 处理 SidebarItem
 * 设置默认值
 */
function handleSidebarItems(sidebarItems: DefaultTheme.SidebarItem[]): void {
  sidebarItems.forEach((item: DefaultTheme.SidebarItem) => {
    // console.debug('.vitepress/config/sidebar.ts handleSidebarItems', item.text, item.items, item.collapsed)
    if (item.items) { // 有子节点
      if (typeof item.collapsed === 'undefined') { // 默认折叠
        item.collapsed = true
      }
      handleSidebarItems(item.items)
    }
  })
}