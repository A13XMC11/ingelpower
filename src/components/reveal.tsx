"use client";

import { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  id?: string;
}

export function Reveal({ children, delay = 0, className = "", id }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      setIsDone(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleTransitionEnd = () => {
    if (isVisible) setIsDone(true);
  };

  const revealClass = isDone ? "" : `reveal${isVisible ? " is-visible" : ""}`;

  return (
    <div
      ref={ref}
      id={id}
      className={`${revealClass} ${className}`.trim()}
      style={{ "--reveal-delay": `${Math.min(delay, 5) * 90}ms` } as React.CSSProperties}
      onTransitionEnd={handleTransitionEnd}
    >
      {children}
    </div>
  );
}
