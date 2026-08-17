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

export default function Hero() {
  return (
    <section className="relative flex min-h-[70vh] items-center md:min-h-[85vh]" aria-label="Hero">
      {/* Background Image */}
      <Image
        src="/images/hero-family.jpg"
        alt="Happy family smiling together at Dante Gonzales Orthodontics"
        fill
        sizes="100vw"
        preload
        style={{ objectFit: "cover" }}
        className="pointer-events-none"
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, hsla(215,50%,15%,0.85) 0%, hsla(215,50%,15%,0.55) 50%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[var(--container-max)] px-[var(--section-pad-x)] py-16 md:py-24">
        <div className="max-w-[600px]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Dublin &amp; Tracy, California
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Confident Smiles
            <br />
            Start Here.
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-white/80 sm:text-lg">
            Personalized braces and Invisalign care for children, teens, and
            adults in Dublin and Tracy.
          </p>

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
    </section>
  );
}
