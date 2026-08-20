"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { EXTERNAL_LINKS, TRUST_SIGNALS } from "@/app/data/site-data";

const trustIcons: Record<string, React.ReactNode> = {
  smile: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  ),
  map: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  wallet: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M16 12h.01" />
      <path d="M2 10h20" />
    </svg>
  ),
};

const slides = [
  {
    image: "https://drdantegonzales.com/assets/img/banner/slide1.jpg",
    title: "Budget Friendly Braces",
    description: "We can customize a financial plan that will fit with your budget"
  },
  {
    image: "https://drdantegonzales.com/assets/img/banner/slide2.jpg",
    title: "Safeguarding Your Health",
    description: "Superior sterilization standards for your peace of mind"
  },
  {
    image: "https://drdantegonzales.com/assets/img/banner/banner1.jpg",
    title: "Over 12,000 Smiles Transformed",
    description: "Serving the Tri-Valley area since 1998"
  },
  {
    image: "https://drdantegonzales.com/assets/img/banner/slide4.jpg",
    title: "Elevating Care Through Technology",
    description: "Advanced orthodontic technology for optimal results"
  },
  {
    image: "https://drdantegonzales.com/assets/img/banner/slide3.jpg",
    title: "Your Smile, Guaranteed",
    description: "Our lifetime guarantee of perfection."
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const goNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const goPrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section
      className="relative h-dvh min-h-[600px] overflow-hidden bg-navy"
      aria-label="Hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ── Background Images ─────────────────────────────── */}
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={currentSlide !== index}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            sizes="100vw"
            priority={index === 0}
            quality={90}
            style={{
              objectFit: "cover",
              objectPosition: "center center",
            }}
            className="pointer-events-none"
          />
        </div>
      ))}

      {/* ── Top gradient for nav readability ───────────────── */}
      <div
        className="absolute inset-x-0 top-0 z-[1] h-32"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to bottom, hsla(215, 50%, 12%, 0.5) 0%, transparent 100%)",
        }}
      />

      {/* ── Gradient Overlay ───────────────────────────────── */}
      <div
        className="absolute inset-0 z-[1]"
        aria-hidden="true"
        style={{
          background: `
            linear-gradient(
              to right,
              hsla(215, 50%, 12%, 0.70) 0%,
              hsla(215, 50%, 12%, 0.45) 35%,
              hsla(215, 50%, 12%, 0.15) 60%,
              transparent 80%
            )
          `,
        }}
      />
      {/* Subtle bottom gradient for readability of indicators */}
      <div
        className="absolute inset-x-0 bottom-0 z-[1] h-32"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to top, hsla(215, 50%, 12%, 0.4) 0%, transparent 100%)",
        }}
      />

      {/* ── Hero Content ──────────────────────────────────── */}
      <div className="relative z-10 flex h-full items-center pt-24">
        <div className="mx-auto w-full max-w-[var(--container-max)] px-[var(--section-pad-x)]">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Dublin &amp; Tracy, California
            </p>

            {/* Slide Text */}
            <div className="mt-4 grid">
              {slides.map((slide, index) => (
                <div
                  key={slide.title}
                  className={`col-start-1 row-start-1 transition-all duration-700 ease-in-out ${
                    currentSlide === index
                      ? "translate-y-0 opacity-100 z-10"
                      : "translate-y-4 opacity-0 pointer-events-none z-0"
                  }`}
                >
                  <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4rem] drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-white/90 sm:text-lg drop-shadow-md">
                    {slide.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={EXTERNAL_LINKS.appointment}
                className="inline-flex rounded-none bg-gold px-7 py-3.5 text-sm font-semibold text-navy transition-colors duration-200 hover:bg-gold-hover sm:text-base"
              >
                Book Your Free Smile Assessment
              </a>
              <a
                href={EXTERNAL_LINKS.smileQuiz}
                className="inline-flex rounded-none border-2 border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:border-white/60 hover:bg-white/10 sm:text-base"
              >
                Take the 30-Second Smile Quiz
              </a>
            </div>

            {/* Trust Signals */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              {TRUST_SIGNALS.map((signal) => (
                <div key={signal.label} className="flex items-center gap-2 text-sm text-white/70">
                  <span className="opacity-70">{trustIcons[signal.icon]}</span>
                  {signal.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Slide Navigation ──────────────────────────────── */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="mx-auto flex w-full max-w-[var(--container-max)] items-center justify-between px-[var(--section-pad-x)]">
          {/* Indicators */}
          <div className="flex items-center gap-3">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                className={`group relative h-1.5 rounded-full transition-all duration-500 ${
                  currentSlide === index
                    ? "w-10 bg-gold"
                    : "w-4 bg-white/30 hover:bg-white/50"
                }`}
              >
                {currentSlide === index && !isPaused && (
                  <span
                    className="absolute inset-0 rounded-full bg-gold/50 origin-left animate-[slideProgress_5s_linear]"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Prev / Next Arrows */}
          <div className="hidden items-center gap-2 sm:flex">
            <button
              onClick={goPrev}
              aria-label="Previous slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all duration-200 hover:border-white/40 hover:text-white hover:bg-white/10"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={goNext}
              aria-label="Next slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all duration-200 hover:border-white/40 hover:text-white hover:bg-white/10"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
