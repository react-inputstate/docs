import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "React Nuclear ☢️",
  tagline: "Type-safe, composable, and performant input states",
  favicon: "img/favicon.ico",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  url: "https://reactnuclear.com",
  baseUrl: "/",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/react-inputstate/docs",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/react-nuclear-social-card.png",
    navbar: {
      title: "React Nuclear",
      logo: {
        alt: "Logo",
        src: "img/reactnuclear.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "introSidebar",
          position: "left",
          label: "Intro",
        },
        {
          type: "docSidebar",
          sidebarId: "api",
          position: "left",
          label: "API",
        },
        {
          type: "docSidebar",
          sidebarId: "examples",
          position: "left",
          label: "Examples",
        },
        {
          href: "https://github.com/react-inputstate/docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Intro",
              to: "/docs/overview/intro",
            },
            {
              label: "API",
              to: "/docs/api/fields",
            },
            {
              label: "Examples",
              to: "/docs/examples/basic",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "X",
              href: "https://x.com/reactnuclear",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/react-inputstate/docs",
            },
            {
              label: "Npm",
              href: "https://npmjs.org/package/react-nuclear",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} React Nuclear`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
