import { defineConfig } from 'vite'

import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import IconResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import vue from '@vitejs/plugin-vue'

import type { UserConfigExport } from 'vitest/config'
import { nuxtAliases } from './nuxt.config'

// Used in Vitest
export const ViteConfig: UserConfigExport = {
  plugins: [
    vue(),
    Icons({
      autoInstall: true,
      compiler: 'vue3',
      customCollections: {
        svg: FileSystemIconLoader('./assets/sprite/svg'),
      },
    }),
    Components({
      dts: true,
      resolvers: [
        IconResolver({
          customCollections: ['svg'],
        }),
      ],
    }),
  ],
  resolve: {
    alias: nuxtAliases,
  },
}

export default defineConfig(ViteConfig)
