"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export interface HeroSlide {
  tag: string;
  icon: React.ReactNode;
  title: React.ReactNode;
  lead: string;
  image: string;
}

interface HeroCarouselProps {
  slides: HeroSlide[];
  ctas: React.ReactNode;
}

export function HeroCarousel({ slides, ctas }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (slides.length <= 1) return;
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [slides.length, current]);

  const goTo = (i: number) => setCurrent(i);

  return (
    <section className="hero">
      <div className="hero-media">
        <Image
          key={current}
          src={slides[current].image}
          alt=""
          fill
          priority={current === 0}
          sizes="100vw"
        />
      </div>
      <div className="bolt-glow"></div>
      <div className="container hero-inner">
        <div className="hero-slides">
          {slides.map((slide, i) => (
            <div key={i} className={`hero-slide${i === current ? " active" : ""}`}>
              <span className="hero-tag">
                {slide.icon} {slide.tag}
              </span>
              <h1>{slide.title}</h1>
              <p className="lead">{slide.lead}</p>
            </div>
          ))}
        </div>

        {ctas}

        {slides.length > 1 && (
          <div className="hero-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Ir a diapositiva ${i + 1}`}
                className={i === current ? "active" : ""}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
