import { defineConfig } from 'astro/config';
import rehypeFigure from 'rehype-figure';

export default defineConfig({
  site: 'https://aleksandrbeliaev.com',
  markdown: {
    rehypePlugins: [rehypeFigure],
  },
});