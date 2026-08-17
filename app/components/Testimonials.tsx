"use client";

import { useState, useCallback } from "react";
import { TESTIMONIALS, RATING } from "@/app/data/site-data";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const count = TESTIMONIALS.length;

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % count);
  }, [count]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + count) % count);
  }, [count]);

  // Show 1 card on mobile, 2 on larger screens
  const visibleCards = () => {
    const cards = [TESTIMONIALS[current]];
    if (count > 1) {
      cards.push(TESTIMONIALS[(current + 1) % count]);
    }
    return cards;
  };

  return (
    <section
      className="bg-offwhite"
      style={{ padding: "var(--section-pad-y) var(--section-pad-x)" }}
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-[var(--container-max)]">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
            Patient Reviews
          </p>
          <h2
            id="testimonials-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-navy md:text-4xl"
          >
            What Our Patients Say
          </h2>

          {/* Rating */}
          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="text-3xl font-bold text-navy">{RATING.value}</span>
            <div className="flex gap-0.5 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-lg">★</span>
              ))}
            </div>
            <span className="text-sm text-text-muted">
              Based on {RATING.count} reviews
            </span>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative mt-10">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Mobile: show 1, Desktop: show 2 */}
            {visibleCards().map((t, i) => (
              <div
                key={`${t.author}-${i}`}
                className={`rounded-none border border-border bg-white p-8 shadow-sm ${
                  i === 1 ? "hidden md:block" : ""
                }`}
              >
                <p className="text-base italic leading-relaxed text-text-body">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-4 flex gap-0.5 text-gold">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j} className="text-sm">★</span>
                  ))}
                </div>
                <p className="mt-3 text-sm font-semibold text-navy">
                  {t.author}
                </p>
              </div>
            ))}
          </div>

          {/* Arrow Buttons */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-none border border-border bg-white shadow-sm transition-colors hover:bg-offwhite"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 w-2 rounded-none transition-colors ${
                    i === current ? "bg-teal" : "bg-border"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-none border border-border bg-white shadow-sm transition-colors hover:bg-offwhite"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Social Proof Badges */}
        <p className="mt-8 text-center text-xs text-text-muted">
          Diamond Invisalign Provider · Board-Certified Orthodontist ·
          Sharecare Advisory Board Member
        </p>
      </div>
    </section>
  );
}
