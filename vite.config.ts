import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const webbasepath = process.env.WEBBASEPATH || '/';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: webbasepath,
  define: {
    _WEB_BASE_PATH_ : JSON.stringify(webbasepath),
  },
})
