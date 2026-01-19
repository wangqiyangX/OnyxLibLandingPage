import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ink Lib",
  description: "Manage your notes from Onyx Boox Reader",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Privacy", link: "/privacy" },
      { text: "Terms", link: "/terms" },
    ],

    sidebar: [
      { text: "Privacy", link: "/privacy" },
      { text: "Terms", link: "/terms" },
      { text: "Support", link: "/support" },
    ],

    socialLinks: [],
  },
});
