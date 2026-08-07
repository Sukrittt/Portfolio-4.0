import { useEffect, useRef, useState } from 'react';

export function useCustomCursor(isTouch) {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const previewRef = useRef(null);
  const [cursorLabel, setCursorLabel] = useState(null);

  useEffect(() => {
    if (isTouch) return;

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: mouse.x, y: mouse.y };
    let hoverEl = null;

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%,-50%)`;
      }
      if (previewRef.current) {
        previewRef.current.style.transform = `translate3d(${e.clientX + 26}px, ${e.clientY + 26}px, 0)`;
      }
    };
    window.addEventListener('mousemove', onMouseMove);

    const onOver = (e) => {
      const el = e.target.closest('[data-cursor]');
      if (el && el !== hoverEl) {
        hoverEl = el;
        setCursorLabel(el.getAttribute('data-cursor'));
      } else if (!el && hoverEl) {
        hoverEl = null;
        setCursorLabel(null);
      }
    };
    window.addEventListener('mouseover', onOver);

    let raf;
    const tick = () => {
      ring.x += (mouse.x - ring.x) * 0.18;
      ring.y += (mouse.y - ring.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.left = ring.x + 'px';
        ringRef.current.style.top = ring.y + 'px';
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(raf);
    };
  }, [isTouch]);

  return { dotRef, ringRef, previewRef, cursorLabel };
}
