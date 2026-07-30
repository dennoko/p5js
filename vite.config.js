import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    // コンテナ外(ホストのブラウザ)からアクセスできるように 0.0.0.0 で待ち受ける
    host: true,
    port: 5173,
    strictPort: true,
    watch: {
      // Windows のバインドマウトではファイル変更イベントが届かないことがあるため
      // ポーリングで確実に HMR を効かせる
      usePolling: true,
      interval: 300,
    },
  },
});
