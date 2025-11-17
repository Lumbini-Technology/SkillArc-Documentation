// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SkillArc SaaS Documentation',
  tagline: 'Documentation for SkillArc SaaS Installation, Setup and Usage',
  favicon: 'images/logo/logo.png',

  // Set the production url of your site here
  url: 'https://lumbini-technology.github.io', // Your GitHub Pages URL
  baseUrl: '/SkillArc-Documentation/', // The repository name, preceded by a slash
  organizationName: 'Lumbini-Technology', // Your GitHub username
  projectName: 'SkillArc-Documentation', // Your repository name
  trailingSlash: true,
  deploymentBranch: "gh-pages", // Deployment branch for GitHub Pages

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Removed installation docs plugin
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'schooladmin',
        path: 'schooladmin',
        routeBasePath: 'schooladmin',
        sidebarPath: require.resolve('./schooladminSidebar.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'superadmin',
        path: 'superadmin',
        routeBasePath: 'superadmin',
        sidebarPath: require.resolve('./superadminSidebar.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'changelog',
        path: 'changelog',
        routeBasePath: 'changelog',
        sidebarItemsGenerator: async () => [],
      },
    ],
  ],

  presets: [
    [
      'classic',
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: ({
    image: 'images/logo/transparent_logo.svg',
    navbar: {
      title: 'SkillArc',
      logo: {
        alt: 'SkillArc SaaS Logo',
        src: 'images/logo/transparent_logo.svg',
      },
      items: [
        {
          docsPluginId: 'superadmin',
          type: 'docSidebar',
          sidebarId: 'superadminSidebar',
          position: 'left',
          label: 'Super Admin',
        },
        {
          docsPluginId: 'schooladmin',
          type: 'docSidebar',
          sidebarId: 'schooladminSidebar',
          position: 'left',
          label: 'School Admin',
        },
        {
          docId: 'index',
          docsPluginId: 'changelog',
          type: 'doc',
          position: 'left',
          label: 'Changelog',
        },
        {
          type: "search",
          position: "right",
        },
        {
          href: 'https://www.lumbinitechnologies.com/',
          label: 'Lumbini Technologies',
          position: 'right',
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Lumbini Technologies. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  }),

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        docsRouteBasePath: ["superadmin", "schooladmin"],
        docsDir: ["superadmin", "schooladmin"],
        docsPluginIdForPreferredVersion: "superadmin",
      },
    ],
  ],

  stylesheets: [
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",
  ],
};

export default config;
