"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS, LOCATIONS, EXTERNAL_LINKS } from "@/app/data/site-data";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md"
          : "bg-transparent"
      }`}
      role="banner"
    >
      {/* ── Main Bar ─────────────────────────────────────── */}
      <div className="mx-auto flex max-w-[var(--container-max)] items-center justify-between px-[var(--section-pad-x)] py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0" aria-label="Dante Gonzales Orthodontics — Home">
          <img
            src="/images/logo/logo-by-drdantegonzales.webp"
            alt="Dante Gonzales Orthodontics"
            className="h-10 w-auto object-contain rounded-md bg-white px-2 py-1 sm:h-12"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                scrolled
                  ? "text-navy/80 hover:text-navy"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href={EXTERNAL_LINKS.appointment}
          className="hidden rounded-none bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition-colors duration-200 hover:bg-gold-hover lg:inline-flex"
        >
          Book a Consultation
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          className="flex flex-col gap-1.5 p-2 lg:hidden"
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
        >
          <span className={`block h-0.5 w-6 transition-colors duration-300 ${scrolled ? "bg-navy" : "bg-white"}`} />
          <span className={`block h-0.5 w-6 transition-colors duration-300 ${scrolled ? "bg-navy" : "bg-white"}`} />
          <span className={`block h-0.5 w-6 transition-colors duration-300 ${scrolled ? "bg-navy" : "bg-white"}`} />
        </button>
      </div>

      {/* ── Contact Strip (desktop) ──────────────────────── */}
      <div className={`hidden border-t lg:block transition-colors duration-300 ${
        scrolled ? "border-navy/10" : "border-white/15"
      }`}>
        <div className={`mx-auto flex max-w-[var(--container-max)] items-center justify-center gap-8 px-[var(--section-pad-x)] py-1.5 text-xs transition-colors duration-300 ${
          scrolled ? "text-navy/70" : "text-white/65"
        }`}>
          {LOCATIONS.map((loc) => (
            <a
              key={loc.id}
              href={`tel:${loc.phone}`}
              className={`transition-colors ${scrolled ? "hover:text-navy" : "hover:text-white"}`}
            >
              {loc.city}: {loc.phone}
            </a>
          ))}
        </div>
      </div>

      {/* ── Mobile Menu Overlay ──────────────────── */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[#f9f9f9] lg:hidden">
          {/* Close */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 text-navy"
              aria-label="Close navigation menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-1 flex-col items-center justify-center gap-6" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-semibold text-navy/90 transition-colors hover:text-navy"
              >
                {link.label}
              </a>
            ))}
            <a
              href={EXTERNAL_LINKS.appointment}
              className="mt-4 rounded-none bg-gold px-8 py-3.5 text-lg font-semibold text-navy transition-colors hover:bg-gold-hover"
            >
              Book a Consultation
            </a>
          </nav>

          {/* Phone Numbers */}
          <div className="flex flex-col items-center gap-2 pb-8 text-sm text-navy/70">
            {LOCATIONS.map((loc) => (
              <a key={loc.id} href={`tel:${loc.phone}`} className="hover:text-navy">
                {loc.city}: {loc.phone}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
