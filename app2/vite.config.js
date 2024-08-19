import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/page-deploy/app2/',  // <-- Add the subdirectory
  plugins: [react()]
});
