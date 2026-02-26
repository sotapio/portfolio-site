import React from 'react';
import type { Metadata } from 'next';
import FadeIn from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'About（STORY） | Portfolio',
  description: 'なぜエンジニアを目指したか、どんな壁をどう乗り越えたか。成長のストーリーとスキルをご紹介します。',
};

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const SKILLS = {
  languages: [
    { icon: `${CDN}/html5/html5-original.svg`, name: 'HTML5' },
    { icon: `${CDN}/css3/css3-original.svg`, name: 'CSS3' },
    { icon: `${CDN}/javascript/javascript-original.svg`, name: 'JavaScript' },
    { icon: `${CDN}/typescript/typescript-original.svg`, name: 'TypeScript' },
    { icon: `${CDN}/python/python-original.svg`, name: 'Python' },
    { icon: `${CDN}/php/php-original.svg`, name: 'PHP' },
  ],
  frameworks: [
    { icon: `${CDN}/react/react-original.svg`, name: 'React' },
    { icon: `${CDN}/nextjs/nextjs-original.svg`, name: 'Next.js' },
    { icon: `${CDN}/vuejs/vuejs-original.svg`, name: 'Vue.js' },
    { icon: `${CDN}/react/react-original.svg`, name: 'React Native' },
    { icon: `${CDN}/sass/sass-original.svg`, name: 'Sass' },
    { icon: `${CDN}/tailwindcss/tailwindcss-original.svg`, name: 'Tailwind CSS' },
    { icon: `${CDN}/django/django-plain.svg`, name: 'Django' },
    { icon: `${CDN}/laravel/laravel-original.svg`, name: 'Laravel' },
    { icon: `${CDN}/flask/flask-original.svg`, name: 'Flask' },
    { icon: `${CDN}/wordpress/wordpress-plain.svg`, name: 'WordPress' },
  ],
  tools: [
    { icon: `${CDN}/docker/docker-original.svg`, name: 'Docker' },
    { icon: `${CDN}/git/git-original.svg`, name: 'Git' },
    { icon: `${CDN}/github/github-original.svg`, name: 'GitHub' },
    { icon: `${CDN}/vscode/vscode-original.svg`, name: 'VS Code' },
    { icon: `${CDN}/linux/linux-original.svg`, name: 'Linux' },
    { icon: `${CDN}/figma/figma-original.svg`, name: 'Figma' },
    { icon: `${CDN}/illustrator/illustrator-plain.svg`, name: 'Adobe Illustrator' },
    { icon: `${CDN}/photoshop/photoshop-plain.svg`, name: 'Adobe Photoshop' },
  ],
  others: [
    /* devicons の Instagram が取得できないため Simple Icons を使用 */
    { icon: 'https://cdn.simpleicons.org/instagram', name: 'Instagram' },
    { icon: `${CDN}/twitter/twitter-original.svg`, name: 'X (Twitter)' },
    { icon: `${CDN}/google/google-original.svg`, name: 'Gmail' },
    { icon: `${CDN}/notion/notion-original.svg`, name: 'Notion' },
    { icon: `${CDN}/raspberrypi/raspberrypi-original.svg`, name: 'Raspberry Pi' },
  ],
};

const PERIOD_LIST = [
  { term: 'HTML / CSS', desc: '2022年6月〜2024年9月 — 個人開発、授業' },
  { term: 'React Native', desc: '2025年10月〜 — 業務委託' },
  { term: 'JavaScript', desc: '2023年4月〜 — 授業、ハッカソン' },
  { term: 'React', desc: '2024年6月〜 — 授業、ハッカソン' },
  { term: 'Next.js', desc: '2025年1月〜2025年7月 — ハッカソン' },
  { term: 'Vue.js', desc: '2025年1月〜2025年8月 — ハッカソン' },
  { term: 'TypeScript', desc: '2025年1月〜 — ハッカソン、業務委託' },
  { term: 'Python（Flask, Django）', desc: '2023年4月〜2025年3月 — 授業' },
  { term: 'Flask', desc: '2023年4月〜2025年3月 — 授業' },
  { term: 'Django', desc: '2023年4月〜2025年10月 — 授業、業務委託' },
  { term: 'PHP', desc: '2025年4月〜 — 授業' },
  { term: 'Laravel', desc: '2025年4月〜 — 授業' },
];

function SkillRow({ items }: { items: { icon: string; name: string }[] }) {
  return (
    <div className="p-skills__iconRow">
      {items.map((item) => (
        <span key={item.name} className="p-skills__iconItem">
          <img src={item.icon} alt="" className="p-skills__iconImg" width={28} height={28} />
          {item.name}
        </span>
      ))}
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="l-main" role="main">
      <div className="l-main__inner">
        <FadeIn>
          <h1 className="c-pageTitle heading--en">About</h1>
        </FadeIn>
        <FadeIn>
          <p className="p-about__lead">
            なぜエンジニアを目指したか、どんな壁にぶつかり、どう乗り越えてきたかなど成長のプロセス。
          </p>
        </FadeIn>

        <FadeIn>
          <h2 className="p-about__sectionTitle">STORY（経歴）</h2>
        </FadeIn>
        <div className="p-timeline">
          <FadeIn>
            <article className="p-timeline__item">
              <p className="p-timeline__year">2022</p>
              <h3 className="p-timeline__title">プログラミングとの出会い</h3>
              <p className="p-timeline__desc">
                高校2年生の時に、授業でC言語の虫食い問題に取り組みました。また、他校の商業科の友達がHTML・CSSを使ったWebサイト作成の課題を手伝ったことをきっかけに、プログラミングの面白さを感じ、自分でProgateを使って勉強を始めました。
              </p>
            </article>
          </FadeIn>
          <FadeIn>
            <article className="p-timeline__item">
              <p className="p-timeline__year">2023</p>
              <h3 className="p-timeline__title">HAL名古屋入学、本格的に学習</h3>
              <p className="p-timeline__desc">
                HAL名古屋に入学し、HTML・CSS・JavaScript、Python（Flask・Django）などを学びました。基礎から実践的なWeb開発まで、授業を通じて技術の土台を築きました。
              </p>
            </article>
          </FadeIn>
          <FadeIn>
            <article className="p-timeline__item">
              <p className="p-timeline__year">2024</p>
              <h3 className="p-timeline__title">チーム開発と個人での挑戦</h3>
              <p className="p-timeline__desc">
                学校内でチーム開発に参加しつつ、個人的にマネタイズやSNS運用などの勉強にも取り組みました。開発だけでなく、サービスを届けるまでの一連の流れに関心を広げた一年でした。
              </p>
            </article>
          </FadeIn>
          <FadeIn>
            <article className="p-timeline__item">
              <p className="p-timeline__year">2025</p>
              <h3 className="p-timeline__title">就活・ハッカソン・インターン・実務</h3>
              <p className="p-timeline__desc">
                1月から就活を見据え、技育CAMPハッカソンなどに複数回出場しました。【技育CAMP2024】ハッカソン Vol.21 最優秀賞、【技育CAMP2025】ハッカソン Vol.5 即席チーム 努力賞、Vol.6 努力賞、技育展 決勝進出などの実績があります。
              </p>
              <p className="p-timeline__desc">
                <strong>インターン経験</strong>：<br />
                BEENOS株式会社（8/18〜8/29）では大規模越境ECサイト「Buyee」のリファクタリング<br />
                株式会社デジタルガレージ（7/23〜7/29）ではfintechをテーマにした事業立案〜ピッチまでを経験しました。
              </p>
              <p className="p-timeline__desc">
                <strong>実務経験（業務委託）</strong>：<br />
                株式会社TreyLinkに5月下旬から参画し、自社アプリ「Home-LOG」の開発やテストユーザーへのヒアリングなどを現在も継続して行っています。
              </p>
            </article>
          </FadeIn>
        </div>

        <FadeIn>
          <h2 className="p-about__sectionTitle">SKILL</h2>
        </FadeIn>
        <div className="p-skills">
          <FadeIn>
            <p className="p-skills__categoryLabel">使用経験のある言語・技術をカテゴリ別にまとめています。</p>
          </FadeIn>

          <FadeIn>
            <div className="p-skills__categoryBlock">
              <p className="p-skills__categoryLabel">Programming Languages（使用経験のある言語）</p>
              <SkillRow items={SKILLS.languages} />
            </div>
          </FadeIn>
          <FadeIn>
            <div className="p-skills__categoryBlock">
              <p className="p-skills__categoryLabel">Frameworks & Libraries（使用経験のあるフレームワーク・ライブラリ）</p>
              <SkillRow items={SKILLS.frameworks} />
            </div>
          </FadeIn>
          <FadeIn>
            <div className="p-skills__categoryBlock">
              <p className="p-skills__categoryLabel">Dev Tools / Cloud / Others（開発・設計で使用しているツール）</p>
              <SkillRow items={SKILLS.tools} />
            </div>
          </FadeIn>
          <FadeIn>
            <div className="p-skills__categoryBlock">
              <p className="p-skills__categoryLabel">Others（その他のツール）</p>
              <SkillRow items={SKILLS.others} />
            </div>
          </FadeIn>

          <FadeIn>
            <div className="p-skills__periodSection">
              <h3 className="p-skills__periodTitle">使用期間・用途</h3>
              <dl className="p-skills__periodList">
                {PERIOD_LIST.map(({ term, desc }) => (
                  <React.Fragment key={term}>
                    <dt>{term}</dt>
                    <dd>{desc}</dd>
                  </React.Fragment>
                ))}
              </dl>
            </div>
          </FadeIn>
        </div>
      </div>
    </main>
  );
}
