const path = require('path');
const { defineConfig } = require('vite');
const vue = require('@vitejs/plugin-vue');

const __dirname = path.resolve();

module.exports = defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
});
