import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";
import NetlifyCMS from 'astro-netlify-cms';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), NetlifyCMS({
    config: {
      backend: {
        name: 'git-gateway',
        branch: 'main',
      },
      collections: [
        {
          name: 'posts',
          label: 'Blog Posts',
          folder: 'src/pages/posts',
          create: true,
          delete: true,
          fields: [
            { name: 'title', widget: 'string', label: 'Post Title' },
            { name: 'body', widget: 'markdown', label: 'Post Body' },
          ],
        },
      ],
    },
  }),]
});