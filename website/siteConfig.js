/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: 'Kryptokrona Docs', // Title for your website.
  tagline: 'Official Kryptokrona Documentation',
  url: 'https://docs.kryptokrona.se', // Your website URL
  baseUrl: '/', // Base URL for your project
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'kryptokrona-docs',
  organizationName: 'kryptokrona',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'Getting-Started', label: 'Getting Started'},
    {doc: 'about/About-Kryptokrona', label: 'About'},
    {doc: 'Frequently-Asked-Questions', label: 'FAQ'},
    {doc: 'guides/mining/Mining', label: 'Guides'},
    {doc: 'developer/Resources', label: 'For Developers'},
    { search: true }
  ],

  algolia: {
    apiKey: '00577f0f048288f39647085691d6f3f6',
    indexName: 'kryptokrona'
    //algoliaOptions: {} // Optional, if provided by Algolia
  },

  /* path to images for header/footer */
  headerIcon: 'img/logo.png',
  footerIcon: 'img/fav.png',
  favicon: 'img/fav.ico',

  /* Colors for website */
  // See Brand Manual for more info on these
  colors: {
    primaryColor: 'hsl(0, 0%, 11%)', // green
    secondaryColor: '#90f2ff8c', // black
  },

  /* Custom fonts for website */
  fonts: {
    myFont: [
      "Montserrat"
    ]
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  // Links are rendered directly in Footer.js
  copyright1: `Copyright © ${new Date().getFullYear()} Kryptokrona`,
  copyright2: `Docs released under the`,
  copyright3: `Kryptokrona released under the`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'bash',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  // Basically the ToC
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Collapse categories
  docsSideNavCollapsible: true,
  // custom url
  cname: 'https://docs.kryptokrona.se',
  // `.lol/docs/guides` -> `.lol/guides/`
  docsUrl: '',
  // Shows "jump to top" button
  scrollToTop: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // Sets default syntax highlighing to plaintext
  highlight: {
    defaultLang: 'bash',
    version: '9.12.0',
    theme: 'arta',
  },

  // For 'Edit' button in top right of each doc
  editUrl: "https://github.com/kryptokrona/kryptokrona-docs/edit/master/docs/",

  // For the "copy code" button in each long code block
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    '/js/code-block-buttons.js',
  ]

};

module.exports = siteConfig;
