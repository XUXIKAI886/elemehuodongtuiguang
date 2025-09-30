import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'zh-CN',
  title: '饿了么活动推广知识',
  description: '围绕饿了么平台的活动运营与推广策略，提供结构化的实操指南。',
  lastUpdated: true,
  themeConfig: {
    siteTitle: '呈尚策划',
    outline: [2, 3],
    nav: [
      { text: '活动运营', link: '/活动/' },
      { text: '推广提量', link: '/推广/' }
    ],
    sidebar: {
      '/活动/': [
        {
          text: '活动运营',
          items: [
            { text: '活动概览', link: '/活动/' },
            { text: '门店新客立减', link: '/活动/门店新客立减' },
            { text: '精准营销', link: '/活动/精准营销' },
            { text: '减配送费', link: '/活动/减配送费' },
            { text: '店铺满减', link: '/活动/店铺满减' },
            { text: '集点返券', link: '/活动/集点返券' },
            { text: '下单返券', link: '/活动/下单返券' }
          ]
        }
      ],
      '/推广/': [
        {
          text: '推广提量',
          items: [
            { text: '推广概览', link: '/推广/' },
            { text: '推广魔方', link: '/推广/推广魔方' },
            { text: '斗金推广', link: '/推广/斗金推广' }
          ]
        }
      ]
    },
    footer: {
      message: '基于 VitePress 构建 · 持续更新运营实战策略',
      copyright: '© 2025 呈尚策划'
    },
    search: {
      provider: 'local'
    }
  }
});
