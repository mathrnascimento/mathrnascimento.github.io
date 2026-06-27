// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build
export default defineConfig({
    site: 'https://mathrnascimento.com',
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
