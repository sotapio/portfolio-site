/**
 * Portfolio - 共通JavaScript
 * ハンバーガーメニュー・スクロールヘッダー・フェードイン
 */
(function () {
  'use strict';

  const HEADER_ID = 'js-header';
  const NAV_ID = 'js-nav';
  const TRIGGER_ID = 'js-trigger';
  const SCROLL_THRESHOLD = 20;
  const FADE_SELECTOR = '.u-fadeIn';

  /**
   * ハンバーガーメニュー開閉
   */
  function initHamburger() {
    const trigger = document.getElementById(TRIGGER_ID);
    const nav = document.getElementById(NAV_ID);
    if (!trigger || !nav) return;

    function open() {
      trigger.setAttribute('aria-expanded', 'true');
      trigger.setAttribute('aria-label', 'メニューを閉じる');
      trigger.classList.add('is-open');
      nav.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }

    function close() {
      trigger.setAttribute('aria-expanded', 'false');
      trigger.setAttribute('aria-label', 'メニューを開く');
      trigger.classList.remove('is-open');
      nav.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    function toggle() {
      const isOpen = nav.classList.contains('is-open');
      if (isOpen) close();
      else open();
    }

    trigger.addEventListener('click', function () {
      toggle();
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        close();
      });
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth >= 768) close();
    });
  }

  /**
   * スクロールでヘッダーに is-scrolled を付与（透明ヘッダー用）
   */
  function initHeaderScroll() {
    const header = document.getElementById(HEADER_ID);
    if (!header || !header.classList.contains('is-transparent')) return;

    function update() {
      if (window.scrollY > SCROLL_THRESHOLD) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }

    window.addEventListener('scroll', function () {
      requestAnimationFrame(update);
    }, { passive: true });
    update();
  }

  /**
   * フェードイン（Intersection Observer）
   */
  function initFadeIn() {
    const elements = document.querySelectorAll(FADE_SELECTOR);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      {
        rootMargin: '0px 0px -40px 0px',
        threshold: 0
      }
    );

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  /**
   * 現在ページのナビに .is-current を付与
   */
  function setCurrentNav() {
    const path = window.location.pathname;
    const fileName = path.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.l-header__navLink[href]');
    navLinks.forEach(function (link) {
      const href = link.getAttribute('href');
      const isIndex = fileName === '' || fileName === 'index.html';
      const isAbout = href === 'about.html' && fileName === 'about.html';
      const isWorks = (href === 'works.html' && (fileName === 'works.html' || fileName.indexOf('works-detail') === 0));
      const isVision = href === 'vision.html' && fileName === 'vision.html';
      const isTop = href === 'index.html' && isIndex;
      if (isTop || isAbout || isWorks || isVision) {
        link.classList.add('is-current');
      }
    });
  }

  function init() {
    initHamburger();
    initHeaderScroll();
    initFadeIn();
    setCurrentNav();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
