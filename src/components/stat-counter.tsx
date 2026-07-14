"use client";

import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  countTo: number;
  decimals?: number;
  prefix?: string;
  suffixAccent?: string;
  label: string;
}

function formatValue(value: number, decimals: number) {
  return value.toFixed(decimals);
}

export function StatCounter({ countTo, decimals = 0, prefix = "", suffixAccent, label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [display, setDisplay] = useState(countTo);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setDisplay(countTo);
      return;
    }

    setDisplay(0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const duration = 1400;
            const start = performance.now();
            const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              setDisplay(countTo * easeOutExpo(progress));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countTo]);

  return (
    <div className="stat" ref={ref}>
      <div className="num">
        {prefix}
        {formatValue(display, decimals)}
        {suffixAccent && <span className="accent">{suffixAccent}</span>}
      </div>
      <div className="label">{label}</div>
    </div>
  );
}
