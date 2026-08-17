import Image from "next/image";
import { DIFFERENTIATORS } from "@/app/data/site-data";

const icons: Record<string, React.ReactNode> = {
  experience: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  technology: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="2" x2="9" y2="4" /><line x1="15" y1="2" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="22" /><line x1="15" y1="20" x2="15" y2="22" />
      <line x1="2" y1="9" x2="4" y2="9" /><line x1="2" y1="15" x2="4" y2="15" />
      <line x1="20" y1="9" x2="22" y2="9" /><line x1="20" y1="15" x2="22" y2="15" />
    </svg>
  ),
  guarantee: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  schedule: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  payment: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="4" width="22" height="16" rx="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
    </svg>
  ),
  locations: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
};

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="bg-offwhite"
      style={{ padding: "var(--section-pad-y) var(--section-pad-x)" }}
      aria-labelledby="why-heading"
    >
      <div className="mx-auto grid max-w-[var(--container-max)] items-center gap-12 lg:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-none">
          <Image
            src="/images/doctor-team.jpg"
            alt="Dr. Gonzales and the orthodontic care team"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Content */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
            Why Choose Us
          </p>
          <h2
            id="why-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-navy md:text-4xl"
          >
            Experienced Care You Can Trust
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {DIFFERENTIATORS.map((d) => (
              <a
                key={d.title}
                href={d.href}
                className="group flex gap-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-none bg-teal/10 text-teal transition-colors group-hover:bg-teal/20">
                  {icons[d.icon]}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-navy">{d.title}</h3>
                  <p className="mt-0.5 text-xs leading-relaxed text-text-body">
                    {d.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
