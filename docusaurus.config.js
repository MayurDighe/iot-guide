module.exports = {
  title: 'Internet of Things (IoT) Guide',
  tagline: 'Exploring the Connected World',
  url: 'https://iotguide.in/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'MayurDighe', // Your GitHub org/user name.
  projectName: 'iotguide', // Your repo name.
  themeConfig: {
    navbar: {
      title: 'IoT',
      logo: {
        alt: 'IoT Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: 'docs/intro', label: 'Docs', position: 'left' },
        { to: 'blog', label: 'Blog', position: 'left' },
        { to: 'about', label: 'About', position: 'left' },
        { href: 'https://github.com/MayurDighe/iotguide', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Introduction', to: '/docs/intro' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'GitHub', href: 'https://github.com/MayurDighe/iotguide' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mayur Dighe. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/MayurDighe/iotguide/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/MayurDighe/iotguide/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  scripts: [
    {
      src: 'https://example.com/custom-script.js',
      async: true,
    },
  ],
};
