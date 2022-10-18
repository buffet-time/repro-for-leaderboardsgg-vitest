import { resolve } from 'path'
import { createRequire } from 'module'

// Need to explicitly import this otherwise vite.config yells at us
import { defineNuxtConfig } from 'nuxt/config'


// console.log(resolve('nuxt/dist/app'))
const require = createRequire(import.meta.url)
const pathName = require.resolve('nuxt')

// https://v3.nuxtjs.org/api/configuration/nuxt.config

// Safely loads the .env file, making sure all the variables are defined

export const nuxtAliases = {
  '#app': resolve(pathName, './dist/app'),
  blocks: resolve(__dirname, './components/blocks'),
  composables: resolve(__dirname, './composables'),
  elements: resolve(__dirname, './components/elements'),
  layouts: resolve(__dirname, './layouts'),
  lib: resolve(__dirname, './lib'),
  pages: resolve(__dirname, './pages'),
  root: resolve(__dirname, './'),
}

export default defineNuxtConfig({
  alias: nuxtAliases,
  app: {
    // Global page headers: https://v3.nuxtjs.org/api/configuration/nuxt.config#head
    head: {
      link: [
        {
          href: '/favicon.ico',
          rel: 'icon',
          type: 'image/x-icon',
        },
      ],
      meta: [
        { charset: 'utf-8' },
        { content: 'width=device-width, initial-scale=1', name: 'viewport' },
        { content: '', hid: 'description', name: 'description' },
        { content: 'telephone=no', name: 'format-detection' },
      ],
      title: 'leaderboards.gg',
    },
  },

  // https://v3.nuxtjs.org/api/configuration/nuxt.config#components
  // https://v3.nuxtjs.org/guide/directory-structure/components/

  // Global CSS: https://v3.nuxtjs.org/api/configuration/nuxt.config#css
  css: ['assets/css/tailwind.css'],

  // https://v8.i18n.nuxtjs.org/getting-started/setup

  // https://v3.nuxtjs.org/api/configuration/nuxt.config#ignore
  ignore: ['**/*.test.ts', '**/node_modules', '.output', '.dist'],
  // Modules: https://v3.nuxtjs.org/api/configuration/nuxt.config#modules
  modules: [
    // https://go.nuxtjs.dev/typescript
    // '@nuxt/typescript-build',
    // https://tailwindcss.com
    '@nuxtjs/tailwindcss',
    'unplugin-icons/nuxt',
  ],

  runtimeConfig: {
    public: {
      BACKEND_BASE_URL: process.env.BACKEND_BASE_URL,
    },
  },
  typescript: {
    // Disabled as using Volar take over mode is the reccomended way to do this
    shim: false,
    strict: true,
  },
})
