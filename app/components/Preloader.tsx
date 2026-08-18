"use client";

import { useEffect, useState, useRef, useCallback } from "react";

/* ─────────────────────────────────────────────────────────
   Premium Light Preloader
   
   Visual concept: A warm ivory field with a softly rotating
   abstract diamond form, refined percentage counter, and
   delicate progress line. On completion the entire surface
   expands outward via a circular clip-path reveal, leaving
   no flash or layout shift.
   
   Timing budget ≈ 3.0s total  (adjustable via DURATION_MS)
   ───────────────────────────────────────────────────────── */

const DURATION_MS  = 3000;   // total preloader duration
const EXIT_MS      = 1200;   // exit animation duration
const TICK_MS      = 30;     // counter refresh interval

export default function Preloader() {
  const [progress, setProgress]   = useState(0);
  const [phase, setPhase]         = useState<"loading" | "complete" | "exiting" | "done">("loading");
  const rafRef                    = useRef<number | null>(null);
  const startRef                  = useRef<number>(0);

  /* ── Smooth eased progress counter ────────────────────── */
  const tick = useCallback(() => {
    const elapsed = Date.now() - startRef.current;
    const t       = Math.min(elapsed / DURATION_MS, 1);

    // Cubic ease-in-out for natural feel
    const eased = t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const value = Math.round(eased * 100);
    setProgress(value);

    if (t < 1) {
      rafRef.current = requestAnimationFrame(tick);
    } else {
      setProgress(100);
      setPhase("complete");
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    startRef.current = Date.now();
    rafRef.current   = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      document.body.style.overflow = "";
    };
  }, [tick]);

  /* ── Phase transitions ────────────────────────────────── */
  useEffect(() => {
    if (phase === "complete") {
      // Small breath before exit
      const t1 = setTimeout(() => setPhase("exiting"), 350);
      return () => clearTimeout(t1);
    }
    if (phase === "exiting") {
      const t2 = setTimeout(() => {
        setPhase("done");
        document.body.style.overflow = "";
      }, EXIT_MS);
      return () => clearTimeout(t2);
    }
  }, [phase]);

  if (phase === "done") return null;

  const isExiting  = phase === "exiting";
  const isComplete = phase === "complete" || isExiting;

  /* ── Formatted percentage ─────────────────────────────── */
  const pctStr = String(progress).padStart(3, "\u2007"); // figure-space pad

  return (
    <div
      aria-live="polite"
      aria-label={`Loading: ${progress}%`}
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      className="preloader"
      style={{
        /* Circular clip-path reveal on exit */
        clipPath: isExiting
          ? "circle(150% at 50% 50%)"
          : "circle(150% at 50% 50%)",
        opacity: isExiting ? 0 : 1,
        transform: isExiting ? "scale(1.04)" : "scale(1)",
        transition: isExiting
          ? `opacity ${EXIT_MS}ms cubic-bezier(0.7,0,0.3,1), transform ${EXIT_MS}ms cubic-bezier(0.7,0,0.3,1)`
          : "none",
        pointerEvents: isExiting ? "none" : "auto",
      }}
    >
      {/* ── Ambient light effects ──────────────────────── */}
      <div className="preloader__glow preloader__glow--warm" aria-hidden="true" />
      <div className="preloader__glow preloader__glow--cool" aria-hidden="true" />

      {/* ── Central composition ────────────────────────── */}
      <div className="preloader__center">

        {/* Logo icon */}
        <div className="preloader__shape-wrap" aria-hidden="true">
          <div className={`preloader__icon ${isComplete ? "preloader__icon--done" : ""}`}>
            <img
              src="/icon.png"
              alt=""
              className="preloader__icon-img"
              width={72}
              height={72}
              draggable={false}
            />
          </div>
          {/* Soft ring */}
          <div className={`preloader__ring ${isComplete ? "preloader__ring--done" : ""}`} />
        </div>

        {/* Percentage */}
        <div className={`preloader__pct ${isComplete ? "preloader__pct--done" : ""}`}>
          <span className="preloader__pct-num">{pctStr}</span>
        </div>

        {/* Brand name */}
        <div className="preloader__brand">
          <span className={`preloader__brand-line preloader__brand-line--1 ${isComplete ? "preloader__brand-line--done" : ""}`}>
            Dante Gonzales
          </span>
          <span className={`preloader__brand-line preloader__brand-line--2 ${isComplete ? "preloader__brand-line--done" : ""}`}>
            Orthodontics
          </span>
        </div>

        {/* Progress line */}
        <div className="preloader__track" aria-hidden="true">
          <div
            className="preloader__fill"
            style={{ transform: `scaleX(${progress / 100})` }}
          />
        </div>
      </div>
    </div>
  );
}
