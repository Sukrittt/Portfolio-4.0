import { useEffect } from 'react';

export function useMagnetic(isTouch) {
  useEffect(() => {
    if (isTouch) return;

    const magnets = Array.from(document.querySelectorAll('[data-magnetic]'));
    const handlers = magnets.map((el) => {
      const move = (e) => {
        const r = el.getBoundingClientRect();
        const mx = e.clientX - (r.left + r.width / 2);
        const my = e.clientY - (r.top + r.height / 2);
        el.style.transform = `translate(${mx * 0.35}px, ${my * 0.35}px)`;
      };
      const leave = () => {
        el.style.transform = 'translate(0,0)';
      };
      el.addEventListener('mousemove', move);
      el.addEventListener('mouseleave', leave);
      return { el, move, leave };
    });

    return () => {
      handlers.forEach(({ el, move, leave }) => {
        el.removeEventListener('mousemove', move);
        el.removeEventListener('mouseleave', leave);
      });
    };
  }, [isTouch]);
}
