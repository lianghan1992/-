
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // 将 /api 请求代理到远程服务器，作为备用或开发环境下的相对路径支持
      '/api': {
        target: 'https://autoinsight_api.jingyu.today:8081',
        changeOrigin: true, // 必须设置为 true，否则后端会收到错误的 Host 头
        secure: false, // 如果目标服务器使用自签名证书，可能需要此选项
      },
      // 将 WebSocket 连接也代理到后端服务器 (Note: Remote server might need wss if https)
      '/socket.io': {
        target: 'wss://autoinsight_api.jingyu.today:8081',
        ws: true, // 启用 WebSocket 代理
        secure: false,
        changeOrigin: true,
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
        },
      },
    },
    // Increase chunk size warning limit to 1000KB
    chunkSizeWarningLimit: 1000,
  },
})