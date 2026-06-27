// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build
export default defineConfig({
    // User GitHub Pages site is served from the domain root.
    site: 'https://mathrnascimento.github.io',
    base: '/',
    trailingSlash: 'ignore',
    integrations: [sitemap()],
    prefetch: {
        prefetchAll: true,
        defaultStrategy: 'viewport',
    },
    build: {
        inlineStylesheets: 'auto',
    },
    compressHTML: true,
});
