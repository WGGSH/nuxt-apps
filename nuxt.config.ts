import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  runtimeConfig: {
    baseURL: '/nuxt-apps/',
  },
  build: {
    transpile: ['vuetify'],
  },
  app: {
    baseURL: '/nuxt-apps/',
    cdnURL: '/nuxt-apps/',
    head: {
      meta: [
        { name: 'theme-color', content: '#326CB3' },
      ],
      link: [
        { rel: 'manifest', href: 'manifest.webmanifest' },
        { rel: 'icon', href: '/favicon.ico', sizes: '48x48' },
        { rel: 'icon', href: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon-180x180.png' },
      ],
      style: [
        { children: ':root { touch-action: manipulation; }' },
      ],
    },
  },
  plugins: [
    '~/plugins/vuetify.ts',
  ],
  modules: [
    '@vite-pwa/nuxt',
    '@pinia/nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error FIXME: type
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  devServer: {
    port: 3000,
    host: '0.0.0.0',
  },
  pwa: {
    registerType: 'autoUpdate',
    includeAssets: ['favicon.ico'],
    client: {
      installPrompt: true,
    },
    manifest: {
      name: 'nuxt-apps',
      description: 'description',
      theme_color: '#326CB3',
      lang: 'ja',
      short_name: 'apps',
      start_url: '/',
      display: 'standalone',
      background_color: '#FFFFFF',
      icons: [
        {
          src: 'pwa-64x64.png',
          sizes: '64x64',
          type: 'image/png',
        },
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'maskable-icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    },
    workbox: {
      navigateFallback: null,
    },
    devOptions: {
      enabled: true,
      type: 'module',
    },
  },
});
