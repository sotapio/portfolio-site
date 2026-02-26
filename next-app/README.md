# Portfolio（Next.js）

`portforio/` の静的 HTML サイトを Next.js（App Router）に移行したポートフォリオです。  
**ページ内容・CSS・画像はすべて portforio から next-app に移してあります。**

## セットアップ

```bash
npm install
```

## 開発サーバー

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## ビルド・本番起動

```bash
npm run build
npm start
```

## 画像について

portforio の画像は **すでに** `public/assets/images/` にコピー済みです。

- `banner_main_kiwimaru.png` … Works 一覧の Home-LOG サムネイル
- `IMG_5127.png`, `IMG_5128.png`, `IMG_5129.png`, `IMG_5130.png` … Works 詳細の Home-LOG スクリーンショット

追加・差し替えする場合は `public/assets/images/` に配置してください。

## 構成

- **App Router**: `src/app/` にページ（`page.tsx`）とレイアウト（`layout.tsx`）
- **共通コンポーネント**: `src/components/`（Header, Footer, FadeIn, FirstViewDots）
- **スタイル**: 既存の FLOCSS/BEM を `src/app/globals.css` に移行
- **フォント**: Google Fonts（Noto Sans JP, Montserrat, Roboto）を `<link>` で読み込み

## ルート構成

| パス | 内容 |
|------|------|
| `/` | トップ（ファーストビュー） |
| `/about` | About（STORY・SKILL） |
| `/profile` | Profile |
| `/works` | Works 一覧 |
| `/works/detail` | Works 詳細（#home-log, #cajica） |
| `/vision` | Vision |
