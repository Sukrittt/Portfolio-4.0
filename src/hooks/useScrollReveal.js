import { useEffect, useState } from 'react';

export function useScrollReveal() {
  const [revealedIds, setRevealedIds] = useState(() => new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-reveal-id');
            setRevealedIds((prev) => new Set(prev).add(id));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll('[data-reveal-id]').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const reveal = (id, delay = 0) => ({
    opacity: revealedIds.has(id) ? 1 : 0,
    transform: revealedIds.has(id) ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity .8s cubic-bezier(.16,1,.3,1) ${delay}s, transform .8s cubic-bezier(.16,1,.3,1) ${delay}s`,
  });

  return { revealedIds, reveal };
}
