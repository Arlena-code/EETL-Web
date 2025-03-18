import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  base: '/EETL-Web/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Skip if source is not a string or is CSS content
          if (typeof assetInfo.source !== 'string' || assetInfo.source.includes('{')) {
            return 'assets/[name].[hash].[ext]';
          }
          
          // Get relative path
          const relativePath = path.relative(path.join(__dirname, 'src'), assetInfo.source);
          // Preserve folder structure
          const dirname = path.dirname(relativePath).replace('assets', '');
          return `assets${dirname ? '/' + dirname : ''}/[name].[hash].[ext]`;
        }
      }
    }
  }
})
