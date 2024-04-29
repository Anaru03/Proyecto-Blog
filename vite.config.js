import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
  },
  jsx: {
    factory: 'React.createElement',
    fragment: 'React.Fragment',
    jsxRuntime: 'classic',
  },
  resolve: {
    alias: {
      '@pages': '/src/pages',
    }
  }
})
