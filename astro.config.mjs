import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { autolinkConfig } from './plugins/rehype-autolink-config';
import sitemap from "@astrojs/sitemap";
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel/serverless';
import { remarkReadingTime } from './plugins/remark-reading-time.mjs';


// https://astro.build/config
export default defineConfig({
  site: "https://berlotto.me",
  // replace this with your deployed domain
  integrations: [tailwind({
      applyBaseStyles: false
    }),
    react(),
    sitemap(),
    mdx(),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime, remarkToc, [remarkCollapse, {
      test: "Índice"
    }]],
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, autolinkConfig]],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true
    },
    extendDefaultPlugins: true
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"]
    }
  },
  scopedStyleStrategy: "where",
  output: 'server',
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
});