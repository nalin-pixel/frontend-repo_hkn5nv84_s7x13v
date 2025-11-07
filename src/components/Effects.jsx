import { useEffect } from 'react';

// Adds subtle parallax on scroll for elements with data-parallax attribute
export default function Effects() {
  useEffect(() => {
    const handler = () => {
      const scrolled = window.scrollY;
      document.querySelectorAll('[data-parallax]')?.forEach((el) => {
        const depth = Number(el.getAttribute('data-parallax')) || 20;
        const translate = Math.min(60, scrolled / depth);
        el.style.transform = `translateY(${translate}px)`;
      });
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return null;
}
