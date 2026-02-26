'use client';

import { useEffect, useRef } from 'react';

const SPACING = 28;
const DOT_SIZE = 4;
const ATTRACT_RADIUS = 360;
const MAX_MOVE = 480;

export default function FirstViewDots() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<Array<{ el: HTMLSpanElement; cx: number; cy: number }>>([]);
  const mouseRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const bg = container?.closest('.p-firstView__bg');
    if (!container || !bg) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    function createDots() {
      if (!container) return;
      const w = container.offsetWidth;
      const h = container.offsetHeight;
      const cols = Math.ceil(w / SPACING) + 1;
      const rows = Math.ceil(h / SPACING) + 1;
      container.innerHTML = '';
      dotsRef.current = [];

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const cx = col * SPACING + SPACING / 2;
          const cy = row * SPACING + SPACING / 2;
          const el = document.createElement('span');
          el.className = 'p-firstView__dot';
          el.style.left = `${cx - DOT_SIZE / 2}px`;
          el.style.top = `${cy - DOT_SIZE / 2}px`;
          container.appendChild(el);
          dotsRef.current.push({ el, cx, cy });
        }
      }
      if (bg) bg.classList.add('has-dots');
    }

    function updateDots() {
      rafRef.current = null;
      const { x: mouseX, y: mouseY } = mouseRef.current;
      if (mouseX === null || mouseY === null) {
        dotsRef.current.forEach((d) => {
          d.el.style.transform = 'translate(0, 0)';
        });
        return;
      }
      dotsRef.current.forEach((d) => {
        const dx = mouseX - d.cx;
        const dy = mouseY - d.cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < ATTRACT_RADIUS && dist > 0) {
          const t = 1 - dist / ATTRACT_RADIUS;
          const move = MAX_MOVE * t * t;
          const ox = (dx / dist) * move;
          const oy = (dy / dist) * move;
          d.el.style.transform = `translate(${ox}px, ${oy}px)`;
        } else {
          d.el.style.transform = 'translate(0, 0)';
        }
      });
    }

    function onMouseMove(e: Event) {
      const me = e as MouseEvent;
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      mouseRef.current = {
        x: me.clientX - rect.left,
        y: me.clientY - rect.top,
      };
      if (rafRef.current === null) rafRef.current = requestAnimationFrame(updateDots);
    }

    function onMouseLeave() {
      mouseRef.current = { x: null, y: null };
      if (rafRef.current === null) rafRef.current = requestAnimationFrame(updateDots);
    }

    createDots();
    const firstView = container.closest('.p-firstView');
    if (firstView) {
      firstView.addEventListener('mousemove', onMouseMove, { passive: true });
      firstView.addEventListener('mouseleave', onMouseLeave);
    }
    const onResize = () => createDots();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      if (firstView) {
        firstView.removeEventListener('mousemove', onMouseMove);
        firstView.removeEventListener('mouseleave', onMouseLeave);
      }
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <div ref={containerRef} className="p-firstView__dots" id="js-firstView-dots" aria-hidden="true" />;
}
