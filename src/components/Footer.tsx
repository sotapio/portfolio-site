import Link from 'next/link';

const NAV_LINKS = [
  { href: '/', label: 'Top' },
  { href: '/about', label: 'About' },
  { href: '/profile', label: 'Profile' },
  { href: '/works', label: 'Works' },
  { href: '/vision', label: 'Vision' },
];

export default function Footer() {
  return (
    <footer className="l-footer" role="contentinfo">
      <div className="l-footer__inner">
        <nav className="l-footer__nav" aria-label="フッターナビゲーション">
          <ul className="l-footer__navList">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="l-footer__navLink">{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className="l-footer__copy">&copy; 2025 Portfolio. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
