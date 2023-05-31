import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      //开启less支持
      less: {
        modifyVars: {
          'primary-color': '#0c75c5',
          'link-color': '#0c75c5',
          'border-radius-base': '2px',
          'layout-header-background': '#4a6b92', // 顶部颜色
          'menu-item-font-size': '15px', // 菜单文字大小
          'menu-icon-size': '15px', // 菜单图标大小
          'menu-dark-submenu-bg': '#005f9f', // 暗色系菜单背景
          'menu-dark-color': '#fff', // 暗色系菜单文字颜色
          'menu-dark-arrow-color': '#fff', // 暗色系右边箭头图标
        },
        javascriptEnabled:true
      }
    }
  }
})
