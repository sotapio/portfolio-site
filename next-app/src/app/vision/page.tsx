import type { Metadata } from 'next';
import FadeIn from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'Vision（未来像） | Portfolio',
  description: '1年後、3年後、5年後のキャリアプランと、技術で誰にどんな価値を届けたいかを語ります。',
};

/** キャリアプランの1項目（1年後 / 3年後 / 5年後） */
interface CareerPlanItem {
  title: string;
  paragraphs: string[];
}

/** Career Plan セクションのデータ */
const CAREER_PLAN_ITEMS: CareerPlanItem[] = [
  {
    title: '1年後',
    paragraphs: [
      '入社後は、既存のフロントエンド資産（コンポーネント・スタイル・JS）を読み解き、バグ修正や小さな機能追加から確実に担当できるようになりたいです。デザインやバックエンドとの境界を意識しつつ、「ここはフロントでこう扱う」と説明できるレベルまで、チームのコードベースと開発フローに慣れます。',
      '並行して、アクセシビリティとパフォーマンスの基礎を実務に落とし込み、レビューで指摘される前に自分で気づけるようにします。',
    ],
  },
  {
    title: '3年後',
    paragraphs: [
      '中規模以上の機能開発を一人で設計・実装できるようになり、デザインシステムやコンポーネント設計に意見を出せる存在でありたいです。新規ページやリニューアルでは、再利用性と保守性を考えた提案ができるようにします。',
      'また、ジュニアメンバーや他職種の方に「フロントで何ができるか」「なぜその実装にしたか」を分かりやすく伝えられるよう、ドキュメントや説明を意識して仕事をします。',
    ],
  },
  {
    title: '5年後',
    paragraphs: [
      'プロダクトのUXを「見た目」だけでなく、パフォーマンス・アクセシビリティ・国際化まで含めて考え、フロントエンド側の技術方針に責任を持てるエンジニアを目指しています。必要に応じてフレームワークやツールの選定・導入にも関わり、チーム全体の生産性と品質の両立に貢献したいです。',
      '一方で、ずっと手を動かし続けることを大切にします。設計だけに寄りすぎず、実装の現場感を忘れないキャリアにしていきます。',
    ],
  },
];

const VALUE_PARAGRAPHS: (string | { text: string; strong: string })[] = [
  { text: '「使う人」と「作る人」の両方に、やさしいフロントエンドで価値を届けたいと考えています。', strong: '「使う人」と「作る人」の両方に、やさしいフロントエンドで価値を届けたい' },
  '利用者にとっては、読みやすく、迷わず、速く動く画面。障害の有無やデバイスに依存しない情報の届け方。技術を使って、ストレスの少ない体験を提供したいです。',
  '一緒に働く仲間にとっては、読みやすく変更しやすいコード、無理のないスケジュールで実現できる提案、そして「なぜそうしたか」が伝わるコミュニケーション。フロントエンドの実装が、プロジェクト全体の足を引っ張らないどころか、安心材料になるような貢献を目指します。',
  '成長フェーズのチームでは、スピードと品質のバランスが日々問われます。その中で、自分は「長く使えるものを作る」ことを忘れず、1年後も3年後もメンテナンスしやすい選択をし続けたいです。',
  { text: 'それらの積み重ねの先に、「この人となら仕事がしたい」と思っていただける存在でいたい。それが、いちばんの目標です。', strong: '「この人となら仕事がしたい」' },
];

function ValueParagraphBlock({ item }: { item: string | { text: string; strong: string } }) {
  if (typeof item === 'string') {
    return <p>{item}</p>;
  }
  const parts = item.text.split(item.strong);
  if (parts.length < 2) return <p>{item.text}</p>;
  return (
    <p>
      {parts[0]}
      <strong>{item.strong}</strong>
      {parts[1]}
    </p>
  );
}

export default function VisionPage() {
  return (
    <main className="l-main p-vision" role="main">
      <div className="l-main__inner">
        <FadeIn>
          <h1 className="c-pageTitle heading--en">Vision</h1>
        </FadeIn>
        <FadeIn>
          <p className="p-vision__lead">
            技術を使って、誰に、どんな価値を届けたいか。そして1年後、3年後、5年後、どのようなエンジニアでありたいかをまとめました。
          </p>
        </FadeIn>
        <FadeIn>
          <p className="p-vision__catch">
            「この人となら仕事がしたい」と思われる存在になりたい。
          </p>
        </FadeIn>

        <section className="p-vision__section">
          <FadeIn>
            <h2 className="p-vision__sectionTitle">Career Plan</h2>
          </FadeIn>

          {CAREER_PLAN_ITEMS.map((item) => (
            <FadeIn key={item.title}>
              <div className="p-vision__subsection">
                <h3 className="p-vision__subsectionTitle">{item.title}</h3>
                <div className="p-vision__body">
                  {item.paragraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </section>

        <section className="p-vision__section">
          <FadeIn>
            <h2 className="p-vision__sectionTitle">Value I Want to Provide</h2>
          </FadeIn>
          <FadeIn>
            <div className="p-vision__body">
              {VALUE_PARAGRAPHS.map((item, i) => (
                <ValueParagraphBlock key={i} item={item} />
              ))}
            </div>
          </FadeIn>
        </section>
      </div>
    </main>
  );
}
