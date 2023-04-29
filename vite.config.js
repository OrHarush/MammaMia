import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      cache: false,
      fix: true,
      include: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  base: '/',
});
