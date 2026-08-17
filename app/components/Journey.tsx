import { JOURNEY_STEPS, EXTERNAL_LINKS } from "@/app/data/site-data";

export default function Journey() {
  return (
    <section
      className="bg-navy"
      style={{ padding: "var(--section-pad-y) var(--section-pad-x)" }}
      aria-labelledby="journey-heading"
    >
      <div className="mx-auto max-w-[var(--container-max)]">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Your Smile Journey
          </p>
          <h2
            id="journey-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            Three Simple Steps to Your New Smile
          </h2>
        </div>

        {/* Steps */}
        <div className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {/* Connecting line (desktop only) */}
          <div
            className="absolute left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] top-8 hidden h-px bg-teal/30 md:block"
            aria-hidden="true"
          />

          {JOURNEY_STEPS.map((step) => (
            <div key={step.step} className="relative flex flex-col items-center text-center">
              {/* Number Circle */}
              <div className="flex h-16 w-16 items-center justify-center rounded-none border-2 border-teal bg-navy text-2xl font-bold text-teal">
                {step.step}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a
            href={EXTERNAL_LINKS.appointment}
            className="inline-flex rounded-none bg-gold px-8 py-3.5 text-sm font-semibold text-navy transition-colors duration-200 hover:bg-gold-hover sm:text-base"
          >
            Book Your Free Assessment
          </a>
        </div>
      </div>
    </section>
  );
}
