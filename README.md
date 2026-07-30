Node.js (Vite) × p5.jsp5.jsの扱いやすさをそのままに、高速なフロントエンドビルドツール「Vite（バイト）」を組み合わせる構成です。

環境構築: DockerでNode.jsのコンテナを1つ立てるだけで完結します。ホットリロード: Viteの強力なHMR（Hot Module Replacement）機能により、ブラウザ上の描画が状態を維持したまま、1秒未満でリアルタイムに書き換わります。生成AIの試行錯誤と最も相性が良いWeb構成。

これをこのワークスペースでdev conatinerの環境として構築してください。

---

## 使い方

1. VS Code でこのフォルダを開き、コマンドパレットから **Dev Containers: Reopen in Container** を実行する（初回はイメージの取得と `npm install` で数分かかります）。
2. コンテナ内のターミナルで開発サーバーを起動する。

   ```bash
   npm run dev
   ```

3. http://localhost:5173 をブラウザで開く（ポート 5173 は自動フォワードされます）。
4. [src/main.js](src/main.js) を編集して保存すると、ページ全体をリロードせずにスケッチだけが差し替わります。

## コマンド

| コマンド | 内容 |
| --- | --- |
| `npm run dev` | Vite 開発サーバー（HMR 有効） |
| `npm run build` | `dist/` へ本番ビルド |
| `npm run preview` | ビルド結果をローカル配信して確認 |

## 構成

- [.devcontainer/devcontainer.json](.devcontainer/devcontainer.json) — Node.js 22 のコンテナ定義。`node_modules` は名前付きボリュームに置き、Windows のバインドマウト経由の I/O を回避しています。
- [vite.config.js](vite.config.js) — `host: true` でコンテナ外からアクセス可能に。ファイル監視はポーリングにして Windows でも HMR が確実に効くようにしています。
- [src/main.js](src/main.js) — p5.js のスケッチ本体（インスタンスモード）。`import.meta.hot` でスケッチだけを作り直します。