import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: './build',
    rollupOptions: {
        input: {
          // entry point for compilation; normally would be "./index.html"
          app: 'src/index.jsx',
        }
    }
  },
});