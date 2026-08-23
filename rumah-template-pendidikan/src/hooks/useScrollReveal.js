import { useEffect, useRef } from 'react';

/**
 * useScrollReveal — Robust Progressive Enhancement
 *
 * PRINSIP KEAMANAN:
 * - Tanpa JS: konten visible (CSS default state = visible)
 * - Saat hook mount: tambah .js-reveal-ready ke <html> → aktifkan CSS animation
 * - Observer menemukan semua [class*="reveal-"] di dalam ref
 * - Elemen yang sudah di-viewport saat load → langsung revealed
 * - Fallback timeout: jika observer belum trigger setelah 2s → force reveal semua
 * - disconnect setelah semua revealed (once mode)
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    // Respect user's motion preference — skip animation entirely
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Step 1: Tandai halaman siap — aktifkan CSS animation state
    document.documentElement.classList.add('js-reveal-ready');

    const container = ref.current;
    if (!container) return;

    const elements = Array.from(container.querySelectorAll('[class*="reveal-"]'));
    if (elements.length === 0) return;

    // Track berapa element sudah revealed untuk disconnect
    let revealedCount = 0;
    const total = elements.length;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
            revealedCount++;
            // Disconnect jika semua sudah revealed
            if (revealedCount >= total) {
              observer.disconnect();
            }
          }
        });
      },
      {
        // rootMargin 0px: elemen yang sudah di-viewport saat mount langsung fire
        threshold: options.threshold || 0.05,
        rootMargin: options.rootMargin || '0px 0px -30px 0px',
      }
    );

    elements.forEach(el => observer.observe(el));

    // Safety fallback: jika setelah 2.5s masih ada yang belum revealed → force reveal
    // Mencegah konten blank akibat observer tidak trigger (e.g. refresh di tengah halaman)
    const fallbackTimer = setTimeout(() => {
      elements.forEach(el => {
        if (!el.classList.contains('is-revealed')) {
          el.classList.add('is-revealed');
        }
      });
      observer.disconnect();
    }, 2500);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}
