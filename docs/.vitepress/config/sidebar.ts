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
        { text: 'Index', link: '/netease-study-junior-fe/1' },
      ]
    },
    // {
    //   text: 'HTML',
    //   items: [
    //     { text: 'Index', link: '/netease-study-junior-fe/1' },
    //   ]
    // },
    // {
    //   text: 'CSS',
    //   items: [
    //     { text: 'Index', link: '/netease-study-junior-fe/1' },
    //   ]
    // },
    // {
    //   text: 'JavaScript程序设计',
    //   items: [
    //     { text: 'Index', link: '/netease-study-junior-fe/1' },
    //   ]
    // },
    // {
    //   text: 'DOM编程艺术',
    //   items: [
    //     { text: 'Index', link: '/netease-study-junior-fe/1' },
    //   ]
    // }
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
