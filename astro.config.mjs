import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    preact(),
    react(),
  ],
  site: 'https://joSecret.github.io',
  base: '/docs',
});
