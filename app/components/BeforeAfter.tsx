import { EXTERNAL_LINKS } from "@/app/data/site-data";

export default function BeforeAfter() {
  return (
    <section
      id="before-afters"
      className="bg-white"
      style={{ padding: "var(--section-pad-y) var(--section-pad-x)" }}
      aria-labelledby="ba-heading"
    >
      <div className="mx-auto max-w-[var(--container-max)]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
            Before &amp; Afters
          </p>
          <h2
            id="ba-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-navy md:text-4xl"
          >
            Transforming Smiles, Changing Lives
          </h2>
          <p className="mt-3 text-text-body">
            As a Diamond Invisalign Provider in Dublin and Tracy, Dr. Gonzales
            has helped countless patients achieve their dream smiles with braces
            and clear aligners.
          </p>
        </div>

        {/* Placeholder — real B&A assets live on the PHP site */}
        <div className="mx-auto mt-10 max-w-2xl rounded-none border border-dashed border-border bg-offwhite p-12 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-none bg-teal/10">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-teal" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
          <p className="text-sm font-medium text-text-dark">
            Before &amp; after gallery photos are being migrated.
          </p>
          <p className="mt-1 text-sm text-text-muted">
            In the meantime, view our full gallery on our current site.
          </p>
        </div>

        <div className="mt-8 text-center">
          <a
            href={EXTERNAL_LINKS.beforeAfter}
            className="inline-flex items-center gap-1 text-sm font-semibold text-teal transition-colors hover:underline"
          >
            View All Transformations →
          </a>
        </div>
      </div>
    </section>
  );
}
