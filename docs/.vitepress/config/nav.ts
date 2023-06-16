// https://vitepress.dev/reference/default-theme-nav
export default [
  {
    text: '笔记',
    items: [
      {
        text: '课程笔记',
        items: [
          { text: '网易云课堂 初级前端开发工程师', link: '/netease-study-junior-fe/' }
        ]
      }
    ],
    activeMatch: '/netease-study-junior-fe/'
  },
  {
    text: '备忘录',
    link: '/memo'
  }
]
