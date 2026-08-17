import { PRACTICE, EXTERNAL_LINKS } from "@/app/data/site-data";

const resources = [
  {
    title: "30-Second Smile Quiz",
    description:
      "Find out if you're a candidate for Invisalign or braces in just 30 seconds.",
    href: EXTERNAL_LINKS.smileQuiz,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
        <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    title: "Top 10 Things to Know",
    description:
      "Dr. Gonzales's free guide to choosing the right orthodontist for you and your family.",
    href: PRACTICE.top10PdfUrl,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    title: "Setting Them Straight",
    description:
      "Dr. Gonzales's book on orthodontics — the fact-based guide to a spectacular smile.",
    href: PRACTICE.bookAmazonUrl,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
];

export default function Resources() {
  return (
    <section
      className="bg-offwhite"
      style={{ padding: "var(--section-pad-y) var(--section-pad-x)" }}
      aria-labelledby="resources-heading"
    >
      <div className="mx-auto max-w-[var(--container-max)]">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
            Resources
          </p>
          <h2
            id="resources-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-navy md:text-4xl"
          >
            Helpful Resources
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {resources.map((r) => (
            <a
              key={r.title}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-none border border-border bg-white p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-none bg-teal/10">
                {r.icon}
              </div>
              <h3 className="mt-4 font-semibold text-navy">{r.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-text-body">
                {r.description}
              </p>
              <span className="mt-3 inline-block text-sm font-medium text-teal transition-colors group-hover:underline">
                View →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
