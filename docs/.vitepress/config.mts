import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Passfinder",
  base: '/',
  ignoreDeadLinks: true, // Only for dev
  description: "Documentation",
  markdown: {
    container: {
      tipLabel: 'Tip',
      warningLabel: 'Warning',
      dangerLabel: 'Danger',
      infoLabel: 'Info',
      detailsLabel: 'Details'
    },
    toc: { level: [1, 2, 3, 4] },
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.jpeg',
    search: {
      provider: 'local'
    }, 
    nav: [
    ],

    sidebar: [
      {
        text: 'Getting Started',
        collapsed: false,
	items: [
          { text: 'Home', link: '/getting-started/home' },
          { text: 'Installation', link: '/getting-started/installation' },
          { text: 'Company', link: '/getting-started/company' },
        ]
      },
      {
        text: 'Company',
        collapsed: false,
	items: [
          { text: 'start-caps', link: '/company/start-caps' },
          { text: 'leet', link: '/company/leet' },
          { text: 'mask', link: '/company/mask' },
          { text: 'short-year', link: '/company/short-year' },
          { text: 'end-special', link: '/company/end-special' },
          { text: 'mixed-case', link: '/company/mixed-case' },
          { text: 'year', link: '/company/year' },
          { text: 'numbers', link: '/company/numbers' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/GoToolSharing/passfinder' },
      { icon: 'twitter', link: 'https://twitter.com/QU35T_TV' }
    ]
  }
})
