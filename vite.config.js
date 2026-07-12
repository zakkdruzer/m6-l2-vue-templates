import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/m6-l2-vue-templates/', // 👈 nombre exacto de tu repo
})
