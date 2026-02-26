# portfolio-site

フロントエンドエンジニアのポートフォリオサイトです。  
Next.js（App Router）で構築しています。

## 環境

- **Node.js** … 推奨は 20.x 以上
- **パッケージマネージャ** … npm / pnpm など

## セットアップ

```bash
npm install
# または
pnpm install
```

## 開発サーバー

```bash
npm run dev
# または
pnpm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## ビルド・本番起動

```bash
npm run build
npm start
```

## プロジェクト構成

| 場所 | 内容 |
|------|------|
| `src/app/` | ページ（`page.tsx`）とレイアウト（`layout.tsx`） |
| `src/components/` | 共通コンポーネント（Header, Footer, FadeIn, FirstViewDots） |
| `src/app/globals.css` | グローバルスタイル（FLOCSS/BEM） |
| `public/assets/images/` | 画像（Works サムネイル・スクショ、Profile 写真・バンドロゴなど） |

- **フォント**: Google Fonts（Noto Sans JP, Montserrat, Roboto）を `<link>` で読み込み

## ルート一覧

| パス | 内容 |
|------|------|
| `/` | トップ（ファーストビュー・ドット背景） |
| `/about` | About（STORY・SKILL） |
| `/profile` | Profile |
| `/works` | Works 一覧 |
| `/works/detail` | Works 詳細（#home-log, #cajica） |
| `/vision` | Vision |

## 画像について

`public/assets/images/` に以下を配置しています。

- Works: `banner_main_kiwimaru.png`, `IMG_5127.png` ～ `IMG_5130.png`
- Profile: `face.jpg`, `Maki.png`, `ORAL.png`, `SiM.png`

追加・差し替え時は同じフォルダに置いてください。
