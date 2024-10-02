import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react({ jsxImportSource: '@emotion/react' }),
    svgr()
  ],
  server: {
    port: 3000,
    strictPort: true,
  },
  build: {
    target: 'esnext',  // 최신 JavaScript 버전으로 빌드
    minify: 'terser',   // minify 설정
    sourcemap: false,   // 소스맵 비활성화 (선택 사항)
  },
});