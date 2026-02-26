import type { Metadata } from 'next';
import Image from 'next/image';
import FadeIn from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'Profile（プロフィール） | Portfolio',
  description: 'プロフィール。経歴・スキル・連絡先など。',
};

const BAND_LOGOS = [
  { src: '/assets/images/Maki.png', alt: 'Maki', href: 'https://maki-official.com/' },
  { src: '/assets/images/ORAL.png', alt: 'ORAL', href: 'https://theoralcigarettes.com/' },
  { src: '/assets/images/SiM.png', alt: 'SiM', href: 'https://sxixm.com/' },
] as const;

const LOGO_SIZE = 140;

export default function ProfilePage() {
  return (
    <main className="l-main p-profile" role="main">
      <div className="l-main__inner">
        <FadeIn>
          <h1 className="c-pageTitle heading--en">Profile</h1>
        </FadeIn>

        <FadeIn>
          <header className="p-profile__header">
            <Image
              src="/assets/images/face.jpg"
              alt="小鹿颯汰のプロフィール写真"
              width={200}
              height={200}
              className="p-profile__photo"
              priority
            />
            <div>
              <p className="p-profile__name">小鹿颯汰</p>
              <dl className="p-profile__meta">
                <div>
                  <dt className="p-profile__sectionTitle">学校</dt>
                  <dd className="p-profile__sectionBody">HAL名古屋 高度情報学科 Web開発コース</dd>
                </div>
              </dl>
            </div>
          </header>
        </FadeIn>

        <FadeIn>
          <section className="p-profile__section">
            <h2 className="p-profile__sectionTitle">普段やっていること</h2>
            <p className="p-profile__sectionBody">
              学校での基本的なプログラミング言語の習得、ネットワーク、データベース、プロジェクトマネジメントなどの基礎的な知識の勉強、学外では、ハッカソンや業務委託として技術力、思考力の研鑽をしています。
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="p-profile__section">
            <h2 className="p-profile__sectionTitle">趣味</h2>
            <p className="p-profile__sectionBody">バンドのライブに行き暴れること</p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className="p-profile__section">
            <h2 className="p-profile__sectionTitle">好きなバンド</h2>
            <div className="p-profile__bandLogos" aria-label="好きなバンドのロゴ">
              {BAND_LOGOS.map((band) => (
                <a
                  key={band.alt}
                  href={band.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-profile__bandLogoLink"
                  title={`${band.alt} 公式サイト`}
                >
                  <Image
                    src={band.src}
                    alt={band.alt}
                    width={LOGO_SIZE}
                    height={LOGO_SIZE}
                    className="p-profile__bandLogo"
                  />
                </a>
              ))}
            </div>
          </section>
        </FadeIn>
      </div>
    </main>
  );
}
