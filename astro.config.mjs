import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), image(), mdx(), preact()],
  markdown: {
    shikiConfig: {
      theme: 'dark-plus',
    },
  },
});