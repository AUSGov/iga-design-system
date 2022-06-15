const { path } = require('@vuepress/utils')
const localTheme = require('./theme/index')

module.exports = {
  // site config
  lang: 'en-US',
  title: 'Department of Industry',
  description: 'Department of Industry style guide.',
  base: process.env.NODE_ENV === 'production' ? '/DOI-Styleguide/' : '/',

  // theme and its config
  theme: localTheme({
    logo: '/images/diser-logo.svg',
    logoDark: '/images/diser-logo.svg',
    // darkMode: false,
    contributors: false,
    themePlugins: {
      activeHeaderLinks: true,
      backToTop: true,
      container: true,
      externalLinkIcon: true,
      git: true,
      nprogress: true
    },
    search: true,
    navbar: [
      // nested group - max depth is 2
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Instructions',
        link: '/instructions',
      },
      {
        text: 'Typography',
        link: '/typography',
      },
      {
        text: 'Colour Palette',
        link: '/colour-palette',
      },
      {
        text: 'Icons',
        link: '/icons',
      },
      {
        text: 'Atoms',
        link: '/atoms',
      },
      {
        text: 'Components',
        link: '/components/',
        children: [
          {
            text: 'Navigation',
            link: '/components/navigation',
          },
          {
            text: 'Banners',
            link: '/components/banners',
          },
          {
            text: 'Entity Bar',
            link: '/components/entity-bar',
          },
          {
            text: 'In Section',
            link: '/components/in-section',
          },
          {
            text: 'On this page',
            link: '/components/on-this-page',
          },
          {
            text: 'Navigate (pubs)',
            link: '/components/navigate-pubs',
          },
          {
            text: 'Secondary Footer',
            link: '/components/secondary-footer',
          },
          {
            text: 'Global Footer',
            link: '/components/global-footer',
          },
          {
            text: 'Publications',
            link: '/components/publications',
          },
          {
            text: 'Standard + News',
            link: '/components/standard-news',
          },
          {
            text: 'Filtered Landing Pages',
            link: '/components/filtered-landing-pages',
          },
          {
            text: 'Outlier Components and Page Patterns',
            link: '/components/outlier-components-page-patterns',
          },
          {
            text: 'Homepage',
            link: '/components/homepage',
          },
          {
            text: 'Tables',
            link: '/components/tables',
          },
        ],
      },
      // control when should the item be active
      // {
      //   text: 'Group 2',
      //   children: [
      //     {
      //       text: 'Always active',
      //       link: '/',
      //       // this item will always be active
      //       activeMatch: '/',
      //     },
      //     {
      //       text: 'Active on /foo/',
      //       link: '/not-foo/',
      //       // this item will be active when current route path starts with /foo/
      //       // regular expression is supported
      //       activeMatch: '^/foo/',
      //     },
      //   ],
      // }
    ]
  }),
  plugins: [
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      },
    ],
    // '@vuepress/plugin-search'
  ]
}
