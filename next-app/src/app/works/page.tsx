import type { Metadata } from 'next';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'Works（制作実績） | Portfolio',
  description: '制作実績一覧。Webアプリ・LP・コーポレートサイトなどのポートフォリオです。',
};

const WORKS = [
  {
    id: 'home-log',
    title: '家電・家具管理アプリ Home-LOG',
    tech: 'HTML / CSS / JavaScript',
    thumb: '/assets/images/banner_main_kiwimaru.png',
    thumbAlt: '家電・家具管理アプリ Home-LOG のサムネイル',
  },
  {
    id: 'cajica',
    title: '電子名刺アプリ cajica',
    tech: 'HTML / CSS / JavaScript',
    thumb: 'https://placehold.co/800x500/F4F7F6/5D6D7E?text=cajica',
    thumbAlt: '電子名刺アプリ cajica のサムネイル',
  },
];

export default function WorksPage() {
  return (
    <main className="l-main" role="main">
      <div className="l-main__inner">
        <FadeIn>
          <h1 className="c-pageTitle heading--en">Works</h1>
        </FadeIn>
        <FadeIn>
          <p className="p-works__lead">
            これまでに携わった制作物の一部です。プロジェクトの背景・担当範囲・アプローチは各詳細ページでご覧いただけます。
          </p>
        </FadeIn>

        <div className="p-works__grid">
          {WORKS.map((work) => (
            <article key={work.id} className="p-worksCard">
              <FadeIn>
                <Link href={`/works/detail#${work.id}`} className="p-worksCard__link">
                  <img
                    src={work.thumb}
                    alt={work.thumbAlt}
                    className="p-worksCard__thumb"
                    width={800}
                    height={500}
                  />
                  <div className="p-worksCard__body">
                    <h2 className="p-worksCard__title">{work.title}</h2>
                    <p className="p-worksCard__tech">{work.tech}</p>
                  </div>
                </Link>
              </FadeIn>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
