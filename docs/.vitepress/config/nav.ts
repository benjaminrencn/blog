// https://vitepress.dev/reference/default-theme-nav
export default [
  {
    text: '前端',
    items: [
      {
        text: '课程笔记',
        items: [
          { text: '网易云课堂 初级前端开发工程师', link: '/netease-study-junior-fe/', activeMatch: '/netease-study-junior-fe/' }
        ]
      }
    ],
    activeMatch: '/netease-study-junior-fe/'
  },
  {
    text: '鸿蒙',
    items: [
      {
        text: '课程笔记',
        items: [
          { text: '华为开发者联盟 HarmonyOS NEXT Codelabs', link: '/harmonyos-developer-codelabs/', activeMatch: '/harmonyos-developer-codelabs/' }
        ]
      }
    ],
    activeMatch: '/harmonyos-developer-codelabs/'
  }
]