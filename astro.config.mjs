import { defineConfig } from 'astro/config';
import rehypeFigure from 'rehype-figure';

export default defineConfig({
  site: 'https://alpha-trotsky.github.io',
  markdown: {
    rehypePlugins: [rehypeFigure],
  },
});