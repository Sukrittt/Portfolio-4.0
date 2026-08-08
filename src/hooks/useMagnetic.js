import { useEffect } from 'react';

export function useMagnetic(isTouch) {
  useEffect(() => {
    if (isTouch) return;

    const magnets = Array.from(document.querySelectorAll('[data-magnetic]'));
    const handlers = magnets.map((el) => {
      let raf = null;
      const move = (e) => {
        if (raf) {
          cancelAnimationFrame(raf);
          raf = null;
        }
        const r = el.getBoundingClientRect();
        const mx = e.clientX - (r.left + r.width / 2);
        const my = e.clientY - (r.top + r.height / 2);
        el.style.transform = `translate(${mx * 0.35}px, ${my * 0.35}px)`;
      };
      const leave = () => {
        if (raf) return;
        const start = performance.now();
        const m = el.style.transform.match(/-?[\d.]+/g);
        const fromX = m ? parseFloat(m[0]) : 0;
        const fromY = m ? parseFloat(m[1]) : 0;
        const frame = (now) => {
          const t = Math.min((now - start) / 450, 1);
          const ease = 1 - Math.pow(1 - t, 3); // easeOutCubic
          el.style.transform = `translate(${fromX * (1 - ease)}px, ${fromY * (1 - ease)}px)`;
          raf = t < 1 ? requestAnimationFrame(frame) : null;
        };
        raf = requestAnimationFrame(frame);
      };
      el.addEventListener('mousemove', move);
      el.addEventListener('mouseleave', leave);
      return { el, move, leave, cancel: () => raf && cancelAnimationFrame(raf) };
    });

    return () => {
      handlers.forEach(({ el, move, leave, cancel }) => {
        cancel();
        el.removeEventListener('mousemove', move);
        el.removeEventListener('mouseleave', leave);
      });
    };
  }, [isTouch]);
}
