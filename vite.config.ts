import { build, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
        vue(),
        vueJsx()
    ],

    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },

    base: process.env.NODE_ENV === 'production' ? './' : '/',

    define: {
        'process.env': {}
    },

    build: {
        chunkSizeWarningLimit: 1500
    }
})