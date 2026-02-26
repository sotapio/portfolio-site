import type { Metadata } from 'next';
import FadeIn from '@/components/FadeIn';

export const metadata: Metadata = {
  title: 'Profile（プロフィール） | Portfolio',
  description: 'プロフィール。経歴・スキル・連絡先など。',
};

export default function ProfilePage() {
  return (
    <main className="l-main" role="main">
      <div className="l-main__inner">
        <FadeIn>
          <h1 className="c-pageTitle heading--en">Profile</h1>
        </FadeIn>
      </div>
    </main>
  );
}
