import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), image(), mdx(), preact(), sitemap(), robotsTxt()],
  markdown: {
    shikiConfig: {
      theme: 'dark-plus'
    }
  },
  experimental: {
    integrations: true,
  },
  site: 'https://readytoprogram.netlify.app'
});