import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    // Observe all .reveal elements inside the ref'd container
    const revealEls = el.querySelectorAll('.reveal');
    revealEls.forEach((el) => observer.observe(el));

    // Also observe the root element itself if it has .reveal
    if (el.classList.contains('reveal')) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
}
