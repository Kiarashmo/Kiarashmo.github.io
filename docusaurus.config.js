// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kiarash Mokhtari',
  tagline: 'B.Sc. in Computer Science from Amirkabir University of Technology',
  favicon: 'img/ghost.png',

  // Set the production url of your site here
  url: 'https://Kiarashmo.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Kiarashmo', // Usually your GitHub org/user name.
  projectName: 'Kiarashmo.github.io', // Usually your repo name.

  // Add trailing slash configuration for GitHub Pages
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Add the stylesheets configuration here
  stylesheets: [
    {
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
      type: 'text/css',
      crossorigin: 'anonymous',
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      // SEO
      metadata: [
        {name: 'keywords', content: 'personal website, portfolio, blog, kiarash mokhtari, computer science, machine learning, artificial intelligence, generative ai, nlp, drug discovery'},
      ],
      socials: [
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/kiarash-mokhtari-17a4371a4/',
          icon: 'fab fa-linkedin',
        },
        {
          label: 'GitHub',
          href: 'https://github.com/Kiarashmo',
          icon: 'fab fa-github',
        },
        {
          label: 'Google Scholar',
          href: 'https://scholar.google.com/citations?user=QS6XR6EAAAAJ',
          icon: 'fas fa-graduation-cap',
        },
        {
          label: 'Email',
          href: 'mailto:mokhtarikiarash@gmail.com',
          icon: 'fas fa-envelope',
        },
      ],
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Kiarash Mokhtari',
        logo: {
          alt: 'Site Logo',
          src: 'img/ghost.png',
        },
        hideOnScroll: true,
        items: [
          {
            to: '/about',
            label: 'About',
            position: 'left',
          },
          {
            to: '/publications',
            label: 'Publications',
            position: 'left',
          },
          {
            to: '/projects',
            label: 'Projects',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Kiarash Mokhtari.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
