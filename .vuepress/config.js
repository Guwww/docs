module.exports = {
  title:'狂奔的蜗牛',
  description:'飞越高山与大海的鱼',
  head:[
    ['meta',{name:'author',content:'飞越高山与大海的鱼'}],
    ['meta',{name:'title',content:'飞越高山与大海的鱼'}],
    ['meta',{name:'keywords',content:'vuePress介绍，飞越高山与大海的鱼'}],
  ],
  themeConfig: {
    lastUpdated: '更新时间', // string | boolean
    logo: '/assets/img/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/about.html' },
      { text: 'External', link: 'https://google.com' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      }
    ],
    sidebar: 'auto'
  }
}