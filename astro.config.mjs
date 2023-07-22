import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import NetlifyCMS from 'astro-netlify-cms';
// import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), NetlifyCMS({
    config: {
      // Use Netlify’s “Git Gateway” authentication and target our default branch
      backend: {
        name: 'git-gateway',
        branch: 'main',
      },
      // Configure where our media assets are stored & served from
      media_folder: 'public/assets/blog',
      public_folder: '/assets/blog',
      // Configure the content collections
      collections: [
        {
          name: 'posts',
          label: 'Blog Posts',
          label_singular: 'Blog Post',
          folder: 'src/pages/posts',
          create: true,
          delete: true,
          fields: [
            { name: 'title', widget: 'string', label: 'Post Title' },
            {
              name: 'publishDate',
              widget: 'datetime',
              format: 'DD MMM YYYY',
              date_format: 'DD MMM YYYY',
              time_format: false,
              label: 'Publish Date',
            },
            { name: 'author', widget: 'string', label: 'Author Name', required: false },
            { name: 'authorURL', widget: 'string', label: 'Author URL', required: false },
            { name: 'description', widget: 'string', label: 'Description', required: false },
            { name: 'body', widget: 'markdown', label: 'Post Body' },
            {
              name: 'layout',
              widget: 'select',
              default: '../../layouts/BlogPost.astro',
              options: [
                { label: 'Blog Post', value: '../../layouts/BlogPost.astro' },
              ],
            },
          ],
        },
      ],
    },
    previewStyles: ['/src/base.css'],
  }),]
});