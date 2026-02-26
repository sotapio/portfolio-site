'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/profile', label: 'Profile' },
  { href: '/works', label: 'Works' },
  { href: '/vision', label: 'Vision' },
] as const;

export default function Header() {
  const pathname = usePathname();
  const transparent = pathname === '/';
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!transparent) return;
    const update = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, [transparent]);

  useEffect(() => {
    if (navOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [navOpen]);

  useEffect(() => {
    const close = () => setNavOpen(false);
    const onResize = () => { if (window.innerWidth >= 768) close(); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const isCurrent = (href: string) => {
    if (href === '/') return pathname === '/';
    if (href === '/works') return pathname === '/works' || pathname.startsWith('/works/');
    return pathname === href;
  };

  const headerClass = [
    'l-header',
    transparent ? 'is-transparent' : '',
    transparent && scrolled ? 'is-scrolled' : '',
  ].filter(Boolean).join(' ');

  return (
    <header className={headerClass} role="banner">
      <div className="l-header__inner">
        <Link href="/" className="l-header__logo">Portfolio</Link>
        <nav
          className={`l-header__nav${navOpen ? ' is-open' : ''}`}
          aria-label="メインナビゲーション"
        >
          <ul className="l-header__navList">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`l-header__navLink${isCurrent(href) ? ' is-current' : ''}`}
                  onClick={() => setNavOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          className={`l-header__trigger${navOpen ? ' is-open' : ''}`}
          aria-expanded={navOpen}
          aria-controls="header-nav"
          aria-label={navOpen ? 'メニューを閉じる' : 'メニューを開く'}
          onClick={() => setNavOpen((o) => !o)}
        >
          <span className="l-header__triggerLine" />
          <span className="l-header__triggerLine" />
          <span className="l-header__triggerLine" />
        </button>
      </div>
    </header>
  );
}
