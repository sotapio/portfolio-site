import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'Works Detail | Portfolio',
  description: '制作実績の詳細。プロジェクト概要・担当範囲・背景・アプローチをご紹介します。',
};

/** 制作実績のメタ情報（Role, Year/Duration） */
interface WorkDetailMeta {
  role: string;
  yearDuration: string;
}

/** セクション（見出し + 本文1つ） */
interface WorkDetailSection {
  title: string;
  body: string;
}

/** スクリーンショット */
interface ScreenshotItem {
  src: string;
  alt: string;
}

/** ダウンロードリンク（iOS / Android） */
interface DownloadLink {
  label: string;
  href: string;
  text: string;
}

/** 外部リンク（紹介プレゼンなど） */
interface ExternalLink {
  href: string;
  label: string;
}

/** 1件の制作実績詳細データ */
interface WorkDetailData {
  id: string;
  title: string;
  meta: WorkDetailMeta;
  sections: WorkDetailSection[];
  screenshots?: ScreenshotItem[];
  downloadLinks?: DownloadLink[];
  externalLink?: ExternalLink;
  sectionNote?: string; // スクショ or 紹介プレゼン用の注釈
}

const HOME_LOG_SCREENSHOTS: ScreenshotItem[] = [
  { src: '/assets/images/IMG_5127.png', alt: 'Home-LOG ホーム画面' },
  { src: '/assets/images/IMG_5129.png', alt: 'Home-LOG 家具家電の追加方法選択画面' },
  { src: '/assets/images/IMG_5128.png', alt: 'Home-LOG 一覧画面' },
  { src: '/assets/images/IMG_5130.png', alt: 'Home-LOG アイテム詳細画面' },
];

const WORKS_DETAIL: WorkDetailData[] = [
  {
    id: 'home-log',
    title: '家電・家具管理アプリ Home-LOG',
    meta: {
      role: 'フロントエンド実装（UI作成・画面実装・ヒアリング）',
      yearDuration: '2025年 / 約8ヶ月',
    },
    sections: [
      {
        title: 'プロジェクト概要',
        body: '自宅の家具・家電を登録し、購入日や保証期限を一覧で管理できるWebアプリです。家族で共有して「いつ買ったか」「保証はいつまでか」をすぐに確認できることを目的としています。',
      },
      {
        title: '背景・課題',
        body: '家電の保証書や領収書が散らばり、故障時に保証期間内かどうかすぐに分からないという声がありました。また、複数人で同じアカウントで管理できる必要があり、シンプルなUIで情報の追加・編集・削除がしやすいことが求められていました。',
      },
      {
        title: 'アプローチと思考プロセス',
        body: 'フレームワークを使わずVanilla JavaScriptで実装し、保守性を保つために「画面＝コンポーネント」という単位でJSを分割しました。一覧はカード形式のグリッドとし、保証期限が近いものは色で分かるようにCSS変数で状態ごとの色を定義しました。フォームは入力チェックとエラーメッセージを同一画面内で表示し、送信前の確認ステップを減らして離脱を防ぐ設計にしています。',
      },
    ],
    screenshots: HOME_LOG_SCREENSHOTS,
    sectionNote: 'アプリの操作画面スクリーンショットです。',
    downloadLinks: [
      { label: 'iOS：', href: 'https://apps.apple.com/jp/app/%E3%83%9B%E3%83%A0%E3%83%AD%E3%82%B0-home-log/id6756227855', text: 'App Store でダウンロード' },
      { label: 'Android：', href: 'https://play.google.com/store/apps/details?id=jp.treylink.homelog', text: 'Google Play でダウンロード' },
    ],
  },
  {
    id: 'cajica',
    title: '電子名刺アプリ cajica',
    meta: {
      role: 'フルスタック開発',
      yearDuration: '2026年 / 約1ヶ月',
    },
    sections: [
      {
        title: 'プロジェクト概要',
        body: '名刺情報を登録し、QRコードで相手に共有できる電子名刺のWebアプリです。スマートフォンからでも見やすく、SNSやメールアドレスをワンタップで開けるようにすることを目指しました。',
      },
      {
        title: '背景・課題',
        body: '対面の商談やイベントで、紙の名刺だけでは後から連絡手段を探しづらい・情報が古くなりがちという課題がありました。QRで渡せる電子名刺であれば、相手のスマホにすぐ情報が残り、自分側でも更新した内容がそのまま反映される形にしたかったです。',
      },
      {
        title: 'アプローチと思考プロセス',
        body: '名刺の「見た目」を再現しつつ、タップ領域を十分に確保するため、ボタンやリンクにはmin-heightを設け、フォーカス時はアウトラインをはっきりさせるなどアクセシビリティを意識しました。QRコードは外部ライブラリに頼らず、Canvas APIで描画する方針にし、バンドルサイズを抑えつつオフラインでも表示できるようにしました。レスポンシブはモバイルファーストで、名刺レイアウトが縦長の画面でも読みやすいようにしています。',
      },
    ],
    sectionNote: 'cajica の紹介スライドです。',
    externalLink: {
      href: 'https://www.canva.com/design/DAG5SOcB7Y8/qdsicfglrNyBYfk46PpLsw/edit?utm_content=DAG5SOcB7Y8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
      label: 'Canva で紹介プレゼンを開く（別タブ）',
    },
  },
];

function WorkDetailArticle({ work }: { work: WorkDetailData }) {
  return (
    <article className="p-workDetail" id={work.id}>
      <FadeIn>
        <header className="p-workDetail__header">
          <h1 className="p-workDetail__title">{work.title}</h1>
          <dl className="p-workDetail__meta">
            <div>
              <dt>Role</dt>
              <dd>{work.meta.role}</dd>
            </div>
            <div>
              <dt>Year / Duration</dt>
              <dd>{work.meta.yearDuration}</dd>
            </div>
          </dl>
        </header>

        {work.sections.map((section) => (
          <section key={section.title} className="p-workDetail__section">
            <h2 className="p-workDetail__sectionTitle">{section.title}</h2>
            <p>{section.body}</p>
          </section>
        ))}

        {work.screenshots && work.sectionNote && (
          <section className="p-workDetail__section">
            <h2 className="p-workDetail__sectionTitle">実際の動作画面</h2>
            <p className="p-workDetail__sectionNote">{work.sectionNote}</p>
            <ul className="p-workDetail__screenshots" aria-label="実際の動作画面スクリーンショット">
              {work.screenshots.map((img) => (
                <li key={img.alt}>
                  <img src={img.src} alt={img.alt} width={400} height={0} loading="lazy" style={{ height: 'auto' }} />
                </li>
              ))}
            </ul>
          </section>
        )}

        {work.downloadLinks && work.downloadLinks.length > 0 && (
          <section className="p-workDetail__section">
            <h2 className="p-workDetail__sectionTitle">▼アプリダウンロードURL（無料）</h2>
            <ul className="p-workDetail__downloadList">
              {work.downloadLinks.map((item) => (
                <li key={item.label}>
                  <strong>{item.label}</strong>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        {work.externalLink && (
          <section className="p-workDetail__section">
            <h2 className="p-workDetail__sectionTitle">紹介プレゼン</h2>
            {work.sectionNote && <p className="p-workDetail__sectionNote">{work.sectionNote}</p>}
            <p>
              <a href={work.externalLink.href} target="_blank" rel="noopener noreferrer" className="p-workDetail__externalLink">
                {work.externalLink.label}
              </a>
            </p>
          </section>
        )}
      </FadeIn>
    </article>
  );
}

export default function WorksDetailPage() {
  return (
    <main className="l-main" role="main">
      <div className="l-main__inner">
        <FadeIn>
          <Link href="/works" className="p-workDetail__back">← Works 一覧に戻る</Link>
        </FadeIn>

        {WORKS_DETAIL.map((work) => (
          <WorkDetailArticle key={work.id} work={work} />
        ))}

        <Link href="/works" className="p-workDetail__back">← Works 一覧に戻る</Link>
      </div>
    </main>
  );
}
