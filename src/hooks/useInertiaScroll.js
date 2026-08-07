import { useEffect, useRef } from 'react';

export function useInertiaScroll(isTouch) {
  const scrollTargetRef = useRef(0);

  useEffect(() => {
    scrollTargetRef.current = window.scrollY;
    if (isTouch) return;

    let lastLerpY = window.scrollY;

    const onWheel = (e) => {
      e.preventDefault();
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollTargetRef.current = Math.max(0, Math.min(max, scrollTargetRef.current + e.deltaY));
    };
    window.addEventListener('wheel', onWheel, { passive: false });

    const onScroll = () => {
      if (Math.abs(window.scrollY - lastLerpY) > 1) scrollTargetRef.current = window.scrollY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    let raf;
    const tick = () => {
      const current = window.scrollY;
      const diff = scrollTargetRef.current - current;
      if (Math.abs(diff) > 0.5) {
        window.scrollTo(0, current + diff * 0.14);
        lastLerpY = window.scrollY;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [isTouch]);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    if (isTouch) {
      window.scrollTo({ top, behavior: 'smooth' });
    } else {
      scrollTargetRef.current = top;
    }
  };

  return { scrollToId };
}
