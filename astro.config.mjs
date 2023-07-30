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
            { name: 'title', widget: 'string', label: 'Post Title', required: true },
            {
              name: 'publishDate',
              widget: 'datetime',
              format: 'MMM DD, YYYY',
              date_format: 'MMM DD, YYYY',
              time_format: false,
              label: 'Publish Date',
              required: true,
            },
            { name: 'author', widget: 'string', label: 'Author Name', required: true },
            { name: 'authorURL', widget: 'string', label: 'Author URL', required: false },
            { name: 'category', widget: 'string', label: 'Category', required: true },
            { name: 'description', widget: 'string', label: 'Description', required: true },
            { name: 'body', widget: 'markdown', label: 'Post Body', required: true},
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