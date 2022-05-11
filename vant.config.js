module.exports = {
  name: 'pro-mini-components',
  build: {
    css: {
      preprocessor: 'sass',
    },
    site: {
      publicPath: '/pro-mini-components/',
    },
  },
  site: {
    title: 'pro-mini-components',
    logo: 'https://img.yzcdn.cn/vant/logo.png',
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'demo-button',
            title: 'DemoButton 按钮',
          },
          {
            path: 'pro-picker',
            title: 'ProPicker 选择',
          },
        ],
      },
    ],
  },
};
