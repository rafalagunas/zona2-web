import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    port: 3000,
    open: true
  },
  resolve: {
    dedupe: ['react', 'react-dom', 'react-router-dom']
  },
  optimizeDeps: {
    include: ['react-router-dom']
  },
  build: {
    commonjsOptions: {
      include: [/react-router-dom/, /node_modules/],
      transformMixedEsModules: true
    }
  }
})

