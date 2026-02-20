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
   * ファーストビュー背景ドット：マウスに寄る動き
   */
  function initFirstViewDots() {
    const container = document.getElementById('js-firstView-dots');
    const bg = container && container.closest('.p-firstView__bg');
    if (!container || !bg) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const SPACING = 28; /* 小さくするほどドット数が増える（32→20 で約2.5倍、16 で約4倍） */
    const DOT_SIZE = 4;
    const ATTRACT_RADIUS = 360;
    const MAX_MOVE = 480;
    const dots = [];
    let mouseX = null;
    let mouseY = null;
    let rafId = null;

    function createDots() {
      const w = container.offsetWidth;
      const h = container.offsetHeight;
      const cols = Math.ceil(w / SPACING) + 1;
      const rows = Math.ceil(h / SPACING) + 1;
      container.innerHTML = '';
      dots.length = 0;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const cx = col * SPACING + SPACING / 2;
          const cy = row * SPACING + SPACING / 2;
          const el = document.createElement('span');
          el.className = 'p-firstView__dot';
          el.style.left = (cx - DOT_SIZE / 2) + 'px';
          el.style.top = (cy - DOT_SIZE / 2) + 'px';
          container.appendChild(el);
          dots.push({ el: el, cx: cx, cy: cy });
        }
      }
      bg.classList.add('has-dots');
    }

    function updateDots() {
      if (mouseX === null || mouseY === null) {
        dots.forEach(function (d) {
          d.el.style.transform = 'translate(0, 0)';
        });
        return;
      }
      dots.forEach(function (d) {
        const dx = mouseX - d.cx;
        const dy = mouseY - d.cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < ATTRACT_RADIUS && dist > 0) {
          const t = 1 - dist / ATTRACT_RADIUS;
          const move = MAX_MOVE * t * t;
          const ox = (dx / dist) * move;
          const oy = (dy / dist) * move;
          d.el.style.transform = 'translate(' + ox + 'px, ' + oy + 'px)';
        } else {
          d.el.style.transform = 'translate(0, 0)';
        }
      });
    }

    function onFrame() {
      rafId = null;
      updateDots();
    }

    function onMouseMove(e) {
      const rect = container.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      if (rafId === null) {
        rafId = requestAnimationFrame(onFrame);
      }
    }

    function onMouseLeave() {
      mouseX = null;
      mouseY = null;
      if (rafId === null) {
        rafId = requestAnimationFrame(onFrame);
      }
    }

    createDots();
    const firstView = container.closest('.p-firstView');
    if (firstView) {
      firstView.addEventListener('mousemove', onMouseMove, { passive: true });
      firstView.addEventListener('mouseleave', onMouseLeave);
    }
    window.addEventListener('resize', function () {
      createDots();
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
    initFirstViewDots();
    setCurrentNav();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
