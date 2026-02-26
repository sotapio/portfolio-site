import type { Metadata } from 'next';
import Link from 'next/link';
import FirstViewDots from '@/components/FirstViewDots';

export const metadata: Metadata = {
  title: 'Portfolio | フロントエンドエンジニア',
  description: 'フロントエンドエンジニアのポートフォリオサイト。ストーリーとビジョンでポテンシャルをお伝えします。',
};

export default function HomePage() {
  return (
    <main className="p-firstView" role="main">
      <div className="p-firstView__bg" aria-hidden="true">
        <FirstViewDots />
      </div>
      <div className="p-firstView__inner">
        <p className="p-firstView__catch heading--en">Ojika&apos;s Portfolio</p>
        <p className="p-firstView__lead">経歴・作品・これからのビジョン。</p>
        <nav className="p-firstView__nav" aria-label="メインナビゲーション">
          <Link href="/about" className="p-firstView__navLink">About</Link>
          <Link href="/profile" className="p-firstView__navLink">Profile</Link>
          <Link href="/works" className="p-firstView__navLink">Works</Link>
          <Link href="/vision" className="p-firstView__navLink p-firstView__navLink--primary">Vision</Link>
        </nav>
        <div className="p-firstView__external" aria-label="外部リンク">
          <a href="https://github.com/" className="p-firstView__externalLink" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="#" className="p-firstView__externalLink" target="_blank" rel="noopener noreferrer">Qiita</a>
          <a href="#" className="p-firstView__externalLink" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
        </div>
      </div>
    </main>
  );
}
